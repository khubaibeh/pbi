import { Schema } from "effect";
import * as Query from "./semantic-query.js";
import * as Formatting from "./formatting-and-filters.js";

// Retain keys before closure checks, even when decoder options request stripping.
function closed<const Fields extends Schema.Struct.Fields>(fields: Fields) {
  const allowed = new Set(Object.keys(fields));
  return Schema.StructWithRest(Schema.Struct(fields), [Schema.Record(Schema.String, Schema.Json)])
    .check(Schema.makeFilter((value) => Object.keys(value).every((key) => allowed.has(key)) || "Unexpected object property"));
}

// Validate every value first and then every original key. A refined Record key
// alone would strip forbidden keys under default decoding options.
function numericDictionary<Value extends Schema.Constraint>(value: Value) {
  return Schema.Record(Schema.String, value)
    .check(Schema.makeFilter((record) => Object.keys(record).every((key) => /^[0-9]+$/.test(key)) || "Expected a numeric dictionary key"));
}

/** BookmarkOptions in bookmark 1.0.0. */
export type BookmarkBookmarkOptionsV1_0_0 = { readonly "applyOnlyToTargetVisuals"?: boolean; readonly "targetVisualNames"?: ReadonlyArray<string>; readonly "suppressActiveSection"?: boolean; readonly "suppressData"?: boolean; readonly "suppressDisplay"?: boolean; };
/** Native schema for BookmarkOptions, retaining its exact historical dependencies. */
export const BookmarkBookmarkOptionsV1_0_0: Schema.Codec<BookmarkBookmarkOptionsV1_0_0> = closed({ "applyOnlyToTargetVisuals": Schema.optionalKey(Schema.Boolean), "targetVisualNames": Schema.optionalKey(Schema.Array(Schema.String)), "suppressActiveSection": Schema.optionalKey(Schema.Boolean), "suppressData": Schema.optionalKey(Schema.Boolean), "suppressDisplay": Schema.optionalKey(Schema.Boolean) });

/** ExplorationState in bookmark 1.0.0. */
export type BookmarkExplorationStateV1_0_0 = { readonly "version": string; readonly "activeSection": string; readonly "filters"?: BookmarkFiltersStateV1_0_0; readonly "sections": {  } & { readonly [key: string]: BookmarkSectionStateV1_0_0 }; readonly "objects"?: BookmarkDataViewObjectDefinitionUpdatesV1_0_0; readonly "dataSourceVariables"?: string; };
/** Native schema for ExplorationState, retaining its exact historical dependencies. */
export const BookmarkExplorationStateV1_0_0: Schema.Codec<BookmarkExplorationStateV1_0_0> = closed({ "version": Schema.String, "activeSection": Schema.String, "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV1_0_0)), "sections": Schema.Record(Schema.String, Schema.suspend(() => BookmarkSectionStateV1_0_0)), "objects": Schema.optionalKey(Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV1_0_0)), "dataSourceVariables": Schema.optionalKey(Schema.String) });

/** FiltersState in bookmark 1.0.0. */
export type BookmarkFiltersStateV1_0_0 = { readonly "byName"?: {  } & { readonly [key: string]: BookmarkFilterContainerStateV1_0_0 }; readonly "byExpr"?: ReadonlyArray<BookmarkFilterContainerStateV1_0_0>; readonly "byType"?: ReadonlyArray<BookmarkFilterContainerStateV1_0_0>; readonly "byTransientState"?: ReadonlyArray<BookmarkFilterContainerStateV1_0_0>; };
/** Native schema for FiltersState, retaining its exact historical dependencies. */
export const BookmarkFiltersStateV1_0_0: Schema.Codec<BookmarkFiltersStateV1_0_0> = closed({ "byName": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkFilterContainerStateV1_0_0))), "byExpr": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_0_0))), "byType": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_0_0))), "byTransientState": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_0_0))) });

/** FilterContainerState in bookmark 1.0.0. */
export type BookmarkFilterContainerStateV1_0_0 = { readonly "name": string; readonly "type"?: string; readonly "filter"?: Query.FilterDefinitionV1_0_0; readonly "expression"?: Query.QueryExpressionContainerV1_0_0; readonly "restatement"?: string; readonly "howCreated"?: (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7); readonly "precedence"?: 0; readonly "isTransient"?: boolean; readonly "cachedDisplayNames"?: ReadonlyArray<Schema.Json>; readonly "filterExpressionMetadata"?: Schema.Json; };
/** Native schema for FilterContainerState, retaining its exact historical dependencies. */
export const BookmarkFilterContainerStateV1_0_0: Schema.Codec<BookmarkFilterContainerStateV1_0_0> = closed({ "name": Schema.String, "type": Schema.optionalKey(Schema.String), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_0_0.FilterDefinition)), "expression": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)])), "precedence": Schema.optionalKey(Schema.Literal(0)), "isTransient": Schema.optionalKey(Schema.Boolean), "cachedDisplayNames": Schema.optionalKey(Schema.Array(Schema.Json)), "filterExpressionMetadata": Schema.optionalKey(Schema.Json) });

/** SectionState in bookmark 1.0.0. */
export type BookmarkSectionStateV1_0_0 = { readonly "filters"?: BookmarkFiltersStateV1_0_0; readonly "visualContainers": {  } & { readonly [key: string]: BookmarkVisualContainerStateV1_0_0 }; readonly "visualContainerGroups"?: {  } & { readonly [key: string]: BookmarkVisualContainerGroupStateV1_0_0 }; };
/** Native schema for SectionState, retaining its exact historical dependencies. */
export const BookmarkSectionStateV1_0_0: Schema.Codec<BookmarkSectionStateV1_0_0> = closed({ "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV1_0_0)), "visualContainers": Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerStateV1_0_0)), "visualContainerGroups": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerGroupStateV1_0_0))) });

/** VisualContainerState in bookmark 1.0.0. */
export type BookmarkVisualContainerStateV1_0_0 = { readonly "filters"?: BookmarkFiltersStateV1_0_0; readonly "singleVisual"?: BookmarkSingleVisualConfigStateV1_0_0; readonly "highlight"?: BookmarkHighlightStateV1_0_0; };
/** Native schema for VisualContainerState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerStateV1_0_0: Schema.Codec<BookmarkVisualContainerStateV1_0_0> = closed({ "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV1_0_0)), "singleVisual": Schema.optionalKey(Schema.suspend(() => BookmarkSingleVisualConfigStateV1_0_0)), "highlight": Schema.optionalKey(Schema.suspend(() => BookmarkHighlightStateV1_0_0)) });

/** SingleVisualConfigState in bookmark 1.0.0. */
export type BookmarkSingleVisualConfigStateV1_0_0 = { readonly "visualType"?: string; readonly "autoSelectVisualType"?: boolean; readonly "targetType"?: string; readonly "targetAutoSelectVisualType"?: boolean; readonly "objects"?: BookmarkDataViewObjectDefinitionUpdatesV1_0_0; readonly "orderBy"?: ReadonlyArray<Query.QuerySortClauseV1_0_0>; readonly "activeProjections"?: BookmarkProjectionStateV1_0_0; readonly "projections"?: BookmarkProjectionStateV1_0_0; readonly "parameters"?: BookmarkParameterStateByRoleV1_0_0; readonly "display"?: BookmarkVisualContainerDisplayStateV1_0_0; readonly "cachedFilterDisplayItems"?: ReadonlyArray<Schema.Json>; readonly "expansionStates"?: ReadonlyArray<Schema.Json>; readonly "filterExpressionMetadata"?: Schema.Json; readonly "isDrillDisabled"?: boolean; };
/** Native schema for SingleVisualConfigState, retaining its exact historical dependencies. */
export const BookmarkSingleVisualConfigStateV1_0_0: Schema.Codec<BookmarkSingleVisualConfigStateV1_0_0> = closed({ "visualType": Schema.optionalKey(Schema.String), "autoSelectVisualType": Schema.optionalKey(Schema.Boolean), "targetType": Schema.optionalKey(Schema.String), "targetAutoSelectVisualType": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV1_0_0)), "orderBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_0_0.QuerySortClause))), "activeProjections": Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_0_0)), "projections": Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_0_0)), "parameters": Schema.optionalKey(Schema.suspend(() => BookmarkParameterStateByRoleV1_0_0)), "display": Schema.optionalKey(Schema.suspend(() => BookmarkVisualContainerDisplayStateV1_0_0)), "cachedFilterDisplayItems": Schema.optionalKey(Schema.Array(Schema.Json)), "expansionStates": Schema.optionalKey(Schema.Array(Schema.Json)), "filterExpressionMetadata": Schema.optionalKey(Schema.Json), "isDrillDisabled": Schema.optionalKey(Schema.Boolean) });

/** DataViewObjectDefinitionUpdates in bookmark 1.0.0. */
export type BookmarkDataViewObjectDefinitionUpdatesV1_0_0 = { readonly "merge"?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0; readonly "remove"?: ReadonlyArray<BookmarkDataViewObjectPropertyIdWithSelectorV1_0_0>; };
/** Native schema for DataViewObjectDefinitionUpdates, retaining its exact historical dependencies. */
export const BookmarkDataViewObjectDefinitionUpdatesV1_0_0: Schema.Codec<BookmarkDataViewObjectDefinitionUpdatesV1_0_0> = closed({ "merge": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0.DataViewObjectDefinitions)), "remove": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkDataViewObjectPropertyIdWithSelectorV1_0_0))) });

/** DataViewObjectPropertyIdWithSelector in bookmark 1.0.0. */
export type BookmarkDataViewObjectPropertyIdWithSelectorV1_0_0 = { readonly "object": string; readonly "property": string; readonly "selector": Formatting.FormattingObjectDefinitionsSelectorV1_0_0; };
/** Native schema for DataViewObjectPropertyIdWithSelector, retaining its exact historical dependencies. */
export const BookmarkDataViewObjectPropertyIdWithSelectorV1_0_0: Schema.Codec<BookmarkDataViewObjectPropertyIdWithSelectorV1_0_0> = closed({ "object": Schema.String, "property": Schema.String, "selector": Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0.Selector) });

/** ProjectionState in bookmark 1.0.0. */
export type BookmarkProjectionStateV1_0_0 = {  } & { readonly [key: string]: ReadonlyArray<Query.QueryExpressionContainerV1_0_0> };
/** Native schema for ProjectionState, retaining its exact historical dependencies. */
export const BookmarkProjectionStateV1_0_0: Schema.Codec<BookmarkProjectionStateV1_0_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer)));

/** ParameterStateByRole in bookmark 1.0.0. */
export type BookmarkParameterStateByRoleV1_0_0 = {  } & { readonly [key: string]: ReadonlyArray<BookmarkParameterStateV1_0_0> };
/** Native schema for ParameterStateByRole, retaining its exact historical dependencies. */
export const BookmarkParameterStateByRoleV1_0_0: Schema.Codec<BookmarkParameterStateByRoleV1_0_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => BookmarkParameterStateV1_0_0)));

/** ParameterState in bookmark 1.0.0. */
export type BookmarkParameterStateV1_0_0 = { readonly "expr": Query.QueryExpressionContainerV1_0_0; readonly "index": number; readonly "length": number; };
/** Native schema for ParameterState, retaining its exact historical dependencies. */
export const BookmarkParameterStateV1_0_0: Schema.Codec<BookmarkParameterStateV1_0_0> = closed({ "expr": Schema.suspend(() => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer), "index": Schema.Finite, "length": Schema.Finite });

/** VisualContainerDisplayState in bookmark 1.0.0. */
export type BookmarkVisualContainerDisplayStateV1_0_0 = { readonly "mode": BookmarkVisualContainerDisplayModeV1_0_0; readonly "maximizedOptions"?: { readonly "dataTable"?: "accessible" | "normal"; }; };
/** Native schema for VisualContainerDisplayState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerDisplayStateV1_0_0: Schema.Codec<BookmarkVisualContainerDisplayStateV1_0_0> = closed({ "mode": Schema.suspend(() => BookmarkVisualContainerDisplayModeV1_0_0), "maximizedOptions": Schema.optionalKey(closed({ "dataTable": Schema.optionalKey(Schema.Literals(["accessible", "normal"])) })) });

/** VisualContainerDisplayMode in bookmark 1.0.0. */
export type BookmarkVisualContainerDisplayModeV1_0_0 = ("maximize") | ("spotlight") | ("elevation") | ("hidden");
/** Native schema for VisualContainerDisplayMode, retaining its exact historical dependencies. */
export const BookmarkVisualContainerDisplayModeV1_0_0: Schema.Codec<BookmarkVisualContainerDisplayModeV1_0_0> = Schema.Union([Schema.Literal("maximize"), Schema.Literal("spotlight"), Schema.Literal("elevation"), Schema.Literal("hidden")]);

/** HighlightState in bookmark 1.0.0. */
export type BookmarkHighlightStateV1_0_0 = { readonly "selection": (BookmarkDecomposedSelectorsV1_0_0) | (ReadonlyArray<BookmarkSelectorsByColumnV1_0_0>); readonly "filterExpressionMetadata"?: Schema.Json; };
/** Native schema for HighlightState, retaining its exact historical dependencies. */
export const BookmarkHighlightStateV1_0_0: Schema.Codec<BookmarkHighlightStateV1_0_0> = closed({ "selection": Schema.Union([Schema.suspend(() => BookmarkDecomposedSelectorsV1_0_0), Schema.Array(Schema.suspend(() => BookmarkSelectorsByColumnV1_0_0))]), "filterExpressionMetadata": Schema.optionalKey(Schema.Json) });

/** DecomposedSelectors in bookmark 1.0.0. */
export type BookmarkDecomposedSelectorsV1_0_0 = { readonly "decomposedIdentities"?: BookmarkDecomposedIdentitiesV1_0_0; readonly "queryNameMap"?: ReadonlyArray<{ readonly [key: string]: ReadonlyArray<number> }>; readonly "queryNames"?: ReadonlyArray<string>; readonly "metadata"?: ReadonlyArray<ReadonlyArray<string>>; readonly "id"?: ReadonlyArray<string>; };
/** Native schema for DecomposedSelectors, retaining its exact historical dependencies. */
export const BookmarkDecomposedSelectorsV1_0_0: Schema.Codec<BookmarkDecomposedSelectorsV1_0_0> = closed({ "decomposedIdentities": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedIdentitiesV1_0_0)), "queryNameMap": Schema.optionalKey(Schema.Array(numericDictionary(Schema.Array(Schema.Finite)))), "queryNames": Schema.optionalKey(Schema.Array(Schema.String)), "metadata": Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))), "id": Schema.optionalKey(Schema.Array(Schema.String)) });

/** DecomposedIdentities in bookmark 1.0.0. */
export type BookmarkDecomposedIdentitiesV1_0_0 = { readonly "values": ReadonlyArray<ReadonlyArray<{ readonly [key: string]: ReadonlyArray<Query.QueryExpressionContainerV1_0_0> }>>; readonly "columns": ReadonlyArray<BookmarkDecomposedTreeQueryExpressionContainerV1_0_0>; };
/** Native schema for DecomposedIdentities, retaining its exact historical dependencies. */
export const BookmarkDecomposedIdentitiesV1_0_0: Schema.Codec<BookmarkDecomposedIdentitiesV1_0_0> = closed({ "values": Schema.Array(Schema.Array(numericDictionary(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer))))), "columns": Schema.Array(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_0_0)) });

/** DecomposedTree<QueryExpressionContainer> in bookmark 1.0.0. */
export type BookmarkDecomposedTreeQueryExpressionContainerV1_0_0 = { readonly "left"?: BookmarkDecomposedTreeQueryExpressionContainerV1_0_0; readonly "right"?: BookmarkDecomposedTreeQueryExpressionContainerV1_0_0; readonly "value"?: Query.QueryExpressionContainerV1_0_0; };
/** Native schema for DecomposedTree<QueryExpressionContainer>, retaining its exact historical dependencies. */
export const BookmarkDecomposedTreeQueryExpressionContainerV1_0_0: Schema.Codec<BookmarkDecomposedTreeQueryExpressionContainerV1_0_0> = closed({ "left": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_0_0)), "right": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_0_0)), "value": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer)) });

/** SelectorsByColumn in bookmark 1.0.0. */
export type BookmarkSelectorsByColumnV1_0_0 = { readonly "dataMap"?: BookmarkSelectorsForColumnV1_0_0; readonly "metadata"?: ReadonlyArray<string>; readonly "id"?: string; };
/** Native schema for SelectorsByColumn, retaining its exact historical dependencies. */
export const BookmarkSelectorsByColumnV1_0_0: Schema.Codec<BookmarkSelectorsByColumnV1_0_0> = closed({ "dataMap": Schema.optionalKey(Schema.suspend(() => BookmarkSelectorsForColumnV1_0_0)), "metadata": Schema.optionalKey(Schema.Array(Schema.String)), "id": Schema.optionalKey(Schema.String) });

/** SelectorsForColumn in bookmark 1.0.0. */
export type BookmarkSelectorsForColumnV1_0_0 = {  } & { readonly [key: string]: ReadonlyArray<Formatting.FormattingObjectDefinitionsDataRepetitionSelectorV1_0_0> };
/** Native schema for SelectorsForColumn, retaining its exact historical dependencies. */
export const BookmarkSelectorsForColumnV1_0_0: Schema.Codec<BookmarkSelectorsForColumnV1_0_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0.DataRepetitionSelector)));

/** VisualContainerGroupState in bookmark 1.0.0. */
export type BookmarkVisualContainerGroupStateV1_0_0 = { readonly "isHidden"?: boolean; readonly "children"?: {  } & { readonly [key: string]: BookmarkVisualContainerGroupStateV1_0_0 }; };
/** Native schema for VisualContainerGroupState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerGroupStateV1_0_0: Schema.Codec<BookmarkVisualContainerGroupStateV1_0_0> = closed({ "isHidden": Schema.optionalKey(Schema.Boolean), "children": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerGroupStateV1_0_0))) });

/** Named bookmark definitions for 1.0.0. */
export const BookmarkDefinitionsV1_0_0 = {
  "BookmarkOptions": BookmarkBookmarkOptionsV1_0_0,
  "ExplorationState": BookmarkExplorationStateV1_0_0,
  "FiltersState": BookmarkFiltersStateV1_0_0,
  "FilterContainerState": BookmarkFilterContainerStateV1_0_0,
  "SectionState": BookmarkSectionStateV1_0_0,
  "VisualContainerState": BookmarkVisualContainerStateV1_0_0,
  "SingleVisualConfigState": BookmarkSingleVisualConfigStateV1_0_0,
  "DataViewObjectDefinitionUpdates": BookmarkDataViewObjectDefinitionUpdatesV1_0_0,
  "DataViewObjectPropertyIdWithSelector": BookmarkDataViewObjectPropertyIdWithSelectorV1_0_0,
  "ProjectionState": BookmarkProjectionStateV1_0_0,
  "ParameterStateByRole": BookmarkParameterStateByRoleV1_0_0,
  "ParameterState": BookmarkParameterStateV1_0_0,
  "VisualContainerDisplayState": BookmarkVisualContainerDisplayStateV1_0_0,
  "VisualContainerDisplayMode": BookmarkVisualContainerDisplayModeV1_0_0,
  "HighlightState": BookmarkHighlightStateV1_0_0,
  "DecomposedSelectors": BookmarkDecomposedSelectorsV1_0_0,
  "DecomposedIdentities": BookmarkDecomposedIdentitiesV1_0_0,
  "DecomposedTree<QueryExpressionContainer>": BookmarkDecomposedTreeQueryExpressionContainerV1_0_0,
  "SelectorsByColumn": BookmarkSelectorsByColumnV1_0_0,
  "SelectorsForColumn": BookmarkSelectorsForColumnV1_0_0,
  "VisualContainerGroupState": BookmarkVisualContainerGroupStateV1_0_0
} as const;

