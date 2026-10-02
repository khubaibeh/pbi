import { Schema } from "effect";

import {
  DataViewObjectDefinitionsV1_5_0,
  SelectorV1_5_0,
} from "../formatting-object-definitions/version-1.5.0.js";
import { QueryExpressionContainerV1_4_0 } from "../semantic-query/version-1.4.0.js";
import {
  Background as SharedBackground,
  Border as SharedBorder,
  closed,
  Divider,
  DropShadow,
  LockAspect,
  Padding,
  Spacing,
  StylePreset,
  SubTitle,
  Title,
  VisualContainerGeneralFormattingObjects,
  VisualHeader as SharedVisualHeader,
  VisualHeaderTooltip,
  VisualTooltip,
} from "../shared.js";
import {
  AIDecompositionMethod,
  AILevelInformation,
  SortDirection as VisualConfigurationSortDirection,
  VisualLink as VisualConfigurationVisualLink,
  VisualQueryOptions,
  VisualSyncGroup,
} from "./shared.js";

export type QueryV2_3_0 = {
  readonly sortDefinition?: SortDefinitionV2_3_0;
  readonly options?: VisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: ProjectionStateV2_3_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const QueryV2_3_0: Schema.Codec<QueryV2_3_0> = closed({
  sortDefinition: Schema.optionalKey(
    Schema.suspend(() => SortDefinitionV2_3_0),
  ),
  options: Schema.optionalKey(Schema.suspend(() => VisualQueryOptions)),
  queryState: Schema.Record(
    Schema.String,
    Schema.suspend(() => ProjectionStateV2_3_0),
  ),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type SortDefinitionV2_3_0 = {
  readonly sort?: ReadonlyArray<QuerySortV2_3_0>;
  readonly isDefaultSort?: boolean;
};

export const SortDefinitionV2_3_0: Schema.Codec<SortDefinitionV2_3_0> = closed({
  sort: Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortV2_3_0))),
  isDefaultSort: Schema.optionalKey(Schema.Boolean),
});

export type QuerySortV2_3_0 = {
  readonly field: QueryExpressionContainerV1_4_0;
  readonly direction: VisualConfigurationSortDirection;
};

export const QuerySortV2_3_0: Schema.Codec<QuerySortV2_3_0> = closed({
  field: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  direction: Schema.suspend(() => VisualConfigurationSortDirection),
});

export type ProjectionStateV2_3_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<RoleProjectionV2_3_0>;
  readonly fieldParameters?: ReadonlyArray<RoleFieldParameterV2_3_0>;
};

export const ProjectionStateV2_3_0: Schema.Codec<ProjectionStateV2_3_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(Schema.suspend(() => RoleProjectionV2_3_0)),
    fieldParameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => RoleFieldParameterV2_3_0)),
    ),
  });

export type RoleProjectionV2_3_0 = {
  readonly field: QueryExpressionContainerV1_4_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};

export const RoleProjectionV2_3_0: Schema.Codec<RoleProjectionV2_3_0> = closed({
  field: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  queryRef: Schema.String,
  nativeQueryRef: Schema.optionalKey(Schema.String),
  displayName: Schema.optionalKey(Schema.String),
  format: Schema.optionalKey(Schema.String.check(Schema.isMaxCodePoints(255))),
  active: Schema.optionalKey(Schema.Boolean),
  hidden: Schema.optionalKey(Schema.Boolean),
});

export type RoleFieldParameterV2_3_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_4_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};

export const RoleFieldParameterV2_3_0: Schema.Codec<RoleFieldParameterV2_3_0> =
  closed({
    parameterExpr: Schema.suspend(() => QueryExpressionContainerV1_4_0),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });

export type ExpansionStateV2_3_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: RootExpansionStateV2_3_0;
  readonly levels?: ReadonlyArray<LevelExpansionStateV2_3_0>;
};

export const ExpansionStateV2_3_0: Schema.Codec<ExpansionStateV2_3_0> = closed({
  roles: Schema.Array(Schema.String),
  root: Schema.optionalKey(Schema.suspend(() => RootExpansionStateV2_3_0)),
  levels: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => LevelExpansionStateV2_3_0)),
  ),
});

export type RootExpansionStateV2_3_0 = {
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<NodeExpansionStateV2_3_0>;
};

export const RootExpansionStateV2_3_0: Schema.Codec<RootExpansionStateV2_3_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => NodeExpansionStateV2_3_0)),
    ),
  });

export type NodeExpansionStateV2_3_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<NodeExpansionStateV2_3_0>;
};

export const NodeExpansionStateV2_3_0: Schema.Codec<NodeExpansionStateV2_3_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(() => QueryExpressionContainerV1_4_0),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => NodeExpansionStateV2_3_0)),
    ),
  });

export type LevelExpansionStateV2_3_0 = {
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: AILevelInformation;
};

