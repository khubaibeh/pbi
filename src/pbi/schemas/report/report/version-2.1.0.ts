import { Schema } from "effect";

import { FilterConfigurationEmbeddedV1_2_0 } from "../filter-configuration/version-1.2.0.js";
import { DisplayArea } from "../page/shared.js";
import {
  ExplorationSettingsV1_0_0,
  ExplorationSlowDataSourceSettings,
  OrganizationCustomVisual,
  OutspacePane as ReportOutspacePane,
  ReportFormattingObjectsV2_1_0,
  ResourcePackage,
  ResourcePackageItem,
  ResourcePackageItemType,
  ResourcePackageType,
  ThemeCollectionV1_0_0,
  ThemeMetadataV1_0_0,
  ThemeResourcePackageType,
} from "./shared.js";
import { Annotation, closed } from "../shared.js";

export type ReportV2_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/2.1.0/schema.json";
  readonly themeCollection: ThemeCollectionV1_0_0;
  readonly filterConfig?: FilterConfigurationEmbeddedV1_2_0;
  readonly objects?: ReportFormattingObjectsV2_1_0;
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
  readonly settings?: ExplorationSettingsV1_0_0;
  readonly slowDataSourceSettings?: ExplorationSlowDataSourceSettings;
};

export const ReportV2_1_0: Schema.Codec<ReportV2_1_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/2.1.0/schema.json",
  ),
  themeCollection: Schema.suspend(() => ThemeCollectionV1_0_0),
  filterConfig: Schema.optionalKey(
    Schema.suspend(() => FilterConfigurationEmbeddedV1_2_0),
  ),
  objects: Schema.optionalKey(
    Schema.suspend(() => ReportFormattingObjectsV2_1_0),
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
  settings: Schema.optionalKey(Schema.suspend(() => ExplorationSettingsV1_0_0)),
  slowDataSourceSettings: Schema.optionalKey(
    Schema.suspend(() => ExplorationSlowDataSourceSettings),
  ),
});

export const ReportDefinitionsV2_1_0 = {
  ThemeCollection: ThemeCollectionV1_0_0,
  ThemeMetadata: ThemeMetadataV1_0_0,
  ThemeResourcePackageType: ThemeResourcePackageType,
  ReportFormattingObjects: ReportFormattingObjectsV2_1_0,
  OutspacePane: ReportOutspacePane,
  Section: DisplayArea,
  ResourcePackage: ResourcePackage,
  ResourcePackageType: ResourcePackageType,
  ResourcePackageItem: ResourcePackageItem,
  ResourcePackageItemType: ResourcePackageItemType,
  OrganizationCustomVisual: OrganizationCustomVisual,
  Annotation: Annotation,
  ExplorationSettings: ExplorationSettingsV1_0_0,
  ExplorationSlowDataSourceSettings: ExplorationSlowDataSourceSettings,
} as const;

export {
  ThemeCollectionV1_0_0 as ReportThemeCollectionV2_1_0,
  ThemeMetadataV1_0_0 as ReportThemeMetadataV2_1_0,
  ThemeResourcePackageType as ReportThemeResourcePackageTypeV2_1_0,
  ReportFormattingObjectsV2_1_0 as ReportReportFormattingObjectsV2_1_0,
  OutspacePane as ReportOutspacePaneV2_1_0,
  ResourcePackage as ReportResourcePackageV2_1_0,
  ResourcePackageType as ReportResourcePackageTypeV2_1_0,
  ResourcePackageItem as ReportResourcePackageItemV2_1_0,
  ResourcePackageItemType as ReportResourcePackageItemTypeV2_1_0,
  OrganizationCustomVisual as ReportOrganizationCustomVisualV2_1_0,
  ExplorationSettingsV1_0_0 as ReportExplorationSettingsV2_1_0,
  ExplorationSlowDataSourceSettings as ReportExplorationSlowDataSourceSettingsV2_1_0,
} from "./shared.js";

export { DisplayArea as ReportSectionV2_1_0 } from "../page/shared.js";

export { Annotation as ReportAnnotationV2_1_0 } from "../shared.js";
