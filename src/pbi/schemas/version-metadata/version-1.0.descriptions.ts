export const descriptions = {
	VersionMetadata: {
		description: "Defines version information about the report definition.",
		fields: {
			$schema: "Defines the schema to use for an item.",
			version: [
				"Defines the report definition version, format of version is major.minor.patch",
				"- major: >=1",
				"- minor: >=0",
				"- patch: always 0",
			].join("\n"),
		},
	},
};
