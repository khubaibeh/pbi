import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0,
  FormattingObjectDefinitionsDefinitionsV1_2_0,
  FormattingObjectDefinitionsDefinitionsV1_3_0,
  FormattingObjectDefinitionsDefinitionsV1_4_0,
  FormattingObjectDefinitionsDefinitionsV1_5_0,
  FormattingObjectDefinitionsSelectorV1_2_0,
  FormattingObjectDefinitionsSelectorV1_3_0,
  FormattingObjectDefinitionsSelectorV1_4_0,
  FormattingObjectDefinitionsSelectorV1_5_0,
} from "../formatting-object-definitions/shared.js";
import {
  FilterDefinitionV1_2_0,
  QueryExpressionContainerV1_2_0,
} from "../semantic-query/shared.js";
import {
  VisualConfigurationAIDecompositionMethod,
  VisualConfigurationBackground,
  VisualConfigurationBorder,
  VisualConfigurationDivider,
  VisualConfigurationDropShadow,
  VisualConfigurationLockAspect,
  VisualConfigurationNodeExpansionStateV1_5_0,
  VisualConfigurationPadding,
  VisualConfigurationProjectionStateV1_5_0,
  VisualConfigurationQuerySortV1_5_0,
  VisualConfigurationQueryV1_5_0,
  VisualConfigurationRoleFieldParameterV1_5_0,
  VisualConfigurationRoleProjectionV1_5_0,
  VisualConfigurationRootExpansionStateV1_5_0,
  VisualConfigurationSortDefinitionV1_5_0,
  VisualConfigurationSortDirection,
  VisualConfigurationSpacing,
  VisualConfigurationStylePreset,
  VisualConfigurationSubTitle,
  VisualConfigurationTitle,
  VisualConfigurationVisualContainerGeneralFormattingObjects,
  VisualConfigurationVisualHeader,
  VisualConfigurationVisualHeaderTooltip,
  VisualConfigurationVisualLinkV1_5_0,
  VisualConfigurationVisualQueryOptions,
  VisualConfigurationVisualSyncGroup,
  VisualConfigurationVisualTooltip,
} from "../visual-configuration/shared.js";

export type VisualContainerVisualContainerPositionV1_0_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
};

export const VisualContainerVisualContainerPositionV1_0_0: Schema.Codec<VisualContainerVisualContainerPositionV1_0_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
  });

export type VisualContainerAILevelInformation = {
  readonly method: VisualConfigurationAIDecompositionMethod;
  readonly disabled?: boolean;
};

export const VisualContainerAILevelInformation: Schema.Codec<VisualContainerAILevelInformation> =
  closed({
    method: Schema.suspend(() => VisualConfigurationAIDecompositionMethod),
    disabled: Schema.optionalKey(Schema.Boolean),
  });

export type VisualContainerDivider = {
  readonly show?: Schema.Json;
  readonly ignorePadding?: Schema.Json;
  readonly color?: Schema.Json;
  readonly style?: Schema.Json;
  readonly width?: Schema.Json;
};

export const VisualContainerDivider: Schema.Codec<VisualContainerDivider> = closed({
  show: Schema.optionalKey(Schema.Json),
  ignorePadding: Schema.optionalKey(Schema.Json),
  color: Schema.optionalKey(Schema.Json),
  style: Schema.optionalKey(Schema.Json),
  width: Schema.optionalKey(Schema.Json),
});

export type VisualContainerBorder = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
};

export const VisualContainerBorder: Schema.Codec<VisualContainerBorder> = closed({
  show: Schema.optionalKey(Schema.Json),
  color: Schema.optionalKey(Schema.Json),
  radius: Schema.optionalKey(Schema.Json),
});

export type VisualContainerVisualHeader = {
  readonly show?: Schema.Json;
  readonly background?: Schema.Json;
  readonly border?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly foreground?: Schema.Json;
  readonly showVisualInformationButton?: Schema.Json;
  readonly showVisualWarningButton?: Schema.Json;
  readonly showVisualErrorButton?: Schema.Json;
  readonly showDrillRoleSelector?: Schema.Json;
  readonly showDrillUpButton?: Schema.Json;
  readonly showDrillToggleButton?: Schema.Json;
  readonly showDrillDownLevelButton?: Schema.Json;
  readonly showDrillDownExpandButton?: Schema.Json;
  readonly showPinButton?: Schema.Json;
  readonly showFilterRestatementButton?: Schema.Json;
  readonly showFocusModeButton?: Schema.Json;
  readonly showCopyVisualImageButton?: Schema.Json;
  readonly showSeeDataLayoutToggleButton?: Schema.Json;
  readonly showOptionsMenu?: Schema.Json;
  readonly showCommentButton?: Schema.Json;
  readonly showTooltipButton?: Schema.Json;
  readonly showPersonalizeVisualButton?: Schema.Json;
  readonly showSmartNarrativeButton?: Schema.Json;
};

