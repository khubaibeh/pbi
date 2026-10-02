import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  QueryExpressionContainerV1_0_0,
  QueryExpressionContainerV1_1_0,
  QueryExpressionContainerV1_2_0,
  QueryExpressionContainerV1_3_0,
  QueryExpressionContainerV1_4_0,
} from "../semantic-query/shared.js";

export type FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0 = {} & {
  readonly [key: string]: ReadonlyArray<FormattingObjectDefinitionsDataViewObjectDefinitionV1_0_0>;
};

export const FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectDefinitionV1_0_0)),
  );

export type FormattingObjectDefinitionsDataViewObjectDefinitionV1_0_0 = {
  readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
  readonly properties: FormattingObjectDefinitionsDataViewObjectPropertyDefinitions;
};

export const FormattingObjectDefinitionsDataViewObjectDefinitionV1_0_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionV1_0_0> =
  closed({
    selector: Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsSelectorV1_0_0)),
    properties: Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectPropertyDefinitions),
  });

export type FormattingObjectDefinitionsDataViewObjectPropertyDefinitions = {} & {
  readonly [key: string]: Schema.Json;
};

export const FormattingObjectDefinitionsDataViewObjectPropertyDefinitions: Schema.Codec<FormattingObjectDefinitionsDataViewObjectPropertyDefinitions> =
  Schema.Record(Schema.String, Schema.Json);

export type FormattingObjectDefinitionsSelectorV1_0_0 = {
  readonly data?: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_0_0>;
  readonly metadata?: string;
  readonly id?: string;
  readonly highlightMatching?: 0 | 1 | 2;
  readonly order?: number;
};

export const FormattingObjectDefinitionsSelectorV1_0_0: Schema.Codec<FormattingObjectDefinitionsSelectorV1_0_0> =
  closed({
    data: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataRepetitionSelectorV1_0_0)),
    ),
    metadata: Schema.optionalKey(Schema.String),
    id: Schema.optionalKey(Schema.String),
    highlightMatching: Schema.optionalKey(
      Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]),
    ),
    order: Schema.optionalKey(Schema.Finite),
  });

export type FormattingObjectDefinitionsDataRepetitionSelectorV1_0_0 = {
  readonly scopeId?: QueryExpressionContainerV1_0_0;
  readonly wildcard?: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly roles?: ReadonlyArray<string>;
  readonly total?: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly dataViewWildcard?: FormattingObjectDefinitionsDataViewWildcard;
};

export const FormattingObjectDefinitionsDataRepetitionSelectorV1_0_0: Schema.Codec<FormattingObjectDefinitionsDataRepetitionSelectorV1_0_0> =
  closed({
    scopeId: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
    wildcard: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
    ),
    roles: Schema.optionalKey(Schema.Array(Schema.String)),
    total: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0))),
    dataViewWildcard: Schema.optionalKey(
      Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcard),
    ),
  });

export type FormattingObjectDefinitionsDataViewWildcard = {
  readonly matchingOption: FormattingObjectDefinitionsDataViewWildcardMatchingOption;
};

export const FormattingObjectDefinitionsDataViewWildcard: Schema.Codec<FormattingObjectDefinitionsDataViewWildcard> =
  closed({
    matchingOption: Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcardMatchingOption),
  });

export type FormattingObjectDefinitionsDataViewWildcardMatchingOption = 0 | 1 | 2;

export const FormattingObjectDefinitionsDataViewWildcardMatchingOption: Schema.Codec<FormattingObjectDefinitionsDataViewWildcardMatchingOption> =
  Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]);

export const FormattingObjectDefinitionsDefinitionsV1_0_0 = {
  DataViewObjectDefinitions: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0,
  DataViewObjectDefinition: FormattingObjectDefinitionsDataViewObjectDefinitionV1_0_0,
  DataViewObjectPropertyDefinitions: FormattingObjectDefinitionsDataViewObjectPropertyDefinitions,
  Selector: FormattingObjectDefinitionsSelectorV1_0_0,
  DataRepetitionSelector: FormattingObjectDefinitionsDataRepetitionSelectorV1_0_0,
  DataViewWildcard: FormattingObjectDefinitionsDataViewWildcard,
  DataViewWildcardMatchingOption: FormattingObjectDefinitionsDataViewWildcardMatchingOption,
} as const;

