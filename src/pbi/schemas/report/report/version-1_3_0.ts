import { Schema } from "effect";
import { closed } from "../shared.js";
import { FilterConfigurationEmbeddedV1_1_0 } from "../filter-configuration/shared.js";
import { ReportAnnotation, ReportExplorationSettingsV1_0_0, ReportExplorationSlowDataSourceSettings, ReportLayoutOptimization, ReportOrganizationCustomVisual, ReportOutspacePane, ReportReportFormattingObjectsV1_3_0, ReportResourcePackage, ReportResourcePackageItem, ReportResourcePackageItemType, ReportResourcePackageType, ReportSection, ReportThemeCollectionV1_0_0, ReportThemeMetadataV1_0_0, ReportThemeResourcePackageType } from "./shared.js";

export const ReportDefinitionsV1_3_0 = {
  ThemeCollection: ReportThemeCollectionV1_0_0,
  ThemeMetadata: ReportThemeMetadataV1_0_0,
  ThemeResourcePackageType: ReportThemeResourcePackageType,
  LayoutOptimization: ReportLayoutOptimization,
  ReportFormattingObjects: ReportReportFormattingObjectsV1_3_0,
  OutspacePane: ReportOutspacePane,
  Section: ReportSection,
  ResourcePackage: ReportResourcePackage,
  ResourcePackageType: ReportResourcePackageType,
  ResourcePackageItem: ReportResourcePackageItem,
  ResourcePackageItemType: ReportResourcePackageItemType,
  OrganizationCustomVisual: ReportOrganizationCustomVisual,
  Annotation: ReportAnnotation,
  ExplorationSettings: ReportExplorationSettingsV1_0_0,
  ExplorationSlowDataSourceSettings:
    ReportExplorationSlowDataSourceSettings,
} as const;

export type ReportV1_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.3.0/schema.json";
  readonly themeCollection: ReportThemeCollectionV1_0_0;
  readonly layoutOptimization: ReportLayoutOptimization;
  readonly filterConfig?: FilterConfigurationEmbeddedV1_1_0;
  readonly objects?: ReportReportFormattingObjectsV1_3_0;
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
  readonly settings?: ReportExplorationSettingsV1_0_0;
  readonly slowDataSourceSettings?: ReportExplorationSlowDataSourceSettings;
};

export const ReportV1_3_0: Schema.Codec<ReportV1_3_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.3.0/schema.json",
  ),
  themeCollection: Schema.suspend(() => ReportThemeCollectionV1_0_0),
  layoutOptimization: Schema.suspend(() => ReportLayoutOptimization),
  filterConfig: Schema.optionalKey(
    Schema.suspend(() => FilterConfigurationEmbeddedV1_1_0),
  ),
  objects: Schema.optionalKey(
    Schema.suspend(() => ReportReportFormattingObjectsV1_3_0),
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
    Schema.suspend(() => ReportExplorationSettingsV1_0_0),
  ),
  slowDataSourceSettings: Schema.optionalKey(
    Schema.suspend(() => ReportExplorationSlowDataSourceSettings),
  ),
});
