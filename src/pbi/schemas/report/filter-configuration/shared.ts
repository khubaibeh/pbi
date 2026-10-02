import { Schema } from "effect";
import { closed } from "../shared.js";
import { FormattingObjectDefinitionsSelectorV1_2_0, FormattingObjectDefinitionsSelectorV1_3_0, FormattingObjectDefinitionsSelectorV1_4_0, FormattingObjectDefinitionsSelectorV1_5_0 } from "../formatting-object-definitions/shared.js";
import { FilterDefinitionV1_2_0, FilterDefinitionV1_3_0, FilterDefinitionV1_4_0, QueryExpressionContainerV1_2_0, QueryExpressionContainerV1_3_0, QueryExpressionContainerV1_4_0 } from "../semantic-query/shared.js";

export type FilterConfigurationFilterContainerFormattingObjectsProperties =
  {
    readonly requireSingleSelect?: Schema.Json;
    readonly isInvertedSelectionMode?: Schema.Json;
  };

export const FilterConfigurationFilterContainerFormattingObjectsProperties: Schema.Codec<FilterConfigurationFilterContainerFormattingObjectsProperties> =
  closed({
    requireSingleSelect: Schema.optionalKey(Schema.Json),
    isInvertedSelectionMode: Schema.optionalKey(Schema.Json),
  });

export type FilterConfigurationEmbeddedFilterContainerV1_0_0 = {
  readonly name: string;
  readonly displayName?: string;
  readonly ordinal?: number;
  readonly field?: QueryExpressionContainerV1_2_0;
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
  readonly filter?: FilterDefinitionV1_2_0;
  readonly restatement?: string;
  readonly howCreated?:
    "Auto" | "User" | "Drill" | "Include" | "Exclude" | "Drillthrough";
  readonly isHiddenInViewMode?: boolean;
  readonly isLockedInViewMode?: boolean;
  readonly objects?: FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_0_0;
};

export const FilterConfigurationEmbeddedFilterContainerV1_0_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerV1_0_0> =
  closed({
    name: Schema.String,
    displayName: Schema.optionalKey(Schema.String),
    ordinal: Schema.optionalKey(Schema.Finite),
    field: Schema.optionalKey(
      Schema.suspend(
        () => QueryExpressionContainerV1_2_0,
      ),
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
    filter: Schema.optionalKey(
      Schema.suspend(
        () => FilterDefinitionV1_2_0,
      ),
    ),
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
      Schema.suspend(
        () => FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_0_0,
      ),
    ),
  });

export type FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_0_0 =
  {
    readonly general?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: FilterConfigurationEmbeddedFilterContainerFormattingObjectsProperties;
    }>;
  };

export const FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_0_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_0_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () => FormattingObjectDefinitionsSelectorV1_2_0,
            ),
          ),
          properties: Schema.suspend(
            () =>
              FilterConfigurationEmbeddedFilterContainerFormattingObjectsProperties,
          ),
        }),
      ),
    ),
  });

export type FilterConfigurationEmbeddedFilterContainerFormattingObjectsProperties =
  {
    readonly requireSingleSelect?: Schema.Json;
    readonly isInvertedSelectionMode?: Schema.Json;
  };

export const FilterConfigurationEmbeddedFilterContainerFormattingObjectsProperties: Schema.Codec<FilterConfigurationEmbeddedFilterContainerFormattingObjectsProperties> =
  closed({
    requireSingleSelect: Schema.optionalKey(Schema.Json),
    isInvertedSelectionMode: Schema.optionalKey(Schema.Json),
  });

export type FilterConfigurationEmbeddedV1_0_0 = {
  readonly filters?: ReadonlyArray<FilterConfigurationEmbeddedFilterContainerV1_0_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};

export const FilterConfigurationEmbeddedV1_0_0: Schema.Codec<FilterConfigurationEmbeddedV1_0_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerV1_0_0),
      ),
    ),
    filterSortOrder: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Ascending"),
        Schema.Literal("Descending"),
        Schema.Literal("Custom"),
      ]),
    ),
  });

export type FilterConfigurationEmbeddedFilterContainerV1_1_0 = {
  readonly name: string;
  readonly displayName?: string;
  readonly ordinal?: number;
  readonly field?: QueryExpressionContainerV1_2_0;
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
  readonly filter?: FilterDefinitionV1_2_0;
  readonly restatement?: string;
  readonly howCreated?:
    "Auto" | "User" | "Drill" | "Include" | "Exclude" | "Drillthrough";
  readonly isHiddenInViewMode?: boolean;
  readonly isLockedInViewMode?: boolean;
  readonly objects?: FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_1_0;
};

export const FilterConfigurationEmbeddedFilterContainerV1_1_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerV1_1_0> =
  closed({
    name: Schema.String,
    displayName: Schema.optionalKey(Schema.String),
    ordinal: Schema.optionalKey(Schema.Finite),
    field: Schema.optionalKey(
      Schema.suspend(
        () => QueryExpressionContainerV1_2_0,
      ),
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
    filter: Schema.optionalKey(
      Schema.suspend(
        () => FilterDefinitionV1_2_0,
      ),
    ),
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
      Schema.suspend(
        () => FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_1_0,
      ),
    ),
  });

