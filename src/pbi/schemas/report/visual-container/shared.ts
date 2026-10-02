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
  VisualConfigurationEmbeddedBackground,
  VisualConfigurationEmbeddedLockAspect,
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

export type VisualContainerSortDirection = "Ascending" | "Descending";

export const VisualContainerSortDirection: Schema.Codec<VisualContainerSortDirection> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);

export type VisualContainerVisualQueryOptions = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};

export const VisualContainerVisualQueryOptions: Schema.Codec<VisualContainerVisualQueryOptions> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });

export type VisualContainerAILevelInformation = {
  readonly method: VisualContainerAIDecompositionMethod;
  readonly disabled?: boolean;
};

export const VisualContainerAILevelInformation: Schema.Codec<VisualContainerAILevelInformation> =
  closed({
    method: Schema.suspend(() => VisualContainerAIDecompositionMethod),
    disabled: Schema.optionalKey(Schema.Boolean),
  });

export type VisualContainerAIDecompositionMethod = "BestSplit" | "MaxSplit" | "MinSplit";

export const VisualContainerAIDecompositionMethod: Schema.Codec<VisualContainerAIDecompositionMethod> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);

export type VisualContainerTitle = {
  readonly show?: Schema.Json;
  readonly text?: Schema.Json;
  readonly heading?: Schema.Json;
  readonly titleWrap?: Schema.Json;
  readonly fontColor?: Schema.Json;
  readonly background?: Schema.Json;
  readonly alignment?: Schema.Json;
  readonly fontSize?: Schema.Json;
  readonly bold?: Schema.Json;
  readonly italic?: Schema.Json;
  readonly underline?: Schema.Json;
  readonly fontFamily?: Schema.Json;
};

export const VisualContainerTitle: Schema.Codec<VisualContainerTitle> = closed({
  show: Schema.optionalKey(Schema.Json),
  text: Schema.optionalKey(Schema.Json),
  heading: Schema.optionalKey(Schema.Json),
  titleWrap: Schema.optionalKey(Schema.Json),
  fontColor: Schema.optionalKey(Schema.Json),
  background: Schema.optionalKey(Schema.Json),
  alignment: Schema.optionalKey(Schema.Json),
  fontSize: Schema.optionalKey(Schema.Json),
  bold: Schema.optionalKey(Schema.Json),
  italic: Schema.optionalKey(Schema.Json),
  underline: Schema.optionalKey(Schema.Json),
  fontFamily: Schema.optionalKey(Schema.Json),
});

export type VisualContainerSubTitle = {
  readonly show?: Schema.Json;
  readonly text?: Schema.Json;
  readonly heading?: Schema.Json;
  readonly titleWrap?: Schema.Json;
  readonly fontColor?: Schema.Json;
  readonly alignment?: Schema.Json;
  readonly fontSize?: Schema.Json;
  readonly bold?: Schema.Json;
  readonly italic?: Schema.Json;
  readonly underline?: Schema.Json;
  readonly fontFamily?: Schema.Json;
};

export const VisualContainerSubTitle: Schema.Codec<VisualContainerSubTitle> = closed({
  show: Schema.optionalKey(Schema.Json),
  text: Schema.optionalKey(Schema.Json),
  heading: Schema.optionalKey(Schema.Json),
  titleWrap: Schema.optionalKey(Schema.Json),
  fontColor: Schema.optionalKey(Schema.Json),
  alignment: Schema.optionalKey(Schema.Json),
  fontSize: Schema.optionalKey(Schema.Json),
  bold: Schema.optionalKey(Schema.Json),
  italic: Schema.optionalKey(Schema.Json),
  underline: Schema.optionalKey(Schema.Json),
  fontFamily: Schema.optionalKey(Schema.Json),
});

export type VisualContainerSpacing = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};

