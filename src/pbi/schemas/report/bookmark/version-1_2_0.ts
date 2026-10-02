import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  DataViewObjectDefinitionsV1_2_0,
  SelectorV1_2_0,
} from "../formatting-object-definitions/version-1_2_0.js";
import {
  QueryExpressionContainerV1_2_0,
  QuerySortClauseV1_2_0,
} from "../semantic-query/version-1_2_0.js";
import {
  BookmarkOptions,
  BookmarkProjectionStateV1_2_0,
  DecomposedIdentitiesV1_2_0,
  DecomposedSelectorsV1_2_0,
  DecomposedTreeQueryExpressionContainerV1_2_0,
  FilterContainerStateV1_2_0,
  FiltersStateV1_2_0,
  HighlightStateV1_2_0,
  SelectorsByColumnV1_2_0,
  SelectorsForColumnV1_2_0,
  VisualContainerDisplayMode,
  VisualContainerDisplayState,
  VisualContainerGroupState,
} from "./shared.js";

export type ExplorationStateV1_2_0 = {
  readonly version: string;
  readonly activeSection: string;
  readonly filters?: FiltersStateV1_2_0;
  readonly sections: {} & {
    readonly [key: string]: SectionStateV1_2_0;
  };
  readonly objects?: DataViewObjectDefinitionUpdatesV1_2_0;
  readonly dataSourceVariables?: string;
};

export const ExplorationStateV1_2_0: Schema.Codec<ExplorationStateV1_2_0> = closed({
  version: Schema.String,
  activeSection: Schema.String,
  filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_2_0)),
  sections: Schema.Record(
    Schema.String,
    Schema.suspend(() => SectionStateV1_2_0),
  ),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionUpdatesV1_2_0)),
  dataSourceVariables: Schema.optionalKey(Schema.String),
});

export type SectionStateV1_2_0 = {
  readonly filters?: FiltersStateV1_2_0;
  readonly visualContainers: {} & {
    readonly [key: string]: VisualContainerStateV1_2_0;
  };
  readonly visualContainerGroups?: {} & {
    readonly [key: string]: VisualContainerGroupState;
  };
};

export const SectionStateV1_2_0: Schema.Codec<SectionStateV1_2_0> = closed({
  filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_2_0)),
  visualContainers: Schema.Record(
    Schema.String,
    Schema.suspend(() => VisualContainerStateV1_2_0),
  ),
  visualContainerGroups: Schema.optionalKey(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualContainerGroupState),
    ),
  ),
});

export type VisualContainerStateV1_2_0 = {
  readonly filters?: FiltersStateV1_2_0;
  readonly singleVisual?: SingleVisualConfigStateV1_2_0;
  readonly highlight?: HighlightStateV1_2_0;
};

export const VisualContainerStateV1_2_0: Schema.Codec<VisualContainerStateV1_2_0> = closed({
  filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_2_0)),
  singleVisual: Schema.optionalKey(Schema.suspend(() => SingleVisualConfigStateV1_2_0)),
  highlight: Schema.optionalKey(Schema.suspend(() => HighlightStateV1_2_0)),
});

export type SingleVisualConfigStateV1_2_0 = {
  readonly visualType?: string;
  readonly autoSelectVisualType?: boolean;
  readonly targetType?: string;
  readonly targetAutoSelectVisualType?: boolean;
  readonly objects?: DataViewObjectDefinitionUpdatesV1_2_0;
  readonly orderBy?: ReadonlyArray<QuerySortClauseV1_2_0>;
  readonly activeProjections?: BookmarkProjectionStateV1_2_0;
  readonly projections?: BookmarkProjectionStateV1_2_0;
  readonly parameters?: ParameterStateByRoleV1_2_0;
  readonly display?: VisualContainerDisplayState;
  readonly cachedFilterDisplayItems?: ReadonlyArray<Schema.Json>;
  readonly expansionStates?: ReadonlyArray<Schema.Json>;
  readonly filterExpressionMetadata?: Schema.Json;
  readonly isDrillDisabled?: boolean;
};

export const SingleVisualConfigStateV1_2_0: Schema.Codec<SingleVisualConfigStateV1_2_0> = closed({
  visualType: Schema.optionalKey(Schema.String),
  autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
  targetType: Schema.optionalKey(Schema.String),
  targetAutoSelectVisualType: Schema.optionalKey(Schema.Boolean),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionUpdatesV1_2_0)),
  orderBy: Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortClauseV1_2_0))),
  activeProjections: Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_2_0)),
  projections: Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_2_0)),
  parameters: Schema.optionalKey(Schema.suspend(() => ParameterStateByRoleV1_2_0)),
  display: Schema.optionalKey(Schema.suspend(() => VisualContainerDisplayState)),
  cachedFilterDisplayItems: Schema.optionalKey(Schema.Array(Schema.Json)),
  expansionStates: Schema.optionalKey(Schema.Array(Schema.Json)),
  filterExpressionMetadata: Schema.optionalKey(Schema.Json),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type DataViewObjectDefinitionUpdatesV1_2_0 = {
  readonly merge?: DataViewObjectDefinitionsV1_2_0;
  readonly remove?: ReadonlyArray<DataViewObjectPropertyIdWithSelectorV1_2_0>;
};

export const DataViewObjectDefinitionUpdatesV1_2_0: Schema.Codec<DataViewObjectDefinitionUpdatesV1_2_0> =
  closed({
    merge: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_2_0)),
    remove: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => DataViewObjectPropertyIdWithSelectorV1_2_0)),
    ),
  });

