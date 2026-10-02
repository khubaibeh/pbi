import { Schema } from "effect";

import { DataViewObjectDefinitionsV1_4_0 } from "../formatting-object-definitions/version-1.4.0.js";
import { closed } from "../shared.js";
import { VisualContainerFormattingObjectsV2_2_0 } from "../visual-configuration/version-2.2.0.js";
import { VisualContainerPositionV1_2_0 } from "../visual-container/shared.js";

export type VisualContainerMobileStateV2_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.2.0/schema.json";
  readonly objects?: DataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV2_2_0;
  readonly position: VisualContainerPositionV1_2_0;
};

export const VisualContainerMobileStateV2_2_0: Schema.Codec<VisualContainerMobileStateV2_2_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.2.0/schema.json",
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_4_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV2_2_0),
    ),
    position: Schema.suspend(() => VisualContainerPositionV1_2_0),
  });

export const VisualContainerMobileStateDefinitionsV2_2_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
} as const;

export { VisualContainerPositionV1_2_0 as VisualContainerMobileStateVisualContainerPositionV2_2_0 } from "../visual-container/shared.js";
