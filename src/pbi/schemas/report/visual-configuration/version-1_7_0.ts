import { Schema } from "effect";
import { closed } from "../shared.js";
import { FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0, FormattingObjectDefinitionsDefinitionsV1_2_0 } from "../formatting-object-definitions/shared.js";
import { VisualConfigurationExpansionStateV1_5_0, VisualConfigurationQueryV1_5_0, VisualConfigurationVisualContainerFormattingObjectsV1_5_0, VisualConfigurationVisualSyncGroup } from "./shared.js";

export type VisualConfigurationV1_7_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.7.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV1_5_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV1_5_0>;
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV1_5_0;
  readonly syncGroup?: VisualConfigurationVisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationV1_7_0: Schema.Codec<VisualConfigurationV1_7_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.7.0/schema.json",
    ),
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationQueryV1_5_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationExpansionStateV1_5_0),
      ),
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
        () => VisualConfigurationVisualContainerFormattingObjectsV1_5_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualSyncGroup),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export { VisualConfigurationDefinitionsV1_5_0 as VisualConfigurationDefinitionsV1_7_0, VisualConfigurationEmbeddedDefinitionsV1_5_0 as VisualConfigurationEmbeddedDefinitionsV1_7_0, VisualConfigurationEmbeddedV1_5_0 as VisualConfigurationEmbeddedV1_7_0 } from "./shared.js";
