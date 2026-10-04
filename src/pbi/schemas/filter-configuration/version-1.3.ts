import { Array, Boolean, Literals, Number, String, Struct, Unknown, optionalKey as opt } from "effect/Schema";

import { versions as formattingObjectDefinitions } from "#pbi/schemas/formatting-object-definitions";
import { versions as semanticQuery } from "#pbi/schemas/semantic-query";
import { describe } from "#pbi/schemas/shared.ts";

import { descriptions as d } from "./version-1.3.descriptions.ts";

const { QueryExpressionContainer: Expression, FilterDefinition } = semanticQuery["1.4"];
const { Selector } = formattingObjectDefinitions["1.5"];

const FilterContainerFormattingObjectsProperties = describe(
	Struct({
		requireSingleSelect: opt(Unknown),
		isInvertedSelectionMode: opt(Unknown),
	}),
	d.FilterContainerFormattingObjectsProperties,
).annotate({ identifier: "FilterConfiguration.FilterContainerFormattingObjectsProperties" });

const FilterContainerFormattingObjects = describe(
	Struct({
		general: opt(
			Array(
				describe(
					Struct({
						selector: opt(Selector),
						properties: FilterContainerFormattingObjectsProperties,
					}),
					d["FilterContainerFormattingObjects.general"],
				),
			),
		),
	}),
	d.FilterContainerFormattingObjects,
).annotate({ identifier: "FilterConfiguration.FilterContainerFormattingObjects" });

const FilterContainer = describe(
	Struct({
		name: String,
		displayName: opt(String),
		ordinal: opt(Number),
		field: opt(Expression),
		type: opt(
			Literals([
				"Categorical",
				"Range",
				"Advanced",
				"Passthrough",
				"TopN",
				"Include",
				"Exclude",
				"RelativeDate",
				"Tuple",
				"RelativeTime",
				"VisualTopN",
			]),
		),
		filter: opt(FilterDefinition),
		restatement: opt(String),
		howCreated: opt(Literals(["Auto", "User", "Drill", "Include", "Exclude", "Drillthrough"])),
		isHiddenInViewMode: opt(Boolean),
		isLockedInViewMode: opt(Boolean),
		objects: opt(FilterContainerFormattingObjects),
	}),
	d.FilterContainer,
).annotate({ identifier: "FilterConfiguration.FilterContainer" });

export const FilterConfig = describe(
	Struct({
		filters: opt(Array(FilterContainer)),
		filterSortOrder: opt(Literals(["Ascending", "Descending", "Custom"])),
	}),
	d.FilterConfig,
).annotate({ identifier: "FilterConfiguration.FilterConfig" });
