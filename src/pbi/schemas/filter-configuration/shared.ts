import {
	Array,
	Boolean,
	type Codec,
	Literals,
	Number,
	String,
	Struct,
	optionalKey as opt,
} from "effect/Schema";

import { PropertyValue, describe } from "#pbi/schemas/shared.ts";

import { descriptions as d } from "./shared.descriptions.ts";

const FilterContainerFormattingObjectsProperties = describe(
	Struct({
		requireSingleSelect: opt(PropertyValue),
		isInvertedSelectionMode: opt(PropertyValue),
	}),
	d.FilterContainerFormattingObjectsProperties,
).annotate({ identifier: "FilterConfiguration.FilterContainerFormattingObjectsProperties" });

const filterTypes = [
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
] as const;

export function makeSchemas(
	formattingObjectDefinitions: { readonly Selector: Codec<unknown> },
	semanticQuery: {
		readonly QueryExpressionContainer: Codec<unknown>;
		readonly FilterDefinition: Codec<unknown>;
	},
	options: { readonly visualTopN: boolean },
) {
	const { Selector } = formattingObjectDefinitions;
	const { QueryExpressionContainer: Expression, FilterDefinition } = semanticQuery;
	const General = describe(
		Struct({
			selector: opt(Selector),
			properties: FilterContainerFormattingObjectsProperties,
		}),
		d.General,
	);

	const FilterContainerFormattingObjects = describe(
		Struct({ general: opt(Array(General)) }),
		d.FilterContainerFormattingObjects,
	).annotate({ identifier: "FilterConfiguration.FilterContainerFormattingObjects" });

	const FilterContainer = describe(
		Struct({
			name: String,
			displayName: opt(String),
			ordinal: opt(Number),
			field: opt(Expression),
			type: opt(Literals(options.visualTopN ? [...filterTypes, "VisualTopN"] : filterTypes)),
			filter: opt(FilterDefinition),
			restatement: opt(String),
			howCreated: opt(Literals(["Auto", "User", "Drill", "Include", "Exclude", "Drillthrough"])),
			isHiddenInViewMode: opt(Boolean),
			isLockedInViewMode: opt(Boolean),
			objects: opt(FilterContainerFormattingObjects),
		}),
		d.FilterContainer,
	).annotate({ identifier: "FilterConfiguration.FilterContainer" });

	const FilterConfig = describe(
		Struct({
			filters: opt(Array(FilterContainer)),
			filterSortOrder: opt(Literals(["Ascending", "Descending", "Custom"])),
		}),
		d.FilterConfig,
	).annotate({ identifier: "FilterConfiguration.FilterConfig" });

	return { FilterConfig };
}
