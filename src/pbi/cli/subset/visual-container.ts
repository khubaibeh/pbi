import { Effect } from "effect";
import { Argument, Command, Flag } from "effect/cli";

import { latest } from "#pbi/schemas/visual-container";

import { checkFiles, decodeJson, logResults, parseJson } from "../shared/index.ts";

const check = Effect.fn("cli.subset.visualContainer.check")(function* (text: string, file: string) {
	const json = yield* parseJson(text, file);

	const decoded = yield* decodeJson(latest.VisualContainer, json, file);

	return {
		name: "VisualContainer",
		value: decoded,
	};
});

export const visualContainer = Command.make(
	"visual-container",
	{
		files: Argument.String("files").pipe(
			Argument.withDescription("Visual container JSON files to check"),
			Argument.variadic({ min: 1 }),
		),
		json: Flag.Boolean("json").pipe(Flag.withDescription("Print results as JSON"), Flag.withDefault(false)),
	},
	Effect.fn("cli.subset.visualContainer")(function* ({ files, json }) {
		const results = yield* checkFiles(files, check);
		yield* logResults(results, { json });
	}),
).pipe(Command.withDescription("Check files against the visual-container schema"));
