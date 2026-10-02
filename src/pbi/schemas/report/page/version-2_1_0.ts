import { Schema } from "effect";
import { Annotation, DisplayArea, closed } from "../shared.js";
import { FilterConfigurationEmbeddedV1_3_0 } from "../filter-configuration/version-1_3_0.js";
import { SelectorV1_5_0 } from "../formatting-object-definitions/version-1_5_0.js";
import { QueryExpressionContainerV1_4_0 } from "../semantic-query/version-1_4_0.js";
import {
  BindingType,
  FilterCard,
  PageBackground,
  PageDisplayOption,
  PageInformation,
  PageOutspacePane,
  PageRefresh,
  PageSize,
  PersonalizeVisual,
  QuickExploreLayoutContainer,
  QuickExploreRelatedLayout,
  VisualInteraction,
  VisualInteractionFilterType,
} from "./shared.js";

export type PageBindingV2_1_0 = {
  readonly name: string;
  readonly type: BindingType;
  readonly referenceScope?: "Default" | "CrossReport";
  readonly parameters?: ReadonlyArray<BindingParameterV2_1_0>;
  readonly acceptsFilterContext?: "Default" | "None";
};

export const PageBindingV2_1_0: Schema.Codec<PageBindingV2_1_0> = closed({
  name: Schema.String,
  type: Schema.suspend(() => BindingType),
  referenceScope: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("CrossReport")]),
  ),
  parameters: Schema.optionalKey(Schema.Array(Schema.suspend(() => BindingParameterV2_1_0))),
  acceptsFilterContext: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("None")]),
  ),
});

export type BindingParameterV2_1_0 = {
  readonly name: string;
  readonly boundFilter?: string;
  readonly asAggregation?: boolean;
  readonly qnaSingleSelectRequired?: boolean;
  readonly fieldExpr?: QueryExpressionContainerV1_4_0;
};

export const BindingParameterV2_1_0: Schema.Codec<BindingParameterV2_1_0> = closed({
  name: Schema.String,
  boundFilter: Schema.optionalKey(Schema.String),
  asAggregation: Schema.optionalKey(Schema.Boolean),
  qnaSingleSelectRequired: Schema.optionalKey(Schema.Boolean),
  fieldExpr: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
});

export type PageFormattingObjectsV2_1_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: PageInformation;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: PageSize;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: PageBackground;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: DisplayArea;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: PageBackground;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: PageOutspacePane;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: FilterCard;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: PageRefresh;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: PersonalizeVisual;
  }>;
};

export const PageFormattingObjectsV2_1_0: Schema.Codec<PageFormattingObjectsV2_1_0> = closed({
  pageInformation: Schema.optionalKey(
    Schema.Array(
      closed({
        selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
        properties: Schema.suspend(() => PageInformation),
      }),
    ),
  ),
  pageSize: Schema.optionalKey(
    Schema.Array(
      closed({
        selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
        properties: Schema.suspend(() => PageSize),
      }),
    ),
  ),
  background: Schema.optionalKey(
    Schema.Array(
      closed({
        selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
        properties: Schema.suspend(() => PageBackground),
      }),
    ),
  ),
  displayArea: Schema.optionalKey(
    Schema.Array(
      closed({
        selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
        properties: Schema.suspend(() => DisplayArea),
      }),
    ),
  ),
  outspace: Schema.optionalKey(
    Schema.Array(
      closed({
        selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
        properties: Schema.suspend(() => PageBackground),
      }),
    ),
  ),
  outspacePane: Schema.optionalKey(
    Schema.Array(
      closed({
        selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
        properties: Schema.suspend(() => PageOutspacePane),
      }),
    ),
  ),
  filterCard: Schema.optionalKey(
    Schema.Array(
      closed({
        selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
        properties: Schema.suspend(() => FilterCard),
      }),
    ),
  ),
  pageRefresh: Schema.optionalKey(
    Schema.Array(
      closed({
        selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
        properties: Schema.suspend(() => PageRefresh),
      }),
    ),
  ),
  personalizeVisual: Schema.optionalKey(
    Schema.Array(
      closed({
        selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
        properties: Schema.suspend(() => PersonalizeVisual),
      }),
    ),
  ),
});

export type AutoPageGenerationConfigV2_1_0 = {
  readonly selectedFields: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly visualContainerConfigurations: ReadonlyArray<QuickExploreVisualContainerConfigV2_1_0>;
  readonly layout?: QuickExploreLayoutContainer;
};

