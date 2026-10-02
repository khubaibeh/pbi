import { Effect, Schema } from "effect";
import * as Query from "./semantic-query.js";
import * as Formatting from "./formatting-and-filters.js";
import * as Page from "./page.js";
import * as Bookmark from "./bookmark.js";
import * as Container from "./visual-container.js";
import * as Visual from "./visual-configuration.js";

// Preserve original keys before checking closed objects, including when callers
// explicitly request excess-property stripping from the decoder.
function closed<const Fields extends Schema.Struct.Fields>(fields: Fields) {
  const allowed = new Set(Object.keys(fields));
  return Schema.StructWithRest(Schema.Struct(fields), [Schema.Record(Schema.String, Schema.Json)])
    .check(Schema.makeFilter((value) => Object.keys(value).every((key) => allowed.has(key)) || "Unexpected object property"));
}

/** ThemeCollection in report 1.0.0. */
export type ReportThemeCollectionV1_0_0 = { readonly "baseTheme"?: ReportThemeMetadataV1_0_0; readonly "customTheme"?: ReportThemeMetadataV1_0_0; };
/** Native schema for ThemeCollection with exact versioned dependencies. */
export const ReportThemeCollectionV1_0_0: Schema.Codec<ReportThemeCollectionV1_0_0> = closed({ "baseTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV1_0_0)), "customTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV1_0_0)) });

/** ThemeMetadata in report 1.0.0. */
export type ReportThemeMetadataV1_0_0 = { readonly "name": string; readonly "reportVersionAtImport": string; readonly "type": ReportThemeResourcePackageTypeV1_0_0; };
/** Native schema for ThemeMetadata with exact versioned dependencies. */
export const ReportThemeMetadataV1_0_0: Schema.Codec<ReportThemeMetadataV1_0_0> = closed({ "name": Schema.String, "reportVersionAtImport": Schema.String, "type": Schema.suspend(() => ReportThemeResourcePackageTypeV1_0_0) });

/** ThemeResourcePackageType in report 1.0.0. */
export type ReportThemeResourcePackageTypeV1_0_0 = ("RegisteredResources") | ("SharedResources");
/** Native schema for ThemeResourcePackageType with exact versioned dependencies. */
export const ReportThemeResourcePackageTypeV1_0_0: Schema.Codec<ReportThemeResourcePackageTypeV1_0_0> = Schema.Union([Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources")]);

/** LayoutOptimization in report 1.0.0. */
export type ReportLayoutOptimizationV1_0_0 = ("None") | ("PhonePortrait");
/** Native schema for LayoutOptimization with exact versioned dependencies. */
export const ReportLayoutOptimizationV1_0_0: Schema.Codec<ReportLayoutOptimizationV1_0_0> = Schema.Union([Schema.Literal("None"), Schema.Literal("PhonePortrait")]);

/** FilterConfig in report 1.0.0. */
export type ReportFilterConfigV1_0_0 = { readonly "filters"?: ReadonlyArray<ReportFilterContainerV1_0_0>; readonly "filterSortOrder"?: ("Ascending") | ("Descending") | ("Custom"); };
/** Native schema for FilterConfig with exact versioned dependencies. */
export const ReportFilterConfigV1_0_0: Schema.Codec<ReportFilterConfigV1_0_0> = closed({ "filters": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportFilterContainerV1_0_0))), "filterSortOrder": Schema.optionalKey(Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending"), Schema.Literal("Custom")])) });

/** FilterContainer in report 1.0.0. */
export type ReportFilterContainerV1_0_0 = { readonly "name": string; readonly "displayName"?: string; readonly "ordinal"?: number; readonly "field"?: Query.QueryExpressionContainerV1_0_0; readonly "type"?: ("Categorical") | ("Range") | ("Advanced") | ("Passthrough") | ("TopN") | ("Include") | ("Exclude") | ("RelativeDate") | ("Tuple") | ("RelativeTime"); readonly "filter"?: Query.FilterDefinitionV1_0_0; readonly "restatement"?: string; readonly "howCreated"?: ("Auto") | ("User") | ("Drill") | ("Include") | ("Exclude") | ("Drillthrough"); readonly "isHiddenInViewMode"?: boolean; readonly "isLockedInViewMode"?: boolean; readonly "objects"?: ReportFilterContainerFormattingObjectsV1_0_0; };
/** Native schema for FilterContainer with exact versioned dependencies. */
export const ReportFilterContainerV1_0_0: Schema.Codec<ReportFilterContainerV1_0_0> = closed({ "name": Schema.String, "displayName": Schema.optionalKey(Schema.String), "ordinal": Schema.optionalKey(Schema.Finite), "field": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer)), "type": Schema.optionalKey(Schema.Union([Schema.Literal("Categorical"), Schema.Literal("Range"), Schema.Literal("Advanced"), Schema.Literal("Passthrough"), Schema.Literal("TopN"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("RelativeDate"), Schema.Literal("Tuple"), Schema.Literal("RelativeTime")])), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_0_0.FilterDefinition)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal("Auto"), Schema.Literal("User"), Schema.Literal("Drill"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("Drillthrough")])), "isHiddenInViewMode": Schema.optionalKey(Schema.Boolean), "isLockedInViewMode": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => ReportFilterContainerFormattingObjectsV1_0_0)) });

/** FilterContainerFormattingObjects in report 1.0.0. */
export type ReportFilterContainerFormattingObjectsV1_0_0 = { readonly "general"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0; readonly "properties": ReportFilterContainerFormattingObjectsPropertiesV1_0_0; }>; };
/** Native schema for FilterContainerFormattingObjects with exact versioned dependencies. */
export const ReportFilterContainerFormattingObjectsV1_0_0: Schema.Codec<ReportFilterContainerFormattingObjectsV1_0_0> = closed({ "general": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0.Selector)), "properties": Schema.suspend(() => ReportFilterContainerFormattingObjectsPropertiesV1_0_0) }))) });

/** FilterContainerFormattingObjectsProperties in report 1.0.0. */
export type ReportFilterContainerFormattingObjectsPropertiesV1_0_0 = { readonly "requireSingleSelect"?: Schema.Json; readonly "isInvertedSelectionMode"?: Schema.Json; };
/** Native schema for FilterContainerFormattingObjectsProperties with exact versioned dependencies. */
export const ReportFilterContainerFormattingObjectsPropertiesV1_0_0: Schema.Codec<ReportFilterContainerFormattingObjectsPropertiesV1_0_0> = closed({ "requireSingleSelect": Schema.optionalKey(Schema.Json), "isInvertedSelectionMode": Schema.optionalKey(Schema.Json) });

/** ReportFormattingObjects in report 1.0.0. */
export type ReportReportFormattingObjectsV1_0_0 = { readonly "outspacePane"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0; readonly "properties": ReportOutspacePaneV1_0_0; }>; readonly "section"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0; readonly "properties": ReportSectionV1_0_0; }>; };
/** Native schema for ReportFormattingObjects with exact versioned dependencies. */
export const ReportReportFormattingObjectsV1_0_0: Schema.Codec<ReportReportFormattingObjectsV1_0_0> = closed({ "outspacePane": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0.Selector)), "properties": Schema.suspend(() => ReportOutspacePaneV1_0_0) }))), "section": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0.Selector)), "properties": Schema.suspend(() => ReportSectionV1_0_0) }))) });

/** OutspacePane in report 1.0.0. */
export type ReportOutspacePaneV1_0_0 = { readonly "expanded"?: Schema.Json; readonly "visible"?: Schema.Json; };
/** Native schema for OutspacePane with exact versioned dependencies. */
export const ReportOutspacePaneV1_0_0: Schema.Codec<ReportOutspacePaneV1_0_0> = closed({ "expanded": Schema.optionalKey(Schema.Json), "visible": Schema.optionalKey(Schema.Json) });

/** Section in report 1.0.0. */
export type ReportSectionV1_0_0 = { readonly "verticalAlignment"?: Schema.Json; };
/** Native schema for Section with exact versioned dependencies. */
export const ReportSectionV1_0_0: Schema.Codec<ReportSectionV1_0_0> = closed({ "verticalAlignment": Schema.optionalKey(Schema.Json) });

/** ResourcePackage in report 1.0.0. */
export type ReportResourcePackageV1_0_0 = { readonly "id"?: number; readonly "name": string; readonly "type": ReportResourcePackageTypeV1_0_0; readonly "items": ReadonlyArray<ReportResourcePackageItemV1_0_0>; readonly "disabled"?: boolean; };
/** Native schema for ResourcePackage with exact versioned dependencies. */
export const ReportResourcePackageV1_0_0: Schema.Codec<ReportResourcePackageV1_0_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "type": Schema.suspend(() => ReportResourcePackageTypeV1_0_0), "items": Schema.Array(Schema.suspend(() => ReportResourcePackageItemV1_0_0)), "disabled": Schema.optionalKey(Schema.Boolean) });

/** ResourcePackageType in report 1.0.0. */
export type ReportResourcePackageTypeV1_0_0 = ("CustomVisual") | ("RegisteredResources") | ("SharedResources") | ("OrganizationalStoreCustomVisual");
/** Native schema for ResourcePackageType with exact versioned dependencies. */
export const ReportResourcePackageTypeV1_0_0: Schema.Codec<ReportResourcePackageTypeV1_0_0> = Schema.Union([Schema.Literal("CustomVisual"), Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources"), Schema.Literal("OrganizationalStoreCustomVisual")]);

/** ResourcePackageItem in report 1.0.0. */
export type ReportResourcePackageItemV1_0_0 = { readonly "id"?: number; readonly "name": string; readonly "path": string; readonly "type": ReportResourcePackageItemTypeV1_0_0; };
/** Native schema for ResourcePackageItem with exact versioned dependencies. */
export const ReportResourcePackageItemV1_0_0: Schema.Codec<ReportResourcePackageItemV1_0_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "path": Schema.String, "type": Schema.suspend(() => ReportResourcePackageItemTypeV1_0_0) });

/** ResourcePackageItemType in report 1.0.0. */
export type ReportResourcePackageItemTypeV1_0_0 = ("CustomVisualJavascript") | ("CustomVisualsCss") | ("CustomVisualScreenshot") | ("CustomVisualIcon") | ("CustomVisualWatermark") | ("CustomVisualMetadata") | ("Image") | ("ShapeMap") | ("CustomTheme") | ("BaseTheme") | ("DashboardTheme") | ("DashboardBaseTheme") | ("HighContrastTheme") | ("AppNavigation") | ("AppTheme") | ("AppBaseTheme");
/** Native schema for ResourcePackageItemType with exact versioned dependencies. */
export const ReportResourcePackageItemTypeV1_0_0: Schema.Codec<ReportResourcePackageItemTypeV1_0_0> = Schema.Union([Schema.Literal("CustomVisualJavascript"), Schema.Literal("CustomVisualsCss"), Schema.Literal("CustomVisualScreenshot"), Schema.Literal("CustomVisualIcon"), Schema.Literal("CustomVisualWatermark"), Schema.Literal("CustomVisualMetadata"), Schema.Literal("Image"), Schema.Literal("ShapeMap"), Schema.Literal("CustomTheme"), Schema.Literal("BaseTheme"), Schema.Literal("DashboardTheme"), Schema.Literal("DashboardBaseTheme"), Schema.Literal("HighContrastTheme"), Schema.Literal("AppNavigation"), Schema.Literal("AppTheme"), Schema.Literal("AppBaseTheme")]);

/** OrganizationCustomVisual in report 1.0.0. */
export type ReportOrganizationCustomVisualV1_0_0 = { readonly "name": string; readonly "path": string; readonly "disabled"?: boolean; };
/** Native schema for OrganizationCustomVisual with exact versioned dependencies. */
export const ReportOrganizationCustomVisualV1_0_0: Schema.Codec<ReportOrganizationCustomVisualV1_0_0> = closed({ "name": Schema.String, "path": Schema.String, "disabled": Schema.optionalKey(Schema.Boolean) });

/** Annotation in report 1.0.0. */
export type ReportAnnotationV1_0_0 = { readonly "name": string; readonly "value": string; };
/** Native schema for Annotation with exact versioned dependencies. */
export const ReportAnnotationV1_0_0: Schema.Codec<ReportAnnotationV1_0_0> = closed({ "name": Schema.String, "value": Schema.String });

/** ExplorationSettings in report 1.0.0. */
export type ReportExplorationSettingsV1_0_0 = { readonly "isPersistentUserStateDisabled"?: boolean; readonly "hideVisualContainerHeader"?: boolean; readonly "useStylableVisualContainerHeader"?: boolean; readonly "exportDataMode"?: ("AllowSummarized") | ("AllowSummarizedAndUnderlying") | ("None"); readonly "isReportAnnotationsDisabled"?: boolean; readonly "defaultFilterActionIsDataFilter"?: boolean; readonly "defaultDrillFilterOtherVisuals"?: boolean; readonly "useCrossReportDrillthrough"?: boolean; readonly "allowChangeFilterTypes"?: boolean; readonly "allowInlineExploration"?: boolean; readonly "useEnhancedTooltips"?: boolean; readonly "useScaledTooltips"?: boolean; readonly "filterPaneHiddenInEditMode"?: boolean; readonly "disableFilterPaneSearch"?: boolean; readonly "pagesPosition"?: ("PagesPane") | ("Bottom"); readonly "allowAutomatedInsightsNotification"?: boolean; readonly "useDefaultAggregateDisplayName"?: boolean; readonly "enableDeveloperMode"?: boolean; readonly "pauseQueries"?: boolean; readonly "queryLimitOption"?: ("None") | ("Shared") | ("Premium") | ("SQLServerAS") | ("AzureAS") | ("Custom") | ("Auto"); readonly "customMemoryLimit"?: string; readonly "customTimeoutLimit"?: string; };
/** Native schema for ExplorationSettings with exact versioned dependencies. */
export const ReportExplorationSettingsV1_0_0: Schema.Codec<ReportExplorationSettingsV1_0_0> = closed({ "isPersistentUserStateDisabled": Schema.optionalKey(Schema.Boolean), "hideVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "useStylableVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "exportDataMode": Schema.optionalKey(Schema.Union([Schema.Literal("AllowSummarized"), Schema.Literal("AllowSummarizedAndUnderlying"), Schema.Literal("None")])), "isReportAnnotationsDisabled": Schema.optionalKey(Schema.Boolean), "defaultFilterActionIsDataFilter": Schema.optionalKey(Schema.Boolean), "defaultDrillFilterOtherVisuals": Schema.optionalKey(Schema.Boolean), "useCrossReportDrillthrough": Schema.optionalKey(Schema.Boolean), "allowChangeFilterTypes": Schema.optionalKey(Schema.Boolean), "allowInlineExploration": Schema.optionalKey(Schema.Boolean), "useEnhancedTooltips": Schema.optionalKey(Schema.Boolean), "useScaledTooltips": Schema.optionalKey(Schema.Boolean), "filterPaneHiddenInEditMode": Schema.optionalKey(Schema.Boolean), "disableFilterPaneSearch": Schema.optionalKey(Schema.Boolean), "pagesPosition": Schema.optionalKey(Schema.Union([Schema.Literal("PagesPane"), Schema.Literal("Bottom")])), "allowAutomatedInsightsNotification": Schema.optionalKey(Schema.Boolean), "useDefaultAggregateDisplayName": Schema.optionalKey(Schema.Boolean), "enableDeveloperMode": Schema.optionalKey(Schema.Boolean), "pauseQueries": Schema.optionalKey(Schema.Boolean), "queryLimitOption": Schema.optionalKey(Schema.Union([Schema.Literal("None"), Schema.Literal("Shared"), Schema.Literal("Premium"), Schema.Literal("SQLServerAS"), Schema.Literal("AzureAS"), Schema.Literal("Custom"), Schema.Literal("Auto")])), "customMemoryLimit": Schema.optionalKey(Schema.String), "customTimeoutLimit": Schema.optionalKey(Schema.String) });

/** ExplorationSlowDataSourceSettings in report 1.0.0. */
export type ReportExplorationSlowDataSourceSettingsV1_0_0 = { readonly "isCrossHighlightingDisabled"?: boolean; readonly "isSlicerSelectionsButtonEnabled"?: boolean; readonly "isFilterSelectionsButtonEnabled"?: boolean; readonly "isFieldWellButtonEnabled"?: boolean; readonly "isApplyAllButtonEnabled"?: boolean; };
/** Native schema for ExplorationSlowDataSourceSettings with exact versioned dependencies. */
export const ReportExplorationSlowDataSourceSettingsV1_0_0: Schema.Codec<ReportExplorationSlowDataSourceSettingsV1_0_0> = closed({ "isCrossHighlightingDisabled": Schema.optionalKey(Schema.Boolean), "isSlicerSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFilterSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFieldWellButtonEnabled": Schema.optionalKey(Schema.Boolean), "isApplyAllButtonEnabled": Schema.optionalKey(Schema.Boolean) });

/** Named report definitions for 1.0.0. */
export const ReportDefinitionsV1_0_0 = {
  ThemeCollection: ReportThemeCollectionV1_0_0,
  ThemeMetadata: ReportThemeMetadataV1_0_0,
  ThemeResourcePackageType: ReportThemeResourcePackageTypeV1_0_0,
  LayoutOptimization: ReportLayoutOptimizationV1_0_0,
  FilterConfig: ReportFilterConfigV1_0_0,
  FilterContainer: ReportFilterContainerV1_0_0,
  FilterContainerFormattingObjects: ReportFilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties: ReportFilterContainerFormattingObjectsPropertiesV1_0_0,
  ReportFormattingObjects: ReportReportFormattingObjectsV1_0_0,
  OutspacePane: ReportOutspacePaneV1_0_0,
  Section: ReportSectionV1_0_0,
  ResourcePackage: ReportResourcePackageV1_0_0,
  ResourcePackageType: ReportResourcePackageTypeV1_0_0,
  ResourcePackageItem: ReportResourcePackageItemV1_0_0,
  ResourcePackageItemType: ReportResourcePackageItemTypeV1_0_0,
  OrganizationCustomVisual: ReportOrganizationCustomVisualV1_0_0,
  Annotation: ReportAnnotationV1_0_0,
  ExplorationSettings: ReportExplorationSettingsV1_0_0,
  ExplorationSlowDataSourceSettings: ReportExplorationSlowDataSourceSettingsV1_0_0
} as const;

/** Standalone report 1.0.0. */
export type ReportV1_0_0 = { readonly "themeCollection": ReportThemeCollectionV1_0_0; readonly "layoutOptimization": ReportLayoutOptimizationV1_0_0; readonly "filterConfig"?: ReportFilterConfigV1_0_0; readonly "objects"?: ReportReportFormattingObjectsV1_0_0; readonly "reportSource"?: ("Default") | ("SharePoint") | ("Teams") | ("QuickCreate") | ("EmbedQuickCreate") | ("Datamart") | ("DataExplore"); readonly "publicCustomVisuals"?: ReadonlyArray<string>; readonly "resourcePackages"?: ReadonlyArray<ReportResourcePackageV1_0_0>; readonly "organizationCustomVisuals"?: ReadonlyArray<ReportOrganizationCustomVisualV1_0_0>; readonly "annotations"?: ReadonlyArray<ReportAnnotationV1_0_0>; readonly "dataSourceVariables"?: string; readonly "settings"?: ReportExplorationSettingsV1_0_0; readonly "slowDataSourceSettings"?: ReportExplorationSlowDataSourceSettingsV1_0_0; readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.0.0/schema.json"; };
/** Native strict schema for ReportV1_0_0. */
export const ReportV1_0_0: Schema.Codec<ReportV1_0_0> = closed({ "themeCollection": Schema.suspend(() => ReportThemeCollectionV1_0_0), "layoutOptimization": Schema.suspend(() => ReportLayoutOptimizationV1_0_0), "filterConfig": Schema.optionalKey(Schema.suspend(() => ReportFilterConfigV1_0_0)), "objects": Schema.optionalKey(Schema.suspend(() => ReportReportFormattingObjectsV1_0_0)), "reportSource": Schema.optionalKey(Schema.Union([Schema.Literal("Default"), Schema.Literal("SharePoint"), Schema.Literal("Teams"), Schema.Literal("QuickCreate"), Schema.Literal("EmbedQuickCreate"), Schema.Literal("Datamart"), Schema.Literal("DataExplore")])), "publicCustomVisuals": Schema.optionalKey(Schema.Array(Schema.String)), "resourcePackages": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportResourcePackageV1_0_0))), "organizationCustomVisuals": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportOrganizationCustomVisualV1_0_0))), "annotations": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportAnnotationV1_0_0))), "dataSourceVariables": Schema.optionalKey(Schema.String), "settings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSettingsV1_0_0)), "slowDataSourceSettings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSlowDataSourceSettingsV1_0_0)), "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.0.0/schema.json") });

/** ThemeCollection in report 1.1.0. */
export type ReportThemeCollectionV1_1_0 = { readonly "baseTheme"?: ReportThemeMetadataV1_1_0; readonly "customTheme"?: ReportThemeMetadataV1_1_0; };
/** Native schema for ThemeCollection with exact versioned dependencies. */
export const ReportThemeCollectionV1_1_0: Schema.Codec<ReportThemeCollectionV1_1_0> = closed({ "baseTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV1_1_0)), "customTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV1_1_0)) });

/** ThemeMetadata in report 1.1.0. */
export type ReportThemeMetadataV1_1_0 = { readonly "name": string; readonly "reportVersionAtImport": string; readonly "type": ReportThemeResourcePackageTypeV1_1_0; };
/** Native schema for ThemeMetadata with exact versioned dependencies. */
export const ReportThemeMetadataV1_1_0: Schema.Codec<ReportThemeMetadataV1_1_0> = closed({ "name": Schema.String, "reportVersionAtImport": Schema.String, "type": Schema.suspend(() => ReportThemeResourcePackageTypeV1_1_0) });

/** ThemeResourcePackageType in report 1.1.0. */
export type ReportThemeResourcePackageTypeV1_1_0 = ("RegisteredResources") | ("SharedResources");
/** Native schema for ThemeResourcePackageType with exact versioned dependencies. */
export const ReportThemeResourcePackageTypeV1_1_0: Schema.Codec<ReportThemeResourcePackageTypeV1_1_0> = Schema.Union([Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources")]);

/** LayoutOptimization in report 1.1.0. */
export type ReportLayoutOptimizationV1_1_0 = ("None") | ("PhonePortrait");
/** Native schema for LayoutOptimization with exact versioned dependencies. */
export const ReportLayoutOptimizationV1_1_0: Schema.Codec<ReportLayoutOptimizationV1_1_0> = Schema.Union([Schema.Literal("None"), Schema.Literal("PhonePortrait")]);

/** FilterConfig in report 1.1.0. */
export type ReportFilterConfigV1_1_0 = { readonly "filters"?: ReadonlyArray<ReportFilterContainerV1_1_0>; readonly "filterSortOrder"?: ("Ascending") | ("Descending") | ("Custom"); };
/** Native schema for FilterConfig with exact versioned dependencies. */
export const ReportFilterConfigV1_1_0: Schema.Codec<ReportFilterConfigV1_1_0> = closed({ "filters": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportFilterContainerV1_1_0))), "filterSortOrder": Schema.optionalKey(Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending"), Schema.Literal("Custom")])) });

/** FilterContainer in report 1.1.0. */
export type ReportFilterContainerV1_1_0 = { readonly "name": string; readonly "displayName"?: string; readonly "ordinal"?: number; readonly "field"?: Query.QueryExpressionContainerV1_1_0; readonly "type"?: ("Categorical") | ("Range") | ("Advanced") | ("Passthrough") | ("TopN") | ("Include") | ("Exclude") | ("RelativeDate") | ("Tuple") | ("RelativeTime") | ("VisualTopN"); readonly "filter"?: Query.FilterDefinitionV1_1_0; readonly "restatement"?: string; readonly "howCreated"?: ("Auto") | ("User") | ("Drill") | ("Include") | ("Exclude") | ("Drillthrough"); readonly "isHiddenInViewMode"?: boolean; readonly "isLockedInViewMode"?: boolean; readonly "objects"?: ReportFilterContainerFormattingObjectsV1_1_0; };
/** Native schema for FilterContainer with exact versioned dependencies. */
export const ReportFilterContainerV1_1_0: Schema.Codec<ReportFilterContainerV1_1_0> = closed({ "name": Schema.String, "displayName": Schema.optionalKey(Schema.String), "ordinal": Schema.optionalKey(Schema.Finite), "field": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer)), "type": Schema.optionalKey(Schema.Union([Schema.Literal("Categorical"), Schema.Literal("Range"), Schema.Literal("Advanced"), Schema.Literal("Passthrough"), Schema.Literal("TopN"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("RelativeDate"), Schema.Literal("Tuple"), Schema.Literal("RelativeTime"), Schema.Literal("VisualTopN")])), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_1_0.FilterDefinition)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal("Auto"), Schema.Literal("User"), Schema.Literal("Drill"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("Drillthrough")])), "isHiddenInViewMode": Schema.optionalKey(Schema.Boolean), "isLockedInViewMode": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => ReportFilterContainerFormattingObjectsV1_1_0)) });

/** FilterContainerFormattingObjects in report 1.1.0. */
export type ReportFilterContainerFormattingObjectsV1_1_0 = { readonly "general"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0; readonly "properties": ReportFilterContainerFormattingObjectsPropertiesV1_1_0; }>; };
/** Native schema for FilterContainerFormattingObjects with exact versioned dependencies. */
export const ReportFilterContainerFormattingObjectsV1_1_0: Schema.Codec<ReportFilterContainerFormattingObjectsV1_1_0> = closed({ "general": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0.Selector)), "properties": Schema.suspend(() => ReportFilterContainerFormattingObjectsPropertiesV1_1_0) }))) });

/** FilterContainerFormattingObjectsProperties in report 1.1.0. */
export type ReportFilterContainerFormattingObjectsPropertiesV1_1_0 = { readonly "requireSingleSelect"?: Schema.Json; readonly "isInvertedSelectionMode"?: Schema.Json; };
/** Native schema for FilterContainerFormattingObjectsProperties with exact versioned dependencies. */
export const ReportFilterContainerFormattingObjectsPropertiesV1_1_0: Schema.Codec<ReportFilterContainerFormattingObjectsPropertiesV1_1_0> = closed({ "requireSingleSelect": Schema.optionalKey(Schema.Json), "isInvertedSelectionMode": Schema.optionalKey(Schema.Json) });

