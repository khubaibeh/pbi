import { Schema } from "effect";
import { closed } from "../shared.js";
import { FilterConfigurationEmbeddedV1_0_0 } from "../filter-configuration/shared.js";
import {
  PageAnnotation,
  PageAutoPageGenerationConfigV1_2_0,
  PageBackground,
  PageBindingParameterV1_2_0,
  PageBindingType,
  PageDisplayArea,
  PageFilterCard,
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

export const PageDefinitionsV1_3_0 = {
  PageDisplayOption: PagePageDisplayOption,
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

export type PageV1_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.3.0/schema.json";
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PagePageDisplayOption;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: FilterConfigurationEmbeddedV1_0_0;
  readonly pageBinding?: PagePageBindingV1_2_0;
  readonly objects?: PagePageFormattingObjectsV1_2_0;
  readonly type?: "Drillthrough" | "Tooltip";
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<PageVisualInteraction>;
  readonly autoPageGenerationConfig?: PageAutoPageGenerationConfigV1_2_0;
  readonly annotations?: ReadonlyArray<PageAnnotation>;
  readonly howCreated?: "Default" | "Copilot";
};

export const PageV1_3_0: Schema.Codec<PageV1_3_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.3.0/schema.json",
  ),
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PagePageDisplayOption),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(Schema.suspend(() => FilterConfigurationEmbeddedV1_0_0)),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PagePageBindingV1_2_0)),
  objects: Schema.optionalKey(Schema.suspend(() => PagePageFormattingObjectsV1_2_0)),
  type: Schema.optionalKey(
    Schema.Union([Schema.Literal("Drillthrough"), Schema.Literal("Tooltip")]),
  ),
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
