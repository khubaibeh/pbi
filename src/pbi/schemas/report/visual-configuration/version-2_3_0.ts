import { Schema } from "effect";
import {
  AIDecompositionMethod,
  AILevelInformation,
  BorderV1_5_0,
  DividerV1_5_0,
  DropShadow,
  LockAspect,
  Padding,
  Spacing,
  StylePreset,
  SubTitle,
  Title,
  VisualConfigurationBackground,
  VisualConfigurationSortDirection,
  VisualContainerGeneralFormattingObjects,
  VisualHeaderTooltip,
  VisualHeaderV1_5_0,
  VisualQueryOptions,
  VisualSyncGroup,
  VisualTooltip,
  closed,
} from "../shared.js";
import {
  DataViewObjectDefinitionsV1_5_0,
  SelectorV1_5_0,
} from "../formatting-object-definitions/version-1_5_0.js";
import { QueryExpressionContainerV1_4_0 } from "../semantic-query/version-1_4_0.js";
import { VisualConfigurationVisualLinkV2_2_0 } from "./shared.js";

export type VisualConfigurationQueryV2_3_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV2_3_0;
  readonly options?: VisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationProjectionStateV2_3_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const VisualConfigurationQueryV2_3_0: Schema.Codec<VisualConfigurationQueryV2_3_0> = closed({
  sortDefinition: Schema.optionalKey(Schema.suspend(() => VisualConfigurationSortDefinitionV2_3_0)),
  options: Schema.optionalKey(Schema.suspend(() => VisualQueryOptions)),
  queryState: Schema.Record(
    Schema.String,
    Schema.suspend(() => VisualConfigurationProjectionStateV2_3_0),
  ),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type VisualConfigurationSortDefinitionV2_3_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationQuerySortV2_3_0>;
  readonly isDefaultSort?: boolean;
};

export const VisualConfigurationSortDefinitionV2_3_0: Schema.Codec<VisualConfigurationSortDefinitionV2_3_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationQuerySortV2_3_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationQuerySortV2_3_0 = {
  readonly field: QueryExpressionContainerV1_4_0;
  readonly direction: VisualConfigurationSortDirection;
};

export const VisualConfigurationQuerySortV2_3_0: Schema.Codec<VisualConfigurationQuerySortV2_3_0> =
  closed({
    field: Schema.suspend(() => QueryExpressionContainerV1_4_0),
    direction: Schema.suspend(() => VisualConfigurationSortDirection),
  });

export type VisualConfigurationProjectionStateV2_3_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationRoleProjectionV2_3_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationRoleFieldParameterV2_3_0>;
};

export const VisualConfigurationProjectionStateV2_3_0: Schema.Codec<VisualConfigurationProjectionStateV2_3_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(Schema.suspend(() => VisualConfigurationRoleProjectionV2_3_0)),
    fieldParameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationRoleFieldParameterV2_3_0)),
    ),
  });

export type VisualConfigurationRoleProjectionV2_3_0 = {
  readonly field: QueryExpressionContainerV1_4_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};

export const VisualConfigurationRoleProjectionV2_3_0: Schema.Codec<VisualConfigurationRoleProjectionV2_3_0> =
  closed({
    field: Schema.suspend(() => QueryExpressionContainerV1_4_0),
    queryRef: Schema.String,
    nativeQueryRef: Schema.optionalKey(Schema.String),
    displayName: Schema.optionalKey(Schema.String),
    format: Schema.optionalKey(Schema.String.check(Schema.isMaxCodePoints(255))),
    active: Schema.optionalKey(Schema.Boolean),
    hidden: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationRoleFieldParameterV2_3_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_4_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};

export const VisualConfigurationRoleFieldParameterV2_3_0: Schema.Codec<VisualConfigurationRoleFieldParameterV2_3_0> =
  closed({
    parameterExpr: Schema.suspend(() => QueryExpressionContainerV1_4_0),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });

export type VisualConfigurationExpansionStateV2_3_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationRootExpansionStateV2_3_0;
  readonly levels?: ReadonlyArray<VisualConfigurationLevelExpansionStateV2_3_0>;
};

export const VisualConfigurationExpansionStateV2_3_0: Schema.Codec<VisualConfigurationExpansionStateV2_3_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(Schema.suspend(() => VisualConfigurationRootExpansionStateV2_3_0)),
    levels: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationLevelExpansionStateV2_3_0)),
    ),
  });

export type VisualConfigurationRootExpansionStateV2_3_0 = {
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_3_0>;
};