/** ReportFormattingObjects in report 1.1.0. */
export type ReportReportFormattingObjectsV1_1_0 = { readonly "outspacePane"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0; readonly "properties": ReportOutspacePaneV1_1_0; }>; readonly "section"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0; readonly "properties": ReportSectionV1_1_0; }>; };
/** Native schema for ReportFormattingObjects with exact versioned dependencies. */
export const ReportReportFormattingObjectsV1_1_0: Schema.Codec<ReportReportFormattingObjectsV1_1_0> = closed({ "outspacePane": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0.Selector)), "properties": Schema.suspend(() => ReportOutspacePaneV1_1_0) }))), "section": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0.Selector)), "properties": Schema.suspend(() => ReportSectionV1_1_0) }))) });

/** OutspacePane in report 1.1.0. */
export type ReportOutspacePaneV1_1_0 = { readonly "expanded"?: Schema.Json; readonly "visible"?: Schema.Json; };
/** Native schema for OutspacePane with exact versioned dependencies. */
export const ReportOutspacePaneV1_1_0: Schema.Codec<ReportOutspacePaneV1_1_0> = closed({ "expanded": Schema.optionalKey(Schema.Json), "visible": Schema.optionalKey(Schema.Json) });

/** Section in report 1.1.0. */
export type ReportSectionV1_1_0 = { readonly "verticalAlignment"?: Schema.Json; };
/** Native schema for Section with exact versioned dependencies. */
export const ReportSectionV1_1_0: Schema.Codec<ReportSectionV1_1_0> = closed({ "verticalAlignment": Schema.optionalKey(Schema.Json) });

/** ResourcePackage in report 1.1.0. */
export type ReportResourcePackageV1_1_0 = { readonly "id"?: number; readonly "name": string; readonly "type": ReportResourcePackageTypeV1_1_0; readonly "items": ReadonlyArray<ReportResourcePackageItemV1_1_0>; readonly "disabled"?: boolean; };
/** Native schema for ResourcePackage with exact versioned dependencies. */
export const ReportResourcePackageV1_1_0: Schema.Codec<ReportResourcePackageV1_1_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "type": Schema.suspend(() => ReportResourcePackageTypeV1_1_0), "items": Schema.Array(Schema.suspend(() => ReportResourcePackageItemV1_1_0)), "disabled": Schema.optionalKey(Schema.Boolean) });

/** ResourcePackageType in report 1.1.0. */
export type ReportResourcePackageTypeV1_1_0 = ("CustomVisual") | ("RegisteredResources") | ("SharedResources") | ("OrganizationalStoreCustomVisual");
/** Native schema for ResourcePackageType with exact versioned dependencies. */
export const ReportResourcePackageTypeV1_1_0: Schema.Codec<ReportResourcePackageTypeV1_1_0> = Schema.Union([Schema.Literal("CustomVisual"), Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources"), Schema.Literal("OrganizationalStoreCustomVisual")]);

/** ResourcePackageItem in report 1.1.0. */
export type ReportResourcePackageItemV1_1_0 = { readonly "id"?: number; readonly "name": string; readonly "path": string; readonly "type": ReportResourcePackageItemTypeV1_1_0; };
/** Native schema for ResourcePackageItem with exact versioned dependencies. */
export const ReportResourcePackageItemV1_1_0: Schema.Codec<ReportResourcePackageItemV1_1_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "path": Schema.String, "type": Schema.suspend(() => ReportResourcePackageItemTypeV1_1_0) });

/** ResourcePackageItemType in report 1.1.0. */
export type ReportResourcePackageItemTypeV1_1_0 = ("CustomVisualJavascript") | ("CustomVisualsCss") | ("CustomVisualScreenshot") | ("CustomVisualIcon") | ("CustomVisualWatermark") | ("CustomVisualMetadata") | ("Image") | ("ShapeMap") | ("CustomTheme") | ("BaseTheme") | ("DashboardTheme") | ("DashboardBaseTheme") | ("HighContrastTheme") | ("AppNavigation") | ("AppTheme") | ("AppBaseTheme");
/** Native schema for ResourcePackageItemType with exact versioned dependencies. */
export const ReportResourcePackageItemTypeV1_1_0: Schema.Codec<ReportResourcePackageItemTypeV1_1_0> = Schema.Union([Schema.Literal("CustomVisualJavascript"), Schema.Literal("CustomVisualsCss"), Schema.Literal("CustomVisualScreenshot"), Schema.Literal("CustomVisualIcon"), Schema.Literal("CustomVisualWatermark"), Schema.Literal("CustomVisualMetadata"), Schema.Literal("Image"), Schema.Literal("ShapeMap"), Schema.Literal("CustomTheme"), Schema.Literal("BaseTheme"), Schema.Literal("DashboardTheme"), Schema.Literal("DashboardBaseTheme"), Schema.Literal("HighContrastTheme"), Schema.Literal("AppNavigation"), Schema.Literal("AppTheme"), Schema.Literal("AppBaseTheme")]);

/** OrganizationCustomVisual in report 1.1.0. */
export type ReportOrganizationCustomVisualV1_1_0 = { readonly "name": string; readonly "path": string; readonly "disabled"?: boolean; };
/** Native schema for OrganizationCustomVisual with exact versioned dependencies. */
export const ReportOrganizationCustomVisualV1_1_0: Schema.Codec<ReportOrganizationCustomVisualV1_1_0> = closed({ "name": Schema.String, "path": Schema.String, "disabled": Schema.optionalKey(Schema.Boolean) });

/** Annotation in report 1.1.0. */
export type ReportAnnotationV1_1_0 = { readonly "name": string; readonly "value": string; };
/** Native schema for Annotation with exact versioned dependencies. */
export const ReportAnnotationV1_1_0: Schema.Codec<ReportAnnotationV1_1_0> = closed({ "name": Schema.String, "value": Schema.String });

/** ExplorationSettings in report 1.1.0. */
export type ReportExplorationSettingsV1_1_0 = { readonly "isPersistentUserStateDisabled"?: boolean; readonly "hideVisualContainerHeader"?: boolean; readonly "useStylableVisualContainerHeader"?: boolean; readonly "exportDataMode"?: ("AllowSummarized") | ("AllowSummarizedAndUnderlying") | ("None"); readonly "isReportAnnotationsDisabled"?: boolean; readonly "defaultFilterActionIsDataFilter"?: boolean; readonly "defaultDrillFilterOtherVisuals"?: boolean; readonly "useCrossReportDrillthrough"?: boolean; readonly "allowChangeFilterTypes"?: boolean; readonly "allowInlineExploration"?: boolean; readonly "useEnhancedTooltips"?: boolean; readonly "useScaledTooltips"?: boolean; readonly "filterPaneHiddenInEditMode"?: boolean; readonly "disableFilterPaneSearch"?: boolean; readonly "pagesPosition"?: ("PagesPane") | ("Bottom"); readonly "allowAutomatedInsightsNotification"?: boolean; readonly "useDefaultAggregateDisplayName"?: boolean; readonly "enableDeveloperMode"?: boolean; readonly "pauseQueries"?: boolean; readonly "queryLimitOption"?: ("None") | ("Shared") | ("Premium") | ("SQLServerAS") | ("AzureAS") | ("Custom") | ("Auto"); readonly "customMemoryLimit"?: string; readonly "customTimeoutLimit"?: string; };
/** Native schema for ExplorationSettings with exact versioned dependencies. */
export const ReportExplorationSettingsV1_1_0: Schema.Codec<ReportExplorationSettingsV1_1_0> = closed({ "isPersistentUserStateDisabled": Schema.optionalKey(Schema.Boolean), "hideVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "useStylableVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "exportDataMode": Schema.optionalKey(Schema.Union([Schema.Literal("AllowSummarized"), Schema.Literal("AllowSummarizedAndUnderlying"), Schema.Literal("None")])), "isReportAnnotationsDisabled": Schema.optionalKey(Schema.Boolean), "defaultFilterActionIsDataFilter": Schema.optionalKey(Schema.Boolean), "defaultDrillFilterOtherVisuals": Schema.optionalKey(Schema.Boolean), "useCrossReportDrillthrough": Schema.optionalKey(Schema.Boolean), "allowChangeFilterTypes": Schema.optionalKey(Schema.Boolean), "allowInlineExploration": Schema.optionalKey(Schema.Boolean), "useEnhancedTooltips": Schema.optionalKey(Schema.Boolean), "useScaledTooltips": Schema.optionalKey(Schema.Boolean), "filterPaneHiddenInEditMode": Schema.optionalKey(Schema.Boolean), "disableFilterPaneSearch": Schema.optionalKey(Schema.Boolean), "pagesPosition": Schema.optionalKey(Schema.Union([Schema.Literal("PagesPane"), Schema.Literal("Bottom")])), "allowAutomatedInsightsNotification": Schema.optionalKey(Schema.Boolean), "useDefaultAggregateDisplayName": Schema.optionalKey(Schema.Boolean), "enableDeveloperMode": Schema.optionalKey(Schema.Boolean), "pauseQueries": Schema.optionalKey(Schema.Boolean), "queryLimitOption": Schema.optionalKey(Schema.Union([Schema.Literal("None"), Schema.Literal("Shared"), Schema.Literal("Premium"), Schema.Literal("SQLServerAS"), Schema.Literal("AzureAS"), Schema.Literal("Custom"), Schema.Literal("Auto")])), "customMemoryLimit": Schema.optionalKey(Schema.String), "customTimeoutLimit": Schema.optionalKey(Schema.String) });

/** ExplorationSlowDataSourceSettings in report 1.1.0. */
export type ReportExplorationSlowDataSourceSettingsV1_1_0 = { readonly "isCrossHighlightingDisabled"?: boolean; readonly "isSlicerSelectionsButtonEnabled"?: boolean; readonly "isFilterSelectionsButtonEnabled"?: boolean; readonly "isFieldWellButtonEnabled"?: boolean; readonly "isApplyAllButtonEnabled"?: boolean; };
/** Native schema for ExplorationSlowDataSourceSettings with exact versioned dependencies. */
export const ReportExplorationSlowDataSourceSettingsV1_1_0: Schema.Codec<ReportExplorationSlowDataSourceSettingsV1_1_0> = closed({ "isCrossHighlightingDisabled": Schema.optionalKey(Schema.Boolean), "isSlicerSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFilterSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFieldWellButtonEnabled": Schema.optionalKey(Schema.Boolean), "isApplyAllButtonEnabled": Schema.optionalKey(Schema.Boolean) });

/** Named report definitions for 1.1.0. */
export const ReportDefinitionsV1_1_0 = {
  ThemeCollection: ReportThemeCollectionV1_1_0,
  ThemeMetadata: ReportThemeMetadataV1_1_0,
  ThemeResourcePackageType: ReportThemeResourcePackageTypeV1_1_0,
  LayoutOptimization: ReportLayoutOptimizationV1_1_0,
  FilterConfig: ReportFilterConfigV1_1_0,
  FilterContainer: ReportFilterContainerV1_1_0,
  FilterContainerFormattingObjects: ReportFilterContainerFormattingObjectsV1_1_0,
  FilterContainerFormattingObjectsProperties: ReportFilterContainerFormattingObjectsPropertiesV1_1_0,
  ReportFormattingObjects: ReportReportFormattingObjectsV1_1_0,
  OutspacePane: ReportOutspacePaneV1_1_0,
  Section: ReportSectionV1_1_0,
  ResourcePackage: ReportResourcePackageV1_1_0,
  ResourcePackageType: ReportResourcePackageTypeV1_1_0,
  ResourcePackageItem: ReportResourcePackageItemV1_1_0,
  ResourcePackageItemType: ReportResourcePackageItemTypeV1_1_0,
  OrganizationCustomVisual: ReportOrganizationCustomVisualV1_1_0,
  Annotation: ReportAnnotationV1_1_0,
  ExplorationSettings: ReportExplorationSettingsV1_1_0,
  ExplorationSlowDataSourceSettings: ReportExplorationSlowDataSourceSettingsV1_1_0
} as const;

/** Standalone report 1.1.0. */
export type ReportV1_1_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.1.0/schema.json"; readonly "themeCollection": ReportThemeCollectionV1_1_0; readonly "layoutOptimization": ReportLayoutOptimizationV1_1_0; readonly "filterConfig"?: ReportFilterConfigV1_1_0; readonly "objects"?: ReportReportFormattingObjectsV1_1_0; readonly "reportSource"?: ("Default") | ("SharePoint") | ("Teams") | ("QuickCreate") | ("EmbedQuickCreate") | ("Datamart") | ("DataExplore"); readonly "publicCustomVisuals"?: ReadonlyArray<string>; readonly "resourcePackages"?: ReadonlyArray<ReportResourcePackageV1_1_0>; readonly "organizationCustomVisuals"?: ReadonlyArray<ReportOrganizationCustomVisualV1_1_0>; readonly "annotations"?: ReadonlyArray<ReportAnnotationV1_1_0>; readonly "dataSourceVariables"?: string; readonly "settings"?: ReportExplorationSettingsV1_1_0; readonly "slowDataSourceSettings"?: ReportExplorationSlowDataSourceSettingsV1_1_0; };
/** Native strict schema for ReportV1_1_0. */
export const ReportV1_1_0: Schema.Codec<ReportV1_1_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.1.0/schema.json"), "themeCollection": Schema.suspend(() => ReportThemeCollectionV1_1_0), "layoutOptimization": Schema.suspend(() => ReportLayoutOptimizationV1_1_0), "filterConfig": Schema.optionalKey(Schema.suspend(() => ReportFilterConfigV1_1_0)), "objects": Schema.optionalKey(Schema.suspend(() => ReportReportFormattingObjectsV1_1_0)), "reportSource": Schema.optionalKey(Schema.Union([Schema.Literal("Default"), Schema.Literal("SharePoint"), Schema.Literal("Teams"), Schema.Literal("QuickCreate"), Schema.Literal("EmbedQuickCreate"), Schema.Literal("Datamart"), Schema.Literal("DataExplore")])), "publicCustomVisuals": Schema.optionalKey(Schema.Array(Schema.String)), "resourcePackages": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportResourcePackageV1_1_0))), "organizationCustomVisuals": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportOrganizationCustomVisualV1_1_0))), "annotations": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportAnnotationV1_1_0))), "dataSourceVariables": Schema.optionalKey(Schema.String), "settings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSettingsV1_1_0)), "slowDataSourceSettings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSlowDataSourceSettingsV1_1_0)) });

/** ThemeCollection in report 1.2.0. */
export type ReportThemeCollectionV1_2_0 = { readonly "baseTheme"?: ReportThemeMetadataV1_2_0; readonly "customTheme"?: ReportThemeMetadataV1_2_0; };
/** Native schema for ThemeCollection with exact versioned dependencies. */
export const ReportThemeCollectionV1_2_0: Schema.Codec<ReportThemeCollectionV1_2_0> = closed({ "baseTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV1_2_0)), "customTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV1_2_0)) });

/** ThemeMetadata in report 1.2.0. */
export type ReportThemeMetadataV1_2_0 = { readonly "name": string; readonly "reportVersionAtImport": string; readonly "type": ReportThemeResourcePackageTypeV1_2_0; };
/** Native schema for ThemeMetadata with exact versioned dependencies. */
export const ReportThemeMetadataV1_2_0: Schema.Codec<ReportThemeMetadataV1_2_0> = closed({ "name": Schema.String, "reportVersionAtImport": Schema.String, "type": Schema.suspend(() => ReportThemeResourcePackageTypeV1_2_0) });

/** ThemeResourcePackageType in report 1.2.0. */
export type ReportThemeResourcePackageTypeV1_2_0 = ("RegisteredResources") | ("SharedResources");
/** Native schema for ThemeResourcePackageType with exact versioned dependencies. */
export const ReportThemeResourcePackageTypeV1_2_0: Schema.Codec<ReportThemeResourcePackageTypeV1_2_0> = Schema.Union([Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources")]);

/** LayoutOptimization in report 1.2.0. */
export type ReportLayoutOptimizationV1_2_0 = ("None") | ("PhonePortrait");
/** Native schema for LayoutOptimization with exact versioned dependencies. */
export const ReportLayoutOptimizationV1_2_0: Schema.Codec<ReportLayoutOptimizationV1_2_0> = Schema.Union([Schema.Literal("None"), Schema.Literal("PhonePortrait")]);

/** FilterConfig in report 1.2.0. */
export type ReportFilterConfigV1_2_0 = { readonly "filters"?: ReadonlyArray<ReportFilterContainerV1_2_0>; readonly "filterSortOrder"?: ("Ascending") | ("Descending") | ("Custom"); };
/** Native schema for FilterConfig with exact versioned dependencies. */
export const ReportFilterConfigV1_2_0: Schema.Codec<ReportFilterConfigV1_2_0> = closed({ "filters": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportFilterContainerV1_2_0))), "filterSortOrder": Schema.optionalKey(Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending"), Schema.Literal("Custom")])) });

/** FilterContainer in report 1.2.0. */
export type ReportFilterContainerV1_2_0 = { readonly "name": string; readonly "displayName"?: string; readonly "ordinal"?: number; readonly "field"?: Query.QueryExpressionContainerV1_2_0; readonly "type"?: ("Categorical") | ("Range") | ("Advanced") | ("Passthrough") | ("TopN") | ("Include") | ("Exclude") | ("RelativeDate") | ("Tuple") | ("RelativeTime") | ("VisualTopN"); readonly "filter"?: Query.FilterDefinitionV1_2_0; readonly "restatement"?: string; readonly "howCreated"?: ("Auto") | ("User") | ("Drill") | ("Include") | ("Exclude") | ("Drillthrough"); readonly "isHiddenInViewMode"?: boolean; readonly "isLockedInViewMode"?: boolean; readonly "objects"?: ReportFilterContainerFormattingObjectsV1_2_0; };
/** Native schema for FilterContainer with exact versioned dependencies. */
export const ReportFilterContainerV1_2_0: Schema.Codec<ReportFilterContainerV1_2_0> = closed({ "name": Schema.String, "displayName": Schema.optionalKey(Schema.String), "ordinal": Schema.optionalKey(Schema.Finite), "field": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer)), "type": Schema.optionalKey(Schema.Union([Schema.Literal("Categorical"), Schema.Literal("Range"), Schema.Literal("Advanced"), Schema.Literal("Passthrough"), Schema.Literal("TopN"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("RelativeDate"), Schema.Literal("Tuple"), Schema.Literal("RelativeTime"), Schema.Literal("VisualTopN")])), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.FilterDefinition)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal("Auto"), Schema.Literal("User"), Schema.Literal("Drill"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("Drillthrough")])), "isHiddenInViewMode": Schema.optionalKey(Schema.Boolean), "isLockedInViewMode": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => ReportFilterContainerFormattingObjectsV1_2_0)) });

/** FilterContainerFormattingObjects in report 1.2.0. */
export type ReportFilterContainerFormattingObjectsV1_2_0 = { readonly "general"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0; readonly "properties": ReportFilterContainerFormattingObjectsPropertiesV1_2_0; }>; };
/** Native schema for FilterContainerFormattingObjects with exact versioned dependencies. */
export const ReportFilterContainerFormattingObjectsV1_2_0: Schema.Codec<ReportFilterContainerFormattingObjectsV1_2_0> = closed({ "general": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0.Selector)), "properties": Schema.suspend(() => ReportFilterContainerFormattingObjectsPropertiesV1_2_0) }))) });

/** FilterContainerFormattingObjectsProperties in report 1.2.0. */
export type ReportFilterContainerFormattingObjectsPropertiesV1_2_0 = { readonly "requireSingleSelect"?: Schema.Json; readonly "isInvertedSelectionMode"?: Schema.Json; };
/** Native schema for FilterContainerFormattingObjectsProperties with exact versioned dependencies. */
export const ReportFilterContainerFormattingObjectsPropertiesV1_2_0: Schema.Codec<ReportFilterContainerFormattingObjectsPropertiesV1_2_0> = closed({ "requireSingleSelect": Schema.optionalKey(Schema.Json), "isInvertedSelectionMode": Schema.optionalKey(Schema.Json) });

/** ReportFormattingObjects in report 1.2.0. */
export type ReportReportFormattingObjectsV1_2_0 = { readonly "outspacePane"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0; readonly "properties": ReportOutspacePaneV1_2_0; }>; readonly "section"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0; readonly "properties": ReportSectionV1_2_0; }>; };
/** Native schema for ReportFormattingObjects with exact versioned dependencies. */
export const ReportReportFormattingObjectsV1_2_0: Schema.Codec<ReportReportFormattingObjectsV1_2_0> = closed({ "outspacePane": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0.Selector)), "properties": Schema.suspend(() => ReportOutspacePaneV1_2_0) }))), "section": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0.Selector)), "properties": Schema.suspend(() => ReportSectionV1_2_0) }))) });

/** OutspacePane in report 1.2.0. */
export type ReportOutspacePaneV1_2_0 = { readonly "expanded"?: Schema.Json; readonly "visible"?: Schema.Json; };
/** Native schema for OutspacePane with exact versioned dependencies. */
export const ReportOutspacePaneV1_2_0: Schema.Codec<ReportOutspacePaneV1_2_0> = closed({ "expanded": Schema.optionalKey(Schema.Json), "visible": Schema.optionalKey(Schema.Json) });

/** Section in report 1.2.0. */
export type ReportSectionV1_2_0 = { readonly "verticalAlignment"?: Schema.Json; };
/** Native schema for Section with exact versioned dependencies. */
export const ReportSectionV1_2_0: Schema.Codec<ReportSectionV1_2_0> = closed({ "verticalAlignment": Schema.optionalKey(Schema.Json) });

/** ResourcePackage in report 1.2.0. */
export type ReportResourcePackageV1_2_0 = { readonly "id"?: number; readonly "name": string; readonly "type": ReportResourcePackageTypeV1_2_0; readonly "items": ReadonlyArray<ReportResourcePackageItemV1_2_0>; readonly "disabled"?: boolean; };
/** Native schema for ResourcePackage with exact versioned dependencies. */
export const ReportResourcePackageV1_2_0: Schema.Codec<ReportResourcePackageV1_2_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "type": Schema.suspend(() => ReportResourcePackageTypeV1_2_0), "items": Schema.Array(Schema.suspend(() => ReportResourcePackageItemV1_2_0)), "disabled": Schema.optionalKey(Schema.Boolean) });

/** ResourcePackageType in report 1.2.0. */
export type ReportResourcePackageTypeV1_2_0 = ("CustomVisual") | ("RegisteredResources") | ("SharedResources") | ("OrganizationalStoreCustomVisual");
/** Native schema for ResourcePackageType with exact versioned dependencies. */
export const ReportResourcePackageTypeV1_2_0: Schema.Codec<ReportResourcePackageTypeV1_2_0> = Schema.Union([Schema.Literal("CustomVisual"), Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources"), Schema.Literal("OrganizationalStoreCustomVisual")]);

/** ResourcePackageItem in report 1.2.0. */
export type ReportResourcePackageItemV1_2_0 = { readonly "id"?: number; readonly "name": string; readonly "path": string; readonly "type": ReportResourcePackageItemTypeV1_2_0; };
/** Native schema for ResourcePackageItem with exact versioned dependencies. */
export const ReportResourcePackageItemV1_2_0: Schema.Codec<ReportResourcePackageItemV1_2_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "path": Schema.String, "type": Schema.suspend(() => ReportResourcePackageItemTypeV1_2_0) });

/** ResourcePackageItemType in report 1.2.0. */
export type ReportResourcePackageItemTypeV1_2_0 = ("CustomVisualJavascript") | ("CustomVisualsCss") | ("CustomVisualScreenshot") | ("CustomVisualIcon") | ("CustomVisualWatermark") | ("CustomVisualMetadata") | ("Image") | ("ShapeMap") | ("CustomTheme") | ("BaseTheme") | ("DashboardTheme") | ("DashboardBaseTheme") | ("HighContrastTheme") | ("AppNavigation") | ("AppTheme") | ("AppBaseTheme");
/** Native schema for ResourcePackageItemType with exact versioned dependencies. */
export const ReportResourcePackageItemTypeV1_2_0: Schema.Codec<ReportResourcePackageItemTypeV1_2_0> = Schema.Union([Schema.Literal("CustomVisualJavascript"), Schema.Literal("CustomVisualsCss"), Schema.Literal("CustomVisualScreenshot"), Schema.Literal("CustomVisualIcon"), Schema.Literal("CustomVisualWatermark"), Schema.Literal("CustomVisualMetadata"), Schema.Literal("Image"), Schema.Literal("ShapeMap"), Schema.Literal("CustomTheme"), Schema.Literal("BaseTheme"), Schema.Literal("DashboardTheme"), Schema.Literal("DashboardBaseTheme"), Schema.Literal("HighContrastTheme"), Schema.Literal("AppNavigation"), Schema.Literal("AppTheme"), Schema.Literal("AppBaseTheme")]);

/** OrganizationCustomVisual in report 1.2.0. */
export type ReportOrganizationCustomVisualV1_2_0 = { readonly "name": string; readonly "path": string; readonly "disabled"?: boolean; };
/** Native schema for OrganizationCustomVisual with exact versioned dependencies. */
export const ReportOrganizationCustomVisualV1_2_0: Schema.Codec<ReportOrganizationCustomVisualV1_2_0> = closed({ "name": Schema.String, "path": Schema.String, "disabled": Schema.optionalKey(Schema.Boolean) });

/** Annotation in report 1.2.0. */
export type ReportAnnotationV1_2_0 = { readonly "name": string; readonly "value": string; };
/** Native schema for Annotation with exact versioned dependencies. */
export const ReportAnnotationV1_2_0: Schema.Codec<ReportAnnotationV1_2_0> = closed({ "name": Schema.String, "value": Schema.String });

