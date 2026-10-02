import { Schema } from "effect";
import { closed } from "../shared.js";
import { FilterConfigurationEmbeddedV1_3_0 } from "../filter-configuration/shared.js";
import {
  FormattingObjectDefinitionsDefinitionsV1_5_0,
  FormattingObjectDefinitionsSelectorV1_5_0,
} from "../formatting-object-definitions/shared.js";
import { QueryExpressionContainerV1_4_0 } from "../semantic-query/shared.js";
import {
  PageAnnotation,
  PageBackground,
  PageBindingType,
  PageDisplayArea,
  PageFilterCard,
  PageOutspacePane,
  PagePageDisplayOption,
  PagePageInformation,
  PagePageRefresh,
  PagePageSize,
  PagePersonalizeVisual,
  PageQuickExploreCombinationLayout,
  PageQuickExploreLayoutContainer,
  PageQuickExploreRelatedLayout,
  PageVisualInteraction,
  PageVisualInteractionFilterType,
} from "./shared.js";

export type PagePageBindingV2_1_0 = {
  readonly name: string;
  readonly type: PageBindingType;
  readonly referenceScope?: "Default" | "CrossReport";
  readonly parameters?: ReadonlyArray<PageBindingParameterV2_1_0>;
  readonly acceptsFilterContext?: "Default" | "None";
};

export const PagePageBindingV2_1_0: Schema.Codec<PagePageBindingV2_1_0> = closed({
  name: Schema.String,
  type: Schema.suspend(() => PageBindingType),
  referenceScope: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("CrossReport")]),
  ),
  parameters: Schema.optionalKey(Schema.Array(Schema.suspend(() => PageBindingParameterV2_1_0))),
  acceptsFilterContext: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("None")]),
  ),
});

export type PageBindingParameterV2_1_0 = {
  readonly name: string;
  readonly boundFilter?: string;
  readonly asAggregation?: boolean;
  readonly qnaSingleSelectRequired?: boolean;
  readonly fieldExpr?: QueryExpressionContainerV1_4_0;
};

export const PageBindingParameterV2_1_0: Schema.Codec<PageBindingParameterV2_1_0> = closed({
  name: Schema.String,
  boundFilter: Schema.optionalKey(Schema.String),
  asAggregation: Schema.optionalKey(Schema.Boolean),
  qnaSingleSelectRequired: Schema.optionalKey(Schema.Boolean),
  fieldExpr: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
});

export type PagePageFormattingObjectsV2_1_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PagePageInformation;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PagePageSize;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PageBackground;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PageDisplayArea;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PageBackground;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PageOutspacePane;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PageFilterCard;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PagePageRefresh;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PagePersonalizeVisual;
  }>;
};

export const PagePageFormattingObjectsV2_1_0: Schema.Codec<PagePageFormattingObjectsV2_1_0> =
  closed({
    pageInformation: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector),
          ),
          properties: Schema.suspend(() => PagePageInformation),
        }),
      ),
    ),
    pageSize: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector),
          ),
          properties: Schema.suspend(() => PagePageSize),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector),
          ),
          properties: Schema.suspend(() => PageBackground),
        }),
      ),
    ),
    displayArea: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector),
          ),
          properties: Schema.suspend(() => PageDisplayArea),
        }),
      ),
    ),
    outspace: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector),
          ),
          properties: Schema.suspend(() => PageBackground),
        }),
      ),
    ),
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector),
          ),
          properties: Schema.suspend(() => PageOutspacePane),
        }),
      ),
    ),
    filterCard: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector),
          ),
          properties: Schema.suspend(() => PageFilterCard),
        }),
      ),
    ),
    pageRefresh: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector),
          ),
          properties: Schema.suspend(() => PagePageRefresh),
        }),
      ),
    ),
    personalizeVisual: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_5_0.Selector),
          ),
          properties: Schema.suspend(() => PagePersonalizeVisual),
        }),
      ),
    ),
  });

export type PageAutoPageGenerationConfigV2_1_0 = {
  readonly selectedFields: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly visualContainerConfigurations: ReadonlyArray<PageQuickExploreVisualContainerConfigV2_1_0>;
  readonly layout?: PageQuickExploreLayoutContainer;
};

export const PageAutoPageGenerationConfigV2_1_0: Schema.Codec<PageAutoPageGenerationConfigV2_1_0> =
  closed({
    selectedFields: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
    visualContainerConfigurations: Schema.Array(
      Schema.suspend(() => PageQuickExploreVisualContainerConfigV2_1_0),
    ),
    layout: Schema.optionalKey(Schema.suspend(() => PageQuickExploreLayoutContainer)),
  });

export type PageQuickExploreVisualContainerConfigV2_1_0 = {
  readonly name: string;
  readonly fields: ReadonlyArray<QueryExpressionContainerV1_4_0>;
};

export const PageQuickExploreVisualContainerConfigV2_1_0: Schema.Codec<PageQuickExploreVisualContainerConfigV2_1_0> =
  closed({
    name: Schema.String,
    fields: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
  });

export const PageDefinitionsV2_1_0 = {
  PageDisplayOption: PagePageDisplayOption,
  PageBinding: PagePageBindingV2_1_0,
  BindingType: PageBindingType,
  BindingParameter: PageBindingParameterV2_1_0,
  PageFormattingObjects: PagePageFormattingObjectsV2_1_0,
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
  AutoPageGenerationConfig: PageAutoPageGenerationConfigV2_1_0,
  QuickExploreVisualContainerConfig: PageQuickExploreVisualContainerConfigV2_1_0,
  QuickExploreLayoutContainer: PageQuickExploreLayoutContainer,
  QuickExploreRelatedLayout: PageQuickExploreRelatedLayout,
  QuickExploreCombinationLayout: PageQuickExploreCombinationLayout,
  Annotation: PageAnnotation,
} as const;

export type PageV2_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.1.0/schema.json";
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PagePageDisplayOption;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: FilterConfigurationEmbeddedV1_3_0;
  readonly pageBinding?: PagePageBindingV2_1_0;
  readonly objects?: PagePageFormattingObjectsV2_1_0;
  readonly type?: "Drillthrough" | "Tooltip";
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<PageVisualInteraction>;
  readonly autoPageGenerationConfig?: PageAutoPageGenerationConfigV2_1_0;
  readonly annotations?: ReadonlyArray<PageAnnotation>;
  readonly howCreated?: "Default" | "Copilot";
};

export const PageV2_1_0: Schema.Codec<PageV2_1_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.1.0/schema.json",
  ),
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PagePageDisplayOption),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(Schema.suspend(() => FilterConfigurationEmbeddedV1_3_0)),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PagePageBindingV2_1_0)),
  objects: Schema.optionalKey(Schema.suspend(() => PagePageFormattingObjectsV2_1_0)),
  type: Schema.optionalKey(
    Schema.Union([Schema.Literal("Drillthrough"), Schema.Literal("Tooltip")]),
  ),
  visibility: Schema.optionalKey(
    Schema.Union([Schema.Literal("AlwaysVisible"), Schema.Literal("HiddenInViewMode")]),
  ),
  visualInteractions: Schema.optionalKey(Schema.Array(Schema.suspend(() => PageVisualInteraction))),
  autoPageGenerationConfig: Schema.optionalKey(
    Schema.suspend(() => PageAutoPageGenerationConfigV2_1_0),
  ),
  annotations: Schema.optionalKey(Schema.Array(Schema.suspend(() => PageAnnotation))),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
});
