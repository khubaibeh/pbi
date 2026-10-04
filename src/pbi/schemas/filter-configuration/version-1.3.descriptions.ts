export const descriptions = {
	FilterConfig: {
		description: "Defines the configuration of filters.",
		fields: {
			filters: "Defines the definitions and metadata for the filters.",
			filterSortOrder: [
				"Defines how the filters sorted - by name or custom sorting",
				"If custom sorting, then ordinal property of every filter is used as the sort order,",
				"filters where ordinal is skipped will be shown at the end; ordering will fallback to display name of the field.",
			].join("\n"),
		},
	},
	FilterContainer: {
		fields: {
			name: "A unique name (across the whole report definition) defined for this filter.",
			displayName: [
				"An alternate name to use when displaying this filter - by default the display name of the field will be used, if there is no field or display name,",
				"then restatement of the filter will be shown. Only applies to certain filter types.",
			].join("\n"),
			ordinal:
				"Defines the ordering of this filter w.r.t. other filters - only applies when Custom sort order is set.",
			field: "Defines the field from your data that is filtered.",
			type: "The type of a filter.",
			filter: "Defines the actual filter definition - it is dependent on the type of filter.",
			restatement:
				"A custom restatement to show for the filter - only applies to Passthrough filter type. For all other filters, a restatement is generated based on the filter definition.",
			howCreated: "Specifies how this filter was first created.",
			isHiddenInViewMode: "Defines whether to hide this filter when viewing the report.",
			isLockedInViewMode: "Defines whether the filter value can be changed when viewing the report.",
			objects: 'Formatting for different "objects" of a filter card',
		},
	},
	FilterContainerFormattingObjects: {},
	"FilterContainerFormattingObjects.general": {
		fields: {
			selector: [
				"Defines the scope at which to apply the formatting for this object.",
				"Can also define rules for matching highlighted values and how multiple definitions for the same property should be ordered.",
			].join("\n"),
			properties: "Describes the properties of the object to apply formatting changes to.",
		},
	},
	FilterContainerFormattingObjectsProperties: {},
};
