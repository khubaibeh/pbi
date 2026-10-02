import { Schema } from "effect";

import { DataViewObjectDefinitionsV1_1_0 } from "../formatting-object-definitions/version-1.1.0.js";
import { closed } from "../shared.js";
import { VisualContainerPositionV1_0_0 } from "../visual-container/shared.js";
import { VisualContainerFormattingObjectsV1_1_0 } from "../visual-container/version-1.1.0.js";

export type VisualContainerMobileStateV1_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.1.0/schema.json";
  readonly objects?: DataViewObjectDefinitionsV1_1_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV1_1_0;
  readonly position: VisualContainerPositionV1_0_0;
};

export const VisualContainerMobileStateV1_1_0: Schema.Codec<VisualContainerMobileStateV1_1_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.1.0/schema.json",
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_1_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV1_1_0),
    ),
    position: Schema.suspend(() => VisualContainerPositionV1_0_0),
  });

export { VisualContainerFormattingObjectsV1_1_0 as VisualContainerMobileStateVisualContainerFormattingObjectsV1_1_0 } from "../visual-container/version-1.1.0.js";

export {
  Title as VisualContainerMobileStateTitleV1_1_0,
  SubTitle as VisualContainerMobileStateSubTitleV1_1_0,
  Divider as VisualContainerMobileStateDividerV1_1_0,
  Spacing as VisualContainerMobileStateSpacingV1_1_0,
  Background as VisualContainerMobileStateBackgroundV1_1_0,
  Padding as VisualContainerMobileStatePaddingV1_1_0,
  LockAspect as VisualContainerMobileStateLockAspectV1_1_0,
  VisualContainerGeneralFormattingObjects as VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_1_0,
  Border as VisualContainerMobileStateBorderV1_1_0,
  DropShadow as VisualContainerMobileStateDropShadowV1_1_0,
  VisualLink as VisualContainerMobileStateVisualLinkV1_1_0,
  VisualTooltip as VisualContainerMobileStateVisualTooltipV1_1_0,
  StylePreset as VisualContainerMobileStateStylePresetV1_1_0,
  VisualHeader as VisualContainerMobileStateVisualHeaderV1_1_0,
  VisualHeaderTooltip as VisualContainerMobileStateVisualHeaderTooltipV1_1_0,
} from "../shared.js";

export { VisualContainerPositionV1_0_0 as VisualContainerMobileStateVisualContainerPositionV1_1_0 } from "../visual-container/shared.js";

export { VisualContainerMobileStateDefinitionsV1_1_0 } from "./shared.js";
