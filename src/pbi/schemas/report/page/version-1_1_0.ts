import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  FormattingObjectDefinitionsDefinitionsV1_1_0,
  FormattingObjectDefinitionsSelectorV1_1_0,
} from "../formatting-object-definitions/shared.js";
import { QueryExpressionContainerV1_1_0 } from "../semantic-query/shared.js";
import { VisualContainerFilterContainerFormattingObjectsProperties } from "../visual-container/shared.js";
import {
  PageAnnotation,
  PageBackground,
  PageBindingType,
  PageDisplayArea,
  PageFilterCard,
  PageFilterConfigV1_1_0,
  PageFilterContainerFormattingObjectsV1_1_0,
  PageFilterContainerV1_1_0,
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

export type PagePageBindingV1_1_0 = {
  readonly name: string;
  readonly type: PageBindingType;
  readonly referenceScope?: "Default" | "CrossReport";
  readonly parameters?: ReadonlyArray<PageBindingParameterV1_1_0>;
  readonly acceptsFilterContext?: "Default" | "None";
};

export const PagePageBindingV1_1_0: Schema.Codec<PagePageBindingV1_1_0> = closed({
  name: Schema.String,
  type: Schema.suspend(() => PageBindingType),
  referenceScope: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("CrossReport")]),
  ),
  parameters: Schema.optionalKey(Schema.Array(Schema.suspend(() => PageBindingParameterV1_1_0))),
  acceptsFilterContext: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("None")]),
  ),
});

export type PageBindingParameterV1_1_0 = {
  readonly name: string;
  readonly boundFilter: string;
  readonly asAggregation?: boolean;
  readonly qnaSingleSelectRequired?: boolean;
  readonly fieldExpr?: QueryExpressionContainerV1_1_0;
};

export const PageBindingParameterV1_1_0: Schema.Codec<PageBindingParameterV1_1_0> = closed({
  name: Schema.String,
  boundFilter: Schema.String,
  asAggregation: Schema.optionalKey(Schema.Boolean),
  qnaSingleSelectRequired: Schema.optionalKey(Schema.Boolean),
  fieldExpr: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
});

export type PagePageFormattingObjectsV1_1_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PagePageInformation;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PagePageSize;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PageBackground;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PageDisplayArea;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PageBackground;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PageOutspacePane;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PageFilterCard;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PagePageRefresh;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PagePersonalizeVisual;
  }>;
};

export const PagePageFormattingObjectsV1_1_0: Schema.Codec<PagePageFormattingObjectsV1_1_0> =
  closed({
    pageInformation: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => PagePageInformation),
        }),
      ),
    ),
    pageSize: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => PagePageSize),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => PageBackground),
        }),
      ),
    ),
    displayArea: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => PageDisplayArea),
        }),
      ),
    ),
    outspace: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => PageBackground),
        }),
      ),
    ),
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => PageOutspacePane),
        }),
      ),
    ),
    filterCard: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => PageFilterCard),
        }),
      ),
    ),
    pageRefresh: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => PagePageRefresh),
        }),
      ),
    ),
    personalizeVisual: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => PagePersonalizeVisual),
        }),
      ),
    ),
  });

export type PageAutoPageGenerationConfigV1_1_0 = {
  readonly selectedFields: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly visualContainerConfigurations: ReadonlyArray<PageQuickExploreVisualContainerConfigV1_1_0>;
  readonly layout?: PageQuickExploreLayoutContainer;
};

export const PageAutoPageGenerationConfigV1_1_0: Schema.Codec<PageAutoPageGenerationConfigV1_1_0> =
  closed({
    selectedFields: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
    visualContainerConfigurations: Schema.Array(
      Schema.suspend(() => PageQuickExploreVisualContainerConfigV1_1_0),
    ),
    layout: Schema.optionalKey(Schema.suspend(() => PageQuickExploreLayoutContainer)),
  });

export type PageQuickExploreVisualContainerConfigV1_1_0 = {
  readonly name: string;
  readonly fields: ReadonlyArray<QueryExpressionContainerV1_1_0>;
};

export const PageQuickExploreVisualContainerConfigV1_1_0: Schema.Codec<PageQuickExploreVisualContainerConfigV1_1_0> =
  closed({
    name: Schema.String,
    fields: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
  });

export const PageDefinitionsV1_1_0 = {
  PageDisplayOption: PagePageDisplayOption,
  FilterConfig: PageFilterConfigV1_1_0,
  FilterContainer: PageFilterContainerV1_1_0,
  FilterContainerFormattingObjects: PageFilterContainerFormattingObjectsV1_1_0,
  FilterContainerFormattingObjectsProperties:
    VisualContainerFilterContainerFormattingObjectsProperties,
  PageBinding: PagePageBindingV1_1_0,
  BindingType: PageBindingType,
  BindingParameter: PageBindingParameterV1_1_0,
  PageFormattingObjects: PagePageFormattingObjectsV1_1_0,
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
  AutoPageGenerationConfig: PageAutoPageGenerationConfigV1_1_0,
  QuickExploreVisualContainerConfig: PageQuickExploreVisualContainerConfigV1_1_0,
  QuickExploreLayoutContainer: PageQuickExploreLayoutContainer,
  QuickExploreRelatedLayout: PageQuickExploreRelatedLayout,
  QuickExploreCombinationLayout: PageQuickExploreCombinationLayout,
  Annotation: PageAnnotation,
} as const;

export type PageV1_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.1.0/schema.json";
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PagePageDisplayOption;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: PageFilterConfigV1_1_0;
  readonly pageBinding?: PagePageBindingV1_1_0;
  readonly objects?: PagePageFormattingObjectsV1_1_0;
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<PageVisualInteraction>;
  readonly autoPageGenerationConfig?: PageAutoPageGenerationConfigV1_1_0;
  readonly annotations?: ReadonlyArray<PageAnnotation>;
  readonly howCreated?: "Default" | "Copilot";
};

export const PageV1_1_0: Schema.Codec<PageV1_1_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.1.0/schema.json",
  ),
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PagePageDisplayOption),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(Schema.suspend(() => PageFilterConfigV1_1_0)),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PagePageBindingV1_1_0)),
  objects: Schema.optionalKey(Schema.suspend(() => PagePageFormattingObjectsV1_1_0)),
  visibility: Schema.optionalKey(
    Schema.Union([Schema.Literal("AlwaysVisible"), Schema.Literal("HiddenInViewMode")]),
  ),
  visualInteractions: Schema.optionalKey(Schema.Array(Schema.suspend(() => PageVisualInteraction))),
  autoPageGenerationConfig: Schema.optionalKey(
    Schema.suspend(() => PageAutoPageGenerationConfigV1_1_0),
  ),
  annotations: Schema.optionalKey(Schema.Array(Schema.suspend(() => PageAnnotation))),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
});
