import { Schema } from "effect";
import { closed } from "../shared.js";
import { FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0, FormattingObjectDefinitionsDefinitionsV1_2_0 } from "../formatting-object-definitions/shared.js";
import { VisualConfigurationEmbeddedDefinitionsV1_5_0, VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_5_0 } from "../visual-configuration/shared.js";
import { VisualContainerMobileStateVisualContainerPositionV1_2_0 } from "./shared.js";

export type VisualContainerMobileStateV1_4_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.4.0/schema.json";
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_5_0;
  readonly position: VisualContainerMobileStateVisualContainerPositionV1_2_0;
};

export const VisualContainerMobileStateV1_4_0: Schema.Codec<VisualContainerMobileStateV1_4_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.4.0/schema.json",
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_2_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () =>
          VisualConfigurationEmbeddedDefinitionsV1_5_0
            .VisualContainerFormattingObjects,
      ),
    ),
    position: Schema.suspend(
      () => VisualContainerMobileStateVisualContainerPositionV1_2_0,
    ),
  });

export { VisualContainerMobileStateDefinitionsV1_3_0 as VisualContainerMobileStateDefinitionsV1_4_0 } from "./shared.js";
