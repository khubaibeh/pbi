import { Schema } from "effect";
import {
  BorderV1_0_0,
  DividerV1_0_0,
  DropShadow,
  LockAspect,
  Padding,
  Spacing,
  StylePreset,
  SubTitle,
  Title,
  VisualConfigurationBackground,
  VisualConfigurationVisualLinkV1_5_0,
  VisualContainerGeneralFormattingObjects,
  VisualContainerPositionV1_0_0,
  VisualHeaderTooltip,
  VisualHeaderV1_0_0,
  VisualTooltip,
  closed,
} from "../shared.js";
import { DataViewObjectDefinitionsV1_0_0 } from "../formatting-object-definitions/version-1_0_0.js";
import { VisualContainerVisualContainerFormattingObjectsV1_0_0 } from "../visual-container/version-1_0_0.js";

export const VisualContainerMobileStateDefinitionsV1_0_0 = {
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
  VisualContainerPosition: VisualContainerPositionV1_0_0,
} as const;

export type MobileStateV1_0_0 = {
  readonly objects?: DataViewObjectDefinitionsV1_0_0;
  readonly visualContainerObjects?: VisualContainerVisualContainerFormattingObjectsV1_0_0;
  readonly position: VisualContainerPositionV1_0_0;
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.0.0/schema.json";
};

export const MobileStateV1_0_0: Schema.Codec<MobileStateV1_0_0> = closed({
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_0_0)),
  visualContainerObjects: Schema.optionalKey(
    Schema.suspend(() => VisualContainerVisualContainerFormattingObjectsV1_0_0),
  ),
  position: Schema.suspend(() => VisualContainerPositionV1_0_0),
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.0.0/schema.json",
  ),
});

export { MobileStateV1_0_0 as VisualContainerMobileStateV1_0_0 };

export {
  Title as VisualContainerMobileStateTitleV1_0_0,
  SubTitle as VisualContainerMobileStateSubTitleV1_0_0,
  DividerV1_0_0 as VisualContainerMobileStateDividerV1_0_0,
  Spacing as VisualContainerMobileStateSpacingV1_0_0,
  VisualConfigurationBackground as VisualContainerMobileStateBackgroundV1_0_0,
  Padding as VisualContainerMobileStatePaddingV1_0_0,
  LockAspect as VisualContainerMobileStateLockAspectV1_0_0,
  VisualContainerGeneralFormattingObjects as VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_0_0,
  BorderV1_0_0 as VisualContainerMobileStateBorderV1_0_0,
  DropShadow as VisualContainerMobileStateDropShadowV1_0_0,
  VisualConfigurationVisualLinkV1_5_0 as VisualContainerMobileStateVisualLinkV1_0_0,
  VisualTooltip as VisualContainerMobileStateVisualTooltipV1_0_0,
  StylePreset as VisualContainerMobileStateStylePresetV1_0_0,
  VisualHeaderV1_0_0 as VisualContainerMobileStateVisualHeaderV1_0_0,
  VisualHeaderTooltip as VisualContainerMobileStateVisualHeaderTooltipV1_0_0,
  VisualContainerPositionV1_0_0 as VisualContainerMobileStateVisualContainerPositionV1_0_0,
} from "../shared.js";

export { VisualContainerVisualContainerFormattingObjectsV1_0_0 as VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0 } from "../visual-container/version-1_0_0.js";
