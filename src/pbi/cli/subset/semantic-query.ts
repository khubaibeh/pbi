import { Console, Effect } from "effect";
import { Argument, Command } from "effect/cli";

import { latest } from "#pbi/schemas/semantic-query";

import { checkFiles, decodeJson, parseJson } from "../shared/index.ts";

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
	},
	Effect.fn("cli.subset.semanticQuery")(function* ({ files }) {
		const { passed, logs } = yield* checkFiles(files, check, (_checked, file) => `[SUCCESS] ${file}`);

		yield* Effect.forEach(
			logs.filter((log) => log.level !== "error"),
			(log) => Console.log(log.message),
			{ discard: true },
		);

		const errors = logs.filter((log) => log.level === "error").map((log) => log.message);

		if (errors.length > 0) yield* Console.error(errors.join("\n\n"));

		if (!passed) process.exitCode = 1;
	}),
).pipe(Command.withDescription("Check files against the semantic-query 1.4 schema"));
