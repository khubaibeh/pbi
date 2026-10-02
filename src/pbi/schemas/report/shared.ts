import { Schema } from "effect";

export type FilterContainerFormattingProperties = {
  readonly requireSingleSelect?: Schema.Json;
  readonly isInvertedSelectionMode?: Schema.Json;
};

export const FilterContainerFormattingProperties: Schema.Codec<FilterContainerFormattingProperties> =
  closed({
    requireSingleSelect: Schema.optionalKey(Schema.Json),
    isInvertedSelectionMode: Schema.optionalKey(Schema.Json),
  });

export type Annotation = {
  readonly name: string;
  readonly value: string;
};

export const Annotation: Schema.Codec<Annotation> = closed({
  name: Schema.String,
  value: Schema.String,
});

export type Title = {
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

export const Title: Schema.Codec<Title> = closed({
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

export type SubTitle = {
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

export const SubTitle: Schema.Codec<SubTitle> = closed({
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

export type Spacing = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};

export const Spacing: Schema.Codec<Spacing> = closed({
  customizeSpacing: Schema.optionalKey(Schema.Json),
  verticalSpacing: Schema.optionalKey(Schema.Json),
  spaceBelowTitle: Schema.optionalKey(Schema.Json),
  spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
  spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
});

export type Background = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};

export const Background: Schema.Codec<Background> = closed({
  show: Schema.optionalKey(Schema.Json),
  color: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
});

export type Padding = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};

export const Padding: Schema.Codec<Padding> = closed({
  top: Schema.optionalKey(Schema.Json),
  bottom: Schema.optionalKey(Schema.Json),
  left: Schema.optionalKey(Schema.Json),
  right: Schema.optionalKey(Schema.Json),
});

export type LockAspect = {
  readonly show?: Schema.Json;
};

export const LockAspect: Schema.Codec<LockAspect> = closed({
  show: Schema.optionalKey(Schema.Json),
});

export type VisualContainerGeneralFormattingObjects = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};

export const VisualContainerGeneralFormattingObjects: Schema.Codec<VisualContainerGeneralFormattingObjects> =
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

export type Border = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};

export const Border: Schema.Codec<Border> = closed({
  show: Schema.optionalKey(Schema.Json),
  color: Schema.optionalKey(Schema.Json),
  radius: Schema.optionalKey(Schema.Json),
  width: Schema.optionalKey(Schema.Json),
});

export type DropShadow = {
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

export const DropShadow: Schema.Codec<DropShadow> = closed({
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
});

export type VisualTooltip = {
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

export const VisualTooltip: Schema.Codec<VisualTooltip> = closed({
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

export type StylePreset = {
  readonly name?: Schema.Json;
};

export const StylePreset: Schema.Codec<StylePreset> = closed({
  name: Schema.optionalKey(Schema.Json),
});

export type VisualHeader = {
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

export const VisualHeader: Schema.Codec<VisualHeader> = closed({
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

export type VisualHeaderTooltip = {
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

export const VisualHeaderTooltip: Schema.Codec<VisualHeaderTooltip> = closed({
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

export type Divider = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};

export const Divider: Schema.Codec<Divider> = closed({
  ignorePadding: Schema.optionalKey(Schema.Json),
  show: Schema.optionalKey(Schema.Json),
  color: Schema.optionalKey(Schema.Json),
  width: Schema.optionalKey(Schema.Json),
  style: Schema.optionalKey(Schema.Json),
});

export function closed<const Fields extends Schema.Struct.Fields>(
  fields: Fields,
) {
  const allowed = new Set(Object.keys(fields));

  return Schema.StructWithRest(Schema.Struct(fields), [
    Schema.Record(Schema.String, Schema.Json),
  ]).check(
    Schema.makeFilter(
      (value) =>
        Object.keys(value).every((key) => allowed.has(key)) ||
        "Unexpected object property",
    ),
  );
}
