import { Schema } from "effect";

import {
  ArithmeticOperatorKind,
  ExactlyOne,
  IncludeAllTypes,
  QueryAggregateFunction,
  QueryAnyValueExpression,
  QueryComparisonKind,
  QueryLiteralExpression,
  QueryNativeVisualCalcV1_0_0,
  QueryNowExpression,
  QueryResourcePackageItem,
  QueryRoleRefExpression,
  QuerySelectRefExpression,
  QuerySourceRefExpression,
  QuerySummaryValueRefExpression,
  QueryThemeDataColorExpression,
  QueryTransformOutputRoleRefExpression,
  StandaloneSourceRefExpression,
  TimeUnit,
} from "./shared.js";
import { closed } from "../shared.js";

export type FilterDefinitionV1_0_0 = {
  readonly Version?: 2;
  readonly From: ReadonlyArray<EntitySourceV1_0_0>;
  readonly Where: ReadonlyArray<QueryFilterV1_0_0>;
};

export const FilterDefinitionV1_0_0: Schema.Codec<FilterDefinitionV1_0_0> =
  closed({
    Version: Schema.optionalKey(Schema.Literal(2)),
    From: Schema.Array(Schema.suspend(() => EntitySourceV1_0_0)),
    Where: Schema.Array(Schema.suspend(() => QueryFilterV1_0_0)),
  });

export type QueryFilterV1_0_0 = {
  readonly Target?: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly Condition: QueryExpressionContainerV1_0_0;
  readonly Annotations?: {} & {
    readonly [key: string]: Schema.Json;
  };
};

export const QueryFilterV1_0_0: Schema.Codec<QueryFilterV1_0_0> = closed({
  Target: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
  ),
  Condition: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
});

export type QueryExpressionContainerV1_0_0 = {
  readonly Name?: string;
  readonly NativeReferenceName?: string;
  readonly Annotations?: {} & {
    readonly [key: string]: Schema.Json;
  };
} & ExactlyOne<{
  readonly SourceRef: StandaloneSourceRefExpression | QuerySourceRefExpression;
  readonly Column: QueryColumnExpressionV1_0_0;
  readonly Measure: QueryColumnExpressionV1_0_0;
  readonly Min: QueryMaxExpressionV1_0_0;
  readonly Max: QueryMaxExpressionV1_0_0;
  readonly Aggregation: QueryAggregationExpressionV1_0_0;
  readonly Percentile: QueryPercentileExpressionV1_0_0;
  readonly Hierarchy: QueryHierarchyExpressionV1_0_0;
  readonly HierarchyLevel: QueryHierarchyLevelExpressionV1_0_0;
  readonly PropertyVariationSource: QueryPropertyVariationSourceExpressionV1_0_0;
  readonly Subquery: QuerySubqueryExpressionV1_0_0;
  readonly Discretize: QueryDiscretizeExpressionV1_0_0;
  readonly And: QueryBinaryExpressionV1_0_0;
  readonly Between: QueryBetweenExpressionV1_0_0;
  readonly In: QueryInExpressionV1_0_0;
  readonly Or: QueryBinaryExpressionV1_0_0;
  readonly Comparison: QueryComparisonExpressionV1_0_0;
  readonly Not: QueryNotExpressionV1_0_0;
  readonly Contains: QueryBinaryExpressionV1_0_0;
  readonly StartsWith: QueryBinaryExpressionV1_0_0;
  readonly Exists: QueryNotExpressionV1_0_0;
  readonly Literal: QueryLiteralExpression;
  readonly DateSpan: QueryDateSpanExpressionV1_0_0;
  readonly DateAdd: QueryDateAddExpressionV1_0_0;
  readonly Now: QueryNowExpression;
  readonly DefaultValue: QueryNowExpression;
  readonly AnyValue: QueryAnyValueExpression;
  readonly Arithmetic: QueryArithmeticExpressionV1_0_0;
  readonly Floor: QueryFloorExpressionV1_0_0;
  readonly ScopedEval: QueryScopedEvalExpressionV1_0_0;
  readonly FilteredEval: QueryFilteredEvalExpressionV1_0_0;
  readonly TransformTableRef: QuerySourceRefExpression;
  readonly TransformOutputRoleRef: QueryTransformOutputRoleRefExpression;
  readonly SparklineData: QuerySparklineDataExpressionV1_0_0;
  readonly NativeVisualCalculation: QueryNativeVisualCalcV1_0_0;
  readonly FillRule: QueryFillRuleExpressionV1_0_0;
  readonly GroupRef: QueryGroupRefExpressionV1_0_0;
  readonly ResourcePackageItem: QueryResourcePackageItem;
  readonly RoleRef: QueryRoleRefExpression;
  readonly SummaryValueRef: QuerySummaryValueRefExpression;
  readonly AllRolesRef: QueryNowExpression;
  readonly SelectRef: QuerySelectRefExpression;
  readonly ThemeDataColor: QueryThemeDataColorExpression;
  readonly Conditional: QueryConditionalExpressionV1_0_0;
  readonly NativeMeasure: QueryNativeMeasureV1_0_0;
  readonly NativeColumn: QueryNativeColumnV1_0_0;
}>;

