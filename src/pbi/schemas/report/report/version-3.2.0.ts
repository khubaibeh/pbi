import { Schema } from "effect";
import { FilterConfigurationEmbeddedV1_3_0 } from "../filter-configuration/version-1.3.0.js";
import { DisplayArea } from "../page/shared.js";
import {
  ExplorationSettingsV3_1_0,
  ExplorationSlowDataSourceSettings,
  FieldParameterReportSettings,
  OrganizationCustomVisual,
  OutspacePane,
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

export type ReportV3_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.2.0/schema.json";
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
  readonly settings?: ExplorationSettingsV3_1_0;
  readonly slowDataSourceSettings?: ExplorationSlowDataSourceSettings;
};

export const ReportV3_2_0: Schema.Codec<ReportV3_2_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.2.0/schema.json",
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
  settings: Schema.optionalKey(Schema.suspend(() => ExplorationSettingsV3_1_0)),
  slowDataSourceSettings: Schema.optionalKey(
    Schema.suspend(() => ExplorationSlowDataSourceSettings),
  ),
});

export const ReportDefinitionsV3_2_0 = {
  ThemeCollection: ThemeCollectionV3_0_0,
  ThemeMetadata: ThemeMetadataV3_0_0,
  ThemeVersion: ThemeVersion,
  ThemeResourcePackageType: ThemeResourcePackageType,
  ReportFormattingObjects: ReportFormattingObjectsV3_2_0,
  OutspacePane: OutspacePane,
  Section: DisplayArea,
  ResourcePackage: ResourcePackage,
  ResourcePackageType: ResourcePackageType,
  ResourcePackageItem: ResourcePackageItem,
  ResourcePackageItemType: ResourcePackageItemType,
  OrganizationCustomVisual: OrganizationCustomVisual,
  Annotation: Annotation,
  ExplorationSettings: ExplorationSettingsV3_1_0,
  FieldParameterReportSettings: FieldParameterReportSettings,
  ExplorationSlowDataSourceSettings: ExplorationSlowDataSourceSettings,
} as const;

export {
  ThemeCollectionV3_0_0 as ReportThemeCollectionV3_2_0,
  ThemeMetadataV3_0_0 as ReportThemeMetadataV3_2_0,
  ThemeVersion as ReportThemeVersionV3_2_0,
  ThemeResourcePackageType as ReportThemeResourcePackageTypeV3_2_0,
  ReportFormattingObjectsV3_2_0 as ReportReportFormattingObjectsV3_2_0,
  OutspacePane as ReportOutspacePaneV3_2_0,
  ResourcePackage as ReportResourcePackageV3_2_0,
  ResourcePackageType as ReportResourcePackageTypeV3_2_0,
  ResourcePackageItem as ReportResourcePackageItemV3_2_0,
  ResourcePackageItemType as ReportResourcePackageItemTypeV3_2_0,
  OrganizationCustomVisual as ReportOrganizationCustomVisualV3_2_0,
  ExplorationSettingsV3_1_0 as ReportExplorationSettingsV3_2_0,
  FieldParameterReportSettings as ReportFieldParameterReportSettingsV3_2_0,
  ExplorationSlowDataSourceSettings as ReportExplorationSlowDataSourceSettingsV3_2_0,
} from "./shared.js";

export { DisplayArea as ReportSectionV3_2_0 } from "../page/shared.js";

export { Annotation as ReportAnnotationV3_2_0 } from "../shared.js";
