import { Data, Effect, SchemaIssue } from "effect";
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

interface SchemaIssueLog {
	readonly line: number;
	readonly jsonPath: string;
	readonly message: string;
}

class SchemaValidationError extends Data.TaggedError("SchemaValidationError")<{
	readonly path: string;
	readonly issues: ReadonlyArray<SchemaIssueLog>;
}> {
	override get message() {
		return this.issues
			.map(
				(issue) =>
					`[ERROR] SchemaValidation: ${this.path}:${issue.line}\n${issue.jsonPath}\n${issue.message}`,
			)
			.join("\n\n");
	}
}

class InvalidJsonError extends Data.TaggedError("InvalidJsonError")<{
	readonly path: string;
	readonly issues: ReadonlyArray<InvalidJsonIssue>;
}> {
	override get message() {
		return this.issues
			.map(
				(issue) =>
					`[ERROR] InvalidJsonError: ${this.path}:${issue.line}:${issue.column}\n${issue.code}, got '${issue.found}'`,
			)
			.join("\n\n");
	}
}

const lineAt = (text: string, offset: number) => text.slice(0, offset).split("\n").length;

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
		column: error.offset - text.lastIndexOf("\n", error.offset - 1),
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
	const formatIssues = SchemaIssue.makeFormatterStandardSchemaV1();

	return yield* decodeUnknownEffect(schema)(json.value).pipe(
		Effect.mapError((error) => {
			const tree = parseTree(json.text);

			const issues = formatIssues(error.issue).issues.map((issue) => {
				const path = (issue.path ?? []).flatMap((segment) => {
					const key = typeof segment === "object" ? segment.key : segment;

					return typeof key === "symbol" ? [] : [key];
				});

				return {
					line: lineAt(json.text, offsetOf(tree, path)),
					jsonPath: formatPath(path),
					message: issue.message,
				};
			});

			return new SchemaValidationError({ path: file, issues });
		}),
	);
});
