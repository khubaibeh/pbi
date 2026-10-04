export const descriptions = {
	VisualContainer: {
		description: "Defines a single visual or visual group on a report page.",
		fields: {
			$schema: "Defines the schema to use for an item.",
			name: "A unique identifier for the visual across the whole page.",
			position: [
				"Defines where the visual is position on the page and how big it should be, along",
				"with z-index (stacking) for that visual.",
				"Also defines the order in which visuals are navigated when using just keyboard (tabOrder).",
			].join("\n"),
			visual: "Defines a chart to be shown inside of this container.",
			visualGroup: "Defines that this container should be used as a grouping container.",
			parentGroupName: "Name of the parent group (visual container), if it is part of one.",
			filterConfig:
				"Filters that apply to all this visual - on top of the filters defined for the report and page.",
			isHidden: "Marks the visual as hidden.",
			annotations: "Additional information to be saved (for example comments, readme, etc) for this visual.",
			howCreated: "Source of creation of this visual.",
		},
	},
	VisualContainerPosition: {
		fields: {
			x: [
				"Horizontal position of the left edge of the visual.",
				"Should be between 0 and width of the containing page.",
			].join("\n"),
			y: [
				"Vertical position of the top edge of the visual.",
				"Should be between 0 and height of the containing page.",
			].join("\n"),
			z: [
				"Defines the stacking order for the visual.",
				"Higher z-index visuals are shown on top of the lower ones.",
			].join("\n"),
			height: [
				"Height of the visual.",
				"y + height should be less than the height of the containing page.",
			].join("\n"),
			width: ["Width of the visual.", "x + width should be less than the width of the containing page."].join(
				"\n",
			),
			tabOrder: [
				"Defines the selection order for this visual when using keyboard (tab key)",
				"to navigate the visuals on the containing page.",
			].join("\n"),
		},
	},
	VisualGroupConfig: {
		fields: {
			displayName: "Display name for the group.",
			groupMode: "Defines how the visuals are organized inside this group.",
			objects: 'Specifies the formatting to be set for different "objects" of this group.',
		},
	},
	VisualGroupFormattingObjects: {},
	"VisualGroupFormattingObjects.*": {
		fields: {
			selector: [
				"Defines the scope at which to apply the formatting for this object.",
				"Can also define rules for matching highlighted values and how multiple definitions for the same property should be ordered.",
			].join("\n"),
			properties: "Describes the properties of the object to apply formatting changes to.",
		},
	},
	VisualGroupGeneralFormattingObjects: {},
	Annotation: { fields: { name: "Unique name for the annotation.", value: "A value for this annotation." } },
};
