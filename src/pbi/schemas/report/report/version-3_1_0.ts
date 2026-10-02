import { Schema } from "effect";
import { closed } from "../shared.js";
import { FilterConfigurationEmbeddedV1_2_0 } from "../filter-configuration/shared.js";
import { VisualContainerAnnotation } from "../visual-container/shared.js";
import {
  ReportExplorationSettingsV3_1_0,
  ReportExplorationSlowDataSourceSettings,
  ReportFieldParameterReportSettings,
  ReportOrganizationCustomVisual,
  ReportOutspacePane,
  ReportReportFormattingObjectsV2_1_0,
  ReportResourcePackage,
  ReportResourcePackageItem,
  ReportResourcePackageItemType,
  ReportResourcePackageType,
  ReportSection,
  ReportThemeCollectionV3_0_0,
  ReportThemeMetadataV3_0_0,
  ReportThemeResourcePackageType,
  ReportThemeVersion,
} from "./shared.js";

export const ReportDefinitionsV3_1_0 = {
  ThemeCollection: ReportThemeCollectionV3_0_0,
  ThemeMetadata: ReportThemeMetadataV3_0_0,
  ThemeVersion: ReportThemeVersion,
  ThemeResourcePackageType: ReportThemeResourcePackageType,
  ReportFormattingObjects: ReportReportFormattingObjectsV2_1_0,
  OutspacePane: ReportOutspacePane,
  Section: ReportSection,
  ResourcePackage: ReportResourcePackage,
  ResourcePackageType: ReportResourcePackageType,
  ResourcePackageItem: ReportResourcePackageItem,
  ResourcePackageItemType: ReportResourcePackageItemType,
  OrganizationCustomVisual: ReportOrganizationCustomVisual,
  Annotation: VisualContainerAnnotation,
  ExplorationSettings: ReportExplorationSettingsV3_1_0,
  FieldParameterReportSettings: ReportFieldParameterReportSettings,
  ExplorationSlowDataSourceSettings: ReportExplorationSlowDataSourceSettings,
} as const;

export type ReportV3_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.1.0/schema.json";
  readonly themeCollection: ReportThemeCollectionV3_0_0;
  readonly filterConfig?: FilterConfigurationEmbeddedV1_2_0;
  readonly objects?: ReportReportFormattingObjectsV2_1_0;
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
  readonly annotations?: ReadonlyArray<VisualContainerAnnotation>;
  readonly dataSourceVariables?: string;
  readonly settings?: ReportExplorationSettingsV3_1_0;
  readonly slowDataSourceSettings?: ReportExplorationSlowDataSourceSettings;
};

export const ReportV3_1_0: Schema.Codec<ReportV3_1_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.1.0/schema.json",
  ),
  themeCollection: Schema.suspend(() => ReportThemeCollectionV3_0_0),
  filterConfig: Schema.optionalKey(Schema.suspend(() => FilterConfigurationEmbeddedV1_2_0)),
  objects: Schema.optionalKey(Schema.suspend(() => ReportReportFormattingObjectsV2_1_0)),
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
  resourcePackages: Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportResourcePackage))),
  organizationCustomVisuals: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => ReportOrganizationCustomVisual)),
  ),
  annotations: Schema.optionalKey(Schema.Array(Schema.suspend(() => VisualContainerAnnotation))),
  dataSourceVariables: Schema.optionalKey(Schema.String),
  settings: Schema.optionalKey(Schema.suspend(() => ReportExplorationSettingsV3_1_0)),
  slowDataSourceSettings: Schema.optionalKey(
    Schema.suspend(() => ReportExplorationSlowDataSourceSettings),
  ),
});
