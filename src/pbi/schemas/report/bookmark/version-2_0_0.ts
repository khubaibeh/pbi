import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  DataViewObjectDefinitionsV1_4_0,
  SelectorV1_4_0,
} from "../formatting-object-definitions/version-1_4_0.js";
import { QuerySortClauseV1_3_0 } from "../semantic-query/version-1_3_0.js";
import {
  BookmarkOptions,
  BookmarkProjectionStateV1_4_0,
  DecomposedFilterExpressionMetadataV1_4_0,
  DecomposedIdentitiesV1_4_0,
  DecomposedSelectorsV1_4_0,
  DecomposedTreeQueryExpressionContainerV1_4_0,
  FilterContainerStateV1_4_0,
  FilterExpressionMetadataV1_4_0,
  FilterLabelIdPairV1_4_0,
  FiltersStateV1_4_0,
  HighlightStateV1_4_0,
  IdentityValueMapV1_4_0,
  ParameterStateByRoleV1_4_0,
  ParameterStateV1_4_0,
  SelectorsByColumnV1_4_0,
  SelectorsForColumnV1_4_0,
  VisualContainerDisplayMode,
  VisualContainerDisplayState,
  VisualContainerGroupState,
} from "./shared.js";

export type ExplorationStateV2_0_0 = {
  readonly version: string;
  readonly activeSection: string;
  readonly filters?: FiltersStateV1_4_0;
  readonly sections: {} & {
    readonly [key: string]: SectionStateV2_0_0;
  };
  readonly objects?: DataViewObjectDefinitionUpdatesV2_0_0;
  readonly dataSourceVariables?: string;
};

export const ExplorationStateV2_0_0: Schema.Codec<ExplorationStateV2_0_0> = closed({
  version: Schema.String,
  activeSection: Schema.String,
  filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_4_0)),
  sections: Schema.Record(
    Schema.String,
    Schema.suspend(() => SectionStateV2_0_0),
  ),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionUpdatesV2_0_0)),
  dataSourceVariables: Schema.optionalKey(Schema.String),
});

export type SectionStateV2_0_0 = {
  readonly filters?: FiltersStateV1_4_0;
  readonly visualContainers: {} & {
    readonly [key: string]: VisualContainerStateV2_0_0;
  };
  readonly visualContainerGroups?: {} & {
    readonly [key: string]: VisualContainerGroupState;
  };
};

export const SectionStateV2_0_0: Schema.Codec<SectionStateV2_0_0> = closed({
  filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_4_0)),
  visualContainers: Schema.Record(
    Schema.String,
    Schema.suspend(() => VisualContainerStateV2_0_0),
  ),
  visualContainerGroups: Schema.optionalKey(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualContainerGroupState),
    ),
  ),
});

export type VisualContainerStateV2_0_0 = {
  readonly filters?: FiltersStateV1_4_0;
  readonly singleVisual?: SingleVisualConfigStateV2_0_0;
  readonly highlight?: HighlightStateV1_4_0;
};

export const VisualContainerStateV2_0_0: Schema.Codec<VisualContainerStateV2_0_0> = closed({
  filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_4_0)),
  singleVisual: Schema.optionalKey(Schema.suspend(() => SingleVisualConfigStateV2_0_0)),
  highlight: Schema.optionalKey(Schema.suspend(() => HighlightStateV1_4_0)),
});

export type SingleVisualConfigStateV2_0_0 = {
  readonly visualType?: string;
  readonly autoSelectVisualType?: boolean;
  readonly targetType?: string;
  readonly targetAutoSelectVisualType?: boolean;
  readonly objects?: DataViewObjectDefinitionUpdatesV2_0_0;
  readonly orderBy?: ReadonlyArray<QuerySortClauseV1_3_0>;
  readonly activeProjections?: BookmarkProjectionStateV1_4_0;
  readonly projections?: BookmarkProjectionStateV1_4_0;
  readonly parameters?: ParameterStateByRoleV1_4_0;
  readonly display?: VisualContainerDisplayState;
  readonly cachedFilterDisplayItems?: ReadonlyArray<FilterLabelIdPairV1_4_0>;
  readonly expansionStates?: ReadonlyArray<Schema.Json>;
  readonly filterExpressionMetadata?:
    | FilterExpressionMetadataV1_4_0
    | DecomposedFilterExpressionMetadataV1_4_0;
  readonly isDrillDisabled?: boolean;
};

