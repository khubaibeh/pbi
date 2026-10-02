import { Schema } from "effect";

import {
  ExpressionReferences,
  MeasureReference,
  PrimitiveTypeName,
  ReportExtensionEntity,
  ReportExtensionMeasure,
  ReportExtensionMeasureTemplate,
} from "./shared.js";
import { Annotation, closed } from "../shared.js";

export type ReportExtension = {
  readonly name: string;
  readonly entities?: ReadonlyArray<ReportExtensionEntity>;
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/reportExtension/1.0.0/schema.json";
};

export const ReportExtension: Schema.Codec<ReportExtension> = closed({
  name: Schema.String,
  entities: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => ReportExtensionEntity)),
  ),
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/reportExtension/1.0.0/schema.json",
  ),
});

export const ReportExtensionDefinitionsV1_0_0 = {
  ReportExtensionEntity: ReportExtensionEntity,
  ReportExtensionMeasure: ReportExtensionMeasure,
  PrimitiveTypeName: PrimitiveTypeName,
  ReportExtensionMeasureTemplate: ReportExtensionMeasureTemplate,
  MeasureExtensionAnnotation: Annotation,
  ExpressionReferences: ExpressionReferences,
  MeasureReference: MeasureReference,
} as const;

export {
  ReportExtensionEntity as ReportExtensionReportExtensionEntityV1_0_0,
  ReportExtensionMeasure as ReportExtensionReportExtensionMeasureV1_0_0,
  PrimitiveTypeName as ReportExtensionPrimitiveTypeNameV1_0_0,
  ReportExtensionMeasureTemplate as ReportExtensionReportExtensionMeasureTemplateV1_0_0,
  ExpressionReferences as ReportExtensionExpressionReferencesV1_0_0,
  MeasureReference as ReportExtensionMeasureReferenceV1_0_0,
} from "./shared.js";

export { Annotation as ReportExtensionMeasureExtensionAnnotationV1_0_0 } from "../shared.js";

export { ReportExtension as ReportExtensionV1_0_0 };
