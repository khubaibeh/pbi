import { Schema } from "effect";
import { closed, numericDictionary } from "../shared.js";
import { DataRepetitionSelectorV1_2_0 } from "../formatting-object-definitions/shared.js";
import { DataRepetitionSelectorV1_4_0 } from "../formatting-object-definitions/version-1_4_0.js";
import {
  FilterDefinitionV1_2_0,
  QueryExpressionContainerV1_2_0,
} from "../semantic-query/version-1_2_0.js";
import {
  FilterDefinitionV1_3_0,
  QueryExpressionContainerV1_3_0,
} from "../semantic-query/version-1_3_0.js";

export type BookmarkOptions = {
  readonly applyOnlyToTargetVisuals?: boolean;
  readonly targetVisualNames?: ReadonlyArray<string>;
  readonly suppressActiveSection?: boolean;
  readonly suppressData?: boolean;
  readonly suppressDisplay?: boolean;
};

export const BookmarkOptions: Schema.Codec<BookmarkOptions> = closed({
  applyOnlyToTargetVisuals: Schema.optionalKey(Schema.Boolean),
  targetVisualNames: Schema.optionalKey(Schema.Array(Schema.String)),
  suppressActiveSection: Schema.optionalKey(Schema.Boolean),
  suppressData: Schema.optionalKey(Schema.Boolean),
  suppressDisplay: Schema.optionalKey(Schema.Boolean),
});

export type VisualContainerDisplayState = {
  readonly mode: VisualContainerDisplayMode;
  readonly maximizedOptions?: {
    readonly dataTable?: "accessible" | "normal";
  };
};

export const VisualContainerDisplayState: Schema.Codec<VisualContainerDisplayState> = closed({
  mode: Schema.suspend(() => VisualContainerDisplayMode),
  maximizedOptions: Schema.optionalKey(
    closed({
      dataTable: Schema.optionalKey(Schema.Literals(["accessible", "normal"])),
    }),
  ),
});

export type VisualContainerDisplayMode = "maximize" | "spotlight" | "elevation" | "hidden";

export const VisualContainerDisplayMode: Schema.Codec<VisualContainerDisplayMode> = Schema.Union([
  Schema.Literal("maximize"),
  Schema.Literal("spotlight"),
  Schema.Literal("elevation"),
  Schema.Literal("hidden"),
]);

export type VisualContainerGroupState = {
  readonly isHidden?: boolean;
  readonly children?: {} & {
    readonly [key: string]: VisualContainerGroupState;
  };
};

export const VisualContainerGroupState: Schema.Codec<VisualContainerGroupState> = closed({
  isHidden: Schema.optionalKey(Schema.Boolean),
  children: Schema.optionalKey(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualContainerGroupState),
    ),
  ),
});

export type FiltersStateV1_2_0 = {
  readonly byName?: {} & {
    readonly [key: string]: FilterContainerStateV1_2_0;
  };
  readonly byExpr?: ReadonlyArray<FilterContainerStateV1_2_0>;
  readonly byType?: ReadonlyArray<FilterContainerStateV1_2_0>;
  readonly byTransientState?: ReadonlyArray<FilterContainerStateV1_2_0>;
};

export const FiltersStateV1_2_0: Schema.Codec<FiltersStateV1_2_0> = closed({
  byName: Schema.optionalKey(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => FilterContainerStateV1_2_0),
    ),
  ),
  byExpr: Schema.optionalKey(Schema.Array(Schema.suspend(() => FilterContainerStateV1_2_0))),
  byType: Schema.optionalKey(Schema.Array(Schema.suspend(() => FilterContainerStateV1_2_0))),
  byTransientState: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => FilterContainerStateV1_2_0)),
  ),
});

export type FilterContainerStateV1_2_0 = {
  readonly name: string;
  readonly type?: string;
  readonly filter?: FilterDefinitionV1_2_0;
  readonly expression?: QueryExpressionContainerV1_2_0;
  readonly restatement?: string;
  readonly howCreated?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  readonly precedence?: 0;
  readonly isTransient?: boolean;
  readonly cachedDisplayNames?: ReadonlyArray<Schema.Json>;
  readonly filterExpressionMetadata?: Schema.Json;
};

export const FilterContainerStateV1_2_0: Schema.Codec<FilterContainerStateV1_2_0> = closed({
  name: Schema.String,
  type: Schema.optionalKey(Schema.String),
  filter: Schema.optionalKey(Schema.suspend(() => FilterDefinitionV1_2_0)),
  expression: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
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

export type BookmarkProjectionStateV1_2_0 = {} & {
  readonly [key: string]: ReadonlyArray<QueryExpressionContainerV1_2_0>;
};

export const BookmarkProjectionStateV1_2_0: Schema.Codec<BookmarkProjectionStateV1_2_0> =
  Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)));

