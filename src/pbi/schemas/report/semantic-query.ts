import { Schema } from "effect";

type ExactlyOne<Fields> = { [K in keyof Fields]: { readonly [P in K]: Fields[P] } & { readonly [P in Exclude<keyof Fields, K>]?: never } }[keyof Fields];

// Native report query schemas. Each version keeps its own recursive reference graph.
// Closing each object before union matching prevents extra-key stripping from
// changing the source schemas' required-key oneOf semantics.
function closed<const Fields extends Schema.Struct.Fields>(fields: Fields) {
  const allowed = new Set(Object.keys(fields));
  return Schema.StructWithRest(Schema.Struct(fields), [Schema.Record(Schema.String, Schema.Json)])
    .check(Schema.makeFilter((value) => Object.keys(value).every((key) => allowed.has(key)) || "Unexpected object property"));
}

/** FilterDefinition in semantic-query 1.0.0. */
export type FilterDefinitionV1_0_0 = { readonly "Version"?: 2; readonly "From": ReadonlyArray<EntitySourceV1_0_0>; readonly "Where": ReadonlyArray<QueryFilterV1_0_0>; };
/** Native schema for FilterDefinition in semantic-query 1.0.0. */
export const FilterDefinitionV1_0_0: Schema.Codec<FilterDefinitionV1_0_0> = closed({ "Version": Schema.optionalKey(Schema.Literal(2)), "From": Schema.Array(Schema.suspend(() => EntitySourceV1_0_0)), "Where": Schema.Array(Schema.suspend(() => QueryFilterV1_0_0)) });

/** QueryFilter in semantic-query 1.0.0. */
export type QueryFilterV1_0_0 = { readonly "Target"?: ReadonlyArray<QueryExpressionContainerV1_0_0>; readonly "Condition": QueryExpressionContainerV1_0_0; readonly "Annotations"?: {  } & { readonly [key: string]: Schema.Json }; };
/** Native schema for QueryFilter in semantic-query 1.0.0. */
export const QueryFilterV1_0_0: Schema.Codec<QueryFilterV1_0_0> = closed({ "Target": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0))), "Condition": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)) });

/** QueryExpressionContainer in semantic-query 1.0.0. */
export type QueryExpressionContainerV1_0_0 = { readonly "Name"?: string; readonly "NativeReferenceName"?: string; readonly "Annotations"?: {  } & { readonly [key: string]: Schema.Json }; } & ExactlyOne<{ readonly "SourceRef": (StandaloneSourceRefExpressionV1_0_0) | (QuerySourceRefExpressionV1_0_0); readonly "Column": QueryColumnExpressionV1_0_0; readonly "Measure": QueryMeasureExpressionV1_0_0; readonly "Min": QueryMinExpressionV1_0_0; readonly "Max": QueryMaxExpressionV1_0_0; readonly "Aggregation": QueryAggregationExpressionV1_0_0; readonly "Percentile": QueryPercentileExpressionV1_0_0; readonly "Hierarchy": QueryHierarchyExpressionV1_0_0; readonly "HierarchyLevel": QueryHierarchyLevelExpressionV1_0_0; readonly "PropertyVariationSource": QueryPropertyVariationSourceExpressionV1_0_0; readonly "Subquery": QuerySubqueryExpressionV1_0_0; readonly "Discretize": QueryDiscretizeExpressionV1_0_0; readonly "And": QueryBinaryExpressionV1_0_0; readonly "Between": QueryBetweenExpressionV1_0_0; readonly "In": QueryInExpressionV1_0_0; readonly "Or": QueryBinaryExpressionV1_0_0; readonly "Comparison": QueryComparisonExpressionV1_0_0; readonly "Not": QueryNotExpressionV1_0_0; readonly "Contains": QueryContainsExpressionV1_0_0; readonly "StartsWith": QueryStartsWithExpressionV1_0_0; readonly "Exists": QueryExistsExpressionV1_0_0; readonly "Literal": QueryLiteralExpressionV1_0_0; readonly "DateSpan": QueryDateSpanExpressionV1_0_0; readonly "DateAdd": QueryDateAddExpressionV1_0_0; readonly "Now": QueryNowExpressionV1_0_0; readonly "DefaultValue": QueryDefaultValueExpressionV1_0_0; readonly "AnyValue": QueryAnyValueExpressionV1_0_0; readonly "Arithmetic": QueryArithmeticExpressionV1_0_0; readonly "Floor": QueryFloorExpressionV1_0_0; readonly "ScopedEval": QueryScopedEvalExpressionV1_0_0; readonly "FilteredEval": QueryFilteredEvalExpressionV1_0_0; readonly "TransformTableRef": QueryTransformTableRefExpressionV1_0_0; readonly "TransformOutputRoleRef": QueryTransformOutputRoleRefExpressionV1_0_0; readonly "SparklineData": QuerySparklineDataExpressionV1_0_0; readonly "NativeVisualCalculation": QueryNativeVisualCalcV1_0_0; readonly "FillRule": QueryFillRuleExpressionV1_0_0; readonly "GroupRef": QueryGroupRefExpressionV1_0_0; readonly "ResourcePackageItem": QueryResourcePackageItemV1_0_0; readonly "RoleRef": QueryRoleRefExpressionV1_0_0; readonly "SummaryValueRef": QuerySummaryValueRefExpressionV1_0_0; readonly "AllRolesRef": QueryAllRolesRefExpressionV1_0_0; readonly "SelectRef": QuerySelectRefExpressionV1_0_0; readonly "ThemeDataColor": QueryThemeDataColorExpressionV1_0_0; readonly "Conditional": QueryConditionalExpressionV1_0_0; readonly "NativeMeasure": QueryNativeMeasureV1_0_0; readonly "NativeColumn": QueryNativeColumnV1_0_0; }>;
/** Native schema for QueryExpressionContainer in semantic-query 1.0.0. */
export const QueryExpressionContainerV1_0_0: Schema.Codec<QueryExpressionContainerV1_0_0> = Schema.Union([
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SourceRef": Schema.Union([Schema.suspend(() => StandaloneSourceRefExpressionV1_0_0), Schema.suspend(() => QuerySourceRefExpressionV1_0_0)]) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Column": Schema.suspend(() => QueryColumnExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Measure": Schema.suspend(() => QueryMeasureExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Min": Schema.suspend(() => QueryMinExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Max": Schema.suspend(() => QueryMaxExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Aggregation": Schema.suspend(() => QueryAggregationExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Percentile": Schema.suspend(() => QueryPercentileExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Hierarchy": Schema.suspend(() => QueryHierarchyExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "HierarchyLevel": Schema.suspend(() => QueryHierarchyLevelExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "PropertyVariationSource": Schema.suspend(() => QueryPropertyVariationSourceExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Subquery": Schema.suspend(() => QuerySubqueryExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Discretize": Schema.suspend(() => QueryDiscretizeExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "And": Schema.suspend(() => QueryBinaryExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Between": Schema.suspend(() => QueryBetweenExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "In": Schema.suspend(() => QueryInExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Or": Schema.suspend(() => QueryBinaryExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Comparison": Schema.suspend(() => QueryComparisonExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Not": Schema.suspend(() => QueryNotExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Contains": Schema.suspend(() => QueryContainsExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "StartsWith": Schema.suspend(() => QueryStartsWithExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Exists": Schema.suspend(() => QueryExistsExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Literal": Schema.suspend(() => QueryLiteralExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "DateSpan": Schema.suspend(() => QueryDateSpanExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "DateAdd": Schema.suspend(() => QueryDateAddExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Now": Schema.suspend(() => QueryNowExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "DefaultValue": Schema.suspend(() => QueryDefaultValueExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "AnyValue": Schema.suspend(() => QueryAnyValueExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Arithmetic": Schema.suspend(() => QueryArithmeticExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Floor": Schema.suspend(() => QueryFloorExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "ScopedEval": Schema.suspend(() => QueryScopedEvalExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "FilteredEval": Schema.suspend(() => QueryFilteredEvalExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "TransformTableRef": Schema.suspend(() => QueryTransformTableRefExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "TransformOutputRoleRef": Schema.suspend(() => QueryTransformOutputRoleRefExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SparklineData": Schema.suspend(() => QuerySparklineDataExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "NativeVisualCalculation": Schema.suspend(() => QueryNativeVisualCalcV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "FillRule": Schema.suspend(() => QueryFillRuleExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "GroupRef": Schema.suspend(() => QueryGroupRefExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "ResourcePackageItem": Schema.suspend(() => QueryResourcePackageItemV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "RoleRef": Schema.suspend(() => QueryRoleRefExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SummaryValueRef": Schema.suspend(() => QuerySummaryValueRefExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "AllRolesRef": Schema.suspend(() => QueryAllRolesRefExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SelectRef": Schema.suspend(() => QuerySelectRefExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "ThemeDataColor": Schema.suspend(() => QueryThemeDataColorExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Conditional": Schema.suspend(() => QueryConditionalExpressionV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "NativeMeasure": Schema.suspend(() => QueryNativeMeasureV1_0_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "NativeColumn": Schema.suspend(() => QueryNativeColumnV1_0_0) })
]);

/** QueryNativeColumn in semantic-query 1.0.0. */
export type QueryNativeColumnV1_0_0 = { readonly "DataType": number; readonly "Expression": string; readonly "Language": string; readonly "Source": QueryExpressionContainerV1_0_0; readonly "ExpressionContentCache"?: QueryExpressionContentCacheV1_0_0; readonly "ProposedName"?: string; readonly "Format"?: string; };
/** Native schema for QueryNativeColumn in semantic-query 1.0.0. */
export const QueryNativeColumnV1_0_0: Schema.Codec<QueryNativeColumnV1_0_0> = closed({ "DataType": Schema.Finite, "Expression": Schema.String, "Language": Schema.String, "Source": Schema.suspend(() => QueryExpressionContainerV1_0_0), "ExpressionContentCache": Schema.optionalKey(Schema.suspend(() => QueryExpressionContentCacheV1_0_0)), "ProposedName": Schema.optionalKey(Schema.String), "Format": Schema.optionalKey(Schema.String) });

/** QueryExpressionContentCache in semantic-query 1.0.0. */
export type QueryExpressionContentCacheV1_0_0 = { readonly "Dependencies"?: ReadonlyArray<QueryExpressionContainerV1_0_0>; readonly "UnrecognizedIdentifiers"?: boolean; };
/** Native schema for QueryExpressionContentCache in semantic-query 1.0.0. */
export const QueryExpressionContentCacheV1_0_0: Schema.Codec<QueryExpressionContentCacheV1_0_0> = closed({ "Dependencies": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0))), "UnrecognizedIdentifiers": Schema.optionalKey(Schema.Boolean) });

/** QueryNativeMeasure in semantic-query 1.0.0. */
export type QueryNativeMeasureV1_0_0 = { readonly "DataType": number; readonly "Expression": string; readonly "Language": "dax"; readonly "ExpressionContentCache"?: QueryExpressionContentCacheV1_0_0; readonly "ProposedName"?: string; readonly "Format"?: string; };
/** Native schema for QueryNativeMeasure in semantic-query 1.0.0. */
export const QueryNativeMeasureV1_0_0: Schema.Codec<QueryNativeMeasureV1_0_0> = closed({ "DataType": Schema.Finite, "Expression": Schema.String, "Language": Schema.Literal("dax"), "ExpressionContentCache": Schema.optionalKey(Schema.suspend(() => QueryExpressionContentCacheV1_0_0)), "ProposedName": Schema.optionalKey(Schema.String), "Format": Schema.optionalKey(Schema.String) });

/** QueryConditionalExpression in semantic-query 1.0.0. */
export type QueryConditionalExpressionV1_0_0 = { readonly "Cases": ReadonlyArray<QueryCaseV1_0_0>; readonly "DefaultValue"?: QueryExpressionContainerV1_0_0; };
/** Native schema for QueryConditionalExpression in semantic-query 1.0.0. */
export const QueryConditionalExpressionV1_0_0: Schema.Codec<QueryConditionalExpressionV1_0_0> = closed({ "Cases": Schema.Array(Schema.suspend(() => QueryCaseV1_0_0)), "DefaultValue": Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_0_0)) });

/** QueryCase in semantic-query 1.0.0. */
export type QueryCaseV1_0_0 = { readonly "Condition": QueryExpressionContainerV1_0_0; readonly "Value": QueryExpressionContainerV1_0_0; };
/** Native schema for QueryCase in semantic-query 1.0.0. */
export const QueryCaseV1_0_0: Schema.Codec<QueryCaseV1_0_0> = closed({ "Condition": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Value": Schema.suspend(() => QueryExpressionContainerV1_0_0) });

/** QueryThemeDataColorExpression in semantic-query 1.0.0. */
export type QueryThemeDataColorExpressionV1_0_0 = { readonly "ColorId": number; readonly "Percent": number; };
/** Native schema for QueryThemeDataColorExpression in semantic-query 1.0.0. */
export const QueryThemeDataColorExpressionV1_0_0: Schema.Codec<QueryThemeDataColorExpressionV1_0_0> = closed({ "ColorId": Schema.Finite, "Percent": Schema.Finite });

/** QuerySelectRefExpression in semantic-query 1.0.0. */
export type QuerySelectRefExpressionV1_0_0 = { readonly "ExpressionName": string; };
/** Native schema for QuerySelectRefExpression in semantic-query 1.0.0. */
export const QuerySelectRefExpressionV1_0_0: Schema.Codec<QuerySelectRefExpressionV1_0_0> = closed({ "ExpressionName": Schema.String });

/** QueryAllRolesRefExpression in semantic-query 1.0.0. */
export type QueryAllRolesRefExpressionV1_0_0 = {  };
/** Native schema for QueryAllRolesRefExpression in semantic-query 1.0.0. */
export const QueryAllRolesRefExpressionV1_0_0: Schema.Codec<QueryAllRolesRefExpressionV1_0_0> = closed({  });

/** QuerySummaryValueRefExpression in semantic-query 1.0.0. */
export type QuerySummaryValueRefExpressionV1_0_0 = { readonly "Name": string; };
/** Native schema for QuerySummaryValueRefExpression in semantic-query 1.0.0. */
export const QuerySummaryValueRefExpressionV1_0_0: Schema.Codec<QuerySummaryValueRefExpressionV1_0_0> = closed({ "Name": Schema.String });

/** QueryRoleRefExpression in semantic-query 1.0.0. */
export type QueryRoleRefExpressionV1_0_0 = { readonly "Role": string; };
/** Native schema for QueryRoleRefExpression in semantic-query 1.0.0. */
export const QueryRoleRefExpressionV1_0_0: Schema.Codec<QueryRoleRefExpressionV1_0_0> = closed({ "Role": Schema.String });

/** QueryResourcePackageItem in semantic-query 1.0.0. */
export type QueryResourcePackageItemV1_0_0 = { readonly "PackageName": string; readonly "PackageType": number; readonly "ItemName": string; };
/** Native schema for QueryResourcePackageItem in semantic-query 1.0.0. */
export const QueryResourcePackageItemV1_0_0: Schema.Codec<QueryResourcePackageItemV1_0_0> = closed({ "PackageName": Schema.String, "PackageType": Schema.Finite, "ItemName": Schema.String });

/** QueryGroupRefExpression in semantic-query 1.0.0. */
export type QueryGroupRefExpressionV1_0_0 = { readonly "GroupedColumns": ReadonlyArray<QueryExpressionContainerV1_0_0>; readonly "Expression": QueryExpressionContainerV1_0_0; readonly "Property": string; };
/** Native schema for QueryGroupRefExpression in semantic-query 1.0.0. */
export const QueryGroupRefExpressionV1_0_0: Schema.Codec<QueryGroupRefExpressionV1_0_0> = closed({ "GroupedColumns": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)), "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Property": Schema.String });

/** QueryFillRuleExpression in semantic-query 1.0.0. */
export type QueryFillRuleExpressionV1_0_0 = { readonly "Input": QueryExpressionContainerV1_0_0; readonly "FillRule": Schema.Json; };
/** Native schema for QueryFillRuleExpression in semantic-query 1.0.0. */
export const QueryFillRuleExpressionV1_0_0: Schema.Codec<QueryFillRuleExpressionV1_0_0> = closed({ "Input": Schema.suspend(() => QueryExpressionContainerV1_0_0), "FillRule": Schema.Json });

/** QueryNativeVisualCalc in semantic-query 1.0.0. */
export type QueryNativeVisualCalcV1_0_0 = { readonly "Language": "dax"; readonly "Expression": string; readonly "Name": string; };
/** Native schema for QueryNativeVisualCalc in semantic-query 1.0.0. */
export const QueryNativeVisualCalcV1_0_0: Schema.Codec<QueryNativeVisualCalcV1_0_0> = closed({ "Language": Schema.Literal("dax"), "Expression": Schema.String, "Name": Schema.String });

/** QuerySparklineDataExpression in semantic-query 1.0.0. */
export type QuerySparklineDataExpressionV1_0_0 = { readonly "Measure": QueryExpressionContainerV1_0_0; readonly "Groupings": ReadonlyArray<QueryExpressionContainerV1_0_0>; readonly "PointsPerSparkline"?: 52; };
/** Native schema for QuerySparklineDataExpression in semantic-query 1.0.0. */
export const QuerySparklineDataExpressionV1_0_0: Schema.Codec<QuerySparklineDataExpressionV1_0_0> = closed({ "Measure": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Groupings": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)), "PointsPerSparkline": Schema.optionalKey(Schema.Literal(52)) });

/** QueryTransformOutputRoleRefExpression in semantic-query 1.0.0. */
export type QueryTransformOutputRoleRefExpressionV1_0_0 = { readonly "Role": string; readonly "Transform"?: string; };
/** Native schema for QueryTransformOutputRoleRefExpression in semantic-query 1.0.0. */
export const QueryTransformOutputRoleRefExpressionV1_0_0: Schema.Codec<QueryTransformOutputRoleRefExpressionV1_0_0> = closed({ "Role": Schema.String, "Transform": Schema.optionalKey(Schema.String) });

/** QueryTransformTableRefExpression in semantic-query 1.0.0. */
export type QueryTransformTableRefExpressionV1_0_0 = { readonly "Source": string; };
/** Native schema for QueryTransformTableRefExpression in semantic-query 1.0.0. */
export const QueryTransformTableRefExpressionV1_0_0: Schema.Codec<QueryTransformTableRefExpressionV1_0_0> = closed({ "Source": Schema.String });

/** QueryFilteredEvalExpression in semantic-query 1.0.0. */
export type QueryFilteredEvalExpressionV1_0_0 = { readonly "Expression": QueryExpressionContainerV1_0_0; readonly "Filters": ReadonlyArray<QueryFilterV1_0_0>; };
/** Native schema for QueryFilteredEvalExpression in semantic-query 1.0.0. */
export const QueryFilteredEvalExpressionV1_0_0: Schema.Codec<QueryFilteredEvalExpressionV1_0_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Filters": Schema.Array(Schema.suspend(() => QueryFilterV1_0_0)) });

/** QueryScopedEvalExpression in semantic-query 1.0.0. */
export type QueryScopedEvalExpressionV1_0_0 = { readonly "Expression": QueryExpressionContainerV1_0_0; readonly "Scope": ReadonlyArray<QueryExpressionContainerV1_0_0>; };
/** Native schema for QueryScopedEvalExpression in semantic-query 1.0.0. */
export const QueryScopedEvalExpressionV1_0_0: Schema.Codec<QueryScopedEvalExpressionV1_0_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Scope": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)) });

/** QueryFloorExpression in semantic-query 1.0.0. */
export type QueryFloorExpressionV1_0_0 = { readonly "Expression": QueryExpressionContainerV1_0_0; readonly "Size": number; readonly "TimeUnit"?: (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7); };
/** Native schema for QueryFloorExpression in semantic-query 1.0.0. */
export const QueryFloorExpressionV1_0_0: Schema.Codec<QueryFloorExpressionV1_0_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Size": Schema.Finite, "TimeUnit": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)])) });

/** QueryArithmeticExpression in semantic-query 1.0.0. */
export type QueryArithmeticExpressionV1_0_0 = { readonly "Left": QueryExpressionContainerV1_0_0; readonly "Right": QueryExpressionContainerV1_0_0; readonly "Operator": ArithmeticOperatorKindV1_0_0; };
/** Native schema for QueryArithmeticExpression in semantic-query 1.0.0. */
export const QueryArithmeticExpressionV1_0_0: Schema.Codec<QueryArithmeticExpressionV1_0_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Operator": Schema.suspend(() => ArithmeticOperatorKindV1_0_0) });

/** ArithmeticOperatorKind in semantic-query 1.0.0. */
export type ArithmeticOperatorKindV1_0_0 = (0) | (1) | (2) | (3);
/** Native schema for ArithmeticOperatorKind in semantic-query 1.0.0. */
export const ArithmeticOperatorKindV1_0_0: Schema.Codec<ArithmeticOperatorKindV1_0_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3)]);

/** QueryAnyValueExpression in semantic-query 1.0.0. */
export type QueryAnyValueExpressionV1_0_0 = { readonly "DefaultValueOverridesAncestors"?: boolean; };
/** Native schema for QueryAnyValueExpression in semantic-query 1.0.0. */
export const QueryAnyValueExpressionV1_0_0: Schema.Codec<QueryAnyValueExpressionV1_0_0> = closed({ "DefaultValueOverridesAncestors": Schema.optionalKey(Schema.Boolean) });

/** QueryDefaultValueExpression in semantic-query 1.0.0. */
export type QueryDefaultValueExpressionV1_0_0 = {  };
/** Native schema for QueryDefaultValueExpression in semantic-query 1.0.0. */
export const QueryDefaultValueExpressionV1_0_0: Schema.Codec<QueryDefaultValueExpressionV1_0_0> = closed({  });

/** QueryNowExpression in semantic-query 1.0.0. */
export type QueryNowExpressionV1_0_0 = {  };
/** Native schema for QueryNowExpression in semantic-query 1.0.0. */
export const QueryNowExpressionV1_0_0: Schema.Codec<QueryNowExpressionV1_0_0> = closed({  });

/** QueryDateAddExpression in semantic-query 1.0.0. */
export type QueryDateAddExpressionV1_0_0 = { readonly "Amount": number; readonly "TimeUnit": TimeUnitV1_0_0; readonly "Expression": QueryExpressionContainerV1_0_0; };
/** Native schema for QueryDateAddExpression in semantic-query 1.0.0. */
export const QueryDateAddExpressionV1_0_0: Schema.Codec<QueryDateAddExpressionV1_0_0> = closed({ "Amount": Schema.Finite, "TimeUnit": Schema.suspend(() => TimeUnitV1_0_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0) });

/** TimeUnit in semantic-query 1.0.0. */
export type TimeUnitV1_0_0 = (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7);
/** Native schema for TimeUnit in semantic-query 1.0.0. */
export const TimeUnitV1_0_0: Schema.Codec<TimeUnitV1_0_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)]);

/** QueryDateSpanExpression in semantic-query 1.0.0. */
export type QueryDateSpanExpressionV1_0_0 = { readonly "TimeUnit": TimeUnitV1_0_0; readonly "Expression": QueryExpressionContainerV1_0_0; };
/** Native schema for QueryDateSpanExpression in semantic-query 1.0.0. */
export const QueryDateSpanExpressionV1_0_0: Schema.Codec<QueryDateSpanExpressionV1_0_0> = closed({ "TimeUnit": Schema.suspend(() => TimeUnitV1_0_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0) });

/** QueryLiteralExpression in semantic-query 1.0.0. */
export type QueryLiteralExpressionV1_0_0 = { readonly "Value": string; };
/** Native schema for QueryLiteralExpression in semantic-query 1.0.0. */
export const QueryLiteralExpressionV1_0_0: Schema.Codec<QueryLiteralExpressionV1_0_0> = closed({ "Value": Schema.String });

/** QueryExistsExpression in semantic-query 1.0.0. */
export type QueryExistsExpressionV1_0_0 = { readonly "Expression": QueryExpressionContainerV1_0_0; };
/** Native schema for QueryExistsExpression in semantic-query 1.0.0. */
export const QueryExistsExpressionV1_0_0: Schema.Codec<QueryExistsExpressionV1_0_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0) });

/** QueryStartsWithExpression in semantic-query 1.0.0. */
export type QueryStartsWithExpressionV1_0_0 = { readonly "Left": QueryExpressionContainerV1_0_0; readonly "Right": QueryExpressionContainerV1_0_0; };
/** Native schema for QueryStartsWithExpression in semantic-query 1.0.0. */
export const QueryStartsWithExpressionV1_0_0: Schema.Codec<QueryStartsWithExpressionV1_0_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_0_0) });

/** QueryContainsExpression in semantic-query 1.0.0. */
export type QueryContainsExpressionV1_0_0 = { readonly "Left": QueryExpressionContainerV1_0_0; readonly "Right": QueryExpressionContainerV1_0_0; };
/** Native schema for QueryContainsExpression in semantic-query 1.0.0. */
export const QueryContainsExpressionV1_0_0: Schema.Codec<QueryContainsExpressionV1_0_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_0_0) });

/** QueryNotExpression in semantic-query 1.0.0. */
export type QueryNotExpressionV1_0_0 = { readonly "Expression": QueryExpressionContainerV1_0_0; };
/** Native schema for QueryNotExpression in semantic-query 1.0.0. */
export const QueryNotExpressionV1_0_0: Schema.Codec<QueryNotExpressionV1_0_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0) });

/** QueryComparisonExpression in semantic-query 1.0.0. */
export type QueryComparisonExpressionV1_0_0 = { readonly "ComparisonKind": QueryComparisonKindV1_0_0; readonly "Left": QueryExpressionContainerV1_0_0; readonly "Right": QueryExpressionContainerV1_0_0; };
/** Native schema for QueryComparisonExpression in semantic-query 1.0.0. */
export const QueryComparisonExpressionV1_0_0: Schema.Codec<QueryComparisonExpressionV1_0_0> = closed({ "ComparisonKind": Schema.suspend(() => QueryComparisonKindV1_0_0), "Left": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_0_0) });

/** QueryComparisonKind in semantic-query 1.0.0. */
export type QueryComparisonKindV1_0_0 = (0) | (1) | (2) | (3) | (4);
/** Native schema for QueryComparisonKind in semantic-query 1.0.0. */
export const QueryComparisonKindV1_0_0: Schema.Codec<QueryComparisonKindV1_0_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4)]);

/** QueryBinaryExpression in semantic-query 1.0.0. */
export type QueryBinaryExpressionV1_0_0 = { readonly "Left": QueryExpressionContainerV1_0_0; readonly "Right": QueryExpressionContainerV1_0_0; };
/** Native schema for QueryBinaryExpression in semantic-query 1.0.0. */
export const QueryBinaryExpressionV1_0_0: Schema.Codec<QueryBinaryExpressionV1_0_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_0_0) });

/** QueryInExpression in semantic-query 1.0.0. */
export type QueryInExpressionV1_0_0 = { readonly "Expressions": ReadonlyArray<QueryExpressionContainerV1_0_0>; readonly "Values"?: ReadonlyArray<ReadonlyArray<QueryExpressionContainerV1_0_0>>; readonly "Table"?: QueryExpressionContainerV1_0_0; };
/** Native schema for QueryInExpression in semantic-query 1.0.0. */
export const QueryInExpressionV1_0_0: Schema.Codec<QueryInExpressionV1_0_0> = closed({ "Expressions": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)), "Values": Schema.optionalKey(Schema.Array(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)))), "Table": Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_0_0)) });

/** QueryBetweenExpression in semantic-query 1.0.0. */
export type QueryBetweenExpressionV1_0_0 = { readonly "Expression": QueryExpressionContainerV1_0_0; readonly "LowerBound": QueryExpressionContainerV1_0_0; readonly "UpperBound": QueryExpressionContainerV1_0_0; };
/** Native schema for QueryBetweenExpression in semantic-query 1.0.0. */
export const QueryBetweenExpressionV1_0_0: Schema.Codec<QueryBetweenExpressionV1_0_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0), "LowerBound": Schema.suspend(() => QueryExpressionContainerV1_0_0), "UpperBound": Schema.suspend(() => QueryExpressionContainerV1_0_0) });

/** QueryDiscretizeExpression in semantic-query 1.0.0. */
export type QueryDiscretizeExpressionV1_0_0 = { readonly "Expression": QueryExpressionContainerV1_0_0; readonly "Count": number; };
/** Native schema for QueryDiscretizeExpression in semantic-query 1.0.0. */
export const QueryDiscretizeExpressionV1_0_0: Schema.Codec<QueryDiscretizeExpressionV1_0_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Count": Schema.Finite });

/** QuerySubqueryExpression in semantic-query 1.0.0. */
export type QuerySubqueryExpressionV1_0_0 = { readonly "Query": QueryDefinitionV1_0_0; };
/** Native schema for QuerySubqueryExpression in semantic-query 1.0.0. */
export const QuerySubqueryExpressionV1_0_0: Schema.Codec<QuerySubqueryExpressionV1_0_0> = closed({ "Query": Schema.suspend(() => QueryDefinitionV1_0_0) });

