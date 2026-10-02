import { Schema } from "effect";

import { DataViewObjectDefinitionsV1_5_0 } from "../formatting-object-definitions/version-1.5.0.js";
import { closed } from "../shared.js";
import { VisualContainerFormattingObjectsV2_3_0 } from "../visual-configuration/version-2.3.0.js";
import { VisualContainerPositionV1_2_0 } from "../visual-container/shared.js";

export type VisualContainerMobileStateV2_4_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.4.0/schema.json";
  readonly objects?: DataViewObjectDefinitionsV1_5_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV2_3_0;
  readonly position: VisualContainerPositionV1_2_0;
};

export const VisualContainerMobileStateV2_4_0: Schema.Codec<VisualContainerMobileStateV2_4_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.4.0/schema.json",
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_5_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV2_3_0),
    ),
    position: Schema.suspend(() => VisualContainerPositionV1_2_0),
  });

export { VisualContainerPositionV1_2_0 as VisualContainerMobileStateVisualContainerPositionV2_4_0 } from "../visual-container/shared.js";

export { VisualContainerMobileStateDefinitionsV2_4_0 } from "./shared.js";
