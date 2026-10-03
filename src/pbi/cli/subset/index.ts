import { Command } from "effect/cli";

import { semanticQuery } from "./semantic-query.ts";

export const subset = Command.make("subset").pipe(
	Command.withDescription("Check parts of a report on their own"),
	Command.withSubcommands([semanticQuery]),
);
