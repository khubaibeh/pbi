import { Schema } from "effect";
import { VisualContainerPositionV1_2_0, closed } from "../shared.js";
import { DataViewObjectDefinitionsV1_5_0 } from "../formatting-object-definitions/version-1_5_0.js";
import { VisualConfigurationVisualContainerFormattingObjectsV2_3_0 } from "../visual-configuration/version-2_3_0.js";

export type MobileStateV2_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.3.0/schema.json";
  readonly objects?: DataViewObjectDefinitionsV1_5_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV2_3_0;
  readonly position: VisualContainerPositionV1_2_0;
};

export const MobileStateV2_3_0: Schema.Codec<MobileStateV2_3_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.3.0/schema.json",
  ),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_5_0)),
  visualContainerObjects: Schema.optionalKey(
    Schema.suspend(() => VisualConfigurationVisualContainerFormattingObjectsV2_3_0),
  ),
  position: Schema.suspend(() => VisualContainerPositionV1_2_0),
});

export { MobileStateV2_3_0 as VisualContainerMobileStateV2_3_0 };

export { VisualContainerPositionV1_2_0 as VisualContainerMobileStateVisualContainerPositionV2_3_0 } from "../shared.js";

export { VisualContainerMobileStateDefinitionsV1_3_0 as VisualContainerMobileStateDefinitionsV2_3_0 } from "./shared.js";
