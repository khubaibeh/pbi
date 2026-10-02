import { Schema } from "effect";

import {
  DataViewObjectDefinitionsV1_1_0,
  SelectorV1_1_0,
} from "../formatting-object-definitions/version-1.1.0.js";
import {
  FilterConfigV1_1_0,
  FilterContainerFormattingObjectsV1_1_0 as PageFilterContainerFormattingObjectsV1_1_0,
  FilterContainerV1_1_0 as PageFilterContainerV1_1_0,
} from "../page/version-1.1.0.js";
import { QueryExpressionContainerV1_1_0 } from "../semantic-query/version-1.1.0.js";
import {
  Annotation,
  Background as SharedBackground,
  Border as SharedBorder,
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
  VisualHeader as SharedVisualHeader,
  VisualHeaderTooltip,
  VisualLink as SharedVisualLink,
  VisualTooltip,
} from "../shared.js";
import {
  AIDecompositionMethod,
  AILevelInformation,
  SortDirection as VisualConfigurationSortDirection,
  VisualQueryOptions,
  VisualSyncGroup,
} from "../visual-configuration/shared.js";
import {
  GroupLayoutMode,
  VisualContainerPositionV1_0_0,
  VisualGroupGeneralFormattingObjects,
} from "./shared.js";

export type VisualConfigV1_1_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: QueryV1_1_0;
  readonly expansionStates?: ReadonlyArray<ExpansionStateV1_1_0>;
  readonly objects?: DataViewObjectDefinitionsV1_1_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV1_1_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigV1_1_0: Schema.Codec<VisualConfigV1_1_0> = closed({
  visualType: Schema.String,
  autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
  query: Schema.optionalKey(Schema.suspend(() => QueryV1_1_0)),
  expansionStates: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => ExpansionStateV1_1_0)),
  ),
  objects: Schema.optionalKey(
    Schema.suspend(() => DataViewObjectDefinitionsV1_1_0),
  ),
  visualContainerObjects: Schema.optionalKey(
    Schema.suspend(() => VisualContainerFormattingObjectsV1_1_0),
  ),
  syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
  drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
});

export type QueryV1_1_0 = {
  readonly sortDefinition?: SortDefinitionV1_1_0;
  readonly options?: VisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: ProjectionStateV1_1_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const QueryV1_1_0: Schema.Codec<QueryV1_1_0> = closed({
  sortDefinition: Schema.optionalKey(
    Schema.suspend(() => SortDefinitionV1_1_0),
  ),
  options: Schema.optionalKey(Schema.suspend(() => VisualQueryOptions)),
  queryState: Schema.Record(
    Schema.String,
    Schema.suspend(() => ProjectionStateV1_1_0),
  ),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type SortDefinitionV1_1_0 = {
  readonly sort?: ReadonlyArray<QuerySortV1_1_0>;
  readonly isDefaultSort?: boolean;
};

export const SortDefinitionV1_1_0: Schema.Codec<SortDefinitionV1_1_0> = closed({
  sort: Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortV1_1_0))),
  isDefaultSort: Schema.optionalKey(Schema.Boolean),
});

export type QuerySortV1_1_0 = {
  readonly field: QueryExpressionContainerV1_1_0;
  readonly direction: VisualConfigurationSortDirection;
};

export const QuerySortV1_1_0: Schema.Codec<QuerySortV1_1_0> = closed({
  field: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  direction: Schema.suspend(() => VisualConfigurationSortDirection),
});

export type ProjectionStateV1_1_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<RoleProjectionV1_1_0>;
  readonly fieldParameters?: ReadonlyArray<RoleFieldParameterV1_1_0>;
};

export const ProjectionStateV1_1_0: Schema.Codec<ProjectionStateV1_1_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(Schema.suspend(() => RoleProjectionV1_1_0)),
    fieldParameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => RoleFieldParameterV1_1_0)),
    ),
  });

export type RoleProjectionV1_1_0 = {
  readonly field: QueryExpressionContainerV1_1_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};

export const RoleProjectionV1_1_0: Schema.Codec<RoleProjectionV1_1_0> = closed({
  field: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  queryRef: Schema.String,
  nativeQueryRef: Schema.optionalKey(Schema.String),
  displayName: Schema.optionalKey(Schema.String),
  format: Schema.optionalKey(Schema.String),
  active: Schema.optionalKey(Schema.Boolean),
  hidden: Schema.optionalKey(Schema.Boolean),
});

export type RoleFieldParameterV1_1_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_1_0;
  readonly index: number;
  readonly length?: number;
};

