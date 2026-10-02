import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0,
  FormattingObjectDefinitionsDefinitionsV1_0_0,
  FormattingObjectDefinitionsSelectorV1_0_0,
} from "../formatting-object-definitions/shared.js";
import {
  FilterDefinitionV1_0_0,
  QueryExpressionContainerV1_0_0,
} from "../semantic-query/shared.js";
import {
  VisualConfigurationAIDecompositionMethod,
  VisualConfigurationBackground,
  VisualConfigurationDropShadow,
  VisualConfigurationLockAspect,
  VisualConfigurationPadding,
  VisualConfigurationSortDirection,
  VisualConfigurationSpacing,
  VisualConfigurationStylePreset,
  VisualConfigurationSubTitle,
  VisualConfigurationTitle,
  VisualConfigurationVisualContainerGeneralFormattingObjects,
  VisualConfigurationVisualHeaderTooltip,
  VisualConfigurationVisualLinkV1_5_0,
  VisualConfigurationVisualQueryOptions,
  VisualConfigurationVisualSyncGroup,
  VisualConfigurationVisualTooltip,
} from "../visual-configuration/shared.js";
import {
  VisualContainerAILevelInformation,
  VisualContainerAnnotation,
  VisualContainerBorder,
  VisualContainerDivider,
  VisualContainerFilterContainerFormattingObjectsProperties,
  VisualContainerGroupLayoutMode,
  VisualContainerVisualContainerPositionV1_0_0,
  VisualContainerVisualGroupGeneralFormattingObjects,
  VisualContainerVisualHeader,
} from "./shared.js";

export type VisualContainerVisualConfigV1_0_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualContainerQueryV1_0_0;
  readonly expansionStates?: ReadonlyArray<VisualContainerExpansionStateV1_0_0>;
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0;
  readonly visualContainerObjects?: VisualContainerVisualContainerFormattingObjectsV1_0_0;
  readonly syncGroup?: VisualConfigurationVisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualContainerVisualConfigV1_0_0: Schema.Codec<VisualContainerVisualConfigV1_0_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => VisualContainerQueryV1_0_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerExpansionStateV1_0_0)),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.DataViewObjectDefinitions),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualContainerFormattingObjectsV1_0_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualConfigurationVisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type VisualContainerQueryV1_0_0 = {
  readonly sortDefinition?: VisualContainerSortDefinitionV1_0_0;
  readonly options?: VisualConfigurationVisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: VisualContainerProjectionStateV1_0_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const VisualContainerQueryV1_0_0: Schema.Codec<VisualContainerQueryV1_0_0> = closed({
  sortDefinition: Schema.optionalKey(Schema.suspend(() => VisualContainerSortDefinitionV1_0_0)),
  options: Schema.optionalKey(Schema.suspend(() => VisualConfigurationVisualQueryOptions)),
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
  readonly AIInformation?: VisualContainerAILevelInformation;
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
    AIInformation: Schema.optionalKey(Schema.suspend(() => VisualContainerAILevelInformation)),
  });

export type VisualContainerVisualContainerFormattingObjectsV1_0_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationTitle;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationSubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerDivider;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationSpacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationPadding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationVisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerBorder;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationDropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationVisualLinkV1_5_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationVisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationStylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerVisualHeader;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationVisualHeaderTooltip;
  }>;
};

export const VisualContainerVisualContainerFormattingObjectsV1_0_0: Schema.Codec<VisualContainerVisualContainerFormattingObjectsV1_0_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationTitle),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationSubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerDivider),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationSpacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationPadding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerBorder),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationDropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV1_5_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationStylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerVisualHeader),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualHeaderTooltip),
        }),
      ),
    ),
  });

export type VisualContainerVisualGroupConfigV1_0_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutMode;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV1_0_0;
};

export const VisualContainerVisualGroupConfigV1_0_0: Schema.Codec<VisualContainerVisualGroupConfigV1_0_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutMode),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV1_0_0),
    ),
  });

export type VisualContainerVisualGroupFormattingObjectsV1_0_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjects;
  }>;
};

export const VisualContainerVisualGroupFormattingObjectsV1_0_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV1_0_0> =
  closed({
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerVisualGroupGeneralFormattingObjects),
        }),
      ),
    ),
  });

export type VisualContainerFilterConfigV1_0_0 = {
  readonly filters?: ReadonlyArray<VisualContainerFilterContainerV1_0_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};

