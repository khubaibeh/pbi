import { Effect } from "effect";
import { Argument, Command, Flag } from "effect/cli";

import { latest } from "#pbi/schemas/filter-configuration";

import { checkFiles, decodeJson, logResults, parseJson } from "../shared/index.ts";

const check = Effect.fn("cli.subset.filterConfiguration.check")(function* (text: string, file: string) {
	const json = yield* parseJson(text, file);

	const decoded = yield* decodeJson(latest.FilterConfig, json, file);

	return {
		name: "FilterConfig",
		value: decoded,
	};
});

export const filterConfiguration = Command.make(
	"filter-configuration",
	{
		files: Argument.String("files").pipe(
			Argument.withDescription("Filter configuration JSON files to check"),
			Argument.variadic({ min: 1 }),
		),
		json: Flag.Boolean("json").pipe(Flag.withDescription("Print results as JSON"), Flag.withDefault(false)),
	},
	Effect.fn("cli.subset.filterConfiguration")(function* ({ files, json }) {
		const results = yield* checkFiles(files, check);
		yield* logResults(results, { json });
	}),
).pipe(Command.withDescription("Check files against the filter-configuration schema"));
