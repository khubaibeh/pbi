import { Schema } from "effect";
import { closed } from "../shared.js";
import { FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0, FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0, FormattingObjectDefinitionsDefinitionsV1_2_0, FormattingObjectDefinitionsSelectorV1_2_0 } from "../formatting-object-definitions/shared.js";
import { QueryExpressionContainerV1_2_0, QuerySortClauseV1_2_0 } from "../semantic-query/shared.js";
import { BookmarkBookmarkOptions, BookmarkDecomposedIdentitiesV1_2_0, BookmarkDecomposedSelectorsV1_2_0, BookmarkDecomposedTreeQueryExpressionContainerV1_2_0, BookmarkFilterContainerStateV1_2_0, BookmarkFiltersStateV1_2_0, BookmarkProjectionStateV1_2_0, BookmarkVisualContainerDisplayMode, BookmarkVisualContainerDisplayState, BookmarkVisualContainerGroupState } from "./shared.js";

export type BookmarkExplorationStateV1_2_0 = {
  readonly version: string;
  readonly activeSection: string;
  readonly filters?: BookmarkFiltersStateV1_2_0;
  readonly sections: {} & {
    readonly [key: string]: BookmarkSectionStateV1_2_0;
  };
  readonly objects?: BookmarkDataViewObjectDefinitionUpdatesV1_2_0;
  readonly dataSourceVariables?: string;
};

export const BookmarkExplorationStateV1_2_0: Schema.Codec<BookmarkExplorationStateV1_2_0> =
  closed({
    version: Schema.String,
    activeSection: Schema.String,
    filters: Schema.optionalKey(
      Schema.suspend(() => BookmarkFiltersStateV1_2_0),
    ),
    sections: Schema.Record(
      Schema.String,
      Schema.suspend(() => BookmarkSectionStateV1_2_0),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV1_2_0),
    ),
    dataSourceVariables: Schema.optionalKey(Schema.String),
  });

export type BookmarkSectionStateV1_2_0 = {
  readonly filters?: BookmarkFiltersStateV1_2_0;
  readonly visualContainers: {} & {
    readonly [key: string]: BookmarkVisualContainerStateV1_2_0;
  };
  readonly visualContainerGroups?: {} & {
    readonly [key: string]: BookmarkVisualContainerGroupState;
  };
};

export const BookmarkSectionStateV1_2_0: Schema.Codec<BookmarkSectionStateV1_2_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.suspend(() => BookmarkFiltersStateV1_2_0),
    ),
    visualContainers: Schema.Record(
      Schema.String,
      Schema.suspend(() => BookmarkVisualContainerStateV1_2_0),
    ),
    visualContainerGroups: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => BookmarkVisualContainerGroupState),
      ),
    ),
  });

export type BookmarkVisualContainerStateV1_2_0 = {
  readonly filters?: BookmarkFiltersStateV1_2_0;
  readonly singleVisual?: BookmarkSingleVisualConfigStateV1_2_0;
  readonly highlight?: BookmarkHighlightStateV1_2_0;
};

export const BookmarkVisualContainerStateV1_2_0: Schema.Codec<BookmarkVisualContainerStateV1_2_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.suspend(() => BookmarkFiltersStateV1_2_0),
    ),
    singleVisual: Schema.optionalKey(
      Schema.suspend(() => BookmarkSingleVisualConfigStateV1_2_0),
    ),
    highlight: Schema.optionalKey(
      Schema.suspend(() => BookmarkHighlightStateV1_2_0),
    ),
  });