export type HighlightStateV1_2_0 = {
  readonly selection: DecomposedSelectorsV1_2_0 | ReadonlyArray<SelectorsByColumnV1_2_0>;
  readonly filterExpressionMetadata?: Schema.Json;
};

export const HighlightStateV1_2_0: Schema.Codec<HighlightStateV1_2_0> = closed({
  selection: Schema.Union([
    Schema.suspend(() => DecomposedSelectorsV1_2_0),
    Schema.Array(Schema.suspend(() => SelectorsByColumnV1_2_0)),
  ]),
  filterExpressionMetadata: Schema.optionalKey(Schema.Json),
});

export type DecomposedSelectorsV1_2_0 = {
  readonly decomposedIdentities?: DecomposedIdentitiesV1_2_0;
  readonly queryNameMap?: ReadonlyArray<{
    readonly [key: string]: ReadonlyArray<number>;
  }>;
  readonly queryNames?: ReadonlyArray<string>;
  readonly metadata?: ReadonlyArray<ReadonlyArray<string>>;
  readonly id?: ReadonlyArray<string>;
};

export const DecomposedSelectorsV1_2_0: Schema.Codec<DecomposedSelectorsV1_2_0> = closed({
  decomposedIdentities: Schema.optionalKey(Schema.suspend(() => DecomposedIdentitiesV1_2_0)),
  queryNameMap: Schema.optionalKey(Schema.Array(numericDictionary(Schema.Array(Schema.Finite)))),
  queryNames: Schema.optionalKey(Schema.Array(Schema.String)),
  metadata: Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))),
  id: Schema.optionalKey(Schema.Array(Schema.String)),
});

export type DecomposedIdentitiesV1_2_0 = {
  readonly values: ReadonlyArray<
    ReadonlyArray<{
      readonly [key: string]: ReadonlyArray<QueryExpressionContainerV1_2_0>;
    }>
  >;
  readonly columns: ReadonlyArray<DecomposedTreeQueryExpressionContainerV1_2_0>;
};

export const DecomposedIdentitiesV1_2_0: Schema.Codec<DecomposedIdentitiesV1_2_0> = closed({
  values: Schema.Array(
    Schema.Array(
      numericDictionary(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0))),
    ),
  ),
  columns: Schema.Array(Schema.suspend(() => DecomposedTreeQueryExpressionContainerV1_2_0)),
});

export type DecomposedTreeQueryExpressionContainerV1_2_0 = {
  readonly left?: DecomposedTreeQueryExpressionContainerV1_2_0;
  readonly right?: DecomposedTreeQueryExpressionContainerV1_2_0;
  readonly value?: QueryExpressionContainerV1_2_0;
};

export const DecomposedTreeQueryExpressionContainerV1_2_0: Schema.Codec<DecomposedTreeQueryExpressionContainerV1_2_0> =
  closed({
    left: Schema.optionalKey(Schema.suspend(() => DecomposedTreeQueryExpressionContainerV1_2_0)),
    right: Schema.optionalKey(Schema.suspend(() => DecomposedTreeQueryExpressionContainerV1_2_0)),
    value: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
  });

export type SelectorsByColumnV1_2_0 = {
  readonly dataMap?: SelectorsForColumnV1_2_0;
  readonly metadata?: ReadonlyArray<string>;
  readonly id?: string;
};

export const SelectorsByColumnV1_2_0: Schema.Codec<SelectorsByColumnV1_2_0> = closed({
  dataMap: Schema.optionalKey(Schema.suspend(() => SelectorsForColumnV1_2_0)),
  metadata: Schema.optionalKey(Schema.Array(Schema.String)),
  id: Schema.optionalKey(Schema.String),
});

export type SelectorsForColumnV1_2_0 = {} & {
  readonly [key: string]: ReadonlyArray<DataRepetitionSelectorV1_2_0>;
};

export const SelectorsForColumnV1_2_0: Schema.Codec<SelectorsForColumnV1_2_0> = Schema.Record(
  Schema.String,
  Schema.Array(Schema.suspend(() => DataRepetitionSelectorV1_2_0)),
);

export type FiltersStateV1_4_0 = {
  readonly byName?: {} & {
    readonly [key: string]: FilterContainerStateV1_4_0;
  };
  readonly byExpr?: ReadonlyArray<FilterContainerStateV1_4_0>;
  readonly byType?: ReadonlyArray<FilterContainerStateV1_4_0>;
  readonly byTransientState?: ReadonlyArray<FilterContainerStateV1_4_0>;
};

