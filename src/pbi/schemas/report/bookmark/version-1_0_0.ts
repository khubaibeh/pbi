import { Schema } from "effect";
import { closed, numericDictionary } from "../shared.js";
import {
  DataRepetitionSelectorV1_0_0,
  DataViewObjectDefinitionsV1_0_0,
  SelectorV1_0_0,
} from "../formatting-object-definitions/version-1_0_0.js";
import {
  FilterDefinitionV1_0_0,
  QueryExpressionContainerV1_0_0,
  QuerySortClauseV1_0_0,
} from "../semantic-query/version-1_0_0.js";
import {
  BookmarkOptions,
  VisualContainerDisplayMode,
  VisualContainerDisplayState,
  VisualContainerGroupState,
} from "./shared.js";

export type ExplorationStateV1_0_0 = {
  readonly version: string;
  readonly activeSection: string;
  readonly filters?: FiltersStateV1_0_0;
  readonly sections: {} & {
    readonly [key: string]: SectionStateV1_0_0;
  };
  readonly objects?: DataViewObjectDefinitionUpdatesV1_0_0;
  readonly dataSourceVariables?: string;
};

export const ExplorationStateV1_0_0: Schema.Codec<ExplorationStateV1_0_0> = closed({
  version: Schema.String,
  activeSection: Schema.String,
  filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_0_0)),
  sections: Schema.Record(
    Schema.String,
    Schema.suspend(() => SectionStateV1_0_0),
  ),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionUpdatesV1_0_0)),
  dataSourceVariables: Schema.optionalKey(Schema.String),
});

export type FiltersStateV1_0_0 = {
  readonly byName?: {} & {
    readonly [key: string]: FilterContainerStateV1_0_0;
  };
  readonly byExpr?: ReadonlyArray<FilterContainerStateV1_0_0>;
  readonly byType?: ReadonlyArray<FilterContainerStateV1_0_0>;
  readonly byTransientState?: ReadonlyArray<FilterContainerStateV1_0_0>;
};

export const FiltersStateV1_0_0: Schema.Codec<FiltersStateV1_0_0> = closed({
  byName: Schema.optionalKey(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => FilterContainerStateV1_0_0),
    ),
  ),
  byExpr: Schema.optionalKey(Schema.Array(Schema.suspend(() => FilterContainerStateV1_0_0))),
  byType: Schema.optionalKey(Schema.Array(Schema.suspend(() => FilterContainerStateV1_0_0))),
  byTransientState: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => FilterContainerStateV1_0_0)),
  ),
});

export type FilterContainerStateV1_0_0 = {
  readonly name: string;
  readonly type?: string;
  readonly filter?: FilterDefinitionV1_0_0;
  readonly expression?: QueryExpressionContainerV1_0_0;
  readonly restatement?: string;
  readonly howCreated?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  readonly precedence?: 0;
  readonly isTransient?: boolean;
  readonly cachedDisplayNames?: ReadonlyArray<Schema.Json>;
  readonly filterExpressionMetadata?: Schema.Json;
};

export const FilterContainerStateV1_0_0: Schema.Codec<FilterContainerStateV1_0_0> = closed({
  name: Schema.String,
  type: Schema.optionalKey(Schema.String),
  filter: Schema.optionalKey(Schema.suspend(() => FilterDefinitionV1_0_0)),
  expression: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
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

export type SectionStateV1_0_0 = {
  readonly filters?: FiltersStateV1_0_0;
  readonly visualContainers: {} & {
    readonly [key: string]: VisualContainerStateV1_0_0;
  };
  readonly visualContainerGroups?: {} & {
    readonly [key: string]: VisualContainerGroupState;
  };
};

export const SectionStateV1_0_0: Schema.Codec<SectionStateV1_0_0> = closed({
  filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_0_0)),
  visualContainers: Schema.Record(
    Schema.String,
    Schema.suspend(() => VisualContainerStateV1_0_0),
  ),
  visualContainerGroups: Schema.optionalKey(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualContainerGroupState),
    ),
  ),
});

export type VisualContainerStateV1_0_0 = {
  readonly filters?: FiltersStateV1_0_0;
  readonly singleVisual?: SingleVisualConfigStateV1_0_0;
  readonly highlight?: HighlightStateV1_0_0;
};