export const VisualContainerVisualHeader: Schema.Codec<VisualContainerVisualHeader> = closed({
  show: Schema.optionalKey(Schema.Json),
  background: Schema.optionalKey(Schema.Json),
  border: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
  foreground: Schema.optionalKey(Schema.Json),
  showVisualInformationButton: Schema.optionalKey(Schema.Json),
  showVisualWarningButton: Schema.optionalKey(Schema.Json),
  showVisualErrorButton: Schema.optionalKey(Schema.Json),
  showDrillRoleSelector: Schema.optionalKey(Schema.Json),
  showDrillUpButton: Schema.optionalKey(Schema.Json),
  showDrillToggleButton: Schema.optionalKey(Schema.Json),
  showDrillDownLevelButton: Schema.optionalKey(Schema.Json),
  showDrillDownExpandButton: Schema.optionalKey(Schema.Json),
  showPinButton: Schema.optionalKey(Schema.Json),
  showFilterRestatementButton: Schema.optionalKey(Schema.Json),
  showFocusModeButton: Schema.optionalKey(Schema.Json),
  showCopyVisualImageButton: Schema.optionalKey(Schema.Json),
  showSeeDataLayoutToggleButton: Schema.optionalKey(Schema.Json),
  showOptionsMenu: Schema.optionalKey(Schema.Json),
  showCommentButton: Schema.optionalKey(Schema.Json),
  showTooltipButton: Schema.optionalKey(Schema.Json),
  showPersonalizeVisualButton: Schema.optionalKey(Schema.Json),
  showSmartNarrativeButton: Schema.optionalKey(Schema.Json),
});

export type VisualContainerGroupLayoutMode = "ScaleMode" | "ScrollMode";

export const VisualContainerGroupLayoutMode: Schema.Codec<VisualContainerGroupLayoutMode> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);

export type VisualContainerVisualGroupGeneralFormattingObjects = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};

export const VisualContainerVisualGroupGeneralFormattingObjects: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjects> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });

export type VisualContainerFilterContainerFormattingObjectsProperties = {
  readonly requireSingleSelect?: Schema.Json;
  readonly isInvertedSelectionMode?: Schema.Json;
};

export const VisualContainerFilterContainerFormattingObjectsProperties: Schema.Codec<VisualContainerFilterContainerFormattingObjectsProperties> =
  closed({
    requireSingleSelect: Schema.optionalKey(Schema.Json),
    isInvertedSelectionMode: Schema.optionalKey(Schema.Json),
  });

export type VisualContainerAnnotation = {
  readonly name: string;
  readonly value: string;
};

export const VisualContainerAnnotation: Schema.Codec<VisualContainerAnnotation> = closed({
  name: Schema.String,
  value: Schema.String,
});

export type VisualContainerVisualContainerPositionV1_2_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};

export const VisualContainerVisualContainerPositionV1_2_0: Schema.Codec<VisualContainerVisualContainerPositionV1_2_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });

export type VisualContainerVisualConfigV1_2_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV1_5_0;
  readonly expansionStates?: ReadonlyArray<VisualContainerExpansionStateV1_2_0>;
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualContainerVisualContainerFormattingObjectsV1_2_0;
  readonly syncGroup?: VisualConfigurationVisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualContainerVisualConfigV1_2_0: Schema.Codec<VisualContainerVisualConfigV1_2_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => VisualConfigurationQueryV1_5_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerExpansionStateV1_2_0)),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.DataViewObjectDefinitions),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualContainerFormattingObjectsV1_2_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualConfigurationVisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type VisualContainerExpansionStateV1_2_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationRootExpansionStateV1_5_0;
  readonly levels?: ReadonlyArray<VisualContainerLevelExpansionStateV1_2_0>;
};

export const VisualContainerExpansionStateV1_2_0: Schema.Codec<VisualContainerExpansionStateV1_2_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(Schema.suspend(() => VisualConfigurationRootExpansionStateV1_5_0)),
    levels: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerLevelExpansionStateV1_2_0)),
    ),
  });

export type VisualContainerLevelExpansionStateV1_2_0 = {
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualContainerAILevelInformation;
};

export const VisualContainerLevelExpansionStateV1_2_0: Schema.Codec<VisualContainerLevelExpansionStateV1_2_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(Schema.suspend(() => VisualContainerAILevelInformation)),
  });

export type VisualContainerVisualContainerFormattingObjectsV1_2_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationTitle;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationSubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationDivider;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationSpacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationPadding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationBorder;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationDropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualLinkV1_5_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationStylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualHeader;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualHeaderTooltip;
  }>;
};

