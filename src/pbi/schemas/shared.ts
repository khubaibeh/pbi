import { Effect, SchemaIssue, SchemaParser } from "effect";
import { type Codec, Struct, declareConstructor } from "effect/Schema";

type Fields = { readonly [key: string]: Codec<unknown> };

export function oneKeyOf(shared: Fields, kinds: Fields) {
	const keys = Object.keys(kinds);
	const members = keys.map((key) => Struct({ ...shared, [key]: kinds[key] }));

	return declareConstructor<unknown>()(members, (codecs) => {
		const parsers = codecs.map((codec) => SchemaParser.decodeUnknownEffect(codec));

		return (input, _ast, options) => {
			const found = keys.filter(
				(key) => typeof input === "object" && input !== null && Object.hasOwn(input, key),
			);

			const parse = found.length === 1 ? parsers[keys.indexOf(found[0] ?? "")] : undefined;

			if (parse === undefined) {
				const message = `Expected one of: ${(found.length > 0 ? found : keys).join(", ")}`;

				return Effect.fail(new SchemaIssue.InvalidValue({ message }, input, options));
			}

			return parse(input, options);
		};
	});
}
