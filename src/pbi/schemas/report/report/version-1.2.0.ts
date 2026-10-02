import { Schema } from "effect";

import {
  FilterConfigurationEmbeddedV1_0_0,
  FilterContainerFormattingObjectsV1_0_0 as FilterConfigurationFilterContainerFormattingObjectsV1_0_0,
  FilterContainerV1_0_0 as FilterConfigurationFilterContainerV1_0_0,
} from "../filter-configuration/version-1.0.0.js";
import { SelectorV1_2_0 } from "../formatting-object-definitions/version-1.2.0.js";
import { DisplayArea } from "../page/shared.js";
import {
  ExplorationSettingsV1_0_0,
  ExplorationSlowDataSourceSettings,
  LayoutOptimization,
  OrganizationCustomVisual,
  OutspacePane as ReportOutspacePane,
  ResourcePackage,
  ResourcePackageItem,
  ResourcePackageItemType,
  ResourcePackageType,
  ThemeCollectionV1_0_0,
  ThemeMetadataV1_0_0,
  ThemeResourcePackageType,
} from "./shared.js";
import {
  Annotation,
  closed,
  FilterContainerFormattingProperties,
} from "../shared.js";

export type ReportFormattingObjectsV1_2_0 = {
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: ReportOutspacePane;
  }>;
  readonly section?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: DisplayArea;
  }>;
};

export const ReportFormattingObjectsV1_2_0: Schema.Codec<ReportFormattingObjectsV1_2_0> =
  closed({
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => ReportOutspacePane),
        }),
      ),
    ),
    section: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => DisplayArea),
        }),
      ),
    ),
  });

export type ReportV1_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.2.0/schema.json";
  readonly themeCollection: ThemeCollectionV1_0_0;
  readonly layoutOptimization: LayoutOptimization;
  readonly filterConfig?: FilterConfigurationEmbeddedV1_0_0;
  readonly objects?: ReportFormattingObjectsV1_2_0;
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

export const ReportV1_2_0: Schema.Codec<ReportV1_2_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.2.0/schema.json",
  ),
  themeCollection: Schema.suspend(() => ThemeCollectionV1_0_0),
  layoutOptimization: Schema.suspend(() => LayoutOptimization),
  filterConfig: Schema.optionalKey(
    Schema.suspend(() => FilterConfigurationEmbeddedV1_0_0),
  ),
  objects: Schema.optionalKey(
    Schema.suspend(() => ReportFormattingObjectsV1_2_0),
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

export const ReportDefinitionsV1_2_0 = {
  ThemeCollection: ThemeCollectionV1_0_0,
  ThemeMetadata: ThemeMetadataV1_0_0,
  ThemeResourcePackageType: ThemeResourcePackageType,
  LayoutOptimization: LayoutOptimization,
  FilterConfig: FilterConfigurationEmbeddedV1_0_0,
  FilterContainer: FilterConfigurationFilterContainerV1_0_0,
  FilterContainerFormattingObjects:
    FilterConfigurationFilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
  ReportFormattingObjects: ReportFormattingObjectsV1_2_0,
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
  ThemeCollectionV1_0_0 as ReportThemeCollectionV1_2_0,
  ThemeMetadataV1_0_0 as ReportThemeMetadataV1_2_0,
  ThemeResourcePackageType as ReportThemeResourcePackageTypeV1_2_0,
  LayoutOptimization as ReportLayoutOptimizationV1_2_0,
  OutspacePane as ReportOutspacePaneV1_2_0,
  ResourcePackage as ReportResourcePackageV1_2_0,
  ResourcePackageType as ReportResourcePackageTypeV1_2_0,
  ResourcePackageItem as ReportResourcePackageItemV1_2_0,
  ResourcePackageItemType as ReportResourcePackageItemTypeV1_2_0,
  OrganizationCustomVisual as ReportOrganizationCustomVisualV1_2_0,
  ExplorationSettingsV1_0_0 as ReportExplorationSettingsV1_2_0,
  ExplorationSlowDataSourceSettings as ReportExplorationSlowDataSourceSettingsV1_2_0,
} from "./shared.js";

export {
  FilterConfigurationEmbeddedV1_0_0 as ReportFilterConfigV1_2_0,
  FilterContainerV1_0_0 as ReportFilterContainerV1_2_0,
  FilterContainerFormattingObjectsV1_0_0 as ReportFilterContainerFormattingObjectsV1_2_0,
} from "../filter-configuration/version-1.0.0.js";

export {
  FilterContainerFormattingProperties as ReportFilterContainerFormattingObjectsPropertiesV1_2_0,
  Annotation as ReportAnnotationV1_2_0,
} from "../shared.js";

export { ReportFormattingObjectsV1_2_0 as ReportReportFormattingObjectsV1_2_0 };

export { DisplayArea as ReportSectionV1_2_0 } from "../page/shared.js";