export const VisualContainerSpacing: Schema.Codec<VisualContainerSpacing> = closed({
  customizeSpacing: Schema.optionalKey(Schema.Json),
  verticalSpacing: Schema.optionalKey(Schema.Json),
  spaceBelowTitle: Schema.optionalKey(Schema.Json),
  spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
  spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
});

export type VisualContainerBackground = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};

export const VisualContainerBackground: Schema.Codec<VisualContainerBackground> = closed({
  show: Schema.optionalKey(Schema.Json),
  color: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
});

export type VisualContainerPadding = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};

export const VisualContainerPadding: Schema.Codec<VisualContainerPadding> = closed({
  top: Schema.optionalKey(Schema.Json),
  bottom: Schema.optionalKey(Schema.Json),
  left: Schema.optionalKey(Schema.Json),
  right: Schema.optionalKey(Schema.Json),
});

export type VisualContainerLockAspect = {
  readonly show?: Schema.Json;
};

export const VisualContainerLockAspect: Schema.Codec<VisualContainerLockAspect> = closed({
  show: Schema.optionalKey(Schema.Json),
});

export type VisualContainerVisualContainerGeneralFormattingObjects = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};

export const VisualContainerVisualContainerGeneralFormattingObjects: Schema.Codec<VisualContainerVisualContainerGeneralFormattingObjects> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
    allowBinnedLineSample: Schema.optionalKey(Schema.Json),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Json),
    keepLayerOrder: Schema.optionalKey(Schema.Json),
  });

export type VisualContainerDropShadow = {
  readonly show?: Schema.Json;
  readonly preset?: Schema.Json;
  readonly position?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly shadowSpread?: Schema.Json;
  readonly shadowBlur?: Schema.Json;
  readonly angle?: Schema.Json;
  readonly shadowDistance?: Schema.Json;
};

export const VisualContainerDropShadow: Schema.Codec<VisualContainerDropShadow> = closed({
  show: Schema.optionalKey(Schema.Json),
  preset: Schema.optionalKey(Schema.Json),
  position: Schema.optionalKey(Schema.Json),
  color: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
  shadowSpread: Schema.optionalKey(Schema.Json),
  shadowBlur: Schema.optionalKey(Schema.Json),
  angle: Schema.optionalKey(Schema.Json),
  shadowDistance: Schema.optionalKey(Schema.Json),
});

export type VisualContainerVisualLink = {
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
};

export const VisualContainerVisualLink: Schema.Codec<VisualContainerVisualLink> = closed({
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
});

export type VisualContainerVisualTooltip = {
  readonly show?: Schema.Json;
  readonly type?: Schema.Json;
  readonly section?: Schema.Json;
  readonly titleFontColor?: Schema.Json;
  readonly valueFontColor?: Schema.Json;
  readonly fontSize?: Schema.Json;
  readonly bold?: Schema.Json;
  readonly italic?: Schema.Json;
  readonly underline?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly background?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly actionFontColor?: Schema.Json;
  readonly themedTitleFontColor?: Schema.Json;
  readonly themedBackground?: Schema.Json;
  readonly themedValueFontColor?: Schema.Json;
};

export const VisualContainerVisualTooltip: Schema.Codec<VisualContainerVisualTooltip> = closed({
  show: Schema.optionalKey(Schema.Json),
  type: Schema.optionalKey(Schema.Json),
  section: Schema.optionalKey(Schema.Json),
  titleFontColor: Schema.optionalKey(Schema.Json),
  valueFontColor: Schema.optionalKey(Schema.Json),
  fontSize: Schema.optionalKey(Schema.Json),
  bold: Schema.optionalKey(Schema.Json),
  italic: Schema.optionalKey(Schema.Json),
  underline: Schema.optionalKey(Schema.Json),
  fontFamily: Schema.optionalKey(Schema.Json),
  background: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
  actionFontColor: Schema.optionalKey(Schema.Json),
  themedTitleFontColor: Schema.optionalKey(Schema.Json),
  themedBackground: Schema.optionalKey(Schema.Json),
  themedValueFontColor: Schema.optionalKey(Schema.Json),
});

