import { Schema } from "effect";
import { IncludeAllTypes, closed } from "../shared.js";
import { QueryExpressionContainerV1_1_0 } from "../semantic-query/version-1_1_0.js";
import { DataViewObjectPropertyDefinitions, DataViewWildcard } from "./shared.js";

export type DataViewObjectDefinitionsV1_1_0 = {} & {
  readonly [key: string]: ReadonlyArray<DataViewObjectDefinitionV1_1_0>;
};

export const DataViewObjectDefinitionsV1_1_0: Schema.Codec<DataViewObjectDefinitionsV1_1_0> =
  Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => DataViewObjectDefinitionV1_1_0)));

export type DataViewObjectDefinitionV1_1_0 = {
  readonly selector?: SelectorV1_1_0;
  readonly properties: DataViewObjectPropertyDefinitions;
};

export const DataViewObjectDefinitionV1_1_0: Schema.Codec<DataViewObjectDefinitionV1_1_0> = closed({
  selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
  properties: Schema.suspend(() => DataViewObjectPropertyDefinitions),
});

export type SelectorV1_1_0 = {
  readonly data?: ReadonlyArray<DataRepetitionSelectorV1_1_0>;
  readonly metadata?: string;
  readonly id?: string;
  readonly highlightMatching?: 0 | 1 | 2;
  readonly order?: number;
};

export const SelectorV1_1_0: Schema.Codec<SelectorV1_1_0> = closed({
  data: Schema.optionalKey(Schema.Array(Schema.suspend(() => DataRepetitionSelectorV1_1_0))),
  metadata: Schema.optionalKey(Schema.String),
  id: Schema.optionalKey(Schema.String),
  highlightMatching: Schema.optionalKey(
    Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]),
  ),
  order: Schema.optionalKey(Schema.Finite),
});

export type DataRepetitionSelectorV1_1_0 = {
  readonly scopeId?: QueryExpressionContainerV1_1_0;
  readonly wildcard?: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly roles?: ReadonlyArray<string>;
  readonly total?: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly dataViewWildcard?: DataViewWildcard;
};

export const DataRepetitionSelectorV1_1_0: Schema.Codec<DataRepetitionSelectorV1_1_0> = closed({
  scopeId: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
  wildcard: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0))),
  roles: Schema.optionalKey(Schema.Array(Schema.String)),
  total: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0))),
  dataViewWildcard: Schema.optionalKey(Schema.suspend(() => DataViewWildcard)),
});

export const FormattingObjectDefinitionsDefinitionsV1_1_0 = {
  DataViewObjectDefinitions: DataViewObjectDefinitionsV1_1_0,
  DataViewObjectDefinition: DataViewObjectDefinitionV1_1_0,
  DataViewObjectPropertyDefinitions: DataViewObjectPropertyDefinitions,
  Selector: SelectorV1_1_0,
  DataRepetitionSelector: DataRepetitionSelectorV1_1_0,
  DataViewWildcard: DataViewWildcard,
  DataViewWildcardMatchingOption: IncludeAllTypes,
} as const;

export {
  DataViewObjectDefinitionsV1_1_0 as FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0,
  DataViewObjectDefinitionV1_1_0 as FormattingObjectDefinitionsDataViewObjectDefinitionV1_1_0,
  SelectorV1_1_0 as FormattingObjectDefinitionsSelectorV1_1_0,
  DataRepetitionSelectorV1_1_0 as FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0,
};

export { IncludeAllTypes as FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_1_0 } from "../shared.js";

export {
  DataViewObjectPropertyDefinitions as FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_1_0,
  DataViewWildcard as FormattingObjectDefinitionsDataViewWildcardV1_1_0,
  FormattingObjectDefinitions as FormattingObjectDefinitionsV1_1_0,
} from "./shared.js";
