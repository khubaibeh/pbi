import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0,
  FormattingObjectDefinitionsDefinitionsV1_5_0,
} from "../formatting-object-definitions/shared.js";
import {
  VisualConfigurationEmbeddedDefinitionsV2_3_0,
  VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0,
} from "../visual-configuration/shared.js";
import { VisualContainerVisualContainerPositionV1_2_0 } from "../visual-container/shared.js";

export type VisualContainerMobileStateV2_4_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.4.0/schema.json";
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0;
  readonly position: VisualContainerVisualContainerPositionV1_2_0;
};

export const VisualContainerMobileStateV2_4_0: Schema.Codec<VisualContainerMobileStateV2_4_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.4.0/schema.json",
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.DataViewObjectDefinitions),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationEmbeddedDefinitionsV2_3_0.VisualContainerFormattingObjects,
      ),
    ),
    position: Schema.suspend(() => VisualContainerVisualContainerPositionV1_2_0),
  });

export { VisualContainerMobileStateDefinitionsV1_3_0 as VisualContainerMobileStateDefinitionsV2_4_0 } from "./shared.js";