export type VisualContainerStylePreset = {
  readonly name?: Schema.Json;
};

export const VisualContainerStylePreset: Schema.Codec<VisualContainerStylePreset> = closed({
  name: Schema.optionalKey(Schema.Json),
});

export type VisualContainerVisualHeaderTooltip = {
  readonly type?: Schema.Json;
  readonly section?: Schema.Json;
  readonly text?: Schema.Json;
  readonly titleFontColor?: Schema.Json;
  readonly fontSize?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly bold?: Schema.Json;
  readonly italic?: Schema.Json;
  readonly underline?: Schema.Json;
  readonly background?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly themedTitleFontColor?: Schema.Json;
  readonly themedBackground?: Schema.Json;
};

export const VisualContainerVisualHeaderTooltip: Schema.Codec<VisualContainerVisualHeaderTooltip> =
  closed({
    type: Schema.optionalKey(Schema.Json),
    section: Schema.optionalKey(Schema.Json),
    text: Schema.optionalKey(Schema.Json),
    titleFontColor: Schema.optionalKey(Schema.Json),
    fontSize: Schema.optionalKey(Schema.Json),
    fontFamily: Schema.optionalKey(Schema.Json),
    bold: Schema.optionalKey(Schema.Json),
    italic: Schema.optionalKey(Schema.Json),
    underline: Schema.optionalKey(Schema.Json),
    background: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
    themedTitleFontColor: Schema.optionalKey(Schema.Json),
    themedBackground: Schema.optionalKey(Schema.Json),
  });

export type VisualContainerVisualSyncGroup = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};

export const VisualContainerVisualSyncGroup: Schema.Codec<VisualContainerVisualSyncGroup> = closed({
  groupName: Schema.String,
  fieldChanges: Schema.optionalKey(Schema.Boolean),
  filterChanges: Schema.optionalKey(Schema.Boolean),
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

export type VisualContainerDividerV1_1_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};

export const VisualContainerDividerV1_1_0: Schema.Codec<VisualContainerDividerV1_1_0> = closed({
  ignorePadding: Schema.optionalKey(Schema.Json),
  show: Schema.optionalKey(Schema.Json),
  color: Schema.optionalKey(Schema.Json),
  width: Schema.optionalKey(Schema.Json),
  style: Schema.optionalKey(Schema.Json),
});

export type VisualContainerBorderV1_1_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};

export const VisualContainerBorderV1_1_0: Schema.Codec<VisualContainerBorderV1_1_0> = closed({
  show: Schema.optionalKey(Schema.Json),
  color: Schema.optionalKey(Schema.Json),
  radius: Schema.optionalKey(Schema.Json),
  width: Schema.optionalKey(Schema.Json),
});

export type VisualContainerVisualHeaderV1_1_0 = {
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
  readonly showSetAlertButton?: Schema.Json;
  readonly showFollowVisualButton?: Schema.Json;
};

