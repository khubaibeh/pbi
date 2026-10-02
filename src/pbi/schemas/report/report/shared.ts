import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  FormattingObjectDefinitionsDefinitionsV1_3_0,
  FormattingObjectDefinitionsDefinitionsV1_4_0,
  FormattingObjectDefinitionsDefinitionsV1_5_0,
  FormattingObjectDefinitionsSelectorV1_3_0,
  FormattingObjectDefinitionsSelectorV1_4_0,
  FormattingObjectDefinitionsSelectorV1_5_0,
} from "../formatting-object-definitions/shared.js";

export type ReportThemeCollectionV1_0_0 = {
  readonly baseTheme?: ReportThemeMetadataV1_0_0;
  readonly customTheme?: ReportThemeMetadataV1_0_0;
};

export const ReportThemeCollectionV1_0_0: Schema.Codec<ReportThemeCollectionV1_0_0> = closed({
  baseTheme: Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV1_0_0)),
  customTheme: Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV1_0_0)),
});

export type ReportThemeMetadataV1_0_0 = {
  readonly name: string;
  readonly reportVersionAtImport: string;
  readonly type: ReportThemeResourcePackageType;
};

export const ReportThemeMetadataV1_0_0: Schema.Codec<ReportThemeMetadataV1_0_0> = closed({
  name: Schema.String,
  reportVersionAtImport: Schema.String,
  type: Schema.suspend(() => ReportThemeResourcePackageType),
});

export type ReportThemeResourcePackageType = "RegisteredResources" | "SharedResources";

export const ReportThemeResourcePackageType: Schema.Codec<ReportThemeResourcePackageType> =
  Schema.Union([Schema.Literal("RegisteredResources"), Schema.Literal("SharedResources")]);

export type ReportLayoutOptimization = "None" | "PhonePortrait";

export const ReportLayoutOptimization: Schema.Codec<ReportLayoutOptimization> = Schema.Union([
  Schema.Literal("None"),
  Schema.Literal("PhonePortrait"),
]);

export type ReportFilterContainerFormattingObjectsProperties = {
  readonly requireSingleSelect?: Schema.Json;
  readonly isInvertedSelectionMode?: Schema.Json;
};

export const ReportFilterContainerFormattingObjectsProperties: Schema.Codec<ReportFilterContainerFormattingObjectsProperties> =
  closed({
    requireSingleSelect: Schema.optionalKey(Schema.Json),
    isInvertedSelectionMode: Schema.optionalKey(Schema.Json),
  });

export type ReportOutspacePane = {
  readonly expanded?: Schema.Json;
  readonly visible?: Schema.Json;
};

export const ReportOutspacePane: Schema.Codec<ReportOutspacePane> = closed({
  expanded: Schema.optionalKey(Schema.Json),
  visible: Schema.optionalKey(Schema.Json),
});

export type ReportSection = {
  readonly verticalAlignment?: Schema.Json;
};

export const ReportSection: Schema.Codec<ReportSection> = closed({
  verticalAlignment: Schema.optionalKey(Schema.Json),
});

export type ReportResourcePackage = {
  readonly id?: number;
  readonly name: string;
  readonly type: ReportResourcePackageType;
  readonly items: ReadonlyArray<ReportResourcePackageItem>;
  readonly disabled?: boolean;
};

export const ReportResourcePackage: Schema.Codec<ReportResourcePackage> = closed({
  id: Schema.optionalKey(Schema.Finite),
  name: Schema.String,
  type: Schema.suspend(() => ReportResourcePackageType),
  items: Schema.Array(Schema.suspend(() => ReportResourcePackageItem)),
  disabled: Schema.optionalKey(Schema.Boolean),
});

export type ReportResourcePackageType =
  | "CustomVisual"
  | "RegisteredResources"
  | "SharedResources"
  | "OrganizationalStoreCustomVisual";

export const ReportResourcePackageType: Schema.Codec<ReportResourcePackageType> = Schema.Union([
  Schema.Literal("CustomVisual"),
  Schema.Literal("RegisteredResources"),
  Schema.Literal("SharedResources"),
  Schema.Literal("OrganizationalStoreCustomVisual"),
]);

export type ReportResourcePackageItem = {
  readonly id?: number;
  readonly name: string;
  readonly path: string;
  readonly type: ReportResourcePackageItemType;
};

export const ReportResourcePackageItem: Schema.Codec<ReportResourcePackageItem> = closed({
  id: Schema.optionalKey(Schema.Finite),
  name: Schema.String,
  path: Schema.String,
  type: Schema.suspend(() => ReportResourcePackageItemType),
});

export type ReportResourcePackageItemType =
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

export const ReportResourcePackageItemType: Schema.Codec<ReportResourcePackageItemType> =
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

export type ReportOrganizationCustomVisual = {
  readonly name: string;
  readonly path: string;
  readonly disabled?: boolean;
};

export const ReportOrganizationCustomVisual: Schema.Codec<ReportOrganizationCustomVisual> = closed({
  name: Schema.String,
  path: Schema.String,
  disabled: Schema.optionalKey(Schema.Boolean),
});

export type ReportAnnotation = {
  readonly name: string;
  readonly value: string;
};

export const ReportAnnotation: Schema.Codec<ReportAnnotation> = closed({
  name: Schema.String,
  value: Schema.String,
});

