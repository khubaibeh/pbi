import { Schema } from "effect";

import {
  BookmarkOptions,
  numericDictionary,
  VisualContainerDisplayMode,
  VisualContainerDisplayState,
  VisualContainerGroupState,
} from "./shared.js";
import {
  DataRepetitionSelectorV1_5_0,
  DataViewObjectDefinitionsV1_5_0,
  SelectorV1_5_0,
} from "../formatting-object-definitions/version-1.5.0.js";
import {
  FilterDefinitionV1_4_0,
  QueryExpressionContainerV1_4_0,
  QuerySortClauseV1_4_0,
} from "../semantic-query/version-1.4.0.js";
import { closed } from "../shared.js";

export type ExplorationStateV2_1_0 = {
  readonly version: string;
  readonly activeSection: string;
  readonly filters?: FiltersStateV2_1_0;
  readonly sections: {} & {
    readonly [key: string]: SectionStateV2_1_0;
  };
  readonly objects?: DataViewObjectDefinitionUpdatesV2_1_0;
  readonly dataSourceVariables?: string;
};

export const ExplorationStateV2_1_0: Schema.Codec<ExplorationStateV2_1_0> =
  closed({
    version: Schema.String,
    activeSection: Schema.String,
    filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV2_1_0)),
    sections: Schema.Record(
      Schema.String,
      Schema.suspend(() => SectionStateV2_1_0),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionUpdatesV2_1_0),
    ),
    dataSourceVariables: Schema.optionalKey(Schema.String),
  });

export type FiltersStateV2_1_0 = {
  readonly byName?: {} & {
    readonly [key: string]: FilterContainerStateV2_1_0;
  };
  readonly byExpr?: ReadonlyArray<FilterContainerStateV2_1_0>;
  readonly byType?: ReadonlyArray<FilterContainerStateV2_1_0>;
  readonly byTransientState?: ReadonlyArray<FilterContainerStateV2_1_0>;
};

export const FiltersStateV2_1_0: Schema.Codec<FiltersStateV2_1_0> = closed({
  byName: Schema.optionalKey(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => FilterContainerStateV2_1_0),
    ),
  ),
  byExpr: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => FilterContainerStateV2_1_0)),
  ),
  byType: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => FilterContainerStateV2_1_0)),
  ),
  byTransientState: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => FilterContainerStateV2_1_0)),
  ),
});

export type FilterContainerStateV2_1_0 = {
  readonly name: string;
  readonly type?: string;
  readonly filter?: FilterDefinitionV1_4_0;
  readonly expression?: QueryExpressionContainerV1_4_0;
  readonly restatement?: string;
  readonly howCreated?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  readonly precedence?: 0;
  readonly isTransient?: boolean;
  readonly cachedDisplayNames?: ReadonlyArray<FilterLabelIdPairV2_1_0>;
  readonly filterExpressionMetadata?:
    FilterExpressionMetadataV2_1_0 | DecomposedFilterExpressionMetadataV2_1_0;
};

export const FilterContainerStateV2_1_0: Schema.Codec<FilterContainerStateV2_1_0> =
  closed({
    name: Schema.String,
    type: Schema.optionalKey(Schema.String),
    filter: Schema.optionalKey(Schema.suspend(() => FilterDefinitionV1_4_0)),
    expression: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_4_0),
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
      Schema.Array(Schema.suspend(() => FilterLabelIdPairV2_1_0)),
    ),
    filterExpressionMetadata: Schema.optionalKey(
      Schema.Union([
        Schema.suspend(() => FilterExpressionMetadataV2_1_0),
        Schema.suspend(() => DecomposedFilterExpressionMetadataV2_1_0),
      ]),
    ),
  });

export type FilterLabelIdPairV2_1_0 = {
  readonly id: DataRepetitionSelectorV1_5_0;
  readonly displayName: string;
};

export const FilterLabelIdPairV2_1_0: Schema.Codec<FilterLabelIdPairV2_1_0> =
  closed({
    id: Schema.suspend(() => DataRepetitionSelectorV1_5_0),
    displayName: Schema.String,
  });

export type FilterExpressionMetadataV2_1_0 = {
  readonly expressions: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly cachedValueItems?: ReadonlyArray<IdentityValueMapV2_1_0>;
  readonly jsonFilter?: {
    readonly filterType: Schema.Json;
  };
};

