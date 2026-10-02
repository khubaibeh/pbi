import { Schema } from "effect";
import { closed } from "../shared.js";
import { DefinitionPropertiesReportDatasetReferenceByPath } from "./shared.js";

export type DefinitionPropertiesDatasetReferenceV1_0_0 = {
  readonly byPath?: DefinitionPropertiesReportDatasetReferenceByPath;
  readonly byConnection?: DefinitionPropertiesReportDatasetReferenceByConnectionV1_0_0;
};

export const DefinitionPropertiesDatasetReferenceV1_0_0: Schema.Codec<DefinitionPropertiesDatasetReferenceV1_0_0> =
  closed({
    byPath: Schema.optionalKey(
      Schema.suspend(() => DefinitionPropertiesReportDatasetReferenceByPath),
    ),
    byConnection: Schema.optionalKey(
      Schema.suspend(() => DefinitionPropertiesReportDatasetReferenceByConnectionV1_0_0),
    ),
  });

export type DefinitionPropertiesReportDatasetReferenceByConnectionV1_0_0 = {
  readonly connectionString: string | null;
  readonly pbiServiceModelId: number | null;
  readonly pbiModelVirtualServerName: string | null;
  readonly pbiModelDatabaseName: string | null;
  readonly name: string | null;
  readonly connectionType: string | null;
} | null;

export const DefinitionPropertiesReportDatasetReferenceByConnectionV1_0_0: Schema.Codec<DefinitionPropertiesReportDatasetReferenceByConnectionV1_0_0> =
  Schema.Union([
    closed({
      connectionString: Schema.Union([Schema.String, Schema.Null]),
      pbiServiceModelId: Schema.Union([
        Schema.Finite.check(
          Schema.makeFilter((value) => Number.isInteger(value) || "Expected integer"),
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

export const DefinitionPropertiesDefinitionsV1_0_0 = {
  DatasetReference: DefinitionPropertiesDatasetReferenceV1_0_0,
  ReportDatasetReferenceByConnection: DefinitionPropertiesReportDatasetReferenceByConnectionV1_0_0,
  ReportDatasetReferenceByPath: DefinitionPropertiesReportDatasetReferenceByPath,
} as const;

export type DefinitionPropertiesV1_0_0 = {
  readonly $schema: string;
  readonly version: string;
  readonly datasetReference: DefinitionPropertiesDatasetReferenceV1_0_0;
};

export const DefinitionPropertiesV1_0_0: Schema.Codec<DefinitionPropertiesV1_0_0> = closed({
  $schema: Schema.String.check(
    Schema.isPattern(
      new RegExp(
        "^https://developer.microsoft.com/json-schemas/fabric/item/report/definitionProperties/1.[0-9]+.[0-9]+/schema.json$",
      ),
    ),
  ),
  version: Schema.String,
  datasetReference: Schema.suspend(() => DefinitionPropertiesDatasetReferenceV1_0_0),
});