export type DataViewObjectPropertyIdWithSelectorV1_2_0 = {
  readonly object: string;
  readonly property: string;
  readonly selector: SelectorV1_2_0;
};

export const DataViewObjectPropertyIdWithSelectorV1_2_0: Schema.Codec<DataViewObjectPropertyIdWithSelectorV1_2_0> =
  closed({
    object: Schema.String,
    property: Schema.String,
    selector: Schema.suspend(() => SelectorV1_2_0),
  });

export type ParameterStateByRoleV1_2_0 = {} & {
  readonly [key: string]: ReadonlyArray<ParameterStateV1_2_0>;
};

export const ParameterStateByRoleV1_2_0: Schema.Codec<ParameterStateByRoleV1_2_0> = Schema.Record(
  Schema.String,
  Schema.Array(Schema.suspend(() => ParameterStateV1_2_0)),
);

export type ParameterStateV1_2_0 = {
  readonly expr: QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length: number;
};

export const ParameterStateV1_2_0: Schema.Codec<ParameterStateV1_2_0> = closed({
  expr: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  index: Schema.Finite,
  length: Schema.Finite,
});

export const BookmarkDefinitionsV1_2_0 = {
  BookmarkOptions: BookmarkOptions,
  ExplorationState: ExplorationStateV1_2_0,
  FiltersState: FiltersStateV1_2_0,
  FilterContainerState: FilterContainerStateV1_2_0,
  SectionState: SectionStateV1_2_0,
  VisualContainerState: VisualContainerStateV1_2_0,
  SingleVisualConfigState: SingleVisualConfigStateV1_2_0,
  DataViewObjectDefinitionUpdates: DataViewObjectDefinitionUpdatesV1_2_0,
  DataViewObjectPropertyIdWithSelector: DataViewObjectPropertyIdWithSelectorV1_2_0,
  ProjectionState: BookmarkProjectionStateV1_2_0,
  ParameterStateByRole: ParameterStateByRoleV1_2_0,
  ParameterState: ParameterStateV1_2_0,
  VisualContainerDisplayState: VisualContainerDisplayState,
  VisualContainerDisplayMode: VisualContainerDisplayMode,
  HighlightState: HighlightStateV1_2_0,
  DecomposedSelectors: DecomposedSelectorsV1_2_0,
  DecomposedIdentities: DecomposedIdentitiesV1_2_0,
  "DecomposedTree<QueryExpressionContainer>": DecomposedTreeQueryExpressionContainerV1_2_0,
  SelectorsByColumn: SelectorsByColumnV1_2_0,
  SelectorsForColumn: SelectorsForColumnV1_2_0,
  VisualContainerGroupState: VisualContainerGroupState,
} as const;

export type BookmarkV1_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.2.0/schema.json";
  readonly displayName: string;
  readonly name: string;
  readonly options?: BookmarkOptions;
  readonly explorationState: ExplorationStateV1_2_0;
};

export const BookmarkV1_2_0: Schema.Codec<BookmarkV1_2_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.2.0/schema.json",
  ),
  displayName: Schema.String,
  name: Schema.String,
  options: Schema.optionalKey(Schema.suspend(() => BookmarkOptions)),
  explorationState: Schema.suspend(() => ExplorationStateV1_2_0),
});

export {
  ExplorationStateV1_2_0 as BookmarkExplorationStateV1_2_0,
  SectionStateV1_2_0 as BookmarkSectionStateV1_2_0,
  VisualContainerStateV1_2_0 as BookmarkVisualContainerStateV1_2_0,
  SingleVisualConfigStateV1_2_0 as BookmarkSingleVisualConfigStateV1_2_0,
  DataViewObjectDefinitionUpdatesV1_2_0 as BookmarkDataViewObjectDefinitionUpdatesV1_2_0,
  DataViewObjectPropertyIdWithSelectorV1_2_0 as BookmarkDataViewObjectPropertyIdWithSelectorV1_2_0,
  ParameterStateByRoleV1_2_0 as BookmarkParameterStateByRoleV1_2_0,
  ParameterStateV1_2_0 as BookmarkParameterStateV1_2_0,
};

export {
  BookmarkOptions as BookmarkBookmarkOptionsV1_2_0,
  FiltersStateV1_2_0 as BookmarkFiltersStateV1_2_0,
  FilterContainerStateV1_2_0 as BookmarkFilterContainerStateV1_2_0,
  VisualContainerDisplayState as BookmarkVisualContainerDisplayStateV1_2_0,
  VisualContainerDisplayMode as BookmarkVisualContainerDisplayModeV1_2_0,
  HighlightStateV1_2_0 as BookmarkHighlightStateV1_2_0,
  DecomposedSelectorsV1_2_0 as BookmarkDecomposedSelectorsV1_2_0,
  DecomposedIdentitiesV1_2_0 as BookmarkDecomposedIdentitiesV1_2_0,
  DecomposedTreeQueryExpressionContainerV1_2_0 as BookmarkDecomposedTreeQueryExpressionContainerV1_2_0,
  SelectorsByColumnV1_2_0 as BookmarkSelectorsByColumnV1_2_0,
  SelectorsForColumnV1_2_0 as BookmarkSelectorsForColumnV1_2_0,
  VisualContainerGroupState as BookmarkVisualContainerGroupStateV1_2_0,
} from "./shared.js";
