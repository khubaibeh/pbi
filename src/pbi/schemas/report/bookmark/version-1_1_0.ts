import { Schema } from "effect";
import { closed, numericDictionary } from "../shared.js";
import { FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0, FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0, FormattingObjectDefinitionsDefinitionsV1_1_0, FormattingObjectDefinitionsSelectorV1_1_0 } from "../formatting-object-definitions/shared.js";
import { FilterDefinitionV1_1_0, QueryExpressionContainerV1_1_0, QuerySortClauseV1_1_0 } from "../semantic-query/shared.js";
import { BookmarkBookmarkOptions, BookmarkVisualContainerDisplayMode, BookmarkVisualContainerDisplayState, BookmarkVisualContainerGroupState } from "./shared.js";

export type BookmarkExplorationStateV1_1_0 = {
  readonly version: string;
  readonly activeSection: string;
  readonly filters?: BookmarkFiltersStateV1_1_0;
  readonly sections: {} & {
    readonly [key: string]: BookmarkSectionStateV1_1_0;
  };
  readonly objects?: BookmarkDataViewObjectDefinitionUpdatesV1_1_0;
  readonly dataSourceVariables?: string;
};

export const BookmarkExplorationStateV1_1_0: Schema.Codec<BookmarkExplorationStateV1_1_0> =
  closed({
    version: Schema.String,
    activeSection: Schema.String,
    filters: Schema.optionalKey(
      Schema.suspend(() => BookmarkFiltersStateV1_1_0),
    ),
    sections: Schema.Record(
      Schema.String,
      Schema.suspend(() => BookmarkSectionStateV1_1_0),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV1_1_0),
    ),
    dataSourceVariables: Schema.optionalKey(Schema.String),
  });

export type BookmarkFiltersStateV1_1_0 = {
  readonly byName?: {} & {
    readonly [key: string]: BookmarkFilterContainerStateV1_1_0;
  };
  readonly byExpr?: ReadonlyArray<BookmarkFilterContainerStateV1_1_0>;
  readonly byType?: ReadonlyArray<BookmarkFilterContainerStateV1_1_0>;
  readonly byTransientState?: ReadonlyArray<BookmarkFilterContainerStateV1_1_0>;
};

export const BookmarkFiltersStateV1_1_0: Schema.Codec<BookmarkFiltersStateV1_1_0> =
  closed({
    byName: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => BookmarkFilterContainerStateV1_1_0),
      ),
    ),
    byExpr: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_1_0)),
    ),
    byType: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_1_0)),
    ),
    byTransientState: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_1_0)),
    ),
  });

export type BookmarkFilterContainerStateV1_1_0 = {
  readonly name: string;
  readonly type?: string;
  readonly filter?: FilterDefinitionV1_1_0;
  readonly expression?: QueryExpressionContainerV1_1_0;
  readonly restatement?: string;
  readonly howCreated?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  readonly precedence?: 0;
  readonly isTransient?: boolean;
  readonly cachedDisplayNames?: ReadonlyArray<Schema.Json>;
  readonly filterExpressionMetadata?: Schema.Json;
};

export const BookmarkFilterContainerStateV1_1_0: Schema.Codec<BookmarkFilterContainerStateV1_1_0> =
  closed({
    name: Schema.String,
    type: Schema.optionalKey(Schema.String),
    filter: Schema.optionalKey(
      Schema.suspend(
        () => FilterDefinitionV1_1_0,
      ),
    ),
    expression: Schema.optionalKey(
      Schema.suspend(
        () => QueryExpressionContainerV1_1_0,
      ),
    ),
    restatement: Schema.optionalKey(Schema.String),
    howCreated: Schema.optionalKey(
      Schema.Union([
        Schema.Literal(0),
        Schema.Literal(1),
        Schema.Literal(2),
        Schema.Literal(3),
        Schema.Literal(4),
        Schema.Literal(5),
        Schema.Literal(6),
        Schema.Literal(7),
      ]),
    ),
    precedence: Schema.optionalKey(Schema.Literal(0)),
    isTransient: Schema.optionalKey(Schema.Boolean),
    cachedDisplayNames: Schema.optionalKey(Schema.Array(Schema.Json)),
    filterExpressionMetadata: Schema.optionalKey(Schema.Json),
  });