/** ExplorationSettings in report 1.2.0. */
export type ReportExplorationSettingsV1_2_0 = { readonly "isPersistentUserStateDisabled"?: boolean; readonly "hideVisualContainerHeader"?: boolean; readonly "useStylableVisualContainerHeader"?: boolean; readonly "exportDataMode"?: ("AllowSummarized") | ("AllowSummarizedAndUnderlying") | ("None"); readonly "isReportAnnotationsDisabled"?: boolean; readonly "defaultFilterActionIsDataFilter"?: boolean; readonly "defaultDrillFilterOtherVisuals"?: boolean; readonly "useCrossReportDrillthrough"?: boolean; readonly "allowChangeFilterTypes"?: boolean; readonly "allowInlineExploration"?: boolean; readonly "useEnhancedTooltips"?: boolean; readonly "useScaledTooltips"?: boolean; readonly "filterPaneHiddenInEditMode"?: boolean; readonly "disableFilterPaneSearch"?: boolean; readonly "pagesPosition"?: ("PagesPane") | ("Bottom"); readonly "allowAutomatedInsightsNotification"?: boolean; readonly "useDefaultAggregateDisplayName"?: boolean; readonly "enableDeveloperMode"?: boolean; readonly "pauseQueries"?: boolean; readonly "queryLimitOption"?: ("None") | ("Shared") | ("Premium") | ("SQLServerAS") | ("AzureAS") | ("Custom") | ("Auto"); readonly "customMemoryLimit"?: string; readonly "customTimeoutLimit"?: string; };
/** Native schema for ExplorationSettings with exact versioned dependencies. */
export const ReportExplorationSettingsV1_2_0: Schema.Codec<ReportExplorationSettingsV1_2_0> = closed({ "isPersistentUserStateDisabled": Schema.optionalKey(Schema.Boolean), "hideVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "useStylableVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "exportDataMode": Schema.optionalKey(Schema.Union([Schema.Literal("AllowSummarized"), Schema.Literal("AllowSummarizedAndUnderlying"), Schema.Literal("None")])), "isReportAnnotationsDisabled": Schema.optionalKey(Schema.Boolean), "defaultFilterActionIsDataFilter": Schema.optionalKey(Schema.Boolean), "defaultDrillFilterOtherVisuals": Schema.optionalKey(Schema.Boolean), "useCrossReportDrillthrough": Schema.optionalKey(Schema.Boolean), "allowChangeFilterTypes": Schema.optionalKey(Schema.Boolean), "allowInlineExploration": Schema.optionalKey(Schema.Boolean), "useEnhancedTooltips": Schema.optionalKey(Schema.Boolean), "useScaledTooltips": Schema.optionalKey(Schema.Boolean), "filterPaneHiddenInEditMode": Schema.optionalKey(Schema.Boolean), "disableFilterPaneSearch": Schema.optionalKey(Schema.Boolean), "pagesPosition": Schema.optionalKey(Schema.Union([Schema.Literal("PagesPane"), Schema.Literal("Bottom")])), "allowAutomatedInsightsNotification": Schema.optionalKey(Schema.Boolean), "useDefaultAggregateDisplayName": Schema.optionalKey(Schema.Boolean), "enableDeveloperMode": Schema.optionalKey(Schema.Boolean), "pauseQueries": Schema.optionalKey(Schema.Boolean), "queryLimitOption": Schema.optionalKey(Schema.Union([Schema.Literal("None"), Schema.Literal("Shared"), Schema.Literal("Premium"), Schema.Literal("SQLServerAS"), Schema.Literal("AzureAS"), Schema.Literal("Custom"), Schema.Literal("Auto")])), "customMemoryLimit": Schema.optionalKey(Schema.String), "customTimeoutLimit": Schema.optionalKey(Schema.String) });

/** ExplorationSlowDataSourceSettings in report 1.2.0. */
export type ReportExplorationSlowDataSourceSettingsV1_2_0 = { readonly "isCrossHighlightingDisabled"?: boolean; readonly "isSlicerSelectionsButtonEnabled"?: boolean; readonly "isFilterSelectionsButtonEnabled"?: boolean; readonly "isFieldWellButtonEnabled"?: boolean; readonly "isApplyAllButtonEnabled"?: boolean; };
/** Native schema for ExplorationSlowDataSourceSettings with exact versioned dependencies. */
export const ReportExplorationSlowDataSourceSettingsV1_2_0: Schema.Codec<ReportExplorationSlowDataSourceSettingsV1_2_0> = closed({ "isCrossHighlightingDisabled": Schema.optionalKey(Schema.Boolean), "isSlicerSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFilterSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFieldWellButtonEnabled": Schema.optionalKey(Schema.Boolean), "isApplyAllButtonEnabled": Schema.optionalKey(Schema.Boolean) });

/** Named report definitions for 1.2.0. */
export const ReportDefinitionsV1_2_0 = {
  ThemeCollection: ReportThemeCollectionV1_2_0,
  ThemeMetadata: ReportThemeMetadataV1_2_0,
  ThemeResourcePackageType: ReportThemeResourcePackageTypeV1_2_0,
  LayoutOptimization: ReportLayoutOptimizationV1_2_0,
  FilterConfig: ReportFilterConfigV1_2_0,
  FilterContainer: ReportFilterContainerV1_2_0,
  FilterContainerFormattingObjects: ReportFilterContainerFormattingObjectsV1_2_0,
  FilterContainerFormattingObjectsProperties: ReportFilterContainerFormattingObjectsPropertiesV1_2_0,
  ReportFormattingObjects: ReportReportFormattingObjectsV1_2_0,
  OutspacePane: ReportOutspacePaneV1_2_0,
  Section: ReportSectionV1_2_0,
  ResourcePackage: ReportResourcePackageV1_2_0,
  ResourcePackageType: ReportResourcePackageTypeV1_2_0,
  ResourcePackageItem: ReportResourcePackageItemV1_2_0,
  ResourcePackageItemType: ReportResourcePackageItemTypeV1_2_0,
  OrganizationCustomVisual: ReportOrganizationCustomVisualV1_2_0,
  Annotation: ReportAnnotationV1_2_0,
  ExplorationSettings: ReportExplorationSettingsV1_2_0,
  ExplorationSlowDataSourceSettings: ReportExplorationSlowDataSourceSettingsV1_2_0
} as const;

/** Standalone report 1.2.0. */
export type ReportV1_2_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.2.0/schema.json"; readonly "themeCollection": ReportThemeCollectionV1_2_0; readonly "layoutOptimization": ReportLayoutOptimizationV1_2_0; readonly "filterConfig"?: ReportFilterConfigV1_2_0; readonly "objects"?: ReportReportFormattingObjectsV1_2_0; readonly "reportSource"?: ("Default") | ("SharePoint") | ("Teams") | ("QuickCreate") | ("EmbedQuickCreate") | ("Datamart") | ("DataExplore"); readonly "publicCustomVisuals"?: ReadonlyArray<string>; readonly "resourcePackages"?: ReadonlyArray<ReportResourcePackageV1_2_0>; readonly "organizationCustomVisuals"?: ReadonlyArray<ReportOrganizationCustomVisualV1_2_0>; readonly "annotations"?: ReadonlyArray<ReportAnnotationV1_2_0>; readonly "dataSourceVariables"?: string; readonly "settings"?: ReportExplorationSettingsV1_2_0; readonly "slowDataSourceSettings"?: ReportExplorationSlowDataSourceSettingsV1_2_0; };
/** Native strict schema for ReportV1_2_0. */
export const ReportV1_2_0: Schema.Codec<ReportV1_2_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.2.0/schema.json"), "themeCollection": Schema.suspend(() => ReportThemeCollectionV1_2_0), "layoutOptimization": Schema.suspend(() => ReportLayoutOptimizationV1_2_0), "filterConfig": Schema.optionalKey(Schema.suspend(() => ReportFilterConfigV1_2_0)), "objects": Schema.optionalKey(Schema.suspend(() => ReportReportFormattingObjectsV1_2_0)), "reportSource": Schema.optionalKey(Schema.Union([Schema.Literal("Default"), Schema.Literal("SharePoint"), Schema.Literal("Teams"), Schema.Literal("QuickCreate"), Schema.Literal("EmbedQuickCreate"), Schema.Literal("Datamart"), Schema.Literal("DataExplore")])), "publicCustomVisuals": Schema.optionalKey(Schema.Array(Schema.String)), "resourcePackages": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportResourcePackageV1_2_0))), "organizationCustomVisuals": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportOrganizationCustomVisualV1_2_0))), "annotations": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportAnnotationV1_2_0))), "dataSourceVariables": Schema.optionalKey(Schema.String), "settings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSettingsV1_2_0)), "slowDataSourceSettings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSlowDataSourceSettingsV1_2_0)) });

/** ThemeCollection in report 1.3.0. */
export type ReportThemeCollectionV1_3_0 = { readonly "baseTheme"?: ReportThemeMetadataV1_3_0; readonly "customTheme"?: ReportThemeMetadataV1_3_0; };
/** Native schema for ThemeCollection with exact versioned dependencies. */
export const ReportThemeCollectionV1_3_0: Schema.Codec<ReportThemeCollectionV1_3_0> = closed({ "baseTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV1_3_0)), "customTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV1_3_0)) });

/** ThemeMetadata in report 1.3.0. */
export type ReportThemeMetadataV1_3_0 = { readonly "name": string; readonly "reportVersionAtImport": string; readonly "type": ReportThemeResourcePackageTypeV1_3_0; };
/** Native schema for ThemeMetadata with exact versioned dependencies. */
export const ReportThemeMetadataV1_3_0: Schema.Codec<ReportThemeMetadataV1_3_0> = closed({ "name": Schema.String, "reportVersionAtImport": Schema.String, "type": Schema.suspend(() => ReportThemeResourcePackageTypeV1_3_0) });

/** ThemeResourcePackageType in report 1.3.0. */
export type ReportThemeResourcePackageTypeV1_3_0 = ("RegisteredResources") | ("SharedResources");
/** Native schema for ThemeResourcePackageType with exact versioned dependencies. */
export const ReportThemeResourcePackageTypeV1_3_0: Schema.Codec<ReportThemeResourcePackageTypeV1_3_0> = Schema.Union([Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources")]);

/** LayoutOptimization in report 1.3.0. */
export type ReportLayoutOptimizationV1_3_0 = ("None") | ("PhonePortrait");
/** Native schema for LayoutOptimization with exact versioned dependencies. */
export const ReportLayoutOptimizationV1_3_0: Schema.Codec<ReportLayoutOptimizationV1_3_0> = Schema.Union([Schema.Literal("None"), Schema.Literal("PhonePortrait")]);

/** ReportFormattingObjects in report 1.3.0. */
export type ReportReportFormattingObjectsV1_3_0 = { readonly "outspacePane"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0; readonly "properties": ReportOutspacePaneV1_3_0; }>; readonly "section"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0; readonly "properties": ReportSectionV1_3_0; }>; };
/** Native schema for ReportFormattingObjects with exact versioned dependencies. */
export const ReportReportFormattingObjectsV1_3_0: Schema.Codec<ReportReportFormattingObjectsV1_3_0> = closed({ "outspacePane": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0.Selector)), "properties": Schema.suspend(() => ReportOutspacePaneV1_3_0) }))), "section": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0.Selector)), "properties": Schema.suspend(() => ReportSectionV1_3_0) }))) });

/** OutspacePane in report 1.3.0. */
export type ReportOutspacePaneV1_3_0 = { readonly "expanded"?: Schema.Json; readonly "visible"?: Schema.Json; };
/** Native schema for OutspacePane with exact versioned dependencies. */
export const ReportOutspacePaneV1_3_0: Schema.Codec<ReportOutspacePaneV1_3_0> = closed({ "expanded": Schema.optionalKey(Schema.Json), "visible": Schema.optionalKey(Schema.Json) });

/** Section in report 1.3.0. */
export type ReportSectionV1_3_0 = { readonly "verticalAlignment"?: Schema.Json; };
/** Native schema for Section with exact versioned dependencies. */
export const ReportSectionV1_3_0: Schema.Codec<ReportSectionV1_3_0> = closed({ "verticalAlignment": Schema.optionalKey(Schema.Json) });

/** ResourcePackage in report 1.3.0. */
export type ReportResourcePackageV1_3_0 = { readonly "id"?: number; readonly "name": string; readonly "type": ReportResourcePackageTypeV1_3_0; readonly "items": ReadonlyArray<ReportResourcePackageItemV1_3_0>; readonly "disabled"?: boolean; };
/** Native schema for ResourcePackage with exact versioned dependencies. */
export const ReportResourcePackageV1_3_0: Schema.Codec<ReportResourcePackageV1_3_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "type": Schema.suspend(() => ReportResourcePackageTypeV1_3_0), "items": Schema.Array(Schema.suspend(() => ReportResourcePackageItemV1_3_0)), "disabled": Schema.optionalKey(Schema.Boolean) });

/** ResourcePackageType in report 1.3.0. */
export type ReportResourcePackageTypeV1_3_0 = ("CustomVisual") | ("RegisteredResources") | ("SharedResources") | ("OrganizationalStoreCustomVisual");
/** Native schema for ResourcePackageType with exact versioned dependencies. */
export const ReportResourcePackageTypeV1_3_0: Schema.Codec<ReportResourcePackageTypeV1_3_0> = Schema.Union([Schema.Literal("CustomVisual"), Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources"), Schema.Literal("OrganizationalStoreCustomVisual")]);

/** ResourcePackageItem in report 1.3.0. */
export type ReportResourcePackageItemV1_3_0 = { readonly "id"?: number; readonly "name": string; readonly "path": string; readonly "type": ReportResourcePackageItemTypeV1_3_0; };
/** Native schema for ResourcePackageItem with exact versioned dependencies. */
export const ReportResourcePackageItemV1_3_0: Schema.Codec<ReportResourcePackageItemV1_3_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "path": Schema.String, "type": Schema.suspend(() => ReportResourcePackageItemTypeV1_3_0) });

/** ResourcePackageItemType in report 1.3.0. */
export type ReportResourcePackageItemTypeV1_3_0 = ("CustomVisualJavascript") | ("CustomVisualsCss") | ("CustomVisualScreenshot") | ("CustomVisualIcon") | ("CustomVisualWatermark") | ("CustomVisualMetadata") | ("Image") | ("ShapeMap") | ("CustomTheme") | ("BaseTheme") | ("DashboardTheme") | ("DashboardBaseTheme") | ("HighContrastTheme") | ("AppNavigation") | ("AppTheme") | ("AppBaseTheme");
/** Native schema for ResourcePackageItemType with exact versioned dependencies. */
export const ReportResourcePackageItemTypeV1_3_0: Schema.Codec<ReportResourcePackageItemTypeV1_3_0> = Schema.Union([Schema.Literal("CustomVisualJavascript"), Schema.Literal("CustomVisualsCss"), Schema.Literal("CustomVisualScreenshot"), Schema.Literal("CustomVisualIcon"), Schema.Literal("CustomVisualWatermark"), Schema.Literal("CustomVisualMetadata"), Schema.Literal("Image"), Schema.Literal("ShapeMap"), Schema.Literal("CustomTheme"), Schema.Literal("BaseTheme"), Schema.Literal("DashboardTheme"), Schema.Literal("DashboardBaseTheme"), Schema.Literal("HighContrastTheme"), Schema.Literal("AppNavigation"), Schema.Literal("AppTheme"), Schema.Literal("AppBaseTheme")]);

/** OrganizationCustomVisual in report 1.3.0. */
export type ReportOrganizationCustomVisualV1_3_0 = { readonly "name": string; readonly "path": string; readonly "disabled"?: boolean; };
/** Native schema for OrganizationCustomVisual with exact versioned dependencies. */
export const ReportOrganizationCustomVisualV1_3_0: Schema.Codec<ReportOrganizationCustomVisualV1_3_0> = closed({ "name": Schema.String, "path": Schema.String, "disabled": Schema.optionalKey(Schema.Boolean) });

/** Annotation in report 1.3.0. */
export type ReportAnnotationV1_3_0 = { readonly "name": string; readonly "value": string; };
/** Native schema for Annotation with exact versioned dependencies. */
export const ReportAnnotationV1_3_0: Schema.Codec<ReportAnnotationV1_3_0> = closed({ "name": Schema.String, "value": Schema.String });

/** ExplorationSettings in report 1.3.0. */
export type ReportExplorationSettingsV1_3_0 = { readonly "isPersistentUserStateDisabled"?: boolean; readonly "hideVisualContainerHeader"?: boolean; readonly "useStylableVisualContainerHeader"?: boolean; readonly "exportDataMode"?: ("AllowSummarized") | ("AllowSummarizedAndUnderlying") | ("None"); readonly "isReportAnnotationsDisabled"?: boolean; readonly "defaultFilterActionIsDataFilter"?: boolean; readonly "defaultDrillFilterOtherVisuals"?: boolean; readonly "useCrossReportDrillthrough"?: boolean; readonly "allowChangeFilterTypes"?: boolean; readonly "allowInlineExploration"?: boolean; readonly "useEnhancedTooltips"?: boolean; readonly "useScaledTooltips"?: boolean; readonly "filterPaneHiddenInEditMode"?: boolean; readonly "disableFilterPaneSearch"?: boolean; readonly "pagesPosition"?: ("PagesPane") | ("Bottom"); readonly "allowAutomatedInsightsNotification"?: boolean; readonly "useDefaultAggregateDisplayName"?: boolean; readonly "enableDeveloperMode"?: boolean; readonly "pauseQueries"?: boolean; readonly "queryLimitOption"?: ("None") | ("Shared") | ("Premium") | ("SQLServerAS") | ("AzureAS") | ("Custom") | ("Auto"); readonly "customMemoryLimit"?: string; readonly "customTimeoutLimit"?: string; };
/** Native schema for ExplorationSettings with exact versioned dependencies. */
export const ReportExplorationSettingsV1_3_0: Schema.Codec<ReportExplorationSettingsV1_3_0> = closed({ "isPersistentUserStateDisabled": Schema.optionalKey(Schema.Boolean), "hideVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "useStylableVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "exportDataMode": Schema.optionalKey(Schema.Union([Schema.Literal("AllowSummarized"), Schema.Literal("AllowSummarizedAndUnderlying"), Schema.Literal("None")])), "isReportAnnotationsDisabled": Schema.optionalKey(Schema.Boolean), "defaultFilterActionIsDataFilter": Schema.optionalKey(Schema.Boolean), "defaultDrillFilterOtherVisuals": Schema.optionalKey(Schema.Boolean), "useCrossReportDrillthrough": Schema.optionalKey(Schema.Boolean), "allowChangeFilterTypes": Schema.optionalKey(Schema.Boolean), "allowInlineExploration": Schema.optionalKey(Schema.Boolean), "useEnhancedTooltips": Schema.optionalKey(Schema.Boolean), "useScaledTooltips": Schema.optionalKey(Schema.Boolean), "filterPaneHiddenInEditMode": Schema.optionalKey(Schema.Boolean), "disableFilterPaneSearch": Schema.optionalKey(Schema.Boolean), "pagesPosition": Schema.optionalKey(Schema.Union([Schema.Literal("PagesPane"), Schema.Literal("Bottom")])), "allowAutomatedInsightsNotification": Schema.optionalKey(Schema.Boolean), "useDefaultAggregateDisplayName": Schema.optionalKey(Schema.Boolean), "enableDeveloperMode": Schema.optionalKey(Schema.Boolean), "pauseQueries": Schema.optionalKey(Schema.Boolean), "queryLimitOption": Schema.optionalKey(Schema.Union([Schema.Literal("None"), Schema.Literal("Shared"), Schema.Literal("Premium"), Schema.Literal("SQLServerAS"), Schema.Literal("AzureAS"), Schema.Literal("Custom"), Schema.Literal("Auto")])), "customMemoryLimit": Schema.optionalKey(Schema.String), "customTimeoutLimit": Schema.optionalKey(Schema.String) });

/** ExplorationSlowDataSourceSettings in report 1.3.0. */
export type ReportExplorationSlowDataSourceSettingsV1_3_0 = { readonly "isCrossHighlightingDisabled"?: boolean; readonly "isSlicerSelectionsButtonEnabled"?: boolean; readonly "isFilterSelectionsButtonEnabled"?: boolean; readonly "isFieldWellButtonEnabled"?: boolean; readonly "isApplyAllButtonEnabled"?: boolean; };
/** Native schema for ExplorationSlowDataSourceSettings with exact versioned dependencies. */
export const ReportExplorationSlowDataSourceSettingsV1_3_0: Schema.Codec<ReportExplorationSlowDataSourceSettingsV1_3_0> = closed({ "isCrossHighlightingDisabled": Schema.optionalKey(Schema.Boolean), "isSlicerSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFilterSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFieldWellButtonEnabled": Schema.optionalKey(Schema.Boolean), "isApplyAllButtonEnabled": Schema.optionalKey(Schema.Boolean) });

/** Named report definitions for 1.3.0. */
export const ReportDefinitionsV1_3_0 = {
  ThemeCollection: ReportThemeCollectionV1_3_0,
  ThemeMetadata: ReportThemeMetadataV1_3_0,
  ThemeResourcePackageType: ReportThemeResourcePackageTypeV1_3_0,
  LayoutOptimization: ReportLayoutOptimizationV1_3_0,
  ReportFormattingObjects: ReportReportFormattingObjectsV1_3_0,
  OutspacePane: ReportOutspacePaneV1_3_0,
  Section: ReportSectionV1_3_0,
  ResourcePackage: ReportResourcePackageV1_3_0,
  ResourcePackageType: ReportResourcePackageTypeV1_3_0,
  ResourcePackageItem: ReportResourcePackageItemV1_3_0,
  ResourcePackageItemType: ReportResourcePackageItemTypeV1_3_0,
  OrganizationCustomVisual: ReportOrganizationCustomVisualV1_3_0,
  Annotation: ReportAnnotationV1_3_0,
  ExplorationSettings: ReportExplorationSettingsV1_3_0,
  ExplorationSlowDataSourceSettings: ReportExplorationSlowDataSourceSettingsV1_3_0
} as const;

/** Standalone report 1.3.0. */
export type ReportV1_3_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.3.0/schema.json"; readonly "themeCollection": ReportThemeCollectionV1_3_0; readonly "layoutOptimization": ReportLayoutOptimizationV1_3_0; readonly "filterConfig"?: Formatting.FilterConfigurationEmbeddedV1_1_0; readonly "objects"?: ReportReportFormattingObjectsV1_3_0; readonly "reportSource"?: ("Default") | ("SharePoint") | ("Teams") | ("QuickCreate") | ("EmbedQuickCreate") | ("Datamart") | ("DataExplore"); readonly "publicCustomVisuals"?: ReadonlyArray<string>; readonly "resourcePackages"?: ReadonlyArray<ReportResourcePackageV1_3_0>; readonly "organizationCustomVisuals"?: ReadonlyArray<ReportOrganizationCustomVisualV1_3_0>; readonly "annotations"?: ReadonlyArray<ReportAnnotationV1_3_0>; readonly "dataSourceVariables"?: string; readonly "settings"?: ReportExplorationSettingsV1_3_0; readonly "slowDataSourceSettings"?: ReportExplorationSlowDataSourceSettingsV1_3_0; };
/** Native strict schema for ReportV1_3_0. */
export const ReportV1_3_0: Schema.Codec<ReportV1_3_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.3.0/schema.json"), "themeCollection": Schema.suspend(() => ReportThemeCollectionV1_3_0), "layoutOptimization": Schema.suspend(() => ReportLayoutOptimizationV1_3_0), "filterConfig": Schema.optionalKey(Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_1_0)), "objects": Schema.optionalKey(Schema.suspend(() => ReportReportFormattingObjectsV1_3_0)), "reportSource": Schema.optionalKey(Schema.Union([Schema.Literal("Default"), Schema.Literal("SharePoint"), Schema.Literal("Teams"), Schema.Literal("QuickCreate"), Schema.Literal("EmbedQuickCreate"), Schema.Literal("Datamart"), Schema.Literal("DataExplore")])), "publicCustomVisuals": Schema.optionalKey(Schema.Array(Schema.String)), "resourcePackages": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportResourcePackageV1_3_0))), "organizationCustomVisuals": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportOrganizationCustomVisualV1_3_0))), "annotations": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportAnnotationV1_3_0))), "dataSourceVariables": Schema.optionalKey(Schema.String), "settings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSettingsV1_3_0)), "slowDataSourceSettings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSlowDataSourceSettingsV1_3_0)) });

/** ThemeCollection in report 2.0.0. */
export type ReportThemeCollectionV2_0_0 = { readonly "baseTheme"?: ReportThemeMetadataV2_0_0; readonly "customTheme"?: ReportThemeMetadataV2_0_0; };
/** Native schema for ThemeCollection with exact versioned dependencies. */
export const ReportThemeCollectionV2_0_0: Schema.Codec<ReportThemeCollectionV2_0_0> = closed({ "baseTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV2_0_0)), "customTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV2_0_0)) });

/** ThemeMetadata in report 2.0.0. */
export type ReportThemeMetadataV2_0_0 = { readonly "name": string; readonly "reportVersionAtImport": string; readonly "type": ReportThemeResourcePackageTypeV2_0_0; };
/** Native schema for ThemeMetadata with exact versioned dependencies. */
export const ReportThemeMetadataV2_0_0: Schema.Codec<ReportThemeMetadataV2_0_0> = closed({ "name": Schema.String, "reportVersionAtImport": Schema.String, "type": Schema.suspend(() => ReportThemeResourcePackageTypeV2_0_0) });

/** ThemeResourcePackageType in report 2.0.0. */
export type ReportThemeResourcePackageTypeV2_0_0 = ("RegisteredResources") | ("SharedResources");
/** Native schema for ThemeResourcePackageType with exact versioned dependencies. */
export const ReportThemeResourcePackageTypeV2_0_0: Schema.Codec<ReportThemeResourcePackageTypeV2_0_0> = Schema.Union([Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources")]);

/** ReportFormattingObjects in report 2.0.0. */
export type ReportReportFormattingObjectsV2_0_0 = { readonly "outspacePane"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0; readonly "properties": ReportOutspacePaneV2_0_0; }>; readonly "section"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0; readonly "properties": ReportSectionV2_0_0; }>; };
/** Native schema for ReportFormattingObjects with exact versioned dependencies. */
export const ReportReportFormattingObjectsV2_0_0: Schema.Codec<ReportReportFormattingObjectsV2_0_0> = closed({ "outspacePane": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0.Selector)), "properties": Schema.suspend(() => ReportOutspacePaneV2_0_0) }))), "section": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0.Selector)), "properties": Schema.suspend(() => ReportSectionV2_0_0) }))) });

