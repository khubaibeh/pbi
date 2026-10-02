import { Schema } from "effect";

import { IncludeAllTypes } from "../semantic-query/shared.js";
import { QueryExpressionContainerV1_2_0 } from "../semantic-query/version-1.2.0.js";
import { closed } from "../shared.js";

export type DataViewObjectPropertyDefinitions = {} & {
  readonly [key: string]: Schema.Json;
};

export const DataViewObjectPropertyDefinitions: Schema.Codec<DataViewObjectPropertyDefinitions> =
  Schema.Record(Schema.String, Schema.Json);

export type DataViewWildcard = {
  readonly matchingOption: IncludeAllTypes;
};

export const DataViewWildcard: Schema.Codec<DataViewWildcard> = closed({
  matchingOption: Schema.suspend(() => IncludeAllTypes),
});

export type FormattingObjectDefinitions = Schema.Json;

export const FormattingObjectDefinitions: Schema.Codec<FormattingObjectDefinitions> =
  Schema.Json;

export type DataRepetitionSelectorV1_2_0 = {
  readonly scopeId?: QueryExpressionContainerV1_2_0;
  readonly wildcard?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly roles?: ReadonlyArray<string>;
  readonly total?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly dataViewWildcard?: DataViewWildcard;
};

export const DataRepetitionSelectorV1_2_0: Schema.Codec<DataRepetitionSelectorV1_2_0> =
  closed({
    scopeId: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_2_0),
    ),
    wildcard: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
    ),
    roles: Schema.optionalKey(Schema.Array(Schema.String)),
    total: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
    ),
    dataViewWildcard: Schema.optionalKey(
      Schema.suspend(() => DataViewWildcard),
    ),
  });