export type BookmarkSectionStateV1_1_0 = {
  readonly filters?: BookmarkFiltersStateV1_1_0;
  readonly visualContainers: {} & {
    readonly [key: string]: BookmarkVisualContainerStateV1_1_0;
  };
  readonly visualContainerGroups?: {} & {
    readonly [key: string]: BookmarkVisualContainerGroupState;
  };
};

export const BookmarkSectionStateV1_1_0: Schema.Codec<BookmarkSectionStateV1_1_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.suspend(() => BookmarkFiltersStateV1_1_0),
    ),
    visualContainers: Schema.Record(
      Schema.String,
      Schema.suspend(() => BookmarkVisualContainerStateV1_1_0),
    ),
    visualContainerGroups: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => BookmarkVisualContainerGroupState),
      ),
    ),
  });

export type BookmarkVisualContainerStateV1_1_0 = {
  readonly filters?: BookmarkFiltersStateV1_1_0;
  readonly singleVisual?: BookmarkSingleVisualConfigStateV1_1_0;
  readonly highlight?: BookmarkHighlightStateV1_1_0;
};

export const BookmarkVisualContainerStateV1_1_0: Schema.Codec<BookmarkVisualContainerStateV1_1_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.suspend(() => BookmarkFiltersStateV1_1_0),
    ),
    singleVisual: Schema.optionalKey(
      Schema.suspend(() => BookmarkSingleVisualConfigStateV1_1_0),
    ),
    highlight: Schema.optionalKey(
      Schema.suspend(() => BookmarkHighlightStateV1_1_0),
    ),
  });

export type BookmarkSingleVisualConfigStateV1_1_0 = {
  readonly visualType?: string;
  readonly autoSelectVisualType?: boolean;
  readonly targetType?: string;
  readonly targetAutoSelectVisualType?: boolean;
  readonly objects?: BookmarkDataViewObjectDefinitionUpdatesV1_1_0;
  readonly orderBy?: ReadonlyArray<QuerySortClauseV1_1_0>;
  readonly activeProjections?: BookmarkProjectionStateV1_1_0;
  readonly projections?: BookmarkProjectionStateV1_1_0;
  readonly parameters?: BookmarkParameterStateByRoleV1_1_0;
  readonly display?: BookmarkVisualContainerDisplayState;
  readonly cachedFilterDisplayItems?: ReadonlyArray<Schema.Json>;
  readonly expansionStates?: ReadonlyArray<Schema.Json>;
  readonly filterExpressionMetadata?: Schema.Json;
  readonly isDrillDisabled?: boolean;
};

export const BookmarkSingleVisualConfigStateV1_1_0: Schema.Codec<BookmarkSingleVisualConfigStateV1_1_0> =
  closed({
    visualType: Schema.optionalKey(Schema.String),
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    targetType: Schema.optionalKey(Schema.String),
    targetAutoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    objects: Schema.optionalKey(
      Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV1_1_0),
    ),
    orderBy: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => QuerySortClauseV1_1_0,
        ),
      ),
    ),
    activeProjections: Schema.optionalKey(
      Schema.suspend(() => BookmarkProjectionStateV1_1_0),
    ),
    projections: Schema.optionalKey(
      Schema.suspend(() => BookmarkProjectionStateV1_1_0),
    ),
    parameters: Schema.optionalKey(
      Schema.suspend(() => BookmarkParameterStateByRoleV1_1_0),
    ),
    display: Schema.optionalKey(
      Schema.suspend(() => BookmarkVisualContainerDisplayState),
    ),
    cachedFilterDisplayItems: Schema.optionalKey(Schema.Array(Schema.Json)),
    expansionStates: Schema.optionalKey(Schema.Array(Schema.Json)),
    filterExpressionMetadata: Schema.optionalKey(Schema.Json),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });

export type BookmarkDataViewObjectDefinitionUpdatesV1_1_0 = {
  readonly merge?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0;
  readonly remove?: ReadonlyArray<BookmarkDataViewObjectPropertyIdWithSelectorV1_1_0>;
};

export const BookmarkDataViewObjectDefinitionUpdatesV1_1_0: Schema.Codec<BookmarkDataViewObjectDefinitionUpdatesV1_1_0> =
  closed({
    merge: Schema.optionalKey(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_1_0
            .DataViewObjectDefinitions,
      ),
    ),
    remove: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => BookmarkDataViewObjectPropertyIdWithSelectorV1_1_0,
        ),
      ),
    ),
  });

export type BookmarkDataViewObjectPropertyIdWithSelectorV1_1_0 = {
  readonly object: string;
  readonly property: string;
  readonly selector: FormattingObjectDefinitionsSelectorV1_1_0;
};

