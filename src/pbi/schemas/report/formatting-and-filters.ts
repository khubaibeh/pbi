import { Schema } from "effect";
import * as Query from "./semantic-query.js";

// Preserve original keys before checking closed objects, including when callers
// explicitly request excess-property stripping from the decoder.
function closed<const Fields extends Schema.Struct.Fields>(fields: Fields) {
  const allowed = new Set(Object.keys(fields));
  return Schema.StructWithRest(Schema.Struct(fields), [Schema.Record(Schema.String, Schema.Json)])
    .check(Schema.makeFilter((value) => Object.keys(value).every((key) => allowed.has(key)) || "Unexpected object property"));
}

/** DataViewObjectDefinitions in formattingObjectDefinitions 1.0.0. */
export type FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0 = {  } & { readonly [key: string]: ReadonlyArray<FormattingObjectDefinitionsDataViewObjectDefinitionV1_0_0> };
/** Native schema for DataViewObjectDefinitions with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectDefinitionV1_0_0)));

/** DataViewObjectDefinition in formattingObjectDefinitions 1.0.0. */
export type FormattingObjectDefinitionsDataViewObjectDefinitionV1_0_0 = { readonly "selector"?: FormattingObjectDefinitionsSelectorV1_0_0; readonly "properties": FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_0_0; };
/** Native schema for DataViewObjectDefinition with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectDefinitionV1_0_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionV1_0_0> = closed({ "selector": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsSelectorV1_0_0)), "properties": Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_0_0) });

/** DataViewObjectPropertyDefinitions in formattingObjectDefinitions 1.0.0. */
export type FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_0_0 = {  } & { readonly [key: string]: Schema.Json };
/** Native schema for DataViewObjectPropertyDefinitions with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_0_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_0_0> = Schema.Record(Schema.String, Schema.Json);

/** Selector in formattingObjectDefinitions 1.0.0. */
export type FormattingObjectDefinitionsSelectorV1_0_0 = { readonly "data"?: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_0_0>; readonly "metadata"?: string; readonly "id"?: string; readonly "highlightMatching"?: (0) | (1) | (2); readonly "order"?: number; };
/** Native schema for Selector with exact versioned dependencies. */
export const FormattingObjectDefinitionsSelectorV1_0_0: Schema.Codec<FormattingObjectDefinitionsSelectorV1_0_0> = closed({ "data": Schema.optionalKey(Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataRepetitionSelectorV1_0_0))), "metadata": Schema.optionalKey(Schema.String), "id": Schema.optionalKey(Schema.String), "highlightMatching": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])), "order": Schema.optionalKey(Schema.Finite) });

/** DataRepetitionSelector in formattingObjectDefinitions 1.0.0. */
export type FormattingObjectDefinitionsDataRepetitionSelectorV1_0_0 = { readonly "scopeId"?: Query.QueryExpressionContainerV1_0_0; readonly "wildcard"?: ReadonlyArray<Query.QueryExpressionContainerV1_0_0>; readonly "roles"?: ReadonlyArray<string>; readonly "total"?: ReadonlyArray<Query.QueryExpressionContainerV1_0_0>; readonly "dataViewWildcard"?: FormattingObjectDefinitionsDataViewWildcardV1_0_0; };
/** Native schema for DataRepetitionSelector with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataRepetitionSelectorV1_0_0: Schema.Codec<FormattingObjectDefinitionsDataRepetitionSelectorV1_0_0> = closed({ "scopeId": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer)), "wildcard": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer))), "roles": Schema.optionalKey(Schema.Array(Schema.String)), "total": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer))), "dataViewWildcard": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcardV1_0_0)) });

/** DataViewWildcard in formattingObjectDefinitions 1.0.0. */
export type FormattingObjectDefinitionsDataViewWildcardV1_0_0 = { readonly "matchingOption": FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_0_0; };
/** Native schema for DataViewWildcard with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewWildcardV1_0_0: Schema.Codec<FormattingObjectDefinitionsDataViewWildcardV1_0_0> = closed({ "matchingOption": Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_0_0) });

/** DataViewWildcardMatchingOption in formattingObjectDefinitions 1.0.0. */
export type FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_0_0 = (0) | (1) | (2);
/** Native schema for DataViewWildcardMatchingOption with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_0_0: Schema.Codec<FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_0_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]);

/** Named formattingObjectDefinitions definitions for 1.0.0. */
export const FormattingObjectDefinitionsDefinitionsV1_0_0 = {
  DataViewObjectDefinitions: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0,
  DataViewObjectDefinition: FormattingObjectDefinitionsDataViewObjectDefinitionV1_0_0,
  DataViewObjectPropertyDefinitions: FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_0_0,
  Selector: FormattingObjectDefinitionsSelectorV1_0_0,
  DataRepetitionSelector: FormattingObjectDefinitionsDataRepetitionSelectorV1_0_0,
  DataViewWildcard: FormattingObjectDefinitionsDataViewWildcardV1_0_0,
  DataViewWildcardMatchingOption: FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_0_0
} as const;

/** Standalone formattingObjectDefinitions 1.0.0 root: source declares definitions only. */
export type FormattingObjectDefinitionsV1_0_0 = Schema.Json;
/** Native document schema retaining the source JSON representation. */
export const FormattingObjectDefinitionsV1_0_0: Schema.Codec<FormattingObjectDefinitionsV1_0_0> = Schema.Json;

/** DataViewObjectDefinitions in formattingObjectDefinitions 1.1.0. */
export type FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0 = {  } & { readonly [key: string]: ReadonlyArray<FormattingObjectDefinitionsDataViewObjectDefinitionV1_1_0> };
/** Native schema for DataViewObjectDefinitions with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectDefinitionV1_1_0)));

/** DataViewObjectDefinition in formattingObjectDefinitions 1.1.0. */
export type FormattingObjectDefinitionsDataViewObjectDefinitionV1_1_0 = { readonly "selector"?: FormattingObjectDefinitionsSelectorV1_1_0; readonly "properties": FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_1_0; };
/** Native schema for DataViewObjectDefinition with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectDefinitionV1_1_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionV1_1_0> = closed({ "selector": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsSelectorV1_1_0)), "properties": Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_1_0) });

/** DataViewObjectPropertyDefinitions in formattingObjectDefinitions 1.1.0. */
export type FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_1_0 = {  } & { readonly [key: string]: Schema.Json };
/** Native schema for DataViewObjectPropertyDefinitions with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_1_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_1_0> = Schema.Record(Schema.String, Schema.Json);

/** Selector in formattingObjectDefinitions 1.1.0. */
export type FormattingObjectDefinitionsSelectorV1_1_0 = { readonly "data"?: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0>; readonly "metadata"?: string; readonly "id"?: string; readonly "highlightMatching"?: (0) | (1) | (2); readonly "order"?: number; };
/** Native schema for Selector with exact versioned dependencies. */
export const FormattingObjectDefinitionsSelectorV1_1_0: Schema.Codec<FormattingObjectDefinitionsSelectorV1_1_0> = closed({ "data": Schema.optionalKey(Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0))), "metadata": Schema.optionalKey(Schema.String), "id": Schema.optionalKey(Schema.String), "highlightMatching": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])), "order": Schema.optionalKey(Schema.Finite) });