/** Standalone bookmark 1.0.0 document representation. */
export type BookmarkV1_0_0 = { readonly "displayName": string; readonly "name": string; readonly "options"?: BookmarkBookmarkOptionsV1_0_0; readonly "explorationState": BookmarkExplorationStateV1_0_0; readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.0.0/schema.json"; };
/** Native document schema preserving allowed JSON content. */
export const BookmarkV1_0_0: Schema.Codec<BookmarkV1_0_0> = closed({ "displayName": Schema.String, "name": Schema.String, "options": Schema.optionalKey(Schema.suspend(() => BookmarkBookmarkOptionsV1_0_0)), "explorationState": Schema.suspend(() => BookmarkExplorationStateV1_0_0), "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.0.0/schema.json") });

/** BookmarkOptions in bookmark 1.1.0. */
export type BookmarkBookmarkOptionsV1_1_0 = { readonly "applyOnlyToTargetVisuals"?: boolean; readonly "targetVisualNames"?: ReadonlyArray<string>; readonly "suppressActiveSection"?: boolean; readonly "suppressData"?: boolean; readonly "suppressDisplay"?: boolean; };
/** Native schema for BookmarkOptions, retaining its exact historical dependencies. */
export const BookmarkBookmarkOptionsV1_1_0: Schema.Codec<BookmarkBookmarkOptionsV1_1_0> = closed({ "applyOnlyToTargetVisuals": Schema.optionalKey(Schema.Boolean), "targetVisualNames": Schema.optionalKey(Schema.Array(Schema.String)), "suppressActiveSection": Schema.optionalKey(Schema.Boolean), "suppressData": Schema.optionalKey(Schema.Boolean), "suppressDisplay": Schema.optionalKey(Schema.Boolean) });

/** ExplorationState in bookmark 1.1.0. */
export type BookmarkExplorationStateV1_1_0 = { readonly "version": string; readonly "activeSection": string; readonly "filters"?: BookmarkFiltersStateV1_1_0; readonly "sections": {  } & { readonly [key: string]: BookmarkSectionStateV1_1_0 }; readonly "objects"?: BookmarkDataViewObjectDefinitionUpdatesV1_1_0; readonly "dataSourceVariables"?: string; };
/** Native schema for ExplorationState, retaining its exact historical dependencies. */
export const BookmarkExplorationStateV1_1_0: Schema.Codec<BookmarkExplorationStateV1_1_0> = closed({ "version": Schema.String, "activeSection": Schema.String, "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV1_1_0)), "sections": Schema.Record(Schema.String, Schema.suspend(() => BookmarkSectionStateV1_1_0)), "objects": Schema.optionalKey(Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV1_1_0)), "dataSourceVariables": Schema.optionalKey(Schema.String) });

/** FiltersState in bookmark 1.1.0. */
export type BookmarkFiltersStateV1_1_0 = { readonly "byName"?: {  } & { readonly [key: string]: BookmarkFilterContainerStateV1_1_0 }; readonly "byExpr"?: ReadonlyArray<BookmarkFilterContainerStateV1_1_0>; readonly "byType"?: ReadonlyArray<BookmarkFilterContainerStateV1_1_0>; readonly "byTransientState"?: ReadonlyArray<BookmarkFilterContainerStateV1_1_0>; };
/** Native schema for FiltersState, retaining its exact historical dependencies. */
export const BookmarkFiltersStateV1_1_0: Schema.Codec<BookmarkFiltersStateV1_1_0> = closed({ "byName": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkFilterContainerStateV1_1_0))), "byExpr": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_1_0))), "byType": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_1_0))), "byTransientState": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_1_0))) });

/** FilterContainerState in bookmark 1.1.0. */
export type BookmarkFilterContainerStateV1_1_0 = { readonly "name": string; readonly "type"?: string; readonly "filter"?: Query.FilterDefinitionV1_1_0; readonly "expression"?: Query.QueryExpressionContainerV1_1_0; readonly "restatement"?: string; readonly "howCreated"?: (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7); readonly "precedence"?: 0; readonly "isTransient"?: boolean; readonly "cachedDisplayNames"?: ReadonlyArray<Schema.Json>; readonly "filterExpressionMetadata"?: Schema.Json; };
/** Native schema for FilterContainerState, retaining its exact historical dependencies. */
export const BookmarkFilterContainerStateV1_1_0: Schema.Codec<BookmarkFilterContainerStateV1_1_0> = closed({ "name": Schema.String, "type": Schema.optionalKey(Schema.String), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_1_0.FilterDefinition)), "expression": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)])), "precedence": Schema.optionalKey(Schema.Literal(0)), "isTransient": Schema.optionalKey(Schema.Boolean), "cachedDisplayNames": Schema.optionalKey(Schema.Array(Schema.Json)), "filterExpressionMetadata": Schema.optionalKey(Schema.Json) });

/** SectionState in bookmark 1.1.0. */
export type BookmarkSectionStateV1_1_0 = { readonly "filters"?: BookmarkFiltersStateV1_1_0; readonly "visualContainers": {  } & { readonly [key: string]: BookmarkVisualContainerStateV1_1_0 }; readonly "visualContainerGroups"?: {  } & { readonly [key: string]: BookmarkVisualContainerGroupStateV1_1_0 }; };
/** Native schema for SectionState, retaining its exact historical dependencies. */
export const BookmarkSectionStateV1_1_0: Schema.Codec<BookmarkSectionStateV1_1_0> = closed({ "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV1_1_0)), "visualContainers": Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerStateV1_1_0)), "visualContainerGroups": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerGroupStateV1_1_0))) });

/** VisualContainerState in bookmark 1.1.0. */
export type BookmarkVisualContainerStateV1_1_0 = { readonly "filters"?: BookmarkFiltersStateV1_1_0; readonly "singleVisual"?: BookmarkSingleVisualConfigStateV1_1_0; readonly "highlight"?: BookmarkHighlightStateV1_1_0; };
/** Native schema for VisualContainerState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerStateV1_1_0: Schema.Codec<BookmarkVisualContainerStateV1_1_0> = closed({ "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV1_1_0)), "singleVisual": Schema.optionalKey(Schema.suspend(() => BookmarkSingleVisualConfigStateV1_1_0)), "highlight": Schema.optionalKey(Schema.suspend(() => BookmarkHighlightStateV1_1_0)) });

/** SingleVisualConfigState in bookmark 1.1.0. */
export type BookmarkSingleVisualConfigStateV1_1_0 = { readonly "visualType"?: string; readonly "autoSelectVisualType"?: boolean; readonly "targetType"?: string; readonly "targetAutoSelectVisualType"?: boolean; readonly "objects"?: BookmarkDataViewObjectDefinitionUpdatesV1_1_0; readonly "orderBy"?: ReadonlyArray<Query.QuerySortClauseV1_1_0>; readonly "activeProjections"?: BookmarkProjectionStateV1_1_0; readonly "projections"?: BookmarkProjectionStateV1_1_0; readonly "parameters"?: BookmarkParameterStateByRoleV1_1_0; readonly "display"?: BookmarkVisualContainerDisplayStateV1_1_0; readonly "cachedFilterDisplayItems"?: ReadonlyArray<Schema.Json>; readonly "expansionStates"?: ReadonlyArray<Schema.Json>; readonly "filterExpressionMetadata"?: Schema.Json; readonly "isDrillDisabled"?: boolean; };
/** Native schema for SingleVisualConfigState, retaining its exact historical dependencies. */
export const BookmarkSingleVisualConfigStateV1_1_0: Schema.Codec<BookmarkSingleVisualConfigStateV1_1_0> = closed({ "visualType": Schema.optionalKey(Schema.String), "autoSelectVisualType": Schema.optionalKey(Schema.Boolean), "targetType": Schema.optionalKey(Schema.String), "targetAutoSelectVisualType": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV1_1_0)), "orderBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_1_0.QuerySortClause))), "activeProjections": Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_1_0)), "projections": Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_1_0)), "parameters": Schema.optionalKey(Schema.suspend(() => BookmarkParameterStateByRoleV1_1_0)), "display": Schema.optionalKey(Schema.suspend(() => BookmarkVisualContainerDisplayStateV1_1_0)), "cachedFilterDisplayItems": Schema.optionalKey(Schema.Array(Schema.Json)), "expansionStates": Schema.optionalKey(Schema.Array(Schema.Json)), "filterExpressionMetadata": Schema.optionalKey(Schema.Json), "isDrillDisabled": Schema.optionalKey(Schema.Boolean) });

/** DataViewObjectDefinitionUpdates in bookmark 1.1.0. */
export type BookmarkDataViewObjectDefinitionUpdatesV1_1_0 = { readonly "merge"?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0; readonly "remove"?: ReadonlyArray<BookmarkDataViewObjectPropertyIdWithSelectorV1_1_0>; };
/** Native schema for DataViewObjectDefinitionUpdates, retaining its exact historical dependencies. */
export const BookmarkDataViewObjectDefinitionUpdatesV1_1_0: Schema.Codec<BookmarkDataViewObjectDefinitionUpdatesV1_1_0> = closed({ "merge": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0.DataViewObjectDefinitions)), "remove": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkDataViewObjectPropertyIdWithSelectorV1_1_0))) });

/** DataViewObjectPropertyIdWithSelector in bookmark 1.1.0. */
export type BookmarkDataViewObjectPropertyIdWithSelectorV1_1_0 = { readonly "object": string; readonly "property": string; readonly "selector": Formatting.FormattingObjectDefinitionsSelectorV1_1_0; };
/** Native schema for DataViewObjectPropertyIdWithSelector, retaining its exact historical dependencies. */
export const BookmarkDataViewObjectPropertyIdWithSelectorV1_1_0: Schema.Codec<BookmarkDataViewObjectPropertyIdWithSelectorV1_1_0> = closed({ "object": Schema.String, "property": Schema.String, "selector": Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0.Selector) });

/** ProjectionState in bookmark 1.1.0. */
export type BookmarkProjectionStateV1_1_0 = {  } & { readonly [key: string]: ReadonlyArray<Query.QueryExpressionContainerV1_1_0> };
/** Native schema for ProjectionState, retaining its exact historical dependencies. */
export const BookmarkProjectionStateV1_1_0: Schema.Codec<BookmarkProjectionStateV1_1_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer)));

/** ParameterStateByRole in bookmark 1.1.0. */
export type BookmarkParameterStateByRoleV1_1_0 = {  } & { readonly [key: string]: ReadonlyArray<BookmarkParameterStateV1_1_0> };
/** Native schema for ParameterStateByRole, retaining its exact historical dependencies. */
export const BookmarkParameterStateByRoleV1_1_0: Schema.Codec<BookmarkParameterStateByRoleV1_1_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => BookmarkParameterStateV1_1_0)));

/** ParameterState in bookmark 1.1.0. */
export type BookmarkParameterStateV1_1_0 = { readonly "expr": Query.QueryExpressionContainerV1_1_0; readonly "index": number; readonly "length": number; };
/** Native schema for ParameterState, retaining its exact historical dependencies. */
export const BookmarkParameterStateV1_1_0: Schema.Codec<BookmarkParameterStateV1_1_0> = closed({ "expr": Schema.suspend(() => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer), "index": Schema.Finite, "length": Schema.Finite });

/** VisualContainerDisplayState in bookmark 1.1.0. */
export type BookmarkVisualContainerDisplayStateV1_1_0 = { readonly "mode": BookmarkVisualContainerDisplayModeV1_1_0; readonly "maximizedOptions"?: { readonly "dataTable"?: "accessible" | "normal"; }; };
/** Native schema for VisualContainerDisplayState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerDisplayStateV1_1_0: Schema.Codec<BookmarkVisualContainerDisplayStateV1_1_0> = closed({ "mode": Schema.suspend(() => BookmarkVisualContainerDisplayModeV1_1_0), "maximizedOptions": Schema.optionalKey(closed({ "dataTable": Schema.optionalKey(Schema.Literals(["accessible", "normal"])) })) });

/** VisualContainerDisplayMode in bookmark 1.1.0. */
export type BookmarkVisualContainerDisplayModeV1_1_0 = ("maximize") | ("spotlight") | ("elevation") | ("hidden");
/** Native schema for VisualContainerDisplayMode, retaining its exact historical dependencies. */
export const BookmarkVisualContainerDisplayModeV1_1_0: Schema.Codec<BookmarkVisualContainerDisplayModeV1_1_0> = Schema.Union([Schema.Literal("maximize"), Schema.Literal("spotlight"), Schema.Literal("elevation"), Schema.Literal("hidden")]);

/** HighlightState in bookmark 1.1.0. */
export type BookmarkHighlightStateV1_1_0 = { readonly "selection": (BookmarkDecomposedSelectorsV1_1_0) | (ReadonlyArray<BookmarkSelectorsByColumnV1_1_0>); readonly "filterExpressionMetadata"?: Schema.Json; };
/** Native schema for HighlightState, retaining its exact historical dependencies. */
export const BookmarkHighlightStateV1_1_0: Schema.Codec<BookmarkHighlightStateV1_1_0> = closed({ "selection": Schema.Union([Schema.suspend(() => BookmarkDecomposedSelectorsV1_1_0), Schema.Array(Schema.suspend(() => BookmarkSelectorsByColumnV1_1_0))]), "filterExpressionMetadata": Schema.optionalKey(Schema.Json) });

/** DecomposedSelectors in bookmark 1.1.0. */
export type BookmarkDecomposedSelectorsV1_1_0 = { readonly "decomposedIdentities"?: BookmarkDecomposedIdentitiesV1_1_0; readonly "queryNameMap"?: ReadonlyArray<{ readonly [key: string]: ReadonlyArray<number> }>; readonly "queryNames"?: ReadonlyArray<string>; readonly "metadata"?: ReadonlyArray<ReadonlyArray<string>>; readonly "id"?: ReadonlyArray<string>; };
/** Native schema for DecomposedSelectors, retaining its exact historical dependencies. */
export const BookmarkDecomposedSelectorsV1_1_0: Schema.Codec<BookmarkDecomposedSelectorsV1_1_0> = closed({ "decomposedIdentities": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedIdentitiesV1_1_0)), "queryNameMap": Schema.optionalKey(Schema.Array(numericDictionary(Schema.Array(Schema.Finite)))), "queryNames": Schema.optionalKey(Schema.Array(Schema.String)), "metadata": Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))), "id": Schema.optionalKey(Schema.Array(Schema.String)) });

/** DecomposedIdentities in bookmark 1.1.0. */
export type BookmarkDecomposedIdentitiesV1_1_0 = { readonly "values": ReadonlyArray<ReadonlyArray<{ readonly [key: string]: ReadonlyArray<Query.QueryExpressionContainerV1_1_0> }>>; readonly "columns": ReadonlyArray<BookmarkDecomposedTreeQueryExpressionContainerV1_1_0>; };
/** Native schema for DecomposedIdentities, retaining its exact historical dependencies. */
export const BookmarkDecomposedIdentitiesV1_1_0: Schema.Codec<BookmarkDecomposedIdentitiesV1_1_0> = closed({ "values": Schema.Array(Schema.Array(numericDictionary(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer))))), "columns": Schema.Array(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_1_0)) });

/** DecomposedTree<QueryExpressionContainer> in bookmark 1.1.0. */
export type BookmarkDecomposedTreeQueryExpressionContainerV1_1_0 = { readonly "left"?: BookmarkDecomposedTreeQueryExpressionContainerV1_1_0; readonly "right"?: BookmarkDecomposedTreeQueryExpressionContainerV1_1_0; readonly "value"?: Query.QueryExpressionContainerV1_1_0; };
/** Native schema for DecomposedTree<QueryExpressionContainer>, retaining its exact historical dependencies. */
export const BookmarkDecomposedTreeQueryExpressionContainerV1_1_0: Schema.Codec<BookmarkDecomposedTreeQueryExpressionContainerV1_1_0> = closed({ "left": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_1_0)), "right": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_1_0)), "value": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer)) });

/** SelectorsByColumn in bookmark 1.1.0. */
export type BookmarkSelectorsByColumnV1_1_0 = { readonly "dataMap"?: BookmarkSelectorsForColumnV1_1_0; readonly "metadata"?: ReadonlyArray<string>; readonly "id"?: string; };
/** Native schema for SelectorsByColumn, retaining its exact historical dependencies. */
export const BookmarkSelectorsByColumnV1_1_0: Schema.Codec<BookmarkSelectorsByColumnV1_1_0> = closed({ "dataMap": Schema.optionalKey(Schema.suspend(() => BookmarkSelectorsForColumnV1_1_0)), "metadata": Schema.optionalKey(Schema.Array(Schema.String)), "id": Schema.optionalKey(Schema.String) });

/** SelectorsForColumn in bookmark 1.1.0. */
export type BookmarkSelectorsForColumnV1_1_0 = {  } & { readonly [key: string]: ReadonlyArray<Formatting.FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0> };
/** Native schema for SelectorsForColumn, retaining its exact historical dependencies. */
export const BookmarkSelectorsForColumnV1_1_0: Schema.Codec<BookmarkSelectorsForColumnV1_1_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0.DataRepetitionSelector)));

/** VisualContainerGroupState in bookmark 1.1.0. */
export type BookmarkVisualContainerGroupStateV1_1_0 = { readonly "isHidden"?: boolean; readonly "children"?: {  } & { readonly [key: string]: BookmarkVisualContainerGroupStateV1_1_0 }; };
/** Native schema for VisualContainerGroupState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerGroupStateV1_1_0: Schema.Codec<BookmarkVisualContainerGroupStateV1_1_0> = closed({ "isHidden": Schema.optionalKey(Schema.Boolean), "children": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerGroupStateV1_1_0))) });

/** Named bookmark definitions for 1.1.0. */
export const BookmarkDefinitionsV1_1_0 = {
  "BookmarkOptions": BookmarkBookmarkOptionsV1_1_0,
  "ExplorationState": BookmarkExplorationStateV1_1_0,
  "FiltersState": BookmarkFiltersStateV1_1_0,
  "FilterContainerState": BookmarkFilterContainerStateV1_1_0,
  "SectionState": BookmarkSectionStateV1_1_0,
  "VisualContainerState": BookmarkVisualContainerStateV1_1_0,
  "SingleVisualConfigState": BookmarkSingleVisualConfigStateV1_1_0,
  "DataViewObjectDefinitionUpdates": BookmarkDataViewObjectDefinitionUpdatesV1_1_0,
  "DataViewObjectPropertyIdWithSelector": BookmarkDataViewObjectPropertyIdWithSelectorV1_1_0,
  "ProjectionState": BookmarkProjectionStateV1_1_0,
  "ParameterStateByRole": BookmarkParameterStateByRoleV1_1_0,
  "ParameterState": BookmarkParameterStateV1_1_0,
  "VisualContainerDisplayState": BookmarkVisualContainerDisplayStateV1_1_0,
  "VisualContainerDisplayMode": BookmarkVisualContainerDisplayModeV1_1_0,
  "HighlightState": BookmarkHighlightStateV1_1_0,
  "DecomposedSelectors": BookmarkDecomposedSelectorsV1_1_0,
  "DecomposedIdentities": BookmarkDecomposedIdentitiesV1_1_0,
  "DecomposedTree<QueryExpressionContainer>": BookmarkDecomposedTreeQueryExpressionContainerV1_1_0,
  "SelectorsByColumn": BookmarkSelectorsByColumnV1_1_0,
  "SelectorsForColumn": BookmarkSelectorsForColumnV1_1_0,
  "VisualContainerGroupState": BookmarkVisualContainerGroupStateV1_1_0
} as const;

