import { Schema } from "effect";

import { SelectorV1_0_0 } from "../formatting-object-definitions/version-1.0.0.js";
import {
  Background as PageBackground,
  BindingType,
  DisplayArea,
  FilterCard,
  OutspacePane as PageOutspacePane,
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
import {
  FilterDefinitionV1_0_0,
  QueryExpressionContainerV1_0_0,
} from "../semantic-query/version-1.0.0.js";
import {
  Annotation,
  closed,
  FilterContainerFormattingProperties,
} from "../shared.js";

export type FilterConfigV1_0_0 = {
  readonly filters?: ReadonlyArray<FilterContainerV1_0_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};

export const FilterConfigV1_0_0: Schema.Codec<FilterConfigV1_0_0> = closed({
  filters: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => FilterContainerV1_0_0)),
  ),
  filterSortOrder: Schema.optionalKey(
    Schema.Union([
      Schema.Literal("Ascending"),
      Schema.Literal("Descending"),
      Schema.Literal("Custom"),
    ]),
  ),
});

export type FilterContainerV1_0_0 = {
  readonly name: string;
  readonly displayName?: string;
  readonly ordinal?: number;
  readonly field?: QueryExpressionContainerV1_0_0;
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
    | "RelativeTime";
  readonly filter?: FilterDefinitionV1_0_0;
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
      Schema.suspend(() => QueryExpressionContainerV1_0_0),
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
      ]),
    ),
    filter: Schema.optionalKey(Schema.suspend(() => FilterDefinitionV1_0_0)),
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
    readonly selector?: SelectorV1_0_0;
    readonly properties: FilterContainerFormattingProperties;
  }>;
};

export const FilterContainerFormattingObjectsV1_0_0: Schema.Codec<FilterContainerFormattingObjectsV1_0_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => FilterContainerFormattingProperties),
        }),
      ),
    ),
  });

export type PageBindingV1_0_0 = {
  readonly name: string;
  readonly type: BindingType;
  readonly referenceScope?: "Default" | "CrossReport";
  readonly parameters?: ReadonlyArray<BindingParameterV1_0_0>;
  readonly acceptsFilterContext?: "Default" | "None";
};

export const PageBindingV1_0_0: Schema.Codec<PageBindingV1_0_0> = closed({
  name: Schema.String,
  type: Schema.suspend(() => BindingType),
  referenceScope: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("CrossReport")]),
  ),
  parameters: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => BindingParameterV1_0_0)),
  ),
  acceptsFilterContext: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("None")]),
  ),
});

export type BindingParameterV1_0_0 = {
  readonly name: string;
  readonly boundFilter: string;
  readonly asAggregation?: boolean;
  readonly qnaSingleSelectRequired?: boolean;
  readonly fieldExpr?: QueryExpressionContainerV1_0_0;
};

export const BindingParameterV1_0_0: Schema.Codec<BindingParameterV1_0_0> =
  closed({
    name: Schema.String,
    boundFilter: Schema.String,
    asAggregation: Schema.optionalKey(Schema.Boolean),
    qnaSingleSelectRequired: Schema.optionalKey(Schema.Boolean),
    fieldExpr: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_0_0),
    ),
  });

export type PageFormattingObjectsV1_0_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: PageInformation;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: PageSize;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: PageBackground;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: DisplayArea;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: PageBackground;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: PageOutspacePane;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: FilterCard;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: PageRefresh;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: PersonalizeVisual;
  }>;
};

export const PageFormattingObjectsV1_0_0: Schema.Codec<PageFormattingObjectsV1_0_0> =
  closed({
    pageInformation: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => PageInformation),
        }),
      ),
    ),
    pageSize: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => PageSize),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => PageBackground),
        }),
      ),
    ),
    displayArea: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => DisplayArea),
        }),
      ),
    ),
    outspace: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => PageBackground),
        }),
      ),
    ),
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => PageOutspacePane),
        }),
      ),
    ),
    filterCard: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => FilterCard),
        }),
      ),
    ),
    pageRefresh: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => PageRefresh),
        }),
      ),
    ),
    personalizeVisual: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => PersonalizeVisual),
        }),
      ),
    ),
  });

export type AutoPageGenerationConfigV1_0_0 = {
  readonly selectedFields: ReadonlyArray<QueryExpressionContainerV1_0_0>;
  readonly visualContainerConfigurations: ReadonlyArray<QuickExploreVisualContainerConfigV1_0_0>;
  readonly layout?: QuickExploreLayoutContainer;
};

