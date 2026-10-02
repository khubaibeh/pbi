import { Schema } from "effect";

import { SelectorV1_3_0 } from "../formatting-object-definitions/version-1.3.0.js";
import { SelectorV1_4_0 } from "../formatting-object-definitions/version-1.4.0.js";
import { SelectorV1_5_0 } from "../formatting-object-definitions/version-1.5.0.js";
import { DisplayArea } from "../page/shared.js";
import { closed } from "../shared.js";

export type ThemeCollectionV1_0_0 = {
  readonly baseTheme?: ThemeMetadataV1_0_0;
  readonly customTheme?: ThemeMetadataV1_0_0;
};

export const ThemeCollectionV1_0_0: Schema.Codec<ThemeCollectionV1_0_0> =
  closed({
    baseTheme: Schema.optionalKey(Schema.suspend(() => ThemeMetadataV1_0_0)),
    customTheme: Schema.optionalKey(Schema.suspend(() => ThemeMetadataV1_0_0)),
  });

export type ThemeMetadataV1_0_0 = {
  readonly name: string;
  readonly reportVersionAtImport: string;
  readonly type: ThemeResourcePackageType;
};

export const ThemeMetadataV1_0_0: Schema.Codec<ThemeMetadataV1_0_0> = closed({
  name: Schema.String,
  reportVersionAtImport: Schema.String,
  type: Schema.suspend(() => ThemeResourcePackageType),
});

export type ThemeResourcePackageType =
  "RegisteredResources" | "SharedResources";

export const ThemeResourcePackageType: Schema.Codec<ThemeResourcePackageType> =
  Schema.Union([
    Schema.Literal("RegisteredResources"),
    Schema.Literal("SharedResources"),
  ]);

export type LayoutOptimization = "None" | "PhonePortrait";

export const LayoutOptimization: Schema.Codec<LayoutOptimization> =
  Schema.Union([Schema.Literal("None"), Schema.Literal("PhonePortrait")]);

export type OutspacePane = {
  readonly expanded?: Schema.Json;
  readonly visible?: Schema.Json;
};

export const OutspacePane: Schema.Codec<OutspacePane> = closed({
  expanded: Schema.optionalKey(Schema.Json),
  visible: Schema.optionalKey(Schema.Json),
});

export type ResourcePackage = {
  readonly id?: number;
  readonly name: string;
  readonly type: ResourcePackageType;
  readonly items: ReadonlyArray<ResourcePackageItem>;
  readonly disabled?: boolean;
};

export const ResourcePackage: Schema.Codec<ResourcePackage> = closed({
  id: Schema.optionalKey(Schema.Finite),
  name: Schema.String,
  type: Schema.suspend(() => ResourcePackageType),
  items: Schema.Array(Schema.suspend(() => ResourcePackageItem)),
  disabled: Schema.optionalKey(Schema.Boolean),
});

export type ResourcePackageType =
  | "CustomVisual"
  | "RegisteredResources"
  | "SharedResources"
  | "OrganizationalStoreCustomVisual";

export const ResourcePackageType: Schema.Codec<ResourcePackageType> =
  Schema.Union([
    Schema.Literal("CustomVisual"),
    Schema.Literal("RegisteredResources"),
    Schema.Literal("SharedResources"),
    Schema.Literal("OrganizationalStoreCustomVisual"),
  ]);

export type ResourcePackageItem = {
  readonly id?: number;
  readonly name: string;
  readonly path: string;
  readonly type: ResourcePackageItemType;
};

export const ResourcePackageItem: Schema.Codec<ResourcePackageItem> = closed({
  id: Schema.optionalKey(Schema.Finite),
  name: Schema.String,
  path: Schema.String,
  type: Schema.suspend(() => ResourcePackageItemType),
});

export type ResourcePackageItemType =
  | "CustomVisualJavascript"
  | "CustomVisualsCss"
  | "CustomVisualScreenshot"
  | "CustomVisualIcon"
  | "CustomVisualWatermark"
  | "CustomVisualMetadata"
  | "Image"
  | "ShapeMap"
  | "CustomTheme"
  | "BaseTheme"
  | "DashboardTheme"
  | "DashboardBaseTheme"
  | "HighContrastTheme"
  | "AppNavigation"
  | "AppTheme"
  | "AppBaseTheme";

