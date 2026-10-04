export const descriptions = {
	Visual: {
		description: "Defines the configuration of visuals.",
		fields: {
			visualType: "Name of the visual.",
			autoSelectVisualType:
				"VisualType is automatically picked by the system based on the data used in the visual.",
			query: "Defines the data to be plotted in the visual.",
			expansionStates: "Defines the specific data points that are expanded.",
			objects: 'Specifies the formatting to be set for different "objects" of the visual.',
			visualContainerObjects: 'Specifies the formatting to be set for different "objects" of the container.',
			syncGroup: [
				"Defines the sync group that this visual is part of.",
				"Only applies to slicer visuals.",
			].join("\n"),
			drillFilterOtherVisuals: [
				"When another visual is drilled, if visual interactions are enabled between the two visuals,",
				"then this property specifies if that drill should be applied as a filter to this visual.",
				"Overrides the default setting of the report.",
			].join("\n"),
		},
	},
	Query: {
		fields: {
			sortDefinition: "Defines how the data should be sorted in a visual",
			options: "Specific options to apply when running the query. Applies to certain visuals only.",
			queryState: "Describes how the data should be arranged and used in the visual.",
			isDrillDisabled: "Should drill be allowed in the visual - only used by specific custom visuals.",
		},
	},
	SortDefinition: {
		fields: {
			sort: "Defines the fields the data is sorted by.",
			isDefaultSort: [
				"If the sort if explicitly set by user, then this will be false, Power BI can update the sort to match",
				"the visual in this case.",
			].join("\n"),
		},
	},
	QuerySort: {
		fields: { field: "Field to sort by", direction: "Direction of sort - ascending or descending." },
	},
	VisualQueryOptions: {
		fields: {
			allowBinnedLineSample: "A better sampling for line charts.",
			allowOverlappingPointsSample: "A better sampling for scatter charts.",
		},
	},
	ProjectionState: {
		fields: {
			showAll: "Show all values for all fields in this projection.",
			projections: "Defines the fields and their properties for this visual role.",
			fieldParameters: "Defines any field parameters used as projections.",
		},
	},
	RoleProjection: {
		fields: {
			field: "The data field from the semantic model.",
			queryRef: "A unique name for this field - unique per visual.",
			nativeQueryRef:
				"Native reference name for this field - unique per visual, used for referencing fields in visual calculations.",
			displayName: "An override for display name - by default it is the field name in the semantic model.",
			format: "format string scoped to the visual.",
			active: "Is the field currently active in the visual - used as part of drill operations.",
			hidden: "Is the field visible in the visual - used as part of visual calculations.",
		},
	},
	RoleFieldParameter: {
		fields: {
			parameterExpr: [
				"Defines the parameter field.",
				"This contains the DAX expression (in semantic model) that defines what fields will be projected in the field well from the parameter.",
			].join("\n"),
			index: [
				"Index at which parameter fields begin in the projections list.",
				"This represents the position in the field well where the field parameter is located.",
				"A field well can contain either projections or field parameters.",
				"When this index is changed, it affects where the field parameter's projected fields will be inserted",
				"in the projections list.",
			].join("\n"),
			length: [
				"Number of projections that will be populated starting from the field parameter's index position.",
				"This indicates how many fields the parameter will project into when evaluated.",
				"",
				"This value will be re-computed when the parameter is evaluated, which is when the visual is rendered.",
			].join("\n"),
			sortDirection: [
				"If the sort direction is set, the visual is sorted by this field parameter.",
				"The implication of a visual being sorted by a field parameter is as follows:",
				"- If none of the newly projected fields exist in the sort list, apply the parameter sort direction to the first projected field and add it to the end of the sort list.",
				"- If all the projected fields in the sort list have the opposite sort direction as the parameter's sort direction, flip the parameter's sort direction.",
			].join("\n"),
		},
	},
	ExpansionState: {
		fields: {
			roles: "Visual roles (projection names) that have individual points expanded.",
			root: "Defines the specific values that are expanded for each field in the hierarchy",
			levels: "Describes the fields participating in the expansion",
		},
	},
	RootExpansionState: {
		fields: {
			identityValues: [
				"Describes the instances that are expanded.",
				"Optional for the root expansion state.",
				"Must by Literal expressions.",
			].join("\n"),
			isToggled: "True if the value is expanded.",
			children: "Child values in the hierarchy that are expanded",
		},
	},
	NodeExpansionState: {
		fields: {
			identityValues: ["Describes the instances that are expanded.", "Must by Literal expressions."].join(
				"\n",
			),
			isToggled: "True if the value is expanded.",
			children: "Child values in the hierarchy that are expanded",
		},
	},
	LevelExpansionState: {
		fields: {
			identityKeys: "Describes the fields in the visual.",
			isCollapsed:
				"True if the entire field isn't expanded (i.e. false if only specific instances are expanded).",
			queryRefs: "Which fields in the query does this relate to - must match a queryRef in the query.",
			isPinned: "Is the field pinned.",
			isLocked: "Is the field locked (used for decomposition tree)",
			AIInformation: "More information about how the expansion is done (used for decomposition tree)",
		},
	},
	AILevelInformation: { fields: { method: "Type of expansion.", disabled: "Is the level disabled." } },
	VisualContainerFormattingObjects: {},
	"VisualContainerFormattingObjects.*": {
		fields: {
			selector: [
				"Defines the scope at which to apply the formatting for this object.",
				"Can also define rules for matching highlighted values and how multiple definitions for the same property should be ordered.",
			].join("\n"),
			properties: "Describes the properties of the object to apply formatting changes to.",
		},
	},
	Title: {},
	SubTitle: {},
	Divider: {},
	Spacing: {},
	Background: {},
	Padding: {},
	LockAspect: {},
	VisualContainerGeneralFormattingObjects: {},
	Border: {},
	DropShadow: {},
	VisualLink: {},
	VisualTooltip: {},
	StylePreset: {},
	VisualHeader: {},
	VisualHeaderTooltip: {},
	VisualSyncGroup: {
		fields: {
			groupName: "Unique name for the sync group.",
			fieldChanges: "Should synced visuals update when fields change.",
			filterChanges: "Should synced visuals update when filters change.",
		},
	},
};
