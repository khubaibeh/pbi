import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  FormattingObjectDefinitionsDefinitionsV1_0_0,
  FormattingObjectDefinitionsSelectorV1_0_0,
} from "../formatting-object-definitions/shared.js";
import {
  PageFilterConfigV1_0_0,
  PageFilterContainerFormattingObjectsV1_0_0,
  PageFilterContainerV1_0_0,
} from "../page/shared.js";
import {
  VisualContainerAnnotation,
  VisualContainerFilterContainerFormattingObjectsProperties,
} from "../visual-container/shared.js";
import {
  ReportExplorationSettingsV1_0_0,
  ReportExplorationSlowDataSourceSettings,
  ReportLayoutOptimization,
  ReportOrganizationCustomVisual,
  ReportOutspacePane,
  ReportResourcePackage,
  ReportResourcePackageItem,
  ReportResourcePackageItemType,
  ReportResourcePackageType,
  ReportSection,
  ReportThemeCollectionV1_0_0,
  ReportThemeMetadataV1_0_0,
  ReportThemeResourcePackageType,
} from "./shared.js";

export type ReportReportFormattingObjectsV1_0_0 = {
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: ReportOutspacePane;
  }>;
  readonly section?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: ReportSection;
  }>;
};

export const ReportReportFormattingObjectsV1_0_0: Schema.Codec<ReportReportFormattingObjectsV1_0_0> =
  closed({
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => ReportOutspacePane),
        }),
      ),
    ),
    section: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => ReportSection),
        }),
      ),
    ),
  });

export const ReportDefinitionsV1_0_0 = {
  ThemeCollection: ReportThemeCollectionV1_0_0,
  ThemeMetadata: ReportThemeMetadataV1_0_0,
  ThemeResourcePackageType: ReportThemeResourcePackageType,
  LayoutOptimization: ReportLayoutOptimization,
  FilterConfig: PageFilterConfigV1_0_0,
  FilterContainer: PageFilterContainerV1_0_0,
  FilterContainerFormattingObjects: PageFilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties:
    VisualContainerFilterContainerFormattingObjectsProperties,
  ReportFormattingObjects: ReportReportFormattingObjectsV1_0_0,
  OutspacePane: ReportOutspacePane,
  Section: ReportSection,
  ResourcePackage: ReportResourcePackage,
  ResourcePackageType: ReportResourcePackageType,
  ResourcePackageItem: ReportResourcePackageItem,
  ResourcePackageItemType: ReportResourcePackageItemType,
  OrganizationCustomVisual: ReportOrganizationCustomVisual,
  Annotation: VisualContainerAnnotation,
  ExplorationSettings: ReportExplorationSettingsV1_0_0,
  ExplorationSlowDataSourceSettings: ReportExplorationSlowDataSourceSettings,
} as const;

export type ReportV1_0_0 = {
  readonly themeCollection: ReportThemeCollectionV1_0_0;
  readonly layoutOptimization: ReportLayoutOptimization;
  readonly filterConfig?: PageFilterConfigV1_0_0;
  readonly objects?: ReportReportFormattingObjectsV1_0_0;
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
  readonly settings?: ReportExplorationSettingsV1_0_0;
  readonly slowDataSourceSettings?: ReportExplorationSlowDataSourceSettings;
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.0.0/schema.json";
};

export const ReportV1_0_0: Schema.Codec<ReportV1_0_0> = closed({
  themeCollection: Schema.suspend(() => ReportThemeCollectionV1_0_0),
  layoutOptimization: Schema.suspend(() => ReportLayoutOptimization),
  filterConfig: Schema.optionalKey(Schema.suspend(() => PageFilterConfigV1_0_0)),
  objects: Schema.optionalKey(Schema.suspend(() => ReportReportFormattingObjectsV1_0_0)),
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
  settings: Schema.optionalKey(Schema.suspend(() => ReportExplorationSettingsV1_0_0)),
  slowDataSourceSettings: Schema.optionalKey(
    Schema.suspend(() => ReportExplorationSlowDataSourceSettings),
  ),
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.0.0/schema.json",
  ),
});