export const AutoPageGenerationConfigV2_1_0: Schema.Codec<AutoPageGenerationConfigV2_1_0> = closed({
  selectedFields: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
  visualContainerConfigurations: Schema.Array(
    Schema.suspend(() => QuickExploreVisualContainerConfigV2_1_0),
  ),
  layout: Schema.optionalKey(Schema.suspend(() => QuickExploreLayoutContainer)),
});

export type QuickExploreVisualContainerConfigV2_1_0 = {
  readonly name: string;
  readonly fields: ReadonlyArray<QueryExpressionContainerV1_4_0>;
};

export const QuickExploreVisualContainerConfigV2_1_0: Schema.Codec<QuickExploreVisualContainerConfigV2_1_0> =
  closed({
    name: Schema.String,
    fields: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_4_0)),
  });

export const PageDefinitionsV2_1_0 = {
  PageDisplayOption: PageDisplayOption,
  PageBinding: PageBindingV2_1_0,
  BindingType: BindingType,
  BindingParameter: BindingParameterV2_1_0,
  PageFormattingObjects: PageFormattingObjectsV2_1_0,
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
  AutoPageGenerationConfig: AutoPageGenerationConfigV2_1_0,
  QuickExploreVisualContainerConfig: QuickExploreVisualContainerConfigV2_1_0,
  QuickExploreLayoutContainer: QuickExploreLayoutContainer,
  QuickExploreRelatedLayout: QuickExploreRelatedLayout,
  QuickExploreCombinationLayout: QuickExploreRelatedLayout,
  Annotation: Annotation,
} as const;

export type PageV2_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.1.0/schema.json";
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PageDisplayOption;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: FilterConfigurationEmbeddedV1_3_0;
  readonly pageBinding?: PageBindingV2_1_0;
  readonly objects?: PageFormattingObjectsV2_1_0;
  readonly type?: "Drillthrough" | "Tooltip";
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<VisualInteraction>;
  readonly autoPageGenerationConfig?: AutoPageGenerationConfigV2_1_0;
  readonly annotations?: ReadonlyArray<Annotation>;
  readonly howCreated?: "Default" | "Copilot";
};

export const PageV2_1_0: Schema.Codec<PageV2_1_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.1.0/schema.json",
  ),
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PageDisplayOption),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(Schema.suspend(() => FilterConfigurationEmbeddedV1_3_0)),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PageBindingV2_1_0)),
  objects: Schema.optionalKey(Schema.suspend(() => PageFormattingObjectsV2_1_0)),
  type: Schema.optionalKey(
    Schema.Union([Schema.Literal("Drillthrough"), Schema.Literal("Tooltip")]),
  ),
  visibility: Schema.optionalKey(
    Schema.Union([Schema.Literal("AlwaysVisible"), Schema.Literal("HiddenInViewMode")]),
  ),
  visualInteractions: Schema.optionalKey(Schema.Array(Schema.suspend(() => VisualInteraction))),
  autoPageGenerationConfig: Schema.optionalKey(
    Schema.suspend(() => AutoPageGenerationConfigV2_1_0),
  ),
  annotations: Schema.optionalKey(Schema.Array(Schema.suspend(() => Annotation))),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
});

export {
  PageBindingV2_1_0 as PagePageBindingV2_1_0,
  BindingParameterV2_1_0 as PageBindingParameterV2_1_0,
  PageFormattingObjectsV2_1_0 as PagePageFormattingObjectsV2_1_0,
  AutoPageGenerationConfigV2_1_0 as PageAutoPageGenerationConfigV2_1_0,
  QuickExploreVisualContainerConfigV2_1_0 as PageQuickExploreVisualContainerConfigV2_1_0,
};

export {
  DisplayArea as PageDisplayAreaV2_1_0,
  Annotation as PageAnnotationV2_1_0,
} from "../shared.js";

export {
  PageDisplayOption as PagePageDisplayOptionV2_1_0,
  BindingType as PageBindingTypeV2_1_0,
  PageInformation as PagePageInformationV2_1_0,
  PageSize as PagePageSizeV2_1_0,
  PageBackground as PageBackgroundV2_1_0,
  PageOutspacePane as PageOutspacePaneV2_1_0,
  FilterCard as PageFilterCardV2_1_0,
  PageRefresh as PagePageRefreshV2_1_0,
  PersonalizeVisual as PagePersonalizeVisualV2_1_0,
  VisualInteraction as PageVisualInteractionV2_1_0,
  VisualInteractionFilterType as PageVisualInteractionFilterTypeV2_1_0,
  QuickExploreLayoutContainer as PageQuickExploreLayoutContainerV2_1_0,
  QuickExploreRelatedLayout as PageQuickExploreRelatedLayoutV2_1_0,
  QuickExploreRelatedLayout as PageQuickExploreCombinationLayoutV2_1_0,
} from "./shared.js";