/** DataRepetitionSelector in formattingObjectDefinitions 1.1.0. */
export type FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0 = { readonly "scopeId"?: Query.QueryExpressionContainerV1_1_0; readonly "wildcard"?: ReadonlyArray<Query.QueryExpressionContainerV1_1_0>; readonly "roles"?: ReadonlyArray<string>; readonly "total"?: ReadonlyArray<Query.QueryExpressionContainerV1_1_0>; readonly "dataViewWildcard"?: FormattingObjectDefinitionsDataViewWildcardV1_1_0; };
/** Native schema for DataRepetitionSelector with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0: Schema.Codec<FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0> = closed({ "scopeId": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer)), "wildcard": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer))), "roles": Schema.optionalKey(Schema.Array(Schema.String)), "total": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer))), "dataViewWildcard": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcardV1_1_0)) });

/** DataViewWildcard in formattingObjectDefinitions 1.1.0. */
export type FormattingObjectDefinitionsDataViewWildcardV1_1_0 = { readonly "matchingOption": FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_1_0; };
/** Native schema for DataViewWildcard with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewWildcardV1_1_0: Schema.Codec<FormattingObjectDefinitionsDataViewWildcardV1_1_0> = closed({ "matchingOption": Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_1_0) });

/** DataViewWildcardMatchingOption in formattingObjectDefinitions 1.1.0. */
export type FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_1_0 = (0) | (1) | (2);
/** Native schema for DataViewWildcardMatchingOption with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_1_0: Schema.Codec<FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_1_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]);

/** Named formattingObjectDefinitions definitions for 1.1.0. */
export const FormattingObjectDefinitionsDefinitionsV1_1_0 = {
  DataViewObjectDefinitions: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0,
  DataViewObjectDefinition: FormattingObjectDefinitionsDataViewObjectDefinitionV1_1_0,
  DataViewObjectPropertyDefinitions: FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_1_0,
  Selector: FormattingObjectDefinitionsSelectorV1_1_0,
  DataRepetitionSelector: FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0,
  DataViewWildcard: FormattingObjectDefinitionsDataViewWildcardV1_1_0,
  DataViewWildcardMatchingOption: FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_1_0
} as const;

/** Standalone formattingObjectDefinitions 1.1.0 root: source declares definitions only. */
export type FormattingObjectDefinitionsV1_1_0 = Schema.Json;
/** Native document schema retaining the source JSON representation. */
export const FormattingObjectDefinitionsV1_1_0: Schema.Codec<FormattingObjectDefinitionsV1_1_0> = Schema.Json;

/** DataViewObjectDefinitions in formattingObjectDefinitions 1.2.0. */
export type FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0 = {  } & { readonly [key: string]: ReadonlyArray<FormattingObjectDefinitionsDataViewObjectDefinitionV1_2_0> };
/** Native schema for DataViewObjectDefinitions with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectDefinitionV1_2_0)));

/** DataViewObjectDefinition in formattingObjectDefinitions 1.2.0. */
export type FormattingObjectDefinitionsDataViewObjectDefinitionV1_2_0 = { readonly "selector"?: FormattingObjectDefinitionsSelectorV1_2_0; readonly "properties": FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_2_0; };
/** Native schema for DataViewObjectDefinition with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectDefinitionV1_2_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionV1_2_0> = closed({ "selector": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsSelectorV1_2_0)), "properties": Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_2_0) });

/** DataViewObjectPropertyDefinitions in formattingObjectDefinitions 1.2.0. */
export type FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_2_0 = {  } & { readonly [key: string]: Schema.Json };
/** Native schema for DataViewObjectPropertyDefinitions with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_2_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_2_0> = Schema.Record(Schema.String, Schema.Json);

/** Selector in formattingObjectDefinitions 1.2.0. */
export type FormattingObjectDefinitionsSelectorV1_2_0 = { readonly "data"?: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0>; readonly "metadata"?: string; readonly "id"?: string; readonly "highlightMatching"?: (0) | (1) | (2); readonly "order"?: number; };
/** Native schema for Selector with exact versioned dependencies. */
export const FormattingObjectDefinitionsSelectorV1_2_0: Schema.Codec<FormattingObjectDefinitionsSelectorV1_2_0> = closed({ "data": Schema.optionalKey(Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0))), "metadata": Schema.optionalKey(Schema.String), "id": Schema.optionalKey(Schema.String), "highlightMatching": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])), "order": Schema.optionalKey(Schema.Finite) });

/** DataRepetitionSelector in formattingObjectDefinitions 1.2.0. */
export type FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0 = { readonly "scopeId"?: Query.QueryExpressionContainerV1_2_0; readonly "wildcard"?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>; readonly "roles"?: ReadonlyArray<string>; readonly "total"?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>; readonly "dataViewWildcard"?: FormattingObjectDefinitionsDataViewWildcardV1_2_0; };
/** Native schema for DataRepetitionSelector with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0: Schema.Codec<FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0> = closed({ "scopeId": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer)), "wildcard": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer))), "roles": Schema.optionalKey(Schema.Array(Schema.String)), "total": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer))), "dataViewWildcard": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcardV1_2_0)) });

/** DataViewWildcard in formattingObjectDefinitions 1.2.0. */
export type FormattingObjectDefinitionsDataViewWildcardV1_2_0 = { readonly "matchingOption": FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_2_0; };
/** Native schema for DataViewWildcard with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewWildcardV1_2_0: Schema.Codec<FormattingObjectDefinitionsDataViewWildcardV1_2_0> = closed({ "matchingOption": Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_2_0) });

/** DataViewWildcardMatchingOption in formattingObjectDefinitions 1.2.0. */
export type FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_2_0 = (0) | (1) | (2);
/** Native schema for DataViewWildcardMatchingOption with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_2_0: Schema.Codec<FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_2_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]);

/** Named formattingObjectDefinitions definitions for 1.2.0. */
export const FormattingObjectDefinitionsDefinitionsV1_2_0 = {
  DataViewObjectDefinitions: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0,
  DataViewObjectDefinition: FormattingObjectDefinitionsDataViewObjectDefinitionV1_2_0,
  DataViewObjectPropertyDefinitions: FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_2_0,
  Selector: FormattingObjectDefinitionsSelectorV1_2_0,
  DataRepetitionSelector: FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0,
  DataViewWildcard: FormattingObjectDefinitionsDataViewWildcardV1_2_0,
  DataViewWildcardMatchingOption: FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_2_0
} as const;

/** Standalone formattingObjectDefinitions 1.2.0 root: source declares definitions only. */
export type FormattingObjectDefinitionsV1_2_0 = Schema.Json;
/** Native document schema retaining the source JSON representation. */
export const FormattingObjectDefinitionsV1_2_0: Schema.Codec<FormattingObjectDefinitionsV1_2_0> = Schema.Json;

/** DataViewObjectDefinitions in formattingObjectDefinitions 1.3.0. */
export type FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0 = {  } & { readonly [key: string]: ReadonlyArray<FormattingObjectDefinitionsDataViewObjectDefinitionV1_3_0> };
/** Native schema for DataViewObjectDefinitions with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectDefinitionV1_3_0)));

/** DataViewObjectDefinition in formattingObjectDefinitions 1.3.0. */
export type FormattingObjectDefinitionsDataViewObjectDefinitionV1_3_0 = { readonly "selector"?: FormattingObjectDefinitionsSelectorV1_3_0; readonly "properties": FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_3_0; };
/** Native schema for DataViewObjectDefinition with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectDefinitionV1_3_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionV1_3_0> = closed({ "selector": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsSelectorV1_3_0)), "properties": Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_3_0) });

/** DataViewObjectPropertyDefinitions in formattingObjectDefinitions 1.3.0. */
export type FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_3_0 = {  } & { readonly [key: string]: Schema.Json };
/** Native schema for DataViewObjectPropertyDefinitions with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_3_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_3_0> = Schema.Record(Schema.String, Schema.Json);

/** Selector in formattingObjectDefinitions 1.3.0. */
export type FormattingObjectDefinitionsSelectorV1_3_0 = { readonly "data"?: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_3_0>; readonly "metadata"?: string; readonly "id"?: string; readonly "highlightMatching"?: (0) | (1) | (2); readonly "hierarchyMatching"?: (0) | (1); readonly "order"?: number; };
/** Native schema for Selector with exact versioned dependencies. */
export const FormattingObjectDefinitionsSelectorV1_3_0: Schema.Codec<FormattingObjectDefinitionsSelectorV1_3_0> = closed({ "data": Schema.optionalKey(Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataRepetitionSelectorV1_3_0))), "metadata": Schema.optionalKey(Schema.String), "id": Schema.optionalKey(Schema.String), "highlightMatching": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])), "hierarchyMatching": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1)])), "order": Schema.optionalKey(Schema.Finite) });

