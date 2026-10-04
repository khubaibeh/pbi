import {
	Array,
	Boolean,
	type Codec,
	Literal,
	Literals,
	Number,
	String,
	Struct,
	isMaxLength,
	optionalKey as opt,
} from "effect/Schema";

import { PropertyValue, describe } from "#pbi/schemas/shared.ts";

import { descriptions as d } from "./shared.descriptions.ts";

const PageInformation = describe(
	Struct({
		pageInformationName: opt(PropertyValue),
		pageInformationQnaPodEnabled: opt(PropertyValue),
		pageInformationAltName: opt(PropertyValue),
		pageInformationType: opt(PropertyValue),
	}),
	d.PageInformation,
).annotate({ identifier: "Page.PageInformation" });

const PageSize = describe(
	Struct({
		pageSizeTypes: opt(PropertyValue),
		pageSizeWidth: opt(PropertyValue),
		pageSizeHeight: opt(PropertyValue),
	}),
	d.PageSize,
).annotate({ identifier: "Page.PageSize" });

const Background = describe(
	Struct({
		color: opt(PropertyValue),
		image: opt(PropertyValue),
		transparency: opt(PropertyValue),
	}),
	d.Background,
).annotate({ identifier: "Page.Background" });

const DisplayArea = describe(
	Struct({
		verticalAlignment: opt(PropertyValue),
	}),
	d.DisplayArea,
).annotate({ identifier: "Page.DisplayArea" });

const OutspacePane = describe(
	Struct({
		backgroundColor: opt(PropertyValue),
		transparency: opt(PropertyValue),
		foregroundColor: opt(PropertyValue),
		titleSize: opt(PropertyValue),
		searchTextSize: opt(PropertyValue),
		headerSize: opt(PropertyValue),
		fontFamily: opt(PropertyValue),
		border: opt(PropertyValue),
		borderColor: opt(PropertyValue),
		checkboxAndApplyColor: opt(PropertyValue),
		inputBoxColor: opt(PropertyValue),
		width: opt(PropertyValue),
	}),
	d.OutspacePane,
).annotate({ identifier: "Page.OutspacePane" });

const FilterCard = describe(
	Struct({
		backgroundColor: opt(PropertyValue),
		transparency: opt(PropertyValue),
		border: opt(PropertyValue),
		borderColor: opt(PropertyValue),
		foregroundColor: opt(PropertyValue),
		textSize: opt(PropertyValue),
		fontFamily: opt(PropertyValue),
		inputBoxColor: opt(PropertyValue),
	}),
	d.FilterCard,
).annotate({ identifier: "Page.FilterCard" });

const PageRefresh = describe(
	Struct({
		show: opt(PropertyValue),
		refreshType: opt(PropertyValue),
		duration: opt(PropertyValue),
		dialogLauncher: opt(PropertyValue),
		measure: opt(PropertyValue),
		checkEvery: opt(PropertyValue),
	}),
	d.PageRefresh,
).annotate({ identifier: "Page.PageRefresh" });

const PersonalizeVisual = describe(
	Struct({
		show: opt(PropertyValue),
		perspectiveRef: opt(PropertyValue),
		applyToAllPages: opt(PropertyValue),
	}),
	d.PersonalizeVisual,
).annotate({ identifier: "Page.PersonalizeVisual" });

const VisualInteraction = describe(
	Struct({
		source: String,
		target: String,
		type: Literals(["Default", "DataFilter", "HighlightFilter", "NoFilter"]),
	}),
	d.VisualInteraction,
).annotate({ identifier: "Page.VisualInteraction" });

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

const Annotation = describe(
	Struct({
		name: String,
		value: String,
	}),
	d.Annotation,
).annotate({ identifier: "Page.Annotation" });

export function makeSchemas(
	filterConfiguration: { readonly FilterConfig: Codec<unknown> },
	formattingObjectDefinitions: { readonly Selector: Codec<unknown> },
	semanticQuery: { readonly QueryExpressionContainer: Codec<unknown> },
	options: { readonly version: string; readonly boundFilterRequired: boolean; readonly pageType: boolean },
) {
	const { FilterConfig } = filterConfiguration;
	const { Selector } = formattingObjectDefinitions;
	const { QueryExpressionContainer } = semanticQuery;

	const BindingParameter = describe(
		Struct({
			name: String,
			boundFilter: options.boundFilterRequired ? String : opt(String),
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

	const QuickExploreVisualContainerConfig = describe(
		Struct({
			name: String,
			fields: Array(QueryExpressionContainer),
		}),
		d.QuickExploreVisualContainerConfig,
	).annotate({ identifier: "Page.QuickExploreVisualContainerConfig" });

	const AutoPageGenerationConfig = describe(
		Struct({
			selectedFields: Array(QueryExpressionContainer),
			visualContainerConfigurations: Array(QuickExploreVisualContainerConfig),
			layout: opt(QuickExploreLayoutContainer),
		}),
		d.AutoPageGenerationConfig,
	).annotate({ identifier: "Page.AutoPageGenerationConfig" });

	const fields = {
		$schema: Literal(
			`https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/${options.version}/schema.json`,
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
		visibility: opt(Literals(["AlwaysVisible", "HiddenInViewMode"])),
		visualInteractions: opt(Array(VisualInteraction)),
		autoPageGenerationConfig: opt(AutoPageGenerationConfig),
		annotations: opt(Array(Annotation)),
		howCreated: opt(Literals(["Default", "Copilot"])),
	};

	const Page = options.pageType
		? describe(Struct({ ...fields, type: opt(Literals(["Drillthrough", "Tooltip"])) }), {
				description: d.Page.description,
				fields: { ...d.Page.fields, ...d.PageType },
			})
		: describe(Struct(fields), d.Page);

	return { Page: Page.annotate({ identifier: "Page.Page" }) };
}
