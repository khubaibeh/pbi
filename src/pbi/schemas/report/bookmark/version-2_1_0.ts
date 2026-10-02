import { Schema } from "effect";
import { closed, numericDictionary } from "../shared.js";
import { FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0, FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0, FormattingObjectDefinitionsDefinitionsV1_5_0, FormattingObjectDefinitionsSelectorV1_5_0 } from "../formatting-object-definitions/shared.js";
import { FilterDefinitionV1_4_0, QueryExpressionContainerV1_4_0, QuerySortClauseV1_4_0 } from "../semantic-query/shared.js";
import { BookmarkBookmarkOptions, BookmarkVisualContainerDisplayMode, BookmarkVisualContainerDisplayState, BookmarkVisualContainerGroupState } from "./shared.js";

export type BookmarkExplorationStateV2_1_0 = {
  readonly version: string;
  readonly activeSection: string;
  readonly filters?: BookmarkFiltersStateV2_1_0;
  readonly sections: {} & {
    readonly [key: string]: BookmarkSectionStateV2_1_0;
  };
  readonly objects?: BookmarkDataViewObjectDefinitionUpdatesV2_1_0;
  readonly dataSourceVariables?: string;
};

export const BookmarkExplorationStateV2_1_0: Schema.Codec<BookmarkExplorationStateV2_1_0> =
  closed({
    version: Schema.String,
    activeSection: Schema.String,
    filters: Schema.optionalKey(
      Schema.suspend(() => BookmarkFiltersStateV2_1_0),
    ),
    sections: Schema.Record(
      Schema.String,
      Schema.suspend(() => BookmarkSectionStateV2_1_0),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV2_1_0),
    ),
    dataSourceVariables: Schema.optionalKey(Schema.String),
  });

export type BookmarkFiltersStateV2_1_0 = {
  readonly byName?: {} & {
    readonly [key: string]: BookmarkFilterContainerStateV2_1_0;
  };
  readonly byExpr?: ReadonlyArray<BookmarkFilterContainerStateV2_1_0>;
  readonly byType?: ReadonlyArray<BookmarkFilterContainerStateV2_1_0>;
  readonly byTransientState?: ReadonlyArray<BookmarkFilterContainerStateV2_1_0>;
};

export const BookmarkFiltersStateV2_1_0: Schema.Codec<BookmarkFiltersStateV2_1_0> =
  closed({
    byName: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => BookmarkFilterContainerStateV2_1_0),
      ),
    ),
    byExpr: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV2_1_0)),
    ),
    byType: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV2_1_0)),
    ),
    byTransientState: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV2_1_0)),
    ),
  });

export type BookmarkFilterContainerStateV2_1_0 = {
  readonly name: string;
  readonly type?: string;
  readonly filter?: FilterDefinitionV1_4_0;
  readonly expression?: QueryExpressionContainerV1_4_0;
  readonly restatement?: string;
  readonly howCreated?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  readonly precedence?: 0;
  readonly isTransient?: boolean;
  readonly cachedDisplayNames?: ReadonlyArray<BookmarkFilterLabelIdPairV2_1_0>;
  readonly filterExpressionMetadata?:
    | BookmarkFilterExpressionMetadataV2_1_0
    | BookmarkDecomposedFilterExpressionMetadataV2_1_0;
};

export const BookmarkFilterContainerStateV2_1_0: Schema.Codec<BookmarkFilterContainerStateV2_1_0> =
  closed({
    name: Schema.String,
    type: Schema.optionalKey(Schema.String),
    filter: Schema.optionalKey(
      Schema.suspend(
        () => FilterDefinitionV1_4_0,
      ),
    ),
    expression: Schema.optionalKey(
      Schema.suspend(
        () => QueryExpressionContainerV1_4_0,
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
    cachedDisplayNames: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => BookmarkFilterLabelIdPairV2_1_0)),
    ),
    filterExpressionMetadata: Schema.optionalKey(
      Schema.Union([
        Schema.suspend(() => BookmarkFilterExpressionMetadataV2_1_0),
        Schema.suspend(() => BookmarkDecomposedFilterExpressionMetadataV2_1_0),
      ]),
    ),
  });

export type BookmarkFilterLabelIdPairV2_1_0 = {
  readonly id: FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0;
  readonly displayName: string;
};