export const RoleFieldParameterV1_1_0: Schema.Codec<RoleFieldParameterV1_1_0> =
  closed({
    parameterExpr: Schema.suspend(() => QueryExpressionContainerV1_1_0),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });

export type ExpansionStateV1_1_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: RootExpansionStateV1_1_0;
  readonly levels?: ReadonlyArray<LevelExpansionStateV1_1_0>;
};

export const ExpansionStateV1_1_0: Schema.Codec<ExpansionStateV1_1_0> = closed({
  roles: Schema.Array(Schema.String),
  root: Schema.optionalKey(Schema.suspend(() => RootExpansionStateV1_1_0)),
  levels: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => LevelExpansionStateV1_1_0)),
  ),
});

export type RootExpansionStateV1_1_0 = {
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<NodeExpansionStateV1_1_0>;
};

export const RootExpansionStateV1_1_0: Schema.Codec<RootExpansionStateV1_1_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => NodeExpansionStateV1_1_0)),
    ),
  });

export type NodeExpansionStateV1_1_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<NodeExpansionStateV1_1_0>;
};

export const NodeExpansionStateV1_1_0: Schema.Codec<NodeExpansionStateV1_1_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(() => QueryExpressionContainerV1_1_0),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => NodeExpansionStateV1_1_0)),
    ),
  });

export type LevelExpansionStateV1_1_0 = {
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: AILevelInformation;
};

export const LevelExpansionStateV1_1_0: Schema.Codec<LevelExpansionStateV1_1_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(Schema.suspend(() => AILevelInformation)),
  });

export type VisualContainerFormattingObjectsV1_1_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: Title;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: SubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: Divider;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: Spacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: SharedBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: Padding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: LockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: VisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: SharedBorder;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: DropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: SharedVisualLink;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: VisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: StylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: SharedVisualHeader;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: VisualHeaderTooltip;
  }>;
};

export const VisualContainerFormattingObjectsV1_1_0: Schema.Codec<VisualContainerFormattingObjectsV1_1_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => Title),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => SubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => Divider),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => Spacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => SharedBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => Padding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => LockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(
            () => VisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => SharedBorder),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => DropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => SharedVisualLink),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => VisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => StylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => SharedVisualHeader),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => VisualHeaderTooltip),
        }),
      ),
    ),
  });

export type VisualGroupConfigV1_1_0 = {
  readonly displayName: string;
  readonly groupMode: GroupLayoutMode;
  readonly objects?: VisualGroupFormattingObjectsV1_1_0;
};

export const VisualGroupConfigV1_1_0: Schema.Codec<VisualGroupConfigV1_1_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => GroupLayoutMode),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualGroupFormattingObjectsV1_1_0),
    ),
  });

export type VisualGroupFormattingObjectsV1_1_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: SharedBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: LockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: VisualGroupGeneralFormattingObjects;
  }>;
};

export const VisualGroupFormattingObjectsV1_1_0: Schema.Codec<VisualGroupFormattingObjectsV1_1_0> =
  closed({
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => SharedBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => LockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => VisualGroupGeneralFormattingObjects),
        }),
      ),
    ),
  });

export type VisualContainerV1_1_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.1.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerPositionV1_0_0;
      readonly visual: VisualConfigV1_1_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: FilterConfigV1_1_0;
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
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.1.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerPositionV1_0_0;
      readonly visualGroup: VisualGroupConfigV1_1_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: FilterConfigV1_1_0;
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
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });

export const VisualContainerV1_1_0: Schema.Codec<VisualContainerV1_1_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.1.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(() => VisualContainerPositionV1_0_0),
      visual: Schema.suspend(() => VisualConfigV1_1_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => FilterConfigV1_1_0),
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
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.1.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(() => VisualContainerPositionV1_0_0),
      visualGroup: Schema.suspend(() => VisualGroupConfigV1_1_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => FilterConfigV1_1_0),
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
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);

