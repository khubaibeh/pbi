import { Schema } from "effect";
import { closed } from "../shared.js";

export type VisualContainerMobileStateTitle = {
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

export const VisualContainerMobileStateTitle: Schema.Codec<VisualContainerMobileStateTitle> =
  closed({
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

export type VisualContainerMobileStateSubTitle = {
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

export const VisualContainerMobileStateSubTitle: Schema.Codec<VisualContainerMobileStateSubTitle> =
  closed({
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

export type VisualContainerMobileStateSpacing = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};

export const VisualContainerMobileStateSpacing: Schema.Codec<VisualContainerMobileStateSpacing> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });

export type VisualContainerMobileStateBackground = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};

export const VisualContainerMobileStateBackground: Schema.Codec<VisualContainerMobileStateBackground> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });

export type VisualContainerMobileStatePadding = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};

export const VisualContainerMobileStatePadding: Schema.Codec<VisualContainerMobileStatePadding> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });

export type VisualContainerMobileStateLockAspect = {
  readonly show?: Schema.Json;
};

export const VisualContainerMobileStateLockAspect: Schema.Codec<VisualContainerMobileStateLockAspect> =
  closed({ show: Schema.optionalKey(Schema.Json) });

export type VisualContainerMobileStateVisualContainerGeneralFormattingObjects = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};

export const VisualContainerMobileStateVisualContainerGeneralFormattingObjects: Schema.Codec<VisualContainerMobileStateVisualContainerGeneralFormattingObjects> =
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

export type VisualContainerMobileStateDropShadow = {
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

export const VisualContainerMobileStateDropShadow: Schema.Codec<VisualContainerMobileStateDropShadow> =
  closed({
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

export type VisualContainerMobileStateVisualLink = {
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

export const VisualContainerMobileStateVisualLink: Schema.Codec<VisualContainerMobileStateVisualLink> =
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
  });

export type VisualContainerMobileStateVisualTooltip = {
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

export const VisualContainerMobileStateVisualTooltip: Schema.Codec<VisualContainerMobileStateVisualTooltip> =
  closed({
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

export type VisualContainerMobileStateStylePreset = {
  readonly name?: Schema.Json;
};

export const VisualContainerMobileStateStylePreset: Schema.Codec<VisualContainerMobileStateStylePreset> =
  closed({ name: Schema.optionalKey(Schema.Json) });

export type VisualContainerMobileStateVisualHeaderTooltip = {
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

export const VisualContainerMobileStateVisualHeaderTooltip: Schema.Codec<VisualContainerMobileStateVisualHeaderTooltip> =
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

export type VisualContainerMobileStateVisualContainerPositionV1_0_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
};

export const VisualContainerMobileStateVisualContainerPositionV1_0_0: Schema.Codec<VisualContainerMobileStateVisualContainerPositionV1_0_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
  });

export type VisualContainerMobileStateDividerV1_1_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};

export const VisualContainerMobileStateDividerV1_1_0: Schema.Codec<VisualContainerMobileStateDividerV1_1_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });

export type VisualContainerMobileStateBorderV1_1_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};

export const VisualContainerMobileStateBorderV1_1_0: Schema.Codec<VisualContainerMobileStateBorderV1_1_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });

export type VisualContainerMobileStateVisualHeaderV1_1_0 = {
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

export const VisualContainerMobileStateVisualHeaderV1_1_0: Schema.Codec<VisualContainerMobileStateVisualHeaderV1_1_0> =
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

export type VisualContainerMobileStateVisualContainerPositionV1_2_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};

export const VisualContainerMobileStateVisualContainerPositionV1_2_0: Schema.Codec<VisualContainerMobileStateVisualContainerPositionV1_2_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });

export const VisualContainerMobileStateDefinitionsV1_3_0 = {
  VisualContainerPosition: VisualContainerMobileStateVisualContainerPositionV1_2_0,
} as const;
