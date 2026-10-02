import { Schema } from "effect";
import { closed } from "../shared.js";
import { FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0, FormattingObjectDefinitionsDefinitionsV1_0_0, FormattingObjectDefinitionsSelectorV1_0_0 } from "../formatting-object-definitions/shared.js";
import { FilterDefinitionV1_0_0, QueryExpressionContainerV1_0_0 } from "../semantic-query/shared.js";
import { VisualContainerAIDecompositionMethod, VisualContainerAILevelInformation, VisualContainerAnnotation, VisualContainerBackground, VisualContainerDropShadow, VisualContainerFilterContainerFormattingObjectsProperties, VisualContainerGroupLayoutMode, VisualContainerLockAspect, VisualContainerPadding, VisualContainerSortDirection, VisualContainerSpacing, VisualContainerStylePreset, VisualContainerSubTitle, VisualContainerTitle, VisualContainerVisualContainerGeneralFormattingObjects, VisualContainerVisualContainerPositionV1_0_0, VisualContainerVisualGroupGeneralFormattingObjects, VisualContainerVisualHeaderTooltip, VisualContainerVisualLink, VisualContainerVisualQueryOptions, VisualContainerVisualSyncGroup, VisualContainerVisualTooltip } from "./shared.js";

export type VisualContainerVisualConfigV1_0_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualContainerQueryV1_0_0;
  readonly expansionStates?: ReadonlyArray<VisualContainerExpansionStateV1_0_0>;
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0;
  readonly visualContainerObjects?: VisualContainerVisualContainerFormattingObjectsV1_0_0;
  readonly syncGroup?: VisualContainerVisualSyncGroup;
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
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_0_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualContainerVisualContainerFormattingObjectsV1_0_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualSyncGroup),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type VisualContainerQueryV1_0_0 = {
  readonly sortDefinition?: VisualContainerSortDefinitionV1_0_0;
  readonly options?: VisualContainerVisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: VisualContainerProjectionStateV1_0_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const VisualContainerQueryV1_0_0: Schema.Codec<VisualContainerQueryV1_0_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualContainerSortDefinitionV1_0_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualQueryOptions),
    ),
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
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerQuerySortV1_0_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });

export type VisualContainerQuerySortV1_0_0 = {
  readonly field: QueryExpressionContainerV1_0_0;
  readonly direction: VisualContainerSortDirection;
};

export const VisualContainerQuerySortV1_0_0: Schema.Codec<VisualContainerQuerySortV1_0_0> =
  closed({
    field: Schema.suspend(
      () => QueryExpressionContainerV1_0_0,
    ),
    direction: Schema.suspend(() => VisualContainerSortDirection),
  });

export type VisualContainerProjectionStateV1_0_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualContainerRoleProjectionV1_0_0>;
  readonly fieldParameters?: ReadonlyArray<VisualContainerRoleFieldParameterV1_0_0>;
};

export const VisualContainerProjectionStateV1_0_0: Schema.Codec<VisualContainerProjectionStateV1_0_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualContainerRoleProjectionV1_0_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerRoleFieldParameterV1_0_0),
      ),
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
    field: Schema.suspend(
      () => QueryExpressionContainerV1_0_0,
    ),
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
    parameterExpr: Schema.suspend(
      () => QueryExpressionContainerV1_0_0,
    ),
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
    root: Schema.optionalKey(
      Schema.suspend(() => VisualContainerRootExpansionStateV1_0_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerLevelExpansionStateV1_0_0),
      ),
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
      Schema.Array(
        Schema.suspend(
          () => QueryExpressionContainerV1_0_0,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerNodeExpansionStateV1_0_0),
      ),
    ),
  });

export type VisualContainerNodeExpansionStateV1_0_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualContainerNodeExpansionStateV1_0_0>;
};

export const VisualContainerNodeExpansionStateV1_0_0: Schema.Codec<VisualContainerNodeExpansionStateV1_0_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => QueryExpressionContainerV1_0_0,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerNodeExpansionStateV1_0_0),
      ),
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
      Schema.Array(
        Schema.suspend(
          () => QueryExpressionContainerV1_0_0,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualContainerAILevelInformation),
    ),
  });

export type VisualContainerVisualContainerFormattingObjectsV1_0_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerTitle;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerSubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerDividerV1_0_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerSpacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerPadding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerVisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerBorderV1_0_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerDropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerVisualLink;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerVisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerStylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerVisualHeaderV1_0_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerVisualHeaderTooltip;
  }>;
};

export const VisualContainerVisualContainerFormattingObjectsV1_0_0: Schema.Codec<VisualContainerVisualContainerFormattingObjectsV1_0_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerTitle),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerSubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerDividerV1_0_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerSpacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerPadding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerVisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerBorderV1_0_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerDropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerVisualLink),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerVisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerStylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerVisualHeaderV1_0_0),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerVisualHeaderTooltip,
          ),
        }),
      ),
    ),
  });