/** DataRepetitionSelector in formattingObjectDefinitions 1.3.0. */
export type FormattingObjectDefinitionsDataRepetitionSelectorV1_3_0 = { readonly "scopeId"?: Query.QueryExpressionContainerV1_2_0; readonly "wildcard"?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>; readonly "roles"?: ReadonlyArray<string>; readonly "total"?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>; readonly "dataViewWildcard"?: FormattingObjectDefinitionsDataViewWildcardV1_3_0; };
/** Native schema for DataRepetitionSelector with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataRepetitionSelectorV1_3_0: Schema.Codec<FormattingObjectDefinitionsDataRepetitionSelectorV1_3_0> = closed({ "scopeId": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer)), "wildcard": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer))), "roles": Schema.optionalKey(Schema.Array(Schema.String)), "total": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer))), "dataViewWildcard": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcardV1_3_0)) });

/** DataViewWildcard in formattingObjectDefinitions 1.3.0. */
export type FormattingObjectDefinitionsDataViewWildcardV1_3_0 = { readonly "matchingOption": FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_3_0; };
/** Native schema for DataViewWildcard with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewWildcardV1_3_0: Schema.Codec<FormattingObjectDefinitionsDataViewWildcardV1_3_0> = closed({ "matchingOption": Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_3_0) });

/** DataViewWildcardMatchingOption in formattingObjectDefinitions 1.3.0. */
export type FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_3_0 = (0) | (1) | (2);
/** Native schema for DataViewWildcardMatchingOption with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_3_0: Schema.Codec<FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_3_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]);

/** Named formattingObjectDefinitions definitions for 1.3.0. */
export const FormattingObjectDefinitionsDefinitionsV1_3_0 = {
  DataViewObjectDefinitions: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0,
  DataViewObjectDefinition: FormattingObjectDefinitionsDataViewObjectDefinitionV1_3_0,
  DataViewObjectPropertyDefinitions: FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_3_0,
  Selector: FormattingObjectDefinitionsSelectorV1_3_0,
  DataRepetitionSelector: FormattingObjectDefinitionsDataRepetitionSelectorV1_3_0,
  DataViewWildcard: FormattingObjectDefinitionsDataViewWildcardV1_3_0,
  DataViewWildcardMatchingOption: FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_3_0
} as const;

/** Standalone formattingObjectDefinitions 1.3.0 root: source declares definitions only. */
export type FormattingObjectDefinitionsV1_3_0 = Schema.Json;
/** Native document schema retaining the source JSON representation. */
export const FormattingObjectDefinitionsV1_3_0: Schema.Codec<FormattingObjectDefinitionsV1_3_0> = Schema.Json;

/** DataViewObjectDefinitions in formattingObjectDefinitions 1.4.0. */
export type FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0 = {  } & { readonly [key: string]: ReadonlyArray<FormattingObjectDefinitionsDataViewObjectDefinitionV1_4_0> };
/** Native schema for DataViewObjectDefinitions with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectDefinitionV1_4_0)));

/** DataViewObjectDefinition in formattingObjectDefinitions 1.4.0. */
export type FormattingObjectDefinitionsDataViewObjectDefinitionV1_4_0 = { readonly "selector"?: FormattingObjectDefinitionsSelectorV1_4_0; readonly "properties": FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_4_0; };
/** Native schema for DataViewObjectDefinition with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectDefinitionV1_4_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionV1_4_0> = closed({ "selector": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsSelectorV1_4_0)), "properties": Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_4_0) });

/** DataViewObjectPropertyDefinitions in formattingObjectDefinitions 1.4.0. */
export type FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_4_0 = {  } & { readonly [key: string]: Schema.Json };
/** Native schema for DataViewObjectPropertyDefinitions with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_4_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_4_0> = Schema.Record(Schema.String, Schema.Json);

/** Selector in formattingObjectDefinitions 1.4.0. */
export type FormattingObjectDefinitionsSelectorV1_4_0 = { readonly "data"?: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0>; readonly "metadata"?: string; readonly "id"?: string; readonly "highlightMatching"?: (0) | (1) | (2); readonly "hierarchyMatching"?: (0) | (1); readonly "order"?: number; };
/** Native schema for Selector with exact versioned dependencies. */
export const FormattingObjectDefinitionsSelectorV1_4_0: Schema.Codec<FormattingObjectDefinitionsSelectorV1_4_0> = closed({ "data": Schema.optionalKey(Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0))), "metadata": Schema.optionalKey(Schema.String), "id": Schema.optionalKey(Schema.String), "highlightMatching": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])), "hierarchyMatching": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1)])), "order": Schema.optionalKey(Schema.Finite) });

/** DataRepetitionSelector in formattingObjectDefinitions 1.4.0. */
export type FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0 = { readonly "scopeId"?: Query.QueryExpressionContainerV1_3_0; readonly "wildcard"?: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>; readonly "roles"?: ReadonlyArray<string>; readonly "total"?: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>; readonly "dataViewWildcard"?: FormattingObjectDefinitionsDataViewWildcardV1_4_0; };
/** Native schema for DataRepetitionSelector with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0: Schema.Codec<FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0> = closed({ "scopeId": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer)), "wildcard": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer))), "roles": Schema.optionalKey(Schema.Array(Schema.String)), "total": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer))), "dataViewWildcard": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcardV1_4_0)) });

/** DataViewWildcard in formattingObjectDefinitions 1.4.0. */
export type FormattingObjectDefinitionsDataViewWildcardV1_4_0 = { readonly "matchingOption": FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_4_0; };
/** Native schema for DataViewWildcard with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewWildcardV1_4_0: Schema.Codec<FormattingObjectDefinitionsDataViewWildcardV1_4_0> = closed({ "matchingOption": Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_4_0) });

/** DataViewWildcardMatchingOption in formattingObjectDefinitions 1.4.0. */
export type FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_4_0 = (0) | (1) | (2);
/** Native schema for DataViewWildcardMatchingOption with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_4_0: Schema.Codec<FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_4_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]);

/** Named formattingObjectDefinitions definitions for 1.4.0. */
export const FormattingObjectDefinitionsDefinitionsV1_4_0 = {
  DataViewObjectDefinitions: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0,
  DataViewObjectDefinition: FormattingObjectDefinitionsDataViewObjectDefinitionV1_4_0,
  DataViewObjectPropertyDefinitions: FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_4_0,
  Selector: FormattingObjectDefinitionsSelectorV1_4_0,
  DataRepetitionSelector: FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0,
  DataViewWildcard: FormattingObjectDefinitionsDataViewWildcardV1_4_0,
  DataViewWildcardMatchingOption: FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_4_0
} as const;

/** Standalone formattingObjectDefinitions 1.4.0 root: source declares definitions only. */
export type FormattingObjectDefinitionsV1_4_0 = Schema.Json;
/** Native document schema retaining the source JSON representation. */
export const FormattingObjectDefinitionsV1_4_0: Schema.Codec<FormattingObjectDefinitionsV1_4_0> = Schema.Json;

/** DataViewObjectDefinitions in formattingObjectDefinitions 1.5.0. */
export type FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0 = {  } & { readonly [key: string]: ReadonlyArray<FormattingObjectDefinitionsDataViewObjectDefinitionV1_5_0> };
/** Native schema for DataViewObjectDefinitions with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectDefinitionV1_5_0)));

/** DataViewObjectDefinition in formattingObjectDefinitions 1.5.0. */
export type FormattingObjectDefinitionsDataViewObjectDefinitionV1_5_0 = { readonly "selector"?: FormattingObjectDefinitionsSelectorV1_5_0; readonly "properties": FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_5_0; };
/** Native schema for DataViewObjectDefinition with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectDefinitionV1_5_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectDefinitionV1_5_0> = closed({ "selector": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsSelectorV1_5_0)), "properties": Schema.suspend(() => FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_5_0) });

/** DataViewObjectPropertyDefinitions in formattingObjectDefinitions 1.5.0. */
export type FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_5_0 = {  } & { readonly [key: string]: Schema.Json };
/** Native schema for DataViewObjectPropertyDefinitions with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_5_0: Schema.Codec<FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_5_0> = Schema.Record(Schema.String, Schema.Json);

/** Selector in formattingObjectDefinitions 1.5.0. */
export type FormattingObjectDefinitionsSelectorV1_5_0 = { readonly "data"?: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0>; readonly "metadata"?: string; readonly "id"?: string; readonly "highlightMatching"?: (0) | (1) | (2); readonly "hierarchyMatching"?: (0) | (1); readonly "order"?: number; };
/** Native schema for Selector with exact versioned dependencies. */
export const FormattingObjectDefinitionsSelectorV1_5_0: Schema.Codec<FormattingObjectDefinitionsSelectorV1_5_0> = closed({ "data": Schema.optionalKey(Schema.Array(Schema.suspend(() => FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0))), "metadata": Schema.optionalKey(Schema.String), "id": Schema.optionalKey(Schema.String), "highlightMatching": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])), "hierarchyMatching": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1)])), "order": Schema.optionalKey(Schema.Finite) });

