import {
	Array,
	Boolean,
	Literal,
	Literals,
	Number,
	Record,
	String,
	Struct,
	StructWithRest,
	Union,
	Unknown,
	makeFilter,
	optionalKey as opt,
	suspend,
} from "effect/Schema";

import { describe, oneKeyOf } from "#pbi/schemas/shared.ts";

import { descriptions as d } from "./version-1.4.descriptions.ts";
import { QueryDefinition, QueryFilter } from "./version-1.4.ts";

const Expression = suspend(() => QueryExpressionContainer);

const Empty = Record(String, Unknown).check(
	makeFilter((value, _ast, options) => {
		const keys = Object.keys(value);
		return options.onExcessProperty !== "error" || keys.length === 0 || `Unknown key: ${keys.join(", ")}`;
	}),
);

const TimeUnit = Literals([0, 1, 2, 3, 4, 5, 6, 7]);
const Unary = Struct({ Expression });
const Binary = Struct({ Left: Expression, Right: Expression });
const PropertyOf = Struct({ Expression, Property: String });
const IncludeAllTypes = Literals([0, 1, 2]).annotate({ description: d.IncludeAllTypes.description });
const Extreme = Struct({ Expression, IncludeAllTypes });
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

const NativeVisualCalculation = Struct({
	Language: Literal("dax"),
	Expression: String,
	Name: String,
	DataType: opt(
		Literals([
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

const SparklineData = Struct({
	Measure: Expression,
	Groupings: Array(Expression),
	PointsPerSparkline: opt(Literal(52)),
	ApplyCalculationGroupTo: opt(Literals(["Sparkline", "Point"])),
});

export const QueryExpressionContainer: ReturnType<typeof oneKeyOf> = oneKeyOf(
	{
		Name: opt(String),
		NativeReferenceName: opt(String),
		Annotations: opt(
			StructWithRest(
				Struct({
					customTotalMetadata: opt(describe(Struct({ baseQueryName: String }), d.QueryCustomTotalMetadata)),
				}),
				[Record(String, Unknown)],
			),
		),
	},
	{
		SourceRef: Union([
			describe(Struct({ Source: String }), d.QuerySourceRefExpression),
			describe(Struct({ Schema: opt(String), Entity: String }), d.StandaloneSourceRefExpression),
		]),
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
		Literal: describe(Struct({ Value: String }), d.QueryLiteralExpression),
		DateSpan: describe(Struct({ TimeUnit, Expression }), d.QueryDateSpanExpression),
		DateAdd: describe(Struct({ Amount: Number, TimeUnit, Expression }), d.QueryDateAddExpression),
		Now: Empty,
		DefaultValue: Empty,
		AnyValue: describe(Struct({ DefaultValueOverridesAncestors: opt(Boolean) }), d.QueryAnyValueExpression),
		Arithmetic: describe(
			Struct({ Left: Expression, Right: Expression, Operator: Literals([0, 1, 2, 3]) }),
			d.QueryArithmeticExpression,
		),
		Floor: describe(Struct({ Expression, Size: Number, TimeUnit: opt(TimeUnit) }), d.QueryFloorExpression),
		ScopedEval: describe(Struct({ Expression, Scope: Array(Expression) }), d.QueryScopedEvalExpression),
		FilteredEval: describe(
			Struct({ Expression, Filters: Array(suspend(() => QueryFilter)) }),
			d.QueryFilteredEvalExpression,
		),
		TransformTableRef: describe(Struct({ Source: String }), d.QueryTransformTableRefExpression),
		TransformOutputRoleRef: describe(
			Struct({ Role: String, Transform: opt(String) }),
			d.QueryTransformOutputRoleRefExpression,
		),
		SparklineData: describe(SparklineData, d.QuerySparklineDataExpression),
		NativeVisualCalculation: describe(NativeVisualCalculation, d.QueryNativeVisualCalc),
		FillRule: describe(Struct({ Input: Expression, FillRule: Unknown }), d.QueryFillRuleExpression),
		GroupRef: describe(
			Struct({ GroupedColumns: Array(Expression), Expression, Property: String }),
			d.QueryGroupRefExpression,
		),
		ResourcePackageItem: describe(
			Struct({ PackageName: String, PackageType: Number, ItemName: String }),
			d.QueryResourcePackageItem,
		),
		RoleRef: describe(Struct({ Role: String }), d.QueryRoleRefExpression),
		SummaryValueRef: describe(Struct({ Name: String }), d.QuerySummaryValueRefExpression),
		AllRolesRef: Empty,
		SelectRef: describe(Struct({ ExpressionName: String }), d.QuerySelectRefExpression),
		ThemeDataColor: describe(Struct({ ColorId: Number, Percent: Number }), d.QueryThemeDataColorExpression),
		Conditional: describe(
			Struct({
				Cases: Array(describe(Struct({ Condition: Expression, Value: Expression }), d.QueryCase)),
				DefaultValue: opt(Expression),
			}),
			d.QueryConditionalExpression,
		),
		NativeMeasure: describe(NativeMeasure, d.QueryNativeMeasure),
		NativeColumn: describe(NativeColumn, d.QueryNativeColumn),
		VisualTopN: Struct({ ItemCount: Number }),
	},
	d.QueryExpressionContainer,
).annotate({ identifier: "SemanticQuery.QueryExpressionContainer" });