export const VisualConfigurationRootExpansionStateV2_3_0: Schema.Codec<VisualConfigurationRootExpansionStateV2_3_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationNodeExpansionStateV2_3_0)),
    ),
  });

export type VisualConfigurationNodeExpansionStateV2_3_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_3_0>;
};

export const VisualConfigurationNodeExpansionStateV2_3_0: Schema.Codec<VisualConfigurationNodeExpansionStateV2_3_0> =
  closed({
    identityValues: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationNodeExpansionStateV2_3_0)),
    ),
  });

export type VisualConfigurationLevelExpansionStateV2_3_0 = {
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: AILevelInformation;
};

export const VisualConfigurationLevelExpansionStateV2_3_0: Schema.Codec<VisualConfigurationLevelExpansionStateV2_3_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(Schema.suspend(() => AILevelInformation)),
  });

export type VisualConfigurationVisualContainerFormattingObjectsV2_3_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: Title;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: SubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: DividerV1_5_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: Spacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: Padding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: LockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: VisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: BorderV1_5_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: DropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: VisualConfigurationVisualLinkV2_2_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: VisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: StylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: VisualHeaderV1_5_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: VisualHeaderTooltip;
  }>;
};

export const VisualConfigurationVisualContainerFormattingObjectsV2_3_0: Schema.Codec<VisualConfigurationVisualContainerFormattingObjectsV2_3_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => Title),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => SubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => DividerV1_5_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => Spacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => Padding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => LockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => VisualContainerGeneralFormattingObjects),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => BorderV1_5_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => DropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV2_2_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => VisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => StylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => VisualHeaderV1_5_0),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => VisualHeaderTooltip),
        }),
      ),
    ),
  });

export const VisualConfigurationDefinitionsV2_3_0 = {
  Query: VisualConfigurationQueryV2_3_0,
  SortDefinition: VisualConfigurationSortDefinitionV2_3_0,
  QuerySort: VisualConfigurationQuerySortV2_3_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: VisualConfigurationProjectionStateV2_3_0,
  RoleProjection: VisualConfigurationRoleProjectionV2_3_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV2_3_0,
  ExpansionState: VisualConfigurationExpansionStateV2_3_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV2_3_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV2_3_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV2_3_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualConfigurationVisualContainerFormattingObjectsV2_3_0,
  Title: Title,
  SubTitle: SubTitle,
  Divider: DividerV1_5_0,
  Spacing: Spacing,
  Background: VisualConfigurationBackground,
  Padding: Padding,
  LockAspect: LockAspect,
  VisualContainerGeneralFormattingObjects: VisualContainerGeneralFormattingObjects,
  Border: BorderV1_5_0,
  DropShadow: DropShadow,
  VisualLink: VisualConfigurationVisualLinkV2_2_0,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: VisualHeaderV1_5_0,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualSyncGroup: VisualSyncGroup,
} as const;

export type VisualConfigurationV2_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.3.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV2_3_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV2_3_0>;
  readonly objects?: DataViewObjectDefinitionsV1_5_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV2_3_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationV2_3_0: Schema.Codec<VisualConfigurationV2_3_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.3.0/schema.json",
  ),
  visualType: Schema.String,
  autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
  query: Schema.optionalKey(Schema.suspend(() => VisualConfigurationQueryV2_3_0)),
  expansionStates: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => VisualConfigurationExpansionStateV2_3_0)),
  ),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_5_0)),
  visualContainerObjects: Schema.optionalKey(
    Schema.suspend(() => VisualConfigurationVisualContainerFormattingObjectsV2_3_0),
  ),
  syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
  drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
});