export const BookmarkFilterLabelIdPairV2_1_0: Schema.Codec<BookmarkFilterLabelIdPairV2_1_0> =
  closed({
    id: Schema.suspend(
      () =>
        FormattingObjectDefinitionsDefinitionsV1_5_0
          .DataRepetitionSelector,
    ),
    displayName: Schema.String,
  });

export type BookmarkFilterExpressionMetadataV2_1_0 = {
  readonly expressions: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly cachedValueItems?: ReadonlyArray<BookmarkIdentityValueMapV2_1_0>;
  readonly jsonFilter?: {
    readonly filterType: Schema.Json;
  };
};

export const BookmarkFilterExpressionMetadataV2_1_0: Schema.Codec<BookmarkFilterExpressionMetadataV2_1_0> =
  closed({
    expressions: Schema.Array(
      Schema.suspend(
        () => QueryExpressionContainerV1_4_0,
      ),
    ),
    cachedValueItems: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => BookmarkIdentityValueMapV2_1_0)),
    ),
    jsonFilter: Schema.optionalKey(closed({ filterType: Schema.Json })),
  });

export type BookmarkIdentityValueMapV2_1_0 = {
  readonly identities: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0>;
  readonly valueMap: {
    readonly [key: string]: string;
  };
};

export const BookmarkIdentityValueMapV2_1_0: Schema.Codec<BookmarkIdentityValueMapV2_1_0> =
  closed({
    identities: Schema.Array(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_5_0
            .DataRepetitionSelector,
      ),
    ),
    valueMap: numericDictionary(Schema.String),
  });

export type BookmarkDecomposedFilterExpressionMetadataV2_1_0 = {
  readonly decomposedIdentities?: BookmarkDecomposedIdentitiesV2_1_0;
  readonly expressions: ReadonlyArray<Schema.Json>;
  readonly valueMap?: ReadonlyArray<{
    readonly [key: string]: string;
  }>;
  readonly jsonFilter?: {
    readonly filterType: Schema.Json;
  };
};

export const BookmarkDecomposedFilterExpressionMetadataV2_1_0: Schema.Codec<BookmarkDecomposedFilterExpressionMetadataV2_1_0> =
  closed({
    decomposedIdentities: Schema.optionalKey(
      Schema.suspend(() => BookmarkDecomposedIdentitiesV2_1_0),
    ),
    expressions: Schema.Array(Schema.Json),
    valueMap: Schema.optionalKey(
      Schema.Array(numericDictionary(Schema.String)),
    ),
    jsonFilter: Schema.optionalKey(closed({ filterType: Schema.Json })),
  });

export type BookmarkDecomposedIdentitiesV2_1_0 = {
  readonly values: ReadonlyArray<
    ReadonlyArray<{
      readonly [
        key: string
      ]: ReadonlyArray<QueryExpressionContainerV1_4_0>;
    }>
  >;
  readonly columns: ReadonlyArray<BookmarkDecomposedTreeQueryExpressionContainerV2_1_0>;
};

export const BookmarkDecomposedIdentitiesV2_1_0: Schema.Codec<BookmarkDecomposedIdentitiesV2_1_0> =
  closed({
    values: Schema.Array(
      Schema.Array(
        numericDictionary(
          Schema.Array(
            Schema.suspend(
              () =>
                QueryExpressionContainerV1_4_0,
            ),
          ),
        ),
      ),
    ),
    columns: Schema.Array(
      Schema.suspend(
        () => BookmarkDecomposedTreeQueryExpressionContainerV2_1_0,
      ),
    ),
  });

export type BookmarkDecomposedTreeQueryExpressionContainerV2_1_0 = {
  readonly left?: BookmarkDecomposedTreeQueryExpressionContainerV2_1_0;
  readonly right?: BookmarkDecomposedTreeQueryExpressionContainerV2_1_0;
  readonly value?: QueryExpressionContainerV1_4_0;
};

export const BookmarkDecomposedTreeQueryExpressionContainerV2_1_0: Schema.Codec<BookmarkDecomposedTreeQueryExpressionContainerV2_1_0> =
  closed({
    left: Schema.optionalKey(
      Schema.suspend(
        () => BookmarkDecomposedTreeQueryExpressionContainerV2_1_0,
      ),
    ),
    right: Schema.optionalKey(
      Schema.suspend(
        () => BookmarkDecomposedTreeQueryExpressionContainerV2_1_0,
      ),
    ),
    value: Schema.optionalKey(
      Schema.suspend(
        () => QueryExpressionContainerV1_4_0,
      ),
    ),
  });