export type FormattingObjectDefinitions = Schema.Json;

export const FormattingObjectDefinitions: Schema.Codec<FormattingObjectDefinitions> = Schema.Json;

export type FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0 = {} & {
  readonly [key: string]: ReadonlyArray<FormattingObjectDefinitionsDataViewObjectDefinitionV1_1_0>;
};

export const FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectDefinitionV1_1_0)),
  );

export type FormattingObjectDefinitionsDataViewObjectDefinitionV1_1_0 = {
  readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
  readonly properties: FormattingObjectDefinitionsDataViewObjectPropertyDefinitions;
};

export const FormattingObjectDefinitionsDataViewObjectDefinitionV1_1_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionV1_1_0> =
  closed({
    selector: Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsSelectorV1_1_0)),
    properties: Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectPropertyDefinitions),
  });

export type FormattingObjectDefinitionsSelectorV1_1_0 = {
  readonly data?: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0>;
  readonly metadata?: string;
  readonly id?: string;
  readonly highlightMatching?: 0 | 1 | 2;
  readonly order?: number;
};

export const FormattingObjectDefinitionsSelectorV1_1_0: Schema.Codec<FormattingObjectDefinitionsSelectorV1_1_0> =
  closed({
    data: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0)),
    ),
    metadata: Schema.optionalKey(Schema.String),
    id: Schema.optionalKey(Schema.String),
    highlightMatching: Schema.optionalKey(
      Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]),
    ),
    order: Schema.optionalKey(Schema.Finite),
  });

export type FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0 = {
  readonly scopeId?: QueryExpressionContainerV1_1_0;
  readonly wildcard?: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly roles?: ReadonlyArray<string>;
  readonly total?: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly dataViewWildcard?: FormattingObjectDefinitionsDataViewWildcard;
};

export const FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0: Schema.Codec<FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0> =
  closed({
    scopeId: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
    wildcard: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
    ),
    roles: Schema.optionalKey(Schema.Array(Schema.String)),
    total: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0))),
    dataViewWildcard: Schema.optionalKey(
      Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcard),
    ),
  });

export const FormattingObjectDefinitionsDefinitionsV1_1_0 = {
  DataViewObjectDefinitions: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0,
  DataViewObjectDefinition: FormattingObjectDefinitionsDataViewObjectDefinitionV1_1_0,
  DataViewObjectPropertyDefinitions: FormattingObjectDefinitionsDataViewObjectPropertyDefinitions,
  Selector: FormattingObjectDefinitionsSelectorV1_1_0,
  DataRepetitionSelector: FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0,
  DataViewWildcard: FormattingObjectDefinitionsDataViewWildcard,
  DataViewWildcardMatchingOption: FormattingObjectDefinitionsDataViewWildcardMatchingOption,
} as const;

export type FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0 = {} & {
  readonly [key: string]: ReadonlyArray<FormattingObjectDefinitionsDataViewObjectDefinitionV1_2_0>;
};

export const FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectDefinitionV1_2_0)),
  );

export type FormattingObjectDefinitionsDataViewObjectDefinitionV1_2_0 = {
  readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
  readonly properties: FormattingObjectDefinitionsDataViewObjectPropertyDefinitions;
};

export const FormattingObjectDefinitionsDataViewObjectDefinitionV1_2_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionV1_2_0> =
  closed({
    selector: Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsSelectorV1_2_0)),
    properties: Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectPropertyDefinitions),
  });

export type FormattingObjectDefinitionsSelectorV1_2_0 = {
  readonly data?: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0>;
  readonly metadata?: string;
  readonly id?: string;
  readonly highlightMatching?: 0 | 1 | 2;
  readonly order?: number;
};

export const FormattingObjectDefinitionsSelectorV1_2_0: Schema.Codec<FormattingObjectDefinitionsSelectorV1_2_0> =
  closed({
    data: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0)),
    ),
    metadata: Schema.optionalKey(Schema.String),
    id: Schema.optionalKey(Schema.String),
    highlightMatching: Schema.optionalKey(
      Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]),
    ),
    order: Schema.optionalKey(Schema.Finite),
  });

export type FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0 = {
  readonly scopeId?: QueryExpressionContainerV1_2_0;
  readonly wildcard?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly roles?: ReadonlyArray<string>;
  readonly total?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly dataViewWildcard?: FormattingObjectDefinitionsDataViewWildcard;
};