export const QueryExpressionContainerV1_0_0: Schema.Codec<QueryExpressionContainerV1_0_0> =
  Schema.Union([
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      SourceRef: Schema.Union([
        Schema.suspend(() => StandaloneSourceRefExpression),
        Schema.suspend(() => QuerySourceRefExpression),
      ]),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Column: Schema.suspend(() => QueryColumnExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Measure: Schema.suspend(() => QueryColumnExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Min: Schema.suspend(() => QueryMaxExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Max: Schema.suspend(() => QueryMaxExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Aggregation: Schema.suspend(() => QueryAggregationExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Percentile: Schema.suspend(() => QueryPercentileExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Hierarchy: Schema.suspend(() => QueryHierarchyExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      HierarchyLevel: Schema.suspend(() => QueryHierarchyLevelExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      PropertyVariationSource: Schema.suspend(
        () => QueryPropertyVariationSourceExpressionV1_0_0,
      ),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Subquery: Schema.suspend(() => QuerySubqueryExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Discretize: Schema.suspend(() => QueryDiscretizeExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      And: Schema.suspend(() => QueryBinaryExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Between: Schema.suspend(() => QueryBetweenExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      In: Schema.suspend(() => QueryInExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Or: Schema.suspend(() => QueryBinaryExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Comparison: Schema.suspend(() => QueryComparisonExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Not: Schema.suspend(() => QueryNotExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Contains: Schema.suspend(() => QueryBinaryExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      StartsWith: Schema.suspend(() => QueryBinaryExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Exists: Schema.suspend(() => QueryNotExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Literal: Schema.suspend(() => QueryLiteralExpression),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      DateSpan: Schema.suspend(() => QueryDateSpanExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      DateAdd: Schema.suspend(() => QueryDateAddExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Now: Schema.suspend(() => QueryNowExpression),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      DefaultValue: Schema.suspend(() => QueryNowExpression),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      AnyValue: Schema.suspend(() => QueryAnyValueExpression),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Arithmetic: Schema.suspend(() => QueryArithmeticExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Floor: Schema.suspend(() => QueryFloorExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      ScopedEval: Schema.suspend(() => QueryScopedEvalExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      FilteredEval: Schema.suspend(() => QueryFilteredEvalExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      TransformTableRef: Schema.suspend(() => QuerySourceRefExpression),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      TransformOutputRoleRef: Schema.suspend(
        () => QueryTransformOutputRoleRefExpression,
      ),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      SparklineData: Schema.suspend(() => QuerySparklineDataExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      NativeVisualCalculation: Schema.suspend(
        () => QueryNativeVisualCalcV1_0_0,
      ),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      FillRule: Schema.suspend(() => QueryFillRuleExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      GroupRef: Schema.suspend(() => QueryGroupRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      ResourcePackageItem: Schema.suspend(() => QueryResourcePackageItem),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      RoleRef: Schema.suspend(() => QueryRoleRefExpression),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      SummaryValueRef: Schema.suspend(() => QuerySummaryValueRefExpression),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      AllRolesRef: Schema.suspend(() => QueryNowExpression),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      SelectRef: Schema.suspend(() => QuerySelectRefExpression),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      ThemeDataColor: Schema.suspend(() => QueryThemeDataColorExpression),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      Conditional: Schema.suspend(() => QueryConditionalExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      NativeMeasure: Schema.suspend(() => QueryNativeMeasureV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.Record(Schema.String, Schema.Json),
      ),
      NativeColumn: Schema.suspend(() => QueryNativeColumnV1_0_0),
    }),
  ]);

export type QueryNativeColumnV1_0_0 = {
  readonly DataType: number;
  readonly Expression: string;
  readonly Language: string;
  readonly Source: QueryExpressionContainerV1_0_0;
  readonly ExpressionContentCache?: QueryExpressionContentCacheV1_0_0;
  readonly ProposedName?: string;
  readonly Format?: string;
};

export const QueryNativeColumnV1_0_0: Schema.Codec<QueryNativeColumnV1_0_0> =
  closed({
    DataType: Schema.Finite,
    Expression: Schema.String,
    Language: Schema.String,
    Source: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    ExpressionContentCache: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContentCacheV1_0_0),
    ),
    ProposedName: Schema.optionalKey(Schema.String),
    Format: Schema.optionalKey(Schema.String),
  });

export type QueryExpressionContentCacheV1_0_0 = {
  readonly Dependencies?: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly UnrecognizedIdentifiers?: boolean;
};

export const QueryExpressionContentCacheV1_0_0: Schema.Codec<QueryExpressionContentCacheV1_0_0> =
  closed({
    Dependencies: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
    ),
    UnrecognizedIdentifiers: Schema.optionalKey(Schema.Boolean),
  });

export type QueryNativeMeasureV1_0_0 = {
  readonly DataType: number;
  readonly Expression: string;
  readonly Language: "dax";
  readonly ExpressionContentCache?: QueryExpressionContentCacheV1_0_0;
  readonly ProposedName?: string;
  readonly Format?: string;
};

export const QueryNativeMeasureV1_0_0: Schema.Codec<QueryNativeMeasureV1_0_0> =
  closed({
    DataType: Schema.Finite,
    Expression: Schema.String,
    Language: Schema.Literal("dax"),
    ExpressionContentCache: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContentCacheV1_0_0),
    ),
    ProposedName: Schema.optionalKey(Schema.String),
    Format: Schema.optionalKey(Schema.String),
  });

export type QueryConditionalExpressionV1_0_0 = {
  readonly Cases: ReadonlyArray<QueryCaseV1_0_0>;
  readonly DefaultValue?: QueryExpressionContainerV1_0_0;
};

export const QueryConditionalExpressionV1_0_0: Schema.Codec<QueryConditionalExpressionV1_0_0> =
  closed({
    Cases: Schema.Array(Schema.suspend(() => QueryCaseV1_0_0)),
    DefaultValue: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_0_0),
    ),
  });

export type QueryCaseV1_0_0 = {
  readonly Condition: QueryExpressionContainerV1_0_0;
  readonly Value: QueryExpressionContainerV1_0_0;
};

export const QueryCaseV1_0_0: Schema.Codec<QueryCaseV1_0_0> = closed({
  Condition: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  Value: Schema.suspend(() => QueryExpressionContainerV1_0_0),
});

export type QueryGroupRefExpressionV1_0_0 = {
  readonly GroupedColumns: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly Property: string;
};

export const QueryGroupRefExpressionV1_0_0: Schema.Codec<QueryGroupRefExpressionV1_0_0> =
  closed({
    GroupedColumns: Schema.Array(
      Schema.suspend(() => QueryExpressionContainerV1_0_0),
    ),
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Property: Schema.String,
  });

export type QueryFillRuleExpressionV1_0_0 = {
  readonly Input: QueryExpressionContainerV1_0_0;
  readonly FillRule: Schema.Json;
};

export const QueryFillRuleExpressionV1_0_0: Schema.Codec<QueryFillRuleExpressionV1_0_0> =
  closed({
    Input: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    FillRule: Schema.Json,
  });

export type QuerySparklineDataExpressionV1_0_0 = {
  readonly Measure: QueryExpressionContainerV1_0_0;
  readonly Groupings: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly PointsPerSparkline?: 52;
};

export const QuerySparklineDataExpressionV1_0_0: Schema.Codec<QuerySparklineDataExpressionV1_0_0> =
  closed({
    Measure: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Groupings: Schema.Array(
      Schema.suspend(() => QueryExpressionContainerV1_0_0),
    ),
    PointsPerSparkline: Schema.optionalKey(Schema.Literal(52)),
  });

export type QueryFilteredEvalExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly Filters: ReadonlyArray<QueryFilterV1_0_0>;
};

export const QueryFilteredEvalExpressionV1_0_0: Schema.Codec<QueryFilteredEvalExpressionV1_0_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Filters: Schema.Array(Schema.suspend(() => QueryFilterV1_0_0)),
  });

export type QueryScopedEvalExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly Scope: ReadonlyArray<QueryExpressionContainerV1_0_0>;
};

export const QueryScopedEvalExpressionV1_0_0: Schema.Codec<QueryScopedEvalExpressionV1_0_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Scope: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
  });

export type QueryFloorExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly Size: number;
  readonly TimeUnit?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

export const QueryFloorExpressionV1_0_0: Schema.Codec<QueryFloorExpressionV1_0_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Size: Schema.Finite,
    TimeUnit: Schema.optionalKey(
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
  });

export type QueryArithmeticExpressionV1_0_0 = {
  readonly Left: QueryExpressionContainerV1_0_0;
  readonly Right: QueryExpressionContainerV1_0_0;
  readonly Operator: ArithmeticOperatorKind;
};

export const QueryArithmeticExpressionV1_0_0: Schema.Codec<QueryArithmeticExpressionV1_0_0> =
  closed({
    Left: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Operator: Schema.suspend(() => ArithmeticOperatorKind),
  });

export type QueryDateAddExpressionV1_0_0 = {
  readonly Amount: number;
  readonly TimeUnit: TimeUnit;
  readonly Expression: QueryExpressionContainerV1_0_0;
};

export const QueryDateAddExpressionV1_0_0: Schema.Codec<QueryDateAddExpressionV1_0_0> =
  closed({
    Amount: Schema.Finite,
    TimeUnit: Schema.suspend(() => TimeUnit),
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  });

export type QueryDateSpanExpressionV1_0_0 = {
  readonly TimeUnit: TimeUnit;
  readonly Expression: QueryExpressionContainerV1_0_0;
};

export const QueryDateSpanExpressionV1_0_0: Schema.Codec<QueryDateSpanExpressionV1_0_0> =
  closed({
    TimeUnit: Schema.suspend(() => TimeUnit),
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  });

export type QueryNotExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
};

export const QueryNotExpressionV1_0_0: Schema.Codec<QueryNotExpressionV1_0_0> =
  closed({ Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0) });

export type QueryBinaryExpressionV1_0_0 = {
  readonly Left: QueryExpressionContainerV1_0_0;
  readonly Right: QueryExpressionContainerV1_0_0;
};

export const QueryBinaryExpressionV1_0_0: Schema.Codec<QueryBinaryExpressionV1_0_0> =
  closed({
    Left: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  });

export type QueryComparisonExpressionV1_0_0 = {
  readonly ComparisonKind: QueryComparisonKind;
  readonly Left: QueryExpressionContainerV1_0_0;
  readonly Right: QueryExpressionContainerV1_0_0;
};

export const QueryComparisonExpressionV1_0_0: Schema.Codec<QueryComparisonExpressionV1_0_0> =
  closed({
    ComparisonKind: Schema.suspend(() => QueryComparisonKind),
    Left: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  });

export type QueryInExpressionV1_0_0 = {
  readonly Expressions: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly Values?: ReadonlyArray<
    ReadonlyArray<QueryExpressionContainerV1_0_0>
  >;
  readonly Table?: QueryExpressionContainerV1_0_0;
};

export const QueryInExpressionV1_0_0: Schema.Codec<QueryInExpressionV1_0_0> =
  closed({
    Expressions: Schema.Array(
      Schema.suspend(() => QueryExpressionContainerV1_0_0),
    ),
    Values: Schema.optionalKey(
      Schema.Array(
        Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
      ),
    ),
    Table: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_0_0),
    ),
  });

export type QueryBetweenExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly LowerBound: QueryExpressionContainerV1_0_0;
  readonly UpperBound: QueryExpressionContainerV1_0_0;
};

export const QueryBetweenExpressionV1_0_0: Schema.Codec<QueryBetweenExpressionV1_0_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    LowerBound: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    UpperBound: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  });

export type QueryDiscretizeExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly Count: number;
};

export const QueryDiscretizeExpressionV1_0_0: Schema.Codec<QueryDiscretizeExpressionV1_0_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Count: Schema.Finite,
  });

export type QuerySubqueryExpressionV1_0_0 = {
  readonly Query: QueryDefinitionV1_0_0;
};

export const QuerySubqueryExpressionV1_0_0: Schema.Codec<QuerySubqueryExpressionV1_0_0> =
  closed({ Query: Schema.suspend(() => QueryDefinitionV1_0_0) });

export type QueryDefinitionV1_0_0 = {
  readonly Version?: 2;
  readonly From: ReadonlyArray<EntitySourceV1_0_0>;
  readonly Where?: ReadonlyArray<QueryFilterV1_0_0>;
  readonly OrderBy?: ReadonlyArray<QuerySortClauseV1_0_0>;
  readonly Select: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly VisualShape?: ReadonlyArray<AxisV1_0_0>;
  readonly GroupBy?: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly Transform?: ReadonlyArray<QueryTransformV1_0_0>;
  readonly Top?: number;
};

export const QueryDefinitionV1_0_0: Schema.Codec<QueryDefinitionV1_0_0> =
  closed({
    Version: Schema.optionalKey(Schema.Literal(2)),
    From: Schema.Array(Schema.suspend(() => EntitySourceV1_0_0)),
    Where: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryFilterV1_0_0)),
    ),
    OrderBy: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QuerySortClauseV1_0_0)),
    ),
    Select: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
    VisualShape: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => AxisV1_0_0)),
    ),
    GroupBy: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
    ),
    Transform: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryTransformV1_0_0)),
    ),
    Top: Schema.optionalKey(Schema.Finite),
  });

