import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0,
  FormattingObjectDefinitionsDefinitionsV1_3_0,
} from "../formatting-object-definitions/shared.js";
import {
  VisualConfigurationEmbeddedDefinitionsV1_8_0,
  VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_8_0,
} from "../visual-configuration/shared.js";
import { VisualContainerVisualContainerPositionV1_2_0 } from "../visual-container/shared.js";

export type VisualContainerMobileStateV1_5_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.5.0/schema.json";
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_8_0;
  readonly position: VisualContainerVisualContainerPositionV1_2_0;
};

export const VisualContainerMobileStateV1_5_0: Schema.Codec<VisualContainerMobileStateV1_5_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.5.0/schema.json",
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.DataViewObjectDefinitions),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationEmbeddedDefinitionsV1_8_0.VisualContainerFormattingObjects,
      ),
    ),
    position: Schema.suspend(() => VisualContainerVisualContainerPositionV1_2_0),
  });

export { VisualContainerMobileStateDefinitionsV1_3_0 as VisualContainerMobileStateDefinitionsV1_5_0 } from "./shared.js";
