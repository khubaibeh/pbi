import {
	Array,
	Boolean,
	Literal,
	Literals,
	Number,
	Record,
	String,
	Struct,
	Unknown,
	optionalKey as opt,
	suspend,
} from "effect/Schema";

import { QueryExpressionContainer } from "./query-expression-container.ts";

export { QueryExpressionContainer };

const Expression = suspend(() => QueryExpressionContainer);

export const EntitySource = Struct({
	Name: String,
	Entity: opt(String),
	Schema: opt(String),
	Expression: opt(Expression),
	Type: opt(Literals([0, 1, 2])),
}).annotate({ identifier: "SemanticQuery.EntitySource" });

export const QueryFilter = Struct({
	Target: opt(Array(Expression)),
	Condition: Expression,
	Annotations: opt(Record(String, Unknown)),
}).annotate({ identifier: "SemanticQuery.QueryFilter" });

export const QuerySortClause = Struct({
	Expression: Expression,
	Direction: Literals([1, 2]),
}).annotate({ identifier: "SemanticQuery.QuerySortClause" });

const AxisGroup = Struct({
	Keys: Array(Expression),
	Subtotal: Boolean,
}).annotate({ identifier: "SemanticQuery.AxisGroup" });

export const Axis = Struct({
	Name: String,
	Groups: Array(AxisGroup),
}).annotate({ identifier: "SemanticQuery.Axis" });

const QueryTransformColumn = Struct({
	Role: opt(String),
	Expression,
}).annotate({ identifier: "SemanticQuery.QueryTransformColumn" });

export const QueryTransformTable = Struct({
	Name: String,
	Columns: Array(QueryTransformColumn),
}).annotate({ identifier: "SemanticQuery.QueryTransformTable" });

const QueryTransformInput = Struct({
	Parameters: Array(Expression),
	Table: opt(QueryTransformTable),
}).annotate({ identifier: "SemanticQuery.QueryTransformInput" });

const QueryTransformOutput = Struct({
	Table: opt(QueryTransformTable),
}).annotate({ identifier: "SemanticQuery.QueryTransformOutput" });

export const QueryTransform = Struct({
	Name: String,
	Algorithm: String,
	Input: QueryTransformInput,
	Output: QueryTransformOutput,
}).annotate({ identifier: "SemanticQuery.QueryTransform" });

export const QueryDefinition = Struct({
	Version: opt(Literal(2)),
	From: Array(EntitySource),
	Where: opt(Array(QueryFilter)),
	OrderBy: opt(Array(QuerySortClause)),
	Select: Array(Expression),
	VisualShape: opt(Array(Axis)),
	GroupBy: opt(Array(Expression)),
	Transform: opt(Array(QueryTransform)),
	Top: opt(Number),
}).annotate({ identifier: "SemanticQuery.QueryDefinition" });

export const FilterDefinition = Struct({
	Version: opt(Literal(2)),
	From: Array(EntitySource),
	Where: Array(QueryFilter),
}).annotate({ identifier: "SemanticQuery.FilterDefinition" });
