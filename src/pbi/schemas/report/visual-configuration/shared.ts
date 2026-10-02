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
  VisualConfigurationVisualLinkV1_5_0,
  VisualContainerGeneralFormattingObjects,
  VisualHeaderTooltip,
  VisualHeaderV1_5_0,
  VisualQueryOptions,
  VisualSyncGroup,
  VisualTooltip,
  closed,
} from "../shared.js";
import {
  DataViewObjectDefinitionsV1_2_0,
  SelectorV1_2_0,
} from "../formatting-object-definitions/version-1_2_0.js";
import {
  DataViewObjectDefinitionsV1_3_0,
  SelectorV1_3_0,
} from "../formatting-object-definitions/version-1_3_0.js";
import {
  DataViewObjectDefinitionsV1_4_0,
  SelectorV1_4_0,
} from "../formatting-object-definitions/version-1_4_0.js";
import { QueryExpressionContainerV1_2_0 } from "../semantic-query/version-1_2_0.js";
import { QueryExpressionContainerV1_3_0 } from "../semantic-query/version-1_3_0.js";

export type VisualConfigurationQueryV1_5_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV1_5_0;
  readonly options?: VisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationProjectionStateV1_5_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const VisualConfigurationQueryV1_5_0: Schema.Codec<VisualConfigurationQueryV1_5_0> = closed({
  sortDefinition: Schema.optionalKey(Schema.suspend(() => VisualConfigurationSortDefinitionV1_5_0)),
  options: Schema.optionalKey(Schema.suspend(() => VisualQueryOptions)),
  queryState: Schema.Record(
    Schema.String,
    Schema.suspend(() => VisualConfigurationProjectionStateV1_5_0),
  ),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type VisualConfigurationSortDefinitionV1_5_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationQuerySortV1_5_0>;
  readonly isDefaultSort?: boolean;
};

export const VisualConfigurationSortDefinitionV1_5_0: Schema.Codec<VisualConfigurationSortDefinitionV1_5_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationQuerySortV1_5_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationQuerySortV1_5_0 = {
  readonly field: QueryExpressionContainerV1_2_0;
  readonly direction: VisualConfigurationSortDirection;
};

export const VisualConfigurationQuerySortV1_5_0: Schema.Codec<VisualConfigurationQuerySortV1_5_0> =
  closed({
    field: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    direction: Schema.suspend(() => VisualConfigurationSortDirection),
  });

export type VisualConfigurationProjectionStateV1_5_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationRoleProjectionV1_5_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationRoleFieldParameterV1_5_0>;
};

export const VisualConfigurationProjectionStateV1_5_0: Schema.Codec<VisualConfigurationProjectionStateV1_5_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(Schema.suspend(() => VisualConfigurationRoleProjectionV1_5_0)),
    fieldParameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationRoleFieldParameterV1_5_0)),
    ),
  });

export type VisualConfigurationRoleProjectionV1_5_0 = {
  readonly field: QueryExpressionContainerV1_2_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};

export const VisualConfigurationRoleProjectionV1_5_0: Schema.Codec<VisualConfigurationRoleProjectionV1_5_0> =
  closed({
    field: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    queryRef: Schema.String,
    nativeQueryRef: Schema.optionalKey(Schema.String),
    displayName: Schema.optionalKey(Schema.String),
    format: Schema.optionalKey(Schema.String.check(Schema.isMaxCodePoints(255))),
    active: Schema.optionalKey(Schema.Boolean),
    hidden: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationRoleFieldParameterV1_5_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
};

export const VisualConfigurationRoleFieldParameterV1_5_0: Schema.Codec<VisualConfigurationRoleFieldParameterV1_5_0> =
  closed({
    parameterExpr: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });

export type VisualConfigurationExpansionStateV1_5_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationRootExpansionStateV1_5_0;
  readonly levels?: ReadonlyArray<VisualConfigurationLevelExpansionStateV1_5_0>;
};

export const VisualConfigurationExpansionStateV1_5_0: Schema.Codec<VisualConfigurationExpansionStateV1_5_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(Schema.suspend(() => VisualConfigurationRootExpansionStateV1_5_0)),
    levels: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationLevelExpansionStateV1_5_0)),
    ),
  });

export type VisualConfigurationRootExpansionStateV1_5_0 = {
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV1_5_0>;
};

export const VisualConfigurationRootExpansionStateV1_5_0: Schema.Codec<VisualConfigurationRootExpansionStateV1_5_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationNodeExpansionStateV1_5_0)),
    ),
  });

export type VisualConfigurationNodeExpansionStateV1_5_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV1_5_0>;
};

export const VisualConfigurationNodeExpansionStateV1_5_0: Schema.Codec<VisualConfigurationNodeExpansionStateV1_5_0> =
  closed({
    identityValues: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationNodeExpansionStateV1_5_0)),
    ),
  });