export const VisualContainerVisualHeaderV1_1_0: Schema.Codec<VisualContainerVisualHeaderV1_1_0> =
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
    showSetAlertButton: Schema.optionalKey(Schema.Json),
    showFollowVisualButton: Schema.optionalKey(Schema.Json),
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
  readonly query?: VisualContainerQueryV1_2_0;
  readonly expansionStates?: ReadonlyArray<VisualContainerExpansionStateV1_2_0>;
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualContainerVisualContainerFormattingObjectsV1_2_0;
  readonly syncGroup?: VisualContainerVisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualContainerVisualConfigV1_2_0: Schema.Codec<VisualContainerVisualConfigV1_2_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => VisualContainerQueryV1_2_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerExpansionStateV1_2_0)),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.DataViewObjectDefinitions),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualContainerFormattingObjectsV1_2_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualContainerVisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type VisualContainerQueryV1_2_0 = {
  readonly sortDefinition?: VisualContainerSortDefinitionV1_2_0;
  readonly options?: VisualContainerVisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: VisualContainerProjectionStateV1_2_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const VisualContainerQueryV1_2_0: Schema.Codec<VisualContainerQueryV1_2_0> = closed({
  sortDefinition: Schema.optionalKey(Schema.suspend(() => VisualContainerSortDefinitionV1_2_0)),
  options: Schema.optionalKey(Schema.suspend(() => VisualContainerVisualQueryOptions)),
  queryState: Schema.Record(
    Schema.String,
    Schema.suspend(() => VisualContainerProjectionStateV1_2_0),
  ),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type VisualContainerSortDefinitionV1_2_0 = {
  readonly sort?: ReadonlyArray<VisualContainerQuerySortV1_2_0>;
  readonly isDefaultSort?: boolean;
};

export const VisualContainerSortDefinitionV1_2_0: Schema.Codec<VisualContainerSortDefinitionV1_2_0> =
  closed({
    sort: Schema.optionalKey(Schema.Array(Schema.suspend(() => VisualContainerQuerySortV1_2_0))),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });

export type VisualContainerQuerySortV1_2_0 = {
  readonly field: QueryExpressionContainerV1_2_0;
  readonly direction: VisualContainerSortDirection;
};

export const VisualContainerQuerySortV1_2_0: Schema.Codec<VisualContainerQuerySortV1_2_0> = closed({
  field: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  direction: Schema.suspend(() => VisualContainerSortDirection),
});

export type VisualContainerProjectionStateV1_2_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualContainerRoleProjectionV1_2_0>;
  readonly fieldParameters?: ReadonlyArray<VisualContainerRoleFieldParameterV1_2_0>;
};

export const VisualContainerProjectionStateV1_2_0: Schema.Codec<VisualContainerProjectionStateV1_2_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(Schema.suspend(() => VisualContainerRoleProjectionV1_2_0)),
    fieldParameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerRoleFieldParameterV1_2_0)),
    ),
  });

export type VisualContainerRoleProjectionV1_2_0 = {
  readonly field: QueryExpressionContainerV1_2_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};

export const VisualContainerRoleProjectionV1_2_0: Schema.Codec<VisualContainerRoleProjectionV1_2_0> =
  closed({
    field: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    queryRef: Schema.String,
    nativeQueryRef: Schema.optionalKey(Schema.String),
    displayName: Schema.optionalKey(Schema.String),
    format: Schema.optionalKey(Schema.String.check(Schema.isMaxCodePoints(255))),
    active: Schema.optionalKey(Schema.Boolean),
    hidden: Schema.optionalKey(Schema.Boolean),
  });

export type VisualContainerRoleFieldParameterV1_2_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
};

export const VisualContainerRoleFieldParameterV1_2_0: Schema.Codec<VisualContainerRoleFieldParameterV1_2_0> =
  closed({
    parameterExpr: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });

export type VisualContainerExpansionStateV1_2_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualContainerRootExpansionStateV1_2_0;
  readonly levels?: ReadonlyArray<VisualContainerLevelExpansionStateV1_2_0>;
};

export const VisualContainerExpansionStateV1_2_0: Schema.Codec<VisualContainerExpansionStateV1_2_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(Schema.suspend(() => VisualContainerRootExpansionStateV1_2_0)),
    levels: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerLevelExpansionStateV1_2_0)),
    ),
  });

export type VisualContainerRootExpansionStateV1_2_0 = {
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualContainerNodeExpansionStateV1_2_0>;
};

export const VisualContainerRootExpansionStateV1_2_0: Schema.Codec<VisualContainerRootExpansionStateV1_2_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerNodeExpansionStateV1_2_0)),
    ),
  });

export type VisualContainerNodeExpansionStateV1_2_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualContainerNodeExpansionStateV1_2_0>;
};