export const VisualContainerVisualContainerFormattingObjectsV1_2_0: Schema.Codec<VisualContainerVisualContainerFormattingObjectsV1_2_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationTitle),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationSubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationDivider),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationSpacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationPadding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
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
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationBorder),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationDropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV1_5_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationStylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualHeader),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualHeaderTooltip),
        }),
      ),
    ),
  });

export type VisualContainerVisualGroupConfigV1_2_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutMode;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV1_2_0;
};

export const VisualContainerVisualGroupConfigV1_2_0: Schema.Codec<VisualContainerVisualGroupConfigV1_2_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutMode),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV1_2_0),
    ),
  });

export type VisualContainerVisualGroupFormattingObjectsV1_2_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjects;
  }>;
};

export const VisualContainerVisualGroupFormattingObjectsV1_2_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV1_2_0> =
  closed({
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerVisualGroupGeneralFormattingObjects),
        }),
      ),
    ),
  });

export type VisualContainerFilterConfigV1_2_0 = {
  readonly filters?: ReadonlyArray<VisualContainerFilterContainerV1_2_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};

export const VisualContainerFilterConfigV1_2_0: Schema.Codec<VisualContainerFilterConfigV1_2_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerFilterContainerV1_2_0)),
    ),
    filterSortOrder: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Ascending"),
        Schema.Literal("Descending"),
        Schema.Literal("Custom"),
      ]),
    ),
  });

export type VisualContainerFilterContainerV1_2_0 = {
  readonly name: string;
  readonly displayName?: string;
  readonly ordinal?: number;
  readonly field?: QueryExpressionContainerV1_2_0;
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
    | "RelativeTime"
    | "VisualTopN";
  readonly filter?: FilterDefinitionV1_2_0;
  readonly restatement?: string;
  readonly howCreated?: "Auto" | "User" | "Drill" | "Include" | "Exclude" | "Drillthrough";
  readonly isHiddenInViewMode?: boolean;
  readonly isLockedInViewMode?: boolean;
  readonly objects?: VisualContainerFilterContainerFormattingObjectsV1_2_0;
};

export const VisualContainerFilterContainerV1_2_0: Schema.Codec<VisualContainerFilterContainerV1_2_0> =
  closed({
    name: Schema.String,
    displayName: Schema.optionalKey(Schema.String),
    ordinal: Schema.optionalKey(Schema.Finite),
    field: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
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
        Schema.Literal("VisualTopN"),
      ]),
    ),
    filter: Schema.optionalKey(Schema.suspend(() => FilterDefinitionV1_2_0)),
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
      Schema.suspend(() => VisualContainerFilterContainerFormattingObjectsV1_2_0),
    ),
  });

export type VisualContainerFilterContainerFormattingObjectsV1_2_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerFilterContainerFormattingObjectsProperties;
  }>;
};

export const VisualContainerFilterContainerFormattingObjectsV1_2_0: Schema.Codec<VisualContainerFilterContainerFormattingObjectsV1_2_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(
            () => VisualContainerFilterContainerFormattingObjectsProperties,
          ),
        }),
      ),
    ),
  });

export const VisualContainerDefinitionsV1_2_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_2_0,
  VisualConfig: VisualContainerVisualConfigV1_2_0,
  Query: VisualConfigurationQueryV1_5_0,
  SortDefinition: VisualConfigurationSortDefinitionV1_5_0,
  QuerySort: VisualConfigurationQuerySortV1_5_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualConfigurationVisualQueryOptions,
  ProjectionState: VisualConfigurationProjectionStateV1_5_0,
  RoleProjection: VisualConfigurationRoleProjectionV1_5_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV1_5_0,
  ExpansionState: VisualContainerExpansionStateV1_2_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV1_5_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV1_5_0,
  LevelExpansionState: VisualContainerLevelExpansionStateV1_2_0,
  AILevelInformation: VisualContainerAILevelInformation,
  AIDecompositionMethod: VisualConfigurationAIDecompositionMethod,
  VisualContainerFormattingObjects: VisualContainerVisualContainerFormattingObjectsV1_2_0,
  Title: VisualConfigurationTitle,
  SubTitle: VisualConfigurationSubTitle,
  Divider: VisualConfigurationDivider,
  Spacing: VisualConfigurationSpacing,
  Background: VisualConfigurationBackground,
  Padding: VisualConfigurationPadding,
  LockAspect: VisualConfigurationLockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationVisualContainerGeneralFormattingObjects,
  Border: VisualConfigurationBorder,
  DropShadow: VisualConfigurationDropShadow,
  VisualLink: VisualConfigurationVisualLinkV1_5_0,
  VisualTooltip: VisualConfigurationVisualTooltip,
  StylePreset: VisualConfigurationStylePreset,
  VisualHeader: VisualConfigurationVisualHeader,
  VisualHeaderTooltip: VisualConfigurationVisualHeaderTooltip,
  VisualSyncGroup: VisualConfigurationVisualSyncGroup,
  VisualGroupConfig: VisualContainerVisualGroupConfigV1_2_0,
  GroupLayoutMode: VisualContainerGroupLayoutMode,
  VisualGroupFormattingObjects: VisualContainerVisualGroupFormattingObjectsV1_2_0,
  VisualGroupGeneralFormattingObjects: VisualContainerVisualGroupGeneralFormattingObjects,
  FilterConfig: VisualContainerFilterConfigV1_2_0,
  FilterContainer: VisualContainerFilterContainerV1_2_0,
  FilterContainerFormattingObjects: VisualContainerFilterContainerFormattingObjectsV1_2_0,
  FilterContainerFormattingObjectsProperties:
    VisualContainerFilterContainerFormattingObjectsProperties,
  Annotation: VisualContainerAnnotation,
} as const;

