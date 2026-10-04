import { Effect } from "effect";
import { Argument, Command, Flag } from "effect/cli";

import { latest } from "#pbi/schemas/report-extension";

import { checkFiles, decodeJson, logResults, parseJson } from "../shared/index.ts";

const check = Effect.fn("cli.subset.reportExtension.check")(function* (text: string, file: string) {
	const json = yield* parseJson(text, file);

	const decoded = yield* decodeJson(latest.ReportExtension, json, file);

	return {
		name: "ReportExtension",
		value: decoded,
	};
});

export const reportExtension = Command.make(
	"report-extension",
	{
		files: Argument.String("files").pipe(
			Argument.withDescription("Report extension JSON files to check"),
			Argument.variadic({ min: 1 }),
		),
		json: Flag.Boolean("json").pipe(Flag.withDescription("Print results as JSON"), Flag.withDefault(false)),
	},
	Effect.fn("cli.subset.reportExtension")(function* ({ files, json }) {
		const results = yield* checkFiles(files, check);
		yield* logResults(results, { json });
	}),
).pipe(Command.withDescription("Check files against the report-extension schema"));
