import { Console, Effect, Schema } from "effect";
import { Argument, Command } from "effect/cli";

import { latest } from "#pbi/schemas/semantic-query";

import { JsonParseError, SchemaValidationError, checkFiles } from "../shared.ts";

const definitionOf = (value: unknown) => {
	const has = (key: string) => typeof value === "object" && value !== null && Object.hasOwn(value, key);

	if (has("Select")) return { name: "QueryDefinition", schema: latest.QueryDefinition };

	if (has("Where")) return { name: "FilterDefinition", schema: latest.FilterDefinition };

	return { name: "QueryExpressionContainer", schema: latest.QueryExpressionContainer };
};

const check = Effect.fn("cli.subset.semanticQuery.check")(function* (text: string, file: string) {
	const value = yield* Effect.try({
		try: (): unknown => JSON.parse(text),
		catch: (cause) => new JsonParseError({ path: file, cause }),
	});

	const { name, schema } = definitionOf(value);

	const decoded = yield* Schema.decodeUnknownEffect(schema)(value).pipe(
		Effect.mapError((cause) => new SchemaValidationError({ path: file, schemaName: name, cause })),
	);

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
	Effect.fn("subset.semanticQuery")(function* ({ files }) {
		const { passed, logs } = yield* checkFiles(files, check, (_checked, file) => `[SUCCESS] ${file}`);

		yield* Effect.forEach(
			logs.filter((log) => log.level !== "error"),
			(log) => Console.log(log.message),
			{ discard: true },
		);

		yield* Effect.forEach(
			logs.filter((log) => log.level === "error"),
			(log) => Console.error(log.message),
			{ discard: true },
		);

		if (!passed) process.exitCode = 1;
	}),
).pipe(Command.withDescription("Check files against the semantic-query 1.4 schema"));
