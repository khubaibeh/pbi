import { Schema } from "effect";
import {
  AIDecompositionMethod,
  AILevelInformation,
  Annotation,
  BorderV1_0_0,
  DividerV1_0_0,
  DropShadow,
  FilterContainerFormattingObjectsProperties,
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
  VisualContainerPositionV1_0_0,
  VisualHeaderTooltip,
  VisualHeaderV1_0_0,
  VisualQueryOptions,
  VisualSyncGroup,
  VisualTooltip,
  closed,
} from "../shared.js";
import {
  DataViewObjectDefinitionsV1_0_0,
  SelectorV1_0_0,
} from "../formatting-object-definitions/version-1_0_0.js";
import {
  FilterDefinitionV1_0_0,
  QueryExpressionContainerV1_0_0,
} from "../semantic-query/version-1_0_0.js";
import { GroupLayoutMode, VisualGroupGeneralFormattingObjects } from "./shared.js";

export type VisualConfigV1_0_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualContainerQueryV1_0_0;
  readonly expansionStates?: ReadonlyArray<VisualContainerExpansionStateV1_0_0>;
  readonly objects?: DataViewObjectDefinitionsV1_0_0;
  readonly visualContainerObjects?: VisualContainerVisualContainerFormattingObjectsV1_0_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigV1_0_0: Schema.Codec<VisualConfigV1_0_0> = closed({
  visualType: Schema.String,
  autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
  query: Schema.optionalKey(Schema.suspend(() => VisualContainerQueryV1_0_0)),
  expansionStates: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => VisualContainerExpansionStateV1_0_0)),
  ),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_0_0)),
  visualContainerObjects: Schema.optionalKey(
    Schema.suspend(() => VisualContainerVisualContainerFormattingObjectsV1_0_0),
  ),
  syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
  drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
});

export type VisualContainerQueryV1_0_0 = {
  readonly sortDefinition?: VisualContainerSortDefinitionV1_0_0;
  readonly options?: VisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: VisualContainerProjectionStateV1_0_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const VisualContainerQueryV1_0_0: Schema.Codec<VisualContainerQueryV1_0_0> = closed({
  sortDefinition: Schema.optionalKey(Schema.suspend(() => VisualContainerSortDefinitionV1_0_0)),
  options: Schema.optionalKey(Schema.suspend(() => VisualQueryOptions)),
  queryState: Schema.Record(
    Schema.String,
    Schema.suspend(() => VisualContainerProjectionStateV1_0_0),
  ),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type VisualContainerSortDefinitionV1_0_0 = {
  readonly sort?: ReadonlyArray<VisualContainerQuerySortV1_0_0>;
  readonly isDefaultSort?: boolean;
};

export const VisualContainerSortDefinitionV1_0_0: Schema.Codec<VisualContainerSortDefinitionV1_0_0> =
  closed({
    sort: Schema.optionalKey(Schema.Array(Schema.suspend(() => VisualContainerQuerySortV1_0_0))),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });

export type VisualContainerQuerySortV1_0_0 = {
  readonly field: QueryExpressionContainerV1_0_0;
  readonly direction: VisualConfigurationSortDirection;
};

export const VisualContainerQuerySortV1_0_0: Schema.Codec<VisualContainerQuerySortV1_0_0> = closed({
  field: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  direction: Schema.suspend(() => VisualConfigurationSortDirection),
});

export type VisualContainerProjectionStateV1_0_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualContainerRoleProjectionV1_0_0>;
  readonly fieldParameters?: ReadonlyArray<VisualContainerRoleFieldParameterV1_0_0>;
};

export const VisualContainerProjectionStateV1_0_0: Schema.Codec<VisualContainerProjectionStateV1_0_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(Schema.suspend(() => VisualContainerRoleProjectionV1_0_0)),
    fieldParameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerRoleFieldParameterV1_0_0)),
    ),
  });

export type VisualContainerRoleProjectionV1_0_0 = {
  readonly field: QueryExpressionContainerV1_0_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};

export const VisualContainerRoleProjectionV1_0_0: Schema.Codec<VisualContainerRoleProjectionV1_0_0> =
  closed({
    field: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    queryRef: Schema.String,
    nativeQueryRef: Schema.optionalKey(Schema.String),
    displayName: Schema.optionalKey(Schema.String),
    format: Schema.optionalKey(Schema.String),
    active: Schema.optionalKey(Schema.Boolean),
    hidden: Schema.optionalKey(Schema.Boolean),
  });

export type VisualContainerRoleFieldParameterV1_0_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_0_0;
  readonly index: number;
  readonly length?: number;
};

