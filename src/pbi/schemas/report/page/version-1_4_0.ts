import { Schema } from "effect";
import { closed } from "../shared.js";
import { FilterConfigurationEmbeddedV1_1_0 } from "../filter-configuration/shared.js";
import { FormattingObjectDefinitionsDefinitionsV1_3_0, FormattingObjectDefinitionsSelectorV1_3_0 } from "../formatting-object-definitions/shared.js";
import { PageAnnotation, PageAutoPageGenerationConfigV1_2_0, PageBackground, PageBindingParameterV1_2_0, PageBindingType, PageDisplayArea, PageFilterCard, PageOutspacePane, PagePageBindingV1_2_0, PagePageDisplayOption, PagePageInformation, PagePageRefresh, PagePageSize, PagePersonalizeVisual, PageQuickExploreCombinationLayout, PageQuickExploreLayoutContainer, PageQuickExploreRelatedLayout, PageQuickExploreVisualContainerConfigV1_2_0, PageVisualInteraction, PageVisualInteractionFilterType } from "./shared.js";

export type PagePageFormattingObjectsV1_4_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PagePageInformation;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PagePageSize;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PageBackground;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PageDisplayArea;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PageBackground;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PageOutspacePane;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PageFilterCard;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PagePageRefresh;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PagePersonalizeVisual;
  }>;
};

export const PagePageFormattingObjectsV1_4_0: Schema.Codec<PagePageFormattingObjectsV1_4_0> =
  closed({
    pageInformation: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageInformation),
        }),
      ),
    ),
    pageSize: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageSize),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackground),
        }),
      ),
    ),
    displayArea: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageDisplayArea),
        }),
      ),
    ),
    outspace: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackground),
        }),
      ),
    ),
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageOutspacePane),
        }),
      ),
    ),
    filterCard: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageFilterCard),
        }),
      ),
    ),
    pageRefresh: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageRefresh),
        }),
      ),
    ),
    personalizeVisual: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePersonalizeVisual),
        }),
      ),
    ),
  });

export const PageDefinitionsV1_4_0 = {
  PageDisplayOption: PagePageDisplayOption,
  PageBinding: PagePageBindingV1_2_0,
  BindingType: PageBindingType,
  BindingParameter: PageBindingParameterV1_2_0,
  PageFormattingObjects: PagePageFormattingObjectsV1_4_0,
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
  QuickExploreVisualContainerConfig:
    PageQuickExploreVisualContainerConfigV1_2_0,
  QuickExploreLayoutContainer: PageQuickExploreLayoutContainer,
  QuickExploreRelatedLayout: PageQuickExploreRelatedLayout,
  QuickExploreCombinationLayout: PageQuickExploreCombinationLayout,
  Annotation: PageAnnotation,
} as const;

export type PageV1_4_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.4.0/schema.json";
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PagePageDisplayOption;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: FilterConfigurationEmbeddedV1_1_0;
  readonly pageBinding?: PagePageBindingV1_2_0;
  readonly objects?: PagePageFormattingObjectsV1_4_0;
  readonly type?: "Drillthrough" | "Tooltip";
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<PageVisualInteraction>;
  readonly autoPageGenerationConfig?: PageAutoPageGenerationConfigV1_2_0;
  readonly annotations?: ReadonlyArray<PageAnnotation>;
  readonly howCreated?: "Default" | "Copilot";
};

export const PageV1_4_0: Schema.Codec<PageV1_4_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.4.0/schema.json",
  ),
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PagePageDisplayOption),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(
    Schema.suspend(() => FilterConfigurationEmbeddedV1_1_0),
  ),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PagePageBindingV1_2_0)),
  objects: Schema.optionalKey(
    Schema.suspend(() => PagePageFormattingObjectsV1_4_0),
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
    Schema.Array(Schema.suspend(() => PageVisualInteraction)),
  ),
  autoPageGenerationConfig: Schema.optionalKey(
    Schema.suspend(() => PageAutoPageGenerationConfigV1_2_0),
  ),
  annotations: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => PageAnnotation)),
  ),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
});
