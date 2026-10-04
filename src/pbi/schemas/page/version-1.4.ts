import { versions as filterConfiguration } from "#pbi/schemas/filter-configuration";
import { versions as formattingObjectDefinitions } from "#pbi/schemas/formatting-object-definitions";
import { versions as semanticQuery } from "#pbi/schemas/semantic-query";

import { makeSchemas } from "./shared.ts";

export const { Page } = makeSchemas(
	filterConfiguration["1.1"],
	formattingObjectDefinitions["1.3"],
	semanticQuery["1.2"],
	{ version: "1.4.0", boundFilterRequired: true, pageType: true },
);