/** Standalone bookmark 1.1.0 document representation. */
export type BookmarkV1_1_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.1.0/schema.json"; readonly "displayName": string; readonly "name": string; readonly "options"?: BookmarkBookmarkOptionsV1_1_0; readonly "explorationState": BookmarkExplorationStateV1_1_0; };
/** Native document schema preserving allowed JSON content. */
export const BookmarkV1_1_0: Schema.Codec<BookmarkV1_1_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.1.0/schema.json"), "displayName": Schema.String, "name": Schema.String, "options": Schema.optionalKey(Schema.suspend(() => BookmarkBookmarkOptionsV1_1_0)), "explorationState": Schema.suspend(() => BookmarkExplorationStateV1_1_0) });

/** BookmarkOptions in bookmark 1.2.0. */
export type BookmarkBookmarkOptionsV1_2_0 = { readonly "applyOnlyToTargetVisuals"?: boolean; readonly "targetVisualNames"?: ReadonlyArray<string>; readonly "suppressActiveSection"?: boolean; readonly "suppressData"?: boolean; readonly "suppressDisplay"?: boolean; };
/** Native schema for BookmarkOptions, retaining its exact historical dependencies. */
export const BookmarkBookmarkOptionsV1_2_0: Schema.Codec<BookmarkBookmarkOptionsV1_2_0> = closed({ "applyOnlyToTargetVisuals": Schema.optionalKey(Schema.Boolean), "targetVisualNames": Schema.optionalKey(Schema.Array(Schema.String)), "suppressActiveSection": Schema.optionalKey(Schema.Boolean), "suppressData": Schema.optionalKey(Schema.Boolean), "suppressDisplay": Schema.optionalKey(Schema.Boolean) });

/** ExplorationState in bookmark 1.2.0. */
export type BookmarkExplorationStateV1_2_0 = { readonly "version": string; readonly "activeSection": string; readonly "filters"?: BookmarkFiltersStateV1_2_0; readonly "sections": {  } & { readonly [key: string]: BookmarkSectionStateV1_2_0 }; readonly "objects"?: BookmarkDataViewObjectDefinitionUpdatesV1_2_0; readonly "dataSourceVariables"?: string; };
/** Native schema for ExplorationState, retaining its exact historical dependencies. */
export const BookmarkExplorationStateV1_2_0: Schema.Codec<BookmarkExplorationStateV1_2_0> = closed({ "version": Schema.String, "activeSection": Schema.String, "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV1_2_0)), "sections": Schema.Record(Schema.String, Schema.suspend(() => BookmarkSectionStateV1_2_0)), "objects": Schema.optionalKey(Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV1_2_0)), "dataSourceVariables": Schema.optionalKey(Schema.String) });

/** FiltersState in bookmark 1.2.0. */
export type BookmarkFiltersStateV1_2_0 = { readonly "byName"?: {  } & { readonly [key: string]: BookmarkFilterContainerStateV1_2_0 }; readonly "byExpr"?: ReadonlyArray<BookmarkFilterContainerStateV1_2_0>; readonly "byType"?: ReadonlyArray<BookmarkFilterContainerStateV1_2_0>; readonly "byTransientState"?: ReadonlyArray<BookmarkFilterContainerStateV1_2_0>; };
/** Native schema for FiltersState, retaining its exact historical dependencies. */
export const BookmarkFiltersStateV1_2_0: Schema.Codec<BookmarkFiltersStateV1_2_0> = closed({ "byName": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkFilterContainerStateV1_2_0))), "byExpr": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_2_0))), "byType": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_2_0))), "byTransientState": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_2_0))) });

/** FilterContainerState in bookmark 1.2.0. */
export type BookmarkFilterContainerStateV1_2_0 = { readonly "name": string; readonly "type"?: string; readonly "filter"?: Query.FilterDefinitionV1_2_0; readonly "expression"?: Query.QueryExpressionContainerV1_2_0; readonly "restatement"?: string; readonly "howCreated"?: (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7); readonly "precedence"?: 0; readonly "isTransient"?: boolean; readonly "cachedDisplayNames"?: ReadonlyArray<Schema.Json>; readonly "filterExpressionMetadata"?: Schema.Json; };
/** Native schema for FilterContainerState, retaining its exact historical dependencies. */
export const BookmarkFilterContainerStateV1_2_0: Schema.Codec<BookmarkFilterContainerStateV1_2_0> = closed({ "name": Schema.String, "type": Schema.optionalKey(Schema.String), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.FilterDefinition)), "expression": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)])), "precedence": Schema.optionalKey(Schema.Literal(0)), "isTransient": Schema.optionalKey(Schema.Boolean), "cachedDisplayNames": Schema.optionalKey(Schema.Array(Schema.Json)), "filterExpressionMetadata": Schema.optionalKey(Schema.Json) });

/** SectionState in bookmark 1.2.0. */
export type BookmarkSectionStateV1_2_0 = { readonly "filters"?: BookmarkFiltersStateV1_2_0; readonly "visualContainers": {  } & { readonly [key: string]: BookmarkVisualContainerStateV1_2_0 }; readonly "visualContainerGroups"?: {  } & { readonly [key: string]: BookmarkVisualContainerGroupStateV1_2_0 }; };
/** Native schema for SectionState, retaining its exact historical dependencies. */
export const BookmarkSectionStateV1_2_0: Schema.Codec<BookmarkSectionStateV1_2_0> = closed({ "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV1_2_0)), "visualContainers": Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerStateV1_2_0)), "visualContainerGroups": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerGroupStateV1_2_0))) });

/** VisualContainerState in bookmark 1.2.0. */
export type BookmarkVisualContainerStateV1_2_0 = { readonly "filters"?: BookmarkFiltersStateV1_2_0; readonly "singleVisual"?: BookmarkSingleVisualConfigStateV1_2_0; readonly "highlight"?: BookmarkHighlightStateV1_2_0; };
/** Native schema for VisualContainerState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerStateV1_2_0: Schema.Codec<BookmarkVisualContainerStateV1_2_0> = closed({ "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV1_2_0)), "singleVisual": Schema.optionalKey(Schema.suspend(() => BookmarkSingleVisualConfigStateV1_2_0)), "highlight": Schema.optionalKey(Schema.suspend(() => BookmarkHighlightStateV1_2_0)) });

/** SingleVisualConfigState in bookmark 1.2.0. */
export type BookmarkSingleVisualConfigStateV1_2_0 = { readonly "visualType"?: string; readonly "autoSelectVisualType"?: boolean; readonly "targetType"?: string; readonly "targetAutoSelectVisualType"?: boolean; readonly "objects"?: BookmarkDataViewObjectDefinitionUpdatesV1_2_0; readonly "orderBy"?: ReadonlyArray<Query.QuerySortClauseV1_2_0>; readonly "activeProjections"?: BookmarkProjectionStateV1_2_0; readonly "projections"?: BookmarkProjectionStateV1_2_0; readonly "parameters"?: BookmarkParameterStateByRoleV1_2_0; readonly "display"?: BookmarkVisualContainerDisplayStateV1_2_0; readonly "cachedFilterDisplayItems"?: ReadonlyArray<Schema.Json>; readonly "expansionStates"?: ReadonlyArray<Schema.Json>; readonly "filterExpressionMetadata"?: Schema.Json; readonly "isDrillDisabled"?: boolean; };
/** Native schema for SingleVisualConfigState, retaining its exact historical dependencies. */
export const BookmarkSingleVisualConfigStateV1_2_0: Schema.Codec<BookmarkSingleVisualConfigStateV1_2_0> = closed({ "visualType": Schema.optionalKey(Schema.String), "autoSelectVisualType": Schema.optionalKey(Schema.Boolean), "targetType": Schema.optionalKey(Schema.String), "targetAutoSelectVisualType": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV1_2_0)), "orderBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QuerySortClause))), "activeProjections": Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_2_0)), "projections": Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_2_0)), "parameters": Schema.optionalKey(Schema.suspend(() => BookmarkParameterStateByRoleV1_2_0)), "display": Schema.optionalKey(Schema.suspend(() => BookmarkVisualContainerDisplayStateV1_2_0)), "cachedFilterDisplayItems": Schema.optionalKey(Schema.Array(Schema.Json)), "expansionStates": Schema.optionalKey(Schema.Array(Schema.Json)), "filterExpressionMetadata": Schema.optionalKey(Schema.Json), "isDrillDisabled": Schema.optionalKey(Schema.Boolean) });

/** DataViewObjectDefinitionUpdates in bookmark 1.2.0. */
export type BookmarkDataViewObjectDefinitionUpdatesV1_2_0 = { readonly "merge"?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0; readonly "remove"?: ReadonlyArray<BookmarkDataViewObjectPropertyIdWithSelectorV1_2_0>; };
/** Native schema for DataViewObjectDefinitionUpdates, retaining its exact historical dependencies. */
export const BookmarkDataViewObjectDefinitionUpdatesV1_2_0: Schema.Codec<BookmarkDataViewObjectDefinitionUpdatesV1_2_0> = closed({ "merge": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0.DataViewObjectDefinitions)), "remove": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkDataViewObjectPropertyIdWithSelectorV1_2_0))) });

/** DataViewObjectPropertyIdWithSelector in bookmark 1.2.0. */
export type BookmarkDataViewObjectPropertyIdWithSelectorV1_2_0 = { readonly "object": string; readonly "property": string; readonly "selector": Formatting.FormattingObjectDefinitionsSelectorV1_2_0; };
/** Native schema for DataViewObjectPropertyIdWithSelector, retaining its exact historical dependencies. */
export const BookmarkDataViewObjectPropertyIdWithSelectorV1_2_0: Schema.Codec<BookmarkDataViewObjectPropertyIdWithSelectorV1_2_0> = closed({ "object": Schema.String, "property": Schema.String, "selector": Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0.Selector) });

/** ProjectionState in bookmark 1.2.0. */
export type BookmarkProjectionStateV1_2_0 = {  } & { readonly [key: string]: ReadonlyArray<Query.QueryExpressionContainerV1_2_0> };
/** Native schema for ProjectionState, retaining its exact historical dependencies. */
export const BookmarkProjectionStateV1_2_0: Schema.Codec<BookmarkProjectionStateV1_2_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer)));

/** ParameterStateByRole in bookmark 1.2.0. */
export type BookmarkParameterStateByRoleV1_2_0 = {  } & { readonly [key: string]: ReadonlyArray<BookmarkParameterStateV1_2_0> };
/** Native schema for ParameterStateByRole, retaining its exact historical dependencies. */
export const BookmarkParameterStateByRoleV1_2_0: Schema.Codec<BookmarkParameterStateByRoleV1_2_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => BookmarkParameterStateV1_2_0)));

/** ParameterState in bookmark 1.2.0. */
export type BookmarkParameterStateV1_2_0 = { readonly "expr": Query.QueryExpressionContainerV1_2_0; readonly "index": number; readonly "length": number; };
/** Native schema for ParameterState, retaining its exact historical dependencies. */
export const BookmarkParameterStateV1_2_0: Schema.Codec<BookmarkParameterStateV1_2_0> = closed({ "expr": Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer), "index": Schema.Finite, "length": Schema.Finite });

/** VisualContainerDisplayState in bookmark 1.2.0. */
export type BookmarkVisualContainerDisplayStateV1_2_0 = { readonly "mode": BookmarkVisualContainerDisplayModeV1_2_0; readonly "maximizedOptions"?: { readonly "dataTable"?: "accessible" | "normal"; }; };
/** Native schema for VisualContainerDisplayState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerDisplayStateV1_2_0: Schema.Codec<BookmarkVisualContainerDisplayStateV1_2_0> = closed({ "mode": Schema.suspend(() => BookmarkVisualContainerDisplayModeV1_2_0), "maximizedOptions": Schema.optionalKey(closed({ "dataTable": Schema.optionalKey(Schema.Literals(["accessible", "normal"])) })) });

/** VisualContainerDisplayMode in bookmark 1.2.0. */
export type BookmarkVisualContainerDisplayModeV1_2_0 = ("maximize") | ("spotlight") | ("elevation") | ("hidden");
/** Native schema for VisualContainerDisplayMode, retaining its exact historical dependencies. */
export const BookmarkVisualContainerDisplayModeV1_2_0: Schema.Codec<BookmarkVisualContainerDisplayModeV1_2_0> = Schema.Union([Schema.Literal("maximize"), Schema.Literal("spotlight"), Schema.Literal("elevation"), Schema.Literal("hidden")]);

/** HighlightState in bookmark 1.2.0. */
export type BookmarkHighlightStateV1_2_0 = { readonly "selection": (BookmarkDecomposedSelectorsV1_2_0) | (ReadonlyArray<BookmarkSelectorsByColumnV1_2_0>); readonly "filterExpressionMetadata"?: Schema.Json; };
/** Native schema for HighlightState, retaining its exact historical dependencies. */
export const BookmarkHighlightStateV1_2_0: Schema.Codec<BookmarkHighlightStateV1_2_0> = closed({ "selection": Schema.Union([Schema.suspend(() => BookmarkDecomposedSelectorsV1_2_0), Schema.Array(Schema.suspend(() => BookmarkSelectorsByColumnV1_2_0))]), "filterExpressionMetadata": Schema.optionalKey(Schema.Json) });

/** DecomposedSelectors in bookmark 1.2.0. */
export type BookmarkDecomposedSelectorsV1_2_0 = { readonly "decomposedIdentities"?: BookmarkDecomposedIdentitiesV1_2_0; readonly "queryNameMap"?: ReadonlyArray<{ readonly [key: string]: ReadonlyArray<number> }>; readonly "queryNames"?: ReadonlyArray<string>; readonly "metadata"?: ReadonlyArray<ReadonlyArray<string>>; readonly "id"?: ReadonlyArray<string>; };
/** Native schema for DecomposedSelectors, retaining its exact historical dependencies. */
export const BookmarkDecomposedSelectorsV1_2_0: Schema.Codec<BookmarkDecomposedSelectorsV1_2_0> = closed({ "decomposedIdentities": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedIdentitiesV1_2_0)), "queryNameMap": Schema.optionalKey(Schema.Array(numericDictionary(Schema.Array(Schema.Finite)))), "queryNames": Schema.optionalKey(Schema.Array(Schema.String)), "metadata": Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))), "id": Schema.optionalKey(Schema.Array(Schema.String)) });

/** DecomposedIdentities in bookmark 1.2.0. */
export type BookmarkDecomposedIdentitiesV1_2_0 = { readonly "values": ReadonlyArray<ReadonlyArray<{ readonly [key: string]: ReadonlyArray<Query.QueryExpressionContainerV1_2_0> }>>; readonly "columns": ReadonlyArray<BookmarkDecomposedTreeQueryExpressionContainerV1_2_0>; };
/** Native schema for DecomposedIdentities, retaining its exact historical dependencies. */
export const BookmarkDecomposedIdentitiesV1_2_0: Schema.Codec<BookmarkDecomposedIdentitiesV1_2_0> = closed({ "values": Schema.Array(Schema.Array(numericDictionary(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer))))), "columns": Schema.Array(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_2_0)) });

/** DecomposedTree<QueryExpressionContainer> in bookmark 1.2.0. */
export type BookmarkDecomposedTreeQueryExpressionContainerV1_2_0 = { readonly "left"?: BookmarkDecomposedTreeQueryExpressionContainerV1_2_0; readonly "right"?: BookmarkDecomposedTreeQueryExpressionContainerV1_2_0; readonly "value"?: Query.QueryExpressionContainerV1_2_0; };
/** Native schema for DecomposedTree<QueryExpressionContainer>, retaining its exact historical dependencies. */
export const BookmarkDecomposedTreeQueryExpressionContainerV1_2_0: Schema.Codec<BookmarkDecomposedTreeQueryExpressionContainerV1_2_0> = closed({ "left": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_2_0)), "right": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_2_0)), "value": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer)) });

/** SelectorsByColumn in bookmark 1.2.0. */
export type BookmarkSelectorsByColumnV1_2_0 = { readonly "dataMap"?: BookmarkSelectorsForColumnV1_2_0; readonly "metadata"?: ReadonlyArray<string>; readonly "id"?: string; };
/** Native schema for SelectorsByColumn, retaining its exact historical dependencies. */
export const BookmarkSelectorsByColumnV1_2_0: Schema.Codec<BookmarkSelectorsByColumnV1_2_0> = closed({ "dataMap": Schema.optionalKey(Schema.suspend(() => BookmarkSelectorsForColumnV1_2_0)), "metadata": Schema.optionalKey(Schema.Array(Schema.String)), "id": Schema.optionalKey(Schema.String) });

/** SelectorsForColumn in bookmark 1.2.0. */
export type BookmarkSelectorsForColumnV1_2_0 = {  } & { readonly [key: string]: ReadonlyArray<Formatting.FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0> };
/** Native schema for SelectorsForColumn, retaining its exact historical dependencies. */
export const BookmarkSelectorsForColumnV1_2_0: Schema.Codec<BookmarkSelectorsForColumnV1_2_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0.DataRepetitionSelector)));

/** VisualContainerGroupState in bookmark 1.2.0. */
export type BookmarkVisualContainerGroupStateV1_2_0 = { readonly "isHidden"?: boolean; readonly "children"?: {  } & { readonly [key: string]: BookmarkVisualContainerGroupStateV1_2_0 }; };
/** Native schema for VisualContainerGroupState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerGroupStateV1_2_0: Schema.Codec<BookmarkVisualContainerGroupStateV1_2_0> = closed({ "isHidden": Schema.optionalKey(Schema.Boolean), "children": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerGroupStateV1_2_0))) });

/** Named bookmark definitions for 1.2.0. */
export const BookmarkDefinitionsV1_2_0 = {
  "BookmarkOptions": BookmarkBookmarkOptionsV1_2_0,
  "ExplorationState": BookmarkExplorationStateV1_2_0,
  "FiltersState": BookmarkFiltersStateV1_2_0,
  "FilterContainerState": BookmarkFilterContainerStateV1_2_0,
  "SectionState": BookmarkSectionStateV1_2_0,
  "VisualContainerState": BookmarkVisualContainerStateV1_2_0,
  "SingleVisualConfigState": BookmarkSingleVisualConfigStateV1_2_0,
  "DataViewObjectDefinitionUpdates": BookmarkDataViewObjectDefinitionUpdatesV1_2_0,
  "DataViewObjectPropertyIdWithSelector": BookmarkDataViewObjectPropertyIdWithSelectorV1_2_0,
  "ProjectionState": BookmarkProjectionStateV1_2_0,
  "ParameterStateByRole": BookmarkParameterStateByRoleV1_2_0,
  "ParameterState": BookmarkParameterStateV1_2_0,
  "VisualContainerDisplayState": BookmarkVisualContainerDisplayStateV1_2_0,
  "VisualContainerDisplayMode": BookmarkVisualContainerDisplayModeV1_2_0,
  "HighlightState": BookmarkHighlightStateV1_2_0,
  "DecomposedSelectors": BookmarkDecomposedSelectorsV1_2_0,
  "DecomposedIdentities": BookmarkDecomposedIdentitiesV1_2_0,
  "DecomposedTree<QueryExpressionContainer>": BookmarkDecomposedTreeQueryExpressionContainerV1_2_0,
  "SelectorsByColumn": BookmarkSelectorsByColumnV1_2_0,
  "SelectorsForColumn": BookmarkSelectorsForColumnV1_2_0,
  "VisualContainerGroupState": BookmarkVisualContainerGroupStateV1_2_0
} as const;

