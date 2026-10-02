import { Schema } from "effect";

import { closed } from "../shared.js";

export type IncludeAllTypes = 0 | 1 | 2;

export const IncludeAllTypes: Schema.Codec<IncludeAllTypes> = Schema.Union([
  Schema.Literal(0),
  Schema.Literal(1),
  Schema.Literal(2),
]);

export type QueryThemeDataColorExpression = {
  readonly ColorId: number;
  readonly Percent: number;
};

export const QueryThemeDataColorExpression: Schema.Codec<QueryThemeDataColorExpression> =
  closed({ ColorId: Schema.Finite, Percent: Schema.Finite });

export type QuerySelectRefExpression = {
  readonly ExpressionName: string;
};

export const QuerySelectRefExpression: Schema.Codec<QuerySelectRefExpression> =
  closed({ ExpressionName: Schema.String });

export type QueryNowExpression = {};

export const QueryNowExpression: Schema.Codec<QueryNowExpression> = closed({});

export type QuerySummaryValueRefExpression = {
  readonly Name: string;
};

export const QuerySummaryValueRefExpression: Schema.Codec<QuerySummaryValueRefExpression> =
  closed({ Name: Schema.String });

export type QueryRoleRefExpression = {
  readonly Role: string;
};

export const QueryRoleRefExpression: Schema.Codec<QueryRoleRefExpression> =
  closed({ Role: Schema.String });

export type QueryResourcePackageItem = {
  readonly PackageName: string;
  readonly PackageType: number;
  readonly ItemName: string;
};

export const QueryResourcePackageItem: Schema.Codec<QueryResourcePackageItem> =
  closed({
    PackageName: Schema.String,
    PackageType: Schema.Finite,
    ItemName: Schema.String,
  });

export type QueryNativeVisualCalcV1_0_0 = {
  readonly Language: "dax";
  readonly Expression: string;
  readonly Name: string;
};

export const QueryNativeVisualCalcV1_0_0: Schema.Codec<QueryNativeVisualCalcV1_0_0> =
  closed({
    Language: Schema.Literal("dax"),
    Expression: Schema.String,
    Name: Schema.String,
  });

export type QueryTransformOutputRoleRefExpression = {
  readonly Role: string;
  readonly Transform?: string;
};

export const QueryTransformOutputRoleRefExpression: Schema.Codec<QueryTransformOutputRoleRefExpression> =
  closed({ Role: Schema.String, Transform: Schema.optionalKey(Schema.String) });

export type QuerySourceRefExpression = {
  readonly Source: string;
};

export const QuerySourceRefExpression: Schema.Codec<QuerySourceRefExpression> =
  closed({ Source: Schema.String });

export type ArithmeticOperatorKind = 0 | 1 | 2 | 3;

export const ArithmeticOperatorKind: Schema.Codec<ArithmeticOperatorKind> =
  Schema.Union([
    Schema.Literal(0),
    Schema.Literal(1),
    Schema.Literal(2),
    Schema.Literal(3),
  ]);

export type QueryAnyValueExpression = {
  readonly DefaultValueOverridesAncestors?: boolean;
};

export const QueryAnyValueExpression: Schema.Codec<QueryAnyValueExpression> =
  closed({
    DefaultValueOverridesAncestors: Schema.optionalKey(Schema.Boolean),
  });

export type TimeUnit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export const TimeUnit: Schema.Codec<TimeUnit> = Schema.Union([
  Schema.Literal(0),
  Schema.Literal(1),
  Schema.Literal(2),
  Schema.Literal(3),
  Schema.Literal(4),
  Schema.Literal(5),
  Schema.Literal(6),
  Schema.Literal(7),
]);

export type QueryLiteralExpression = {
  readonly Value: string;
};

export const QueryLiteralExpression: Schema.Codec<QueryLiteralExpression> =
  closed({ Value: Schema.String });

export type QueryComparisonKind = 0 | 1 | 2 | 3 | 4;

export const QueryComparisonKind: Schema.Codec<QueryComparisonKind> =
  Schema.Union([
    Schema.Literal(0),
    Schema.Literal(1),
    Schema.Literal(2),
    Schema.Literal(3),
    Schema.Literal(4),
  ]);

export type QueryAggregateFunction = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export const QueryAggregateFunction: Schema.Codec<QueryAggregateFunction> =
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

export type StandaloneSourceRefExpression = {
  readonly Schema?: string;
  readonly Entity: string;
};

export const StandaloneSourceRefExpression: Schema.Codec<StandaloneSourceRefExpression> =
  closed({ Schema: Schema.optionalKey(Schema.String), Entity: Schema.String });

export const SemanticQuery = Schema.Json;

export type SemanticQuery = typeof SemanticQuery.Type;

export type QueryVisualTopNExpression = {
  readonly ItemCount: number;
};

export const QueryVisualTopNExpression: Schema.Codec<QueryVisualTopNExpression> =
  closed({ ItemCount: Schema.Finite });

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

export const QueryNativeVisualCalcV1_2_0: Schema.Codec<QueryNativeVisualCalcV1_2_0> =
  closed({
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

export type SortDirection = 1 | 2;

export const SortDirection: Schema.Codec<SortDirection> = Schema.Union([
  Schema.Literal(1),
  Schema.Literal(2),
]);

export type ExactlyOne<Fields> = {
  [K in keyof Fields]: {
    readonly [P in K]: Fields[P];
  } & {
    readonly [P in Exclude<keyof Fields, K>]?: never;
  };
}[keyof Fields];
