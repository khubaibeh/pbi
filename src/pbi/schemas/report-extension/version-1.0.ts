import { Array, Boolean, Literal, Literals, Number, String, Struct, optionalKey as opt } from "effect/Schema";

import { describe } from "#pbi/schemas/shared.ts";

import { descriptions as d } from "./version-1.0.descriptions.ts";

const PrimitiveTypeName = Literals([
	"Binary",
	"Boolean",
	"Date",
	"DateTime",
	"DateTimeZone",
	"Decimal",
	"Double",
	"Duration",
	"Integer",
	"Json",
	"None",
	"Null",
	"Text",
	"Time",
	"Variant",
]);

const MeasureReference = describe(
	Struct({
		schema: opt(String),
		entity: String,
		name: String,
	}),
	d.MeasureReference,
).annotate({ identifier: "ReportExtension.MeasureReference" });

const ExpressionReferences = describe(
	Struct({
		unrecognizedReferences: opt(Boolean),
		measures: opt(Array(MeasureReference)),
	}),
	d.ExpressionReferences,
).annotate({ identifier: "ReportExtension.ExpressionReferences" });

const MeasureExtensionAnnotation = describe(
	Struct({
		name: String,
		value: String,
	}),
	d.MeasureExtensionAnnotation,
).annotate({ identifier: "ReportExtension.MeasureExtensionAnnotation" });

const ReportExtensionMeasureTemplate = describe(
	Struct({
		daxTemplateName: String,
		version: Number,
	}),
	d.ReportExtensionMeasureTemplate,
).annotate({ identifier: "ReportExtension.ReportExtensionMeasureTemplate" });

const ReportExtensionMeasure = describe(
	Struct({
		name: String,
		dataType: PrimitiveTypeName,
		dataCategory: opt(String),
		expression: String,
		hidden: opt(Boolean),
		formatString: opt(String),
		measureTemplate: opt(ReportExtensionMeasureTemplate),
		description: opt(String),
		displayFolder: opt(String),
		annotations: opt(Array(MeasureExtensionAnnotation)),
		references: opt(ExpressionReferences),
	}),
	d.ReportExtensionMeasure,
).annotate({ identifier: "ReportExtension.ReportExtensionMeasure" });

const ReportExtensionEntity = describe(
	Struct({
		name: String,
		measures: opt(Array(ReportExtensionMeasure)),
	}),
	d.ReportExtensionEntity,
).annotate({ identifier: "ReportExtension.ReportExtensionEntity" });

export const ReportExtension = describe(
	Struct({
		name: String,
		entities: opt(Array(ReportExtensionEntity)),
		$schema: Literal(
			"https://developer.microsoft.com/json-schemas/fabric/item/report/definition/reportExtension/1.0.0/schema.json",
		),
	}),
	d.ReportExtension,
).annotate({ identifier: "ReportExtension.ReportExtension" });
