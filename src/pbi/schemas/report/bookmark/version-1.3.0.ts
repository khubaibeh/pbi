import { Schema } from "effect";
import {
  BookmarkOptions,
  DecomposedIdentitiesV1_2_0,
  DecomposedSelectorsV1_2_0,
  DecomposedTreeQueryExpressionContainerV1_2_0,
  FilterContainerStateV1_2_0,
  FiltersStateV1_2_0,
  HighlightStateV1_2_0,
  ProjectionStateV1_2_0,
  SelectorsByColumnV1_2_0,
  SelectorsForColumnV1_2_0,
  VisualContainerDisplayMode,
  VisualContainerDisplayState,
  VisualContainerGroupState,
} from "./shared.js";
import {
  DataViewObjectDefinitionsV1_3_0,
  SelectorV1_3_0,
} from "../formatting-object-definitions/version-1.3.0.js";
import {
  QueryExpressionContainerV1_2_0,
  QuerySortClauseV1_2_0,
} from "../semantic-query/shared.js";
import { closed } from "../shared.js";

export type ExplorationStateV1_3_0 = {
  readonly version: string;
  readonly activeSection: string;
  readonly filters?: FiltersStateV1_2_0;
  readonly sections: {} & {
    readonly [key: string]: SectionStateV1_3_0;
  };
  readonly objects?: DataViewObjectDefinitionUpdatesV1_3_0;
  readonly dataSourceVariables?: string;
};

export const ExplorationStateV1_3_0: Schema.Codec<ExplorationStateV1_3_0> =
  closed({
    version: Schema.String,
    activeSection: Schema.String,
    filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_2_0)),
    sections: Schema.Record(
      Schema.String,
      Schema.suspend(() => SectionStateV1_3_0),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionUpdatesV1_3_0),
    ),
    dataSourceVariables: Schema.optionalKey(Schema.String),
  });

export type SectionStateV1_3_0 = {
  readonly filters?: FiltersStateV1_2_0;
  readonly visualContainers: {} & {
    readonly [key: string]: VisualContainerStateV1_3_0;
  };
  readonly visualContainerGroups?: {} & {
    readonly [key: string]: VisualContainerGroupState;
  };
};

export const SectionStateV1_3_0: Schema.Codec<SectionStateV1_3_0> = closed({
  filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_2_0)),
  visualContainers: Schema.Record(
    Schema.String,
    Schema.suspend(() => VisualContainerStateV1_3_0),
  ),
  visualContainerGroups: Schema.optionalKey(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualContainerGroupState),
    ),
  ),
});

export type VisualContainerStateV1_3_0 = {
  readonly filters?: FiltersStateV1_2_0;
  readonly singleVisual?: SingleVisualConfigStateV1_3_0;
  readonly highlight?: HighlightStateV1_2_0;
};

export const VisualContainerStateV1_3_0: Schema.Codec<VisualContainerStateV1_3_0> =
  closed({
    filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_2_0)),
    singleVisual: Schema.optionalKey(
      Schema.suspend(() => SingleVisualConfigStateV1_3_0),
    ),
    highlight: Schema.optionalKey(Schema.suspend(() => HighlightStateV1_2_0)),
  });

export type SingleVisualConfigStateV1_3_0 = {
  readonly visualType?: string;
  readonly autoSelectVisualType?: boolean;
  readonly targetType?: string;
  readonly targetAutoSelectVisualType?: boolean;
  readonly objects?: DataViewObjectDefinitionUpdatesV1_3_0;
  readonly orderBy?: ReadonlyArray<QuerySortClauseV1_2_0>;
  readonly activeProjections?: ProjectionStateV1_2_0;
  readonly projections?: ProjectionStateV1_2_0;
  readonly parameters?: ParameterStateByRoleV1_3_0;
  readonly display?: VisualContainerDisplayState;
  readonly cachedFilterDisplayItems?: ReadonlyArray<Schema.Json>;
  readonly expansionStates?: ReadonlyArray<Schema.Json>;
  readonly filterExpressionMetadata?: Schema.Json;
  readonly isDrillDisabled?: boolean;
};

export const SingleVisualConfigStateV1_3_0: Schema.Codec<SingleVisualConfigStateV1_3_0> =
  closed({
    visualType: Schema.optionalKey(Schema.String),
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    targetType: Schema.optionalKey(Schema.String),
    targetAutoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionUpdatesV1_3_0),
    ),
    orderBy: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QuerySortClauseV1_2_0)),
    ),
    activeProjections: Schema.optionalKey(
      Schema.suspend(() => ProjectionStateV1_2_0),
    ),
    projections: Schema.optionalKey(
      Schema.suspend(() => ProjectionStateV1_2_0),
    ),
    parameters: Schema.optionalKey(
      Schema.suspend(() => ParameterStateByRoleV1_3_0),
    ),
    display: Schema.optionalKey(
      Schema.suspend(() => VisualContainerDisplayState),
    ),
    cachedFilterDisplayItems: Schema.optionalKey(Schema.Array(Schema.Json)),
    expansionStates: Schema.optionalKey(Schema.Array(Schema.Json)),
    filterExpressionMetadata: Schema.optionalKey(Schema.Json),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });

export type DataViewObjectDefinitionUpdatesV1_3_0 = {
  readonly merge?: DataViewObjectDefinitionsV1_3_0;
  readonly remove?: ReadonlyArray<DataViewObjectPropertyIdWithSelectorV1_3_0>;
};

export const DataViewObjectDefinitionUpdatesV1_3_0: Schema.Codec<DataViewObjectDefinitionUpdatesV1_3_0> =
  closed({
    merge: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_3_0),
    ),
    remove: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => DataViewObjectPropertyIdWithSelectorV1_3_0),
      ),
    ),
  });