/** Standalone bookmark 1.2.0 document representation. */
export type BookmarkV1_2_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.2.0/schema.json"; readonly "displayName": string; readonly "name": string; readonly "options"?: BookmarkBookmarkOptionsV1_2_0; readonly "explorationState": BookmarkExplorationStateV1_2_0; };
/** Native document schema preserving allowed JSON content. */
export const BookmarkV1_2_0: Schema.Codec<BookmarkV1_2_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.2.0/schema.json"), "displayName": Schema.String, "name": Schema.String, "options": Schema.optionalKey(Schema.suspend(() => BookmarkBookmarkOptionsV1_2_0)), "explorationState": Schema.suspend(() => BookmarkExplorationStateV1_2_0) });

/** BookmarkOptions in bookmark 1.3.0. */
export type BookmarkBookmarkOptionsV1_3_0 = { readonly "applyOnlyToTargetVisuals"?: boolean; readonly "targetVisualNames"?: ReadonlyArray<string>; readonly "suppressActiveSection"?: boolean; readonly "suppressData"?: boolean; readonly "suppressDisplay"?: boolean; };
/** Native schema for BookmarkOptions, retaining its exact historical dependencies. */
export const BookmarkBookmarkOptionsV1_3_0: Schema.Codec<BookmarkBookmarkOptionsV1_3_0> = closed({ "applyOnlyToTargetVisuals": Schema.optionalKey(Schema.Boolean), "targetVisualNames": Schema.optionalKey(Schema.Array(Schema.String)), "suppressActiveSection": Schema.optionalKey(Schema.Boolean), "suppressData": Schema.optionalKey(Schema.Boolean), "suppressDisplay": Schema.optionalKey(Schema.Boolean) });

/** ExplorationState in bookmark 1.3.0. */
export type BookmarkExplorationStateV1_3_0 = { readonly "version": string; readonly "activeSection": string; readonly "filters"?: BookmarkFiltersStateV1_3_0; readonly "sections": {  } & { readonly [key: string]: BookmarkSectionStateV1_3_0 }; readonly "objects"?: BookmarkDataViewObjectDefinitionUpdatesV1_3_0; readonly "dataSourceVariables"?: string; };
/** Native schema for ExplorationState, retaining its exact historical dependencies. */
export const BookmarkExplorationStateV1_3_0: Schema.Codec<BookmarkExplorationStateV1_3_0> = closed({ "version": Schema.String, "activeSection": Schema.String, "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV1_3_0)), "sections": Schema.Record(Schema.String, Schema.suspend(() => BookmarkSectionStateV1_3_0)), "objects": Schema.optionalKey(Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV1_3_0)), "dataSourceVariables": Schema.optionalKey(Schema.String) });

/** FiltersState in bookmark 1.3.0. */
export type BookmarkFiltersStateV1_3_0 = { readonly "byName"?: {  } & { readonly [key: string]: BookmarkFilterContainerStateV1_3_0 }; readonly "byExpr"?: ReadonlyArray<BookmarkFilterContainerStateV1_3_0>; readonly "byType"?: ReadonlyArray<BookmarkFilterContainerStateV1_3_0>; readonly "byTransientState"?: ReadonlyArray<BookmarkFilterContainerStateV1_3_0>; };
/** Native schema for FiltersState, retaining its exact historical dependencies. */
export const BookmarkFiltersStateV1_3_0: Schema.Codec<BookmarkFiltersStateV1_3_0> = closed({ "byName": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkFilterContainerStateV1_3_0))), "byExpr": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_3_0))), "byType": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_3_0))), "byTransientState": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_3_0))) });

/** FilterContainerState in bookmark 1.3.0. */
export type BookmarkFilterContainerStateV1_3_0 = { readonly "name": string; readonly "type"?: string; readonly "filter"?: Query.FilterDefinitionV1_2_0; readonly "expression"?: Query.QueryExpressionContainerV1_2_0; readonly "restatement"?: string; readonly "howCreated"?: (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7); readonly "precedence"?: 0; readonly "isTransient"?: boolean; readonly "cachedDisplayNames"?: ReadonlyArray<Schema.Json>; readonly "filterExpressionMetadata"?: Schema.Json; };
/** Native schema for FilterContainerState, retaining its exact historical dependencies. */
export const BookmarkFilterContainerStateV1_3_0: Schema.Codec<BookmarkFilterContainerStateV1_3_0> = closed({ "name": Schema.String, "type": Schema.optionalKey(Schema.String), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.FilterDefinition)), "expression": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)])), "precedence": Schema.optionalKey(Schema.Literal(0)), "isTransient": Schema.optionalKey(Schema.Boolean), "cachedDisplayNames": Schema.optionalKey(Schema.Array(Schema.Json)), "filterExpressionMetadata": Schema.optionalKey(Schema.Json) });

/** SectionState in bookmark 1.3.0. */
export type BookmarkSectionStateV1_3_0 = { readonly "filters"?: BookmarkFiltersStateV1_3_0; readonly "visualContainers": {  } & { readonly [key: string]: BookmarkVisualContainerStateV1_3_0 }; readonly "visualContainerGroups"?: {  } & { readonly [key: string]: BookmarkVisualContainerGroupStateV1_3_0 }; };
/** Native schema for SectionState, retaining its exact historical dependencies. */
export const BookmarkSectionStateV1_3_0: Schema.Codec<BookmarkSectionStateV1_3_0> = closed({ "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV1_3_0)), "visualContainers": Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerStateV1_3_0)), "visualContainerGroups": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerGroupStateV1_3_0))) });

/** VisualContainerState in bookmark 1.3.0. */
export type BookmarkVisualContainerStateV1_3_0 = { readonly "filters"?: BookmarkFiltersStateV1_3_0; readonly "singleVisual"?: BookmarkSingleVisualConfigStateV1_3_0; readonly "highlight"?: BookmarkHighlightStateV1_3_0; };
/** Native schema for VisualContainerState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerStateV1_3_0: Schema.Codec<BookmarkVisualContainerStateV1_3_0> = closed({ "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV1_3_0)), "singleVisual": Schema.optionalKey(Schema.suspend(() => BookmarkSingleVisualConfigStateV1_3_0)), "highlight": Schema.optionalKey(Schema.suspend(() => BookmarkHighlightStateV1_3_0)) });

/** SingleVisualConfigState in bookmark 1.3.0. */
export type BookmarkSingleVisualConfigStateV1_3_0 = { readonly "visualType"?: string; readonly "autoSelectVisualType"?: boolean; readonly "targetType"?: string; readonly "targetAutoSelectVisualType"?: boolean; readonly "objects"?: BookmarkDataViewObjectDefinitionUpdatesV1_3_0; readonly "orderBy"?: ReadonlyArray<Query.QuerySortClauseV1_2_0>; readonly "activeProjections"?: BookmarkProjectionStateV1_3_0; readonly "projections"?: BookmarkProjectionStateV1_3_0; readonly "parameters"?: BookmarkParameterStateByRoleV1_3_0; readonly "display"?: BookmarkVisualContainerDisplayStateV1_3_0; readonly "cachedFilterDisplayItems"?: ReadonlyArray<Schema.Json>; readonly "expansionStates"?: ReadonlyArray<Schema.Json>; readonly "filterExpressionMetadata"?: Schema.Json; readonly "isDrillDisabled"?: boolean; };
/** Native schema for SingleVisualConfigState, retaining its exact historical dependencies. */
export const BookmarkSingleVisualConfigStateV1_3_0: Schema.Codec<BookmarkSingleVisualConfigStateV1_3_0> = closed({ "visualType": Schema.optionalKey(Schema.String), "autoSelectVisualType": Schema.optionalKey(Schema.Boolean), "targetType": Schema.optionalKey(Schema.String), "targetAutoSelectVisualType": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV1_3_0)), "orderBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QuerySortClause))), "activeProjections": Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_3_0)), "projections": Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_3_0)), "parameters": Schema.optionalKey(Schema.suspend(() => BookmarkParameterStateByRoleV1_3_0)), "display": Schema.optionalKey(Schema.suspend(() => BookmarkVisualContainerDisplayStateV1_3_0)), "cachedFilterDisplayItems": Schema.optionalKey(Schema.Array(Schema.Json)), "expansionStates": Schema.optionalKey(Schema.Array(Schema.Json)), "filterExpressionMetadata": Schema.optionalKey(Schema.Json), "isDrillDisabled": Schema.optionalKey(Schema.Boolean) });

/** DataViewObjectDefinitionUpdates in bookmark 1.3.0. */
export type BookmarkDataViewObjectDefinitionUpdatesV1_3_0 = { readonly "merge"?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0; readonly "remove"?: ReadonlyArray<BookmarkDataViewObjectPropertyIdWithSelectorV1_3_0>; };
/** Native schema for DataViewObjectDefinitionUpdates, retaining its exact historical dependencies. */
export const BookmarkDataViewObjectDefinitionUpdatesV1_3_0: Schema.Codec<BookmarkDataViewObjectDefinitionUpdatesV1_3_0> = closed({ "merge": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0.DataViewObjectDefinitions)), "remove": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkDataViewObjectPropertyIdWithSelectorV1_3_0))) });

/** DataViewObjectPropertyIdWithSelector in bookmark 1.3.0. */
export type BookmarkDataViewObjectPropertyIdWithSelectorV1_3_0 = { readonly "object": string; readonly "property": string; readonly "selector": Formatting.FormattingObjectDefinitionsSelectorV1_3_0; };
/** Native schema for DataViewObjectPropertyIdWithSelector, retaining its exact historical dependencies. */
export const BookmarkDataViewObjectPropertyIdWithSelectorV1_3_0: Schema.Codec<BookmarkDataViewObjectPropertyIdWithSelectorV1_3_0> = closed({ "object": Schema.String, "property": Schema.String, "selector": Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0.Selector) });

/** ProjectionState in bookmark 1.3.0. */
export type BookmarkProjectionStateV1_3_0 = {  } & { readonly [key: string]: ReadonlyArray<Query.QueryExpressionContainerV1_2_0> };
/** Native schema for ProjectionState, retaining its exact historical dependencies. */
export const BookmarkProjectionStateV1_3_0: Schema.Codec<BookmarkProjectionStateV1_3_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer)));

/** ParameterStateByRole in bookmark 1.3.0. */
export type BookmarkParameterStateByRoleV1_3_0 = {  } & { readonly [key: string]: ReadonlyArray<BookmarkParameterStateV1_3_0> };
/** Native schema for ParameterStateByRole, retaining its exact historical dependencies. */
export const BookmarkParameterStateByRoleV1_3_0: Schema.Codec<BookmarkParameterStateByRoleV1_3_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => BookmarkParameterStateV1_3_0)));

/** ParameterState in bookmark 1.3.0. */
export type BookmarkParameterStateV1_3_0 = { readonly "expr": Query.QueryExpressionContainerV1_2_0; readonly "index": number; readonly "length": number; readonly "sortDirection"?: Schema.Json; };
/** Native schema for ParameterState, retaining its exact historical dependencies. */
export const BookmarkParameterStateV1_3_0: Schema.Codec<BookmarkParameterStateV1_3_0> = closed({ "expr": Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer), "index": Schema.Finite, "length": Schema.Finite, "sortDirection": Schema.optionalKey(Schema.Json) });

/** VisualContainerDisplayState in bookmark 1.3.0. */
export type BookmarkVisualContainerDisplayStateV1_3_0 = { readonly "mode": BookmarkVisualContainerDisplayModeV1_3_0; readonly "maximizedOptions"?: { readonly "dataTable"?: "accessible" | "normal"; }; };
/** Native schema for VisualContainerDisplayState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerDisplayStateV1_3_0: Schema.Codec<BookmarkVisualContainerDisplayStateV1_3_0> = closed({ "mode": Schema.suspend(() => BookmarkVisualContainerDisplayModeV1_3_0), "maximizedOptions": Schema.optionalKey(closed({ "dataTable": Schema.optionalKey(Schema.Literals(["accessible", "normal"])) })) });

/** VisualContainerDisplayMode in bookmark 1.3.0. */
export type BookmarkVisualContainerDisplayModeV1_3_0 = ("maximize") | ("spotlight") | ("elevation") | ("hidden");
/** Native schema for VisualContainerDisplayMode, retaining its exact historical dependencies. */
export const BookmarkVisualContainerDisplayModeV1_3_0: Schema.Codec<BookmarkVisualContainerDisplayModeV1_3_0> = Schema.Union([Schema.Literal("maximize"), Schema.Literal("spotlight"), Schema.Literal("elevation"), Schema.Literal("hidden")]);

/** HighlightState in bookmark 1.3.0. */
export type BookmarkHighlightStateV1_3_0 = { readonly "selection": (BookmarkDecomposedSelectorsV1_3_0) | (ReadonlyArray<BookmarkSelectorsByColumnV1_3_0>); readonly "filterExpressionMetadata"?: Schema.Json; };
/** Native schema for HighlightState, retaining its exact historical dependencies. */
export const BookmarkHighlightStateV1_3_0: Schema.Codec<BookmarkHighlightStateV1_3_0> = closed({ "selection": Schema.Union([Schema.suspend(() => BookmarkDecomposedSelectorsV1_3_0), Schema.Array(Schema.suspend(() => BookmarkSelectorsByColumnV1_3_0))]), "filterExpressionMetadata": Schema.optionalKey(Schema.Json) });

/** DecomposedSelectors in bookmark 1.3.0. */
export type BookmarkDecomposedSelectorsV1_3_0 = { readonly "decomposedIdentities"?: BookmarkDecomposedIdentitiesV1_3_0; readonly "queryNameMap"?: ReadonlyArray<{ readonly [key: string]: ReadonlyArray<number> }>; readonly "queryNames"?: ReadonlyArray<string>; readonly "metadata"?: ReadonlyArray<ReadonlyArray<string>>; readonly "id"?: ReadonlyArray<string>; };
/** Native schema for DecomposedSelectors, retaining its exact historical dependencies. */
export const BookmarkDecomposedSelectorsV1_3_0: Schema.Codec<BookmarkDecomposedSelectorsV1_3_0> = closed({ "decomposedIdentities": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedIdentitiesV1_3_0)), "queryNameMap": Schema.optionalKey(Schema.Array(numericDictionary(Schema.Array(Schema.Finite)))), "queryNames": Schema.optionalKey(Schema.Array(Schema.String)), "metadata": Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))), "id": Schema.optionalKey(Schema.Array(Schema.String)) });

/** DecomposedIdentities in bookmark 1.3.0. */
export type BookmarkDecomposedIdentitiesV1_3_0 = { readonly "values": ReadonlyArray<ReadonlyArray<{ readonly [key: string]: ReadonlyArray<Query.QueryExpressionContainerV1_2_0> }>>; readonly "columns": ReadonlyArray<BookmarkDecomposedTreeQueryExpressionContainerV1_3_0>; };
/** Native schema for DecomposedIdentities, retaining its exact historical dependencies. */
export const BookmarkDecomposedIdentitiesV1_3_0: Schema.Codec<BookmarkDecomposedIdentitiesV1_3_0> = closed({ "values": Schema.Array(Schema.Array(numericDictionary(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer))))), "columns": Schema.Array(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_3_0)) });

/** DecomposedTree<QueryExpressionContainer> in bookmark 1.3.0. */
export type BookmarkDecomposedTreeQueryExpressionContainerV1_3_0 = { readonly "left"?: BookmarkDecomposedTreeQueryExpressionContainerV1_3_0; readonly "right"?: BookmarkDecomposedTreeQueryExpressionContainerV1_3_0; readonly "value"?: Query.QueryExpressionContainerV1_2_0; };
/** Native schema for DecomposedTree<QueryExpressionContainer>, retaining its exact historical dependencies. */
export const BookmarkDecomposedTreeQueryExpressionContainerV1_3_0: Schema.Codec<BookmarkDecomposedTreeQueryExpressionContainerV1_3_0> = closed({ "left": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_3_0)), "right": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_3_0)), "value": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer)) });

/** SelectorsByColumn in bookmark 1.3.0. */
export type BookmarkSelectorsByColumnV1_3_0 = { readonly "dataMap"?: BookmarkSelectorsForColumnV1_3_0; readonly "metadata"?: ReadonlyArray<string>; readonly "id"?: string; };
/** Native schema for SelectorsByColumn, retaining its exact historical dependencies. */
export const BookmarkSelectorsByColumnV1_3_0: Schema.Codec<BookmarkSelectorsByColumnV1_3_0> = closed({ "dataMap": Schema.optionalKey(Schema.suspend(() => BookmarkSelectorsForColumnV1_3_0)), "metadata": Schema.optionalKey(Schema.Array(Schema.String)), "id": Schema.optionalKey(Schema.String) });

/** SelectorsForColumn in bookmark 1.3.0. */
export type BookmarkSelectorsForColumnV1_3_0 = {  } & { readonly [key: string]: ReadonlyArray<Formatting.FormattingObjectDefinitionsDataRepetitionSelectorV1_3_0> };
/** Native schema for SelectorsForColumn, retaining its exact historical dependencies. */
export const BookmarkSelectorsForColumnV1_3_0: Schema.Codec<BookmarkSelectorsForColumnV1_3_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0.DataRepetitionSelector)));

/** VisualContainerGroupState in bookmark 1.3.0. */
export type BookmarkVisualContainerGroupStateV1_3_0 = { readonly "isHidden"?: boolean; readonly "children"?: {  } & { readonly [key: string]: BookmarkVisualContainerGroupStateV1_3_0 }; };
/** Native schema for VisualContainerGroupState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerGroupStateV1_3_0: Schema.Codec<BookmarkVisualContainerGroupStateV1_3_0> = closed({ "isHidden": Schema.optionalKey(Schema.Boolean), "children": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerGroupStateV1_3_0))) });

/** Named bookmark definitions for 1.3.0. */
export const BookmarkDefinitionsV1_3_0 = {
  "BookmarkOptions": BookmarkBookmarkOptionsV1_3_0,
  "ExplorationState": BookmarkExplorationStateV1_3_0,
  "FiltersState": BookmarkFiltersStateV1_3_0,
  "FilterContainerState": BookmarkFilterContainerStateV1_3_0,
  "SectionState": BookmarkSectionStateV1_3_0,
  "VisualContainerState": BookmarkVisualContainerStateV1_3_0,
  "SingleVisualConfigState": BookmarkSingleVisualConfigStateV1_3_0,
  "DataViewObjectDefinitionUpdates": BookmarkDataViewObjectDefinitionUpdatesV1_3_0,
  "DataViewObjectPropertyIdWithSelector": BookmarkDataViewObjectPropertyIdWithSelectorV1_3_0,
  "ProjectionState": BookmarkProjectionStateV1_3_0,
  "ParameterStateByRole": BookmarkParameterStateByRoleV1_3_0,
  "ParameterState": BookmarkParameterStateV1_3_0,
  "VisualContainerDisplayState": BookmarkVisualContainerDisplayStateV1_3_0,
  "VisualContainerDisplayMode": BookmarkVisualContainerDisplayModeV1_3_0,
  "HighlightState": BookmarkHighlightStateV1_3_0,
  "DecomposedSelectors": BookmarkDecomposedSelectorsV1_3_0,
  "DecomposedIdentities": BookmarkDecomposedIdentitiesV1_3_0,
  "DecomposedTree<QueryExpressionContainer>": BookmarkDecomposedTreeQueryExpressionContainerV1_3_0,
  "SelectorsByColumn": BookmarkSelectorsByColumnV1_3_0,
  "SelectorsForColumn": BookmarkSelectorsForColumnV1_3_0,
  "VisualContainerGroupState": BookmarkVisualContainerGroupStateV1_3_0
} as const;

