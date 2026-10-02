import { Schema } from "effect";

import { DataViewObjectDefinitionsV1_2_0 } from "../formatting-object-definitions/version-1.2.0.js";
import { closed } from "../shared.js";
import { VisualContainerFormattingObjectsV1_5_0 } from "../visual-configuration/shared.js";
import { VisualContainerPositionV1_2_0 } from "../visual-container/shared.js";

export type VisualContainerMobileStateV1_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.2.0/schema.json";
  readonly objects?: DataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV1_5_0;
  readonly position: VisualContainerPositionV1_2_0;
};

export const VisualContainerMobileStateV1_2_0: Schema.Codec<VisualContainerMobileStateV1_2_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.2.0/schema.json",
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_2_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV1_5_0),
    ),
    position: Schema.suspend(() => VisualContainerPositionV1_2_0),
  });

export { VisualContainerFormattingObjectsV1_5_0 as VisualContainerMobileStateVisualContainerFormattingObjectsV1_2_0 } from "../visual-configuration/shared.js";

export {
  Title as VisualContainerMobileStateTitleV1_2_0,
  SubTitle as VisualContainerMobileStateSubTitleV1_2_0,
  Divider as VisualContainerMobileStateDividerV1_2_0,
  Spacing as VisualContainerMobileStateSpacingV1_2_0,
  Background as VisualContainerMobileStateBackgroundV1_2_0,
  Padding as VisualContainerMobileStatePaddingV1_2_0,
  LockAspect as VisualContainerMobileStateLockAspectV1_2_0,
  VisualContainerGeneralFormattingObjects as VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_2_0,
  Border as VisualContainerMobileStateBorderV1_2_0,
  DropShadow as VisualContainerMobileStateDropShadowV1_2_0,
  VisualLink as VisualContainerMobileStateVisualLinkV1_2_0,
  VisualTooltip as VisualContainerMobileStateVisualTooltipV1_2_0,
  StylePreset as VisualContainerMobileStateStylePresetV1_2_0,
  VisualHeader as VisualContainerMobileStateVisualHeaderV1_2_0,
  VisualHeaderTooltip as VisualContainerMobileStateVisualHeaderTooltipV1_2_0,
} from "../shared.js";

export { VisualContainerPositionV1_2_0 as VisualContainerMobileStateVisualContainerPositionV1_2_0 } from "../visual-container/shared.js";

export { VisualContainerMobileStateDefinitionsV1_2_0 } from "./shared.js";
