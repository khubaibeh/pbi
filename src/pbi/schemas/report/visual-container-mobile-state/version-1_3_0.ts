import { Schema } from "effect";
import { VisualContainerPositionV1_2_0, closed } from "../shared.js";
import { DataViewObjectDefinitionsV1_2_0 } from "../formatting-object-definitions/version-1_2_0.js";
import { VisualConfigurationVisualContainerFormattingObjectsV1_5_0 } from "../visual-configuration/shared.js";

export type MobileStateV1_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.3.0/schema.json";
  readonly objects?: DataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV1_5_0;
  readonly position: VisualContainerPositionV1_2_0;
};

export const MobileStateV1_3_0: Schema.Codec<MobileStateV1_3_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.3.0/schema.json",
  ),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_2_0)),
  visualContainerObjects: Schema.optionalKey(
    Schema.suspend(() => VisualConfigurationVisualContainerFormattingObjectsV1_5_0),
  ),
  position: Schema.suspend(() => VisualContainerPositionV1_2_0),
});

export { MobileStateV1_3_0 as VisualContainerMobileStateV1_3_0 };

export { VisualContainerPositionV1_2_0 as VisualContainerMobileStateVisualContainerPositionV1_3_0 } from "../shared.js";
