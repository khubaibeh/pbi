export const descriptions = {
	Report: {
		description: "Defines a report and its pages, visuals, settings, and additional information.",
		fields: {
			$schema: "Defines the schema to use for an item.",
			themeCollection: "Define a theme (built-in and/or a custom theme) to be used for this report.",
			filterConfig: "Filters that apply to the entire report (all pages and all visuals).",
			objects: 'Specifies the formatting to be set for different "objects" of a report.',
			reportSource: "Defines how the report was created.",
			publicCustomVisuals: "Names of the custom visuals used in this report from AppSource.",
			resourcePackages: "Set of resources used within this report.",
			organizationCustomVisuals:
				"Names and metadata of the organization approved custom visuals used in the report.",
			annotations: "Additional information to be saved (for example comments, readme, etc) for this report.",
			dataSourceVariables: [
				"A string containing the state of any variables from the underlying direct query data source that should be overridden when rendering this content.",
				"Data source variables do not supply values for M parameters in the semantic model. Instead, data source variables are applied when accessing the underlying direct query source.",
			].join("\n"),
			settings: "Settings for the report.",
			slowDataSourceSettings:
				"Settings for slow data sources (for example turning all apply all button for filters).",
		},
	},
	ThemeCollection: {
		fields: {
			baseTheme: "Defines the base monthly release themes shipped with Power BI.",
			customTheme: [
				"Defines a custom theme that is applied on top of the base theme.",
				"Properties not defined in the custom theme will fallback to using the base theme.",
			].join("\n"),
		},
	},
	ThemeMetadata: {
		fields: {
			name: "Name of the theme.",
			reportVersionAtImport: "Versions when the theme was added to the report.",
			type: "Built-in or user specific custom theme.",
		},
	},
	ThemeVersion: {
		fields: {
			visual: "The max visual container version at import.",
			page: "The max page version at import.",
			report: "The max report version at import.",
		},
	},
	ReportFormattingObjects: {},
	ReportFormattingObjectsOutspacePane: {
		fields: {
			selector: [
				"Defines the scope at which to apply the formatting for this object.",
				"Can also define rules for matching highlighted values and how multiple definitions for the same property should be ordered.",
			].join("\n"),
			properties: "Describes the properties of the object to apply formatting changes to.",
		},
	},
	ReportFormattingObjectsSection: {
		fields: {
			selector: [
				"Defines the scope at which to apply the formatting for this object.",
				"Can also define rules for matching highlighted values and how multiple definitions for the same property should be ordered.",
			].join("\n"),
			properties: "Describes the properties of the object to apply formatting changes to.",
		},
	},
	OutspacePane: {},
	Section: {},
	ResourcePackage: {},
	ResourcePackageItem: {},
	OrganizationCustomVisual: {
		fields: {
			name: "Name of the organization custom visual.",
			path: "Path where the custom visual is stored.",
			disabled: "Signifies if the custom visual is disabled by the organization.",
		},
	},
	Annotation: { fields: { name: "Unique name for the annotation.", value: "A value for this annotation." } },
	ExplorationSettings: {
		fields: {
			isPersistentUserStateDisabled:
				"Disable saving state of changes to a report as report viewers modify slicers and filters.",
			hideVisualContainerHeader: "Hide visual container header in view mode of the report.",
			useStylableVisualContainerHeader: "Use the new visual container header that is formattable.",
			exportDataMode: "When exporting data, what should be exported.",
			isReportAnnotationsDisabled: "Commenting is disabled for this report.",
			defaultFilterActionIsDataFilter:
				"When selecting data points on a visual, it will result in apply that selection as a filter instead of a highlight on other visuals.",
			defaultDrillFilterOtherVisuals: [
				"When another visual is drilled, if visual interactions are enabled between the two visuals, then this property specifies if that drill should be applied as a filter to this visual.",
				"Can be overridden by setting on individual visuals.",
			].join("\n"),
			useCrossReportDrillthrough: "Allow drill-through from other reports to this report.",
			allowChangeFilterTypes: "Disables changing the type of filter in view mode.",
			allowInlineExploration: "Allows personalize this visual for the report in view mode.",
			useEnhancedTooltips: "Uses better tooltips for the visuals in this report.",
			useScaledTooltips: "If enabled, the tooltip will scale to match canvas zoom.",
			filterPaneHiddenInEditMode: "Hide the filter pane in view mode.",
			disableFilterPaneSearch: "Disables the search bar in filter pane.",
			pagesPosition: "Default location where the page navigator is shown.",
			allowAutomatedInsightsNotification:
				"Allow generating insights for the report in the background on data refresh.",
			useDefaultAggregateDisplayName: "Show the default aggregate in display names for summarized data.",
			enableDeveloperMode: "Enables developer mode for testing private custom visuals.",
			pauseQueries: [
				"Allows pausing queries while making changes to a visual, so every change doesn't trigger a query.",
				"Particularly useful with slow data sources.",
			].join("\n"),
			queryLimitOption: [
				"Describes the limitations for how long and how much compute a single query can be allowed to consume.",
				"More details for different options: https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-set-visual-query-limits",
			].join("\n"),
			customMemoryLimit: "If custom query limit is applied, this value defines the memory limit.",
			customTimeoutLimit: "If custom query limit is applied, this value defines the timeout limit.",
			fieldParameterReportSettings:
				"Settings that will control the field parameter across all the visual in the report",
			defaultDataExplorePerspective: "The default perspective that can be used with the report.",
			locale: "Report specific locale that takes precedence over browser and os locale.",
			defaultDisplayUnitsToNone: "Report specific setting to default display units to none.",
		},
	},
	FieldParameterReportSettings: {
		fields: {
			skipHierarchyLevelPersistence:
				"If disabled, during parameter resolution, the hierarchy level and expand/collapse state of the visual won't be persisted",
		},
	},
	ExplorationSlowDataSourceSettings: {
		fields: {
			isCrossHighlightingDisabled: "Disable cross highlights.",
			isSlicerSelectionsButtonEnabled: "Adds 'apply' button to slicers.",
			isFilterSelectionsButtonEnabled: "Adds 'apply' button to filters.",
			isFieldWellButtonEnabled: "Adds 'apply' button to field changes.",
			isApplyAllButtonEnabled: "Adds an apply all button.",
		},
	},
};
