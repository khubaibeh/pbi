import { descriptions as base } from "./shared.descriptions.ts";

export const descriptions = {
	...base,
	QueryExpressionContainer: {
		...base.QueryExpressionContainer,
		fields: {
			...base.QueryExpressionContainer.fields,
			VisualTopN:
				"The VisualTopN element represents a type of filter that limits the amount of data points returned in a query",
		},
	},
	QueryVisualTopNExpression: {},
	QueryNativeVisualCalc: {
		...base.QueryNativeVisualCalc,
		fields: {
			...base.QueryNativeVisualCalc.fields,
			DataType: "The data type of visual calculation",
		},
	},
	QuerySparklineDataExpression: {
		...base.QuerySparklineDataExpression,
		fields: {
			...base.QuerySparklineDataExpression.fields,
			ApplyCalculationGroupTo:
				'The granularity of the sparkline measure in the calculation group evaluation. This determines whether the\ncalculation group should apply to the entire sparkline or to each value of the sparkline. Defaults to entire\nsparkline ("Sparkline")',
		},
	},
	SortDirection: {},
};
