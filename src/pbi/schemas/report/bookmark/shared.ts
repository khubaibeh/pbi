import { Schema } from "effect";
import { closed, numericDictionary } from "../shared.js";
import {
  FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0,
  FormattingObjectDefinitionsDefinitionsV1_4_0,
} from "../formatting-object-definitions/shared.js";
import {
  FilterDefinitionV1_2_0,
  FilterDefinitionV1_3_0,
  QueryExpressionContainerV1_2_0,
  QueryExpressionContainerV1_3_0,
} from "../semantic-query/shared.js";

export type BookmarkBookmarkOptions = {
  readonly applyOnlyToTargetVisuals?: boolean;
  readonly targetVisualNames?: ReadonlyArray<string>;
  readonly suppressActiveSection?: boolean;
  readonly suppressData?: boolean;
  readonly suppressDisplay?: boolean;
};

export const BookmarkBookmarkOptions: Schema.Codec<BookmarkBookmarkOptions> = closed({
  applyOnlyToTargetVisuals: Schema.optionalKey(Schema.Boolean),
  targetVisualNames: Schema.optionalKey(Schema.Array(Schema.String)),
  suppressActiveSection: Schema.optionalKey(Schema.Boolean),
  suppressData: Schema.optionalKey(Schema.Boolean),
  suppressDisplay: Schema.optionalKey(Schema.Boolean),
});

export type BookmarkVisualContainerDisplayState = {
  readonly mode: BookmarkVisualContainerDisplayMode;
  readonly maximizedOptions?: {
    readonly dataTable?: "accessible" | "normal";
  };
};

export const BookmarkVisualContainerDisplayState: Schema.Codec<BookmarkVisualContainerDisplayState> =
  closed({
    mode: Schema.suspend(() => BookmarkVisualContainerDisplayMode),
    maximizedOptions: Schema.optionalKey(
      closed({
        dataTable: Schema.optionalKey(Schema.Literals(["accessible", "normal"])),
      }),
    ),
  });

export type BookmarkVisualContainerDisplayMode = "maximize" | "spotlight" | "elevation" | "hidden";

export const BookmarkVisualContainerDisplayMode: Schema.Codec<BookmarkVisualContainerDisplayMode> =
  Schema.Union([
    Schema.Literal("maximize"),
    Schema.Literal("spotlight"),
    Schema.Literal("elevation"),
    Schema.Literal("hidden"),
  ]);

export type BookmarkVisualContainerGroupState = {
  readonly isHidden?: boolean;
  readonly children?: {} & {
    readonly [key: string]: BookmarkVisualContainerGroupState;
  };
};

export const BookmarkVisualContainerGroupState: Schema.Codec<BookmarkVisualContainerGroupState> =
  closed({
    isHidden: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => BookmarkVisualContainerGroupState),
      ),
    ),
  });

export type BookmarkFiltersStateV1_2_0 = {
  readonly byName?: {} & {
    readonly [key: string]: BookmarkFilterContainerStateV1_2_0;
  };
  readonly byExpr?: ReadonlyArray<BookmarkFilterContainerStateV1_2_0>;
  readonly byType?: ReadonlyArray<BookmarkFilterContainerStateV1_2_0>;
  readonly byTransientState?: ReadonlyArray<BookmarkFilterContainerStateV1_2_0>;
};

export const BookmarkFiltersStateV1_2_0: Schema.Codec<BookmarkFiltersStateV1_2_0> = closed({
  byName: Schema.optionalKey(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => BookmarkFilterContainerStateV1_2_0),
    ),
  ),
  byExpr: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_2_0)),
  ),
  byType: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_2_0)),
  ),
  byTransientState: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_2_0)),
  ),
});

