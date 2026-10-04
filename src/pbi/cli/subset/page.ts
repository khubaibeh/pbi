import { Effect } from "effect";
import { Argument, Command, Flag } from "effect/cli";

import { latest, versions } from "#pbi/schemas/page";

import { checkFiles, decodeJson, logResults, parseJson } from "../shared/index.ts";

const schemaOf = (value: unknown) => {
	const url = typeof value === "object" && value !== null && "$schema" in value ? value.$schema : undefined;

	const found = Object.entries(versions).find(
		([version]) =>
			url ===
			`https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/${version}.0/schema.json`,
	);

	return found?.[1] ?? latest;
};

const check = Effect.fn("cli.subset.page.check")(function* (text: string, file: string) {
	const json = yield* parseJson(text, file);

	const decoded = yield* decodeJson(schemaOf(json.value).Page, json, file);

	return {
		name: "Page",
		value: decoded,
	};
});

export const page = Command.make(
	"page",
	{
		files: Argument.String("files").pipe(
			Argument.withDescription("Page JSON files to check"),
			Argument.variadic({ min: 1 }),
		),
		json: Flag.Boolean("json").pipe(Flag.withDescription("Print results as JSON"), Flag.withDefault(false)),
	},
	Effect.fn("cli.subset.page")(function* ({ files, json }) {
		const results = yield* checkFiles(files, check);
		yield* logResults(results, { json });
	}),
).pipe(Command.withDescription("Check files against the page schema"));