/** QueryDefinition in semantic-query 1.0.0. */
export type QueryDefinitionV1_0_0 = { readonly "Version"?: 2; readonly "From": ReadonlyArray<EntitySourceV1_0_0>; readonly "Where"?: ReadonlyArray<QueryFilterV1_0_0>; readonly "OrderBy"?: ReadonlyArray<QuerySortClauseV1_0_0>; readonly "Select": ReadonlyArray<QueryExpressionContainerV1_0_0>; readonly "VisualShape"?: ReadonlyArray<AxisV1_0_0>; readonly "GroupBy"?: ReadonlyArray<QueryExpressionContainerV1_0_0>; readonly "Transform"?: ReadonlyArray<QueryTransformV1_0_0>; readonly "Top"?: number; };
/** Native schema for QueryDefinition in semantic-query 1.0.0. */
export const QueryDefinitionV1_0_0: Schema.Codec<QueryDefinitionV1_0_0> = closed({ "Version": Schema.optionalKey(Schema.Literal(2)), "From": Schema.Array(Schema.suspend(() => EntitySourceV1_0_0)), "Where": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryFilterV1_0_0))), "OrderBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortClauseV1_0_0))), "Select": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)), "VisualShape": Schema.optionalKey(Schema.Array(Schema.suspend(() => AxisV1_0_0))), "GroupBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0))), "Transform": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryTransformV1_0_0))), "Top": Schema.optionalKey(Schema.Finite) });

/** QueryTransform in semantic-query 1.0.0. */
export type QueryTransformV1_0_0 = { readonly "Name": string; readonly "Algorithm": string; readonly "Input": QueryTransformInputV1_0_0; readonly "Output": QueryTransformOutputV1_0_0; };
/** Native schema for QueryTransform in semantic-query 1.0.0. */
export const QueryTransformV1_0_0: Schema.Codec<QueryTransformV1_0_0> = closed({ "Name": Schema.String, "Algorithm": Schema.String, "Input": Schema.suspend(() => QueryTransformInputV1_0_0), "Output": Schema.suspend(() => QueryTransformOutputV1_0_0) });

/** QueryTransformOutput in semantic-query 1.0.0. */
export type QueryTransformOutputV1_0_0 = { readonly "Table"?: QueryTransformTableV1_0_0; };
/** Native schema for QueryTransformOutput in semantic-query 1.0.0. */
export const QueryTransformOutputV1_0_0: Schema.Codec<QueryTransformOutputV1_0_0> = closed({ "Table": Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_0_0)) });

/** QueryTransformTable in semantic-query 1.0.0. */
export type QueryTransformTableV1_0_0 = { readonly "Name": string; readonly "Columns": ReadonlyArray<QueryTransformTableColumnV1_0_0>; };
/** Native schema for QueryTransformTable in semantic-query 1.0.0. */
export const QueryTransformTableV1_0_0: Schema.Codec<QueryTransformTableV1_0_0> = closed({ "Name": Schema.String, "Columns": Schema.Array(Schema.suspend(() => QueryTransformTableColumnV1_0_0)) });

/** QueryTransformTableColumn in semantic-query 1.0.0. */
export type QueryTransformTableColumnV1_0_0 = { readonly "Role"?: string; readonly "Expression": QueryExpressionContainerV1_0_0; };
/** Native schema for QueryTransformTableColumn in semantic-query 1.0.0. */
export const QueryTransformTableColumnV1_0_0: Schema.Codec<QueryTransformTableColumnV1_0_0> = closed({ "Role": Schema.optionalKey(Schema.String), "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0) });

/** QueryTransformInput in semantic-query 1.0.0. */
export type QueryTransformInputV1_0_0 = { readonly "Parameters": ReadonlyArray<QueryExpressionContainerV1_0_0>; readonly "Table"?: QueryTransformTableV1_0_0; };
/** Native schema for QueryTransformInput in semantic-query 1.0.0. */
export const QueryTransformInputV1_0_0: Schema.Codec<QueryTransformInputV1_0_0> = closed({ "Parameters": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)), "Table": Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_0_0)) });

/** Axis in semantic-query 1.0.0. */
export type AxisV1_0_0 = { readonly "Groups": ReadonlyArray<AxisGroupV1_0_0>; readonly "Name": string; };
/** Native schema for Axis in semantic-query 1.0.0. */
export const AxisV1_0_0: Schema.Codec<AxisV1_0_0> = closed({ "Groups": Schema.Array(Schema.suspend(() => AxisGroupV1_0_0)), "Name": Schema.String });

/** AxisGroup in semantic-query 1.0.0. */
export type AxisGroupV1_0_0 = { readonly "Keys": ReadonlyArray<QueryExpressionContainerV1_0_0>; readonly "Subtotal": boolean; };
/** Native schema for AxisGroup in semantic-query 1.0.0. */
export const AxisGroupV1_0_0: Schema.Codec<AxisGroupV1_0_0> = closed({ "Keys": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)), "Subtotal": Schema.Boolean });

/** QuerySortClause in semantic-query 1.0.0. */
export type QuerySortClauseV1_0_0 = { readonly "Expression": QueryExpressionContainerV1_0_0; readonly "Direction": Schema.Json; };
/** Native schema for QuerySortClause in semantic-query 1.0.0. */
export const QuerySortClauseV1_0_0: Schema.Codec<QuerySortClauseV1_0_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Direction": Schema.Json });

/** EntitySource in semantic-query 1.0.0. */
export type EntitySourceV1_0_0 = { readonly "Name": string; readonly "Entity"?: string; readonly "Schema"?: string; readonly "Expression"?: QueryExpressionContainerV1_0_0; readonly "Type"?: (0) | (1) | (2); };
/** Native schema for EntitySource in semantic-query 1.0.0. */
export const EntitySourceV1_0_0: Schema.Codec<EntitySourceV1_0_0> = closed({ "Name": Schema.String, "Entity": Schema.optionalKey(Schema.String), "Schema": Schema.optionalKey(Schema.String), "Expression": Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_0_0)), "Type": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])) });

/** QueryPropertyVariationSourceExpression in semantic-query 1.0.0. */
export type QueryPropertyVariationSourceExpressionV1_0_0 = { readonly "Expression": QueryExpressionContainerV1_0_0; readonly "Name": string; readonly "Property": string; };
/** Native schema for QueryPropertyVariationSourceExpression in semantic-query 1.0.0. */
export const QueryPropertyVariationSourceExpressionV1_0_0: Schema.Codec<QueryPropertyVariationSourceExpressionV1_0_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Name": Schema.String, "Property": Schema.String });

/** QueryHierarchyLevelExpression in semantic-query 1.0.0. */
export type QueryHierarchyLevelExpressionV1_0_0 = { readonly "Expression": QueryExpressionContainerV1_0_0; readonly "Level": string; };
/** Native schema for QueryHierarchyLevelExpression in semantic-query 1.0.0. */
export const QueryHierarchyLevelExpressionV1_0_0: Schema.Codec<QueryHierarchyLevelExpressionV1_0_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Level": Schema.String });

/** QueryHierarchyExpression in semantic-query 1.0.0. */
export type QueryHierarchyExpressionV1_0_0 = { readonly "Expression": QueryExpressionContainerV1_0_0; readonly "Hierarchy": string; };
/** Native schema for QueryHierarchyExpression in semantic-query 1.0.0. */
export const QueryHierarchyExpressionV1_0_0: Schema.Codec<QueryHierarchyExpressionV1_0_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Hierarchy": Schema.String });

/** QueryPercentileExpression in semantic-query 1.0.0. */
export type QueryPercentileExpressionV1_0_0 = { readonly "Expression": QueryExpressionContainerV1_0_0; readonly "K": number; readonly "Exclusive"?: boolean; };
/** Native schema for QueryPercentileExpression in semantic-query 1.0.0. */
export const QueryPercentileExpressionV1_0_0: Schema.Codec<QueryPercentileExpressionV1_0_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0), "K": Schema.Finite, "Exclusive": Schema.optionalKey(Schema.Boolean) });

/** QueryAggregationExpression in semantic-query 1.0.0. */
export type QueryAggregationExpressionV1_0_0 = { readonly "Function": QueryAggregateFunctionV1_0_0; readonly "Expression": QueryExpressionContainerV1_0_0; };
/** Native schema for QueryAggregationExpression in semantic-query 1.0.0. */
export const QueryAggregationExpressionV1_0_0: Schema.Codec<QueryAggregationExpressionV1_0_0> = closed({ "Function": Schema.suspend(() => QueryAggregateFunctionV1_0_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0) });

/** QueryAggregateFunction in semantic-query 1.0.0. */
export type QueryAggregateFunctionV1_0_0 = (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7) | (8);
/** Native schema for QueryAggregateFunction in semantic-query 1.0.0. */
export const QueryAggregateFunctionV1_0_0: Schema.Codec<QueryAggregateFunctionV1_0_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7), Schema.Literal(8)]);

/** QueryMaxExpression in semantic-query 1.0.0. */
export type QueryMaxExpressionV1_0_0 = { readonly "IncludeAllTypes": IncludeAllTypesV1_0_0; readonly "Expression": QueryExpressionContainerV1_0_0; };
/** Native schema for QueryMaxExpression in semantic-query 1.0.0. */
export const QueryMaxExpressionV1_0_0: Schema.Codec<QueryMaxExpressionV1_0_0> = closed({ "IncludeAllTypes": Schema.suspend(() => IncludeAllTypesV1_0_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0) });

/** IncludeAllTypes in semantic-query 1.0.0. */
export type IncludeAllTypesV1_0_0 = (0) | (1) | (2);
/** Native schema for IncludeAllTypes in semantic-query 1.0.0. */
export const IncludeAllTypesV1_0_0: Schema.Codec<IncludeAllTypesV1_0_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]);

/** QueryMinExpression in semantic-query 1.0.0. */
export type QueryMinExpressionV1_0_0 = { readonly "IncludeAllTypes": IncludeAllTypesV1_0_0; readonly "Expression": QueryExpressionContainerV1_0_0; };
/** Native schema for QueryMinExpression in semantic-query 1.0.0. */
export const QueryMinExpressionV1_0_0: Schema.Codec<QueryMinExpressionV1_0_0> = closed({ "IncludeAllTypes": Schema.suspend(() => IncludeAllTypesV1_0_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0) });

/** QueryMeasureExpression in semantic-query 1.0.0. */
export type QueryMeasureExpressionV1_0_0 = { readonly "Expression": QueryExpressionContainerV1_0_0; readonly "Property": string; };
/** Native schema for QueryMeasureExpression in semantic-query 1.0.0. */
export const QueryMeasureExpressionV1_0_0: Schema.Codec<QueryMeasureExpressionV1_0_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Property": Schema.String });

/** QueryColumnExpression in semantic-query 1.0.0. */
export type QueryColumnExpressionV1_0_0 = { readonly "Expression": QueryExpressionContainerV1_0_0; readonly "Property": string; };
/** Native schema for QueryColumnExpression in semantic-query 1.0.0. */
export const QueryColumnExpressionV1_0_0: Schema.Codec<QueryColumnExpressionV1_0_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_0_0), "Property": Schema.String });

/** QuerySourceRefExpression in semantic-query 1.0.0. */
export type QuerySourceRefExpressionV1_0_0 = { readonly "Source": string; };
/** Native schema for QuerySourceRefExpression in semantic-query 1.0.0. */
export const QuerySourceRefExpressionV1_0_0: Schema.Codec<QuerySourceRefExpressionV1_0_0> = closed({ "Source": Schema.String });

/** StandaloneSourceRefExpression in semantic-query 1.0.0. */
export type StandaloneSourceRefExpressionV1_0_0 = { readonly "Schema"?: string; readonly "Entity": string; };
/** Native schema for StandaloneSourceRefExpression in semantic-query 1.0.0. */
export const StandaloneSourceRefExpressionV1_0_0: Schema.Codec<StandaloneSourceRefExpressionV1_0_0> = closed({ "Schema": Schema.optionalKey(Schema.String), "Entity": Schema.String });

/** Named query definitions with the exact 1.0.0 recursive dependency graph. */
export const SemanticQueryDefinitionsV1_0_0 = {
  FilterDefinition: FilterDefinitionV1_0_0,
  QueryFilter: QueryFilterV1_0_0,
  QueryExpressionContainer: QueryExpressionContainerV1_0_0,
  QueryNativeColumn: QueryNativeColumnV1_0_0,
  QueryExpressionContentCache: QueryExpressionContentCacheV1_0_0,
  QueryNativeMeasure: QueryNativeMeasureV1_0_0,
  QueryConditionalExpression: QueryConditionalExpressionV1_0_0,
  QueryCase: QueryCaseV1_0_0,
  QueryThemeDataColorExpression: QueryThemeDataColorExpressionV1_0_0,
  QuerySelectRefExpression: QuerySelectRefExpressionV1_0_0,
  QueryAllRolesRefExpression: QueryAllRolesRefExpressionV1_0_0,
  QuerySummaryValueRefExpression: QuerySummaryValueRefExpressionV1_0_0,
  QueryRoleRefExpression: QueryRoleRefExpressionV1_0_0,
  QueryResourcePackageItem: QueryResourcePackageItemV1_0_0,
  QueryGroupRefExpression: QueryGroupRefExpressionV1_0_0,
  QueryFillRuleExpression: QueryFillRuleExpressionV1_0_0,
  QueryNativeVisualCalc: QueryNativeVisualCalcV1_0_0,
  QuerySparklineDataExpression: QuerySparklineDataExpressionV1_0_0,
  QueryTransformOutputRoleRefExpression: QueryTransformOutputRoleRefExpressionV1_0_0,
  QueryTransformTableRefExpression: QueryTransformTableRefExpressionV1_0_0,
  QueryFilteredEvalExpression: QueryFilteredEvalExpressionV1_0_0,
  QueryScopedEvalExpression: QueryScopedEvalExpressionV1_0_0,
  QueryFloorExpression: QueryFloorExpressionV1_0_0,
  QueryArithmeticExpression: QueryArithmeticExpressionV1_0_0,
  ArithmeticOperatorKind: ArithmeticOperatorKindV1_0_0,
  QueryAnyValueExpression: QueryAnyValueExpressionV1_0_0,
  QueryDefaultValueExpression: QueryDefaultValueExpressionV1_0_0,
  QueryNowExpression: QueryNowExpressionV1_0_0,
  QueryDateAddExpression: QueryDateAddExpressionV1_0_0,
  TimeUnit: TimeUnitV1_0_0,
  QueryDateSpanExpression: QueryDateSpanExpressionV1_0_0,
  QueryLiteralExpression: QueryLiteralExpressionV1_0_0,
  QueryExistsExpression: QueryExistsExpressionV1_0_0,
  QueryStartsWithExpression: QueryStartsWithExpressionV1_0_0,
  QueryContainsExpression: QueryContainsExpressionV1_0_0,
  QueryNotExpression: QueryNotExpressionV1_0_0,
  QueryComparisonExpression: QueryComparisonExpressionV1_0_0,
  QueryComparisonKind: QueryComparisonKindV1_0_0,
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
  QueryPropertyVariationSourceExpression: QueryPropertyVariationSourceExpressionV1_0_0,
  QueryHierarchyLevelExpression: QueryHierarchyLevelExpressionV1_0_0,
  QueryHierarchyExpression: QueryHierarchyExpressionV1_0_0,
  QueryPercentileExpression: QueryPercentileExpressionV1_0_0,
  QueryAggregationExpression: QueryAggregationExpressionV1_0_0,
  QueryAggregateFunction: QueryAggregateFunctionV1_0_0,
  QueryMaxExpression: QueryMaxExpressionV1_0_0,
  IncludeAllTypes: IncludeAllTypesV1_0_0,
  QueryMinExpression: QueryMinExpressionV1_0_0,
  QueryMeasureExpression: QueryMeasureExpressionV1_0_0,
  QueryColumnExpression: QueryColumnExpressionV1_0_0,
  QuerySourceRefExpression: QuerySourceRefExpressionV1_0_0,
  StandaloneSourceRefExpression: StandaloneSourceRefExpressionV1_0_0
} as const;

/** The source root declares definitions only, accepting any JSON value. */
export const SemanticQueryV1_0_0 = Schema.Json;
export type SemanticQueryV1_0_0 = typeof SemanticQueryV1_0_0.Type;

/** FilterDefinition in semantic-query 1.1.0. */
export type FilterDefinitionV1_1_0 = { readonly "Version"?: 2; readonly "From": ReadonlyArray<EntitySourceV1_1_0>; readonly "Where": ReadonlyArray<QueryFilterV1_1_0>; };
/** Native schema for FilterDefinition in semantic-query 1.1.0. */
export const FilterDefinitionV1_1_0: Schema.Codec<FilterDefinitionV1_1_0> = closed({ "Version": Schema.optionalKey(Schema.Literal(2)), "From": Schema.Array(Schema.suspend(() => EntitySourceV1_1_0)), "Where": Schema.Array(Schema.suspend(() => QueryFilterV1_1_0)) });

/** QueryFilter in semantic-query 1.1.0. */
export type QueryFilterV1_1_0 = { readonly "Target"?: ReadonlyArray<QueryExpressionContainerV1_1_0>; readonly "Condition": QueryExpressionContainerV1_1_0; readonly "Annotations"?: {  } & { readonly [key: string]: Schema.Json }; };
/** Native schema for QueryFilter in semantic-query 1.1.0. */
export const QueryFilterV1_1_0: Schema.Codec<QueryFilterV1_1_0> = closed({ "Target": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0))), "Condition": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)) });