export type BookmarkFilterContainerStateV1_2_0 = {
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

export const BookmarkFilterContainerStateV1_2_0: Schema.Codec<BookmarkFilterContainerStateV1_2_0> =
  closed({
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

export type BookmarkDecomposedSelectorsV1_2_0 = {
  readonly decomposedIdentities?: BookmarkDecomposedIdentitiesV1_2_0;
  readonly queryNameMap?: ReadonlyArray<{
    readonly [key: string]: ReadonlyArray<number>;
  }>;
  readonly queryNames?: ReadonlyArray<string>;
  readonly metadata?: ReadonlyArray<ReadonlyArray<string>>;
  readonly id?: ReadonlyArray<string>;
};

export const BookmarkDecomposedSelectorsV1_2_0: Schema.Codec<BookmarkDecomposedSelectorsV1_2_0> =
  closed({
    decomposedIdentities: Schema.optionalKey(
      Schema.suspend(() => BookmarkDecomposedIdentitiesV1_2_0),
    ),
    queryNameMap: Schema.optionalKey(Schema.Array(numericDictionary(Schema.Array(Schema.Finite)))),
    queryNames: Schema.optionalKey(Schema.Array(Schema.String)),
    metadata: Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))),
    id: Schema.optionalKey(Schema.Array(Schema.String)),
  });

export type BookmarkDecomposedIdentitiesV1_2_0 = {
  readonly values: ReadonlyArray<
    ReadonlyArray<{
      readonly [key: string]: ReadonlyArray<QueryExpressionContainerV1_2_0>;
    }>
  >;
  readonly columns: ReadonlyArray<BookmarkDecomposedTreeQueryExpressionContainerV1_2_0>;
};

export const BookmarkDecomposedIdentitiesV1_2_0: Schema.Codec<BookmarkDecomposedIdentitiesV1_2_0> =
  closed({
    values: Schema.Array(
      Schema.Array(
        numericDictionary(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0))),
      ),
    ),
    columns: Schema.Array(
      Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_2_0),
    ),
  });

export type BookmarkDecomposedTreeQueryExpressionContainerV1_2_0 = {
  readonly left?: BookmarkDecomposedTreeQueryExpressionContainerV1_2_0;
  readonly right?: BookmarkDecomposedTreeQueryExpressionContainerV1_2_0;
  readonly value?: QueryExpressionContainerV1_2_0;
};

export const BookmarkDecomposedTreeQueryExpressionContainerV1_2_0: Schema.Codec<BookmarkDecomposedTreeQueryExpressionContainerV1_2_0> =
  closed({
    left: Schema.optionalKey(
      Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_2_0),
    ),
    right: Schema.optionalKey(
      Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_2_0),
    ),
    value: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
  });

export type BookmarkFiltersStateV1_4_0 = {
  readonly byName?: {} & {
    readonly [key: string]: BookmarkFilterContainerStateV1_4_0;
  };
  readonly byExpr?: ReadonlyArray<BookmarkFilterContainerStateV1_4_0>;
  readonly byType?: ReadonlyArray<BookmarkFilterContainerStateV1_4_0>;
  readonly byTransientState?: ReadonlyArray<BookmarkFilterContainerStateV1_4_0>;
};

export const BookmarkFiltersStateV1_4_0: Schema.Codec<BookmarkFiltersStateV1_4_0> = closed({
  byName: Schema.optionalKey(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => BookmarkFilterContainerStateV1_4_0),
    ),
  ),
  byExpr: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_4_0)),
  ),
  byType: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_4_0)),
  ),
  byTransientState: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => BookmarkFilterContainerStateV1_4_0)),
  ),
});

export type BookmarkFilterContainerStateV1_4_0 = {
  readonly name: string;
  readonly type?: string;
  readonly filter?: FilterDefinitionV1_3_0;
  readonly expression?: QueryExpressionContainerV1_3_0;
  readonly restatement?: string;
  readonly howCreated?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  readonly precedence?: 0;
  readonly isTransient?: boolean;
  readonly cachedDisplayNames?: ReadonlyArray<BookmarkFilterLabelIdPairV1_4_0>;
  readonly filterExpressionMetadata?:
    | BookmarkFilterExpressionMetadataV1_4_0
    | BookmarkDecomposedFilterExpressionMetadataV1_4_0;
};

export const BookmarkFilterContainerStateV1_4_0: Schema.Codec<BookmarkFilterContainerStateV1_4_0> =
  closed({
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
      Schema.Array(Schema.suspend(() => BookmarkFilterLabelIdPairV1_4_0)),
    ),
    filterExpressionMetadata: Schema.optionalKey(
      Schema.Union([
        Schema.suspend(() => BookmarkFilterExpressionMetadataV1_4_0),
        Schema.suspend(() => BookmarkDecomposedFilterExpressionMetadataV1_4_0),
      ]),
    ),
  });

