import {
	Boolean,
	Literal,
	Literals,
	Number,
	Record,
	String,
	Struct,
	Union,
	Unknown,
	makeFilter,
	optionalKey as opt,
} from "effect/Schema";

import { describe } from "#pbi/schemas/shared.ts";

import { descriptions as d } from "./shared.descriptions.ts";
import { descriptions as d12 } from "./version-1.2.descriptions.ts";
import { descriptions as d13 } from "./version-1.3.descriptions.ts";

export const Empty = Record(String, Unknown).check(
	makeFilter((value, _ast, options) => {
		const keys = Object.keys(value);
		return options.onExcessProperty !== "error" || keys.length === 0 || `Unknown key: ${keys.join(", ")}`;
	}),
);

export const TimeUnit = Literals([0, 1, 2, 3, 4, 5, 6, 7]);
export const IncludeAllTypes = Literals([0, 1, 2]).annotate({ description: d.IncludeAllTypes.description });

export const SourceRef = Union([
	describe(Struct({ Source: String }), d.QuerySourceRefExpression).annotate({
		identifier: "SemanticQuery.QuerySourceRefExpression",
	}),
	describe(Struct({ Schema: opt(String), Entity: String }), d.StandaloneSourceRefExpression).annotate({
		identifier: "SemanticQuery.StandaloneSourceRefExpression",
	}),
]);

export const QueryLiteralExpression = describe(Struct({ Value: String }), d.QueryLiteralExpression).annotate({
	identifier: "SemanticQuery.QueryLiteralExpression",
});

export const QueryAnyValueExpression = describe(
	Struct({ DefaultValueOverridesAncestors: opt(Boolean) }),
	d.QueryAnyValueExpression,
).annotate({ identifier: "SemanticQuery.QueryAnyValueExpression" });

export const QueryTransformTableRefExpression = describe(
	Struct({ Source: String }),
	d.QueryTransformTableRefExpression,
).annotate({ identifier: "SemanticQuery.QueryTransformTableRefExpression" });

export const QueryTransformOutputRoleRefExpression = describe(
	Struct({ Role: String, Transform: opt(String) }),
	d.QueryTransformOutputRoleRefExpression,
).annotate({ identifier: "SemanticQuery.QueryTransformOutputRoleRefExpression" });

export const QueryResourcePackageItem = describe(
	Struct({ PackageName: String, PackageType: Number, ItemName: String }),
	d.QueryResourcePackageItem,
).annotate({ identifier: "SemanticQuery.QueryResourcePackageItem" });

export const QueryRoleRefExpression = describe(Struct({ Role: String }), d.QueryRoleRefExpression).annotate({
	identifier: "SemanticQuery.QueryRoleRefExpression",
});

export const QuerySummaryValueRefExpression = describe(
	Struct({ Name: String }),
	d.QuerySummaryValueRefExpression,
).annotate({ identifier: "SemanticQuery.QuerySummaryValueRefExpression" });

export const QuerySelectRefExpression = describe(
	Struct({ ExpressionName: String }),
	d.QuerySelectRefExpression,
).annotate({ identifier: "SemanticQuery.QuerySelectRefExpression" });

export const QueryThemeDataColorExpression = describe(
	Struct({ ColorId: Number, Percent: Number }),
	d.QueryThemeDataColorExpression,
).annotate({ identifier: "SemanticQuery.QueryThemeDataColorExpression" });

export const QueryVisualTopNExpression = describe(
	Struct({ ItemCount: Number }),
	d13.QueryVisualTopNExpression,
).annotate({ identifier: "SemanticQuery.QueryVisualTopNExpression" });

export const QueryNativeVisualCalc = describe(
	Struct({
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
	}),
	d12.QueryNativeVisualCalc,
).annotate({ identifier: "SemanticQuery.QueryNativeVisualCalc" });

export const QueryNativeVisualCalcWithoutDataType = describe(
	Struct({ Language: Literal("dax"), Expression: String, Name: String }),
	d.QueryNativeVisualCalc,
).annotate({ identifier: "SemanticQuery.QueryNativeVisualCalc" });