export const ResourcePackageItemType: Schema.Codec<ResourcePackageItemType> =
  Schema.Union([
    Schema.Literal("CustomVisualJavascript"),
    Schema.Literal("CustomVisualsCss"),
    Schema.Literal("CustomVisualScreenshot"),
    Schema.Literal("CustomVisualIcon"),
    Schema.Literal("CustomVisualWatermark"),
    Schema.Literal("CustomVisualMetadata"),
    Schema.Literal("Image"),
    Schema.Literal("ShapeMap"),
    Schema.Literal("CustomTheme"),
    Schema.Literal("BaseTheme"),
    Schema.Literal("DashboardTheme"),
    Schema.Literal("DashboardBaseTheme"),
    Schema.Literal("HighContrastTheme"),
    Schema.Literal("AppNavigation"),
    Schema.Literal("AppTheme"),
    Schema.Literal("AppBaseTheme"),
  ]);

export type OrganizationCustomVisual = {
  readonly name: string;
  readonly path: string;
  readonly disabled?: boolean;
};

export const OrganizationCustomVisual: Schema.Codec<OrganizationCustomVisual> =
  closed({
    name: Schema.String,
    path: Schema.String,
    disabled: Schema.optionalKey(Schema.Boolean),
  });

export type ExplorationSettingsV1_0_0 = {
  readonly isPersistentUserStateDisabled?: boolean;
  readonly hideVisualContainerHeader?: boolean;
  readonly useStylableVisualContainerHeader?: boolean;
  readonly exportDataMode?:
    "AllowSummarized" | "AllowSummarizedAndUnderlying" | "None";
  readonly isReportAnnotationsDisabled?: boolean;
  readonly defaultFilterActionIsDataFilter?: boolean;
  readonly defaultDrillFilterOtherVisuals?: boolean;
  readonly useCrossReportDrillthrough?: boolean;
  readonly allowChangeFilterTypes?: boolean;
  readonly allowInlineExploration?: boolean;
  readonly useEnhancedTooltips?: boolean;
  readonly useScaledTooltips?: boolean;
  readonly filterPaneHiddenInEditMode?: boolean;
  readonly disableFilterPaneSearch?: boolean;
  readonly pagesPosition?: "PagesPane" | "Bottom";
  readonly allowAutomatedInsightsNotification?: boolean;
  readonly useDefaultAggregateDisplayName?: boolean;
  readonly enableDeveloperMode?: boolean;
  readonly pauseQueries?: boolean;
  readonly queryLimitOption?:
    | "None"
    | "Shared"
    | "Premium"
    | "SQLServerAS"
    | "AzureAS"
    | "Custom"
    | "Auto";
  readonly customMemoryLimit?: string;
  readonly customTimeoutLimit?: string;
};

export const ExplorationSettingsV1_0_0: Schema.Codec<ExplorationSettingsV1_0_0> =
  closed({
    isPersistentUserStateDisabled: Schema.optionalKey(Schema.Boolean),
    hideVisualContainerHeader: Schema.optionalKey(Schema.Boolean),
    useStylableVisualContainerHeader: Schema.optionalKey(Schema.Boolean),
    exportDataMode: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("AllowSummarized"),
        Schema.Literal("AllowSummarizedAndUnderlying"),
        Schema.Literal("None"),
      ]),
    ),
    isReportAnnotationsDisabled: Schema.optionalKey(Schema.Boolean),
    defaultFilterActionIsDataFilter: Schema.optionalKey(Schema.Boolean),
    defaultDrillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
    useCrossReportDrillthrough: Schema.optionalKey(Schema.Boolean),
    allowChangeFilterTypes: Schema.optionalKey(Schema.Boolean),
    allowInlineExploration: Schema.optionalKey(Schema.Boolean),
    useEnhancedTooltips: Schema.optionalKey(Schema.Boolean),
    useScaledTooltips: Schema.optionalKey(Schema.Boolean),
    filterPaneHiddenInEditMode: Schema.optionalKey(Schema.Boolean),
    disableFilterPaneSearch: Schema.optionalKey(Schema.Boolean),
    pagesPosition: Schema.optionalKey(
      Schema.Union([Schema.Literal("PagesPane"), Schema.Literal("Bottom")]),
    ),
    allowAutomatedInsightsNotification: Schema.optionalKey(Schema.Boolean),
    useDefaultAggregateDisplayName: Schema.optionalKey(Schema.Boolean),
    enableDeveloperMode: Schema.optionalKey(Schema.Boolean),
    pauseQueries: Schema.optionalKey(Schema.Boolean),
    queryLimitOption: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("None"),
        Schema.Literal("Shared"),
        Schema.Literal("Premium"),
        Schema.Literal("SQLServerAS"),
        Schema.Literal("AzureAS"),
        Schema.Literal("Custom"),
        Schema.Literal("Auto"),
      ]),
    ),
    customMemoryLimit: Schema.optionalKey(Schema.String),
    customTimeoutLimit: Schema.optionalKey(Schema.String),
  });