export type FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_1_0 =
  {
    readonly general?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: FilterConfigurationEmbeddedFilterContainerFormattingObjectsProperties;
    }>;
  };

export const FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_1_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_1_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () => FormattingObjectDefinitionsSelectorV1_3_0,
            ),
          ),
          properties: Schema.suspend(
            () =>
              FilterConfigurationEmbeddedFilterContainerFormattingObjectsProperties,
          ),
        }),
      ),
    ),
  });

export type FilterConfigurationEmbeddedV1_1_0 = {
  readonly filters?: ReadonlyArray<FilterConfigurationEmbeddedFilterContainerV1_1_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};

export const FilterConfigurationEmbeddedV1_1_0: Schema.Codec<FilterConfigurationEmbeddedV1_1_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerV1_1_0),
      ),
    ),
    filterSortOrder: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Ascending"),
        Schema.Literal("Descending"),
        Schema.Literal("Custom"),
      ]),
    ),
  });

export type FilterConfigurationEmbeddedFilterContainerV1_2_0 = {
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
  readonly objects?: FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_2_0;
};

export const FilterConfigurationEmbeddedFilterContainerV1_2_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerV1_2_0> =
  closed({
    name: Schema.String,
    displayName: Schema.optionalKey(Schema.String),
    ordinal: Schema.optionalKey(Schema.Finite),
    field: Schema.optionalKey(
      Schema.suspend(
        () => QueryExpressionContainerV1_3_0,
      ),
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
    filter: Schema.optionalKey(
      Schema.suspend(
        () => FilterDefinitionV1_3_0,
      ),
    ),
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
      Schema.suspend(
        () => FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_2_0,
      ),
    ),
  });

export type FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_2_0 =
  {
    readonly general?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: FilterConfigurationEmbeddedFilterContainerFormattingObjectsProperties;
    }>;
  };

export const FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_2_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_2_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () => FormattingObjectDefinitionsSelectorV1_4_0,
            ),
          ),
          properties: Schema.suspend(
            () =>
              FilterConfigurationEmbeddedFilterContainerFormattingObjectsProperties,
          ),
        }),
      ),
    ),
  });

export type FilterConfigurationEmbeddedV1_2_0 = {
  readonly filters?: ReadonlyArray<FilterConfigurationEmbeddedFilterContainerV1_2_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};

export const FilterConfigurationEmbeddedV1_2_0: Schema.Codec<FilterConfigurationEmbeddedV1_2_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerV1_2_0),
      ),
    ),
    filterSortOrder: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Ascending"),
        Schema.Literal("Descending"),
        Schema.Literal("Custom"),
      ]),
    ),
  });

export type FilterConfigurationEmbeddedFilterContainerV1_3_0 = {
  readonly name: string;
  readonly displayName?: string;
  readonly ordinal?: number;
  readonly field?: QueryExpressionContainerV1_4_0;
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
  readonly filter?: FilterDefinitionV1_4_0;
  readonly restatement?: string;
  readonly howCreated?:
    "Auto" | "User" | "Drill" | "Include" | "Exclude" | "Drillthrough";
  readonly isHiddenInViewMode?: boolean;
  readonly isLockedInViewMode?: boolean;
  readonly objects?: FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_3_0;
};

export const FilterConfigurationEmbeddedFilterContainerV1_3_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerV1_3_0> =
  closed({
    name: Schema.String,
    displayName: Schema.optionalKey(Schema.String),
    ordinal: Schema.optionalKey(Schema.Finite),
    field: Schema.optionalKey(
      Schema.suspend(
        () => QueryExpressionContainerV1_4_0,
      ),
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
    filter: Schema.optionalKey(
      Schema.suspend(
        () => FilterDefinitionV1_4_0,
      ),
    ),
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
      Schema.suspend(
        () => FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_3_0,
      ),
    ),
  });

export type FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_3_0 =
  {
    readonly general?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: FilterConfigurationEmbeddedFilterContainerFormattingObjectsProperties;
    }>;
  };

export const FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_3_0: Schema.Codec<FilterConfigurationEmbeddedFilterContainerFormattingObjectsV1_3_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () => FormattingObjectDefinitionsSelectorV1_5_0,
            ),
          ),
          properties: Schema.suspend(
            () =>
              FilterConfigurationEmbeddedFilterContainerFormattingObjectsProperties,
          ),
        }),
      ),
    ),
  });

export type FilterConfigurationEmbeddedV1_3_0 = {
  readonly filters?: ReadonlyArray<FilterConfigurationEmbeddedFilterContainerV1_3_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};

export const FilterConfigurationEmbeddedV1_3_0: Schema.Codec<FilterConfigurationEmbeddedV1_3_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => FilterConfigurationEmbeddedFilterContainerV1_3_0),
      ),
    ),
    filterSortOrder: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Ascending"),
        Schema.Literal("Descending"),
        Schema.Literal("Custom"),
      ]),
    ),
  });
