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
});

export const QueryFilter = Struct({
	Target: opt(Array(Expression)),
	Condition: Expression,
	Annotations: opt(Record(String, Unknown)),
});

export const QuerySortClause = Struct({
	Expression: Expression,
	Direction: Literals([1, 2]),
});

export const Axis = Struct({
	Name: String,
	Groups: Array(Struct({ Keys: Array(Expression), Subtotal: Boolean })),
});

export const QueryTransformTable = Struct({
	Name: String,
	Columns: Array(Struct({ Role: opt(String), Expression: Expression })),
});

export const QueryTransform = Struct({
	Name: String,
	Algorithm: String,
	Input: Struct({ Parameters: Array(Expression), Table: opt(QueryTransformTable) }),
	Output: Struct({ Table: opt(QueryTransformTable) }),
});

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
});

export const FilterDefinition = Struct({
	Version: opt(Literal(2)),
	From: Array(EntitySource),
	Where: Array(QueryFilter),
});