/** QueryExpressionContainer in semantic-query 1.1.0. */
export type QueryExpressionContainerV1_1_0 = { readonly "Name"?: string; readonly "NativeReferenceName"?: string; readonly "Annotations"?: {  } & { readonly [key: string]: Schema.Json }; } & ExactlyOne<{ readonly "SourceRef": (StandaloneSourceRefExpressionV1_1_0) | (QuerySourceRefExpressionV1_1_0); readonly "Column": QueryColumnExpressionV1_1_0; readonly "Measure": QueryMeasureExpressionV1_1_0; readonly "Min": QueryMinExpressionV1_1_0; readonly "Max": QueryMaxExpressionV1_1_0; readonly "Aggregation": QueryAggregationExpressionV1_1_0; readonly "Percentile": QueryPercentileExpressionV1_1_0; readonly "Hierarchy": QueryHierarchyExpressionV1_1_0; readonly "HierarchyLevel": QueryHierarchyLevelExpressionV1_1_0; readonly "PropertyVariationSource": QueryPropertyVariationSourceExpressionV1_1_0; readonly "Subquery": QuerySubqueryExpressionV1_1_0; readonly "Discretize": QueryDiscretizeExpressionV1_1_0; readonly "And": QueryBinaryExpressionV1_1_0; readonly "Between": QueryBetweenExpressionV1_1_0; readonly "In": QueryInExpressionV1_1_0; readonly "Or": QueryBinaryExpressionV1_1_0; readonly "Comparison": QueryComparisonExpressionV1_1_0; readonly "Not": QueryNotExpressionV1_1_0; readonly "Contains": QueryContainsExpressionV1_1_0; readonly "StartsWith": QueryStartsWithExpressionV1_1_0; readonly "Exists": QueryExistsExpressionV1_1_0; readonly "Literal": QueryLiteralExpressionV1_1_0; readonly "DateSpan": QueryDateSpanExpressionV1_1_0; readonly "DateAdd": QueryDateAddExpressionV1_1_0; readonly "Now": QueryNowExpressionV1_1_0; readonly "DefaultValue": QueryDefaultValueExpressionV1_1_0; readonly "AnyValue": QueryAnyValueExpressionV1_1_0; readonly "Arithmetic": QueryArithmeticExpressionV1_1_0; readonly "Floor": QueryFloorExpressionV1_1_0; readonly "ScopedEval": QueryScopedEvalExpressionV1_1_0; readonly "FilteredEval": QueryFilteredEvalExpressionV1_1_0; readonly "TransformTableRef": QueryTransformTableRefExpressionV1_1_0; readonly "TransformOutputRoleRef": QueryTransformOutputRoleRefExpressionV1_1_0; readonly "SparklineData": QuerySparklineDataExpressionV1_1_0; readonly "NativeVisualCalculation": QueryNativeVisualCalcV1_1_0; readonly "FillRule": QueryFillRuleExpressionV1_1_0; readonly "GroupRef": QueryGroupRefExpressionV1_1_0; readonly "ResourcePackageItem": QueryResourcePackageItemV1_1_0; readonly "RoleRef": QueryRoleRefExpressionV1_1_0; readonly "SummaryValueRef": QuerySummaryValueRefExpressionV1_1_0; readonly "AllRolesRef": QueryAllRolesRefExpressionV1_1_0; readonly "SelectRef": QuerySelectRefExpressionV1_1_0; readonly "ThemeDataColor": QueryThemeDataColorExpressionV1_1_0; readonly "Conditional": QueryConditionalExpressionV1_1_0; readonly "NativeMeasure": QueryNativeMeasureV1_1_0; readonly "NativeColumn": QueryNativeColumnV1_1_0; readonly "VisualTopN": QueryVisualTopNExpressionV1_1_0; }>;
/** Native schema for QueryExpressionContainer in semantic-query 1.1.0. */
export const QueryExpressionContainerV1_1_0: Schema.Codec<QueryExpressionContainerV1_1_0> = Schema.Union([
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SourceRef": Schema.Union([Schema.suspend(() => StandaloneSourceRefExpressionV1_1_0), Schema.suspend(() => QuerySourceRefExpressionV1_1_0)]) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Column": Schema.suspend(() => QueryColumnExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Measure": Schema.suspend(() => QueryMeasureExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Min": Schema.suspend(() => QueryMinExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Max": Schema.suspend(() => QueryMaxExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Aggregation": Schema.suspend(() => QueryAggregationExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Percentile": Schema.suspend(() => QueryPercentileExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Hierarchy": Schema.suspend(() => QueryHierarchyExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "HierarchyLevel": Schema.suspend(() => QueryHierarchyLevelExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "PropertyVariationSource": Schema.suspend(() => QueryPropertyVariationSourceExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Subquery": Schema.suspend(() => QuerySubqueryExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Discretize": Schema.suspend(() => QueryDiscretizeExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "And": Schema.suspend(() => QueryBinaryExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Between": Schema.suspend(() => QueryBetweenExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "In": Schema.suspend(() => QueryInExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Or": Schema.suspend(() => QueryBinaryExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Comparison": Schema.suspend(() => QueryComparisonExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Not": Schema.suspend(() => QueryNotExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Contains": Schema.suspend(() => QueryContainsExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "StartsWith": Schema.suspend(() => QueryStartsWithExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Exists": Schema.suspend(() => QueryExistsExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Literal": Schema.suspend(() => QueryLiteralExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "DateSpan": Schema.suspend(() => QueryDateSpanExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "DateAdd": Schema.suspend(() => QueryDateAddExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Now": Schema.suspend(() => QueryNowExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "DefaultValue": Schema.suspend(() => QueryDefaultValueExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "AnyValue": Schema.suspend(() => QueryAnyValueExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Arithmetic": Schema.suspend(() => QueryArithmeticExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Floor": Schema.suspend(() => QueryFloorExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "ScopedEval": Schema.suspend(() => QueryScopedEvalExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "FilteredEval": Schema.suspend(() => QueryFilteredEvalExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "TransformTableRef": Schema.suspend(() => QueryTransformTableRefExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "TransformOutputRoleRef": Schema.suspend(() => QueryTransformOutputRoleRefExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SparklineData": Schema.suspend(() => QuerySparklineDataExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "NativeVisualCalculation": Schema.suspend(() => QueryNativeVisualCalcV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "FillRule": Schema.suspend(() => QueryFillRuleExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "GroupRef": Schema.suspend(() => QueryGroupRefExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "ResourcePackageItem": Schema.suspend(() => QueryResourcePackageItemV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "RoleRef": Schema.suspend(() => QueryRoleRefExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SummaryValueRef": Schema.suspend(() => QuerySummaryValueRefExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "AllRolesRef": Schema.suspend(() => QueryAllRolesRefExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SelectRef": Schema.suspend(() => QuerySelectRefExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "ThemeDataColor": Schema.suspend(() => QueryThemeDataColorExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Conditional": Schema.suspend(() => QueryConditionalExpressionV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "NativeMeasure": Schema.suspend(() => QueryNativeMeasureV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "NativeColumn": Schema.suspend(() => QueryNativeColumnV1_1_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "VisualTopN": Schema.suspend(() => QueryVisualTopNExpressionV1_1_0) })
]);

/** QueryVisualTopNExpression in semantic-query 1.1.0. */
export type QueryVisualTopNExpressionV1_1_0 = { readonly "ItemCount": number; };
/** Native schema for QueryVisualTopNExpression in semantic-query 1.1.0. */
export const QueryVisualTopNExpressionV1_1_0: Schema.Codec<QueryVisualTopNExpressionV1_1_0> = closed({ "ItemCount": Schema.Finite });

/** QueryNativeColumn in semantic-query 1.1.0. */
export type QueryNativeColumnV1_1_0 = { readonly "DataType": number; readonly "Expression": string; readonly "Language": string; readonly "Source": QueryExpressionContainerV1_1_0; readonly "ExpressionContentCache"?: QueryExpressionContentCacheV1_1_0; readonly "ProposedName"?: string; readonly "Format"?: string; };
/** Native schema for QueryNativeColumn in semantic-query 1.1.0. */
export const QueryNativeColumnV1_1_0: Schema.Codec<QueryNativeColumnV1_1_0> = closed({ "DataType": Schema.Finite, "Expression": Schema.String, "Language": Schema.String, "Source": Schema.suspend(() => QueryExpressionContainerV1_1_0), "ExpressionContentCache": Schema.optionalKey(Schema.suspend(() => QueryExpressionContentCacheV1_1_0)), "ProposedName": Schema.optionalKey(Schema.String), "Format": Schema.optionalKey(Schema.String) });

/** QueryExpressionContentCache in semantic-query 1.1.0. */
export type QueryExpressionContentCacheV1_1_0 = { readonly "Dependencies"?: ReadonlyArray<QueryExpressionContainerV1_1_0>; readonly "UnrecognizedIdentifiers"?: boolean; };
/** Native schema for QueryExpressionContentCache in semantic-query 1.1.0. */
export const QueryExpressionContentCacheV1_1_0: Schema.Codec<QueryExpressionContentCacheV1_1_0> = closed({ "Dependencies": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0))), "UnrecognizedIdentifiers": Schema.optionalKey(Schema.Boolean) });

/** QueryNativeMeasure in semantic-query 1.1.0. */
export type QueryNativeMeasureV1_1_0 = { readonly "DataType": number; readonly "Expression": string; readonly "Language": "dax"; readonly "ExpressionContentCache"?: QueryExpressionContentCacheV1_1_0; readonly "ProposedName"?: string; readonly "Format"?: string; };
/** Native schema for QueryNativeMeasure in semantic-query 1.1.0. */
export const QueryNativeMeasureV1_1_0: Schema.Codec<QueryNativeMeasureV1_1_0> = closed({ "DataType": Schema.Finite, "Expression": Schema.String, "Language": Schema.Literal("dax"), "ExpressionContentCache": Schema.optionalKey(Schema.suspend(() => QueryExpressionContentCacheV1_1_0)), "ProposedName": Schema.optionalKey(Schema.String), "Format": Schema.optionalKey(Schema.String) });

/** QueryConditionalExpression in semantic-query 1.1.0. */
export type QueryConditionalExpressionV1_1_0 = { readonly "Cases": ReadonlyArray<QueryCaseV1_1_0>; readonly "DefaultValue"?: QueryExpressionContainerV1_1_0; };
/** Native schema for QueryConditionalExpression in semantic-query 1.1.0. */
export const QueryConditionalExpressionV1_1_0: Schema.Codec<QueryConditionalExpressionV1_1_0> = closed({ "Cases": Schema.Array(Schema.suspend(() => QueryCaseV1_1_0)), "DefaultValue": Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_1_0)) });

/** QueryCase in semantic-query 1.1.0. */
export type QueryCaseV1_1_0 = { readonly "Condition": QueryExpressionContainerV1_1_0; readonly "Value": QueryExpressionContainerV1_1_0; };
/** Native schema for QueryCase in semantic-query 1.1.0. */
export const QueryCaseV1_1_0: Schema.Codec<QueryCaseV1_1_0> = closed({ "Condition": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Value": Schema.suspend(() => QueryExpressionContainerV1_1_0) });

/** QueryThemeDataColorExpression in semantic-query 1.1.0. */
export type QueryThemeDataColorExpressionV1_1_0 = { readonly "ColorId": number; readonly "Percent": number; };
/** Native schema for QueryThemeDataColorExpression in semantic-query 1.1.0. */
export const QueryThemeDataColorExpressionV1_1_0: Schema.Codec<QueryThemeDataColorExpressionV1_1_0> = closed({ "ColorId": Schema.Finite, "Percent": Schema.Finite });

/** QuerySelectRefExpression in semantic-query 1.1.0. */
export type QuerySelectRefExpressionV1_1_0 = { readonly "ExpressionName": string; };
/** Native schema for QuerySelectRefExpression in semantic-query 1.1.0. */
export const QuerySelectRefExpressionV1_1_0: Schema.Codec<QuerySelectRefExpressionV1_1_0> = closed({ "ExpressionName": Schema.String });

/** QueryAllRolesRefExpression in semantic-query 1.1.0. */
export type QueryAllRolesRefExpressionV1_1_0 = {  };
/** Native schema for QueryAllRolesRefExpression in semantic-query 1.1.0. */
export const QueryAllRolesRefExpressionV1_1_0: Schema.Codec<QueryAllRolesRefExpressionV1_1_0> = closed({  });

/** QuerySummaryValueRefExpression in semantic-query 1.1.0. */
export type QuerySummaryValueRefExpressionV1_1_0 = { readonly "Name": string; };
/** Native schema for QuerySummaryValueRefExpression in semantic-query 1.1.0. */
export const QuerySummaryValueRefExpressionV1_1_0: Schema.Codec<QuerySummaryValueRefExpressionV1_1_0> = closed({ "Name": Schema.String });

/** QueryRoleRefExpression in semantic-query 1.1.0. */
export type QueryRoleRefExpressionV1_1_0 = { readonly "Role": string; };
/** Native schema for QueryRoleRefExpression in semantic-query 1.1.0. */
export const QueryRoleRefExpressionV1_1_0: Schema.Codec<QueryRoleRefExpressionV1_1_0> = closed({ "Role": Schema.String });

/** QueryResourcePackageItem in semantic-query 1.1.0. */
export type QueryResourcePackageItemV1_1_0 = { readonly "PackageName": string; readonly "PackageType": number; readonly "ItemName": string; };
/** Native schema for QueryResourcePackageItem in semantic-query 1.1.0. */
export const QueryResourcePackageItemV1_1_0: Schema.Codec<QueryResourcePackageItemV1_1_0> = closed({ "PackageName": Schema.String, "PackageType": Schema.Finite, "ItemName": Schema.String });

/** QueryGroupRefExpression in semantic-query 1.1.0. */
export type QueryGroupRefExpressionV1_1_0 = { readonly "GroupedColumns": ReadonlyArray<QueryExpressionContainerV1_1_0>; readonly "Expression": QueryExpressionContainerV1_1_0; readonly "Property": string; };
/** Native schema for QueryGroupRefExpression in semantic-query 1.1.0. */
export const QueryGroupRefExpressionV1_1_0: Schema.Codec<QueryGroupRefExpressionV1_1_0> = closed({ "GroupedColumns": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)), "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Property": Schema.String });

/** QueryFillRuleExpression in semantic-query 1.1.0. */
export type QueryFillRuleExpressionV1_1_0 = { readonly "Input": QueryExpressionContainerV1_1_0; readonly "FillRule": Schema.Json; };
/** Native schema for QueryFillRuleExpression in semantic-query 1.1.0. */
export const QueryFillRuleExpressionV1_1_0: Schema.Codec<QueryFillRuleExpressionV1_1_0> = closed({ "Input": Schema.suspend(() => QueryExpressionContainerV1_1_0), "FillRule": Schema.Json });

/** QueryNativeVisualCalc in semantic-query 1.1.0. */
export type QueryNativeVisualCalcV1_1_0 = { readonly "Language": "dax"; readonly "Expression": string; readonly "Name": string; };
/** Native schema for QueryNativeVisualCalc in semantic-query 1.1.0. */
export const QueryNativeVisualCalcV1_1_0: Schema.Codec<QueryNativeVisualCalcV1_1_0> = closed({ "Language": Schema.Literal("dax"), "Expression": Schema.String, "Name": Schema.String });

/** QuerySparklineDataExpression in semantic-query 1.1.0. */
export type QuerySparklineDataExpressionV1_1_0 = { readonly "Measure": QueryExpressionContainerV1_1_0; readonly "Groupings": ReadonlyArray<QueryExpressionContainerV1_1_0>; readonly "PointsPerSparkline"?: 52; };
/** Native schema for QuerySparklineDataExpression in semantic-query 1.1.0. */
export const QuerySparklineDataExpressionV1_1_0: Schema.Codec<QuerySparklineDataExpressionV1_1_0> = closed({ "Measure": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Groupings": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)), "PointsPerSparkline": Schema.optionalKey(Schema.Literal(52)) });

/** QueryTransformOutputRoleRefExpression in semantic-query 1.1.0. */
export type QueryTransformOutputRoleRefExpressionV1_1_0 = { readonly "Role": string; readonly "Transform"?: string; };
/** Native schema for QueryTransformOutputRoleRefExpression in semantic-query 1.1.0. */
export const QueryTransformOutputRoleRefExpressionV1_1_0: Schema.Codec<QueryTransformOutputRoleRefExpressionV1_1_0> = closed({ "Role": Schema.String, "Transform": Schema.optionalKey(Schema.String) });

/** QueryTransformTableRefExpression in semantic-query 1.1.0. */
export type QueryTransformTableRefExpressionV1_1_0 = { readonly "Source": string; };
/** Native schema for QueryTransformTableRefExpression in semantic-query 1.1.0. */
export const QueryTransformTableRefExpressionV1_1_0: Schema.Codec<QueryTransformTableRefExpressionV1_1_0> = closed({ "Source": Schema.String });

/** QueryFilteredEvalExpression in semantic-query 1.1.0. */
export type QueryFilteredEvalExpressionV1_1_0 = { readonly "Expression": QueryExpressionContainerV1_1_0; readonly "Filters": ReadonlyArray<QueryFilterV1_1_0>; };
/** Native schema for QueryFilteredEvalExpression in semantic-query 1.1.0. */
export const QueryFilteredEvalExpressionV1_1_0: Schema.Codec<QueryFilteredEvalExpressionV1_1_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Filters": Schema.Array(Schema.suspend(() => QueryFilterV1_1_0)) });

/** QueryScopedEvalExpression in semantic-query 1.1.0. */
export type QueryScopedEvalExpressionV1_1_0 = { readonly "Expression": QueryExpressionContainerV1_1_0; readonly "Scope": ReadonlyArray<QueryExpressionContainerV1_1_0>; };
/** Native schema for QueryScopedEvalExpression in semantic-query 1.1.0. */
export const QueryScopedEvalExpressionV1_1_0: Schema.Codec<QueryScopedEvalExpressionV1_1_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Scope": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)) });

/** QueryFloorExpression in semantic-query 1.1.0. */
export type QueryFloorExpressionV1_1_0 = { readonly "Expression": QueryExpressionContainerV1_1_0; readonly "Size": number; readonly "TimeUnit"?: (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7); };
/** Native schema for QueryFloorExpression in semantic-query 1.1.0. */
export const QueryFloorExpressionV1_1_0: Schema.Codec<QueryFloorExpressionV1_1_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Size": Schema.Finite, "TimeUnit": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)])) });

/** QueryArithmeticExpression in semantic-query 1.1.0. */
export type QueryArithmeticExpressionV1_1_0 = { readonly "Left": QueryExpressionContainerV1_1_0; readonly "Right": QueryExpressionContainerV1_1_0; readonly "Operator": ArithmeticOperatorKindV1_1_0; };
/** Native schema for QueryArithmeticExpression in semantic-query 1.1.0. */
export const QueryArithmeticExpressionV1_1_0: Schema.Codec<QueryArithmeticExpressionV1_1_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Operator": Schema.suspend(() => ArithmeticOperatorKindV1_1_0) });

/** ArithmeticOperatorKind in semantic-query 1.1.0. */
export type ArithmeticOperatorKindV1_1_0 = (0) | (1) | (2) | (3);
/** Native schema for ArithmeticOperatorKind in semantic-query 1.1.0. */
export const ArithmeticOperatorKindV1_1_0: Schema.Codec<ArithmeticOperatorKindV1_1_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3)]);

/** QueryAnyValueExpression in semantic-query 1.1.0. */
export type QueryAnyValueExpressionV1_1_0 = { readonly "DefaultValueOverridesAncestors"?: boolean; };
/** Native schema for QueryAnyValueExpression in semantic-query 1.1.0. */
export const QueryAnyValueExpressionV1_1_0: Schema.Codec<QueryAnyValueExpressionV1_1_0> = closed({ "DefaultValueOverridesAncestors": Schema.optionalKey(Schema.Boolean) });

/** QueryDefaultValueExpression in semantic-query 1.1.0. */
export type QueryDefaultValueExpressionV1_1_0 = {  };
/** Native schema for QueryDefaultValueExpression in semantic-query 1.1.0. */
export const QueryDefaultValueExpressionV1_1_0: Schema.Codec<QueryDefaultValueExpressionV1_1_0> = closed({  });

/** QueryNowExpression in semantic-query 1.1.0. */
export type QueryNowExpressionV1_1_0 = {  };
/** Native schema for QueryNowExpression in semantic-query 1.1.0. */
export const QueryNowExpressionV1_1_0: Schema.Codec<QueryNowExpressionV1_1_0> = closed({  });

/** QueryDateAddExpression in semantic-query 1.1.0. */
export type QueryDateAddExpressionV1_1_0 = { readonly "Amount": number; readonly "TimeUnit": TimeUnitV1_1_0; readonly "Expression": QueryExpressionContainerV1_1_0; };
/** Native schema for QueryDateAddExpression in semantic-query 1.1.0. */
export const QueryDateAddExpressionV1_1_0: Schema.Codec<QueryDateAddExpressionV1_1_0> = closed({ "Amount": Schema.Finite, "TimeUnit": Schema.suspend(() => TimeUnitV1_1_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0) });

/** TimeUnit in semantic-query 1.1.0. */
export type TimeUnitV1_1_0 = (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7);
/** Native schema for TimeUnit in semantic-query 1.1.0. */
export const TimeUnitV1_1_0: Schema.Codec<TimeUnitV1_1_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)]);

/** QueryDateSpanExpression in semantic-query 1.1.0. */
export type QueryDateSpanExpressionV1_1_0 = { readonly "TimeUnit": TimeUnitV1_1_0; readonly "Expression": QueryExpressionContainerV1_1_0; };
/** Native schema for QueryDateSpanExpression in semantic-query 1.1.0. */
export const QueryDateSpanExpressionV1_1_0: Schema.Codec<QueryDateSpanExpressionV1_1_0> = closed({ "TimeUnit": Schema.suspend(() => TimeUnitV1_1_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0) });

/** QueryLiteralExpression in semantic-query 1.1.0. */
export type QueryLiteralExpressionV1_1_0 = { readonly "Value": string; };
/** Native schema for QueryLiteralExpression in semantic-query 1.1.0. */
export const QueryLiteralExpressionV1_1_0: Schema.Codec<QueryLiteralExpressionV1_1_0> = closed({ "Value": Schema.String });

/** QueryExistsExpression in semantic-query 1.1.0. */
export type QueryExistsExpressionV1_1_0 = { readonly "Expression": QueryExpressionContainerV1_1_0; };
/** Native schema for QueryExistsExpression in semantic-query 1.1.0. */
export const QueryExistsExpressionV1_1_0: Schema.Codec<QueryExistsExpressionV1_1_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0) });

/** QueryStartsWithExpression in semantic-query 1.1.0. */
export type QueryStartsWithExpressionV1_1_0 = { readonly "Left": QueryExpressionContainerV1_1_0; readonly "Right": QueryExpressionContainerV1_1_0; };
/** Native schema for QueryStartsWithExpression in semantic-query 1.1.0. */
export const QueryStartsWithExpressionV1_1_0: Schema.Codec<QueryStartsWithExpressionV1_1_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_1_0) });

/** QueryContainsExpression in semantic-query 1.1.0. */
export type QueryContainsExpressionV1_1_0 = { readonly "Left": QueryExpressionContainerV1_1_0; readonly "Right": QueryExpressionContainerV1_1_0; };
/** Native schema for QueryContainsExpression in semantic-query 1.1.0. */
export const QueryContainsExpressionV1_1_0: Schema.Codec<QueryContainsExpressionV1_1_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_1_0) });

/** QueryNotExpression in semantic-query 1.1.0. */
export type QueryNotExpressionV1_1_0 = { readonly "Expression": QueryExpressionContainerV1_1_0; };
/** Native schema for QueryNotExpression in semantic-query 1.1.0. */
export const QueryNotExpressionV1_1_0: Schema.Codec<QueryNotExpressionV1_1_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0) });

/** QueryComparisonExpression in semantic-query 1.1.0. */
export type QueryComparisonExpressionV1_1_0 = { readonly "ComparisonKind": QueryComparisonKindV1_1_0; readonly "Left": QueryExpressionContainerV1_1_0; readonly "Right": QueryExpressionContainerV1_1_0; };
/** Native schema for QueryComparisonExpression in semantic-query 1.1.0. */
export const QueryComparisonExpressionV1_1_0: Schema.Codec<QueryComparisonExpressionV1_1_0> = closed({ "ComparisonKind": Schema.suspend(() => QueryComparisonKindV1_1_0), "Left": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_1_0) });

/** QueryComparisonKind in semantic-query 1.1.0. */
export type QueryComparisonKindV1_1_0 = (0) | (1) | (2) | (3) | (4);
/** Native schema for QueryComparisonKind in semantic-query 1.1.0. */
export const QueryComparisonKindV1_1_0: Schema.Codec<QueryComparisonKindV1_1_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4)]);

/** QueryBinaryExpression in semantic-query 1.1.0. */
export type QueryBinaryExpressionV1_1_0 = { readonly "Left": QueryExpressionContainerV1_1_0; readonly "Right": QueryExpressionContainerV1_1_0; };
/** Native schema for QueryBinaryExpression in semantic-query 1.1.0. */
export const QueryBinaryExpressionV1_1_0: Schema.Codec<QueryBinaryExpressionV1_1_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_1_0) });

/** QueryInExpression in semantic-query 1.1.0. */
export type QueryInExpressionV1_1_0 = { readonly "Expressions": ReadonlyArray<QueryExpressionContainerV1_1_0>; readonly "Values"?: ReadonlyArray<ReadonlyArray<QueryExpressionContainerV1_1_0>>; readonly "Table"?: QueryExpressionContainerV1_1_0; };
/** Native schema for QueryInExpression in semantic-query 1.1.0. */
export const QueryInExpressionV1_1_0: Schema.Codec<QueryInExpressionV1_1_0> = closed({ "Expressions": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)), "Values": Schema.optionalKey(Schema.Array(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)))), "Table": Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_1_0)) });

/** QueryBetweenExpression in semantic-query 1.1.0. */
export type QueryBetweenExpressionV1_1_0 = { readonly "Expression": QueryExpressionContainerV1_1_0; readonly "LowerBound": QueryExpressionContainerV1_1_0; readonly "UpperBound": QueryExpressionContainerV1_1_0; };
/** Native schema for QueryBetweenExpression in semantic-query 1.1.0. */
export const QueryBetweenExpressionV1_1_0: Schema.Codec<QueryBetweenExpressionV1_1_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0), "LowerBound": Schema.suspend(() => QueryExpressionContainerV1_1_0), "UpperBound": Schema.suspend(() => QueryExpressionContainerV1_1_0) });

/** QueryDiscretizeExpression in semantic-query 1.1.0. */
export type QueryDiscretizeExpressionV1_1_0 = { readonly "Expression": QueryExpressionContainerV1_1_0; readonly "Count": number; };
/** Native schema for QueryDiscretizeExpression in semantic-query 1.1.0. */
export const QueryDiscretizeExpressionV1_1_0: Schema.Codec<QueryDiscretizeExpressionV1_1_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Count": Schema.Finite });

/** QuerySubqueryExpression in semantic-query 1.1.0. */
export type QuerySubqueryExpressionV1_1_0 = { readonly "Query": QueryDefinitionV1_1_0; };
/** Native schema for QuerySubqueryExpression in semantic-query 1.1.0. */
export const QuerySubqueryExpressionV1_1_0: Schema.Codec<QuerySubqueryExpressionV1_1_0> = closed({ "Query": Schema.suspend(() => QueryDefinitionV1_1_0) });

/** QueryDefinition in semantic-query 1.1.0. */
export type QueryDefinitionV1_1_0 = { readonly "Version"?: 2; readonly "From": ReadonlyArray<EntitySourceV1_1_0>; readonly "Where"?: ReadonlyArray<QueryFilterV1_1_0>; readonly "OrderBy"?: ReadonlyArray<QuerySortClauseV1_1_0>; readonly "Select": ReadonlyArray<QueryExpressionContainerV1_1_0>; readonly "VisualShape"?: ReadonlyArray<AxisV1_1_0>; readonly "GroupBy"?: ReadonlyArray<QueryExpressionContainerV1_1_0>; readonly "Transform"?: ReadonlyArray<QueryTransformV1_1_0>; readonly "Top"?: number; };
/** Native schema for QueryDefinition in semantic-query 1.1.0. */
export const QueryDefinitionV1_1_0: Schema.Codec<QueryDefinitionV1_1_0> = closed({ "Version": Schema.optionalKey(Schema.Literal(2)), "From": Schema.Array(Schema.suspend(() => EntitySourceV1_1_0)), "Where": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryFilterV1_1_0))), "OrderBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortClauseV1_1_0))), "Select": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)), "VisualShape": Schema.optionalKey(Schema.Array(Schema.suspend(() => AxisV1_1_0))), "GroupBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0))), "Transform": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryTransformV1_1_0))), "Top": Schema.optionalKey(Schema.Finite) });

/** QueryTransform in semantic-query 1.1.0. */
export type QueryTransformV1_1_0 = { readonly "Name": string; readonly "Algorithm": string; readonly "Input": QueryTransformInputV1_1_0; readonly "Output": QueryTransformOutputV1_1_0; };
/** Native schema for QueryTransform in semantic-query 1.1.0. */
export const QueryTransformV1_1_0: Schema.Codec<QueryTransformV1_1_0> = closed({ "Name": Schema.String, "Algorithm": Schema.String, "Input": Schema.suspend(() => QueryTransformInputV1_1_0), "Output": Schema.suspend(() => QueryTransformOutputV1_1_0) });

/** QueryTransformOutput in semantic-query 1.1.0. */
export type QueryTransformOutputV1_1_0 = { readonly "Table"?: QueryTransformTableV1_1_0; };
/** Native schema for QueryTransformOutput in semantic-query 1.1.0. */
export const QueryTransformOutputV1_1_0: Schema.Codec<QueryTransformOutputV1_1_0> = closed({ "Table": Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_1_0)) });

/** QueryTransformTable in semantic-query 1.1.0. */
export type QueryTransformTableV1_1_0 = { readonly "Name": string; readonly "Columns": ReadonlyArray<QueryTransformTableColumnV1_1_0>; };
/** Native schema for QueryTransformTable in semantic-query 1.1.0. */
export const QueryTransformTableV1_1_0: Schema.Codec<QueryTransformTableV1_1_0> = closed({ "Name": Schema.String, "Columns": Schema.Array(Schema.suspend(() => QueryTransformTableColumnV1_1_0)) });

/** QueryTransformTableColumn in semantic-query 1.1.0. */
export type QueryTransformTableColumnV1_1_0 = { readonly "Role"?: string; readonly "Expression": QueryExpressionContainerV1_1_0; };
/** Native schema for QueryTransformTableColumn in semantic-query 1.1.0. */
export const QueryTransformTableColumnV1_1_0: Schema.Codec<QueryTransformTableColumnV1_1_0> = closed({ "Role": Schema.optionalKey(Schema.String), "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0) });

/** QueryTransformInput in semantic-query 1.1.0. */
export type QueryTransformInputV1_1_0 = { readonly "Parameters": ReadonlyArray<QueryExpressionContainerV1_1_0>; readonly "Table"?: QueryTransformTableV1_1_0; };
/** Native schema for QueryTransformInput in semantic-query 1.1.0. */
export const QueryTransformInputV1_1_0: Schema.Codec<QueryTransformInputV1_1_0> = closed({ "Parameters": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)), "Table": Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_1_0)) });

/** Axis in semantic-query 1.1.0. */
export type AxisV1_1_0 = { readonly "Groups": ReadonlyArray<AxisGroupV1_1_0>; readonly "Name": string; };
/** Native schema for Axis in semantic-query 1.1.0. */
export const AxisV1_1_0: Schema.Codec<AxisV1_1_0> = closed({ "Groups": Schema.Array(Schema.suspend(() => AxisGroupV1_1_0)), "Name": Schema.String });

/** AxisGroup in semantic-query 1.1.0. */
export type AxisGroupV1_1_0 = { readonly "Keys": ReadonlyArray<QueryExpressionContainerV1_1_0>; readonly "Subtotal": boolean; };
/** Native schema for AxisGroup in semantic-query 1.1.0. */
export const AxisGroupV1_1_0: Schema.Codec<AxisGroupV1_1_0> = closed({ "Keys": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)), "Subtotal": Schema.Boolean });

/** QuerySortClause in semantic-query 1.1.0. */
export type QuerySortClauseV1_1_0 = { readonly "Expression": QueryExpressionContainerV1_1_0; readonly "Direction": Schema.Json; };
/** Native schema for QuerySortClause in semantic-query 1.1.0. */
export const QuerySortClauseV1_1_0: Schema.Codec<QuerySortClauseV1_1_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Direction": Schema.Json });

/** EntitySource in semantic-query 1.1.0. */
export type EntitySourceV1_1_0 = { readonly "Name": string; readonly "Entity"?: string; readonly "Schema"?: string; readonly "Expression"?: QueryExpressionContainerV1_1_0; readonly "Type"?: (0) | (1) | (2); };
/** Native schema for EntitySource in semantic-query 1.1.0. */
export const EntitySourceV1_1_0: Schema.Codec<EntitySourceV1_1_0> = closed({ "Name": Schema.String, "Entity": Schema.optionalKey(Schema.String), "Schema": Schema.optionalKey(Schema.String), "Expression": Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_1_0)), "Type": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])) });

/** QueryPropertyVariationSourceExpression in semantic-query 1.1.0. */
export type QueryPropertyVariationSourceExpressionV1_1_0 = { readonly "Expression": QueryExpressionContainerV1_1_0; readonly "Name": string; readonly "Property": string; };
/** Native schema for QueryPropertyVariationSourceExpression in semantic-query 1.1.0. */
export const QueryPropertyVariationSourceExpressionV1_1_0: Schema.Codec<QueryPropertyVariationSourceExpressionV1_1_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Name": Schema.String, "Property": Schema.String });

/** QueryHierarchyLevelExpression in semantic-query 1.1.0. */
export type QueryHierarchyLevelExpressionV1_1_0 = { readonly "Expression": QueryExpressionContainerV1_1_0; readonly "Level": string; };
/** Native schema for QueryHierarchyLevelExpression in semantic-query 1.1.0. */
export const QueryHierarchyLevelExpressionV1_1_0: Schema.Codec<QueryHierarchyLevelExpressionV1_1_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Level": Schema.String });

/** QueryHierarchyExpression in semantic-query 1.1.0. */
export type QueryHierarchyExpressionV1_1_0 = { readonly "Expression": QueryExpressionContainerV1_1_0; readonly "Hierarchy": string; };
/** Native schema for QueryHierarchyExpression in semantic-query 1.1.0. */
export const QueryHierarchyExpressionV1_1_0: Schema.Codec<QueryHierarchyExpressionV1_1_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Hierarchy": Schema.String });

/** QueryPercentileExpression in semantic-query 1.1.0. */
export type QueryPercentileExpressionV1_1_0 = { readonly "Expression": QueryExpressionContainerV1_1_0; readonly "K": number; readonly "Exclusive"?: boolean; };
/** Native schema for QueryPercentileExpression in semantic-query 1.1.0. */
export const QueryPercentileExpressionV1_1_0: Schema.Codec<QueryPercentileExpressionV1_1_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0), "K": Schema.Finite, "Exclusive": Schema.optionalKey(Schema.Boolean) });

/** QueryAggregationExpression in semantic-query 1.1.0. */
export type QueryAggregationExpressionV1_1_0 = { readonly "Function": QueryAggregateFunctionV1_1_0; readonly "Expression": QueryExpressionContainerV1_1_0; };
/** Native schema for QueryAggregationExpression in semantic-query 1.1.0. */
export const QueryAggregationExpressionV1_1_0: Schema.Codec<QueryAggregationExpressionV1_1_0> = closed({ "Function": Schema.suspend(() => QueryAggregateFunctionV1_1_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0) });

/** QueryAggregateFunction in semantic-query 1.1.0. */
export type QueryAggregateFunctionV1_1_0 = (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7) | (8);
/** Native schema for QueryAggregateFunction in semantic-query 1.1.0. */
export const QueryAggregateFunctionV1_1_0: Schema.Codec<QueryAggregateFunctionV1_1_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7), Schema.Literal(8)]);

/** QueryMaxExpression in semantic-query 1.1.0. */
export type QueryMaxExpressionV1_1_0 = { readonly "IncludeAllTypes": IncludeAllTypesV1_1_0; readonly "Expression": QueryExpressionContainerV1_1_0; };
/** Native schema for QueryMaxExpression in semantic-query 1.1.0. */
export const QueryMaxExpressionV1_1_0: Schema.Codec<QueryMaxExpressionV1_1_0> = closed({ "IncludeAllTypes": Schema.suspend(() => IncludeAllTypesV1_1_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0) });

/** IncludeAllTypes in semantic-query 1.1.0. */
export type IncludeAllTypesV1_1_0 = (0) | (1) | (2);
/** Native schema for IncludeAllTypes in semantic-query 1.1.0. */
export const IncludeAllTypesV1_1_0: Schema.Codec<IncludeAllTypesV1_1_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]);

/** QueryMinExpression in semantic-query 1.1.0. */
export type QueryMinExpressionV1_1_0 = { readonly "IncludeAllTypes": IncludeAllTypesV1_1_0; readonly "Expression": QueryExpressionContainerV1_1_0; };
/** Native schema for QueryMinExpression in semantic-query 1.1.0. */
export const QueryMinExpressionV1_1_0: Schema.Codec<QueryMinExpressionV1_1_0> = closed({ "IncludeAllTypes": Schema.suspend(() => IncludeAllTypesV1_1_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0) });

/** QueryMeasureExpression in semantic-query 1.1.0. */
export type QueryMeasureExpressionV1_1_0 = { readonly "Expression": QueryExpressionContainerV1_1_0; readonly "Property": string; };
/** Native schema for QueryMeasureExpression in semantic-query 1.1.0. */
export const QueryMeasureExpressionV1_1_0: Schema.Codec<QueryMeasureExpressionV1_1_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Property": Schema.String });

/** QueryColumnExpression in semantic-query 1.1.0. */
export type QueryColumnExpressionV1_1_0 = { readonly "Expression": QueryExpressionContainerV1_1_0; readonly "Property": string; };
/** Native schema for QueryColumnExpression in semantic-query 1.1.0. */
export const QueryColumnExpressionV1_1_0: Schema.Codec<QueryColumnExpressionV1_1_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_1_0), "Property": Schema.String });

/** QuerySourceRefExpression in semantic-query 1.1.0. */
export type QuerySourceRefExpressionV1_1_0 = { readonly "Source": string; };
/** Native schema for QuerySourceRefExpression in semantic-query 1.1.0. */
export const QuerySourceRefExpressionV1_1_0: Schema.Codec<QuerySourceRefExpressionV1_1_0> = closed({ "Source": Schema.String });

/** StandaloneSourceRefExpression in semantic-query 1.1.0. */
export type StandaloneSourceRefExpressionV1_1_0 = { readonly "Schema"?: string; readonly "Entity": string; };
/** Native schema for StandaloneSourceRefExpression in semantic-query 1.1.0. */
export const StandaloneSourceRefExpressionV1_1_0: Schema.Codec<StandaloneSourceRefExpressionV1_1_0> = closed({ "Schema": Schema.optionalKey(Schema.String), "Entity": Schema.String });

