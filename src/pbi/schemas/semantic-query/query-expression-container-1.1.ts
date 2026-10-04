import {
	Array,
	Boolean,
	Literal,
	Literals,
	Number,
	Record,
	String,
	Struct,
	Unknown,
	optionalKey as opt,
	suspend,
} from "effect/Schema";

import { describe, oneKeyOf } from "#pbi/schemas/shared.ts";

import * as shared from "./shared.ts";
import { descriptions as d } from "./version-1.1.descriptions.ts";
import { QueryDefinition } from "./version-1.1.ts";

const Expression = suspend(() => QueryExpressionContainer);

const QueryFilter = describe(
	Struct({
		Target: opt(Array(Expression)),
		Condition: Expression,
		Annotations: opt(Record(String, Unknown)),
	}),
	d.QueryFilter,
).annotate({ identifier: "SemanticQuery.QueryFilter" });

const Unary = Struct({ Expression });
const Binary = Struct({ Left: Expression, Right: Expression });
const PropertyOf = Struct({ Expression, Property: String });
const Extreme = Struct({ Expression, IncludeAllTypes: shared.IncludeAllTypes });
const ContentCache = Struct({ Dependencies: opt(Array(Expression)), UnrecognizedIdentifiers: opt(Boolean) });

const NativeColumn = Struct({
	DataType: Number,
	Expression: String,
	Language: String,
	Source: Expression,
	ExpressionContentCache: opt(ContentCache),
	ProposedName: opt(String),
	Format: opt(String),
});

const NativeMeasure = Struct({
	DataType: Number,
	Expression: String,
	Language: Literal("dax"),
	ExpressionContentCache: opt(ContentCache),
	ProposedName: opt(String),
	Format: opt(String),
});

const SparklineData = Struct({
	Measure: Expression,
	Groupings: Array(Expression),
	PointsPerSparkline: opt(Literal(52)),
});

export const QueryExpressionContainer: ReturnType<typeof oneKeyOf> = oneKeyOf(
	{
		Name: opt(String),
		NativeReferenceName: opt(String),
		Annotations: opt(Record(String, Unknown)),
	},
	{
		SourceRef: shared.SourceRef,
		Column: describe(PropertyOf, d.QueryColumnExpression),
		Measure: describe(PropertyOf, d.QueryMeasureExpression),
		Min: describe(Extreme, d.QueryMinExpression),
		Max: describe(Extreme, d.QueryMaxExpression),
		Aggregation: describe(
			Struct({ Function: Literals([0, 1, 2, 3, 4, 5, 6, 7, 8]), Expression }),
			d.QueryAggregationExpression,
		),
		Percentile: describe(
			Struct({ Expression, K: Number, Exclusive: opt(Boolean) }),
			d.QueryPercentileExpression,
		),
		Hierarchy: describe(Struct({ Expression, Hierarchy: String }), d.QueryHierarchyExpression),
		HierarchyLevel: describe(Struct({ Expression, Level: String }), d.QueryHierarchyLevelExpression),
		PropertyVariationSource: describe(
			Struct({ Expression, Name: String, Property: String }),
			d.QueryPropertyVariationSourceExpression,
		),
		Subquery: describe(Struct({ Query: suspend(() => QueryDefinition) }), d.QuerySubqueryExpression),
		Discretize: describe(Struct({ Expression, Count: Number }), d.QueryDiscretizeExpression),
		And: describe(Binary, d.QueryBinaryExpression),
		Between: describe(
			Struct({ Expression, LowerBound: Expression, UpperBound: Expression }),
			d.QueryBetweenExpression,
		),
		In: describe(
			Struct({
				Expressions: Array(Expression),
				Values: opt(Array(Array(Expression))),
				Table: opt(Expression),
			}),
			d.QueryInExpression,
		),
		Or: describe(Binary, d.QueryBinaryExpression),
		Comparison: describe(
			Struct({ ComparisonKind: Literals([0, 1, 2, 3, 4]), Left: Expression, Right: Expression }),
			d.QueryComparisonExpression,
		),
		Not: describe(Unary, d.QueryNotExpression),
		Contains: describe(Binary, d.QueryContainsExpression),
		StartsWith: describe(Binary, d.QueryStartsWithExpression),
		Exists: describe(Unary, d.QueryExistsExpression),
		Literal: shared.QueryLiteralExpression,
		DateSpan: describe(Struct({ TimeUnit: shared.TimeUnit, Expression }), d.QueryDateSpanExpression),
		DateAdd: describe(
			Struct({ Amount: Number, TimeUnit: shared.TimeUnit, Expression }),
			d.QueryDateAddExpression,
		),
		Now: shared.Empty,
		DefaultValue: shared.Empty,
		AnyValue: shared.QueryAnyValueExpression,
		Arithmetic: describe(
			Struct({ Left: Expression, Right: Expression, Operator: Literals([0, 1, 2, 3]) }),
			d.QueryArithmeticExpression,
		),
		Floor: describe(
			Struct({ Expression, Size: Number, TimeUnit: opt(shared.TimeUnit) }),
			d.QueryFloorExpression,
		),
		ScopedEval: describe(Struct({ Expression, Scope: Array(Expression) }), d.QueryScopedEvalExpression),
		FilteredEval: describe(
			Struct({ Expression, Filters: Array(suspend(() => QueryFilter)) }),
			d.QueryFilteredEvalExpression,
		),
		TransformTableRef: shared.QueryTransformTableRefExpression,
		TransformOutputRoleRef: shared.QueryTransformOutputRoleRefExpression,
		SparklineData: describe(SparklineData, d.QuerySparklineDataExpression),
		NativeVisualCalculation: shared.QueryNativeVisualCalcWithoutDataType,
		FillRule: describe(Struct({ Input: Expression, FillRule: Unknown }), d.QueryFillRuleExpression),
		GroupRef: describe(
			Struct({ GroupedColumns: Array(Expression), Expression, Property: String }),
			d.QueryGroupRefExpression,
		),
		ResourcePackageItem: shared.QueryResourcePackageItem,
		RoleRef: shared.QueryRoleRefExpression,
		SummaryValueRef: shared.QuerySummaryValueRefExpression,
		AllRolesRef: shared.Empty,
		SelectRef: shared.QuerySelectRefExpression,
		ThemeDataColor: shared.QueryThemeDataColorExpression,
		Conditional: describe(
			Struct({
				Cases: Array(describe(Struct({ Condition: Expression, Value: Expression }), d.QueryCase)),
				DefaultValue: opt(Expression),
			}),
			d.QueryConditionalExpression,
		),
		NativeMeasure: describe(NativeMeasure, d.QueryNativeMeasure),
		NativeColumn: describe(NativeColumn, d.QueryNativeColumn),
		VisualTopN: shared.QueryVisualTopNExpression,
	},
	d.QueryExpressionContainer,
).annotate({ identifier: "SemanticQuery.QueryExpressionContainer" });
