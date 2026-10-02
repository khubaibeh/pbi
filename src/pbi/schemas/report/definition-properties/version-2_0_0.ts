import { Schema } from "effect";
import { closed } from "../shared.js";
import { DefinitionPropertiesReportDatasetReferenceByPath } from "./shared.js";

export type DefinitionPropertiesDatasetReferenceV2_0_0 = {
  readonly byPath?: DefinitionPropertiesReportDatasetReferenceByPath;
  readonly byConnection?: DefinitionPropertiesReportDatasetReferenceByConnectionV2_0_0;
};

export const DefinitionPropertiesDatasetReferenceV2_0_0: Schema.Codec<DefinitionPropertiesDatasetReferenceV2_0_0> =
  closed({
    byPath: Schema.optionalKey(
      Schema.suspend(() => DefinitionPropertiesReportDatasetReferenceByPath),
    ),
    byConnection: Schema.optionalKey(
      Schema.suspend(() => DefinitionPropertiesReportDatasetReferenceByConnectionV2_0_0),
    ),
  });

export type DefinitionPropertiesReportDatasetReferenceByConnectionV2_0_0 = {
  readonly connectionString: string;
} | null;

export const DefinitionPropertiesReportDatasetReferenceByConnectionV2_0_0: Schema.Codec<DefinitionPropertiesReportDatasetReferenceByConnectionV2_0_0> =
  Schema.Union([closed({ connectionString: Schema.String }), Schema.Null]);

export const DefinitionPropertiesDefinitionsV2_0_0 = {
  DatasetReference: DefinitionPropertiesDatasetReferenceV2_0_0,
  ReportDatasetReferenceByConnection: DefinitionPropertiesReportDatasetReferenceByConnectionV2_0_0,
  ReportDatasetReferenceByPath: DefinitionPropertiesReportDatasetReferenceByPath,
} as const;

export type DefinitionPropertiesV2_0_0 = {
  readonly $schema: string;
  readonly version: string;
  readonly datasetReference: DefinitionPropertiesDatasetReferenceV2_0_0;
};

export const DefinitionPropertiesV2_0_0: Schema.Codec<DefinitionPropertiesV2_0_0> = closed({
  $schema: Schema.String.check(
    Schema.isPattern(
      new RegExp(
        "^https://developer.microsoft.com/json-schemas/fabric/item/report/definitionProperties/2.[0-9]+.[0-9]+/schema.json$",
      ),
    ),
  ),
  version: Schema.String,
  datasetReference: Schema.suspend(() => DefinitionPropertiesDatasetReferenceV2_0_0),
});