export const FilterExpressionMetadataV2_1_0: Schema.Codec<FilterExpressionMetadataV2_1_0> =
  closed({
    expressions: Schema.Array(
      Schema.suspend(() => QueryExpressionContainerV1_4_0),
    ),
    cachedValueItems: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => IdentityValueMapV2_1_0)),
    ),
    jsonFilter: Schema.optionalKey(closed({ filterType: Schema.Json })),
  });

export type IdentityValueMapV2_1_0 = {
  readonly identities: ReadonlyArray<DataRepetitionSelectorV1_5_0>;
  readonly valueMap: {
    readonly [key: string]: string;
  };
};

export const IdentityValueMapV2_1_0: Schema.Codec<IdentityValueMapV2_1_0> =
  closed({
    identities: Schema.Array(
      Schema.suspend(() => DataRepetitionSelectorV1_5_0),
    ),
    valueMap: numericDictionary(Schema.String),
  });

export type DecomposedFilterExpressionMetadataV2_1_0 = {
  readonly decomposedIdentities?: DecomposedIdentitiesV2_1_0;
  readonly expressions: ReadonlyArray<Schema.Json>;
  readonly valueMap?: ReadonlyArray<{
    readonly [key: string]: string;
  }>;
  readonly jsonFilter?: {
    readonly filterType: Schema.Json;
  };
};

export const DecomposedFilterExpressionMetadataV2_1_0: Schema.Codec<DecomposedFilterExpressionMetadataV2_1_0> =
  closed({
    decomposedIdentities: Schema.optionalKey(
      Schema.suspend(() => DecomposedIdentitiesV2_1_0),
    ),
    expressions: Schema.Array(Schema.Json),
    valueMap: Schema.optionalKey(
      Schema.Array(numericDictionary(Schema.String)),
    ),
    jsonFilter: Schema.optionalKey(closed({ filterType: Schema.Json })),
  });

export type DecomposedIdentitiesV2_1_0 = {
  readonly values: ReadonlyArray<
    ReadonlyArray<{
      readonly [key: string]: ReadonlyArray<QueryExpressionContainerV1_4_0>;
    }>
  >;
  readonly columns: ReadonlyArray<DecomposedTreeQueryExpressionContainerV2_1_0>;
};

export const DecomposedIdentitiesV2_1_0: Schema.Codec<DecomposedIdentitiesV2_1_0> =
  closed({
    values: Schema.Array(
      Schema.Array(
        numericDictionary(
          Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
        ),
      ),
    ),
    columns: Schema.Array(
      Schema.suspend(() => DecomposedTreeQueryExpressionContainerV2_1_0),
    ),
  });

export type DecomposedTreeQueryExpressionContainerV2_1_0 = {
  readonly left?: DecomposedTreeQueryExpressionContainerV2_1_0;
  readonly right?: DecomposedTreeQueryExpressionContainerV2_1_0;
  readonly value?: QueryExpressionContainerV1_4_0;
};

export const DecomposedTreeQueryExpressionContainerV2_1_0: Schema.Codec<DecomposedTreeQueryExpressionContainerV2_1_0> =
  closed({
    left: Schema.optionalKey(
      Schema.suspend(() => DecomposedTreeQueryExpressionContainerV2_1_0),
    ),
    right: Schema.optionalKey(
      Schema.suspend(() => DecomposedTreeQueryExpressionContainerV2_1_0),
    ),
    value: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_4_0),
    ),
  });

export type SectionStateV2_1_0 = {
  readonly filters?: FiltersStateV2_1_0;
  readonly visualContainers: {} & {
    readonly [key: string]: VisualContainerStateV2_1_0;
  };
  readonly visualContainerGroups?: {} & {
    readonly [key: string]: VisualContainerGroupState;
  };
};

export const SectionStateV2_1_0: Schema.Codec<SectionStateV2_1_0> = closed({
  filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV2_1_0)),
  visualContainers: Schema.Record(
    Schema.String,
    Schema.suspend(() => VisualContainerStateV2_1_0),
  ),
  visualContainerGroups: Schema.optionalKey(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualContainerGroupState),
    ),
  ),
});

