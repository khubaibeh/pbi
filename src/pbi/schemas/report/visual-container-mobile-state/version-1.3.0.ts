import { Schema } from "effect";

import { DataViewObjectDefinitionsV1_2_0 } from "../formatting-object-definitions/version-1.2.0.js";
import { closed } from "../shared.js";
import { VisualContainerFormattingObjectsV1_5_0 } from "../visual-configuration/shared.js";
import { VisualContainerPositionV1_2_0 } from "../visual-container/shared.js";

export type VisualContainerMobileStateV1_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.3.0/schema.json";
  readonly objects?: DataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV1_5_0;
  readonly position: VisualContainerPositionV1_2_0;
};

export const VisualContainerMobileStateV1_3_0: Schema.Codec<VisualContainerMobileStateV1_3_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.3.0/schema.json",
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_2_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV1_5_0),
    ),
    position: Schema.suspend(() => VisualContainerPositionV1_2_0),
  });

export const VisualContainerMobileStateDefinitionsV1_3_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
} as const;

export { VisualContainerPositionV1_2_0 as VisualContainerMobileStateVisualContainerPositionV1_3_0 } from "../visual-container/shared.js";