export const BookmarkDataViewObjectPropertyIdWithSelectorV1_1_0: Schema.Codec<BookmarkDataViewObjectPropertyIdWithSelectorV1_1_0> =
  closed({
    object: Schema.String,
    property: Schema.String,
    selector: Schema.suspend(
      () => FormattingObjectDefinitionsSelectorV1_1_0,
    ),
  });

export type BookmarkProjectionStateV1_1_0 = {} & {
  readonly [key: string]: ReadonlyArray<QueryExpressionContainerV1_1_0>;
};

export const BookmarkProjectionStateV1_1_0: Schema.Codec<BookmarkProjectionStateV1_1_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(
      Schema.suspend(
        () => QueryExpressionContainerV1_1_0,
      ),
    ),
  );

export type BookmarkParameterStateByRoleV1_1_0 = {} & {
  readonly [key: string]: ReadonlyArray<BookmarkParameterStateV1_1_0>;
};

export const BookmarkParameterStateByRoleV1_1_0: Schema.Codec<BookmarkParameterStateByRoleV1_1_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => BookmarkParameterStateV1_1_0)),
  );

export type BookmarkParameterStateV1_1_0 = {
  readonly expr: QueryExpressionContainerV1_1_0;
  readonly index: number;
  readonly length: number;
};

export const BookmarkParameterStateV1_1_0: Schema.Codec<BookmarkParameterStateV1_1_0> =
  closed({
    expr: Schema.suspend(
      () => QueryExpressionContainerV1_1_0,
    ),
    index: Schema.Finite,
    length: Schema.Finite,
  });

export type BookmarkHighlightStateV1_1_0 = {
  readonly selection:
    | BookmarkDecomposedSelectorsV1_1_0
    | ReadonlyArray<BookmarkSelectorsByColumnV1_1_0>;
  readonly filterExpressionMetadata?: Schema.Json;
};

export const BookmarkHighlightStateV1_1_0: Schema.Codec<BookmarkHighlightStateV1_1_0> =
  closed({
    selection: Schema.Union([
      Schema.suspend(() => BookmarkDecomposedSelectorsV1_1_0),
      Schema.Array(Schema.suspend(() => BookmarkSelectorsByColumnV1_1_0)),
    ]),
    filterExpressionMetadata: Schema.optionalKey(Schema.Json),
  });

export type BookmarkDecomposedSelectorsV1_1_0 = {
  readonly decomposedIdentities?: BookmarkDecomposedIdentitiesV1_1_0;
  readonly queryNameMap?: ReadonlyArray<{
    readonly [key: string]: ReadonlyArray<number>;
  }>;
  readonly queryNames?: ReadonlyArray<string>;
  readonly metadata?: ReadonlyArray<ReadonlyArray<string>>;
  readonly id?: ReadonlyArray<string>;
};

export const BookmarkDecomposedSelectorsV1_1_0: Schema.Codec<BookmarkDecomposedSelectorsV1_1_0> =
  closed({
    decomposedIdentities: Schema.optionalKey(
      Schema.suspend(() => BookmarkDecomposedIdentitiesV1_1_0),
    ),
    queryNameMap: Schema.optionalKey(
      Schema.Array(numericDictionary(Schema.Array(Schema.Finite))),
    ),
    queryNames: Schema.optionalKey(Schema.Array(Schema.String)),
    metadata: Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))),
    id: Schema.optionalKey(Schema.Array(Schema.String)),
  });

export type BookmarkDecomposedIdentitiesV1_1_0 = {
  readonly values: ReadonlyArray<
    ReadonlyArray<{
      readonly [
        key: string
      ]: ReadonlyArray<QueryExpressionContainerV1_1_0>;
    }>
  >;
  readonly columns: ReadonlyArray<BookmarkDecomposedTreeQueryExpressionContainerV1_1_0>;
};

export const BookmarkDecomposedIdentitiesV1_1_0: Schema.Codec<BookmarkDecomposedIdentitiesV1_1_0> =
  closed({
    values: Schema.Array(
      Schema.Array(
        numericDictionary(
          Schema.Array(
            Schema.suspend(
              () =>
                QueryExpressionContainerV1_1_0,
            ),
          ),
        ),
      ),
    ),
    columns: Schema.Array(
      Schema.suspend(
        () => BookmarkDecomposedTreeQueryExpressionContainerV1_1_0,
      ),
    ),
  });

