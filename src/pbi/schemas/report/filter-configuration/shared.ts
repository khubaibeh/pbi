import { Schema } from "effect";

import { SelectorV1_2_0 } from "../formatting-object-definitions/version-1.2.0.js";
import { SelectorV1_3_0 } from "../formatting-object-definitions/version-1.3.0.js";
import { SelectorV1_4_0 } from "../formatting-object-definitions/version-1.4.0.js";
import { SelectorV1_5_0 } from "../formatting-object-definitions/version-1.5.0.js";
import {
  FilterDefinitionV1_2_0,
  QueryExpressionContainerV1_2_0,
} from "../semantic-query/version-1.2.0.js";
import {
  FilterDefinitionV1_3_0,
  QueryExpressionContainerV1_3_0,
} from "../semantic-query/version-1.3.0.js";
import {
  FilterDefinitionV1_4_0,
  QueryExpressionContainerV1_4_0,
} from "../semantic-query/version-1.4.0.js";
import { closed, FilterContainerFormattingProperties } from "../shared.js";

export type FilterContainerV1_0_0 = {
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
  readonly objects?: FilterContainerFormattingObjectsV1_0_0;
};

export const FilterContainerV1_0_0: Schema.Codec<FilterContainerV1_0_0> =
  closed({
    name: Schema.String,
    displayName: Schema.optionalKey(Schema.String),
    ordinal: Schema.optionalKey(Schema.Finite),
    field: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_2_0),
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
    filter: Schema.optionalKey(Schema.suspend(() => FilterDefinitionV1_2_0)),
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
      Schema.suspend(() => FilterContainerFormattingObjectsV1_0_0),
    ),
  });

export type FilterContainerFormattingObjectsV1_0_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: FilterContainerFormattingProperties;
  }>;
};

export const FilterContainerFormattingObjectsV1_0_0: Schema.Codec<FilterContainerFormattingObjectsV1_0_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => FilterContainerFormattingProperties),
        }),
      ),
    ),
  });

export type FilterContainerV1_1_0 = {
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
  readonly objects?: FilterContainerFormattingObjectsV1_1_0;
};

export const FilterContainerV1_1_0: Schema.Codec<FilterContainerV1_1_0> =
  closed({
    name: Schema.String,
    displayName: Schema.optionalKey(Schema.String),
    ordinal: Schema.optionalKey(Schema.Finite),
    field: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_2_0),
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
    filter: Schema.optionalKey(Schema.suspend(() => FilterDefinitionV1_2_0)),
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
      Schema.suspend(() => FilterContainerFormattingObjectsV1_1_0),
    ),
  });

export type FilterContainerFormattingObjectsV1_1_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: FilterContainerFormattingProperties;
  }>;
};

export const FilterContainerFormattingObjectsV1_1_0: Schema.Codec<FilterContainerFormattingObjectsV1_1_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => FilterContainerFormattingProperties),
        }),
      ),
    ),
  });

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

export type FilterContainerV1_3_0 = {
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
  readonly objects?: FilterContainerFormattingObjectsV1_3_0;
};

export const FilterContainerV1_3_0: Schema.Codec<FilterContainerV1_3_0> =
  closed({
    name: Schema.String,
    displayName: Schema.optionalKey(Schema.String),
    ordinal: Schema.optionalKey(Schema.Finite),
    field: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_4_0),
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
    filter: Schema.optionalKey(Schema.suspend(() => FilterDefinitionV1_4_0)),
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
      Schema.suspend(() => FilterContainerFormattingObjectsV1_3_0),
    ),
  });

export type FilterContainerFormattingObjectsV1_3_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: FilterContainerFormattingProperties;
  }>;
};

export const FilterContainerFormattingObjectsV1_3_0: Schema.Codec<FilterContainerFormattingObjectsV1_3_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => FilterContainerFormattingProperties),
        }),
      ),
    ),
  });

export const FilterConfigurationDefinitionsV1_0_0 = {
  FilterContainer: FilterContainerV1_0_0,
  FilterContainerFormattingObjects: FilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
} as const;

export const FilterConfigurationEmbeddedDefinitionsV1_0_0 = {
  FilterContainer: FilterContainerV1_0_0,
  FilterContainerFormattingObjects: FilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
} as const;

export const FilterConfigurationDefinitionsV1_1_0 = {
  FilterContainer: FilterContainerV1_1_0,
  FilterContainerFormattingObjects: FilterContainerFormattingObjectsV1_1_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
} as const;

export const FilterConfigurationEmbeddedDefinitionsV1_1_0 = {
  FilterContainer: FilterContainerV1_1_0,
  FilterContainerFormattingObjects: FilterContainerFormattingObjectsV1_1_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
} as const;

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

export const FilterConfigurationDefinitionsV1_3_0 = {
  FilterContainer: FilterContainerV1_3_0,
  FilterContainerFormattingObjects: FilterContainerFormattingObjectsV1_3_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
} as const;

export const FilterConfigurationEmbeddedDefinitionsV1_3_0 = {
  FilterContainer: FilterContainerV1_3_0,
  FilterContainerFormattingObjects: FilterContainerFormattingObjectsV1_3_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
} as const;
