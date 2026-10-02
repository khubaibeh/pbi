import { Schema } from "effect";
import { closed } from "../shared.js";

export type DefinitionPropertiesReportDatasetReferenceByPath = {
  readonly path: string;
} | null;

export const DefinitionPropertiesReportDatasetReferenceByPath: Schema.Codec<DefinitionPropertiesReportDatasetReferenceByPath> =
  Schema.Union([closed({ path: Schema.String }), Schema.Null]);
