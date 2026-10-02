import { Schema } from "effect";
import {
  BorderV1_5_0,
  DividerV1_5_0,
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
  VisualContainerPositionV1_2_0,
  VisualHeaderTooltip,
  VisualHeaderV1_5_0,
  VisualTooltip,
  closed,
} from "../shared.js";
import { DataViewObjectDefinitionsV1_2_0 } from "../formatting-object-definitions/version-1_2_0.js";
import { VisualConfigurationVisualContainerFormattingObjectsV1_5_0 } from "../visual-configuration/shared.js";

export const VisualContainerMobileStateDefinitionsV1_2_0 = {
  VisualContainerFormattingObjects: VisualConfigurationVisualContainerFormattingObjectsV1_5_0,
  Title: Title,
  SubTitle: SubTitle,
  Divider: DividerV1_5_0,
  Spacing: Spacing,
  Background: VisualConfigurationBackground,
  Padding: Padding,
  LockAspect: LockAspect,
  VisualContainerGeneralFormattingObjects: VisualContainerGeneralFormattingObjects,
  Border: BorderV1_5_0,
  DropShadow: DropShadow,
  VisualLink: VisualConfigurationVisualLinkV1_5_0,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: VisualHeaderV1_5_0,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualContainerPosition: VisualContainerPositionV1_2_0,
} as const;

export type MobileStateV1_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.2.0/schema.json";
  readonly objects?: DataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV1_5_0;
  readonly position: VisualContainerPositionV1_2_0;
};

export const MobileStateV1_2_0: Schema.Codec<MobileStateV1_2_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.2.0/schema.json",
  ),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_2_0)),
  visualContainerObjects: Schema.optionalKey(
    Schema.suspend(() => VisualConfigurationVisualContainerFormattingObjectsV1_5_0),
  ),
  position: Schema.suspend(() => VisualContainerPositionV1_2_0),
});

export { MobileStateV1_2_0 as VisualContainerMobileStateV1_2_0 };

export {
  Title as VisualContainerMobileStateTitleV1_2_0,
  SubTitle as VisualContainerMobileStateSubTitleV1_2_0,
  DividerV1_5_0 as VisualContainerMobileStateDividerV1_2_0,
  Spacing as VisualContainerMobileStateSpacingV1_2_0,
  VisualConfigurationBackground as VisualContainerMobileStateBackgroundV1_2_0,
  Padding as VisualContainerMobileStatePaddingV1_2_0,
  LockAspect as VisualContainerMobileStateLockAspectV1_2_0,
  VisualContainerGeneralFormattingObjects as VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_2_0,
  BorderV1_5_0 as VisualContainerMobileStateBorderV1_2_0,
  DropShadow as VisualContainerMobileStateDropShadowV1_2_0,
  VisualConfigurationVisualLinkV1_5_0 as VisualContainerMobileStateVisualLinkV1_2_0,
  VisualTooltip as VisualContainerMobileStateVisualTooltipV1_2_0,
  StylePreset as VisualContainerMobileStateStylePresetV1_2_0,
  VisualHeaderV1_5_0 as VisualContainerMobileStateVisualHeaderV1_2_0,
  VisualHeaderTooltip as VisualContainerMobileStateVisualHeaderTooltipV1_2_0,
  VisualContainerPositionV1_2_0 as VisualContainerMobileStateVisualContainerPositionV1_2_0,
} from "../shared.js";

export { VisualConfigurationVisualContainerFormattingObjectsV1_5_0 as VisualContainerMobileStateVisualContainerFormattingObjectsV1_2_0 } from "../visual-configuration/shared.js";
