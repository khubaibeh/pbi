import { Effect } from "effect";
import { Argument, Command, Flag } from "effect/cli";

import { latest } from "#pbi/schemas/semantic-query";

import { checkFiles, decodeJson, logResults, parseJson } from "../shared/index.ts";

const definitionOf = (value: unknown) => {
	const has = (key: string) => typeof value === "object" && value !== null && Object.hasOwn(value, key);

	if (has("Select")) return { name: "QueryDefinition", schema: latest.QueryDefinition };

	if (has("Where")) return { name: "FilterDefinition", schema: latest.FilterDefinition };

	return { name: "QueryExpressionContainer", schema: latest.QueryExpressionContainer };
};

const check = Effect.fn("cli.subset.semanticQuery.check")(function* (text: string, file: string) {
	const json = yield* parseJson(text, file);

	const { name, schema } = definitionOf(json.value);

	const decoded = yield* decodeJson(schema, json, file);

	return {
		name,
		value: decoded,
	};
});

export const semanticQuery = Command.make(
	"semantic-query",
	{
		files: Argument.String("files").pipe(
			Argument.withDescription("Semantic query JSON files to check"),
			Argument.variadic({ min: 1 }),
		),
		json: Flag.Boolean("json").pipe(Flag.withDescription("Print results as JSON"), Flag.withDefault(false)),
	},
	Effect.fn("cli.subset.semanticQuery")(function* ({ files, json }) {
		const results = yield* checkFiles(files, check);
		yield* logResults(results, { json });
	}),
).pipe(Command.withDescription("Check files against the semantic-query schema"));
