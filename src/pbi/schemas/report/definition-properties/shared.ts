import { Schema } from "effect";
import { closed } from "../shared.js";

export type ReportDatasetReferenceByPath = {
  readonly path: string;
} | null;

export const ReportDatasetReferenceByPath: Schema.Codec<ReportDatasetReferenceByPath> =
  Schema.Union([closed({ path: Schema.String }), Schema.Null]);

export const DesktopDefinitionPropertiesByPath = closed({
  version: Schema.Literal("4.0"),
  datasetReference: closed({ byPath: closed({ path: Schema.String }) }),
});

export type DesktopDefinitionPropertiesByPath =
  typeof DesktopDefinitionPropertiesByPath.Type;
