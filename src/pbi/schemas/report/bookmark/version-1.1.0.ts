import { Schema } from "effect";
import {
  BookmarkOptions,
  numericDictionary,
  VisualContainerDisplayMode,
  VisualContainerDisplayState,
  VisualContainerGroupState,
} from "./shared.js";
import {
  DataRepetitionSelectorV1_1_0,
  DataViewObjectDefinitionsV1_1_0,
  SelectorV1_1_0,
} from "../formatting-object-definitions/version-1.1.0.js";
import {
  QueryExpressionContainerV1_1_0,
  QuerySortClauseV1_1_0,
} from "../semantic-query/shared.js";
import { FilterDefinitionV1_1_0 } from "../semantic-query/version-1.1.0.js";
import { closed } from "../shared.js";

export type ExplorationStateV1_1_0 = {
  readonly version: string;
  readonly activeSection: string;
  readonly filters?: FiltersStateV1_1_0;
  readonly sections: {} & {
    readonly [key: string]: SectionStateV1_1_0;
  };
  readonly objects?: DataViewObjectDefinitionUpdatesV1_1_0;
  readonly dataSourceVariables?: string;
};

export const ExplorationStateV1_1_0: Schema.Codec<ExplorationStateV1_1_0> =
  closed({
    version: Schema.String,
    activeSection: Schema.String,
    filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_1_0)),
    sections: Schema.Record(
      Schema.String,
      Schema.suspend(() => SectionStateV1_1_0),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionUpdatesV1_1_0),
    ),
    dataSourceVariables: Schema.optionalKey(Schema.String),
  });

export type FiltersStateV1_1_0 = {
  readonly byName?: {} & {
    readonly [key: string]: FilterContainerStateV1_1_0;
  };
  readonly byExpr?: ReadonlyArray<FilterContainerStateV1_1_0>;
  readonly byType?: ReadonlyArray<FilterContainerStateV1_1_0>;
  readonly byTransientState?: ReadonlyArray<FilterContainerStateV1_1_0>;
};

export const FiltersStateV1_1_0: Schema.Codec<FiltersStateV1_1_0> = closed({
  byName: Schema.optionalKey(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => FilterContainerStateV1_1_0),
    ),
  ),
  byExpr: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => FilterContainerStateV1_1_0)),
  ),
  byType: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => FilterContainerStateV1_1_0)),
  ),
  byTransientState: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => FilterContainerStateV1_1_0)),
  ),
});

export type FilterContainerStateV1_1_0 = {
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

export const FilterContainerStateV1_1_0: Schema.Codec<FilterContainerStateV1_1_0> =
  closed({
    name: Schema.String,
    type: Schema.optionalKey(Schema.String),
    filter: Schema.optionalKey(Schema.suspend(() => FilterDefinitionV1_1_0)),
    expression: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_1_0),
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

export type SectionStateV1_1_0 = {
  readonly filters?: FiltersStateV1_1_0;
  readonly visualContainers: {} & {
    readonly [key: string]: VisualContainerStateV1_1_0;
  };
  readonly visualContainerGroups?: {} & {
    readonly [key: string]: VisualContainerGroupState;
  };
};

export const SectionStateV1_1_0: Schema.Codec<SectionStateV1_1_0> = closed({
  filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_1_0)),
  visualContainers: Schema.Record(
    Schema.String,
    Schema.suspend(() => VisualContainerStateV1_1_0),
  ),
  visualContainerGroups: Schema.optionalKey(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualContainerGroupState),
    ),
  ),
});

export type VisualContainerStateV1_1_0 = {
  readonly filters?: FiltersStateV1_1_0;
  readonly singleVisual?: SingleVisualConfigStateV1_1_0;
  readonly highlight?: HighlightStateV1_1_0;
};

export const VisualContainerStateV1_1_0: Schema.Codec<VisualContainerStateV1_1_0> =
  closed({
    filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_1_0)),
    singleVisual: Schema.optionalKey(
      Schema.suspend(() => SingleVisualConfigStateV1_1_0),
    ),
    highlight: Schema.optionalKey(Schema.suspend(() => HighlightStateV1_1_0)),
  });