export const VisualContainerRoleFieldParameterV1_0_0: Schema.Codec<VisualContainerRoleFieldParameterV1_0_0> =
  closed({
    parameterExpr: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });

export type VisualContainerExpansionStateV1_0_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualContainerRootExpansionStateV1_0_0;
  readonly levels?: ReadonlyArray<VisualContainerLevelExpansionStateV1_0_0>;
};

export const VisualContainerExpansionStateV1_0_0: Schema.Codec<VisualContainerExpansionStateV1_0_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(Schema.suspend(() => VisualContainerRootExpansionStateV1_0_0)),
    levels: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerLevelExpansionStateV1_0_0)),
    ),
  });

export type VisualContainerRootExpansionStateV1_0_0 = {
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualContainerNodeExpansionStateV1_0_0>;
};

export const VisualContainerRootExpansionStateV1_0_0: Schema.Codec<VisualContainerRootExpansionStateV1_0_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerNodeExpansionStateV1_0_0)),
    ),
  });

export type VisualContainerNodeExpansionStateV1_0_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualContainerNodeExpansionStateV1_0_0>;
};

export const VisualContainerNodeExpansionStateV1_0_0: Schema.Codec<VisualContainerNodeExpansionStateV1_0_0> =
  closed({
    identityValues: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerNodeExpansionStateV1_0_0)),
    ),
  });

export type VisualContainerLevelExpansionStateV1_0_0 = {
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: AILevelInformation;
};

export const VisualContainerLevelExpansionStateV1_0_0: Schema.Codec<VisualContainerLevelExpansionStateV1_0_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(Schema.suspend(() => AILevelInformation)),
  });

export type VisualContainerVisualContainerFormattingObjectsV1_0_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: Title;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: SubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: DividerV1_0_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: Spacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: Padding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: LockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: VisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: BorderV1_0_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: DropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: VisualConfigurationVisualLinkV1_5_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: VisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: StylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: VisualHeaderV1_0_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: VisualHeaderTooltip;
  }>;
};

export const VisualContainerVisualContainerFormattingObjectsV1_0_0: Schema.Codec<VisualContainerVisualContainerFormattingObjectsV1_0_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => Title),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => SubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => DividerV1_0_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => Spacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => Padding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => LockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => VisualContainerGeneralFormattingObjects),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => BorderV1_0_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => DropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV1_5_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => VisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => StylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => VisualHeaderV1_0_0),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => VisualHeaderTooltip),
        }),
      ),
    ),
  });

export type VisualGroupConfigV1_0_0 = {
  readonly displayName: string;
  readonly groupMode: GroupLayoutMode;
  readonly objects?: VisualGroupFormattingObjectsV1_0_0;
};

export const VisualGroupConfigV1_0_0: Schema.Codec<VisualGroupConfigV1_0_0> = closed({
  displayName: Schema.String,
  groupMode: Schema.suspend(() => GroupLayoutMode),
  objects: Schema.optionalKey(Schema.suspend(() => VisualGroupFormattingObjectsV1_0_0)),
});

export type VisualGroupFormattingObjectsV1_0_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: LockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: VisualGroupGeneralFormattingObjects;
  }>;
};

export const VisualGroupFormattingObjectsV1_0_0: Schema.Codec<VisualGroupFormattingObjectsV1_0_0> =
  closed({
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => LockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => VisualGroupGeneralFormattingObjects),
        }),
      ),
    ),
  });

export type FilterConfigV1_0_0 = {
  readonly filters?: ReadonlyArray<VisualContainerFilterContainerV1_0_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};

export const FilterConfigV1_0_0: Schema.Codec<FilterConfigV1_0_0> = closed({
  filters: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => VisualContainerFilterContainerV1_0_0)),
  ),
  filterSortOrder: Schema.optionalKey(
    Schema.Union([
      Schema.Literal("Ascending"),
      Schema.Literal("Descending"),
      Schema.Literal("Custom"),
    ]),
  ),
});

export type VisualContainerFilterContainerV1_0_0 = {
  readonly name: string;
  readonly displayName?: string;
  readonly ordinal?: number;
  readonly field?: QueryExpressionContainerV1_0_0;
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
    | "RelativeTime";
  readonly filter?: FilterDefinitionV1_0_0;
  readonly restatement?: string;
  readonly howCreated?: "Auto" | "User" | "Drill" | "Include" | "Exclude" | "Drillthrough";
  readonly isHiddenInViewMode?: boolean;
  readonly isLockedInViewMode?: boolean;
  readonly objects?: VisualContainerFilterContainerFormattingObjectsV1_0_0;
};