/** Named query definitions with the exact 1.1.0 recursive dependency graph. */
export const SemanticQueryDefinitionsV1_1_0 = {
  FilterDefinition: FilterDefinitionV1_1_0,
  QueryFilter: QueryFilterV1_1_0,
  QueryExpressionContainer: QueryExpressionContainerV1_1_0,
  QueryVisualTopNExpression: QueryVisualTopNExpressionV1_1_0,
  QueryNativeColumn: QueryNativeColumnV1_1_0,
  QueryExpressionContentCache: QueryExpressionContentCacheV1_1_0,
  QueryNativeMeasure: QueryNativeMeasureV1_1_0,
  QueryConditionalExpression: QueryConditionalExpressionV1_1_0,
  QueryCase: QueryCaseV1_1_0,
  QueryThemeDataColorExpression: QueryThemeDataColorExpressionV1_1_0,
  QuerySelectRefExpression: QuerySelectRefExpressionV1_1_0,
  QueryAllRolesRefExpression: QueryAllRolesRefExpressionV1_1_0,
  QuerySummaryValueRefExpression: QuerySummaryValueRefExpressionV1_1_0,
  QueryRoleRefExpression: QueryRoleRefExpressionV1_1_0,
  QueryResourcePackageItem: QueryResourcePackageItemV1_1_0,
  QueryGroupRefExpression: QueryGroupRefExpressionV1_1_0,
  QueryFillRuleExpression: QueryFillRuleExpressionV1_1_0,
  QueryNativeVisualCalc: QueryNativeVisualCalcV1_1_0,
  QuerySparklineDataExpression: QuerySparklineDataExpressionV1_1_0,
  QueryTransformOutputRoleRefExpression: QueryTransformOutputRoleRefExpressionV1_1_0,
  QueryTransformTableRefExpression: QueryTransformTableRefExpressionV1_1_0,
  QueryFilteredEvalExpression: QueryFilteredEvalExpressionV1_1_0,
  QueryScopedEvalExpression: QueryScopedEvalExpressionV1_1_0,
  QueryFloorExpression: QueryFloorExpressionV1_1_0,
  QueryArithmeticExpression: QueryArithmeticExpressionV1_1_0,
  ArithmeticOperatorKind: ArithmeticOperatorKindV1_1_0,
  QueryAnyValueExpression: QueryAnyValueExpressionV1_1_0,
  QueryDefaultValueExpression: QueryDefaultValueExpressionV1_1_0,
  QueryNowExpression: QueryNowExpressionV1_1_0,
  QueryDateAddExpression: QueryDateAddExpressionV1_1_0,
  TimeUnit: TimeUnitV1_1_0,
  QueryDateSpanExpression: QueryDateSpanExpressionV1_1_0,
  QueryLiteralExpression: QueryLiteralExpressionV1_1_0,
  QueryExistsExpression: QueryExistsExpressionV1_1_0,
  QueryStartsWithExpression: QueryStartsWithExpressionV1_1_0,
  QueryContainsExpression: QueryContainsExpressionV1_1_0,
  QueryNotExpression: QueryNotExpressionV1_1_0,
  QueryComparisonExpression: QueryComparisonExpressionV1_1_0,
  QueryComparisonKind: QueryComparisonKindV1_1_0,
  QueryBinaryExpression: QueryBinaryExpressionV1_1_0,
  QueryInExpression: QueryInExpressionV1_1_0,
  QueryBetweenExpression: QueryBetweenExpressionV1_1_0,
  QueryDiscretizeExpression: QueryDiscretizeExpressionV1_1_0,
  QuerySubqueryExpression: QuerySubqueryExpressionV1_1_0,
  QueryDefinition: QueryDefinitionV1_1_0,
  QueryTransform: QueryTransformV1_1_0,
  QueryTransformOutput: QueryTransformOutputV1_1_0,
  QueryTransformTable: QueryTransformTableV1_1_0,
  QueryTransformTableColumn: QueryTransformTableColumnV1_1_0,
  QueryTransformInput: QueryTransformInputV1_1_0,
  Axis: AxisV1_1_0,
  AxisGroup: AxisGroupV1_1_0,
  QuerySortClause: QuerySortClauseV1_1_0,
  EntitySource: EntitySourceV1_1_0,
  QueryPropertyVariationSourceExpression: QueryPropertyVariationSourceExpressionV1_1_0,
  QueryHierarchyLevelExpression: QueryHierarchyLevelExpressionV1_1_0,
  QueryHierarchyExpression: QueryHierarchyExpressionV1_1_0,
  QueryPercentileExpression: QueryPercentileExpressionV1_1_0,
  QueryAggregationExpression: QueryAggregationExpressionV1_1_0,
  QueryAggregateFunction: QueryAggregateFunctionV1_1_0,
  QueryMaxExpression: QueryMaxExpressionV1_1_0,
  IncludeAllTypes: IncludeAllTypesV1_1_0,
  QueryMinExpression: QueryMinExpressionV1_1_0,
  QueryMeasureExpression: QueryMeasureExpressionV1_1_0,
  QueryColumnExpression: QueryColumnExpressionV1_1_0,
  QuerySourceRefExpression: QuerySourceRefExpressionV1_1_0,
  StandaloneSourceRefExpression: StandaloneSourceRefExpressionV1_1_0
} as const;

/** The source root declares definitions only, accepting any JSON value. */
export const SemanticQueryV1_1_0 = Schema.Json;
export type SemanticQueryV1_1_0 = typeof SemanticQueryV1_1_0.Type;

/** FilterDefinition in semantic-query 1.2.0. */
export type FilterDefinitionV1_2_0 = { readonly "Version"?: 2; readonly "From": ReadonlyArray<EntitySourceV1_2_0>; readonly "Where": ReadonlyArray<QueryFilterV1_2_0>; };
/** Native schema for FilterDefinition in semantic-query 1.2.0. */
export const FilterDefinitionV1_2_0: Schema.Codec<FilterDefinitionV1_2_0> = closed({ "Version": Schema.optionalKey(Schema.Literal(2)), "From": Schema.Array(Schema.suspend(() => EntitySourceV1_2_0)), "Where": Schema.Array(Schema.suspend(() => QueryFilterV1_2_0)) });

/** QueryFilter in semantic-query 1.2.0. */
export type QueryFilterV1_2_0 = { readonly "Target"?: ReadonlyArray<QueryExpressionContainerV1_2_0>; readonly "Condition": QueryExpressionContainerV1_2_0; readonly "Annotations"?: {  } & { readonly [key: string]: Schema.Json }; };
/** Native schema for QueryFilter in semantic-query 1.2.0. */
export const QueryFilterV1_2_0: Schema.Codec<QueryFilterV1_2_0> = closed({ "Target": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0))), "Condition": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)) });

/** QueryExpressionContainer in semantic-query 1.2.0. */
export type QueryExpressionContainerV1_2_0 = { readonly "Name"?: string; readonly "NativeReferenceName"?: string; readonly "Annotations"?: {  } & { readonly [key: string]: Schema.Json }; } & ExactlyOne<{ readonly "SourceRef": (StandaloneSourceRefExpressionV1_2_0) | (QuerySourceRefExpressionV1_2_0); readonly "Column": QueryColumnExpressionV1_2_0; readonly "Measure": QueryMeasureExpressionV1_2_0; readonly "Min": QueryMinExpressionV1_2_0; readonly "Max": QueryMaxExpressionV1_2_0; readonly "Aggregation": QueryAggregationExpressionV1_2_0; readonly "Percentile": QueryPercentileExpressionV1_2_0; readonly "Hierarchy": QueryHierarchyExpressionV1_2_0; readonly "HierarchyLevel": QueryHierarchyLevelExpressionV1_2_0; readonly "PropertyVariationSource": QueryPropertyVariationSourceExpressionV1_2_0; readonly "Subquery": QuerySubqueryExpressionV1_2_0; readonly "Discretize": QueryDiscretizeExpressionV1_2_0; readonly "And": QueryBinaryExpressionV1_2_0; readonly "Between": QueryBetweenExpressionV1_2_0; readonly "In": QueryInExpressionV1_2_0; readonly "Or": QueryBinaryExpressionV1_2_0; readonly "Comparison": QueryComparisonExpressionV1_2_0; readonly "Not": QueryNotExpressionV1_2_0; readonly "Contains": QueryContainsExpressionV1_2_0; readonly "StartsWith": QueryStartsWithExpressionV1_2_0; readonly "Exists": QueryExistsExpressionV1_2_0; readonly "Literal": QueryLiteralExpressionV1_2_0; readonly "DateSpan": QueryDateSpanExpressionV1_2_0; readonly "DateAdd": QueryDateAddExpressionV1_2_0; readonly "Now": QueryNowExpressionV1_2_0; readonly "DefaultValue": QueryDefaultValueExpressionV1_2_0; readonly "AnyValue": QueryAnyValueExpressionV1_2_0; readonly "Arithmetic": QueryArithmeticExpressionV1_2_0; readonly "Floor": QueryFloorExpressionV1_2_0; readonly "ScopedEval": QueryScopedEvalExpressionV1_2_0; readonly "FilteredEval": QueryFilteredEvalExpressionV1_2_0; readonly "TransformTableRef": QueryTransformTableRefExpressionV1_2_0; readonly "TransformOutputRoleRef": QueryTransformOutputRoleRefExpressionV1_2_0; readonly "SparklineData": QuerySparklineDataExpressionV1_2_0; readonly "NativeVisualCalculation": QueryNativeVisualCalcV1_2_0; readonly "FillRule": QueryFillRuleExpressionV1_2_0; readonly "GroupRef": QueryGroupRefExpressionV1_2_0; readonly "ResourcePackageItem": QueryResourcePackageItemV1_2_0; readonly "RoleRef": QueryRoleRefExpressionV1_2_0; readonly "SummaryValueRef": QuerySummaryValueRefExpressionV1_2_0; readonly "AllRolesRef": QueryAllRolesRefExpressionV1_2_0; readonly "SelectRef": QuerySelectRefExpressionV1_2_0; readonly "ThemeDataColor": QueryThemeDataColorExpressionV1_2_0; readonly "Conditional": QueryConditionalExpressionV1_2_0; readonly "NativeMeasure": QueryNativeMeasureV1_2_0; readonly "NativeColumn": QueryNativeColumnV1_2_0; readonly "VisualTopN": QueryVisualTopNExpressionV1_2_0; }>;
/** Native schema for QueryExpressionContainer in semantic-query 1.2.0. */
export const QueryExpressionContainerV1_2_0: Schema.Codec<QueryExpressionContainerV1_2_0> = Schema.Union([
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SourceRef": Schema.Union([Schema.suspend(() => StandaloneSourceRefExpressionV1_2_0), Schema.suspend(() => QuerySourceRefExpressionV1_2_0)]) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Column": Schema.suspend(() => QueryColumnExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Measure": Schema.suspend(() => QueryMeasureExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Min": Schema.suspend(() => QueryMinExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Max": Schema.suspend(() => QueryMaxExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Aggregation": Schema.suspend(() => QueryAggregationExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Percentile": Schema.suspend(() => QueryPercentileExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Hierarchy": Schema.suspend(() => QueryHierarchyExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "HierarchyLevel": Schema.suspend(() => QueryHierarchyLevelExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "PropertyVariationSource": Schema.suspend(() => QueryPropertyVariationSourceExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Subquery": Schema.suspend(() => QuerySubqueryExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Discretize": Schema.suspend(() => QueryDiscretizeExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "And": Schema.suspend(() => QueryBinaryExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Between": Schema.suspend(() => QueryBetweenExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "In": Schema.suspend(() => QueryInExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Or": Schema.suspend(() => QueryBinaryExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Comparison": Schema.suspend(() => QueryComparisonExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Not": Schema.suspend(() => QueryNotExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Contains": Schema.suspend(() => QueryContainsExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "StartsWith": Schema.suspend(() => QueryStartsWithExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Exists": Schema.suspend(() => QueryExistsExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Literal": Schema.suspend(() => QueryLiteralExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "DateSpan": Schema.suspend(() => QueryDateSpanExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "DateAdd": Schema.suspend(() => QueryDateAddExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Now": Schema.suspend(() => QueryNowExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "DefaultValue": Schema.suspend(() => QueryDefaultValueExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "AnyValue": Schema.suspend(() => QueryAnyValueExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Arithmetic": Schema.suspend(() => QueryArithmeticExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Floor": Schema.suspend(() => QueryFloorExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "ScopedEval": Schema.suspend(() => QueryScopedEvalExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "FilteredEval": Schema.suspend(() => QueryFilteredEvalExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "TransformTableRef": Schema.suspend(() => QueryTransformTableRefExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "TransformOutputRoleRef": Schema.suspend(() => QueryTransformOutputRoleRefExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SparklineData": Schema.suspend(() => QuerySparklineDataExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "NativeVisualCalculation": Schema.suspend(() => QueryNativeVisualCalcV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "FillRule": Schema.suspend(() => QueryFillRuleExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "GroupRef": Schema.suspend(() => QueryGroupRefExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "ResourcePackageItem": Schema.suspend(() => QueryResourcePackageItemV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "RoleRef": Schema.suspend(() => QueryRoleRefExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SummaryValueRef": Schema.suspend(() => QuerySummaryValueRefExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "AllRolesRef": Schema.suspend(() => QueryAllRolesRefExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SelectRef": Schema.suspend(() => QuerySelectRefExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "ThemeDataColor": Schema.suspend(() => QueryThemeDataColorExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Conditional": Schema.suspend(() => QueryConditionalExpressionV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "NativeMeasure": Schema.suspend(() => QueryNativeMeasureV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "NativeColumn": Schema.suspend(() => QueryNativeColumnV1_2_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "VisualTopN": Schema.suspend(() => QueryVisualTopNExpressionV1_2_0) })
]);

/** QueryVisualTopNExpression in semantic-query 1.2.0. */
export type QueryVisualTopNExpressionV1_2_0 = { readonly "ItemCount": number; };
/** Native schema for QueryVisualTopNExpression in semantic-query 1.2.0. */
export const QueryVisualTopNExpressionV1_2_0: Schema.Codec<QueryVisualTopNExpressionV1_2_0> = closed({ "ItemCount": Schema.Finite });

/** QueryNativeColumn in semantic-query 1.2.0. */
export type QueryNativeColumnV1_2_0 = { readonly "DataType": number; readonly "Expression": string; readonly "Language": string; readonly "Source": QueryExpressionContainerV1_2_0; readonly "ExpressionContentCache"?: QueryExpressionContentCacheV1_2_0; readonly "ProposedName"?: string; readonly "Format"?: string; };
/** Native schema for QueryNativeColumn in semantic-query 1.2.0. */
export const QueryNativeColumnV1_2_0: Schema.Codec<QueryNativeColumnV1_2_0> = closed({ "DataType": Schema.Finite, "Expression": Schema.String, "Language": Schema.String, "Source": Schema.suspend(() => QueryExpressionContainerV1_2_0), "ExpressionContentCache": Schema.optionalKey(Schema.suspend(() => QueryExpressionContentCacheV1_2_0)), "ProposedName": Schema.optionalKey(Schema.String), "Format": Schema.optionalKey(Schema.String) });

/** QueryExpressionContentCache in semantic-query 1.2.0. */
export type QueryExpressionContentCacheV1_2_0 = { readonly "Dependencies"?: ReadonlyArray<QueryExpressionContainerV1_2_0>; readonly "UnrecognizedIdentifiers"?: boolean; };
/** Native schema for QueryExpressionContentCache in semantic-query 1.2.0. */
export const QueryExpressionContentCacheV1_2_0: Schema.Codec<QueryExpressionContentCacheV1_2_0> = closed({ "Dependencies": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0))), "UnrecognizedIdentifiers": Schema.optionalKey(Schema.Boolean) });

/** QueryNativeMeasure in semantic-query 1.2.0. */
export type QueryNativeMeasureV1_2_0 = { readonly "DataType": number; readonly "Expression": string; readonly "Language": "dax"; readonly "ExpressionContentCache"?: QueryExpressionContentCacheV1_2_0; readonly "ProposedName"?: string; readonly "Format"?: string; };
/** Native schema for QueryNativeMeasure in semantic-query 1.2.0. */
export const QueryNativeMeasureV1_2_0: Schema.Codec<QueryNativeMeasureV1_2_0> = closed({ "DataType": Schema.Finite, "Expression": Schema.String, "Language": Schema.Literal("dax"), "ExpressionContentCache": Schema.optionalKey(Schema.suspend(() => QueryExpressionContentCacheV1_2_0)), "ProposedName": Schema.optionalKey(Schema.String), "Format": Schema.optionalKey(Schema.String) });

/** QueryConditionalExpression in semantic-query 1.2.0. */
export type QueryConditionalExpressionV1_2_0 = { readonly "Cases": ReadonlyArray<QueryCaseV1_2_0>; readonly "DefaultValue"?: QueryExpressionContainerV1_2_0; };
/** Native schema for QueryConditionalExpression in semantic-query 1.2.0. */
export const QueryConditionalExpressionV1_2_0: Schema.Codec<QueryConditionalExpressionV1_2_0> = closed({ "Cases": Schema.Array(Schema.suspend(() => QueryCaseV1_2_0)), "DefaultValue": Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_2_0)) });

/** QueryCase in semantic-query 1.2.0. */
export type QueryCaseV1_2_0 = { readonly "Condition": QueryExpressionContainerV1_2_0; readonly "Value": QueryExpressionContainerV1_2_0; };
/** Native schema for QueryCase in semantic-query 1.2.0. */
export const QueryCaseV1_2_0: Schema.Codec<QueryCaseV1_2_0> = closed({ "Condition": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Value": Schema.suspend(() => QueryExpressionContainerV1_2_0) });

/** QueryThemeDataColorExpression in semantic-query 1.2.0. */
export type QueryThemeDataColorExpressionV1_2_0 = { readonly "ColorId": number; readonly "Percent": number; };
/** Native schema for QueryThemeDataColorExpression in semantic-query 1.2.0. */
export const QueryThemeDataColorExpressionV1_2_0: Schema.Codec<QueryThemeDataColorExpressionV1_2_0> = closed({ "ColorId": Schema.Finite, "Percent": Schema.Finite });

/** QuerySelectRefExpression in semantic-query 1.2.0. */
export type QuerySelectRefExpressionV1_2_0 = { readonly "ExpressionName": string; };
/** Native schema for QuerySelectRefExpression in semantic-query 1.2.0. */
export const QuerySelectRefExpressionV1_2_0: Schema.Codec<QuerySelectRefExpressionV1_2_0> = closed({ "ExpressionName": Schema.String });

/** QueryAllRolesRefExpression in semantic-query 1.2.0. */
export type QueryAllRolesRefExpressionV1_2_0 = {  };
/** Native schema for QueryAllRolesRefExpression in semantic-query 1.2.0. */
export const QueryAllRolesRefExpressionV1_2_0: Schema.Codec<QueryAllRolesRefExpressionV1_2_0> = closed({  });

/** QuerySummaryValueRefExpression in semantic-query 1.2.0. */
export type QuerySummaryValueRefExpressionV1_2_0 = { readonly "Name": string; };
/** Native schema for QuerySummaryValueRefExpression in semantic-query 1.2.0. */
export const QuerySummaryValueRefExpressionV1_2_0: Schema.Codec<QuerySummaryValueRefExpressionV1_2_0> = closed({ "Name": Schema.String });

/** QueryRoleRefExpression in semantic-query 1.2.0. */
export type QueryRoleRefExpressionV1_2_0 = { readonly "Role": string; };
/** Native schema for QueryRoleRefExpression in semantic-query 1.2.0. */
export const QueryRoleRefExpressionV1_2_0: Schema.Codec<QueryRoleRefExpressionV1_2_0> = closed({ "Role": Schema.String });

/** QueryResourcePackageItem in semantic-query 1.2.0. */
export type QueryResourcePackageItemV1_2_0 = { readonly "PackageName": string; readonly "PackageType": number; readonly "ItemName": string; };
/** Native schema for QueryResourcePackageItem in semantic-query 1.2.0. */
export const QueryResourcePackageItemV1_2_0: Schema.Codec<QueryResourcePackageItemV1_2_0> = closed({ "PackageName": Schema.String, "PackageType": Schema.Finite, "ItemName": Schema.String });

/** QueryGroupRefExpression in semantic-query 1.2.0. */
export type QueryGroupRefExpressionV1_2_0 = { readonly "GroupedColumns": ReadonlyArray<QueryExpressionContainerV1_2_0>; readonly "Expression": QueryExpressionContainerV1_2_0; readonly "Property": string; };
/** Native schema for QueryGroupRefExpression in semantic-query 1.2.0. */
export const QueryGroupRefExpressionV1_2_0: Schema.Codec<QueryGroupRefExpressionV1_2_0> = closed({ "GroupedColumns": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)), "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Property": Schema.String });

/** QueryFillRuleExpression in semantic-query 1.2.0. */
export type QueryFillRuleExpressionV1_2_0 = { readonly "Input": QueryExpressionContainerV1_2_0; readonly "FillRule": Schema.Json; };
/** Native schema for QueryFillRuleExpression in semantic-query 1.2.0. */
export const QueryFillRuleExpressionV1_2_0: Schema.Codec<QueryFillRuleExpressionV1_2_0> = closed({ "Input": Schema.suspend(() => QueryExpressionContainerV1_2_0), "FillRule": Schema.Json });

/** QueryNativeVisualCalc in semantic-query 1.2.0. */
export type QueryNativeVisualCalcV1_2_0 = { readonly "Language": "dax"; readonly "Expression": string; readonly "Name": string; readonly "DataType"?: "Binary" | "Boolean" | "Date" | "DateTime" | "DateTimeZone" | "Decimal" | "Double" | "Duration" | "Integer" | "Json" | "None" | "Null" | "Text" | "Time" | "Variant"; };
/** Native schema for QueryNativeVisualCalc in semantic-query 1.2.0. */
export const QueryNativeVisualCalcV1_2_0: Schema.Codec<QueryNativeVisualCalcV1_2_0> = closed({ "Language": Schema.Literal("dax"), "Expression": Schema.String, "Name": Schema.String, "DataType": Schema.optionalKey(Schema.Literals(["Binary", "Boolean", "Date", "DateTime", "DateTimeZone", "Decimal", "Double", "Duration", "Integer", "Json", "None", "Null", "Text", "Time", "Variant"])) });

/** QuerySparklineDataExpression in semantic-query 1.2.0. */
export type QuerySparklineDataExpressionV1_2_0 = { readonly "Measure": QueryExpressionContainerV1_2_0; readonly "Groupings": ReadonlyArray<QueryExpressionContainerV1_2_0>; readonly "PointsPerSparkline"?: 52; };
/** Native schema for QuerySparklineDataExpression in semantic-query 1.2.0. */
export const QuerySparklineDataExpressionV1_2_0: Schema.Codec<QuerySparklineDataExpressionV1_2_0> = closed({ "Measure": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Groupings": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)), "PointsPerSparkline": Schema.optionalKey(Schema.Literal(52)) });

/** QueryTransformOutputRoleRefExpression in semantic-query 1.2.0. */
export type QueryTransformOutputRoleRefExpressionV1_2_0 = { readonly "Role": string; readonly "Transform"?: string; };
/** Native schema for QueryTransformOutputRoleRefExpression in semantic-query 1.2.0. */
export const QueryTransformOutputRoleRefExpressionV1_2_0: Schema.Codec<QueryTransformOutputRoleRefExpressionV1_2_0> = closed({ "Role": Schema.String, "Transform": Schema.optionalKey(Schema.String) });

/** QueryTransformTableRefExpression in semantic-query 1.2.0. */
export type QueryTransformTableRefExpressionV1_2_0 = { readonly "Source": string; };
/** Native schema for QueryTransformTableRefExpression in semantic-query 1.2.0. */
export const QueryTransformTableRefExpressionV1_2_0: Schema.Codec<QueryTransformTableRefExpressionV1_2_0> = closed({ "Source": Schema.String });

/** QueryFilteredEvalExpression in semantic-query 1.2.0. */
export type QueryFilteredEvalExpressionV1_2_0 = { readonly "Expression": QueryExpressionContainerV1_2_0; readonly "Filters": ReadonlyArray<QueryFilterV1_2_0>; };
/** Native schema for QueryFilteredEvalExpression in semantic-query 1.2.0. */
export const QueryFilteredEvalExpressionV1_2_0: Schema.Codec<QueryFilteredEvalExpressionV1_2_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Filters": Schema.Array(Schema.suspend(() => QueryFilterV1_2_0)) });

/** QueryScopedEvalExpression in semantic-query 1.2.0. */
export type QueryScopedEvalExpressionV1_2_0 = { readonly "Expression": QueryExpressionContainerV1_2_0; readonly "Scope": ReadonlyArray<QueryExpressionContainerV1_2_0>; };
/** Native schema for QueryScopedEvalExpression in semantic-query 1.2.0. */
export const QueryScopedEvalExpressionV1_2_0: Schema.Codec<QueryScopedEvalExpressionV1_2_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Scope": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)) });

/** QueryFloorExpression in semantic-query 1.2.0. */
export type QueryFloorExpressionV1_2_0 = { readonly "Expression": QueryExpressionContainerV1_2_0; readonly "Size": number; readonly "TimeUnit"?: (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7); };
/** Native schema for QueryFloorExpression in semantic-query 1.2.0. */
export const QueryFloorExpressionV1_2_0: Schema.Codec<QueryFloorExpressionV1_2_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Size": Schema.Finite, "TimeUnit": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)])) });

/** QueryArithmeticExpression in semantic-query 1.2.0. */
export type QueryArithmeticExpressionV1_2_0 = { readonly "Left": QueryExpressionContainerV1_2_0; readonly "Right": QueryExpressionContainerV1_2_0; readonly "Operator": ArithmeticOperatorKindV1_2_0; };
/** Native schema for QueryArithmeticExpression in semantic-query 1.2.0. */
export const QueryArithmeticExpressionV1_2_0: Schema.Codec<QueryArithmeticExpressionV1_2_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Operator": Schema.suspend(() => ArithmeticOperatorKindV1_2_0) });

/** ArithmeticOperatorKind in semantic-query 1.2.0. */
export type ArithmeticOperatorKindV1_2_0 = (0) | (1) | (2) | (3);
/** Native schema for ArithmeticOperatorKind in semantic-query 1.2.0. */
export const ArithmeticOperatorKindV1_2_0: Schema.Codec<ArithmeticOperatorKindV1_2_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3)]);

/** QueryAnyValueExpression in semantic-query 1.2.0. */
export type QueryAnyValueExpressionV1_2_0 = { readonly "DefaultValueOverridesAncestors"?: boolean; };
/** Native schema for QueryAnyValueExpression in semantic-query 1.2.0. */
export const QueryAnyValueExpressionV1_2_0: Schema.Codec<QueryAnyValueExpressionV1_2_0> = closed({ "DefaultValueOverridesAncestors": Schema.optionalKey(Schema.Boolean) });

/** QueryDefaultValueExpression in semantic-query 1.2.0. */
export type QueryDefaultValueExpressionV1_2_0 = {  };
/** Native schema for QueryDefaultValueExpression in semantic-query 1.2.0. */
export const QueryDefaultValueExpressionV1_2_0: Schema.Codec<QueryDefaultValueExpressionV1_2_0> = closed({  });

/** QueryNowExpression in semantic-query 1.2.0. */
export type QueryNowExpressionV1_2_0 = {  };
/** Native schema for QueryNowExpression in semantic-query 1.2.0. */
export const QueryNowExpressionV1_2_0: Schema.Codec<QueryNowExpressionV1_2_0> = closed({  });

/** QueryDateAddExpression in semantic-query 1.2.0. */
export type QueryDateAddExpressionV1_2_0 = { readonly "Amount": number; readonly "TimeUnit": TimeUnitV1_2_0; readonly "Expression": QueryExpressionContainerV1_2_0; };
/** Native schema for QueryDateAddExpression in semantic-query 1.2.0. */
export const QueryDateAddExpressionV1_2_0: Schema.Codec<QueryDateAddExpressionV1_2_0> = closed({ "Amount": Schema.Finite, "TimeUnit": Schema.suspend(() => TimeUnitV1_2_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0) });

/** TimeUnit in semantic-query 1.2.0. */
export type TimeUnitV1_2_0 = (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7);
/** Native schema for TimeUnit in semantic-query 1.2.0. */
export const TimeUnitV1_2_0: Schema.Codec<TimeUnitV1_2_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)]);

/** QueryDateSpanExpression in semantic-query 1.2.0. */
export type QueryDateSpanExpressionV1_2_0 = { readonly "TimeUnit": TimeUnitV1_2_0; readonly "Expression": QueryExpressionContainerV1_2_0; };
/** Native schema for QueryDateSpanExpression in semantic-query 1.2.0. */
export const QueryDateSpanExpressionV1_2_0: Schema.Codec<QueryDateSpanExpressionV1_2_0> = closed({ "TimeUnit": Schema.suspend(() => TimeUnitV1_2_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0) });

/** QueryLiteralExpression in semantic-query 1.2.0. */
export type QueryLiteralExpressionV1_2_0 = { readonly "Value": string; };
/** Native schema for QueryLiteralExpression in semantic-query 1.2.0. */
export const QueryLiteralExpressionV1_2_0: Schema.Codec<QueryLiteralExpressionV1_2_0> = closed({ "Value": Schema.String });

/** QueryExistsExpression in semantic-query 1.2.0. */
export type QueryExistsExpressionV1_2_0 = { readonly "Expression": QueryExpressionContainerV1_2_0; };
/** Native schema for QueryExistsExpression in semantic-query 1.2.0. */
export const QueryExistsExpressionV1_2_0: Schema.Codec<QueryExistsExpressionV1_2_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0) });

/** QueryStartsWithExpression in semantic-query 1.2.0. */
export type QueryStartsWithExpressionV1_2_0 = { readonly "Left": QueryExpressionContainerV1_2_0; readonly "Right": QueryExpressionContainerV1_2_0; };
/** Native schema for QueryStartsWithExpression in semantic-query 1.2.0. */
export const QueryStartsWithExpressionV1_2_0: Schema.Codec<QueryStartsWithExpressionV1_2_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_2_0) });

/** QueryContainsExpression in semantic-query 1.2.0. */
export type QueryContainsExpressionV1_2_0 = { readonly "Left": QueryExpressionContainerV1_2_0; readonly "Right": QueryExpressionContainerV1_2_0; };
/** Native schema for QueryContainsExpression in semantic-query 1.2.0. */
export const QueryContainsExpressionV1_2_0: Schema.Codec<QueryContainsExpressionV1_2_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_2_0) });

/** QueryNotExpression in semantic-query 1.2.0. */
export type QueryNotExpressionV1_2_0 = { readonly "Expression": QueryExpressionContainerV1_2_0; };
/** Native schema for QueryNotExpression in semantic-query 1.2.0. */
export const QueryNotExpressionV1_2_0: Schema.Codec<QueryNotExpressionV1_2_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0) });

/** QueryComparisonExpression in semantic-query 1.2.0. */
export type QueryComparisonExpressionV1_2_0 = { readonly "ComparisonKind": QueryComparisonKindV1_2_0; readonly "Left": QueryExpressionContainerV1_2_0; readonly "Right": QueryExpressionContainerV1_2_0; };
/** Native schema for QueryComparisonExpression in semantic-query 1.2.0. */
export const QueryComparisonExpressionV1_2_0: Schema.Codec<QueryComparisonExpressionV1_2_0> = closed({ "ComparisonKind": Schema.suspend(() => QueryComparisonKindV1_2_0), "Left": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_2_0) });

