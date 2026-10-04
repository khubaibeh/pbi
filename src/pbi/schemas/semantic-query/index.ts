import * as v10 from "./version-1.0.ts";
import * as v11 from "./version-1.1.ts";
import * as v12 from "./version-1.2.ts";
import * as v13 from "./version-1.3.ts";
import * as v14 from "./version-1.4.ts";

export const versions = {
	"1.4": {
		QueryDefinition: v14.QueryDefinition,
		FilterDefinition: v14.FilterDefinition,
		QueryExpressionContainer: v14.QueryExpressionContainer,
		QuerySortClause: v14.QuerySortClause,
	},
	"1.3": {
		QueryDefinition: v13.QueryDefinition,
		FilterDefinition: v13.FilterDefinition,
		QueryExpressionContainer: v13.QueryExpressionContainer,
		QuerySortClause: v13.QuerySortClause,
	},
	"1.2": {
		QueryDefinition: v12.QueryDefinition,
		FilterDefinition: v12.FilterDefinition,
		QueryExpressionContainer: v12.QueryExpressionContainer,
		QuerySortClause: v12.QuerySortClause,
	},
	"1.1": {
		QueryDefinition: v11.QueryDefinition,
		FilterDefinition: v11.FilterDefinition,
		QueryExpressionContainer: v11.QueryExpressionContainer,
		QuerySortClause: v11.QuerySortClause,
	},
	"1.0": {
		QueryDefinition: v10.QueryDefinition,
		FilterDefinition: v10.FilterDefinition,
		QueryExpressionContainer: v10.QueryExpressionContainer,
		QuerySortClause: v10.QuerySortClause,
	},
} as const;

export const latest = versions["1.4"];
