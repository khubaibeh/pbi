import { makeSchemas as makeFilterConfiguration } from "#pbi/schemas/filter-configuration";
import { versions as formattingObjectDefinitions } from "#pbi/schemas/formatting-object-definitions";
import { versions as semanticQuery } from "#pbi/schemas/semantic-query";

import { makeSchemas } from "./shared.ts";

export const { Page } = makeSchemas(
	makeFilterConfiguration(formattingObjectDefinitions["1.2"], semanticQuery["1.2"], { visualTopN: true }),
	formattingObjectDefinitions["1.2"],
	semanticQuery["1.2"],
	{ version: "1.2.0", boundFilterRequired: true, pageType: false },
);