export type SingleVisualConfigStateV1_1_0 = {
  readonly visualType?: string;
  readonly autoSelectVisualType?: boolean;
  readonly targetType?: string;
  readonly targetAutoSelectVisualType?: boolean;
  readonly objects?: DataViewObjectDefinitionUpdatesV1_1_0;
  readonly orderBy?: ReadonlyArray<QuerySortClauseV1_1_0>;
  readonly activeProjections?: ProjectionStateV1_1_0;
  readonly projections?: ProjectionStateV1_1_0;
  readonly parameters?: ParameterStateByRoleV1_1_0;
  readonly display?: VisualContainerDisplayState;
  readonly cachedFilterDisplayItems?: ReadonlyArray<Schema.Json>;
  readonly expansionStates?: ReadonlyArray<Schema.Json>;
  readonly filterExpressionMetadata?: Schema.Json;
  readonly isDrillDisabled?: boolean;
};

export const SingleVisualConfigStateV1_1_0: Schema.Codec<SingleVisualConfigStateV1_1_0> =
  closed({
    visualType: Schema.optionalKey(Schema.String),
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    targetType: Schema.optionalKey(Schema.String),
    targetAutoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionUpdatesV1_1_0),
    ),
    orderBy: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QuerySortClauseV1_1_0)),
    ),
    activeProjections: Schema.optionalKey(
      Schema.suspend(() => ProjectionStateV1_1_0),
    ),
    projections: Schema.optionalKey(
      Schema.suspend(() => ProjectionStateV1_1_0),
    ),
    parameters: Schema.optionalKey(
      Schema.suspend(() => ParameterStateByRoleV1_1_0),
    ),
    display: Schema.optionalKey(
      Schema.suspend(() => VisualContainerDisplayState),
    ),
    cachedFilterDisplayItems: Schema.optionalKey(Schema.Array(Schema.Json)),
    expansionStates: Schema.optionalKey(Schema.Array(Schema.Json)),
    filterExpressionMetadata: Schema.optionalKey(Schema.Json),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });

export type DataViewObjectDefinitionUpdatesV1_1_0 = {
  readonly merge?: DataViewObjectDefinitionsV1_1_0;
  readonly remove?: ReadonlyArray<DataViewObjectPropertyIdWithSelectorV1_1_0>;
};

export const DataViewObjectDefinitionUpdatesV1_1_0: Schema.Codec<DataViewObjectDefinitionUpdatesV1_1_0> =
  closed({
    merge: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_1_0),
    ),
    remove: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => DataViewObjectPropertyIdWithSelectorV1_1_0),
      ),
    ),
  });

export type DataViewObjectPropertyIdWithSelectorV1_1_0 = {
  readonly object: string;
  readonly property: string;
  readonly selector: SelectorV1_1_0;
};

export const DataViewObjectPropertyIdWithSelectorV1_1_0: Schema.Codec<DataViewObjectPropertyIdWithSelectorV1_1_0> =
  closed({
    object: Schema.String,
    property: Schema.String,
    selector: Schema.suspend(() => SelectorV1_1_0),
  });

export type ProjectionStateV1_1_0 = {} & {
  readonly [key: string]: ReadonlyArray<QueryExpressionContainerV1_1_0>;
};

export const ProjectionStateV1_1_0: Schema.Codec<ProjectionStateV1_1_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
  );

export type ParameterStateByRoleV1_1_0 = {} & {
  readonly [key: string]: ReadonlyArray<ParameterStateV1_1_0>;
};

export const ParameterStateByRoleV1_1_0: Schema.Codec<ParameterStateByRoleV1_1_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => ParameterStateV1_1_0)),
  );

export type ParameterStateV1_1_0 = {
  readonly expr: QueryExpressionContainerV1_1_0;
  readonly index: number;
  readonly length: number;
};

export const ParameterStateV1_1_0: Schema.Codec<ParameterStateV1_1_0> = closed({
  expr: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  index: Schema.Finite,
  length: Schema.Finite,
});

export type HighlightStateV1_1_0 = {
  readonly selection:
    DecomposedSelectorsV1_1_0 | ReadonlyArray<SelectorsByColumnV1_1_0>;
  readonly filterExpressionMetadata?: Schema.Json;
};