/** DataRepetitionSelector in formattingObjectDefinitions 1.5.0. */
export type FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0 = { readonly "scopeId"?: Query.QueryExpressionContainerV1_4_0; readonly "wildcard"?: ReadonlyArray<Query.QueryExpressionContainerV1_4_0>; readonly "roles"?: ReadonlyArray<string>; readonly "total"?: ReadonlyArray<Query.QueryExpressionContainerV1_4_0>; readonly "dataViewWildcard"?: FormattingObjectDefinitionsDataViewWildcardV1_5_0; };
/** Native schema for DataRepetitionSelector with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0: Schema.Codec<FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0> = closed({ "scopeId": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer)), "wildcard": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer))), "roles": Schema.optionalKey(Schema.Array(Schema.String)), "total": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer))), "dataViewWildcard": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcardV1_5_0)) });

/** DataViewWildcard in formattingObjectDefinitions 1.5.0. */
export type FormattingObjectDefinitionsDataViewWildcardV1_5_0 = { readonly "matchingOption": FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_5_0; };
/** Native schema for DataViewWildcard with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewWildcardV1_5_0: Schema.Codec<FormattingObjectDefinitionsDataViewWildcardV1_5_0> = closed({ "matchingOption": Schema.suspend(() => FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_5_0) });

/** DataViewWildcardMatchingOption in formattingObjectDefinitions 1.5.0. */
export type FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_5_0 = (0) | (1) | (2);
/** Native schema for DataViewWildcardMatchingOption with exact versioned dependencies. */
export const FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_5_0: Schema.Codec<FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_5_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]);

/** Named formattingObjectDefinitions definitions for 1.5.0. */
export const FormattingObjectDefinitionsDefinitionsV1_5_0 = {
  DataViewObjectDefinitions: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0,
  DataViewObjectDefinition: FormattingObjectDefinitionsDataViewObjectDefinitionV1_5_0,
  DataViewObjectPropertyDefinitions: FormattingObjectDefinitionsDataViewObjectPropertyDefinitionsV1_5_0,
  Selector: FormattingObjectDefinitionsSelectorV1_5_0,
  DataRepetitionSelector: FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0,
  DataViewWildcard: FormattingObjectDefinitionsDataViewWildcardV1_5_0,
  DataViewWildcardMatchingOption: FormattingObjectDefinitionsDataViewWildcardMatchingOptionV1_5_0
} as const;

/** Standalone formattingObjectDefinitions 1.5.0 root: source declares definitions only. */
export type FormattingObjectDefinitionsV1_5_0 = Schema.Json;
/** Native document schema retaining the source JSON representation. */
export const FormattingObjectDefinitionsV1_5_0: Schema.Codec<FormattingObjectDefinitionsV1_5_0> = Schema.Json;

/** FilterContainer in filterConfiguration 1.0.0. */
export type FilterConfigurationFilterContainerV1_0_0 = { readonly "name": string; readonly "displayName"?: string; readonly "ordinal"?: number; readonly "field"?: Query.QueryExpressionContainerV1_2_0; readonly "type"?: ("Categorical") | ("Range") | ("Advanced") | ("Passthrough") | ("TopN") | ("Include") | ("Exclude") | ("RelativeDate") | ("Tuple") | ("RelativeTime") | ("VisualTopN"); readonly "filter"?: Query.FilterDefinitionV1_2_0; readonly "restatement"?: string; readonly "howCreated"?: ("Auto") | ("User") | ("Drill") | ("Include") | ("Exclude") | ("Drillthrough"); readonly "isHiddenInViewMode"?: boolean; readonly "isLockedInViewMode"?: boolean; readonly "objects"?: FilterConfigurationFilterContainerFormattingObjectsV1_0_0; };
/** Native schema for FilterContainer with exact versioned dependencies. */
export const FilterConfigurationFilterContainerV1_0_0: Schema.Codec<FilterConfigurationFilterContainerV1_0_0> = closed({ "name": Schema.String, "displayName": Schema.optionalKey(Schema.String), "ordinal": Schema.optionalKey(Schema.Finite), "field": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer)), "type": Schema.optionalKey(Schema.Union([Schema.Literal("Categorical"), Schema.Literal("Range"), Schema.Literal("Advanced"), Schema.Literal("Passthrough"), Schema.Literal("TopN"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("RelativeDate"), Schema.Literal("Tuple"), Schema.Literal("RelativeTime"), Schema.Literal("VisualTopN")])), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.FilterDefinition)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal("Auto"), Schema.Literal("User"), Schema.Literal("Drill"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("Drillthrough")])), "isHiddenInViewMode": Schema.optionalKey(Schema.Boolean), "isLockedInViewMode": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => FilterConfigurationFilterContainerFormattingObjectsV1_0_0)) });

/** FilterContainerFormattingObjects in filterConfiguration 1.0.0. */
export type FilterConfigurationFilterContainerFormattingObjectsV1_0_0 = { readonly "general"?: ReadonlyArray<{ readonly "selector"?: FormattingObjectDefinitionsSelectorV1_2_0; readonly "properties": FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_0_0; }>; };
/** Native schema for FilterContainerFormattingObjects with exact versioned dependencies. */
export const FilterConfigurationFilterContainerFormattingObjectsV1_0_0: Schema.Codec<FilterConfigurationFilterContainerFormattingObjectsV1_0_0> = closed({ "general": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector)), "properties": Schema.suspend(() => FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_0_0) }))) });

/** FilterContainerFormattingObjectsProperties in filterConfiguration 1.0.0. */
export type FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_0_0 = { readonly "requireSingleSelect"?: Schema.Json; readonly "isInvertedSelectionMode"?: Schema.Json; };
/** Native schema for FilterContainerFormattingObjectsProperties with exact versioned dependencies. */
export const FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_0_0: Schema.Codec<FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_0_0> = closed({ "requireSingleSelect": Schema.optionalKey(Schema.Json), "isInvertedSelectionMode": Schema.optionalKey(Schema.Json) });

/** Named filterConfiguration definitions for 1.0.0. */
export const FilterConfigurationDefinitionsV1_0_0 = {
  FilterContainer: FilterConfigurationFilterContainerV1_0_0,
  FilterContainerFormattingObjects: FilterConfigurationFilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties: FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_0_0
} as const;

/** Standalone filterConfiguration 1.0.0. */
export type FilterConfigurationV1_0_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.0.0/schema.json"; readonly "filters"?: ReadonlyArray<FilterConfigurationFilterContainerV1_0_0>; readonly "filterSortOrder"?: ("Ascending") | ("Descending") | ("Custom"); };
/** Native document schema retaining the source JSON representation. */
export const FilterConfigurationV1_0_0: Schema.Codec<FilterConfigurationV1_0_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.0.0/schema.json"), "filters": Schema.optionalKey(Schema.Array(Schema.suspend(() => FilterConfigurationFilterContainerV1_0_0))), "filterSortOrder": Schema.optionalKey(Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending"), Schema.Literal("Custom")])) });

