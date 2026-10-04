export const descriptions = {
	DataViewObjectDefinition: {},
	Selector: {
		fields: {
			data: "Scope is defined by data bound to the visual.",
			metadata: "Defines the scope to a specific field.",
			id: "User defined scope.",
			highlightMatching:
				"Describes how the Selector should behave towards Highlighted Values within the Scope matched by that Selector.",
			hierarchyMatching: [
				"Describes how the selector matches hierarchy values.",
				"This also changes how the query is generated for {@link DataViewScopeWildcard} selectors.",
				"Now those selectors can produce scopedValues for the level those match.",
				"",
				"There are two ways that we can match values in the hierarchy:",
				"1.",
			].join("\n"),
			order: [
				"Specifies a user-defined ordering of identical properties.",
				"Selector constructors should strive to monitonically increase this number across identical properties differing by id.",
			].join("\n"),
		},
	},
	DataRepetitionSelector: {
		fields: {
			scopeId: "Defines the intersection of scopes. For example - product color = red.",
			wildcard: [
				"Defines a match against all instances of a given DataView scope. Does not match Subtotals.",
				"Deprecated: - Use roles instead.",
			].join("\n"),
			roles: "Matches against all fields in a role.",
			total: "Matches against the totals and subtotals.",
			dataViewWildcard: "Matches all instances or all totals or both.",
		},
	},
	DataViewWildcard: {
		fields: {
			matchingOption: "Defines the matching option to use.",
		},
	},
};
