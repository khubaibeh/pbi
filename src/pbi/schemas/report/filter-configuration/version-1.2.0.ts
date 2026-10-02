import { Schema } from "effect";

import { SelectorV1_4_0 } from "../formatting-object-definitions/version-1.4.0.js";
import {
  FilterDefinitionV1_3_0,
  QueryExpressionContainerV1_3_0,
} from "../semantic-query/version-1.3.0.js";
import { closed, FilterContainerFormattingProperties } from "../shared.js";

export type FilterContainerV1_2_0 = {
  readonly name: string;
  readonly displayName?: string;
  readonly ordinal?: number;
  readonly field?: QueryExpressionContainerV1_3_0;
  readonly type?:
    | "Categorical"
    | "Range"
    | "Advanced"
    | "Passthrough"
    | "TopN"
    | "Include"
    | "Exclude"
    | "RelativeDate"
    | "Tuple"
    | "RelativeTime"
    | "VisualTopN";
  readonly filter?: FilterDefinitionV1_3_0;
  readonly restatement?: string;
  readonly howCreated?:
    "Auto" | "User" | "Drill" | "Include" | "Exclude" | "Drillthrough";
  readonly isHiddenInViewMode?: boolean;
  readonly isLockedInViewMode?: boolean;
  readonly objects?: FilterContainerFormattingObjectsV1_2_0;
};

export const FilterContainerV1_2_0: Schema.Codec<FilterContainerV1_2_0> =
  closed({
    name: Schema.String,
    displayName: Schema.optionalKey(Schema.String),
    ordinal: Schema.optionalKey(Schema.Finite),
    field: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_3_0),
    ),
    type: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Categorical"),
        Schema.Literal("Range"),
        Schema.Literal("Advanced"),
        Schema.Literal("Passthrough"),
        Schema.Literal("TopN"),
        Schema.Literal("Include"),
        Schema.Literal("Exclude"),
        Schema.Literal("RelativeDate"),
        Schema.Literal("Tuple"),
        Schema.Literal("RelativeTime"),
        Schema.Literal("VisualTopN"),
      ]),
    ),
    filter: Schema.optionalKey(Schema.suspend(() => FilterDefinitionV1_3_0)),
    restatement: Schema.optionalKey(Schema.String),
    howCreated: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Auto"),
        Schema.Literal("User"),
        Schema.Literal("Drill"),
        Schema.Literal("Include"),
        Schema.Literal("Exclude"),
        Schema.Literal("Drillthrough"),
      ]),
    ),
    isHiddenInViewMode: Schema.optionalKey(Schema.Boolean),
    isLockedInViewMode: Schema.optionalKey(Schema.Boolean),
    objects: Schema.optionalKey(
      Schema.suspend(() => FilterContainerFormattingObjectsV1_2_0),
    ),
  });

export type FilterContainerFormattingObjectsV1_2_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: FilterContainerFormattingProperties;
  }>;
};

export const FilterContainerFormattingObjectsV1_2_0: Schema.Codec<FilterContainerFormattingObjectsV1_2_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => FilterContainerFormattingProperties),
        }),
      ),
    ),
  });

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
};

export {
  FilterContainerFormattingProperties as FilterConfigurationFilterContainerFormattingObjectsPropertiesV1_2_0,
  FilterContainerFormattingProperties as FilterConfigurationEmbeddedFilterContainerFormattingObjectsPropertiesV1_2_0,
} from "../shared.js";
