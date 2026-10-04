import { versions as formattingObjectDefinitions } from "#pbi/schemas/formatting-object-definitions";
import { versions as semanticQuery } from "#pbi/schemas/semantic-query";

import { makeSchemas } from "./shared.ts";

export const { Visual, VisualContainerFormattingObjects, Background, LockAspect } = makeSchemas(
	formattingObjectDefinitions["1.2"],
	semanticQuery["1.2"],
	{
		formatMaxLength: true,
		currentFormatText: true,
		sortDirection: false,
		currentFieldParameterText: false,
		borderWidth: true,
		headerAlertButtons: true,
		dataFunction: false,
	},
);
