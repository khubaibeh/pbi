import { descriptions as base } from "./shared.descriptions.ts";

export const descriptions = {
	...base,
	QueryExpressionContainer: {
		...base.QueryExpressionContainer,
		description:
			"Holds a single expression and associated metadata. \nName, NativeReferenceName, and Annotations may be specified for any expression.\nEach other property represents a specific type of expression and exactly one of these other properties must be specified.",
	},
	QueryConditionalExpression: {
		...base.QueryConditionalExpression,
		fields: {
			...base.QueryConditionalExpression.fields,
			Cases:
				"Cases are considered in the specified order. \nThe result is the Case.Value of the first case where Case.Condition evaluates to true.\nIf no Case.Condition evaluates to true, the result is the DefaultValue, if DefaultValue is specified.\nOtherwise, the result is null.",
		},
	},
	QueryInExpression: {
		...base.QueryInExpression,
		fields: {
			...base.QueryInExpression.fields,
			Table:
				"An expression, which must be a SourceRef, holding a table to compare against the Expressions. \nThe number of columns in the table must match the number of Expressions.  \nEach row in the table is considered a tuple to be matched against the expressions.",
		},
	},
};