export const FiltersStateV1_4_0: Schema.Codec<FiltersStateV1_4_0> = closed({
  byName: Schema.optionalKey(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => FilterContainerStateV1_4_0),
    ),
  ),
  byExpr: Schema.optionalKey(Schema.Array(Schema.suspend(() => FilterContainerStateV1_4_0))),
  byType: Schema.optionalKey(Schema.Array(Schema.suspend(() => FilterContainerStateV1_4_0))),
  byTransientState: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => FilterContainerStateV1_4_0)),
  ),
});

export type FilterContainerStateV1_4_0 = {
  readonly name: string;
  readonly type?: string;
  readonly filter?: FilterDefinitionV1_3_0;
  readonly expression?: QueryExpressionContainerV1_3_0;
  readonly restatement?: string;
  readonly howCreated?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  readonly precedence?: 0;
  readonly isTransient?: boolean;
  readonly cachedDisplayNames?: ReadonlyArray<FilterLabelIdPairV1_4_0>;
  readonly filterExpressionMetadata?:
    | FilterExpressionMetadataV1_4_0
    | DecomposedFilterExpressionMetadataV1_4_0;
};

export const FilterContainerStateV1_4_0: Schema.Codec<FilterContainerStateV1_4_0> = closed({
  name: Schema.String,
  type: Schema.optionalKey(Schema.String),
  filter: Schema.optionalKey(Schema.suspend(() => FilterDefinitionV1_3_0)),
  expression: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
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
    Schema.Array(Schema.suspend(() => FilterLabelIdPairV1_4_0)),
  ),
  filterExpressionMetadata: Schema.optionalKey(
    Schema.Union([
      Schema.suspend(() => FilterExpressionMetadataV1_4_0),
      Schema.suspend(() => DecomposedFilterExpressionMetadataV1_4_0),
    ]),
  ),
});

export type FilterLabelIdPairV1_4_0 = {
  readonly id: DataRepetitionSelectorV1_4_0;
  readonly displayName: string;
};

export const FilterLabelIdPairV1_4_0: Schema.Codec<FilterLabelIdPairV1_4_0> = closed({
  id: Schema.suspend(() => DataRepetitionSelectorV1_4_0),
  displayName: Schema.String,
});

export type FilterExpressionMetadataV1_4_0 = {
  readonly expressions: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly cachedValueItems?: ReadonlyArray<IdentityValueMapV1_4_0>;
  readonly jsonFilter?: {
    readonly filterType: Schema.Json;
  };
};

export const FilterExpressionMetadataV1_4_0: Schema.Codec<FilterExpressionMetadataV1_4_0> = closed({
  expressions: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
  cachedValueItems: Schema.optionalKey(Schema.Array(Schema.suspend(() => IdentityValueMapV1_4_0))),
  jsonFilter: Schema.optionalKey(closed({ filterType: Schema.Json })),
});

export type IdentityValueMapV1_4_0 = {
  readonly identities: ReadonlyArray<DataRepetitionSelectorV1_4_0>;
  readonly valueMap: {
    readonly [key: string]: string;
  };
};

export const IdentityValueMapV1_4_0: Schema.Codec<IdentityValueMapV1_4_0> = closed({
  identities: Schema.Array(Schema.suspend(() => DataRepetitionSelectorV1_4_0)),
  valueMap: numericDictionary(Schema.String),
});

export type DecomposedFilterExpressionMetadataV1_4_0 = {
  readonly decomposedIdentities?: DecomposedIdentitiesV1_4_0;
  readonly expressions: ReadonlyArray<Schema.Json>;
  readonly valueMap?: ReadonlyArray<{
    readonly [key: string]: string;
  }>;
  readonly jsonFilter?: {
    readonly filterType: Schema.Json;
  };
};

export const DecomposedFilterExpressionMetadataV1_4_0: Schema.Codec<DecomposedFilterExpressionMetadataV1_4_0> =
  closed({
    decomposedIdentities: Schema.optionalKey(Schema.suspend(() => DecomposedIdentitiesV1_4_0)),
    expressions: Schema.Array(Schema.Json),
    valueMap: Schema.optionalKey(Schema.Array(numericDictionary(Schema.String))),
    jsonFilter: Schema.optionalKey(closed({ filterType: Schema.Json })),
  });

export type DecomposedIdentitiesV1_4_0 = {
  readonly values: ReadonlyArray<
    ReadonlyArray<{
      readonly [key: string]: ReadonlyArray<QueryExpressionContainerV1_3_0>;
    }>
  >;
  readonly columns: ReadonlyArray<DecomposedTreeQueryExpressionContainerV1_4_0>;
};

export const DecomposedIdentitiesV1_4_0: Schema.Codec<DecomposedIdentitiesV1_4_0> = closed({
  values: Schema.Array(
    Schema.Array(
      numericDictionary(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0))),
    ),
  ),
  columns: Schema.Array(Schema.suspend(() => DecomposedTreeQueryExpressionContainerV1_4_0)),
});

