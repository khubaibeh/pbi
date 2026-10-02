import { Schema } from "effect";
import { closed } from "../shared.js";
import { FilterConfigurationEmbeddedV1_3_0 } from "../filter-configuration/shared.js";
import { ReportAnnotation, ReportExplorationSlowDataSourceSettings, ReportFieldParameterReportSettings, ReportOrganizationCustomVisual, ReportOutspacePane, ReportReportFormattingObjectsV3_2_0, ReportResourcePackage, ReportResourcePackageItem, ReportResourcePackageItemType, ReportResourcePackageType, ReportSection, ReportThemeCollectionV3_0_0, ReportThemeMetadataV3_0_0, ReportThemeResourcePackageType, ReportThemeVersion } from "./shared.js";

export type ReportExplorationSettingsV3_3_0 = {
  readonly isPersistentUserStateDisabled?: boolean;
  readonly hideVisualContainerHeader?: boolean;
  readonly useStylableVisualContainerHeader?: boolean;
  readonly exportDataMode?:
    "AllowSummarized" | "AllowSummarizedAndUnderlying" | "None";
  readonly isReportAnnotationsDisabled?: boolean;
  readonly defaultFilterActionIsDataFilter?: boolean;
  readonly defaultDrillFilterOtherVisuals?: boolean;
  readonly useCrossReportDrillthrough?: boolean;
  readonly allowChangeFilterTypes?: boolean;
  readonly allowInlineExploration?: boolean;
  readonly useEnhancedTooltips?: boolean;
  readonly useScaledTooltips?: boolean;
  readonly filterPaneHiddenInEditMode?: boolean;
  readonly disableFilterPaneSearch?: boolean;
  readonly pagesPosition?: "PagesPane" | "Bottom";
  readonly allowAutomatedInsightsNotification?: boolean;
  readonly useDefaultAggregateDisplayName?: boolean;
  readonly enableDeveloperMode?: boolean;
  readonly pauseQueries?: boolean;
  readonly queryLimitOption?:
    | "None"
    | "Shared"
    | "Premium"
    | "SQLServerAS"
    | "AzureAS"
    | "Custom"
    | "Auto";
  readonly customMemoryLimit?: string;
  readonly customTimeoutLimit?: string;
  readonly fieldParameterReportSettings?: ReportFieldParameterReportSettings;
  readonly defaultDataExplorePerspective?: string;
  readonly locale?: string;
  readonly defaultDisplayUnitsToNone?: boolean;
};

export const ReportExplorationSettingsV3_3_0: Schema.Codec<ReportExplorationSettingsV3_3_0> =
  closed({
    isPersistentUserStateDisabled: Schema.optionalKey(Schema.Boolean),
    hideVisualContainerHeader: Schema.optionalKey(Schema.Boolean),
    useStylableVisualContainerHeader: Schema.optionalKey(Schema.Boolean),
    exportDataMode: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("AllowSummarized"),
        Schema.Literal("AllowSummarizedAndUnderlying"),
        Schema.Literal("None"),
      ]),
    ),
    isReportAnnotationsDisabled: Schema.optionalKey(Schema.Boolean),
    defaultFilterActionIsDataFilter: Schema.optionalKey(Schema.Boolean),
    defaultDrillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
    useCrossReportDrillthrough: Schema.optionalKey(Schema.Boolean),
    allowChangeFilterTypes: Schema.optionalKey(Schema.Boolean),
    allowInlineExploration: Schema.optionalKey(Schema.Boolean),
    useEnhancedTooltips: Schema.optionalKey(Schema.Boolean),
    useScaledTooltips: Schema.optionalKey(Schema.Boolean),
    filterPaneHiddenInEditMode: Schema.optionalKey(Schema.Boolean),
    disableFilterPaneSearch: Schema.optionalKey(Schema.Boolean),
    pagesPosition: Schema.optionalKey(
      Schema.Union([Schema.Literal("PagesPane"), Schema.Literal("Bottom")]),
    ),
    allowAutomatedInsightsNotification: Schema.optionalKey(Schema.Boolean),
    useDefaultAggregateDisplayName: Schema.optionalKey(Schema.Boolean),
    enableDeveloperMode: Schema.optionalKey(Schema.Boolean),
    pauseQueries: Schema.optionalKey(Schema.Boolean),
    queryLimitOption: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("None"),
        Schema.Literal("Shared"),
        Schema.Literal("Premium"),
        Schema.Literal("SQLServerAS"),
        Schema.Literal("AzureAS"),
        Schema.Literal("Custom"),
        Schema.Literal("Auto"),
      ]),
    ),
    customMemoryLimit: Schema.optionalKey(Schema.String),
    customTimeoutLimit: Schema.optionalKey(Schema.String),
    fieldParameterReportSettings: Schema.optionalKey(
      Schema.suspend(() => ReportFieldParameterReportSettings),
    ),
    defaultDataExplorePerspective: Schema.optionalKey(Schema.String),
    locale: Schema.optionalKey(Schema.String),
    defaultDisplayUnitsToNone: Schema.optionalKey(Schema.Boolean),
  });