/** OutspacePane in report 2.0.0. */
export type ReportOutspacePaneV2_0_0 = { readonly "expanded"?: Schema.Json; readonly "visible"?: Schema.Json; };
/** Native schema for OutspacePane with exact versioned dependencies. */
export const ReportOutspacePaneV2_0_0: Schema.Codec<ReportOutspacePaneV2_0_0> = closed({ "expanded": Schema.optionalKey(Schema.Json), "visible": Schema.optionalKey(Schema.Json) });

/** Section in report 2.0.0. */
export type ReportSectionV2_0_0 = { readonly "verticalAlignment"?: Schema.Json; };
/** Native schema for Section with exact versioned dependencies. */
export const ReportSectionV2_0_0: Schema.Codec<ReportSectionV2_0_0> = closed({ "verticalAlignment": Schema.optionalKey(Schema.Json) });

/** ResourcePackage in report 2.0.0. */
export type ReportResourcePackageV2_0_0 = { readonly "id"?: number; readonly "name": string; readonly "type": ReportResourcePackageTypeV2_0_0; readonly "items": ReadonlyArray<ReportResourcePackageItemV2_0_0>; readonly "disabled"?: boolean; };
/** Native schema for ResourcePackage with exact versioned dependencies. */
export const ReportResourcePackageV2_0_0: Schema.Codec<ReportResourcePackageV2_0_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "type": Schema.suspend(() => ReportResourcePackageTypeV2_0_0), "items": Schema.Array(Schema.suspend(() => ReportResourcePackageItemV2_0_0)), "disabled": Schema.optionalKey(Schema.Boolean) });

/** ResourcePackageType in report 2.0.0. */
export type ReportResourcePackageTypeV2_0_0 = ("CustomVisual") | ("RegisteredResources") | ("SharedResources") | ("OrganizationalStoreCustomVisual");
/** Native schema for ResourcePackageType with exact versioned dependencies. */
export const ReportResourcePackageTypeV2_0_0: Schema.Codec<ReportResourcePackageTypeV2_0_0> = Schema.Union([Schema.Literal("CustomVisual"), Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources"), Schema.Literal("OrganizationalStoreCustomVisual")]);

/** ResourcePackageItem in report 2.0.0. */
export type ReportResourcePackageItemV2_0_0 = { readonly "id"?: number; readonly "name": string; readonly "path": string; readonly "type": ReportResourcePackageItemTypeV2_0_0; };
/** Native schema for ResourcePackageItem with exact versioned dependencies. */
export const ReportResourcePackageItemV2_0_0: Schema.Codec<ReportResourcePackageItemV2_0_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "path": Schema.String, "type": Schema.suspend(() => ReportResourcePackageItemTypeV2_0_0) });

/** ResourcePackageItemType in report 2.0.0. */
export type ReportResourcePackageItemTypeV2_0_0 = ("CustomVisualJavascript") | ("CustomVisualsCss") | ("CustomVisualScreenshot") | ("CustomVisualIcon") | ("CustomVisualWatermark") | ("CustomVisualMetadata") | ("Image") | ("ShapeMap") | ("CustomTheme") | ("BaseTheme") | ("DashboardTheme") | ("DashboardBaseTheme") | ("HighContrastTheme") | ("AppNavigation") | ("AppTheme") | ("AppBaseTheme");
/** Native schema for ResourcePackageItemType with exact versioned dependencies. */
export const ReportResourcePackageItemTypeV2_0_0: Schema.Codec<ReportResourcePackageItemTypeV2_0_0> = Schema.Union([Schema.Literal("CustomVisualJavascript"), Schema.Literal("CustomVisualsCss"), Schema.Literal("CustomVisualScreenshot"), Schema.Literal("CustomVisualIcon"), Schema.Literal("CustomVisualWatermark"), Schema.Literal("CustomVisualMetadata"), Schema.Literal("Image"), Schema.Literal("ShapeMap"), Schema.Literal("CustomTheme"), Schema.Literal("BaseTheme"), Schema.Literal("DashboardTheme"), Schema.Literal("DashboardBaseTheme"), Schema.Literal("HighContrastTheme"), Schema.Literal("AppNavigation"), Schema.Literal("AppTheme"), Schema.Literal("AppBaseTheme")]);

/** OrganizationCustomVisual in report 2.0.0. */
export type ReportOrganizationCustomVisualV2_0_0 = { readonly "name": string; readonly "path": string; readonly "disabled"?: boolean; };
/** Native schema for OrganizationCustomVisual with exact versioned dependencies. */
export const ReportOrganizationCustomVisualV2_0_0: Schema.Codec<ReportOrganizationCustomVisualV2_0_0> = closed({ "name": Schema.String, "path": Schema.String, "disabled": Schema.optionalKey(Schema.Boolean) });

/** Annotation in report 2.0.0. */
export type ReportAnnotationV2_0_0 = { readonly "name": string; readonly "value": string; };
/** Native schema for Annotation with exact versioned dependencies. */
export const ReportAnnotationV2_0_0: Schema.Codec<ReportAnnotationV2_0_0> = closed({ "name": Schema.String, "value": Schema.String });

/** ExplorationSettings in report 2.0.0. */
export type ReportExplorationSettingsV2_0_0 = { readonly "isPersistentUserStateDisabled"?: boolean; readonly "hideVisualContainerHeader"?: boolean; readonly "useStylableVisualContainerHeader"?: boolean; readonly "exportDataMode"?: ("AllowSummarized") | ("AllowSummarizedAndUnderlying") | ("None"); readonly "isReportAnnotationsDisabled"?: boolean; readonly "defaultFilterActionIsDataFilter"?: boolean; readonly "defaultDrillFilterOtherVisuals"?: boolean; readonly "useCrossReportDrillthrough"?: boolean; readonly "allowChangeFilterTypes"?: boolean; readonly "allowInlineExploration"?: boolean; readonly "useEnhancedTooltips"?: boolean; readonly "useScaledTooltips"?: boolean; readonly "filterPaneHiddenInEditMode"?: boolean; readonly "disableFilterPaneSearch"?: boolean; readonly "pagesPosition"?: ("PagesPane") | ("Bottom"); readonly "allowAutomatedInsightsNotification"?: boolean; readonly "useDefaultAggregateDisplayName"?: boolean; readonly "enableDeveloperMode"?: boolean; readonly "pauseQueries"?: boolean; readonly "queryLimitOption"?: ("None") | ("Shared") | ("Premium") | ("SQLServerAS") | ("AzureAS") | ("Custom") | ("Auto"); readonly "customMemoryLimit"?: string; readonly "customTimeoutLimit"?: string; };
/** Native schema for ExplorationSettings with exact versioned dependencies. */
export const ReportExplorationSettingsV2_0_0: Schema.Codec<ReportExplorationSettingsV2_0_0> = closed({ "isPersistentUserStateDisabled": Schema.optionalKey(Schema.Boolean), "hideVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "useStylableVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "exportDataMode": Schema.optionalKey(Schema.Union([Schema.Literal("AllowSummarized"), Schema.Literal("AllowSummarizedAndUnderlying"), Schema.Literal("None")])), "isReportAnnotationsDisabled": Schema.optionalKey(Schema.Boolean), "defaultFilterActionIsDataFilter": Schema.optionalKey(Schema.Boolean), "defaultDrillFilterOtherVisuals": Schema.optionalKey(Schema.Boolean), "useCrossReportDrillthrough": Schema.optionalKey(Schema.Boolean), "allowChangeFilterTypes": Schema.optionalKey(Schema.Boolean), "allowInlineExploration": Schema.optionalKey(Schema.Boolean), "useEnhancedTooltips": Schema.optionalKey(Schema.Boolean), "useScaledTooltips": Schema.optionalKey(Schema.Boolean), "filterPaneHiddenInEditMode": Schema.optionalKey(Schema.Boolean), "disableFilterPaneSearch": Schema.optionalKey(Schema.Boolean), "pagesPosition": Schema.optionalKey(Schema.Union([Schema.Literal("PagesPane"), Schema.Literal("Bottom")])), "allowAutomatedInsightsNotification": Schema.optionalKey(Schema.Boolean), "useDefaultAggregateDisplayName": Schema.optionalKey(Schema.Boolean), "enableDeveloperMode": Schema.optionalKey(Schema.Boolean), "pauseQueries": Schema.optionalKey(Schema.Boolean), "queryLimitOption": Schema.optionalKey(Schema.Union([Schema.Literal("None"), Schema.Literal("Shared"), Schema.Literal("Premium"), Schema.Literal("SQLServerAS"), Schema.Literal("AzureAS"), Schema.Literal("Custom"), Schema.Literal("Auto")])), "customMemoryLimit": Schema.optionalKey(Schema.String), "customTimeoutLimit": Schema.optionalKey(Schema.String) });

/** ExplorationSlowDataSourceSettings in report 2.0.0. */
export type ReportExplorationSlowDataSourceSettingsV2_0_0 = { readonly "isCrossHighlightingDisabled"?: boolean; readonly "isSlicerSelectionsButtonEnabled"?: boolean; readonly "isFilterSelectionsButtonEnabled"?: boolean; readonly "isFieldWellButtonEnabled"?: boolean; readonly "isApplyAllButtonEnabled"?: boolean; };
/** Native schema for ExplorationSlowDataSourceSettings with exact versioned dependencies. */
export const ReportExplorationSlowDataSourceSettingsV2_0_0: Schema.Codec<ReportExplorationSlowDataSourceSettingsV2_0_0> = closed({ "isCrossHighlightingDisabled": Schema.optionalKey(Schema.Boolean), "isSlicerSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFilterSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFieldWellButtonEnabled": Schema.optionalKey(Schema.Boolean), "isApplyAllButtonEnabled": Schema.optionalKey(Schema.Boolean) });

/** Named report definitions for 2.0.0. */
export const ReportDefinitionsV2_0_0 = {
  ThemeCollection: ReportThemeCollectionV2_0_0,
  ThemeMetadata: ReportThemeMetadataV2_0_0,
  ThemeResourcePackageType: ReportThemeResourcePackageTypeV2_0_0,
  ReportFormattingObjects: ReportReportFormattingObjectsV2_0_0,
  OutspacePane: ReportOutspacePaneV2_0_0,
  Section: ReportSectionV2_0_0,
  ResourcePackage: ReportResourcePackageV2_0_0,
  ResourcePackageType: ReportResourcePackageTypeV2_0_0,
  ResourcePackageItem: ReportResourcePackageItemV2_0_0,
  ResourcePackageItemType: ReportResourcePackageItemTypeV2_0_0,
  OrganizationCustomVisual: ReportOrganizationCustomVisualV2_0_0,
  Annotation: ReportAnnotationV2_0_0,
  ExplorationSettings: ReportExplorationSettingsV2_0_0,
  ExplorationSlowDataSourceSettings: ReportExplorationSlowDataSourceSettingsV2_0_0
} as const;

/** Standalone report 2.0.0. */
export type ReportV2_0_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/2.0.0/schema.json"; readonly "themeCollection": ReportThemeCollectionV2_0_0; readonly "filterConfig"?: Formatting.FilterConfigurationEmbeddedV1_1_0; readonly "objects"?: ReportReportFormattingObjectsV2_0_0; readonly "reportSource"?: ("Default") | ("SharePoint") | ("Teams") | ("QuickCreate") | ("EmbedQuickCreate") | ("Datamart") | ("DataExplore"); readonly "publicCustomVisuals"?: ReadonlyArray<string>; readonly "resourcePackages"?: ReadonlyArray<ReportResourcePackageV2_0_0>; readonly "organizationCustomVisuals"?: ReadonlyArray<ReportOrganizationCustomVisualV2_0_0>; readonly "annotations"?: ReadonlyArray<ReportAnnotationV2_0_0>; readonly "dataSourceVariables"?: string; readonly "settings"?: ReportExplorationSettingsV2_0_0; readonly "slowDataSourceSettings"?: ReportExplorationSlowDataSourceSettingsV2_0_0; };
/** Native strict schema for ReportV2_0_0. */
export const ReportV2_0_0: Schema.Codec<ReportV2_0_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/2.0.0/schema.json"), "themeCollection": Schema.suspend(() => ReportThemeCollectionV2_0_0), "filterConfig": Schema.optionalKey(Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_1_0)), "objects": Schema.optionalKey(Schema.suspend(() => ReportReportFormattingObjectsV2_0_0)), "reportSource": Schema.optionalKey(Schema.Union([Schema.Literal("Default"), Schema.Literal("SharePoint"), Schema.Literal("Teams"), Schema.Literal("QuickCreate"), Schema.Literal("EmbedQuickCreate"), Schema.Literal("Datamart"), Schema.Literal("DataExplore")])), "publicCustomVisuals": Schema.optionalKey(Schema.Array(Schema.String)), "resourcePackages": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportResourcePackageV2_0_0))), "organizationCustomVisuals": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportOrganizationCustomVisualV2_0_0))), "annotations": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportAnnotationV2_0_0))), "dataSourceVariables": Schema.optionalKey(Schema.String), "settings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSettingsV2_0_0)), "slowDataSourceSettings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSlowDataSourceSettingsV2_0_0)) });

/** ThemeCollection in report 2.1.0. */
export type ReportThemeCollectionV2_1_0 = { readonly "baseTheme"?: ReportThemeMetadataV2_1_0; readonly "customTheme"?: ReportThemeMetadataV2_1_0; };
/** Native schema for ThemeCollection with exact versioned dependencies. */
export const ReportThemeCollectionV2_1_0: Schema.Codec<ReportThemeCollectionV2_1_0> = closed({ "baseTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV2_1_0)), "customTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV2_1_0)) });

/** ThemeMetadata in report 2.1.0. */
export type ReportThemeMetadataV2_1_0 = { readonly "name": string; readonly "reportVersionAtImport": string; readonly "type": ReportThemeResourcePackageTypeV2_1_0; };
/** Native schema for ThemeMetadata with exact versioned dependencies. */
export const ReportThemeMetadataV2_1_0: Schema.Codec<ReportThemeMetadataV2_1_0> = closed({ "name": Schema.String, "reportVersionAtImport": Schema.String, "type": Schema.suspend(() => ReportThemeResourcePackageTypeV2_1_0) });

/** ThemeResourcePackageType in report 2.1.0. */
export type ReportThemeResourcePackageTypeV2_1_0 = ("RegisteredResources") | ("SharedResources");
/** Native schema for ThemeResourcePackageType with exact versioned dependencies. */
export const ReportThemeResourcePackageTypeV2_1_0: Schema.Codec<ReportThemeResourcePackageTypeV2_1_0> = Schema.Union([Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources")]);

/** ReportFormattingObjects in report 2.1.0. */
export type ReportReportFormattingObjectsV2_1_0 = { readonly "outspacePane"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0; readonly "properties": ReportOutspacePaneV2_1_0; }>; readonly "section"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0; readonly "properties": ReportSectionV2_1_0; }>; };
/** Native schema for ReportFormattingObjects with exact versioned dependencies. */
export const ReportReportFormattingObjectsV2_1_0: Schema.Codec<ReportReportFormattingObjectsV2_1_0> = closed({ "outspacePane": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.Selector)), "properties": Schema.suspend(() => ReportOutspacePaneV2_1_0) }))), "section": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.Selector)), "properties": Schema.suspend(() => ReportSectionV2_1_0) }))) });

/** OutspacePane in report 2.1.0. */
export type ReportOutspacePaneV2_1_0 = { readonly "expanded"?: Schema.Json; readonly "visible"?: Schema.Json; };
/** Native schema for OutspacePane with exact versioned dependencies. */
export const ReportOutspacePaneV2_1_0: Schema.Codec<ReportOutspacePaneV2_1_0> = closed({ "expanded": Schema.optionalKey(Schema.Json), "visible": Schema.optionalKey(Schema.Json) });

/** Section in report 2.1.0. */
export type ReportSectionV2_1_0 = { readonly "verticalAlignment"?: Schema.Json; };
/** Native schema for Section with exact versioned dependencies. */
export const ReportSectionV2_1_0: Schema.Codec<ReportSectionV2_1_0> = closed({ "verticalAlignment": Schema.optionalKey(Schema.Json) });

/** ResourcePackage in report 2.1.0. */
export type ReportResourcePackageV2_1_0 = { readonly "id"?: number; readonly "name": string; readonly "type": ReportResourcePackageTypeV2_1_0; readonly "items": ReadonlyArray<ReportResourcePackageItemV2_1_0>; readonly "disabled"?: boolean; };
/** Native schema for ResourcePackage with exact versioned dependencies. */
export const ReportResourcePackageV2_1_0: Schema.Codec<ReportResourcePackageV2_1_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "type": Schema.suspend(() => ReportResourcePackageTypeV2_1_0), "items": Schema.Array(Schema.suspend(() => ReportResourcePackageItemV2_1_0)), "disabled": Schema.optionalKey(Schema.Boolean) });

/** ResourcePackageType in report 2.1.0. */
export type ReportResourcePackageTypeV2_1_0 = ("CustomVisual") | ("RegisteredResources") | ("SharedResources") | ("OrganizationalStoreCustomVisual");
/** Native schema for ResourcePackageType with exact versioned dependencies. */
export const ReportResourcePackageTypeV2_1_0: Schema.Codec<ReportResourcePackageTypeV2_1_0> = Schema.Union([Schema.Literal("CustomVisual"), Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources"), Schema.Literal("OrganizationalStoreCustomVisual")]);

/** ResourcePackageItem in report 2.1.0. */
export type ReportResourcePackageItemV2_1_0 = { readonly "id"?: number; readonly "name": string; readonly "path": string; readonly "type": ReportResourcePackageItemTypeV2_1_0; };
/** Native schema for ResourcePackageItem with exact versioned dependencies. */
export const ReportResourcePackageItemV2_1_0: Schema.Codec<ReportResourcePackageItemV2_1_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "path": Schema.String, "type": Schema.suspend(() => ReportResourcePackageItemTypeV2_1_0) });

/** ResourcePackageItemType in report 2.1.0. */
export type ReportResourcePackageItemTypeV2_1_0 = ("CustomVisualJavascript") | ("CustomVisualsCss") | ("CustomVisualScreenshot") | ("CustomVisualIcon") | ("CustomVisualWatermark") | ("CustomVisualMetadata") | ("Image") | ("ShapeMap") | ("CustomTheme") | ("BaseTheme") | ("DashboardTheme") | ("DashboardBaseTheme") | ("HighContrastTheme") | ("AppNavigation") | ("AppTheme") | ("AppBaseTheme");
/** Native schema for ResourcePackageItemType with exact versioned dependencies. */
export const ReportResourcePackageItemTypeV2_1_0: Schema.Codec<ReportResourcePackageItemTypeV2_1_0> = Schema.Union([Schema.Literal("CustomVisualJavascript"), Schema.Literal("CustomVisualsCss"), Schema.Literal("CustomVisualScreenshot"), Schema.Literal("CustomVisualIcon"), Schema.Literal("CustomVisualWatermark"), Schema.Literal("CustomVisualMetadata"), Schema.Literal("Image"), Schema.Literal("ShapeMap"), Schema.Literal("CustomTheme"), Schema.Literal("BaseTheme"), Schema.Literal("DashboardTheme"), Schema.Literal("DashboardBaseTheme"), Schema.Literal("HighContrastTheme"), Schema.Literal("AppNavigation"), Schema.Literal("AppTheme"), Schema.Literal("AppBaseTheme")]);

/** OrganizationCustomVisual in report 2.1.0. */
export type ReportOrganizationCustomVisualV2_1_0 = { readonly "name": string; readonly "path": string; readonly "disabled"?: boolean; };
/** Native schema for OrganizationCustomVisual with exact versioned dependencies. */
export const ReportOrganizationCustomVisualV2_1_0: Schema.Codec<ReportOrganizationCustomVisualV2_1_0> = closed({ "name": Schema.String, "path": Schema.String, "disabled": Schema.optionalKey(Schema.Boolean) });

/** Annotation in report 2.1.0. */
export type ReportAnnotationV2_1_0 = { readonly "name": string; readonly "value": string; };
/** Native schema for Annotation with exact versioned dependencies. */
export const ReportAnnotationV2_1_0: Schema.Codec<ReportAnnotationV2_1_0> = closed({ "name": Schema.String, "value": Schema.String });

/** ExplorationSettings in report 2.1.0. */
export type ReportExplorationSettingsV2_1_0 = { readonly "isPersistentUserStateDisabled"?: boolean; readonly "hideVisualContainerHeader"?: boolean; readonly "useStylableVisualContainerHeader"?: boolean; readonly "exportDataMode"?: ("AllowSummarized") | ("AllowSummarizedAndUnderlying") | ("None"); readonly "isReportAnnotationsDisabled"?: boolean; readonly "defaultFilterActionIsDataFilter"?: boolean; readonly "defaultDrillFilterOtherVisuals"?: boolean; readonly "useCrossReportDrillthrough"?: boolean; readonly "allowChangeFilterTypes"?: boolean; readonly "allowInlineExploration"?: boolean; readonly "useEnhancedTooltips"?: boolean; readonly "useScaledTooltips"?: boolean; readonly "filterPaneHiddenInEditMode"?: boolean; readonly "disableFilterPaneSearch"?: boolean; readonly "pagesPosition"?: ("PagesPane") | ("Bottom"); readonly "allowAutomatedInsightsNotification"?: boolean; readonly "useDefaultAggregateDisplayName"?: boolean; readonly "enableDeveloperMode"?: boolean; readonly "pauseQueries"?: boolean; readonly "queryLimitOption"?: ("None") | ("Shared") | ("Premium") | ("SQLServerAS") | ("AzureAS") | ("Custom") | ("Auto"); readonly "customMemoryLimit"?: string; readonly "customTimeoutLimit"?: string; };
/** Native schema for ExplorationSettings with exact versioned dependencies. */
export const ReportExplorationSettingsV2_1_0: Schema.Codec<ReportExplorationSettingsV2_1_0> = closed({ "isPersistentUserStateDisabled": Schema.optionalKey(Schema.Boolean), "hideVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "useStylableVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "exportDataMode": Schema.optionalKey(Schema.Union([Schema.Literal("AllowSummarized"), Schema.Literal("AllowSummarizedAndUnderlying"), Schema.Literal("None")])), "isReportAnnotationsDisabled": Schema.optionalKey(Schema.Boolean), "defaultFilterActionIsDataFilter": Schema.optionalKey(Schema.Boolean), "defaultDrillFilterOtherVisuals": Schema.optionalKey(Schema.Boolean), "useCrossReportDrillthrough": Schema.optionalKey(Schema.Boolean), "allowChangeFilterTypes": Schema.optionalKey(Schema.Boolean), "allowInlineExploration": Schema.optionalKey(Schema.Boolean), "useEnhancedTooltips": Schema.optionalKey(Schema.Boolean), "useScaledTooltips": Schema.optionalKey(Schema.Boolean), "filterPaneHiddenInEditMode": Schema.optionalKey(Schema.Boolean), "disableFilterPaneSearch": Schema.optionalKey(Schema.Boolean), "pagesPosition": Schema.optionalKey(Schema.Union([Schema.Literal("PagesPane"), Schema.Literal("Bottom")])), "allowAutomatedInsightsNotification": Schema.optionalKey(Schema.Boolean), "useDefaultAggregateDisplayName": Schema.optionalKey(Schema.Boolean), "enableDeveloperMode": Schema.optionalKey(Schema.Boolean), "pauseQueries": Schema.optionalKey(Schema.Boolean), "queryLimitOption": Schema.optionalKey(Schema.Union([Schema.Literal("None"), Schema.Literal("Shared"), Schema.Literal("Premium"), Schema.Literal("SQLServerAS"), Schema.Literal("AzureAS"), Schema.Literal("Custom"), Schema.Literal("Auto")])), "customMemoryLimit": Schema.optionalKey(Schema.String), "customTimeoutLimit": Schema.optionalKey(Schema.String) });

/** ExplorationSlowDataSourceSettings in report 2.1.0. */
export type ReportExplorationSlowDataSourceSettingsV2_1_0 = { readonly "isCrossHighlightingDisabled"?: boolean; readonly "isSlicerSelectionsButtonEnabled"?: boolean; readonly "isFilterSelectionsButtonEnabled"?: boolean; readonly "isFieldWellButtonEnabled"?: boolean; readonly "isApplyAllButtonEnabled"?: boolean; };
/** Native schema for ExplorationSlowDataSourceSettings with exact versioned dependencies. */
export const ReportExplorationSlowDataSourceSettingsV2_1_0: Schema.Codec<ReportExplorationSlowDataSourceSettingsV2_1_0> = closed({ "isCrossHighlightingDisabled": Schema.optionalKey(Schema.Boolean), "isSlicerSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFilterSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFieldWellButtonEnabled": Schema.optionalKey(Schema.Boolean), "isApplyAllButtonEnabled": Schema.optionalKey(Schema.Boolean) });

/** Named report definitions for 2.1.0. */
export const ReportDefinitionsV2_1_0 = {
  ThemeCollection: ReportThemeCollectionV2_1_0,
  ThemeMetadata: ReportThemeMetadataV2_1_0,
  ThemeResourcePackageType: ReportThemeResourcePackageTypeV2_1_0,
  ReportFormattingObjects: ReportReportFormattingObjectsV2_1_0,
  OutspacePane: ReportOutspacePaneV2_1_0,
  Section: ReportSectionV2_1_0,
  ResourcePackage: ReportResourcePackageV2_1_0,
  ResourcePackageType: ReportResourcePackageTypeV2_1_0,
  ResourcePackageItem: ReportResourcePackageItemV2_1_0,
  ResourcePackageItemType: ReportResourcePackageItemTypeV2_1_0,
  OrganizationCustomVisual: ReportOrganizationCustomVisualV2_1_0,
  Annotation: ReportAnnotationV2_1_0,
  ExplorationSettings: ReportExplorationSettingsV2_1_0,
  ExplorationSlowDataSourceSettings: ReportExplorationSlowDataSourceSettingsV2_1_0
} as const;