export type BookmarkSingleVisualConfigStateV1_2_0 = {
  readonly visualType?: string;
  readonly autoSelectVisualType?: boolean;
  readonly targetType?: string;
  readonly targetAutoSelectVisualType?: boolean;
  readonly objects?: BookmarkDataViewObjectDefinitionUpdatesV1_2_0;
  readonly orderBy?: ReadonlyArray<QuerySortClauseV1_2_0>;
  readonly activeProjections?: BookmarkProjectionStateV1_2_0;
  readonly projections?: BookmarkProjectionStateV1_2_0;
  readonly parameters?: BookmarkParameterStateByRoleV1_2_0;
  readonly display?: BookmarkVisualContainerDisplayState;
  readonly cachedFilterDisplayItems?: ReadonlyArray<Schema.Json>;
  readonly expansionStates?: ReadonlyArray<Schema.Json>;
  readonly filterExpressionMetadata?: Schema.Json;
  readonly isDrillDisabled?: boolean;
};

export const BookmarkSingleVisualConfigStateV1_2_0: Schema.Codec<BookmarkSingleVisualConfigStateV1_2_0> =
  closed({
    visualType: Schema.optionalKey(Schema.String),
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    targetType: Schema.optionalKey(Schema.String),
    targetAutoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    objects: Schema.optionalKey(
      Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV1_2_0),
    ),
    orderBy: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => QuerySortClauseV1_2_0,
        ),
      ),
    ),
    activeProjections: Schema.optionalKey(
      Schema.suspend(() => BookmarkProjectionStateV1_2_0),
    ),
    projections: Schema.optionalKey(
      Schema.suspend(() => BookmarkProjectionStateV1_2_0),
    ),
    parameters: Schema.optionalKey(
      Schema.suspend(() => BookmarkParameterStateByRoleV1_2_0),
    ),
    display: Schema.optionalKey(
      Schema.suspend(() => BookmarkVisualContainerDisplayState),
    ),
    cachedFilterDisplayItems: Schema.optionalKey(Schema.Array(Schema.Json)),
    expansionStates: Schema.optionalKey(Schema.Array(Schema.Json)),
    filterExpressionMetadata: Schema.optionalKey(Schema.Json),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });

export type BookmarkDataViewObjectDefinitionUpdatesV1_2_0 = {
  readonly merge?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly remove?: ReadonlyArray<BookmarkDataViewObjectPropertyIdWithSelectorV1_2_0>;
};

export const BookmarkDataViewObjectDefinitionUpdatesV1_2_0: Schema.Codec<BookmarkDataViewObjectDefinitionUpdatesV1_2_0> =
  closed({
    merge: Schema.optionalKey(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_2_0
            .DataViewObjectDefinitions,
      ),
    ),
    remove: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => BookmarkDataViewObjectPropertyIdWithSelectorV1_2_0,
        ),
      ),
    ),
  });

export type BookmarkDataViewObjectPropertyIdWithSelectorV1_2_0 = {
  readonly object: string;
  readonly property: string;
  readonly selector: FormattingObjectDefinitionsSelectorV1_2_0;
};

export const BookmarkDataViewObjectPropertyIdWithSelectorV1_2_0: Schema.Codec<BookmarkDataViewObjectPropertyIdWithSelectorV1_2_0> =
  closed({
    object: Schema.String,
    property: Schema.String,
    selector: Schema.suspend(
      () => FormattingObjectDefinitionsSelectorV1_2_0,
    ),
  });

export type BookmarkParameterStateByRoleV1_2_0 = {} & {
  readonly [key: string]: ReadonlyArray<BookmarkParameterStateV1_2_0>;
};

export const BookmarkParameterStateByRoleV1_2_0: Schema.Codec<BookmarkParameterStateByRoleV1_2_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => BookmarkParameterStateV1_2_0)),
  );

export type BookmarkParameterStateV1_2_0 = {
  readonly expr: QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length: number;
};

export const BookmarkParameterStateV1_2_0: Schema.Codec<BookmarkParameterStateV1_2_0> =
  closed({
    expr: Schema.suspend(
      () => QueryExpressionContainerV1_2_0,
    ),
    index: Schema.Finite,
    length: Schema.Finite,
  });

export type BookmarkHighlightStateV1_2_0 = {
  readonly selection:
    | BookmarkDecomposedSelectorsV1_2_0
    | ReadonlyArray<BookmarkSelectorsByColumnV1_2_0>;
  readonly filterExpressionMetadata?: Schema.Json;
};

