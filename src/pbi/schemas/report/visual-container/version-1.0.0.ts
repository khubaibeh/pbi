import { Schema } from "effect";
import {
  DataViewObjectDefinitionsV1_0_0,
  SelectorV1_0_0,
} from "../formatting-object-definitions/version-1.0.0.js";
import {
  FilterConfigV1_0_0,
  FilterContainerFormattingObjectsV1_0_0,
  FilterContainerV1_0_0,
} from "../page/shared.js";
import { QueryExpressionContainerV1_0_0 } from "../semantic-query/shared.js";
import {
  Annotation,
  Background,
  closed,
  Divider,
  DropShadow,
  FilterContainerFormattingProperties,
  LockAspect,
  Padding,
  Spacing,
  StylePreset,
  SubTitle,
  Title,
  VisualContainerGeneralFormattingObjects,
  VisualHeaderTooltip,
  VisualLink,
  VisualTooltip,
} from "../shared.js";
import {
  AIDecompositionMethod,
  AILevelInformation,
  SortDirection,
  VisualQueryOptions,
  VisualSyncGroup,
} from "../visual-configuration/shared.js";
import {
  Border,
  GroupLayoutMode,
  VisualContainerFormattingObjectsV1_0_0,
  VisualContainerPositionV1_0_0,
  VisualGroupGeneralFormattingObjects,
  VisualHeader,
} from "./shared.js";

export type VisualConfigV1_0_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: QueryV1_0_0;
  readonly expansionStates?: ReadonlyArray<ExpansionStateV1_0_0>;
  readonly objects?: DataViewObjectDefinitionsV1_0_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV1_0_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigV1_0_0: Schema.Codec<VisualConfigV1_0_0> = closed({
  visualType: Schema.String,
  autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
  query: Schema.optionalKey(Schema.suspend(() => QueryV1_0_0)),
  expansionStates: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => ExpansionStateV1_0_0)),
  ),
  objects: Schema.optionalKey(
    Schema.suspend(() => DataViewObjectDefinitionsV1_0_0),
  ),
  visualContainerObjects: Schema.optionalKey(
    Schema.suspend(() => VisualContainerFormattingObjectsV1_0_0),
  ),
  syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
  drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
});

export type QueryV1_0_0 = {
  readonly sortDefinition?: SortDefinitionV1_0_0;
  readonly options?: VisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: ProjectionStateV1_0_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const QueryV1_0_0: Schema.Codec<QueryV1_0_0> = closed({
  sortDefinition: Schema.optionalKey(
    Schema.suspend(() => SortDefinitionV1_0_0),
  ),
  options: Schema.optionalKey(Schema.suspend(() => VisualQueryOptions)),
  queryState: Schema.Record(
    Schema.String,
    Schema.suspend(() => ProjectionStateV1_0_0),
  ),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type SortDefinitionV1_0_0 = {
  readonly sort?: ReadonlyArray<QuerySortV1_0_0>;
  readonly isDefaultSort?: boolean;
};

export const SortDefinitionV1_0_0: Schema.Codec<SortDefinitionV1_0_0> = closed({
  sort: Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortV1_0_0))),
  isDefaultSort: Schema.optionalKey(Schema.Boolean),
});

export type QuerySortV1_0_0 = {
  readonly field: QueryExpressionContainerV1_0_0;
  readonly direction: SortDirection;
};

export const QuerySortV1_0_0: Schema.Codec<QuerySortV1_0_0> = closed({
  field: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  direction: Schema.suspend(() => SortDirection),
});

export type ProjectionStateV1_0_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<RoleProjectionV1_0_0>;
  readonly fieldParameters?: ReadonlyArray<RoleFieldParameterV1_0_0>;
};

export const ProjectionStateV1_0_0: Schema.Codec<ProjectionStateV1_0_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(Schema.suspend(() => RoleProjectionV1_0_0)),
    fieldParameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => RoleFieldParameterV1_0_0)),
    ),
  });

export type RoleProjectionV1_0_0 = {
  readonly field: QueryExpressionContainerV1_0_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};

