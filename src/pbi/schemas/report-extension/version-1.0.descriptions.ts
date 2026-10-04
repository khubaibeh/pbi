export const descriptions = {
	ReportExtension: {
		description: "Defines a report extension and its references.",
		fields: {
			name: "Name of the extension.",
			entities: "Entities in the semantic model that are extended.",
			$schema: "Defines the schema to use for an item.",
		},
	},
	ReportExtensionEntity: {
		fields: {
			name: "Name of the extension entity - must match a name in the semantic model.",
			measures: "Additional measures to include on this entity.",
		},
	},
	ReportExtensionMeasure: {
		fields: {
			name: "Name of the extension measure - must be unique across the semantic model and other extension measures.",
			dataType: "Data type for the measure.",
			dataCategory: "Extended data category for the measure.",
			expression: "DAX expression for this measure.",
			hidden: "Sets the measure to be hidden.",
			formatString: "Format string for this measure in VBA format.",
			measureTemplate: "Template information that was used to create this measure.",
			description: "A description for the measure.",
			displayFolder: "Display folder for the measure.",
			annotations: "Additional annotations to include for this measure.",
			references: "References to other model measures and extensions used in the DAX of this measure.",
		},
	},
	ReportExtensionMeasureTemplate: {
		fields: {
			daxTemplateName: "Name of the template.",
			version: "Version of the template used.",
		},
	},
	MeasureExtensionAnnotation: {
		fields: {
			name: "Unique name for this annotation.",
			value: "Value for the annotation.",
		},
	},
	ExpressionReferences: {
		fields: {
			unrecognizedReferences: "False if all references are recognized.",
			measures: "References to model measures and other extensions.",
		},
	},
	MeasureReference: {
		fields: {
			schema:
				"Name of the schema - leave empty if using model measures. Use name of extension if using other measures from the extension.",
			entity: "Entity name of the measure.",
			name: "Name of the measure.",
		},
	},
};
