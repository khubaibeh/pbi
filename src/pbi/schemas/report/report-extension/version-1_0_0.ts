import { Schema } from "effect";
import { Annotation, closed } from "../shared.js";

export type ReportExtensionEntity = {
  readonly name: string;
  readonly measures?: ReadonlyArray<ReportExtensionMeasure>;
};

export const ReportExtensionEntity: Schema.Codec<ReportExtensionEntity> = closed({
  name: Schema.String,
  measures: Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportExtensionMeasure))),
});

export type ReportExtensionMeasure = {
  readonly name: string;
  readonly dataType: PrimitiveTypeName;
  readonly dataCategory?: string;
  readonly expression: string;
  readonly hidden?: boolean;
  readonly formatString?: string;
  readonly measureTemplate?: ReportExtensionMeasureTemplate;
  readonly description?: string;
  readonly displayFolder?: string;
  readonly annotations?: ReadonlyArray<Annotation>;
  readonly references?: ExpressionReferences;
};

export const ReportExtensionMeasure: Schema.Codec<ReportExtensionMeasure> = closed({
  name: Schema.String,
  dataType: Schema.suspend(() => PrimitiveTypeName),
  dataCategory: Schema.optionalKey(Schema.String),
  expression: Schema.String,
  hidden: Schema.optionalKey(Schema.Boolean),
  formatString: Schema.optionalKey(Schema.String),
  measureTemplate: Schema.optionalKey(Schema.suspend(() => ReportExtensionMeasureTemplate)),
  description: Schema.optionalKey(Schema.String),
  displayFolder: Schema.optionalKey(Schema.String),
  annotations: Schema.optionalKey(Schema.Array(Schema.suspend(() => Annotation))),
  references: Schema.optionalKey(Schema.suspend(() => ExpressionReferences)),
});

export type PrimitiveTypeName =
  | "Binary"
  | "Boolean"
  | "Date"
  | "DateTime"
  | "DateTimeZone"
  | "Decimal"
  | "Double"
  | "Duration"
  | "Integer"
  | "Json"
  | "None"
  | "Null"
  | "Text"
  | "Time"
  | "Variant";

export const PrimitiveTypeName: Schema.Codec<PrimitiveTypeName> = Schema.Literals([
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

export type ReportExtensionMeasureTemplate = {
  readonly daxTemplateName: string;
  readonly version: number;
};

export const ReportExtensionMeasureTemplate: Schema.Codec<ReportExtensionMeasureTemplate> = closed({
  daxTemplateName: Schema.String,
  version: Schema.Finite,
});

export type ExpressionReferences = {
  readonly unrecognizedReferences?: boolean;
  readonly measures?: ReadonlyArray<MeasureReference>;
};

export const ExpressionReferences: Schema.Codec<ExpressionReferences> = closed({
  unrecognizedReferences: Schema.optionalKey(Schema.Boolean),
  measures: Schema.optionalKey(Schema.Array(Schema.suspend(() => MeasureReference))),
});

export type MeasureReference = {
  readonly schema?: string;
  readonly entity: string;
  readonly name: string;
};

export const MeasureReference: Schema.Codec<MeasureReference> = closed({
  schema: Schema.optionalKey(Schema.String),
  entity: Schema.String,
  name: Schema.String,
});

export const ReportExtensionDefinitions = {
  ReportExtensionEntity: ReportExtensionEntity,
  ReportExtensionMeasure: ReportExtensionMeasure,
  PrimitiveTypeName: PrimitiveTypeName,
  ReportExtensionMeasureTemplate: ReportExtensionMeasureTemplate,
  MeasureExtensionAnnotation: Annotation,
  ExpressionReferences: ExpressionReferences,
  MeasureReference: MeasureReference,
} as const;

export type Extension = {
  readonly name: string;
  readonly entities?: ReadonlyArray<ReportExtensionEntity>;
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/reportExtension/1.0.0/schema.json";
};

export const Extension: Schema.Codec<Extension> = closed({
  name: Schema.String,
  entities: Schema.optionalKey(Schema.Array(Schema.suspend(() => ReportExtensionEntity))),
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/reportExtension/1.0.0/schema.json",
  ),
});

export {
  ReportExtensionEntity as ReportExtensionReportExtensionEntityV1_0_0,
  ReportExtensionMeasure as ReportExtensionReportExtensionMeasureV1_0_0,
  PrimitiveTypeName as ReportExtensionPrimitiveTypeNameV1_0_0,
  ReportExtensionMeasureTemplate as ReportExtensionReportExtensionMeasureTemplateV1_0_0,
  ExpressionReferences as ReportExtensionExpressionReferencesV1_0_0,
  MeasureReference as ReportExtensionMeasureReferenceV1_0_0,
  ReportExtensionDefinitions as ReportExtensionDefinitionsV1_0_0,
  Extension as ReportExtensionV1_0_0,
};

export { Annotation as ReportExtensionMeasureExtensionAnnotationV1_0_0 } from "../shared.js";