export const SingleVisualConfigStateV2_0_0: Schema.Codec<SingleVisualConfigStateV2_0_0> = closed({
  visualType: Schema.optionalKey(Schema.String),
  autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
  targetType: Schema.optionalKey(Schema.String),
  targetAutoSelectVisualType: Schema.optionalKey(Schema.Boolean),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionUpdatesV2_0_0)),
  orderBy: Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortClauseV1_3_0))),
  activeProjections: Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_4_0)),
  projections: Schema.optionalKey(Schema.suspend(() => BookmarkProjectionStateV1_4_0)),
  parameters: Schema.optionalKey(Schema.suspend(() => ParameterStateByRoleV1_4_0)),
  display: Schema.optionalKey(Schema.suspend(() => VisualContainerDisplayState)),
  cachedFilterDisplayItems: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => FilterLabelIdPairV1_4_0)),
  ),
  expansionStates: Schema.optionalKey(Schema.Array(Schema.Json)),
  filterExpressionMetadata: Schema.optionalKey(
    Schema.Union([
      Schema.suspend(() => FilterExpressionMetadataV1_4_0),
      Schema.suspend(() => DecomposedFilterExpressionMetadataV1_4_0),
    ]),
  ),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type DataViewObjectDefinitionUpdatesV2_0_0 = {
  readonly merge?: DataViewObjectDefinitionsV1_4_0;
  readonly remove?: ReadonlyArray<DataViewObjectPropertyIdWithSelectorV2_0_0>;
};

export const DataViewObjectDefinitionUpdatesV2_0_0: Schema.Codec<DataViewObjectDefinitionUpdatesV2_0_0> =
  closed({
    merge: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_4_0)),
    remove: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => DataViewObjectPropertyIdWithSelectorV2_0_0)),
    ),
  });

export type DataViewObjectPropertyIdWithSelectorV2_0_0 = {
  readonly object: string;
  readonly property: string;
  readonly selector?: SelectorV1_4_0;
};

export const DataViewObjectPropertyIdWithSelectorV2_0_0: Schema.Codec<DataViewObjectPropertyIdWithSelectorV2_0_0> =
  closed({
    object: Schema.String,
    property: Schema.String,
    selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
  });

export const BookmarkDefinitionsV2_0_0 = {
  BookmarkOptions: BookmarkOptions,
  ExplorationState: ExplorationStateV2_0_0,
  FiltersState: FiltersStateV1_4_0,
  FilterContainerState: FilterContainerStateV1_4_0,
  FilterLabelIdPair: FilterLabelIdPairV1_4_0,
  FilterExpressionMetadata: FilterExpressionMetadataV1_4_0,
  IdentityValueMap: IdentityValueMapV1_4_0,
  DecomposedFilterExpressionMetadata: DecomposedFilterExpressionMetadataV1_4_0,
  DecomposedIdentities: DecomposedIdentitiesV1_4_0,
  "DecomposedTree<QueryExpressionContainer>": DecomposedTreeQueryExpressionContainerV1_4_0,
  SectionState: SectionStateV2_0_0,
  VisualContainerState: VisualContainerStateV2_0_0,
  SingleVisualConfigState: SingleVisualConfigStateV2_0_0,
  DataViewObjectDefinitionUpdates: DataViewObjectDefinitionUpdatesV2_0_0,
  DataViewObjectPropertyIdWithSelector: DataViewObjectPropertyIdWithSelectorV2_0_0,
  ProjectionState: BookmarkProjectionStateV1_4_0,
  ParameterStateByRole: ParameterStateByRoleV1_4_0,
  ParameterState: ParameterStateV1_4_0,
  VisualContainerDisplayState: VisualContainerDisplayState,
  VisualContainerDisplayMode: VisualContainerDisplayMode,
  HighlightState: HighlightStateV1_4_0,
  DecomposedSelectors: DecomposedSelectorsV1_4_0,
  SelectorsByColumn: SelectorsByColumnV1_4_0,
  SelectorsForColumn: SelectorsForColumnV1_4_0,
  VisualContainerGroupState: VisualContainerGroupState,
} as const;

