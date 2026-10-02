import { Schema } from "effect";
import { FilterConfigurationEmbeddedV1_1_0 } from "../filter-configuration/version-1.1.0.js";
import { SelectorV1_3_0 } from "../formatting-object-definitions/version-1.3.0.js";
import {
  AutoPageGenerationConfigV1_2_0,
  Background,
  BindingParameterV1_2_0,
  BindingType,
  DisplayArea,
  FilterCard,
  OutspacePane,
  PageBindingV1_2_0,
  PageDisplayOption,
  PageInformation,
  PageRefresh,
  PageSize,
  PersonalizeVisual,
  QuickExploreLayoutContainer,
  QuickExploreRelatedLayout,
  QuickExploreVisualContainerConfigV1_2_0,
  VisualInteraction,
  VisualInteractionFilterType,
} from "./shared.js";
import { Annotation, closed } from "../shared.js";

export type PageFormattingObjectsV1_4_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: PageInformation;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: PageSize;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: Background;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: DisplayArea;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: Background;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: OutspacePane;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: FilterCard;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: PageRefresh;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: PersonalizeVisual;
  }>;
};

export const PageFormattingObjectsV1_4_0: Schema.Codec<PageFormattingObjectsV1_4_0> =
  closed({
    pageInformation: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => PageInformation),
        }),
      ),
    ),
    pageSize: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => PageSize),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => Background),
        }),
      ),
    ),
    displayArea: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => DisplayArea),
        }),
      ),
    ),
    outspace: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => Background),
        }),
      ),
    ),
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => OutspacePane),
        }),
      ),
    ),
    filterCard: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => FilterCard),
        }),
      ),
    ),
    pageRefresh: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => PageRefresh),
        }),
      ),
    ),
    personalizeVisual: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => PersonalizeVisual),
        }),
      ),
    ),
  });

export type PageV1_4_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.4.0/schema.json";
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PageDisplayOption;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: FilterConfigurationEmbeddedV1_1_0;
  readonly pageBinding?: PageBindingV1_2_0;
  readonly objects?: PageFormattingObjectsV1_4_0;
  readonly type?: "Drillthrough" | "Tooltip";
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<VisualInteraction>;
  readonly autoPageGenerationConfig?: AutoPageGenerationConfigV1_2_0;
  readonly annotations?: ReadonlyArray<Annotation>;
  readonly howCreated?: "Default" | "Copilot";
};

export const PageV1_4_0: Schema.Codec<PageV1_4_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.4.0/schema.json",
  ),
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PageDisplayOption),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(
    Schema.suspend(() => FilterConfigurationEmbeddedV1_1_0),
  ),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PageBindingV1_2_0)),
  objects: Schema.optionalKey(
    Schema.suspend(() => PageFormattingObjectsV1_4_0),
  ),
  type: Schema.optionalKey(
    Schema.Union([Schema.Literal("Drillthrough"), Schema.Literal("Tooltip")]),
  ),
  visibility: Schema.optionalKey(
    Schema.Union([
      Schema.Literal("AlwaysVisible"),
      Schema.Literal("HiddenInViewMode"),
    ]),
  ),
  visualInteractions: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => VisualInteraction)),
  ),
  autoPageGenerationConfig: Schema.optionalKey(
    Schema.suspend(() => AutoPageGenerationConfigV1_2_0),
  ),
  annotations: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => Annotation)),
  ),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
});

export const PageDefinitionsV1_4_0 = {
  PageDisplayOption: PageDisplayOption,
  PageBinding: PageBindingV1_2_0,
  BindingType: BindingType,
  BindingParameter: BindingParameterV1_2_0,
  PageFormattingObjects: PageFormattingObjectsV1_4_0,
  PageInformation: PageInformation,
  PageSize: PageSize,
  Background: Background,
  DisplayArea: DisplayArea,
  OutspacePane: OutspacePane,
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

export {
  PageDisplayOption as PagePageDisplayOptionV1_4_0,
  PageBindingV1_2_0 as PagePageBindingV1_4_0,
  BindingType as PageBindingTypeV1_4_0,
  BindingParameterV1_2_0 as PageBindingParameterV1_4_0,
  PageInformation as PagePageInformationV1_4_0,
  PageSize as PagePageSizeV1_4_0,
  Background as PageBackgroundV1_4_0,
  DisplayArea as PageDisplayAreaV1_4_0,
  OutspacePane as PageOutspacePaneV1_4_0,
  FilterCard as PageFilterCardV1_4_0,
  PageRefresh as PagePageRefreshV1_4_0,
  PersonalizeVisual as PagePersonalizeVisualV1_4_0,
  VisualInteraction as PageVisualInteractionV1_4_0,
  VisualInteractionFilterType as PageVisualInteractionFilterTypeV1_4_0,
  AutoPageGenerationConfigV1_2_0 as PageAutoPageGenerationConfigV1_4_0,
  QuickExploreVisualContainerConfigV1_2_0 as PageQuickExploreVisualContainerConfigV1_4_0,
  QuickExploreLayoutContainer as PageQuickExploreLayoutContainerV1_4_0,
  QuickExploreRelatedLayout as PageQuickExploreRelatedLayoutV1_4_0,
  QuickExploreRelatedLayout as PageQuickExploreCombinationLayoutV1_4_0,
} from "./shared.js";

export { PageFormattingObjectsV1_4_0 as PagePageFormattingObjectsV1_4_0 };

export { Annotation as PageAnnotationV1_4_0 } from "../shared.js";
