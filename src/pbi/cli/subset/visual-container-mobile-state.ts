import { Effect } from "effect";
import { Argument, Command, Flag } from "effect/cli";

import { latest } from "#pbi/schemas/visual-container-mobile-state";

import { checkFiles, decodeJson, logResults, parseJson } from "../shared/index.ts";

const check = Effect.fn("cli.subset.visualContainerMobileState.check")(function* (
	text: string,
	file: string,
) {
	const json = yield* parseJson(text, file);

	const decoded = yield* decodeJson(latest.MobileState, json, file);

	return {
		name: "MobileState",
		value: decoded,
	};
});

export const visualContainerMobileState = Command.make(
	"visual-container-mobile-state",
	{
		files: Argument.String("files").pipe(
			Argument.withDescription("Visual container mobile state JSON files to check"),
			Argument.variadic({ min: 1 }),
		),
		json: Flag.Boolean("json").pipe(Flag.withDescription("Print results as JSON"), Flag.withDefault(false)),
	},
	Effect.fn("cli.subset.visualContainerMobileState")(function* ({ files, json }) {
		const results = yield* checkFiles(files, check);
		yield* logResults(results, { json });
	}),
).pipe(Command.withDescription("Check files against the visual-container-mobile-state schema"));
