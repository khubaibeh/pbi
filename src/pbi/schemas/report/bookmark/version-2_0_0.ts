import { Schema } from "effect";
import { closed } from "../shared.js";
import { FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0, FormattingObjectDefinitionsDefinitionsV1_4_0, FormattingObjectDefinitionsSelectorV1_4_0 } from "../formatting-object-definitions/shared.js";
import { QuerySortClauseV1_3_0 } from "../semantic-query/shared.js";
import { BookmarkBookmarkOptions, BookmarkDecomposedFilterExpressionMetadataV1_4_0, BookmarkDecomposedIdentitiesV1_4_0, BookmarkDecomposedSelectorsV1_4_0, BookmarkDecomposedTreeQueryExpressionContainerV1_4_0, BookmarkFilterContainerStateV1_4_0, BookmarkFilterExpressionMetadataV1_4_0, BookmarkFilterLabelIdPairV1_4_0, BookmarkFiltersStateV1_4_0, BookmarkHighlightStateV1_4_0, BookmarkIdentityValueMapV1_4_0, BookmarkParameterStateByRoleV1_4_0, BookmarkParameterStateV1_4_0, BookmarkProjectionStateV1_4_0, BookmarkSelectorsByColumnV1_4_0, BookmarkSelectorsForColumnV1_4_0, BookmarkVisualContainerDisplayMode, BookmarkVisualContainerDisplayState, BookmarkVisualContainerGroupState } from "./shared.js";

export type BookmarkExplorationStateV2_0_0 = {
  readonly version: string;
  readonly activeSection: string;
  readonly filters?: BookmarkFiltersStateV1_4_0;
  readonly sections: {} & {
    readonly [key: string]: BookmarkSectionStateV2_0_0;
  };
  readonly objects?: BookmarkDataViewObjectDefinitionUpdatesV2_0_0;
  readonly dataSourceVariables?: string;
};

export const BookmarkExplorationStateV2_0_0: Schema.Codec<BookmarkExplorationStateV2_0_0> =
  closed({
    version: Schema.String,
    activeSection: Schema.String,
    filters: Schema.optionalKey(
      Schema.suspend(() => BookmarkFiltersStateV1_4_0),
    ),
    sections: Schema.Record(
      Schema.String,
      Schema.suspend(() => BookmarkSectionStateV2_0_0),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV2_0_0),
    ),
    dataSourceVariables: Schema.optionalKey(Schema.String),
  });

export type BookmarkSectionStateV2_0_0 = {
  readonly filters?: BookmarkFiltersStateV1_4_0;
  readonly visualContainers: {} & {
    readonly [key: string]: BookmarkVisualContainerStateV2_0_0;
  };
  readonly visualContainerGroups?: {} & {
    readonly [key: string]: BookmarkVisualContainerGroupState;
  };
};

export const BookmarkSectionStateV2_0_0: Schema.Codec<BookmarkSectionStateV2_0_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.suspend(() => BookmarkFiltersStateV1_4_0),
    ),
    visualContainers: Schema.Record(
      Schema.String,
      Schema.suspend(() => BookmarkVisualContainerStateV2_0_0),
    ),
    visualContainerGroups: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => BookmarkVisualContainerGroupState),
      ),
    ),
  });

export type BookmarkVisualContainerStateV2_0_0 = {
  readonly filters?: BookmarkFiltersStateV1_4_0;
  readonly singleVisual?: BookmarkSingleVisualConfigStateV2_0_0;
  readonly highlight?: BookmarkHighlightStateV1_4_0;
};

export const BookmarkVisualContainerStateV2_0_0: Schema.Codec<BookmarkVisualContainerStateV2_0_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.suspend(() => BookmarkFiltersStateV1_4_0),
    ),
    singleVisual: Schema.optionalKey(
      Schema.suspend(() => BookmarkSingleVisualConfigStateV2_0_0),
    ),
    highlight: Schema.optionalKey(
      Schema.suspend(() => BookmarkHighlightStateV1_4_0),
    ),
  });

export type BookmarkSingleVisualConfigStateV2_0_0 = {
  readonly visualType?: string;
  readonly autoSelectVisualType?: boolean;
  readonly targetType?: string;
  readonly targetAutoSelectVisualType?: boolean;
  readonly objects?: BookmarkDataViewObjectDefinitionUpdatesV2_0_0;
  readonly orderBy?: ReadonlyArray<QuerySortClauseV1_3_0>;
  readonly activeProjections?: BookmarkProjectionStateV1_4_0;
  readonly projections?: BookmarkProjectionStateV1_4_0;
  readonly parameters?: BookmarkParameterStateByRoleV1_4_0;
  readonly display?: BookmarkVisualContainerDisplayState;
  readonly cachedFilterDisplayItems?: ReadonlyArray<BookmarkFilterLabelIdPairV1_4_0>;
  readonly expansionStates?: ReadonlyArray<Schema.Json>;
  readonly filterExpressionMetadata?:
    | BookmarkFilterExpressionMetadataV1_4_0
    | BookmarkDecomposedFilterExpressionMetadataV1_4_0;
  readonly isDrillDisabled?: boolean;
};

