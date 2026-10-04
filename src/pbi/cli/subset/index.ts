import { Command } from "effect/cli";

import { filterConfiguration } from "./filter-configuration.ts";
import { semanticQuery } from "./semantic-query.ts";
import { visualConfiguration } from "./visual-configuration.ts";
import { visualContainerMobileState } from "./visual-container-mobile-state.ts";

export const subset = Command.make("subset").pipe(
	Command.withDescription("Check parts of a report on their own"),
	Command.withSubcommands([
		filterConfiguration,
		semanticQuery,
		visualConfiguration,
		visualContainerMobileState,
	]),
);