export const VisualContainerStateV1_0_0: Schema.Codec<VisualContainerStateV1_0_0> = closed({
  filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_0_0)),
  singleVisual: Schema.optionalKey(Schema.suspend(() => SingleVisualConfigStateV1_0_0)),
  highlight: Schema.optionalKey(Schema.suspend(() => HighlightStateV1_0_0)),
});

export type SingleVisualConfigStateV1_0_0 = {
  readonly visualType?: string;
  readonly autoSelectVisualType?: boolean;
  readonly targetType?: string;
  readonly targetAutoSelectVisualType?: boolean;
  readonly objects?: DataViewObjectDefinitionUpdatesV1_0_0;
  readonly orderBy?: ReadonlyArray<QuerySortClauseV1_0_0>;
  readonly activeProjections?: BookmarkProjectionStateV1_0_0;
  readonly projections?: BookmarkProjectionStateV1_0_0;
  readonly parameters?: ParameterStateByRoleV1_0_0;
  readonly display?: VisualContainerDisplayState;
  readonly cachedFilterDisplayItems?: ReadonlyArray<Schema.Json>;
  readonly expansionStates?: ReadonlyArray<Schema.Json>;
  readonly filterExpressionMetadata?: Schema.Json;
  readonly isDrillDisabled?: boolean;
};

export const SingleVisualConfigStateV1_0_0: Schema.Codec<SingleVisualConfigStateV1_0_0> = closed({
  visualType: Schema.optionalKey(Schema.String),
  autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
  targetType: Schema.optionalKey(Schema.String),
  targetAutoSelectVisualType: Schema.optionalKey(Schema.Boolean),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionUpdatesV1_0_0)),
  orderBy: Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortClauseV1_0_0))),
  activeProjections: Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_0_0)),
  projections: Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_0_0)),
  parameters: Schema.optionalKey(Schema.suspend(() => ParameterStateByRoleV1_0_0)),
  display: Schema.optionalKey(Schema.suspend(() => VisualContainerDisplayState)),
  cachedFilterDisplayItems: Schema.optionalKey(Schema.Array(Schema.Json)),
  expansionStates: Schema.optionalKey(Schema.Array(Schema.Json)),
  filterExpressionMetadata: Schema.optionalKey(Schema.Json),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type DataViewObjectDefinitionUpdatesV1_0_0 = {
  readonly merge?: DataViewObjectDefinitionsV1_0_0;
  readonly remove?: ReadonlyArray<DataViewObjectPropertyIdWithSelectorV1_0_0>;
};

export const DataViewObjectDefinitionUpdatesV1_0_0: Schema.Codec<DataViewObjectDefinitionUpdatesV1_0_0> =
  closed({
    merge: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_0_0)),
    remove: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => DataViewObjectPropertyIdWithSelectorV1_0_0)),
    ),
  });

export type DataViewObjectPropertyIdWithSelectorV1_0_0 = {
  readonly object: string;
  readonly property: string;
  readonly selector: SelectorV1_0_0;
};

export const DataViewObjectPropertyIdWithSelectorV1_0_0: Schema.Codec<DataViewObjectPropertyIdWithSelectorV1_0_0> =
  closed({
    object: Schema.String,
    property: Schema.String,
    selector: Schema.suspend(() => SelectorV1_0_0),
  });

export type BookmarkProjectionStateV1_0_0 = {} & {
  readonly [key: string]: ReadonlyArray<QueryExpressionContainerV1_0_0>;
};

export const BookmarkProjectionStateV1_0_0: Schema.Codec<BookmarkProjectionStateV1_0_0> =
  Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)));

export type ParameterStateByRoleV1_0_0 = {} & {
  readonly [key: string]: ReadonlyArray<ParameterStateV1_0_0>;
};

export const ParameterStateByRoleV1_0_0: Schema.Codec<ParameterStateByRoleV1_0_0> = Schema.Record(
  Schema.String,
  Schema.Array(Schema.suspend(() => ParameterStateV1_0_0)),
);

export type ParameterStateV1_0_0 = {
  readonly expr: QueryExpressionContainerV1_0_0;
  readonly index: number;
  readonly length: number;
};