export type ReportExplorationSettingsV1_0_0 = {
  readonly isPersistentUserStateDisabled?: boolean;
  readonly hideVisualContainerHeader?: boolean;
  readonly useStylableVisualContainerHeader?: boolean;
  readonly exportDataMode?: "AllowSummarized" | "AllowSummarizedAndUnderlying" | "None";
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

export const ReportExplorationSettingsV1_0_0: Schema.Codec<ReportExplorationSettingsV1_0_0> =
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

export type ReportExplorationSlowDataSourceSettings = {
  readonly isCrossHighlightingDisabled?: boolean;
  readonly isSlicerSelectionsButtonEnabled?: boolean;
  readonly isFilterSelectionsButtonEnabled?: boolean;
  readonly isFieldWellButtonEnabled?: boolean;
  readonly isApplyAllButtonEnabled?: boolean;
};

export const ReportExplorationSlowDataSourceSettings: Schema.Codec<ReportExplorationSlowDataSourceSettings> =
  closed({
    isCrossHighlightingDisabled: Schema.optionalKey(Schema.Boolean),
    isSlicerSelectionsButtonEnabled: Schema.optionalKey(Schema.Boolean),
    isFilterSelectionsButtonEnabled: Schema.optionalKey(Schema.Boolean),
    isFieldWellButtonEnabled: Schema.optionalKey(Schema.Boolean),
    isApplyAllButtonEnabled: Schema.optionalKey(Schema.Boolean),
  });

export type ReportReportFormattingObjectsV1_3_0 = {
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: ReportOutspacePane;
  }>;
  readonly section?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: ReportSection;
  }>;
};

export const ReportReportFormattingObjectsV1_3_0: Schema.Codec<ReportReportFormattingObjectsV1_3_0> =
  closed({
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => ReportOutspacePane),
        }),
      ),
    ),
    section: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => ReportSection),
        }),
      ),
    ),
  });

export type ReportReportFormattingObjectsV2_1_0 = {
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: ReportOutspacePane;
  }>;
  readonly section?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: ReportSection;
  }>;
};

export const ReportReportFormattingObjectsV2_1_0: Schema.Codec<ReportReportFormattingObjectsV2_1_0> =
  closed({
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_4_0.Selector),
          ),
          properties: Schema.suspend(() => ReportOutspacePane),
        }),
      ),
    ),
    section: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_4_0.Selector),
          ),
          properties: Schema.suspend(() => ReportSection),
        }),
      ),
    ),
  });

export type ReportThemeCollectionV3_0_0 = {
  readonly baseTheme?: ReportThemeMetadataV3_0_0;
  readonly customTheme?: ReportThemeMetadataV3_0_0;
};

export const ReportThemeCollectionV3_0_0: Schema.Codec<ReportThemeCollectionV3_0_0> = closed({
  baseTheme: Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV3_0_0)),
  customTheme: Schema.optionalKey(Schema.suspend(() => ReportThemeMetadataV3_0_0)),
});

export type ReportThemeMetadataV3_0_0 = {
  readonly name: string;
  readonly reportVersionAtImport: ReportThemeVersion;
  readonly type: ReportThemeResourcePackageType;
};

export const ReportThemeMetadataV3_0_0: Schema.Codec<ReportThemeMetadataV3_0_0> = closed({
  name: Schema.String,
  reportVersionAtImport: Schema.suspend(() => ReportThemeVersion),
  type: Schema.suspend(() => ReportThemeResourcePackageType),
});

export type ReportThemeVersion = {
  readonly visual: string;
  readonly page: string;
  readonly report: string;
};

export const ReportThemeVersion: Schema.Codec<ReportThemeVersion> = closed({
  visual: Schema.String.check(Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$"))),
  page: Schema.String.check(Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$"))),
  report: Schema.String.check(Schema.isPattern(new RegExp("^[0-9]+\\.[0-9]+\\.[0-9]+$"))),
});

export type ReportExplorationSettingsV3_1_0 = {
  readonly isPersistentUserStateDisabled?: boolean;
  readonly hideVisualContainerHeader?: boolean;
  readonly useStylableVisualContainerHeader?: boolean;
  readonly exportDataMode?: "AllowSummarized" | "AllowSummarizedAndUnderlying" | "None";
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
  readonly fieldParameterReportSettings?: ReportFieldParameterReportSettings;
};

export const ReportExplorationSettingsV3_1_0: Schema.Codec<ReportExplorationSettingsV3_1_0> =
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
      Schema.suspend(() => ReportFieldParameterReportSettings),
    ),
  });

export type ReportFieldParameterReportSettings = {
  readonly skipHierarchyLevelPersistence?: boolean;
};

export const ReportFieldParameterReportSettings: Schema.Codec<ReportFieldParameterReportSettings> =
  closed({ skipHierarchyLevelPersistence: Schema.optionalKey(Schema.Boolean) });

export type ReportReportFormattingObjectsV3_2_0 = {
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: ReportOutspacePane;
  }>;
  readonly section?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: ReportSection;
  }>;
};

export const ReportReportFormattingObjectsV3_2_0: Schema.Codec<ReportReportFormattingObjectsV3_2_0> =
  closed({
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector),
          ),
          properties: Schema.suspend(() => ReportOutspacePane),
        }),
      ),
    ),
    section: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector),
          ),
          properties: Schema.suspend(() => ReportSection),
        }),
      ),
    ),
  });
