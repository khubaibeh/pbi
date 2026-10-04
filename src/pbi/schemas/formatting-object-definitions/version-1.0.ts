import { versions as semanticQuery } from "#pbi/schemas/semantic-query";

import { makeSchemas } from "./shared.ts";

export const { DataViewObjectDefinitions, Selector, DataRepetitionSelector } = makeSchemas(
	semanticQuery["1.0"].QueryExpressionContainer,
	{ hierarchyMatching: false },
);