export const LevelExpansionStateV2_3_0: Schema.Codec<LevelExpansionStateV2_3_0> =
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

export type VisualContainerFormattingObjectsV2_3_0 = {
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
    readonly properties: Divider;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: Spacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: SharedBackground;
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
    readonly properties: SharedBorder;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: DropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: VisualConfigurationVisualLink;
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
    readonly properties: SharedVisualHeader;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: VisualHeaderTooltip;
  }>;
};

export const VisualContainerFormattingObjectsV2_3_0: Schema.Codec<VisualContainerFormattingObjectsV2_3_0> =
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
          properties: Schema.suspend(() => Divider),
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
          properties: Schema.suspend(() => SharedBackground),
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
          properties: Schema.suspend(
            () => VisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => SharedBorder),
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
          properties: Schema.suspend(() => VisualConfigurationVisualLink),
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
          properties: Schema.suspend(() => SharedVisualHeader),
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

export type VisualConfigurationV2_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.3.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: QueryV2_3_0;
  readonly expansionStates?: ReadonlyArray<ExpansionStateV2_3_0>;
  readonly objects?: DataViewObjectDefinitionsV1_5_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV2_3_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationV2_3_0: Schema.Codec<VisualConfigurationV2_3_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.3.0/schema.json",
    ),
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => QueryV2_3_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => ExpansionStateV2_3_0)),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_5_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV2_3_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedV2_3_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: QueryV2_3_0;
  readonly expansionStates?: ReadonlyArray<ExpansionStateV2_3_0>;
  readonly objects?: DataViewObjectDefinitionsV1_5_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV2_3_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationEmbeddedV2_3_0: Schema.Codec<VisualConfigurationEmbeddedV2_3_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => QueryV2_3_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => ExpansionStateV2_3_0)),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_5_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV2_3_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export const VisualConfigurationDefinitionsV2_3_0 = {
  Query: QueryV2_3_0,
  SortDefinition: SortDefinitionV2_3_0,
  QuerySort: QuerySortV2_3_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: ProjectionStateV2_3_0,
  RoleProjection: RoleProjectionV2_3_0,
  RoleFieldParameter: RoleFieldParameterV2_3_0,
  ExpansionState: ExpansionStateV2_3_0,
  RootExpansionState: RootExpansionStateV2_3_0,
  NodeExpansionState: NodeExpansionStateV2_3_0,
  LevelExpansionState: LevelExpansionStateV2_3_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualContainerFormattingObjectsV2_3_0,
  Title: Title,
  SubTitle: SubTitle,
  Divider: Divider,
  Spacing: Spacing,
  Background: SharedBackground,
  Padding: Padding,
  LockAspect: LockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualContainerGeneralFormattingObjects,
  Border: SharedBorder,
  DropShadow: DropShadow,
  VisualLink: VisualConfigurationVisualLink,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: SharedVisualHeader,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualSyncGroup: VisualSyncGroup,
} as const;

export const VisualConfigurationEmbeddedDefinitionsV2_3_0 = {
  Query: QueryV2_3_0,
  SortDefinition: SortDefinitionV2_3_0,
  QuerySort: QuerySortV2_3_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: ProjectionStateV2_3_0,
  RoleProjection: RoleProjectionV2_3_0,
  RoleFieldParameter: RoleFieldParameterV2_3_0,
  ExpansionState: ExpansionStateV2_3_0,
  RootExpansionState: RootExpansionStateV2_3_0,
  NodeExpansionState: NodeExpansionStateV2_3_0,
  LevelExpansionState: LevelExpansionStateV2_3_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualContainerFormattingObjectsV2_3_0,
  Title: Title,
  SubTitle: SubTitle,
  Divider: Divider,
  Spacing: Spacing,
  Background: SharedBackground,
  Padding: Padding,
  LockAspect: LockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualContainerGeneralFormattingObjects,
  Border: SharedBorder,
  DropShadow: DropShadow,
  VisualLink: VisualConfigurationVisualLink,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: SharedVisualHeader,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualSyncGroup: VisualSyncGroup,
} as const;