export type VisualConfigurationLevelExpansionStateV1_5_0 = {
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: AILevelInformation;
};

export const VisualConfigurationLevelExpansionStateV1_5_0: Schema.Codec<VisualConfigurationLevelExpansionStateV1_5_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(Schema.suspend(() => AILevelInformation)),
  });

export type VisualConfigurationVisualContainerFormattingObjectsV1_5_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: Title;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: SubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: DividerV1_5_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: Spacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: Padding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: LockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: VisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: BorderV1_5_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: DropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: VisualConfigurationVisualLinkV1_5_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: VisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: StylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: VisualHeaderV1_5_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: VisualHeaderTooltip;
  }>;
};

export const VisualConfigurationVisualContainerFormattingObjectsV1_5_0: Schema.Codec<VisualConfigurationVisualContainerFormattingObjectsV1_5_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => Title),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => SubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => DividerV1_5_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => Spacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => Padding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => LockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => VisualContainerGeneralFormattingObjects),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => BorderV1_5_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => DropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV1_5_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => VisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => StylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => VisualHeaderV1_5_0),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => VisualHeaderTooltip),
        }),
      ),
    ),
  });

export const VisualConfigurationDefinitionsV1_5_0 = {
  Query: VisualConfigurationQueryV1_5_0,
  SortDefinition: VisualConfigurationSortDefinitionV1_5_0,
  QuerySort: VisualConfigurationQuerySortV1_5_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: VisualConfigurationProjectionStateV1_5_0,
  RoleProjection: VisualConfigurationRoleProjectionV1_5_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV1_5_0,
  ExpansionState: VisualConfigurationExpansionStateV1_5_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV1_5_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV1_5_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV1_5_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualConfigurationVisualContainerFormattingObjectsV1_5_0,
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
  VisualLink: VisualConfigurationVisualLinkV1_5_0,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: VisualHeaderV1_5_0,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualSyncGroup: VisualSyncGroup,
} as const;

export type VisualConfigurationEmbeddedV1_5_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV1_5_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV1_5_0>;
  readonly objects?: DataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV1_5_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationEmbeddedV1_5_0: Schema.Codec<VisualConfigurationEmbeddedV1_5_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => VisualConfigurationQueryV1_5_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationExpansionStateV1_5_0)),
    ),
    objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_2_0)),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualContainerFormattingObjectsV1_5_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationQueryV1_8_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV1_5_0;
  readonly options?: VisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationProjectionStateV1_8_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const VisualConfigurationQueryV1_8_0: Schema.Codec<VisualConfigurationQueryV1_8_0> = closed({
  sortDefinition: Schema.optionalKey(Schema.suspend(() => VisualConfigurationSortDefinitionV1_5_0)),
  options: Schema.optionalKey(Schema.suspend(() => VisualQueryOptions)),
  queryState: Schema.Record(
    Schema.String,
    Schema.suspend(() => VisualConfigurationProjectionStateV1_8_0),
  ),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type VisualConfigurationProjectionStateV1_8_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationRoleProjectionV1_5_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationRoleFieldParameterV1_8_0>;
};

export const VisualConfigurationProjectionStateV1_8_0: Schema.Codec<VisualConfigurationProjectionStateV1_8_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(Schema.suspend(() => VisualConfigurationRoleProjectionV1_5_0)),
    fieldParameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationRoleFieldParameterV1_8_0)),
    ),
  });

export type VisualConfigurationRoleFieldParameterV1_8_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};

export const VisualConfigurationRoleFieldParameterV1_8_0: Schema.Codec<VisualConfigurationRoleFieldParameterV1_8_0> =
  closed({
    parameterExpr: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });

export type VisualConfigurationVisualContainerFormattingObjectsV1_8_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: Title;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: SubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: DividerV1_5_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: Spacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: Padding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: LockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: VisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: BorderV1_5_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: DropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: VisualConfigurationVisualLinkV1_5_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: VisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: StylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: VisualHeaderV1_5_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: VisualHeaderTooltip;
  }>;
};

export const VisualConfigurationVisualContainerFormattingObjectsV1_8_0: Schema.Codec<VisualConfigurationVisualContainerFormattingObjectsV1_8_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => Title),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => SubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => DividerV1_5_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => Spacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => Padding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => LockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => VisualContainerGeneralFormattingObjects),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => BorderV1_5_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => DropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV1_5_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => VisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => StylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => VisualHeaderV1_5_0),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => VisualHeaderTooltip),
        }),
      ),
    ),
  });