/** FilterContainer in filterConfiguration 1.0.0 embedded. */
export type FilterConfigurationEmbeddedFilterContainerV1_0_0 = { readonly "name": string; readonly "displayName"?: string; readonly "ordinal"?: number; readonly "field"?: Query.QueryExpressionContainerV1_2_0; readonly "type"?: ("Categorical") | ("Range") | ("Advanced") | ("Passthrough") | ("TopN") | ("Include") | ("Exclude") | ("RelativeDate") | ("Tuple") | ("RelativeTime") | ("VisualTopN"); readonly "filter"?: Query.FilterDefinitionV1_2_0; readonly "restatement"?: string; readonly "howCreated"?: ("Auto") | ("User") | ("Drill") | ("Include") | ("Exclude") | ("Drillthrough"); readonly "isHiddenInViewMode"?: boolean; readonly "isLockedInViewMode"?: boolean; readonly "objects"?: FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_0_0; };
/** Native schema for FilterContainer with exact versioned dependencies. */
export const FilterConfigurationEmbeddedFilterContainerV1_0_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerV1_0_0> = closed({ "name": Schema.String, "displayName": Schema.optionalKey(Schema.String), "ordinal": Schema.optionalKey(Schema.Finite), "field": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer)), "type": Schema.optionalKey(Schema.Union([Schema.Literal("Categorical"), Schema.Literal("Range"), Schema.Literal("Advanced"), Schema.Literal("Passthrough"), Schema.Literal("TopN"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("RelativeDate"), Schema.Literal("Tuple"), Schema.Literal("RelativeTime"), Schema.Literal("VisualTopN")])), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.FilterDefinition)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal("Auto"), Schema.Literal("User"), Schema.Literal("Drill"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("Drillthrough")])), "isHiddenInViewMode": Schema.optionalKey(Schema.Boolean), "isLockedInViewMode": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_0_0)) });

/** FilterContainerFormattingObjects in filterConfiguration 1.0.0 embedded. */
export type FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_0_0 = { readonly "general"?: ReadonlyArray<{ readonly "selector"?: FormattingObjectDefinitionsSelectorV1_2_0; readonly "properties": FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_0_0; }>; };
/** Native schema for FilterContainerFormattingObjects with exact versioned dependencies. */
export const FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_0_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_0_0> = closed({ "general": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector)), "properties": Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_0_0) }))) });

/** FilterContainerFormattingObjectsProperties in filterConfiguration 1.0.0 embedded. */
export type FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_0_0 = { readonly "requireSingleSelect"?: Schema.Json; readonly "isInvertedSelectionMode"?: Schema.Json; };
/** Native schema for FilterContainerFormattingObjectsProperties with exact versioned dependencies. */
export const FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_0_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_0_0> = closed({ "requireSingleSelect": Schema.optionalKey(Schema.Json), "isInvertedSelectionMode": Schema.optionalKey(Schema.Json) });

/** Named filterConfiguration definitions for 1.0.0 embedded. */
export const FilterConfigurationEmbeddedDefinitionsV1_0_0 = {
  FilterContainer: FilterConfigurationEmbeddedFilterContainerV1_0_0,
  FilterContainerFormattingObjects: FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties: FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_0_0
} as const;

/** Embedded filterConfiguration 1.0.0. */
export type FilterConfigurationEmbeddedV1_0_0 = { readonly "filters"?: ReadonlyArray<FilterConfigurationEmbeddedFilterContainerV1_0_0>; readonly "filterSortOrder"?: ("Ascending") | ("Descending") | ("Custom"); };
/** Native document schema retaining the source JSON representation. */
export const FilterConfigurationEmbeddedV1_0_0: Schema.Codec<FilterConfigurationEmbeddedV1_0_0> = closed({ "filters": Schema.optionalKey(Schema.Array(Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerV1_0_0))), "filterSortOrder": Schema.optionalKey(Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending"), Schema.Literal("Custom")])) });

/** FilterContainer in filterConfiguration 1.1.0. */
export type FilterConfigurationFilterContainerV1_1_0 = { readonly "name": string; readonly "displayName"?: string; readonly "ordinal"?: number; readonly "field"?: Query.QueryExpressionContainerV1_2_0; readonly "type"?: ("Categorical") | ("Range") | ("Advanced") | ("Passthrough") | ("TopN") | ("Include") | ("Exclude") | ("RelativeDate") | ("Tuple") | ("RelativeTime") | ("VisualTopN"); readonly "filter"?: Query.FilterDefinitionV1_2_0; readonly "restatement"?: string; readonly "howCreated"?: ("Auto") | ("User") | ("Drill") | ("Include") | ("Exclude") | ("Drillthrough"); readonly "isHiddenInViewMode"?: boolean; readonly "isLockedInViewMode"?: boolean; readonly "objects"?: FilterConfigurationFilterContainerFormattingObjectsV1_1_0; };
/** Native schema for FilterContainer with exact versioned dependencies. */
export const FilterConfigurationFilterContainerV1_1_0: Schema.Codec<FilterConfigurationFilterContainerV1_1_0> = closed({ "name": Schema.String, "displayName": Schema.optionalKey(Schema.String), "ordinal": Schema.optionalKey(Schema.Finite), "field": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer)), "type": Schema.optionalKey(Schema.Union([Schema.Literal("Categorical"), Schema.Literal("Range"), Schema.Literal("Advanced"), Schema.Literal("Passthrough"), Schema.Literal("TopN"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("RelativeDate"), Schema.Literal("Tuple"), Schema.Literal("RelativeTime"), Schema.Literal("VisualTopN")])), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.FilterDefinition)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal("Auto"), Schema.Literal("User"), Schema.Literal("Drill"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("Drillthrough")])), "isHiddenInViewMode": Schema.optionalKey(Schema.Boolean), "isLockedInViewMode": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => FilterConfigurationFilterContainerFormattingObjectsV1_1_0)) });

/** FilterContainerFormattingObjects in filterConfiguration 1.1.0. */
export type FilterConfigurationFilterContainerFormattingObjectsV1_1_0 = { readonly "general"?: ReadonlyArray<{ readonly "selector"?: FormattingObjectDefinitionsSelectorV1_3_0; readonly "properties": FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_1_0; }>; };
/** Native schema for FilterContainerFormattingObjects with exact versioned dependencies. */
export const FilterConfigurationFilterContainerFormattingObjectsV1_1_0: Schema.Codec<FilterConfigurationFilterContainerFormattingObjectsV1_1_0> = closed({ "general": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector)), "properties": Schema.suspend(() => FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_1_0) }))) });

/** FilterContainerFormattingObjectsProperties in filterConfiguration 1.1.0. */
export type FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_1_0 = { readonly "requireSingleSelect"?: Schema.Json; readonly "isInvertedSelectionMode"?: Schema.Json; };
/** Native schema for FilterContainerFormattingObjectsProperties with exact versioned dependencies. */
export const FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_1_0: Schema.Codec<FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_1_0> = closed({ "requireSingleSelect": Schema.optionalKey(Schema.Json), "isInvertedSelectionMode": Schema.optionalKey(Schema.Json) });

/** Named filterConfiguration definitions for 1.1.0. */
export const FilterConfigurationDefinitionsV1_1_0 = {
  FilterContainer: FilterConfigurationFilterContainerV1_1_0,
  FilterContainerFormattingObjects: FilterConfigurationFilterContainerFormattingObjectsV1_1_0,
  FilterContainerFormattingObjectsProperties: FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_1_0
} as const;

/** Standalone filterConfiguration 1.1.0. */
export type FilterConfigurationV1_1_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.1.0/schema.json"; readonly "filters"?: ReadonlyArray<FilterConfigurationFilterContainerV1_1_0>; readonly "filterSortOrder"?: ("Ascending") | ("Descending") | ("Custom"); };
/** Native document schema retaining the source JSON representation. */
export const FilterConfigurationV1_1_0: Schema.Codec<FilterConfigurationV1_1_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.1.0/schema.json"), "filters": Schema.optionalKey(Schema.Array(Schema.suspend(() => FilterConfigurationFilterContainerV1_1_0))), "filterSortOrder": Schema.optionalKey(Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending"), Schema.Literal("Custom")])) });