export type VisualContainerStateV2_1_0 = {
  readonly filters?: FiltersStateV2_1_0;
  readonly singleVisual?: SingleVisualConfigStateV2_1_0;
  readonly highlight?: HighlightStateV2_1_0;
};

export const VisualContainerStateV2_1_0: Schema.Codec<VisualContainerStateV2_1_0> =
  closed({
    filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV2_1_0)),
    singleVisual: Schema.optionalKey(
      Schema.suspend(() => SingleVisualConfigStateV2_1_0),
    ),
    highlight: Schema.optionalKey(Schema.suspend(() => HighlightStateV2_1_0)),
  });

export type SingleVisualConfigStateV2_1_0 = {
  readonly visualType?: string;
  readonly autoSelectVisualType?: boolean;
  readonly targetType?: string;
  readonly targetAutoSelectVisualType?: boolean;
  readonly objects?: DataViewObjectDefinitionUpdatesV2_1_0;
  readonly orderBy?: ReadonlyArray<QuerySortClauseV1_4_0>;
  readonly activeProjections?: ProjectionStateV2_1_0;
  readonly projections?: ProjectionStateV2_1_0;
  readonly parameters?: ParameterStateByRoleV2_1_0;
  readonly display?: VisualContainerDisplayState;
  readonly cachedFilterDisplayItems?: ReadonlyArray<FilterLabelIdPairV2_1_0>;
  readonly expansionStates?: ReadonlyArray<Schema.Json>;
  readonly filterExpressionMetadata?:
    FilterExpressionMetadataV2_1_0 | DecomposedFilterExpressionMetadataV2_1_0;
  readonly isDrillDisabled?: boolean;
};

export const SingleVisualConfigStateV2_1_0: Schema.Codec<SingleVisualConfigStateV2_1_0> =
  closed({
    visualType: Schema.optionalKey(Schema.String),
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    targetType: Schema.optionalKey(Schema.String),
    targetAutoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionUpdatesV2_1_0),
    ),
    orderBy: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QuerySortClauseV1_4_0)),
    ),
    activeProjections: Schema.optionalKey(
      Schema.suspend(() => ProjectionStateV2_1_0),
    ),
    projections: Schema.optionalKey(
      Schema.suspend(() => ProjectionStateV2_1_0),
    ),
    parameters: Schema.optionalKey(
      Schema.suspend(() => ParameterStateByRoleV2_1_0),
    ),
    display: Schema.optionalKey(
      Schema.suspend(() => VisualContainerDisplayState),
    ),
    cachedFilterDisplayItems: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => FilterLabelIdPairV2_1_0)),
    ),
    expansionStates: Schema.optionalKey(Schema.Array(Schema.Json)),
    filterExpressionMetadata: Schema.optionalKey(
      Schema.Union([
        Schema.suspend(() => FilterExpressionMetadataV2_1_0),
        Schema.suspend(() => DecomposedFilterExpressionMetadataV2_1_0),
      ]),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });

export type DataViewObjectDefinitionUpdatesV2_1_0 = {
  readonly merge?: DataViewObjectDefinitionsV1_5_0;
  readonly remove?: ReadonlyArray<DataViewObjectPropertyIdWithSelectorV2_1_0>;
};

export const DataViewObjectDefinitionUpdatesV2_1_0: Schema.Codec<DataViewObjectDefinitionUpdatesV2_1_0> =
  closed({
    merge: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_5_0),
    ),
    remove: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => DataViewObjectPropertyIdWithSelectorV2_1_0),
      ),
    ),
  });

export type DataViewObjectPropertyIdWithSelectorV2_1_0 = {
  readonly object: string;
  readonly property: string;
  readonly selector?: SelectorV1_5_0;
};

export const DataViewObjectPropertyIdWithSelectorV2_1_0: Schema.Codec<DataViewObjectPropertyIdWithSelectorV2_1_0> =
  closed({
    object: Schema.String,
    property: Schema.String,
    selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
  });

export type ProjectionStateV2_1_0 = {} & {
  readonly [key: string]: ReadonlyArray<QueryExpressionContainerV1_4_0>;
};

export const ProjectionStateV2_1_0: Schema.Codec<ProjectionStateV2_1_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
  );

export type ParameterStateByRoleV2_1_0 = {} & {
  readonly [key: string]: ReadonlyArray<ParameterStateV2_1_0>;
};