/** Standalone report 2.1.0. */
export type ReportV2_1_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/2.1.0/schema.json"; readonly "themeCollection": ReportThemeCollectionV2_1_0; readonly "filterConfig"?: Formatting.FilterConfigurationEmbeddedV1_2_0; readonly "objects"?: ReportReportFormattingObjectsV2_1_0; readonly "reportSource"?: ("Default") | ("SharePoint") | ("Teams") | ("QuickCreate") | ("EmbedQuickCreate") | ("Datamart") | ("DataExplore"); readonly "publicCustomVisuals"?: ReadonlyArray<string>; readonly "resourcePackages"?: ReadonlyArray<ReportResourcePackageV2_1_0>; readonly "organizationCustomVisuals"?: ReadonlyArray<ReportOrganizationCustomVisualV2_1_0>; readonly "annotations"?: ReadonlyArray<ReportAnnotationV2_1_0>; readonly "dataSourceVariables"?: string; readonly "settings"?: ReportExplorationSettingsV2_1_0; readonly "slowDataSourceSettings"?: ReportExplorationSlowDataSourceSettingsV2_1_0; };
/** Native strict schema for ReportV2_1_0. */
export const ReportV2_1_0: Schema.Codec<ReportV2_1_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/2.1.0/schema.json"), "themeCollection": Schema.suspend(() => ReportThemeCollectionV2_1_0), "filterConfig": Schema.optionalKey(Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0)), "objects": Schema.optionalKey(Schema.suspend(() => ReportReportFormattingObjectsV2_1_0)), "reportSource": Schema.optionalKey(Schema.Union([Schema.Literal("Default"), Schema.Literal("SharePoint"), Schema.Literal("Teams"), Schema.Literal("QuickCreate"), Schema.Literal("EmbedQuickCreate"), Schema.Literal("Datamart"), Schema.Literal("DataExplore")])), "publicCustomVisuals": Schema.optionalKey(Schema.Array(Schema.String)), "resourcePackages": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportResourcePackageV2_1_0))), "organizationCustomVisuals": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportOrganizationCustomVisualV2_1_0))), "annotations": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportAnnotationV2_1_0))), "dataSourceVariables": Schema.optionalKey(Schema.String), "settings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSettingsV2_1_0)), "slowDataSourceSettings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSlowDataSourceSettingsV2_1_0)) });

/** ThemeCollection in report 3.0.0. */
export type ReportThemeCollectionV3_0_0 = { readonly "baseTheme"?: ReportThemeMetadataV3_0_0; readonly "customTheme"?: ReportThemeMetadataV3_0_0; };
/** Native schema for ThemeCollection with exact versioned dependencies. */
export const ReportThemeCollectionV3_0_0: Schema.Codec<ReportThemeCollectionV3_0_0> = closed({ "baseTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV3_0_0)), "customTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV3_0_0)) });

/** ThemeMetadata in report 3.0.0. */
export type ReportThemeMetadataV3_0_0 = { readonly "name": string; readonly "reportVersionAtImport": ReportThemeVersionV3_0_0; readonly "type": ReportThemeResourcePackageTypeV3_0_0; };
/** Native schema for ThemeMetadata with exact versioned dependencies. */
export const ReportThemeMetadataV3_0_0: Schema.Codec<ReportThemeMetadataV3_0_0> = closed({ "name": Schema.String, "reportVersionAtImport": Schema.suspend(() => ReportThemeVersionV3_0_0), "type": Schema.suspend(() => ReportThemeResourcePackageTypeV3_0_0) });

/** ThemeVersion in report 3.0.0. */
export type ReportThemeVersionV3_0_0 = { readonly "visual": string; readonly "page": string; readonly "report": string; };
/** Native schema for ThemeVersion with exact versioned dependencies. */
export const ReportThemeVersionV3_0_0: Schema.Codec<ReportThemeVersionV3_0_0> = closed({ "visual": Schema.String.check(Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$"))), "page": Schema.String.check(Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$"))), "report": Schema.String.check(Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$"))) });

/** ThemeResourcePackageType in report 3.0.0. */
export type ReportThemeResourcePackageTypeV3_0_0 = ("RegisteredResources") | ("SharedResources");
/** Native schema for ThemeResourcePackageType with exact versioned dependencies. */
export const ReportThemeResourcePackageTypeV3_0_0: Schema.Codec<ReportThemeResourcePackageTypeV3_0_0> = Schema.Union([Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources")]);

/** ReportFormattingObjects in report 3.0.0. */
export type ReportReportFormattingObjectsV3_0_0 = { readonly "outspacePane"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0; readonly "properties": ReportOutspacePaneV3_0_0; }>; readonly "section"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0; readonly "properties": ReportSectionV3_0_0; }>; };
/** Native schema for ReportFormattingObjects with exact versioned dependencies. */
export const ReportReportFormattingObjectsV3_0_0: Schema.Codec<ReportReportFormattingObjectsV3_0_0> = closed({ "outspacePane": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.Selector)), "properties": Schema.suspend(() => ReportOutspacePaneV3_0_0) }))), "section": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.Selector)), "properties": Schema.suspend(() => ReportSectionV3_0_0) }))) });

/** OutspacePane in report 3.0.0. */
export type ReportOutspacePaneV3_0_0 = { readonly "expanded"?: Schema.Json; readonly "visible"?: Schema.Json; };
/** Native schema for OutspacePane with exact versioned dependencies. */
export const ReportOutspacePaneV3_0_0: Schema.Codec<ReportOutspacePaneV3_0_0> = closed({ "expanded": Schema.optionalKey(Schema.Json), "visible": Schema.optionalKey(Schema.Json) });

/** Section in report 3.0.0. */
export type ReportSectionV3_0_0 = { readonly "verticalAlignment"?: Schema.Json; };
/** Native schema for Section with exact versioned dependencies. */
export const ReportSectionV3_0_0: Schema.Codec<ReportSectionV3_0_0> = closed({ "verticalAlignment": Schema.optionalKey(Schema.Json) });

/** ResourcePackage in report 3.0.0. */
export type ReportResourcePackageV3_0_0 = { readonly "id"?: number; readonly "name": string; readonly "type": ReportResourcePackageTypeV3_0_0; readonly "items": ReadonlyArray<ReportResourcePackageItemV3_0_0>; readonly "disabled"?: boolean; };
/** Native schema for ResourcePackage with exact versioned dependencies. */
export const ReportResourcePackageV3_0_0: Schema.Codec<ReportResourcePackageV3_0_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "type": Schema.suspend(() => ReportResourcePackageTypeV3_0_0), "items": Schema.Array(Schema.suspend(() => ReportResourcePackageItemV3_0_0)), "disabled": Schema.optionalKey(Schema.Boolean) });

/** ResourcePackageType in report 3.0.0. */
export type ReportResourcePackageTypeV3_0_0 = ("CustomVisual") | ("RegisteredResources") | ("SharedResources") | ("OrganizationalStoreCustomVisual");
/** Native schema for ResourcePackageType with exact versioned dependencies. */
export const ReportResourcePackageTypeV3_0_0: Schema.Codec<ReportResourcePackageTypeV3_0_0> = Schema.Union([Schema.Literal("CustomVisual"), Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources"), Schema.Literal("OrganizationalStoreCustomVisual")]);

/** ResourcePackageItem in report 3.0.0. */
export type ReportResourcePackageItemV3_0_0 = { readonly "id"?: number; readonly "name": string; readonly "path": string; readonly "type": ReportResourcePackageItemTypeV3_0_0; };
/** Native schema for ResourcePackageItem with exact versioned dependencies. */
export const ReportResourcePackageItemV3_0_0: Schema.Codec<ReportResourcePackageItemV3_0_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "path": Schema.String, "type": Schema.suspend(() => ReportResourcePackageItemTypeV3_0_0) });

/** ResourcePackageItemType in report 3.0.0. */
export type ReportResourcePackageItemTypeV3_0_0 = ("CustomVisualJavascript") | ("CustomVisualsCss") | ("CustomVisualScreenshot") | ("CustomVisualIcon") | ("CustomVisualWatermark") | ("CustomVisualMetadata") | ("Image") | ("ShapeMap") | ("CustomTheme") | ("BaseTheme") | ("DashboardTheme") | ("DashboardBaseTheme") | ("HighContrastTheme") | ("AppNavigation") | ("AppTheme") | ("AppBaseTheme");
/** Native schema for ResourcePackageItemType with exact versioned dependencies. */
export const ReportResourcePackageItemTypeV3_0_0: Schema.Codec<ReportResourcePackageItemTypeV3_0_0> = Schema.Union([Schema.Literal("CustomVisualJavascript"), Schema.Literal("CustomVisualsCss"), Schema.Literal("CustomVisualScreenshot"), Schema.Literal("CustomVisualIcon"), Schema.Literal("CustomVisualWatermark"), Schema.Literal("CustomVisualMetadata"), Schema.Literal("Image"), Schema.Literal("ShapeMap"), Schema.Literal("CustomTheme"), Schema.Literal("BaseTheme"), Schema.Literal("DashboardTheme"), Schema.Literal("DashboardBaseTheme"), Schema.Literal("HighContrastTheme"), Schema.Literal("AppNavigation"), Schema.Literal("AppTheme"), Schema.Literal("AppBaseTheme")]);

/** OrganizationCustomVisual in report 3.0.0. */
export type ReportOrganizationCustomVisualV3_0_0 = { readonly "name": string; readonly "path": string; readonly "disabled"?: boolean; };
/** Native schema for OrganizationCustomVisual with exact versioned dependencies. */
export const ReportOrganizationCustomVisualV3_0_0: Schema.Codec<ReportOrganizationCustomVisualV3_0_0> = closed({ "name": Schema.String, "path": Schema.String, "disabled": Schema.optionalKey(Schema.Boolean) });

/** Annotation in report 3.0.0. */
export type ReportAnnotationV3_0_0 = { readonly "name": string; readonly "value": string; };
/** Native schema for Annotation with exact versioned dependencies. */
export const ReportAnnotationV3_0_0: Schema.Codec<ReportAnnotationV3_0_0> = closed({ "name": Schema.String, "value": Schema.String });

/** ExplorationSettings in report 3.0.0. */
export type ReportExplorationSettingsV3_0_0 = { readonly "isPersistentUserStateDisabled"?: boolean; readonly "hideVisualContainerHeader"?: boolean; readonly "useStylableVisualContainerHeader"?: boolean; readonly "exportDataMode"?: ("AllowSummarized") | ("AllowSummarizedAndUnderlying") | ("None"); readonly "isReportAnnotationsDisabled"?: boolean; readonly "defaultFilterActionIsDataFilter"?: boolean; readonly "defaultDrillFilterOtherVisuals"?: boolean; readonly "useCrossReportDrillthrough"?: boolean; readonly "allowChangeFilterTypes"?: boolean; readonly "allowInlineExploration"?: boolean; readonly "useEnhancedTooltips"?: boolean; readonly "useScaledTooltips"?: boolean; readonly "filterPaneHiddenInEditMode"?: boolean; readonly "disableFilterPaneSearch"?: boolean; readonly "pagesPosition"?: ("PagesPane") | ("Bottom"); readonly "allowAutomatedInsightsNotification"?: boolean; readonly "useDefaultAggregateDisplayName"?: boolean; readonly "enableDeveloperMode"?: boolean; readonly "pauseQueries"?: boolean; readonly "queryLimitOption"?: ("None") | ("Shared") | ("Premium") | ("SQLServerAS") | ("AzureAS") | ("Custom") | ("Auto"); readonly "customMemoryLimit"?: string; readonly "customTimeoutLimit"?: string; };
/** Native schema for ExplorationSettings with exact versioned dependencies. */
export const ReportExplorationSettingsV3_0_0: Schema.Codec<ReportExplorationSettingsV3_0_0> = closed({ "isPersistentUserStateDisabled": Schema.optionalKey(Schema.Boolean), "hideVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "useStylableVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "exportDataMode": Schema.optionalKey(Schema.Union([Schema.Literal("AllowSummarized"), Schema.Literal("AllowSummarizedAndUnderlying"), Schema.Literal("None")])), "isReportAnnotationsDisabled": Schema.optionalKey(Schema.Boolean), "defaultFilterActionIsDataFilter": Schema.optionalKey(Schema.Boolean), "defaultDrillFilterOtherVisuals": Schema.optionalKey(Schema.Boolean), "useCrossReportDrillthrough": Schema.optionalKey(Schema.Boolean), "allowChangeFilterTypes": Schema.optionalKey(Schema.Boolean), "allowInlineExploration": Schema.optionalKey(Schema.Boolean), "useEnhancedTooltips": Schema.optionalKey(Schema.Boolean), "useScaledTooltips": Schema.optionalKey(Schema.Boolean), "filterPaneHiddenInEditMode": Schema.optionalKey(Schema.Boolean), "disableFilterPaneSearch": Schema.optionalKey(Schema.Boolean), "pagesPosition": Schema.optionalKey(Schema.Union([Schema.Literal("PagesPane"), Schema.Literal("Bottom")])), "allowAutomatedInsightsNotification": Schema.optionalKey(Schema.Boolean), "useDefaultAggregateDisplayName": Schema.optionalKey(Schema.Boolean), "enableDeveloperMode": Schema.optionalKey(Schema.Boolean), "pauseQueries": Schema.optionalKey(Schema.Boolean), "queryLimitOption": Schema.optionalKey(Schema.Union([Schema.Literal("None"), Schema.Literal("Shared"), Schema.Literal("Premium"), Schema.Literal("SQLServerAS"), Schema.Literal("AzureAS"), Schema.Literal("Custom"), Schema.Literal("Auto")])), "customMemoryLimit": Schema.optionalKey(Schema.String), "customTimeoutLimit": Schema.optionalKey(Schema.String) });

/** ExplorationSlowDataSourceSettings in report 3.0.0. */
export type ReportExplorationSlowDataSourceSettingsV3_0_0 = { readonly "isCrossHighlightingDisabled"?: boolean; readonly "isSlicerSelectionsButtonEnabled"?: boolean; readonly "isFilterSelectionsButtonEnabled"?: boolean; readonly "isFieldWellButtonEnabled"?: boolean; readonly "isApplyAllButtonEnabled"?: boolean; };
/** Native schema for ExplorationSlowDataSourceSettings with exact versioned dependencies. */
export const ReportExplorationSlowDataSourceSettingsV3_0_0: Schema.Codec<ReportExplorationSlowDataSourceSettingsV3_0_0> = closed({ "isCrossHighlightingDisabled": Schema.optionalKey(Schema.Boolean), "isSlicerSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFilterSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFieldWellButtonEnabled": Schema.optionalKey(Schema.Boolean), "isApplyAllButtonEnabled": Schema.optionalKey(Schema.Boolean) });

/** Named report definitions for 3.0.0. */
export const ReportDefinitionsV3_0_0 = {
  ThemeCollection: ReportThemeCollectionV3_0_0,
  ThemeMetadata: ReportThemeMetadataV3_0_0,
  ThemeVersion: ReportThemeVersionV3_0_0,
  ThemeResourcePackageType: ReportThemeResourcePackageTypeV3_0_0,
  ReportFormattingObjects: ReportReportFormattingObjectsV3_0_0,
  OutspacePane: ReportOutspacePaneV3_0_0,
  Section: ReportSectionV3_0_0,
  ResourcePackage: ReportResourcePackageV3_0_0,
  ResourcePackageType: ReportResourcePackageTypeV3_0_0,
  ResourcePackageItem: ReportResourcePackageItemV3_0_0,
  ResourcePackageItemType: ReportResourcePackageItemTypeV3_0_0,
  OrganizationCustomVisual: ReportOrganizationCustomVisualV3_0_0,
  Annotation: ReportAnnotationV3_0_0,
  ExplorationSettings: ReportExplorationSettingsV3_0_0,
  ExplorationSlowDataSourceSettings: ReportExplorationSlowDataSourceSettingsV3_0_0
} as const;

/** Standalone report 3.0.0. */
export type ReportV3_0_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.0.0/schema.json"; readonly "themeCollection": ReportThemeCollectionV3_0_0; readonly "filterConfig"?: Formatting.FilterConfigurationEmbeddedV1_2_0; readonly "objects"?: ReportReportFormattingObjectsV3_0_0; readonly "reportSource"?: ("Default") | ("SharePoint") | ("Teams") | ("QuickCreate") | ("EmbedQuickCreate") | ("Datamart") | ("DataExplore"); readonly "publicCustomVisuals"?: ReadonlyArray<string>; readonly "resourcePackages"?: ReadonlyArray<ReportResourcePackageV3_0_0>; readonly "organizationCustomVisuals"?: ReadonlyArray<ReportOrganizationCustomVisualV3_0_0>; readonly "annotations"?: ReadonlyArray<ReportAnnotationV3_0_0>; readonly "dataSourceVariables"?: string; readonly "settings"?: ReportExplorationSettingsV3_0_0; readonly "slowDataSourceSettings"?: ReportExplorationSlowDataSourceSettingsV3_0_0; };
/** Native strict schema for ReportV3_0_0. */
export const ReportV3_0_0: Schema.Codec<ReportV3_0_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.0.0/schema.json"), "themeCollection": Schema.suspend(() => ReportThemeCollectionV3_0_0), "filterConfig": Schema.optionalKey(Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0)), "objects": Schema.optionalKey(Schema.suspend(() => ReportReportFormattingObjectsV3_0_0)), "reportSource": Schema.optionalKey(Schema.Union([Schema.Literal("Default"), Schema.Literal("SharePoint"), Schema.Literal("Teams"), Schema.Literal("QuickCreate"), Schema.Literal("EmbedQuickCreate"), Schema.Literal("Datamart"), Schema.Literal("DataExplore")])), "publicCustomVisuals": Schema.optionalKey(Schema.Array(Schema.String)), "resourcePackages": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportResourcePackageV3_0_0))), "organizationCustomVisuals": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportOrganizationCustomVisualV3_0_0))), "annotations": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportAnnotationV3_0_0))), "dataSourceVariables": Schema.optionalKey(Schema.String), "settings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSettingsV3_0_0)), "slowDataSourceSettings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSlowDataSourceSettingsV3_0_0)) });

/** ThemeCollection in report 3.1.0. */
export type ReportThemeCollectionV3_1_0 = { readonly "baseTheme"?: ReportThemeMetadataV3_1_0; readonly "customTheme"?: ReportThemeMetadataV3_1_0; };
/** Native schema for ThemeCollection with exact versioned dependencies. */
export const ReportThemeCollectionV3_1_0: Schema.Codec<ReportThemeCollectionV3_1_0> = closed({ "baseTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV3_1_0)), "customTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV3_1_0)) });

/** ThemeMetadata in report 3.1.0. */
export type ReportThemeMetadataV3_1_0 = { readonly "name": string; readonly "reportVersionAtImport": ReportThemeVersionV3_1_0; readonly "type": ReportThemeResourcePackageTypeV3_1_0; };
/** Native schema for ThemeMetadata with exact versioned dependencies. */
export const ReportThemeMetadataV3_1_0: Schema.Codec<ReportThemeMetadataV3_1_0> = closed({ "name": Schema.String, "reportVersionAtImport": Schema.suspend(() => ReportThemeVersionV3_1_0), "type": Schema.suspend(() => ReportThemeResourcePackageTypeV3_1_0) });

/** ThemeVersion in report 3.1.0. */
export type ReportThemeVersionV3_1_0 = { readonly "visual": string; readonly "page": string; readonly "report": string; };
/** Native schema for ThemeVersion with exact versioned dependencies. */
export const ReportThemeVersionV3_1_0: Schema.Codec<ReportThemeVersionV3_1_0> = closed({ "visual": Schema.String.check(Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$"))), "page": Schema.String.check(Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$"))), "report": Schema.String.check(Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$"))) });

/** ThemeResourcePackageType in report 3.1.0. */
export type ReportThemeResourcePackageTypeV3_1_0 = ("RegisteredResources") | ("SharedResources");
/** Native schema for ThemeResourcePackageType with exact versioned dependencies. */
export const ReportThemeResourcePackageTypeV3_1_0: Schema.Codec<ReportThemeResourcePackageTypeV3_1_0> = Schema.Union([Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources")]);

/** ReportFormattingObjects in report 3.1.0. */
export type ReportReportFormattingObjectsV3_1_0 = { readonly "outspacePane"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0; readonly "properties": ReportOutspacePaneV3_1_0; }>; readonly "section"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0; readonly "properties": ReportSectionV3_1_0; }>; };
/** Native schema for ReportFormattingObjects with exact versioned dependencies. */
export const ReportReportFormattingObjectsV3_1_0: Schema.Codec<ReportReportFormattingObjectsV3_1_0> = closed({ "outspacePane": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.Selector)), "properties": Schema.suspend(() => ReportOutspacePaneV3_1_0) }))), "section": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.Selector)), "properties": Schema.suspend(() => ReportSectionV3_1_0) }))) });

/** OutspacePane in report 3.1.0. */
export type ReportOutspacePaneV3_1_0 = { readonly "expanded"?: Schema.Json; readonly "visible"?: Schema.Json; };
/** Native schema for OutspacePane with exact versioned dependencies. */
export const ReportOutspacePaneV3_1_0: Schema.Codec<ReportOutspacePaneV3_1_0> = closed({ "expanded": Schema.optionalKey(Schema.Json), "visible": Schema.optionalKey(Schema.Json) });

/** Section in report 3.1.0. */
export type ReportSectionV3_1_0 = { readonly "verticalAlignment"?: Schema.Json; };
/** Native schema for Section with exact versioned dependencies. */
export const ReportSectionV3_1_0: Schema.Codec<ReportSectionV3_1_0> = closed({ "verticalAlignment": Schema.optionalKey(Schema.Json) });

/** ResourcePackage in report 3.1.0. */
export type ReportResourcePackageV3_1_0 = { readonly "id"?: number; readonly "name": string; readonly "type": ReportResourcePackageTypeV3_1_0; readonly "items": ReadonlyArray<ReportResourcePackageItemV3_1_0>; readonly "disabled"?: boolean; };
/** Native schema for ResourcePackage with exact versioned dependencies. */
export const ReportResourcePackageV3_1_0: Schema.Codec<ReportResourcePackageV3_1_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "type": Schema.suspend(() => ReportResourcePackageTypeV3_1_0), "items": Schema.Array(Schema.suspend(() => ReportResourcePackageItemV3_1_0)), "disabled": Schema.optionalKey(Schema.Boolean) });

/** ResourcePackageType in report 3.1.0. */
export type ReportResourcePackageTypeV3_1_0 = ("CustomVisual") | ("RegisteredResources") | ("SharedResources") | ("OrganizationalStoreCustomVisual");
/** Native schema for ResourcePackageType with exact versioned dependencies. */
export const ReportResourcePackageTypeV3_1_0: Schema.Codec<ReportResourcePackageTypeV3_1_0> = Schema.Union([Schema.Literal("CustomVisual"), Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources"), Schema.Literal("OrganizationalStoreCustomVisual")]);

/** ResourcePackageItem in report 3.1.0. */
export type ReportResourcePackageItemV3_1_0 = { readonly "id"?: number; readonly "name": string; readonly "path": string; readonly "type": ReportResourcePackageItemTypeV3_1_0; };
/** Native schema for ResourcePackageItem with exact versioned dependencies. */
export const ReportResourcePackageItemV3_1_0: Schema.Codec<ReportResourcePackageItemV3_1_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "path": Schema.String, "type": Schema.suspend(() => ReportResourcePackageItemTypeV3_1_0) });

/** ResourcePackageItemType in report 3.1.0. */
export type ReportResourcePackageItemTypeV3_1_0 = ("CustomVisualJavascript") | ("CustomVisualsCss") | ("CustomVisualScreenshot") | ("CustomVisualIcon") | ("CustomVisualWatermark") | ("CustomVisualMetadata") | ("Image") | ("ShapeMap") | ("CustomTheme") | ("BaseTheme") | ("DashboardTheme") | ("DashboardBaseTheme") | ("HighContrastTheme") | ("AppNavigation") | ("AppTheme") | ("AppBaseTheme");
/** Native schema for ResourcePackageItemType with exact versioned dependencies. */
export const ReportResourcePackageItemTypeV3_1_0: Schema.Codec<ReportResourcePackageItemTypeV3_1_0> = Schema.Union([Schema.Literal("CustomVisualJavascript"), Schema.Literal("CustomVisualsCss"), Schema.Literal("CustomVisualScreenshot"), Schema.Literal("CustomVisualIcon"), Schema.Literal("CustomVisualWatermark"), Schema.Literal("CustomVisualMetadata"), Schema.Literal("Image"), Schema.Literal("ShapeMap"), Schema.Literal("CustomTheme"), Schema.Literal("BaseTheme"), Schema.Literal("DashboardTheme"), Schema.Literal("DashboardBaseTheme"), Schema.Literal("HighContrastTheme"), Schema.Literal("AppNavigation"), Schema.Literal("AppTheme"), Schema.Literal("AppBaseTheme")]);

/** OrganizationCustomVisual in report 3.1.0. */
export type ReportOrganizationCustomVisualV3_1_0 = { readonly "name": string; readonly "path": string; readonly "disabled"?: boolean; };
/** Native schema for OrganizationCustomVisual with exact versioned dependencies. */
export const ReportOrganizationCustomVisualV3_1_0: Schema.Codec<ReportOrganizationCustomVisualV3_1_0> = closed({ "name": Schema.String, "path": Schema.String, "disabled": Schema.optionalKey(Schema.Boolean) });

/** Annotation in report 3.1.0. */
export type ReportAnnotationV3_1_0 = { readonly "name": string; readonly "value": string; };
/** Native schema for Annotation with exact versioned dependencies. */
export const ReportAnnotationV3_1_0: Schema.Codec<ReportAnnotationV3_1_0> = closed({ "name": Schema.String, "value": Schema.String });

