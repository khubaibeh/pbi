import { Schema } from "effect";
import { IncludeAllTypes, closed } from "../shared.js";
import { QueryExpressionContainerV1_0_0 } from "../semantic-query/version-1_0_0.js";
import { DataViewObjectPropertyDefinitions, DataViewWildcard } from "./shared.js";

export type DataViewObjectDefinitionsV1_0_0 = {} & {
  readonly [key: string]: ReadonlyArray<DataViewObjectDefinitionV1_0_0>;
};

export const DataViewObjectDefinitionsV1_0_0: Schema.Codec<DataViewObjectDefinitionsV1_0_0> =
  Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => DataViewObjectDefinitionV1_0_0)));

export type DataViewObjectDefinitionV1_0_0 = {
  readonly selector?: SelectorV1_0_0;
  readonly properties: DataViewObjectPropertyDefinitions;
};

export const DataViewObjectDefinitionV1_0_0: Schema.Codec<DataViewObjectDefinitionV1_0_0> = closed({
  selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
  properties: Schema.suspend(() => DataViewObjectPropertyDefinitions),
});

export type SelectorV1_0_0 = {
  readonly data?: ReadonlyArray<DataRepetitionSelectorV1_0_0>;
  readonly metadata?: string;
  readonly id?: string;
  readonly highlightMatching?: 0 | 1 | 2;
  readonly order?: number;
};

export const SelectorV1_0_0: Schema.Codec<SelectorV1_0_0> = closed({
  data: Schema.optionalKey(Schema.Array(Schema.suspend(() => DataRepetitionSelectorV1_0_0))),
  metadata: Schema.optionalKey(Schema.String),
  id: Schema.optionalKey(Schema.String),
  highlightMatching: Schema.optionalKey(
    Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]),
  ),
  order: Schema.optionalKey(Schema.Finite),
});

export type DataRepetitionSelectorV1_0_0 = {
  readonly scopeId?: QueryExpressionContainerV1_0_0;
  readonly wildcard?: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly roles?: ReadonlyArray<string>;
  readonly total?: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly dataViewWildcard?: DataViewWildcard;
};

export const DataRepetitionSelectorV1_0_0: Schema.Codec<DataRepetitionSelectorV1_0_0> = closed({
  scopeId: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
  wildcard: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0))),
  roles: Schema.optionalKey(Schema.Array(Schema.String)),
  total: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0))),
  dataViewWildcard: Schema.optionalKey(Schema.suspend(() => DataViewWildcard)),
});

export const FormattingObjectDefinitionsDefinitionsV1_0_0 = {
  DataViewObjectDefinitions: DataViewObjectDefinitionsV1_0_0,
  DataViewObjectDefinition: DataViewObjectDefinitionV1_0_0,
  DataViewObjectPropertyDefinitions: DataViewObjectPropertyDefinitions,
  Selector: SelectorV1_0_0,
  DataRepetitionSelector: DataRepetitionSelectorV1_0_0,
  DataViewWildcard: DataViewWildcard,
  DataViewWildcardMatchingOption: IncludeAllTypes,
} as const;

export {
  DataViewObjectDefinitionsV1_0_0 as FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0,
  DataViewObjectDefinitionV1_0_0 as FormattingObjectDefinitionsDataViewObjectDefinitionV1_0_0,
  SelectorV1_0_0 as FormattingObjectDefinitionsSelectorV1_0_0,
  DataRepetitionSelectorV1_0_0 as FormattingObjectDefinitionsDataRepetitionSelectorV1_0_0,
};

export { IncludeAllTypes as FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_0_0 } from "../shared.js";

export {
  DataViewObjectPropertyDefinitions as FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_0_0,
  DataViewWildcard as FormattingObjectDefinitionsDataViewWildcardV1_0_0,
  FormattingObjectDefinitions as FormattingObjectDefinitionsV1_0_0,
} from "./shared.js";
