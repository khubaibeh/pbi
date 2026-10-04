import { Array, Literals, Number, Record, String, Struct, Unknown, optionalKey as opt } from "effect/Schema";

import { versions as semanticQuery } from "#pbi/schemas/semantic-query";
import { describe } from "#pbi/schemas/shared.ts";

import { descriptions as d } from "./version-1.5.descriptions.ts";

const { QueryExpressionContainer: Expression } = semanticQuery["1.4"];

const DataViewWildcard = describe(
	Struct({
		matchingOption: Literals([0, 1, 2]),
	}),
	d.DataViewWildcard,
).annotate({ identifier: "FormattingObjectDefinitions.DataViewWildcard" });

export const DataRepetitionSelector = describe(
	Struct({
		scopeId: opt(Expression),
		wildcard: opt(Array(Expression)),
		roles: opt(Array(String)),
		total: opt(Array(Expression)),
		dataViewWildcard: opt(DataViewWildcard),
	}),
	d.DataRepetitionSelector,
).annotate({ identifier: "FormattingObjectDefinitions.DataRepetitionSelector" });

export const Selector = describe(
	Struct({
		data: opt(Array(DataRepetitionSelector)),
		metadata: opt(String),
		id: opt(String),
		highlightMatching: opt(Literals([0, 1, 2])),
		hierarchyMatching: opt(Literals([0, 1])),
		order: opt(Number),
	}),
	d.Selector,
).annotate({ identifier: "FormattingObjectDefinitions.Selector" });

const DataViewObjectDefinition = describe(
	Struct({
		selector: opt(Selector),
		properties: Record(String, Unknown),
	}),
	d.DataViewObjectDefinition,
).annotate({ identifier: "FormattingObjectDefinitions.DataViewObjectDefinition" });

export const DataViewObjectDefinitions = Record(String, Array(DataViewObjectDefinition)).annotate({
	identifier: "FormattingObjectDefinitions.DataViewObjectDefinitions",
});