export const ParameterStateV1_0_0: Schema.Codec<ParameterStateV1_0_0> = closed({
  expr: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  index: Schema.Finite,
  length: Schema.Finite,
});

export type HighlightStateV1_0_0 = {
  readonly selection: DecomposedSelectorsV1_0_0 | ReadonlyArray<SelectorsByColumnV1_0_0>;
  readonly filterExpressionMetadata?: Schema.Json;
};

export const HighlightStateV1_0_0: Schema.Codec<HighlightStateV1_0_0> = closed({
  selection: Schema.Union([
    Schema.suspend(() => DecomposedSelectorsV1_0_0),
    Schema.Array(Schema.suspend(() => SelectorsByColumnV1_0_0)),
  ]),
  filterExpressionMetadata: Schema.optionalKey(Schema.Json),
});

export type DecomposedSelectorsV1_0_0 = {
  readonly decomposedIdentities?: DecomposedIdentitiesV1_0_0;
  readonly queryNameMap?: ReadonlyArray<{
    readonly [key: string]: ReadonlyArray<number>;
  }>;
  readonly queryNames?: ReadonlyArray<string>;
  readonly metadata?: ReadonlyArray<ReadonlyArray<string>>;
  readonly id?: ReadonlyArray<string>;
};

export const DecomposedSelectorsV1_0_0: Schema.Codec<DecomposedSelectorsV1_0_0> = closed({
  decomposedIdentities: Schema.optionalKey(Schema.suspend(() => DecomposedIdentitiesV1_0_0)),
  queryNameMap: Schema.optionalKey(Schema.Array(numericDictionary(Schema.Array(Schema.Finite)))),
  queryNames: Schema.optionalKey(Schema.Array(Schema.String)),
  metadata: Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))),
  id: Schema.optionalKey(Schema.Array(Schema.String)),
});

export type DecomposedIdentitiesV1_0_0 = {
  readonly values: ReadonlyArray<
    ReadonlyArray<{
      readonly [key: string]: ReadonlyArray<QueryExpressionContainerV1_0_0>;
    }>
  >;
  readonly columns: ReadonlyArray<DecomposedTreeQueryExpressionContainerV1_0_0>;
};

export const DecomposedIdentitiesV1_0_0: Schema.Codec<DecomposedIdentitiesV1_0_0> = closed({
  values: Schema.Array(
    Schema.Array(
      numericDictionary(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0))),
    ),
  ),
  columns: Schema.Array(Schema.suspend(() => DecomposedTreeQueryExpressionContainerV1_0_0)),
});

export type DecomposedTreeQueryExpressionContainerV1_0_0 = {
  readonly left?: DecomposedTreeQueryExpressionContainerV1_0_0;
  readonly right?: DecomposedTreeQueryExpressionContainerV1_0_0;
  readonly value?: QueryExpressionContainerV1_0_0;
};

export const DecomposedTreeQueryExpressionContainerV1_0_0: Schema.Codec<DecomposedTreeQueryExpressionContainerV1_0_0> =
  closed({
    left: Schema.optionalKey(Schema.suspend(() => DecomposedTreeQueryExpressionContainerV1_0_0)),
    right: Schema.optionalKey(Schema.suspend(() => DecomposedTreeQueryExpressionContainerV1_0_0)),
    value: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
  });

export type SelectorsByColumnV1_0_0 = {
  readonly dataMap?: SelectorsForColumnV1_0_0;
  readonly metadata?: ReadonlyArray<string>;
  readonly id?: string;
};

export const SelectorsByColumnV1_0_0: Schema.Codec<SelectorsByColumnV1_0_0> = closed({
  dataMap: Schema.optionalKey(Schema.suspend(() => SelectorsForColumnV1_0_0)),
  metadata: Schema.optionalKey(Schema.Array(Schema.String)),
  id: Schema.optionalKey(Schema.String),
});

export type SelectorsForColumnV1_0_0 = {} & {
  readonly [key: string]: ReadonlyArray<DataRepetitionSelectorV1_0_0>;
};

export const SelectorsForColumnV1_0_0: Schema.Codec<SelectorsForColumnV1_0_0> = Schema.Record(
  Schema.String,
  Schema.Array(Schema.suspend(() => DataRepetitionSelectorV1_0_0)),
);