export const ReportDefinitionsV3_3_0 = {
  ThemeCollection: ReportThemeCollectionV3_0_0,
  ThemeMetadata: ReportThemeMetadataV3_0_0,
  ThemeVersion: ReportThemeVersion,
  ThemeResourcePackageType: ReportThemeResourcePackageType,
  ReportFormattingObjects: ReportReportFormattingObjectsV3_2_0,
  OutspacePane: ReportOutspacePane,
  Section: ReportSection,
  ResourcePackage: ReportResourcePackage,
  ResourcePackageType: ReportResourcePackageType,
  ResourcePackageItem: ReportResourcePackageItem,
  ResourcePackageItemType: ReportResourcePackageItemType,
  OrganizationCustomVisual: ReportOrganizationCustomVisual,
  Annotation: ReportAnnotation,
  ExplorationSettings: ReportExplorationSettingsV3_3_0,
  FieldParameterReportSettings: ReportFieldParameterReportSettings,
  ExplorationSlowDataSourceSettings:
    ReportExplorationSlowDataSourceSettings,
} as const;

export type ReportV3_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.3.0/schema.json";
  readonly themeCollection: ReportThemeCollectionV3_0_0;
  readonly filterConfig?: FilterConfigurationEmbeddedV1_3_0;
  readonly objects?: ReportReportFormattingObjectsV3_2_0;
  readonly reportSource?:
    | "Default"
    | "SharePoint"
    | "Teams"
    | "QuickCreate"
    | "EmbedQuickCreate"
    | "Datamart"
    | "DataExplore";
  readonly publicCustomVisuals?: ReadonlyArray<string>;
  readonly resourcePackages?: ReadonlyArray<ReportResourcePackage>;
  readonly organizationCustomVisuals?: ReadonlyArray<ReportOrganizationCustomVisual>;
  readonly annotations?: ReadonlyArray<ReportAnnotation>;
  readonly dataSourceVariables?: string;
  readonly settings?: ReportExplorationSettingsV3_3_0;
  readonly slowDataSourceSettings?: ReportExplorationSlowDataSourceSettings;
};

export const ReportV3_3_0: Schema.Codec<ReportV3_3_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.3.0/schema.json",
  ),
  themeCollection: Schema.suspend(() => ReportThemeCollectionV3_0_0),
  filterConfig: Schema.optionalKey(
    Schema.suspend(() => FilterConfigurationEmbeddedV1_3_0),
  ),
  objects: Schema.optionalKey(
    Schema.suspend(() => ReportReportFormattingObjectsV3_2_0),
  ),
  reportSource: Schema.optionalKey(
    Schema.Union([
      Schema.Literal("Default"),
      Schema.Literal("SharePoint"),
      Schema.Literal("Teams"),
      Schema.Literal("QuickCreate"),
      Schema.Literal("EmbedQuickCreate"),
      Schema.Literal("Datamart"),
      Schema.Literal("DataExplore"),
    ]),
  ),
  publicCustomVisuals: Schema.optionalKey(Schema.Array(Schema.String)),
  resourcePackages: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => ReportResourcePackage)),
  ),
  organizationCustomVisuals: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => ReportOrganizationCustomVisual)),
  ),
  annotations: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => ReportAnnotation)),
  ),
  dataSourceVariables: Schema.optionalKey(Schema.String),
  settings: Schema.optionalKey(
    Schema.suspend(() => ReportExplorationSettingsV3_3_0),
  ),
  slowDataSourceSettings: Schema.optionalKey(
    Schema.suspend(() => ReportExplorationSlowDataSourceSettings),
  ),
});
