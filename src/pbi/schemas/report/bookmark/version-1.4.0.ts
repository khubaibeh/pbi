import { Schema } from "effect";

import {
  BookmarkOptions,
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
  ProjectionStateV1_4_0,
  SelectorsByColumnV1_4_0,
  SelectorsForColumnV1_4_0,
  VisualContainerDisplayMode,
  VisualContainerDisplayState,
  VisualContainerGroupState,
} from "./shared.js";
import {
  DataViewObjectDefinitionsV1_4_0,
  SelectorV1_4_0,
} from "../formatting-object-definitions/version-1.4.0.js";
import { QuerySortClauseV1_3_0 } from "../semantic-query/version-1.3.0.js";
import { closed } from "../shared.js";

export type ExplorationStateV1_4_0 = {
  readonly version: string;
  readonly activeSection: string;
  readonly filters?: FiltersStateV1_4_0;
  readonly sections: {} & {
    readonly [key: string]: SectionStateV1_4_0;
  };
  readonly objects?: DataViewObjectDefinitionUpdatesV1_4_0;
  readonly dataSourceVariables?: string;
};

export const ExplorationStateV1_4_0: Schema.Codec<ExplorationStateV1_4_0> =
  closed({
    version: Schema.String,
    activeSection: Schema.String,
    filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_4_0)),
    sections: Schema.Record(
      Schema.String,
      Schema.suspend(() => SectionStateV1_4_0),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionUpdatesV1_4_0),
    ),
    dataSourceVariables: Schema.optionalKey(Schema.String),
  });

export type SectionStateV1_4_0 = {
  readonly filters?: FiltersStateV1_4_0;
  readonly visualContainers: {} & {
    readonly [key: string]: VisualContainerStateV1_4_0;
  };
  readonly visualContainerGroups?: {} & {
    readonly [key: string]: VisualContainerGroupState;
  };
};

export const SectionStateV1_4_0: Schema.Codec<SectionStateV1_4_0> = closed({
  filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_4_0)),
  visualContainers: Schema.Record(
    Schema.String,
    Schema.suspend(() => VisualContainerStateV1_4_0),
  ),
  visualContainerGroups: Schema.optionalKey(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualContainerGroupState),
    ),
  ),
});

export type VisualContainerStateV1_4_0 = {
  readonly filters?: FiltersStateV1_4_0;
  readonly singleVisual?: SingleVisualConfigStateV1_4_0;
  readonly highlight?: HighlightStateV1_4_0;
};

export const VisualContainerStateV1_4_0: Schema.Codec<VisualContainerStateV1_4_0> =
  closed({
    filters: Schema.optionalKey(Schema.suspend(() => FiltersStateV1_4_0)),
    singleVisual: Schema.optionalKey(
      Schema.suspend(() => SingleVisualConfigStateV1_4_0),
    ),
    highlight: Schema.optionalKey(Schema.suspend(() => HighlightStateV1_4_0)),
  });

export type SingleVisualConfigStateV1_4_0 = {
  readonly visualType?: string;
  readonly autoSelectVisualType?: boolean;
  readonly targetType?: string;
  readonly targetAutoSelectVisualType?: boolean;
  readonly objects?: DataViewObjectDefinitionUpdatesV1_4_0;
  readonly orderBy?: ReadonlyArray<QuerySortClauseV1_3_0>;
  readonly activeProjections?: ProjectionStateV1_4_0;
  readonly projections?: ProjectionStateV1_4_0;
  readonly parameters?: ParameterStateByRoleV1_4_0;
  readonly display?: VisualContainerDisplayState;
  readonly cachedFilterDisplayItems?: ReadonlyArray<FilterLabelIdPairV1_4_0>;
  readonly expansionStates?: ReadonlyArray<Schema.Json>;
  readonly filterExpressionMetadata?:
    FilterExpressionMetadataV1_4_0 | DecomposedFilterExpressionMetadataV1_4_0;
  readonly isDrillDisabled?: boolean;
};

export const SingleVisualConfigStateV1_4_0: Schema.Codec<SingleVisualConfigStateV1_4_0> =
  closed({
    visualType: Schema.optionalKey(Schema.String),
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    targetType: Schema.optionalKey(Schema.String),
    targetAutoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionUpdatesV1_4_0),
    ),
    orderBy: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QuerySortClauseV1_3_0)),
    ),
    activeProjections: Schema.optionalKey(
      Schema.suspend(() => ProjectionStateV1_4_0),
    ),
    projections: Schema.optionalKey(
      Schema.suspend(() => ProjectionStateV1_4_0),
    ),
    parameters: Schema.optionalKey(
      Schema.suspend(() => ParameterStateByRoleV1_4_0),
    ),
    display: Schema.optionalKey(
      Schema.suspend(() => VisualContainerDisplayState),
    ),
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

export type DataViewObjectDefinitionUpdatesV1_4_0 = {
  readonly merge?: DataViewObjectDefinitionsV1_4_0;
  readonly remove?: ReadonlyArray<DataViewObjectPropertyIdWithSelectorV1_4_0>;
};