export const ParameterStateByRoleV2_1_0: Schema.Codec<ParameterStateByRoleV2_1_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => ParameterStateV2_1_0)),
  );

export type ParameterStateV2_1_0 = {
  readonly expr: QueryExpressionContainerV1_4_0;
  readonly index: number;
  readonly length: number;
  readonly sortDirection?: 1 | 2;
};

export const ParameterStateV2_1_0: Schema.Codec<ParameterStateV2_1_0> = closed({
  expr: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  index: Schema.Finite,
  length: Schema.Finite,
  sortDirection: Schema.optionalKey(
    Schema.Union([Schema.Literal(1), Schema.Literal(2)]),
  ),
});

export type HighlightStateV2_1_0 = {
  readonly selection:
    DecomposedSelectorsV2_1_0 | ReadonlyArray<SelectorsByColumnV2_1_0>;
  readonly filterExpressionMetadata?:
    FilterExpressionMetadataV2_1_0 | DecomposedFilterExpressionMetadataV2_1_0;
};

export const HighlightStateV2_1_0: Schema.Codec<HighlightStateV2_1_0> = closed({
  selection: Schema.Union([
    Schema.suspend(() => DecomposedSelectorsV2_1_0),
    Schema.Array(Schema.suspend(() => SelectorsByColumnV2_1_0)),
  ]),
  filterExpressionMetadata: Schema.optionalKey(
    Schema.Union([
      Schema.suspend(() => FilterExpressionMetadataV2_1_0),
      Schema.suspend(() => DecomposedFilterExpressionMetadataV2_1_0),
    ]),
  ),
});

export type DecomposedSelectorsV2_1_0 = {
  readonly decomposedIdentities?: DecomposedIdentitiesV2_1_0;
  readonly queryNameMap?: ReadonlyArray<{
    readonly [key: string]: ReadonlyArray<number>;
  }>;
  readonly queryNames?: ReadonlyArray<string>;
  readonly metadata?: ReadonlyArray<ReadonlyArray<string>>;
  readonly id?: ReadonlyArray<string>;
};

export const DecomposedSelectorsV2_1_0: Schema.Codec<DecomposedSelectorsV2_1_0> =
  closed({
    decomposedIdentities: Schema.optionalKey(
      Schema.suspend(() => DecomposedIdentitiesV2_1_0),
    ),
    queryNameMap: Schema.optionalKey(
      Schema.Array(numericDictionary(Schema.Array(Schema.Finite))),
    ),
    queryNames: Schema.optionalKey(Schema.Array(Schema.String)),
    metadata: Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))),
    id: Schema.optionalKey(Schema.Array(Schema.String)),
  });

export type SelectorsByColumnV2_1_0 = {
  readonly dataMap?: SelectorsForColumnV2_1_0;
  readonly metadata?: ReadonlyArray<string>;
  readonly id?: string;
};

export const SelectorsByColumnV2_1_0: Schema.Codec<SelectorsByColumnV2_1_0> =
  closed({
    dataMap: Schema.optionalKey(Schema.suspend(() => SelectorsForColumnV2_1_0)),
    metadata: Schema.optionalKey(Schema.Array(Schema.String)),
    id: Schema.optionalKey(Schema.String),
  });

export type SelectorsForColumnV2_1_0 = {} & {
  readonly [key: string]: ReadonlyArray<DataRepetitionSelectorV1_5_0>;
};

export const SelectorsForColumnV2_1_0: Schema.Codec<SelectorsForColumnV2_1_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => DataRepetitionSelectorV1_5_0)),
  );

export type BookmarkV2_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.1.0/schema.json";
  readonly displayName: string;
  readonly name: string;
  readonly options?: BookmarkOptions;
  readonly explorationState: ExplorationStateV2_1_0;
};

export const BookmarkV2_1_0: Schema.Codec<BookmarkV2_1_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.1.0/schema.json",
  ),
  displayName: Schema.String,
  name: Schema.String,
  options: Schema.optionalKey(Schema.suspend(() => BookmarkOptions)),
  explorationState: Schema.suspend(() => ExplorationStateV2_1_0),
});