export const FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0: Schema.Codec<FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0> =
  closed({
    scopeId: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
    wildcard: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
    ),
    roles: Schema.optionalKey(Schema.Array(Schema.String)),
    total: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0))),
    dataViewWildcard: Schema.optionalKey(
      Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcard),
    ),
  });

export const FormattingObjectDefinitionsDefinitionsV1_2_0 = {
  DataViewObjectDefinitions: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0,
  DataViewObjectDefinition: FormattingObjectDefinitionsDataViewObjectDefinitionV1_2_0,
  DataViewObjectPropertyDefinitions: FormattingObjectDefinitionsDataViewObjectPropertyDefinitions,
  Selector: FormattingObjectDefinitionsSelectorV1_2_0,
  DataRepetitionSelector: FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0,
  DataViewWildcard: FormattingObjectDefinitionsDataViewWildcard,
  DataViewWildcardMatchingOption: FormattingObjectDefinitionsDataViewWildcardMatchingOption,
} as const;

export type FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0 = {} & {
  readonly [key: string]: ReadonlyArray<FormattingObjectDefinitionsDataViewObjectDefinitionV1_3_0>;
};

export const FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectDefinitionV1_3_0)),
  );

export type FormattingObjectDefinitionsDataViewObjectDefinitionV1_3_0 = {
  readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
  readonly properties: FormattingObjectDefinitionsDataViewObjectPropertyDefinitions;
};

export const FormattingObjectDefinitionsDataViewObjectDefinitionV1_3_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionV1_3_0> =
  closed({
    selector: Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsSelectorV1_3_0)),
    properties: Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectPropertyDefinitions),
  });

export type FormattingObjectDefinitionsSelectorV1_3_0 = {
  readonly data?: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0>;
  readonly metadata?: string;
  readonly id?: string;
  readonly highlightMatching?: 0 | 1 | 2;
  readonly hierarchyMatching?: 0 | 1;
  readonly order?: number;
};

export const FormattingObjectDefinitionsSelectorV1_3_0: Schema.Codec<FormattingObjectDefinitionsSelectorV1_3_0> =
  closed({
    data: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0)),
    ),
    metadata: Schema.optionalKey(Schema.String),
    id: Schema.optionalKey(Schema.String),
    highlightMatching: Schema.optionalKey(
      Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]),
    ),
    hierarchyMatching: Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1)])),
    order: Schema.optionalKey(Schema.Finite),
  });

export const FormattingObjectDefinitionsDefinitionsV1_3_0 = {
  DataViewObjectDefinitions: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0,
  DataViewObjectDefinition: FormattingObjectDefinitionsDataViewObjectDefinitionV1_3_0,
  DataViewObjectPropertyDefinitions: FormattingObjectDefinitionsDataViewObjectPropertyDefinitions,
  Selector: FormattingObjectDefinitionsSelectorV1_3_0,
  DataRepetitionSelector: FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0,
  DataViewWildcard: FormattingObjectDefinitionsDataViewWildcard,
  DataViewWildcardMatchingOption: FormattingObjectDefinitionsDataViewWildcardMatchingOption,
} as const;

export type FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0 = {} & {
  readonly [key: string]: ReadonlyArray<FormattingObjectDefinitionsDataViewObjectDefinitionV1_4_0>;
};

export const FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectDefinitionV1_4_0)),
  );

export type FormattingObjectDefinitionsDataViewObjectDefinitionV1_4_0 = {
  readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
  readonly properties: FormattingObjectDefinitionsDataViewObjectPropertyDefinitions;
};

export const FormattingObjectDefinitionsDataViewObjectDefinitionV1_4_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionV1_4_0> =
  closed({
    selector: Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsSelectorV1_4_0)),
    properties: Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectPropertyDefinitions),
  });

export type FormattingObjectDefinitionsSelectorV1_4_0 = {
  readonly data?: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0>;
  readonly metadata?: string;
  readonly id?: string;
  readonly highlightMatching?: 0 | 1 | 2;
  readonly hierarchyMatching?: 0 | 1;
  readonly order?: number;
};

