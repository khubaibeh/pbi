import { Schema } from "effect";
import {
  Annotation,
  DisplayArea,
  FilterContainerFormattingObjectsProperties,
  closed,
} from "../shared.js";
import {
  FilterConfigurationEmbeddedV1_0_0,
  FilterConfigurationFilterContainerFormattingObjectsV1_0_0,
  FilterConfigurationFilterContainerV1_0_0,
} from "../filter-configuration/version-1_0_0.js";
import {
  AutoPageGenerationConfigV1_2_0,
  BindingParameterV1_2_0,
  BindingType,
  FilterCard,
  PageBackground,
  PageBindingV1_2_0,
  PageDisplayOption,
  PageFormattingObjectsV1_2_0,
  PageInformation,
  PageOutspacePane,
  PageRefresh,
  PageSize,
  PersonalizeVisual,
  QuickExploreLayoutContainer,
  QuickExploreRelatedLayout,
  QuickExploreVisualContainerConfigV1_2_0,
  VisualInteraction,
  VisualInteractionFilterType,
} from "./shared.js";

export const PageDefinitionsV1_2_0 = {
  PageDisplayOption: PageDisplayOption,
  FilterConfig: FilterConfigurationEmbeddedV1_0_0,
  FilterContainer: FilterConfigurationFilterContainerV1_0_0,
  FilterContainerFormattingObjects: FilterConfigurationFilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties: FilterContainerFormattingObjectsProperties,
  PageBinding: PageBindingV1_2_0,
  BindingType: BindingType,
  BindingParameter: BindingParameterV1_2_0,
  PageFormattingObjects: PageFormattingObjectsV1_2_0,
  PageInformation: PageInformation,
  PageSize: PageSize,
  Background: PageBackground,
  DisplayArea: DisplayArea,
  OutspacePane: PageOutspacePane,
  FilterCard: FilterCard,
  PageRefresh: PageRefresh,
  PersonalizeVisual: PersonalizeVisual,
  VisualInteraction: VisualInteraction,
  VisualInteractionFilterType: VisualInteractionFilterType,
  AutoPageGenerationConfig: AutoPageGenerationConfigV1_2_0,
  QuickExploreVisualContainerConfig: QuickExploreVisualContainerConfigV1_2_0,
  QuickExploreLayoutContainer: QuickExploreLayoutContainer,
  QuickExploreRelatedLayout: QuickExploreRelatedLayout,
  QuickExploreCombinationLayout: QuickExploreRelatedLayout,
  Annotation: Annotation,
} as const;

export type PageV1_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.2.0/schema.json";
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PageDisplayOption;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: FilterConfigurationEmbeddedV1_0_0;
  readonly pageBinding?: PageBindingV1_2_0;
  readonly objects?: PageFormattingObjectsV1_2_0;
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<VisualInteraction>;
  readonly autoPageGenerationConfig?: AutoPageGenerationConfigV1_2_0;
  readonly annotations?: ReadonlyArray<Annotation>;
  readonly howCreated?: "Default" | "Copilot";
};

export const PageV1_2_0: Schema.Codec<PageV1_2_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.2.0/schema.json",
  ),
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PageDisplayOption),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(Schema.suspend(() => FilterConfigurationEmbeddedV1_0_0)),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PageBindingV1_2_0)),
  objects: Schema.optionalKey(Schema.suspend(() => PageFormattingObjectsV1_2_0)),
  visibility: Schema.optionalKey(
    Schema.Union([Schema.Literal("AlwaysVisible"), Schema.Literal("HiddenInViewMode")]),
  ),
  visualInteractions: Schema.optionalKey(Schema.Array(Schema.suspend(() => VisualInteraction))),
  autoPageGenerationConfig: Schema.optionalKey(
    Schema.suspend(() => AutoPageGenerationConfigV1_2_0),
  ),
  annotations: Schema.optionalKey(Schema.Array(Schema.suspend(() => Annotation))),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
});

export {
  FilterConfigurationEmbeddedV1_0_0 as PageFilterConfigV1_2_0,
  FilterConfigurationFilterContainerV1_0_0 as PageFilterContainerV1_2_0,
  FilterConfigurationFilterContainerFormattingObjectsV1_0_0 as PageFilterContainerFormattingObjectsV1_2_0,
} from "../filter-configuration/version-1_0_0.js";

export {
  FilterContainerFormattingObjectsProperties as PageFilterContainerFormattingObjectsPropertiesV1_2_0,
  DisplayArea as PageDisplayAreaV1_2_0,
  Annotation as PageAnnotationV1_2_0,
} from "../shared.js";

export {
  PageDisplayOption as PagePageDisplayOptionV1_2_0,
  PageBindingV1_2_0 as PagePageBindingV1_2_0,
  BindingType as PageBindingTypeV1_2_0,
  BindingParameterV1_2_0 as PageBindingParameterV1_2_0,
  PageFormattingObjectsV1_2_0 as PagePageFormattingObjectsV1_2_0,
  PageInformation as PagePageInformationV1_2_0,
  PageSize as PagePageSizeV1_2_0,
  PageBackground as PageBackgroundV1_2_0,
  PageOutspacePane as PageOutspacePaneV1_2_0,
  FilterCard as PageFilterCardV1_2_0,
  PageRefresh as PagePageRefreshV1_2_0,
  PersonalizeVisual as PagePersonalizeVisualV1_2_0,
  VisualInteraction as PageVisualInteractionV1_2_0,
  VisualInteractionFilterType as PageVisualInteractionFilterTypeV1_2_0,
  AutoPageGenerationConfigV1_2_0 as PageAutoPageGenerationConfigV1_2_0,
  QuickExploreVisualContainerConfigV1_2_0 as PageQuickExploreVisualContainerConfigV1_2_0,
  QuickExploreLayoutContainer as PageQuickExploreLayoutContainerV1_2_0,
  QuickExploreRelatedLayout as PageQuickExploreRelatedLayoutV1_2_0,
  QuickExploreRelatedLayout as PageQuickExploreCombinationLayoutV1_2_0,
} from "./shared.js";