export const DataViewObjectDefinitionUpdatesV1_4_0: Schema.Codec<DataViewObjectDefinitionUpdatesV1_4_0> =
  closed({
    merge: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_4_0),
    ),
    remove: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => DataViewObjectPropertyIdWithSelectorV1_4_0),
      ),
    ),
  });

export type DataViewObjectPropertyIdWithSelectorV1_4_0 = {
  readonly object: string;
  readonly property: string;
  readonly selector: SelectorV1_4_0;
};

export const DataViewObjectPropertyIdWithSelectorV1_4_0: Schema.Codec<DataViewObjectPropertyIdWithSelectorV1_4_0> =
  closed({
    object: Schema.String,
    property: Schema.String,
    selector: Schema.suspend(() => SelectorV1_4_0),
  });

export type BookmarkV1_4_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.4.0/schema.json";
  readonly displayName: string;
  readonly name: string;
  readonly options?: BookmarkOptions;
  readonly explorationState: ExplorationStateV1_4_0;
};

export const BookmarkV1_4_0: Schema.Codec<BookmarkV1_4_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.4.0/schema.json",
  ),
  displayName: Schema.String,
  name: Schema.String,
  options: Schema.optionalKey(Schema.suspend(() => BookmarkOptions)),
  explorationState: Schema.suspend(() => ExplorationStateV1_4_0),
});

export const BookmarkDefinitionsV1_4_0 = {
  BookmarkOptions: BookmarkOptions,
  ExplorationState: ExplorationStateV1_4_0,
  FiltersState: FiltersStateV1_4_0,
  FilterContainerState: FilterContainerStateV1_4_0,
  FilterLabelIdPair: FilterLabelIdPairV1_4_0,
  FilterExpressionMetadata: FilterExpressionMetadataV1_4_0,
  IdentityValueMap: IdentityValueMapV1_4_0,
  DecomposedFilterExpressionMetadata: DecomposedFilterExpressionMetadataV1_4_0,
  DecomposedIdentities: DecomposedIdentitiesV1_4_0,
  "DecomposedTree<QueryExpressionContainer>":
    DecomposedTreeQueryExpressionContainerV1_4_0,
  SectionState: SectionStateV1_4_0,
  VisualContainerState: VisualContainerStateV1_4_0,
  SingleVisualConfigState: SingleVisualConfigStateV1_4_0,
  DataViewObjectDefinitionUpdates: DataViewObjectDefinitionUpdatesV1_4_0,
  DataViewObjectPropertyIdWithSelector:
    DataViewObjectPropertyIdWithSelectorV1_4_0,
  ProjectionState: ProjectionStateV1_4_0,
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

export {
  BookmarkOptions as BookmarkBookmarkOptionsV1_4_0,
  FiltersStateV1_4_0 as BookmarkFiltersStateV1_4_0,
  FilterContainerStateV1_4_0 as BookmarkFilterContainerStateV1_4_0,
  FilterLabelIdPairV1_4_0 as BookmarkFilterLabelIdPairV1_4_0,
  FilterExpressionMetadataV1_4_0 as BookmarkFilterExpressionMetadataV1_4_0,
  IdentityValueMapV1_4_0 as BookmarkIdentityValueMapV1_4_0,
  DecomposedFilterExpressionMetadataV1_4_0 as BookmarkDecomposedFilterExpressionMetadataV1_4_0,
  DecomposedIdentitiesV1_4_0 as BookmarkDecomposedIdentitiesV1_4_0,
  DecomposedTreeQueryExpressionContainerV1_4_0 as BookmarkDecomposedTreeQueryExpressionContainerV1_4_0,
  ProjectionStateV1_4_0 as BookmarkProjectionStateV1_4_0,
  ParameterStateByRoleV1_4_0 as BookmarkParameterStateByRoleV1_4_0,
  ParameterStateV1_4_0 as BookmarkParameterStateV1_4_0,
  VisualContainerDisplayState as BookmarkVisualContainerDisplayStateV1_4_0,
  VisualContainerDisplayMode as BookmarkVisualContainerDisplayModeV1_4_0,
  HighlightStateV1_4_0 as BookmarkHighlightStateV1_4_0,
  DecomposedSelectorsV1_4_0 as BookmarkDecomposedSelectorsV1_4_0,
  SelectorsByColumnV1_4_0 as BookmarkSelectorsByColumnV1_4_0,
  SelectorsForColumnV1_4_0 as BookmarkSelectorsForColumnV1_4_0,
  VisualContainerGroupState as BookmarkVisualContainerGroupStateV1_4_0,
} from "./shared.js";

export {
  ExplorationStateV1_4_0 as BookmarkExplorationStateV1_4_0,
  SectionStateV1_4_0 as BookmarkSectionStateV1_4_0,
  VisualContainerStateV1_4_0 as BookmarkVisualContainerStateV1_4_0,
  SingleVisualConfigStateV1_4_0 as BookmarkSingleVisualConfigStateV1_4_0,
  DataViewObjectDefinitionUpdatesV1_4_0 as BookmarkDataViewObjectDefinitionUpdatesV1_4_0,
  DataViewObjectPropertyIdWithSelectorV1_4_0 as BookmarkDataViewObjectPropertyIdWithSelectorV1_4_0,
};