/** Standalone bookmark 1.3.0 document representation. */
export type BookmarkV1_3_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.3.0/schema.json"; readonly "displayName": string; readonly "name": string; readonly "options"?: BookmarkBookmarkOptionsV1_3_0; readonly "explorationState": BookmarkExplorationStateV1_3_0; };
/** Native document schema preserving allowed JSON content. */
export const BookmarkV1_3_0: Schema.Codec<BookmarkV1_3_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.3.0/schema.json"), "displayName": Schema.String, "name": Schema.String, "options": Schema.optionalKey(Schema.suspend(() => BookmarkBookmarkOptionsV1_3_0)), "explorationState": Schema.suspend(() => BookmarkExplorationStateV1_3_0) });

/** BookmarkOptions in bookmark 1.4.0. */
export type BookmarkBookmarkOptionsV1_4_0 = { readonly "applyOnlyToTargetVisuals"?: boolean; readonly "targetVisualNames"?: ReadonlyArray<string>; readonly "suppressActiveSection"?: boolean; readonly "suppressData"?: boolean; readonly "suppressDisplay"?: boolean; };
/** Native schema for BookmarkOptions, retaining its exact historical dependencies. */
export const BookmarkBookmarkOptionsV1_4_0: Schema.Codec<BookmarkBookmarkOptionsV1_4_0> = closed({ "applyOnlyToTargetVisuals": Schema.optionalKey(Schema.Boolean), "targetVisualNames": Schema.optionalKey(Schema.Array(Schema.String)), "suppressActiveSection": Schema.optionalKey(Schema.Boolean), "suppressData": Schema.optionalKey(Schema.Boolean), "suppressDisplay": Schema.optionalKey(Schema.Boolean) });

/** ExplorationState in bookmark 1.4.0. */
export type BookmarkExplorationStateV1_4_0 = { readonly "version": string; readonly "activeSection": string; readonly "filters"?: BookmarkFiltersStateV1_4_0; readonly "sections": {  } & { readonly [key: string]: BookmarkSectionStateV1_4_0 }; readonly "objects"?: BookmarkDataViewObjectDefinitionUpdatesV1_4_0; readonly "dataSourceVariables"?: string; };
/** Native schema for ExplorationState, retaining its exact historical dependencies. */
export const BookmarkExplorationStateV1_4_0: Schema.Codec<BookmarkExplorationStateV1_4_0> = closed({ "version": Schema.String, "activeSection": Schema.String, "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV1_4_0)), "sections": Schema.Record(Schema.String, Schema.suspend(() => BookmarkSectionStateV1_4_0)), "objects": Schema.optionalKey(Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV1_4_0)), "dataSourceVariables": Schema.optionalKey(Schema.String) });

/** FiltersState in bookmark 1.4.0. */
export type BookmarkFiltersStateV1_4_0 = { readonly "byName"?: {  } & { readonly [key: string]: BookmarkFilterContainerStateV1_4_0 }; readonly "byExpr"?: ReadonlyArray<BookmarkFilterContainerStateV1_4_0>; readonly "byType"?: ReadonlyArray<BookmarkFilterContainerStateV1_4_0>; readonly "byTransientState"?: ReadonlyArray<BookmarkFilterContainerStateV1_4_0>; };
/** Native schema for FiltersState, retaining its exact historical dependencies. */
export const BookmarkFiltersStateV1_4_0: Schema.Codec<BookmarkFiltersStateV1_4_0> = closed({ "byName": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkFilterContainerStateV1_4_0))), "byExpr": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_4_0))), "byType": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_4_0))), "byTransientState": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_4_0))) });

/** FilterContainerState in bookmark 1.4.0. */
export type BookmarkFilterContainerStateV1_4_0 = { readonly "name": string; readonly "type"?: string; readonly "filter"?: Query.FilterDefinitionV1_3_0; readonly "expression"?: Query.QueryExpressionContainerV1_3_0; readonly "restatement"?: string; readonly "howCreated"?: (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7); readonly "precedence"?: 0; readonly "isTransient"?: boolean; readonly "cachedDisplayNames"?: ReadonlyArray<BookmarkFilterLabelIdPairV1_4_0>; readonly "filterExpressionMetadata"?: (BookmarkFilterExpressionMetadataV1_4_0) | (BookmarkDecomposedFilterExpressionMetadataV1_4_0); };
/** Native schema for FilterContainerState, retaining its exact historical dependencies. */
export const BookmarkFilterContainerStateV1_4_0: Schema.Codec<BookmarkFilterContainerStateV1_4_0> = closed({ "name": Schema.String, "type": Schema.optionalKey(Schema.String), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.FilterDefinition)), "expression": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)])), "precedence": Schema.optionalKey(Schema.Literal(0)), "isTransient": Schema.optionalKey(Schema.Boolean), "cachedDisplayNames": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterLabelIdPairV1_4_0))), "filterExpressionMetadata": Schema.optionalKey(Schema.Union([Schema.suspend(() => BookmarkFilterExpressionMetadataV1_4_0), Schema.suspend(() => BookmarkDecomposedFilterExpressionMetadataV1_4_0)])) });

/** FilterLabelIdPair in bookmark 1.4.0. */
export type BookmarkFilterLabelIdPairV1_4_0 = { readonly "id": Formatting.FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0; readonly "displayName": string; };
/** Native schema for FilterLabelIdPair, retaining its exact historical dependencies. */
export const BookmarkFilterLabelIdPairV1_4_0: Schema.Codec<BookmarkFilterLabelIdPairV1_4_0> = closed({ "id": Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.DataRepetitionSelector), "displayName": Schema.String });

/** FilterExpressionMetadata in bookmark 1.4.0. */
export type BookmarkFilterExpressionMetadataV1_4_0 = { readonly "expressions": ReadonlyArray<Query.QueryExpressionContainerV1_3_0>; readonly "cachedValueItems"?: ReadonlyArray<BookmarkIdentityValueMapV1_4_0>; readonly "jsonFilter"?: { readonly "filterType": Schema.Json; }; };
/** Native schema for FilterExpressionMetadata, retaining its exact historical dependencies. */
export const BookmarkFilterExpressionMetadataV1_4_0: Schema.Codec<BookmarkFilterExpressionMetadataV1_4_0> = closed({ "expressions": Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer)), "cachedValueItems": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkIdentityValueMapV1_4_0))), "jsonFilter": Schema.optionalKey(closed({ "filterType": Schema.Json })) });

/** IdentityValueMap in bookmark 1.4.0. */
export type BookmarkIdentityValueMapV1_4_0 = { readonly "identities": ReadonlyArray<Formatting.FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0>; readonly "valueMap": { readonly [key: string]: string }; };
/** Native schema for IdentityValueMap, retaining its exact historical dependencies. */
export const BookmarkIdentityValueMapV1_4_0: Schema.Codec<BookmarkIdentityValueMapV1_4_0> = closed({ "identities": Schema.Array(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.DataRepetitionSelector)), "valueMap": numericDictionary(Schema.String) });

/** DecomposedFilterExpressionMetadata in bookmark 1.4.0. */
export type BookmarkDecomposedFilterExpressionMetadataV1_4_0 = { readonly "decomposedIdentities"?: BookmarkDecomposedIdentitiesV1_4_0; readonly "expressions": ReadonlyArray<Schema.Json>; readonly "valueMap"?: ReadonlyArray<{ readonly [key: string]: string }>; readonly "jsonFilter"?: { readonly "filterType": Schema.Json; }; };
/** Native schema for DecomposedFilterExpressionMetadata, retaining its exact historical dependencies. */
export const BookmarkDecomposedFilterExpressionMetadataV1_4_0: Schema.Codec<BookmarkDecomposedFilterExpressionMetadataV1_4_0> = closed({ "decomposedIdentities": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedIdentitiesV1_4_0)), "expressions": Schema.Array(Schema.Json), "valueMap": Schema.optionalKey(Schema.Array(numericDictionary(Schema.String))), "jsonFilter": Schema.optionalKey(closed({ "filterType": Schema.Json })) });

/** DecomposedIdentities in bookmark 1.4.0. */
export type BookmarkDecomposedIdentitiesV1_4_0 = { readonly "values": ReadonlyArray<ReadonlyArray<{ readonly [key: string]: ReadonlyArray<Query.QueryExpressionContainerV1_3_0> }>>; readonly "columns": ReadonlyArray<BookmarkDecomposedTreeQueryExpressionContainerV1_4_0>; };
/** Native schema for DecomposedIdentities, retaining its exact historical dependencies. */
export const BookmarkDecomposedIdentitiesV1_4_0: Schema.Codec<BookmarkDecomposedIdentitiesV1_4_0> = closed({ "values": Schema.Array(Schema.Array(numericDictionary(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer))))), "columns": Schema.Array(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_4_0)) });

/** DecomposedTree<QueryExpressionContainer> in bookmark 1.4.0. */
export type BookmarkDecomposedTreeQueryExpressionContainerV1_4_0 = { readonly "left"?: BookmarkDecomposedTreeQueryExpressionContainerV1_4_0; readonly "right"?: BookmarkDecomposedTreeQueryExpressionContainerV1_4_0; readonly "value"?: Query.QueryExpressionContainerV1_3_0; };
/** Native schema for DecomposedTree<QueryExpressionContainer>, retaining its exact historical dependencies. */
export const BookmarkDecomposedTreeQueryExpressionContainerV1_4_0: Schema.Codec<BookmarkDecomposedTreeQueryExpressionContainerV1_4_0> = closed({ "left": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_4_0)), "right": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_4_0)), "value": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer)) });

/** SectionState in bookmark 1.4.0. */
export type BookmarkSectionStateV1_4_0 = { readonly "filters"?: BookmarkFiltersStateV1_4_0; readonly "visualContainers": {  } & { readonly [key: string]: BookmarkVisualContainerStateV1_4_0 }; readonly "visualContainerGroups"?: {  } & { readonly [key: string]: BookmarkVisualContainerGroupStateV1_4_0 }; };
/** Native schema for SectionState, retaining its exact historical dependencies. */
export const BookmarkSectionStateV1_4_0: Schema.Codec<BookmarkSectionStateV1_4_0> = closed({ "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV1_4_0)), "visualContainers": Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerStateV1_4_0)), "visualContainerGroups": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerGroupStateV1_4_0))) });

/** VisualContainerState in bookmark 1.4.0. */
export type BookmarkVisualContainerStateV1_4_0 = { readonly "filters"?: BookmarkFiltersStateV1_4_0; readonly "singleVisual"?: BookmarkSingleVisualConfigStateV1_4_0; readonly "highlight"?: BookmarkHighlightStateV1_4_0; };
/** Native schema for VisualContainerState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerStateV1_4_0: Schema.Codec<BookmarkVisualContainerStateV1_4_0> = closed({ "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV1_4_0)), "singleVisual": Schema.optionalKey(Schema.suspend(() => BookmarkSingleVisualConfigStateV1_4_0)), "highlight": Schema.optionalKey(Schema.suspend(() => BookmarkHighlightStateV1_4_0)) });

/** SingleVisualConfigState in bookmark 1.4.0. */
export type BookmarkSingleVisualConfigStateV1_4_0 = { readonly "visualType"?: string; readonly "autoSelectVisualType"?: boolean; readonly "targetType"?: string; readonly "targetAutoSelectVisualType"?: boolean; readonly "objects"?: BookmarkDataViewObjectDefinitionUpdatesV1_4_0; readonly "orderBy"?: ReadonlyArray<Query.QuerySortClauseV1_3_0>; readonly "activeProjections"?: BookmarkProjectionStateV1_4_0; readonly "projections"?: BookmarkProjectionStateV1_4_0; readonly "parameters"?: BookmarkParameterStateByRoleV1_4_0; readonly "display"?: BookmarkVisualContainerDisplayStateV1_4_0; readonly "cachedFilterDisplayItems"?: ReadonlyArray<BookmarkFilterLabelIdPairV1_4_0>; readonly "expansionStates"?: ReadonlyArray<Schema.Json>; readonly "filterExpressionMetadata"?: (BookmarkFilterExpressionMetadataV1_4_0) | (BookmarkDecomposedFilterExpressionMetadataV1_4_0); readonly "isDrillDisabled"?: boolean; };
/** Native schema for SingleVisualConfigState, retaining its exact historical dependencies. */
export const BookmarkSingleVisualConfigStateV1_4_0: Schema.Codec<BookmarkSingleVisualConfigStateV1_4_0> = closed({ "visualType": Schema.optionalKey(Schema.String), "autoSelectVisualType": Schema.optionalKey(Schema.Boolean), "targetType": Schema.optionalKey(Schema.String), "targetAutoSelectVisualType": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV1_4_0)), "orderBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QuerySortClause))), "activeProjections": Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_4_0)), "projections": Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_4_0)), "parameters": Schema.optionalKey(Schema.suspend(() => BookmarkParameterStateByRoleV1_4_0)), "display": Schema.optionalKey(Schema.suspend(() => BookmarkVisualContainerDisplayStateV1_4_0)), "cachedFilterDisplayItems": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterLabelIdPairV1_4_0))), "expansionStates": Schema.optionalKey(Schema.Array(Schema.Json)), "filterExpressionMetadata": Schema.optionalKey(Schema.Union([Schema.suspend(() => BookmarkFilterExpressionMetadataV1_4_0), Schema.suspend(() => BookmarkDecomposedFilterExpressionMetadataV1_4_0)])), "isDrillDisabled": Schema.optionalKey(Schema.Boolean) });

/** DataViewObjectDefinitionUpdates in bookmark 1.4.0. */
export type BookmarkDataViewObjectDefinitionUpdatesV1_4_0 = { readonly "merge"?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0; readonly "remove"?: ReadonlyArray<BookmarkDataViewObjectPropertyIdWithSelectorV1_4_0>; };
/** Native schema for DataViewObjectDefinitionUpdates, retaining its exact historical dependencies. */
export const BookmarkDataViewObjectDefinitionUpdatesV1_4_0: Schema.Codec<BookmarkDataViewObjectDefinitionUpdatesV1_4_0> = closed({ "merge": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.DataViewObjectDefinitions)), "remove": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkDataViewObjectPropertyIdWithSelectorV1_4_0))) });

/** DataViewObjectPropertyIdWithSelector in bookmark 1.4.0. */
export type BookmarkDataViewObjectPropertyIdWithSelectorV1_4_0 = { readonly "object": string; readonly "property": string; readonly "selector": Formatting.FormattingObjectDefinitionsSelectorV1_4_0; };
/** Native schema for DataViewObjectPropertyIdWithSelector, retaining its exact historical dependencies. */
export const BookmarkDataViewObjectPropertyIdWithSelectorV1_4_0: Schema.Codec<BookmarkDataViewObjectPropertyIdWithSelectorV1_4_0> = closed({ "object": Schema.String, "property": Schema.String, "selector": Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.Selector) });

/** ProjectionState in bookmark 1.4.0. */
export type BookmarkProjectionStateV1_4_0 = {  } & { readonly [key: string]: ReadonlyArray<Query.QueryExpressionContainerV1_3_0> };
/** Native schema for ProjectionState, retaining its exact historical dependencies. */
export const BookmarkProjectionStateV1_4_0: Schema.Codec<BookmarkProjectionStateV1_4_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer)));

/** ParameterStateByRole in bookmark 1.4.0. */
export type BookmarkParameterStateByRoleV1_4_0 = {  } & { readonly [key: string]: ReadonlyArray<BookmarkParameterStateV1_4_0> };
/** Native schema for ParameterStateByRole, retaining its exact historical dependencies. */
export const BookmarkParameterStateByRoleV1_4_0: Schema.Codec<BookmarkParameterStateByRoleV1_4_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => BookmarkParameterStateV1_4_0)));

/** ParameterState in bookmark 1.4.0. */
export type BookmarkParameterStateV1_4_0 = { readonly "expr": Query.QueryExpressionContainerV1_3_0; readonly "index": number; readonly "length": number; readonly "sortDirection"?: (1) | (2); };
/** Native schema for ParameterState, retaining its exact historical dependencies. */
export const BookmarkParameterStateV1_4_0: Schema.Codec<BookmarkParameterStateV1_4_0> = closed({ "expr": Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer), "index": Schema.Finite, "length": Schema.Finite, "sortDirection": Schema.optionalKey(Schema.Union([Schema.Literal(1), Schema.Literal(2)])) });

/** VisualContainerDisplayState in bookmark 1.4.0. */
export type BookmarkVisualContainerDisplayStateV1_4_0 = { readonly "mode": BookmarkVisualContainerDisplayModeV1_4_0; readonly "maximizedOptions"?: { readonly "dataTable"?: "accessible" | "normal"; }; };
/** Native schema for VisualContainerDisplayState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerDisplayStateV1_4_0: Schema.Codec<BookmarkVisualContainerDisplayStateV1_4_0> = closed({ "mode": Schema.suspend(() => BookmarkVisualContainerDisplayModeV1_4_0), "maximizedOptions": Schema.optionalKey(closed({ "dataTable": Schema.optionalKey(Schema.Literals(["accessible", "normal"])) })) });

/** VisualContainerDisplayMode in bookmark 1.4.0. */
export type BookmarkVisualContainerDisplayModeV1_4_0 = ("maximize") | ("spotlight") | ("elevation") | ("hidden");
/** Native schema for VisualContainerDisplayMode, retaining its exact historical dependencies. */
export const BookmarkVisualContainerDisplayModeV1_4_0: Schema.Codec<BookmarkVisualContainerDisplayModeV1_4_0> = Schema.Union([Schema.Literal("maximize"), Schema.Literal("spotlight"), Schema.Literal("elevation"), Schema.Literal("hidden")]);

/** HighlightState in bookmark 1.4.0. */
export type BookmarkHighlightStateV1_4_0 = { readonly "selection": (BookmarkDecomposedSelectorsV1_4_0) | (ReadonlyArray<BookmarkSelectorsByColumnV1_4_0>); readonly "filterExpressionMetadata"?: (BookmarkFilterExpressionMetadataV1_4_0) | (BookmarkDecomposedFilterExpressionMetadataV1_4_0); };
/** Native schema for HighlightState, retaining its exact historical dependencies. */
export const BookmarkHighlightStateV1_4_0: Schema.Codec<BookmarkHighlightStateV1_4_0> = closed({ "selection": Schema.Union([Schema.suspend(() => BookmarkDecomposedSelectorsV1_4_0), Schema.Array(Schema.suspend(() => BookmarkSelectorsByColumnV1_4_0))]), "filterExpressionMetadata": Schema.optionalKey(Schema.Union([Schema.suspend(() => BookmarkFilterExpressionMetadataV1_4_0), Schema.suspend(() => BookmarkDecomposedFilterExpressionMetadataV1_4_0)])) });