export const RoleProjectionV1_0_0: Schema.Codec<RoleProjectionV1_0_0> = closed({
  field: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  queryRef: Schema.String,
  nativeQueryRef: Schema.optionalKey(Schema.String),
  displayName: Schema.optionalKey(Schema.String),
  format: Schema.optionalKey(Schema.String),
  active: Schema.optionalKey(Schema.Boolean),
  hidden: Schema.optionalKey(Schema.Boolean),
});

export type RoleFieldParameterV1_0_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_0_0;
  readonly index: number;
  readonly length?: number;
};

export const RoleFieldParameterV1_0_0: Schema.Codec<RoleFieldParameterV1_0_0> =
  closed({
    parameterExpr: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });

export type ExpansionStateV1_0_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: RootExpansionStateV1_0_0;
  readonly levels?: ReadonlyArray<LevelExpansionStateV1_0_0>;
};

export const ExpansionStateV1_0_0: Schema.Codec<ExpansionStateV1_0_0> = closed({
  roles: Schema.Array(Schema.String),
  root: Schema.optionalKey(Schema.suspend(() => RootExpansionStateV1_0_0)),
  levels: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => LevelExpansionStateV1_0_0)),
  ),
});

export type RootExpansionStateV1_0_0 = {
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<NodeExpansionStateV1_0_0>;
};

export const RootExpansionStateV1_0_0: Schema.Codec<RootExpansionStateV1_0_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => NodeExpansionStateV1_0_0)),
    ),
  });

export type NodeExpansionStateV1_0_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<NodeExpansionStateV1_0_0>;
};

export const NodeExpansionStateV1_0_0: Schema.Codec<NodeExpansionStateV1_0_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(() => QueryExpressionContainerV1_0_0),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => NodeExpansionStateV1_0_0)),
    ),
  });

export type LevelExpansionStateV1_0_0 = {
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: AILevelInformation;
};

export const LevelExpansionStateV1_0_0: Schema.Codec<LevelExpansionStateV1_0_0> =
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

export type VisualGroupConfigV1_0_0 = {
  readonly displayName: string;
  readonly groupMode: GroupLayoutMode;
  readonly objects?: VisualGroupFormattingObjectsV1_0_0;
};

export const VisualGroupConfigV1_0_0: Schema.Codec<VisualGroupConfigV1_0_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => GroupLayoutMode),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualGroupFormattingObjectsV1_0_0),
    ),
  });

export type VisualGroupFormattingObjectsV1_0_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: Background;
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
          properties: Schema.suspend(() => Background),
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

export const VisualContainerV1_0_0: Schema.Codec<VisualContainerV1_0_0> =
  Schema.Union([
    closed({
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(() => VisualContainerPositionV1_0_0),
      visual: Schema.suspend(() => VisualConfigV1_0_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => FilterConfigV1_0_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => Annotation)),
      ),
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
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => FilterConfigV1_0_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => Annotation)),
      ),
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

export const VisualContainerDefinitionsV1_0_0 = {
  VisualContainerPosition: VisualContainerPositionV1_0_0,
  VisualConfig: VisualConfigV1_0_0,
  Query: QueryV1_0_0,
  SortDefinition: SortDefinitionV1_0_0,
  QuerySort: QuerySortV1_0_0,
  SortDirection: SortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: ProjectionStateV1_0_0,
  RoleProjection: RoleProjectionV1_0_0,
  RoleFieldParameter: RoleFieldParameterV1_0_0,
  ExpansionState: ExpansionStateV1_0_0,
  RootExpansionState: RootExpansionStateV1_0_0,
  NodeExpansionState: NodeExpansionStateV1_0_0,
  LevelExpansionState: LevelExpansionStateV1_0_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualContainerFormattingObjectsV1_0_0,
  Title: Title,
  SubTitle: SubTitle,
  Divider: Divider,
  Spacing: Spacing,
  Background: Background,
  Padding: Padding,
  LockAspect: LockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualContainerGeneralFormattingObjects,
  Border: Border,
  DropShadow: DropShadow,
  VisualLink: VisualLink,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: VisualHeader,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualSyncGroup: VisualSyncGroup,
  VisualGroupConfig: VisualGroupConfigV1_0_0,
  GroupLayoutMode: GroupLayoutMode,
  VisualGroupFormattingObjects: VisualGroupFormattingObjectsV1_0_0,
  VisualGroupGeneralFormattingObjects: VisualGroupGeneralFormattingObjects,
  FilterConfig: FilterConfigV1_0_0,
  FilterContainer: FilterContainerV1_0_0,
  FilterContainerFormattingObjects: FilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
  Annotation: Annotation,
} as const;

