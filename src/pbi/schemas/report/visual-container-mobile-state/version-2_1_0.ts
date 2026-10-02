import { Schema } from "effect";
import { VisualContainerPositionV1_2_0, closed } from "../shared.js";
import { DataViewObjectDefinitionsV1_4_0 } from "../formatting-object-definitions/version-1_4_0.js";
import { VisualConfigurationVisualContainerFormattingObjectsV2_0_0 } from "../visual-configuration/shared.js";

export type MobileStateV2_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.1.0/schema.json";
  readonly objects?: DataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV2_0_0;
  readonly position: VisualContainerPositionV1_2_0;
};

export const MobileStateV2_1_0: Schema.Codec<MobileStateV2_1_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.1.0/schema.json",
  ),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_4_0)),
  visualContainerObjects: Schema.optionalKey(
    Schema.suspend(() => VisualConfigurationVisualContainerFormattingObjectsV2_0_0),
  ),
  position: Schema.suspend(() => VisualContainerPositionV1_2_0),
});

export { MobileStateV2_1_0 as VisualContainerMobileStateV2_1_0 };

export { VisualContainerPositionV1_2_0 as VisualContainerMobileStateVisualContainerPositionV2_1_0 } from "../shared.js";

export { VisualContainerMobileStateDefinitionsV1_3_0 as VisualContainerMobileStateDefinitionsV2_1_0 } from "./shared.js";
