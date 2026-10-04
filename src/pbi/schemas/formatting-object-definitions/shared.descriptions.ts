export const descriptions = {
	DataViewObjectDefinition: {},
	Selector: {
		fields: {
			data: "Scope is defined by data bound to the visual.",
			metadata: "Defines the scope to a specific field.",
			id: "User defined scope.",
			highlightMatching:
				"Describes how the Selector should behave towards Highlighted Values within the Scope matched by that Selector.",
			order:
				"Specifies a user-defined ordering of identical properties.\nSelector constructors should strive to monitonically increase this number across identical properties differing by id.",
		},
	},
	DataRepetitionSelector: {
		fields: {
			scopeId: "Defines the intersection of scopes. For example - product color = red.",
			wildcard:
				"Defines a match against all instances of a given DataView scope. Does not match Subtotals.\nDeprecated: - Use roles instead.",
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