export {
  QueryV2_3_0 as VisualConfigurationQueryV2_3_0,
  SortDefinitionV2_3_0 as VisualConfigurationSortDefinitionV2_3_0,
  QuerySortV2_3_0 as VisualConfigurationQuerySortV2_3_0,
  ProjectionStateV2_3_0 as VisualConfigurationProjectionStateV2_3_0,
  RoleProjectionV2_3_0 as VisualConfigurationRoleProjectionV2_3_0,
  RoleFieldParameterV2_3_0 as VisualConfigurationRoleFieldParameterV2_3_0,
  ExpansionStateV2_3_0 as VisualConfigurationExpansionStateV2_3_0,
  RootExpansionStateV2_3_0 as VisualConfigurationRootExpansionStateV2_3_0,
  NodeExpansionStateV2_3_0 as VisualConfigurationNodeExpansionStateV2_3_0,
  LevelExpansionStateV2_3_0 as VisualConfigurationLevelExpansionStateV2_3_0,
  VisualContainerFormattingObjectsV2_3_0 as VisualConfigurationVisualContainerFormattingObjectsV2_3_0,
  QueryV2_3_0 as VisualConfigurationEmbeddedQueryV2_3_0,
  SortDefinitionV2_3_0 as VisualConfigurationEmbeddedSortDefinitionV2_3_0,
  QuerySortV2_3_0 as VisualConfigurationEmbeddedQuerySortV2_3_0,
  ProjectionStateV2_3_0 as VisualConfigurationEmbeddedProjectionStateV2_3_0,
  RoleProjectionV2_3_0 as VisualConfigurationEmbeddedRoleProjectionV2_3_0,
  RoleFieldParameterV2_3_0 as VisualConfigurationEmbeddedRoleFieldParameterV2_3_0,
  ExpansionStateV2_3_0 as VisualConfigurationEmbeddedExpansionStateV2_3_0,
  RootExpansionStateV2_3_0 as VisualConfigurationEmbeddedRootExpansionStateV2_3_0,
  NodeExpansionStateV2_3_0 as VisualConfigurationEmbeddedNodeExpansionStateV2_3_0,
  LevelExpansionStateV2_3_0 as VisualConfigurationEmbeddedLevelExpansionStateV2_3_0,
  VisualContainerFormattingObjectsV2_3_0 as VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0,
};

export {
  SortDirection as VisualConfigurationSortDirectionV2_3_0,
  VisualQueryOptions as VisualConfigurationVisualQueryOptionsV2_3_0,
  AILevelInformation as VisualConfigurationAILevelInformationV2_3_0,
  AIDecompositionMethod as VisualConfigurationAIDecompositionMethodV2_3_0,
  VisualLink as VisualConfigurationVisualLinkV2_3_0,
  VisualSyncGroup as VisualConfigurationVisualSyncGroupV2_3_0,
  SortDirection as VisualConfigurationEmbeddedSortDirectionV2_3_0,
  VisualQueryOptions as VisualConfigurationEmbeddedVisualQueryOptionsV2_3_0,
  AILevelInformation as VisualConfigurationEmbeddedAILevelInformationV2_3_0,
  AIDecompositionMethod as VisualConfigurationEmbeddedAIDecompositionMethodV2_3_0,
  VisualLink as VisualConfigurationEmbeddedVisualLinkV2_3_0,
  VisualSyncGroup as VisualConfigurationEmbeddedVisualSyncGroupV2_3_0,
} from "./shared.js";

export {
  Title as VisualConfigurationTitleV2_3_0,
  SubTitle as VisualConfigurationSubTitleV2_3_0,
  Divider as VisualConfigurationDividerV2_3_0,
  Spacing as VisualConfigurationSpacingV2_3_0,
  Background as VisualConfigurationBackgroundV2_3_0,
  Padding as VisualConfigurationPaddingV2_3_0,
  LockAspect as VisualConfigurationLockAspectV2_3_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationVisualContainerGeneralFormattingObjectsV2_3_0,
  Border as VisualConfigurationBorderV2_3_0,
  DropShadow as VisualConfigurationDropShadowV2_3_0,
  VisualTooltip as VisualConfigurationVisualTooltipV2_3_0,
  StylePreset as VisualConfigurationStylePresetV2_3_0,
  VisualHeader as VisualConfigurationVisualHeaderV2_3_0,
  VisualHeaderTooltip as VisualConfigurationVisualHeaderTooltipV2_3_0,
  Title as VisualConfigurationEmbeddedTitleV2_3_0,
  SubTitle as VisualConfigurationEmbeddedSubTitleV2_3_0,
  Divider as VisualConfigurationEmbeddedDividerV2_3_0,
  Spacing as VisualConfigurationEmbeddedSpacingV2_3_0,
  Background as VisualConfigurationEmbeddedBackgroundV2_3_0,
  Padding as VisualConfigurationEmbeddedPaddingV2_3_0,
  LockAspect as VisualConfigurationEmbeddedLockAspectV2_3_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_3_0,
  Border as VisualConfigurationEmbeddedBorderV2_3_0,
  DropShadow as VisualConfigurationEmbeddedDropShadowV2_3_0,
  VisualTooltip as VisualConfigurationEmbeddedVisualTooltipV2_3_0,
  StylePreset as VisualConfigurationEmbeddedStylePresetV2_3_0,
  VisualHeader as VisualConfigurationEmbeddedVisualHeaderV2_3_0,
  VisualHeaderTooltip as VisualConfigurationEmbeddedVisualHeaderTooltipV2_3_0,
} from "../shared.js";
