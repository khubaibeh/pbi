import { Schema } from "effect";

import { SelectorV1_1_0 } from "../formatting-object-definitions/version-1.1.0.js";
import { DisplayArea } from "../page/shared.js";
import {
  FilterConfigV1_1_0,
  FilterContainerFormattingObjectsV1_1_0 as PageFilterContainerFormattingObjectsV1_1_0,
  FilterContainerV1_1_0 as PageFilterContainerV1_1_0,
} from "../page/version-1.1.0.js";
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

export type ReportFormattingObjectsV1_1_0 = {
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: ReportOutspacePane;
  }>;
  readonly section?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: DisplayArea;
  }>;
};

export const ReportFormattingObjectsV1_1_0: Schema.Codec<ReportFormattingObjectsV1_1_0> =
  closed({
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => ReportOutspacePane),
        }),
      ),
    ),
    section: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => DisplayArea),
        }),
      ),
    ),
  });

export type ReportV1_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.1.0/schema.json";
  readonly themeCollection: ThemeCollectionV1_0_0;
  readonly layoutOptimization: LayoutOptimization;
  readonly filterConfig?: FilterConfigV1_1_0;
  readonly objects?: ReportFormattingObjectsV1_1_0;
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

export const ReportV1_1_0: Schema.Codec<ReportV1_1_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.1.0/schema.json",
  ),
  themeCollection: Schema.suspend(() => ThemeCollectionV1_0_0),
  layoutOptimization: Schema.suspend(() => LayoutOptimization),
  filterConfig: Schema.optionalKey(Schema.suspend(() => FilterConfigV1_1_0)),
  objects: Schema.optionalKey(
    Schema.suspend(() => ReportFormattingObjectsV1_1_0),
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

export const ReportDefinitionsV1_1_0 = {
  ThemeCollection: ThemeCollectionV1_0_0,
  ThemeMetadata: ThemeMetadataV1_0_0,
  ThemeResourcePackageType: ThemeResourcePackageType,
  LayoutOptimization: LayoutOptimization,
  FilterConfig: FilterConfigV1_1_0,
  FilterContainer: PageFilterContainerV1_1_0,
  FilterContainerFormattingObjects: PageFilterContainerFormattingObjectsV1_1_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
  ReportFormattingObjects: ReportFormattingObjectsV1_1_0,
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
  ThemeCollectionV1_0_0 as ReportThemeCollectionV1_1_0,
  ThemeMetadataV1_0_0 as ReportThemeMetadataV1_1_0,
  ThemeResourcePackageType as ReportThemeResourcePackageTypeV1_1_0,
  LayoutOptimization as ReportLayoutOptimizationV1_1_0,
  OutspacePane as ReportOutspacePaneV1_1_0,
  ResourcePackage as ReportResourcePackageV1_1_0,
  ResourcePackageType as ReportResourcePackageTypeV1_1_0,
  ResourcePackageItem as ReportResourcePackageItemV1_1_0,
  ResourcePackageItemType as ReportResourcePackageItemTypeV1_1_0,
  OrganizationCustomVisual as ReportOrganizationCustomVisualV1_1_0,
  ExplorationSettingsV1_0_0 as ReportExplorationSettingsV1_1_0,
  ExplorationSlowDataSourceSettings as ReportExplorationSlowDataSourceSettingsV1_1_0,
} from "./shared.js";

export {
  FilterConfigV1_1_0 as ReportFilterConfigV1_1_0,
  FilterContainerV1_1_0 as ReportFilterContainerV1_1_0,
  FilterContainerFormattingObjectsV1_1_0 as ReportFilterContainerFormattingObjectsV1_1_0,
} from "../page/version-1.1.0.js";

export {
  FilterContainerFormattingProperties as ReportFilterContainerFormattingObjectsPropertiesV1_1_0,
  Annotation as ReportAnnotationV1_1_0,
} from "../shared.js";

export { ReportFormattingObjectsV1_1_0 as ReportReportFormattingObjectsV1_1_0 };

export { DisplayArea as ReportSectionV1_1_0 } from "../page/shared.js";
