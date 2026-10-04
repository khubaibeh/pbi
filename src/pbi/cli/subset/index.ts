import { Command } from "effect/cli";

import { filterConfiguration } from "./filter-configuration.ts";
import { pagesMetadata } from "./pages-metadata.ts";
import { semanticQuery } from "./semantic-query.ts";
import { visualConfiguration } from "./visual-configuration.ts";
import { visualContainerMobileState } from "./visual-container-mobile-state.ts";
import { visualContainer } from "./visual-container.ts";

export const subset = Command.make("subset").pipe(
	Command.withDescription("Check parts of a report on their own"),
	Command.withSubcommands([
		filterConfiguration,
		pagesMetadata,
		semanticQuery,
		visualConfiguration,
		visualContainer,
		visualContainerMobileState,
	]),
);