export type QueryTransformV1_0_0 = {
  readonly Name: string;
  readonly Algorithm: string;
  readonly Input: QueryTransformInputV1_0_0;
  readonly Output: QueryTransformOutputV1_0_0;
};

export const QueryTransformV1_0_0: Schema.Codec<QueryTransformV1_0_0> = closed({
  Name: Schema.String,
  Algorithm: Schema.String,
  Input: Schema.suspend(() => QueryTransformInputV1_0_0),
  Output: Schema.suspend(() => QueryTransformOutputV1_0_0),
});

export type QueryTransformOutputV1_0_0 = {
  readonly Table?: QueryTransformTableV1_0_0;
};

export const QueryTransformOutputV1_0_0: Schema.Codec<QueryTransformOutputV1_0_0> =
  closed({
    Table: Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_0_0)),
  });

export type QueryTransformTableV1_0_0 = {
  readonly Name: string;
  readonly Columns: ReadonlyArray<QueryTransformTableColumnV1_0_0>;
};

export const QueryTransformTableV1_0_0: Schema.Codec<QueryTransformTableV1_0_0> =
  closed({
    Name: Schema.String,
    Columns: Schema.Array(
      Schema.suspend(() => QueryTransformTableColumnV1_0_0),
    ),
  });

export type QueryTransformTableColumnV1_0_0 = {
  readonly Role?: string;
  readonly Expression: QueryExpressionContainerV1_0_0;
};

