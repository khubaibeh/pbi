import { Schema } from "effect";
import { closed } from "../shared.js";

export type ReportExtensionReportExtensionEntity = {
  readonly name: string;
  readonly measures?: ReadonlyArray<ReportExtensionReportExtensionMeasure>;
};

export const ReportExtensionReportExtensionEntity: Schema.Codec<ReportExtensionReportExtensionEntity> =
  closed({
    name: Schema.String,
    measures: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => ReportExtensionReportExtensionMeasure),
      ),
    ),
  });

export type ReportExtensionReportExtensionMeasure = {
  readonly name: string;
  readonly dataType: ReportExtensionPrimitiveTypeName;
  readonly dataCategory?: string;
  readonly expression: string;
  readonly hidden?: boolean;
  readonly formatString?: string;
  readonly measureTemplate?: ReportExtensionReportExtensionMeasureTemplate;
  readonly description?: string;
  readonly displayFolder?: string;
  readonly annotations?: ReadonlyArray<ReportExtensionMeasureExtensionAnnotation>;
  readonly references?: ReportExtensionExpressionReferences;
};

export const ReportExtensionReportExtensionMeasure: Schema.Codec<ReportExtensionReportExtensionMeasure> =
  closed({
    name: Schema.String,
    dataType: Schema.suspend(() => ReportExtensionPrimitiveTypeName),
    dataCategory: Schema.optionalKey(Schema.String),
    expression: Schema.String,
    hidden: Schema.optionalKey(Schema.Boolean),
    formatString: Schema.optionalKey(Schema.String),
    measureTemplate: Schema.optionalKey(
      Schema.suspend(() => ReportExtensionReportExtensionMeasureTemplate),
    ),
    description: Schema.optionalKey(Schema.String),
    displayFolder: Schema.optionalKey(Schema.String),
    annotations: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => ReportExtensionMeasureExtensionAnnotation),
      ),
    ),
    references: Schema.optionalKey(
      Schema.suspend(() => ReportExtensionExpressionReferences),
    ),
  });

export type ReportExtensionPrimitiveTypeName =
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

export const ReportExtensionPrimitiveTypeName: Schema.Codec<ReportExtensionPrimitiveTypeName> =
  Schema.Literals([
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

export type ReportExtensionReportExtensionMeasureTemplate = {
  readonly daxTemplateName: string;
  readonly version: number;
};

export const ReportExtensionReportExtensionMeasureTemplate: Schema.Codec<ReportExtensionReportExtensionMeasureTemplate> =
  closed({ daxTemplateName: Schema.String, version: Schema.Finite });

export type ReportExtensionMeasureExtensionAnnotation = {
  readonly name: string;
  readonly value: string;
};

export const ReportExtensionMeasureExtensionAnnotation: Schema.Codec<ReportExtensionMeasureExtensionAnnotation> =
  closed({ name: Schema.String, value: Schema.String });

export type ReportExtensionExpressionReferences = {
  readonly unrecognizedReferences?: boolean;
  readonly measures?: ReadonlyArray<ReportExtensionMeasureReference>;
};

export const ReportExtensionExpressionReferences: Schema.Codec<ReportExtensionExpressionReferences> =
  closed({
    unrecognizedReferences: Schema.optionalKey(Schema.Boolean),
    measures: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => ReportExtensionMeasureReference)),
    ),
  });

export type ReportExtensionMeasureReference = {
  readonly schema?: string;
  readonly entity: string;
  readonly name: string;
};

export const ReportExtensionMeasureReference: Schema.Codec<ReportExtensionMeasureReference> =
  closed({
    schema: Schema.optionalKey(Schema.String),
    entity: Schema.String,
    name: Schema.String,
  });

export const ReportExtensionDefinitions = {
  ReportExtensionEntity: ReportExtensionReportExtensionEntity,
  ReportExtensionMeasure: ReportExtensionReportExtensionMeasure,
  PrimitiveTypeName: ReportExtensionPrimitiveTypeName,
  ReportExtensionMeasureTemplate:
    ReportExtensionReportExtensionMeasureTemplate,
  MeasureExtensionAnnotation: ReportExtensionMeasureExtensionAnnotation,
  ExpressionReferences: ReportExtensionExpressionReferences,
  MeasureReference: ReportExtensionMeasureReference,
} as const;

export type ReportExtension = {
  readonly name: string;
  readonly entities?: ReadonlyArray<ReportExtensionReportExtensionEntity>;
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/reportExtension/1.0.0/schema.json";
};

export const ReportExtension: Schema.Codec<ReportExtension> =
  closed({
    name: Schema.String,
    entities: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => ReportExtensionReportExtensionEntity),
      ),
    ),
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/reportExtension/1.0.0/schema.json",
    ),
  });

export { ReportExtensionDefinitions as ReportExtensionDefinitionsV1_0_0, ReportExtension as ReportExtensionV1_0_0 };
