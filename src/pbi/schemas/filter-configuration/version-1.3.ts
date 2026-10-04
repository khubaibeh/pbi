import { versions as formattingObjectDefinitions } from "#pbi/schemas/formatting-object-definitions";
import { versions as semanticQuery } from "#pbi/schemas/semantic-query";

import { makeSchemas } from "./shared.ts";

export const { FilterConfig } = makeSchemas(formattingObjectDefinitions["1.5"], semanticQuery["1.4"], {
	visualTopN: true,
});