export type BookmarkV2_0_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.0.0/schema.json";
  readonly displayName: string;
  readonly name: string;
  readonly options?: BookmarkOptions;
  readonly explorationState: ExplorationStateV2_0_0;
};

export const BookmarkV2_0_0: Schema.Codec<BookmarkV2_0_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.0.0/schema.json",
  ),
  displayName: Schema.String,
  name: Schema.String,
  options: Schema.optionalKey(Schema.suspend(() => BookmarkOptions)),
  explorationState: Schema.suspend(() => ExplorationStateV2_0_0),
});

export {
  ExplorationStateV2_0_0 as BookmarkExplorationStateV2_0_0,
  SectionStateV2_0_0 as BookmarkSectionStateV2_0_0,
  VisualContainerStateV2_0_0 as BookmarkVisualContainerStateV2_0_0,
  SingleVisualConfigStateV2_0_0 as BookmarkSingleVisualConfigStateV2_0_0,
  DataViewObjectDefinitionUpdatesV2_0_0 as BookmarkDataViewObjectDefinitionUpdatesV2_0_0,
  DataViewObjectPropertyIdWithSelectorV2_0_0 as BookmarkDataViewObjectPropertyIdWithSelectorV2_0_0,
};

export {
  BookmarkOptions as BookmarkBookmarkOptionsV2_0_0,
  FiltersStateV1_4_0 as BookmarkFiltersStateV2_0_0,
  FilterContainerStateV1_4_0 as BookmarkFilterContainerStateV2_0_0,
  FilterLabelIdPairV1_4_0 as BookmarkFilterLabelIdPairV2_0_0,
  FilterExpressionMetadataV1_4_0 as BookmarkFilterExpressionMetadataV2_0_0,
  IdentityValueMapV1_4_0 as BookmarkIdentityValueMapV2_0_0,
  DecomposedFilterExpressionMetadataV1_4_0 as BookmarkDecomposedFilterExpressionMetadataV2_0_0,
  DecomposedIdentitiesV1_4_0 as BookmarkDecomposedIdentitiesV2_0_0,
  DecomposedTreeQueryExpressionContainerV1_4_0 as BookmarkDecomposedTreeQueryExpressionContainerV2_0_0,
  BookmarkProjectionStateV1_4_0 as BookmarkProjectionStateV2_0_0,
  ParameterStateByRoleV1_4_0 as BookmarkParameterStateByRoleV2_0_0,
  ParameterStateV1_4_0 as BookmarkParameterStateV2_0_0,
  VisualContainerDisplayState as BookmarkVisualContainerDisplayStateV2_0_0,
  VisualContainerDisplayMode as BookmarkVisualContainerDisplayModeV2_0_0,
  HighlightStateV1_4_0 as BookmarkHighlightStateV2_0_0,
  DecomposedSelectorsV1_4_0 as BookmarkDecomposedSelectorsV2_0_0,
  SelectorsByColumnV1_4_0 as BookmarkSelectorsByColumnV2_0_0,
  SelectorsForColumnV1_4_0 as BookmarkSelectorsForColumnV2_0_0,
  VisualContainerGroupState as BookmarkVisualContainerGroupStateV2_0_0,
} from "./shared.js";
