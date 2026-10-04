import {
	Array,
	type Codec,
	Literals,
	Number,
	Record,
	String,
	Struct,
	Unknown,
	optionalKey as opt,
} from "effect/Schema";

import { describe } from "#pbi/schemas/shared.ts";

import { descriptions as base } from "./shared.descriptions.ts";
import { descriptions as d } from "./version-1.5.descriptions.ts";

const DataViewWildcard = describe(
	Struct({ matchingOption: Literals([0, 1, 2]) }),
	base.DataViewWildcard,
).annotate({ identifier: "FormattingObjectDefinitions.DataViewWildcard" });

export function makeSchemas(Expression: Codec<unknown>, options: { readonly hierarchyMatching: boolean }) {
	const DataRepetitionSelector = describe(
		Struct({
			scopeId: opt(Expression),
			wildcard: opt(Array(Expression)),
			roles: opt(Array(String)),
			total: opt(Array(Expression)),
			dataViewWildcard: opt(DataViewWildcard),
		}),
		base.DataRepetitionSelector,
	).annotate({ identifier: "FormattingObjectDefinitions.DataRepetitionSelector" });

	const selectorFields = {
		data: opt(Array(DataRepetitionSelector)),
		metadata: opt(String),
		id: opt(String),
		highlightMatching: opt(Literals([0, 1, 2])),
	};
	const Selector = (
		options.hierarchyMatching
			? describe(
					Struct({ ...selectorFields, hierarchyMatching: opt(Literals([0, 1])), order: opt(Number) }),
					d.Selector,
				)
			: describe(Struct({ ...selectorFields, order: opt(Number) }), base.Selector)
	).annotate({ identifier: "FormattingObjectDefinitions.Selector" });

	const DataViewObjectDefinition = describe(
		Struct({ selector: opt(Selector), properties: Record(String, Unknown) }),
		base.DataViewObjectDefinition,
	).annotate({ identifier: "FormattingObjectDefinitions.DataViewObjectDefinition" });

	const DataViewObjectDefinitions = Record(String, Array(DataViewObjectDefinition)).annotate({
		identifier: "FormattingObjectDefinitions.DataViewObjectDefinitions",
	});

	return { DataViewObjectDefinitions, Selector, DataRepetitionSelector };
}
