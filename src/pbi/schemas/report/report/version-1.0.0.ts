import { Schema } from "effect";
import { SelectorV1_0_0 } from "../formatting-object-definitions/version-1.0.0.js";
import {
  DisplayArea,
  FilterConfigV1_0_0,
  FilterContainerFormattingObjectsV1_0_0,
  FilterContainerV1_0_0,
} from "../page/shared.js";
import {
  ExplorationSettingsV1_0_0,
  ExplorationSlowDataSourceSettings,
  LayoutOptimization,
  OrganizationCustomVisual,
  OutspacePane,
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

export type ReportFormattingObjectsV1_0_0 = {
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: OutspacePane;
  }>;
  readonly section?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: DisplayArea;
  }>;
};

export const ReportFormattingObjectsV1_0_0: Schema.Codec<ReportFormattingObjectsV1_0_0> =
  closed({
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => OutspacePane),
        }),
      ),
    ),
    section: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => DisplayArea),
        }),
      ),
    ),
  });

export type ReportV1_0_0 = {
  readonly themeCollection: ThemeCollectionV1_0_0;
  readonly layoutOptimization: LayoutOptimization;
  readonly filterConfig?: FilterConfigV1_0_0;
  readonly objects?: ReportFormattingObjectsV1_0_0;
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
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.0.0/schema.json";
};

export const ReportV1_0_0: Schema.Codec<ReportV1_0_0> = closed({
  themeCollection: Schema.suspend(() => ThemeCollectionV1_0_0),
  layoutOptimization: Schema.suspend(() => LayoutOptimization),
  filterConfig: Schema.optionalKey(Schema.suspend(() => FilterConfigV1_0_0)),
  objects: Schema.optionalKey(
    Schema.suspend(() => ReportFormattingObjectsV1_0_0),
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
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.0.0/schema.json",
  ),
});

export const ReportDefinitionsV1_0_0 = {
  ThemeCollection: ThemeCollectionV1_0_0,
  ThemeMetadata: ThemeMetadataV1_0_0,
  ThemeResourcePackageType: ThemeResourcePackageType,
  LayoutOptimization: LayoutOptimization,
  FilterConfig: FilterConfigV1_0_0,
  FilterContainer: FilterContainerV1_0_0,
  FilterContainerFormattingObjects: FilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
  ReportFormattingObjects: ReportFormattingObjectsV1_0_0,
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
  ThemeCollectionV1_0_0 as ReportThemeCollectionV1_0_0,
  ThemeMetadataV1_0_0 as ReportThemeMetadataV1_0_0,
  ThemeResourcePackageType as ReportThemeResourcePackageTypeV1_0_0,
  LayoutOptimization as ReportLayoutOptimizationV1_0_0,
  OutspacePane as ReportOutspacePaneV1_0_0,
  ResourcePackage as ReportResourcePackageV1_0_0,
  ResourcePackageType as ReportResourcePackageTypeV1_0_0,
  ResourcePackageItem as ReportResourcePackageItemV1_0_0,
  ResourcePackageItemType as ReportResourcePackageItemTypeV1_0_0,
  OrganizationCustomVisual as ReportOrganizationCustomVisualV1_0_0,
  ExplorationSettingsV1_0_0 as ReportExplorationSettingsV1_0_0,
  ExplorationSlowDataSourceSettings as ReportExplorationSlowDataSourceSettingsV1_0_0,
} from "./shared.js";

export {
  FilterConfigV1_0_0 as ReportFilterConfigV1_0_0,
  FilterContainerV1_0_0 as ReportFilterContainerV1_0_0,
  FilterContainerFormattingObjectsV1_0_0 as ReportFilterContainerFormattingObjectsV1_0_0,
  DisplayArea as ReportSectionV1_0_0,
} from "../page/shared.js";

export {
  FilterContainerFormattingProperties as ReportFilterContainerFormattingObjectsPropertiesV1_0_0,
  Annotation as ReportAnnotationV1_0_0,
} from "../shared.js";

export { ReportFormattingObjectsV1_0_0 as ReportReportFormattingObjectsV1_0_0 };
