import { NodeRuntime, NodeServices } from "@effect/platform-node";
import { Console, Effect } from "effect";
import { Command } from "effect/cli";

import { subset } from "./subset/index.ts";

const greet = Command.make("greet", {}, () => Console.log("Hello World")).pipe(
	Command.withDescription("Print a greeting"),
);

const pbi = Command.make("pbi").pipe(
	Command.withDescription("Tools for working with Power BI reports"),
	Command.withSubcommands([greet, subset]),
);

NodeRuntime.runMain(pbi.pipe(Command.run({ version: "0.1.0" }), Effect.provide(NodeServices.layer)));