/** FilterContainer in filterConfiguration 1.1.0 embedded. */
export type FilterConfigurationEmbeddedFilterContainerV1_1_0 = { readonly "name": string; readonly "displayName"?: string; readonly "ordinal"?: number; readonly "field"?: Query.QueryExpressionContainerV1_2_0; readonly "type"?: ("Categorical") | ("Range") | ("Advanced") | ("Passthrough") | ("TopN") | ("Include") | ("Exclude") | ("RelativeDate") | ("Tuple") | ("RelativeTime") | ("VisualTopN"); readonly "filter"?: Query.FilterDefinitionV1_2_0; readonly "restatement"?: string; readonly "howCreated"?: ("Auto") | ("User") | ("Drill") | ("Include") | ("Exclude") | ("Drillthrough"); readonly "isHiddenInViewMode"?: boolean; readonly "isLockedInViewMode"?: boolean; readonly "objects"?: FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_1_0; };
/** Native schema for FilterContainer with exact versioned dependencies. */
export const FilterConfigurationEmbeddedFilterContainerV1_1_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerV1_1_0> = closed({ "name": Schema.String, "displayName": Schema.optionalKey(Schema.String), "ordinal": Schema.optionalKey(Schema.Finite), "field": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer)), "type": Schema.optionalKey(Schema.Union([Schema.Literal("Categorical"), Schema.Literal("Range"), Schema.Literal("Advanced"), Schema.Literal("Passthrough"), Schema.Literal("TopN"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("RelativeDate"), Schema.Literal("Tuple"), Schema.Literal("RelativeTime"), Schema.Literal("VisualTopN")])), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.FilterDefinition)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal("Auto"), Schema.Literal("User"), Schema.Literal("Drill"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("Drillthrough")])), "isHiddenInViewMode": Schema.optionalKey(Schema.Boolean), "isLockedInViewMode": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_1_0)) });

/** FilterContainerFormattingObjects in filterConfiguration 1.1.0 embedded. */
export type FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_1_0 = { readonly "general"?: ReadonlyArray<{ readonly "selector"?: FormattingObjectDefinitionsSelectorV1_3_0; readonly "properties": FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_1_0; }>; };
/** Native schema for FilterContainerFormattingObjects with exact versioned dependencies. */
export const FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_1_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_1_0> = closed({ "general": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector)), "properties": Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_1_0) }))) });

/** FilterContainerFormattingObjectsProperties in filterConfiguration 1.1.0 embedded. */
export type FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_1_0 = { readonly "requireSingleSelect"?: Schema.Json; readonly "isInvertedSelectionMode"?: Schema.Json; };
/** Native schema for FilterContainerFormattingObjectsProperties with exact versioned dependencies. */
export const FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_1_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_1_0> = closed({ "requireSingleSelect": Schema.optionalKey(Schema.Json), "isInvertedSelectionMode": Schema.optionalKey(Schema.Json) });

/** Named filterConfiguration definitions for 1.1.0 embedded. */
export const FilterConfigurationEmbeddedDefinitionsV1_1_0 = {
  FilterContainer: FilterConfigurationEmbeddedFilterContainerV1_1_0,
  FilterContainerFormattingObjects: FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_1_0,
  FilterContainerFormattingObjectsProperties: FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_1_0
} as const;

/** Embedded filterConfiguration 1.1.0. */
export type FilterConfigurationEmbeddedV1_1_0 = { readonly "filters"?: ReadonlyArray<FilterConfigurationEmbeddedFilterContainerV1_1_0>; readonly "filterSortOrder"?: ("Ascending") | ("Descending") | ("Custom"); };
/** Native document schema retaining the source JSON representation. */
export const FilterConfigurationEmbeddedV1_1_0: Schema.Codec<FilterConfigurationEmbeddedV1_1_0> = closed({ "filters": Schema.optionalKey(Schema.Array(Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerV1_1_0))), "filterSortOrder": Schema.optionalKey(Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending"), Schema.Literal("Custom")])) });

/** FilterContainer in filterConfiguration 1.2.0. */
export type FilterConfigurationFilterContainerV1_2_0 = { readonly "name": string; readonly "displayName"?: string; readonly "ordinal"?: number; readonly "field"?: Query.QueryExpressionContainerV1_3_0; readonly "type"?: ("Categorical") | ("Range") | ("Advanced") | ("Passthrough") | ("TopN") | ("Include") | ("Exclude") | ("RelativeDate") | ("Tuple") | ("RelativeTime") | ("VisualTopN"); readonly "filter"?: Query.FilterDefinitionV1_3_0; readonly "restatement"?: string; readonly "howCreated"?: ("Auto") | ("User") | ("Drill") | ("Include") | ("Exclude") | ("Drillthrough"); readonly "isHiddenInViewMode"?: boolean; readonly "isLockedInViewMode"?: boolean; readonly "objects"?: FilterConfigurationFilterContainerFormattingObjectsV1_2_0; };
/** Native schema for FilterContainer with exact versioned dependencies. */
export const FilterConfigurationFilterContainerV1_2_0: Schema.Codec<FilterConfigurationFilterContainerV1_2_0> = closed({ "name": Schema.String, "displayName": Schema.optionalKey(Schema.String), "ordinal": Schema.optionalKey(Schema.Finite), "field": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer)), "type": Schema.optionalKey(Schema.Union([Schema.Literal("Categorical"), Schema.Literal("Range"), Schema.Literal("Advanced"), Schema.Literal("Passthrough"), Schema.Literal("TopN"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("RelativeDate"), Schema.Literal("Tuple"), Schema.Literal("RelativeTime"), Schema.Literal("VisualTopN")])), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.FilterDefinition)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal("Auto"), Schema.Literal("User"), Schema.Literal("Drill"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("Drillthrough")])), "isHiddenInViewMode": Schema.optionalKey(Schema.Boolean), "isLockedInViewMode": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => FilterConfigurationFilterContainerFormattingObjectsV1_2_0)) });

/** FilterContainerFormattingObjects in filterConfiguration 1.2.0. */
export type FilterConfigurationFilterContainerFormattingObjectsV1_2_0 = { readonly "general"?: ReadonlyArray<{ readonly "selector"?: FormattingObjectDefinitionsSelectorV1_4_0; readonly "properties": FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_2_0; }>; };
/** Native schema for FilterContainerFormattingObjects with exact versioned dependencies. */
export const FilterConfigurationFilterContainerFormattingObjectsV1_2_0: Schema.Codec<FilterConfigurationFilterContainerFormattingObjectsV1_2_0> = closed({ "general": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_4_0.Selector)), "properties": Schema.suspend(() => FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_2_0) }))) });

/** FilterContainerFormattingObjectsProperties in filterConfiguration 1.2.0. */
export type FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_2_0 = { readonly "requireSingleSelect"?: Schema.Json; readonly "isInvertedSelectionMode"?: Schema.Json; };
/** Native schema for FilterContainerFormattingObjectsProperties with exact versioned dependencies. */
export const FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_2_0: Schema.Codec<FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_2_0> = closed({ "requireSingleSelect": Schema.optionalKey(Schema.Json), "isInvertedSelectionMode": Schema.optionalKey(Schema.Json) });

/** Named filterConfiguration definitions for 1.2.0. */
export const FilterConfigurationDefinitionsV1_2_0 = {
  FilterContainer: FilterConfigurationFilterContainerV1_2_0,
  FilterContainerFormattingObjects: FilterConfigurationFilterContainerFormattingObjectsV1_2_0,
  FilterContainerFormattingObjectsProperties: FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_2_0
} as const;

/** Standalone filterConfiguration 1.2.0. */
export type FilterConfigurationV1_2_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.2.0/schema.json"; readonly "filters"?: ReadonlyArray<FilterConfigurationFilterContainerV1_2_0>; readonly "filterSortOrder"?: ("Ascending") | ("Descending") | ("Custom"); };
/** Native document schema retaining the source JSON representation. */
export const FilterConfigurationV1_2_0: Schema.Codec<FilterConfigurationV1_2_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.2.0/schema.json"), "filters": Schema.optionalKey(Schema.Array(Schema.suspend(() => FilterConfigurationFilterContainerV1_2_0))), "filterSortOrder": Schema.optionalKey(Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending"), Schema.Literal("Custom")])) });

