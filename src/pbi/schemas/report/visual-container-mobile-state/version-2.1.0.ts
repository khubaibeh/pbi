import { Schema } from "effect";

import { DataViewObjectDefinitionsV1_4_0 } from "../formatting-object-definitions/version-1.4.0.js";
import { closed } from "../shared.js";
import { VisualContainerFormattingObjectsV2_0_0 } from "../visual-configuration/shared.js";
import { VisualContainerPositionV1_2_0 } from "../visual-container/shared.js";

export type VisualContainerMobileStateV2_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.1.0/schema.json";
  readonly objects?: DataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV2_0_0;
  readonly position: VisualContainerPositionV1_2_0;
};

export const VisualContainerMobileStateV2_1_0: Schema.Codec<VisualContainerMobileStateV2_1_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.1.0/schema.json",
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_4_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV2_0_0),
    ),
    position: Schema.suspend(() => VisualContainerPositionV1_2_0),
  });

export { VisualContainerPositionV1_2_0 as VisualContainerMobileStateVisualContainerPositionV2_1_0 } from "../visual-container/shared.js";

export { VisualContainerMobileStateDefinitionsV2_1_0 } from "./shared.js";