export type BookmarkSectionStateV2_1_0 = {
  readonly filters?: BookmarkFiltersStateV2_1_0;
  readonly visualContainers: {} & {
    readonly [key: string]: BookmarkVisualContainerStateV2_1_0;
  };
  readonly visualContainerGroups?: {} & {
    readonly [key: string]: BookmarkVisualContainerGroupState;
  };
};

export const BookmarkSectionStateV2_1_0: Schema.Codec<BookmarkSectionStateV2_1_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.suspend(() => BookmarkFiltersStateV2_1_0),
    ),
    visualContainers: Schema.Record(
      Schema.String,
      Schema.suspend(() => BookmarkVisualContainerStateV2_1_0),
    ),
    visualContainerGroups: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => BookmarkVisualContainerGroupState),
      ),
    ),
  });

export type BookmarkVisualContainerStateV2_1_0 = {
  readonly filters?: BookmarkFiltersStateV2_1_0;
  readonly singleVisual?: BookmarkSingleVisualConfigStateV2_1_0;
  readonly highlight?: BookmarkHighlightStateV2_1_0;
};

export const BookmarkVisualContainerStateV2_1_0: Schema.Codec<BookmarkVisualContainerStateV2_1_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.suspend(() => BookmarkFiltersStateV2_1_0),
    ),
    singleVisual: Schema.optionalKey(
      Schema.suspend(() => BookmarkSingleVisualConfigStateV2_1_0),
    ),
    highlight: Schema.optionalKey(
      Schema.suspend(() => BookmarkHighlightStateV2_1_0),
    ),
  });

export type BookmarkSingleVisualConfigStateV2_1_0 = {
  readonly visualType?: string;
  readonly autoSelectVisualType?: boolean;
  readonly targetType?: string;
  readonly targetAutoSelectVisualType?: boolean;
  readonly objects?: BookmarkDataViewObjectDefinitionUpdatesV2_1_0;
  readonly orderBy?: ReadonlyArray<QuerySortClauseV1_4_0>;
  readonly activeProjections?: BookmarkProjectionStateV2_1_0;
  readonly projections?: BookmarkProjectionStateV2_1_0;
  readonly parameters?: BookmarkParameterStateByRoleV2_1_0;
  readonly display?: BookmarkVisualContainerDisplayState;
  readonly cachedFilterDisplayItems?: ReadonlyArray<BookmarkFilterLabelIdPairV2_1_0>;
  readonly expansionStates?: ReadonlyArray<Schema.Json>;
  readonly filterExpressionMetadata?:
    | BookmarkFilterExpressionMetadataV2_1_0
    | BookmarkDecomposedFilterExpressionMetadataV2_1_0;
  readonly isDrillDisabled?: boolean;
};

export const BookmarkSingleVisualConfigStateV2_1_0: Schema.Codec<BookmarkSingleVisualConfigStateV2_1_0> =
  closed({
    visualType: Schema.optionalKey(Schema.String),
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    targetType: Schema.optionalKey(Schema.String),
    targetAutoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    objects: Schema.optionalKey(
      Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV2_1_0),
    ),
    orderBy: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => QuerySortClauseV1_4_0,
        ),
      ),
    ),
    activeProjections: Schema.optionalKey(
      Schema.suspend(() => BookmarkProjectionStateV2_1_0),
    ),
    projections: Schema.optionalKey(
      Schema.suspend(() => BookmarkProjectionStateV2_1_0),
    ),
    parameters: Schema.optionalKey(
      Schema.suspend(() => BookmarkParameterStateByRoleV2_1_0),
    ),
    display: Schema.optionalKey(
      Schema.suspend(() => BookmarkVisualContainerDisplayState),
    ),
    cachedFilterDisplayItems: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => BookmarkFilterLabelIdPairV2_1_0)),
    ),
    expansionStates: Schema.optionalKey(Schema.Array(Schema.Json)),
    filterExpressionMetadata: Schema.optionalKey(
      Schema.Union([
        Schema.suspend(() => BookmarkFilterExpressionMetadataV2_1_0),
        Schema.suspend(() => BookmarkDecomposedFilterExpressionMetadataV2_1_0),
      ]),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });

