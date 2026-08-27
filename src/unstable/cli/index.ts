import { NodeRuntime, NodeServices } from "@effect/platform-node";
import { Argument, Command } from "effect/unstable/cli";
import { Effect } from "effect";
import { resolveArtifactsDir } from "$pbi/core/artifacts.js";
import { listPages, printPageNames } from "$pbi/unstable/pages.js";

const pbi = Command.make("pbi").pipe(
	Command.withDescription("Work with Power BI projects"),
);

const listPagesCommand = Command.make(
	"list-pages",
	{
		dir: Argument.string("dir").pipe(
			Argument.withDescription("Project directory containing the .pbip file"),
		),
	},
	Effect.fn(function* ({ dir }) {
		const artifactsDir = yield* resolveArtifactsDir(dir);
		const pages = yield* listPages(artifactsDir);
		yield* printPageNames(pages);
	}),
).pipe(Command.withDescription("List report pages"));

pbi.pipe(
	Command.withSubcommands([listPagesCommand]),
	Command.run({ version: "0.1.0" }),
	Effect.provide(NodeServices.layer),
	NodeRuntime.runMain,
);