export const QueryTransformTableColumnV1_0_0: Schema.Codec<QueryTransformTableColumnV1_0_0> =
  closed({
    Role: Schema.optionalKey(Schema.String),
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  });

export type QueryTransformInputV1_0_0 = {
  readonly Parameters: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly Table?: QueryTransformTableV1_0_0;
};

export const QueryTransformInputV1_0_0: Schema.Codec<QueryTransformInputV1_0_0> =
  closed({
    Parameters: Schema.Array(
      Schema.suspend(() => QueryExpressionContainerV1_0_0),
    ),
    Table: Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_0_0)),
  });

export type AxisV1_0_0 = {
  readonly Groups: ReadonlyArray<AxisGroupV1_0_0>;
  readonly Name: string;
};

export const AxisV1_0_0: Schema.Codec<AxisV1_0_0> = closed({
  Groups: Schema.Array(Schema.suspend(() => AxisGroupV1_0_0)),
  Name: Schema.String,
});

export type AxisGroupV1_0_0 = {
  readonly Keys: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly Subtotal: boolean;
};

export const AxisGroupV1_0_0: Schema.Codec<AxisGroupV1_0_0> = closed({
  Keys: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
  Subtotal: Schema.Boolean,
});

export type QuerySortClauseV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly Direction: Schema.Json;
};

