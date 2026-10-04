import {
	Array,
	Boolean,
	type Codec,
	Literal,
	Literals,
	Number,
	String,
	Struct,
	Unknown,
	isMaxLength,
	optionalKey as opt,
} from "effect/Schema";

import { versions as filterConfiguration } from "#pbi/schemas/filter-configuration";
import { versions as formattingObjectDefinitions } from "#pbi/schemas/formatting-object-definitions";
import { versions as semanticQuery } from "#pbi/schemas/semantic-query";
import { describe } from "#pbi/schemas/shared.ts";

import { descriptions as d } from "./version-2.1.descriptions.ts";

const { FilterConfig } = filterConfiguration["1.3"];
const { Selector } = formattingObjectDefinitions["1.5"];
const { QueryExpressionContainer } = semanticQuery["1.4"];

const BindingParameter = describe(
	Struct({
		name: String,
		boundFilter: opt(String),
		asAggregation: opt(Boolean),
		qnaSingleSelectRequired: opt(Boolean),
		fieldExpr: opt(QueryExpressionContainer),
	}),
	d.BindingParameter,
).annotate({ identifier: "Page.BindingParameter" });

const PageBinding = describe(
	Struct({
		name: String,
		type: Literals(["Default", "Drillthrough", "Tooltip"]),
		referenceScope: opt(Literals(["Default", "CrossReport"])),
		parameters: opt(Array(BindingParameter)),
		acceptsFilterContext: opt(Literals(["Default", "None"])),
	}),
	d.PageBinding,
).annotate({ identifier: "Page.PageBinding" });

const PageInformation = describe(
	Struct({
		pageInformationName: opt(Unknown),
		pageInformationQnaPodEnabled: opt(Unknown),
		pageInformationAltName: opt(Unknown),
		pageInformationType: opt(Unknown),
	}),
	d.PageInformation,
).annotate({ identifier: "Page.PageInformation" });

const PageSize = describe(
	Struct({
		pageSizeTypes: opt(Unknown),
		pageSizeWidth: opt(Unknown),
		pageSizeHeight: opt(Unknown),
	}),
	d.PageSize,
).annotate({ identifier: "Page.PageSize" });

const Background = describe(
	Struct({
		color: opt(Unknown),
		image: opt(Unknown),
		transparency: opt(Unknown),
	}),
	d.Background,
).annotate({ identifier: "Page.Background" });

const DisplayArea = describe(
	Struct({
		verticalAlignment: opt(Unknown),
	}),
	d.DisplayArea,
).annotate({ identifier: "Page.DisplayArea" });

const OutspacePane = describe(
	Struct({
		backgroundColor: opt(Unknown),
		transparency: opt(Unknown),
		foregroundColor: opt(Unknown),
		titleSize: opt(Unknown),
		searchTextSize: opt(Unknown),
		headerSize: opt(Unknown),
		fontFamily: opt(Unknown),
		border: opt(Unknown),
		borderColor: opt(Unknown),
		checkboxAndApplyColor: opt(Unknown),
		inputBoxColor: opt(Unknown),
		width: opt(Unknown),
	}),
	d.OutspacePane,
).annotate({ identifier: "Page.OutspacePane" });

const FilterCard = describe(
	Struct({
		backgroundColor: opt(Unknown),
		transparency: opt(Unknown),
		border: opt(Unknown),
		borderColor: opt(Unknown),
		foregroundColor: opt(Unknown),
		textSize: opt(Unknown),
		fontFamily: opt(Unknown),
		inputBoxColor: opt(Unknown),
	}),
	d.FilterCard,
).annotate({ identifier: "Page.FilterCard" });

const PageRefresh = describe(
	Struct({
		show: opt(Unknown),
		refreshType: opt(Unknown),
		duration: opt(Unknown),
		dialogLauncher: opt(Unknown),
		measure: opt(Unknown),
		checkEvery: opt(Unknown),
	}),
	d.PageRefresh,
).annotate({ identifier: "Page.PageRefresh" });