export const VisualConfigurationDefinitionsV1_8_0 = {
  Query: VisualConfigurationQueryV1_8_0,
  SortDefinition: VisualConfigurationSortDefinitionV1_5_0,
  QuerySort: VisualConfigurationQuerySortV1_5_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: VisualConfigurationProjectionStateV1_8_0,
  RoleProjection: VisualConfigurationRoleProjectionV1_5_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV1_8_0,
  ExpansionState: VisualConfigurationExpansionStateV1_5_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV1_5_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV1_5_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV1_5_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualConfigurationVisualContainerFormattingObjectsV1_8_0,
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
  VisualLink: VisualConfigurationVisualLinkV1_5_0,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: VisualHeaderV1_5_0,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualSyncGroup: VisualSyncGroup,
} as const;

export type VisualConfigurationEmbeddedV1_8_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV1_8_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV1_5_0>;
  readonly objects?: DataViewObjectDefinitionsV1_3_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV1_8_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationEmbeddedV1_8_0: Schema.Codec<VisualConfigurationEmbeddedV1_8_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => VisualConfigurationQueryV1_8_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationExpansionStateV1_5_0)),
    ),
    objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_3_0)),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualContainerFormattingObjectsV1_8_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationQueryV2_0_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV2_0_0;
  readonly options?: VisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationProjectionStateV2_0_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const VisualConfigurationQueryV2_0_0: Schema.Codec<VisualConfigurationQueryV2_0_0> = closed({
  sortDefinition: Schema.optionalKey(Schema.suspend(() => VisualConfigurationSortDefinitionV2_0_0)),
  options: Schema.optionalKey(Schema.suspend(() => VisualQueryOptions)),
  queryState: Schema.Record(
    Schema.String,
    Schema.suspend(() => VisualConfigurationProjectionStateV2_0_0),
  ),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type VisualConfigurationSortDefinitionV2_0_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationQuerySortV2_0_0>;
  readonly isDefaultSort?: boolean;
};

export const VisualConfigurationSortDefinitionV2_0_0: Schema.Codec<VisualConfigurationSortDefinitionV2_0_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationQuerySortV2_0_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationQuerySortV2_0_0 = {
  readonly field: QueryExpressionContainerV1_3_0;
  readonly direction: VisualConfigurationSortDirection;
};

export const VisualConfigurationQuerySortV2_0_0: Schema.Codec<VisualConfigurationQuerySortV2_0_0> =
  closed({
    field: Schema.suspend(() => QueryExpressionContainerV1_3_0),
    direction: Schema.suspend(() => VisualConfigurationSortDirection),
  });

export type VisualConfigurationProjectionStateV2_0_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationRoleProjectionV2_0_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationRoleFieldParameterV2_0_0>;
};

export const VisualConfigurationProjectionStateV2_0_0: Schema.Codec<VisualConfigurationProjectionStateV2_0_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(Schema.suspend(() => VisualConfigurationRoleProjectionV2_0_0)),
    fieldParameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationRoleFieldParameterV2_0_0)),
    ),
  });

export type VisualConfigurationRoleProjectionV2_0_0 = {
  readonly field: QueryExpressionContainerV1_3_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};

export const VisualConfigurationRoleProjectionV2_0_0: Schema.Codec<VisualConfigurationRoleProjectionV2_0_0> =
  closed({
    field: Schema.suspend(() => QueryExpressionContainerV1_3_0),
    queryRef: Schema.String,
    nativeQueryRef: Schema.optionalKey(Schema.String),
    displayName: Schema.optionalKey(Schema.String),
    format: Schema.optionalKey(Schema.String.check(Schema.isMaxCodePoints(255))),
    active: Schema.optionalKey(Schema.Boolean),
    hidden: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationRoleFieldParameterV2_0_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_3_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};

export const VisualConfigurationRoleFieldParameterV2_0_0: Schema.Codec<VisualConfigurationRoleFieldParameterV2_0_0> =
  closed({
    parameterExpr: Schema.suspend(() => QueryExpressionContainerV1_3_0),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });

export type VisualConfigurationExpansionStateV2_0_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationRootExpansionStateV2_0_0;
  readonly levels?: ReadonlyArray<VisualConfigurationLevelExpansionStateV2_0_0>;
};

export const VisualConfigurationExpansionStateV2_0_0: Schema.Codec<VisualConfigurationExpansionStateV2_0_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(Schema.suspend(() => VisualConfigurationRootExpansionStateV2_0_0)),
    levels: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationLevelExpansionStateV2_0_0)),
    ),
  });

export type VisualConfigurationRootExpansionStateV2_0_0 = {
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_0_0>;
};

export const VisualConfigurationRootExpansionStateV2_0_0: Schema.Codec<VisualConfigurationRootExpansionStateV2_0_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationNodeExpansionStateV2_0_0)),
    ),
  });

