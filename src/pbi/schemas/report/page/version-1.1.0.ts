import { Schema } from "effect";
import { SelectorV1_1_0 } from "../formatting-object-definitions/version-1.1.0.js";
import {
  Background,
  BindingType,
  DisplayArea,
  FilterCard,
  FilterConfigV1_1_0,
  FilterContainerFormattingObjectsV1_1_0,
  FilterContainerV1_1_0,
  OutspacePane,
  PageDisplayOption,
  PageInformation,
  PageRefresh,
  PageSize,
  PersonalizeVisual,
  QuickExploreLayoutContainer,
  QuickExploreRelatedLayout,
  VisualInteraction,
  VisualInteractionFilterType,
} from "./shared.js";
import { QueryExpressionContainerV1_1_0 } from "../semantic-query/shared.js";
import {
  Annotation,
  closed,
  FilterContainerFormattingProperties,
} from "../shared.js";

export type PageBindingV1_1_0 = {
  readonly name: string;
  readonly type: BindingType;
  readonly referenceScope?: "Default" | "CrossReport";
  readonly parameters?: ReadonlyArray<BindingParameterV1_1_0>;
  readonly acceptsFilterContext?: "Default" | "None";
};

export const PageBindingV1_1_0: Schema.Codec<PageBindingV1_1_0> = closed({
  name: Schema.String,
  type: Schema.suspend(() => BindingType),
  referenceScope: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("CrossReport")]),
  ),
  parameters: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => BindingParameterV1_1_0)),
  ),
  acceptsFilterContext: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("None")]),
  ),
});

export type BindingParameterV1_1_0 = {
  readonly name: string;
  readonly boundFilter: string;
  readonly asAggregation?: boolean;
  readonly qnaSingleSelectRequired?: boolean;
  readonly fieldExpr?: QueryExpressionContainerV1_1_0;
};

export const BindingParameterV1_1_0: Schema.Codec<BindingParameterV1_1_0> =
  closed({
    name: Schema.String,
    boundFilter: Schema.String,
    asAggregation: Schema.optionalKey(Schema.Boolean),
    qnaSingleSelectRequired: Schema.optionalKey(Schema.Boolean),
    fieldExpr: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_1_0),
    ),
  });

export type PageFormattingObjectsV1_1_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: PageInformation;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: PageSize;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: Background;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: DisplayArea;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: Background;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: OutspacePane;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: FilterCard;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: PageRefresh;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: PersonalizeVisual;
  }>;
};

export const PageFormattingObjectsV1_1_0: Schema.Codec<PageFormattingObjectsV1_1_0> =
  closed({
    pageInformation: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => PageInformation),
        }),
      ),
    ),
    pageSize: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => PageSize),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => Background),
        }),
      ),
    ),
    displayArea: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => DisplayArea),
        }),
      ),
    ),
    outspace: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => Background),
        }),
      ),
    ),
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => OutspacePane),
        }),
      ),
    ),
    filterCard: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => FilterCard),
        }),
      ),
    ),
    pageRefresh: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => PageRefresh),
        }),
      ),
    ),
    personalizeVisual: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => PersonalizeVisual),
        }),
      ),
    ),
  });

export type AutoPageGenerationConfigV1_1_0 = {
  readonly selectedFields: ReadonlyArray<QueryExpressionContainerV1_1_0>;
  readonly visualContainerConfigurations: ReadonlyArray<QuickExploreVisualContainerConfigV1_1_0>;
  readonly layout?: QuickExploreLayoutContainer;
};

export const AutoPageGenerationConfigV1_1_0: Schema.Codec<AutoPageGenerationConfigV1_1_0> =
  closed({
    selectedFields: Schema.Array(
      Schema.suspend(() => QueryExpressionContainerV1_1_0),
    ),
    visualContainerConfigurations: Schema.Array(
      Schema.suspend(() => QuickExploreVisualContainerConfigV1_1_0),
    ),
    layout: Schema.optionalKey(
      Schema.suspend(() => QuickExploreLayoutContainer),
    ),
  });

export type QuickExploreVisualContainerConfigV1_1_0 = {
  readonly name: string;
  readonly fields: ReadonlyArray<QueryExpressionContainerV1_1_0>;
};