export type BookmarkFilterLabelIdPairV1_4_0 = {
  readonly id: FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0;
  readonly displayName: string;
};

export const BookmarkFilterLabelIdPairV1_4_0: Schema.Codec<BookmarkFilterLabelIdPairV1_4_0> =
  closed({
    id: Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_4_0.DataRepetitionSelector),
    displayName: Schema.String,
  });

export type BookmarkFilterExpressionMetadataV1_4_0 = {
  readonly expressions: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly cachedValueItems?: ReadonlyArray<BookmarkIdentityValueMapV1_4_0>;
  readonly jsonFilter?: {
    readonly filterType: Schema.Json;
  };
};

export const BookmarkFilterExpressionMetadataV1_4_0: Schema.Codec<BookmarkFilterExpressionMetadataV1_4_0> =
  closed({
    expressions: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
    cachedValueItems: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => BookmarkIdentityValueMapV1_4_0)),
    ),
    jsonFilter: Schema.optionalKey(closed({ filterType: Schema.Json })),
  });

export type BookmarkIdentityValueMapV1_4_0 = {
  readonly identities: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0>;
  readonly valueMap: {
    readonly [key: string]: string;
  };
};

export const BookmarkIdentityValueMapV1_4_0: Schema.Codec<BookmarkIdentityValueMapV1_4_0> = closed({
  identities: Schema.Array(
    Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_4_0.DataRepetitionSelector),
  ),
  valueMap: numericDictionary(Schema.String),
});

export type BookmarkDecomposedFilterExpressionMetadataV1_4_0 = {
  readonly decomposedIdentities?: BookmarkDecomposedIdentitiesV1_4_0;
  readonly expressions: ReadonlyArray<Schema.Json>;
  readonly valueMap?: ReadonlyArray<{
    readonly [key: string]: string;
  }>;
  readonly jsonFilter?: {
    readonly filterType: Schema.Json;
  };
};

export const BookmarkDecomposedFilterExpressionMetadataV1_4_0: Schema.Codec<BookmarkDecomposedFilterExpressionMetadataV1_4_0> =
  closed({
    decomposedIdentities: Schema.optionalKey(
      Schema.suspend(() => BookmarkDecomposedIdentitiesV1_4_0),
    ),
    expressions: Schema.Array(Schema.Json),
    valueMap: Schema.optionalKey(Schema.Array(numericDictionary(Schema.String))),
    jsonFilter: Schema.optionalKey(closed({ filterType: Schema.Json })),
  });

export type BookmarkDecomposedIdentitiesV1_4_0 = {
  readonly values: ReadonlyArray<
    ReadonlyArray<{
      readonly [key: string]: ReadonlyArray<QueryExpressionContainerV1_3_0>;
    }>
  >;
  readonly columns: ReadonlyArray<BookmarkDecomposedTreeQueryExpressionContainerV1_4_0>;
};

export const BookmarkDecomposedIdentitiesV1_4_0: Schema.Codec<BookmarkDecomposedIdentitiesV1_4_0> =
  closed({
    values: Schema.Array(
      Schema.Array(
        numericDictionary(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0))),
      ),
    ),
    columns: Schema.Array(
      Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_4_0),
    ),
  });

export type BookmarkDecomposedTreeQueryExpressionContainerV1_4_0 = {
  readonly left?: BookmarkDecomposedTreeQueryExpressionContainerV1_4_0;
  readonly right?: BookmarkDecomposedTreeQueryExpressionContainerV1_4_0;
  readonly value?: QueryExpressionContainerV1_3_0;
};

export const BookmarkDecomposedTreeQueryExpressionContainerV1_4_0: Schema.Codec<BookmarkDecomposedTreeQueryExpressionContainerV1_4_0> =
  closed({
    left: Schema.optionalKey(
      Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_4_0),
    ),
    right: Schema.optionalKey(
      Schema.suspend(() => BookmarkDecomposedTreeQueryExpressionContainerV1_4_0),
    ),
    value: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
  });

export type BookmarkProjectionStateV1_4_0 = {} & {
  readonly [key: string]: ReadonlyArray<QueryExpressionContainerV1_3_0>;
};

export const BookmarkProjectionStateV1_4_0: Schema.Codec<BookmarkProjectionStateV1_4_0> =
  Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)));