/** QueryComparisonKind in semantic-query 1.2.0. */
export type QueryComparisonKindV1_2_0 = (0) | (1) | (2) | (3) | (4);
/** Native schema for QueryComparisonKind in semantic-query 1.2.0. */
export const QueryComparisonKindV1_2_0: Schema.Codec<QueryComparisonKindV1_2_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4)]);

/** QueryBinaryExpression in semantic-query 1.2.0. */
export type QueryBinaryExpressionV1_2_0 = { readonly "Left": QueryExpressionContainerV1_2_0; readonly "Right": QueryExpressionContainerV1_2_0; };
/** Native schema for QueryBinaryExpression in semantic-query 1.2.0. */
export const QueryBinaryExpressionV1_2_0: Schema.Codec<QueryBinaryExpressionV1_2_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_2_0) });

/** QueryInExpression in semantic-query 1.2.0. */
export type QueryInExpressionV1_2_0 = { readonly "Expressions": ReadonlyArray<QueryExpressionContainerV1_2_0>; readonly "Values"?: ReadonlyArray<ReadonlyArray<QueryExpressionContainerV1_2_0>>; readonly "Table"?: QueryExpressionContainerV1_2_0; };
/** Native schema for QueryInExpression in semantic-query 1.2.0. */
export const QueryInExpressionV1_2_0: Schema.Codec<QueryInExpressionV1_2_0> = closed({ "Expressions": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)), "Values": Schema.optionalKey(Schema.Array(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)))), "Table": Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_2_0)) });

/** QueryBetweenExpression in semantic-query 1.2.0. */
export type QueryBetweenExpressionV1_2_0 = { readonly "Expression": QueryExpressionContainerV1_2_0; readonly "LowerBound": QueryExpressionContainerV1_2_0; readonly "UpperBound": QueryExpressionContainerV1_2_0; };
/** Native schema for QueryBetweenExpression in semantic-query 1.2.0. */
export const QueryBetweenExpressionV1_2_0: Schema.Codec<QueryBetweenExpressionV1_2_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0), "LowerBound": Schema.suspend(() => QueryExpressionContainerV1_2_0), "UpperBound": Schema.suspend(() => QueryExpressionContainerV1_2_0) });

/** QueryDiscretizeExpression in semantic-query 1.2.0. */
export type QueryDiscretizeExpressionV1_2_0 = { readonly "Expression": QueryExpressionContainerV1_2_0; readonly "Count": number; };
/** Native schema for QueryDiscretizeExpression in semantic-query 1.2.0. */
export const QueryDiscretizeExpressionV1_2_0: Schema.Codec<QueryDiscretizeExpressionV1_2_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Count": Schema.Finite });

/** QuerySubqueryExpression in semantic-query 1.2.0. */
export type QuerySubqueryExpressionV1_2_0 = { readonly "Query": QueryDefinitionV1_2_0; };
/** Native schema for QuerySubqueryExpression in semantic-query 1.2.0. */
export const QuerySubqueryExpressionV1_2_0: Schema.Codec<QuerySubqueryExpressionV1_2_0> = closed({ "Query": Schema.suspend(() => QueryDefinitionV1_2_0) });

/** QueryDefinition in semantic-query 1.2.0. */
export type QueryDefinitionV1_2_0 = { readonly "Version"?: 2; readonly "From": ReadonlyArray<EntitySourceV1_2_0>; readonly "Where"?: ReadonlyArray<QueryFilterV1_2_0>; readonly "OrderBy"?: ReadonlyArray<QuerySortClauseV1_2_0>; readonly "Select": ReadonlyArray<QueryExpressionContainerV1_2_0>; readonly "VisualShape"?: ReadonlyArray<AxisV1_2_0>; readonly "GroupBy"?: ReadonlyArray<QueryExpressionContainerV1_2_0>; readonly "Transform"?: ReadonlyArray<QueryTransformV1_2_0>; readonly "Top"?: number; };
/** Native schema for QueryDefinition in semantic-query 1.2.0. */
export const QueryDefinitionV1_2_0: Schema.Codec<QueryDefinitionV1_2_0> = closed({ "Version": Schema.optionalKey(Schema.Literal(2)), "From": Schema.Array(Schema.suspend(() => EntitySourceV1_2_0)), "Where": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryFilterV1_2_0))), "OrderBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortClauseV1_2_0))), "Select": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)), "VisualShape": Schema.optionalKey(Schema.Array(Schema.suspend(() => AxisV1_2_0))), "GroupBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0))), "Transform": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryTransformV1_2_0))), "Top": Schema.optionalKey(Schema.Finite) });

/** QueryTransform in semantic-query 1.2.0. */
export type QueryTransformV1_2_0 = { readonly "Name": string; readonly "Algorithm": string; readonly "Input": QueryTransformInputV1_2_0; readonly "Output": QueryTransformOutputV1_2_0; };
/** Native schema for QueryTransform in semantic-query 1.2.0. */
export const QueryTransformV1_2_0: Schema.Codec<QueryTransformV1_2_0> = closed({ "Name": Schema.String, "Algorithm": Schema.String, "Input": Schema.suspend(() => QueryTransformInputV1_2_0), "Output": Schema.suspend(() => QueryTransformOutputV1_2_0) });

/** QueryTransformOutput in semantic-query 1.2.0. */
export type QueryTransformOutputV1_2_0 = { readonly "Table"?: QueryTransformTableV1_2_0; };
/** Native schema for QueryTransformOutput in semantic-query 1.2.0. */
export const QueryTransformOutputV1_2_0: Schema.Codec<QueryTransformOutputV1_2_0> = closed({ "Table": Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_2_0)) });

/** QueryTransformTable in semantic-query 1.2.0. */
export type QueryTransformTableV1_2_0 = { readonly "Name": string; readonly "Columns": ReadonlyArray<QueryTransformTableColumnV1_2_0>; };
/** Native schema for QueryTransformTable in semantic-query 1.2.0. */
export const QueryTransformTableV1_2_0: Schema.Codec<QueryTransformTableV1_2_0> = closed({ "Name": Schema.String, "Columns": Schema.Array(Schema.suspend(() => QueryTransformTableColumnV1_2_0)) });

/** QueryTransformTableColumn in semantic-query 1.2.0. */
export type QueryTransformTableColumnV1_2_0 = { readonly "Role"?: string; readonly "Expression": QueryExpressionContainerV1_2_0; };
/** Native schema for QueryTransformTableColumn in semantic-query 1.2.0. */
export const QueryTransformTableColumnV1_2_0: Schema.Codec<QueryTransformTableColumnV1_2_0> = closed({ "Role": Schema.optionalKey(Schema.String), "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0) });

/** QueryTransformInput in semantic-query 1.2.0. */
export type QueryTransformInputV1_2_0 = { readonly "Parameters": ReadonlyArray<QueryExpressionContainerV1_2_0>; readonly "Table"?: QueryTransformTableV1_2_0; };
/** Native schema for QueryTransformInput in semantic-query 1.2.0. */
export const QueryTransformInputV1_2_0: Schema.Codec<QueryTransformInputV1_2_0> = closed({ "Parameters": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)), "Table": Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_2_0)) });

/** Axis in semantic-query 1.2.0. */
export type AxisV1_2_0 = { readonly "Groups": ReadonlyArray<AxisGroupV1_2_0>; readonly "Name": string; };
/** Native schema for Axis in semantic-query 1.2.0. */
export const AxisV1_2_0: Schema.Codec<AxisV1_2_0> = closed({ "Groups": Schema.Array(Schema.suspend(() => AxisGroupV1_2_0)), "Name": Schema.String });

/** AxisGroup in semantic-query 1.2.0. */
export type AxisGroupV1_2_0 = { readonly "Keys": ReadonlyArray<QueryExpressionContainerV1_2_0>; readonly "Subtotal": boolean; };
/** Native schema for AxisGroup in semantic-query 1.2.0. */
export const AxisGroupV1_2_0: Schema.Codec<AxisGroupV1_2_0> = closed({ "Keys": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)), "Subtotal": Schema.Boolean });

/** QuerySortClause in semantic-query 1.2.0. */
export type QuerySortClauseV1_2_0 = { readonly "Expression": QueryExpressionContainerV1_2_0; readonly "Direction": Schema.Json; };
/** Native schema for QuerySortClause in semantic-query 1.2.0. */
export const QuerySortClauseV1_2_0: Schema.Codec<QuerySortClauseV1_2_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Direction": Schema.Json });

/** EntitySource in semantic-query 1.2.0. */
export type EntitySourceV1_2_0 = { readonly "Name": string; readonly "Entity"?: string; readonly "Schema"?: string; readonly "Expression"?: QueryExpressionContainerV1_2_0; readonly "Type"?: (0) | (1) | (2); };
/** Native schema for EntitySource in semantic-query 1.2.0. */
export const EntitySourceV1_2_0: Schema.Codec<EntitySourceV1_2_0> = closed({ "Name": Schema.String, "Entity": Schema.optionalKey(Schema.String), "Schema": Schema.optionalKey(Schema.String), "Expression": Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_2_0)), "Type": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])) });

/** QueryPropertyVariationSourceExpression in semantic-query 1.2.0. */
export type QueryPropertyVariationSourceExpressionV1_2_0 = { readonly "Expression": QueryExpressionContainerV1_2_0; readonly "Name": string; readonly "Property": string; };
/** Native schema for QueryPropertyVariationSourceExpression in semantic-query 1.2.0. */
export const QueryPropertyVariationSourceExpressionV1_2_0: Schema.Codec<QueryPropertyVariationSourceExpressionV1_2_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Name": Schema.String, "Property": Schema.String });

/** QueryHierarchyLevelExpression in semantic-query 1.2.0. */
export type QueryHierarchyLevelExpressionV1_2_0 = { readonly "Expression": QueryExpressionContainerV1_2_0; readonly "Level": string; };
/** Native schema for QueryHierarchyLevelExpression in semantic-query 1.2.0. */
export const QueryHierarchyLevelExpressionV1_2_0: Schema.Codec<QueryHierarchyLevelExpressionV1_2_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Level": Schema.String });

/** QueryHierarchyExpression in semantic-query 1.2.0. */
export type QueryHierarchyExpressionV1_2_0 = { readonly "Expression": QueryExpressionContainerV1_2_0; readonly "Hierarchy": string; };
/** Native schema for QueryHierarchyExpression in semantic-query 1.2.0. */
export const QueryHierarchyExpressionV1_2_0: Schema.Codec<QueryHierarchyExpressionV1_2_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Hierarchy": Schema.String });

/** QueryPercentileExpression in semantic-query 1.2.0. */
export type QueryPercentileExpressionV1_2_0 = { readonly "Expression": QueryExpressionContainerV1_2_0; readonly "K": number; readonly "Exclusive"?: boolean; };
/** Native schema for QueryPercentileExpression in semantic-query 1.2.0. */
export const QueryPercentileExpressionV1_2_0: Schema.Codec<QueryPercentileExpressionV1_2_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0), "K": Schema.Finite, "Exclusive": Schema.optionalKey(Schema.Boolean) });

/** QueryAggregationExpression in semantic-query 1.2.0. */
export type QueryAggregationExpressionV1_2_0 = { readonly "Function": QueryAggregateFunctionV1_2_0; readonly "Expression": QueryExpressionContainerV1_2_0; };
/** Native schema for QueryAggregationExpression in semantic-query 1.2.0. */
export const QueryAggregationExpressionV1_2_0: Schema.Codec<QueryAggregationExpressionV1_2_0> = closed({ "Function": Schema.suspend(() => QueryAggregateFunctionV1_2_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0) });

/** QueryAggregateFunction in semantic-query 1.2.0. */
export type QueryAggregateFunctionV1_2_0 = (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7) | (8);
/** Native schema for QueryAggregateFunction in semantic-query 1.2.0. */
export const QueryAggregateFunctionV1_2_0: Schema.Codec<QueryAggregateFunctionV1_2_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7), Schema.Literal(8)]);

/** QueryMaxExpression in semantic-query 1.2.0. */
export type QueryMaxExpressionV1_2_0 = { readonly "IncludeAllTypes": IncludeAllTypesV1_2_0; readonly "Expression": QueryExpressionContainerV1_2_0; };
/** Native schema for QueryMaxExpression in semantic-query 1.2.0. */
export const QueryMaxExpressionV1_2_0: Schema.Codec<QueryMaxExpressionV1_2_0> = closed({ "IncludeAllTypes": Schema.suspend(() => IncludeAllTypesV1_2_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0) });

/** IncludeAllTypes in semantic-query 1.2.0. */
export type IncludeAllTypesV1_2_0 = (0) | (1) | (2);
/** Native schema for IncludeAllTypes in semantic-query 1.2.0. */
export const IncludeAllTypesV1_2_0: Schema.Codec<IncludeAllTypesV1_2_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]);

/** QueryMinExpression in semantic-query 1.2.0. */
export type QueryMinExpressionV1_2_0 = { readonly "IncludeAllTypes": IncludeAllTypesV1_2_0; readonly "Expression": QueryExpressionContainerV1_2_0; };
/** Native schema for QueryMinExpression in semantic-query 1.2.0. */
export const QueryMinExpressionV1_2_0: Schema.Codec<QueryMinExpressionV1_2_0> = closed({ "IncludeAllTypes": Schema.suspend(() => IncludeAllTypesV1_2_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0) });

/** QueryMeasureExpression in semantic-query 1.2.0. */
export type QueryMeasureExpressionV1_2_0 = { readonly "Expression": QueryExpressionContainerV1_2_0; readonly "Property": string; };
/** Native schema for QueryMeasureExpression in semantic-query 1.2.0. */
export const QueryMeasureExpressionV1_2_0: Schema.Codec<QueryMeasureExpressionV1_2_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Property": Schema.String });

/** QueryColumnExpression in semantic-query 1.2.0. */
export type QueryColumnExpressionV1_2_0 = { readonly "Expression": QueryExpressionContainerV1_2_0; readonly "Property": string; };
/** Native schema for QueryColumnExpression in semantic-query 1.2.0. */
export const QueryColumnExpressionV1_2_0: Schema.Codec<QueryColumnExpressionV1_2_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_2_0), "Property": Schema.String });

/** QuerySourceRefExpression in semantic-query 1.2.0. */
export type QuerySourceRefExpressionV1_2_0 = { readonly "Source": string; };
/** Native schema for QuerySourceRefExpression in semantic-query 1.2.0. */
export const QuerySourceRefExpressionV1_2_0: Schema.Codec<QuerySourceRefExpressionV1_2_0> = closed({ "Source": Schema.String });

/** StandaloneSourceRefExpression in semantic-query 1.2.0. */
export type StandaloneSourceRefExpressionV1_2_0 = { readonly "Schema"?: string; readonly "Entity": string; };
/** Native schema for StandaloneSourceRefExpression in semantic-query 1.2.0. */
export const StandaloneSourceRefExpressionV1_2_0: Schema.Codec<StandaloneSourceRefExpressionV1_2_0> = closed({ "Schema": Schema.optionalKey(Schema.String), "Entity": Schema.String });

/** Named query definitions with the exact 1.2.0 recursive dependency graph. */
export const SemanticQueryDefinitionsV1_2_0 = {
  FilterDefinition: FilterDefinitionV1_2_0,
  QueryFilter: QueryFilterV1_2_0,
  QueryExpressionContainer: QueryExpressionContainerV1_2_0,
  QueryVisualTopNExpression: QueryVisualTopNExpressionV1_2_0,
  QueryNativeColumn: QueryNativeColumnV1_2_0,
  QueryExpressionContentCache: QueryExpressionContentCacheV1_2_0,
  QueryNativeMeasure: QueryNativeMeasureV1_2_0,
  QueryConditionalExpression: QueryConditionalExpressionV1_2_0,
  QueryCase: QueryCaseV1_2_0,
  QueryThemeDataColorExpression: QueryThemeDataColorExpressionV1_2_0,
  QuerySelectRefExpression: QuerySelectRefExpressionV1_2_0,
  QueryAllRolesRefExpression: QueryAllRolesRefExpressionV1_2_0,
  QuerySummaryValueRefExpression: QuerySummaryValueRefExpressionV1_2_0,
  QueryRoleRefExpression: QueryRoleRefExpressionV1_2_0,
  QueryResourcePackageItem: QueryResourcePackageItemV1_2_0,
  QueryGroupRefExpression: QueryGroupRefExpressionV1_2_0,
  QueryFillRuleExpression: QueryFillRuleExpressionV1_2_0,
  QueryNativeVisualCalc: QueryNativeVisualCalcV1_2_0,
  QuerySparklineDataExpression: QuerySparklineDataExpressionV1_2_0,
  QueryTransformOutputRoleRefExpression: QueryTransformOutputRoleRefExpressionV1_2_0,
  QueryTransformTableRefExpression: QueryTransformTableRefExpressionV1_2_0,
  QueryFilteredEvalExpression: QueryFilteredEvalExpressionV1_2_0,
  QueryScopedEvalExpression: QueryScopedEvalExpressionV1_2_0,
  QueryFloorExpression: QueryFloorExpressionV1_2_0,
  QueryArithmeticExpression: QueryArithmeticExpressionV1_2_0,
  ArithmeticOperatorKind: ArithmeticOperatorKindV1_2_0,
  QueryAnyValueExpression: QueryAnyValueExpressionV1_2_0,
  QueryDefaultValueExpression: QueryDefaultValueExpressionV1_2_0,
  QueryNowExpression: QueryNowExpressionV1_2_0,
  QueryDateAddExpression: QueryDateAddExpressionV1_2_0,
  TimeUnit: TimeUnitV1_2_0,
  QueryDateSpanExpression: QueryDateSpanExpressionV1_2_0,
  QueryLiteralExpression: QueryLiteralExpressionV1_2_0,
  QueryExistsExpression: QueryExistsExpressionV1_2_0,
  QueryStartsWithExpression: QueryStartsWithExpressionV1_2_0,
  QueryContainsExpression: QueryContainsExpressionV1_2_0,
  QueryNotExpression: QueryNotExpressionV1_2_0,
  QueryComparisonExpression: QueryComparisonExpressionV1_2_0,
  QueryComparisonKind: QueryComparisonKindV1_2_0,
  QueryBinaryExpression: QueryBinaryExpressionV1_2_0,
  QueryInExpression: QueryInExpressionV1_2_0,
  QueryBetweenExpression: QueryBetweenExpressionV1_2_0,
  QueryDiscretizeExpression: QueryDiscretizeExpressionV1_2_0,
  QuerySubqueryExpression: QuerySubqueryExpressionV1_2_0,
  QueryDefinition: QueryDefinitionV1_2_0,
  QueryTransform: QueryTransformV1_2_0,
  QueryTransformOutput: QueryTransformOutputV1_2_0,
  QueryTransformTable: QueryTransformTableV1_2_0,
  QueryTransformTableColumn: QueryTransformTableColumnV1_2_0,
  QueryTransformInput: QueryTransformInputV1_2_0,
  Axis: AxisV1_2_0,
  AxisGroup: AxisGroupV1_2_0,
  QuerySortClause: QuerySortClauseV1_2_0,
  EntitySource: EntitySourceV1_2_0,
  QueryPropertyVariationSourceExpression: QueryPropertyVariationSourceExpressionV1_2_0,
  QueryHierarchyLevelExpression: QueryHierarchyLevelExpressionV1_2_0,
  QueryHierarchyExpression: QueryHierarchyExpressionV1_2_0,
  QueryPercentileExpression: QueryPercentileExpressionV1_2_0,
  QueryAggregationExpression: QueryAggregationExpressionV1_2_0,
  QueryAggregateFunction: QueryAggregateFunctionV1_2_0,
  QueryMaxExpression: QueryMaxExpressionV1_2_0,
  IncludeAllTypes: IncludeAllTypesV1_2_0,
  QueryMinExpression: QueryMinExpressionV1_2_0,
  QueryMeasureExpression: QueryMeasureExpressionV1_2_0,
  QueryColumnExpression: QueryColumnExpressionV1_2_0,
  QuerySourceRefExpression: QuerySourceRefExpressionV1_2_0,
  StandaloneSourceRefExpression: StandaloneSourceRefExpressionV1_2_0
} as const;

/** The source root declares definitions only, accepting any JSON value. */
export const SemanticQueryV1_2_0 = Schema.Json;
export type SemanticQueryV1_2_0 = typeof SemanticQueryV1_2_0.Type;

/** FilterDefinition in semantic-query 1.3.0. */
export type FilterDefinitionV1_3_0 = { readonly "Version"?: 2; readonly "From": ReadonlyArray<EntitySourceV1_3_0>; readonly "Where": ReadonlyArray<QueryFilterV1_3_0>; };
/** Native schema for FilterDefinition in semantic-query 1.3.0. */
export const FilterDefinitionV1_3_0: Schema.Codec<FilterDefinitionV1_3_0> = closed({ "Version": Schema.optionalKey(Schema.Literal(2)), "From": Schema.Array(Schema.suspend(() => EntitySourceV1_3_0)), "Where": Schema.Array(Schema.suspend(() => QueryFilterV1_3_0)) });

/** QueryFilter in semantic-query 1.3.0. */
export type QueryFilterV1_3_0 = { readonly "Target"?: ReadonlyArray<QueryExpressionContainerV1_3_0>; readonly "Condition": QueryExpressionContainerV1_3_0; readonly "Annotations"?: {  } & { readonly [key: string]: Schema.Json }; };
/** Native schema for QueryFilter in semantic-query 1.3.0. */
export const QueryFilterV1_3_0: Schema.Codec<QueryFilterV1_3_0> = closed({ "Target": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0))), "Condition": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)) });