export const VisualContainerNodeExpansionStateV1_2_0: Schema.Codec<VisualContainerNodeExpansionStateV1_2_0> =
  closed({
    identityValues: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerNodeExpansionStateV1_2_0)),
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
    readonly properties: VisualContainerTitle;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerSubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerDividerV1_1_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerSpacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerPadding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerBorderV1_1_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerDropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualLink;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerStylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualHeaderV1_1_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualHeaderTooltip;
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
          properties: Schema.suspend(() => VisualContainerTitle),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerSubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerDividerV1_1_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerSpacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerPadding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerVisualContainerGeneralFormattingObjects),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerBorderV1_1_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerDropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerVisualLink),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerVisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerStylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerVisualHeaderV1_1_0),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerVisualHeaderTooltip),
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
    readonly properties: VisualContainerBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerLockAspect;
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
          properties: Schema.suspend(() => VisualContainerBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerLockAspect),
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
  Query: VisualContainerQueryV1_2_0,
  SortDefinition: VisualContainerSortDefinitionV1_2_0,
  QuerySort: VisualContainerQuerySortV1_2_0,
  SortDirection: VisualContainerSortDirection,
  VisualQueryOptions: VisualContainerVisualQueryOptions,
  ProjectionState: VisualContainerProjectionStateV1_2_0,
  RoleProjection: VisualContainerRoleProjectionV1_2_0,
  RoleFieldParameter: VisualContainerRoleFieldParameterV1_2_0,
  ExpansionState: VisualContainerExpansionStateV1_2_0,
  RootExpansionState: VisualContainerRootExpansionStateV1_2_0,
  NodeExpansionState: VisualContainerNodeExpansionStateV1_2_0,
  LevelExpansionState: VisualContainerLevelExpansionStateV1_2_0,
  AILevelInformation: VisualContainerAILevelInformation,
  AIDecompositionMethod: VisualContainerAIDecompositionMethod,
  VisualContainerFormattingObjects: VisualContainerVisualContainerFormattingObjectsV1_2_0,
  Title: VisualContainerTitle,
  SubTitle: VisualContainerSubTitle,
  Divider: VisualContainerDividerV1_1_0,
  Spacing: VisualContainerSpacing,
  Background: VisualContainerBackground,
  Padding: VisualContainerPadding,
  LockAspect: VisualContainerLockAspect,
  VisualContainerGeneralFormattingObjects: VisualContainerVisualContainerGeneralFormattingObjects,
  Border: VisualContainerBorderV1_1_0,
  DropShadow: VisualContainerDropShadow,
  VisualLink: VisualContainerVisualLink,
  VisualTooltip: VisualContainerVisualTooltip,
  StylePreset: VisualContainerStylePreset,
  VisualHeader: VisualContainerVisualHeaderV1_1_0,
  VisualHeaderTooltip: VisualContainerVisualHeaderTooltip,
  VisualSyncGroup: VisualContainerVisualSyncGroup,
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
    readonly properties: VisualConfigurationEmbeddedBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationEmbeddedLockAspect;
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
          properties: Schema.suspend(() => VisualConfigurationEmbeddedBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationEmbeddedLockAspect),
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
    readonly properties: VisualConfigurationEmbeddedBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationEmbeddedLockAspect;
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
          properties: Schema.suspend(() => VisualConfigurationEmbeddedBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationEmbeddedLockAspect),
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
    readonly properties: VisualConfigurationEmbeddedBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationEmbeddedLockAspect;
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
          properties: Schema.suspend(() => VisualConfigurationEmbeddedBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_4_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationEmbeddedLockAspect),
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
    readonly properties: VisualConfigurationEmbeddedBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationEmbeddedLockAspect;
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
          properties: Schema.suspend(() => VisualConfigurationEmbeddedBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationEmbeddedLockAspect),
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