/** FilterContainer in filterConfiguration 1.2.0 embedded. */
export type FilterConfigurationEmbeddedFilterContainerV1_2_0 = { readonly "name": string; readonly "displayName"?: string; readonly "ordinal"?: number; readonly "field"?: Query.QueryExpressionContainerV1_3_0; readonly "type"?: ("Categorical") | ("Range") | ("Advanced") | ("Passthrough") | ("TopN") | ("Include") | ("Exclude") | ("RelativeDate") | ("Tuple") | ("RelativeTime") | ("VisualTopN"); readonly "filter"?: Query.FilterDefinitionV1_3_0; readonly "restatement"?: string; readonly "howCreated"?: ("Auto") | ("User") | ("Drill") | ("Include") | ("Exclude") | ("Drillthrough"); readonly "isHiddenInViewMode"?: boolean; readonly "isLockedInViewMode"?: boolean; readonly "objects"?: FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_2_0; };
/** Native schema for FilterContainer with exact versioned dependencies. */
export const FilterConfigurationEmbeddedFilterContainerV1_2_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerV1_2_0> = closed({ "name": Schema.String, "displayName": Schema.optionalKey(Schema.String), "ordinal": Schema.optionalKey(Schema.Finite), "field": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer)), "type": Schema.optionalKey(Schema.Union([Schema.Literal("Categorical"), Schema.Literal("Range"), Schema.Literal("Advanced"), Schema.Literal("Passthrough"), Schema.Literal("TopN"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("RelativeDate"), Schema.Literal("Tuple"), Schema.Literal("RelativeTime"), Schema.Literal("VisualTopN")])), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.FilterDefinition)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal("Auto"), Schema.Literal("User"), Schema.Literal("Drill"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("Drillthrough")])), "isHiddenInViewMode": Schema.optionalKey(Schema.Boolean), "isLockedInViewMode": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_2_0)) });

/** FilterContainerFormattingObjects in filterConfiguration 1.2.0 embedded. */
export type FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_2_0 = { readonly "general"?: ReadonlyArray<{ readonly "selector"?: FormattingObjectDefinitionsSelectorV1_4_0; readonly "properties": FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_2_0; }>; };
/** Native schema for FilterContainerFormattingObjects with exact versioned dependencies. */
export const FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_2_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_2_0> = closed({ "general": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_4_0.Selector)), "properties": Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_2_0) }))) });

/** FilterContainerFormattingObjectsProperties in filterConfiguration 1.2.0 embedded. */
export type FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_2_0 = { readonly "requireSingleSelect"?: Schema.Json; readonly "isInvertedSelectionMode"?: Schema.Json; };
/** Native schema for FilterContainerFormattingObjectsProperties with exact versioned dependencies. */
export const FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_2_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_2_0> = closed({ "requireSingleSelect": Schema.optionalKey(Schema.Json), "isInvertedSelectionMode": Schema.optionalKey(Schema.Json) });

/** Named filterConfiguration definitions for 1.2.0 embedded. */
export const FilterConfigurationEmbeddedDefinitionsV1_2_0 = {
  FilterContainer: FilterConfigurationEmbeddedFilterContainerV1_2_0,
  FilterContainerFormattingObjects: FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_2_0,
  FilterContainerFormattingObjectsProperties: FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_2_0
} as const;

/** Embedded filterConfiguration 1.2.0. */
export type FilterConfigurationEmbeddedV1_2_0 = { readonly "filters"?: ReadonlyArray<FilterConfigurationEmbeddedFilterContainerV1_2_0>; readonly "filterSortOrder"?: ("Ascending") | ("Descending") | ("Custom"); };
/** Native document schema retaining the source JSON representation. */
export const FilterConfigurationEmbeddedV1_2_0: Schema.Codec<FilterConfigurationEmbeddedV1_2_0> = closed({ "filters": Schema.optionalKey(Schema.Array(Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerV1_2_0))), "filterSortOrder": Schema.optionalKey(Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending"), Schema.Literal("Custom")])) });

/** FilterContainer in filterConfiguration 1.3.0. */
export type FilterConfigurationFilterContainerV1_3_0 = { readonly "name": string; readonly "displayName"?: string; readonly "ordinal"?: number; readonly "field"?: Query.QueryExpressionContainerV1_4_0; readonly "type"?: ("Categorical") | ("Range") | ("Advanced") | ("Passthrough") | ("TopN") | ("Include") | ("Exclude") | ("RelativeDate") | ("Tuple") | ("RelativeTime") | ("VisualTopN"); readonly "filter"?: Query.FilterDefinitionV1_4_0; readonly "restatement"?: string; readonly "howCreated"?: ("Auto") | ("User") | ("Drill") | ("Include") | ("Exclude") | ("Drillthrough"); readonly "isHiddenInViewMode"?: boolean; readonly "isLockedInViewMode"?: boolean; readonly "objects"?: FilterConfigurationFilterContainerFormattingObjectsV1_3_0; };
/** Native schema for FilterContainer with exact versioned dependencies. */
export const FilterConfigurationFilterContainerV1_3_0: Schema.Codec<FilterConfigurationFilterContainerV1_3_0> = closed({ "name": Schema.String, "displayName": Schema.optionalKey(Schema.String), "ordinal": Schema.optionalKey(Schema.Finite), "field": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer)), "type": Schema.optionalKey(Schema.Union([Schema.Literal("Categorical"), Schema.Literal("Range"), Schema.Literal("Advanced"), Schema.Literal("Passthrough"), Schema.Literal("TopN"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("RelativeDate"), Schema.Literal("Tuple"), Schema.Literal("RelativeTime"), Schema.Literal("VisualTopN")])), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_4_0.FilterDefinition)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal("Auto"), Schema.Literal("User"), Schema.Literal("Drill"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("Drillthrough")])), "isHiddenInViewMode": Schema.optionalKey(Schema.Boolean), "isLockedInViewMode": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => FilterConfigurationFilterContainerFormattingObjectsV1_3_0)) });

/** FilterContainerFormattingObjects in filterConfiguration 1.3.0. */
export type FilterConfigurationFilterContainerFormattingObjectsV1_3_0 = { readonly "general"?: ReadonlyArray<{ readonly "selector"?: FormattingObjectDefinitionsSelectorV1_5_0; readonly "properties": FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_3_0; }>; };
/** Native schema for FilterContainerFormattingObjects with exact versioned dependencies. */
export const FilterConfigurationFilterContainerFormattingObjectsV1_3_0: Schema.Codec<FilterConfigurationFilterContainerFormattingObjectsV1_3_0> = closed({ "general": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector)), "properties": Schema.suspend(() => FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_3_0) }))) });

/** FilterContainerFormattingObjectsProperties in filterConfiguration 1.3.0. */
export type FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_3_0 = { readonly "requireSingleSelect"?: Schema.Json; readonly "isInvertedSelectionMode"?: Schema.Json; };
/** Native schema for FilterContainerFormattingObjectsProperties with exact versioned dependencies. */
export const FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_3_0: Schema.Codec<FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_3_0> = closed({ "requireSingleSelect": Schema.optionalKey(Schema.Json), "isInvertedSelectionMode": Schema.optionalKey(Schema.Json) });

/** Named filterConfiguration definitions for 1.3.0. */
export const FilterConfigurationDefinitionsV1_3_0 = {
  FilterContainer: FilterConfigurationFilterContainerV1_3_0,
  FilterContainerFormattingObjects: FilterConfigurationFilterContainerFormattingObjectsV1_3_0,
  FilterContainerFormattingObjectsProperties: FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_3_0
} as const;

