import { Schema } from "effect";

import {
  DataRepetitionSelectorV1_2_0,
  DataViewObjectPropertyDefinitions,
  DataViewWildcard,
} from "./shared.js";
import { IncludeAllTypes } from "../semantic-query/shared.js";
import { closed } from "../shared.js";

export type DataViewObjectDefinitionsV1_2_0 = {} & {
  readonly [key: string]: ReadonlyArray<DataViewObjectDefinitionV1_2_0>;
};

export const DataViewObjectDefinitionsV1_2_0: Schema.Codec<DataViewObjectDefinitionsV1_2_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => DataViewObjectDefinitionV1_2_0)),
  );

export type DataViewObjectDefinitionV1_2_0 = {
  readonly selector?: SelectorV1_2_0;
  readonly properties: DataViewObjectPropertyDefinitions;
};

export const DataViewObjectDefinitionV1_2_0: Schema.Codec<DataViewObjectDefinitionV1_2_0> =
  closed({
    selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
    properties: Schema.suspend(() => DataViewObjectPropertyDefinitions),
  });

export type SelectorV1_2_0 = {
  readonly data?: ReadonlyArray<DataRepetitionSelectorV1_2_0>;
  readonly metadata?: string;
  readonly id?: string;
  readonly highlightMatching?: 0 | 1 | 2;
  readonly order?: number;
};

export const SelectorV1_2_0: Schema.Codec<SelectorV1_2_0> = closed({
  data: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => DataRepetitionSelectorV1_2_0)),
  ),
  metadata: Schema.optionalKey(Schema.String),
  id: Schema.optionalKey(Schema.String),
  highlightMatching: Schema.optionalKey(
    Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]),
  ),
  order: Schema.optionalKey(Schema.Finite),
});

export const FormattingObjectDefinitionsDefinitionsV1_2_0 = {
  DataViewObjectDefinitions: DataViewObjectDefinitionsV1_2_0,
  DataViewObjectDefinition: DataViewObjectDefinitionV1_2_0,
  DataViewObjectPropertyDefinitions: DataViewObjectPropertyDefinitions,
  Selector: SelectorV1_2_0,
  DataRepetitionSelector: DataRepetitionSelectorV1_2_0,
  DataViewWildcard: DataViewWildcard,
  DataViewWildcardMatchingOption: IncludeAllTypes,
} as const;

export {
  DataViewObjectDefinitionsV1_2_0 as FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0,
  DataViewObjectDefinitionV1_2_0 as FormattingObjectDefinitionsDataViewObjectDefinitionV1_2_0,
  SelectorV1_2_0 as FormattingObjectDefinitionsSelectorV1_2_0,
};

export {
  DataViewObjectPropertyDefinitions as FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_2_0,
  DataRepetitionSelectorV1_2_0 as FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0,
  DataViewWildcard as FormattingObjectDefinitionsDataViewWildcardV1_2_0,
  FormattingObjectDefinitions as FormattingObjectDefinitionsV1_2_0,
} from "./shared.js";

export { IncludeAllTypes as FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_2_0 } from "../semantic-query/shared.js";