export const BookmarkDefinitionsV1_0_0 = {
  BookmarkOptions: BookmarkOptions,
  ExplorationState: ExplorationStateV1_0_0,
  FiltersState: FiltersStateV1_0_0,
  FilterContainerState: FilterContainerStateV1_0_0,
  SectionState: SectionStateV1_0_0,
  VisualContainerState: VisualContainerStateV1_0_0,
  SingleVisualConfigState: SingleVisualConfigStateV1_0_0,
  DataViewObjectDefinitionUpdates: DataViewObjectDefinitionUpdatesV1_0_0,
  DataViewObjectPropertyIdWithSelector: DataViewObjectPropertyIdWithSelectorV1_0_0,
  ProjectionState: BookmarkProjectionStateV1_0_0,
  ParameterStateByRole: ParameterStateByRoleV1_0_0,
  ParameterState: ParameterStateV1_0_0,
  VisualContainerDisplayState: VisualContainerDisplayState,
  VisualContainerDisplayMode: VisualContainerDisplayMode,
  HighlightState: HighlightStateV1_0_0,
  DecomposedSelectors: DecomposedSelectorsV1_0_0,
  DecomposedIdentities: DecomposedIdentitiesV1_0_0,
  "DecomposedTree<QueryExpressionContainer>": DecomposedTreeQueryExpressionContainerV1_0_0,
  SelectorsByColumn: SelectorsByColumnV1_0_0,
  SelectorsForColumn: SelectorsForColumnV1_0_0,
  VisualContainerGroupState: VisualContainerGroupState,
} as const;

export type BookmarkV1_0_0 = {
  readonly displayName: string;
  readonly name: string;
  readonly options?: BookmarkOptions;
  readonly explorationState: ExplorationStateV1_0_0;
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.0.0/schema.json";
};

export const BookmarkV1_0_0: Schema.Codec<BookmarkV1_0_0> = closed({
  displayName: Schema.String,
  name: Schema.String,
  options: Schema.optionalKey(Schema.suspend(() => BookmarkOptions)),
  explorationState: Schema.suspend(() => ExplorationStateV1_0_0),
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.0.0/schema.json",
  ),
});

export {
  ExplorationStateV1_0_0 as BookmarkExplorationStateV1_0_0,
  FiltersStateV1_0_0 as BookmarkFiltersStateV1_0_0,
  FilterContainerStateV1_0_0 as BookmarkFilterContainerStateV1_0_0,
  SectionStateV1_0_0 as BookmarkSectionStateV1_0_0,
  VisualContainerStateV1_0_0 as BookmarkVisualContainerStateV1_0_0,
  SingleVisualConfigStateV1_0_0 as BookmarkSingleVisualConfigStateV1_0_0,
  DataViewObjectDefinitionUpdatesV1_0_0 as BookmarkDataViewObjectDefinitionUpdatesV1_0_0,
  DataViewObjectPropertyIdWithSelectorV1_0_0 as BookmarkDataViewObjectPropertyIdWithSelectorV1_0_0,
  ParameterStateByRoleV1_0_0 as BookmarkParameterStateByRoleV1_0_0,
  ParameterStateV1_0_0 as BookmarkParameterStateV1_0_0,
  HighlightStateV1_0_0 as BookmarkHighlightStateV1_0_0,
  DecomposedSelectorsV1_0_0 as BookmarkDecomposedSelectorsV1_0_0,
  DecomposedIdentitiesV1_0_0 as BookmarkDecomposedIdentitiesV1_0_0,
  DecomposedTreeQueryExpressionContainerV1_0_0 as BookmarkDecomposedTreeQueryExpressionContainerV1_0_0,
  SelectorsByColumnV1_0_0 as BookmarkSelectorsByColumnV1_0_0,
  SelectorsForColumnV1_0_0 as BookmarkSelectorsForColumnV1_0_0,
};

export {
  BookmarkOptions as BookmarkBookmarkOptionsV1_0_0,
  VisualContainerDisplayState as BookmarkVisualContainerDisplayStateV1_0_0,
  VisualContainerDisplayMode as BookmarkVisualContainerDisplayModeV1_0_0,
  VisualContainerGroupState as BookmarkVisualContainerGroupStateV1_0_0,
} from "./shared.js";
