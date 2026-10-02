import { Schema } from "effect";

import {
  DataViewObjectDefinitionsV1_2_0,
  SelectorV1_2_0,
} from "../formatting-object-definitions/version-1.2.0.js";
import {
  DataViewObjectDefinitionsV1_3_0,
  SelectorV1_3_0,
} from "../formatting-object-definitions/version-1.3.0.js";
import {
  DataViewObjectDefinitionsV1_4_0,
  SelectorV1_4_0,
} from "../formatting-object-definitions/version-1.4.0.js";
import { QueryExpressionContainerV1_2_0 } from "../semantic-query/version-1.2.0.js";
import { QueryExpressionContainerV1_3_0 } from "../semantic-query/version-1.3.0.js";
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
  VisualLink as SharedVisualLink,
  VisualTooltip,
} from "../shared.js";

export type QueryV1_5_0 = {
  readonly sortDefinition?: SortDefinitionV1_5_0;
  readonly options?: VisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: ProjectionStateV1_5_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const QueryV1_5_0: Schema.Codec<QueryV1_5_0> = closed({
  sortDefinition: Schema.optionalKey(
    Schema.suspend(() => SortDefinitionV1_5_0),
  ),
  options: Schema.optionalKey(Schema.suspend(() => VisualQueryOptions)),
  queryState: Schema.Record(
    Schema.String,
    Schema.suspend(() => ProjectionStateV1_5_0),
  ),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type SortDefinitionV1_5_0 = {
  readonly sort?: ReadonlyArray<QuerySortV1_5_0>;
  readonly isDefaultSort?: boolean;
};

export const SortDefinitionV1_5_0: Schema.Codec<SortDefinitionV1_5_0> = closed({
  sort: Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortV1_5_0))),
  isDefaultSort: Schema.optionalKey(Schema.Boolean),
});

export type QuerySortV1_5_0 = {
  readonly field: QueryExpressionContainerV1_2_0;
  readonly direction: SortDirection;
};

export const QuerySortV1_5_0: Schema.Codec<QuerySortV1_5_0> = closed({
  field: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  direction: Schema.suspend(() => SortDirection),
});

export type SortDirection = "Ascending" | "Descending";

export const SortDirection: Schema.Codec<SortDirection> = Schema.Union([
  Schema.Literal("Ascending"),
  Schema.Literal("Descending"),
]);

export type VisualQueryOptions = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};

export const VisualQueryOptions: Schema.Codec<VisualQueryOptions> = closed({
  allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
  allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
});

export type ProjectionStateV1_5_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<RoleProjectionV1_5_0>;
  readonly fieldParameters?: ReadonlyArray<RoleFieldParameterV1_5_0>;
};

export const ProjectionStateV1_5_0: Schema.Codec<ProjectionStateV1_5_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(Schema.suspend(() => RoleProjectionV1_5_0)),
    fieldParameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => RoleFieldParameterV1_5_0)),
    ),
  });

export type RoleProjectionV1_5_0 = {
  readonly field: QueryExpressionContainerV1_2_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};

export const RoleProjectionV1_5_0: Schema.Codec<RoleProjectionV1_5_0> = closed({
  field: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  queryRef: Schema.String,
  nativeQueryRef: Schema.optionalKey(Schema.String),
  displayName: Schema.optionalKey(Schema.String),
  format: Schema.optionalKey(Schema.String.check(Schema.isMaxCodePoints(255))),
  active: Schema.optionalKey(Schema.Boolean),
  hidden: Schema.optionalKey(Schema.Boolean),
});

export type RoleFieldParameterV1_5_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
};

export const RoleFieldParameterV1_5_0: Schema.Codec<RoleFieldParameterV1_5_0> =
  closed({
    parameterExpr: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });

export type ExpansionStateV1_5_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: RootExpansionStateV1_5_0;
  readonly levels?: ReadonlyArray<LevelExpansionStateV1_5_0>;
};

export const ExpansionStateV1_5_0: Schema.Codec<ExpansionStateV1_5_0> = closed({
  roles: Schema.Array(Schema.String),
  root: Schema.optionalKey(Schema.suspend(() => RootExpansionStateV1_5_0)),
  levels: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => LevelExpansionStateV1_5_0)),
  ),
});

export type RootExpansionStateV1_5_0 = {
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<NodeExpansionStateV1_5_0>;
};

export const RootExpansionStateV1_5_0: Schema.Codec<RootExpansionStateV1_5_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => NodeExpansionStateV1_5_0)),
    ),
  });

export type NodeExpansionStateV1_5_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<NodeExpansionStateV1_5_0>;
};

export const NodeExpansionStateV1_5_0: Schema.Codec<NodeExpansionStateV1_5_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(() => QueryExpressionContainerV1_2_0),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => NodeExpansionStateV1_5_0)),
    ),
  });

export type LevelExpansionStateV1_5_0 = {
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: AILevelInformation;
};

