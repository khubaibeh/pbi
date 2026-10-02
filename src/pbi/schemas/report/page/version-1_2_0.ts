import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  FormattingObjectDefinitionsDefinitionsV1_2_0,
  FormattingObjectDefinitionsSelectorV1_2_0,
} from "../formatting-object-definitions/shared.js";
import {
  FilterDefinitionV1_2_0,
  QueryExpressionContainerV1_2_0,
} from "../semantic-query/shared.js";
import {
  PageAnnotation,
  PageAutoPageGenerationConfigV1_2_0,
  PageBackground,
  PageBindingParameterV1_2_0,
  PageBindingType,
  PageDisplayArea,
  PageFilterCard,
  PageFilterContainerFormattingObjectsProperties,
  PageOutspacePane,
  PagePageBindingV1_2_0,
  PagePageDisplayOption,
  PagePageFormattingObjectsV1_2_0,
  PagePageInformation,
  PagePageRefresh,
  PagePageSize,
  PagePersonalizeVisual,
  PageQuickExploreCombinationLayout,
  PageQuickExploreLayoutContainer,
  PageQuickExploreRelatedLayout,
  PageQuickExploreVisualContainerConfigV1_2_0,
  PageVisualInteraction,
  PageVisualInteractionFilterType,
} from "./shared.js";

export type PageFilterConfigV1_2_0 = {
  readonly filters?: ReadonlyArray<PageFilterContainerV1_2_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};

export const PageFilterConfigV1_2_0: Schema.Codec<PageFilterConfigV1_2_0> = closed({
  filters: Schema.optionalKey(Schema.Array(Schema.suspend(() => PageFilterContainerV1_2_0))),
  filterSortOrder: Schema.optionalKey(
    Schema.Union([
      Schema.Literal("Ascending"),
      Schema.Literal("Descending"),
      Schema.Literal("Custom"),
    ]),
  ),
});

export type PageFilterContainerV1_2_0 = {
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
  readonly howCreated?: "Auto" | "User" | "Drill" | "Include" | "Exclude" | "Drillthrough";
  readonly isHiddenInViewMode?: boolean;
  readonly isLockedInViewMode?: boolean;
  readonly objects?: PageFilterContainerFormattingObjectsV1_2_0;
};

export const PageFilterContainerV1_2_0: Schema.Codec<PageFilterContainerV1_2_0> = closed({
  name: Schema.String,
  displayName: Schema.optionalKey(Schema.String),
  ordinal: Schema.optionalKey(Schema.Finite),
  field: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
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
  objects: Schema.optionalKey(Schema.suspend(() => PageFilterContainerFormattingObjectsV1_2_0)),
});

export type PageFilterContainerFormattingObjectsV1_2_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageFilterContainerFormattingObjectsProperties;
  }>;
};

export const PageFilterContainerFormattingObjectsV1_2_0: Schema.Codec<PageFilterContainerFormattingObjectsV1_2_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => PageFilterContainerFormattingObjectsProperties),
        }),
      ),
    ),
  });

export const PageDefinitionsV1_2_0 = {
  PageDisplayOption: PagePageDisplayOption,
  FilterConfig: PageFilterConfigV1_2_0,
  FilterContainer: PageFilterContainerV1_2_0,
  FilterContainerFormattingObjects: PageFilterContainerFormattingObjectsV1_2_0,
  FilterContainerFormattingObjectsProperties: PageFilterContainerFormattingObjectsProperties,
  PageBinding: PagePageBindingV1_2_0,
  BindingType: PageBindingType,
  BindingParameter: PageBindingParameterV1_2_0,
  PageFormattingObjects: PagePageFormattingObjectsV1_2_0,
  PageInformation: PagePageInformation,
  PageSize: PagePageSize,
  Background: PageBackground,
  DisplayArea: PageDisplayArea,
  OutspacePane: PageOutspacePane,
  FilterCard: PageFilterCard,
  PageRefresh: PagePageRefresh,
  PersonalizeVisual: PagePersonalizeVisual,
  VisualInteraction: PageVisualInteraction,
  VisualInteractionFilterType: PageVisualInteractionFilterType,
  AutoPageGenerationConfig: PageAutoPageGenerationConfigV1_2_0,
  QuickExploreVisualContainerConfig: PageQuickExploreVisualContainerConfigV1_2_0,
  QuickExploreLayoutContainer: PageQuickExploreLayoutContainer,
  QuickExploreRelatedLayout: PageQuickExploreRelatedLayout,
  QuickExploreCombinationLayout: PageQuickExploreCombinationLayout,
  Annotation: PageAnnotation,
} as const;

export type PageV1_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.2.0/schema.json";
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PagePageDisplayOption;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: PageFilterConfigV1_2_0;
  readonly pageBinding?: PagePageBindingV1_2_0;
  readonly objects?: PagePageFormattingObjectsV1_2_0;
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<PageVisualInteraction>;
  readonly autoPageGenerationConfig?: PageAutoPageGenerationConfigV1_2_0;
  readonly annotations?: ReadonlyArray<PageAnnotation>;
  readonly howCreated?: "Default" | "Copilot";
};

export const PageV1_2_0: Schema.Codec<PageV1_2_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.2.0/schema.json",
  ),
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PagePageDisplayOption),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(Schema.suspend(() => PageFilterConfigV1_2_0)),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PagePageBindingV1_2_0)),
  objects: Schema.optionalKey(Schema.suspend(() => PagePageFormattingObjectsV1_2_0)),
  visibility: Schema.optionalKey(
    Schema.Union([Schema.Literal("AlwaysVisible"), Schema.Literal("HiddenInViewMode")]),
  ),
  visualInteractions: Schema.optionalKey(Schema.Array(Schema.suspend(() => PageVisualInteraction))),
  autoPageGenerationConfig: Schema.optionalKey(
    Schema.suspend(() => PageAutoPageGenerationConfigV1_2_0),
  ),
  annotations: Schema.optionalKey(Schema.Array(Schema.suspend(() => PageAnnotation))),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
});