export type VisualConfigurationNodeExpansionStateV2_0_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_0_0>;
};

export const VisualConfigurationNodeExpansionStateV2_0_0: Schema.Codec<VisualConfigurationNodeExpansionStateV2_0_0> =
  closed({
    identityValues: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationNodeExpansionStateV2_0_0)),
    ),
  });

export type VisualConfigurationLevelExpansionStateV2_0_0 = {
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: AILevelInformation;
};

export const VisualConfigurationLevelExpansionStateV2_0_0: Schema.Codec<VisualConfigurationLevelExpansionStateV2_0_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(Schema.suspend(() => AILevelInformation)),
  });

export type VisualConfigurationVisualContainerFormattingObjectsV2_0_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: Title;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: SubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: DividerV1_5_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: Spacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: Padding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: LockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: VisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: BorderV1_5_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: DropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: VisualConfigurationVisualLinkV1_5_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: VisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: StylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: VisualHeaderV1_5_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: VisualHeaderTooltip;
  }>;
};

export const VisualConfigurationVisualContainerFormattingObjectsV2_0_0: Schema.Codec<VisualConfigurationVisualContainerFormattingObjectsV2_0_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => Title),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => SubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => DividerV1_5_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => Spacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => Padding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => LockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => VisualContainerGeneralFormattingObjects),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => BorderV1_5_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => DropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV1_5_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => VisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => StylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => VisualHeaderV1_5_0),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => VisualHeaderTooltip),
        }),
      ),
    ),
  });

export const VisualConfigurationDefinitionsV2_0_0 = {
  Query: VisualConfigurationQueryV2_0_0,
  SortDefinition: VisualConfigurationSortDefinitionV2_0_0,
  QuerySort: VisualConfigurationQuerySortV2_0_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: VisualConfigurationProjectionStateV2_0_0,
  RoleProjection: VisualConfigurationRoleProjectionV2_0_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV2_0_0,
  ExpansionState: VisualConfigurationExpansionStateV2_0_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV2_0_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV2_0_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV2_0_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualConfigurationVisualContainerFormattingObjectsV2_0_0,
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
  VisualLink: VisualConfigurationVisualLinkV1_5_0,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: VisualHeaderV1_5_0,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualSyncGroup: VisualSyncGroup,
} as const;

export type VisualConfigurationV2_0_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV2_0_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV2_0_0>;
  readonly objects?: DataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV2_0_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationV2_0_0: Schema.Codec<VisualConfigurationV2_0_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema.json",
  ),
  visualType: Schema.String,
  autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
  query: Schema.optionalKey(Schema.suspend(() => VisualConfigurationQueryV2_0_0)),
  expansionStates: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => VisualConfigurationExpansionStateV2_0_0)),
  ),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_4_0)),
  visualContainerObjects: Schema.optionalKey(
    Schema.suspend(() => VisualConfigurationVisualContainerFormattingObjectsV2_0_0),
  ),
  syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
  drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
});

export type VisualConfigurationVisualLinkV2_2_0 = {
  readonly show?: Schema.Json;
  readonly type?: Schema.Json;
  readonly bookmark?: Schema.Json;
  readonly disabledTooltip?: Schema.Json;
  readonly drillthroughSection?: Schema.Json;
  readonly enabledTooltip?: Schema.Json;
  readonly qna?: Schema.Json;
  readonly suppressDefaultTooltip?: Schema.Json;
  readonly showDefaultTooltip?: Schema.Json;
  readonly navigationSection?: Schema.Json;
  readonly tooltip?: Schema.Json;
  readonly tooltipPlaceholderText?: Schema.Json;
  readonly webUrl?: Schema.Json;
  readonly dataFunction?: Schema.Json;
};

export const VisualConfigurationVisualLinkV2_2_0: Schema.Codec<VisualConfigurationVisualLinkV2_2_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    type: Schema.optionalKey(Schema.Json),
    bookmark: Schema.optionalKey(Schema.Json),
    disabledTooltip: Schema.optionalKey(Schema.Json),
    drillthroughSection: Schema.optionalKey(Schema.Json),
    enabledTooltip: Schema.optionalKey(Schema.Json),
    qna: Schema.optionalKey(Schema.Json),
    suppressDefaultTooltip: Schema.optionalKey(Schema.Json),
    showDefaultTooltip: Schema.optionalKey(Schema.Json),
    navigationSection: Schema.optionalKey(Schema.Json),
    tooltip: Schema.optionalKey(Schema.Json),
    tooltipPlaceholderText: Schema.optionalKey(Schema.Json),
    webUrl: Schema.optionalKey(Schema.Json),
    dataFunction: Schema.optionalKey(Schema.Json),
  });