export type BookmarkParameterStateByRoleV1_4_0 = {} & {
  readonly [key: string]: ReadonlyArray<BookmarkParameterStateV1_4_0>;
};

export const BookmarkParameterStateByRoleV1_4_0: Schema.Codec<BookmarkParameterStateByRoleV1_4_0> =
  Schema.Record(Schema.String, Schema.Array(Schema.suspend(() => BookmarkParameterStateV1_4_0)));

export type BookmarkParameterStateV1_4_0 = {
  readonly expr: QueryExpressionContainerV1_3_0;
  readonly index: number;
  readonly length: number;
  readonly sortDirection?: 1 | 2;
};

export const BookmarkParameterStateV1_4_0: Schema.Codec<BookmarkParameterStateV1_4_0> = closed({
  expr: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  index: Schema.Finite,
  length: Schema.Finite,
  sortDirection: Schema.optionalKey(Schema.Union([Schema.Literal(1), Schema.Literal(2)])),
});

export type BookmarkHighlightStateV1_4_0 = {
  readonly selection:
    | BookmarkDecomposedSelectorsV1_4_0
    | ReadonlyArray<BookmarkSelectorsByColumnV1_4_0>;
  readonly filterExpressionMetadata?:
    | BookmarkFilterExpressionMetadataV1_4_0
    | BookmarkDecomposedFilterExpressionMetadataV1_4_0;
};

export const BookmarkHighlightStateV1_4_0: Schema.Codec<BookmarkHighlightStateV1_4_0> = closed({
  selection: Schema.Union([
    Schema.suspend(() => BookmarkDecomposedSelectorsV1_4_0),
    Schema.Array(Schema.suspend(() => BookmarkSelectorsByColumnV1_4_0)),
  ]),
  filterExpressionMetadata: Schema.optionalKey(
    Schema.Union([
      Schema.suspend(() => BookmarkFilterExpressionMetadataV1_4_0),
      Schema.suspend(() => BookmarkDecomposedFilterExpressionMetadataV1_4_0),
    ]),
  ),
});

export type BookmarkDecomposedSelectorsV1_4_0 = {
  readonly decomposedIdentities?: BookmarkDecomposedIdentitiesV1_4_0;
  readonly queryNameMap?: ReadonlyArray<{
    readonly [key: string]: ReadonlyArray<number>;
  }>;
  readonly queryNames?: ReadonlyArray<string>;
  readonly metadata?: ReadonlyArray<ReadonlyArray<string>>;
  readonly id?: ReadonlyArray<string>;
};

export const BookmarkDecomposedSelectorsV1_4_0: Schema.Codec<BookmarkDecomposedSelectorsV1_4_0> =
  closed({
    decomposedIdentities: Schema.optionalKey(
      Schema.suspend(() => BookmarkDecomposedIdentitiesV1_4_0),
    ),
    queryNameMap: Schema.optionalKey(Schema.Array(numericDictionary(Schema.Array(Schema.Finite)))),
    queryNames: Schema.optionalKey(Schema.Array(Schema.String)),
    metadata: Schema.optionalKey(Schema.Array(Schema.Array(Schema.String))),
    id: Schema.optionalKey(Schema.Array(Schema.String)),
  });

export type BookmarkSelectorsByColumnV1_4_0 = {
  readonly dataMap?: BookmarkSelectorsForColumnV1_4_0;
  readonly metadata?: ReadonlyArray<string>;
  readonly id?: string;
};

export const BookmarkSelectorsByColumnV1_4_0: Schema.Codec<BookmarkSelectorsByColumnV1_4_0> =
  closed({
    dataMap: Schema.optionalKey(Schema.suspend(() => BookmarkSelectorsForColumnV1_4_0)),
    metadata: Schema.optionalKey(Schema.Array(Schema.String)),
    id: Schema.optionalKey(Schema.String),
  });

export type BookmarkSelectorsForColumnV1_4_0 = {} & {
  readonly [key: string]: ReadonlyArray<FormattingObjectDefinitionsDataRepetitionSelectorV1_4_0>;
};

export const BookmarkSelectorsForColumnV1_4_0: Schema.Codec<BookmarkSelectorsForColumnV1_4_0> =
  Schema.Record(
    Schema.String,
    Schema.Array(
      Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_4_0.DataRepetitionSelector),
    ),
  );