/** QueryExpressionContainer in semantic-query 1.3.0. */
export type QueryExpressionContainerV1_3_0 = { readonly "Name"?: string; readonly "NativeReferenceName"?: string; readonly "Annotations"?: {  } & { readonly [key: string]: Schema.Json }; } & ExactlyOne<{ readonly "SourceRef": (StandaloneSourceRefExpressionV1_3_0) | (QuerySourceRefExpressionV1_3_0); readonly "Column": QueryColumnExpressionV1_3_0; readonly "Measure": QueryMeasureExpressionV1_3_0; readonly "Min": QueryMinExpressionV1_3_0; readonly "Max": QueryMaxExpressionV1_3_0; readonly "Aggregation": QueryAggregationExpressionV1_3_0; readonly "Percentile": QueryPercentileExpressionV1_3_0; readonly "Hierarchy": QueryHierarchyExpressionV1_3_0; readonly "HierarchyLevel": QueryHierarchyLevelExpressionV1_3_0; readonly "PropertyVariationSource": QueryPropertyVariationSourceExpressionV1_3_0; readonly "Subquery": QuerySubqueryExpressionV1_3_0; readonly "Discretize": QueryDiscretizeExpressionV1_3_0; readonly "And": QueryBinaryExpressionV1_3_0; readonly "Between": QueryBetweenExpressionV1_3_0; readonly "In": QueryInExpressionV1_3_0; readonly "Or": QueryBinaryExpressionV1_3_0; readonly "Comparison": QueryComparisonExpressionV1_3_0; readonly "Not": QueryNotExpressionV1_3_0; readonly "Contains": QueryContainsExpressionV1_3_0; readonly "StartsWith": QueryStartsWithExpressionV1_3_0; readonly "Exists": QueryExistsExpressionV1_3_0; readonly "Literal": QueryLiteralExpressionV1_3_0; readonly "DateSpan": QueryDateSpanExpressionV1_3_0; readonly "DateAdd": QueryDateAddExpressionV1_3_0; readonly "Now": QueryNowExpressionV1_3_0; readonly "DefaultValue": QueryDefaultValueExpressionV1_3_0; readonly "AnyValue": QueryAnyValueExpressionV1_3_0; readonly "Arithmetic": QueryArithmeticExpressionV1_3_0; readonly "Floor": QueryFloorExpressionV1_3_0; readonly "ScopedEval": QueryScopedEvalExpressionV1_3_0; readonly "FilteredEval": QueryFilteredEvalExpressionV1_3_0; readonly "TransformTableRef": QueryTransformTableRefExpressionV1_3_0; readonly "TransformOutputRoleRef": QueryTransformOutputRoleRefExpressionV1_3_0; readonly "SparklineData": QuerySparklineDataExpressionV1_3_0; readonly "NativeVisualCalculation": QueryNativeVisualCalcV1_3_0; readonly "FillRule": QueryFillRuleExpressionV1_3_0; readonly "GroupRef": QueryGroupRefExpressionV1_3_0; readonly "ResourcePackageItem": QueryResourcePackageItemV1_3_0; readonly "RoleRef": QueryRoleRefExpressionV1_3_0; readonly "SummaryValueRef": QuerySummaryValueRefExpressionV1_3_0; readonly "AllRolesRef": QueryAllRolesRefExpressionV1_3_0; readonly "SelectRef": QuerySelectRefExpressionV1_3_0; readonly "ThemeDataColor": QueryThemeDataColorExpressionV1_3_0; readonly "Conditional": QueryConditionalExpressionV1_3_0; readonly "NativeMeasure": QueryNativeMeasureV1_3_0; readonly "NativeColumn": QueryNativeColumnV1_3_0; readonly "VisualTopN": QueryVisualTopNExpressionV1_3_0; }>;
/** Native schema for QueryExpressionContainer in semantic-query 1.3.0. */
export const QueryExpressionContainerV1_3_0: Schema.Codec<QueryExpressionContainerV1_3_0> = Schema.Union([
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SourceRef": Schema.Union([Schema.suspend(() => StandaloneSourceRefExpressionV1_3_0), Schema.suspend(() => QuerySourceRefExpressionV1_3_0)]) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Column": Schema.suspend(() => QueryColumnExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Measure": Schema.suspend(() => QueryMeasureExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Min": Schema.suspend(() => QueryMinExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Max": Schema.suspend(() => QueryMaxExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Aggregation": Schema.suspend(() => QueryAggregationExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Percentile": Schema.suspend(() => QueryPercentileExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Hierarchy": Schema.suspend(() => QueryHierarchyExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "HierarchyLevel": Schema.suspend(() => QueryHierarchyLevelExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "PropertyVariationSource": Schema.suspend(() => QueryPropertyVariationSourceExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Subquery": Schema.suspend(() => QuerySubqueryExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Discretize": Schema.suspend(() => QueryDiscretizeExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "And": Schema.suspend(() => QueryBinaryExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Between": Schema.suspend(() => QueryBetweenExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "In": Schema.suspend(() => QueryInExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Or": Schema.suspend(() => QueryBinaryExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Comparison": Schema.suspend(() => QueryComparisonExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Not": Schema.suspend(() => QueryNotExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Contains": Schema.suspend(() => QueryContainsExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "StartsWith": Schema.suspend(() => QueryStartsWithExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Exists": Schema.suspend(() => QueryExistsExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Literal": Schema.suspend(() => QueryLiteralExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "DateSpan": Schema.suspend(() => QueryDateSpanExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "DateAdd": Schema.suspend(() => QueryDateAddExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Now": Schema.suspend(() => QueryNowExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "DefaultValue": Schema.suspend(() => QueryDefaultValueExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "AnyValue": Schema.suspend(() => QueryAnyValueExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Arithmetic": Schema.suspend(() => QueryArithmeticExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Floor": Schema.suspend(() => QueryFloorExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "ScopedEval": Schema.suspend(() => QueryScopedEvalExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "FilteredEval": Schema.suspend(() => QueryFilteredEvalExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "TransformTableRef": Schema.suspend(() => QueryTransformTableRefExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "TransformOutputRoleRef": Schema.suspend(() => QueryTransformOutputRoleRefExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SparklineData": Schema.suspend(() => QuerySparklineDataExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "NativeVisualCalculation": Schema.suspend(() => QueryNativeVisualCalcV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "FillRule": Schema.suspend(() => QueryFillRuleExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "GroupRef": Schema.suspend(() => QueryGroupRefExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "ResourcePackageItem": Schema.suspend(() => QueryResourcePackageItemV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "RoleRef": Schema.suspend(() => QueryRoleRefExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SummaryValueRef": Schema.suspend(() => QuerySummaryValueRefExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "AllRolesRef": Schema.suspend(() => QueryAllRolesRefExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "SelectRef": Schema.suspend(() => QuerySelectRefExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "ThemeDataColor": Schema.suspend(() => QueryThemeDataColorExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "Conditional": Schema.suspend(() => QueryConditionalExpressionV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "NativeMeasure": Schema.suspend(() => QueryNativeMeasureV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "NativeColumn": Schema.suspend(() => QueryNativeColumnV1_3_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)), "VisualTopN": Schema.suspend(() => QueryVisualTopNExpressionV1_3_0) })
]);

/** QueryVisualTopNExpression in semantic-query 1.3.0. */
export type QueryVisualTopNExpressionV1_3_0 = { readonly "ItemCount": number; };
/** Native schema for QueryVisualTopNExpression in semantic-query 1.3.0. */
export const QueryVisualTopNExpressionV1_3_0: Schema.Codec<QueryVisualTopNExpressionV1_3_0> = closed({ "ItemCount": Schema.Finite });

/** QueryNativeColumn in semantic-query 1.3.0. */
export type QueryNativeColumnV1_3_0 = { readonly "DataType": number; readonly "Expression": string; readonly "Language": string; readonly "Source": QueryExpressionContainerV1_3_0; readonly "ExpressionContentCache"?: QueryExpressionContentCacheV1_3_0; readonly "ProposedName"?: string; readonly "Format"?: string; };
/** Native schema for QueryNativeColumn in semantic-query 1.3.0. */
export const QueryNativeColumnV1_3_0: Schema.Codec<QueryNativeColumnV1_3_0> = closed({ "DataType": Schema.Finite, "Expression": Schema.String, "Language": Schema.String, "Source": Schema.suspend(() => QueryExpressionContainerV1_3_0), "ExpressionContentCache": Schema.optionalKey(Schema.suspend(() => QueryExpressionContentCacheV1_3_0)), "ProposedName": Schema.optionalKey(Schema.String), "Format": Schema.optionalKey(Schema.String) });

/** QueryExpressionContentCache in semantic-query 1.3.0. */
export type QueryExpressionContentCacheV1_3_0 = { readonly "Dependencies"?: ReadonlyArray<QueryExpressionContainerV1_3_0>; readonly "UnrecognizedIdentifiers"?: boolean; };
/** Native schema for QueryExpressionContentCache in semantic-query 1.3.0. */
export const QueryExpressionContentCacheV1_3_0: Schema.Codec<QueryExpressionContentCacheV1_3_0> = closed({ "Dependencies": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0))), "UnrecognizedIdentifiers": Schema.optionalKey(Schema.Boolean) });

/** QueryNativeMeasure in semantic-query 1.3.0. */
export type QueryNativeMeasureV1_3_0 = { readonly "DataType": number; readonly "Expression": string; readonly "Language": "dax"; readonly "ExpressionContentCache"?: QueryExpressionContentCacheV1_3_0; readonly "ProposedName"?: string; readonly "Format"?: string; };
/** Native schema for QueryNativeMeasure in semantic-query 1.3.0. */
export const QueryNativeMeasureV1_3_0: Schema.Codec<QueryNativeMeasureV1_3_0> = closed({ "DataType": Schema.Finite, "Expression": Schema.String, "Language": Schema.Literal("dax"), "ExpressionContentCache": Schema.optionalKey(Schema.suspend(() => QueryExpressionContentCacheV1_3_0)), "ProposedName": Schema.optionalKey(Schema.String), "Format": Schema.optionalKey(Schema.String) });

/** QueryConditionalExpression in semantic-query 1.3.0. */
export type QueryConditionalExpressionV1_3_0 = { readonly "Cases": ReadonlyArray<QueryCaseV1_3_0>; readonly "DefaultValue"?: QueryExpressionContainerV1_3_0; };
/** Native schema for QueryConditionalExpression in semantic-query 1.3.0. */
export const QueryConditionalExpressionV1_3_0: Schema.Codec<QueryConditionalExpressionV1_3_0> = closed({ "Cases": Schema.Array(Schema.suspend(() => QueryCaseV1_3_0)), "DefaultValue": Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_3_0)) });

/** QueryCase in semantic-query 1.3.0. */
export type QueryCaseV1_3_0 = { readonly "Condition": QueryExpressionContainerV1_3_0; readonly "Value": QueryExpressionContainerV1_3_0; };
/** Native schema for QueryCase in semantic-query 1.3.0. */
export const QueryCaseV1_3_0: Schema.Codec<QueryCaseV1_3_0> = closed({ "Condition": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Value": Schema.suspend(() => QueryExpressionContainerV1_3_0) });

/** QueryThemeDataColorExpression in semantic-query 1.3.0. */
export type QueryThemeDataColorExpressionV1_3_0 = { readonly "ColorId": number; readonly "Percent": number; };
/** Native schema for QueryThemeDataColorExpression in semantic-query 1.3.0. */
export const QueryThemeDataColorExpressionV1_3_0: Schema.Codec<QueryThemeDataColorExpressionV1_3_0> = closed({ "ColorId": Schema.Finite, "Percent": Schema.Finite });

/** QuerySelectRefExpression in semantic-query 1.3.0. */
export type QuerySelectRefExpressionV1_3_0 = { readonly "ExpressionName": string; };
/** Native schema for QuerySelectRefExpression in semantic-query 1.3.0. */
export const QuerySelectRefExpressionV1_3_0: Schema.Codec<QuerySelectRefExpressionV1_3_0> = closed({ "ExpressionName": Schema.String });

/** QueryAllRolesRefExpression in semantic-query 1.3.0. */
export type QueryAllRolesRefExpressionV1_3_0 = {  };
/** Native schema for QueryAllRolesRefExpression in semantic-query 1.3.0. */
export const QueryAllRolesRefExpressionV1_3_0: Schema.Codec<QueryAllRolesRefExpressionV1_3_0> = closed({  });

/** QuerySummaryValueRefExpression in semantic-query 1.3.0. */
export type QuerySummaryValueRefExpressionV1_3_0 = { readonly "Name": string; };
/** Native schema for QuerySummaryValueRefExpression in semantic-query 1.3.0. */
export const QuerySummaryValueRefExpressionV1_3_0: Schema.Codec<QuerySummaryValueRefExpressionV1_3_0> = closed({ "Name": Schema.String });

/** QueryRoleRefExpression in semantic-query 1.3.0. */
export type QueryRoleRefExpressionV1_3_0 = { readonly "Role": string; };
/** Native schema for QueryRoleRefExpression in semantic-query 1.3.0. */
export const QueryRoleRefExpressionV1_3_0: Schema.Codec<QueryRoleRefExpressionV1_3_0> = closed({ "Role": Schema.String });

/** QueryResourcePackageItem in semantic-query 1.3.0. */
export type QueryResourcePackageItemV1_3_0 = { readonly "PackageName": string; readonly "PackageType": number; readonly "ItemName": string; };
/** Native schema for QueryResourcePackageItem in semantic-query 1.3.0. */
export const QueryResourcePackageItemV1_3_0: Schema.Codec<QueryResourcePackageItemV1_3_0> = closed({ "PackageName": Schema.String, "PackageType": Schema.Finite, "ItemName": Schema.String });

/** QueryGroupRefExpression in semantic-query 1.3.0. */
export type QueryGroupRefExpressionV1_3_0 = { readonly "GroupedColumns": ReadonlyArray<QueryExpressionContainerV1_3_0>; readonly "Expression": QueryExpressionContainerV1_3_0; readonly "Property": string; };
/** Native schema for QueryGroupRefExpression in semantic-query 1.3.0. */
export const QueryGroupRefExpressionV1_3_0: Schema.Codec<QueryGroupRefExpressionV1_3_0> = closed({ "GroupedColumns": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)), "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Property": Schema.String });

/** QueryFillRuleExpression in semantic-query 1.3.0. */
export type QueryFillRuleExpressionV1_3_0 = { readonly "Input": QueryExpressionContainerV1_3_0; readonly "FillRule": Schema.Json; };
/** Native schema for QueryFillRuleExpression in semantic-query 1.3.0. */
export const QueryFillRuleExpressionV1_3_0: Schema.Codec<QueryFillRuleExpressionV1_3_0> = closed({ "Input": Schema.suspend(() => QueryExpressionContainerV1_3_0), "FillRule": Schema.Json });

/** QueryNativeVisualCalc in semantic-query 1.3.0. */
export type QueryNativeVisualCalcV1_3_0 = { readonly "Language": "dax"; readonly "Expression": string; readonly "Name": string; readonly "DataType"?: "Binary" | "Boolean" | "Date" | "DateTime" | "DateTimeZone" | "Decimal" | "Double" | "Duration" | "Integer" | "Json" | "None" | "Null" | "Text" | "Time" | "Variant"; };
/** Native schema for QueryNativeVisualCalc in semantic-query 1.3.0. */
export const QueryNativeVisualCalcV1_3_0: Schema.Codec<QueryNativeVisualCalcV1_3_0> = closed({ "Language": Schema.Literal("dax"), "Expression": Schema.String, "Name": Schema.String, "DataType": Schema.optionalKey(Schema.Literals(["Binary", "Boolean", "Date", "DateTime", "DateTimeZone", "Decimal", "Double", "Duration", "Integer", "Json", "None", "Null", "Text", "Time", "Variant"])) });

/** QuerySparklineDataExpression in semantic-query 1.3.0. */
export type QuerySparklineDataExpressionV1_3_0 = { readonly "Measure": QueryExpressionContainerV1_3_0; readonly "Groupings": ReadonlyArray<QueryExpressionContainerV1_3_0>; readonly "PointsPerSparkline"?: 52; readonly "ApplyCalculationGroupTo"?: ("Sparkline") | ("Point"); };
/** Native schema for QuerySparklineDataExpression in semantic-query 1.3.0. */
export const QuerySparklineDataExpressionV1_3_0: Schema.Codec<QuerySparklineDataExpressionV1_3_0> = closed({ "Measure": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Groupings": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)), "PointsPerSparkline": Schema.optionalKey(Schema.Literal(52)), "ApplyCalculationGroupTo": Schema.optionalKey(Schema.Union([Schema.Literal("Sparkline"), Schema.Literal("Point")])) });

/** QueryTransformOutputRoleRefExpression in semantic-query 1.3.0. */
export type QueryTransformOutputRoleRefExpressionV1_3_0 = { readonly "Role": string; readonly "Transform"?: string; };
/** Native schema for QueryTransformOutputRoleRefExpression in semantic-query 1.3.0. */
export const QueryTransformOutputRoleRefExpressionV1_3_0: Schema.Codec<QueryTransformOutputRoleRefExpressionV1_3_0> = closed({ "Role": Schema.String, "Transform": Schema.optionalKey(Schema.String) });

/** QueryTransformTableRefExpression in semantic-query 1.3.0. */
export type QueryTransformTableRefExpressionV1_3_0 = { readonly "Source": string; };
/** Native schema for QueryTransformTableRefExpression in semantic-query 1.3.0. */
export const QueryTransformTableRefExpressionV1_3_0: Schema.Codec<QueryTransformTableRefExpressionV1_3_0> = closed({ "Source": Schema.String });

/** QueryFilteredEvalExpression in semantic-query 1.3.0. */
export type QueryFilteredEvalExpressionV1_3_0 = { readonly "Expression": QueryExpressionContainerV1_3_0; readonly "Filters": ReadonlyArray<QueryFilterV1_3_0>; };
/** Native schema for QueryFilteredEvalExpression in semantic-query 1.3.0. */
export const QueryFilteredEvalExpressionV1_3_0: Schema.Codec<QueryFilteredEvalExpressionV1_3_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Filters": Schema.Array(Schema.suspend(() => QueryFilterV1_3_0)) });

/** QueryScopedEvalExpression in semantic-query 1.3.0. */
export type QueryScopedEvalExpressionV1_3_0 = { readonly "Expression": QueryExpressionContainerV1_3_0; readonly "Scope": ReadonlyArray<QueryExpressionContainerV1_3_0>; };
/** Native schema for QueryScopedEvalExpression in semantic-query 1.3.0. */
export const QueryScopedEvalExpressionV1_3_0: Schema.Codec<QueryScopedEvalExpressionV1_3_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Scope": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)) });

/** QueryFloorExpression in semantic-query 1.3.0. */
export type QueryFloorExpressionV1_3_0 = { readonly "Expression": QueryExpressionContainerV1_3_0; readonly "Size": number; readonly "TimeUnit"?: (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7); };
/** Native schema for QueryFloorExpression in semantic-query 1.3.0. */
export const QueryFloorExpressionV1_3_0: Schema.Codec<QueryFloorExpressionV1_3_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Size": Schema.Finite, "TimeUnit": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)])) });

/** QueryArithmeticExpression in semantic-query 1.3.0. */
export type QueryArithmeticExpressionV1_3_0 = { readonly "Left": QueryExpressionContainerV1_3_0; readonly "Right": QueryExpressionContainerV1_3_0; readonly "Operator": ArithmeticOperatorKindV1_3_0; };
/** Native schema for QueryArithmeticExpression in semantic-query 1.3.0. */
export const QueryArithmeticExpressionV1_3_0: Schema.Codec<QueryArithmeticExpressionV1_3_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Operator": Schema.suspend(() => ArithmeticOperatorKindV1_3_0) });

/** ArithmeticOperatorKind in semantic-query 1.3.0. */
export type ArithmeticOperatorKindV1_3_0 = (0) | (1) | (2) | (3);
/** Native schema for ArithmeticOperatorKind in semantic-query 1.3.0. */
export const ArithmeticOperatorKindV1_3_0: Schema.Codec<ArithmeticOperatorKindV1_3_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3)]);

/** QueryAnyValueExpression in semantic-query 1.3.0. */
export type QueryAnyValueExpressionV1_3_0 = { readonly "DefaultValueOverridesAncestors"?: boolean; };
/** Native schema for QueryAnyValueExpression in semantic-query 1.3.0. */
export const QueryAnyValueExpressionV1_3_0: Schema.Codec<QueryAnyValueExpressionV1_3_0> = closed({ "DefaultValueOverridesAncestors": Schema.optionalKey(Schema.Boolean) });

/** QueryDefaultValueExpression in semantic-query 1.3.0. */
export type QueryDefaultValueExpressionV1_3_0 = {  };
/** Native schema for QueryDefaultValueExpression in semantic-query 1.3.0. */
export const QueryDefaultValueExpressionV1_3_0: Schema.Codec<QueryDefaultValueExpressionV1_3_0> = closed({  });

/** QueryNowExpression in semantic-query 1.3.0. */
export type QueryNowExpressionV1_3_0 = {  };
/** Native schema for QueryNowExpression in semantic-query 1.3.0. */
export const QueryNowExpressionV1_3_0: Schema.Codec<QueryNowExpressionV1_3_0> = closed({  });

/** QueryDateAddExpression in semantic-query 1.3.0. */
export type QueryDateAddExpressionV1_3_0 = { readonly "Amount": number; readonly "TimeUnit": TimeUnitV1_3_0; readonly "Expression": QueryExpressionContainerV1_3_0; };
/** Native schema for QueryDateAddExpression in semantic-query 1.3.0. */
export const QueryDateAddExpressionV1_3_0: Schema.Codec<QueryDateAddExpressionV1_3_0> = closed({ "Amount": Schema.Finite, "TimeUnit": Schema.suspend(() => TimeUnitV1_3_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0) });

/** TimeUnit in semantic-query 1.3.0. */
export type TimeUnitV1_3_0 = (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7);
/** Native schema for TimeUnit in semantic-query 1.3.0. */
export const TimeUnitV1_3_0: Schema.Codec<TimeUnitV1_3_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)]);

/** QueryDateSpanExpression in semantic-query 1.3.0. */
export type QueryDateSpanExpressionV1_3_0 = { readonly "TimeUnit": TimeUnitV1_3_0; readonly "Expression": QueryExpressionContainerV1_3_0; };
/** Native schema for QueryDateSpanExpression in semantic-query 1.3.0. */
export const QueryDateSpanExpressionV1_3_0: Schema.Codec<QueryDateSpanExpressionV1_3_0> = closed({ "TimeUnit": Schema.suspend(() => TimeUnitV1_3_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0) });

/** QueryLiteralExpression in semantic-query 1.3.0. */
export type QueryLiteralExpressionV1_3_0 = { readonly "Value": string; };
/** Native schema for QueryLiteralExpression in semantic-query 1.3.0. */
export const QueryLiteralExpressionV1_3_0: Schema.Codec<QueryLiteralExpressionV1_3_0> = closed({ "Value": Schema.String });

/** QueryExistsExpression in semantic-query 1.3.0. */
export type QueryExistsExpressionV1_3_0 = { readonly "Expression": QueryExpressionContainerV1_3_0; };
/** Native schema for QueryExistsExpression in semantic-query 1.3.0. */
export const QueryExistsExpressionV1_3_0: Schema.Codec<QueryExistsExpressionV1_3_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0) });

/** QueryStartsWithExpression in semantic-query 1.3.0. */
export type QueryStartsWithExpressionV1_3_0 = { readonly "Left": QueryExpressionContainerV1_3_0; readonly "Right": QueryExpressionContainerV1_3_0; };
/** Native schema for QueryStartsWithExpression in semantic-query 1.3.0. */
export const QueryStartsWithExpressionV1_3_0: Schema.Codec<QueryStartsWithExpressionV1_3_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_3_0) });

/** QueryContainsExpression in semantic-query 1.3.0. */
export type QueryContainsExpressionV1_3_0 = { readonly "Left": QueryExpressionContainerV1_3_0; readonly "Right": QueryExpressionContainerV1_3_0; };
/** Native schema for QueryContainsExpression in semantic-query 1.3.0. */
export const QueryContainsExpressionV1_3_0: Schema.Codec<QueryContainsExpressionV1_3_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_3_0) });

/** QueryNotExpression in semantic-query 1.3.0. */
export type QueryNotExpressionV1_3_0 = { readonly "Expression": QueryExpressionContainerV1_3_0; };
/** Native schema for QueryNotExpression in semantic-query 1.3.0. */
export const QueryNotExpressionV1_3_0: Schema.Codec<QueryNotExpressionV1_3_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0) });

/** QueryComparisonExpression in semantic-query 1.3.0. */
export type QueryComparisonExpressionV1_3_0 = { readonly "ComparisonKind": QueryComparisonKindV1_3_0; readonly "Left": QueryExpressionContainerV1_3_0; readonly "Right": QueryExpressionContainerV1_3_0; };
/** Native schema for QueryComparisonExpression in semantic-query 1.3.0. */
export const QueryComparisonExpressionV1_3_0: Schema.Codec<QueryComparisonExpressionV1_3_0> = closed({ "ComparisonKind": Schema.suspend(() => QueryComparisonKindV1_3_0), "Left": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_3_0) });

/** QueryComparisonKind in semantic-query 1.3.0. */
export type QueryComparisonKindV1_3_0 = (0) | (1) | (2) | (3) | (4);
/** Native schema for QueryComparisonKind in semantic-query 1.3.0. */
export const QueryComparisonKindV1_3_0: Schema.Codec<QueryComparisonKindV1_3_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4)]);

/** QueryBinaryExpression in semantic-query 1.3.0. */
export type QueryBinaryExpressionV1_3_0 = { readonly "Left": QueryExpressionContainerV1_3_0; readonly "Right": QueryExpressionContainerV1_3_0; };
/** Native schema for QueryBinaryExpression in semantic-query 1.3.0. */
export const QueryBinaryExpressionV1_3_0: Schema.Codec<QueryBinaryExpressionV1_3_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_3_0) });

/** QueryInExpression in semantic-query 1.3.0. */
export type QueryInExpressionV1_3_0 = { readonly "Expressions": ReadonlyArray<QueryExpressionContainerV1_3_0>; readonly "Values"?: ReadonlyArray<ReadonlyArray<QueryExpressionContainerV1_3_0>>; readonly "Table"?: QueryExpressionContainerV1_3_0; };
/** Native schema for QueryInExpression in semantic-query 1.3.0. */
export const QueryInExpressionV1_3_0: Schema.Codec<QueryInExpressionV1_3_0> = closed({ "Expressions": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)), "Values": Schema.optionalKey(Schema.Array(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)))), "Table": Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_3_0)) });

/** QueryBetweenExpression in semantic-query 1.3.0. */
export type QueryBetweenExpressionV1_3_0 = { readonly "Expression": QueryExpressionContainerV1_3_0; readonly "LowerBound": QueryExpressionContainerV1_3_0; readonly "UpperBound": QueryExpressionContainerV1_3_0; };
/** Native schema for QueryBetweenExpression in semantic-query 1.3.0. */
export const QueryBetweenExpressionV1_3_0: Schema.Codec<QueryBetweenExpressionV1_3_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0), "LowerBound": Schema.suspend(() => QueryExpressionContainerV1_3_0), "UpperBound": Schema.suspend(() => QueryExpressionContainerV1_3_0) });

/** QueryDiscretizeExpression in semantic-query 1.3.0. */
export type QueryDiscretizeExpressionV1_3_0 = { readonly "Expression": QueryExpressionContainerV1_3_0; readonly "Count": number; };
/** Native schema for QueryDiscretizeExpression in semantic-query 1.3.0. */
export const QueryDiscretizeExpressionV1_3_0: Schema.Codec<QueryDiscretizeExpressionV1_3_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Count": Schema.Finite });

/** QuerySubqueryExpression in semantic-query 1.3.0. */
export type QuerySubqueryExpressionV1_3_0 = { readonly "Query": QueryDefinitionV1_3_0; };
/** Native schema for QuerySubqueryExpression in semantic-query 1.3.0. */
export const QuerySubqueryExpressionV1_3_0: Schema.Codec<QuerySubqueryExpressionV1_3_0> = closed({ "Query": Schema.suspend(() => QueryDefinitionV1_3_0) });

/** QueryDefinition in semantic-query 1.3.0. */
export type QueryDefinitionV1_3_0 = { readonly "Version"?: 2; readonly "From": ReadonlyArray<EntitySourceV1_3_0>; readonly "Where"?: ReadonlyArray<QueryFilterV1_3_0>; readonly "OrderBy"?: ReadonlyArray<QuerySortClauseV1_3_0>; readonly "Select": ReadonlyArray<QueryExpressionContainerV1_3_0>; readonly "VisualShape"?: ReadonlyArray<AxisV1_3_0>; readonly "GroupBy"?: ReadonlyArray<QueryExpressionContainerV1_3_0>; readonly "Transform"?: ReadonlyArray<QueryTransformV1_3_0>; readonly "Top"?: number; };
/** Native schema for QueryDefinition in semantic-query 1.3.0. */
export const QueryDefinitionV1_3_0: Schema.Codec<QueryDefinitionV1_3_0> = closed({ "Version": Schema.optionalKey(Schema.Literal(2)), "From": Schema.Array(Schema.suspend(() => EntitySourceV1_3_0)), "Where": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryFilterV1_3_0))), "OrderBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortClauseV1_3_0))), "Select": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)), "VisualShape": Schema.optionalKey(Schema.Array(Schema.suspend(() => AxisV1_3_0))), "GroupBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0))), "Transform": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryTransformV1_3_0))), "Top": Schema.optionalKey(Schema.Finite) });

/** QueryTransform in semantic-query 1.3.0. */
export type QueryTransformV1_3_0 = { readonly "Name": string; readonly "Algorithm": string; readonly "Input": QueryTransformInputV1_3_0; readonly "Output": QueryTransformOutputV1_3_0; };
/** Native schema for QueryTransform in semantic-query 1.3.0. */
export const QueryTransformV1_3_0: Schema.Codec<QueryTransformV1_3_0> = closed({ "Name": Schema.String, "Algorithm": Schema.String, "Input": Schema.suspend(() => QueryTransformInputV1_3_0), "Output": Schema.suspend(() => QueryTransformOutputV1_3_0) });

/** QueryTransformOutput in semantic-query 1.3.0. */
export type QueryTransformOutputV1_3_0 = { readonly "Table"?: QueryTransformTableV1_3_0; };
/** Native schema for QueryTransformOutput in semantic-query 1.3.0. */
export const QueryTransformOutputV1_3_0: Schema.Codec<QueryTransformOutputV1_3_0> = closed({ "Table": Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_3_0)) });

/** QueryTransformTable in semantic-query 1.3.0. */
export type QueryTransformTableV1_3_0 = { readonly "Name": string; readonly "Columns": ReadonlyArray<QueryTransformTableColumnV1_3_0>; };
/** Native schema for QueryTransformTable in semantic-query 1.3.0. */
export const QueryTransformTableV1_3_0: Schema.Codec<QueryTransformTableV1_3_0> = closed({ "Name": Schema.String, "Columns": Schema.Array(Schema.suspend(() => QueryTransformTableColumnV1_3_0)) });

/** QueryTransformTableColumn in semantic-query 1.3.0. */
export type QueryTransformTableColumnV1_3_0 = { readonly "Role"?: string; readonly "Expression": QueryExpressionContainerV1_3_0; };
/** Native schema for QueryTransformTableColumn in semantic-query 1.3.0. */
export const QueryTransformTableColumnV1_3_0: Schema.Codec<QueryTransformTableColumnV1_3_0> = closed({ "Role": Schema.optionalKey(Schema.String), "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0) });

/** QueryTransformInput in semantic-query 1.3.0. */
export type QueryTransformInputV1_3_0 = { readonly "Parameters": ReadonlyArray<QueryExpressionContainerV1_3_0>; readonly "Table"?: QueryTransformTableV1_3_0; };
/** Native schema for QueryTransformInput in semantic-query 1.3.0. */
export const QueryTransformInputV1_3_0: Schema.Codec<QueryTransformInputV1_3_0> = closed({ "Parameters": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)), "Table": Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_3_0)) });

/** Axis in semantic-query 1.3.0. */
export type AxisV1_3_0 = { readonly "Groups": ReadonlyArray<AxisGroupV1_3_0>; readonly "Name": string; };
/** Native schema for Axis in semantic-query 1.3.0. */
export const AxisV1_3_0: Schema.Codec<AxisV1_3_0> = closed({ "Groups": Schema.Array(Schema.suspend(() => AxisGroupV1_3_0)), "Name": Schema.String });

/** AxisGroup in semantic-query 1.3.0. */
export type AxisGroupV1_3_0 = { readonly "Keys": ReadonlyArray<QueryExpressionContainerV1_3_0>; readonly "Subtotal": boolean; };
/** Native schema for AxisGroup in semantic-query 1.3.0. */
export const AxisGroupV1_3_0: Schema.Codec<AxisGroupV1_3_0> = closed({ "Keys": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_3_0)), "Subtotal": Schema.Boolean });

/** QuerySortClause in semantic-query 1.3.0. */
export type QuerySortClauseV1_3_0 = { readonly "Expression": QueryExpressionContainerV1_3_0; readonly "Direction": SortDirectionV1_3_0; };
/** Native schema for QuerySortClause in semantic-query 1.3.0. */
export const QuerySortClauseV1_3_0: Schema.Codec<QuerySortClauseV1_3_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Direction": Schema.suspend(() => SortDirectionV1_3_0) });

/** SortDirection in semantic-query 1.3.0. */
export type SortDirectionV1_3_0 = (1) | (2);
/** Native schema for SortDirection in semantic-query 1.3.0. */
export const SortDirectionV1_3_0: Schema.Codec<SortDirectionV1_3_0> = Schema.Union([Schema.Literal(1), Schema.Literal(2)]);

/** EntitySource in semantic-query 1.3.0. */
export type EntitySourceV1_3_0 = { readonly "Name": string; readonly "Entity"?: string; readonly "Schema"?: string; readonly "Expression"?: QueryExpressionContainerV1_3_0; readonly "Type"?: (0) | (1) | (2); };
/** Native schema for EntitySource in semantic-query 1.3.0. */
export const EntitySourceV1_3_0: Schema.Codec<EntitySourceV1_3_0> = closed({ "Name": Schema.String, "Entity": Schema.optionalKey(Schema.String), "Schema": Schema.optionalKey(Schema.String), "Expression": Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_3_0)), "Type": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])) });

/** QueryPropertyVariationSourceExpression in semantic-query 1.3.0. */
export type QueryPropertyVariationSourceExpressionV1_3_0 = { readonly "Expression": QueryExpressionContainerV1_3_0; readonly "Name": string; readonly "Property": string; };
/** Native schema for QueryPropertyVariationSourceExpression in semantic-query 1.3.0. */
export const QueryPropertyVariationSourceExpressionV1_3_0: Schema.Codec<QueryPropertyVariationSourceExpressionV1_3_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Name": Schema.String, "Property": Schema.String });

/** QueryHierarchyLevelExpression in semantic-query 1.3.0. */
export type QueryHierarchyLevelExpressionV1_3_0 = { readonly "Expression": QueryExpressionContainerV1_3_0; readonly "Level": string; };
/** Native schema for QueryHierarchyLevelExpression in semantic-query 1.3.0. */
export const QueryHierarchyLevelExpressionV1_3_0: Schema.Codec<QueryHierarchyLevelExpressionV1_3_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Level": Schema.String });

/** QueryHierarchyExpression in semantic-query 1.3.0. */
export type QueryHierarchyExpressionV1_3_0 = { readonly "Expression": QueryExpressionContainerV1_3_0; readonly "Hierarchy": string; };
/** Native schema for QueryHierarchyExpression in semantic-query 1.3.0. */
export const QueryHierarchyExpressionV1_3_0: Schema.Codec<QueryHierarchyExpressionV1_3_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Hierarchy": Schema.String });

/** QueryPercentileExpression in semantic-query 1.3.0. */
export type QueryPercentileExpressionV1_3_0 = { readonly "Expression": QueryExpressionContainerV1_3_0; readonly "K": number; readonly "Exclusive"?: boolean; };
/** Native schema for QueryPercentileExpression in semantic-query 1.3.0. */
export const QueryPercentileExpressionV1_3_0: Schema.Codec<QueryPercentileExpressionV1_3_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0), "K": Schema.Finite, "Exclusive": Schema.optionalKey(Schema.Boolean) });

/** QueryAggregationExpression in semantic-query 1.3.0. */
export type QueryAggregationExpressionV1_3_0 = { readonly "Function": QueryAggregateFunctionV1_3_0; readonly "Expression": QueryExpressionContainerV1_3_0; };
/** Native schema for QueryAggregationExpression in semantic-query 1.3.0. */
export const QueryAggregationExpressionV1_3_0: Schema.Codec<QueryAggregationExpressionV1_3_0> = closed({ "Function": Schema.suspend(() => QueryAggregateFunctionV1_3_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0) });