/** DecomposedSelectors in bookmark 1.4.0. */
export type BookmarkDecomposedSelectorsV1_4_0 = { readonly "decomposedIdentities"?: BookmarkDecomposedIdentitiesV1_4_0; readonly "queryNameMap"?: ReadonlyArray<{ readonly [key: string]: ReadonlyArray<number> }>; readonly "queryNames"?: ReadonlyArray<string>; readonly "metadata"?: ReadonlyArray<ReadonlyArray<string>>; readonly "id"?: ReadonlyArray<string>; };
/** Native schema for DecomposedSelectors, retaining its exact historical dependencies. */
export const BookmarkDecomposedSelectorsV1_4_0: Schema.Codec<BookmarkDecomposedSelectorsV1_4_0> = closed({ "decomposedIdentities": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedIdentitiesV1_4_0)), "queryNameMap": Schema.optionalKey(Schema.Array(numericDictionary(Schema.Array(Schema.Finite)))), "queryNames": Schema.optionalKey(Schema.Array(Schema.String)), "metadata": Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))), "id": Schema.optionalKey(Schema.Array(Schema.String)) });

/** SelectorsByColumn in bookmark 1.4.0. */
export type BookmarkSelectorsByColumnV1_4_0 = { readonly "dataMap"?: BookmarkSelectorsForColumnV1_4_0; readonly "metadata"?: ReadonlyArray<string>; readonly "id"?: string; };
/** Native schema for SelectorsByColumn, retaining its exact historical dependencies. */
export const BookmarkSelectorsByColumnV1_4_0: Schema.Codec<BookmarkSelectorsByColumnV1_4_0> = closed({ "dataMap": Schema.optionalKey(Schema.suspend(() => BookmarkSelectorsForColumnV1_4_0)), "metadata": Schema.optionalKey(Schema.Array(Schema.String)), "id": Schema.optionalKey(Schema.String) });

/** SelectorsForColumn in bookmark 1.4.0. */
export type BookmarkSelectorsForColumnV1_4_0 = {  } & { readonly [key: string]: ReadonlyArray<Formatting.FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0> };
/** Native schema for SelectorsForColumn, retaining its exact historical dependencies. */
export const BookmarkSelectorsForColumnV1_4_0: Schema.Codec<BookmarkSelectorsForColumnV1_4_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.DataRepetitionSelector)));

/** VisualContainerGroupState in bookmark 1.4.0. */
export type BookmarkVisualContainerGroupStateV1_4_0 = { readonly "isHidden"?: boolean; readonly "children"?: {  } & { readonly [key: string]: BookmarkVisualContainerGroupStateV1_4_0 }; };
/** Native schema for VisualContainerGroupState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerGroupStateV1_4_0: Schema.Codec<BookmarkVisualContainerGroupStateV1_4_0> = closed({ "isHidden": Schema.optionalKey(Schema.Boolean), "children": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerGroupStateV1_4_0))) });

/** Named bookmark definitions for 1.4.0. */
export const BookmarkDefinitionsV1_4_0 = {
  "BookmarkOptions": BookmarkBookmarkOptionsV1_4_0,
  "ExplorationState": BookmarkExplorationStateV1_4_0,
  "FiltersState": BookmarkFiltersStateV1_4_0,
  "FilterContainerState": BookmarkFilterContainerStateV1_4_0,
  "FilterLabelIdPair": BookmarkFilterLabelIdPairV1_4_0,
  "FilterExpressionMetadata": BookmarkFilterExpressionMetadataV1_4_0,
  "IdentityValueMap": BookmarkIdentityValueMapV1_4_0,
  "DecomposedFilterExpressionMetadata": BookmarkDecomposedFilterExpressionMetadataV1_4_0,
  "DecomposedIdentities": BookmarkDecomposedIdentitiesV1_4_0,
  "DecomposedTree<QueryExpressionContainer>": BookmarkDecomposedTreeQueryExpressionContainerV1_4_0,
  "SectionState": BookmarkSectionStateV1_4_0,
  "VisualContainerState": BookmarkVisualContainerStateV1_4_0,
  "SingleVisualConfigState": BookmarkSingleVisualConfigStateV1_4_0,
  "DataViewObjectDefinitionUpdates": BookmarkDataViewObjectDefinitionUpdatesV1_4_0,
  "DataViewObjectPropertyIdWithSelector": BookmarkDataViewObjectPropertyIdWithSelectorV1_4_0,
  "ProjectionState": BookmarkProjectionStateV1_4_0,
  "ParameterStateByRole": BookmarkParameterStateByRoleV1_4_0,
  "ParameterState": BookmarkParameterStateV1_4_0,
  "VisualContainerDisplayState": BookmarkVisualContainerDisplayStateV1_4_0,
  "VisualContainerDisplayMode": BookmarkVisualContainerDisplayModeV1_4_0,
  "HighlightState": BookmarkHighlightStateV1_4_0,
  "DecomposedSelectors": BookmarkDecomposedSelectorsV1_4_0,
  "SelectorsByColumn": BookmarkSelectorsByColumnV1_4_0,
  "SelectorsForColumn": BookmarkSelectorsForColumnV1_4_0,
  "VisualContainerGroupState": BookmarkVisualContainerGroupStateV1_4_0
} as const;

/** Standalone bookmark 1.4.0 document representation. */
export type BookmarkV1_4_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.4.0/schema.json"; readonly "displayName": string; readonly "name": string; readonly "options"?: BookmarkBookmarkOptionsV1_4_0; readonly "explorationState": BookmarkExplorationStateV1_4_0; };
/** Native document schema preserving allowed JSON content. */
export const BookmarkV1_4_0: Schema.Codec<BookmarkV1_4_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.4.0/schema.json"), "displayName": Schema.String, "name": Schema.String, "options": Schema.optionalKey(Schema.suspend(() => BookmarkBookmarkOptionsV1_4_0)), "explorationState": Schema.suspend(() => BookmarkExplorationStateV1_4_0) });

/** BookmarkOptions in bookmark 2.0.0. */
export type BookmarkBookmarkOptionsV2_0_0 = { readonly "applyOnlyToTargetVisuals"?: boolean; readonly "targetVisualNames"?: ReadonlyArray<string>; readonly "suppressActiveSection"?: boolean; readonly "suppressData"?: boolean; readonly "suppressDisplay"?: boolean; };
/** Native schema for BookmarkOptions, retaining its exact historical dependencies. */
export const BookmarkBookmarkOptionsV2_0_0: Schema.Codec<BookmarkBookmarkOptionsV2_0_0> = closed({ "applyOnlyToTargetVisuals": Schema.optionalKey(Schema.Boolean), "targetVisualNames": Schema.optionalKey(Schema.Array(Schema.String)), "suppressActiveSection": Schema.optionalKey(Schema.Boolean), "suppressData": Schema.optionalKey(Schema.Boolean), "suppressDisplay": Schema.optionalKey(Schema.Boolean) });

/** ExplorationState in bookmark 2.0.0. */
export type BookmarkExplorationStateV2_0_0 = { readonly "version": string; readonly "activeSection": string; readonly "filters"?: BookmarkFiltersStateV2_0_0; readonly "sections": {  } & { readonly [key: string]: BookmarkSectionStateV2_0_0 }; readonly "objects"?: BookmarkDataViewObjectDefinitionUpdatesV2_0_0; readonly "dataSourceVariables"?: string; };
/** Native schema for ExplorationState, retaining its exact historical dependencies. */
export const BookmarkExplorationStateV2_0_0: Schema.Codec<BookmarkExplorationStateV2_0_0> = closed({ "version": Schema.String, "activeSection": Schema.String, "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV2_0_0)), "sections": Schema.Record(Schema.String, Schema.suspend(() => BookmarkSectionStateV2_0_0)), "objects": Schema.optionalKey(Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV2_0_0)), "dataSourceVariables": Schema.optionalKey(Schema.String) });

/** FiltersState in bookmark 2.0.0. */
export type BookmarkFiltersStateV2_0_0 = { readonly "byName"?: {  } & { readonly [key: string]: BookmarkFilterContainerStateV2_0_0 }; readonly "byExpr"?: ReadonlyArray<BookmarkFilterContainerStateV2_0_0>; readonly "byType"?: ReadonlyArray<BookmarkFilterContainerStateV2_0_0>; readonly "byTransientState"?: ReadonlyArray<BookmarkFilterContainerStateV2_0_0>; };
/** Native schema for FiltersState, retaining its exact historical dependencies. */
export const BookmarkFiltersStateV2_0_0: Schema.Codec<BookmarkFiltersStateV2_0_0> = closed({ "byName": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkFilterContainerStateV2_0_0))), "byExpr": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV2_0_0))), "byType": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV2_0_0))), "byTransientState": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV2_0_0))) });

/** FilterContainerState in bookmark 2.0.0. */
export type BookmarkFilterContainerStateV2_0_0 = { readonly "name": string; readonly "type"?: string; readonly "filter"?: Query.FilterDefinitionV1_3_0; readonly "expression"?: Query.QueryExpressionContainerV1_3_0; readonly "restatement"?: string; readonly "howCreated"?: (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7); readonly "precedence"?: 0; readonly "isTransient"?: boolean; readonly "cachedDisplayNames"?: ReadonlyArray<BookmarkFilterLabelIdPairV2_0_0>; readonly "filterExpressionMetadata"?: (BookmarkFilterExpressionMetadataV2_0_0) | (BookmarkDecomposedFilterExpressionMetadataV2_0_0); };
/** Native schema for FilterContainerState, retaining its exact historical dependencies. */
export const BookmarkFilterContainerStateV2_0_0: Schema.Codec<BookmarkFilterContainerStateV2_0_0> = closed({ "name": Schema.String, "type": Schema.optionalKey(Schema.String), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.FilterDefinition)), "expression": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)])), "precedence": Schema.optionalKey(Schema.Literal(0)), "isTransient": Schema.optionalKey(Schema.Boolean), "cachedDisplayNames": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterLabelIdPairV2_0_0))), "filterExpressionMetadata": Schema.optionalKey(Schema.Union([Schema.suspend(() => BookmarkFilterExpressionMetadataV2_0_0), Schema.suspend(() => BookmarkDecomposedFilterExpressionMetadataV2_0_0)])) });

/** FilterLabelIdPair in bookmark 2.0.0. */
export type BookmarkFilterLabelIdPairV2_0_0 = { readonly "id": Formatting.FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0; readonly "displayName": string; };
/** Native schema for FilterLabelIdPair, retaining its exact historical dependencies. */
export const BookmarkFilterLabelIdPairV2_0_0: Schema.Codec<BookmarkFilterLabelIdPairV2_0_0> = closed({ "id": Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.DataRepetitionSelector), "displayName": Schema.String });

/** FilterExpressionMetadata in bookmark 2.0.0. */
export type BookmarkFilterExpressionMetadataV2_0_0 = { readonly "expressions": ReadonlyArray<Query.QueryExpressionContainerV1_3_0>; readonly "cachedValueItems"?: ReadonlyArray<BookmarkIdentityValueMapV2_0_0>; readonly "jsonFilter"?: { readonly "filterType": Schema.Json; }; };
/** Native schema for FilterExpressionMetadata, retaining its exact historical dependencies. */
export const BookmarkFilterExpressionMetadataV2_0_0: Schema.Codec<BookmarkFilterExpressionMetadataV2_0_0> = closed({ "expressions": Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer)), "cachedValueItems": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkIdentityValueMapV2_0_0))), "jsonFilter": Schema.optionalKey(closed({ "filterType": Schema.Json })) });

/** IdentityValueMap in bookmark 2.0.0. */
export type BookmarkIdentityValueMapV2_0_0 = { readonly "identities": ReadonlyArray<Formatting.FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0>; readonly "valueMap": { readonly [key: string]: string }; };
/** Native schema for IdentityValueMap, retaining its exact historical dependencies. */
export const BookmarkIdentityValueMapV2_0_0: Schema.Codec<BookmarkIdentityValueMapV2_0_0> = closed({ "identities": Schema.Array(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.DataRepetitionSelector)), "valueMap": numericDictionary(Schema.String) });

/** DecomposedFilterExpressionMetadata in bookmark 2.0.0. */
export type BookmarkDecomposedFilterExpressionMetadataV2_0_0 = { readonly "decomposedIdentities"?: BookmarkDecomposedIdentitiesV2_0_0; readonly "expressions": ReadonlyArray<Schema.Json>; readonly "valueMap"?: ReadonlyArray<{ readonly [key: string]: string }>; readonly "jsonFilter"?: { readonly "filterType": Schema.Json; }; };
/** Native schema for DecomposedFilterExpressionMetadata, retaining its exact historical dependencies. */
export const BookmarkDecomposedFilterExpressionMetadataV2_0_0: Schema.Codec<BookmarkDecomposedFilterExpressionMetadataV2_0_0> = closed({ "decomposedIdentities": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedIdentitiesV2_0_0)), "expressions": Schema.Array(Schema.Json), "valueMap": Schema.optionalKey(Schema.Array(numericDictionary(Schema.String))), "jsonFilter": Schema.optionalKey(closed({ "filterType": Schema.Json })) });

/** DecomposedIdentities in bookmark 2.0.0. */
export type BookmarkDecomposedIdentitiesV2_0_0 = { readonly "values": ReadonlyArray<ReadonlyArray<{ readonly [key: string]: ReadonlyArray<Query.QueryExpressionContainerV1_3_0> }>>; readonly "columns": ReadonlyArray<BookmarkDecomposedTreeQueryExpressionContainerV2_0_0>; };
/** Native schema for DecomposedIdentities, retaining its exact historical dependencies. */
export const BookmarkDecomposedIdentitiesV2_0_0: Schema.Codec<BookmarkDecomposedIdentitiesV2_0_0> = closed({ "values": Schema.Array(Schema.Array(numericDictionary(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer))))), "columns": Schema.Array(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV2_0_0)) });

/** DecomposedTree<QueryExpressionContainer> in bookmark 2.0.0. */
export type BookmarkDecomposedTreeQueryExpressionContainerV2_0_0 = { readonly "left"?: BookmarkDecomposedTreeQueryExpressionContainerV2_0_0; readonly "right"?: BookmarkDecomposedTreeQueryExpressionContainerV2_0_0; readonly "value"?: Query.QueryExpressionContainerV1_3_0; };
/** Native schema for DecomposedTree<QueryExpressionContainer>, retaining its exact historical dependencies. */
export const BookmarkDecomposedTreeQueryExpressionContainerV2_0_0: Schema.Codec<BookmarkDecomposedTreeQueryExpressionContainerV2_0_0> = closed({ "left": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV2_0_0)), "right": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV2_0_0)), "value": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer)) });

/** SectionState in bookmark 2.0.0. */
export type BookmarkSectionStateV2_0_0 = { readonly "filters"?: BookmarkFiltersStateV2_0_0; readonly "visualContainers": {  } & { readonly [key: string]: BookmarkVisualContainerStateV2_0_0 }; readonly "visualContainerGroups"?: {  } & { readonly [key: string]: BookmarkVisualContainerGroupStateV2_0_0 }; };
/** Native schema for SectionState, retaining its exact historical dependencies. */
export const BookmarkSectionStateV2_0_0: Schema.Codec<BookmarkSectionStateV2_0_0> = closed({ "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV2_0_0)), "visualContainers": Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerStateV2_0_0)), "visualContainerGroups": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerGroupStateV2_0_0))) });

/** VisualContainerState in bookmark 2.0.0. */
export type BookmarkVisualContainerStateV2_0_0 = { readonly "filters"?: BookmarkFiltersStateV2_0_0; readonly "singleVisual"?: BookmarkSingleVisualConfigStateV2_0_0; readonly "highlight"?: BookmarkHighlightStateV2_0_0; };
/** Native schema for VisualContainerState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerStateV2_0_0: Schema.Codec<BookmarkVisualContainerStateV2_0_0> = closed({ "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV2_0_0)), "singleVisual": Schema.optionalKey(Schema.suspend(() => BookmarkSingleVisualConfigStateV2_0_0)), "highlight": Schema.optionalKey(Schema.suspend(() => BookmarkHighlightStateV2_0_0)) });

/** SingleVisualConfigState in bookmark 2.0.0. */
export type BookmarkSingleVisualConfigStateV2_0_0 = { readonly "visualType"?: string; readonly "autoSelectVisualType"?: boolean; readonly "targetType"?: string; readonly "targetAutoSelectVisualType"?: boolean; readonly "objects"?: BookmarkDataViewObjectDefinitionUpdatesV2_0_0; readonly "orderBy"?: ReadonlyArray<Query.QuerySortClauseV1_3_0>; readonly "activeProjections"?: BookmarkProjectionStateV2_0_0; readonly "projections"?: BookmarkProjectionStateV2_0_0; readonly "parameters"?: BookmarkParameterStateByRoleV2_0_0; readonly "display"?: BookmarkVisualContainerDisplayStateV2_0_0; readonly "cachedFilterDisplayItems"?: ReadonlyArray<BookmarkFilterLabelIdPairV2_0_0>; readonly "expansionStates"?: ReadonlyArray<Schema.Json>; readonly "filterExpressionMetadata"?: (BookmarkFilterExpressionMetadataV2_0_0) | (BookmarkDecomposedFilterExpressionMetadataV2_0_0); readonly "isDrillDisabled"?: boolean; };
/** Native schema for SingleVisualConfigState, retaining its exact historical dependencies. */
export const BookmarkSingleVisualConfigStateV2_0_0: Schema.Codec<BookmarkSingleVisualConfigStateV2_0_0> = closed({ "visualType": Schema.optionalKey(Schema.String), "autoSelectVisualType": Schema.optionalKey(Schema.Boolean), "targetType": Schema.optionalKey(Schema.String), "targetAutoSelectVisualType": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV2_0_0)), "orderBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QuerySortClause))), "activeProjections": Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV2_0_0)), "projections": Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV2_0_0)), "parameters": Schema.optionalKey(Schema.suspend(() => BookmarkParameterStateByRoleV2_0_0)), "display": Schema.optionalKey(Schema.suspend(() => BookmarkVisualContainerDisplayStateV2_0_0)), "cachedFilterDisplayItems": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterLabelIdPairV2_0_0))), "expansionStates": Schema.optionalKey(Schema.Array(Schema.Json)), "filterExpressionMetadata": Schema.optionalKey(Schema.Union([Schema.suspend(() => BookmarkFilterExpressionMetadataV2_0_0), Schema.suspend(() => BookmarkDecomposedFilterExpressionMetadataV2_0_0)])), "isDrillDisabled": Schema.optionalKey(Schema.Boolean) });

/** DataViewObjectDefinitionUpdates in bookmark 2.0.0. */
export type BookmarkDataViewObjectDefinitionUpdatesV2_0_0 = { readonly "merge"?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0; readonly "remove"?: ReadonlyArray<BookmarkDataViewObjectPropertyIdWithSelectorV2_0_0>; };
/** Native schema for DataViewObjectDefinitionUpdates, retaining its exact historical dependencies. */
export const BookmarkDataViewObjectDefinitionUpdatesV2_0_0: Schema.Codec<BookmarkDataViewObjectDefinitionUpdatesV2_0_0> = closed({ "merge": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.DataViewObjectDefinitions)), "remove": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkDataViewObjectPropertyIdWithSelectorV2_0_0))) });