export const HighlightStateV1_1_0: Schema.Codec<HighlightStateV1_1_0> = closed({
  selection: Schema.Union([
    Schema.suspend(() => DecomposedSelectorsV1_1_0),
    Schema.Array(Schema.suspend(() => SelectorsByColumnV1_1_0)),
  ]),
  filterExpressionMetadata: Schema.optionalKey(Schema.Json),
});

export type DecomposedSelectorsV1_1_0 = {
  readonly decomposedIdentities?: DecomposedIdentitiesV1_1_0;
  readonly queryNameMap?: ReadonlyArray<{
    readonly [key: string]: ReadonlyArray<number>;
  }>;
  readonly queryNames?: ReadonlyArray<string>;
  readonly metadata?: ReadonlyArray<ReadonlyArray<string>>;
  readonly id?: ReadonlyArray<string>;
};

export const DecomposedSelectorsV1_1_0: Schema.Codec<DecomposedSelectorsV1_1_0> =
  closed({
    decomposedIdentities: Schema.optionalKey(
      Schema.suspend(() => DecomposedIdentitiesV1_1_0),
    ),
    queryNameMap: Schema.optionalKey(
      Schema.Array(numericDictionary(Schema.Array(Schema.Finite))),
    ),
    queryNames: Schema.optionalKey(Schema.Array(Schema.String)),
    metadata: Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))),
    id: Schema.optionalKey(Schema.Array(Schema.String)),
  });

export type DecomposedIdentitiesV1_1_0 = {
  readonly values: ReadonlyArray<
    ReadonlyArray<{
      readonly [key: string]: ReadonlyArray<QueryExpressionContainerV1_1_0>;
    }>
  >;
  readonly columns: ReadonlyArray<DecomposedTreeQueryExpressionContainerV1_1_0>;
};

export const DecomposedIdentitiesV1_1_0: Schema.Codec<DecomposedIdentitiesV1_1_0> =
  closed({
    values: Schema.Array(
      Schema.Array(
        numericDictionary(
          Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
        ),
      ),
    ),
    columns: Schema.Array(
      Schema.suspend(() => DecomposedTreeQueryExpressionContainerV1_1_0),
    ),
  });

export type DecomposedTreeQueryExpressionContainerV1_1_0 = {
  readonly left?: DecomposedTreeQueryExpressionContainerV1_1_0;
  readonly right?: DecomposedTreeQueryExpressionContainerV1_1_0;
  readonly value?: QueryExpressionContainerV1_1_0;
};

export const DecomposedTreeQueryExpressionContainerV1_1_0: Schema.Codec<DecomposedTreeQueryExpressionContainerV1_1_0> =
  closed({
    left: Schema.optionalKey(
      Schema.suspend(() => DecomposedTreeQueryExpressionContainerV1_1_0),
    ),
    right: Schema.optionalKey(
      Schema.suspend(() => DecomposedTreeQueryExpressionContainerV1_1_0),
    ),
    value: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_1_0),
    ),
  });

export type SelectorsByColumnV1_1_0 = {
  readonly dataMap?: SelectorsForColumnV1_1_0;
  readonly metadata?: ReadonlyArray<string>;
  readonly id?: string;
};

export const SelectorsByColumnV1_1_0: Schema.Codec<SelectorsByColumnV1_1_0> =
  closed({
    dataMap: Schema.optionalKey(Schema.suspend(() => SelectorsForColumnV1_1_0)),
    metadata: Schema.optionalKey(Schema.Array(Schema.String)),
    id: Schema.optionalKey(Schema.String),
  });

export type SelectorsForColumnV1_1_0 = {} & {
  readonly [key: string]: ReadonlyArray<DataRepetitionSelectorV1_1_0>;
};

export const SelectorsForColumnV1_1_0: Schema.Codec<SelectorsForColumnV1_1_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => DataRepetitionSelectorV1_1_0)),
  );

export type BookmarkV1_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.1.0/schema.json";
  readonly displayName: string;
  readonly name: string;
  readonly options?: BookmarkOptions;
  readonly explorationState: ExplorationStateV1_1_0;
};