export const VisualContainerDefinitionsV1_1_0 = {
  VisualContainerPosition: VisualContainerPositionV1_0_0,
  VisualConfig: VisualConfigV1_1_0,
  Query: QueryV1_1_0,
  SortDefinition: SortDefinitionV1_1_0,
  QuerySort: QuerySortV1_1_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: ProjectionStateV1_1_0,
  RoleProjection: RoleProjectionV1_1_0,
  RoleFieldParameter: RoleFieldParameterV1_1_0,
  ExpansionState: ExpansionStateV1_1_0,
  RootExpansionState: RootExpansionStateV1_1_0,
  NodeExpansionState: NodeExpansionStateV1_1_0,
  LevelExpansionState: LevelExpansionStateV1_1_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualContainerFormattingObjectsV1_1_0,
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
  VisualLink: SharedVisualLink,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: SharedVisualHeader,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualSyncGroup: VisualSyncGroup,
  VisualGroupConfig: VisualGroupConfigV1_1_0,
  GroupLayoutMode: GroupLayoutMode,
  VisualGroupFormattingObjects: VisualGroupFormattingObjectsV1_1_0,
  VisualGroupGeneralFormattingObjects: VisualGroupGeneralFormattingObjects,
  FilterConfig: FilterConfigV1_1_0,
  FilterContainer: PageFilterContainerV1_1_0,
  FilterContainerFormattingObjects: PageFilterContainerFormattingObjectsV1_1_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
  Annotation: Annotation,
} as const;

export {
  VisualContainerPositionV1_0_0 as VisualContainerVisualContainerPositionV1_1_0,
  GroupLayoutMode as VisualContainerGroupLayoutModeV1_1_0,
  VisualGroupGeneralFormattingObjects as VisualContainerVisualGroupGeneralFormattingObjectsV1_1_0,
} from "./shared.js";

export {
  VisualConfigV1_1_0 as VisualContainerVisualConfigV1_1_0,
  QueryV1_1_0 as VisualContainerQueryV1_1_0,
  SortDefinitionV1_1_0 as VisualContainerSortDefinitionV1_1_0,
  QuerySortV1_1_0 as VisualContainerQuerySortV1_1_0,
  ProjectionStateV1_1_0 as VisualContainerProjectionStateV1_1_0,
  RoleProjectionV1_1_0 as VisualContainerRoleProjectionV1_1_0,
  RoleFieldParameterV1_1_0 as VisualContainerRoleFieldParameterV1_1_0,
  ExpansionStateV1_1_0 as VisualContainerExpansionStateV1_1_0,
  RootExpansionStateV1_1_0 as VisualContainerRootExpansionStateV1_1_0,
  NodeExpansionStateV1_1_0 as VisualContainerNodeExpansionStateV1_1_0,
  LevelExpansionStateV1_1_0 as VisualContainerLevelExpansionStateV1_1_0,
  VisualContainerFormattingObjectsV1_1_0 as VisualContainerVisualContainerFormattingObjectsV1_1_0,
  VisualGroupConfigV1_1_0 as VisualContainerVisualGroupConfigV1_1_0,
  VisualGroupFormattingObjectsV1_1_0 as VisualContainerVisualGroupFormattingObjectsV1_1_0,
};

export {
  SortDirection as VisualContainerSortDirectionV1_1_0,
  VisualQueryOptions as VisualContainerVisualQueryOptionsV1_1_0,
  AILevelInformation as VisualContainerAILevelInformationV1_1_0,
  AIDecompositionMethod as VisualContainerAIDecompositionMethodV1_1_0,
  VisualSyncGroup as VisualContainerVisualSyncGroupV1_1_0,
} from "../visual-configuration/shared.js";

export {
  Title as VisualContainerTitleV1_1_0,
  SubTitle as VisualContainerSubTitleV1_1_0,
  Divider as VisualContainerDividerV1_1_0,
  Spacing as VisualContainerSpacingV1_1_0,
  Background as VisualContainerBackgroundV1_1_0,
  Padding as VisualContainerPaddingV1_1_0,
  LockAspect as VisualContainerLockAspectV1_1_0,
  VisualContainerGeneralFormattingObjects as VisualContainerVisualContainerGeneralFormattingObjectsV1_1_0,
  Border as VisualContainerBorderV1_1_0,
  DropShadow as VisualContainerDropShadowV1_1_0,
  VisualLink as VisualContainerVisualLinkV1_1_0,
  VisualTooltip as VisualContainerVisualTooltipV1_1_0,
  StylePreset as VisualContainerStylePresetV1_1_0,
  VisualHeader as VisualContainerVisualHeaderV1_1_0,
  VisualHeaderTooltip as VisualContainerVisualHeaderTooltipV1_1_0,
  FilterContainerFormattingProperties as VisualContainerFilterContainerFormattingObjectsPropertiesV1_1_0,
  Annotation as VisualContainerAnnotationV1_1_0,
} from "../shared.js";

export {
  FilterConfigV1_1_0 as VisualContainerFilterConfigV1_1_0,
  FilterContainerV1_1_0 as VisualContainerFilterContainerV1_1_0,
  FilterContainerFormattingObjectsV1_1_0 as VisualContainerFilterContainerFormattingObjectsV1_1_0,
} from "../page/version-1.1.0.js";
