import { Schema } from "effect";

import { ReportDatasetReferenceByPath } from "./shared.js";
import { closed } from "../shared.js";

export type DatasetReferenceV1_0_0 = {
  readonly byPath?: ReportDatasetReferenceByPath;
  readonly byConnection?: ReportDatasetReferenceByConnectionV1_0_0;
};

export const DatasetReferenceV1_0_0: Schema.Codec<DatasetReferenceV1_0_0> =
  closed({
    byPath: Schema.optionalKey(
      Schema.suspend(() => ReportDatasetReferenceByPath),
    ),
    byConnection: Schema.optionalKey(
      Schema.suspend(() => ReportDatasetReferenceByConnectionV1_0_0),
    ),
  });

export type ReportDatasetReferenceByConnectionV1_0_0 = {
  readonly connectionString: string | null;
  readonly pbiServiceModelId: number | null;
  readonly pbiModelVirtualServerName: string | null;
  readonly pbiModelDatabaseName: string | null;
  readonly name: string | null;
  readonly connectionType: string | null;
} | null;

export const ReportDatasetReferenceByConnectionV1_0_0: Schema.Codec<ReportDatasetReferenceByConnectionV1_0_0> =
  Schema.Union([
    closed({
      connectionString: Schema.Union([Schema.String, Schema.Null]),
      pbiServiceModelId: Schema.Union([
        Schema.Finite.check(
          Schema.makeFilter(
            (value) => Number.isInteger(value) || "Expected integer",
          ),
        ),
        Schema.Null,
      ]),
      pbiModelVirtualServerName: Schema.Union([Schema.String, Schema.Null]),
      pbiModelDatabaseName: Schema.Union([Schema.String, Schema.Null]),
      name: Schema.Union([Schema.String, Schema.Null]),
      connectionType: Schema.Union([Schema.String, Schema.Null]),
    }),
    Schema.Null,
  ]);

export type DefinitionPropertiesV1_0_0 = {
  readonly $schema: string;
  readonly version: string;
  readonly datasetReference: DatasetReferenceV1_0_0;
};

export const DefinitionPropertiesV1_0_0: Schema.Codec<DefinitionPropertiesV1_0_0> =
  closed({
    $schema: Schema.String.check(
      Schema.isPattern(
        new RegExp(
          "^https://developer.microsoft.com/json-schemas/fabric/item/report/definitionProperties/1.[0-9]+.[0-9]+/schema.json$",
        ),
      ),
    ),
    version: Schema.String,
    datasetReference: Schema.suspend(() => DatasetReferenceV1_0_0),
  });

export const DefinitionPropertiesDefinitionsV1_0_0 = {
  DatasetReference: DatasetReferenceV1_0_0,
  ReportDatasetReferenceByConnection: ReportDatasetReferenceByConnectionV1_0_0,
  ReportDatasetReferenceByPath: ReportDatasetReferenceByPath,
} as const;

export {
  DatasetReferenceV1_0_0 as DefinitionPropertiesDatasetReferenceV1_0_0,
  ReportDatasetReferenceByConnectionV1_0_0 as DefinitionPropertiesReportDatasetReferenceByConnectionV1_0_0,
};

export { ReportDatasetReferenceByPath as DefinitionPropertiesReportDatasetReferenceByPathV1_0_0 } from "./shared.js";