/** DataViewObjectPropertyIdWithSelector in bookmark 2.0.0. */
export type BookmarkDataViewObjectPropertyIdWithSelectorV2_0_0 = { readonly "object": string; readonly "property": string; readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0; };
/** Native schema for DataViewObjectPropertyIdWithSelector, retaining its exact historical dependencies. */
export const BookmarkDataViewObjectPropertyIdWithSelectorV2_0_0: Schema.Codec<BookmarkDataViewObjectPropertyIdWithSelectorV2_0_0> = closed({ "object": Schema.String, "property": Schema.String, "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.Selector)) });

/** ProjectionState in bookmark 2.0.0. */
export type BookmarkProjectionStateV2_0_0 = {  } & { readonly [key: string]: ReadonlyArray<Query.QueryExpressionContainerV1_3_0> };
/** Native schema for ProjectionState, retaining its exact historical dependencies. */
export const BookmarkProjectionStateV2_0_0: Schema.Codec<BookmarkProjectionStateV2_0_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer)));

/** ParameterStateByRole in bookmark 2.0.0. */
export type BookmarkParameterStateByRoleV2_0_0 = {  } & { readonly [key: string]: ReadonlyArray<BookmarkParameterStateV2_0_0> };
/** Native schema for ParameterStateByRole, retaining its exact historical dependencies. */
export const BookmarkParameterStateByRoleV2_0_0: Schema.Codec<BookmarkParameterStateByRoleV2_0_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => BookmarkParameterStateV2_0_0)));

/** ParameterState in bookmark 2.0.0. */
export type BookmarkParameterStateV2_0_0 = { readonly "expr": Query.QueryExpressionContainerV1_3_0; readonly "index": number; readonly "length": number; readonly "sortDirection"?: (1) | (2); };
/** Native schema for ParameterState, retaining its exact historical dependencies. */
export const BookmarkParameterStateV2_0_0: Schema.Codec<BookmarkParameterStateV2_0_0> = closed({ "expr": Schema.suspend(() => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer), "index": Schema.Finite, "length": Schema.Finite, "sortDirection": Schema.optionalKey(Schema.Union([Schema.Literal(1), Schema.Literal(2)])) });

/** VisualContainerDisplayState in bookmark 2.0.0. */
export type BookmarkVisualContainerDisplayStateV2_0_0 = { readonly "mode": BookmarkVisualContainerDisplayModeV2_0_0; readonly "maximizedOptions"?: { readonly "dataTable"?: "accessible" | "normal"; }; };
/** Native schema for VisualContainerDisplayState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerDisplayStateV2_0_0: Schema.Codec<BookmarkVisualContainerDisplayStateV2_0_0> = closed({ "mode": Schema.suspend(() => BookmarkVisualContainerDisplayModeV2_0_0), "maximizedOptions": Schema.optionalKey(closed({ "dataTable": Schema.optionalKey(Schema.Literals(["accessible", "normal"])) })) });

/** VisualContainerDisplayMode in bookmark 2.0.0. */
export type BookmarkVisualContainerDisplayModeV2_0_0 = ("maximize") | ("spotlight") | ("elevation") | ("hidden");
/** Native schema for VisualContainerDisplayMode, retaining its exact historical dependencies. */
export const BookmarkVisualContainerDisplayModeV2_0_0: Schema.Codec<BookmarkVisualContainerDisplayModeV2_0_0> = Schema.Union([Schema.Literal("maximize"), Schema.Literal("spotlight"), Schema.Literal("elevation"), Schema.Literal("hidden")]);

/** HighlightState in bookmark 2.0.0. */
export type BookmarkHighlightStateV2_0_0 = { readonly "selection": (BookmarkDecomposedSelectorsV2_0_0) | (ReadonlyArray<BookmarkSelectorsByColumnV2_0_0>); readonly "filterExpressionMetadata"?: (BookmarkFilterExpressionMetadataV2_0_0) | (BookmarkDecomposedFilterExpressionMetadataV2_0_0); };
/** Native schema for HighlightState, retaining its exact historical dependencies. */
export const BookmarkHighlightStateV2_0_0: Schema.Codec<BookmarkHighlightStateV2_0_0> = closed({ "selection": Schema.Union([Schema.suspend(() => BookmarkDecomposedSelectorsV2_0_0), Schema.Array(Schema.suspend(() => BookmarkSelectorsByColumnV2_0_0))]), "filterExpressionMetadata": Schema.optionalKey(Schema.Union([Schema.suspend(() => BookmarkFilterExpressionMetadataV2_0_0), Schema.suspend(() => BookmarkDecomposedFilterExpressionMetadataV2_0_0)])) });

/** DecomposedSelectors in bookmark 2.0.0. */
export type BookmarkDecomposedSelectorsV2_0_0 = { readonly "decomposedIdentities"?: BookmarkDecomposedIdentitiesV2_0_0; readonly "queryNameMap"?: ReadonlyArray<{ readonly [key: string]: ReadonlyArray<number> }>; readonly "queryNames"?: ReadonlyArray<string>; readonly "metadata"?: ReadonlyArray<ReadonlyArray<string>>; readonly "id"?: ReadonlyArray<string>; };
/** Native schema for DecomposedSelectors, retaining its exact historical dependencies. */
export const BookmarkDecomposedSelectorsV2_0_0: Schema.Codec<BookmarkDecomposedSelectorsV2_0_0> = closed({ "decomposedIdentities": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedIdentitiesV2_0_0)), "queryNameMap": Schema.optionalKey(Schema.Array(numericDictionary(Schema.Array(Schema.Finite)))), "queryNames": Schema.optionalKey(Schema.Array(Schema.String)), "metadata": Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))), "id": Schema.optionalKey(Schema.Array(Schema.String)) });

/** SelectorsByColumn in bookmark 2.0.0. */
export type BookmarkSelectorsByColumnV2_0_0 = { readonly "dataMap"?: BookmarkSelectorsForColumnV2_0_0; readonly "metadata"?: ReadonlyArray<string>; readonly "id"?: string; };
/** Native schema for SelectorsByColumn, retaining its exact historical dependencies. */
export const BookmarkSelectorsByColumnV2_0_0: Schema.Codec<BookmarkSelectorsByColumnV2_0_0> = closed({ "dataMap": Schema.optionalKey(Schema.suspend(() => BookmarkSelectorsForColumnV2_0_0)), "metadata": Schema.optionalKey(Schema.Array(Schema.String)), "id": Schema.optionalKey(Schema.String) });

/** SelectorsForColumn in bookmark 2.0.0. */
export type BookmarkSelectorsForColumnV2_0_0 = {  } & { readonly [key: string]: ReadonlyArray<Formatting.FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0> };
/** Native schema for SelectorsForColumn, retaining its exact historical dependencies. */
export const BookmarkSelectorsForColumnV2_0_0: Schema.Codec<BookmarkSelectorsForColumnV2_0_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0.DataRepetitionSelector)));

/** VisualContainerGroupState in bookmark 2.0.0. */
export type BookmarkVisualContainerGroupStateV2_0_0 = { readonly "isHidden"?: boolean; readonly "children"?: {  } & { readonly [key: string]: BookmarkVisualContainerGroupStateV2_0_0 }; };
/** Native schema for VisualContainerGroupState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerGroupStateV2_0_0: Schema.Codec<BookmarkVisualContainerGroupStateV2_0_0> = closed({ "isHidden": Schema.optionalKey(Schema.Boolean), "children": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerGroupStateV2_0_0))) });

/** Named bookmark definitions for 2.0.0. */
export const BookmarkDefinitionsV2_0_0 = {
  "BookmarkOptions": BookmarkBookmarkOptionsV2_0_0,
  "ExplorationState": BookmarkExplorationStateV2_0_0,
  "FiltersState": BookmarkFiltersStateV2_0_0,
  "FilterContainerState": BookmarkFilterContainerStateV2_0_0,
  "FilterLabelIdPair": BookmarkFilterLabelIdPairV2_0_0,
  "FilterExpressionMetadata": BookmarkFilterExpressionMetadataV2_0_0,
  "IdentityValueMap": BookmarkIdentityValueMapV2_0_0,
  "DecomposedFilterExpressionMetadata": BookmarkDecomposedFilterExpressionMetadataV2_0_0,
  "DecomposedIdentities": BookmarkDecomposedIdentitiesV2_0_0,
  "DecomposedTree<QueryExpressionContainer>": BookmarkDecomposedTreeQueryExpressionContainerV2_0_0,
  "SectionState": BookmarkSectionStateV2_0_0,
  "VisualContainerState": BookmarkVisualContainerStateV2_0_0,
  "SingleVisualConfigState": BookmarkSingleVisualConfigStateV2_0_0,
  "DataViewObjectDefinitionUpdates": BookmarkDataViewObjectDefinitionUpdatesV2_0_0,
  "DataViewObjectPropertyIdWithSelector": BookmarkDataViewObjectPropertyIdWithSelectorV2_0_0,
  "ProjectionState": BookmarkProjectionStateV2_0_0,
  "ParameterStateByRole": BookmarkParameterStateByRoleV2_0_0,
  "ParameterState": BookmarkParameterStateV2_0_0,
  "VisualContainerDisplayState": BookmarkVisualContainerDisplayStateV2_0_0,
  "VisualContainerDisplayMode": BookmarkVisualContainerDisplayModeV2_0_0,
  "HighlightState": BookmarkHighlightStateV2_0_0,
  "DecomposedSelectors": BookmarkDecomposedSelectorsV2_0_0,
  "SelectorsByColumn": BookmarkSelectorsByColumnV2_0_0,
  "SelectorsForColumn": BookmarkSelectorsForColumnV2_0_0,
  "VisualContainerGroupState": BookmarkVisualContainerGroupStateV2_0_0
} as const;

/** Standalone bookmark 2.0.0 document representation. */
export type BookmarkV2_0_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.0.0/schema.json"; readonly "displayName": string; readonly "name": string; readonly "options"?: BookmarkBookmarkOptionsV2_0_0; readonly "explorationState": BookmarkExplorationStateV2_0_0; };
/** Native document schema preserving allowed JSON content. */
export const BookmarkV2_0_0: Schema.Codec<BookmarkV2_0_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.0.0/schema.json"), "displayName": Schema.String, "name": Schema.String, "options": Schema.optionalKey(Schema.suspend(() => BookmarkBookmarkOptionsV2_0_0)), "explorationState": Schema.suspend(() => BookmarkExplorationStateV2_0_0) });

/** BookmarkOptions in bookmark 2.1.0. */
export type BookmarkBookmarkOptionsV2_1_0 = { readonly "applyOnlyToTargetVisuals"?: boolean; readonly "targetVisualNames"?: ReadonlyArray<string>; readonly "suppressActiveSection"?: boolean; readonly "suppressData"?: boolean; readonly "suppressDisplay"?: boolean; };
/** Native schema for BookmarkOptions, retaining its exact historical dependencies. */
export const BookmarkBookmarkOptionsV2_1_0: Schema.Codec<BookmarkBookmarkOptionsV2_1_0> = closed({ "applyOnlyToTargetVisuals": Schema.optionalKey(Schema.Boolean), "targetVisualNames": Schema.optionalKey(Schema.Array(Schema.String)), "suppressActiveSection": Schema.optionalKey(Schema.Boolean), "suppressData": Schema.optionalKey(Schema.Boolean), "suppressDisplay": Schema.optionalKey(Schema.Boolean) });

/** ExplorationState in bookmark 2.1.0. */
export type BookmarkExplorationStateV2_1_0 = { readonly "version": string; readonly "activeSection": string; readonly "filters"?: BookmarkFiltersStateV2_1_0; readonly "sections": {  } & { readonly [key: string]: BookmarkSectionStateV2_1_0 }; readonly "objects"?: BookmarkDataViewObjectDefinitionUpdatesV2_1_0; readonly "dataSourceVariables"?: string; };
/** Native schema for ExplorationState, retaining its exact historical dependencies. */
export const BookmarkExplorationStateV2_1_0: Schema.Codec<BookmarkExplorationStateV2_1_0> = closed({ "version": Schema.String, "activeSection": Schema.String, "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV2_1_0)), "sections": Schema.Record(Schema.String, Schema.suspend(() => BookmarkSectionStateV2_1_0)), "objects": Schema.optionalKey(Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV2_1_0)), "dataSourceVariables": Schema.optionalKey(Schema.String) });

/** FiltersState in bookmark 2.1.0. */
export type BookmarkFiltersStateV2_1_0 = { readonly "byName"?: {  } & { readonly [key: string]: BookmarkFilterContainerStateV2_1_0 }; readonly "byExpr"?: ReadonlyArray<BookmarkFilterContainerStateV2_1_0>; readonly "byType"?: ReadonlyArray<BookmarkFilterContainerStateV2_1_0>; readonly "byTransientState"?: ReadonlyArray<BookmarkFilterContainerStateV2_1_0>; };
/** Native schema for FiltersState, retaining its exact historical dependencies. */
export const BookmarkFiltersStateV2_1_0: Schema.Codec<BookmarkFiltersStateV2_1_0> = closed({ "byName": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkFilterContainerStateV2_1_0))), "byExpr": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV2_1_0))), "byType": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV2_1_0))), "byTransientState": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV2_1_0))) });

/** FilterContainerState in bookmark 2.1.0. */
export type BookmarkFilterContainerStateV2_1_0 = { readonly "name": string; readonly "type"?: string; readonly "filter"?: Query.FilterDefinitionV1_4_0; readonly "expression"?: Query.QueryExpressionContainerV1_4_0; readonly "restatement"?: string; readonly "howCreated"?: (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7); readonly "precedence"?: 0; readonly "isTransient"?: boolean; readonly "cachedDisplayNames"?: ReadonlyArray<BookmarkFilterLabelIdPairV2_1_0>; readonly "filterExpressionMetadata"?: (BookmarkFilterExpressionMetadataV2_1_0) | (BookmarkDecomposedFilterExpressionMetadataV2_1_0); };
/** Native schema for FilterContainerState, retaining its exact historical dependencies. */
export const BookmarkFilterContainerStateV2_1_0: Schema.Codec<BookmarkFilterContainerStateV2_1_0> = closed({ "name": Schema.String, "type": Schema.optionalKey(Schema.String), "filter": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_4_0.FilterDefinition)), "expression": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer)), "restatement": Schema.optionalKey(Schema.String), "howCreated": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)])), "precedence": Schema.optionalKey(Schema.Literal(0)), "isTransient": Schema.optionalKey(Schema.Boolean), "cachedDisplayNames": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterLabelIdPairV2_1_0))), "filterExpressionMetadata": Schema.optionalKey(Schema.Union([Schema.suspend(() => BookmarkFilterExpressionMetadataV2_1_0), Schema.suspend(() => BookmarkDecomposedFilterExpressionMetadataV2_1_0)])) });

/** FilterLabelIdPair in bookmark 2.1.0. */
export type BookmarkFilterLabelIdPairV2_1_0 = { readonly "id": Formatting.FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0; readonly "displayName": string; };
/** Native schema for FilterLabelIdPair, retaining its exact historical dependencies. */
export const BookmarkFilterLabelIdPairV2_1_0: Schema.Codec<BookmarkFilterLabelIdPairV2_1_0> = closed({ "id": Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0.DataRepetitionSelector), "displayName": Schema.String });

/** FilterExpressionMetadata in bookmark 2.1.0. */
export type BookmarkFilterExpressionMetadataV2_1_0 = { readonly "expressions": ReadonlyArray<Query.QueryExpressionContainerV1_4_0>; readonly "cachedValueItems"?: ReadonlyArray<BookmarkIdentityValueMapV2_1_0>; readonly "jsonFilter"?: { readonly "filterType": Schema.Json; }; };
/** Native schema for FilterExpressionMetadata, retaining its exact historical dependencies. */
export const BookmarkFilterExpressionMetadataV2_1_0: Schema.Codec<BookmarkFilterExpressionMetadataV2_1_0> = closed({ "expressions": Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer)), "cachedValueItems": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkIdentityValueMapV2_1_0))), "jsonFilter": Schema.optionalKey(closed({ "filterType": Schema.Json })) });

/** IdentityValueMap in bookmark 2.1.0. */
export type BookmarkIdentityValueMapV2_1_0 = { readonly "identities": ReadonlyArray<Formatting.FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0>; readonly "valueMap": { readonly [key: string]: string }; };
/** Native schema for IdentityValueMap, retaining its exact historical dependencies. */
export const BookmarkIdentityValueMapV2_1_0: Schema.Codec<BookmarkIdentityValueMapV2_1_0> = closed({ "identities": Schema.Array(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0.DataRepetitionSelector)), "valueMap": numericDictionary(Schema.String) });

/** DecomposedFilterExpressionMetadata in bookmark 2.1.0. */
export type BookmarkDecomposedFilterExpressionMetadataV2_1_0 = { readonly "decomposedIdentities"?: BookmarkDecomposedIdentitiesV2_1_0; readonly "expressions": ReadonlyArray<Schema.Json>; readonly "valueMap"?: ReadonlyArray<{ readonly [key: string]: string }>; readonly "jsonFilter"?: { readonly "filterType": Schema.Json; }; };
/** Native schema for DecomposedFilterExpressionMetadata, retaining its exact historical dependencies. */
export const BookmarkDecomposedFilterExpressionMetadataV2_1_0: Schema.Codec<BookmarkDecomposedFilterExpressionMetadataV2_1_0> = closed({ "decomposedIdentities": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedIdentitiesV2_1_0)), "expressions": Schema.Array(Schema.Json), "valueMap": Schema.optionalKey(Schema.Array(numericDictionary(Schema.String))), "jsonFilter": Schema.optionalKey(closed({ "filterType": Schema.Json })) });

/** DecomposedIdentities in bookmark 2.1.0. */
export type BookmarkDecomposedIdentitiesV2_1_0 = { readonly "values": ReadonlyArray<ReadonlyArray<{ readonly [key: string]: ReadonlyArray<Query.QueryExpressionContainerV1_4_0> }>>; readonly "columns": ReadonlyArray<BookmarkDecomposedTreeQueryExpressionContainerV2_1_0>; };
/** Native schema for DecomposedIdentities, retaining its exact historical dependencies. */
export const BookmarkDecomposedIdentitiesV2_1_0: Schema.Codec<BookmarkDecomposedIdentitiesV2_1_0> = closed({ "values": Schema.Array(Schema.Array(numericDictionary(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer))))), "columns": Schema.Array(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV2_1_0)) });

/** DecomposedTree<QueryExpressionContainer> in bookmark 2.1.0. */
export type BookmarkDecomposedTreeQueryExpressionContainerV2_1_0 = { readonly "left"?: BookmarkDecomposedTreeQueryExpressionContainerV2_1_0; readonly "right"?: BookmarkDecomposedTreeQueryExpressionContainerV2_1_0; readonly "value"?: Query.QueryExpressionContainerV1_4_0; };
/** Native schema for DecomposedTree<QueryExpressionContainer>, retaining its exact historical dependencies. */
export const BookmarkDecomposedTreeQueryExpressionContainerV2_1_0: Schema.Codec<BookmarkDecomposedTreeQueryExpressionContainerV2_1_0> = closed({ "left": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV2_1_0)), "right": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV2_1_0)), "value": Schema.optionalKey(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer)) });

