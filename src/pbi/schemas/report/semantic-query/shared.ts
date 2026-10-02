import { Schema } from "effect";
import { type ExactlyOne, closed } from "../shared.js";

export type FilterDefinitionV1_0_0 = {
  readonly Version?: 2;
  readonly From: ReadonlyArray<EntitySourceV1_0_0>;
  readonly Where: ReadonlyArray<QueryFilterV1_0_0>;
};

export const FilterDefinitionV1_0_0: Schema.Codec<FilterDefinitionV1_0_0> = closed({
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
  Target: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0))),
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
  readonly SourceRef: StandaloneSourceRefExpressionV1_0_0 | QuerySourceRefExpressionV1_0_0;
  readonly Column: QueryColumnExpressionV1_0_0;
  readonly Measure: QueryMeasureExpressionV1_0_0;
  readonly Min: QueryMinExpressionV1_0_0;
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
  readonly Contains: QueryContainsExpressionV1_0_0;
  readonly StartsWith: QueryStartsWithExpressionV1_0_0;
  readonly Exists: QueryExistsExpressionV1_0_0;
  readonly Literal: QueryLiteralExpressionV1_0_0;
  readonly DateSpan: QueryDateSpanExpressionV1_0_0;
  readonly DateAdd: QueryDateAddExpressionV1_0_0;
  readonly Now: QueryNowExpressionV1_0_0;
  readonly DefaultValue: QueryDefaultValueExpressionV1_0_0;
  readonly AnyValue: QueryAnyValueExpressionV1_0_0;
  readonly Arithmetic: QueryArithmeticExpressionV1_0_0;
  readonly Floor: QueryFloorExpressionV1_0_0;
  readonly ScopedEval: QueryScopedEvalExpressionV1_0_0;
  readonly FilteredEval: QueryFilteredEvalExpressionV1_0_0;
  readonly TransformTableRef: QueryTransformTableRefExpressionV1_0_0;
  readonly TransformOutputRoleRef: QueryTransformOutputRoleRefExpressionV1_0_0;
  readonly SparklineData: QuerySparklineDataExpressionV1_0_0;
  readonly NativeVisualCalculation: QueryNativeVisualCalcV1_0_0;
  readonly FillRule: QueryFillRuleExpressionV1_0_0;
  readonly GroupRef: QueryGroupRefExpressionV1_0_0;
  readonly ResourcePackageItem: QueryResourcePackageItemV1_0_0;
  readonly RoleRef: QueryRoleRefExpressionV1_0_0;
  readonly SummaryValueRef: QuerySummaryValueRefExpressionV1_0_0;
  readonly AllRolesRef: QueryAllRolesRefExpressionV1_0_0;
  readonly SelectRef: QuerySelectRefExpressionV1_0_0;
  readonly ThemeDataColor: QueryThemeDataColorExpressionV1_0_0;
  readonly Conditional: QueryConditionalExpressionV1_0_0;
  readonly NativeMeasure: QueryNativeMeasureV1_0_0;
  readonly NativeColumn: QueryNativeColumnV1_0_0;
}>;