export type VisualContainerVisualGroupConfigV1_5_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutMode;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV1_5_0;
};

export const VisualContainerVisualGroupConfigV1_5_0: Schema.Codec<VisualContainerVisualGroupConfigV1_5_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutMode),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV1_5_0),
    ),
  });

export type VisualContainerVisualGroupFormattingObjectsV1_5_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjects;
  }>;
};

export const VisualContainerVisualGroupFormattingObjectsV1_5_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV1_5_0> =
  closed({
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerVisualGroupGeneralFormattingObjects),
        }),
      ),
    ),
  });

export const VisualContainerDefinitionsV1_5_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_2_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV1_5_0,
  GroupLayoutMode: VisualContainerGroupLayoutMode,
  VisualGroupFormattingObjects: VisualContainerVisualGroupFormattingObjectsV1_5_0,
  VisualGroupGeneralFormattingObjects: VisualContainerVisualGroupGeneralFormattingObjects,
  Annotation: VisualContainerAnnotation,
} as const;

export type VisualContainerVisualGroupConfigV1_8_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutMode;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV1_8_0;
};

export const VisualContainerVisualGroupConfigV1_8_0: Schema.Codec<VisualContainerVisualGroupConfigV1_8_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutMode),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV1_8_0),
    ),
  });

export type VisualContainerVisualGroupFormattingObjectsV1_8_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjects;
  }>;
};

export const VisualContainerVisualGroupFormattingObjectsV1_8_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV1_8_0> =
  closed({
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerVisualGroupGeneralFormattingObjects),
        }),
      ),
    ),
  });

export const VisualContainerDefinitionsV1_8_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_2_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV1_8_0,
  GroupLayoutMode: VisualContainerGroupLayoutMode,
  VisualGroupFormattingObjects: VisualContainerVisualGroupFormattingObjectsV1_8_0,
  VisualGroupGeneralFormattingObjects: VisualContainerVisualGroupGeneralFormattingObjects,
  Annotation: VisualContainerAnnotation,
} as const;

export type VisualContainerVisualGroupConfigV2_1_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutMode;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV2_1_0;
};

export const VisualContainerVisualGroupConfigV2_1_0: Schema.Codec<VisualContainerVisualGroupConfigV2_1_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutMode),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV2_1_0),
    ),
  });

export type VisualContainerVisualGroupFormattingObjectsV2_1_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjects;
  }>;
};

export const VisualContainerVisualGroupFormattingObjectsV2_1_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV2_1_0> =
  closed({
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_4_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_4_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_4_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerVisualGroupGeneralFormattingObjects),
        }),
      ),
    ),
  });

export const VisualContainerDefinitionsV2_1_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_2_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV2_1_0,
  GroupLayoutMode: VisualContainerGroupLayoutMode,
  VisualGroupFormattingObjects: VisualContainerVisualGroupFormattingObjectsV2_1_0,
  VisualGroupGeneralFormattingObjects: VisualContainerVisualGroupGeneralFormattingObjects,
  Annotation: VisualContainerAnnotation,
} as const;

export type VisualContainerVisualGroupConfigV2_7_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutMode;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV2_7_0;
};

export const VisualContainerVisualGroupConfigV2_7_0: Schema.Codec<VisualContainerVisualGroupConfigV2_7_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutMode),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV2_7_0),
    ),
  });

export type VisualContainerVisualGroupFormattingObjectsV2_7_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjects;
  }>;
};

export const VisualContainerVisualGroupFormattingObjectsV2_7_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV2_7_0> =
  closed({
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerVisualGroupGeneralFormattingObjects),
        }),
      ),
    ),
  });

export const VisualContainerDefinitionsV2_7_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_2_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV2_7_0,
  GroupLayoutMode: VisualContainerGroupLayoutMode,
  VisualGroupFormattingObjects: VisualContainerVisualGroupFormattingObjectsV2_7_0,
  VisualGroupGeneralFormattingObjects: VisualContainerVisualGroupGeneralFormattingObjects,
  Annotation: VisualContainerAnnotation,
} as const;
