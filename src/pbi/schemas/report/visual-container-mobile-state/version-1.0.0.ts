import { Schema } from "effect";

import { DataViewObjectDefinitionsV1_0_0 } from "../formatting-object-definitions/version-1.0.0.js";
import { closed } from "../shared.js";
import { VisualContainerPositionV1_0_0 } from "../visual-container/shared.js";
import { VisualContainerFormattingObjectsV1_0_0 } from "../visual-container/version-1.0.0.js";

export type VisualContainerMobileStateV1_0_0 = {
  readonly objects?: DataViewObjectDefinitionsV1_0_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV1_0_0;
  readonly position: VisualContainerPositionV1_0_0;
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.0.0/schema.json";
};

export const VisualContainerMobileStateV1_0_0: Schema.Codec<VisualContainerMobileStateV1_0_0> =
  closed({
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_0_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV1_0_0),
    ),
    position: Schema.suspend(() => VisualContainerPositionV1_0_0),
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.0.0/schema.json",
    ),
  });

export {
  VisualContainerFormattingObjectsV1_0_0 as VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0,
  Border as VisualContainerMobileStateBorderV1_0_0,
  VisualHeader as VisualContainerMobileStateVisualHeaderV1_0_0,
} from "../visual-container/version-1.0.0.js";

export {
  Title as VisualContainerMobileStateTitleV1_0_0,
  SubTitle as VisualContainerMobileStateSubTitleV1_0_0,
  Divider as VisualContainerMobileStateDividerV1_0_0,
  Spacing as VisualContainerMobileStateSpacingV1_0_0,
  Background as VisualContainerMobileStateBackgroundV1_0_0,
  Padding as VisualContainerMobileStatePaddingV1_0_0,
  LockAspect as VisualContainerMobileStateLockAspectV1_0_0,
  VisualContainerGeneralFormattingObjects as VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_0_0,
  DropShadow as VisualContainerMobileStateDropShadowV1_0_0,
  VisualLink as VisualContainerMobileStateVisualLinkV1_0_0,
  VisualTooltip as VisualContainerMobileStateVisualTooltipV1_0_0,
  StylePreset as VisualContainerMobileStateStylePresetV1_0_0,
  VisualHeaderTooltip as VisualContainerMobileStateVisualHeaderTooltipV1_0_0,
} from "../shared.js";

export { VisualContainerPositionV1_0_0 as VisualContainerMobileStateVisualContainerPositionV1_0_0 } from "../visual-container/shared.js";

export { VisualContainerMobileStateDefinitionsV1_0_0 } from "./shared.js";
