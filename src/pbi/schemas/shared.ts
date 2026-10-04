import { Effect, type SchemaAST, SchemaIssue, SchemaParser } from "effect";
import { type Codec, Struct, Unknown, declareConstructor } from "effect/Schema";

declare module "effect/Schema" {
	namespace Annotations {
		interface Augment {
			readonly fieldDescriptions?: { readonly [field: string]: string | undefined };
		}
	}
}

export const PropertyValue = Unknown.annotate({
	identifier: "Shared.PropertyValue",
	description: [
		"A formatting property value. Power BI saves it as an expression object such as",
		"{ expr: { Literal: { Value } } } or",
		"{ solid: { color: { expr } } },",
		"or as an array for text box paragraphs.",
	].join("\n"),
});

type Fields = { readonly [key: string]: Codec<unknown> };

export function describe<F extends Struct.Fields, D extends object>(
	schema: Struct<F>,
	descriptions: {
		readonly description?: string;
		readonly fields?: D & { readonly [K in keyof F]?: string } & {
			readonly [K in Exclude<keyof D, keyof F>]: never;
		};
	},
) {
	return schema.annotate({ description: descriptions.description, fieldDescriptions: descriptions.fields });
}

type Issues = readonly [SchemaIssue.Issue, ...Array<SchemaIssue.Issue>];

const kindIssues = (
	input: object,
	found: ReadonlyArray<string>,
	sharedKeys: ReadonlyArray<string>,
	options: SchemaAST.ParseOptions,
): Issues => {
	if (found.length > 1) {
		const message = `Expected exactly one kind, got ${found.join(", ")}`;

		return [new SchemaIssue.InvalidValue({ message }, input, options)];
	}

	const [first, ...rest] = Object.entries(input)
		.filter(([key]) => !sharedKeys.includes(key))
		.map(
			([key, value]) =>
				new SchemaIssue.Pointer(
					[key],
					new SchemaIssue.InvalidValue({ message: `Unknown kind: ${key}` }, value, options),
				),
		);

	if (first !== undefined) return [first, ...rest];

	return [new SchemaIssue.InvalidValue({ message: "Missing kind" }, input, options)];
};

export function oneKeyOf<S extends Fields, K extends Fields>(
	shared: S,
	kinds: K,
	descriptions?: {
		readonly description?: string;
		readonly fields?: { readonly [F in keyof S | keyof K]?: string };
	},
) {
	const keys = Object.keys(kinds);
	const members = keys.map((key) =>
		Struct({ ...shared, [key]: kinds[key] }).annotate({ fieldDescriptions: descriptions?.fields }),
	);

	const sharedKeys = Object.keys(shared);

	return declareConstructor<unknown>()(members, (codecs) => {
		const parsers = codecs.map((codec) => SchemaParser.decodeUnknownEffect(codec));

		return (input, ast, options) => {
			const fail = (issues: Issues) => Effect.fail(new SchemaIssue.Composite(ast, issues, input, options));

			if (typeof input !== "object" || input === null || Array.isArray(input)) {
				return fail([new SchemaIssue.InvalidType(ast, input, options)]);
			}

			const found = keys.filter((key) => Object.hasOwn(input, key));
			const parse = found.length === 1 ? parsers[keys.indexOf(found[0] ?? "")] : undefined;

			if (parse !== undefined) {
				return parse(input, options).pipe(
					Effect.mapError((issue) => new SchemaIssue.Composite(ast, [issue], input, options)),
				);
			}

			return fail(kindIssues(input, found, sharedKeys, options));
		};
	}).annotate({ description: descriptions?.description });
}
