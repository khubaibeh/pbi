import { Schema } from "effect";
import { closed } from "../shared.js";
import { ReportDatasetReferenceByPath } from "./shared.js";

export type DatasetReferenceV2_0_0 = {
  readonly byPath?: ReportDatasetReferenceByPath;
  readonly byConnection?: ReportDatasetReferenceByConnectionV2_0_0;
};

export const DatasetReferenceV2_0_0: Schema.Codec<DatasetReferenceV2_0_0> = closed({
  byPath: Schema.optionalKey(Schema.suspend(() => ReportDatasetReferenceByPath)),
  byConnection: Schema.optionalKey(Schema.suspend(() => ReportDatasetReferenceByConnectionV2_0_0)),
});

export type ReportDatasetReferenceByConnectionV2_0_0 = {
  readonly connectionString: string;
} | null;

export const ReportDatasetReferenceByConnectionV2_0_0: Schema.Codec<ReportDatasetReferenceByConnectionV2_0_0> =
  Schema.Union([closed({ connectionString: Schema.String }), Schema.Null]);

export const DefinitionPropertiesDefinitionsV2_0_0 = {
  DatasetReference: DatasetReferenceV2_0_0,
  ReportDatasetReferenceByConnection: ReportDatasetReferenceByConnectionV2_0_0,
  ReportDatasetReferenceByPath: ReportDatasetReferenceByPath,
} as const;

export type DefinitionPropertiesV2_0_0 = {
  readonly $schema: string;
  readonly version: string;
  readonly datasetReference: DatasetReferenceV2_0_0;
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
  datasetReference: Schema.suspend(() => DatasetReferenceV2_0_0),
});

export {
  DatasetReferenceV2_0_0 as DefinitionPropertiesDatasetReferenceV2_0_0,
  ReportDatasetReferenceByConnectionV2_0_0 as DefinitionPropertiesReportDatasetReferenceByConnectionV2_0_0,
};

export { ReportDatasetReferenceByPath as DefinitionPropertiesReportDatasetReferenceByPathV2_0_0 } from "./shared.js";
