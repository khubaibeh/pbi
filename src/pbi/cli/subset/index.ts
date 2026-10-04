import { Command } from "effect/cli";

import { filterConfiguration } from "./filter-configuration.ts";
import { page } from "./page.ts";
import { pagesMetadata } from "./pages-metadata.ts";
import { report } from "./report.ts";
import { semanticQuery } from "./semantic-query.ts";
import { versionMetadata } from "./version-metadata.ts";
import { visualConfiguration } from "./visual-configuration.ts";
import { visualContainerMobileState } from "./visual-container-mobile-state.ts";
import { visualContainer } from "./visual-container.ts";

export const subset = Command.make("subset").pipe(
	Command.withDescription("Check parts of a report on their own"),
	Command.withSubcommands([
		filterConfiguration,
		page,
		pagesMetadata,
		report,
		semanticQuery,
		versionMetadata,
		visualConfiguration,
		visualContainer,
		visualContainerMobileState,
	]),
);
