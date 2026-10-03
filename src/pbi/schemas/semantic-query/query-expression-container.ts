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

import { oneKeyOf } from "#pbi/schemas/shared.ts";

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
const Extreme = Struct({ Expression, IncludeAllTypes: Literals([0, 1, 2]) });
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

export const QueryExpressionContainer = oneKeyOf(
	{
		Name: opt(String),
		NativeReferenceName: opt(String),
		Annotations: opt(
			StructWithRest(Struct({ customTotalMetadata: opt(Struct({ baseQueryName: String })) }), [
				Record(String, Unknown),
			]),
		),
	},
	{
		SourceRef: Union([Struct({ Source: String }), Struct({ Schema: opt(String), Entity: String })]),
		Column: PropertyOf,
		Measure: PropertyOf,
		Min: Extreme,
		Max: Extreme,
		Aggregation: Struct({ Function: Literals([0, 1, 2, 3, 4, 5, 6, 7, 8]), Expression }),
		Percentile: Struct({ Expression, K: Number, Exclusive: opt(Boolean) }),
		Hierarchy: Struct({ Expression, Hierarchy: String }),
		HierarchyLevel: Struct({ Expression, Level: String }),
		PropertyVariationSource: Struct({ Expression, Name: String, Property: String }),
		Subquery: Struct({ Query: suspend(() => QueryDefinition) }),
		Discretize: Struct({ Expression, Count: Number }),
		And: Binary,
		Between: Struct({ Expression, LowerBound: Expression, UpperBound: Expression }),
		In: Struct({
			Expressions: Array(Expression),
			Values: opt(Array(Array(Expression))),
			Table: opt(Expression),
		}),
		Or: Binary,
		Comparison: Struct({ ComparisonKind: Literals([0, 1, 2, 3, 4]), Left: Expression, Right: Expression }),
		Not: Unary,
		Contains: Binary,
		StartsWith: Binary,
		Exists: Unary,
		Literal: Struct({ Value: String }),
		DateSpan: Struct({ TimeUnit, Expression }),
		DateAdd: Struct({ Amount: Number, TimeUnit, Expression }),
		Now: Empty,
		DefaultValue: Empty,
		AnyValue: Struct({ DefaultValueOverridesAncestors: opt(Boolean) }),
		Arithmetic: Struct({ Left: Expression, Right: Expression, Operator: Literals([0, 1, 2, 3]) }),
		Floor: Struct({ Expression, Size: Number, TimeUnit: opt(TimeUnit) }),
		ScopedEval: Struct({ Expression, Scope: Array(Expression) }),
		FilteredEval: Struct({ Expression, Filters: Array(suspend(() => QueryFilter)) }),
		TransformTableRef: Struct({ Source: String }),
		TransformOutputRoleRef: Struct({ Role: String, Transform: opt(String) }),
		SparklineData,
		NativeVisualCalculation,
		FillRule: Struct({ Input: Expression, FillRule: Unknown }),
		GroupRef: Struct({ GroupedColumns: Array(Expression), Expression, Property: String }),
		ResourcePackageItem: Struct({ PackageName: String, PackageType: Number, ItemName: String }),
		RoleRef: Struct({ Role: String }),
		SummaryValueRef: Struct({ Name: String }),
		AllRolesRef: Empty,
		SelectRef: Struct({ ExpressionName: String }),
		ThemeDataColor: Struct({ ColorId: Number, Percent: Number }),
		Conditional: Struct({
			Cases: Array(Struct({ Condition: Expression, Value: Expression })),
			DefaultValue: opt(Expression),
		}),
		NativeMeasure,
		NativeColumn,
		VisualTopN: Struct({ ItemCount: Number }),
	},
);
