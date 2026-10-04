import { Data, Effect, Predicate, SchemaAST, SchemaIssue } from "effect";
import { type Codec, decodeUnknownEffect } from "effect/Schema";
import {
	type JSONPath,
	type Node,
	type ParseError,
	findNodeAtLocation,
	parseTree,
	printParseErrorCode,
} from "jsonc-parser";

interface InvalidJsonIssue {
	readonly line: number;
	readonly column: number;
	readonly code: string;
	readonly found: string;
}

interface ParsedJson {
	readonly text: string;
	readonly value: unknown;
}

interface SchemaIssueEntry {
	readonly path: JSONPath;
	readonly identifier: string | undefined;
	readonly message: string;
	readonly description: string | undefined;
}

interface SchemaIssueLog {
	readonly line: number;
	readonly column: number;
	readonly identifier: string | undefined;
	readonly jsonPath: string;
	readonly message: string;
	readonly description: string | undefined;
}

class SchemaValidationError extends Data.TaggedError("SchemaValidationError")<{
	readonly path: string;
	readonly issues: ReadonlyArray<SchemaIssueLog>;
}> {
	get details() {
		return this.issues.map((issue) =>
			[
				`${this.path}:${issue.line}:${issue.column}`,
				issue.identifier,
				issue.jsonPath,
				issue.message,
				issue.description,
			]
				.filter((line) => line !== undefined)
				.join("\n"),
		);
	}

	override get message() {
		return this.details.join("\n\n");
	}
}

class InvalidJsonError extends Data.TaggedError("InvalidJsonError")<{
	readonly path: string;
	readonly issues: ReadonlyArray<InvalidJsonIssue>;
}> {
	get details() {
		return this.issues.map(
			(issue) => `${this.path}:${issue.line}:${issue.column}\n${issue.code}, got '${issue.found}'`,
		);
	}

	override get message() {
		return this.details.join("\n\n");
	}
}

const lineAt = (text: string, offset: number) => text.slice(0, offset).split("\n").length;

const columnAt = (text: string, offset: number) => offset - text.lastIndexOf("\n", offset - 1);

const toJsonPath = (path: ReadonlyArray<PropertyKey | { readonly key: PropertyKey }>): JSONPath =>
	path.flatMap((segment) => {
		const key = typeof segment === "object" ? segment.key : segment;

		return typeof key === "symbol" ? [] : [key];
	});

const formatLeaf = SchemaIssue.makeFormatterStandardSchemaV1();

const fieldDescriptionsOf = SchemaAST.resolveAt<{ readonly [field: string]: string | undefined }>(
	"fieldDescriptions",
);

const walkIssue = (
	issue: SchemaIssue.Issue,
	path: JSONPath,
	identifier?: string,
	fields?: { readonly [field: string]: string | undefined },
	description?: string,
): ReadonlyArray<SchemaIssueEntry> => {
	if (Predicate.isTagged(issue, "Pointer")) {
		const key = issue.path.at(-1);

		const next = typeof key === "string" ? fields?.[key] : description;

		return walkIssue(issue.issue, [...path, ...toJsonPath(issue.path)], identifier, fields, next);
	}

	if (Predicate.isTagged(issue, "Encoding"))
		return walkIssue(issue.issue, path, identifier, fields, description);

	if (
		Predicate.isTagged(issue, "Composite") ||
		(Predicate.isTagged(issue, "AnyOf") && issue.issues.length > 0)
	) {
		const inner = SchemaAST.resolveIdentifier(issue.ast) ?? identifier;

		const innerFields = fieldDescriptionsOf(issue.ast);

		const innerDescription = description ?? SchemaAST.resolveDescription(issue.ast);

		return issue.issues.flatMap((child) => walkIssue(child, path, inner, innerFields, innerDescription));
	}

	return formatLeaf(issue).issues.map((leaf) => ({
		path: [...path, ...toJsonPath(leaf.path ?? [])],
		identifier,
		message: leaf.message,
		description: description ?? ("ast" in issue ? SchemaAST.resolveDescription(issue.ast) : undefined),
	}));
};

const flattenIssue = Effect.fn("cli.shared.flattenIssue")(function* (issue: SchemaIssue.Issue) {
	return yield* Effect.sync(() => walkIssue(issue, []));
});

const formatPath = (path: JSONPath) =>
	path.length === 0
		? "<root>"
		: path
				.map((key, index) => (typeof key === "number" ? `[${key}]` : index === 0 ? key : `.${key}`))
				.join("");

const offsetOf = (tree: Node | undefined, path: JSONPath): number => {
	if (tree === undefined) return 0;

	for (let depth = path.length; depth > 0; depth--) {
		const node = findNodeAtLocation(tree, path.slice(0, depth));

		if (node !== undefined) return node.parent?.type === "property" ? node.parent.offset : node.offset;
	}

	return tree.offset;
};

const parseErrors = (text: string, cause: unknown): ReadonlyArray<InvalidJsonIssue> => {
	const errors: Array<ParseError> = [];

	parseTree(text, errors, { disallowComments: true, allowTrailingComma: false });

	if (errors.length === 0) {
		return [{ line: 1, column: 1, code: cause instanceof Error ? cause.message : String(cause), found: "" }];
	}

	return errors.map((error) => ({
		line: lineAt(text, error.offset),
		column: columnAt(text, error.offset),
		code: printParseErrorCode(error.error),
		found: text.slice(error.offset, error.offset + error.length),
	}));
};

export const parseJson = Effect.fn("cli.shared.parseJson")(function* (text: string, file: string) {
	return yield* Effect.try({
		try: (): ParsedJson => ({ text, value: JSON.parse(text) }),
		catch: (cause) => new InvalidJsonError({ path: file, issues: parseErrors(text, cause) }),
	});
});

export const decodeJson = Effect.fn("cli.shared.decodeJson")(function* <A, I>(
	schema: Codec<A, I>,
	json: ParsedJson,
	file: string,
) {
	return yield* decodeUnknownEffect(schema)(json.value, { errors: "all", reportInput: true }).pipe(
		Effect.catch((error) =>
			Effect.gen(function* () {
				const tree = parseTree(json.text);

				const entries = yield* flattenIssue(error.issue);

				const issues = entries.map((entry) => {
					const offset = offsetOf(tree, entry.path);

					return {
						line: lineAt(json.text, offset),
						column: columnAt(json.text, offset),
						identifier: entry.identifier,
						jsonPath: formatPath(entry.path),
						message: entry.message,
						description: entry.description,
					};
				});

				return yield* new SchemaValidationError({ path: file, issues });
			}),
		),
	);
});
