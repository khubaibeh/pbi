import {
	Array,
	Boolean,
	Literal,
	Literals,
	Number,
	String,
	Struct,
	Unknown,
	isPattern,
	optionalKey as opt,
} from "effect/Schema";

import { versions as filterConfiguration } from "#pbi/schemas/filter-configuration";
import { versions as formattingObjectDefinitions } from "#pbi/schemas/formatting-object-definitions";
import { describe } from "#pbi/schemas/shared.ts";

import { descriptions as d } from "./version-3.3.descriptions.ts";

const { FilterConfig } = filterConfiguration["1.3"];
const { Selector } = formattingObjectDefinitions["1.5"];

const SemanticVersion = String.check(isPattern(/^[0-9]+\.[0-9]+\.[0-9]+$/u));

const ThemeVersion = describe(
	Struct({
		visual: SemanticVersion,
		page: SemanticVersion,
		report: SemanticVersion,
	}),
	d.ThemeVersion,
).annotate({ identifier: "Report.ThemeVersion" });

const ThemeMetadata = describe(
	Struct({
		name: String,
		reportVersionAtImport: ThemeVersion,
		type: Literals(["RegisteredResources", "SharedResources"]),
	}),
	d.ThemeMetadata,
).annotate({ identifier: "Report.ThemeMetadata" });

const ThemeCollection = describe(
	Struct({
		baseTheme: opt(ThemeMetadata),
		customTheme: opt(ThemeMetadata),
	}),
	d.ThemeCollection,
).annotate({ identifier: "Report.ThemeCollection" });

const OutspacePane = describe(
	Struct({
		expanded: opt(Unknown),
		visible: opt(Unknown),
	}),
	d.OutspacePane,
).annotate({ identifier: "Report.OutspacePane" });

const Section = describe(
	Struct({
		verticalAlignment: opt(Unknown),
	}),
	d.Section,
).annotate({ identifier: "Report.Section" });

const ReportFormattingObjects = describe(
	Struct({
		outspacePane: opt(
			Array(
				describe(
					Struct({
						selector: opt(Selector),
						properties: OutspacePane,
					}),
					d.ReportFormattingObjectsOutspacePane,
				),
			),
		),
		section: opt(
			Array(
				describe(
					Struct({
						selector: opt(Selector),
						properties: Section,
					}),
					d.ReportFormattingObjectsSection,
				),
			),
		),
	}),
	d.ReportFormattingObjects,
).annotate({ identifier: "Report.ReportFormattingObjects" });

const ResourcePackageItem = describe(
	Struct({
		id: opt(Number),
		name: String,
		path: String,
		type: Literals([
			"CustomVisualJavascript",
			"CustomVisualsCss",
			"CustomVisualScreenshot",
			"CustomVisualIcon",
			"CustomVisualWatermark",
			"CustomVisualMetadata",
			"Image",
			"ShapeMap",
			"CustomTheme",
			"BaseTheme",
			"DashboardTheme",
			"DashboardBaseTheme",
			"HighContrastTheme",
			"AppNavigation",
			"AppTheme",
			"AppBaseTheme",
		]),
	}),
	d.ResourcePackageItem,
).annotate({ identifier: "Report.ResourcePackageItem" });

const ResourcePackage = describe(
	Struct({
		id: opt(Number),
		name: String,
		type: Literals([
			"CustomVisual",
			"RegisteredResources",
			"SharedResources",
			"OrganizationalStoreCustomVisual",
		]),
		items: Array(ResourcePackageItem),
		disabled: opt(Boolean),
	}),
	d.ResourcePackage,
).annotate({ identifier: "Report.ResourcePackage" });

const OrganizationCustomVisual = describe(
	Struct({
		name: String,
		path: String,
		disabled: opt(Boolean),
	}),
	d.OrganizationCustomVisual,
).annotate({ identifier: "Report.OrganizationCustomVisual" });

const Annotation = describe(
	Struct({
		name: String,
		value: String,
	}),
	d.Annotation,
).annotate({ identifier: "Report.Annotation" });

const FieldParameterReportSettings = describe(
	Struct({
		skipHierarchyLevelPersistence: opt(Boolean),
	}),
	d.FieldParameterReportSettings,
).annotate({ identifier: "Report.FieldParameterReportSettings" });

const ExplorationSettings = describe(
	Struct({
		isPersistentUserStateDisabled: opt(Boolean),
		hideVisualContainerHeader: opt(Boolean),
		useStylableVisualContainerHeader: opt(Boolean),
		exportDataMode: opt(Literals(["AllowSummarized", "AllowSummarizedAndUnderlying", "None"])),
		isReportAnnotationsDisabled: opt(Boolean),
		defaultFilterActionIsDataFilter: opt(Boolean),
		defaultDrillFilterOtherVisuals: opt(Boolean),
		useCrossReportDrillthrough: opt(Boolean),
		allowChangeFilterTypes: opt(Boolean),
		allowInlineExploration: opt(Boolean),
		useEnhancedTooltips: opt(Boolean),
		useScaledTooltips: opt(Boolean),
		filterPaneHiddenInEditMode: opt(Boolean),
		disableFilterPaneSearch: opt(Boolean),
		pagesPosition: opt(Literals(["PagesPane", "Bottom"])),
		allowAutomatedInsightsNotification: opt(Boolean),
		useDefaultAggregateDisplayName: opt(Boolean),
		enableDeveloperMode: opt(Boolean),
		pauseQueries: opt(Boolean),
		queryLimitOption: opt(
			Literals(["None", "Shared", "Premium", "SQLServerAS", "AzureAS", "Custom", "Auto"]),
		),
		customMemoryLimit: opt(String),
		customTimeoutLimit: opt(String),
		fieldParameterReportSettings: opt(FieldParameterReportSettings),
		defaultDataExplorePerspective: opt(String),
		locale: opt(String),
		defaultDisplayUnitsToNone: opt(Boolean),
	}),
	d.ExplorationSettings,
).annotate({ identifier: "Report.ExplorationSettings" });

const ExplorationSlowDataSourceSettings = describe(
	Struct({
		isCrossHighlightingDisabled: opt(Boolean),
		isSlicerSelectionsButtonEnabled: opt(Boolean),
		isFilterSelectionsButtonEnabled: opt(Boolean),
		isFieldWellButtonEnabled: opt(Boolean),
		isApplyAllButtonEnabled: opt(Boolean),
	}),
	d.ExplorationSlowDataSourceSettings,
).annotate({ identifier: "Report.ExplorationSlowDataSourceSettings" });

export const Report = describe(
	Struct({
		$schema: Literal(
			"https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.3.0/schema.json",
		),
		themeCollection: ThemeCollection,
		filterConfig: opt(FilterConfig),
		objects: opt(ReportFormattingObjects),
		reportSource: opt(
			Literals([
				"Default",
				"SharePoint",
				"Teams",
				"QuickCreate",
				"EmbedQuickCreate",
				"Datamart",
				"DataExplore",
			]),
		),
		publicCustomVisuals: opt(Array(String)),
		resourcePackages: opt(Array(ResourcePackage)),
		organizationCustomVisuals: opt(Array(OrganizationCustomVisual)),
		annotations: opt(Array(Annotation)),
		dataSourceVariables: opt(String),
		settings: opt(ExplorationSettings),
		slowDataSourceSettings: opt(ExplorationSlowDataSourceSettings),
	}),
	d.Report,
).annotate({ identifier: "Report.Report" });