/** QueryAggregateFunction in semantic-query 1.3.0. */
export type QueryAggregateFunctionV1_3_0 = (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7) | (8);
/** Native schema for QueryAggregateFunction in semantic-query 1.3.0. */
export const QueryAggregateFunctionV1_3_0: Schema.Codec<QueryAggregateFunctionV1_3_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7), Schema.Literal(8)]);

/** QueryMaxExpression in semantic-query 1.3.0. */
export type QueryMaxExpressionV1_3_0 = { readonly "IncludeAllTypes": IncludeAllTypesV1_3_0; readonly "Expression": QueryExpressionContainerV1_3_0; };
/** Native schema for QueryMaxExpression in semantic-query 1.3.0. */
export const QueryMaxExpressionV1_3_0: Schema.Codec<QueryMaxExpressionV1_3_0> = closed({ "IncludeAllTypes": Schema.suspend(() => IncludeAllTypesV1_3_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0) });

/** IncludeAllTypes in semantic-query 1.3.0. */
export type IncludeAllTypesV1_3_0 = (0) | (1) | (2);
/** Native schema for IncludeAllTypes in semantic-query 1.3.0. */
export const IncludeAllTypesV1_3_0: Schema.Codec<IncludeAllTypesV1_3_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]);

/** QueryMinExpression in semantic-query 1.3.0. */
export type QueryMinExpressionV1_3_0 = { readonly "IncludeAllTypes": IncludeAllTypesV1_3_0; readonly "Expression": QueryExpressionContainerV1_3_0; };
/** Native schema for QueryMinExpression in semantic-query 1.3.0. */
export const QueryMinExpressionV1_3_0: Schema.Codec<QueryMinExpressionV1_3_0> = closed({ "IncludeAllTypes": Schema.suspend(() => IncludeAllTypesV1_3_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0) });

/** QueryMeasureExpression in semantic-query 1.3.0. */
export type QueryMeasureExpressionV1_3_0 = { readonly "Expression": QueryExpressionContainerV1_3_0; readonly "Property": string; };
/** Native schema for QueryMeasureExpression in semantic-query 1.3.0. */
export const QueryMeasureExpressionV1_3_0: Schema.Codec<QueryMeasureExpressionV1_3_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Property": Schema.String });

/** QueryColumnExpression in semantic-query 1.3.0. */
export type QueryColumnExpressionV1_3_0 = { readonly "Expression": QueryExpressionContainerV1_3_0; readonly "Property": string; };
/** Native schema for QueryColumnExpression in semantic-query 1.3.0. */
export const QueryColumnExpressionV1_3_0: Schema.Codec<QueryColumnExpressionV1_3_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_3_0), "Property": Schema.String });

/** QuerySourceRefExpression in semantic-query 1.3.0. */
export type QuerySourceRefExpressionV1_3_0 = { readonly "Source": string; };
/** Native schema for QuerySourceRefExpression in semantic-query 1.3.0. */
export const QuerySourceRefExpressionV1_3_0: Schema.Codec<QuerySourceRefExpressionV1_3_0> = closed({ "Source": Schema.String });

/** StandaloneSourceRefExpression in semantic-query 1.3.0. */
export type StandaloneSourceRefExpressionV1_3_0 = { readonly "Schema"?: string; readonly "Entity": string; };
/** Native schema for StandaloneSourceRefExpression in semantic-query 1.3.0. */
export const StandaloneSourceRefExpressionV1_3_0: Schema.Codec<StandaloneSourceRefExpressionV1_3_0> = closed({ "Schema": Schema.optionalKey(Schema.String), "Entity": Schema.String });

/** Named query definitions with the exact 1.3.0 recursive dependency graph. */
export const SemanticQueryDefinitionsV1_3_0 = {
  FilterDefinition: FilterDefinitionV1_3_0,
  QueryFilter: QueryFilterV1_3_0,
  QueryExpressionContainer: QueryExpressionContainerV1_3_0,
  QueryVisualTopNExpression: QueryVisualTopNExpressionV1_3_0,
  QueryNativeColumn: QueryNativeColumnV1_3_0,
  QueryExpressionContentCache: QueryExpressionContentCacheV1_3_0,
  QueryNativeMeasure: QueryNativeMeasureV1_3_0,
  QueryConditionalExpression: QueryConditionalExpressionV1_3_0,
  QueryCase: QueryCaseV1_3_0,
  QueryThemeDataColorExpression: QueryThemeDataColorExpressionV1_3_0,
  QuerySelectRefExpression: QuerySelectRefExpressionV1_3_0,
  QueryAllRolesRefExpression: QueryAllRolesRefExpressionV1_3_0,
  QuerySummaryValueRefExpression: QuerySummaryValueRefExpressionV1_3_0,
  QueryRoleRefExpression: QueryRoleRefExpressionV1_3_0,
  QueryResourcePackageItem: QueryResourcePackageItemV1_3_0,
  QueryGroupRefExpression: QueryGroupRefExpressionV1_3_0,
  QueryFillRuleExpression: QueryFillRuleExpressionV1_3_0,
  QueryNativeVisualCalc: QueryNativeVisualCalcV1_3_0,
  QuerySparklineDataExpression: QuerySparklineDataExpressionV1_3_0,
  QueryTransformOutputRoleRefExpression: QueryTransformOutputRoleRefExpressionV1_3_0,
  QueryTransformTableRefExpression: QueryTransformTableRefExpressionV1_3_0,
  QueryFilteredEvalExpression: QueryFilteredEvalExpressionV1_3_0,
  QueryScopedEvalExpression: QueryScopedEvalExpressionV1_3_0,
  QueryFloorExpression: QueryFloorExpressionV1_3_0,
  QueryArithmeticExpression: QueryArithmeticExpressionV1_3_0,
  ArithmeticOperatorKind: ArithmeticOperatorKindV1_3_0,
  QueryAnyValueExpression: QueryAnyValueExpressionV1_3_0,
  QueryDefaultValueExpression: QueryDefaultValueExpressionV1_3_0,
  QueryNowExpression: QueryNowExpressionV1_3_0,
  QueryDateAddExpression: QueryDateAddExpressionV1_3_0,
  TimeUnit: TimeUnitV1_3_0,
  QueryDateSpanExpression: QueryDateSpanExpressionV1_3_0,
  QueryLiteralExpression: QueryLiteralExpressionV1_3_0,
  QueryExistsExpression: QueryExistsExpressionV1_3_0,
  QueryStartsWithExpression: QueryStartsWithExpressionV1_3_0,
  QueryContainsExpression: QueryContainsExpressionV1_3_0,
  QueryNotExpression: QueryNotExpressionV1_3_0,
  QueryComparisonExpression: QueryComparisonExpressionV1_3_0,
  QueryComparisonKind: QueryComparisonKindV1_3_0,
  QueryBinaryExpression: QueryBinaryExpressionV1_3_0,
  QueryInExpression: QueryInExpressionV1_3_0,
  QueryBetweenExpression: QueryBetweenExpressionV1_3_0,
  QueryDiscretizeExpression: QueryDiscretizeExpressionV1_3_0,
  QuerySubqueryExpression: QuerySubqueryExpressionV1_3_0,
  QueryDefinition: QueryDefinitionV1_3_0,
  QueryTransform: QueryTransformV1_3_0,
  QueryTransformOutput: QueryTransformOutputV1_3_0,
  QueryTransformTable: QueryTransformTableV1_3_0,
  QueryTransformTableColumn: QueryTransformTableColumnV1_3_0,
  QueryTransformInput: QueryTransformInputV1_3_0,
  Axis: AxisV1_3_0,
  AxisGroup: AxisGroupV1_3_0,
  QuerySortClause: QuerySortClauseV1_3_0,
  SortDirection: SortDirectionV1_3_0,
  EntitySource: EntitySourceV1_3_0,
  QueryPropertyVariationSourceExpression: QueryPropertyVariationSourceExpressionV1_3_0,
  QueryHierarchyLevelExpression: QueryHierarchyLevelExpressionV1_3_0,
  QueryHierarchyExpression: QueryHierarchyExpressionV1_3_0,
  QueryPercentileExpression: QueryPercentileExpressionV1_3_0,
  QueryAggregationExpression: QueryAggregationExpressionV1_3_0,
  QueryAggregateFunction: QueryAggregateFunctionV1_3_0,
  QueryMaxExpression: QueryMaxExpressionV1_3_0,
  IncludeAllTypes: IncludeAllTypesV1_3_0,
  QueryMinExpression: QueryMinExpressionV1_3_0,
  QueryMeasureExpression: QueryMeasureExpressionV1_3_0,
  QueryColumnExpression: QueryColumnExpressionV1_3_0,
  QuerySourceRefExpression: QuerySourceRefExpressionV1_3_0,
  StandaloneSourceRefExpression: StandaloneSourceRefExpressionV1_3_0
} as const;

/** The source root declares definitions only, accepting any JSON value. */
export const SemanticQueryV1_3_0 = Schema.Json;
export type SemanticQueryV1_3_0 = typeof SemanticQueryV1_3_0.Type;

/** FilterDefinition in semantic-query 1.4.0. */
export type FilterDefinitionV1_4_0 = { readonly "Version"?: 2; readonly "From": ReadonlyArray<EntitySourceV1_4_0>; readonly "Where": ReadonlyArray<QueryFilterV1_4_0>; };
/** Native schema for FilterDefinition in semantic-query 1.4.0. */
export const FilterDefinitionV1_4_0: Schema.Codec<FilterDefinitionV1_4_0> = closed({ "Version": Schema.optionalKey(Schema.Literal(2)), "From": Schema.Array(Schema.suspend(() => EntitySourceV1_4_0)), "Where": Schema.Array(Schema.suspend(() => QueryFilterV1_4_0)) });

/** QueryFilter in semantic-query 1.4.0. */
export type QueryFilterV1_4_0 = { readonly "Target"?: ReadonlyArray<QueryExpressionContainerV1_4_0>; readonly "Condition": QueryExpressionContainerV1_4_0; readonly "Annotations"?: {  } & { readonly [key: string]: Schema.Json }; };
/** Native schema for QueryFilter in semantic-query 1.4.0. */
export const QueryFilterV1_4_0: Schema.Codec<QueryFilterV1_4_0> = closed({ "Target": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0))), "Condition": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Annotations": Schema.optionalKey(Schema.Record(Schema.String, Schema.Json)) });

/** QueryExpressionContainer in semantic-query 1.4.0. */
export type QueryExpressionContainerV1_4_0 = { readonly "Name"?: string; readonly "NativeReferenceName"?: string; readonly "Annotations"?: { readonly "customTotalMetadata"?: QueryCustomTotalMetadataV1_4_0; } & { readonly [key: string]: Schema.Json }; } & ExactlyOne<{ readonly "SourceRef": (StandaloneSourceRefExpressionV1_4_0) | (QuerySourceRefExpressionV1_4_0); readonly "Column": QueryColumnExpressionV1_4_0; readonly "Measure": QueryMeasureExpressionV1_4_0; readonly "Min": QueryMinExpressionV1_4_0; readonly "Max": QueryMaxExpressionV1_4_0; readonly "Aggregation": QueryAggregationExpressionV1_4_0; readonly "Percentile": QueryPercentileExpressionV1_4_0; readonly "Hierarchy": QueryHierarchyExpressionV1_4_0; readonly "HierarchyLevel": QueryHierarchyLevelExpressionV1_4_0; readonly "PropertyVariationSource": QueryPropertyVariationSourceExpressionV1_4_0; readonly "Subquery": QuerySubqueryExpressionV1_4_0; readonly "Discretize": QueryDiscretizeExpressionV1_4_0; readonly "And": QueryBinaryExpressionV1_4_0; readonly "Between": QueryBetweenExpressionV1_4_0; readonly "In": QueryInExpressionV1_4_0; readonly "Or": QueryBinaryExpressionV1_4_0; readonly "Comparison": QueryComparisonExpressionV1_4_0; readonly "Not": QueryNotExpressionV1_4_0; readonly "Contains": QueryContainsExpressionV1_4_0; readonly "StartsWith": QueryStartsWithExpressionV1_4_0; readonly "Exists": QueryExistsExpressionV1_4_0; readonly "Literal": QueryLiteralExpressionV1_4_0; readonly "DateSpan": QueryDateSpanExpressionV1_4_0; readonly "DateAdd": QueryDateAddExpressionV1_4_0; readonly "Now": QueryNowExpressionV1_4_0; readonly "DefaultValue": QueryDefaultValueExpressionV1_4_0; readonly "AnyValue": QueryAnyValueExpressionV1_4_0; readonly "Arithmetic": QueryArithmeticExpressionV1_4_0; readonly "Floor": QueryFloorExpressionV1_4_0; readonly "ScopedEval": QueryScopedEvalExpressionV1_4_0; readonly "FilteredEval": QueryFilteredEvalExpressionV1_4_0; readonly "TransformTableRef": QueryTransformTableRefExpressionV1_4_0; readonly "TransformOutputRoleRef": QueryTransformOutputRoleRefExpressionV1_4_0; readonly "SparklineData": QuerySparklineDataExpressionV1_4_0; readonly "NativeVisualCalculation": QueryNativeVisualCalcV1_4_0; readonly "FillRule": QueryFillRuleExpressionV1_4_0; readonly "GroupRef": QueryGroupRefExpressionV1_4_0; readonly "ResourcePackageItem": QueryResourcePackageItemV1_4_0; readonly "RoleRef": QueryRoleRefExpressionV1_4_0; readonly "SummaryValueRef": QuerySummaryValueRefExpressionV1_4_0; readonly "AllRolesRef": QueryAllRolesRefExpressionV1_4_0; readonly "SelectRef": QuerySelectRefExpressionV1_4_0; readonly "ThemeDataColor": QueryThemeDataColorExpressionV1_4_0; readonly "Conditional": QueryConditionalExpressionV1_4_0; readonly "NativeMeasure": QueryNativeMeasureV1_4_0; readonly "NativeColumn": QueryNativeColumnV1_4_0; readonly "VisualTopN": QueryVisualTopNExpressionV1_4_0; }>;
/** Native schema for QueryExpressionContainer in semantic-query 1.4.0. */
export const QueryExpressionContainerV1_4_0: Schema.Codec<QueryExpressionContainerV1_4_0> = Schema.Union([
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "SourceRef": Schema.Union([Schema.suspend(() => StandaloneSourceRefExpressionV1_4_0), Schema.suspend(() => QuerySourceRefExpressionV1_4_0)]) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Column": Schema.suspend(() => QueryColumnExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Measure": Schema.suspend(() => QueryMeasureExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Min": Schema.suspend(() => QueryMinExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Max": Schema.suspend(() => QueryMaxExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Aggregation": Schema.suspend(() => QueryAggregationExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Percentile": Schema.suspend(() => QueryPercentileExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Hierarchy": Schema.suspend(() => QueryHierarchyExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "HierarchyLevel": Schema.suspend(() => QueryHierarchyLevelExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "PropertyVariationSource": Schema.suspend(() => QueryPropertyVariationSourceExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Subquery": Schema.suspend(() => QuerySubqueryExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Discretize": Schema.suspend(() => QueryDiscretizeExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "And": Schema.suspend(() => QueryBinaryExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Between": Schema.suspend(() => QueryBetweenExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "In": Schema.suspend(() => QueryInExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Or": Schema.suspend(() => QueryBinaryExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Comparison": Schema.suspend(() => QueryComparisonExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Not": Schema.suspend(() => QueryNotExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Contains": Schema.suspend(() => QueryContainsExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "StartsWith": Schema.suspend(() => QueryStartsWithExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Exists": Schema.suspend(() => QueryExistsExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Literal": Schema.suspend(() => QueryLiteralExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "DateSpan": Schema.suspend(() => QueryDateSpanExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "DateAdd": Schema.suspend(() => QueryDateAddExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Now": Schema.suspend(() => QueryNowExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "DefaultValue": Schema.suspend(() => QueryDefaultValueExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "AnyValue": Schema.suspend(() => QueryAnyValueExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Arithmetic": Schema.suspend(() => QueryArithmeticExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Floor": Schema.suspend(() => QueryFloorExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "ScopedEval": Schema.suspend(() => QueryScopedEvalExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "FilteredEval": Schema.suspend(() => QueryFilteredEvalExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "TransformTableRef": Schema.suspend(() => QueryTransformTableRefExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "TransformOutputRoleRef": Schema.suspend(() => QueryTransformOutputRoleRefExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "SparklineData": Schema.suspend(() => QuerySparklineDataExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "NativeVisualCalculation": Schema.suspend(() => QueryNativeVisualCalcV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "FillRule": Schema.suspend(() => QueryFillRuleExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "GroupRef": Schema.suspend(() => QueryGroupRefExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "ResourcePackageItem": Schema.suspend(() => QueryResourcePackageItemV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "RoleRef": Schema.suspend(() => QueryRoleRefExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "SummaryValueRef": Schema.suspend(() => QuerySummaryValueRefExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "AllRolesRef": Schema.suspend(() => QueryAllRolesRefExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "SelectRef": Schema.suspend(() => QuerySelectRefExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "ThemeDataColor": Schema.suspend(() => QueryThemeDataColorExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "Conditional": Schema.suspend(() => QueryConditionalExpressionV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "NativeMeasure": Schema.suspend(() => QueryNativeMeasureV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "NativeColumn": Schema.suspend(() => QueryNativeColumnV1_4_0) }),
  closed({ "Name": Schema.optionalKey(Schema.String), "NativeReferenceName": Schema.optionalKey(Schema.String), "Annotations": Schema.optionalKey(Schema.StructWithRest(Schema.Struct({ "customTotalMetadata": Schema.optionalKey(Schema.suspend(() => QueryCustomTotalMetadataV1_4_0)) }), [Schema.Record(Schema.String, Schema.Json)])), "VisualTopN": Schema.suspend(() => QueryVisualTopNExpressionV1_4_0) })
]);

/** QueryVisualTopNExpression in semantic-query 1.4.0. */
export type QueryVisualTopNExpressionV1_4_0 = { readonly "ItemCount": number; };
/** Native schema for QueryVisualTopNExpression in semantic-query 1.4.0. */
export const QueryVisualTopNExpressionV1_4_0: Schema.Codec<QueryVisualTopNExpressionV1_4_0> = closed({ "ItemCount": Schema.Finite });

/** QueryNativeColumn in semantic-query 1.4.0. */
export type QueryNativeColumnV1_4_0 = { readonly "DataType": number; readonly "Expression": string; readonly "Language": string; readonly "Source": QueryExpressionContainerV1_4_0; readonly "ExpressionContentCache"?: QueryExpressionContentCacheV1_4_0; readonly "ProposedName"?: string; readonly "Format"?: string; };
/** Native schema for QueryNativeColumn in semantic-query 1.4.0. */
export const QueryNativeColumnV1_4_0: Schema.Codec<QueryNativeColumnV1_4_0> = closed({ "DataType": Schema.Finite, "Expression": Schema.String, "Language": Schema.String, "Source": Schema.suspend(() => QueryExpressionContainerV1_4_0), "ExpressionContentCache": Schema.optionalKey(Schema.suspend(() => QueryExpressionContentCacheV1_4_0)), "ProposedName": Schema.optionalKey(Schema.String), "Format": Schema.optionalKey(Schema.String) });

/** QueryExpressionContentCache in semantic-query 1.4.0. */
export type QueryExpressionContentCacheV1_4_0 = { readonly "Dependencies"?: ReadonlyArray<QueryExpressionContainerV1_4_0>; readonly "UnrecognizedIdentifiers"?: boolean; };
/** Native schema for QueryExpressionContentCache in semantic-query 1.4.0. */
export const QueryExpressionContentCacheV1_4_0: Schema.Codec<QueryExpressionContentCacheV1_4_0> = closed({ "Dependencies": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0))), "UnrecognizedIdentifiers": Schema.optionalKey(Schema.Boolean) });

/** QueryNativeMeasure in semantic-query 1.4.0. */
export type QueryNativeMeasureV1_4_0 = { readonly "DataType": number; readonly "Expression": string; readonly "Language": "dax"; readonly "ExpressionContentCache"?: QueryExpressionContentCacheV1_4_0; readonly "ProposedName"?: string; readonly "Format"?: string; };
/** Native schema for QueryNativeMeasure in semantic-query 1.4.0. */
export const QueryNativeMeasureV1_4_0: Schema.Codec<QueryNativeMeasureV1_4_0> = closed({ "DataType": Schema.Finite, "Expression": Schema.String, "Language": Schema.Literal("dax"), "ExpressionContentCache": Schema.optionalKey(Schema.suspend(() => QueryExpressionContentCacheV1_4_0)), "ProposedName": Schema.optionalKey(Schema.String), "Format": Schema.optionalKey(Schema.String) });

/** QueryConditionalExpression in semantic-query 1.4.0. */
export type QueryConditionalExpressionV1_4_0 = { readonly "Cases": ReadonlyArray<QueryCaseV1_4_0>; readonly "DefaultValue"?: QueryExpressionContainerV1_4_0; };
/** Native schema for QueryConditionalExpression in semantic-query 1.4.0. */
export const QueryConditionalExpressionV1_4_0: Schema.Codec<QueryConditionalExpressionV1_4_0> = closed({ "Cases": Schema.Array(Schema.suspend(() => QueryCaseV1_4_0)), "DefaultValue": Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_4_0)) });

/** QueryCase in semantic-query 1.4.0. */
export type QueryCaseV1_4_0 = { readonly "Condition": QueryExpressionContainerV1_4_0; readonly "Value": QueryExpressionContainerV1_4_0; };
/** Native schema for QueryCase in semantic-query 1.4.0. */
export const QueryCaseV1_4_0: Schema.Codec<QueryCaseV1_4_0> = closed({ "Condition": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Value": Schema.suspend(() => QueryExpressionContainerV1_4_0) });

/** QueryThemeDataColorExpression in semantic-query 1.4.0. */
export type QueryThemeDataColorExpressionV1_4_0 = { readonly "ColorId": number; readonly "Percent": number; };
/** Native schema for QueryThemeDataColorExpression in semantic-query 1.4.0. */
export const QueryThemeDataColorExpressionV1_4_0: Schema.Codec<QueryThemeDataColorExpressionV1_4_0> = closed({ "ColorId": Schema.Finite, "Percent": Schema.Finite });

/** QuerySelectRefExpression in semantic-query 1.4.0. */
export type QuerySelectRefExpressionV1_4_0 = { readonly "ExpressionName": string; };
/** Native schema for QuerySelectRefExpression in semantic-query 1.4.0. */
export const QuerySelectRefExpressionV1_4_0: Schema.Codec<QuerySelectRefExpressionV1_4_0> = closed({ "ExpressionName": Schema.String });

/** QueryAllRolesRefExpression in semantic-query 1.4.0. */
export type QueryAllRolesRefExpressionV1_4_0 = {  };
/** Native schema for QueryAllRolesRefExpression in semantic-query 1.4.0. */
export const QueryAllRolesRefExpressionV1_4_0: Schema.Codec<QueryAllRolesRefExpressionV1_4_0> = closed({  });

/** QuerySummaryValueRefExpression in semantic-query 1.4.0. */
export type QuerySummaryValueRefExpressionV1_4_0 = { readonly "Name": string; };
/** Native schema for QuerySummaryValueRefExpression in semantic-query 1.4.0. */
export const QuerySummaryValueRefExpressionV1_4_0: Schema.Codec<QuerySummaryValueRefExpressionV1_4_0> = closed({ "Name": Schema.String });

/** QueryRoleRefExpression in semantic-query 1.4.0. */
export type QueryRoleRefExpressionV1_4_0 = { readonly "Role": string; };
/** Native schema for QueryRoleRefExpression in semantic-query 1.4.0. */
export const QueryRoleRefExpressionV1_4_0: Schema.Codec<QueryRoleRefExpressionV1_4_0> = closed({ "Role": Schema.String });

/** QueryResourcePackageItem in semantic-query 1.4.0. */
export type QueryResourcePackageItemV1_4_0 = { readonly "PackageName": string; readonly "PackageType": number; readonly "ItemName": string; };
/** Native schema for QueryResourcePackageItem in semantic-query 1.4.0. */
export const QueryResourcePackageItemV1_4_0: Schema.Codec<QueryResourcePackageItemV1_4_0> = closed({ "PackageName": Schema.String, "PackageType": Schema.Finite, "ItemName": Schema.String });

/** QueryGroupRefExpression in semantic-query 1.4.0. */
export type QueryGroupRefExpressionV1_4_0 = { readonly "GroupedColumns": ReadonlyArray<QueryExpressionContainerV1_4_0>; readonly "Expression": QueryExpressionContainerV1_4_0; readonly "Property": string; };
/** Native schema for QueryGroupRefExpression in semantic-query 1.4.0. */
export const QueryGroupRefExpressionV1_4_0: Schema.Codec<QueryGroupRefExpressionV1_4_0> = closed({ "GroupedColumns": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)), "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Property": Schema.String });

/** QueryFillRuleExpression in semantic-query 1.4.0. */
export type QueryFillRuleExpressionV1_4_0 = { readonly "Input": QueryExpressionContainerV1_4_0; readonly "FillRule": Schema.Json; };
/** Native schema for QueryFillRuleExpression in semantic-query 1.4.0. */
export const QueryFillRuleExpressionV1_4_0: Schema.Codec<QueryFillRuleExpressionV1_4_0> = closed({ "Input": Schema.suspend(() => QueryExpressionContainerV1_4_0), "FillRule": Schema.Json });

/** QueryNativeVisualCalc in semantic-query 1.4.0. */
export type QueryNativeVisualCalcV1_4_0 = { readonly "Language": "dax"; readonly "Expression": string; readonly "Name": string; readonly "DataType"?: "Binary" | "Boolean" | "Date" | "DateTime" | "DateTimeZone" | "Decimal" | "Double" | "Duration" | "Integer" | "Json" | "None" | "Null" | "Text" | "Time" | "Variant"; };
/** Native schema for QueryNativeVisualCalc in semantic-query 1.4.0. */
export const QueryNativeVisualCalcV1_4_0: Schema.Codec<QueryNativeVisualCalcV1_4_0> = closed({ "Language": Schema.Literal("dax"), "Expression": Schema.String, "Name": Schema.String, "DataType": Schema.optionalKey(Schema.Literals(["Binary", "Boolean", "Date", "DateTime", "DateTimeZone", "Decimal", "Double", "Duration", "Integer", "Json", "None", "Null", "Text", "Time", "Variant"])) });

/** QuerySparklineDataExpression in semantic-query 1.4.0. */
export type QuerySparklineDataExpressionV1_4_0 = { readonly "Measure": QueryExpressionContainerV1_4_0; readonly "Groupings": ReadonlyArray<QueryExpressionContainerV1_4_0>; readonly "PointsPerSparkline"?: 52; readonly "ApplyCalculationGroupTo"?: ("Sparkline") | ("Point"); };
/** Native schema for QuerySparklineDataExpression in semantic-query 1.4.0. */
export const QuerySparklineDataExpressionV1_4_0: Schema.Codec<QuerySparklineDataExpressionV1_4_0> = closed({ "Measure": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Groupings": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)), "PointsPerSparkline": Schema.optionalKey(Schema.Literal(52)), "ApplyCalculationGroupTo": Schema.optionalKey(Schema.Union([Schema.Literal("Sparkline"), Schema.Literal("Point")])) });

/** QueryTransformOutputRoleRefExpression in semantic-query 1.4.0. */
export type QueryTransformOutputRoleRefExpressionV1_4_0 = { readonly "Role": string; readonly "Transform"?: string; };
/** Native schema for QueryTransformOutputRoleRefExpression in semantic-query 1.4.0. */
export const QueryTransformOutputRoleRefExpressionV1_4_0: Schema.Codec<QueryTransformOutputRoleRefExpressionV1_4_0> = closed({ "Role": Schema.String, "Transform": Schema.optionalKey(Schema.String) });

/** QueryTransformTableRefExpression in semantic-query 1.4.0. */
export type QueryTransformTableRefExpressionV1_4_0 = { readonly "Source": string; };
/** Native schema for QueryTransformTableRefExpression in semantic-query 1.4.0. */
export const QueryTransformTableRefExpressionV1_4_0: Schema.Codec<QueryTransformTableRefExpressionV1_4_0> = closed({ "Source": Schema.String });

/** QueryFilteredEvalExpression in semantic-query 1.4.0. */
export type QueryFilteredEvalExpressionV1_4_0 = { readonly "Expression": QueryExpressionContainerV1_4_0; readonly "Filters": ReadonlyArray<QueryFilterV1_4_0>; };
/** Native schema for QueryFilteredEvalExpression in semantic-query 1.4.0. */
export const QueryFilteredEvalExpressionV1_4_0: Schema.Codec<QueryFilteredEvalExpressionV1_4_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Filters": Schema.Array(Schema.suspend(() => QueryFilterV1_4_0)) });

/** QueryScopedEvalExpression in semantic-query 1.4.0. */
export type QueryScopedEvalExpressionV1_4_0 = { readonly "Expression": QueryExpressionContainerV1_4_0; readonly "Scope": ReadonlyArray<QueryExpressionContainerV1_4_0>; };
/** Native schema for QueryScopedEvalExpression in semantic-query 1.4.0. */
export const QueryScopedEvalExpressionV1_4_0: Schema.Codec<QueryScopedEvalExpressionV1_4_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Scope": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)) });

/** QueryFloorExpression in semantic-query 1.4.0. */
export type QueryFloorExpressionV1_4_0 = { readonly "Expression": QueryExpressionContainerV1_4_0; readonly "Size": number; readonly "TimeUnit"?: (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7); };
/** Native schema for QueryFloorExpression in semantic-query 1.4.0. */
export const QueryFloorExpressionV1_4_0: Schema.Codec<QueryFloorExpressionV1_4_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Size": Schema.Finite, "TimeUnit": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)])) });

/** QueryArithmeticExpression in semantic-query 1.4.0. */
export type QueryArithmeticExpressionV1_4_0 = { readonly "Left": QueryExpressionContainerV1_4_0; readonly "Right": QueryExpressionContainerV1_4_0; readonly "Operator": ArithmeticOperatorKindV1_4_0; };
/** Native schema for QueryArithmeticExpression in semantic-query 1.4.0. */
export const QueryArithmeticExpressionV1_4_0: Schema.Codec<QueryArithmeticExpressionV1_4_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Operator": Schema.suspend(() => ArithmeticOperatorKindV1_4_0) });

/** ArithmeticOperatorKind in semantic-query 1.4.0. */
export type ArithmeticOperatorKindV1_4_0 = (0) | (1) | (2) | (3);
/** Native schema for ArithmeticOperatorKind in semantic-query 1.4.0. */
export const ArithmeticOperatorKindV1_4_0: Schema.Codec<ArithmeticOperatorKindV1_4_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3)]);

/** QueryAnyValueExpression in semantic-query 1.4.0. */
export type QueryAnyValueExpressionV1_4_0 = { readonly "DefaultValueOverridesAncestors"?: boolean; };
/** Native schema for QueryAnyValueExpression in semantic-query 1.4.0. */
export const QueryAnyValueExpressionV1_4_0: Schema.Codec<QueryAnyValueExpressionV1_4_0> = closed({ "DefaultValueOverridesAncestors": Schema.optionalKey(Schema.Boolean) });

/** QueryDefaultValueExpression in semantic-query 1.4.0. */
export type QueryDefaultValueExpressionV1_4_0 = {  };
/** Native schema for QueryDefaultValueExpression in semantic-query 1.4.0. */
export const QueryDefaultValueExpressionV1_4_0: Schema.Codec<QueryDefaultValueExpressionV1_4_0> = closed({  });

/** QueryNowExpression in semantic-query 1.4.0. */
export type QueryNowExpressionV1_4_0 = {  };
/** Native schema for QueryNowExpression in semantic-query 1.4.0. */
export const QueryNowExpressionV1_4_0: Schema.Codec<QueryNowExpressionV1_4_0> = closed({  });

/** QueryDateAddExpression in semantic-query 1.4.0. */
export type QueryDateAddExpressionV1_4_0 = { readonly "Amount": number; readonly "TimeUnit": TimeUnitV1_4_0; readonly "Expression": QueryExpressionContainerV1_4_0; };
/** Native schema for QueryDateAddExpression in semantic-query 1.4.0. */
export const QueryDateAddExpressionV1_4_0: Schema.Codec<QueryDateAddExpressionV1_4_0> = closed({ "Amount": Schema.Finite, "TimeUnit": Schema.suspend(() => TimeUnitV1_4_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0) });

/** TimeUnit in semantic-query 1.4.0. */
export type TimeUnitV1_4_0 = (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7);
/** Native schema for TimeUnit in semantic-query 1.4.0. */
export const TimeUnitV1_4_0: Schema.Codec<TimeUnitV1_4_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7)]);

/** QueryDateSpanExpression in semantic-query 1.4.0. */
export type QueryDateSpanExpressionV1_4_0 = { readonly "TimeUnit": TimeUnitV1_4_0; readonly "Expression": QueryExpressionContainerV1_4_0; };
/** Native schema for QueryDateSpanExpression in semantic-query 1.4.0. */
export const QueryDateSpanExpressionV1_4_0: Schema.Codec<QueryDateSpanExpressionV1_4_0> = closed({ "TimeUnit": Schema.suspend(() => TimeUnitV1_4_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0) });

/** QueryLiteralExpression in semantic-query 1.4.0. */
export type QueryLiteralExpressionV1_4_0 = { readonly "Value": string; };
/** Native schema for QueryLiteralExpression in semantic-query 1.4.0. */
export const QueryLiteralExpressionV1_4_0: Schema.Codec<QueryLiteralExpressionV1_4_0> = closed({ "Value": Schema.String });

/** QueryExistsExpression in semantic-query 1.4.0. */
export type QueryExistsExpressionV1_4_0 = { readonly "Expression": QueryExpressionContainerV1_4_0; };
/** Native schema for QueryExistsExpression in semantic-query 1.4.0. */
export const QueryExistsExpressionV1_4_0: Schema.Codec<QueryExistsExpressionV1_4_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0) });

/** QueryStartsWithExpression in semantic-query 1.4.0. */
export type QueryStartsWithExpressionV1_4_0 = { readonly "Left": QueryExpressionContainerV1_4_0; readonly "Right": QueryExpressionContainerV1_4_0; };
/** Native schema for QueryStartsWithExpression in semantic-query 1.4.0. */
export const QueryStartsWithExpressionV1_4_0: Schema.Codec<QueryStartsWithExpressionV1_4_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_4_0) });