export type DataViewObjectPropertyIdWithSelectorV1_3_0 = {
  readonly object: string;
  readonly property: string;
  readonly selector: SelectorV1_3_0;
};

export const DataViewObjectPropertyIdWithSelectorV1_3_0: Schema.Codec<DataViewObjectPropertyIdWithSelectorV1_3_0> =
  closed({
    object: Schema.String,
    property: Schema.String,
    selector: Schema.suspend(() => SelectorV1_3_0),
  });

export type ParameterStateByRoleV1_3_0 = {} & {
  readonly [key: string]: ReadonlyArray<ParameterStateV1_3_0>;
};

export const ParameterStateByRoleV1_3_0: Schema.Codec<ParameterStateByRoleV1_3_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(Schema.suspend(() => ParameterStateV1_3_0)),
  );

export type ParameterStateV1_3_0 = {
  readonly expr: QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length: number;
  readonly sortDirection?: Schema.Json;
};

export const ParameterStateV1_3_0: Schema.Codec<ParameterStateV1_3_0> = closed({
  expr: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  index: Schema.Finite,
  length: Schema.Finite,
  sortDirection: Schema.optionalKey(Schema.Json),
});

export type BookmarkV1_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.3.0/schema.json";
  readonly displayName: string;
  readonly name: string;
  readonly options?: BookmarkOptions;
  readonly explorationState: ExplorationStateV1_3_0;
};

export const BookmarkV1_3_0: Schema.Codec<BookmarkV1_3_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.3.0/schema.json",
  ),
  displayName: Schema.String,
  name: Schema.String,
  options: Schema.optionalKey(Schema.suspend(() => BookmarkOptions)),
  explorationState: Schema.suspend(() => ExplorationStateV1_3_0),
});

export const BookmarkDefinitionsV1_3_0 = {
  BookmarkOptions: BookmarkOptions,
  ExplorationState: ExplorationStateV1_3_0,
  FiltersState: FiltersStateV1_2_0,
  FilterContainerState: FilterContainerStateV1_2_0,
  SectionState: SectionStateV1_3_0,
  VisualContainerState: VisualContainerStateV1_3_0,
  SingleVisualConfigState: SingleVisualConfigStateV1_3_0,
  DataViewObjectDefinitionUpdates: DataViewObjectDefinitionUpdatesV1_3_0,
  DataViewObjectPropertyIdWithSelector:
    DataViewObjectPropertyIdWithSelectorV1_3_0,
  ProjectionState: ProjectionStateV1_2_0,
  ParameterStateByRole: ParameterStateByRoleV1_3_0,
  ParameterState: ParameterStateV1_3_0,
  VisualContainerDisplayState: VisualContainerDisplayState,
  VisualContainerDisplayMode: VisualContainerDisplayMode,
  HighlightState: HighlightStateV1_2_0,
  DecomposedSelectors: DecomposedSelectorsV1_2_0,
  DecomposedIdentities: DecomposedIdentitiesV1_2_0,
  "DecomposedTree<QueryExpressionContainer>":
    DecomposedTreeQueryExpressionContainerV1_2_0,
  SelectorsByColumn: SelectorsByColumnV1_2_0,
  SelectorsForColumn: SelectorsForColumnV1_2_0,
  VisualContainerGroupState: VisualContainerGroupState,
} as const;

export {
  BookmarkOptions as BookmarkBookmarkOptionsV1_3_0,
  FiltersStateV1_2_0 as BookmarkFiltersStateV1_3_0,
  FilterContainerStateV1_2_0 as BookmarkFilterContainerStateV1_3_0,
  ProjectionStateV1_2_0 as BookmarkProjectionStateV1_3_0,
  VisualContainerDisplayState as BookmarkVisualContainerDisplayStateV1_3_0,
  VisualContainerDisplayMode as BookmarkVisualContainerDisplayModeV1_3_0,
  HighlightStateV1_2_0 as BookmarkHighlightStateV1_3_0,
  DecomposedSelectorsV1_2_0 as BookmarkDecomposedSelectorsV1_3_0,
  DecomposedIdentitiesV1_2_0 as BookmarkDecomposedIdentitiesV1_3_0,
  DecomposedTreeQueryExpressionContainerV1_2_0 as BookmarkDecomposedTreeQueryExpressionContainerV1_3_0,
  SelectorsByColumnV1_2_0 as BookmarkSelectorsByColumnV1_3_0,
  SelectorsForColumnV1_2_0 as BookmarkSelectorsForColumnV1_3_0,
  VisualContainerGroupState as BookmarkVisualContainerGroupStateV1_3_0,
} from "./shared.js";

export {
  ExplorationStateV1_3_0 as BookmarkExplorationStateV1_3_0,
  SectionStateV1_3_0 as BookmarkSectionStateV1_3_0,
  VisualContainerStateV1_3_0 as BookmarkVisualContainerStateV1_3_0,
  SingleVisualConfigStateV1_3_0 as BookmarkSingleVisualConfigStateV1_3_0,
  DataViewObjectDefinitionUpdatesV1_3_0 as BookmarkDataViewObjectDefinitionUpdatesV1_3_0,
  DataViewObjectPropertyIdWithSelectorV1_3_0 as BookmarkDataViewObjectPropertyIdWithSelectorV1_3_0,
  ParameterStateByRoleV1_3_0 as BookmarkParameterStateByRoleV1_3_0,
  ParameterStateV1_3_0 as BookmarkParameterStateV1_3_0,
};
