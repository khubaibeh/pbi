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

import { describe } from "#pbi/schemas/shared.ts";

import { QueryExpressionContainer } from "./query-expression-container-1.0.ts";
import { descriptions as d } from "./version-1.0.descriptions.ts";

export { QueryExpressionContainer };

const Expression = suspend(() => QueryExpressionContainer);

const EntitySource = describe(
	Struct({
		Name: String,
		Entity: opt(String),
		Schema: opt(String),
		Expression: opt(Expression),
		Type: opt(Literals([0, 1, 2])),
	}),
	d.EntitySource,
).annotate({ identifier: "SemanticQuery.EntitySource" });

const QueryFilter = describe(
	Struct({
		Target: opt(Array(Expression)),
		Condition: Expression,
		Annotations: opt(Record(String, Unknown)),
	}),
	d.QueryFilter,
).annotate({ identifier: "SemanticQuery.QueryFilter" });

export const QuerySortClause = describe(
	Struct({
		Expression: Expression,
		Direction: Number,
	}),
	d.QuerySortClause,
).annotate({ identifier: "SemanticQuery.QuerySortClause" });

const AxisGroup = describe(
	Struct({
		Keys: Array(Expression),
		Subtotal: Boolean,
	}),
	d.AxisGroup,
).annotate({ identifier: "SemanticQuery.AxisGroup" });

const Axis = describe(
	Struct({
		Name: String,
		Groups: Array(AxisGroup),
	}),
	d.Axis,
).annotate({ identifier: "SemanticQuery.Axis" });

const QueryTransformColumn = describe(
	Struct({
		Role: opt(String),
		Expression,
	}),
	d.QueryTransformTableColumn,
).annotate({ identifier: "SemanticQuery.QueryTransformColumn" });

const QueryTransformTable = describe(
	Struct({
		Name: String,
		Columns: Array(QueryTransformColumn),
	}),
	d.QueryTransformTable,
).annotate({ identifier: "SemanticQuery.QueryTransformTable" });

const QueryTransformInput = describe(
	Struct({
		Parameters: Array(Expression),
		Table: opt(QueryTransformTable),
	}),
	d.QueryTransformInput,
).annotate({ identifier: "SemanticQuery.QueryTransformInput" });

const QueryTransformOutput = describe(
	Struct({
		Table: opt(QueryTransformTable),
	}),
	d.QueryTransformOutput,
).annotate({ identifier: "SemanticQuery.QueryTransformOutput" });

const QueryTransform = describe(
	Struct({
		Name: String,
		Algorithm: String,
		Input: QueryTransformInput,
		Output: QueryTransformOutput,
	}),
	d.QueryTransform,
).annotate({ identifier: "SemanticQuery.QueryTransform" });

export const QueryDefinition = describe(
	Struct({
		Version: opt(Literal(2)),
		From: Array(EntitySource),
		Where: opt(Array(QueryFilter)),
		OrderBy: opt(Array(QuerySortClause)),
		Select: Array(Expression),
		VisualShape: opt(Array(Axis)),
		GroupBy: opt(Array(Expression)),
		Transform: opt(Array(QueryTransform)),
		Top: opt(Number),
	}),
	d.QueryDefinition,
).annotate({ identifier: "SemanticQuery.QueryDefinition" });

export const FilterDefinition = describe(
	Struct({
		Version: opt(Literal(2)),
		From: Array(EntitySource),
		Where: Array(QueryFilter),
	}),
	d.FilterDefinition,
).annotate({ identifier: "SemanticQuery.FilterDefinition" });