export const BookmarkSingleVisualConfigStateV2_0_0: Schema.Codec<BookmarkSingleVisualConfigStateV2_0_0> =
  closed({
    visualType: Schema.optionalKey(Schema.String),
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    targetType: Schema.optionalKey(Schema.String),
    targetAutoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    objects: Schema.optionalKey(
      Schema.suspend(() => BookmarkDataViewObjectDefinitionUpdatesV2_0_0),
    ),
    orderBy: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => QuerySortClauseV1_3_0,
        ),
      ),
    ),
    activeProjections: Schema.optionalKey(
      Schema.suspend(() => BookmarkProjectionStateV1_4_0),
    ),
    projections: Schema.optionalKey(
      Schema.suspend(() => BookmarkProjectionStateV1_4_0),
    ),
    parameters: Schema.optionalKey(
      Schema.suspend(() => BookmarkParameterStateByRoleV1_4_0),
    ),
    display: Schema.optionalKey(
      Schema.suspend(() => BookmarkVisualContainerDisplayState),
    ),
    cachedFilterDisplayItems: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => BookmarkFilterLabelIdPairV1_4_0)),
    ),
    expansionStates: Schema.optionalKey(Schema.Array(Schema.Json)),
    filterExpressionMetadata: Schema.optionalKey(
      Schema.Union([
        Schema.suspend(() => BookmarkFilterExpressionMetadataV1_4_0),
        Schema.suspend(() => BookmarkDecomposedFilterExpressionMetadataV1_4_0),
      ]),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });

export type BookmarkDataViewObjectDefinitionUpdatesV2_0_0 = {
  readonly merge?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0;
  readonly remove?: ReadonlyArray<BookmarkDataViewObjectPropertyIdWithSelectorV2_0_0>;
};

export const BookmarkDataViewObjectDefinitionUpdatesV2_0_0: Schema.Codec<BookmarkDataViewObjectDefinitionUpdatesV2_0_0> =
  closed({
    merge: Schema.optionalKey(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_4_0
            .DataViewObjectDefinitions,
      ),
    ),
    remove: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => BookmarkDataViewObjectPropertyIdWithSelectorV2_0_0,
        ),
      ),
    ),
  });

export type BookmarkDataViewObjectPropertyIdWithSelectorV2_0_0 = {
  readonly object: string;
  readonly property: string;
  readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
};

export const BookmarkDataViewObjectPropertyIdWithSelectorV2_0_0: Schema.Codec<BookmarkDataViewObjectPropertyIdWithSelectorV2_0_0> =
  closed({
    object: Schema.String,
    property: Schema.String,
    selector: Schema.optionalKey(
      Schema.suspend(
        () => FormattingObjectDefinitionsSelectorV1_4_0,
      ),
    ),
  });

export const BookmarkDefinitionsV2_0_0 = {
  BookmarkOptions: BookmarkBookmarkOptions,
  ExplorationState: BookmarkExplorationStateV2_0_0,
  FiltersState: BookmarkFiltersStateV1_4_0,
  FilterContainerState: BookmarkFilterContainerStateV1_4_0,
  FilterLabelIdPair: BookmarkFilterLabelIdPairV1_4_0,
  FilterExpressionMetadata: BookmarkFilterExpressionMetadataV1_4_0,
  IdentityValueMap: BookmarkIdentityValueMapV1_4_0,
  DecomposedFilterExpressionMetadata:
    BookmarkDecomposedFilterExpressionMetadataV1_4_0,
  DecomposedIdentities: BookmarkDecomposedIdentitiesV1_4_0,
  "DecomposedTree<QueryExpressionContainer>":
    BookmarkDecomposedTreeQueryExpressionContainerV1_4_0,
  SectionState: BookmarkSectionStateV2_0_0,
  VisualContainerState: BookmarkVisualContainerStateV2_0_0,
  SingleVisualConfigState: BookmarkSingleVisualConfigStateV2_0_0,
  DataViewObjectDefinitionUpdates:
    BookmarkDataViewObjectDefinitionUpdatesV2_0_0,
  DataViewObjectPropertyIdWithSelector:
    BookmarkDataViewObjectPropertyIdWithSelectorV2_0_0,
  ProjectionState: BookmarkProjectionStateV1_4_0,
  ParameterStateByRole: BookmarkParameterStateByRoleV1_4_0,
  ParameterState: BookmarkParameterStateV1_4_0,
  VisualContainerDisplayState: BookmarkVisualContainerDisplayState,
  VisualContainerDisplayMode: BookmarkVisualContainerDisplayMode,
  HighlightState: BookmarkHighlightStateV1_4_0,
  DecomposedSelectors: BookmarkDecomposedSelectorsV1_4_0,
  SelectorsByColumn: BookmarkSelectorsByColumnV1_4_0,
  SelectorsForColumn: BookmarkSelectorsForColumnV1_4_0,
  VisualContainerGroupState: BookmarkVisualContainerGroupState,
} as const;

export type BookmarkV2_0_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.0.0/schema.json";
  readonly displayName: string;
  readonly name: string;
  readonly options?: BookmarkBookmarkOptions;
  readonly explorationState: BookmarkExplorationStateV2_0_0;
};

export const BookmarkV2_0_0: Schema.Codec<BookmarkV2_0_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.0.0/schema.json",
  ),
  displayName: Schema.String,
  name: Schema.String,
  options: Schema.optionalKey(
    Schema.suspend(() => BookmarkBookmarkOptions),
  ),
  explorationState: Schema.suspend(() => BookmarkExplorationStateV2_0_0),
});