/** ExplorationSettings in report 3.1.0. */
export type ReportExplorationSettingsV3_1_0 = { readonly "isPersistentUserStateDisabled"?: boolean; readonly "hideVisualContainerHeader"?: boolean; readonly "useStylableVisualContainerHeader"?: boolean; readonly "exportDataMode"?: ("AllowSummarized") | ("AllowSummarizedAndUnderlying") | ("None"); readonly "isReportAnnotationsDisabled"?: boolean; readonly "defaultFilterActionIsDataFilter"?: boolean; readonly "defaultDrillFilterOtherVisuals"?: boolean; readonly "useCrossReportDrillthrough"?: boolean; readonly "allowChangeFilterTypes"?: boolean; readonly "allowInlineExploration"?: boolean; readonly "useEnhancedTooltips"?: boolean; readonly "useScaledTooltips"?: boolean; readonly "filterPaneHiddenInEditMode"?: boolean; readonly "disableFilterPaneSearch"?: boolean; readonly "pagesPosition"?: ("PagesPane") | ("Bottom"); readonly "allowAutomatedInsightsNotification"?: boolean; readonly "useDefaultAggregateDisplayName"?: boolean; readonly "enableDeveloperMode"?: boolean; readonly "pauseQueries"?: boolean; readonly "queryLimitOption"?: ("None") | ("Shared") | ("Premium") | ("SQLServerAS") | ("AzureAS") | ("Custom") | ("Auto"); readonly "customMemoryLimit"?: string; readonly "customTimeoutLimit"?: string; readonly "fieldParameterReportSettings"?: ReportFieldParameterReportSettingsV3_1_0; };
/** Native schema for ExplorationSettings with exact versioned dependencies. */
export const ReportExplorationSettingsV3_1_0: Schema.Codec<ReportExplorationSettingsV3_1_0> = closed({ "isPersistentUserStateDisabled": Schema.optionalKey(Schema.Boolean), "hideVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "useStylableVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "exportDataMode": Schema.optionalKey(Schema.Union([Schema.Literal("AllowSummarized"), Schema.Literal("AllowSummarizedAndUnderlying"), Schema.Literal("None")])), "isReportAnnotationsDisabled": Schema.optionalKey(Schema.Boolean), "defaultFilterActionIsDataFilter": Schema.optionalKey(Schema.Boolean), "defaultDrillFilterOtherVisuals": Schema.optionalKey(Schema.Boolean), "useCrossReportDrillthrough": Schema.optionalKey(Schema.Boolean), "allowChangeFilterTypes": Schema.optionalKey(Schema.Boolean), "allowInlineExploration": Schema.optionalKey(Schema.Boolean), "useEnhancedTooltips": Schema.optionalKey(Schema.Boolean), "useScaledTooltips": Schema.optionalKey(Schema.Boolean), "filterPaneHiddenInEditMode": Schema.optionalKey(Schema.Boolean), "disableFilterPaneSearch": Schema.optionalKey(Schema.Boolean), "pagesPosition": Schema.optionalKey(Schema.Union([Schema.Literal("PagesPane"), Schema.Literal("Bottom")])), "allowAutomatedInsightsNotification": Schema.optionalKey(Schema.Boolean), "useDefaultAggregateDisplayName": Schema.optionalKey(Schema.Boolean), "enableDeveloperMode": Schema.optionalKey(Schema.Boolean), "pauseQueries": Schema.optionalKey(Schema.Boolean), "queryLimitOption": Schema.optionalKey(Schema.Union([Schema.Literal("None"), Schema.Literal("Shared"), Schema.Literal("Premium"), Schema.Literal("SQLServerAS"), Schema.Literal("AzureAS"), Schema.Literal("Custom"), Schema.Literal("Auto")])), "customMemoryLimit": Schema.optionalKey(Schema.String), "customTimeoutLimit": Schema.optionalKey(Schema.String), "fieldParameterReportSettings": Schema.optionalKey(Schema.suspend(() => ReportFieldParameterReportSettingsV3_1_0)) });

/** FieldParameterReportSettings in report 3.1.0. */
export type ReportFieldParameterReportSettingsV3_1_0 = { readonly "skipHierarchyLevelPersistence"?: boolean; };
/** Native schema for FieldParameterReportSettings with exact versioned dependencies. */
export const ReportFieldParameterReportSettingsV3_1_0: Schema.Codec<ReportFieldParameterReportSettingsV3_1_0> = closed({ "skipHierarchyLevelPersistence": Schema.optionalKey(Schema.Boolean) });

/** ExplorationSlowDataSourceSettings in report 3.1.0. */
export type ReportExplorationSlowDataSourceSettingsV3_1_0 = { readonly "isCrossHighlightingDisabled"?: boolean; readonly "isSlicerSelectionsButtonEnabled"?: boolean; readonly "isFilterSelectionsButtonEnabled"?: boolean; readonly "isFieldWellButtonEnabled"?: boolean; readonly "isApplyAllButtonEnabled"?: boolean; };
/** Native schema for ExplorationSlowDataSourceSettings with exact versioned dependencies. */
export const ReportExplorationSlowDataSourceSettingsV3_1_0: Schema.Codec<ReportExplorationSlowDataSourceSettingsV3_1_0> = closed({ "isCrossHighlightingDisabled": Schema.optionalKey(Schema.Boolean), "isSlicerSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFilterSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFieldWellButtonEnabled": Schema.optionalKey(Schema.Boolean), "isApplyAllButtonEnabled": Schema.optionalKey(Schema.Boolean) });

/** Named report definitions for 3.1.0. */
export const ReportDefinitionsV3_1_0 = {
  ThemeCollection: ReportThemeCollectionV3_1_0,
  ThemeMetadata: ReportThemeMetadataV3_1_0,
  ThemeVersion: ReportThemeVersionV3_1_0,
  ThemeResourcePackageType: ReportThemeResourcePackageTypeV3_1_0,
  ReportFormattingObjects: ReportReportFormattingObjectsV3_1_0,
  OutspacePane: ReportOutspacePaneV3_1_0,
  Section: ReportSectionV3_1_0,
  ResourcePackage: ReportResourcePackageV3_1_0,
  ResourcePackageType: ReportResourcePackageTypeV3_1_0,
  ResourcePackageItem: ReportResourcePackageItemV3_1_0,
  ResourcePackageItemType: ReportResourcePackageItemTypeV3_1_0,
  OrganizationCustomVisual: ReportOrganizationCustomVisualV3_1_0,
  Annotation: ReportAnnotationV3_1_0,
  ExplorationSettings: ReportExplorationSettingsV3_1_0,
  FieldParameterReportSettings: ReportFieldParameterReportSettingsV3_1_0,
  ExplorationSlowDataSourceSettings: ReportExplorationSlowDataSourceSettingsV3_1_0
} as const;

/** Standalone report 3.1.0. */
export type ReportV3_1_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.1.0/schema.json"; readonly "themeCollection": ReportThemeCollectionV3_1_0; readonly "filterConfig"?: Formatting.FilterConfigurationEmbeddedV1_2_0; readonly "objects"?: ReportReportFormattingObjectsV3_1_0; readonly "reportSource"?: ("Default") | ("SharePoint") | ("Teams") | ("QuickCreate") | ("EmbedQuickCreate") | ("Datamart") | ("DataExplore"); readonly "publicCustomVisuals"?: ReadonlyArray<string>; readonly "resourcePackages"?: ReadonlyArray<ReportResourcePackageV3_1_0>; readonly "organizationCustomVisuals"?: ReadonlyArray<ReportOrganizationCustomVisualV3_1_0>; readonly "annotations"?: ReadonlyArray<ReportAnnotationV3_1_0>; readonly "dataSourceVariables"?: string; readonly "settings"?: ReportExplorationSettingsV3_1_0; readonly "slowDataSourceSettings"?: ReportExplorationSlowDataSourceSettingsV3_1_0; };
/** Native strict schema for ReportV3_1_0. */
export const ReportV3_1_0: Schema.Codec<ReportV3_1_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.1.0/schema.json"), "themeCollection": Schema.suspend(() => ReportThemeCollectionV3_1_0), "filterConfig": Schema.optionalKey(Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0)), "objects": Schema.optionalKey(Schema.suspend(() => ReportReportFormattingObjectsV3_1_0)), "reportSource": Schema.optionalKey(Schema.Union([Schema.Literal("Default"), Schema.Literal("SharePoint"), Schema.Literal("Teams"), Schema.Literal("QuickCreate"), Schema.Literal("EmbedQuickCreate"), Schema.Literal("Datamart"), Schema.Literal("DataExplore")])), "publicCustomVisuals": Schema.optionalKey(Schema.Array(Schema.String)), "resourcePackages": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportResourcePackageV3_1_0))), "organizationCustomVisuals": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportOrganizationCustomVisualV3_1_0))), "annotations": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportAnnotationV3_1_0))), "dataSourceVariables": Schema.optionalKey(Schema.String), "settings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSettingsV3_1_0)), "slowDataSourceSettings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSlowDataSourceSettingsV3_1_0)) });

/** ThemeCollection in report 3.2.0. */
export type ReportThemeCollectionV3_2_0 = { readonly "baseTheme"?: ReportThemeMetadataV3_2_0; readonly "customTheme"?: ReportThemeMetadataV3_2_0; };
/** Native schema for ThemeCollection with exact versioned dependencies. */
export const ReportThemeCollectionV3_2_0: Schema.Codec<ReportThemeCollectionV3_2_0> = closed({ "baseTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV3_2_0)), "customTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV3_2_0)) });

/** ThemeMetadata in report 3.2.0. */
export type ReportThemeMetadataV3_2_0 = { readonly "name": string; readonly "reportVersionAtImport": ReportThemeVersionV3_2_0; readonly "type": ReportThemeResourcePackageTypeV3_2_0; };
/** Native schema for ThemeMetadata with exact versioned dependencies. */
export const ReportThemeMetadataV3_2_0: Schema.Codec<ReportThemeMetadataV3_2_0> = closed({ "name": Schema.String, "reportVersionAtImport": Schema.suspend(() => ReportThemeVersionV3_2_0), "type": Schema.suspend(() => ReportThemeResourcePackageTypeV3_2_0) });

/** ThemeVersion in report 3.2.0. */
export type ReportThemeVersionV3_2_0 = { readonly "visual": string; readonly "page": string; readonly "report": string; };
/** Native schema for ThemeVersion with exact versioned dependencies. */
export const ReportThemeVersionV3_2_0: Schema.Codec<ReportThemeVersionV3_2_0> = closed({ "visual": Schema.String.check(Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$"))), "page": Schema.String.check(Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$"))), "report": Schema.String.check(Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$"))) });

/** ThemeResourcePackageType in report 3.2.0. */
export type ReportThemeResourcePackageTypeV3_2_0 = ("RegisteredResources") | ("SharedResources");
/** Native schema for ThemeResourcePackageType with exact versioned dependencies. */
export const ReportThemeResourcePackageTypeV3_2_0: Schema.Codec<ReportThemeResourcePackageTypeV3_2_0> = Schema.Union([Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources")]);

/** ReportFormattingObjects in report 3.2.0. */
export type ReportReportFormattingObjectsV3_2_0 = { readonly "outspacePane"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0; readonly "properties": ReportOutspacePaneV3_2_0; }>; readonly "section"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0; readonly "properties": ReportSectionV3_2_0; }>; };
/** Native schema for ReportFormattingObjects with exact versioned dependencies. */
export const ReportReportFormattingObjectsV3_2_0: Schema.Codec<ReportReportFormattingObjectsV3_2_0> = closed({ "outspacePane": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0.Selector)), "properties": Schema.suspend(() => ReportOutspacePaneV3_2_0) }))), "section": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0.Selector)), "properties": Schema.suspend(() => ReportSectionV3_2_0) }))) });

/** OutspacePane in report 3.2.0. */
export type ReportOutspacePaneV3_2_0 = { readonly "expanded"?: Schema.Json; readonly "visible"?: Schema.Json; };
/** Native schema for OutspacePane with exact versioned dependencies. */
export const ReportOutspacePaneV3_2_0: Schema.Codec<ReportOutspacePaneV3_2_0> = closed({ "expanded": Schema.optionalKey(Schema.Json), "visible": Schema.optionalKey(Schema.Json) });

/** Section in report 3.2.0. */
export type ReportSectionV3_2_0 = { readonly "verticalAlignment"?: Schema.Json; };
/** Native schema for Section with exact versioned dependencies. */
export const ReportSectionV3_2_0: Schema.Codec<ReportSectionV3_2_0> = closed({ "verticalAlignment": Schema.optionalKey(Schema.Json) });

/** ResourcePackage in report 3.2.0. */
export type ReportResourcePackageV3_2_0 = { readonly "id"?: number; readonly "name": string; readonly "type": ReportResourcePackageTypeV3_2_0; readonly "items": ReadonlyArray<ReportResourcePackageItemV3_2_0>; readonly "disabled"?: boolean; };
/** Native schema for ResourcePackage with exact versioned dependencies. */
export const ReportResourcePackageV3_2_0: Schema.Codec<ReportResourcePackageV3_2_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "type": Schema.suspend(() => ReportResourcePackageTypeV3_2_0), "items": Schema.Array(Schema.suspend(() => ReportResourcePackageItemV3_2_0)), "disabled": Schema.optionalKey(Schema.Boolean) });

/** ResourcePackageType in report 3.2.0. */
export type ReportResourcePackageTypeV3_2_0 = ("CustomVisual") | ("RegisteredResources") | ("SharedResources") | ("OrganizationalStoreCustomVisual");
/** Native schema for ResourcePackageType with exact versioned dependencies. */
export const ReportResourcePackageTypeV3_2_0: Schema.Codec<ReportResourcePackageTypeV3_2_0> = Schema.Union([Schema.Literal("CustomVisual"), Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources"), Schema.Literal("OrganizationalStoreCustomVisual")]);

/** ResourcePackageItem in report 3.2.0. */
export type ReportResourcePackageItemV3_2_0 = { readonly "id"?: number; readonly "name": string; readonly "path": string; readonly "type": ReportResourcePackageItemTypeV3_2_0; };
/** Native schema for ResourcePackageItem with exact versioned dependencies. */
export const ReportResourcePackageItemV3_2_0: Schema.Codec<ReportResourcePackageItemV3_2_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "path": Schema.String, "type": Schema.suspend(() => ReportResourcePackageItemTypeV3_2_0) });

/** ResourcePackageItemType in report 3.2.0. */
export type ReportResourcePackageItemTypeV3_2_0 = ("CustomVisualJavascript") | ("CustomVisualsCss") | ("CustomVisualScreenshot") | ("CustomVisualIcon") | ("CustomVisualWatermark") | ("CustomVisualMetadata") | ("Image") | ("ShapeMap") | ("CustomTheme") | ("BaseTheme") | ("DashboardTheme") | ("DashboardBaseTheme") | ("HighContrastTheme") | ("AppNavigation") | ("AppTheme") | ("AppBaseTheme");
/** Native schema for ResourcePackageItemType with exact versioned dependencies. */
export const ReportResourcePackageItemTypeV3_2_0: Schema.Codec<ReportResourcePackageItemTypeV3_2_0> = Schema.Union([Schema.Literal("CustomVisualJavascript"), Schema.Literal("CustomVisualsCss"), Schema.Literal("CustomVisualScreenshot"), Schema.Literal("CustomVisualIcon"), Schema.Literal("CustomVisualWatermark"), Schema.Literal("CustomVisualMetadata"), Schema.Literal("Image"), Schema.Literal("ShapeMap"), Schema.Literal("CustomTheme"), Schema.Literal("BaseTheme"), Schema.Literal("DashboardTheme"), Schema.Literal("DashboardBaseTheme"), Schema.Literal("HighContrastTheme"), Schema.Literal("AppNavigation"), Schema.Literal("AppTheme"), Schema.Literal("AppBaseTheme")]);

/** OrganizationCustomVisual in report 3.2.0. */
export type ReportOrganizationCustomVisualV3_2_0 = { readonly "name": string; readonly "path": string; readonly "disabled"?: boolean; };
/** Native schema for OrganizationCustomVisual with exact versioned dependencies. */
export const ReportOrganizationCustomVisualV3_2_0: Schema.Codec<ReportOrganizationCustomVisualV3_2_0> = closed({ "name": Schema.String, "path": Schema.String, "disabled": Schema.optionalKey(Schema.Boolean) });

/** Annotation in report 3.2.0. */
export type ReportAnnotationV3_2_0 = { readonly "name": string; readonly "value": string; };
/** Native schema for Annotation with exact versioned dependencies. */
export const ReportAnnotationV3_2_0: Schema.Codec<ReportAnnotationV3_2_0> = closed({ "name": Schema.String, "value": Schema.String });

/** ExplorationSettings in report 3.2.0. */
export type ReportExplorationSettingsV3_2_0 = { readonly "isPersistentUserStateDisabled"?: boolean; readonly "hideVisualContainerHeader"?: boolean; readonly "useStylableVisualContainerHeader"?: boolean; readonly "exportDataMode"?: ("AllowSummarized") | ("AllowSummarizedAndUnderlying") | ("None"); readonly "isReportAnnotationsDisabled"?: boolean; readonly "defaultFilterActionIsDataFilter"?: boolean; readonly "defaultDrillFilterOtherVisuals"?: boolean; readonly "useCrossReportDrillthrough"?: boolean; readonly "allowChangeFilterTypes"?: boolean; readonly "allowInlineExploration"?: boolean; readonly "useEnhancedTooltips"?: boolean; readonly "useScaledTooltips"?: boolean; readonly "filterPaneHiddenInEditMode"?: boolean; readonly "disableFilterPaneSearch"?: boolean; readonly "pagesPosition"?: ("PagesPane") | ("Bottom"); readonly "allowAutomatedInsightsNotification"?: boolean; readonly "useDefaultAggregateDisplayName"?: boolean; readonly "enableDeveloperMode"?: boolean; readonly "pauseQueries"?: boolean; readonly "queryLimitOption"?: ("None") | ("Shared") | ("Premium") | ("SQLServerAS") | ("AzureAS") | ("Custom") | ("Auto"); readonly "customMemoryLimit"?: string; readonly "customTimeoutLimit"?: string; readonly "fieldParameterReportSettings"?: ReportFieldParameterReportSettingsV3_2_0; };
/** Native schema for ExplorationSettings with exact versioned dependencies. */
export const ReportExplorationSettingsV3_2_0: Schema.Codec<ReportExplorationSettingsV3_2_0> = closed({ "isPersistentUserStateDisabled": Schema.optionalKey(Schema.Boolean), "hideVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "useStylableVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "exportDataMode": Schema.optionalKey(Schema.Union([Schema.Literal("AllowSummarized"), Schema.Literal("AllowSummarizedAndUnderlying"), Schema.Literal("None")])), "isReportAnnotationsDisabled": Schema.optionalKey(Schema.Boolean), "defaultFilterActionIsDataFilter": Schema.optionalKey(Schema.Boolean), "defaultDrillFilterOtherVisuals": Schema.optionalKey(Schema.Boolean), "useCrossReportDrillthrough": Schema.optionalKey(Schema.Boolean), "allowChangeFilterTypes": Schema.optionalKey(Schema.Boolean), "allowInlineExploration": Schema.optionalKey(Schema.Boolean), "useEnhancedTooltips": Schema.optionalKey(Schema.Boolean), "useScaledTooltips": Schema.optionalKey(Schema.Boolean), "filterPaneHiddenInEditMode": Schema.optionalKey(Schema.Boolean), "disableFilterPaneSearch": Schema.optionalKey(Schema.Boolean), "pagesPosition": Schema.optionalKey(Schema.Union([Schema.Literal("PagesPane"), Schema.Literal("Bottom")])), "allowAutomatedInsightsNotification": Schema.optionalKey(Schema.Boolean), "useDefaultAggregateDisplayName": Schema.optionalKey(Schema.Boolean), "enableDeveloperMode": Schema.optionalKey(Schema.Boolean), "pauseQueries": Schema.optionalKey(Schema.Boolean), "queryLimitOption": Schema.optionalKey(Schema.Union([Schema.Literal("None"), Schema.Literal("Shared"), Schema.Literal("Premium"), Schema.Literal("SQLServerAS"), Schema.Literal("AzureAS"), Schema.Literal("Custom"), Schema.Literal("Auto")])), "customMemoryLimit": Schema.optionalKey(Schema.String), "customTimeoutLimit": Schema.optionalKey(Schema.String), "fieldParameterReportSettings": Schema.optionalKey(Schema.suspend(() => ReportFieldParameterReportSettingsV3_2_0)) });

/** FieldParameterReportSettings in report 3.2.0. */
export type ReportFieldParameterReportSettingsV3_2_0 = { readonly "skipHierarchyLevelPersistence"?: boolean; };
/** Native schema for FieldParameterReportSettings with exact versioned dependencies. */
export const ReportFieldParameterReportSettingsV3_2_0: Schema.Codec<ReportFieldParameterReportSettingsV3_2_0> = closed({ "skipHierarchyLevelPersistence": Schema.optionalKey(Schema.Boolean) });

/** ExplorationSlowDataSourceSettings in report 3.2.0. */
export type ReportExplorationSlowDataSourceSettingsV3_2_0 = { readonly "isCrossHighlightingDisabled"?: boolean; readonly "isSlicerSelectionsButtonEnabled"?: boolean; readonly "isFilterSelectionsButtonEnabled"?: boolean; readonly "isFieldWellButtonEnabled"?: boolean; readonly "isApplyAllButtonEnabled"?: boolean; };
/** Native schema for ExplorationSlowDataSourceSettings with exact versioned dependencies. */
export const ReportExplorationSlowDataSourceSettingsV3_2_0: Schema.Codec<ReportExplorationSlowDataSourceSettingsV3_2_0> = closed({ "isCrossHighlightingDisabled": Schema.optionalKey(Schema.Boolean), "isSlicerSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFilterSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFieldWellButtonEnabled": Schema.optionalKey(Schema.Boolean), "isApplyAllButtonEnabled": Schema.optionalKey(Schema.Boolean) });

/** Named report definitions for 3.2.0. */
export const ReportDefinitionsV3_2_0 = {
  ThemeCollection: ReportThemeCollectionV3_2_0,
  ThemeMetadata: ReportThemeMetadataV3_2_0,
  ThemeVersion: ReportThemeVersionV3_2_0,
  ThemeResourcePackageType: ReportThemeResourcePackageTypeV3_2_0,
  ReportFormattingObjects: ReportReportFormattingObjectsV3_2_0,
  OutspacePane: ReportOutspacePaneV3_2_0,
  Section: ReportSectionV3_2_0,
  ResourcePackage: ReportResourcePackageV3_2_0,
  ResourcePackageType: ReportResourcePackageTypeV3_2_0,
  ResourcePackageItem: ReportResourcePackageItemV3_2_0,
  ResourcePackageItemType: ReportResourcePackageItemTypeV3_2_0,
  OrganizationCustomVisual: ReportOrganizationCustomVisualV3_2_0,
  Annotation: ReportAnnotationV3_2_0,
  ExplorationSettings: ReportExplorationSettingsV3_2_0,
  FieldParameterReportSettings: ReportFieldParameterReportSettingsV3_2_0,
  ExplorationSlowDataSourceSettings: ReportExplorationSlowDataSourceSettingsV3_2_0
} as const;

/** Standalone report 3.2.0. */
export type ReportV3_2_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.2.0/schema.json"; readonly "themeCollection": ReportThemeCollectionV3_2_0; readonly "filterConfig"?: Formatting.FilterConfigurationEmbeddedV1_3_0; readonly "objects"?: ReportReportFormattingObjectsV3_2_0; readonly "reportSource"?: ("Default") | ("SharePoint") | ("Teams") | ("QuickCreate") | ("EmbedQuickCreate") | ("Datamart") | ("DataExplore"); readonly "publicCustomVisuals"?: ReadonlyArray<string>; readonly "resourcePackages"?: ReadonlyArray<ReportResourcePackageV3_2_0>; readonly "organizationCustomVisuals"?: ReadonlyArray<ReportOrganizationCustomVisualV3_2_0>; readonly "annotations"?: ReadonlyArray<ReportAnnotationV3_2_0>; readonly "dataSourceVariables"?: string; readonly "settings"?: ReportExplorationSettingsV3_2_0; readonly "slowDataSourceSettings"?: ReportExplorationSlowDataSourceSettingsV3_2_0; };
/** Native strict schema for ReportV3_2_0. */
export const ReportV3_2_0: Schema.Codec<ReportV3_2_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.2.0/schema.json"), "themeCollection": Schema.suspend(() => ReportThemeCollectionV3_2_0), "filterConfig": Schema.optionalKey(Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_3_0)), "objects": Schema.optionalKey(Schema.suspend(() => ReportReportFormattingObjectsV3_2_0)), "reportSource": Schema.optionalKey(Schema.Union([Schema.Literal("Default"), Schema.Literal("SharePoint"), Schema.Literal("Teams"), Schema.Literal("QuickCreate"), Schema.Literal("EmbedQuickCreate"), Schema.Literal("Datamart"), Schema.Literal("DataExplore")])), "publicCustomVisuals": Schema.optionalKey(Schema.Array(Schema.String)), "resourcePackages": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportResourcePackageV3_2_0))), "organizationCustomVisuals": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportOrganizationCustomVisualV3_2_0))), "annotations": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportAnnotationV3_2_0))), "dataSourceVariables": Schema.optionalKey(Schema.String), "settings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSettingsV3_2_0)), "slowDataSourceSettings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSlowDataSourceSettingsV3_2_0)) });

/** ThemeCollection in report 3.3.0. */
export type ReportThemeCollectionV3_3_0 = { readonly "baseTheme"?: ReportThemeMetadataV3_3_0; readonly "customTheme"?: ReportThemeMetadataV3_3_0; };
/** Native schema for ThemeCollection with exact versioned dependencies. */
export const ReportThemeCollectionV3_3_0: Schema.Codec<ReportThemeCollectionV3_3_0> = closed({ "baseTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV3_3_0)), "customTheme": Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV3_3_0)) });

/** ThemeMetadata in report 3.3.0. */
export type ReportThemeMetadataV3_3_0 = { readonly "name": string; readonly "reportVersionAtImport": ReportThemeVersionV3_3_0; readonly "type": ReportThemeResourcePackageTypeV3_3_0; };
/** Native schema for ThemeMetadata with exact versioned dependencies. */
export const ReportThemeMetadataV3_3_0: Schema.Codec<ReportThemeMetadataV3_3_0> = closed({ "name": Schema.String, "reportVersionAtImport": Schema.suspend(() => ReportThemeVersionV3_3_0), "type": Schema.suspend(() => ReportThemeResourcePackageTypeV3_3_0) });

/** ThemeVersion in report 3.3.0. */
export type ReportThemeVersionV3_3_0 = { readonly "visual": string; readonly "page": string; readonly "report": string; };
/** Native schema for ThemeVersion with exact versioned dependencies. */
export const ReportThemeVersionV3_3_0: Schema.Codec<ReportThemeVersionV3_3_0> = closed({ "visual": Schema.String.check(Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$"))), "page": Schema.String.check(Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$"))), "report": Schema.String.check(Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$"))) });

/** ThemeResourcePackageType in report 3.3.0. */
export type ReportThemeResourcePackageTypeV3_3_0 = ("RegisteredResources") | ("SharedResources");
/** Native schema for ThemeResourcePackageType with exact versioned dependencies. */
export const ReportThemeResourcePackageTypeV3_3_0: Schema.Codec<ReportThemeResourcePackageTypeV3_3_0> = Schema.Union([Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources")]);

/** ReportFormattingObjects in report 3.3.0. */
export type ReportReportFormattingObjectsV3_3_0 = { readonly "outspacePane"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0; readonly "properties": ReportOutspacePaneV3_3_0; }>; readonly "section"?: ReadonlyArray<{ readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0; readonly "properties": ReportSectionV3_3_0; }>; };
/** Native schema for ReportFormattingObjects with exact versioned dependencies. */
export const ReportReportFormattingObjectsV3_3_0: Schema.Codec<ReportReportFormattingObjectsV3_3_0> = closed({ "outspacePane": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0.Selector)), "properties": Schema.suspend(() => ReportOutspacePaneV3_3_0) }))), "section": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0.Selector)), "properties": Schema.suspend(() => ReportSectionV3_3_0) }))) });