export const LevelExpansionStateV1_5_0: Schema.Codec<LevelExpansionStateV1_5_0> =
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

export type AILevelInformation = {
  readonly method: AIDecompositionMethod;
  readonly disabled?: boolean;
};

export const AILevelInformation: Schema.Codec<AILevelInformation> = closed({
  method: Schema.suspend(() => AIDecompositionMethod),
  disabled: Schema.optionalKey(Schema.Boolean),
});

export type AIDecompositionMethod = "BestSplit" | "MaxSplit" | "MinSplit";

export const AIDecompositionMethod: Schema.Codec<AIDecompositionMethod> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);

export type VisualContainerFormattingObjectsV1_5_0 = {
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
    readonly properties: Divider;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: Spacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: SharedBackground;
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
    readonly properties: SharedBorder;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: DropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: SharedVisualLink;
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
    readonly properties: SharedVisualHeader;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: VisualHeaderTooltip;
  }>;
};

export const VisualContainerFormattingObjectsV1_5_0: Schema.Codec<VisualContainerFormattingObjectsV1_5_0> =
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
          properties: Schema.suspend(() => Divider),
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
          properties: Schema.suspend(() => SharedBackground),
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
          properties: Schema.suspend(
            () => VisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => SharedBorder),
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
          properties: Schema.suspend(() => SharedVisualLink),
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
          properties: Schema.suspend(() => SharedVisualHeader),
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

export type VisualSyncGroup = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};

export const VisualSyncGroup: Schema.Codec<VisualSyncGroup> = closed({
  groupName: Schema.String,
  fieldChanges: Schema.optionalKey(Schema.Boolean),
  filterChanges: Schema.optionalKey(Schema.Boolean),
});

export type VisualConfigurationEmbeddedV1_5_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: QueryV1_5_0;
  readonly expansionStates?: ReadonlyArray<ExpansionStateV1_5_0>;
  readonly objects?: DataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV1_5_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationEmbeddedV1_5_0: Schema.Codec<VisualConfigurationEmbeddedV1_5_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => QueryV1_5_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => ExpansionStateV1_5_0)),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_2_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV1_5_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type QueryV1_8_0 = {
  readonly sortDefinition?: SortDefinitionV1_5_0;
  readonly options?: VisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: ProjectionStateV1_8_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const QueryV1_8_0: Schema.Codec<QueryV1_8_0> = closed({
  sortDefinition: Schema.optionalKey(
    Schema.suspend(() => SortDefinitionV1_5_0),
  ),
  options: Schema.optionalKey(Schema.suspend(() => VisualQueryOptions)),
  queryState: Schema.Record(
    Schema.String,
    Schema.suspend(() => ProjectionStateV1_8_0),
  ),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type ProjectionStateV1_8_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<RoleProjectionV1_5_0>;
  readonly fieldParameters?: ReadonlyArray<RoleFieldParameterV1_8_0>;
};

export const ProjectionStateV1_8_0: Schema.Codec<ProjectionStateV1_8_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(Schema.suspend(() => RoleProjectionV1_5_0)),
    fieldParameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => RoleFieldParameterV1_8_0)),
    ),
  });

export type RoleFieldParameterV1_8_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};

export const RoleFieldParameterV1_8_0: Schema.Codec<RoleFieldParameterV1_8_0> =
  closed({
    parameterExpr: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });

export type VisualContainerFormattingObjectsV1_8_0 = {
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
    readonly properties: Divider;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: Spacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: SharedBackground;
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
    readonly properties: SharedBorder;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: DropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: SharedVisualLink;
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
    readonly properties: SharedVisualHeader;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: VisualHeaderTooltip;
  }>;
};

export const VisualContainerFormattingObjectsV1_8_0: Schema.Codec<VisualContainerFormattingObjectsV1_8_0> =
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
          properties: Schema.suspend(() => Divider),
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
          properties: Schema.suspend(() => SharedBackground),
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
          properties: Schema.suspend(
            () => VisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => SharedBorder),
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
          properties: Schema.suspend(() => SharedVisualLink),
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
          properties: Schema.suspend(() => SharedVisualHeader),
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

export type VisualConfigurationEmbeddedV1_8_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: QueryV1_8_0;
  readonly expansionStates?: ReadonlyArray<ExpansionStateV1_5_0>;
  readonly objects?: DataViewObjectDefinitionsV1_3_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV1_8_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationEmbeddedV1_8_0: Schema.Codec<VisualConfigurationEmbeddedV1_8_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => QueryV1_8_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => ExpansionStateV1_5_0)),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_3_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV1_8_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type QueryV2_0_0 = {
  readonly sortDefinition?: SortDefinitionV2_0_0;
  readonly options?: VisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: ProjectionStateV2_0_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const QueryV2_0_0: Schema.Codec<QueryV2_0_0> = closed({
  sortDefinition: Schema.optionalKey(
    Schema.suspend(() => SortDefinitionV2_0_0),
  ),
  options: Schema.optionalKey(Schema.suspend(() => VisualQueryOptions)),
  queryState: Schema.Record(
    Schema.String,
    Schema.suspend(() => ProjectionStateV2_0_0),
  ),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type SortDefinitionV2_0_0 = {
  readonly sort?: ReadonlyArray<QuerySortV2_0_0>;
  readonly isDefaultSort?: boolean;
};

export const SortDefinitionV2_0_0: Schema.Codec<SortDefinitionV2_0_0> = closed({
  sort: Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortV2_0_0))),
  isDefaultSort: Schema.optionalKey(Schema.Boolean),
});