export type VisualContainerDividerV1_0_0 = {
  readonly show?: Schema.Json;
  readonly ignorePadding?: Schema.Json;
  readonly color?: Schema.Json;
  readonly style?: Schema.Json;
  readonly width?: Schema.Json;
};

export const VisualContainerDividerV1_0_0: Schema.Codec<VisualContainerDividerV1_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    ignorePadding: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });

export type VisualContainerBorderV1_0_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
};

export const VisualContainerBorderV1_0_0: Schema.Codec<VisualContainerBorderV1_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
  });

export type VisualContainerVisualHeaderV1_0_0 = {
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

export const VisualContainerVisualHeaderV1_0_0: Schema.Codec<VisualContainerVisualHeaderV1_0_0> =
  closed({
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
    readonly properties: VisualContainerBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerLockAspect;
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
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerVisualGroupGeneralFormattingObjects,
          ),
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
  readonly howCreated?:
    "Auto" | "User" | "Drill" | "Include" | "Exclude" | "Drillthrough";
  readonly isHiddenInViewMode?: boolean;
  readonly isLockedInViewMode?: boolean;
  readonly objects?: VisualContainerFilterContainerFormattingObjectsV1_0_0;
};

export const VisualContainerFilterContainerV1_0_0: Schema.Codec<VisualContainerFilterContainerV1_0_0> =
  closed({
    name: Schema.String,
    displayName: Schema.optionalKey(Schema.String),
    ordinal: Schema.optionalKey(Schema.Finite),
    field: Schema.optionalKey(
      Schema.suspend(
        () => QueryExpressionContainerV1_0_0,
      ),
    ),
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
    filter: Schema.optionalKey(
      Schema.suspend(
        () => FilterDefinitionV1_0_0,
      ),
    ),
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
      Schema.suspend(
        () => VisualContainerFilterContainerFormattingObjectsV1_0_0,
      ),
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
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualContainerFilterContainerFormattingObjectsProperties,
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
  SortDirection: VisualContainerSortDirection,
  VisualQueryOptions: VisualContainerVisualQueryOptions,
  ProjectionState: VisualContainerProjectionStateV1_0_0,
  RoleProjection: VisualContainerRoleProjectionV1_0_0,
  RoleFieldParameter: VisualContainerRoleFieldParameterV1_0_0,
  ExpansionState: VisualContainerExpansionStateV1_0_0,
  RootExpansionState: VisualContainerRootExpansionStateV1_0_0,
  NodeExpansionState: VisualContainerNodeExpansionStateV1_0_0,
  LevelExpansionState: VisualContainerLevelExpansionStateV1_0_0,
  AILevelInformation: VisualContainerAILevelInformation,
  AIDecompositionMethod: VisualContainerAIDecompositionMethod,
  VisualContainerFormattingObjects:
    VisualContainerVisualContainerFormattingObjectsV1_0_0,
  Title: VisualContainerTitle,
  SubTitle: VisualContainerSubTitle,
  Divider: VisualContainerDividerV1_0_0,
  Spacing: VisualContainerSpacing,
  Background: VisualContainerBackground,
  Padding: VisualContainerPadding,
  LockAspect: VisualContainerLockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualContainerVisualContainerGeneralFormattingObjects,
  Border: VisualContainerBorderV1_0_0,
  DropShadow: VisualContainerDropShadow,
  VisualLink: VisualContainerVisualLink,
  VisualTooltip: VisualContainerVisualTooltip,
  StylePreset: VisualContainerStylePreset,
  VisualHeader: VisualContainerVisualHeaderV1_0_0,
  VisualHeaderTooltip: VisualContainerVisualHeaderTooltip,
  VisualSyncGroup: VisualContainerVisualSyncGroup,
  VisualGroupConfig: VisualContainerVisualGroupConfigV1_0_0,
  GroupLayoutMode: VisualContainerGroupLayoutMode,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV1_0_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjects,
  FilterConfig: VisualContainerFilterConfigV1_0_0,
  FilterContainer: VisualContainerFilterContainerV1_0_0,
  FilterContainerFormattingObjects:
    VisualContainerFilterContainerFormattingObjectsV1_0_0,
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

export const VisualContainerV1_0_0: Schema.Codec<VisualContainerV1_0_0> =
  Schema.Union([
    closed({
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_0_0,
      ),
      visual: Schema.suspend(() => VisualContainerVisualConfigV1_0_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => VisualContainerFilterConfigV1_0_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotation)),
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
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_0_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV1_0_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => VisualContainerFilterConfigV1_0_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotation)),
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