export type BookmarkDecomposedTreeQueryExpressionContainerV1_1_0 = {
  readonly left?: BookmarkDecomposedTreeQueryExpressionContainerV1_1_0;
  readonly right?: BookmarkDecomposedTreeQueryExpressionContainerV1_1_0;
  readonly value?: QueryExpressionContainerV1_1_0;
};

export const BookmarkDecomposedTreeQueryExpressionContainerV1_1_0: Schema.Codec<BookmarkDecomposedTreeQueryExpressionContainerV1_1_0> =
  closed({
    left: Schema.optionalKey(
      Schema.suspend(
        () => BookmarkDecomposedTreeQueryExpressionContainerV1_1_0,
      ),
    ),
    right: Schema.optionalKey(
      Schema.suspend(
        () => BookmarkDecomposedTreeQueryExpressionContainerV1_1_0,
      ),
    ),
    value: Schema.optionalKey(
      Schema.suspend(
        () => QueryExpressionContainerV1_1_0,
      ),
    ),
  });

export type BookmarkSelectorsByColumnV1_1_0 = {
  readonly dataMap?: BookmarkSelectorsForColumnV1_1_0;
  readonly metadata?: ReadonlyArray<string>;
  readonly id?: string;
};

export const BookmarkSelectorsByColumnV1_1_0: Schema.Codec<BookmarkSelectorsByColumnV1_1_0> =
  closed({
    dataMap: Schema.optionalKey(
      Schema.suspend(() => BookmarkSelectorsForColumnV1_1_0),
    ),
    metadata: Schema.optionalKey(Schema.Array(Schema.String)),
    id: Schema.optionalKey(Schema.String),
  });

export type BookmarkSelectorsForColumnV1_1_0 = {} & {
  readonly [
    key: string
  ]: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_1_0>;
};

export const BookmarkSelectorsForColumnV1_1_0: Schema.Codec<BookmarkSelectorsForColumnV1_1_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_1_0
            .DataRepetitionSelector,
      ),
    ),
  );

export const BookmarkDefinitionsV1_1_0 = {
  BookmarkOptions: BookmarkBookmarkOptions,
  ExplorationState: BookmarkExplorationStateV1_1_0,
  FiltersState: BookmarkFiltersStateV1_1_0,
  FilterContainerState: BookmarkFilterContainerStateV1_1_0,
  SectionState: BookmarkSectionStateV1_1_0,
  VisualContainerState: BookmarkVisualContainerStateV1_1_0,
  SingleVisualConfigState: BookmarkSingleVisualConfigStateV1_1_0,
  DataViewObjectDefinitionUpdates:
    BookmarkDataViewObjectDefinitionUpdatesV1_1_0,
  DataViewObjectPropertyIdWithSelector:
    BookmarkDataViewObjectPropertyIdWithSelectorV1_1_0,
  ProjectionState: BookmarkProjectionStateV1_1_0,
  ParameterStateByRole: BookmarkParameterStateByRoleV1_1_0,
  ParameterState: BookmarkParameterStateV1_1_0,
  VisualContainerDisplayState: BookmarkVisualContainerDisplayState,
  VisualContainerDisplayMode: BookmarkVisualContainerDisplayMode,
  HighlightState: BookmarkHighlightStateV1_1_0,
  DecomposedSelectors: BookmarkDecomposedSelectorsV1_1_0,
  DecomposedIdentities: BookmarkDecomposedIdentitiesV1_1_0,
  "DecomposedTree<QueryExpressionContainer>":
    BookmarkDecomposedTreeQueryExpressionContainerV1_1_0,
  SelectorsByColumn: BookmarkSelectorsByColumnV1_1_0,
  SelectorsForColumn: BookmarkSelectorsForColumnV1_1_0,
  VisualContainerGroupState: BookmarkVisualContainerGroupState,
} as const;

export type BookmarkV1_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.1.0/schema.json";
  readonly displayName: string;
  readonly name: string;
  readonly options?: BookmarkBookmarkOptions;
  readonly explorationState: BookmarkExplorationStateV1_1_0;
};

export const BookmarkV1_1_0: Schema.Codec<BookmarkV1_1_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.1.0/schema.json",
  ),
  displayName: Schema.String,
  name: Schema.String,
  options: Schema.optionalKey(
    Schema.suspend(() => BookmarkBookmarkOptions),
  ),
  explorationState: Schema.suspend(() => BookmarkExplorationStateV1_1_0),
});