export const FormattingObjectDefinitionsSelectorV1_4_0: Schema.Codec<FormattingObjectDefinitionsSelectorV1_4_0> =
  closed({
    data: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0)),
    ),
    metadata: Schema.optionalKey(Schema.String),
    id: Schema.optionalKey(Schema.String),
    highlightMatching: Schema.optionalKey(
      Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]),
    ),
    hierarchyMatching: Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1)])),
    order: Schema.optionalKey(Schema.Finite),
  });

export type FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0 = {
  readonly scopeId?: QueryExpressionContainerV1_3_0;
  readonly wildcard?: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly roles?: ReadonlyArray<string>;
  readonly total?: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly dataViewWildcard?: FormattingObjectDefinitionsDataViewWildcard;
};

export const FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0: Schema.Codec<FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0> =
  closed({
    scopeId: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
    wildcard: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
    ),
    roles: Schema.optionalKey(Schema.Array(Schema.String)),
    total: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0))),
    dataViewWildcard: Schema.optionalKey(
      Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcard),
    ),
  });

export const FormattingObjectDefinitionsDefinitionsV1_4_0 = {
  DataViewObjectDefinitions: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0,
  DataViewObjectDefinition: FormattingObjectDefinitionsDataViewObjectDefinitionV1_4_0,
  DataViewObjectPropertyDefinitions: FormattingObjectDefinitionsDataViewObjectPropertyDefinitions,
  Selector: FormattingObjectDefinitionsSelectorV1_4_0,
  DataRepetitionSelector: FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0,
  DataViewWildcard: FormattingObjectDefinitionsDataViewWildcard,
  DataViewWildcardMatchingOption: FormattingObjectDefinitionsDataViewWildcardMatchingOption,
} as const;

export type FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0 = {} & {
  readonly [key: string]: ReadonlyArray<FormattingObjectDefinitionsDataViewObjectDefinitionV1_5_0>;
};

export const FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectDefinitionV1_5_0)),
  );

export type FormattingObjectDefinitionsDataViewObjectDefinitionV1_5_0 = {
  readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
  readonly properties: FormattingObjectDefinitionsDataViewObjectPropertyDefinitions;
};

export const FormattingObjectDefinitionsDataViewObjectDefinitionV1_5_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionV1_5_0> =
  closed({
    selector: Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsSelectorV1_5_0)),
    properties: Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectPropertyDefinitions),
  });

export type FormattingObjectDefinitionsSelectorV1_5_0 = {
  readonly data?: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0>;
  readonly metadata?: string;
  readonly id?: string;
  readonly highlightMatching?: 0 | 1 | 2;
  readonly hierarchyMatching?: 0 | 1;
  readonly order?: number;
};

export const FormattingObjectDefinitionsSelectorV1_5_0: Schema.Codec<FormattingObjectDefinitionsSelectorV1_5_0> =
  closed({
    data: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0)),
    ),
    metadata: Schema.optionalKey(Schema.String),
    id: Schema.optionalKey(Schema.String),
    highlightMatching: Schema.optionalKey(
      Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]),
    ),
    hierarchyMatching: Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1)])),
    order: Schema.optionalKey(Schema.Finite),
  });

export type FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0 = {
  readonly scopeId?: QueryExpressionContainerV1_4_0;
  readonly wildcard?: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly roles?: ReadonlyArray<string>;
  readonly total?: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly dataViewWildcard?: FormattingObjectDefinitionsDataViewWildcard;
};

export const FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0: Schema.Codec<FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0> =
  closed({
    scopeId: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
    wildcard: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
    ),
    roles: Schema.optionalKey(Schema.Array(Schema.String)),
    total: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0))),
    dataViewWildcard: Schema.optionalKey(
      Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcard),
    ),
  });

export const FormattingObjectDefinitionsDefinitionsV1_5_0 = {
  DataViewObjectDefinitions: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0,
  DataViewObjectDefinition: FormattingObjectDefinitionsDataViewObjectDefinitionV1_5_0,
  DataViewObjectPropertyDefinitions: FormattingObjectDefinitionsDataViewObjectPropertyDefinitions,
  Selector: FormattingObjectDefinitionsSelectorV1_5_0,
  DataRepetitionSelector: FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0,
  DataViewWildcard: FormattingObjectDefinitionsDataViewWildcard,
  DataViewWildcardMatchingOption: FormattingObjectDefinitionsDataViewWildcardMatchingOption,
} as const;