export const AutoPageGenerationConfigV1_0_0: Schema.Codec<AutoPageGenerationConfigV1_0_0> =
  closed({
    selectedFields: Schema.Array(
      Schema.suspend(() => QueryExpressionContainerV1_0_0),
    ),
    visualContainerConfigurations: Schema.Array(
      Schema.suspend(() => QuickExploreVisualContainerConfigV1_0_0),
    ),
    layout: Schema.optionalKey(
      Schema.suspend(() => QuickExploreLayoutContainer),
    ),
  });

export type QuickExploreVisualContainerConfigV1_0_0 = {
  readonly name: string;
  readonly fields: ReadonlyArray<QueryExpressionContainerV1_0_0>;
};

export const QuickExploreVisualContainerConfigV1_0_0: Schema.Codec<QuickExploreVisualContainerConfigV1_0_0> =
  closed({
    name: Schema.String,
    fields: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_0_0)),
  });

export type PageV1_0_0 = {
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PageDisplayOption;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: FilterConfigV1_0_0;
  readonly pageBinding?: PageBindingV1_0_0;
  readonly objects?: PageFormattingObjectsV1_0_0;
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<VisualInteraction>;
  readonly autoPageGenerationConfig?: AutoPageGenerationConfigV1_0_0;
  readonly annotations?: ReadonlyArray<Annotation>;
  readonly howCreated?: "Default" | "Copilot";
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.0.0/schema.json";
};

export const PageV1_0_0: Schema.Codec<PageV1_0_0> = closed({
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PageDisplayOption),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(Schema.suspend(() => FilterConfigV1_0_0)),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PageBindingV1_0_0)),
  objects: Schema.optionalKey(
    Schema.suspend(() => PageFormattingObjectsV1_0_0),
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
    Schema.suspend(() => AutoPageGenerationConfigV1_0_0),
  ),
  annotations: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => Annotation)),
  ),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.0.0/schema.json",
  ),
});

export const PageDefinitionsV1_0_0 = {
  PageDisplayOption: PageDisplayOption,
  FilterConfig: FilterConfigV1_0_0,
  FilterContainer: FilterContainerV1_0_0,
  FilterContainerFormattingObjects: FilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
  PageBinding: PageBindingV1_0_0,
  BindingType: BindingType,
  BindingParameter: BindingParameterV1_0_0,
  PageFormattingObjects: PageFormattingObjectsV1_0_0,
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
  AutoPageGenerationConfig: AutoPageGenerationConfigV1_0_0,
  QuickExploreVisualContainerConfig: QuickExploreVisualContainerConfigV1_0_0,
  QuickExploreLayoutContainer: QuickExploreLayoutContainer,
  QuickExploreRelatedLayout: QuickExploreRelatedLayout,
  QuickExploreCombinationLayout: QuickExploreRelatedLayout,
  Annotation: Annotation,
} as const;

export {
  PageDisplayOption as PagePageDisplayOptionV1_0_0,
  BindingType as PageBindingTypeV1_0_0,
  PageInformation as PagePageInformationV1_0_0,
  PageSize as PagePageSizeV1_0_0,
  Background as PageBackgroundV1_0_0,
  DisplayArea as PageDisplayAreaV1_0_0,
  OutspacePane as PageOutspacePaneV1_0_0,
  FilterCard as PageFilterCardV1_0_0,
  PageRefresh as PagePageRefreshV1_0_0,
  PersonalizeVisual as PagePersonalizeVisualV1_0_0,
  VisualInteraction as PageVisualInteractionV1_0_0,
  VisualInteractionFilterType as PageVisualInteractionFilterTypeV1_0_0,
  QuickExploreLayoutContainer as PageQuickExploreLayoutContainerV1_0_0,
  QuickExploreRelatedLayout as PageQuickExploreRelatedLayoutV1_0_0,
  QuickExploreRelatedLayout as PageQuickExploreCombinationLayoutV1_0_0,
} from "./shared.js";

export {
  FilterConfigV1_0_0 as PageFilterConfigV1_0_0,
  FilterContainerV1_0_0 as PageFilterContainerV1_0_0,
  FilterContainerFormattingObjectsV1_0_0 as PageFilterContainerFormattingObjectsV1_0_0,
  PageBindingV1_0_0 as PagePageBindingV1_0_0,
  BindingParameterV1_0_0 as PageBindingParameterV1_0_0,
  PageFormattingObjectsV1_0_0 as PagePageFormattingObjectsV1_0_0,
  AutoPageGenerationConfigV1_0_0 as PageAutoPageGenerationConfigV1_0_0,
  QuickExploreVisualContainerConfigV1_0_0 as PageQuickExploreVisualContainerConfigV1_0_0,
};

export {
  FilterContainerFormattingProperties as PageFilterContainerFormattingObjectsPropertiesV1_0_0,
  Annotation as PageAnnotationV1_0_0,
} from "../shared.js";
