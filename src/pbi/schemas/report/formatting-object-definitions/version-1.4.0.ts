import { Schema } from "effect";

import {
  DataViewObjectPropertyDefinitions,
  DataViewWildcard,
} from "./shared.js";
import { IncludeAllTypes } from "../semantic-query/shared.js";
import { QueryExpressionContainerV1_3_0 } from "../semantic-query/version-1.3.0.js";
import { closed } from "../shared.js";

export type DataViewObjectDefinitionsV1_4_0 = {} & {
  readonly [key: string]: ReadonlyArray<DataViewObjectDefinitionV1_4_0>;
};

export const DataViewObjectDefinitionsV1_4_0: Schema.Codec<DataViewObjectDefinitionsV1_4_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => DataViewObjectDefinitionV1_4_0)),
  );

export type DataViewObjectDefinitionV1_4_0 = {
  readonly selector?: SelectorV1_4_0;
  readonly properties: DataViewObjectPropertyDefinitions;
};

export const DataViewObjectDefinitionV1_4_0: Schema.Codec<DataViewObjectDefinitionV1_4_0> =
  closed({
    selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
    properties: Schema.suspend(() => DataViewObjectPropertyDefinitions),
  });

export type SelectorV1_4_0 = {
  readonly data?: ReadonlyArray<DataRepetitionSelectorV1_4_0>;
  readonly metadata?: string;
  readonly id?: string;
  readonly highlightMatching?: 0 | 1 | 2;
  readonly hierarchyMatching?: 0 | 1;
  readonly order?: number;
};

export const SelectorV1_4_0: Schema.Codec<SelectorV1_4_0> = closed({
  data: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => DataRepetitionSelectorV1_4_0)),
  ),
  metadata: Schema.optionalKey(Schema.String),
  id: Schema.optionalKey(Schema.String),
  highlightMatching: Schema.optionalKey(
    Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]),
  ),
  hierarchyMatching: Schema.optionalKey(
    Schema.Union([Schema.Literal(0), Schema.Literal(1)]),
  ),
  order: Schema.optionalKey(Schema.Finite),
});

export type DataRepetitionSelectorV1_4_0 = {
  readonly scopeId?: QueryExpressionContainerV1_3_0;
  readonly wildcard?: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly roles?: ReadonlyArray<string>;
  readonly total?: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly dataViewWildcard?: DataViewWildcard;
};

export const DataRepetitionSelectorV1_4_0: Schema.Codec<DataRepetitionSelectorV1_4_0> =
  closed({
    scopeId: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_3_0),
    ),
    wildcard: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
    ),
    roles: Schema.optionalKey(Schema.Array(Schema.String)),
    total: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
    ),
    dataViewWildcard: Schema.optionalKey(
      Schema.suspend(() => DataViewWildcard),
    ),
  });

export const FormattingObjectDefinitionsDefinitionsV1_4_0 = {
  DataViewObjectDefinitions: DataViewObjectDefinitionsV1_4_0,
  DataViewObjectDefinition: DataViewObjectDefinitionV1_4_0,
  DataViewObjectPropertyDefinitions: DataViewObjectPropertyDefinitions,
  Selector: SelectorV1_4_0,
  DataRepetitionSelector: DataRepetitionSelectorV1_4_0,
  DataViewWildcard: DataViewWildcard,
  DataViewWildcardMatchingOption: IncludeAllTypes,
} as const;

export {
  DataViewObjectDefinitionsV1_4_0 as FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0,
  DataViewObjectDefinitionV1_4_0 as FormattingObjectDefinitionsDataViewObjectDefinitionV1_4_0,
  SelectorV1_4_0 as FormattingObjectDefinitionsSelectorV1_4_0,
  DataRepetitionSelectorV1_4_0 as FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0,
};

export {
  DataViewObjectPropertyDefinitions as FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_4_0,
  DataViewWildcard as FormattingObjectDefinitionsDataViewWildcardV1_4_0,
  FormattingObjectDefinitions as FormattingObjectDefinitionsV1_4_0,
} from "./shared.js";

export { IncludeAllTypes as FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_4_0 } from "../semantic-query/shared.js";