/** Standalone filterConfiguration 1.3.0. */
export type FilterConfigurationV1_3_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.3.0/schema.json"; readonly "filters"?: ReadonlyArray<FilterConfigurationFilterContainerV1_3_0>; readonly "filterSortOrder"?: ("Ascending") | ("Descending") | ("Custom"); };
/** Native document schema retaining the source JSON representation. */
export const FilterConfigurationV1_3_0: Schema.Codec<FilterConfigurationV1_3_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.3.0/schema.json"), "filters": Schema.optionalKey(Schema.Array(Schema.suspend(() => FilterConfigurationFilterContainerV1_3_0))), "filterSortOrder": Schema.optionalKey(Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending"), Schema.Literal("Custom")])) });

/** FilterContainer in filterConfiguration 1.3.0 embedded. */
export type FilterConfigurationEmbeddedFilterContainerV1_3_0 = { readonly "name": string; readonly "displayName"?: string; readonly "ordinal"?: number; readonly "field"?: Query.QueryExpressionContainerV1_4_0; readonly "type"?: ("Categorical") | ("Range") | ("Advanced") | ("Passthrough") | ("TopN") | ("Include") | ("Exclude") | ("RelativeDate") | ("Tuple") | ("RelativeTime") | ("VisualTopN"); readonly "filter"?: Query.FilterDefinitionV1_4_0; readonly "restatement"?: string; readonly "howCreated"?: ("Auto") | ("User") | ("Drill") | ("Include") | ("Exclude") | ("Drillthrough"); readonly "isHiddenInViewMode"?: boolean; readonly "isLockedInViewMode"?: boolean; readonly "objects"?: FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_3_0; };
/** Native schema for FilterContainer with exact versioned dependencies. */
export const FilterConfigurationEmbeddedFilterContainerV1_3_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerV1_3_0> = closed({ "name": Schema.String, "displayName": Schema.optionalKey(Schema.String), "ordinal": Schema.optionalKey(Schema.Finite), "field": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer)), "type": Schema.optionalKey(Schema.Union([Schema.Literal("Categorical"), Schema.Literal("Range"), Schema.Literal("Advanced"), Schema.Literal("Passthrough"), Schema.Literal("TopN"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("RelativeDate"), Schema.Literal("Tuple"), Schema.Literal("RelativeTime"), Schema.Literal("VisualTopN")])), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_4_0.FilterDefinition)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal("Auto"), Schema.Literal("User"), Schema.Literal("Drill"), Schema.Literal("Include"), Schema.Literal("Exclude"), Schema.Literal("Drillthrough")])), "isHiddenInViewMode": Schema.optionalKey(Schema.Boolean), "isLockedInViewMode": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_3_0)) });

/** FilterContainerFormattingObjects in filterConfiguration 1.3.0 embedded. */
export type FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_3_0 = { readonly "general"?: ReadonlyArray<{ readonly "selector"?: FormattingObjectDefinitionsSelectorV1_5_0; readonly "properties": FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_3_0; }>; };
/** Native schema for FilterContainerFormattingObjects with exact versioned dependencies. */
export const FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_3_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_3_0> = closed({ "general": Schema.optionalKey(Schema.Array(closed({ "selector": Schema.optionalKey(Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector)), "properties": Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_3_0) }))) });

/** FilterContainerFormattingObjectsProperties in filterConfiguration 1.3.0 embedded. */
export type FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_3_0 = { readonly "requireSingleSelect"?: Schema.Json; readonly "isInvertedSelectionMode"?: Schema.Json; };
/** Native schema for FilterContainerFormattingObjectsProperties with exact versioned dependencies. */
export const FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_3_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_3_0> = closed({ "requireSingleSelect": Schema.optionalKey(Schema.Json), "isInvertedSelectionMode": Schema.optionalKey(Schema.Json) });

/** Named filterConfiguration definitions for 1.3.0 embedded. */
export const FilterConfigurationEmbeddedDefinitionsV1_3_0 = {
  FilterContainer: FilterConfigurationEmbeddedFilterContainerV1_3_0,
  FilterContainerFormattingObjects: FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_3_0,
  FilterContainerFormattingObjectsProperties: FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_3_0
} as const;

/** Embedded filterConfiguration 1.3.0. */
export type FilterConfigurationEmbeddedV1_3_0 = { readonly "filters"?: ReadonlyArray<FilterConfigurationEmbeddedFilterContainerV1_3_0>; readonly "filterSortOrder"?: ("Ascending") | ("Descending") | ("Custom"); };
/** Native document schema retaining the source JSON representation. */
export const FilterConfigurationEmbeddedV1_3_0: Schema.Codec<FilterConfigurationEmbeddedV1_3_0> = closed({ "filters": Schema.optionalKey(Schema.Array(Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerV1_3_0))), "filterSortOrder": Schema.optionalKey(Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending"), Schema.Literal("Custom")])) });

/** Explicit coverage of every owned formattingObjectDefinitions source. */
export const formattingObjectDefinitionsSchemaCoverage = [
  { source: "definition/formattingObjectDefinitions/1.0.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/formattingObjectDefinitions/1.0.0/schema.json", version: "1.0.0", variant: "standalone", schema: FormattingObjectDefinitionsV1_0_0 },
  { source: "definition/formattingObjectDefinitions/1.1.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/formattingObjectDefinitions/1.1.0/schema.json", version: "1.1.0", variant: "standalone", schema: FormattingObjectDefinitionsV1_1_0 },
  { source: "definition/formattingObjectDefinitions/1.2.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/formattingObjectDefinitions/1.2.0/schema.json", version: "1.2.0", variant: "standalone", schema: FormattingObjectDefinitionsV1_2_0 },
  { source: "definition/formattingObjectDefinitions/1.3.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/formattingObjectDefinitions/1.3.0/schema.json", version: "1.3.0", variant: "standalone", schema: FormattingObjectDefinitionsV1_3_0 },
  { source: "definition/formattingObjectDefinitions/1.4.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/formattingObjectDefinitions/1.4.0/schema.json", version: "1.4.0", variant: "standalone", schema: FormattingObjectDefinitionsV1_4_0 },
  { source: "definition/formattingObjectDefinitions/1.5.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/formattingObjectDefinitions/1.5.0/schema.json", version: "1.5.0", variant: "standalone", schema: FormattingObjectDefinitionsV1_5_0 }
] as const;

/** Explicit coverage of every owned filterConfiguration source. */
export const filterConfigurationSchemaCoverage = [
  { source: "definition/filterConfiguration/1.0.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.0.0/schema.json", version: "1.0.0", variant: "standalone", schema: FilterConfigurationV1_0_0 },
  { source: "definition/filterConfiguration/1.0.0/schema-embedded.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.0.0/schema-embedded.json", version: "1.0.0", variant: "embedded", schema: FilterConfigurationEmbeddedV1_0_0 },
  { source: "definition/filterConfiguration/1.1.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.1.0/schema.json", version: "1.1.0", variant: "standalone", schema: FilterConfigurationV1_1_0 },
  { source: "definition/filterConfiguration/1.1.0/schema-embedded.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.1.0/schema.embedded.json", version: "1.1.0", variant: "embedded", schema: FilterConfigurationEmbeddedV1_1_0, aliases: ["https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.1.0/schema-embedded.json"] },
  { source: "definition/filterConfiguration/1.2.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.2.0/schema.json", version: "1.2.0", variant: "standalone", schema: FilterConfigurationV1_2_0 },
  { source: "definition/filterConfiguration/1.2.0/schema-embedded.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.2.0/schema.embedded.json", version: "1.2.0", variant: "embedded", schema: FilterConfigurationEmbeddedV1_2_0, aliases: ["https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.2.0/schema-embedded.json"] },
  { source: "definition/filterConfiguration/1.3.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.3.0/schema.json", version: "1.3.0", variant: "standalone", schema: FilterConfigurationV1_3_0 },
  { source: "definition/filterConfiguration/1.3.0/schema-embedded.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.3.0/schema.embedded.json", version: "1.3.0", variant: "embedded", schema: FilterConfigurationEmbeddedV1_3_0, aliases: ["https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.3.0/schema-embedded.json"] }
] as const;

