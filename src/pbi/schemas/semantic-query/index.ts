import * as v14 from "./version-1.4.ts";

export const versions = {
	"1.4": {
		QueryDefinition: v14.QueryDefinition,
		FilterDefinition: v14.FilterDefinition,
		QueryExpressionContainer: v14.QueryExpressionContainer,
		QuerySortClause: v14.QuerySortClause,
	},
} as const;

export const latest = versions["1.4"];