export type VisualConfigurationEmbeddedV2_3_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV2_3_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV2_3_0>;
  readonly objects?: DataViewObjectDefinitionsV1_5_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV2_3_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationEmbeddedV2_3_0: Schema.Codec<VisualConfigurationEmbeddedV2_3_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => VisualConfigurationQueryV2_3_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationExpansionStateV2_3_0)),
    ),
    objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_5_0)),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualContainerFormattingObjectsV2_3_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export {
  VisualConfigurationQueryV2_3_0 as VisualConfigurationEmbeddedQueryV2_3_0,
  VisualConfigurationSortDefinitionV2_3_0 as VisualConfigurationEmbeddedSortDefinitionV2_3_0,
  VisualConfigurationQuerySortV2_3_0 as VisualConfigurationEmbeddedQuerySortV2_3_0,
  VisualConfigurationProjectionStateV2_3_0 as VisualConfigurationEmbeddedProjectionStateV2_3_0,
  VisualConfigurationRoleProjectionV2_3_0 as VisualConfigurationEmbeddedRoleProjectionV2_3_0,
  VisualConfigurationRoleFieldParameterV2_3_0 as VisualConfigurationEmbeddedRoleFieldParameterV2_3_0,
  VisualConfigurationExpansionStateV2_3_0 as VisualConfigurationEmbeddedExpansionStateV2_3_0,
  VisualConfigurationRootExpansionStateV2_3_0 as VisualConfigurationEmbeddedRootExpansionStateV2_3_0,
  VisualConfigurationNodeExpansionStateV2_3_0 as VisualConfigurationEmbeddedNodeExpansionStateV2_3_0,
  VisualConfigurationLevelExpansionStateV2_3_0 as VisualConfigurationEmbeddedLevelExpansionStateV2_3_0,
  VisualConfigurationVisualContainerFormattingObjectsV2_3_0 as VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0,
  VisualConfigurationDefinitionsV2_3_0 as VisualConfigurationEmbeddedDefinitionsV2_3_0,
};

export {
  VisualConfigurationSortDirection as VisualConfigurationSortDirectionV2_3_0,
  VisualQueryOptions as VisualConfigurationVisualQueryOptionsV2_3_0,
  AILevelInformation as VisualConfigurationAILevelInformationV2_3_0,
  AIDecompositionMethod as VisualConfigurationAIDecompositionMethodV2_3_0,
  Title as VisualConfigurationTitleV2_3_0,
  SubTitle as VisualConfigurationSubTitleV2_3_0,
  DividerV1_5_0 as VisualConfigurationDividerV2_3_0,
  Spacing as VisualConfigurationSpacingV2_3_0,
  VisualConfigurationBackground as VisualConfigurationBackgroundV2_3_0,
  Padding as VisualConfigurationPaddingV2_3_0,
  LockAspect as VisualConfigurationLockAspectV2_3_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationVisualContainerGeneralFormattingObjectsV2_3_0,
  BorderV1_5_0 as VisualConfigurationBorderV2_3_0,
  DropShadow as VisualConfigurationDropShadowV2_3_0,
  VisualTooltip as VisualConfigurationVisualTooltipV2_3_0,
  StylePreset as VisualConfigurationStylePresetV2_3_0,
  VisualHeaderV1_5_0 as VisualConfigurationVisualHeaderV2_3_0,
  VisualHeaderTooltip as VisualConfigurationVisualHeaderTooltipV2_3_0,
  VisualSyncGroup as VisualConfigurationVisualSyncGroupV2_3_0,
  VisualConfigurationSortDirection as VisualConfigurationEmbeddedSortDirectionV2_3_0,
  VisualQueryOptions as VisualConfigurationEmbeddedVisualQueryOptionsV2_3_0,
  AILevelInformation as VisualConfigurationEmbeddedAILevelInformationV2_3_0,
  AIDecompositionMethod as VisualConfigurationEmbeddedAIDecompositionMethodV2_3_0,
  Title as VisualConfigurationEmbeddedTitleV2_3_0,
  SubTitle as VisualConfigurationEmbeddedSubTitleV2_3_0,
  DividerV1_5_0 as VisualConfigurationEmbeddedDividerV2_3_0,
  Spacing as VisualConfigurationEmbeddedSpacingV2_3_0,
  VisualConfigurationBackground as VisualConfigurationEmbeddedBackgroundV2_3_0,
  Padding as VisualConfigurationEmbeddedPaddingV2_3_0,
  LockAspect as VisualConfigurationEmbeddedLockAspectV2_3_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_3_0,
  BorderV1_5_0 as VisualConfigurationEmbeddedBorderV2_3_0,
  DropShadow as VisualConfigurationEmbeddedDropShadowV2_3_0,
  VisualTooltip as VisualConfigurationEmbeddedVisualTooltipV2_3_0,
  StylePreset as VisualConfigurationEmbeddedStylePresetV2_3_0,
  VisualHeaderV1_5_0 as VisualConfigurationEmbeddedVisualHeaderV2_3_0,
  VisualHeaderTooltip as VisualConfigurationEmbeddedVisualHeaderTooltipV2_3_0,
  VisualSyncGroup as VisualConfigurationEmbeddedVisualSyncGroupV2_3_0,
} from "../shared.js";

export {
  VisualConfigurationVisualLinkV2_2_0 as VisualConfigurationVisualLinkV2_3_0,
  VisualConfigurationVisualLinkV2_2_0 as VisualConfigurationEmbeddedVisualLinkV2_3_0,
} from "./shared.js";