export const VisualContainerFilterContainerV1_0_0: Schema.Codec<VisualContainerFilterContainerV1_0_0> =
  closed({
    name: Schema.String,
    displayName: Schema.optionalKey(Schema.String),
    ordinal: Schema.optionalKey(Schema.Finite),
    field: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
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
      ]),
    ),
    filter: Schema.optionalKey(Schema.suspend(() => FilterDefinitionV1_0_0)),
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
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFilterContainerFormattingObjectsV1_0_0),
    ),
  });

export type VisualContainerFilterContainerFormattingObjectsV1_0_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: FilterContainerFormattingObjectsProperties;
  }>;
};

export const VisualContainerFilterContainerFormattingObjectsV1_0_0: Schema.Codec<VisualContainerFilterContainerFormattingObjectsV1_0_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => FilterContainerFormattingObjectsProperties),
        }),
      ),
    ),
  });

export const VisualContainerDefinitionsV1_0_0 = {
  VisualContainerPosition: VisualContainerPositionV1_0_0,
  VisualConfig: VisualConfigV1_0_0,
  Query: VisualContainerQueryV1_0_0,
  SortDefinition: VisualContainerSortDefinitionV1_0_0,
  QuerySort: VisualContainerQuerySortV1_0_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: VisualContainerProjectionStateV1_0_0,
  RoleProjection: VisualContainerRoleProjectionV1_0_0,
  RoleFieldParameter: VisualContainerRoleFieldParameterV1_0_0,
  ExpansionState: VisualContainerExpansionStateV1_0_0,
  RootExpansionState: VisualContainerRootExpansionStateV1_0_0,
  NodeExpansionState: VisualContainerNodeExpansionStateV1_0_0,
  LevelExpansionState: VisualContainerLevelExpansionStateV1_0_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualContainerVisualContainerFormattingObjectsV1_0_0,
  Title: Title,
  SubTitle: SubTitle,
  Divider: DividerV1_0_0,
  Spacing: Spacing,
  Background: VisualConfigurationBackground,
  Padding: Padding,
  LockAspect: LockAspect,
  VisualContainerGeneralFormattingObjects: VisualContainerGeneralFormattingObjects,
  Border: BorderV1_0_0,
  DropShadow: DropShadow,
  VisualLink: VisualConfigurationVisualLinkV1_5_0,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: VisualHeaderV1_0_0,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualSyncGroup: VisualSyncGroup,
  VisualGroupConfig: VisualGroupConfigV1_0_0,
  GroupLayoutMode: GroupLayoutMode,
  VisualGroupFormattingObjects: VisualGroupFormattingObjectsV1_0_0,
  VisualGroupGeneralFormattingObjects: VisualGroupGeneralFormattingObjects,
  FilterConfig: FilterConfigV1_0_0,
  FilterContainer: VisualContainerFilterContainerV1_0_0,
  FilterContainerFormattingObjects: VisualContainerFilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties: FilterContainerFormattingObjectsProperties,
  Annotation: Annotation,
} as const;

export type VisualContainerV1_0_0 =
  | ({
      readonly name: string;
      readonly position: VisualContainerPositionV1_0_0;
      readonly visual: VisualConfigV1_0_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: FilterConfigV1_0_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<Annotation>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste";
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.0.0/schema.json";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly name: string;
      readonly position: VisualContainerPositionV1_0_0;
      readonly visualGroup: VisualGroupConfigV1_0_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: FilterConfigV1_0_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<Annotation>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste";
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.0.0/schema.json";
    } & {
      readonly visual?: never;
    });