/** OutspacePane in report 3.3.0. */
export type ReportOutspacePaneV3_3_0 = { readonly "expanded"?: Schema.Json; readonly "visible"?: Schema.Json; };
/** Native schema for OutspacePane with exact versioned dependencies. */
export const ReportOutspacePaneV3_3_0: Schema.Codec<ReportOutspacePaneV3_3_0> = closed({ "expanded": Schema.optionalKey(Schema.Json), "visible": Schema.optionalKey(Schema.Json) });

/** Section in report 3.3.0. */
export type ReportSectionV3_3_0 = { readonly "verticalAlignment"?: Schema.Json; };
/** Native schema for Section with exact versioned dependencies. */
export const ReportSectionV3_3_0: Schema.Codec<ReportSectionV3_3_0> = closed({ "verticalAlignment": Schema.optionalKey(Schema.Json) });

/** ResourcePackage in report 3.3.0. */
export type ReportResourcePackageV3_3_0 = { readonly "id"?: number; readonly "name": string; readonly "type": ReportResourcePackageTypeV3_3_0; readonly "items": ReadonlyArray<ReportResourcePackageItemV3_3_0>; readonly "disabled"?: boolean; };
/** Native schema for ResourcePackage with exact versioned dependencies. */
export const ReportResourcePackageV3_3_0: Schema.Codec<ReportResourcePackageV3_3_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "type": Schema.suspend(() => ReportResourcePackageTypeV3_3_0), "items": Schema.Array(Schema.suspend(() => ReportResourcePackageItemV3_3_0)), "disabled": Schema.optionalKey(Schema.Boolean) });

/** ResourcePackageType in report 3.3.0. */
export type ReportResourcePackageTypeV3_3_0 = ("CustomVisual") | ("RegisteredResources") | ("SharedResources") | ("OrganizationalStoreCustomVisual");
/** Native schema for ResourcePackageType with exact versioned dependencies. */
export const ReportResourcePackageTypeV3_3_0: Schema.Codec<ReportResourcePackageTypeV3_3_0> = Schema.Union([Schema.Literal("CustomVisual"), Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources"), Schema.Literal("OrganizationalStoreCustomVisual")]);

/** ResourcePackageItem in report 3.3.0. */
export type ReportResourcePackageItemV3_3_0 = { readonly "id"?: number; readonly "name": string; readonly "path": string; readonly "type": ReportResourcePackageItemTypeV3_3_0; };
/** Native schema for ResourcePackageItem with exact versioned dependencies. */
export const ReportResourcePackageItemV3_3_0: Schema.Codec<ReportResourcePackageItemV3_3_0> = closed({ "id": Schema.optionalKey(Schema.Finite), "name": Schema.String, "path": Schema.String, "type": Schema.suspend(() => ReportResourcePackageItemTypeV3_3_0) });

/** ResourcePackageItemType in report 3.3.0. */
export type ReportResourcePackageItemTypeV3_3_0 = ("CustomVisualJavascript") | ("CustomVisualsCss") | ("CustomVisualScreenshot") | ("CustomVisualIcon") | ("CustomVisualWatermark") | ("CustomVisualMetadata") | ("Image") | ("ShapeMap") | ("CustomTheme") | ("BaseTheme") | ("DashboardTheme") | ("DashboardBaseTheme") | ("HighContrastTheme") | ("AppNavigation") | ("AppTheme") | ("AppBaseTheme");
/** Native schema for ResourcePackageItemType with exact versioned dependencies. */
export const ReportResourcePackageItemTypeV3_3_0: Schema.Codec<ReportResourcePackageItemTypeV3_3_0> = Schema.Union([Schema.Literal("CustomVisualJavascript"), Schema.Literal("CustomVisualsCss"), Schema.Literal("CustomVisualScreenshot"), Schema.Literal("CustomVisualIcon"), Schema.Literal("CustomVisualWatermark"), Schema.Literal("CustomVisualMetadata"), Schema.Literal("Image"), Schema.Literal("ShapeMap"), Schema.Literal("CustomTheme"), Schema.Literal("BaseTheme"), Schema.Literal("DashboardTheme"), Schema.Literal("DashboardBaseTheme"), Schema.Literal("HighContrastTheme"), Schema.Literal("AppNavigation"), Schema.Literal("AppTheme"), Schema.Literal("AppBaseTheme")]);

/** OrganizationCustomVisual in report 3.3.0. */
export type ReportOrganizationCustomVisualV3_3_0 = { readonly "name": string; readonly "path": string; readonly "disabled"?: boolean; };
/** Native schema for OrganizationCustomVisual with exact versioned dependencies. */
export const ReportOrganizationCustomVisualV3_3_0: Schema.Codec<ReportOrganizationCustomVisualV3_3_0> = closed({ "name": Schema.String, "path": Schema.String, "disabled": Schema.optionalKey(Schema.Boolean) });

/** Annotation in report 3.3.0. */
export type ReportAnnotationV3_3_0 = { readonly "name": string; readonly "value": string; };
/** Native schema for Annotation with exact versioned dependencies. */
export const ReportAnnotationV3_3_0: Schema.Codec<ReportAnnotationV3_3_0> = closed({ "name": Schema.String, "value": Schema.String });

/** ExplorationSettings in report 3.3.0. */
export type ReportExplorationSettingsV3_3_0 = { readonly "isPersistentUserStateDisabled"?: boolean; readonly "hideVisualContainerHeader"?: boolean; readonly "useStylableVisualContainerHeader"?: boolean; readonly "exportDataMode"?: ("AllowSummarized") | ("AllowSummarizedAndUnderlying") | ("None"); readonly "isReportAnnotationsDisabled"?: boolean; readonly "defaultFilterActionIsDataFilter"?: boolean; readonly "defaultDrillFilterOtherVisuals"?: boolean; readonly "useCrossReportDrillthrough"?: boolean; readonly "allowChangeFilterTypes"?: boolean; readonly "allowInlineExploration"?: boolean; readonly "useEnhancedTooltips"?: boolean; readonly "useScaledTooltips"?: boolean; readonly "filterPaneHiddenInEditMode"?: boolean; readonly "disableFilterPaneSearch"?: boolean; readonly "pagesPosition"?: ("PagesPane") | ("Bottom"); readonly "allowAutomatedInsightsNotification"?: boolean; readonly "useDefaultAggregateDisplayName"?: boolean; readonly "enableDeveloperMode"?: boolean; readonly "pauseQueries"?: boolean; readonly "queryLimitOption"?: ("None") | ("Shared") | ("Premium") | ("SQLServerAS") | ("AzureAS") | ("Custom") | ("Auto"); readonly "customMemoryLimit"?: string; readonly "customTimeoutLimit"?: string; readonly "fieldParameterReportSettings"?: ReportFieldParameterReportSettingsV3_3_0; readonly "defaultDataExplorePerspective"?: string; readonly "locale"?: string; readonly "defaultDisplayUnitsToNone"?: boolean; };
/** Native schema for ExplorationSettings with exact versioned dependencies. */
export const ReportExplorationSettingsV3_3_0: Schema.Codec<ReportExplorationSettingsV3_3_0> = closed({ "isPersistentUserStateDisabled": Schema.optionalKey(Schema.Boolean), "hideVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "useStylableVisualContainerHeader": Schema.optionalKey(Schema.Boolean), "exportDataMode": Schema.optionalKey(Schema.Union([Schema.Literal("AllowSummarized"), Schema.Literal("AllowSummarizedAndUnderlying"), Schema.Literal("None")])), "isReportAnnotationsDisabled": Schema.optionalKey(Schema.Boolean), "defaultFilterActionIsDataFilter": Schema.optionalKey(Schema.Boolean), "defaultDrillFilterOtherVisuals": Schema.optionalKey(Schema.Boolean), "useCrossReportDrillthrough": Schema.optionalKey(Schema.Boolean), "allowChangeFilterTypes": Schema.optionalKey(Schema.Boolean), "allowInlineExploration": Schema.optionalKey(Schema.Boolean), "useEnhancedTooltips": Schema.optionalKey(Schema.Boolean), "useScaledTooltips": Schema.optionalKey(Schema.Boolean), "filterPaneHiddenInEditMode": Schema.optionalKey(Schema.Boolean), "disableFilterPaneSearch": Schema.optionalKey(Schema.Boolean), "pagesPosition": Schema.optionalKey(Schema.Union([Schema.Literal("PagesPane"), Schema.Literal("Bottom")])), "allowAutomatedInsightsNotification": Schema.optionalKey(Schema.Boolean), "useDefaultAggregateDisplayName": Schema.optionalKey(Schema.Boolean), "enableDeveloperMode": Schema.optionalKey(Schema.Boolean), "pauseQueries": Schema.optionalKey(Schema.Boolean), "queryLimitOption": Schema.optionalKey(Schema.Union([Schema.Literal("None"), Schema.Literal("Shared"), Schema.Literal("Premium"), Schema.Literal("SQLServerAS"), Schema.Literal("AzureAS"), Schema.Literal("Custom"), Schema.Literal("Auto")])), "customMemoryLimit": Schema.optionalKey(Schema.String), "customTimeoutLimit": Schema.optionalKey(Schema.String), "fieldParameterReportSettings": Schema.optionalKey(Schema.suspend(() => ReportFieldParameterReportSettingsV3_3_0)), "defaultDataExplorePerspective": Schema.optionalKey(Schema.String), "locale": Schema.optionalKey(Schema.String), "defaultDisplayUnitsToNone": Schema.optionalKey(Schema.Boolean) });

/** FieldParameterReportSettings in report 3.3.0. */
export type ReportFieldParameterReportSettingsV3_3_0 = { readonly "skipHierarchyLevelPersistence"?: boolean; };
/** Native schema for FieldParameterReportSettings with exact versioned dependencies. */
export const ReportFieldParameterReportSettingsV3_3_0: Schema.Codec<ReportFieldParameterReportSettingsV3_3_0> = closed({ "skipHierarchyLevelPersistence": Schema.optionalKey(Schema.Boolean) });

/** ExplorationSlowDataSourceSettings in report 3.3.0. */
export type ReportExplorationSlowDataSourceSettingsV3_3_0 = { readonly "isCrossHighlightingDisabled"?: boolean; readonly "isSlicerSelectionsButtonEnabled"?: boolean; readonly "isFilterSelectionsButtonEnabled"?: boolean; readonly "isFieldWellButtonEnabled"?: boolean; readonly "isApplyAllButtonEnabled"?: boolean; };
/** Native schema for ExplorationSlowDataSourceSettings with exact versioned dependencies. */
export const ReportExplorationSlowDataSourceSettingsV3_3_0: Schema.Codec<ReportExplorationSlowDataSourceSettingsV3_3_0> = closed({ "isCrossHighlightingDisabled": Schema.optionalKey(Schema.Boolean), "isSlicerSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFilterSelectionsButtonEnabled": Schema.optionalKey(Schema.Boolean), "isFieldWellButtonEnabled": Schema.optionalKey(Schema.Boolean), "isApplyAllButtonEnabled": Schema.optionalKey(Schema.Boolean) });

/** Named report definitions for 3.3.0. */
export const ReportDefinitionsV3_3_0 = {
  ThemeCollection: ReportThemeCollectionV3_3_0,
  ThemeMetadata: ReportThemeMetadataV3_3_0,
  ThemeVersion: ReportThemeVersionV3_3_0,
  ThemeResourcePackageType: ReportThemeResourcePackageTypeV3_3_0,
  ReportFormattingObjects: ReportReportFormattingObjectsV3_3_0,
  OutspacePane: ReportOutspacePaneV3_3_0,
  Section: ReportSectionV3_3_0,
  ResourcePackage: ReportResourcePackageV3_3_0,
  ResourcePackageType: ReportResourcePackageTypeV3_3_0,
  ResourcePackageItem: ReportResourcePackageItemV3_3_0,
  ResourcePackageItemType: ReportResourcePackageItemTypeV3_3_0,
  OrganizationCustomVisual: ReportOrganizationCustomVisualV3_3_0,
  Annotation: ReportAnnotationV3_3_0,
  ExplorationSettings: ReportExplorationSettingsV3_3_0,
  FieldParameterReportSettings: ReportFieldParameterReportSettingsV3_3_0,
  ExplorationSlowDataSourceSettings: ReportExplorationSlowDataSourceSettingsV3_3_0
} as const;

/** Standalone report 3.3.0. */
export type ReportV3_3_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.3.0/schema.json"; readonly "themeCollection": ReportThemeCollectionV3_3_0; readonly "filterConfig"?: Formatting.FilterConfigurationEmbeddedV1_3_0; readonly "objects"?: ReportReportFormattingObjectsV3_3_0; readonly "reportSource"?: ("Default") | ("SharePoint") | ("Teams") | ("QuickCreate") | ("EmbedQuickCreate") | ("Datamart") | ("DataExplore"); readonly "publicCustomVisuals"?: ReadonlyArray<string>; readonly "resourcePackages"?: ReadonlyArray<ReportResourcePackageV3_3_0>; readonly "organizationCustomVisuals"?: ReadonlyArray<ReportOrganizationCustomVisualV3_3_0>; readonly "annotations"?: ReadonlyArray<ReportAnnotationV3_3_0>; readonly "dataSourceVariables"?: string; readonly "settings"?: ReportExplorationSettingsV3_3_0; readonly "slowDataSourceSettings"?: ReportExplorationSlowDataSourceSettingsV3_3_0; };
/** Native strict schema for ReportV3_3_0. */
export const ReportV3_3_0: Schema.Codec<ReportV3_3_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.3.0/schema.json"), "themeCollection": Schema.suspend(() => ReportThemeCollectionV3_3_0), "filterConfig": Schema.optionalKey(Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_3_0)), "objects": Schema.optionalKey(Schema.suspend(() => ReportReportFormattingObjectsV3_3_0)), "reportSource": Schema.optionalKey(Schema.Union([Schema.Literal("Default"), Schema.Literal("SharePoint"), Schema.Literal("Teams"), Schema.Literal("QuickCreate"), Schema.Literal("EmbedQuickCreate"), Schema.Literal("Datamart"), Schema.Literal("DataExplore")])), "publicCustomVisuals": Schema.optionalKey(Schema.Array(Schema.String)), "resourcePackages": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportResourcePackageV3_3_0))), "organizationCustomVisuals": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportOrganizationCustomVisualV3_3_0))), "annotations": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportAnnotationV3_3_0))), "dataSourceVariables": Schema.optionalKey(Schema.String), "settings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSettingsV3_3_0)), "slowDataSourceSettings": Schema.optionalKey(Schema.suspend(() => ReportExplorationSlowDataSourceSettingsV3_3_0)) });

/** DatasetReference in definitionProperties 1.0.0. */
export type DefinitionPropertiesDatasetReferenceV1_0_0 = { readonly "byPath"?: DefinitionPropertiesReportDatasetReferenceByPathV1_0_0; readonly "byConnection"?: DefinitionPropertiesReportDatasetReferenceByConnectionV1_0_0; };
/** Native schema for DatasetReference with exact versioned dependencies. */
export const DefinitionPropertiesDatasetReferenceV1_0_0: Schema.Codec<DefinitionPropertiesDatasetReferenceV1_0_0> = closed({ "byPath": Schema.optionalKey(Schema.suspend(() => DefinitionPropertiesReportDatasetReferenceByPathV1_0_0)), "byConnection": Schema.optionalKey(Schema.suspend(() => DefinitionPropertiesReportDatasetReferenceByConnectionV1_0_0)) });

/** ReportDatasetReferenceByConnection in definitionProperties 1.0.0. */
export type DefinitionPropertiesReportDatasetReferenceByConnectionV1_0_0 = ({ readonly "connectionString": (string) | (null); readonly "pbiServiceModelId": (number) | (null); readonly "pbiModelVirtualServerName": (string) | (null); readonly "pbiModelDatabaseName": (string) | (null); readonly "name": (string) | (null); readonly "connectionType": (string) | (null); }) | (null);
/** Native schema for ReportDatasetReferenceByConnection with exact versioned dependencies. */
export const DefinitionPropertiesReportDatasetReferenceByConnectionV1_0_0: Schema.Codec<DefinitionPropertiesReportDatasetReferenceByConnectionV1_0_0> = Schema.Union([closed({ "connectionString": Schema.Union([Schema.String, Schema.Null]), "pbiServiceModelId": Schema.Union([Schema.Finite.check(Schema.makeFilter((value) => Number.isInteger(value) || "Expected integer")), Schema.Null]), "pbiModelVirtualServerName": Schema.Union([Schema.String, Schema.Null]), "pbiModelDatabaseName": Schema.Union([Schema.String, Schema.Null]), "name": Schema.Union([Schema.String, Schema.Null]), "connectionType": Schema.Union([Schema.String, Schema.Null]) }), Schema.Null]);

/** ReportDatasetReferenceByPath in definitionProperties 1.0.0. */
export type DefinitionPropertiesReportDatasetReferenceByPathV1_0_0 = ({ readonly "path": string; }) | (null);
/** Native schema for ReportDatasetReferenceByPath with exact versioned dependencies. */
export const DefinitionPropertiesReportDatasetReferenceByPathV1_0_0: Schema.Codec<DefinitionPropertiesReportDatasetReferenceByPathV1_0_0> = Schema.Union([closed({ "path": Schema.String }), Schema.Null]);

/** Named definitionProperties definitions for 1.0.0. */
export const DefinitionPropertiesDefinitionsV1_0_0 = {
  DatasetReference: DefinitionPropertiesDatasetReferenceV1_0_0,
  ReportDatasetReferenceByConnection: DefinitionPropertiesReportDatasetReferenceByConnectionV1_0_0,
  ReportDatasetReferenceByPath: DefinitionPropertiesReportDatasetReferenceByPathV1_0_0
} as const;

/** Standalone definitionProperties 1.0.0. */
export type DefinitionPropertiesV1_0_0 = { readonly "$schema": string; readonly "version": string; readonly "datasetReference": DefinitionPropertiesDatasetReferenceV1_0_0; };
/** Native strict schema for DefinitionPropertiesV1_0_0. */
export const DefinitionPropertiesV1_0_0: Schema.Codec<DefinitionPropertiesV1_0_0> = closed({ "$schema": Schema.String.check(Schema.isPattern(new RegExp("^https://developer.microsoft.com/json-schemas/fabric/item/report/definitionProperties/1.[0-9]+.[0-9]+/schema.json$"))), "version": Schema.String, "datasetReference": Schema.suspend(() => DefinitionPropertiesDatasetReferenceV1_0_0) });

/** DatasetReference in definitionProperties 2.0.0. */
export type DefinitionPropertiesDatasetReferenceV2_0_0 = { readonly "byPath"?: DefinitionPropertiesReportDatasetReferenceByPathV2_0_0; readonly "byConnection"?: DefinitionPropertiesReportDatasetReferenceByConnectionV2_0_0; };
/** Native schema for DatasetReference with exact versioned dependencies. */
export const DefinitionPropertiesDatasetReferenceV2_0_0: Schema.Codec<DefinitionPropertiesDatasetReferenceV2_0_0> = closed({ "byPath": Schema.optionalKey(Schema.suspend(() => DefinitionPropertiesReportDatasetReferenceByPathV2_0_0)), "byConnection": Schema.optionalKey(Schema.suspend(() => DefinitionPropertiesReportDatasetReferenceByConnectionV2_0_0)) });

/** ReportDatasetReferenceByConnection in definitionProperties 2.0.0. */
export type DefinitionPropertiesReportDatasetReferenceByConnectionV2_0_0 = ({ readonly "connectionString": string; }) | (null);
/** Native schema for ReportDatasetReferenceByConnection with exact versioned dependencies. */
export const DefinitionPropertiesReportDatasetReferenceByConnectionV2_0_0: Schema.Codec<DefinitionPropertiesReportDatasetReferenceByConnectionV2_0_0> = Schema.Union([closed({ "connectionString": Schema.String }), Schema.Null]);

/** ReportDatasetReferenceByPath in definitionProperties 2.0.0. */
export type DefinitionPropertiesReportDatasetReferenceByPathV2_0_0 = ({ readonly "path": string; }) | (null);
/** Native schema for ReportDatasetReferenceByPath with exact versioned dependencies. */
export const DefinitionPropertiesReportDatasetReferenceByPathV2_0_0: Schema.Codec<DefinitionPropertiesReportDatasetReferenceByPathV2_0_0> = Schema.Union([closed({ "path": Schema.String }), Schema.Null]);

/** Named definitionProperties definitions for 2.0.0. */
export const DefinitionPropertiesDefinitionsV2_0_0 = {
  DatasetReference: DefinitionPropertiesDatasetReferenceV2_0_0,
  ReportDatasetReferenceByConnection: DefinitionPropertiesReportDatasetReferenceByConnectionV2_0_0,
  ReportDatasetReferenceByPath: DefinitionPropertiesReportDatasetReferenceByPathV2_0_0
} as const;

/** Standalone definitionProperties 2.0.0. */
export type DefinitionPropertiesV2_0_0 = { readonly "$schema": string; readonly "version": string; readonly "datasetReference": DefinitionPropertiesDatasetReferenceV2_0_0; };
/** Native strict schema for DefinitionPropertiesV2_0_0. */
export const DefinitionPropertiesV2_0_0: Schema.Codec<DefinitionPropertiesV2_0_0> = closed({ "$schema": Schema.String.check(Schema.isPattern(new RegExp("^https://developer.microsoft.com/json-schemas/fabric/item/report/definitionProperties/2.[0-9]+.[0-9]+/schema.json$"))), "version": Schema.String, "datasetReference": Schema.suspend(() => DefinitionPropertiesDatasetReferenceV2_0_0) });

/** Named versionMetadata definitions for 1.0.0. */
export const VersionMetadataDefinitionsV1_0_0 = {

} as const;

/** Standalone versionMetadata 1.0.0. */
export type VersionMetadataV1_0_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/versionMetadata/1.0.0/schema.json"; readonly "version": string; };
/** Native strict schema for VersionMetadataV1_0_0. */
export const VersionMetadataV1_0_0: Schema.Codec<VersionMetadataV1_0_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/versionMetadata/1.0.0/schema.json"), "version": Schema.String.check(Schema.isPattern(new RegExp("^[1-9][0-9]*\\.(0|[1-9][0-9]*)\\.0$"))) });

/** ReportExtensionEntity in reportExtension 1.0.0. */
export type ReportExtensionReportExtensionEntityV1_0_0 = { readonly "name": string; readonly "measures"?: ReadonlyArray<ReportExtensionReportExtensionMeasureV1_0_0>; };
/** Native schema for ReportExtensionEntity with exact versioned dependencies. */
export const ReportExtensionReportExtensionEntityV1_0_0: Schema.Codec<ReportExtensionReportExtensionEntityV1_0_0> = closed({ "name": Schema.String, "measures": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportExtensionReportExtensionMeasureV1_0_0))) });

/** ReportExtensionMeasure in reportExtension 1.0.0. */
export type ReportExtensionReportExtensionMeasureV1_0_0 = { readonly "name": string; readonly "dataType": ReportExtensionPrimitiveTypeNameV1_0_0; readonly "dataCategory"?: string; readonly "expression": string; readonly "hidden"?: boolean; readonly "formatString"?: string; readonly "measureTemplate"?: ReportExtensionReportExtensionMeasureTemplateV1_0_0; readonly "description"?: string; readonly "displayFolder"?: string; readonly "annotations"?: ReadonlyArray<ReportExtensionMeasureExtensionAnnotationV1_0_0>; readonly "references"?: ReportExtensionExpressionReferencesV1_0_0; };
/** Native schema for ReportExtensionMeasure with exact versioned dependencies. */
export const ReportExtensionReportExtensionMeasureV1_0_0: Schema.Codec<ReportExtensionReportExtensionMeasureV1_0_0> = closed({ "name": Schema.String, "dataType": Schema.suspend(() => ReportExtensionPrimitiveTypeNameV1_0_0), "dataCategory": Schema.optionalKey(Schema.String), "expression": Schema.String, "hidden": Schema.optionalKey(Schema.Boolean), "formatString": Schema.optionalKey(Schema.String), "measureTemplate": Schema.optionalKey(Schema.suspend(() => ReportExtensionReportExtensionMeasureTemplateV1_0_0)), "description": Schema.optionalKey(Schema.String), "displayFolder": Schema.optionalKey(Schema.String), "annotations": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportExtensionMeasureExtensionAnnotationV1_0_0))), "references": Schema.optionalKey(Schema.suspend(() => ReportExtensionExpressionReferencesV1_0_0)) });

/** PrimitiveTypeName in reportExtension 1.0.0. */
export type ReportExtensionPrimitiveTypeNameV1_0_0 = "Binary" | "Boolean" | "Date" | "DateTime" | "DateTimeZone" | "Decimal" | "Double" | "Duration" | "Integer" | "Json" | "None" | "Null" | "Text" | "Time" | "Variant";
/** Native schema for PrimitiveTypeName with exact versioned dependencies. */
export const ReportExtensionPrimitiveTypeNameV1_0_0: Schema.Codec<ReportExtensionPrimitiveTypeNameV1_0_0> = Schema.Literals(["Binary", "Boolean", "Date", "DateTime", "DateTimeZone", "Decimal", "Double", "Duration", "Integer", "Json", "None", "Null", "Text", "Time", "Variant"]);

/** ReportExtensionMeasureTemplate in reportExtension 1.0.0. */
export type ReportExtensionReportExtensionMeasureTemplateV1_0_0 = { readonly "daxTemplateName": string; readonly "version": number; };
/** Native schema for ReportExtensionMeasureTemplate with exact versioned dependencies. */
export const ReportExtensionReportExtensionMeasureTemplateV1_0_0: Schema.Codec<ReportExtensionReportExtensionMeasureTemplateV1_0_0> = closed({ "daxTemplateName": Schema.String, "version": Schema.Finite });