export {
  VisualContainerPositionV1_0_0 as VisualContainerVisualContainerPositionV1_0_0,
  VisualContainerFormattingObjectsV1_0_0 as VisualContainerVisualContainerFormattingObjectsV1_0_0,
  Border as VisualContainerBorderV1_0_0,
  VisualHeader as VisualContainerVisualHeaderV1_0_0,
  GroupLayoutMode as VisualContainerGroupLayoutModeV1_0_0,
  VisualGroupGeneralFormattingObjects as VisualContainerVisualGroupGeneralFormattingObjectsV1_0_0,
} from "./shared.js";

export {
  VisualConfigV1_0_0 as VisualContainerVisualConfigV1_0_0,
  QueryV1_0_0 as VisualContainerQueryV1_0_0,
  SortDefinitionV1_0_0 as VisualContainerSortDefinitionV1_0_0,
  QuerySortV1_0_0 as VisualContainerQuerySortV1_0_0,
  ProjectionStateV1_0_0 as VisualContainerProjectionStateV1_0_0,
  RoleProjectionV1_0_0 as VisualContainerRoleProjectionV1_0_0,
  RoleFieldParameterV1_0_0 as VisualContainerRoleFieldParameterV1_0_0,
  ExpansionStateV1_0_0 as VisualContainerExpansionStateV1_0_0,
  RootExpansionStateV1_0_0 as VisualContainerRootExpansionStateV1_0_0,
  NodeExpansionStateV1_0_0 as VisualContainerNodeExpansionStateV1_0_0,
  LevelExpansionStateV1_0_0 as VisualContainerLevelExpansionStateV1_0_0,
  VisualGroupConfigV1_0_0 as VisualContainerVisualGroupConfigV1_0_0,
  VisualGroupFormattingObjectsV1_0_0 as VisualContainerVisualGroupFormattingObjectsV1_0_0,
};

export {
  SortDirection as VisualContainerSortDirectionV1_0_0,
  VisualQueryOptions as VisualContainerVisualQueryOptionsV1_0_0,
  AILevelInformation as VisualContainerAILevelInformationV1_0_0,
  AIDecompositionMethod as VisualContainerAIDecompositionMethodV1_0_0,
  VisualSyncGroup as VisualContainerVisualSyncGroupV1_0_0,
} from "../visual-configuration/shared.js";

export {
  Title as VisualContainerTitleV1_0_0,
  SubTitle as VisualContainerSubTitleV1_0_0,
  Divider as VisualContainerDividerV1_0_0,
  Spacing as VisualContainerSpacingV1_0_0,
  Background as VisualContainerBackgroundV1_0_0,
  Padding as VisualContainerPaddingV1_0_0,
  LockAspect as VisualContainerLockAspectV1_0_0,
  VisualContainerGeneralFormattingObjects as VisualContainerVisualContainerGeneralFormattingObjectsV1_0_0,
  DropShadow as VisualContainerDropShadowV1_0_0,
  VisualLink as VisualContainerVisualLinkV1_0_0,
  VisualTooltip as VisualContainerVisualTooltipV1_0_0,
  StylePreset as VisualContainerStylePresetV1_0_0,
  VisualHeaderTooltip as VisualContainerVisualHeaderTooltipV1_0_0,
  FilterContainerFormattingProperties as VisualContainerFilterContainerFormattingObjectsPropertiesV1_0_0,
  Annotation as VisualContainerAnnotationV1_0_0,
} from "../shared.js";

export {
  FilterConfigV1_0_0 as VisualContainerFilterConfigV1_0_0,
  FilterContainerV1_0_0 as VisualContainerFilterContainerV1_0_0,
  FilterContainerFormattingObjectsV1_0_0 as VisualContainerFilterContainerFormattingObjectsV1_0_0,
} from "../page/shared.js";