export const QuerySortClauseV1_0_0: Schema.Codec<QuerySortClauseV1_0_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Direction: Schema.Json,
  });

export type EntitySourceV1_0_0 = {
  readonly Name: string;
  readonly Entity?: string;
  readonly Schema?: string;
  readonly Expression?: QueryExpressionContainerV1_0_0;
  readonly Type?: 0 | 1 | 2;
};

export const EntitySourceV1_0_0: Schema.Codec<EntitySourceV1_0_0> = closed({
  Name: Schema.String,
  Entity: Schema.optionalKey(Schema.String),
  Schema: Schema.optionalKey(Schema.String),
  Expression: Schema.optionalKey(
    Schema.suspend(() => QueryExpressionContainerV1_0_0),
  ),
  Type: Schema.optionalKey(
    Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]),
  ),
});

export type QueryPropertyVariationSourceExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly Name: string;
  readonly Property: string;
};

export const QueryPropertyVariationSourceExpressionV1_0_0: Schema.Codec<QueryPropertyVariationSourceExpressionV1_0_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Name: Schema.String,
    Property: Schema.String,
  });

export type QueryHierarchyLevelExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly Level: string;
};

export const QueryHierarchyLevelExpressionV1_0_0: Schema.Codec<QueryHierarchyLevelExpressionV1_0_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Level: Schema.String,
  });