export const QueryExpressionContainerV1_0_0: Schema.Codec<QueryExpressionContainerV1_0_0> =
  Schema.Union([
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SourceRef: Schema.Union([
        Schema.suspend(() => StandaloneSourceRefExpressionV1_0_0),
        Schema.suspend(() => QuerySourceRefExpressionV1_0_0),
      ]),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Column: Schema.suspend(() => QueryColumnExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Measure: Schema.suspend(() => QueryMeasureExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Min: Schema.suspend(() => QueryMinExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Max: Schema.suspend(() => QueryMaxExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Aggregation: Schema.suspend(() => QueryAggregationExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Percentile: Schema.suspend(() => QueryPercentileExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Hierarchy: Schema.suspend(() => QueryHierarchyExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      HierarchyLevel: Schema.suspend(() => QueryHierarchyLevelExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      PropertyVariationSource: Schema.suspend(() => QueryPropertyVariationSourceExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Subquery: Schema.suspend(() => QuerySubqueryExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Discretize: Schema.suspend(() => QueryDiscretizeExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      And: Schema.suspend(() => QueryBinaryExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Between: Schema.suspend(() => QueryBetweenExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      In: Schema.suspend(() => QueryInExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Or: Schema.suspend(() => QueryBinaryExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Comparison: Schema.suspend(() => QueryComparisonExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Not: Schema.suspend(() => QueryNotExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Contains: Schema.suspend(() => QueryContainsExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      StartsWith: Schema.suspend(() => QueryStartsWithExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Exists: Schema.suspend(() => QueryExistsExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Literal: Schema.suspend(() => QueryLiteralExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      DateSpan: Schema.suspend(() => QueryDateSpanExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      DateAdd: Schema.suspend(() => QueryDateAddExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Now: Schema.suspend(() => QueryNowExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      DefaultValue: Schema.suspend(() => QueryDefaultValueExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      AnyValue: Schema.suspend(() => QueryAnyValueExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Arithmetic: Schema.suspend(() => QueryArithmeticExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Floor: Schema.suspend(() => QueryFloorExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      ScopedEval: Schema.suspend(() => QueryScopedEvalExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      FilteredEval: Schema.suspend(() => QueryFilteredEvalExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      TransformTableRef: Schema.suspend(() => QueryTransformTableRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      TransformOutputRoleRef: Schema.suspend(() => QueryTransformOutputRoleRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SparklineData: Schema.suspend(() => QuerySparklineDataExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      NativeVisualCalculation: Schema.suspend(() => QueryNativeVisualCalcV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      FillRule: Schema.suspend(() => QueryFillRuleExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      GroupRef: Schema.suspend(() => QueryGroupRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      ResourcePackageItem: Schema.suspend(() => QueryResourcePackageItemV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      RoleRef: Schema.suspend(() => QueryRoleRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SummaryValueRef: Schema.suspend(() => QuerySummaryValueRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      AllRolesRef: Schema.suspend(() => QueryAllRolesRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SelectRef: Schema.suspend(() => QuerySelectRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      ThemeDataColor: Schema.suspend(() => QueryThemeDataColorExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Conditional: Schema.suspend(() => QueryConditionalExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      NativeMeasure: Schema.suspend(() => QueryNativeMeasureV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
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

export const QueryNativeColumnV1_0_0: Schema.Codec<QueryNativeColumnV1_0_0> = closed({
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

export const QueryNativeMeasureV1_0_0: Schema.Codec<QueryNativeMeasureV1_0_0> = closed({
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
    DefaultValue: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
  });

export type QueryCaseV1_0_0 = {
  readonly Condition: QueryExpressionContainerV1_0_0;
  readonly Value: QueryExpressionContainerV1_0_0;
};

export const QueryCaseV1_0_0: Schema.Codec<QueryCaseV1_0_0> = closed({
  Condition: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  Value: Schema.suspend(() => QueryExpressionContainerV1_0_0),
});

export type QueryThemeDataColorExpressionV1_0_0 = {
  readonly ColorId: number;
  readonly Percent: number;
};

export const QueryThemeDataColorExpressionV1_0_0: Schema.Codec<QueryThemeDataColorExpressionV1_0_0> =
  closed({ ColorId: Schema.Finite, Percent: Schema.Finite });

export type QuerySelectRefExpressionV1_0_0 = {
  readonly ExpressionName: string;
};

export const QuerySelectRefExpressionV1_0_0: Schema.Codec<QuerySelectRefExpressionV1_0_0> = closed({
  ExpressionName: Schema.String,
});

export type QueryAllRolesRefExpressionV1_0_0 = {};

export const QueryAllRolesRefExpressionV1_0_0: Schema.Codec<QueryAllRolesRefExpressionV1_0_0> =
  closed({});

export type QuerySummaryValueRefExpressionV1_0_0 = {
  readonly Name: string;
};

export const QuerySummaryValueRefExpressionV1_0_0: Schema.Codec<QuerySummaryValueRefExpressionV1_0_0> =
  closed({ Name: Schema.String });

export type QueryRoleRefExpressionV1_0_0 = {
  readonly Role: string;
};

export const QueryRoleRefExpressionV1_0_0: Schema.Codec<QueryRoleRefExpressionV1_0_0> = closed({
  Role: Schema.String,
});

export type QueryResourcePackageItemV1_0_0 = {
  readonly PackageName: string;
  readonly PackageType: number;
  readonly ItemName: string;
};

export const QueryResourcePackageItemV1_0_0: Schema.Codec<QueryResourcePackageItemV1_0_0> = closed({
  PackageName: Schema.String,
  PackageType: Schema.Finite,
  ItemName: Schema.String,
});

export type QueryGroupRefExpressionV1_0_0 = {
  readonly GroupedColumns: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly Property: string;
};

export const QueryGroupRefExpressionV1_0_0: Schema.Codec<QueryGroupRefExpressionV1_0_0> = closed({
  GroupedColumns: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  Property: Schema.String,
});

export type QueryFillRuleExpressionV1_0_0 = {
  readonly Input: QueryExpressionContainerV1_0_0;
  readonly FillRule: Schema.Json;
};

export const QueryFillRuleExpressionV1_0_0: Schema.Codec<QueryFillRuleExpressionV1_0_0> = closed({
  Input: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  FillRule: Schema.Json,
});

export type QueryNativeVisualCalcV1_0_0 = {
  readonly Language: "dax";
  readonly Expression: string;
  readonly Name: string;
};

export const QueryNativeVisualCalcV1_0_0: Schema.Codec<QueryNativeVisualCalcV1_0_0> = closed({
  Language: Schema.Literal("dax"),
  Expression: Schema.String,
  Name: Schema.String,
});

export type QuerySparklineDataExpressionV1_0_0 = {
  readonly Measure: QueryExpressionContainerV1_0_0;
  readonly Groupings: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly PointsPerSparkline?: 52;
};

export const QuerySparklineDataExpressionV1_0_0: Schema.Codec<QuerySparklineDataExpressionV1_0_0> =
  closed({
    Measure: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Groupings: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
    PointsPerSparkline: Schema.optionalKey(Schema.Literal(52)),
  });

export type QueryTransformOutputRoleRefExpressionV1_0_0 = {
  readonly Role: string;
  readonly Transform?: string;
};

export const QueryTransformOutputRoleRefExpressionV1_0_0: Schema.Codec<QueryTransformOutputRoleRefExpressionV1_0_0> =
  closed({ Role: Schema.String, Transform: Schema.optionalKey(Schema.String) });

export type QueryTransformTableRefExpressionV1_0_0 = {
  readonly Source: string;
};

export const QueryTransformTableRefExpressionV1_0_0: Schema.Codec<QueryTransformTableRefExpressionV1_0_0> =
  closed({ Source: Schema.String });

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

export const QueryFloorExpressionV1_0_0: Schema.Codec<QueryFloorExpressionV1_0_0> = closed({
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
  readonly Operator: ArithmeticOperatorKindV1_0_0;
};

export const QueryArithmeticExpressionV1_0_0: Schema.Codec<QueryArithmeticExpressionV1_0_0> =
  closed({
    Left: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Operator: Schema.suspend(() => ArithmeticOperatorKindV1_0_0),
  });

export type ArithmeticOperatorKindV1_0_0 = 0 | 1 | 2 | 3;

export const ArithmeticOperatorKindV1_0_0: Schema.Codec<ArithmeticOperatorKindV1_0_0> =
  Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3)]);

export type QueryAnyValueExpressionV1_0_0 = {
  readonly DefaultValueOverridesAncestors?: boolean;
};

export const QueryAnyValueExpressionV1_0_0: Schema.Codec<QueryAnyValueExpressionV1_0_0> = closed({
  DefaultValueOverridesAncestors: Schema.optionalKey(Schema.Boolean),
});

export type QueryDefaultValueExpressionV1_0_0 = {};

export const QueryDefaultValueExpressionV1_0_0: Schema.Codec<QueryDefaultValueExpressionV1_0_0> =
  closed({});

export type QueryNowExpressionV1_0_0 = {};

export const QueryNowExpressionV1_0_0: Schema.Codec<QueryNowExpressionV1_0_0> = closed({});

export type QueryDateAddExpressionV1_0_0 = {
  readonly Amount: number;
  readonly TimeUnit: TimeUnitV1_0_0;
  readonly Expression: QueryExpressionContainerV1_0_0;
};

export const QueryDateAddExpressionV1_0_0: Schema.Codec<QueryDateAddExpressionV1_0_0> = closed({
  Amount: Schema.Finite,
  TimeUnit: Schema.suspend(() => TimeUnitV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
});

export type TimeUnitV1_0_0 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export const TimeUnitV1_0_0: Schema.Codec<TimeUnitV1_0_0> = Schema.Union([
  Schema.Literal(0),
  Schema.Literal(1),
  Schema.Literal(2),
  Schema.Literal(3),
  Schema.Literal(4),
  Schema.Literal(5),
  Schema.Literal(6),
  Schema.Literal(7),
]);

export type QueryDateSpanExpressionV1_0_0 = {
  readonly TimeUnit: TimeUnitV1_0_0;
  readonly Expression: QueryExpressionContainerV1_0_0;
};

export const QueryDateSpanExpressionV1_0_0: Schema.Codec<QueryDateSpanExpressionV1_0_0> = closed({
  TimeUnit: Schema.suspend(() => TimeUnitV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
});

export type QueryLiteralExpressionV1_0_0 = {
  readonly Value: string;
};

export const QueryLiteralExpressionV1_0_0: Schema.Codec<QueryLiteralExpressionV1_0_0> = closed({
  Value: Schema.String,
});

export type QueryExistsExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
};

export const QueryExistsExpressionV1_0_0: Schema.Codec<QueryExistsExpressionV1_0_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
});

export type QueryStartsWithExpressionV1_0_0 = {
  readonly Left: QueryExpressionContainerV1_0_0;
  readonly Right: QueryExpressionContainerV1_0_0;
};

export const QueryStartsWithExpressionV1_0_0: Schema.Codec<QueryStartsWithExpressionV1_0_0> =
  closed({
    Left: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  });

export type QueryContainsExpressionV1_0_0 = {
  readonly Left: QueryExpressionContainerV1_0_0;
  readonly Right: QueryExpressionContainerV1_0_0;
};

export const QueryContainsExpressionV1_0_0: Schema.Codec<QueryContainsExpressionV1_0_0> = closed({
  Left: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  Right: Schema.suspend(() => QueryExpressionContainerV1_0_0),
});

export type QueryNotExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
};

export const QueryNotExpressionV1_0_0: Schema.Codec<QueryNotExpressionV1_0_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
});

export type QueryComparisonExpressionV1_0_0 = {
  readonly ComparisonKind: QueryComparisonKindV1_0_0;
  readonly Left: QueryExpressionContainerV1_0_0;
  readonly Right: QueryExpressionContainerV1_0_0;
};

export const QueryComparisonExpressionV1_0_0: Schema.Codec<QueryComparisonExpressionV1_0_0> =
  closed({
    ComparisonKind: Schema.suspend(() => QueryComparisonKindV1_0_0),
    Left: Schema.suspend(() => QueryExpressionContainerV1_0_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  });

export type QueryComparisonKindV1_0_0 = 0 | 1 | 2 | 3 | 4;

export const QueryComparisonKindV1_0_0: Schema.Codec<QueryComparisonKindV1_0_0> = Schema.Union([
  Schema.Literal(0),
  Schema.Literal(1),
  Schema.Literal(2),
  Schema.Literal(3),
  Schema.Literal(4),
]);

export type QueryBinaryExpressionV1_0_0 = {
  readonly Left: QueryExpressionContainerV1_0_0;
  readonly Right: QueryExpressionContainerV1_0_0;
};

export const QueryBinaryExpressionV1_0_0: Schema.Codec<QueryBinaryExpressionV1_0_0> = closed({
  Left: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  Right: Schema.suspend(() => QueryExpressionContainerV1_0_0),
});

export type QueryInExpressionV1_0_0 = {
  readonly Expressions: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly Values?: ReadonlyArray<ReadonlyArray<QueryExpressionContainerV1_0_0>>;
  readonly Table?: QueryExpressionContainerV1_0_0;
};

export const QueryInExpressionV1_0_0: Schema.Codec<QueryInExpressionV1_0_0> = closed({
  Expressions: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
  Values: Schema.optionalKey(
    Schema.Array(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0))),
  ),
  Table: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
});

export type QueryBetweenExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly LowerBound: QueryExpressionContainerV1_0_0;
  readonly UpperBound: QueryExpressionContainerV1_0_0;
};

export const QueryBetweenExpressionV1_0_0: Schema.Codec<QueryBetweenExpressionV1_0_0> = closed({
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

export const QuerySubqueryExpressionV1_0_0: Schema.Codec<QuerySubqueryExpressionV1_0_0> = closed({
  Query: Schema.suspend(() => QueryDefinitionV1_0_0),
});

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

export const QueryDefinitionV1_0_0: Schema.Codec<QueryDefinitionV1_0_0> = closed({
  Version: Schema.optionalKey(Schema.Literal(2)),
  From: Schema.Array(Schema.suspend(() => EntitySourceV1_0_0)),
  Where: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryFilterV1_0_0))),
  OrderBy: Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortClauseV1_0_0))),
  Select: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
  VisualShape: Schema.optionalKey(Schema.Array(Schema.suspend(() => AxisV1_0_0))),
  GroupBy: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0))),
  Transform: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryTransformV1_0_0))),
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

export const QueryTransformOutputV1_0_0: Schema.Codec<QueryTransformOutputV1_0_0> = closed({
  Table: Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_0_0)),
});

export type QueryTransformTableV1_0_0 = {
  readonly Name: string;
  readonly Columns: ReadonlyArray<QueryTransformTableColumnV1_0_0>;
};

export const QueryTransformTableV1_0_0: Schema.Codec<QueryTransformTableV1_0_0> = closed({
  Name: Schema.String,
  Columns: Schema.Array(Schema.suspend(() => QueryTransformTableColumnV1_0_0)),
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

export const QueryTransformInputV1_0_0: Schema.Codec<QueryTransformInputV1_0_0> = closed({
  Parameters: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
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

export const QuerySortClauseV1_0_0: Schema.Codec<QuerySortClauseV1_0_0> = closed({
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
  Expression: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
  Type: Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])),
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

export const QueryHierarchyExpressionV1_0_0: Schema.Codec<QueryHierarchyExpressionV1_0_0> = closed({
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
  readonly Function: QueryAggregateFunctionV1_0_0;
  readonly Expression: QueryExpressionContainerV1_0_0;
};

export const QueryAggregationExpressionV1_0_0: Schema.Codec<QueryAggregationExpressionV1_0_0> =
  closed({
    Function: Schema.suspend(() => QueryAggregateFunctionV1_0_0),
    Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  });

export type QueryAggregateFunctionV1_0_0 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export const QueryAggregateFunctionV1_0_0: Schema.Codec<QueryAggregateFunctionV1_0_0> =
  Schema.Union([
    Schema.Literal(0),
    Schema.Literal(1),
    Schema.Literal(2),
    Schema.Literal(3),
    Schema.Literal(4),
    Schema.Literal(5),
    Schema.Literal(6),
    Schema.Literal(7),
    Schema.Literal(8),
  ]);

export type QueryMaxExpressionV1_0_0 = {
  readonly IncludeAllTypes: IncludeAllTypesV1_0_0;
  readonly Expression: QueryExpressionContainerV1_0_0;
};

export const QueryMaxExpressionV1_0_0: Schema.Codec<QueryMaxExpressionV1_0_0> = closed({
  IncludeAllTypes: Schema.suspend(() => IncludeAllTypesV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
});

export type IncludeAllTypesV1_0_0 = 0 | 1 | 2;

export const IncludeAllTypesV1_0_0: Schema.Codec<IncludeAllTypesV1_0_0> = Schema.Union([
  Schema.Literal(0),
  Schema.Literal(1),
  Schema.Literal(2),
]);

export type QueryMinExpressionV1_0_0 = {
  readonly IncludeAllTypes: IncludeAllTypesV1_0_0;
  readonly Expression: QueryExpressionContainerV1_0_0;
};

export const QueryMinExpressionV1_0_0: Schema.Codec<QueryMinExpressionV1_0_0> = closed({
  IncludeAllTypes: Schema.suspend(() => IncludeAllTypesV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
});

export type QueryMeasureExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly Property: string;
};

export const QueryMeasureExpressionV1_0_0: Schema.Codec<QueryMeasureExpressionV1_0_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  Property: Schema.String,
});

export type QueryColumnExpressionV1_0_0 = {
  readonly Expression: QueryExpressionContainerV1_0_0;
  readonly Property: string;
};

export const QueryColumnExpressionV1_0_0: Schema.Codec<QueryColumnExpressionV1_0_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_0_0),
  Property: Schema.String,
});

export type QuerySourceRefExpressionV1_0_0 = {
  readonly Source: string;
};

export const QuerySourceRefExpressionV1_0_0: Schema.Codec<QuerySourceRefExpressionV1_0_0> = closed({
  Source: Schema.String,
});

export type StandaloneSourceRefExpressionV1_0_0 = {
  readonly Schema?: string;
  readonly Entity: string;
};

export const StandaloneSourceRefExpressionV1_0_0: Schema.Codec<StandaloneSourceRefExpressionV1_0_0> =
  closed({ Schema: Schema.optionalKey(Schema.String), Entity: Schema.String });

export const SemanticQuery = Schema.Json;

export type SemanticQuery = typeof SemanticQuery.Type;

export type FilterDefinitionV1_1_0 = {
  readonly Version?: 2;
  readonly From: ReadonlyArray<EntitySourceV1_1_0>;
  readonly Where: ReadonlyArray<QueryFilterV1_1_0>;
};

export const FilterDefinitionV1_1_0: Schema.Codec<FilterDefinitionV1_1_0> = closed({
  Version: Schema.optionalKey(Schema.Literal(2)),
  From: Schema.Array(Schema.suspend(() => EntitySourceV1_1_0)),
  Where: Schema.Array(Schema.suspend(() => QueryFilterV1_1_0)),
});

export type QueryFilterV1_1_0 = {
  readonly Target?: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly Condition: QueryExpressionContainerV1_1_0;
  readonly Annotations?: {} & {
    readonly [key: string]: Schema.Json;
  };
};

export const QueryFilterV1_1_0: Schema.Codec<QueryFilterV1_1_0> = closed({
  Target: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0))),
  Condition: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
});

export type QueryExpressionContainerV1_1_0 = {
  readonly Name?: string;
  readonly NativeReferenceName?: string;
  readonly Annotations?: {} & {
    readonly [key: string]: Schema.Json;
  };
} & ExactlyOne<{
  readonly SourceRef: StandaloneSourceRefExpressionV1_0_0 | QuerySourceRefExpressionV1_0_0;
  readonly Column: QueryColumnExpressionV1_1_0;
  readonly Measure: QueryMeasureExpressionV1_1_0;
  readonly Min: QueryMinExpressionV1_1_0;
  readonly Max: QueryMaxExpressionV1_1_0;
  readonly Aggregation: QueryAggregationExpressionV1_1_0;
  readonly Percentile: QueryPercentileExpressionV1_1_0;
  readonly Hierarchy: QueryHierarchyExpressionV1_1_0;
  readonly HierarchyLevel: QueryHierarchyLevelExpressionV1_1_0;
  readonly PropertyVariationSource: QueryPropertyVariationSourceExpressionV1_1_0;
  readonly Subquery: QuerySubqueryExpressionV1_1_0;
  readonly Discretize: QueryDiscretizeExpressionV1_1_0;
  readonly And: QueryBinaryExpressionV1_1_0;
  readonly Between: QueryBetweenExpressionV1_1_0;
  readonly In: QueryInExpressionV1_1_0;
  readonly Or: QueryBinaryExpressionV1_1_0;
  readonly Comparison: QueryComparisonExpressionV1_1_0;
  readonly Not: QueryNotExpressionV1_1_0;
  readonly Contains: QueryContainsExpressionV1_1_0;
  readonly StartsWith: QueryStartsWithExpressionV1_1_0;
  readonly Exists: QueryExistsExpressionV1_1_0;
  readonly Literal: QueryLiteralExpressionV1_0_0;
  readonly DateSpan: QueryDateSpanExpressionV1_1_0;
  readonly DateAdd: QueryDateAddExpressionV1_1_0;
  readonly Now: QueryNowExpressionV1_0_0;
  readonly DefaultValue: QueryDefaultValueExpressionV1_0_0;
  readonly AnyValue: QueryAnyValueExpressionV1_0_0;
  readonly Arithmetic: QueryArithmeticExpressionV1_1_0;
  readonly Floor: QueryFloorExpressionV1_1_0;
  readonly ScopedEval: QueryScopedEvalExpressionV1_1_0;
  readonly FilteredEval: QueryFilteredEvalExpressionV1_1_0;
  readonly TransformTableRef: QueryTransformTableRefExpressionV1_0_0;
  readonly TransformOutputRoleRef: QueryTransformOutputRoleRefExpressionV1_0_0;
  readonly SparklineData: QuerySparklineDataExpressionV1_1_0;
  readonly NativeVisualCalculation: QueryNativeVisualCalcV1_0_0;
  readonly FillRule: QueryFillRuleExpressionV1_1_0;
  readonly GroupRef: QueryGroupRefExpressionV1_1_0;
  readonly ResourcePackageItem: QueryResourcePackageItemV1_0_0;
  readonly RoleRef: QueryRoleRefExpressionV1_0_0;
  readonly SummaryValueRef: QuerySummaryValueRefExpressionV1_0_0;
  readonly AllRolesRef: QueryAllRolesRefExpressionV1_0_0;
  readonly SelectRef: QuerySelectRefExpressionV1_0_0;
  readonly ThemeDataColor: QueryThemeDataColorExpressionV1_0_0;
  readonly Conditional: QueryConditionalExpressionV1_1_0;
  readonly NativeMeasure: QueryNativeMeasureV1_1_0;
  readonly NativeColumn: QueryNativeColumnV1_1_0;
  readonly VisualTopN: QueryVisualTopNExpressionV1_1_0;
}>;

export const QueryExpressionContainerV1_1_0: Schema.Codec<QueryExpressionContainerV1_1_0> =
  Schema.Union([
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SourceRef: Schema.Union([
        Schema.suspend(() => StandaloneSourceRefExpressionV1_0_0),
        Schema.suspend(() => QuerySourceRefExpressionV1_0_0),
      ]),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Column: Schema.suspend(() => QueryColumnExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Measure: Schema.suspend(() => QueryMeasureExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Min: Schema.suspend(() => QueryMinExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Max: Schema.suspend(() => QueryMaxExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Aggregation: Schema.suspend(() => QueryAggregationExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Percentile: Schema.suspend(() => QueryPercentileExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Hierarchy: Schema.suspend(() => QueryHierarchyExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      HierarchyLevel: Schema.suspend(() => QueryHierarchyLevelExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      PropertyVariationSource: Schema.suspend(() => QueryPropertyVariationSourceExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Subquery: Schema.suspend(() => QuerySubqueryExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Discretize: Schema.suspend(() => QueryDiscretizeExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      And: Schema.suspend(() => QueryBinaryExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Between: Schema.suspend(() => QueryBetweenExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      In: Schema.suspend(() => QueryInExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Or: Schema.suspend(() => QueryBinaryExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Comparison: Schema.suspend(() => QueryComparisonExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Not: Schema.suspend(() => QueryNotExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Contains: Schema.suspend(() => QueryContainsExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      StartsWith: Schema.suspend(() => QueryStartsWithExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Exists: Schema.suspend(() => QueryExistsExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Literal: Schema.suspend(() => QueryLiteralExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      DateSpan: Schema.suspend(() => QueryDateSpanExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      DateAdd: Schema.suspend(() => QueryDateAddExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Now: Schema.suspend(() => QueryNowExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      DefaultValue: Schema.suspend(() => QueryDefaultValueExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      AnyValue: Schema.suspend(() => QueryAnyValueExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Arithmetic: Schema.suspend(() => QueryArithmeticExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Floor: Schema.suspend(() => QueryFloorExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      ScopedEval: Schema.suspend(() => QueryScopedEvalExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      FilteredEval: Schema.suspend(() => QueryFilteredEvalExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      TransformTableRef: Schema.suspend(() => QueryTransformTableRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      TransformOutputRoleRef: Schema.suspend(() => QueryTransformOutputRoleRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SparklineData: Schema.suspend(() => QuerySparklineDataExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      NativeVisualCalculation: Schema.suspend(() => QueryNativeVisualCalcV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      FillRule: Schema.suspend(() => QueryFillRuleExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      GroupRef: Schema.suspend(() => QueryGroupRefExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      ResourcePackageItem: Schema.suspend(() => QueryResourcePackageItemV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      RoleRef: Schema.suspend(() => QueryRoleRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SummaryValueRef: Schema.suspend(() => QuerySummaryValueRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      AllRolesRef: Schema.suspend(() => QueryAllRolesRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SelectRef: Schema.suspend(() => QuerySelectRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      ThemeDataColor: Schema.suspend(() => QueryThemeDataColorExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Conditional: Schema.suspend(() => QueryConditionalExpressionV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      NativeMeasure: Schema.suspend(() => QueryNativeMeasureV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      NativeColumn: Schema.suspend(() => QueryNativeColumnV1_1_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      VisualTopN: Schema.suspend(() => QueryVisualTopNExpressionV1_1_0),
    }),
  ]);

export type QueryVisualTopNExpressionV1_1_0 = {
  readonly ItemCount: number;
};

export const QueryVisualTopNExpressionV1_1_0: Schema.Codec<QueryVisualTopNExpressionV1_1_0> =
  closed({ ItemCount: Schema.Finite });

export type QueryNativeColumnV1_1_0 = {
  readonly DataType: number;
  readonly Expression: string;
  readonly Language: string;
  readonly Source: QueryExpressionContainerV1_1_0;
  readonly ExpressionContentCache?: QueryExpressionContentCacheV1_1_0;
  readonly ProposedName?: string;
  readonly Format?: string;
};

export const QueryNativeColumnV1_1_0: Schema.Codec<QueryNativeColumnV1_1_0> = closed({
  DataType: Schema.Finite,
  Expression: Schema.String,
  Language: Schema.String,
  Source: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  ExpressionContentCache: Schema.optionalKey(
    Schema.suspend(() => QueryExpressionContentCacheV1_1_0),
  ),
  ProposedName: Schema.optionalKey(Schema.String),
  Format: Schema.optionalKey(Schema.String),
});

export type QueryExpressionContentCacheV1_1_0 = {
  readonly Dependencies?: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly UnrecognizedIdentifiers?: boolean;
};

export const QueryExpressionContentCacheV1_1_0: Schema.Codec<QueryExpressionContentCacheV1_1_0> =
  closed({
    Dependencies: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
    ),
    UnrecognizedIdentifiers: Schema.optionalKey(Schema.Boolean),
  });

export type QueryNativeMeasureV1_1_0 = {
  readonly DataType: number;
  readonly Expression: string;
  readonly Language: "dax";
  readonly ExpressionContentCache?: QueryExpressionContentCacheV1_1_0;
  readonly ProposedName?: string;
  readonly Format?: string;
};

export const QueryNativeMeasureV1_1_0: Schema.Codec<QueryNativeMeasureV1_1_0> = closed({
  DataType: Schema.Finite,
  Expression: Schema.String,
  Language: Schema.Literal("dax"),
  ExpressionContentCache: Schema.optionalKey(
    Schema.suspend(() => QueryExpressionContentCacheV1_1_0),
  ),
  ProposedName: Schema.optionalKey(Schema.String),
  Format: Schema.optionalKey(Schema.String),
});

export type QueryConditionalExpressionV1_1_0 = {
  readonly Cases: ReadonlyArray<QueryCaseV1_1_0>;
  readonly DefaultValue?: QueryExpressionContainerV1_1_0;
};

export const QueryConditionalExpressionV1_1_0: Schema.Codec<QueryConditionalExpressionV1_1_0> =
  closed({
    Cases: Schema.Array(Schema.suspend(() => QueryCaseV1_1_0)),
    DefaultValue: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
  });

export type QueryCaseV1_1_0 = {
  readonly Condition: QueryExpressionContainerV1_1_0;
  readonly Value: QueryExpressionContainerV1_1_0;
};

export const QueryCaseV1_1_0: Schema.Codec<QueryCaseV1_1_0> = closed({
  Condition: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  Value: Schema.suspend(() => QueryExpressionContainerV1_1_0),
});

export type QueryGroupRefExpressionV1_1_0 = {
  readonly GroupedColumns: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly Expression: QueryExpressionContainerV1_1_0;
  readonly Property: string;
};

export const QueryGroupRefExpressionV1_1_0: Schema.Codec<QueryGroupRefExpressionV1_1_0> = closed({
  GroupedColumns: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  Property: Schema.String,
});

export type QueryFillRuleExpressionV1_1_0 = {
  readonly Input: QueryExpressionContainerV1_1_0;
  readonly FillRule: Schema.Json;
};

export const QueryFillRuleExpressionV1_1_0: Schema.Codec<QueryFillRuleExpressionV1_1_0> = closed({
  Input: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  FillRule: Schema.Json,
});

export type QuerySparklineDataExpressionV1_1_0 = {
  readonly Measure: QueryExpressionContainerV1_1_0;
  readonly Groupings: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly PointsPerSparkline?: 52;
};

export const QuerySparklineDataExpressionV1_1_0: Schema.Codec<QuerySparklineDataExpressionV1_1_0> =
  closed({
    Measure: Schema.suspend(() => QueryExpressionContainerV1_1_0),
    Groupings: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
    PointsPerSparkline: Schema.optionalKey(Schema.Literal(52)),
  });

export type QueryFilteredEvalExpressionV1_1_0 = {
  readonly Expression: QueryExpressionContainerV1_1_0;
  readonly Filters: ReadonlyArray<QueryFilterV1_1_0>;
};

export const QueryFilteredEvalExpressionV1_1_0: Schema.Codec<QueryFilteredEvalExpressionV1_1_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
    Filters: Schema.Array(Schema.suspend(() => QueryFilterV1_1_0)),
  });

export type QueryScopedEvalExpressionV1_1_0 = {
  readonly Expression: QueryExpressionContainerV1_1_0;
  readonly Scope: ReadonlyArray<QueryExpressionContainerV1_1_0>;
};

export const QueryScopedEvalExpressionV1_1_0: Schema.Codec<QueryScopedEvalExpressionV1_1_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
    Scope: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
  });

export type QueryFloorExpressionV1_1_0 = {
  readonly Expression: QueryExpressionContainerV1_1_0;
  readonly Size: number;
  readonly TimeUnit?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

export const QueryFloorExpressionV1_1_0: Schema.Codec<QueryFloorExpressionV1_1_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
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

export type QueryArithmeticExpressionV1_1_0 = {
  readonly Left: QueryExpressionContainerV1_1_0;
  readonly Right: QueryExpressionContainerV1_1_0;
  readonly Operator: ArithmeticOperatorKindV1_0_0;
};

export const QueryArithmeticExpressionV1_1_0: Schema.Codec<QueryArithmeticExpressionV1_1_0> =
  closed({
    Left: Schema.suspend(() => QueryExpressionContainerV1_1_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_1_0),
    Operator: Schema.suspend(() => ArithmeticOperatorKindV1_0_0),
  });

export type QueryDateAddExpressionV1_1_0 = {
  readonly Amount: number;
  readonly TimeUnit: TimeUnitV1_0_0;
  readonly Expression: QueryExpressionContainerV1_1_0;
};

export const QueryDateAddExpressionV1_1_0: Schema.Codec<QueryDateAddExpressionV1_1_0> = closed({
  Amount: Schema.Finite,
  TimeUnit: Schema.suspend(() => TimeUnitV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
});

export type QueryDateSpanExpressionV1_1_0 = {
  readonly TimeUnit: TimeUnitV1_0_0;
  readonly Expression: QueryExpressionContainerV1_1_0;
};

export const QueryDateSpanExpressionV1_1_0: Schema.Codec<QueryDateSpanExpressionV1_1_0> = closed({
  TimeUnit: Schema.suspend(() => TimeUnitV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
});

export type QueryExistsExpressionV1_1_0 = {
  readonly Expression: QueryExpressionContainerV1_1_0;
};

export const QueryExistsExpressionV1_1_0: Schema.Codec<QueryExistsExpressionV1_1_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
});

export type QueryStartsWithExpressionV1_1_0 = {
  readonly Left: QueryExpressionContainerV1_1_0;
  readonly Right: QueryExpressionContainerV1_1_0;
};

export const QueryStartsWithExpressionV1_1_0: Schema.Codec<QueryStartsWithExpressionV1_1_0> =
  closed({
    Left: Schema.suspend(() => QueryExpressionContainerV1_1_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  });

export type QueryContainsExpressionV1_1_0 = {
  readonly Left: QueryExpressionContainerV1_1_0;
  readonly Right: QueryExpressionContainerV1_1_0;
};

export const QueryContainsExpressionV1_1_0: Schema.Codec<QueryContainsExpressionV1_1_0> = closed({
  Left: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  Right: Schema.suspend(() => QueryExpressionContainerV1_1_0),
});

export type QueryNotExpressionV1_1_0 = {
  readonly Expression: QueryExpressionContainerV1_1_0;
};

export const QueryNotExpressionV1_1_0: Schema.Codec<QueryNotExpressionV1_1_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
});

export type QueryComparisonExpressionV1_1_0 = {
  readonly ComparisonKind: QueryComparisonKindV1_0_0;
  readonly Left: QueryExpressionContainerV1_1_0;
  readonly Right: QueryExpressionContainerV1_1_0;
};

export const QueryComparisonExpressionV1_1_0: Schema.Codec<QueryComparisonExpressionV1_1_0> =
  closed({
    ComparisonKind: Schema.suspend(() => QueryComparisonKindV1_0_0),
    Left: Schema.suspend(() => QueryExpressionContainerV1_1_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  });

export type QueryBinaryExpressionV1_1_0 = {
  readonly Left: QueryExpressionContainerV1_1_0;
  readonly Right: QueryExpressionContainerV1_1_0;
};

export const QueryBinaryExpressionV1_1_0: Schema.Codec<QueryBinaryExpressionV1_1_0> = closed({
  Left: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  Right: Schema.suspend(() => QueryExpressionContainerV1_1_0),
});

export type QueryInExpressionV1_1_0 = {
  readonly Expressions: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly Values?: ReadonlyArray<ReadonlyArray<QueryExpressionContainerV1_1_0>>;
  readonly Table?: QueryExpressionContainerV1_1_0;
};

export const QueryInExpressionV1_1_0: Schema.Codec<QueryInExpressionV1_1_0> = closed({
  Expressions: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
  Values: Schema.optionalKey(
    Schema.Array(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0))),
  ),
  Table: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
});

export type QueryBetweenExpressionV1_1_0 = {
  readonly Expression: QueryExpressionContainerV1_1_0;
  readonly LowerBound: QueryExpressionContainerV1_1_0;
  readonly UpperBound: QueryExpressionContainerV1_1_0;
};

export const QueryBetweenExpressionV1_1_0: Schema.Codec<QueryBetweenExpressionV1_1_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  LowerBound: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  UpperBound: Schema.suspend(() => QueryExpressionContainerV1_1_0),
});

export type QueryDiscretizeExpressionV1_1_0 = {
  readonly Expression: QueryExpressionContainerV1_1_0;
  readonly Count: number;
};

export const QueryDiscretizeExpressionV1_1_0: Schema.Codec<QueryDiscretizeExpressionV1_1_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
    Count: Schema.Finite,
  });

export type QuerySubqueryExpressionV1_1_0 = {
  readonly Query: QueryDefinitionV1_1_0;
};

export const QuerySubqueryExpressionV1_1_0: Schema.Codec<QuerySubqueryExpressionV1_1_0> = closed({
  Query: Schema.suspend(() => QueryDefinitionV1_1_0),
});

export type QueryDefinitionV1_1_0 = {
  readonly Version?: 2;
  readonly From: ReadonlyArray<EntitySourceV1_1_0>;
  readonly Where?: ReadonlyArray<QueryFilterV1_1_0>;
  readonly OrderBy?: ReadonlyArray<QuerySortClauseV1_1_0>;
  readonly Select: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly VisualShape?: ReadonlyArray<AxisV1_1_0>;
  readonly GroupBy?: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly Transform?: ReadonlyArray<QueryTransformV1_1_0>;
  readonly Top?: number;
};

export const QueryDefinitionV1_1_0: Schema.Codec<QueryDefinitionV1_1_0> = closed({
  Version: Schema.optionalKey(Schema.Literal(2)),
  From: Schema.Array(Schema.suspend(() => EntitySourceV1_1_0)),
  Where: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryFilterV1_1_0))),
  OrderBy: Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortClauseV1_1_0))),
  Select: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
  VisualShape: Schema.optionalKey(Schema.Array(Schema.suspend(() => AxisV1_1_0))),
  GroupBy: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0))),
  Transform: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryTransformV1_1_0))),
  Top: Schema.optionalKey(Schema.Finite),
});

export type QueryTransformV1_1_0 = {
  readonly Name: string;
  readonly Algorithm: string;
  readonly Input: QueryTransformInputV1_1_0;
  readonly Output: QueryTransformOutputV1_1_0;
};

export const QueryTransformV1_1_0: Schema.Codec<QueryTransformV1_1_0> = closed({
  Name: Schema.String,
  Algorithm: Schema.String,
  Input: Schema.suspend(() => QueryTransformInputV1_1_0),
  Output: Schema.suspend(() => QueryTransformOutputV1_1_0),
});

export type QueryTransformOutputV1_1_0 = {
  readonly Table?: QueryTransformTableV1_1_0;
};

export const QueryTransformOutputV1_1_0: Schema.Codec<QueryTransformOutputV1_1_0> = closed({
  Table: Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_1_0)),
});

export type QueryTransformTableV1_1_0 = {
  readonly Name: string;
  readonly Columns: ReadonlyArray<QueryTransformTableColumnV1_1_0>;
};

export const QueryTransformTableV1_1_0: Schema.Codec<QueryTransformTableV1_1_0> = closed({
  Name: Schema.String,
  Columns: Schema.Array(Schema.suspend(() => QueryTransformTableColumnV1_1_0)),
});

export type QueryTransformTableColumnV1_1_0 = {
  readonly Role?: string;
  readonly Expression: QueryExpressionContainerV1_1_0;
};

export const QueryTransformTableColumnV1_1_0: Schema.Codec<QueryTransformTableColumnV1_1_0> =
  closed({
    Role: Schema.optionalKey(Schema.String),
    Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  });

export type QueryTransformInputV1_1_0 = {
  readonly Parameters: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly Table?: QueryTransformTableV1_1_0;
};

export const QueryTransformInputV1_1_0: Schema.Codec<QueryTransformInputV1_1_0> = closed({
  Parameters: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
  Table: Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_1_0)),
});

export type AxisV1_1_0 = {
  readonly Groups: ReadonlyArray<AxisGroupV1_1_0>;
  readonly Name: string;
};

export const AxisV1_1_0: Schema.Codec<AxisV1_1_0> = closed({
  Groups: Schema.Array(Schema.suspend(() => AxisGroupV1_1_0)),
  Name: Schema.String,
});

export type AxisGroupV1_1_0 = {
  readonly Keys: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly Subtotal: boolean;
};

export const AxisGroupV1_1_0: Schema.Codec<AxisGroupV1_1_0> = closed({
  Keys: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
  Subtotal: Schema.Boolean,
});

export type QuerySortClauseV1_1_0 = {
  readonly Expression: QueryExpressionContainerV1_1_0;
  readonly Direction: Schema.Json;
};

export const QuerySortClauseV1_1_0: Schema.Codec<QuerySortClauseV1_1_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  Direction: Schema.Json,
});

export type EntitySourceV1_1_0 = {
  readonly Name: string;
  readonly Entity?: string;
  readonly Schema?: string;
  readonly Expression?: QueryExpressionContainerV1_1_0;
  readonly Type?: 0 | 1 | 2;
};

export const EntitySourceV1_1_0: Schema.Codec<EntitySourceV1_1_0> = closed({
  Name: Schema.String,
  Entity: Schema.optionalKey(Schema.String),
  Schema: Schema.optionalKey(Schema.String),
  Expression: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
  Type: Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])),
});

export type QueryPropertyVariationSourceExpressionV1_1_0 = {
  readonly Expression: QueryExpressionContainerV1_1_0;
  readonly Name: string;
  readonly Property: string;
};

export const QueryPropertyVariationSourceExpressionV1_1_0: Schema.Codec<QueryPropertyVariationSourceExpressionV1_1_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
    Name: Schema.String,
    Property: Schema.String,
  });

export type QueryHierarchyLevelExpressionV1_1_0 = {
  readonly Expression: QueryExpressionContainerV1_1_0;
  readonly Level: string;
};

export const QueryHierarchyLevelExpressionV1_1_0: Schema.Codec<QueryHierarchyLevelExpressionV1_1_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
    Level: Schema.String,
  });

export type QueryHierarchyExpressionV1_1_0 = {
  readonly Expression: QueryExpressionContainerV1_1_0;
  readonly Hierarchy: string;
};

export const QueryHierarchyExpressionV1_1_0: Schema.Codec<QueryHierarchyExpressionV1_1_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  Hierarchy: Schema.String,
});

export type QueryPercentileExpressionV1_1_0 = {
  readonly Expression: QueryExpressionContainerV1_1_0;
  readonly K: number;
  readonly Exclusive?: boolean;
};

export const QueryPercentileExpressionV1_1_0: Schema.Codec<QueryPercentileExpressionV1_1_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
    K: Schema.Finite,
    Exclusive: Schema.optionalKey(Schema.Boolean),
  });

export type QueryAggregationExpressionV1_1_0 = {
  readonly Function: QueryAggregateFunctionV1_0_0;
  readonly Expression: QueryExpressionContainerV1_1_0;
};

export const QueryAggregationExpressionV1_1_0: Schema.Codec<QueryAggregationExpressionV1_1_0> =
  closed({
    Function: Schema.suspend(() => QueryAggregateFunctionV1_0_0),
    Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  });

export type QueryMaxExpressionV1_1_0 = {
  readonly IncludeAllTypes: IncludeAllTypesV1_0_0;
  readonly Expression: QueryExpressionContainerV1_1_0;
};

export const QueryMaxExpressionV1_1_0: Schema.Codec<QueryMaxExpressionV1_1_0> = closed({
  IncludeAllTypes: Schema.suspend(() => IncludeAllTypesV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
});

export type QueryMinExpressionV1_1_0 = {
  readonly IncludeAllTypes: IncludeAllTypesV1_0_0;
  readonly Expression: QueryExpressionContainerV1_1_0;
};

export const QueryMinExpressionV1_1_0: Schema.Codec<QueryMinExpressionV1_1_0> = closed({
  IncludeAllTypes: Schema.suspend(() => IncludeAllTypesV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
});

export type QueryMeasureExpressionV1_1_0 = {
  readonly Expression: QueryExpressionContainerV1_1_0;
  readonly Property: string;
};

export const QueryMeasureExpressionV1_1_0: Schema.Codec<QueryMeasureExpressionV1_1_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  Property: Schema.String,
});

export type QueryColumnExpressionV1_1_0 = {
  readonly Expression: QueryExpressionContainerV1_1_0;
  readonly Property: string;
};

export const QueryColumnExpressionV1_1_0: Schema.Codec<QueryColumnExpressionV1_1_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_1_0),
  Property: Schema.String,
});

export type FilterDefinitionV1_2_0 = {
  readonly Version?: 2;
  readonly From: ReadonlyArray<EntitySourceV1_2_0>;
  readonly Where: ReadonlyArray<QueryFilterV1_2_0>;
};

export const FilterDefinitionV1_2_0: Schema.Codec<FilterDefinitionV1_2_0> = closed({
  Version: Schema.optionalKey(Schema.Literal(2)),
  From: Schema.Array(Schema.suspend(() => EntitySourceV1_2_0)),
  Where: Schema.Array(Schema.suspend(() => QueryFilterV1_2_0)),
});

export type QueryFilterV1_2_0 = {
  readonly Target?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly Condition: QueryExpressionContainerV1_2_0;
  readonly Annotations?: {} & {
    readonly [key: string]: Schema.Json;
  };
};

export const QueryFilterV1_2_0: Schema.Codec<QueryFilterV1_2_0> = closed({
  Target: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0))),
  Condition: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
});

export type QueryExpressionContainerV1_2_0 = {
  readonly Name?: string;
  readonly NativeReferenceName?: string;
  readonly Annotations?: {} & {
    readonly [key: string]: Schema.Json;
  };
} & ExactlyOne<{
  readonly SourceRef: StandaloneSourceRefExpressionV1_0_0 | QuerySourceRefExpressionV1_0_0;
  readonly Column: QueryColumnExpressionV1_2_0;
  readonly Measure: QueryMeasureExpressionV1_2_0;
  readonly Min: QueryMinExpressionV1_2_0;
  readonly Max: QueryMaxExpressionV1_2_0;
  readonly Aggregation: QueryAggregationExpressionV1_2_0;
  readonly Percentile: QueryPercentileExpressionV1_2_0;
  readonly Hierarchy: QueryHierarchyExpressionV1_2_0;
  readonly HierarchyLevel: QueryHierarchyLevelExpressionV1_2_0;
  readonly PropertyVariationSource: QueryPropertyVariationSourceExpressionV1_2_0;
  readonly Subquery: QuerySubqueryExpressionV1_2_0;
  readonly Discretize: QueryDiscretizeExpressionV1_2_0;
  readonly And: QueryBinaryExpressionV1_2_0;
  readonly Between: QueryBetweenExpressionV1_2_0;
  readonly In: QueryInExpressionV1_2_0;
  readonly Or: QueryBinaryExpressionV1_2_0;
  readonly Comparison: QueryComparisonExpressionV1_2_0;
  readonly Not: QueryNotExpressionV1_2_0;
  readonly Contains: QueryContainsExpressionV1_2_0;
  readonly StartsWith: QueryStartsWithExpressionV1_2_0;
  readonly Exists: QueryExistsExpressionV1_2_0;
  readonly Literal: QueryLiteralExpressionV1_0_0;
  readonly DateSpan: QueryDateSpanExpressionV1_2_0;
  readonly DateAdd: QueryDateAddExpressionV1_2_0;
  readonly Now: QueryNowExpressionV1_0_0;
  readonly DefaultValue: QueryDefaultValueExpressionV1_0_0;
  readonly AnyValue: QueryAnyValueExpressionV1_0_0;
  readonly Arithmetic: QueryArithmeticExpressionV1_2_0;
  readonly Floor: QueryFloorExpressionV1_2_0;
  readonly ScopedEval: QueryScopedEvalExpressionV1_2_0;
  readonly FilteredEval: QueryFilteredEvalExpressionV1_2_0;
  readonly TransformTableRef: QueryTransformTableRefExpressionV1_0_0;
  readonly TransformOutputRoleRef: QueryTransformOutputRoleRefExpressionV1_0_0;
  readonly SparklineData: QuerySparklineDataExpressionV1_2_0;
  readonly NativeVisualCalculation: QueryNativeVisualCalcV1_2_0;
  readonly FillRule: QueryFillRuleExpressionV1_2_0;
  readonly GroupRef: QueryGroupRefExpressionV1_2_0;
  readonly ResourcePackageItem: QueryResourcePackageItemV1_0_0;
  readonly RoleRef: QueryRoleRefExpressionV1_0_0;
  readonly SummaryValueRef: QuerySummaryValueRefExpressionV1_0_0;
  readonly AllRolesRef: QueryAllRolesRefExpressionV1_0_0;
  readonly SelectRef: QuerySelectRefExpressionV1_0_0;
  readonly ThemeDataColor: QueryThemeDataColorExpressionV1_0_0;
  readonly Conditional: QueryConditionalExpressionV1_2_0;
  readonly NativeMeasure: QueryNativeMeasureV1_2_0;
  readonly NativeColumn: QueryNativeColumnV1_2_0;
  readonly VisualTopN: QueryVisualTopNExpressionV1_1_0;
}>;

export const QueryExpressionContainerV1_2_0: Schema.Codec<QueryExpressionContainerV1_2_0> =
  Schema.Union([
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SourceRef: Schema.Union([
        Schema.suspend(() => StandaloneSourceRefExpressionV1_0_0),
        Schema.suspend(() => QuerySourceRefExpressionV1_0_0),
      ]),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Column: Schema.suspend(() => QueryColumnExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Measure: Schema.suspend(() => QueryMeasureExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Min: Schema.suspend(() => QueryMinExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Max: Schema.suspend(() => QueryMaxExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Aggregation: Schema.suspend(() => QueryAggregationExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Percentile: Schema.suspend(() => QueryPercentileExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Hierarchy: Schema.suspend(() => QueryHierarchyExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      HierarchyLevel: Schema.suspend(() => QueryHierarchyLevelExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      PropertyVariationSource: Schema.suspend(() => QueryPropertyVariationSourceExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Subquery: Schema.suspend(() => QuerySubqueryExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Discretize: Schema.suspend(() => QueryDiscretizeExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      And: Schema.suspend(() => QueryBinaryExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Between: Schema.suspend(() => QueryBetweenExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      In: Schema.suspend(() => QueryInExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Or: Schema.suspend(() => QueryBinaryExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Comparison: Schema.suspend(() => QueryComparisonExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Not: Schema.suspend(() => QueryNotExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Contains: Schema.suspend(() => QueryContainsExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      StartsWith: Schema.suspend(() => QueryStartsWithExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Exists: Schema.suspend(() => QueryExistsExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Literal: Schema.suspend(() => QueryLiteralExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      DateSpan: Schema.suspend(() => QueryDateSpanExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      DateAdd: Schema.suspend(() => QueryDateAddExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Now: Schema.suspend(() => QueryNowExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      DefaultValue: Schema.suspend(() => QueryDefaultValueExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      AnyValue: Schema.suspend(() => QueryAnyValueExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Arithmetic: Schema.suspend(() => QueryArithmeticExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Floor: Schema.suspend(() => QueryFloorExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      ScopedEval: Schema.suspend(() => QueryScopedEvalExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      FilteredEval: Schema.suspend(() => QueryFilteredEvalExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      TransformTableRef: Schema.suspend(() => QueryTransformTableRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      TransformOutputRoleRef: Schema.suspend(() => QueryTransformOutputRoleRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SparklineData: Schema.suspend(() => QuerySparklineDataExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      NativeVisualCalculation: Schema.suspend(() => QueryNativeVisualCalcV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      FillRule: Schema.suspend(() => QueryFillRuleExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      GroupRef: Schema.suspend(() => QueryGroupRefExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      ResourcePackageItem: Schema.suspend(() => QueryResourcePackageItemV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      RoleRef: Schema.suspend(() => QueryRoleRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SummaryValueRef: Schema.suspend(() => QuerySummaryValueRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      AllRolesRef: Schema.suspend(() => QueryAllRolesRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SelectRef: Schema.suspend(() => QuerySelectRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      ThemeDataColor: Schema.suspend(() => QueryThemeDataColorExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Conditional: Schema.suspend(() => QueryConditionalExpressionV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      NativeMeasure: Schema.suspend(() => QueryNativeMeasureV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      NativeColumn: Schema.suspend(() => QueryNativeColumnV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      VisualTopN: Schema.suspend(() => QueryVisualTopNExpressionV1_1_0),
    }),
  ]);

export type QueryNativeColumnV1_2_0 = {
  readonly DataType: number;
  readonly Expression: string;
  readonly Language: string;
  readonly Source: QueryExpressionContainerV1_2_0;
  readonly ExpressionContentCache?: QueryExpressionContentCacheV1_2_0;
  readonly ProposedName?: string;
  readonly Format?: string;
};

export const QueryNativeColumnV1_2_0: Schema.Codec<QueryNativeColumnV1_2_0> = closed({
  DataType: Schema.Finite,
  Expression: Schema.String,
  Language: Schema.String,
  Source: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  ExpressionContentCache: Schema.optionalKey(
    Schema.suspend(() => QueryExpressionContentCacheV1_2_0),
  ),
  ProposedName: Schema.optionalKey(Schema.String),
  Format: Schema.optionalKey(Schema.String),
});

export type QueryExpressionContentCacheV1_2_0 = {
  readonly Dependencies?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly UnrecognizedIdentifiers?: boolean;
};

export const QueryExpressionContentCacheV1_2_0: Schema.Codec<QueryExpressionContentCacheV1_2_0> =
  closed({
    Dependencies: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
    ),
    UnrecognizedIdentifiers: Schema.optionalKey(Schema.Boolean),
  });

export type QueryNativeMeasureV1_2_0 = {
  readonly DataType: number;
  readonly Expression: string;
  readonly Language: "dax";
  readonly ExpressionContentCache?: QueryExpressionContentCacheV1_2_0;
  readonly ProposedName?: string;
  readonly Format?: string;
};

export const QueryNativeMeasureV1_2_0: Schema.Codec<QueryNativeMeasureV1_2_0> = closed({
  DataType: Schema.Finite,
  Expression: Schema.String,
  Language: Schema.Literal("dax"),
  ExpressionContentCache: Schema.optionalKey(
    Schema.suspend(() => QueryExpressionContentCacheV1_2_0),
  ),
  ProposedName: Schema.optionalKey(Schema.String),
  Format: Schema.optionalKey(Schema.String),
});

export type QueryConditionalExpressionV1_2_0 = {
  readonly Cases: ReadonlyArray<QueryCaseV1_2_0>;
  readonly DefaultValue?: QueryExpressionContainerV1_2_0;
};

export const QueryConditionalExpressionV1_2_0: Schema.Codec<QueryConditionalExpressionV1_2_0> =
  closed({
    Cases: Schema.Array(Schema.suspend(() => QueryCaseV1_2_0)),
    DefaultValue: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
  });

export type QueryCaseV1_2_0 = {
  readonly Condition: QueryExpressionContainerV1_2_0;
  readonly Value: QueryExpressionContainerV1_2_0;
};

export const QueryCaseV1_2_0: Schema.Codec<QueryCaseV1_2_0> = closed({
  Condition: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  Value: Schema.suspend(() => QueryExpressionContainerV1_2_0),
});

export type QueryGroupRefExpressionV1_2_0 = {
  readonly GroupedColumns: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly Expression: QueryExpressionContainerV1_2_0;
  readonly Property: string;
};

export const QueryGroupRefExpressionV1_2_0: Schema.Codec<QueryGroupRefExpressionV1_2_0> = closed({
  GroupedColumns: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  Property: Schema.String,
});

export type QueryFillRuleExpressionV1_2_0 = {
  readonly Input: QueryExpressionContainerV1_2_0;
  readonly FillRule: Schema.Json;
};

export const QueryFillRuleExpressionV1_2_0: Schema.Codec<QueryFillRuleExpressionV1_2_0> = closed({
  Input: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  FillRule: Schema.Json,
});

export type QueryNativeVisualCalcV1_2_0 = {
  readonly Language: "dax";
  readonly Expression: string;
  readonly Name: string;
  readonly DataType?:
    | "Binary"
    | "Boolean"
    | "Date"
    | "DateTime"
    | "DateTimeZone"
    | "Decimal"
    | "Double"
    | "Duration"
    | "Integer"
    | "Json"
    | "None"
    | "Null"
    | "Text"
    | "Time"
    | "Variant";
};

export const QueryNativeVisualCalcV1_2_0: Schema.Codec<QueryNativeVisualCalcV1_2_0> = closed({
  Language: Schema.Literal("dax"),
  Expression: Schema.String,
  Name: Schema.String,
  DataType: Schema.optionalKey(
    Schema.Literals([
      "Binary",
      "Boolean",
      "Date",
      "DateTime",
      "DateTimeZone",
      "Decimal",
      "Double",
      "Duration",
      "Integer",
      "Json",
      "None",
      "Null",
      "Text",
      "Time",
      "Variant",
    ]),
  ),
});

export type QuerySparklineDataExpressionV1_2_0 = {
  readonly Measure: QueryExpressionContainerV1_2_0;
  readonly Groupings: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly PointsPerSparkline?: 52;
};

export const QuerySparklineDataExpressionV1_2_0: Schema.Codec<QuerySparklineDataExpressionV1_2_0> =
  closed({
    Measure: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    Groupings: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
    PointsPerSparkline: Schema.optionalKey(Schema.Literal(52)),
  });

export type QueryFilteredEvalExpressionV1_2_0 = {
  readonly Expression: QueryExpressionContainerV1_2_0;
  readonly Filters: ReadonlyArray<QueryFilterV1_2_0>;
};

export const QueryFilteredEvalExpressionV1_2_0: Schema.Codec<QueryFilteredEvalExpressionV1_2_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    Filters: Schema.Array(Schema.suspend(() => QueryFilterV1_2_0)),
  });

export type QueryScopedEvalExpressionV1_2_0 = {
  readonly Expression: QueryExpressionContainerV1_2_0;
  readonly Scope: ReadonlyArray<QueryExpressionContainerV1_2_0>;
};

export const QueryScopedEvalExpressionV1_2_0: Schema.Codec<QueryScopedEvalExpressionV1_2_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    Scope: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
  });

export type QueryFloorExpressionV1_2_0 = {
  readonly Expression: QueryExpressionContainerV1_2_0;
  readonly Size: number;
  readonly TimeUnit?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

export const QueryFloorExpressionV1_2_0: Schema.Codec<QueryFloorExpressionV1_2_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
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

export type QueryArithmeticExpressionV1_2_0 = {
  readonly Left: QueryExpressionContainerV1_2_0;
  readonly Right: QueryExpressionContainerV1_2_0;
  readonly Operator: ArithmeticOperatorKindV1_0_0;
};

export const QueryArithmeticExpressionV1_2_0: Schema.Codec<QueryArithmeticExpressionV1_2_0> =
  closed({
    Left: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    Operator: Schema.suspend(() => ArithmeticOperatorKindV1_0_0),
  });

export type QueryDateAddExpressionV1_2_0 = {
  readonly Amount: number;
  readonly TimeUnit: TimeUnitV1_0_0;
  readonly Expression: QueryExpressionContainerV1_2_0;
};

export const QueryDateAddExpressionV1_2_0: Schema.Codec<QueryDateAddExpressionV1_2_0> = closed({
  Amount: Schema.Finite,
  TimeUnit: Schema.suspend(() => TimeUnitV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
});

export type QueryDateSpanExpressionV1_2_0 = {
  readonly TimeUnit: TimeUnitV1_0_0;
  readonly Expression: QueryExpressionContainerV1_2_0;
};

export const QueryDateSpanExpressionV1_2_0: Schema.Codec<QueryDateSpanExpressionV1_2_0> = closed({
  TimeUnit: Schema.suspend(() => TimeUnitV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
});

export type QueryExistsExpressionV1_2_0 = {
  readonly Expression: QueryExpressionContainerV1_2_0;
};

export const QueryExistsExpressionV1_2_0: Schema.Codec<QueryExistsExpressionV1_2_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
});

export type QueryStartsWithExpressionV1_2_0 = {
  readonly Left: QueryExpressionContainerV1_2_0;
  readonly Right: QueryExpressionContainerV1_2_0;
};

export const QueryStartsWithExpressionV1_2_0: Schema.Codec<QueryStartsWithExpressionV1_2_0> =
  closed({
    Left: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  });

export type QueryContainsExpressionV1_2_0 = {
  readonly Left: QueryExpressionContainerV1_2_0;
  readonly Right: QueryExpressionContainerV1_2_0;
};

export const QueryContainsExpressionV1_2_0: Schema.Codec<QueryContainsExpressionV1_2_0> = closed({
  Left: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  Right: Schema.suspend(() => QueryExpressionContainerV1_2_0),
});

export type QueryNotExpressionV1_2_0 = {
  readonly Expression: QueryExpressionContainerV1_2_0;
};

export const QueryNotExpressionV1_2_0: Schema.Codec<QueryNotExpressionV1_2_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
});

export type QueryComparisonExpressionV1_2_0 = {
  readonly ComparisonKind: QueryComparisonKindV1_0_0;
  readonly Left: QueryExpressionContainerV1_2_0;
  readonly Right: QueryExpressionContainerV1_2_0;
};

export const QueryComparisonExpressionV1_2_0: Schema.Codec<QueryComparisonExpressionV1_2_0> =
  closed({
    ComparisonKind: Schema.suspend(() => QueryComparisonKindV1_0_0),
    Left: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  });

export type QueryBinaryExpressionV1_2_0 = {
  readonly Left: QueryExpressionContainerV1_2_0;
  readonly Right: QueryExpressionContainerV1_2_0;
};

export const QueryBinaryExpressionV1_2_0: Schema.Codec<QueryBinaryExpressionV1_2_0> = closed({
  Left: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  Right: Schema.suspend(() => QueryExpressionContainerV1_2_0),
});

export type QueryInExpressionV1_2_0 = {
  readonly Expressions: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly Values?: ReadonlyArray<ReadonlyArray<QueryExpressionContainerV1_2_0>>;
  readonly Table?: QueryExpressionContainerV1_2_0;
};

export const QueryInExpressionV1_2_0: Schema.Codec<QueryInExpressionV1_2_0> = closed({
  Expressions: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
  Values: Schema.optionalKey(
    Schema.Array(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0))),
  ),
  Table: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
});

export type QueryBetweenExpressionV1_2_0 = {
  readonly Expression: QueryExpressionContainerV1_2_0;
  readonly LowerBound: QueryExpressionContainerV1_2_0;
  readonly UpperBound: QueryExpressionContainerV1_2_0;
};

export const QueryBetweenExpressionV1_2_0: Schema.Codec<QueryBetweenExpressionV1_2_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  LowerBound: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  UpperBound: Schema.suspend(() => QueryExpressionContainerV1_2_0),
});

export type QueryDiscretizeExpressionV1_2_0 = {
  readonly Expression: QueryExpressionContainerV1_2_0;
  readonly Count: number;
};

export const QueryDiscretizeExpressionV1_2_0: Schema.Codec<QueryDiscretizeExpressionV1_2_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    Count: Schema.Finite,
  });

export type QuerySubqueryExpressionV1_2_0 = {
  readonly Query: QueryDefinitionV1_2_0;
};

export const QuerySubqueryExpressionV1_2_0: Schema.Codec<QuerySubqueryExpressionV1_2_0> = closed({
  Query: Schema.suspend(() => QueryDefinitionV1_2_0),
});

export type QueryDefinitionV1_2_0 = {
  readonly Version?: 2;
  readonly From: ReadonlyArray<EntitySourceV1_2_0>;
  readonly Where?: ReadonlyArray<QueryFilterV1_2_0>;
  readonly OrderBy?: ReadonlyArray<QuerySortClauseV1_2_0>;
  readonly Select: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly VisualShape?: ReadonlyArray<AxisV1_2_0>;
  readonly GroupBy?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly Transform?: ReadonlyArray<QueryTransformV1_2_0>;
  readonly Top?: number;
};

export const QueryDefinitionV1_2_0: Schema.Codec<QueryDefinitionV1_2_0> = closed({
  Version: Schema.optionalKey(Schema.Literal(2)),
  From: Schema.Array(Schema.suspend(() => EntitySourceV1_2_0)),
  Where: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryFilterV1_2_0))),
  OrderBy: Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortClauseV1_2_0))),
  Select: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
  VisualShape: Schema.optionalKey(Schema.Array(Schema.suspend(() => AxisV1_2_0))),
  GroupBy: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0))),
  Transform: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryTransformV1_2_0))),
  Top: Schema.optionalKey(Schema.Finite),
});

export type QueryTransformV1_2_0 = {
  readonly Name: string;
  readonly Algorithm: string;
  readonly Input: QueryTransformInputV1_2_0;
  readonly Output: QueryTransformOutputV1_2_0;
};

export const QueryTransformV1_2_0: Schema.Codec<QueryTransformV1_2_0> = closed({
  Name: Schema.String,
  Algorithm: Schema.String,
  Input: Schema.suspend(() => QueryTransformInputV1_2_0),
  Output: Schema.suspend(() => QueryTransformOutputV1_2_0),
});

export type QueryTransformOutputV1_2_0 = {
  readonly Table?: QueryTransformTableV1_2_0;
};

export const QueryTransformOutputV1_2_0: Schema.Codec<QueryTransformOutputV1_2_0> = closed({
  Table: Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_2_0)),
});

export type QueryTransformTableV1_2_0 = {
  readonly Name: string;
  readonly Columns: ReadonlyArray<QueryTransformTableColumnV1_2_0>;
};

export const QueryTransformTableV1_2_0: Schema.Codec<QueryTransformTableV1_2_0> = closed({
  Name: Schema.String,
  Columns: Schema.Array(Schema.suspend(() => QueryTransformTableColumnV1_2_0)),
});

export type QueryTransformTableColumnV1_2_0 = {
  readonly Role?: string;
  readonly Expression: QueryExpressionContainerV1_2_0;
};

export const QueryTransformTableColumnV1_2_0: Schema.Codec<QueryTransformTableColumnV1_2_0> =
  closed({
    Role: Schema.optionalKey(Schema.String),
    Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  });

export type QueryTransformInputV1_2_0 = {
  readonly Parameters: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly Table?: QueryTransformTableV1_2_0;
};

export const QueryTransformInputV1_2_0: Schema.Codec<QueryTransformInputV1_2_0> = closed({
  Parameters: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
  Table: Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_2_0)),
});

export type AxisV1_2_0 = {
  readonly Groups: ReadonlyArray<AxisGroupV1_2_0>;
  readonly Name: string;
};

export const AxisV1_2_0: Schema.Codec<AxisV1_2_0> = closed({
  Groups: Schema.Array(Schema.suspend(() => AxisGroupV1_2_0)),
  Name: Schema.String,
});

export type AxisGroupV1_2_0 = {
  readonly Keys: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly Subtotal: boolean;
};

export const AxisGroupV1_2_0: Schema.Codec<AxisGroupV1_2_0> = closed({
  Keys: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
  Subtotal: Schema.Boolean,
});

export type QuerySortClauseV1_2_0 = {
  readonly Expression: QueryExpressionContainerV1_2_0;
  readonly Direction: Schema.Json;
};

export const QuerySortClauseV1_2_0: Schema.Codec<QuerySortClauseV1_2_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  Direction: Schema.Json,
});

export type EntitySourceV1_2_0 = {
  readonly Name: string;
  readonly Entity?: string;
  readonly Schema?: string;
  readonly Expression?: QueryExpressionContainerV1_2_0;
  readonly Type?: 0 | 1 | 2;
};

export const EntitySourceV1_2_0: Schema.Codec<EntitySourceV1_2_0> = closed({
  Name: Schema.String,
  Entity: Schema.optionalKey(Schema.String),
  Schema: Schema.optionalKey(Schema.String),
  Expression: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
  Type: Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])),
});

export type QueryPropertyVariationSourceExpressionV1_2_0 = {
  readonly Expression: QueryExpressionContainerV1_2_0;
  readonly Name: string;
  readonly Property: string;
};

export const QueryPropertyVariationSourceExpressionV1_2_0: Schema.Codec<QueryPropertyVariationSourceExpressionV1_2_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    Name: Schema.String,
    Property: Schema.String,
  });

export type QueryHierarchyLevelExpressionV1_2_0 = {
  readonly Expression: QueryExpressionContainerV1_2_0;
  readonly Level: string;
};

export const QueryHierarchyLevelExpressionV1_2_0: Schema.Codec<QueryHierarchyLevelExpressionV1_2_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    Level: Schema.String,
  });

export type QueryHierarchyExpressionV1_2_0 = {
  readonly Expression: QueryExpressionContainerV1_2_0;
  readonly Hierarchy: string;
};

export const QueryHierarchyExpressionV1_2_0: Schema.Codec<QueryHierarchyExpressionV1_2_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  Hierarchy: Schema.String,
});

export type QueryPercentileExpressionV1_2_0 = {
  readonly Expression: QueryExpressionContainerV1_2_0;
  readonly K: number;
  readonly Exclusive?: boolean;
};

export const QueryPercentileExpressionV1_2_0: Schema.Codec<QueryPercentileExpressionV1_2_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
    K: Schema.Finite,
    Exclusive: Schema.optionalKey(Schema.Boolean),
  });

export type QueryAggregationExpressionV1_2_0 = {
  readonly Function: QueryAggregateFunctionV1_0_0;
  readonly Expression: QueryExpressionContainerV1_2_0;
};

export const QueryAggregationExpressionV1_2_0: Schema.Codec<QueryAggregationExpressionV1_2_0> =
  closed({
    Function: Schema.suspend(() => QueryAggregateFunctionV1_0_0),
    Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  });

export type QueryMaxExpressionV1_2_0 = {
  readonly IncludeAllTypes: IncludeAllTypesV1_0_0;
  readonly Expression: QueryExpressionContainerV1_2_0;
};

export const QueryMaxExpressionV1_2_0: Schema.Codec<QueryMaxExpressionV1_2_0> = closed({
  IncludeAllTypes: Schema.suspend(() => IncludeAllTypesV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
});

export type QueryMinExpressionV1_2_0 = {
  readonly IncludeAllTypes: IncludeAllTypesV1_0_0;
  readonly Expression: QueryExpressionContainerV1_2_0;
};

export const QueryMinExpressionV1_2_0: Schema.Codec<QueryMinExpressionV1_2_0> = closed({
  IncludeAllTypes: Schema.suspend(() => IncludeAllTypesV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
});

export type QueryMeasureExpressionV1_2_0 = {
  readonly Expression: QueryExpressionContainerV1_2_0;
  readonly Property: string;
};

export const QueryMeasureExpressionV1_2_0: Schema.Codec<QueryMeasureExpressionV1_2_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  Property: Schema.String,
});

export type QueryColumnExpressionV1_2_0 = {
  readonly Expression: QueryExpressionContainerV1_2_0;
  readonly Property: string;
};

export const QueryColumnExpressionV1_2_0: Schema.Codec<QueryColumnExpressionV1_2_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_2_0),
  Property: Schema.String,
});

export type FilterDefinitionV1_3_0 = {
  readonly Version?: 2;
  readonly From: ReadonlyArray<EntitySourceV1_3_0>;
  readonly Where: ReadonlyArray<QueryFilterV1_3_0>;
};

export const FilterDefinitionV1_3_0: Schema.Codec<FilterDefinitionV1_3_0> = closed({
  Version: Schema.optionalKey(Schema.Literal(2)),
  From: Schema.Array(Schema.suspend(() => EntitySourceV1_3_0)),
  Where: Schema.Array(Schema.suspend(() => QueryFilterV1_3_0)),
});

export type QueryFilterV1_3_0 = {
  readonly Target?: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly Condition: QueryExpressionContainerV1_3_0;
  readonly Annotations?: {} & {
    readonly [key: string]: Schema.Json;
  };
};

export const QueryFilterV1_3_0: Schema.Codec<QueryFilterV1_3_0> = closed({
  Target: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0))),
  Condition: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
});

export type QueryExpressionContainerV1_3_0 = {
  readonly Name?: string;
  readonly NativeReferenceName?: string;
  readonly Annotations?: {} & {
    readonly [key: string]: Schema.Json;
  };
} & ExactlyOne<{
  readonly SourceRef: StandaloneSourceRefExpressionV1_0_0 | QuerySourceRefExpressionV1_0_0;
  readonly Column: QueryColumnExpressionV1_3_0;
  readonly Measure: QueryMeasureExpressionV1_3_0;
  readonly Min: QueryMinExpressionV1_3_0;
  readonly Max: QueryMaxExpressionV1_3_0;
  readonly Aggregation: QueryAggregationExpressionV1_3_0;
  readonly Percentile: QueryPercentileExpressionV1_3_0;
  readonly Hierarchy: QueryHierarchyExpressionV1_3_0;
  readonly HierarchyLevel: QueryHierarchyLevelExpressionV1_3_0;
  readonly PropertyVariationSource: QueryPropertyVariationSourceExpressionV1_3_0;
  readonly Subquery: QuerySubqueryExpressionV1_3_0;
  readonly Discretize: QueryDiscretizeExpressionV1_3_0;
  readonly And: QueryBinaryExpressionV1_3_0;
  readonly Between: QueryBetweenExpressionV1_3_0;
  readonly In: QueryInExpressionV1_3_0;
  readonly Or: QueryBinaryExpressionV1_3_0;
  readonly Comparison: QueryComparisonExpressionV1_3_0;
  readonly Not: QueryNotExpressionV1_3_0;
  readonly Contains: QueryContainsExpressionV1_3_0;
  readonly StartsWith: QueryStartsWithExpressionV1_3_0;
  readonly Exists: QueryExistsExpressionV1_3_0;
  readonly Literal: QueryLiteralExpressionV1_0_0;
  readonly DateSpan: QueryDateSpanExpressionV1_3_0;
  readonly DateAdd: QueryDateAddExpressionV1_3_0;
  readonly Now: QueryNowExpressionV1_0_0;
  readonly DefaultValue: QueryDefaultValueExpressionV1_0_0;
  readonly AnyValue: QueryAnyValueExpressionV1_0_0;
  readonly Arithmetic: QueryArithmeticExpressionV1_3_0;
  readonly Floor: QueryFloorExpressionV1_3_0;
  readonly ScopedEval: QueryScopedEvalExpressionV1_3_0;
  readonly FilteredEval: QueryFilteredEvalExpressionV1_3_0;
  readonly TransformTableRef: QueryTransformTableRefExpressionV1_0_0;
  readonly TransformOutputRoleRef: QueryTransformOutputRoleRefExpressionV1_0_0;
  readonly SparklineData: QuerySparklineDataExpressionV1_3_0;
  readonly NativeVisualCalculation: QueryNativeVisualCalcV1_2_0;
  readonly FillRule: QueryFillRuleExpressionV1_3_0;
  readonly GroupRef: QueryGroupRefExpressionV1_3_0;
  readonly ResourcePackageItem: QueryResourcePackageItemV1_0_0;
  readonly RoleRef: QueryRoleRefExpressionV1_0_0;
  readonly SummaryValueRef: QuerySummaryValueRefExpressionV1_0_0;
  readonly AllRolesRef: QueryAllRolesRefExpressionV1_0_0;
  readonly SelectRef: QuerySelectRefExpressionV1_0_0;
  readonly ThemeDataColor: QueryThemeDataColorExpressionV1_0_0;
  readonly Conditional: QueryConditionalExpressionV1_3_0;
  readonly NativeMeasure: QueryNativeMeasureV1_3_0;
  readonly NativeColumn: QueryNativeColumnV1_3_0;
  readonly VisualTopN: QueryVisualTopNExpressionV1_1_0;
}>;

export const QueryExpressionContainerV1_3_0: Schema.Codec<QueryExpressionContainerV1_3_0> =
  Schema.Union([
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SourceRef: Schema.Union([
        Schema.suspend(() => StandaloneSourceRefExpressionV1_0_0),
        Schema.suspend(() => QuerySourceRefExpressionV1_0_0),
      ]),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Column: Schema.suspend(() => QueryColumnExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Measure: Schema.suspend(() => QueryMeasureExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Min: Schema.suspend(() => QueryMinExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Max: Schema.suspend(() => QueryMaxExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Aggregation: Schema.suspend(() => QueryAggregationExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Percentile: Schema.suspend(() => QueryPercentileExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Hierarchy: Schema.suspend(() => QueryHierarchyExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      HierarchyLevel: Schema.suspend(() => QueryHierarchyLevelExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      PropertyVariationSource: Schema.suspend(() => QueryPropertyVariationSourceExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Subquery: Schema.suspend(() => QuerySubqueryExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Discretize: Schema.suspend(() => QueryDiscretizeExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      And: Schema.suspend(() => QueryBinaryExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Between: Schema.suspend(() => QueryBetweenExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      In: Schema.suspend(() => QueryInExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Or: Schema.suspend(() => QueryBinaryExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Comparison: Schema.suspend(() => QueryComparisonExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Not: Schema.suspend(() => QueryNotExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Contains: Schema.suspend(() => QueryContainsExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      StartsWith: Schema.suspend(() => QueryStartsWithExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Exists: Schema.suspend(() => QueryExistsExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Literal: Schema.suspend(() => QueryLiteralExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      DateSpan: Schema.suspend(() => QueryDateSpanExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      DateAdd: Schema.suspend(() => QueryDateAddExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Now: Schema.suspend(() => QueryNowExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      DefaultValue: Schema.suspend(() => QueryDefaultValueExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      AnyValue: Schema.suspend(() => QueryAnyValueExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Arithmetic: Schema.suspend(() => QueryArithmeticExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Floor: Schema.suspend(() => QueryFloorExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      ScopedEval: Schema.suspend(() => QueryScopedEvalExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      FilteredEval: Schema.suspend(() => QueryFilteredEvalExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      TransformTableRef: Schema.suspend(() => QueryTransformTableRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      TransformOutputRoleRef: Schema.suspend(() => QueryTransformOutputRoleRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SparklineData: Schema.suspend(() => QuerySparklineDataExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      NativeVisualCalculation: Schema.suspend(() => QueryNativeVisualCalcV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      FillRule: Schema.suspend(() => QueryFillRuleExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      GroupRef: Schema.suspend(() => QueryGroupRefExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      ResourcePackageItem: Schema.suspend(() => QueryResourcePackageItemV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      RoleRef: Schema.suspend(() => QueryRoleRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SummaryValueRef: Schema.suspend(() => QuerySummaryValueRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      AllRolesRef: Schema.suspend(() => QueryAllRolesRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      SelectRef: Schema.suspend(() => QuerySelectRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      ThemeDataColor: Schema.suspend(() => QueryThemeDataColorExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      Conditional: Schema.suspend(() => QueryConditionalExpressionV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      NativeMeasure: Schema.suspend(() => QueryNativeMeasureV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      NativeColumn: Schema.suspend(() => QueryNativeColumnV1_3_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
      VisualTopN: Schema.suspend(() => QueryVisualTopNExpressionV1_1_0),
    }),
  ]);

export type QueryNativeColumnV1_3_0 = {
  readonly DataType: number;
  readonly Expression: string;
  readonly Language: string;
  readonly Source: QueryExpressionContainerV1_3_0;
  readonly ExpressionContentCache?: QueryExpressionContentCacheV1_3_0;
  readonly ProposedName?: string;
  readonly Format?: string;
};

export const QueryNativeColumnV1_3_0: Schema.Codec<QueryNativeColumnV1_3_0> = closed({
  DataType: Schema.Finite,
  Expression: Schema.String,
  Language: Schema.String,
  Source: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  ExpressionContentCache: Schema.optionalKey(
    Schema.suspend(() => QueryExpressionContentCacheV1_3_0),
  ),
  ProposedName: Schema.optionalKey(Schema.String),
  Format: Schema.optionalKey(Schema.String),
});

export type QueryExpressionContentCacheV1_3_0 = {
  readonly Dependencies?: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly UnrecognizedIdentifiers?: boolean;
};

export const QueryExpressionContentCacheV1_3_0: Schema.Codec<QueryExpressionContentCacheV1_3_0> =
  closed({
    Dependencies: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
    ),
    UnrecognizedIdentifiers: Schema.optionalKey(Schema.Boolean),
  });

export type QueryNativeMeasureV1_3_0 = {
  readonly DataType: number;
  readonly Expression: string;
  readonly Language: "dax";
  readonly ExpressionContentCache?: QueryExpressionContentCacheV1_3_0;
  readonly ProposedName?: string;
  readonly Format?: string;
};

export const QueryNativeMeasureV1_3_0: Schema.Codec<QueryNativeMeasureV1_3_0> = closed({
  DataType: Schema.Finite,
  Expression: Schema.String,
  Language: Schema.Literal("dax"),
  ExpressionContentCache: Schema.optionalKey(
    Schema.suspend(() => QueryExpressionContentCacheV1_3_0),
  ),
  ProposedName: Schema.optionalKey(Schema.String),
  Format: Schema.optionalKey(Schema.String),
});

export type QueryConditionalExpressionV1_3_0 = {
  readonly Cases: ReadonlyArray<QueryCaseV1_3_0>;
  readonly DefaultValue?: QueryExpressionContainerV1_3_0;
};

export const QueryConditionalExpressionV1_3_0: Schema.Codec<QueryConditionalExpressionV1_3_0> =
  closed({
    Cases: Schema.Array(Schema.suspend(() => QueryCaseV1_3_0)),
    DefaultValue: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
  });

export type QueryCaseV1_3_0 = {
  readonly Condition: QueryExpressionContainerV1_3_0;
  readonly Value: QueryExpressionContainerV1_3_0;
};

export const QueryCaseV1_3_0: Schema.Codec<QueryCaseV1_3_0> = closed({
  Condition: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  Value: Schema.suspend(() => QueryExpressionContainerV1_3_0),
});

export type QueryGroupRefExpressionV1_3_0 = {
  readonly GroupedColumns: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly Expression: QueryExpressionContainerV1_3_0;
  readonly Property: string;
};

export const QueryGroupRefExpressionV1_3_0: Schema.Codec<QueryGroupRefExpressionV1_3_0> = closed({
  GroupedColumns: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  Property: Schema.String,
});

export type QueryFillRuleExpressionV1_3_0 = {
  readonly Input: QueryExpressionContainerV1_3_0;
  readonly FillRule: Schema.Json;
};

export const QueryFillRuleExpressionV1_3_0: Schema.Codec<QueryFillRuleExpressionV1_3_0> = closed({
  Input: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  FillRule: Schema.Json,
});

export type QuerySparklineDataExpressionV1_3_0 = {
  readonly Measure: QueryExpressionContainerV1_3_0;
  readonly Groupings: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly PointsPerSparkline?: 52;
  readonly ApplyCalculationGroupTo?: "Sparkline" | "Point";
};

export const QuerySparklineDataExpressionV1_3_0: Schema.Codec<QuerySparklineDataExpressionV1_3_0> =
  closed({
    Measure: Schema.suspend(() => QueryExpressionContainerV1_3_0),
    Groupings: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
    PointsPerSparkline: Schema.optionalKey(Schema.Literal(52)),
    ApplyCalculationGroupTo: Schema.optionalKey(
      Schema.Union([Schema.Literal("Sparkline"), Schema.Literal("Point")]),
    ),
  });

export type QueryFilteredEvalExpressionV1_3_0 = {
  readonly Expression: QueryExpressionContainerV1_3_0;
  readonly Filters: ReadonlyArray<QueryFilterV1_3_0>;
};

export const QueryFilteredEvalExpressionV1_3_0: Schema.Codec<QueryFilteredEvalExpressionV1_3_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
    Filters: Schema.Array(Schema.suspend(() => QueryFilterV1_3_0)),
  });

export type QueryScopedEvalExpressionV1_3_0 = {
  readonly Expression: QueryExpressionContainerV1_3_0;
  readonly Scope: ReadonlyArray<QueryExpressionContainerV1_3_0>;
};

export const QueryScopedEvalExpressionV1_3_0: Schema.Codec<QueryScopedEvalExpressionV1_3_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
    Scope: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
  });

export type QueryFloorExpressionV1_3_0 = {
  readonly Expression: QueryExpressionContainerV1_3_0;
  readonly Size: number;
  readonly TimeUnit?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

export const QueryFloorExpressionV1_3_0: Schema.Codec<QueryFloorExpressionV1_3_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
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

export type QueryArithmeticExpressionV1_3_0 = {
  readonly Left: QueryExpressionContainerV1_3_0;
  readonly Right: QueryExpressionContainerV1_3_0;
  readonly Operator: ArithmeticOperatorKindV1_0_0;
};

export const QueryArithmeticExpressionV1_3_0: Schema.Codec<QueryArithmeticExpressionV1_3_0> =
  closed({
    Left: Schema.suspend(() => QueryExpressionContainerV1_3_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_3_0),
    Operator: Schema.suspend(() => ArithmeticOperatorKindV1_0_0),
  });

export type QueryDateAddExpressionV1_3_0 = {
  readonly Amount: number;
  readonly TimeUnit: TimeUnitV1_0_0;
  readonly Expression: QueryExpressionContainerV1_3_0;
};

export const QueryDateAddExpressionV1_3_0: Schema.Codec<QueryDateAddExpressionV1_3_0> = closed({
  Amount: Schema.Finite,
  TimeUnit: Schema.suspend(() => TimeUnitV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
});

export type QueryDateSpanExpressionV1_3_0 = {
  readonly TimeUnit: TimeUnitV1_0_0;
  readonly Expression: QueryExpressionContainerV1_3_0;
};

export const QueryDateSpanExpressionV1_3_0: Schema.Codec<QueryDateSpanExpressionV1_3_0> = closed({
  TimeUnit: Schema.suspend(() => TimeUnitV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
});

export type QueryExistsExpressionV1_3_0 = {
  readonly Expression: QueryExpressionContainerV1_3_0;
};

export const QueryExistsExpressionV1_3_0: Schema.Codec<QueryExistsExpressionV1_3_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
});

export type QueryStartsWithExpressionV1_3_0 = {
  readonly Left: QueryExpressionContainerV1_3_0;
  readonly Right: QueryExpressionContainerV1_3_0;
};

export const QueryStartsWithExpressionV1_3_0: Schema.Codec<QueryStartsWithExpressionV1_3_0> =
  closed({
    Left: Schema.suspend(() => QueryExpressionContainerV1_3_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  });

export type QueryContainsExpressionV1_3_0 = {
  readonly Left: QueryExpressionContainerV1_3_0;
  readonly Right: QueryExpressionContainerV1_3_0;
};

export const QueryContainsExpressionV1_3_0: Schema.Codec<QueryContainsExpressionV1_3_0> = closed({
  Left: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  Right: Schema.suspend(() => QueryExpressionContainerV1_3_0),
});

export type QueryNotExpressionV1_3_0 = {
  readonly Expression: QueryExpressionContainerV1_3_0;
};

export const QueryNotExpressionV1_3_0: Schema.Codec<QueryNotExpressionV1_3_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
});

export type QueryComparisonExpressionV1_3_0 = {
  readonly ComparisonKind: QueryComparisonKindV1_0_0;
  readonly Left: QueryExpressionContainerV1_3_0;
  readonly Right: QueryExpressionContainerV1_3_0;
};

export const QueryComparisonExpressionV1_3_0: Schema.Codec<QueryComparisonExpressionV1_3_0> =
  closed({
    ComparisonKind: Schema.suspend(() => QueryComparisonKindV1_0_0),
    Left: Schema.suspend(() => QueryExpressionContainerV1_3_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  });

export type QueryBinaryExpressionV1_3_0 = {
  readonly Left: QueryExpressionContainerV1_3_0;
  readonly Right: QueryExpressionContainerV1_3_0;
};

export const QueryBinaryExpressionV1_3_0: Schema.Codec<QueryBinaryExpressionV1_3_0> = closed({
  Left: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  Right: Schema.suspend(() => QueryExpressionContainerV1_3_0),
});

export type QueryInExpressionV1_3_0 = {
  readonly Expressions: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly Values?: ReadonlyArray<ReadonlyArray<QueryExpressionContainerV1_3_0>>;
  readonly Table?: QueryExpressionContainerV1_3_0;
};

export const QueryInExpressionV1_3_0: Schema.Codec<QueryInExpressionV1_3_0> = closed({
  Expressions: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
  Values: Schema.optionalKey(
    Schema.Array(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0))),
  ),
  Table: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
});

export type QueryBetweenExpressionV1_3_0 = {
  readonly Expression: QueryExpressionContainerV1_3_0;
  readonly LowerBound: QueryExpressionContainerV1_3_0;
  readonly UpperBound: QueryExpressionContainerV1_3_0;
};

export const QueryBetweenExpressionV1_3_0: Schema.Codec<QueryBetweenExpressionV1_3_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  LowerBound: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  UpperBound: Schema.suspend(() => QueryExpressionContainerV1_3_0),
});

export type QueryDiscretizeExpressionV1_3_0 = {
  readonly Expression: QueryExpressionContainerV1_3_0;
  readonly Count: number;
};

export const QueryDiscretizeExpressionV1_3_0: Schema.Codec<QueryDiscretizeExpressionV1_3_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
    Count: Schema.Finite,
  });

export type QuerySubqueryExpressionV1_3_0 = {
  readonly Query: QueryDefinitionV1_3_0;
};

export const QuerySubqueryExpressionV1_3_0: Schema.Codec<QuerySubqueryExpressionV1_3_0> = closed({
  Query: Schema.suspend(() => QueryDefinitionV1_3_0),
});

export type QueryDefinitionV1_3_0 = {
  readonly Version?: 2;
  readonly From: ReadonlyArray<EntitySourceV1_3_0>;
  readonly Where?: ReadonlyArray<QueryFilterV1_3_0>;
  readonly OrderBy?: ReadonlyArray<QuerySortClauseV1_3_0>;
  readonly Select: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly VisualShape?: ReadonlyArray<AxisV1_3_0>;
  readonly GroupBy?: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly Transform?: ReadonlyArray<QueryTransformV1_3_0>;
  readonly Top?: number;
};

export const QueryDefinitionV1_3_0: Schema.Codec<QueryDefinitionV1_3_0> = closed({
  Version: Schema.optionalKey(Schema.Literal(2)),
  From: Schema.Array(Schema.suspend(() => EntitySourceV1_3_0)),
  Where: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryFilterV1_3_0))),
  OrderBy: Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortClauseV1_3_0))),
  Select: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
  VisualShape: Schema.optionalKey(Schema.Array(Schema.suspend(() => AxisV1_3_0))),
  GroupBy: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0))),
  Transform: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryTransformV1_3_0))),
  Top: Schema.optionalKey(Schema.Finite),
});

export type QueryTransformV1_3_0 = {
  readonly Name: string;
  readonly Algorithm: string;
  readonly Input: QueryTransformInputV1_3_0;
  readonly Output: QueryTransformOutputV1_3_0;
};

export const QueryTransformV1_3_0: Schema.Codec<QueryTransformV1_3_0> = closed({
  Name: Schema.String,
  Algorithm: Schema.String,
  Input: Schema.suspend(() => QueryTransformInputV1_3_0),
  Output: Schema.suspend(() => QueryTransformOutputV1_3_0),
});

export type QueryTransformOutputV1_3_0 = {
  readonly Table?: QueryTransformTableV1_3_0;
};

export const QueryTransformOutputV1_3_0: Schema.Codec<QueryTransformOutputV1_3_0> = closed({
  Table: Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_3_0)),
});

export type QueryTransformTableV1_3_0 = {
  readonly Name: string;
  readonly Columns: ReadonlyArray<QueryTransformTableColumnV1_3_0>;
};

export const QueryTransformTableV1_3_0: Schema.Codec<QueryTransformTableV1_3_0> = closed({
  Name: Schema.String,
  Columns: Schema.Array(Schema.suspend(() => QueryTransformTableColumnV1_3_0)),
});

export type QueryTransformTableColumnV1_3_0 = {
  readonly Role?: string;
  readonly Expression: QueryExpressionContainerV1_3_0;
};

export const QueryTransformTableColumnV1_3_0: Schema.Codec<QueryTransformTableColumnV1_3_0> =
  closed({
    Role: Schema.optionalKey(Schema.String),
    Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  });

export type QueryTransformInputV1_3_0 = {
  readonly Parameters: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly Table?: QueryTransformTableV1_3_0;
};

export const QueryTransformInputV1_3_0: Schema.Codec<QueryTransformInputV1_3_0> = closed({
  Parameters: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
  Table: Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_3_0)),
});

export type AxisV1_3_0 = {
  readonly Groups: ReadonlyArray<AxisGroupV1_3_0>;
  readonly Name: string;
};

export const AxisV1_3_0: Schema.Codec<AxisV1_3_0> = closed({
  Groups: Schema.Array(Schema.suspend(() => AxisGroupV1_3_0)),
  Name: Schema.String,
});

export type AxisGroupV1_3_0 = {
  readonly Keys: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly Subtotal: boolean;
};

export const AxisGroupV1_3_0: Schema.Codec<AxisGroupV1_3_0> = closed({
  Keys: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
  Subtotal: Schema.Boolean,
});

export type QuerySortClauseV1_3_0 = {
  readonly Expression: QueryExpressionContainerV1_3_0;
  readonly Direction: SortDirectionV1_3_0;
};

export const QuerySortClauseV1_3_0: Schema.Codec<QuerySortClauseV1_3_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  Direction: Schema.suspend(() => SortDirectionV1_3_0),
});

export type SortDirectionV1_3_0 = 1 | 2;

export const SortDirectionV1_3_0: Schema.Codec<SortDirectionV1_3_0> = Schema.Union([
  Schema.Literal(1),
  Schema.Literal(2),
]);

export type EntitySourceV1_3_0 = {
  readonly Name: string;
  readonly Entity?: string;
  readonly Schema?: string;
  readonly Expression?: QueryExpressionContainerV1_3_0;
  readonly Type?: 0 | 1 | 2;
};

export const EntitySourceV1_3_0: Schema.Codec<EntitySourceV1_3_0> = closed({
  Name: Schema.String,
  Entity: Schema.optionalKey(Schema.String),
  Schema: Schema.optionalKey(Schema.String),
  Expression: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_3_0)),
  Type: Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])),
});

export type QueryPropertyVariationSourceExpressionV1_3_0 = {
  readonly Expression: QueryExpressionContainerV1_3_0;
  readonly Name: string;
  readonly Property: string;
};

export const QueryPropertyVariationSourceExpressionV1_3_0: Schema.Codec<QueryPropertyVariationSourceExpressionV1_3_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
    Name: Schema.String,
    Property: Schema.String,
  });

export type QueryHierarchyLevelExpressionV1_3_0 = {
  readonly Expression: QueryExpressionContainerV1_3_0;
  readonly Level: string;
};

export const QueryHierarchyLevelExpressionV1_3_0: Schema.Codec<QueryHierarchyLevelExpressionV1_3_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
    Level: Schema.String,
  });

export type QueryHierarchyExpressionV1_3_0 = {
  readonly Expression: QueryExpressionContainerV1_3_0;
  readonly Hierarchy: string;
};

export const QueryHierarchyExpressionV1_3_0: Schema.Codec<QueryHierarchyExpressionV1_3_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  Hierarchy: Schema.String,
});

export type QueryPercentileExpressionV1_3_0 = {
  readonly Expression: QueryExpressionContainerV1_3_0;
  readonly K: number;
  readonly Exclusive?: boolean;
};

export const QueryPercentileExpressionV1_3_0: Schema.Codec<QueryPercentileExpressionV1_3_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
    K: Schema.Finite,
    Exclusive: Schema.optionalKey(Schema.Boolean),
  });

export type QueryAggregationExpressionV1_3_0 = {
  readonly Function: QueryAggregateFunctionV1_0_0;
  readonly Expression: QueryExpressionContainerV1_3_0;
};

export const QueryAggregationExpressionV1_3_0: Schema.Codec<QueryAggregationExpressionV1_3_0> =
  closed({
    Function: Schema.suspend(() => QueryAggregateFunctionV1_0_0),
    Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  });

export type QueryMaxExpressionV1_3_0 = {
  readonly IncludeAllTypes: IncludeAllTypesV1_0_0;
  readonly Expression: QueryExpressionContainerV1_3_0;
};

export const QueryMaxExpressionV1_3_0: Schema.Codec<QueryMaxExpressionV1_3_0> = closed({
  IncludeAllTypes: Schema.suspend(() => IncludeAllTypesV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
});

export type QueryMinExpressionV1_3_0 = {
  readonly IncludeAllTypes: IncludeAllTypesV1_0_0;
  readonly Expression: QueryExpressionContainerV1_3_0;
};

export const QueryMinExpressionV1_3_0: Schema.Codec<QueryMinExpressionV1_3_0> = closed({
  IncludeAllTypes: Schema.suspend(() => IncludeAllTypesV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
});

export type QueryMeasureExpressionV1_3_0 = {
  readonly Expression: QueryExpressionContainerV1_3_0;
  readonly Property: string;
};

export const QueryMeasureExpressionV1_3_0: Schema.Codec<QueryMeasureExpressionV1_3_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  Property: Schema.String,
});

export type QueryColumnExpressionV1_3_0 = {
  readonly Expression: QueryExpressionContainerV1_3_0;
  readonly Property: string;
};

export const QueryColumnExpressionV1_3_0: Schema.Codec<QueryColumnExpressionV1_3_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_3_0),
  Property: Schema.String,
});

export type FilterDefinitionV1_4_0 = {
  readonly Version?: 2;
  readonly From: ReadonlyArray<EntitySourceV1_4_0>;
  readonly Where: ReadonlyArray<QueryFilterV1_4_0>;
};

export const FilterDefinitionV1_4_0: Schema.Codec<FilterDefinitionV1_4_0> = closed({
  Version: Schema.optionalKey(Schema.Literal(2)),
  From: Schema.Array(Schema.suspend(() => EntitySourceV1_4_0)),
  Where: Schema.Array(Schema.suspend(() => QueryFilterV1_4_0)),
});

export type QueryFilterV1_4_0 = {
  readonly Target?: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly Condition: QueryExpressionContainerV1_4_0;
  readonly Annotations?: {} & {
    readonly [key: string]: Schema.Json;
  };
};

export const QueryFilterV1_4_0: Schema.Codec<QueryFilterV1_4_0> = closed({
  Target: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0))),
  Condition: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  Annotations: Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)),
});

export type QueryExpressionContainerV1_4_0 = {
  readonly Name?: string;
  readonly NativeReferenceName?: string;
  readonly Annotations?: {
    readonly customTotalMetadata?: QueryCustomTotalMetadataV1_4_0;
  } & {
    readonly [key: string]: Schema.Json;
  };
} & ExactlyOne<{
  readonly SourceRef: StandaloneSourceRefExpressionV1_0_0 | QuerySourceRefExpressionV1_0_0;
  readonly Column: QueryColumnExpressionV1_4_0;
  readonly Measure: QueryMeasureExpressionV1_4_0;
  readonly Min: QueryMinExpressionV1_4_0;
  readonly Max: QueryMaxExpressionV1_4_0;
  readonly Aggregation: QueryAggregationExpressionV1_4_0;
  readonly Percentile: QueryPercentileExpressionV1_4_0;
  readonly Hierarchy: QueryHierarchyExpressionV1_4_0;
  readonly HierarchyLevel: QueryHierarchyLevelExpressionV1_4_0;
  readonly PropertyVariationSource: QueryPropertyVariationSourceExpressionV1_4_0;
  readonly Subquery: QuerySubqueryExpressionV1_4_0;
  readonly Discretize: QueryDiscretizeExpressionV1_4_0;
  readonly And: QueryBinaryExpressionV1_4_0;
  readonly Between: QueryBetweenExpressionV1_4_0;
  readonly In: QueryInExpressionV1_4_0;
  readonly Or: QueryBinaryExpressionV1_4_0;
  readonly Comparison: QueryComparisonExpressionV1_4_0;
  readonly Not: QueryNotExpressionV1_4_0;
  readonly Contains: QueryContainsExpressionV1_4_0;
  readonly StartsWith: QueryStartsWithExpressionV1_4_0;
  readonly Exists: QueryExistsExpressionV1_4_0;
  readonly Literal: QueryLiteralExpressionV1_0_0;
  readonly DateSpan: QueryDateSpanExpressionV1_4_0;
  readonly DateAdd: QueryDateAddExpressionV1_4_0;
  readonly Now: QueryNowExpressionV1_0_0;
  readonly DefaultValue: QueryDefaultValueExpressionV1_0_0;
  readonly AnyValue: QueryAnyValueExpressionV1_0_0;
  readonly Arithmetic: QueryArithmeticExpressionV1_4_0;
  readonly Floor: QueryFloorExpressionV1_4_0;
  readonly ScopedEval: QueryScopedEvalExpressionV1_4_0;
  readonly FilteredEval: QueryFilteredEvalExpressionV1_4_0;
  readonly TransformTableRef: QueryTransformTableRefExpressionV1_0_0;
  readonly TransformOutputRoleRef: QueryTransformOutputRoleRefExpressionV1_0_0;
  readonly SparklineData: QuerySparklineDataExpressionV1_4_0;
  readonly NativeVisualCalculation: QueryNativeVisualCalcV1_2_0;
  readonly FillRule: QueryFillRuleExpressionV1_4_0;
  readonly GroupRef: QueryGroupRefExpressionV1_4_0;
  readonly ResourcePackageItem: QueryResourcePackageItemV1_0_0;
  readonly RoleRef: QueryRoleRefExpressionV1_0_0;
  readonly SummaryValueRef: QuerySummaryValueRefExpressionV1_0_0;
  readonly AllRolesRef: QueryAllRolesRefExpressionV1_0_0;
  readonly SelectRef: QuerySelectRefExpressionV1_0_0;
  readonly ThemeDataColor: QueryThemeDataColorExpressionV1_0_0;
  readonly Conditional: QueryConditionalExpressionV1_4_0;
  readonly NativeMeasure: QueryNativeMeasureV1_4_0;
  readonly NativeColumn: QueryNativeColumnV1_4_0;
  readonly VisualTopN: QueryVisualTopNExpressionV1_1_0;
}>;

export const QueryExpressionContainerV1_4_0: Schema.Codec<QueryExpressionContainerV1_4_0> =
  Schema.Union([
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      SourceRef: Schema.Union([
        Schema.suspend(() => StandaloneSourceRefExpressionV1_0_0),
        Schema.suspend(() => QuerySourceRefExpressionV1_0_0),
      ]),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Column: Schema.suspend(() => QueryColumnExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Measure: Schema.suspend(() => QueryMeasureExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Min: Schema.suspend(() => QueryMinExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Max: Schema.suspend(() => QueryMaxExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Aggregation: Schema.suspend(() => QueryAggregationExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Percentile: Schema.suspend(() => QueryPercentileExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Hierarchy: Schema.suspend(() => QueryHierarchyExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      HierarchyLevel: Schema.suspend(() => QueryHierarchyLevelExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      PropertyVariationSource: Schema.suspend(() => QueryPropertyVariationSourceExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Subquery: Schema.suspend(() => QuerySubqueryExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Discretize: Schema.suspend(() => QueryDiscretizeExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      And: Schema.suspend(() => QueryBinaryExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Between: Schema.suspend(() => QueryBetweenExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      In: Schema.suspend(() => QueryInExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Or: Schema.suspend(() => QueryBinaryExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Comparison: Schema.suspend(() => QueryComparisonExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Not: Schema.suspend(() => QueryNotExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Contains: Schema.suspend(() => QueryContainsExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      StartsWith: Schema.suspend(() => QueryStartsWithExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Exists: Schema.suspend(() => QueryExistsExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Literal: Schema.suspend(() => QueryLiteralExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      DateSpan: Schema.suspend(() => QueryDateSpanExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      DateAdd: Schema.suspend(() => QueryDateAddExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Now: Schema.suspend(() => QueryNowExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      DefaultValue: Schema.suspend(() => QueryDefaultValueExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      AnyValue: Schema.suspend(() => QueryAnyValueExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Arithmetic: Schema.suspend(() => QueryArithmeticExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Floor: Schema.suspend(() => QueryFloorExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      ScopedEval: Schema.suspend(() => QueryScopedEvalExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      FilteredEval: Schema.suspend(() => QueryFilteredEvalExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      TransformTableRef: Schema.suspend(() => QueryTransformTableRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      TransformOutputRoleRef: Schema.suspend(() => QueryTransformOutputRoleRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      SparklineData: Schema.suspend(() => QuerySparklineDataExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      NativeVisualCalculation: Schema.suspend(() => QueryNativeVisualCalcV1_2_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      FillRule: Schema.suspend(() => QueryFillRuleExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      GroupRef: Schema.suspend(() => QueryGroupRefExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      ResourcePackageItem: Schema.suspend(() => QueryResourcePackageItemV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      RoleRef: Schema.suspend(() => QueryRoleRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      SummaryValueRef: Schema.suspend(() => QuerySummaryValueRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      AllRolesRef: Schema.suspend(() => QueryAllRolesRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      SelectRef: Schema.suspend(() => QuerySelectRefExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      ThemeDataColor: Schema.suspend(() => QueryThemeDataColorExpressionV1_0_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      Conditional: Schema.suspend(() => QueryConditionalExpressionV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      NativeMeasure: Schema.suspend(() => QueryNativeMeasureV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      NativeColumn: Schema.suspend(() => QueryNativeColumnV1_4_0),
    }),
    closed({
      Name: Schema.optionalKey(Schema.String),
      NativeReferenceName: Schema.optionalKey(Schema.String),
      Annotations: Schema.optionalKey(
        Schema.StructWithRest(
          Schema.Struct({
            customTotalMetadata: Schema.optionalKey(
              Schema.suspend(() => QueryCustomTotalMetadataV1_4_0),
            ),
          }),
          [Schema.Record(Schema.String, Schema.Json)],
        ),
      ),
      VisualTopN: Schema.suspend(() => QueryVisualTopNExpressionV1_1_0),
    }),
  ]);

export type QueryNativeColumnV1_4_0 = {
  readonly DataType: number;
  readonly Expression: string;
  readonly Language: string;
  readonly Source: QueryExpressionContainerV1_4_0;
  readonly ExpressionContentCache?: QueryExpressionContentCacheV1_4_0;
  readonly ProposedName?: string;
  readonly Format?: string;
};

export const QueryNativeColumnV1_4_0: Schema.Codec<QueryNativeColumnV1_4_0> = closed({
  DataType: Schema.Finite,
  Expression: Schema.String,
  Language: Schema.String,
  Source: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  ExpressionContentCache: Schema.optionalKey(
    Schema.suspend(() => QueryExpressionContentCacheV1_4_0),
  ),
  ProposedName: Schema.optionalKey(Schema.String),
  Format: Schema.optionalKey(Schema.String),
});

export type QueryExpressionContentCacheV1_4_0 = {
  readonly Dependencies?: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly UnrecognizedIdentifiers?: boolean;
};

export const QueryExpressionContentCacheV1_4_0: Schema.Codec<QueryExpressionContentCacheV1_4_0> =
  closed({
    Dependencies: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
    ),
    UnrecognizedIdentifiers: Schema.optionalKey(Schema.Boolean),
  });

export type QueryNativeMeasureV1_4_0 = {
  readonly DataType: number;
  readonly Expression: string;
  readonly Language: "dax";
  readonly ExpressionContentCache?: QueryExpressionContentCacheV1_4_0;
  readonly ProposedName?: string;
  readonly Format?: string;
};

export const QueryNativeMeasureV1_4_0: Schema.Codec<QueryNativeMeasureV1_4_0> = closed({
  DataType: Schema.Finite,
  Expression: Schema.String,
  Language: Schema.Literal("dax"),
  ExpressionContentCache: Schema.optionalKey(
    Schema.suspend(() => QueryExpressionContentCacheV1_4_0),
  ),
  ProposedName: Schema.optionalKey(Schema.String),
  Format: Schema.optionalKey(Schema.String),
});

export type QueryConditionalExpressionV1_4_0 = {
  readonly Cases: ReadonlyArray<QueryCaseV1_4_0>;
  readonly DefaultValue?: QueryExpressionContainerV1_4_0;
};

export const QueryConditionalExpressionV1_4_0: Schema.Codec<QueryConditionalExpressionV1_4_0> =
  closed({
    Cases: Schema.Array(Schema.suspend(() => QueryCaseV1_4_0)),
    DefaultValue: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
  });

export type QueryCaseV1_4_0 = {
  readonly Condition: QueryExpressionContainerV1_4_0;
  readonly Value: QueryExpressionContainerV1_4_0;
};

export const QueryCaseV1_4_0: Schema.Codec<QueryCaseV1_4_0> = closed({
  Condition: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  Value: Schema.suspend(() => QueryExpressionContainerV1_4_0),
});

export type QueryGroupRefExpressionV1_4_0 = {
  readonly GroupedColumns: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly Expression: QueryExpressionContainerV1_4_0;
  readonly Property: string;
};

export const QueryGroupRefExpressionV1_4_0: Schema.Codec<QueryGroupRefExpressionV1_4_0> = closed({
  GroupedColumns: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  Property: Schema.String,
});

export type QueryFillRuleExpressionV1_4_0 = {
  readonly Input: QueryExpressionContainerV1_4_0;
  readonly FillRule: Schema.Json;
};

export const QueryFillRuleExpressionV1_4_0: Schema.Codec<QueryFillRuleExpressionV1_4_0> = closed({
  Input: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  FillRule: Schema.Json,
});

export type QuerySparklineDataExpressionV1_4_0 = {
  readonly Measure: QueryExpressionContainerV1_4_0;
  readonly Groupings: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly PointsPerSparkline?: 52;
  readonly ApplyCalculationGroupTo?: "Sparkline" | "Point";
};

export const QuerySparklineDataExpressionV1_4_0: Schema.Codec<QuerySparklineDataExpressionV1_4_0> =
  closed({
    Measure: Schema.suspend(() => QueryExpressionContainerV1_4_0),
    Groupings: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
    PointsPerSparkline: Schema.optionalKey(Schema.Literal(52)),
    ApplyCalculationGroupTo: Schema.optionalKey(
      Schema.Union([Schema.Literal("Sparkline"), Schema.Literal("Point")]),
    ),
  });

export type QueryFilteredEvalExpressionV1_4_0 = {
  readonly Expression: QueryExpressionContainerV1_4_0;
  readonly Filters: ReadonlyArray<QueryFilterV1_4_0>;
};

export const QueryFilteredEvalExpressionV1_4_0: Schema.Codec<QueryFilteredEvalExpressionV1_4_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
    Filters: Schema.Array(Schema.suspend(() => QueryFilterV1_4_0)),
  });

export type QueryScopedEvalExpressionV1_4_0 = {
  readonly Expression: QueryExpressionContainerV1_4_0;
  readonly Scope: ReadonlyArray<QueryExpressionContainerV1_4_0>;
};

export const QueryScopedEvalExpressionV1_4_0: Schema.Codec<QueryScopedEvalExpressionV1_4_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
    Scope: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
  });

export type QueryFloorExpressionV1_4_0 = {
  readonly Expression: QueryExpressionContainerV1_4_0;
  readonly Size: number;
  readonly TimeUnit?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

export const QueryFloorExpressionV1_4_0: Schema.Codec<QueryFloorExpressionV1_4_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
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

export type QueryArithmeticExpressionV1_4_0 = {
  readonly Left: QueryExpressionContainerV1_4_0;
  readonly Right: QueryExpressionContainerV1_4_0;
  readonly Operator: ArithmeticOperatorKindV1_0_0;
};

export const QueryArithmeticExpressionV1_4_0: Schema.Codec<QueryArithmeticExpressionV1_4_0> =
  closed({
    Left: Schema.suspend(() => QueryExpressionContainerV1_4_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_4_0),
    Operator: Schema.suspend(() => ArithmeticOperatorKindV1_0_0),
  });

export type QueryDateAddExpressionV1_4_0 = {
  readonly Amount: number;
  readonly TimeUnit: TimeUnitV1_0_0;
  readonly Expression: QueryExpressionContainerV1_4_0;
};

export const QueryDateAddExpressionV1_4_0: Schema.Codec<QueryDateAddExpressionV1_4_0> = closed({
  Amount: Schema.Finite,
  TimeUnit: Schema.suspend(() => TimeUnitV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
});

export type QueryDateSpanExpressionV1_4_0 = {
  readonly TimeUnit: TimeUnitV1_0_0;
  readonly Expression: QueryExpressionContainerV1_4_0;
};

export const QueryDateSpanExpressionV1_4_0: Schema.Codec<QueryDateSpanExpressionV1_4_0> = closed({
  TimeUnit: Schema.suspend(() => TimeUnitV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
});

export type QueryExistsExpressionV1_4_0 = {
  readonly Expression: QueryExpressionContainerV1_4_0;
};

export const QueryExistsExpressionV1_4_0: Schema.Codec<QueryExistsExpressionV1_4_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
});

export type QueryStartsWithExpressionV1_4_0 = {
  readonly Left: QueryExpressionContainerV1_4_0;
  readonly Right: QueryExpressionContainerV1_4_0;
};

export const QueryStartsWithExpressionV1_4_0: Schema.Codec<QueryStartsWithExpressionV1_4_0> =
  closed({
    Left: Schema.suspend(() => QueryExpressionContainerV1_4_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  });

export type QueryContainsExpressionV1_4_0 = {
  readonly Left: QueryExpressionContainerV1_4_0;
  readonly Right: QueryExpressionContainerV1_4_0;
};

export const QueryContainsExpressionV1_4_0: Schema.Codec<QueryContainsExpressionV1_4_0> = closed({
  Left: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  Right: Schema.suspend(() => QueryExpressionContainerV1_4_0),
});

export type QueryNotExpressionV1_4_0 = {
  readonly Expression: QueryExpressionContainerV1_4_0;
};

export const QueryNotExpressionV1_4_0: Schema.Codec<QueryNotExpressionV1_4_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
});

export type QueryComparisonExpressionV1_4_0 = {
  readonly ComparisonKind: QueryComparisonKindV1_0_0;
  readonly Left: QueryExpressionContainerV1_4_0;
  readonly Right: QueryExpressionContainerV1_4_0;
};

export const QueryComparisonExpressionV1_4_0: Schema.Codec<QueryComparisonExpressionV1_4_0> =
  closed({
    ComparisonKind: Schema.suspend(() => QueryComparisonKindV1_0_0),
    Left: Schema.suspend(() => QueryExpressionContainerV1_4_0),
    Right: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  });

export type QueryBinaryExpressionV1_4_0 = {
  readonly Left: QueryExpressionContainerV1_4_0;
  readonly Right: QueryExpressionContainerV1_4_0;
};

export const QueryBinaryExpressionV1_4_0: Schema.Codec<QueryBinaryExpressionV1_4_0> = closed({
  Left: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  Right: Schema.suspend(() => QueryExpressionContainerV1_4_0),
});

export type QueryInExpressionV1_4_0 = {
  readonly Expressions: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly Values?: ReadonlyArray<ReadonlyArray<QueryExpressionContainerV1_4_0>>;
  readonly Table?: QueryExpressionContainerV1_4_0;
};

export const QueryInExpressionV1_4_0: Schema.Codec<QueryInExpressionV1_4_0> = closed({
  Expressions: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
  Values: Schema.optionalKey(
    Schema.Array(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0))),
  ),
  Table: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
});

export type QueryBetweenExpressionV1_4_0 = {
  readonly Expression: QueryExpressionContainerV1_4_0;
  readonly LowerBound: QueryExpressionContainerV1_4_0;
  readonly UpperBound: QueryExpressionContainerV1_4_0;
};

export const QueryBetweenExpressionV1_4_0: Schema.Codec<QueryBetweenExpressionV1_4_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  LowerBound: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  UpperBound: Schema.suspend(() => QueryExpressionContainerV1_4_0),
});

export type QueryDiscretizeExpressionV1_4_0 = {
  readonly Expression: QueryExpressionContainerV1_4_0;
  readonly Count: number;
};

export const QueryDiscretizeExpressionV1_4_0: Schema.Codec<QueryDiscretizeExpressionV1_4_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
    Count: Schema.Finite,
  });

export type QuerySubqueryExpressionV1_4_0 = {
  readonly Query: QueryDefinitionV1_4_0;
};

export const QuerySubqueryExpressionV1_4_0: Schema.Codec<QuerySubqueryExpressionV1_4_0> = closed({
  Query: Schema.suspend(() => QueryDefinitionV1_4_0),
});

export type QueryDefinitionV1_4_0 = {
  readonly Version?: 2;
  readonly From: ReadonlyArray<EntitySourceV1_4_0>;
  readonly Where?: ReadonlyArray<QueryFilterV1_4_0>;
  readonly OrderBy?: ReadonlyArray<QuerySortClauseV1_4_0>;
  readonly Select: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly VisualShape?: ReadonlyArray<AxisV1_4_0>;
  readonly GroupBy?: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly Transform?: ReadonlyArray<QueryTransformV1_4_0>;
  readonly Top?: number;
};

export const QueryDefinitionV1_4_0: Schema.Codec<QueryDefinitionV1_4_0> = closed({
  Version: Schema.optionalKey(Schema.Literal(2)),
  From: Schema.Array(Schema.suspend(() => EntitySourceV1_4_0)),
  Where: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryFilterV1_4_0))),
  OrderBy: Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortClauseV1_4_0))),
  Select: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
  VisualShape: Schema.optionalKey(Schema.Array(Schema.suspend(() => AxisV1_4_0))),
  GroupBy: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0))),
  Transform: Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryTransformV1_4_0))),
  Top: Schema.optionalKey(Schema.Finite),
});

export type QueryTransformV1_4_0 = {
  readonly Name: string;
  readonly Algorithm: string;
  readonly Input: QueryTransformInputV1_4_0;
  readonly Output: QueryTransformOutputV1_4_0;
};

export const QueryTransformV1_4_0: Schema.Codec<QueryTransformV1_4_0> = closed({
  Name: Schema.String,
  Algorithm: Schema.String,
  Input: Schema.suspend(() => QueryTransformInputV1_4_0),
  Output: Schema.suspend(() => QueryTransformOutputV1_4_0),
});

export type QueryTransformOutputV1_4_0 = {
  readonly Table?: QueryTransformTableV1_4_0;
};

export const QueryTransformOutputV1_4_0: Schema.Codec<QueryTransformOutputV1_4_0> = closed({
  Table: Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_4_0)),
});

export type QueryTransformTableV1_4_0 = {
  readonly Name: string;
  readonly Columns: ReadonlyArray<QueryTransformTableColumnV1_4_0>;
};

export const QueryTransformTableV1_4_0: Schema.Codec<QueryTransformTableV1_4_0> = closed({
  Name: Schema.String,
  Columns: Schema.Array(Schema.suspend(() => QueryTransformTableColumnV1_4_0)),
});

export type QueryTransformTableColumnV1_4_0 = {
  readonly Role?: string;
  readonly Expression: QueryExpressionContainerV1_4_0;
};

export const QueryTransformTableColumnV1_4_0: Schema.Codec<QueryTransformTableColumnV1_4_0> =
  closed({
    Role: Schema.optionalKey(Schema.String),
    Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  });

export type QueryTransformInputV1_4_0 = {
  readonly Parameters: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly Table?: QueryTransformTableV1_4_0;
};

export const QueryTransformInputV1_4_0: Schema.Codec<QueryTransformInputV1_4_0> = closed({
  Parameters: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
  Table: Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_4_0)),
});

export type AxisV1_4_0 = {
  readonly Groups: ReadonlyArray<AxisGroupV1_4_0>;
  readonly Name: string;
};

export const AxisV1_4_0: Schema.Codec<AxisV1_4_0> = closed({
  Groups: Schema.Array(Schema.suspend(() => AxisGroupV1_4_0)),
  Name: Schema.String,
});

export type AxisGroupV1_4_0 = {
  readonly Keys: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly Subtotal: boolean;
};

export const AxisGroupV1_4_0: Schema.Codec<AxisGroupV1_4_0> = closed({
  Keys: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
  Subtotal: Schema.Boolean,
});

export type QuerySortClauseV1_4_0 = {
  readonly Expression: QueryExpressionContainerV1_4_0;
  readonly Direction: SortDirectionV1_3_0;
};

export const QuerySortClauseV1_4_0: Schema.Codec<QuerySortClauseV1_4_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  Direction: Schema.suspend(() => SortDirectionV1_3_0),
});

export type EntitySourceV1_4_0 = {
  readonly Name: string;
  readonly Entity?: string;
  readonly Schema?: string;
  readonly Expression?: QueryExpressionContainerV1_4_0;
  readonly Type?: 0 | 1 | 2;
};

export const EntitySourceV1_4_0: Schema.Codec<EntitySourceV1_4_0> = closed({
  Name: Schema.String,
  Entity: Schema.optionalKey(Schema.String),
  Schema: Schema.optionalKey(Schema.String),
  Expression: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
  Type: Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])),
});

export type QueryPropertyVariationSourceExpressionV1_4_0 = {
  readonly Expression: QueryExpressionContainerV1_4_0;
  readonly Name: string;
  readonly Property: string;
};

export const QueryPropertyVariationSourceExpressionV1_4_0: Schema.Codec<QueryPropertyVariationSourceExpressionV1_4_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
    Name: Schema.String,
    Property: Schema.String,
  });

export type QueryHierarchyLevelExpressionV1_4_0 = {
  readonly Expression: QueryExpressionContainerV1_4_0;
  readonly Level: string;
};

export const QueryHierarchyLevelExpressionV1_4_0: Schema.Codec<QueryHierarchyLevelExpressionV1_4_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
    Level: Schema.String,
  });

export type QueryHierarchyExpressionV1_4_0 = {
  readonly Expression: QueryExpressionContainerV1_4_0;
  readonly Hierarchy: string;
};

export const QueryHierarchyExpressionV1_4_0: Schema.Codec<QueryHierarchyExpressionV1_4_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  Hierarchy: Schema.String,
});

export type QueryPercentileExpressionV1_4_0 = {
  readonly Expression: QueryExpressionContainerV1_4_0;
  readonly K: number;
  readonly Exclusive?: boolean;
};

export const QueryPercentileExpressionV1_4_0: Schema.Codec<QueryPercentileExpressionV1_4_0> =
  closed({
    Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
    K: Schema.Finite,
    Exclusive: Schema.optionalKey(Schema.Boolean),
  });

export type QueryAggregationExpressionV1_4_0 = {
  readonly Function: QueryAggregateFunctionV1_0_0;
  readonly Expression: QueryExpressionContainerV1_4_0;
};

export const QueryAggregationExpressionV1_4_0: Schema.Codec<QueryAggregationExpressionV1_4_0> =
  closed({
    Function: Schema.suspend(() => QueryAggregateFunctionV1_0_0),
    Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  });

export type QueryMaxExpressionV1_4_0 = {
  readonly IncludeAllTypes: IncludeAllTypesV1_0_0;
  readonly Expression: QueryExpressionContainerV1_4_0;
};

export const QueryMaxExpressionV1_4_0: Schema.Codec<QueryMaxExpressionV1_4_0> = closed({
  IncludeAllTypes: Schema.suspend(() => IncludeAllTypesV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
});

export type QueryMinExpressionV1_4_0 = {
  readonly IncludeAllTypes: IncludeAllTypesV1_0_0;
  readonly Expression: QueryExpressionContainerV1_4_0;
};

export const QueryMinExpressionV1_4_0: Schema.Codec<QueryMinExpressionV1_4_0> = closed({
  IncludeAllTypes: Schema.suspend(() => IncludeAllTypesV1_0_0),
  Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
});

export type QueryMeasureExpressionV1_4_0 = {
  readonly Expression: QueryExpressionContainerV1_4_0;
  readonly Property: string;
};

export const QueryMeasureExpressionV1_4_0: Schema.Codec<QueryMeasureExpressionV1_4_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  Property: Schema.String,
});

export type QueryColumnExpressionV1_4_0 = {
  readonly Expression: QueryExpressionContainerV1_4_0;
  readonly Property: string;
};

export const QueryColumnExpressionV1_4_0: Schema.Codec<QueryColumnExpressionV1_4_0> = closed({
  Expression: Schema.suspend(() => QueryExpressionContainerV1_4_0),
  Property: Schema.String,
});

export type QueryCustomTotalMetadataV1_4_0 = {
  readonly baseQueryName: string;
};

export const QueryCustomTotalMetadataV1_4_0: Schema.Codec<QueryCustomTotalMetadataV1_4_0> = closed({
  baseQueryName: Schema.String,
});