export const BookmarkHighlightStateV1_2_0: Schema.Codec<BookmarkHighlightStateV1_2_0> =
  closed({
    selection: Schema.Union([
      Schema.suspend(() => BookmarkDecomposedSelectorsV1_2_0),
      Schema.Array(Schema.suspend(() => BookmarkSelectorsByColumnV1_2_0)),
    ]),
    filterExpressionMetadata: Schema.optionalKey(Schema.Json),
  });

export type BookmarkSelectorsByColumnV1_2_0 = {
  readonly dataMap?: BookmarkSelectorsForColumnV1_2_0;
  readonly metadata?: ReadonlyArray<string>;
  readonly id?: string;
};

export const BookmarkSelectorsByColumnV1_2_0: Schema.Codec<BookmarkSelectorsByColumnV1_2_0> =
  closed({
    dataMap: Schema.optionalKey(
      Schema.suspend(() => BookmarkSelectorsForColumnV1_2_0),
    ),
    metadata: Schema.optionalKey(Schema.Array(Schema.String)),
    id: Schema.optionalKey(Schema.String),
  });

export type BookmarkSelectorsForColumnV1_2_0 = {} & {
  readonly [
    key: string
  ]: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_2_0>;
};

export const BookmarkSelectorsForColumnV1_2_0: Schema.Codec<BookmarkSelectorsForColumnV1_2_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_2_0
            .DataRepetitionSelector,
      ),
    ),
  );

export const BookmarkDefinitionsV1_2_0 = {
  BookmarkOptions: BookmarkBookmarkOptions,
  ExplorationState: BookmarkExplorationStateV1_2_0,
  FiltersState: BookmarkFiltersStateV1_2_0,
  FilterContainerState: BookmarkFilterContainerStateV1_2_0,
  SectionState: BookmarkSectionStateV1_2_0,
  VisualContainerState: BookmarkVisualContainerStateV1_2_0,
  SingleVisualConfigState: BookmarkSingleVisualConfigStateV1_2_0,
  DataViewObjectDefinitionUpdates:
    BookmarkDataViewObjectDefinitionUpdatesV1_2_0,
  DataViewObjectPropertyIdWithSelector:
    BookmarkDataViewObjectPropertyIdWithSelectorV1_2_0,
  ProjectionState: BookmarkProjectionStateV1_2_0,
  ParameterStateByRole: BookmarkParameterStateByRoleV1_2_0,
  ParameterState: BookmarkParameterStateV1_2_0,
  VisualContainerDisplayState: BookmarkVisualContainerDisplayState,
  VisualContainerDisplayMode: BookmarkVisualContainerDisplayMode,
  HighlightState: BookmarkHighlightStateV1_2_0,
  DecomposedSelectors: BookmarkDecomposedSelectorsV1_2_0,
  DecomposedIdentities: BookmarkDecomposedIdentitiesV1_2_0,
  "DecomposedTree<QueryExpressionContainer>":
    BookmarkDecomposedTreeQueryExpressionContainerV1_2_0,
  SelectorsByColumn: BookmarkSelectorsByColumnV1_2_0,
  SelectorsForColumn: BookmarkSelectorsForColumnV1_2_0,
  VisualContainerGroupState: BookmarkVisualContainerGroupState,
} as const;

export type BookmarkV1_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.2.0/schema.json";
  readonly displayName: string;
  readonly name: string;
  readonly options?: BookmarkBookmarkOptions;
  readonly explorationState: BookmarkExplorationStateV1_2_0;
};

export const BookmarkV1_2_0: Schema.Codec<BookmarkV1_2_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.2.0/schema.json",
  ),
  displayName: Schema.String,
  name: Schema.String,
  options: Schema.optionalKey(
    Schema.suspend(() => BookmarkBookmarkOptions),
  ),
  explorationState: Schema.suspend(() => BookmarkExplorationStateV1_2_0),
});