export type QueryHierarchyExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly Hierarchy: string;
};

export const QueryHierarchyExpressionV1_0_0: Schema.Codec<QueryHierarchyExpressionV1_0_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Hierarchy: Schema.String,
  });

export type QueryPercentileExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly K: number;
  readonly Exclusive?: boolean;
};

export const QueryPercentileExpressionV1_0_0: Schema.Codec<QueryPercentileExpressionV1_0_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    K: Schema.Finite,
    Exclusive: Schema.optionalKey(Schema.Boolean),
  });

export type QueryAggregationExpressionV1_0_0 = {
  readonly Function: QueryAggregateFunction;
  readonly Expression: QueryExpressionContainerV1_0_0;
};

export const QueryAggregationExpressionV1_0_0: Schema.Codec<QueryAggregationExpressionV1_0_0> =
  closed({
    Function: Schema.suspend(() => QueryAggregateFunction),
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  });

export type QueryMaxExpressionV1_0_0 = {
  readonly IncludeAllTypes: IncludeAllTypes;
  readonly Expression: QueryExpressionContainerV1_0_0;
};

export const QueryMaxExpressionV1_0_0: Schema.Codec<QueryMaxExpressionV1_0_0> =
  closed({
    IncludeAllTypes: Schema.suspend(() => IncludeAllTypes),
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  });