/** SectionState in bookmark 2.1.0. */
export type BookmarkSectionStateV2_1_0 = { readonly "filters"?: BookmarkFiltersStateV2_1_0; readonly "visualContainers": {  } & { readonly [key: string]: BookmarkVisualContainerStateV2_1_0 }; readonly "visualContainerGroups"?: {  } & { readonly [key: string]: BookmarkVisualContainerGroupStateV2_1_0 }; };
/** Native schema for SectionState, retaining its exact historical dependencies. */
export const BookmarkSectionStateV2_1_0: Schema.Codec<BookmarkSectionStateV2_1_0> = closed({ "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV2_1_0)), "visualContainers": Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerStateV2_1_0)), "visualContainerGroups": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerGroupStateV2_1_0))) });

/** VisualContainerState in bookmark 2.1.0. */
export type BookmarkVisualContainerStateV2_1_0 = { readonly "filters"?: BookmarkFiltersStateV2_1_0; readonly "singleVisual"?: BookmarkSingleVisualConfigStateV2_1_0; readonly "highlight"?: BookmarkHighlightStateV2_1_0; };
/** Native schema for VisualContainerState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerStateV2_1_0: Schema.Codec<BookmarkVisualContainerStateV2_1_0> = closed({ "filters": Schema.optionalKey(Schema.suspend(() => BookmarkFiltersStateV2_1_0)), "singleVisual": Schema.optionalKey(Schema.suspend(() => BookmarkSingleVisualConfigStateV2_1_0)), "highlight": Schema.optionalKey(Schema.suspend(() => BookmarkHighlightStateV2_1_0)) });

/** SingleVisualConfigState in bookmark 2.1.0. */
export type BookmarkSingleVisualConfigStateV2_1_0 = { readonly "visualType"?: string; readonly "autoSelectVisualType"?: boolean; readonly "targetType"?: string; readonly "targetAutoSelectVisualType"?: boolean; readonly "objects"?: BookmarkDataViewObjectDefinitionUpdatesV2_1_0; readonly "orderBy"?: ReadonlyArray<Query.QuerySortClauseV1_4_0>; readonly "activeProjections"?: BookmarkProjectionStateV2_1_0; readonly "projections"?: BookmarkProjectionStateV2_1_0; readonly "parameters"?: BookmarkParameterStateByRoleV2_1_0; readonly "display"?: BookmarkVisualContainerDisplayStateV2_1_0; readonly "cachedFilterDisplayItems"?: ReadonlyArray<BookmarkFilterLabelIdPairV2_1_0>; readonly "expansionStates"?: ReadonlyArray<Schema.Json>; readonly "filterExpressionMetadata"?: (BookmarkFilterExpressionMetadataV2_1_0) | (BookmarkDecomposedFilterExpressionMetadataV2_1_0); readonly "isDrillDisabled"?: boolean; };
/** Native schema for SingleVisualConfigState, retaining its exact historical dependencies. */
export const BookmarkSingleVisualConfigStateV2_1_0: Schema.Codec<BookmarkSingleVisualConfigStateV2_1_0> = closed({ "visualType": Schema.optionalKey(Schema.String), "autoSelectVisualType": Schema.optionalKey(Schema.Boolean), "targetType": Schema.optionalKey(Schema.String), "targetAutoSelectVisualType": Schema.optionalKey(Schema.Boolean), "objects": Schema.optionalKey(Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV2_1_0)), "orderBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_4_0.QuerySortClause))), "activeProjections": Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV2_1_0)), "projections": Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV2_1_0)), "parameters": Schema.optionalKey(Schema.suspend(() => BookmarkParameterStateByRoleV2_1_0)), "display": Schema.optionalKey(Schema.suspend(() => BookmarkVisualContainerDisplayStateV2_1_0)), "cachedFilterDisplayItems": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkFilterLabelIdPairV2_1_0))), "expansionStates": Schema.optionalKey(Schema.Array(Schema.Json)), "filterExpressionMetadata": Schema.optionalKey(Schema.Union([Schema.suspend(() => BookmarkFilterExpressionMetadataV2_1_0), Schema.suspend(() => BookmarkDecomposedFilterExpressionMetadataV2_1_0)])), "isDrillDisabled": Schema.optionalKey(Schema.Boolean) });

/** DataViewObjectDefinitionUpdates in bookmark 2.1.0. */
export type BookmarkDataViewObjectDefinitionUpdatesV2_1_0 = { readonly "merge"?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0; readonly "remove"?: ReadonlyArray<BookmarkDataViewObjectPropertyIdWithSelectorV2_1_0>; };
/** Native schema for DataViewObjectDefinitionUpdates, retaining its exact historical dependencies. */
export const BookmarkDataViewObjectDefinitionUpdatesV2_1_0: Schema.Codec<BookmarkDataViewObjectDefinitionUpdatesV2_1_0> = closed({ "merge": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0.DataViewObjectDefinitions)), "remove": Schema.optionalKey(Schema.Array(Schema.suspend(() => BookmarkDataViewObjectPropertyIdWithSelectorV2_1_0))) });

/** DataViewObjectPropertyIdWithSelector in bookmark 2.1.0. */
export type BookmarkDataViewObjectPropertyIdWithSelectorV2_1_0 = { readonly "object": string; readonly "property": string; readonly "selector"?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0; };
/** Native schema for DataViewObjectPropertyIdWithSelector, retaining its exact historical dependencies. */
export const BookmarkDataViewObjectPropertyIdWithSelectorV2_1_0: Schema.Codec<BookmarkDataViewObjectPropertyIdWithSelectorV2_1_0> = closed({ "object": Schema.String, "property": Schema.String, "selector": Schema.optionalKey(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0.Selector)) });

/** ProjectionState in bookmark 2.1.0. */
export type BookmarkProjectionStateV2_1_0 = {  } & { readonly [key: string]: ReadonlyArray<Query.QueryExpressionContainerV1_4_0> };
/** Native schema for ProjectionState, retaining its exact historical dependencies. */
export const BookmarkProjectionStateV2_1_0: Schema.Codec<BookmarkProjectionStateV2_1_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer)));

/** ParameterStateByRole in bookmark 2.1.0. */
export type BookmarkParameterStateByRoleV2_1_0 = {  } & { readonly [key: string]: ReadonlyArray<BookmarkParameterStateV2_1_0> };
/** Native schema for ParameterStateByRole, retaining its exact historical dependencies. */
export const BookmarkParameterStateByRoleV2_1_0: Schema.Codec<BookmarkParameterStateByRoleV2_1_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => BookmarkParameterStateV2_1_0)));

/** ParameterState in bookmark 2.1.0. */
export type BookmarkParameterStateV2_1_0 = { readonly "expr": Query.QueryExpressionContainerV1_4_0; readonly "index": number; readonly "length": number; readonly "sortDirection"?: (1) | (2); };
/** Native schema for ParameterState, retaining its exact historical dependencies. */
export const BookmarkParameterStateV2_1_0: Schema.Codec<BookmarkParameterStateV2_1_0> = closed({ "expr": Schema.suspend(() => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer), "index": Schema.Finite, "length": Schema.Finite, "sortDirection": Schema.optionalKey(Schema.Union([Schema.Literal(1), Schema.Literal(2)])) });

/** VisualContainerDisplayState in bookmark 2.1.0. */
export type BookmarkVisualContainerDisplayStateV2_1_0 = { readonly "mode": BookmarkVisualContainerDisplayModeV2_1_0; readonly "maximizedOptions"?: { readonly "dataTable"?: "accessible" | "normal"; }; };
/** Native schema for VisualContainerDisplayState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerDisplayStateV2_1_0: Schema.Codec<BookmarkVisualContainerDisplayStateV2_1_0> = closed({ "mode": Schema.suspend(() => BookmarkVisualContainerDisplayModeV2_1_0), "maximizedOptions": Schema.optionalKey(closed({ "dataTable": Schema.optionalKey(Schema.Literals(["accessible", "normal"])) })) });

/** VisualContainerDisplayMode in bookmark 2.1.0. */
export type BookmarkVisualContainerDisplayModeV2_1_0 = ("maximize") | ("spotlight") | ("elevation") | ("hidden");
/** Native schema for VisualContainerDisplayMode, retaining its exact historical dependencies. */
export const BookmarkVisualContainerDisplayModeV2_1_0: Schema.Codec<BookmarkVisualContainerDisplayModeV2_1_0> = Schema.Union([Schema.Literal("maximize"), Schema.Literal("spotlight"), Schema.Literal("elevation"), Schema.Literal("hidden")]);

/** HighlightState in bookmark 2.1.0. */
export type BookmarkHighlightStateV2_1_0 = { readonly "selection": (BookmarkDecomposedSelectorsV2_1_0) | (ReadonlyArray<BookmarkSelectorsByColumnV2_1_0>); readonly "filterExpressionMetadata"?: (BookmarkFilterExpressionMetadataV2_1_0) | (BookmarkDecomposedFilterExpressionMetadataV2_1_0); };
/** Native schema for HighlightState, retaining its exact historical dependencies. */
export const BookmarkHighlightStateV2_1_0: Schema.Codec<BookmarkHighlightStateV2_1_0> = closed({ "selection": Schema.Union([Schema.suspend(() => BookmarkDecomposedSelectorsV2_1_0), Schema.Array(Schema.suspend(() => BookmarkSelectorsByColumnV2_1_0))]), "filterExpressionMetadata": Schema.optionalKey(Schema.Union([Schema.suspend(() => BookmarkFilterExpressionMetadataV2_1_0), Schema.suspend(() => BookmarkDecomposedFilterExpressionMetadataV2_1_0)])) });

/** DecomposedSelectors in bookmark 2.1.0. */
export type BookmarkDecomposedSelectorsV2_1_0 = { readonly "decomposedIdentities"?: BookmarkDecomposedIdentitiesV2_1_0; readonly "queryNameMap"?: ReadonlyArray<{ readonly [key: string]: ReadonlyArray<number> }>; readonly "queryNames"?: ReadonlyArray<string>; readonly "metadata"?: ReadonlyArray<ReadonlyArray<string>>; readonly "id"?: ReadonlyArray<string>; };
/** Native schema for DecomposedSelectors, retaining its exact historical dependencies. */
export const BookmarkDecomposedSelectorsV2_1_0: Schema.Codec<BookmarkDecomposedSelectorsV2_1_0> = closed({ "decomposedIdentities": Schema.optionalKey(Schema.suspend(() => BookmarkDecomposedIdentitiesV2_1_0)), "queryNameMap": Schema.optionalKey(Schema.Array(numericDictionary(Schema.Array(Schema.Finite)))), "queryNames": Schema.optionalKey(Schema.Array(Schema.String)), "metadata": Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))), "id": Schema.optionalKey(Schema.Array(Schema.String)) });

/** SelectorsByColumn in bookmark 2.1.0. */
export type BookmarkSelectorsByColumnV2_1_0 = { readonly "dataMap"?: BookmarkSelectorsForColumnV2_1_0; readonly "metadata"?: ReadonlyArray<string>; readonly "id"?: string; };
/** Native schema for SelectorsByColumn, retaining its exact historical dependencies. */
export const BookmarkSelectorsByColumnV2_1_0: Schema.Codec<BookmarkSelectorsByColumnV2_1_0> = closed({ "dataMap": Schema.optionalKey(Schema.suspend(() => BookmarkSelectorsForColumnV2_1_0)), "metadata": Schema.optionalKey(Schema.Array(Schema.String)), "id": Schema.optionalKey(Schema.String) });

/** SelectorsForColumn in bookmark 2.1.0. */
export type BookmarkSelectorsForColumnV2_1_0 = {  } & { readonly [key: string]: ReadonlyArray<Formatting.FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0> };
/** Native schema for SelectorsForColumn, retaining its exact historical dependencies. */
export const BookmarkSelectorsForColumnV2_1_0: Schema.Codec<BookmarkSelectorsForColumnV2_1_0> = Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0.DataRepetitionSelector)));

/** VisualContainerGroupState in bookmark 2.1.0. */
export type BookmarkVisualContainerGroupStateV2_1_0 = { readonly "isHidden"?: boolean; readonly "children"?: {  } & { readonly [key: string]: BookmarkVisualContainerGroupStateV2_1_0 }; };
/** Native schema for VisualContainerGroupState, retaining its exact historical dependencies. */
export const BookmarkVisualContainerGroupStateV2_1_0: Schema.Codec<BookmarkVisualContainerGroupStateV2_1_0> = closed({ "isHidden": Schema.optionalKey(Schema.Boolean), "children": Schema.optionalKey(Schema.Record(Schema.String, Schema.suspend(() => BookmarkVisualContainerGroupStateV2_1_0))) });

/** Named bookmark definitions for 2.1.0. */
export const BookmarkDefinitionsV2_1_0 = {
  "BookmarkOptions": BookmarkBookmarkOptionsV2_1_0,
  "ExplorationState": BookmarkExplorationStateV2_1_0,
  "FiltersState": BookmarkFiltersStateV2_1_0,
  "FilterContainerState": BookmarkFilterContainerStateV2_1_0,
  "FilterLabelIdPair": BookmarkFilterLabelIdPairV2_1_0,
  "FilterExpressionMetadata": BookmarkFilterExpressionMetadataV2_1_0,
  "IdentityValueMap": BookmarkIdentityValueMapV2_1_0,
  "DecomposedFilterExpressionMetadata": BookmarkDecomposedFilterExpressionMetadataV2_1_0,
  "DecomposedIdentities": BookmarkDecomposedIdentitiesV2_1_0,
  "DecomposedTree<QueryExpressionContainer>": BookmarkDecomposedTreeQueryExpressionContainerV2_1_0,
  "SectionState": BookmarkSectionStateV2_1_0,
  "VisualContainerState": BookmarkVisualContainerStateV2_1_0,
  "SingleVisualConfigState": BookmarkSingleVisualConfigStateV2_1_0,
  "DataViewObjectDefinitionUpdates": BookmarkDataViewObjectDefinitionUpdatesV2_1_0,
  "DataViewObjectPropertyIdWithSelector": BookmarkDataViewObjectPropertyIdWithSelectorV2_1_0,
  "ProjectionState": BookmarkProjectionStateV2_1_0,
  "ParameterStateByRole": BookmarkParameterStateByRoleV2_1_0,
  "ParameterState": BookmarkParameterStateV2_1_0,
  "VisualContainerDisplayState": BookmarkVisualContainerDisplayStateV2_1_0,
  "VisualContainerDisplayMode": BookmarkVisualContainerDisplayModeV2_1_0,
  "HighlightState": BookmarkHighlightStateV2_1_0,
  "DecomposedSelectors": BookmarkDecomposedSelectorsV2_1_0,
  "SelectorsByColumn": BookmarkSelectorsByColumnV2_1_0,
  "SelectorsForColumn": BookmarkSelectorsForColumnV2_1_0,
  "VisualContainerGroupState": BookmarkVisualContainerGroupStateV2_1_0
} as const;

/** Standalone bookmark 2.1.0 document representation. */
export type BookmarkV2_1_0 = { readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.1.0/schema.json"; readonly "displayName": string; readonly "name": string; readonly "options"?: BookmarkBookmarkOptionsV2_1_0; readonly "explorationState": BookmarkExplorationStateV2_1_0; };
/** Native document schema preserving allowed JSON content. */
export const BookmarkV2_1_0: Schema.Codec<BookmarkV2_1_0> = closed({ "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.1.0/schema.json"), "displayName": Schema.String, "name": Schema.String, "options": Schema.optionalKey(Schema.suspend(() => BookmarkBookmarkOptionsV2_1_0)), "explorationState": Schema.suspend(() => BookmarkExplorationStateV2_1_0) });

/** SingleBookmarkMetadata in bookmarksMetadata 1.0.0. */
export type BookmarksMetadataSingleBookmarkMetadataV1_0_0 = { readonly "name": string; };
/** Native schema for SingleBookmarkMetadata, retaining its exact historical dependencies. */
export const BookmarksMetadataSingleBookmarkMetadataV1_0_0: Schema.Codec<BookmarksMetadataSingleBookmarkMetadataV1_0_0> = closed({ "name": Schema.String });

/** BookmarkGroupMetadata in bookmarksMetadata 1.0.0. */
export type BookmarksMetadataBookmarkGroupMetadataV1_0_0 = { readonly "name": string; readonly "displayName": string; readonly "children": ReadonlyArray<string>; };
/** Native schema for BookmarkGroupMetadata, retaining its exact historical dependencies. */
export const BookmarksMetadataBookmarkGroupMetadataV1_0_0: Schema.Codec<BookmarksMetadataBookmarkGroupMetadataV1_0_0> = closed({ "name": Schema.String, "displayName": Schema.String, "children": Schema.Array(Schema.String) });

/** Named bookmarksMetadata definitions for 1.0.0. */
export const BookmarksMetadataDefinitionsV1_0_0 = {
  "SingleBookmarkMetadata": BookmarksMetadataSingleBookmarkMetadataV1_0_0,
  "BookmarkGroupMetadata": BookmarksMetadataBookmarkGroupMetadataV1_0_0
} as const;

/** Standalone bookmarksMetadata 1.0.0 document representation. */
export type BookmarksMetadataV1_0_0 = { readonly "items": ReadonlyArray<(BookmarksMetadataSingleBookmarkMetadataV1_0_0) | (BookmarksMetadataBookmarkGroupMetadataV1_0_0)>; readonly "$schema": "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmarksMetadata/1.0.0/schema.json"; };
/** Native document schema preserving allowed JSON content. */
export const BookmarksMetadataV1_0_0: Schema.Codec<BookmarksMetadataV1_0_0> = closed({ "items": Schema.Array(Schema.Union([Schema.suspend(() => BookmarksMetadataSingleBookmarkMetadataV1_0_0), Schema.suspend(() => BookmarksMetadataBookmarkGroupMetadataV1_0_0)])), "$schema": Schema.Literal("https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmarksMetadata/1.0.0/schema.json") });

/** Explicit coverage of every owned bookmark source. */
export const bookmarkSchemaCoverage = [
  { source: "definition/bookmark/1.0.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.0.0/schema.json", version: "1.0.0", variant: "standalone", schema: BookmarkV1_0_0 },
  { source: "definition/bookmark/1.1.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.1.0/schema.json", version: "1.1.0", variant: "standalone", schema: BookmarkV1_1_0 },
  { source: "definition/bookmark/1.2.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.2.0/schema.json", version: "1.2.0", variant: "standalone", schema: BookmarkV1_2_0 },
  { source: "definition/bookmark/1.3.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.3.0/schema.json", version: "1.3.0", variant: "standalone", schema: BookmarkV1_3_0 },
  { source: "definition/bookmark/1.4.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.4.0/schema.json", version: "1.4.0", variant: "standalone", schema: BookmarkV1_4_0 },
  { source: "definition/bookmark/2.0.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.0.0/schema.json", version: "2.0.0", variant: "standalone", schema: BookmarkV2_0_0 },
  { source: "definition/bookmark/2.1.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.1.0/schema.json", version: "2.1.0", variant: "standalone", schema: BookmarkV2_1_0 }
] as const;

/** Explicit coverage of every owned bookmarksMetadata source. */
export const bookmarksMetadataSchemaCoverage = [
  { source: "definition/bookmarksMetadata/1.0.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmarksMetadata/1.0.0/schema.json", version: "1.0.0", variant: "standalone", schema: BookmarksMetadataV1_0_0 }
] as const;

