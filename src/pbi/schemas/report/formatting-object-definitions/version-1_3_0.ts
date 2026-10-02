import { Schema } from "effect";
import { IncludeAllTypes, closed } from "../shared.js";
import {
  DataRepetitionSelectorV1_2_0,
  DataViewObjectPropertyDefinitions,
  DataViewWildcard,
} from "./shared.js";

export type DataViewObjectDefinitionsV1_3_0 = {} & {
  readonly [key: string]: ReadonlyArray<DataViewObjectDefinitionV1_3_0>;
};

export const DataViewObjectDefinitionsV1_3_0: Schema.Codec<DataViewObjectDefinitionsV1_3_0> =
  Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => DataViewObjectDefinitionV1_3_0)));

export type DataViewObjectDefinitionV1_3_0 = {
  readonly selector?: SelectorV1_3_0;
  readonly properties: DataViewObjectPropertyDefinitions;
};

export const DataViewObjectDefinitionV1_3_0: Schema.Codec<DataViewObjectDefinitionV1_3_0> = closed({
  selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
  properties: Schema.suspend(() => DataViewObjectPropertyDefinitions),
});

export type SelectorV1_3_0 = {
  readonly data?: ReadonlyArray<DataRepetitionSelectorV1_2_0>;
  readonly metadata?: string;
  readonly id?: string;
  readonly highlightMatching?: 0 | 1 | 2;
  readonly hierarchyMatching?: 0 | 1;
  readonly order?: number;
};

export const SelectorV1_3_0: Schema.Codec<SelectorV1_3_0> = closed({
  data: Schema.optionalKey(Schema.Array(Schema.suspend(() => DataRepetitionSelectorV1_2_0))),
  metadata: Schema.optionalKey(Schema.String),
  id: Schema.optionalKey(Schema.String),
  highlightMatching: Schema.optionalKey(
    Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]),
  ),
  hierarchyMatching: Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1)])),
  order: Schema.optionalKey(Schema.Finite),
});

export const FormattingObjectDefinitionsDefinitionsV1_3_0 = {
  DataViewObjectDefinitions: DataViewObjectDefinitionsV1_3_0,
  DataViewObjectDefinition: DataViewObjectDefinitionV1_3_0,
  DataViewObjectPropertyDefinitions: DataViewObjectPropertyDefinitions,
  Selector: SelectorV1_3_0,
  DataRepetitionSelector: DataRepetitionSelectorV1_2_0,
  DataViewWildcard: DataViewWildcard,
  DataViewWildcardMatchingOption: IncludeAllTypes,
} as const;

export {
  DataViewObjectDefinitionsV1_3_0 as FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0,
  DataViewObjectDefinitionV1_3_0 as FormattingObjectDefinitionsDataViewObjectDefinitionV1_3_0,
  SelectorV1_3_0 as FormattingObjectDefinitionsSelectorV1_3_0,
};

export { IncludeAllTypes as FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_3_0 } from "../shared.js";

export {
  DataViewObjectPropertyDefinitions as FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_3_0,
  DataRepetitionSelectorV1_2_0 as FormattingObjectDefinitionsDataRepetitionSelectorV1_3_0,
  DataViewWildcard as FormattingObjectDefinitionsDataViewWildcardV1_3_0,
  FormattingObjectDefinitions as FormattingObjectDefinitionsV1_3_0,
} from "./shared.js";