const PersonalizeVisual = describe(
	Struct({
		show: opt(Unknown),
		perspectiveRef: opt(Unknown),
		applyToAllPages: opt(Unknown),
	}),
	d.PersonalizeVisual,
).annotate({ identifier: "Page.PersonalizeVisual" });

const formatting = <S extends Codec<unknown>>(properties: S) =>
	opt(
		Array(
			describe(
				Struct({
					selector: opt(Selector),
					properties,
				}),
				d["PageFormattingObjects.*"],
			),
		),
	);

const PageFormattingObjects = describe(
	Struct({
		pageInformation: formatting(PageInformation),
		pageSize: formatting(PageSize),
		background: formatting(Background),
		displayArea: formatting(DisplayArea),
		outspace: formatting(Background),
		outspacePane: formatting(OutspacePane),
		filterCard: formatting(FilterCard),
		pageRefresh: formatting(PageRefresh),
		personalizeVisual: formatting(PersonalizeVisual),
	}),
	d.PageFormattingObjects,
).annotate({ identifier: "Page.PageFormattingObjects" });

const VisualInteraction = describe(
	Struct({
		source: String,
		target: String,
		type: Literals(["Default", "DataFilter", "HighlightFilter", "NoFilter"]),
	}),
	d.VisualInteraction,
).annotate({ identifier: "Page.VisualInteraction" });

const QuickExploreVisualContainerConfig = describe(
	Struct({
		name: String,
		fields: Array(QueryExpressionContainer),
	}),
	d.QuickExploreVisualContainerConfig,
).annotate({ identifier: "Page.QuickExploreVisualContainerConfig" });

const QuickExploreRelatedLayout = describe(
	Struct({
		version: Number,
		dataTableName: opt(String),
	}),
	d.QuickExploreRelatedLayout,
).annotate({ identifier: "Page.QuickExploreRelatedLayout" });

const QuickExploreCombinationLayout = describe(
	Struct({
		version: Number,
		dataTableName: opt(String),
	}),
	d.QuickExploreCombinationLayout,
).annotate({ identifier: "Page.QuickExploreCombinationLayout" });

const QuickExploreLayoutContainer = describe(
	Struct({
		related: opt(QuickExploreRelatedLayout),
		combination: opt(QuickExploreCombinationLayout),
	}),
	d.QuickExploreLayoutContainer,
).annotate({ identifier: "Page.QuickExploreLayoutContainer" });

const AutoPageGenerationConfig = describe(
	Struct({
		selectedFields: Array(QueryExpressionContainer),
		visualContainerConfigurations: Array(QuickExploreVisualContainerConfig),
		layout: opt(QuickExploreLayoutContainer),
	}),
	d.AutoPageGenerationConfig,
).annotate({ identifier: "Page.AutoPageGenerationConfig" });

const Annotation = describe(
	Struct({
		name: String,
		value: String,
	}),
	d.Annotation,
).annotate({ identifier: "Page.Annotation" });

export const Page = describe(
	Struct({
		$schema: Literal(
			"https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.1.0/schema.json",
		),
		name: String.check(isMaxLength(50)),
		displayName: String,
		displayOption: Literals([
			"DeprecatedDynamic",
			"FitToPage",
			"FitToWidth",
			"ActualSize",
			"ActualSizeTopLeft",
		]),
		height: opt(Number),
		width: opt(Number),
		filterConfig: opt(FilterConfig),
		pageBinding: opt(PageBinding),
		objects: opt(PageFormattingObjects),
		type: opt(Literals(["Drillthrough", "Tooltip"])),
		visibility: opt(Literals(["AlwaysVisible", "HiddenInViewMode"])),
		visualInteractions: opt(Array(VisualInteraction)),
		autoPageGenerationConfig: opt(AutoPageGenerationConfig),
		annotations: opt(Array(Annotation)),
		howCreated: opt(Literals(["Default", "Copilot"])),
	}),
	d.Page,
).annotate({ identifier: "Page.Page" });