export type BookmarkDataViewObjectDefinitionUpdatesV2_1_0 = {
  readonly merge?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0;
  readonly remove?: ReadonlyArray<BookmarkDataViewObjectPropertyIdWithSelectorV2_1_0>;
};

export const BookmarkDataViewObjectDefinitionUpdatesV2_1_0: Schema.Codec<BookmarkDataViewObjectDefinitionUpdatesV2_1_0> =
  closed({
    merge: Schema.optionalKey(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_5_0
            .DataViewObjectDefinitions,
      ),
    ),
    remove: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => BookmarkDataViewObjectPropertyIdWithSelectorV2_1_0,
        ),
      ),
    ),
  });

export type BookmarkDataViewObjectPropertyIdWithSelectorV2_1_0 = {
  readonly object: string;
  readonly property: string;
  readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
};

export const BookmarkDataViewObjectPropertyIdWithSelectorV2_1_0: Schema.Codec<BookmarkDataViewObjectPropertyIdWithSelectorV2_1_0> =
  closed({
    object: Schema.String,
    property: Schema.String,
    selector: Schema.optionalKey(
      Schema.suspend(
        () => FormattingObjectDefinitionsSelectorV1_5_0,
      ),
    ),
  });

export type BookmarkProjectionStateV2_1_0 = {} & {
  readonly [key: string]: ReadonlyArray<QueryExpressionContainerV1_4_0>;
};

export const BookmarkProjectionStateV2_1_0: Schema.Codec<BookmarkProjectionStateV2_1_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(
      Schema.suspend(
        () => QueryExpressionContainerV1_4_0,
      ),
    ),
  );

export type BookmarkParameterStateByRoleV2_1_0 = {} & {
  readonly [key: string]: ReadonlyArray<BookmarkParameterStateV2_1_0>;
};

export const BookmarkParameterStateByRoleV2_1_0: Schema.Codec<BookmarkParameterStateByRoleV2_1_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => BookmarkParameterStateV2_1_0)),
  );

export type BookmarkParameterStateV2_1_0 = {
  readonly expr: QueryExpressionContainerV1_4_0;
  readonly index: number;
  readonly length: number;
  readonly sortDirection?: 1 | 2;
};

export const BookmarkParameterStateV2_1_0: Schema.Codec<BookmarkParameterStateV2_1_0> =
  closed({
    expr: Schema.suspend(
      () => QueryExpressionContainerV1_4_0,
    ),
    index: Schema.Finite,
    length: Schema.Finite,
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal(1), Schema.Literal(2)]),
    ),
  });

export type BookmarkHighlightStateV2_1_0 = {
  readonly selection:
    | BookmarkDecomposedSelectorsV2_1_0
    | ReadonlyArray<BookmarkSelectorsByColumnV2_1_0>;
  readonly filterExpressionMetadata?:
    | BookmarkFilterExpressionMetadataV2_1_0
    | BookmarkDecomposedFilterExpressionMetadataV2_1_0;
};

export const BookmarkHighlightStateV2_1_0: Schema.Codec<BookmarkHighlightStateV2_1_0> =
  closed({
    selection: Schema.Union([
      Schema.suspend(() => BookmarkDecomposedSelectorsV2_1_0),
      Schema.Array(Schema.suspend(() => BookmarkSelectorsByColumnV2_1_0)),
    ]),
    filterExpressionMetadata: Schema.optionalKey(
      Schema.Union([
        Schema.suspend(() => BookmarkFilterExpressionMetadataV2_1_0),
        Schema.suspend(() => BookmarkDecomposedFilterExpressionMetadataV2_1_0),
      ]),
    ),
  });

export type BookmarkDecomposedSelectorsV2_1_0 = {
  readonly decomposedIdentities?: BookmarkDecomposedIdentitiesV2_1_0;
  readonly queryNameMap?: ReadonlyArray<{
    readonly [key: string]: ReadonlyArray<number>;
  }>;
  readonly queryNames?: ReadonlyArray<string>;
  readonly metadata?: ReadonlyArray<ReadonlyArray<string>>;
  readonly id?: ReadonlyArray<string>;
};

