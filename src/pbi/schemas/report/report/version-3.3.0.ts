import { Schema } from "effect";

import { FilterConfigurationEmbeddedV1_3_0 } from "../filter-configuration/version-1.3.0.js";
import { DisplayArea } from "../page/shared.js";
import {
  ExplorationSlowDataSourceSettings,
  FieldParameterReportSettings,
  OrganizationCustomVisual,
  OutspacePane as ReportOutspacePane,
  ReportFormattingObjectsV3_2_0,
  ResourcePackage,
  ResourcePackageItem,
  ResourcePackageItemType,
  ResourcePackageType,
  ThemeCollectionV3_0_0,
  ThemeMetadataV3_0_0,
  ThemeResourcePackageType,
  ThemeVersion,
} from "./shared.js";
import { Annotation, closed } from "../shared.js";

export type ExplorationSettingsV3_3_0 = {
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
  readonly fieldParameterReportSettings?: FieldParameterReportSettings;
  readonly defaultDataExplorePerspective?: string;
  readonly locale?: string;
  readonly defaultDisplayUnitsToNone?: boolean;
};

export const ExplorationSettingsV3_3_0: Schema.Codec<ExplorationSettingsV3_3_0> =
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
      Schema.suspend(() => FieldParameterReportSettings),
    ),
    defaultDataExplorePerspective: Schema.optionalKey(Schema.String),
    locale: Schema.optionalKey(Schema.String),
    defaultDisplayUnitsToNone: Schema.optionalKey(Schema.Boolean),
  });

export type ReportV3_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.3.0/schema.json";
  readonly themeCollection: ThemeCollectionV3_0_0;
  readonly filterConfig?: FilterConfigurationEmbeddedV1_3_0;
  readonly objects?: ReportFormattingObjectsV3_2_0;
  readonly reportSource?:
    | "Default"
    | "SharePoint"
    | "Teams"
    | "QuickCreate"
    | "EmbedQuickCreate"
    | "Datamart"
    | "DataExplore";
  readonly publicCustomVisuals?: ReadonlyArray<string>;
  readonly resourcePackages?: ReadonlyArray<ResourcePackage>;
  readonly organizationCustomVisuals?: ReadonlyArray<OrganizationCustomVisual>;
  readonly annotations?: ReadonlyArray<Annotation>;
  readonly dataSourceVariables?: string;
  readonly settings?: ExplorationSettingsV3_3_0;
  readonly slowDataSourceSettings?: ExplorationSlowDataSourceSettings;
};

export const ReportV3_3_0: Schema.Codec<ReportV3_3_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.3.0/schema.json",
  ),
  themeCollection: Schema.suspend(() => ThemeCollectionV3_0_0),
  filterConfig: Schema.optionalKey(
    Schema.suspend(() => FilterConfigurationEmbeddedV1_3_0),
  ),
  objects: Schema.optionalKey(
    Schema.suspend(() => ReportFormattingObjectsV3_2_0),
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
    Schema.Array(Schema.suspend(() => ResourcePackage)),
  ),
  organizationCustomVisuals: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => OrganizationCustomVisual)),
  ),
  annotations: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => Annotation)),
  ),
  dataSourceVariables: Schema.optionalKey(Schema.String),
  settings: Schema.optionalKey(Schema.suspend(() => ExplorationSettingsV3_3_0)),
  slowDataSourceSettings: Schema.optionalKey(
    Schema.suspend(() => ExplorationSlowDataSourceSettings),
  ),
});

export const ReportDefinitionsV3_3_0 = {
  ThemeCollection: ThemeCollectionV3_0_0,
  ThemeMetadata: ThemeMetadataV3_0_0,
  ThemeVersion: ThemeVersion,
  ThemeResourcePackageType: ThemeResourcePackageType,
  ReportFormattingObjects: ReportFormattingObjectsV3_2_0,
  OutspacePane: ReportOutspacePane,
  Section: DisplayArea,
  ResourcePackage: ResourcePackage,
  ResourcePackageType: ResourcePackageType,
  ResourcePackageItem: ResourcePackageItem,
  ResourcePackageItemType: ResourcePackageItemType,
  OrganizationCustomVisual: OrganizationCustomVisual,
  Annotation: Annotation,
  ExplorationSettings: ExplorationSettingsV3_3_0,
  FieldParameterReportSettings: FieldParameterReportSettings,
  ExplorationSlowDataSourceSettings: ExplorationSlowDataSourceSettings,
} as const;

export {
  ThemeCollectionV3_0_0 as ReportThemeCollectionV3_3_0,
  ThemeMetadataV3_0_0 as ReportThemeMetadataV3_3_0,
  ThemeVersion as ReportThemeVersionV3_3_0,
  ThemeResourcePackageType as ReportThemeResourcePackageTypeV3_3_0,
  ReportFormattingObjectsV3_2_0 as ReportReportFormattingObjectsV3_3_0,
  OutspacePane as ReportOutspacePaneV3_3_0,
  ResourcePackage as ReportResourcePackageV3_3_0,
  ResourcePackageType as ReportResourcePackageTypeV3_3_0,
  ResourcePackageItem as ReportResourcePackageItemV3_3_0,
  ResourcePackageItemType as ReportResourcePackageItemTypeV3_3_0,
  OrganizationCustomVisual as ReportOrganizationCustomVisualV3_3_0,
  FieldParameterReportSettings as ReportFieldParameterReportSettingsV3_3_0,
  ExplorationSlowDataSourceSettings as ReportExplorationSlowDataSourceSettingsV3_3_0,
} from "./shared.js";

export { DisplayArea as ReportSectionV3_3_0 } from "../page/shared.js";

export { Annotation as ReportAnnotationV3_3_0 } from "../shared.js";

export { ExplorationSettingsV3_3_0 as ReportExplorationSettingsV3_3_0 };