export const BookmarkDefinitionsV2_1_0 = {
  BookmarkOptions: BookmarkOptions,
  ExplorationState: ExplorationStateV2_1_0,
  FiltersState: FiltersStateV2_1_0,
  FilterContainerState: FilterContainerStateV2_1_0,
  FilterLabelIdPair: FilterLabelIdPairV2_1_0,
  FilterExpressionMetadata: FilterExpressionMetadataV2_1_0,
  IdentityValueMap: IdentityValueMapV2_1_0,
  DecomposedFilterExpressionMetadata: DecomposedFilterExpressionMetadataV2_1_0,
  DecomposedIdentities: DecomposedIdentitiesV2_1_0,
  "DecomposedTree<QueryExpressionContainer>":
    DecomposedTreeQueryExpressionContainerV2_1_0,
  SectionState: SectionStateV2_1_0,
  VisualContainerState: VisualContainerStateV2_1_0,
  SingleVisualConfigState: SingleVisualConfigStateV2_1_0,
  DataViewObjectDefinitionUpdates: DataViewObjectDefinitionUpdatesV2_1_0,
  DataViewObjectPropertyIdWithSelector:
    DataViewObjectPropertyIdWithSelectorV2_1_0,
  ProjectionState: ProjectionStateV2_1_0,
  ParameterStateByRole: ParameterStateByRoleV2_1_0,
  ParameterState: ParameterStateV2_1_0,
  VisualContainerDisplayState: VisualContainerDisplayState,
  VisualContainerDisplayMode: VisualContainerDisplayMode,
  HighlightState: HighlightStateV2_1_0,
  DecomposedSelectors: DecomposedSelectorsV2_1_0,
  SelectorsByColumn: SelectorsByColumnV2_1_0,
  SelectorsForColumn: SelectorsForColumnV2_1_0,
  VisualContainerGroupState: VisualContainerGroupState,
} as const;

export {
  BookmarkOptions as BookmarkBookmarkOptionsV2_1_0,
  VisualContainerDisplayState as BookmarkVisualContainerDisplayStateV2_1_0,
  VisualContainerDisplayMode as BookmarkVisualContainerDisplayModeV2_1_0,
  VisualContainerGroupState as BookmarkVisualContainerGroupStateV2_1_0,
} from "./shared.js";

export {
  ExplorationStateV2_1_0 as BookmarkExplorationStateV2_1_0,
  FiltersStateV2_1_0 as BookmarkFiltersStateV2_1_0,
  FilterContainerStateV2_1_0 as BookmarkFilterContainerStateV2_1_0,
  FilterLabelIdPairV2_1_0 as BookmarkFilterLabelIdPairV2_1_0,
  FilterExpressionMetadataV2_1_0 as BookmarkFilterExpressionMetadataV2_1_0,
  IdentityValueMapV2_1_0 as BookmarkIdentityValueMapV2_1_0,
  DecomposedFilterExpressionMetadataV2_1_0 as BookmarkDecomposedFilterExpressionMetadataV2_1_0,
  DecomposedIdentitiesV2_1_0 as BookmarkDecomposedIdentitiesV2_1_0,
  DecomposedTreeQueryExpressionContainerV2_1_0 as BookmarkDecomposedTreeQueryExpressionContainerV2_1_0,
  SectionStateV2_1_0 as BookmarkSectionStateV2_1_0,
  VisualContainerStateV2_1_0 as BookmarkVisualContainerStateV2_1_0,
  SingleVisualConfigStateV2_1_0 as BookmarkSingleVisualConfigStateV2_1_0,
  DataViewObjectDefinitionUpdatesV2_1_0 as BookmarkDataViewObjectDefinitionUpdatesV2_1_0,
  DataViewObjectPropertyIdWithSelectorV2_1_0 as BookmarkDataViewObjectPropertyIdWithSelectorV2_1_0,
  ProjectionStateV2_1_0 as BookmarkProjectionStateV2_1_0,
  ParameterStateByRoleV2_1_0 as BookmarkParameterStateByRoleV2_1_0,
  ParameterStateV2_1_0 as BookmarkParameterStateV2_1_0,
  HighlightStateV2_1_0 as BookmarkHighlightStateV2_1_0,
  DecomposedSelectorsV2_1_0 as BookmarkDecomposedSelectorsV2_1_0,
  SelectorsByColumnV2_1_0 as BookmarkSelectorsByColumnV2_1_0,
  SelectorsForColumnV2_1_0 as BookmarkSelectorsForColumnV2_1_0,
};