/** MeasureExtensionAnnotation in reportExtension 1.0.0. */
export type ReportExtensionMeasureExtensionAnnotationV1_0_0 = { readonly "name": string; readonly "value": string; };
/** Native schema for MeasureExtensionAnnotation with exact versioned dependencies. */
export const ReportExtensionMeasureExtensionAnnotationV1_0_0: Schema.Codec<ReportExtensionMeasureExtensionAnnotationV1_0_0> = closed({ "name": Schema.String, "value": Schema.String });

/** ExpressionReferences in reportExtension 1.0.0. */
export type ReportExtensionExpressionReferencesV1_0_0 = { readonly "unrecognizedReferences"?: boolean; readonly "measures"?: ReadonlyArray<ReportExtensionMeasureReferenceV1_0_0>; };
/** Native schema for ExpressionReferences with exact versioned dependencies. */
export const ReportExtensionExpressionReferencesV1_0_0: Schema.Codec<ReportExtensionExpressionReferencesV1_0_0> = closed({ "unrecognizedReferences": Schema.optionalKey(Schema.Boolean), "measures": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportExtensionMeasureReferenceV1_0_0))) });

/** MeasureReference in reportExtension 1.0.0. */
export type ReportExtensionMeasureReferenceV1_0_0 = { readonly "schema"?: string; readonly "entity": string; readonly "name": string; };
/** Native schema for MeasureReference with exact versioned dependencies. */
export const ReportExtensionMeasureReferenceV1_0_0: Schema.Codec<ReportExtensionMeasureReferenceV1_0_0> = closed({ "schema": Schema.optionalKey(Schema.String), "entity": Schema.String, "name": Schema.String });

/** Named reportExtension definitions for 1.0.0. */
export const ReportExtensionDefinitionsV1_0_0 = {
  ReportExtensionEntity: ReportExtensionReportExtensionEntityV1_0_0,
  ReportExtensionMeasure: ReportExtensionReportExtensionMeasureV1_0_0,
  PrimitiveTypeName: ReportExtensionPrimitiveTypeNameV1_0_0,
  ReportExtensionMeasureTemplate: ReportExtensionReportExtensionMeasureTemplateV1_0_0,
  MeasureExtensionAnnotation: ReportExtensionMeasureExtensionAnnotationV1_0_0,
  ExpressionReferences: ReportExtensionExpressionReferencesV1_0_0,
  MeasureReference: ReportExtensionMeasureReferenceV1_0_0
} as const;

/** Standalone reportExtension 1.0.0. */
export type ReportExtensionV1_0_0 = { readonly "name": string; readonly "entities"?: ReadonlyArray<ReportExtensionReportExtensionEntityV1_0_0>; readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/reportExtension/1.0.0/schema.json"; };
/** Native strict schema for ReportExtensionV1_0_0. */
export const ReportExtensionV1_0_0: Schema.Codec<ReportExtensionV1_0_0> = closed({ "name": Schema.String, "entities": Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportExtensionReportExtensionEntityV1_0_0))), "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/reportExtension/1.0.0/schema.json") });

/** ReportRemoteArtifact in localSettings 1.0.0. */
export type LocalSettingsReportRemoteArtifactV1_0_0 = { readonly "reportId": (string) | (null); };
/** Native schema for ReportRemoteArtifact with exact versioned dependencies. */
export const LocalSettingsReportRemoteArtifactV1_0_0: Schema.Codec<LocalSettingsReportRemoteArtifactV1_0_0> = closed({ "reportId": Schema.Union([Schema.String, Schema.Null]) });

/** Named localSettings definitions for 1.0.0. */
export const LocalSettingsDefinitionsV1_0_0 = {
  ReportRemoteArtifact: LocalSettingsReportRemoteArtifactV1_0_0
} as const;

/** Standalone localSettings 1.0.0. */
export type LocalSettingsV1_0_0 = { readonly "$schema": string; readonly "remoteArtifacts"?: (ReadonlyArray<LocalSettingsReportRemoteArtifactV1_0_0>) | (null); readonly "securityBindingsSignature"?: (string) | (null); };
/** Native strict schema for LocalSettingsV1_0_0. */
export const LocalSettingsV1_0_0: Schema.Codec<LocalSettingsV1_0_0> = closed({ "$schema": Schema.String.check(Schema.isPattern(new RegExp("^https://developer.microsoft.com/json-schemas/fabric/item/report/localSettings/1.[0-9]+.[0-9]+/schema.json$"))), "remoteArtifacts": Schema.optionalKey(Schema.Union([Schema.Array(Schema.suspend(() => LocalSettingsReportRemoteArtifactV1_0_0)), Schema.Null])), "securityBindingsSignature": Schema.optionalKey(Schema.Union([Schema.String, Schema.Null])) });

/** Explicit coverage of every owned report source. */
export const reportSchemaCoverage = [
  { source: "definition/report/1.0.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.0.0/schema.json", version: "1.0.0", variant: "standalone", schema: ReportV1_0_0 },
  { source: "definition/report/1.1.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.1.0/schema.json", version: "1.1.0", variant: "standalone", schema: ReportV1_1_0 },
  { source: "definition/report/1.2.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.2.0/schema.json", version: "1.2.0", variant: "standalone", schema: ReportV1_2_0 },
  { source: "definition/report/1.3.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.3.0/schema.json", version: "1.3.0", variant: "standalone", schema: ReportV1_3_0 },
  { source: "definition/report/2.0.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/2.0.0/schema.json", version: "2.0.0", variant: "standalone", schema: ReportV2_0_0 },
  { source: "definition/report/2.1.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/2.1.0/schema.json", version: "2.1.0", variant: "standalone", schema: ReportV2_1_0 },
  { source: "definition/report/3.0.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.0.0/schema.json", version: "3.0.0", variant: "standalone", schema: ReportV3_0_0 },
  { source: "definition/report/3.1.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.1.0/schema.json", version: "3.1.0", variant: "standalone", schema: ReportV3_1_0 },
  { source: "definition/report/3.2.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.2.0/schema.json", version: "3.2.0", variant: "standalone", schema: ReportV3_2_0 },
  { source: "definition/report/3.3.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.3.0/schema.json", version: "3.3.0", variant: "standalone", schema: ReportV3_3_0 }
] as const;

/** Explicit coverage of every owned definitionProperties source. */
export const definitionPropertiesSchemaCoverage = [
  { source: "definitionProperties/1.0.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definitionProperties/1.0.0/schema.json", version: "1.0.0", variant: "standalone", schema: DefinitionPropertiesV1_0_0 },
  { source: "definitionProperties/2.0.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definitionProperties/2.0.0/schema.json", version: "2.0.0", variant: "standalone", schema: DefinitionPropertiesV2_0_0 }
] as const;

/** Explicit coverage of every owned versionMetadata source. */
export const versionMetadataSchemaCoverage = [
  { source: "definition/versionMetadata/1.0.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/versionMetadata/1.0.0/schema.json", version: "1.0.0", variant: "standalone", schema: VersionMetadataV1_0_0 }
] as const;

/** Explicit coverage of every owned reportExtension source. */
export const reportExtensionSchemaCoverage = [
  { source: "definition/reportExtension/1.0.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/reportExtension/1.0.0/schema.json", version: "1.0.0", variant: "standalone", schema: ReportExtensionV1_0_0 }
] as const;

/** Explicit coverage of every owned localSettings source. */
export const localSettingsSchemaCoverage = [
  { source: "localSettings/1.0.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/localSettings/1.0.0/schema.json", version: "1.0.0", variant: "standalone", schema: LocalSettingsV1_0_0 }
] as const;

/** Every source schema, including historical and embedded variants. */
export const reportSchemaCoverageAll = [
  ...Query.semanticQuerySchemaCoverage,
  ...Formatting.formattingObjectDefinitionsSchemaCoverage,
  ...Formatting.filterConfigurationSchemaCoverage,
  ...Visual.visualConfigurationSchemaCoverage,
  ...Container.visualContainerSchemaCoverage,
  ...Container.visualContainerMobileStateSchemaCoverage,
  ...Page.pageSchemaCoverage,
  ...Page.pagesMetadataSchemaCoverage,
  ...Bookmark.bookmarkSchemaCoverage,
  ...Bookmark.bookmarksMetadataSchemaCoverage,
  ...reportSchemaCoverage,
  ...definitionPropertiesSchemaCoverage,
  ...versionMetadataSchemaCoverage,
  ...reportExtensionSchemaCoverage,
  ...localSettingsSchemaCoverage,
] as const;

/** The report-relative paths supported by the content parser. */
export type ReportDocumentKind =
  | "definitionProperties" | "report" | "versionMetadata" | "reportExtension"
  | "localSettings" | "pagesMetadata" | "page" | "visualContainer"
  | "visualContainerMobileState" | "bookmarksMetadata" | "bookmark";

/** JSON syntax failure with the caller's file context. */
export class MalformedReportJson extends Error {
  /** Stable discriminator for typed error handling. */
  readonly _tag = "MalformedReportJson";
  /** Creates a syntax failure for the original report-relative path. */
  constructor(
    /** Original report-relative path. */ readonly path: string,
    /** JSON parser failure. */ readonly cause: unknown,
  ) {
    super(`Malformed JSON in ${path}`);
  }
}
/** The path does not denote a supported report document. */
export class UnsupportedReportDocumentKind extends Error {
  /** Stable discriminator for typed error handling. */
  readonly _tag = "UnsupportedReportDocumentKind";
  /** Creates an unsupported-path failure. */
  constructor(/** Original report-relative path. */ readonly path: string) { super(`Unsupported report document path: ${path}`); }
}
/** No exact locally supported schema matches the requested selector. */
export class UnsupportedReportSchemaVersion extends Error {
  /** Stable discriminator for typed error handling. */
  readonly _tag = "UnsupportedReportSchemaVersion";
  /** Creates an unsupported exact-schema-selection failure. */
  constructor(
    /** Original report-relative path. */ readonly path: string,
    /** Path-selected document kind. */ readonly kind: ReportDocumentKind,
    /** Unsupported exact selector. */ readonly schemaId: string,
  ) {
    super(`Unsupported schema ${schemaId} for ${path}`);
  }
}
/** A supported schema belongs to a different family from this path. */
export class ReportSchemaFamilyMismatch extends Error {
  /** Stable discriminator for typed error handling. */
  readonly _tag = "ReportSchemaFamilyMismatch";
  /** Creates a schema-family/path mismatch. */
  constructor(
    /** Original report-relative path. */ readonly path: string,
    /** Path-selected document kind. */ readonly kind: ReportDocumentKind,
    /** Requested exact selector. */ readonly schemaId: string,
    /** Actual family of the supported schema. */ readonly schemaFamily: string,
  ) {
    super(`Schema family ${schemaFamily} is inconsistent with ${kind} at ${path}`);
  }
}
/** Strict selection requires a tag or explicit historical schema selector. */
export class ReportSchemaSelectorRequired extends Error {
  /** Stable discriminator for typed error handling. */
  readonly _tag = "ReportSchemaSelectorRequired";
  /** Creates a missing explicit-selector failure. */
  constructor(
    /** Original report-relative path. */ readonly path: string,
    /** Path-selected document kind. */ readonly kind: ReportDocumentKind,
  ) {
    super(`Missing $schema at ${path}; supply an explicit supported schemaSelector`);
  }
}
/** Structural validation failure, retaining the Effect structured issue tree. */
export class ReportSchemaMismatch extends Error {
  /** Stable discriminator for typed error handling. */
  readonly _tag = "ReportSchemaMismatch";
  /** Effect issue tree, including nested property and union failures. */
  readonly issue: Schema.SchemaError["issue"];
  /** Creates a contextual structural decoding failure. */
  constructor(
    /** Original report-relative path. */ readonly path: string,
    /** Path-selected document kind. */ readonly kind: ReportDocumentKind,
    /** Exact schema selector, absent for pre-selection or compatibility checks. */ readonly schemaId: string | undefined,
    /** Original Effect schema failure. */ readonly cause: Schema.SchemaError,
  ) {
    super(`Schema mismatch at ${path}: ${cause.message}`);
    this.issue = cause.issue;
  }
}
/** Expected failures produced by report content parsing. */
export type ReportFileParseError = MalformedReportJson | UnsupportedReportDocumentKind
  | UnsupportedReportSchemaVersion | ReportSchemaFamilyMismatch
  | ReportSchemaSelectorRequired | ReportSchemaMismatch;

function documentKind(path: string): ReportDocumentKind | undefined {
  if (path === "definition.pbir") return "definitionProperties";
  if (path === ".pbi/localSettings.json") return "localSettings";
  if (path === "definition/report.json") return "report";
  if (path === "definition/version.json") return "versionMetadata";
  if (path === "definition/reportExtensions.json") return "reportExtension";
  if (path === "definition/pages/pages.json") return "pagesMetadata";
  if (/^definition\/pages\/[^/]+\/page\.json$/.test(path)) return "page";
  if (/^definition\/pages\/[^/]+\/visuals\/[^/]+\/visual\.json$/.test(path)) return "visualContainer";
  if (/^definition\/pages\/[^/]+\/visuals\/[^/]+\/mobile\.json$/.test(path)) return "visualContainerMobileState";
  if (path === "definition/bookmarks/bookmarks.json") return "bookmarksMetadata";
  if (/^definition\/bookmarks\/[^/]+\.bookmark\.json$/.test(path)) return "bookmark";
  return undefined;
}

function documentSchema<const Kind extends ReportDocumentKind, const Version extends string, Value>(
  kind: Kind, version: Version, schemaId: string, schema: Schema.Codec<Value>,
) {
  return {
    kind, version, schemaId,
    decode: (value: unknown, path: string) => Schema.decodeUnknownEffect(schema, { errors: "all" })(value).pipe(
      Effect.map((value) => ({ kind, version, schemaId, value } as const)),
      Effect.mapError((cause) => new ReportSchemaMismatch(path, kind, schemaId, cause)),
    ),
  };
}

/** Exact supported standalone document schemas; each decoder retains its inferred value type. */
export const reportFileSchemas = [
  documentSchema("report", "1.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.0.0/schema.json", ReportV1_0_0),
  documentSchema("report", "1.1.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.1.0/schema.json", ReportV1_1_0),
  documentSchema("report", "1.2.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.2.0/schema.json", ReportV1_2_0),
  documentSchema("report", "1.3.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.3.0/schema.json", ReportV1_3_0),
  documentSchema("report", "2.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/2.0.0/schema.json", ReportV2_0_0),
  documentSchema("report", "2.1.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/2.1.0/schema.json", ReportV2_1_0),
  documentSchema("report", "3.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.0.0/schema.json", ReportV3_0_0),
  documentSchema("report", "3.1.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.1.0/schema.json", ReportV3_1_0),
  documentSchema("report", "3.2.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.2.0/schema.json", ReportV3_2_0),
  documentSchema("report", "3.3.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.3.0/schema.json", ReportV3_3_0),
  documentSchema("definitionProperties", "1.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definitionProperties/1.0.0/schema.json", DefinitionPropertiesV1_0_0),
  documentSchema("definitionProperties", "2.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definitionProperties/2.0.0/schema.json", DefinitionPropertiesV2_0_0),
  documentSchema("versionMetadata", "1.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/versionMetadata/1.0.0/schema.json", VersionMetadataV1_0_0),
  documentSchema("reportExtension", "1.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/reportExtension/1.0.0/schema.json", ReportExtensionV1_0_0),
  documentSchema("localSettings", "1.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/localSettings/1.0.0/schema.json", LocalSettingsV1_0_0),
  documentSchema("page", "1.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.0.0/schema.json", Page.PageV1_0_0),
  documentSchema("page", "1.1.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.1.0/schema.json", Page.PageV1_1_0),
  documentSchema("page", "1.2.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.2.0/schema.json", Page.PageV1_2_0),
  documentSchema("page", "1.3.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.3.0/schema.json", Page.PageV1_3_0),
  documentSchema("page", "1.4.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.4.0/schema.json", Page.PageV1_4_0),
  documentSchema("page", "2.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.0.0/schema.json", Page.PageV2_0_0),
  documentSchema("page", "2.1.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.1.0/schema.json", Page.PageV2_1_0),
  documentSchema("pagesMetadata", "1.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.0.0/schema.json", Page.PagesMetadataV1_0_0),
  documentSchema("pagesMetadata", "1.1.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.1.0/schema.json", Page.PagesMetadataV1_1_0),
  documentSchema("bookmark", "1.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.0.0/schema.json", Bookmark.BookmarkV1_0_0),
  documentSchema("bookmark", "1.1.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.1.0/schema.json", Bookmark.BookmarkV1_1_0),
  documentSchema("bookmark", "1.2.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.2.0/schema.json", Bookmark.BookmarkV1_2_0),
  documentSchema("bookmark", "1.3.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.3.0/schema.json", Bookmark.BookmarkV1_3_0),
  documentSchema("bookmark", "1.4.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.4.0/schema.json", Bookmark.BookmarkV1_4_0),
  documentSchema("bookmark", "2.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.0.0/schema.json", Bookmark.BookmarkV2_0_0),
  documentSchema("bookmark", "2.1.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.1.0/schema.json", Bookmark.BookmarkV2_1_0),
  documentSchema("bookmarksMetadata", "1.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmarksMetadata/1.0.0/schema.json", Bookmark.BookmarksMetadataV1_0_0),
  documentSchema("visualContainer", "1.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.0.0/schema.json", Container.VisualContainerV1_0_0),
  documentSchema("visualContainer", "1.1.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.1.0/schema.json", Container.VisualContainerV1_1_0),
  documentSchema("visualContainer", "1.2.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.2.0/schema.json", Container.VisualContainerV1_2_0),
  documentSchema("visualContainer", "1.3.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.3.0/schema.json", Container.VisualContainerV1_3_0),
  documentSchema("visualContainer", "1.4.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.4.0/schema.json", Container.VisualContainerV1_4_0),
  documentSchema("visualContainer", "1.5.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.5.0/schema.json", Container.VisualContainerV1_5_0),
  documentSchema("visualContainer", "1.6.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.6.0/schema.json", Container.VisualContainerV1_6_0),
  documentSchema("visualContainer", "1.7.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.7.0/schema.json", Container.VisualContainerV1_7_0),
  documentSchema("visualContainer", "1.8.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.8.0/schema.json", Container.VisualContainerV1_8_0),
  documentSchema("visualContainer", "2.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.0.0/schema.json", Container.VisualContainerV2_0_0),
  documentSchema("visualContainer", "2.1.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.1.0/schema.json", Container.VisualContainerV2_1_0),
  documentSchema("visualContainer", "2.2.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.2.0/schema.json", Container.VisualContainerV2_2_0),
  documentSchema("visualContainer", "2.3.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.3.0/schema.json", Container.VisualContainerV2_3_0),
  documentSchema("visualContainer", "2.4.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.4.0/schema.json", Container.VisualContainerV2_4_0),
  documentSchema("visualContainer", "2.5.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.5.0/schema.json", Container.VisualContainerV2_5_0),
  documentSchema("visualContainer", "2.6.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.6.0/schema.json", Container.VisualContainerV2_6_0),
  documentSchema("visualContainer", "2.7.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.7.0/schema.json", Container.VisualContainerV2_7_0),
  documentSchema("visualContainer", "2.8.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.8.0/schema.json", Container.VisualContainerV2_8_0),
  documentSchema("visualContainer", "2.9.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.9.0/schema.json", Container.VisualContainerV2_9_0),
  documentSchema("visualContainerMobileState", "1.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.0.0/schema.json", Container.VisualContainerMobileStateV1_0_0),
  documentSchema("visualContainerMobileState", "1.1.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.1.0/schema.json", Container.VisualContainerMobileStateV1_1_0),
  documentSchema("visualContainerMobileState", "1.2.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.2.0/schema.json", Container.VisualContainerMobileStateV1_2_0),
  documentSchema("visualContainerMobileState", "1.3.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.3.0/schema.json", Container.VisualContainerMobileStateV1_3_0),
  documentSchema("visualContainerMobileState", "1.4.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.4.0/schema.json", Container.VisualContainerMobileStateV1_4_0),
  documentSchema("visualContainerMobileState", "1.5.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.5.0/schema.json", Container.VisualContainerMobileStateV1_5_0),
  documentSchema("visualContainerMobileState", "2.0.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.0.0/schema.json", Container.VisualContainerMobileStateV2_0_0),
  documentSchema("visualContainerMobileState", "2.1.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.1.0/schema.json", Container.VisualContainerMobileStateV2_1_0),
  documentSchema("visualContainerMobileState", "2.2.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.2.0/schema.json", Container.VisualContainerMobileStateV2_2_0),
  documentSchema("visualContainerMobileState", "2.3.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.3.0/schema.json", Container.VisualContainerMobileStateV2_3_0),
  documentSchema("visualContainerMobileState", "2.4.0", "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.4.0/schema.json", Container.VisualContainerMobileStateV2_4_0),
] as const;

/** A correlated kind/version/value union for every supported document version. */
export type ParsedReportFile = Effect.Success<ReturnType<(typeof reportFileSchemas)[number]["decode"]>>;
/** Content-only parser input; selectors are exact schema URLs, not content-format versions. */
export interface ReportFileInput {
  /** Exact report-relative path, using forward slashes. */
  readonly path: string;
  /** Original JSON file contents. */
  readonly text: string;
  /** Used only when the input omits $schema; the selected strict schema remains unchanged. */
  readonly schemaSelector?: string;
}

function jsonObject(input: ReportFileInput, kind: ReportDocumentKind) {
  return Effect.try({
    try: (): unknown => JSON.parse(input.text),
    catch: (cause) => new MalformedReportJson(input.path, cause),
  }).pipe(Effect.flatMap((value) => Schema.decodeUnknownEffect(Schema.Record(Schema.String, Schema.Json), { errors: "all" })(value).pipe(
    Effect.mapError((cause) => new ReportSchemaMismatch(input.path, kind, undefined, cause)),
  )));
}

/**
 * Parses a report file without filesystem I/O or mutation. Selection follows the
 * report-relative path and exact $schema URL. Schema-less historical documents
 * need schemaSelector; this never inserts a missing required $schema property.
 */
export function parseReportFile(input: ReportFileInput): Effect.Effect<ParsedReportFile, ReportFileParseError> {
  return Effect.gen(function*() {
    const kind = documentKind(input.path);
    if (kind === undefined) return yield* Effect.fail(new UnsupportedReportDocumentKind(input.path));
    const value = yield* jsonObject(input, kind);
    const tag = value.$schema === undefined ? undefined : yield* Schema.decodeUnknownEffect(Schema.String)(value.$schema).pipe(
      Effect.mapError((cause) => new ReportSchemaMismatch(input.path, kind, undefined, cause)),
    );
    const selector = tag ?? input.schemaSelector;
    if (selector === undefined) return yield* Effect.fail(new ReportSchemaSelectorRequired(input.path, kind));
    const coverage = reportSchemaCoverageAll.find((entry) => entry.schemaId === selector
      || ("aliases" in entry && entry.aliases.some((alias) => alias === selector)));
    if (coverage !== undefined) {
      const parts = coverage.source.split("/");
      const family = parts[0] === "definition" ? parts[1] : parts[0];
      if (family !== kind || coverage.variant === "embedded") {
        return yield* Effect.fail(new ReportSchemaFamilyMismatch(input.path, kind, selector, family ?? "unknown"));
      }
    }
    const selected = reportFileSchemas.find((entry) => entry.schemaId === selector);
    if (selected === undefined) return yield* Effect.fail(new UnsupportedReportSchemaVersion(input.path, kind, selector));
    if (selected.kind !== kind) return yield* Effect.fail(new ReportSchemaFamilyMismatch(input.path, kind, selector, selected.kind));
    return yield* selected.decode(value, input.path);
  });
}

/**
 * Desktop's schema-less local model binding. The byPath definitions and common
 * wrapper fields are identical in strict definitionProperties 1.0.0 and 2.0.0.
 * The profile deliberately requires a non-null byPath with no byConnection and
 * the fixture-supported content version 4.0, avoiding ambiguous remote bindings.
 */
export const DesktopDefinitionPropertiesByPath = closed({
  version: Schema.Literal("4.0"),
  datasetReference: closed({ byPath: closed({ path: Schema.String }) }),
});
/** Preserves the original absence of $schema and does not claim an upgraded version. */
export type DesktopDefinitionPropertiesByPath = typeof DesktopDefinitionPropertiesByPath.Type;
/** Compatibility profile metadata explicitly records both equivalent strict versions. */
export interface ParsedDesktopDefinitionProperties {
  /** The path-selected family. */
  readonly kind: "definitionProperties";
  /** Named compatibility profile, rather than an inferred schema version. */
  readonly version: "desktop-by-path";
  /** Strict schema versions with equivalent byPath and wrapper fields. */
  readonly compatibleSchemaVersions: readonly ["1.0.0", "2.0.0"];
  /** Parsed JSON preserving the absence of $schema. */
  readonly value: DesktopDefinitionPropertiesByPath;
}

/**
 * Separately opt in to Desktop's supported schema-less definition.pbir byPath
 * shape. Tagged files use strict parsing; all other paths use strict parsing.
 * Missing $schema stays missing, with no defaults or normalization.
 */
export function parseReportFileDesktopCompatibility(input: ReportFileInput): Effect.Effect<ParsedReportFile | ParsedDesktopDefinitionProperties, ReportFileParseError> {
  if (input.path !== "definition.pbir" || input.schemaSelector !== undefined) return parseReportFile(input);
  return Effect.gen(function*() {
    const value = yield* jsonObject(input, "definitionProperties");
    if (value.$schema !== undefined) return yield* parseReportFile(input);
    const parsed = yield* Schema.decodeUnknownEffect(DesktopDefinitionPropertiesByPath, { errors: "all" })(value).pipe(
      Effect.mapError((cause) => new ReportSchemaMismatch(input.path, "definitionProperties", undefined, cause)),
    );
    const result: ParsedDesktopDefinitionProperties = {
      kind: "definitionProperties", version: "desktop-by-path",
      compatibleSchemaVersions: ["1.0.0", "2.0.0"], value: parsed,
    };
    return result;
  });
}