export const VisualContainerFilterConfigV1_0_0: Schema.Codec<VisualContainerFilterConfigV1_0_0> =
  closed({
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
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerFilterContainerFormattingObjectsProperties;
  }>;
};

export const VisualContainerFilterContainerFormattingObjectsV1_0_0: Schema.Codec<VisualContainerFilterContainerFormattingObjectsV1_0_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(
            () => VisualContainerFilterContainerFormattingObjectsProperties,
          ),
        }),
      ),
    ),
  });

export const VisualContainerDefinitionsV1_0_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_0_0,
  VisualConfig: VisualContainerVisualConfigV1_0_0,
  Query: VisualContainerQueryV1_0_0,
  SortDefinition: VisualContainerSortDefinitionV1_0_0,
  QuerySort: VisualContainerQuerySortV1_0_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualConfigurationVisualQueryOptions,
  ProjectionState: VisualContainerProjectionStateV1_0_0,
  RoleProjection: VisualContainerRoleProjectionV1_0_0,
  RoleFieldParameter: VisualContainerRoleFieldParameterV1_0_0,
  ExpansionState: VisualContainerExpansionStateV1_0_0,
  RootExpansionState: VisualContainerRootExpansionStateV1_0_0,
  NodeExpansionState: VisualContainerNodeExpansionStateV1_0_0,
  LevelExpansionState: VisualContainerLevelExpansionStateV1_0_0,
  AILevelInformation: VisualContainerAILevelInformation,
  AIDecompositionMethod: VisualConfigurationAIDecompositionMethod,
  VisualContainerFormattingObjects: VisualContainerVisualContainerFormattingObjectsV1_0_0,
  Title: VisualConfigurationTitle,
  SubTitle: VisualConfigurationSubTitle,
  Divider: VisualContainerDivider,
  Spacing: VisualConfigurationSpacing,
  Background: VisualConfigurationBackground,
  Padding: VisualConfigurationPadding,
  LockAspect: VisualConfigurationLockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationVisualContainerGeneralFormattingObjects,
  Border: VisualContainerBorder,
  DropShadow: VisualConfigurationDropShadow,
  VisualLink: VisualConfigurationVisualLinkV1_5_0,
  VisualTooltip: VisualConfigurationVisualTooltip,
  StylePreset: VisualConfigurationStylePreset,
  VisualHeader: VisualContainerVisualHeader,
  VisualHeaderTooltip: VisualConfigurationVisualHeaderTooltip,
  VisualSyncGroup: VisualConfigurationVisualSyncGroup,
  VisualGroupConfig: VisualContainerVisualGroupConfigV1_0_0,
  GroupLayoutMode: VisualContainerGroupLayoutMode,
  VisualGroupFormattingObjects: VisualContainerVisualGroupFormattingObjectsV1_0_0,
  VisualGroupGeneralFormattingObjects: VisualContainerVisualGroupGeneralFormattingObjects,
  FilterConfig: VisualContainerFilterConfigV1_0_0,
  FilterContainer: VisualContainerFilterContainerV1_0_0,
  FilterContainerFormattingObjects: VisualContainerFilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties:
    VisualContainerFilterContainerFormattingObjectsProperties,
  Annotation: VisualContainerAnnotation,
} as const;

export type VisualContainerV1_0_0 =
  | ({
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_0_0;
      readonly visual: VisualContainerVisualConfigV1_0_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: VisualContainerFilterConfigV1_0_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotation>;
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
      readonly position: VisualContainerVisualContainerPositionV1_0_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV1_0_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: VisualContainerFilterConfigV1_0_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotation>;
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
    position: Schema.suspend(() => VisualContainerVisualContainerPositionV1_0_0),
    visual: Schema.suspend(() => VisualContainerVisualConfigV1_0_0),
    parentGroupName: Schema.optionalKey(Schema.String),
    filterConfig: Schema.optionalKey(Schema.suspend(() => VisualContainerFilterConfigV1_0_0)),
    isHidden: Schema.optionalKey(Schema.Boolean),
    annotations: Schema.optionalKey(Schema.Array(Schema.suspend(() => VisualContainerAnnotation))),
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
    position: Schema.suspend(() => VisualContainerVisualContainerPositionV1_0_0),
    visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV1_0_0),
    parentGroupName: Schema.optionalKey(Schema.String),
    filterConfig: Schema.optionalKey(Schema.suspend(() => VisualContainerFilterConfigV1_0_0)),
    isHidden: Schema.optionalKey(Schema.Boolean),
    annotations: Schema.optionalKey(Schema.Array(Schema.suspend(() => VisualContainerAnnotation))),
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