export const QuickExploreVisualContainerConfigV1_1_0: Schema.Codec<QuickExploreVisualContainerConfigV1_1_0> =
  closed({
    name: Schema.String,
    fields: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_1_0)),
  });

export type PageV1_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.1.0/schema.json";
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PageDisplayOption;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: FilterConfigV1_1_0;
  readonly pageBinding?: PageBindingV1_1_0;
  readonly objects?: PageFormattingObjectsV1_1_0;
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<VisualInteraction>;
  readonly autoPageGenerationConfig?: AutoPageGenerationConfigV1_1_0;
  readonly annotations?: ReadonlyArray<Annotation>;
  readonly howCreated?: "Default" | "Copilot";
};

export const PageV1_1_0: Schema.Codec<PageV1_1_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.1.0/schema.json",
  ),
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PageDisplayOption),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(Schema.suspend(() => FilterConfigV1_1_0)),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PageBindingV1_1_0)),
  objects: Schema.optionalKey(
    Schema.suspend(() => PageFormattingObjectsV1_1_0),
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
    Schema.suspend(() => AutoPageGenerationConfigV1_1_0),
  ),
  annotations: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => Annotation)),
  ),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
});

export const PageDefinitionsV1_1_0 = {
  PageDisplayOption: PageDisplayOption,
  FilterConfig: FilterConfigV1_1_0,
  FilterContainer: FilterContainerV1_1_0,
  FilterContainerFormattingObjects: FilterContainerFormattingObjectsV1_1_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
  PageBinding: PageBindingV1_1_0,
  BindingType: BindingType,
  BindingParameter: BindingParameterV1_1_0,
  PageFormattingObjects: PageFormattingObjectsV1_1_0,
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
  AutoPageGenerationConfig: AutoPageGenerationConfigV1_1_0,
  QuickExploreVisualContainerConfig: QuickExploreVisualContainerConfigV1_1_0,
  QuickExploreLayoutContainer: QuickExploreLayoutContainer,
  QuickExploreRelatedLayout: QuickExploreRelatedLayout,
  QuickExploreCombinationLayout: QuickExploreRelatedLayout,
  Annotation: Annotation,
} as const;

export {
  PageDisplayOption as PagePageDisplayOptionV1_1_0,
  FilterConfigV1_1_0 as PageFilterConfigV1_1_0,
  FilterContainerV1_1_0 as PageFilterContainerV1_1_0,
  FilterContainerFormattingObjectsV1_1_0 as PageFilterContainerFormattingObjectsV1_1_0,
  BindingType as PageBindingTypeV1_1_0,
  PageInformation as PagePageInformationV1_1_0,
  PageSize as PagePageSizeV1_1_0,
  Background as PageBackgroundV1_1_0,
  DisplayArea as PageDisplayAreaV1_1_0,
  OutspacePane as PageOutspacePaneV1_1_0,
  FilterCard as PageFilterCardV1_1_0,
  PageRefresh as PagePageRefreshV1_1_0,
  PersonalizeVisual as PagePersonalizeVisualV1_1_0,
  VisualInteraction as PageVisualInteractionV1_1_0,
  VisualInteractionFilterType as PageVisualInteractionFilterTypeV1_1_0,
  QuickExploreLayoutContainer as PageQuickExploreLayoutContainerV1_1_0,
  QuickExploreRelatedLayout as PageQuickExploreRelatedLayoutV1_1_0,
  QuickExploreRelatedLayout as PageQuickExploreCombinationLayoutV1_1_0,
} from "./shared.js";

export {
  FilterContainerFormattingProperties as PageFilterContainerFormattingObjectsPropertiesV1_1_0,
  Annotation as PageAnnotationV1_1_0,
} from "../shared.js";

export {
  PageBindingV1_1_0 as PagePageBindingV1_1_0,
  BindingParameterV1_1_0 as PageBindingParameterV1_1_0,
  PageFormattingObjectsV1_1_0 as PagePageFormattingObjectsV1_1_0,
  AutoPageGenerationConfigV1_1_0 as PageAutoPageGenerationConfigV1_1_0,
  QuickExploreVisualContainerConfigV1_1_0 as PageQuickExploreVisualContainerConfigV1_1_0,
};
