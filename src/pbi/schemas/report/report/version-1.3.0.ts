import { Schema } from "effect";
import { FilterConfigurationEmbeddedV1_1_0 } from "../filter-configuration/version-1.1.0.js";
import { DisplayArea } from "../page/shared.js";
import {
  ExplorationSettingsV1_0_0,
  ExplorationSlowDataSourceSettings,
  LayoutOptimization,
  OrganizationCustomVisual,
  OutspacePane,
  ReportFormattingObjectsV1_3_0,
  ResourcePackage,
  ResourcePackageItem,
  ResourcePackageItemType,
  ResourcePackageType,
  ThemeCollectionV1_0_0,
  ThemeMetadataV1_0_0,
  ThemeResourcePackageType,
} from "./shared.js";
import { Annotation, closed } from "../shared.js";

export type ReportV1_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.3.0/schema.json";
  readonly themeCollection: ThemeCollectionV1_0_0;
  readonly layoutOptimization: LayoutOptimization;
  readonly filterConfig?: FilterConfigurationEmbeddedV1_1_0;
  readonly objects?: ReportFormattingObjectsV1_3_0;
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

export const ReportV1_3_0: Schema.Codec<ReportV1_3_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.3.0/schema.json",
  ),
  themeCollection: Schema.suspend(() => ThemeCollectionV1_0_0),
  layoutOptimization: Schema.suspend(() => LayoutOptimization),
  filterConfig: Schema.optionalKey(
    Schema.suspend(() => FilterConfigurationEmbeddedV1_1_0),
  ),
  objects: Schema.optionalKey(
    Schema.suspend(() => ReportFormattingObjectsV1_3_0),
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

export const ReportDefinitionsV1_3_0 = {
  ThemeCollection: ThemeCollectionV1_0_0,
  ThemeMetadata: ThemeMetadataV1_0_0,
  ThemeResourcePackageType: ThemeResourcePackageType,
  LayoutOptimization: LayoutOptimization,
  ReportFormattingObjects: ReportFormattingObjectsV1_3_0,
  OutspacePane: OutspacePane,
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
  ThemeCollectionV1_0_0 as ReportThemeCollectionV1_3_0,
  ThemeMetadataV1_0_0 as ReportThemeMetadataV1_3_0,
  ThemeResourcePackageType as ReportThemeResourcePackageTypeV1_3_0,
  LayoutOptimization as ReportLayoutOptimizationV1_3_0,
  ReportFormattingObjectsV1_3_0 as ReportReportFormattingObjectsV1_3_0,
  OutspacePane as ReportOutspacePaneV1_3_0,
  ResourcePackage as ReportResourcePackageV1_3_0,
  ResourcePackageType as ReportResourcePackageTypeV1_3_0,
  ResourcePackageItem as ReportResourcePackageItemV1_3_0,
  ResourcePackageItemType as ReportResourcePackageItemTypeV1_3_0,
  OrganizationCustomVisual as ReportOrganizationCustomVisualV1_3_0,
  ExplorationSettingsV1_0_0 as ReportExplorationSettingsV1_3_0,
  ExplorationSlowDataSourceSettings as ReportExplorationSlowDataSourceSettingsV1_3_0,
} from "./shared.js";

export { DisplayArea as ReportSectionV1_3_0 } from "../page/shared.js";

export { Annotation as ReportAnnotationV1_3_0 } from "../shared.js";