export type DecomposedTreeQueryExpressionContainerV1_4_0 = {
  readonly left?: DecomposedTreeQueryExpressionContainerV1_4_0;
  readonly right?: DecomposedTreeQueryExpressionContainerV1_4_0;
  readonly value?: QueryExpressionContainerV1_3_0;
};

export const DecomposedTreeQueryExpressionContainerV1_4_0: Schema.Codec<DecomposedTreeQueryExpressionContainerV1_4_0> =
  closed({
    left: Schema.optionalKey(Schema.suspend(() => DecomposedTreeQueryExpressionContainerV1_4_0)),
    right: Schema.optionalKey(Schema.suspend(() => DecomposedTreeQueryExpressionContainerV1_4_0)),
    value: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
  });

export type BookmarkProjectionStateV1_4_0 = {} & {
  readonly [key: string]: ReadonlyArray<QueryExpressionContainerV1_3_0>;
};

export const BookmarkProjectionStateV1_4_0: Schema.Codec<BookmarkProjectionStateV1_4_0> =
  Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)));

export type ParameterStateByRoleV1_4_0 = {} & {
  readonly [key: string]: ReadonlyArray<ParameterStateV1_4_0>;
};

export const ParameterStateByRoleV1_4_0: Schema.Codec<ParameterStateByRoleV1_4_0> = Schema.Record(
  Schema.String,
  Schema.Array(Schema.suspend(() => ParameterStateV1_4_0)),
);

export type ParameterStateV1_4_0 = {
  readonly expr: QueryExpressionContainerV1_3_0;
  readonly index: number;
  readonly length: number;
  readonly sortDirection?: 1 | 2;
};

export const ParameterStateV1_4_0: Schema.Codec<ParameterStateV1_4_0> = closed({
  expr: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  index: Schema.Finite,
  length: Schema.Finite,
  sortDirection: Schema.optionalKey(Schema.Union([Schema.Literal(1), Schema.Literal(2)])),
});

export type HighlightStateV1_4_0 = {
  readonly selection: DecomposedSelectorsV1_4_0 | ReadonlyArray<SelectorsByColumnV1_4_0>;
  readonly filterExpressionMetadata?:
    | FilterExpressionMetadataV1_4_0
    | DecomposedFilterExpressionMetadataV1_4_0;
};

export const HighlightStateV1_4_0: Schema.Codec<HighlightStateV1_4_0> = closed({
  selection: Schema.Union([
    Schema.suspend(() => DecomposedSelectorsV1_4_0),
    Schema.Array(Schema.suspend(() => SelectorsByColumnV1_4_0)),
  ]),
  filterExpressionMetadata: Schema.optionalKey(
    Schema.Union([
      Schema.suspend(() => FilterExpressionMetadataV1_4_0),
      Schema.suspend(() => DecomposedFilterExpressionMetadataV1_4_0),
    ]),
  ),
});

export type DecomposedSelectorsV1_4_0 = {
  readonly decomposedIdentities?: DecomposedIdentitiesV1_4_0;
  readonly queryNameMap?: ReadonlyArray<{
    readonly [key: string]: ReadonlyArray<number>;
  }>;
  readonly queryNames?: ReadonlyArray<string>;
  readonly metadata?: ReadonlyArray<ReadonlyArray<string>>;
  readonly id?: ReadonlyArray<string>;
};

export const DecomposedSelectorsV1_4_0: Schema.Codec<DecomposedSelectorsV1_4_0> = closed({
  decomposedIdentities: Schema.optionalKey(Schema.suspend(() => DecomposedIdentitiesV1_4_0)),
  queryNameMap: Schema.optionalKey(Schema.Array(numericDictionary(Schema.Array(Schema.Finite)))),
  queryNames: Schema.optionalKey(Schema.Array(Schema.String)),
  metadata: Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))),
  id: Schema.optionalKey(Schema.Array(Schema.String)),
});

export type SelectorsByColumnV1_4_0 = {
  readonly dataMap?: SelectorsForColumnV1_4_0;
  readonly metadata?: ReadonlyArray<string>;
  readonly id?: string;
};

export const SelectorsByColumnV1_4_0: Schema.Codec<SelectorsByColumnV1_4_0> = closed({
  dataMap: Schema.optionalKey(Schema.suspend(() => SelectorsForColumnV1_4_0)),
  metadata: Schema.optionalKey(Schema.Array(Schema.String)),
  id: Schema.optionalKey(Schema.String),
});

export type SelectorsForColumnV1_4_0 = {} & {
  readonly [key: string]: ReadonlyArray<DataRepetitionSelectorV1_4_0>;
};

export const SelectorsForColumnV1_4_0: Schema.Codec<SelectorsForColumnV1_4_0> = Schema.Record(
  Schema.String,
  Schema.Array(Schema.suspend(() => DataRepetitionSelectorV1_4_0)),
);