/** QueryContainsExpression in semantic-query 1.4.0. */
export type QueryContainsExpressionV1_4_0 = { readonly "Left": QueryExpressionContainerV1_4_0; readonly "Right": QueryExpressionContainerV1_4_0; };
/** Native schema for QueryContainsExpression in semantic-query 1.4.0. */
export const QueryContainsExpressionV1_4_0: Schema.Codec<QueryContainsExpressionV1_4_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_4_0) });

/** QueryNotExpression in semantic-query 1.4.0. */
export type QueryNotExpressionV1_4_0 = { readonly "Expression": QueryExpressionContainerV1_4_0; };
/** Native schema for QueryNotExpression in semantic-query 1.4.0. */
export const QueryNotExpressionV1_4_0: Schema.Codec<QueryNotExpressionV1_4_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0) });

/** QueryComparisonExpression in semantic-query 1.4.0. */
export type QueryComparisonExpressionV1_4_0 = { readonly "ComparisonKind": QueryComparisonKindV1_4_0; readonly "Left": QueryExpressionContainerV1_4_0; readonly "Right": QueryExpressionContainerV1_4_0; };
/** Native schema for QueryComparisonExpression in semantic-query 1.4.0. */
export const QueryComparisonExpressionV1_4_0: Schema.Codec<QueryComparisonExpressionV1_4_0> = closed({ "ComparisonKind": Schema.suspend(() => QueryComparisonKindV1_4_0), "Left": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_4_0) });

/** QueryComparisonKind in semantic-query 1.4.0. */
export type QueryComparisonKindV1_4_0 = (0) | (1) | (2) | (3) | (4);
/** Native schema for QueryComparisonKind in semantic-query 1.4.0. */
export const QueryComparisonKindV1_4_0: Schema.Codec<QueryComparisonKindV1_4_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4)]);

/** QueryBinaryExpression in semantic-query 1.4.0. */
export type QueryBinaryExpressionV1_4_0 = { readonly "Left": QueryExpressionContainerV1_4_0; readonly "Right": QueryExpressionContainerV1_4_0; };
/** Native schema for QueryBinaryExpression in semantic-query 1.4.0. */
export const QueryBinaryExpressionV1_4_0: Schema.Codec<QueryBinaryExpressionV1_4_0> = closed({ "Left": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Right": Schema.suspend(() => QueryExpressionContainerV1_4_0) });

/** QueryInExpression in semantic-query 1.4.0. */
export type QueryInExpressionV1_4_0 = { readonly "Expressions": ReadonlyArray<QueryExpressionContainerV1_4_0>; readonly "Values"?: ReadonlyArray<ReadonlyArray<QueryExpressionContainerV1_4_0>>; readonly "Table"?: QueryExpressionContainerV1_4_0; };
/** Native schema for QueryInExpression in semantic-query 1.4.0. */
export const QueryInExpressionV1_4_0: Schema.Codec<QueryInExpressionV1_4_0> = closed({ "Expressions": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)), "Values": Schema.optionalKey(Schema.Array(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)))), "Table": Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_4_0)) });

/** QueryBetweenExpression in semantic-query 1.4.0. */
export type QueryBetweenExpressionV1_4_0 = { readonly "Expression": QueryExpressionContainerV1_4_0; readonly "LowerBound": QueryExpressionContainerV1_4_0; readonly "UpperBound": QueryExpressionContainerV1_4_0; };
/** Native schema for QueryBetweenExpression in semantic-query 1.4.0. */
export const QueryBetweenExpressionV1_4_0: Schema.Codec<QueryBetweenExpressionV1_4_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0), "LowerBound": Schema.suspend(() => QueryExpressionContainerV1_4_0), "UpperBound": Schema.suspend(() => QueryExpressionContainerV1_4_0) });

/** QueryDiscretizeExpression in semantic-query 1.4.0. */
export type QueryDiscretizeExpressionV1_4_0 = { readonly "Expression": QueryExpressionContainerV1_4_0; readonly "Count": number; };
/** Native schema for QueryDiscretizeExpression in semantic-query 1.4.0. */
export const QueryDiscretizeExpressionV1_4_0: Schema.Codec<QueryDiscretizeExpressionV1_4_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Count": Schema.Finite });

/** QuerySubqueryExpression in semantic-query 1.4.0. */
export type QuerySubqueryExpressionV1_4_0 = { readonly "Query": QueryDefinitionV1_4_0; };
/** Native schema for QuerySubqueryExpression in semantic-query 1.4.0. */
export const QuerySubqueryExpressionV1_4_0: Schema.Codec<QuerySubqueryExpressionV1_4_0> = closed({ "Query": Schema.suspend(() => QueryDefinitionV1_4_0) });

/** QueryDefinition in semantic-query 1.4.0. */
export type QueryDefinitionV1_4_0 = { readonly "Version"?: 2; readonly "From": ReadonlyArray<EntitySourceV1_4_0>; readonly "Where"?: ReadonlyArray<QueryFilterV1_4_0>; readonly "OrderBy"?: ReadonlyArray<QuerySortClauseV1_4_0>; readonly "Select": ReadonlyArray<QueryExpressionContainerV1_4_0>; readonly "VisualShape"?: ReadonlyArray<AxisV1_4_0>; readonly "GroupBy"?: ReadonlyArray<QueryExpressionContainerV1_4_0>; readonly "Transform"?: ReadonlyArray<QueryTransformV1_4_0>; readonly "Top"?: number; };
/** Native schema for QueryDefinition in semantic-query 1.4.0. */
export const QueryDefinitionV1_4_0: Schema.Codec<QueryDefinitionV1_4_0> = closed({ "Version": Schema.optionalKey(Schema.Literal(2)), "From": Schema.Array(Schema.suspend(() => EntitySourceV1_4_0)), "Where": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryFilterV1_4_0))), "OrderBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => QuerySortClauseV1_4_0))), "Select": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)), "VisualShape": Schema.optionalKey(Schema.Array(Schema.suspend(() => AxisV1_4_0))), "GroupBy": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0))), "Transform": Schema.optionalKey(Schema.Array(Schema.suspend(() => QueryTransformV1_4_0))), "Top": Schema.optionalKey(Schema.Finite) });

/** QueryTransform in semantic-query 1.4.0. */
export type QueryTransformV1_4_0 = { readonly "Name": string; readonly "Algorithm": string; readonly "Input": QueryTransformInputV1_4_0; readonly "Output": QueryTransformOutputV1_4_0; };
/** Native schema for QueryTransform in semantic-query 1.4.0. */
export const QueryTransformV1_4_0: Schema.Codec<QueryTransformV1_4_0> = closed({ "Name": Schema.String, "Algorithm": Schema.String, "Input": Schema.suspend(() => QueryTransformInputV1_4_0), "Output": Schema.suspend(() => QueryTransformOutputV1_4_0) });

/** QueryTransformOutput in semantic-query 1.4.0. */
export type QueryTransformOutputV1_4_0 = { readonly "Table"?: QueryTransformTableV1_4_0; };
/** Native schema for QueryTransformOutput in semantic-query 1.4.0. */
export const QueryTransformOutputV1_4_0: Schema.Codec<QueryTransformOutputV1_4_0> = closed({ "Table": Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_4_0)) });

/** QueryTransformTable in semantic-query 1.4.0. */
export type QueryTransformTableV1_4_0 = { readonly "Name": string; readonly "Columns": ReadonlyArray<QueryTransformTableColumnV1_4_0>; };
/** Native schema for QueryTransformTable in semantic-query 1.4.0. */
export const QueryTransformTableV1_4_0: Schema.Codec<QueryTransformTableV1_4_0> = closed({ "Name": Schema.String, "Columns": Schema.Array(Schema.suspend(() => QueryTransformTableColumnV1_4_0)) });

/** QueryTransformTableColumn in semantic-query 1.4.0. */
export type QueryTransformTableColumnV1_4_0 = { readonly "Role"?: string; readonly "Expression": QueryExpressionContainerV1_4_0; };
/** Native schema for QueryTransformTableColumn in semantic-query 1.4.0. */
export const QueryTransformTableColumnV1_4_0: Schema.Codec<QueryTransformTableColumnV1_4_0> = closed({ "Role": Schema.optionalKey(Schema.String), "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0) });

/** QueryTransformInput in semantic-query 1.4.0. */
export type QueryTransformInputV1_4_0 = { readonly "Parameters": ReadonlyArray<QueryExpressionContainerV1_4_0>; readonly "Table"?: QueryTransformTableV1_4_0; };
/** Native schema for QueryTransformInput in semantic-query 1.4.0. */
export const QueryTransformInputV1_4_0: Schema.Codec<QueryTransformInputV1_4_0> = closed({ "Parameters": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)), "Table": Schema.optionalKey(Schema.suspend(() => QueryTransformTableV1_4_0)) });

/** Axis in semantic-query 1.4.0. */
export type AxisV1_4_0 = { readonly "Groups": ReadonlyArray<AxisGroupV1_4_0>; readonly "Name": string; };
/** Native schema for Axis in semantic-query 1.4.0. */
export const AxisV1_4_0: Schema.Codec<AxisV1_4_0> = closed({ "Groups": Schema.Array(Schema.suspend(() => AxisGroupV1_4_0)), "Name": Schema.String });

/** AxisGroup in semantic-query 1.4.0. */
export type AxisGroupV1_4_0 = { readonly "Keys": ReadonlyArray<QueryExpressionContainerV1_4_0>; readonly "Subtotal": boolean; };
/** Native schema for AxisGroup in semantic-query 1.4.0. */
export const AxisGroupV1_4_0: Schema.Codec<AxisGroupV1_4_0> = closed({ "Keys": Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)), "Subtotal": Schema.Boolean });

/** QuerySortClause in semantic-query 1.4.0. */
export type QuerySortClauseV1_4_0 = { readonly "Expression": QueryExpressionContainerV1_4_0; readonly "Direction": SortDirectionV1_4_0; };
/** Native schema for QuerySortClause in semantic-query 1.4.0. */
export const QuerySortClauseV1_4_0: Schema.Codec<QuerySortClauseV1_4_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Direction": Schema.suspend(() => SortDirectionV1_4_0) });

/** SortDirection in semantic-query 1.4.0. */
export type SortDirectionV1_4_0 = (1) | (2);
/** Native schema for SortDirection in semantic-query 1.4.0. */
export const SortDirectionV1_4_0: Schema.Codec<SortDirectionV1_4_0> = Schema.Union([Schema.Literal(1), Schema.Literal(2)]);

/** EntitySource in semantic-query 1.4.0. */
export type EntitySourceV1_4_0 = { readonly "Name": string; readonly "Entity"?: string; readonly "Schema"?: string; readonly "Expression"?: QueryExpressionContainerV1_4_0; readonly "Type"?: (0) | (1) | (2); };
/** Native schema for EntitySource in semantic-query 1.4.0. */
export const EntitySourceV1_4_0: Schema.Codec<EntitySourceV1_4_0> = closed({ "Name": Schema.String, "Entity": Schema.optionalKey(Schema.String), "Schema": Schema.optionalKey(Schema.String), "Expression": Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_4_0)), "Type": Schema.optionalKey(Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)])) });

/** QueryPropertyVariationSourceExpression in semantic-query 1.4.0. */
export type QueryPropertyVariationSourceExpressionV1_4_0 = { readonly "Expression": QueryExpressionContainerV1_4_0; readonly "Name": string; readonly "Property": string; };
/** Native schema for QueryPropertyVariationSourceExpression in semantic-query 1.4.0. */
export const QueryPropertyVariationSourceExpressionV1_4_0: Schema.Codec<QueryPropertyVariationSourceExpressionV1_4_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Name": Schema.String, "Property": Schema.String });

/** QueryHierarchyLevelExpression in semantic-query 1.4.0. */
export type QueryHierarchyLevelExpressionV1_4_0 = { readonly "Expression": QueryExpressionContainerV1_4_0; readonly "Level": string; };
/** Native schema for QueryHierarchyLevelExpression in semantic-query 1.4.0. */
export const QueryHierarchyLevelExpressionV1_4_0: Schema.Codec<QueryHierarchyLevelExpressionV1_4_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Level": Schema.String });

/** QueryHierarchyExpression in semantic-query 1.4.0. */
export type QueryHierarchyExpressionV1_4_0 = { readonly "Expression": QueryExpressionContainerV1_4_0; readonly "Hierarchy": string; };
/** Native schema for QueryHierarchyExpression in semantic-query 1.4.0. */
export const QueryHierarchyExpressionV1_4_0: Schema.Codec<QueryHierarchyExpressionV1_4_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Hierarchy": Schema.String });

/** QueryPercentileExpression in semantic-query 1.4.0. */
export type QueryPercentileExpressionV1_4_0 = { readonly "Expression": QueryExpressionContainerV1_4_0; readonly "K": number; readonly "Exclusive"?: boolean; };
/** Native schema for QueryPercentileExpression in semantic-query 1.4.0. */
export const QueryPercentileExpressionV1_4_0: Schema.Codec<QueryPercentileExpressionV1_4_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0), "K": Schema.Finite, "Exclusive": Schema.optionalKey(Schema.Boolean) });

/** QueryAggregationExpression in semantic-query 1.4.0. */
export type QueryAggregationExpressionV1_4_0 = { readonly "Function": QueryAggregateFunctionV1_4_0; readonly "Expression": QueryExpressionContainerV1_4_0; };
/** Native schema for QueryAggregationExpression in semantic-query 1.4.0. */
export const QueryAggregationExpressionV1_4_0: Schema.Codec<QueryAggregationExpressionV1_4_0> = closed({ "Function": Schema.suspend(() => QueryAggregateFunctionV1_4_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0) });

/** QueryAggregateFunction in semantic-query 1.4.0. */
export type QueryAggregateFunctionV1_4_0 = (0) | (1) | (2) | (3) | (4) | (5) | (6) | (7) | (8);
/** Native schema for QueryAggregateFunction in semantic-query 1.4.0. */
export const QueryAggregateFunctionV1_4_0: Schema.Codec<QueryAggregateFunctionV1_4_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2), Schema.Literal(3), Schema.Literal(4), Schema.Literal(5), Schema.Literal(6), Schema.Literal(7), Schema.Literal(8)]);

/** QueryMaxExpression in semantic-query 1.4.0. */
export type QueryMaxExpressionV1_4_0 = { readonly "IncludeAllTypes": IncludeAllTypesV1_4_0; readonly "Expression": QueryExpressionContainerV1_4_0; };
/** Native schema for QueryMaxExpression in semantic-query 1.4.0. */
export const QueryMaxExpressionV1_4_0: Schema.Codec<QueryMaxExpressionV1_4_0> = closed({ "IncludeAllTypes": Schema.suspend(() => IncludeAllTypesV1_4_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0) });

/** IncludeAllTypes in semantic-query 1.4.0. */
export type IncludeAllTypesV1_4_0 = (0) | (1) | (2);
/** Native schema for IncludeAllTypes in semantic-query 1.4.0. */
export const IncludeAllTypesV1_4_0: Schema.Codec<IncludeAllTypesV1_4_0> = Schema.Union([Schema.Literal(0), Schema.Literal(1), Schema.Literal(2)]);

/** QueryMinExpression in semantic-query 1.4.0. */
export type QueryMinExpressionV1_4_0 = { readonly "IncludeAllTypes": IncludeAllTypesV1_4_0; readonly "Expression": QueryExpressionContainerV1_4_0; };
/** Native schema for QueryMinExpression in semantic-query 1.4.0. */
export const QueryMinExpressionV1_4_0: Schema.Codec<QueryMinExpressionV1_4_0> = closed({ "IncludeAllTypes": Schema.suspend(() => IncludeAllTypesV1_4_0), "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0) });

/** QueryMeasureExpression in semantic-query 1.4.0. */
export type QueryMeasureExpressionV1_4_0 = { readonly "Expression": QueryExpressionContainerV1_4_0; readonly "Property": string; };
/** Native schema for QueryMeasureExpression in semantic-query 1.4.0. */
export const QueryMeasureExpressionV1_4_0: Schema.Codec<QueryMeasureExpressionV1_4_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Property": Schema.String });

/** QueryColumnExpression in semantic-query 1.4.0. */
export type QueryColumnExpressionV1_4_0 = { readonly "Expression": QueryExpressionContainerV1_4_0; readonly "Property": string; };
/** Native schema for QueryColumnExpression in semantic-query 1.4.0. */
export const QueryColumnExpressionV1_4_0: Schema.Codec<QueryColumnExpressionV1_4_0> = closed({ "Expression": Schema.suspend(() => QueryExpressionContainerV1_4_0), "Property": Schema.String });

/** QuerySourceRefExpression in semantic-query 1.4.0. */
export type QuerySourceRefExpressionV1_4_0 = { readonly "Source": string; };
/** Native schema for QuerySourceRefExpression in semantic-query 1.4.0. */
export const QuerySourceRefExpressionV1_4_0: Schema.Codec<QuerySourceRefExpressionV1_4_0> = closed({ "Source": Schema.String });

/** StandaloneSourceRefExpression in semantic-query 1.4.0. */
export type StandaloneSourceRefExpressionV1_4_0 = { readonly "Schema"?: string; readonly "Entity": string; };
/** Native schema for StandaloneSourceRefExpression in semantic-query 1.4.0. */
export const StandaloneSourceRefExpressionV1_4_0: Schema.Codec<StandaloneSourceRefExpressionV1_4_0> = closed({ "Schema": Schema.optionalKey(Schema.String), "Entity": Schema.String });

/** QueryCustomTotalMetadata in semantic-query 1.4.0. */
export type QueryCustomTotalMetadataV1_4_0 = { readonly "baseQueryName": string; };
/** Native schema for QueryCustomTotalMetadata in semantic-query 1.4.0. */
export const QueryCustomTotalMetadataV1_4_0: Schema.Codec<QueryCustomTotalMetadataV1_4_0> = closed({ "baseQueryName": Schema.String });

/** Named query definitions with the exact 1.4.0 recursive dependency graph. */
export const SemanticQueryDefinitionsV1_4_0 = {
  FilterDefinition: FilterDefinitionV1_4_0,
  QueryFilter: QueryFilterV1_4_0,
  QueryExpressionContainer: QueryExpressionContainerV1_4_0,
  QueryVisualTopNExpression: QueryVisualTopNExpressionV1_4_0,
  QueryNativeColumn: QueryNativeColumnV1_4_0,
  QueryExpressionContentCache: QueryExpressionContentCacheV1_4_0,
  QueryNativeMeasure: QueryNativeMeasureV1_4_0,
  QueryConditionalExpression: QueryConditionalExpressionV1_4_0,
  QueryCase: QueryCaseV1_4_0,
  QueryThemeDataColorExpression: QueryThemeDataColorExpressionV1_4_0,
  QuerySelectRefExpression: QuerySelectRefExpressionV1_4_0,
  QueryAllRolesRefExpression: QueryAllRolesRefExpressionV1_4_0,
  QuerySummaryValueRefExpression: QuerySummaryValueRefExpressionV1_4_0,
  QueryRoleRefExpression: QueryRoleRefExpressionV1_4_0,
  QueryResourcePackageItem: QueryResourcePackageItemV1_4_0,
  QueryGroupRefExpression: QueryGroupRefExpressionV1_4_0,
  QueryFillRuleExpression: QueryFillRuleExpressionV1_4_0,
  QueryNativeVisualCalc: QueryNativeVisualCalcV1_4_0,
  QuerySparklineDataExpression: QuerySparklineDataExpressionV1_4_0,
  QueryTransformOutputRoleRefExpression: QueryTransformOutputRoleRefExpressionV1_4_0,
  QueryTransformTableRefExpression: QueryTransformTableRefExpressionV1_4_0,
  QueryFilteredEvalExpression: QueryFilteredEvalExpressionV1_4_0,
  QueryScopedEvalExpression: QueryScopedEvalExpressionV1_4_0,
  QueryFloorExpression: QueryFloorExpressionV1_4_0,
  QueryArithmeticExpression: QueryArithmeticExpressionV1_4_0,
  ArithmeticOperatorKind: ArithmeticOperatorKindV1_4_0,
  QueryAnyValueExpression: QueryAnyValueExpressionV1_4_0,
  QueryDefaultValueExpression: QueryDefaultValueExpressionV1_4_0,
  QueryNowExpression: QueryNowExpressionV1_4_0,
  QueryDateAddExpression: QueryDateAddExpressionV1_4_0,
  TimeUnit: TimeUnitV1_4_0,
  QueryDateSpanExpression: QueryDateSpanExpressionV1_4_0,
  QueryLiteralExpression: QueryLiteralExpressionV1_4_0,
  QueryExistsExpression: QueryExistsExpressionV1_4_0,
  QueryStartsWithExpression: QueryStartsWithExpressionV1_4_0,
  QueryContainsExpression: QueryContainsExpressionV1_4_0,
  QueryNotExpression: QueryNotExpressionV1_4_0,
  QueryComparisonExpression: QueryComparisonExpressionV1_4_0,
  QueryComparisonKind: QueryComparisonKindV1_4_0,
  QueryBinaryExpression: QueryBinaryExpressionV1_4_0,
  QueryInExpression: QueryInExpressionV1_4_0,
  QueryBetweenExpression: QueryBetweenExpressionV1_4_0,
  QueryDiscretizeExpression: QueryDiscretizeExpressionV1_4_0,
  QuerySubqueryExpression: QuerySubqueryExpressionV1_4_0,
  QueryDefinition: QueryDefinitionV1_4_0,
  QueryTransform: QueryTransformV1_4_0,
  QueryTransformOutput: QueryTransformOutputV1_4_0,
  QueryTransformTable: QueryTransformTableV1_4_0,
  QueryTransformTableColumn: QueryTransformTableColumnV1_4_0,
  QueryTransformInput: QueryTransformInputV1_4_0,
  Axis: AxisV1_4_0,
  AxisGroup: AxisGroupV1_4_0,
  QuerySortClause: QuerySortClauseV1_4_0,
  SortDirection: SortDirectionV1_4_0,
  EntitySource: EntitySourceV1_4_0,
  QueryPropertyVariationSourceExpression: QueryPropertyVariationSourceExpressionV1_4_0,
  QueryHierarchyLevelExpression: QueryHierarchyLevelExpressionV1_4_0,
  QueryHierarchyExpression: QueryHierarchyExpressionV1_4_0,
  QueryPercentileExpression: QueryPercentileExpressionV1_4_0,
  QueryAggregationExpression: QueryAggregationExpressionV1_4_0,
  QueryAggregateFunction: QueryAggregateFunctionV1_4_0,
  QueryMaxExpression: QueryMaxExpressionV1_4_0,
  IncludeAllTypes: IncludeAllTypesV1_4_0,
  QueryMinExpression: QueryMinExpressionV1_4_0,
  QueryMeasureExpression: QueryMeasureExpressionV1_4_0,
  QueryColumnExpression: QueryColumnExpressionV1_4_0,
  QuerySourceRefExpression: QuerySourceRefExpressionV1_4_0,
  StandaloneSourceRefExpression: StandaloneSourceRefExpressionV1_4_0,
  QueryCustomTotalMetadata: QueryCustomTotalMetadataV1_4_0
} as const;

/** The source root declares definitions only, accepting any JSON value. */
export const SemanticQueryV1_4_0 = Schema.Json;
export type SemanticQueryV1_4_0 = typeof SemanticQueryV1_4_0.Type;

/** Explicit coverage of all five source semantic-query schemas. */
export const semanticQuerySchemaCoverage = [
  { source: "definition/semanticQuery/1.0.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/semanticQuery/1.0.0/schema.json", version: "1.0.0", variant: "standalone", schema: SemanticQueryV1_0_0 },
  { source: "definition/semanticQuery/1.1.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/semanticQuery/1.1.0/schema.json", version: "1.1.0", variant: "standalone", schema: SemanticQueryV1_1_0 },
  { source: "definition/semanticQuery/1.2.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/semanticQuery/1.2.0/schema.json", version: "1.2.0", variant: "standalone", schema: SemanticQueryV1_2_0 },
  { source: "definition/semanticQuery/1.3.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/semanticQuery/1.3.0/schema.json", version: "1.3.0", variant: "standalone", schema: SemanticQueryV1_3_0 },
  { source: "definition/semanticQuery/1.4.0/schema.json", schemaId: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/semanticQuery/1.4.0/schema.json", version: "1.4.0", variant: "standalone", schema: SemanticQueryV1_4_0 }
] as const;