export type QueryColumnExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly Property: string;
};

export const QueryColumnExpressionV1_0_0: Schema.Codec<QueryColumnExpressionV1_0_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Property: Schema.String,
  });

export const SemanticQueryDefinitionsV1_0_0 = {
  FilterDefinition: FilterDefinitionV1_0_0,
  QueryFilter: QueryFilterV1_0_0,
  QueryExpressionContainer: QueryExpressionContainerV1_0_0,
  QueryNativeColumn: QueryNativeColumnV1_0_0,
  QueryExpressionContentCache: QueryExpressionContentCacheV1_0_0,
  QueryNativeMeasure: QueryNativeMeasureV1_0_0,
  QueryConditionalExpression: QueryConditionalExpressionV1_0_0,
  QueryCase: QueryCaseV1_0_0,
  QueryThemeDataColorExpression: QueryThemeDataColorExpression,
  QuerySelectRefExpression: QuerySelectRefExpression,
  QueryAllRolesRefExpression: QueryNowExpression,
  QuerySummaryValueRefExpression: QuerySummaryValueRefExpression,
  QueryRoleRefExpression: QueryRoleRefExpression,
  QueryResourcePackageItem: QueryResourcePackageItem,
  QueryGroupRefExpression: QueryGroupRefExpressionV1_0_0,
  QueryFillRuleExpression: QueryFillRuleExpressionV1_0_0,
  QueryNativeVisualCalc: QueryNativeVisualCalcV1_0_0,
  QuerySparklineDataExpression: QuerySparklineDataExpressionV1_0_0,
  QueryTransformOutputRoleRefExpression: QueryTransformOutputRoleRefExpression,
  QueryTransformTableRefExpression: QuerySourceRefExpression,
  QueryFilteredEvalExpression: QueryFilteredEvalExpressionV1_0_0,
  QueryScopedEvalExpression: QueryScopedEvalExpressionV1_0_0,
  QueryFloorExpression: QueryFloorExpressionV1_0_0,
  QueryArithmeticExpression: QueryArithmeticExpressionV1_0_0,
  ArithmeticOperatorKind: ArithmeticOperatorKind,
  QueryAnyValueExpression: QueryAnyValueExpression,
  QueryDefaultValueExpression: QueryNowExpression,
  QueryNowExpression: QueryNowExpression,
  QueryDateAddExpression: QueryDateAddExpressionV1_0_0,
  TimeUnit: TimeUnit,
  QueryDateSpanExpression: QueryDateSpanExpressionV1_0_0,
  QueryLiteralExpression: QueryLiteralExpression,
  QueryExistsExpression: QueryNotExpressionV1_0_0,
  QueryStartsWithExpression: QueryBinaryExpressionV1_0_0,
  QueryContainsExpression: QueryBinaryExpressionV1_0_0,
  QueryNotExpression: QueryNotExpressionV1_0_0,
  QueryComparisonExpression: QueryComparisonExpressionV1_0_0,
  QueryComparisonKind: QueryComparisonKind,
  QueryBinaryExpression: QueryBinaryExpressionV1_0_0,
  QueryInExpression: QueryInExpressionV1_0_0,
  QueryBetweenExpression: QueryBetweenExpressionV1_0_0,
  QueryDiscretizeExpression: QueryDiscretizeExpressionV1_0_0,
  QuerySubqueryExpression: QuerySubqueryExpressionV1_0_0,
  QueryDefinition: QueryDefinitionV1_0_0,
  QueryTransform: QueryTransformV1_0_0,
  QueryTransformOutput: QueryTransformOutputV1_0_0,
  QueryTransformTable: QueryTransformTableV1_0_0,
  QueryTransformTableColumn: QueryTransformTableColumnV1_0_0,
  QueryTransformInput: QueryTransformInputV1_0_0,
  Axis: AxisV1_0_0,
  AxisGroup: AxisGroupV1_0_0,
  QuerySortClause: QuerySortClauseV1_0_0,
  EntitySource: EntitySourceV1_0_0,
  QueryPropertyVariationSourceExpression:
    QueryPropertyVariationSourceExpressionV1_0_0,
  QueryHierarchyLevelExpression: QueryHierarchyLevelExpressionV1_0_0,
  QueryHierarchyExpression: QueryHierarchyExpressionV1_0_0,
  QueryPercentileExpression: QueryPercentileExpressionV1_0_0,
  QueryAggregationExpression: QueryAggregationExpressionV1_0_0,
  QueryAggregateFunction: QueryAggregateFunction,
  QueryMaxExpression: QueryMaxExpressionV1_0_0,
  IncludeAllTypes: IncludeAllTypes,
  QueryMinExpression: QueryMaxExpressionV1_0_0,
  QueryMeasureExpression: QueryColumnExpressionV1_0_0,
  QueryColumnExpression: QueryColumnExpressionV1_0_0,
  QuerySourceRefExpression: QuerySourceRefExpression,
  StandaloneSourceRefExpression: StandaloneSourceRefExpression,
} as const;

