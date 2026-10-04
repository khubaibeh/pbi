export const descriptions = {
	MobileState: {
		description: "Defines information about a visual container's mobile layout.",
		fields: {
			$schema: "Defines the schema to use for an item.",
			objects: 'Specifies the mobile specific formatting changes for different "objects" of a visual.',
			visualContainerObjects:
				'Specifies the mobile specific formatting changes for different "objects" of the visual container.',
			position: "Describes a mobile specific position for this visuals.",
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
};
