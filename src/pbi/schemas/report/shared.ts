import {
	Array,
	Boolean,
	Literal,
	type Codec,
	Literals,
	Number,
	String,
	Struct,
	isPattern,
	optionalKey as opt,
} from "effect/Schema";

import { PropertyValue, describe } from "#pbi/schemas/shared.ts";

import { descriptions as d } from "./shared.descriptions.ts";

const SemanticVersion = String.check(isPattern(/^[0-9]+\.[0-9]+\.[0-9]+$/u));

const ThemeVersion = describe(
	Struct({
		visual: SemanticVersion,
		page: SemanticVersion,
		report: SemanticVersion,
	}),
	d.ThemeVersion,
).annotate({ identifier: "Report.ThemeVersion" });

const themeMetadataFields = {
	name: String,
	type: Literals(["RegisteredResources", "SharedResources"]),
};

const makeThemeCollection = (themeVersion: boolean) => {
	const ThemeMetadata = (
		themeVersion
			? describe(Struct({ ...themeMetadataFields, reportVersionAtImport: ThemeVersion }), d.ThemeMetadata)
			: describe(Struct({ ...themeMetadataFields, reportVersionAtImport: String }), d.LegacyThemeMetadata)
	).annotate({ identifier: "Report.ThemeMetadata" });

	return describe(
		Struct({
			baseTheme: opt(ThemeMetadata),
			customTheme: opt(ThemeMetadata),
		}),
		d.ThemeCollection,
	).annotate({ identifier: "Report.ThemeCollection" });
};

const OutspacePane = describe(
	Struct({
		expanded: opt(PropertyValue),
		visible: opt(PropertyValue),
	}),
	d.OutspacePane,
).annotate({ identifier: "Report.OutspacePane" });

const Section = describe(
	Struct({
		verticalAlignment: opt(PropertyValue),
	}),
	d.Section,
).annotate({ identifier: "Report.Section" });

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

const settingsFields = {
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
	queryLimitOption: opt(Literals(["None", "Shared", "Premium", "SQLServerAS", "AzureAS", "Custom", "Auto"])),
	customMemoryLimit: opt(String),
	customTimeoutLimit: opt(String),
};

const fieldParameterSettingsFields = {
	...settingsFields,
	fieldParameterReportSettings: opt(FieldParameterReportSettings),
};

const settings = {
	base: describe(Struct(settingsFields), d.ExplorationSettings),
	fieldParameter: describe(Struct(fieldParameterSettingsFields), {
		fields: { ...d.ExplorationSettings.fields, ...d.FieldParameterSettings },
	}),
	locale: describe(
		Struct({
			...fieldParameterSettingsFields,
			defaultDataExplorePerspective: opt(String),
			locale: opt(String),
			defaultDisplayUnitsToNone: opt(Boolean),
		}),
		{ fields: { ...d.ExplorationSettings.fields, ...d.FieldParameterSettings, ...d.LocaleSettings } },
	),
};

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

export function makeSchemas(
	filterConfiguration: { readonly FilterConfig: Codec<unknown> },
	formattingObjectDefinitions: { readonly Selector: Codec<unknown> },
	options: {
		readonly version: string;
		readonly settings: keyof typeof settings;
		readonly themeVersion: boolean;
		readonly layoutOptimization: boolean;
	},
) {
	const { FilterConfig } = filterConfiguration;
	const { Selector } = formattingObjectDefinitions;

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

	const fields = {
		$schema: Literal(
			`https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/${options.version}/schema.json`,
		),
		themeCollection: makeThemeCollection(options.themeVersion),
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
		settings: opt(settings[options.settings].annotate({ identifier: "Report.ExplorationSettings" })),
		slowDataSourceSettings: opt(ExplorationSlowDataSourceSettings),
	};

	const Report = options.layoutOptimization
		? describe(Struct({ ...fields, layoutOptimization: Literals(["None", "PhonePortrait"]) }), {
				description: d.Report.description,
				fields: { ...d.Report.fields, ...d.LayoutOptimization },
			})
		: describe(Struct(fields), d.Report);

	return { Report: Report.annotate({ identifier: "Report.Report" }) };
}