export const BookmarkDecomposedSelectorsV2_1_0: Schema.Codec<BookmarkDecomposedSelectorsV2_1_0> =
  closed({
    decomposedIdentities: Schema.optionalKey(
      Schema.suspend(() => BookmarkDecomposedIdentitiesV2_1_0),
    ),
    queryNameMap: Schema.optionalKey(
      Schema.Array(numericDictionary(Schema.Array(Schema.Finite))),
    ),
    queryNames: Schema.optionalKey(Schema.Array(Schema.String)),
    metadata: Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))),
    id: Schema.optionalKey(Schema.Array(Schema.String)),
  });

export type BookmarkSelectorsByColumnV2_1_0 = {
  readonly dataMap?: BookmarkSelectorsForColumnV2_1_0;
  readonly metadata?: ReadonlyArray<string>;
  readonly id?: string;
};

export const BookmarkSelectorsByColumnV2_1_0: Schema.Codec<BookmarkSelectorsByColumnV2_1_0> =
  closed({
    dataMap: Schema.optionalKey(
      Schema.suspend(() => BookmarkSelectorsForColumnV2_1_0),
    ),
    metadata: Schema.optionalKey(Schema.Array(Schema.String)),
    id: Schema.optionalKey(Schema.String),
  });

export type BookmarkSelectorsForColumnV2_1_0 = {} & {
  readonly [
    key: string
  ]: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_5_0>;
};

export const BookmarkSelectorsForColumnV2_1_0: Schema.Codec<BookmarkSelectorsForColumnV2_1_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_5_0
            .DataRepetitionSelector,
      ),
    ),
  );

export const BookmarkDefinitionsV2_1_0 = {
  BookmarkOptions: BookmarkBookmarkOptions,
  ExplorationState: BookmarkExplorationStateV2_1_0,
  FiltersState: BookmarkFiltersStateV2_1_0,
  FilterContainerState: BookmarkFilterContainerStateV2_1_0,
  FilterLabelIdPair: BookmarkFilterLabelIdPairV2_1_0,
  FilterExpressionMetadata: BookmarkFilterExpressionMetadataV2_1_0,
  IdentityValueMap: BookmarkIdentityValueMapV2_1_0,
  DecomposedFilterExpressionMetadata:
    BookmarkDecomposedFilterExpressionMetadataV2_1_0,
  DecomposedIdentities: BookmarkDecomposedIdentitiesV2_1_0,
  "DecomposedTree<QueryExpressionContainer>":
    BookmarkDecomposedTreeQueryExpressionContainerV2_1_0,
  SectionState: BookmarkSectionStateV2_1_0,
  VisualContainerState: BookmarkVisualContainerStateV2_1_0,
  SingleVisualConfigState: BookmarkSingleVisualConfigStateV2_1_0,
  DataViewObjectDefinitionUpdates:
    BookmarkDataViewObjectDefinitionUpdatesV2_1_0,
  DataViewObjectPropertyIdWithSelector:
    BookmarkDataViewObjectPropertyIdWithSelectorV2_1_0,
  ProjectionState: BookmarkProjectionStateV2_1_0,
  ParameterStateByRole: BookmarkParameterStateByRoleV2_1_0,
  ParameterState: BookmarkParameterStateV2_1_0,
  VisualContainerDisplayState: BookmarkVisualContainerDisplayState,
  VisualContainerDisplayMode: BookmarkVisualContainerDisplayMode,
  HighlightState: BookmarkHighlightStateV2_1_0,
  DecomposedSelectors: BookmarkDecomposedSelectorsV2_1_0,
  SelectorsByColumn: BookmarkSelectorsByColumnV2_1_0,
  SelectorsForColumn: BookmarkSelectorsForColumnV2_1_0,
  VisualContainerGroupState: BookmarkVisualContainerGroupState,
} as const;

export type BookmarkV2_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.1.0/schema.json";
  readonly displayName: string;
  readonly name: string;
  readonly options?: BookmarkBookmarkOptions;
  readonly explorationState: BookmarkExplorationStateV2_1_0;
};

export const BookmarkV2_1_0: Schema.Codec<BookmarkV2_1_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.1.0/schema.json",
  ),
  displayName: Schema.String,
  name: Schema.String,
  options: Schema.optionalKey(
    Schema.suspend(() => BookmarkBookmarkOptions),
  ),
  explorationState: Schema.suspend(() => BookmarkExplorationStateV2_1_0),
});
