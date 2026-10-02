import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  FormattingObjectDefinitionsDefinitionsV1_1_0,
  FormattingObjectDefinitionsSelectorV1_1_0,
} from "../formatting-object-definitions/shared.js";
import {
  FilterDefinitionV1_1_0,
  QueryExpressionContainerV1_1_0,
} from "../semantic-query/shared.js";
import {
  ReportAnnotation,
  ReportExplorationSettingsV1_0_0,
  ReportExplorationSlowDataSourceSettings,
  ReportFilterContainerFormattingObjectsProperties,
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

export type ReportFilterConfigV1_1_0 = {
  readonly filters?: ReadonlyArray<ReportFilterContainerV1_1_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};

export const ReportFilterConfigV1_1_0: Schema.Codec<ReportFilterConfigV1_1_0> = closed({
  filters: Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportFilterContainerV1_1_0))),
  filterSortOrder: Schema.optionalKey(
    Schema.Union([
      Schema.Literal("Ascending"),
      Schema.Literal("Descending"),
      Schema.Literal("Custom"),
    ]),
  ),
});

export type ReportFilterContainerV1_1_0 = {
  readonly name: string;
  readonly displayName?: string;
  readonly ordinal?: number;
  readonly field?: QueryExpressionContainerV1_1_0;
  readonly type?:
    | "Categorical"
    | "Range"
    | "Advanced"
    | "Passthrough"
    | "TopN"
    | "Include"
    | "Exclude"
    | "RelativeDate"
    | "Tuple"
    | "RelativeTime"
    | "VisualTopN";
  readonly filter?: FilterDefinitionV1_1_0;
  readonly restatement?: string;
  readonly howCreated?: "Auto" | "User" | "Drill" | "Include" | "Exclude" | "Drillthrough";
  readonly isHiddenInViewMode?: boolean;
  readonly isLockedInViewMode?: boolean;
  readonly objects?: ReportFilterContainerFormattingObjectsV1_1_0;
};

export const ReportFilterContainerV1_1_0: Schema.Codec<ReportFilterContainerV1_1_0> = closed({
  name: Schema.String,
  displayName: Schema.optionalKey(Schema.String),
  ordinal: Schema.optionalKey(Schema.Finite),
  field: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
  type: Schema.optionalKey(
    Schema.Union([
      Schema.Literal("Categorical"),
      Schema.Literal("Range"),
      Schema.Literal("Advanced"),
      Schema.Literal("Passthrough"),
      Schema.Literal("TopN"),
      Schema.Literal("Include"),
      Schema.Literal("Exclude"),
      Schema.Literal("RelativeDate"),
      Schema.Literal("Tuple"),
      Schema.Literal("RelativeTime"),
      Schema.Literal("VisualTopN"),
    ]),
  ),
  filter: Schema.optionalKey(Schema.suspend(() => FilterDefinitionV1_1_0)),
  restatement: Schema.optionalKey(Schema.String),
  howCreated: Schema.optionalKey(
    Schema.Union([
      Schema.Literal("Auto"),
      Schema.Literal("User"),
      Schema.Literal("Drill"),
      Schema.Literal("Include"),
      Schema.Literal("Exclude"),
      Schema.Literal("Drillthrough"),
    ]),
  ),
  isHiddenInViewMode: Schema.optionalKey(Schema.Boolean),
  isLockedInViewMode: Schema.optionalKey(Schema.Boolean),
  objects: Schema.optionalKey(Schema.suspend(() => ReportFilterContainerFormattingObjectsV1_1_0)),
});

export type ReportFilterContainerFormattingObjectsV1_1_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: ReportFilterContainerFormattingObjectsProperties;
  }>;
};

export const ReportFilterContainerFormattingObjectsV1_1_0: Schema.Codec<ReportFilterContainerFormattingObjectsV1_1_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => ReportFilterContainerFormattingObjectsProperties),
        }),
      ),
    ),
  });

export type ReportReportFormattingObjectsV1_1_0 = {
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: ReportOutspacePane;
  }>;
  readonly section?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: ReportSection;
  }>;
};

export const ReportReportFormattingObjectsV1_1_0: Schema.Codec<ReportReportFormattingObjectsV1_1_0> =
  closed({
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => ReportOutspacePane),
        }),
      ),
    ),
    section: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => ReportSection),
        }),
      ),
    ),
  });

export const ReportDefinitionsV1_1_0 = {
  ThemeCollection: ReportThemeCollectionV1_0_0,
  ThemeMetadata: ReportThemeMetadataV1_0_0,
  ThemeResourcePackageType: ReportThemeResourcePackageType,
  LayoutOptimization: ReportLayoutOptimization,
  FilterConfig: ReportFilterConfigV1_1_0,
  FilterContainer: ReportFilterContainerV1_1_0,
  FilterContainerFormattingObjects: ReportFilterContainerFormattingObjectsV1_1_0,
  FilterContainerFormattingObjectsProperties: ReportFilterContainerFormattingObjectsProperties,
  ReportFormattingObjects: ReportReportFormattingObjectsV1_1_0,
  OutspacePane: ReportOutspacePane,
  Section: ReportSection,
  ResourcePackage: ReportResourcePackage,
  ResourcePackageType: ReportResourcePackageType,
  ResourcePackageItem: ReportResourcePackageItem,
  ResourcePackageItemType: ReportResourcePackageItemType,
  OrganizationCustomVisual: ReportOrganizationCustomVisual,
  Annotation: ReportAnnotation,
  ExplorationSettings: ReportExplorationSettingsV1_0_0,
  ExplorationSlowDataSourceSettings: ReportExplorationSlowDataSourceSettings,
} as const;

export type ReportV1_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.1.0/schema.json";
  readonly themeCollection: ReportThemeCollectionV1_0_0;
  readonly layoutOptimization: ReportLayoutOptimization;
  readonly filterConfig?: ReportFilterConfigV1_1_0;
  readonly objects?: ReportReportFormattingObjectsV1_1_0;
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

export const ReportV1_1_0: Schema.Codec<ReportV1_1_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.1.0/schema.json",
  ),
  themeCollection: Schema.suspend(() => ReportThemeCollectionV1_0_0),
  layoutOptimization: Schema.suspend(() => ReportLayoutOptimization),
  filterConfig: Schema.optionalKey(Schema.suspend(() => ReportFilterConfigV1_1_0)),
  objects: Schema.optionalKey(Schema.suspend(() => ReportReportFormattingObjectsV1_1_0)),
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
  annotations: Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportAnnotation))),
  dataSourceVariables: Schema.optionalKey(Schema.String),
  settings: Schema.optionalKey(Schema.suspend(() => ReportExplorationSettingsV1_0_0)),
  slowDataSourceSettings: Schema.optionalKey(
    Schema.suspend(() => ReportExplorationSlowDataSourceSettings),
  ),
});