export type ExplorationSlowDataSourceSettings = {
  readonly isCrossHighlightingDisabled?: boolean;
  readonly isSlicerSelectionsButtonEnabled?: boolean;
  readonly isFilterSelectionsButtonEnabled?: boolean;
  readonly isFieldWellButtonEnabled?: boolean;
  readonly isApplyAllButtonEnabled?: boolean;
};

export const ExplorationSlowDataSourceSettings: Schema.Codec<ExplorationSlowDataSourceSettings> =
  closed({
    isCrossHighlightingDisabled: Schema.optionalKey(Schema.Boolean),
    isSlicerSelectionsButtonEnabled: Schema.optionalKey(Schema.Boolean),
    isFilterSelectionsButtonEnabled: Schema.optionalKey(Schema.Boolean),
    isFieldWellButtonEnabled: Schema.optionalKey(Schema.Boolean),
    isApplyAllButtonEnabled: Schema.optionalKey(Schema.Boolean),
  });

export type ReportFormattingObjectsV1_3_0 = {
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: OutspacePane;
  }>;
  readonly section?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: DisplayArea;
  }>;
};

export const ReportFormattingObjectsV1_3_0: Schema.Codec<ReportFormattingObjectsV1_3_0> =
  closed({
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => OutspacePane),
        }),
      ),
    ),
    section: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => DisplayArea),
        }),
      ),
    ),
  });

export type ReportFormattingObjectsV2_1_0 = {
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: OutspacePane;
  }>;
  readonly section?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: DisplayArea;
  }>;
};

export const ReportFormattingObjectsV2_1_0: Schema.Codec<ReportFormattingObjectsV2_1_0> =
  closed({
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => OutspacePane),
        }),
      ),
    ),
    section: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => DisplayArea),
        }),
      ),
    ),
  });

export type ThemeCollectionV3_0_0 = {
  readonly baseTheme?: ThemeMetadataV3_0_0;
  readonly customTheme?: ThemeMetadataV3_0_0;
};

export const ThemeCollectionV3_0_0: Schema.Codec<ThemeCollectionV3_0_0> =
  closed({
    baseTheme: Schema.optionalKey(Schema.suspend(() => ThemeMetadataV3_0_0)),
    customTheme: Schema.optionalKey(Schema.suspend(() => ThemeMetadataV3_0_0)),
  });

export type ThemeMetadataV3_0_0 = {
  readonly name: string;
  readonly reportVersionAtImport: ThemeVersion;
  readonly type: ThemeResourcePackageType;
};

export const ThemeMetadataV3_0_0: Schema.Codec<ThemeMetadataV3_0_0> = closed({
  name: Schema.String,
  reportVersionAtImport: Schema.suspend(() => ThemeVersion),
  type: Schema.suspend(() => ThemeResourcePackageType),
});

export type ThemeVersion = {
  readonly visual: string;
  readonly page: string;
  readonly report: string;
};

export const ThemeVersion: Schema.Codec<ThemeVersion> = closed({
  visual: Schema.String.check(
    Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$")),
  ),
  page: Schema.String.check(
    Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$")),
  ),
  report: Schema.String.check(
    Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$")),
  ),
});