export const VisualContainerV1_0_0: Schema.Codec<VisualContainerV1_0_0> = Schema.Union([
  closed({
    name: Schema.String.check(Schema.isMaxCodePoints(50)),
    position: Schema.suspend(() => VisualContainerPositionV1_0_0),
    visual: Schema.suspend(() => VisualConfigV1_0_0),
    parentGroupName: Schema.optionalKey(Schema.String),
    filterConfig: Schema.optionalKey(Schema.suspend(() => FilterConfigV1_0_0)),
    isHidden: Schema.optionalKey(Schema.Boolean),
    annotations: Schema.optionalKey(Schema.Array(Schema.suspend(() => Annotation))),
    howCreated: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Default"),
        Schema.Literal("Copilot"),
        Schema.Literal("CheckboxTickedInFieldList"),
        Schema.Literal("DraggedToCanvas"),
        Schema.Literal("VisualTypeIconClicked"),
        Schema.Literal("DraggedToFieldWell"),
        Schema.Literal("InsertVisualButton"),
        Schema.Literal("WhatIfParameterControl"),
        Schema.Literal("QnaAppBar"),
        Schema.Literal("QnaDoubleClick"),
        Schema.Literal("QnaKeyboardShortcut"),
        Schema.Literal("FieldParameterControl"),
        Schema.Literal("CanvasBackgroundContextMenu"),
        Schema.Literal("ContextMenuPaste"),
        Schema.Literal("CopyPaste"),
      ]),
    ),
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.0.0/schema.json",
    ),
  }),
  closed({
    name: Schema.String.check(Schema.isMaxCodePoints(50)),
    position: Schema.suspend(() => VisualContainerPositionV1_0_0),
    visualGroup: Schema.suspend(() => VisualGroupConfigV1_0_0),
    parentGroupName: Schema.optionalKey(Schema.String),
    filterConfig: Schema.optionalKey(Schema.suspend(() => FilterConfigV1_0_0)),
    isHidden: Schema.optionalKey(Schema.Boolean),
    annotations: Schema.optionalKey(Schema.Array(Schema.suspend(() => Annotation))),
    howCreated: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Default"),
        Schema.Literal("Copilot"),
        Schema.Literal("CheckboxTickedInFieldList"),
        Schema.Literal("DraggedToCanvas"),
        Schema.Literal("VisualTypeIconClicked"),
        Schema.Literal("DraggedToFieldWell"),
        Schema.Literal("InsertVisualButton"),
        Schema.Literal("WhatIfParameterControl"),
        Schema.Literal("QnaAppBar"),
        Schema.Literal("QnaDoubleClick"),
        Schema.Literal("QnaKeyboardShortcut"),
        Schema.Literal("FieldParameterControl"),
        Schema.Literal("CanvasBackgroundContextMenu"),
        Schema.Literal("ContextMenuPaste"),
        Schema.Literal("CopyPaste"),
      ]),
    ),
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.0.0/schema.json",
    ),
  }),
]);

export {
  VisualConfigV1_0_0 as VisualContainerVisualConfigV1_0_0,
  VisualGroupConfigV1_0_0 as VisualContainerVisualGroupConfigV1_0_0,
  VisualGroupFormattingObjectsV1_0_0 as VisualContainerVisualGroupFormattingObjectsV1_0_0,
  FilterConfigV1_0_0 as VisualContainerFilterConfigV1_0_0,
};

export {
  VisualContainerPositionV1_0_0 as VisualContainerVisualContainerPositionV1_0_0,
  VisualConfigurationSortDirection as VisualContainerSortDirectionV1_0_0,
  VisualQueryOptions as VisualContainerVisualQueryOptionsV1_0_0,
  AILevelInformation as VisualContainerAILevelInformationV1_0_0,
  AIDecompositionMethod as VisualContainerAIDecompositionMethodV1_0_0,
  Title as VisualContainerTitleV1_0_0,
  SubTitle as VisualContainerSubTitleV1_0_0,
  DividerV1_0_0 as VisualContainerDividerV1_0_0,
  Spacing as VisualContainerSpacingV1_0_0,
  VisualConfigurationBackground as VisualContainerBackgroundV1_0_0,
  Padding as VisualContainerPaddingV1_0_0,
  LockAspect as VisualContainerLockAspectV1_0_0,
  VisualContainerGeneralFormattingObjects as VisualContainerVisualContainerGeneralFormattingObjectsV1_0_0,
  BorderV1_0_0 as VisualContainerBorderV1_0_0,
  DropShadow as VisualContainerDropShadowV1_0_0,
  VisualConfigurationVisualLinkV1_5_0 as VisualContainerVisualLinkV1_0_0,
  VisualTooltip as VisualContainerVisualTooltipV1_0_0,
  StylePreset as VisualContainerStylePresetV1_0_0,
  VisualHeaderV1_0_0 as VisualContainerVisualHeaderV1_0_0,
  VisualHeaderTooltip as VisualContainerVisualHeaderTooltipV1_0_0,
  VisualSyncGroup as VisualContainerVisualSyncGroupV1_0_0,
  FilterContainerFormattingObjectsProperties as VisualContainerFilterContainerFormattingObjectsPropertiesV1_0_0,
  Annotation as VisualContainerAnnotationV1_0_0,
} from "../shared.js";

export {
  GroupLayoutMode as VisualContainerGroupLayoutModeV1_0_0,
  VisualGroupGeneralFormattingObjects as VisualContainerVisualGroupGeneralFormattingObjectsV1_0_0,
} from "./shared.js";
