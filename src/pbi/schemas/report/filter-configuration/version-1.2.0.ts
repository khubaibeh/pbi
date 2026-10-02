import { Schema } from "effect";
import {
  FilterContainerFormattingObjectsV1_2_0,
  FilterContainerV1_2_0,
} from "./shared.js";
import { closed, FilterContainerFormattingProperties } from "../shared.js";

export type FilterConfigurationV1_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.2.0/schema.json";
  readonly filters?: ReadonlyArray<FilterContainerV1_2_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};

export const FilterConfigurationV1_2_0: Schema.Codec<FilterConfigurationV1_2_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.2.0/schema.json",
    ),
    filters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => FilterContainerV1_2_0)),
    ),
    filterSortOrder: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Ascending"),
        Schema.Literal("Descending"),
        Schema.Literal("Custom"),
      ]),
    ),
  });

export type FilterConfigurationEmbeddedV1_2_0 = {
  readonly filters?: ReadonlyArray<FilterContainerV1_2_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};

export const FilterConfigurationEmbeddedV1_2_0: Schema.Codec<FilterConfigurationEmbeddedV1_2_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => FilterContainerV1_2_0)),
    ),
    filterSortOrder: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Ascending"),
        Schema.Literal("Descending"),
        Schema.Literal("Custom"),
      ]),
    ),
  });

export const FilterConfigurationDefinitionsV1_2_0 = {
  FilterContainer: FilterContainerV1_2_0,
  FilterContainerFormattingObjects: FilterContainerFormattingObjectsV1_2_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
} as const;

export const FilterConfigurationEmbeddedDefinitionsV1_2_0 = {
  FilterContainer: FilterContainerV1_2_0,
  FilterContainerFormattingObjects: FilterContainerFormattingObjectsV1_2_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
} as const;

export {
  FilterContainerV1_2_0 as FilterConfigurationFilterContainerV1_2_0,
  FilterContainerFormattingObjectsV1_2_0 as FilterConfigurationFilterContainerFormattingObjectsV1_2_0,
  FilterContainerV1_2_0 as FilterConfigurationEmbeddedFilterContainerV1_2_0,
  FilterContainerFormattingObjectsV1_2_0 as FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_2_0,
} from "./shared.js";

export {
  FilterContainerFormattingProperties as FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_2_0,
  FilterContainerFormattingProperties as FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_2_0,
} from "../shared.js";