export const BookmarkV1_1_0: Schema.Codec<BookmarkV1_1_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.1.0/schema.json",
  ),
  displayName: Schema.String,
  name: Schema.String,
  options: Schema.optionalKey(Schema.suspend(() => BookmarkOptions)),
  explorationState: Schema.suspend(() => ExplorationStateV1_1_0),
});

export const BookmarkDefinitionsV1_1_0 = {
  BookmarkOptions: BookmarkOptions,
  ExplorationState: ExplorationStateV1_1_0,
  FiltersState: FiltersStateV1_1_0,
  FilterContainerState: FilterContainerStateV1_1_0,
  SectionState: SectionStateV1_1_0,
  VisualContainerState: VisualContainerStateV1_1_0,
  SingleVisualConfigState: SingleVisualConfigStateV1_1_0,
  DataViewObjectDefinitionUpdates: DataViewObjectDefinitionUpdatesV1_1_0,
  DataViewObjectPropertyIdWithSelector:
    DataViewObjectPropertyIdWithSelectorV1_1_0,
  ProjectionState: ProjectionStateV1_1_0,
  ParameterStateByRole: ParameterStateByRoleV1_1_0,
  ParameterState: ParameterStateV1_1_0,
  VisualContainerDisplayState: VisualContainerDisplayState,
  VisualContainerDisplayMode: VisualContainerDisplayMode,
  HighlightState: HighlightStateV1_1_0,
  DecomposedSelectors: DecomposedSelectorsV1_1_0,
  DecomposedIdentities: DecomposedIdentitiesV1_1_0,
  "DecomposedTree<QueryExpressionContainer>":
    DecomposedTreeQueryExpressionContainerV1_1_0,
  SelectorsByColumn: SelectorsByColumnV1_1_0,
  SelectorsForColumn: SelectorsForColumnV1_1_0,
  VisualContainerGroupState: VisualContainerGroupState,
} as const;

export {
  BookmarkOptions as BookmarkBookmarkOptionsV1_1_0,
  VisualContainerDisplayState as BookmarkVisualContainerDisplayStateV1_1_0,
  VisualContainerDisplayMode as BookmarkVisualContainerDisplayModeV1_1_0,
  VisualContainerGroupState as BookmarkVisualContainerGroupStateV1_1_0,
} from "./shared.js";

export {
  ExplorationStateV1_1_0 as BookmarkExplorationStateV1_1_0,
  FiltersStateV1_1_0 as BookmarkFiltersStateV1_1_0,
  FilterContainerStateV1_1_0 as BookmarkFilterContainerStateV1_1_0,
  SectionStateV1_1_0 as BookmarkSectionStateV1_1_0,
  VisualContainerStateV1_1_0 as BookmarkVisualContainerStateV1_1_0,
  SingleVisualConfigStateV1_1_0 as BookmarkSingleVisualConfigStateV1_1_0,
  DataViewObjectDefinitionUpdatesV1_1_0 as BookmarkDataViewObjectDefinitionUpdatesV1_1_0,
  DataViewObjectPropertyIdWithSelectorV1_1_0 as BookmarkDataViewObjectPropertyIdWithSelectorV1_1_0,
  ProjectionStateV1_1_0 as BookmarkProjectionStateV1_1_0,
  ParameterStateByRoleV1_1_0 as BookmarkParameterStateByRoleV1_1_0,
  ParameterStateV1_1_0 as BookmarkParameterStateV1_1_0,
  HighlightStateV1_1_0 as BookmarkHighlightStateV1_1_0,
  DecomposedSelectorsV1_1_0 as BookmarkDecomposedSelectorsV1_1_0,
  DecomposedIdentitiesV1_1_0 as BookmarkDecomposedIdentitiesV1_1_0,
  DecomposedTreeQueryExpressionContainerV1_1_0 as BookmarkDecomposedTreeQueryExpressionContainerV1_1_0,
  SelectorsByColumnV1_1_0 as BookmarkSelectorsByColumnV1_1_0,
  SelectorsForColumnV1_1_0 as BookmarkSelectorsForColumnV1_1_0,
};
