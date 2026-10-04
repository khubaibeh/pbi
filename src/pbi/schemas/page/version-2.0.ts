import { versions as filterConfiguration } from "#pbi/schemas/filter-configuration";
import { versions as formattingObjectDefinitions } from "#pbi/schemas/formatting-object-definitions";
import { versions as semanticQuery } from "#pbi/schemas/semantic-query";

import { makeSchemas } from "./shared.ts";

export const { Page } = makeSchemas(
	filterConfiguration["1.2"],
	formattingObjectDefinitions["1.4"],
	semanticQuery["1.3"],
	{ version: "2.0.0", boundFilterRequired: false, pageType: true },
);
