import { Schema } from "effect";
import { closed } from "../shared.js";
import { FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0, FormattingObjectDefinitionsDefinitionsV1_4_0 } from "../formatting-object-definitions/shared.js";
import { VisualConfigurationEmbeddedDefinitionsV2_1_0, VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_1_0 } from "../visual-configuration/shared.js";
import { VisualContainerMobileStateVisualContainerPositionV1_2_0 } from "./shared.js";

export type VisualContainerMobileStateV2_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.1.0/schema.json";
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_1_0;
  readonly position: VisualContainerMobileStateVisualContainerPositionV1_2_0;
};

export const VisualContainerMobileStateV2_1_0: Schema.Codec<VisualContainerMobileStateV2_1_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.1.0/schema.json",
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_4_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () =>
          VisualConfigurationEmbeddedDefinitionsV2_1_0
            .VisualContainerFormattingObjects,
      ),
    ),
    position: Schema.suspend(
      () => VisualContainerMobileStateVisualContainerPositionV1_2_0,
    ),
  });

export { VisualContainerMobileStateDefinitionsV1_3_0 as VisualContainerMobileStateDefinitionsV2_1_0 } from "./shared.js";