export {
  QueryThemeDataColorExpression as QueryThemeDataColorExpressionV1_0_0,
  QuerySelectRefExpression as QuerySelectRefExpressionV1_0_0,
  QueryNowExpression as QueryAllRolesRefExpressionV1_0_0,
  QuerySummaryValueRefExpression as QuerySummaryValueRefExpressionV1_0_0,
  QueryRoleRefExpression as QueryRoleRefExpressionV1_0_0,
  QueryResourcePackageItem as QueryResourcePackageItemV1_0_0,
  QueryNativeVisualCalcV1_0_0,
  QueryTransformOutputRoleRefExpression as QueryTransformOutputRoleRefExpressionV1_0_0,
  QuerySourceRefExpression as QueryTransformTableRefExpressionV1_0_0,
  ArithmeticOperatorKind as ArithmeticOperatorKindV1_0_0,
  QueryAnyValueExpression as QueryAnyValueExpressionV1_0_0,
  QueryNowExpression as QueryDefaultValueExpressionV1_0_0,
  QueryNowExpression as QueryNowExpressionV1_0_0,
  TimeUnit as TimeUnitV1_0_0,
  QueryLiteralExpression as QueryLiteralExpressionV1_0_0,
  QueryComparisonKind as QueryComparisonKindV1_0_0,
  QueryAggregateFunction as QueryAggregateFunctionV1_0_0,
  IncludeAllTypes as IncludeAllTypesV1_0_0,
  QuerySourceRefExpression as QuerySourceRefExpressionV1_0_0,
  StandaloneSourceRefExpression as StandaloneSourceRefExpressionV1_0_0,
  SemanticQuery as SemanticQueryV1_0_0,
} from "./shared.js";

export {
  QueryNotExpressionV1_0_0 as QueryExistsExpressionV1_0_0,
  QueryBinaryExpressionV1_0_0 as QueryStartsWithExpressionV1_0_0,
  QueryBinaryExpressionV1_0_0 as QueryContainsExpressionV1_0_0,
  QueryMaxExpressionV1_0_0 as QueryMinExpressionV1_0_0,
  QueryColumnExpressionV1_0_0 as QueryMeasureExpressionV1_0_0,
};