export type QuerySortV2_0_0 = {
  readonly field: QueryExpressionContainerV1_3_0;
  readonly direction: SortDirection;
};

export const QuerySortV2_0_0: Schema.Codec<QuerySortV2_0_0> = closed({
  field: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  direction: Schema.suspend(() => SortDirection),
});

export type ProjectionStateV2_0_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<RoleProjectionV2_0_0>;
  readonly fieldParameters?: ReadonlyArray<RoleFieldParameterV2_0_0>;
};

export const ProjectionStateV2_0_0: Schema.Codec<ProjectionStateV2_0_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(Schema.suspend(() => RoleProjectionV2_0_0)),
    fieldParameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => RoleFieldParameterV2_0_0)),
    ),
  });

export type RoleProjectionV2_0_0 = {
  readonly field: QueryExpressionContainerV1_3_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};

export const RoleProjectionV2_0_0: Schema.Codec<RoleProjectionV2_0_0> = closed({
  field: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  queryRef: Schema.String,
  nativeQueryRef: Schema.optionalKey(Schema.String),
  displayName: Schema.optionalKey(Schema.String),
  format: Schema.optionalKey(Schema.String.check(Schema.isMaxCodePoints(255))),
  active: Schema.optionalKey(Schema.Boolean),
  hidden: Schema.optionalKey(Schema.Boolean),
});

export type RoleFieldParameterV2_0_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_3_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};

export const RoleFieldParameterV2_0_0: Schema.Codec<RoleFieldParameterV2_0_0> =
  closed({
    parameterExpr: Schema.suspend(() => QueryExpressionContainerV1_3_0),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });

export type ExpansionStateV2_0_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: RootExpansionStateV2_0_0;
  readonly levels?: ReadonlyArray<LevelExpansionStateV2_0_0>;
};

export const ExpansionStateV2_0_0: Schema.Codec<ExpansionStateV2_0_0> = closed({
  roles: Schema.Array(Schema.String),
  root: Schema.optionalKey(Schema.suspend(() => RootExpansionStateV2_0_0)),
  levels: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => LevelExpansionStateV2_0_0)),
  ),
});

export type RootExpansionStateV2_0_0 = {
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<NodeExpansionStateV2_0_0>;
};

export const RootExpansionStateV2_0_0: Schema.Codec<RootExpansionStateV2_0_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => NodeExpansionStateV2_0_0)),
    ),
  });

export type NodeExpansionStateV2_0_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<NodeExpansionStateV2_0_0>;
};

export const NodeExpansionStateV2_0_0: Schema.Codec<NodeExpansionStateV2_0_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(() => QueryExpressionContainerV1_3_0),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => NodeExpansionStateV2_0_0)),
    ),
  });

export type LevelExpansionStateV2_0_0 = {
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: AILevelInformation;
};

export const LevelExpansionStateV2_0_0: Schema.Codec<LevelExpansionStateV2_0_0> =
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

export type VisualContainerFormattingObjectsV2_0_0 = {
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
    readonly properties: Divider;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: Spacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: SharedBackground;
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
    readonly properties: SharedBorder;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: DropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: SharedVisualLink;
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
    readonly properties: SharedVisualHeader;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: VisualHeaderTooltip;
  }>;
};

export const VisualContainerFormattingObjectsV2_0_0: Schema.Codec<VisualContainerFormattingObjectsV2_0_0> =
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
          properties: Schema.suspend(() => Divider),
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
          properties: Schema.suspend(() => SharedBackground),
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
          properties: Schema.suspend(
            () => VisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => SharedBorder),
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
          properties: Schema.suspend(() => SharedVisualLink),
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
          properties: Schema.suspend(() => SharedVisualHeader),
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

export type VisualConfigurationV2_0_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: QueryV2_0_0;
  readonly expansionStates?: ReadonlyArray<ExpansionStateV2_0_0>;
  readonly objects?: DataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV2_0_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationV2_0_0: Schema.Codec<VisualConfigurationV2_0_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema.json",
    ),
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => QueryV2_0_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => ExpansionStateV2_0_0)),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_4_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV2_0_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type VisualLink = {
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

export const VisualLink: Schema.Codec<VisualLink> = closed({
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
