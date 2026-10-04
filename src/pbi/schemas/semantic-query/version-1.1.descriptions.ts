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
};