export type ExplorationSettingsV3_1_0 = {
  readonly isPersistentUserStateDisabled?: boolean;
  readonly hideVisualContainerHeader?: boolean;
  readonly useStylableVisualContainerHeader?: boolean;
  readonly exportDataMode?:
    "AllowSummarized" | "AllowSummarizedAndUnderlying" | "None";
  readonly isReportAnnotationsDisabled?: boolean;
  readonly defaultFilterActionIsDataFilter?: boolean;
  readonly defaultDrillFilterOtherVisuals?: boolean;
  readonly useCrossReportDrillthrough?: boolean;
  readonly allowChangeFilterTypes?: boolean;
  readonly allowInlineExploration?: boolean;
  readonly useEnhancedTooltips?: boolean;
  readonly useScaledTooltips?: boolean;
  readonly filterPaneHiddenInEditMode?: boolean;
  readonly disableFilterPaneSearch?: boolean;
  readonly pagesPosition?: "PagesPane" | "Bottom";
  readonly allowAutomatedInsightsNotification?: boolean;
  readonly useDefaultAggregateDisplayName?: boolean;
  readonly enableDeveloperMode?: boolean;
  readonly pauseQueries?: boolean;
  readonly queryLimitOption?:
    | "None"
    | "Shared"
    | "Premium"
    | "SQLServerAS"
    | "AzureAS"
    | "Custom"
    | "Auto";
  readonly customMemoryLimit?: string;
  readonly customTimeoutLimit?: string;
  readonly fieldParameterReportSettings?: FieldParameterReportSettings;
};

export const ExplorationSettingsV3_1_0: Schema.Codec<ExplorationSettingsV3_1_0> =
  closed({
    isPersistentUserStateDisabled: Schema.optionalKey(Schema.Boolean),
    hideVisualContainerHeader: Schema.optionalKey(Schema.Boolean),
    useStylableVisualContainerHeader: Schema.optionalKey(Schema.Boolean),
    exportDataMode: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("AllowSummarized"),
        Schema.Literal("AllowSummarizedAndUnderlying"),
        Schema.Literal("None"),
      ]),
    ),
    isReportAnnotationsDisabled: Schema.optionalKey(Schema.Boolean),
    defaultFilterActionIsDataFilter: Schema.optionalKey(Schema.Boolean),
    defaultDrillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
    useCrossReportDrillthrough: Schema.optionalKey(Schema.Boolean),
    allowChangeFilterTypes: Schema.optionalKey(Schema.Boolean),
    allowInlineExploration: Schema.optionalKey(Schema.Boolean),
    useEnhancedTooltips: Schema.optionalKey(Schema.Boolean),
    useScaledTooltips: Schema.optionalKey(Schema.Boolean),
    filterPaneHiddenInEditMode: Schema.optionalKey(Schema.Boolean),
    disableFilterPaneSearch: Schema.optionalKey(Schema.Boolean),
    pagesPosition: Schema.optionalKey(
      Schema.Union([Schema.Literal("PagesPane"), Schema.Literal("Bottom")]),
    ),
    allowAutomatedInsightsNotification: Schema.optionalKey(Schema.Boolean),
    useDefaultAggregateDisplayName: Schema.optionalKey(Schema.Boolean),
    enableDeveloperMode: Schema.optionalKey(Schema.Boolean),
    pauseQueries: Schema.optionalKey(Schema.Boolean),
    queryLimitOption: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("None"),
        Schema.Literal("Shared"),
        Schema.Literal("Premium"),
        Schema.Literal("SQLServerAS"),
        Schema.Literal("AzureAS"),
        Schema.Literal("Custom"),
        Schema.Literal("Auto"),
      ]),
    ),
    customMemoryLimit: Schema.optionalKey(Schema.String),
    customTimeoutLimit: Schema.optionalKey(Schema.String),
    fieldParameterReportSettings: Schema.optionalKey(
      Schema.suspend(() => FieldParameterReportSettings),
    ),
  });

export type FieldParameterReportSettings = {
  readonly skipHierarchyLevelPersistence?: boolean;
};

export const FieldParameterReportSettings: Schema.Codec<FieldParameterReportSettings> =
  closed({ skipHierarchyLevelPersistence: Schema.optionalKey(Schema.Boolean) });

export type ReportFormattingObjectsV3_2_0 = {
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: OutspacePane;
  }>;
  readonly section?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: DisplayArea;
  }>;
};

export const ReportFormattingObjectsV3_2_0: Schema.Codec<ReportFormattingObjectsV3_2_0> =
  closed({
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => OutspacePane),
        }),
      ),
    ),
    section: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => DisplayArea),
        }),
      ),
    ),
  });
