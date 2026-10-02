import { Schema } from "effect";
import { SelectorV1_0_0 } from "../formatting-object-definitions/version-1.0.0.js";
import { SelectorV1_1_0 } from "../formatting-object-definitions/version-1.1.0.js";
import { SelectorV1_2_0 } from "../formatting-object-definitions/version-1.2.0.js";
import {
  QueryExpressionContainerV1_0_0,
  QueryExpressionContainerV1_1_0,
  QueryExpressionContainerV1_2_0,
} from "../semantic-query/shared.js";
import { FilterDefinitionV1_0_0 } from "../semantic-query/version-1.0.0.js";
import { FilterDefinitionV1_1_0 } from "../semantic-query/version-1.1.0.js";
import { closed, FilterContainerFormattingProperties } from "../shared.js";

export type PageDisplayOption =
  | "DeprecatedDynamic"
  | "FitToPage"
  | "FitToWidth"
  | "ActualSize"
  | "ActualSizeTopLeft";

export const PageDisplayOption: Schema.Codec<PageDisplayOption> = Schema.Union([
  Schema.Literal("DeprecatedDynamic"),
  Schema.Literal("FitToPage"),
  Schema.Literal("FitToWidth"),
  Schema.Literal("ActualSize"),
  Schema.Literal("ActualSizeTopLeft"),
]);

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

export type BindingType = "Default" | "Drillthrough" | "Tooltip";

export const BindingType: Schema.Codec<BindingType> = Schema.Union([
  Schema.Literal("Default"),
  Schema.Literal("Drillthrough"),
  Schema.Literal("Tooltip"),
]);

export type PageInformation = {
  readonly pageInformationName?: Schema.Json;
  readonly pageInformationQnaPodEnabled?: Schema.Json;
  readonly pageInformationAltName?: Schema.Json;
  readonly pageInformationType?: Schema.Json;
};

export const PageInformation: Schema.Codec<PageInformation> = closed({
  pageInformationName: Schema.optionalKey(Schema.Json),
  pageInformationQnaPodEnabled: Schema.optionalKey(Schema.Json),
  pageInformationAltName: Schema.optionalKey(Schema.Json),
  pageInformationType: Schema.optionalKey(Schema.Json),
});

export type PageSize = {
  readonly pageSizeTypes?: Schema.Json;
  readonly pageSizeWidth?: Schema.Json;
  readonly pageSizeHeight?: Schema.Json;
};

export const PageSize: Schema.Codec<PageSize> = closed({
  pageSizeTypes: Schema.optionalKey(Schema.Json),
  pageSizeWidth: Schema.optionalKey(Schema.Json),
  pageSizeHeight: Schema.optionalKey(Schema.Json),
});

export type Background = {
  readonly color?: Schema.Json;
  readonly image?: Schema.Json;
  readonly transparency?: Schema.Json;
};

export const Background: Schema.Codec<Background> = closed({
  color: Schema.optionalKey(Schema.Json),
  image: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
});

export type DisplayArea = {
  readonly verticalAlignment?: Schema.Json;
};

export const DisplayArea: Schema.Codec<DisplayArea> = closed({
  verticalAlignment: Schema.optionalKey(Schema.Json),
});

export type OutspacePane = {
  readonly backgroundColor?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly foregroundColor?: Schema.Json;
  readonly titleSize?: Schema.Json;
  readonly searchTextSize?: Schema.Json;
  readonly headerSize?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly border?: Schema.Json;
  readonly borderColor?: Schema.Json;
  readonly checkboxAndApplyColor?: Schema.Json;
  readonly inputBoxColor?: Schema.Json;
  readonly width?: Schema.Json;
};

export const OutspacePane: Schema.Codec<OutspacePane> = closed({
  backgroundColor: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
  foregroundColor: Schema.optionalKey(Schema.Json),
  titleSize: Schema.optionalKey(Schema.Json),
  searchTextSize: Schema.optionalKey(Schema.Json),
  headerSize: Schema.optionalKey(Schema.Json),
  fontFamily: Schema.optionalKey(Schema.Json),
  border: Schema.optionalKey(Schema.Json),
  borderColor: Schema.optionalKey(Schema.Json),
  checkboxAndApplyColor: Schema.optionalKey(Schema.Json),
  inputBoxColor: Schema.optionalKey(Schema.Json),
  width: Schema.optionalKey(Schema.Json),
});

export type FilterCard = {
  readonly backgroundColor?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly border?: Schema.Json;
  readonly borderColor?: Schema.Json;
  readonly foregroundColor?: Schema.Json;
  readonly textSize?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly inputBoxColor?: Schema.Json;
};

export const FilterCard: Schema.Codec<FilterCard> = closed({
  backgroundColor: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
  border: Schema.optionalKey(Schema.Json),
  borderColor: Schema.optionalKey(Schema.Json),
  foregroundColor: Schema.optionalKey(Schema.Json),
  textSize: Schema.optionalKey(Schema.Json),
  fontFamily: Schema.optionalKey(Schema.Json),
  inputBoxColor: Schema.optionalKey(Schema.Json),
});

export type PageRefresh = {
  readonly show?: Schema.Json;
  readonly refreshType?: Schema.Json;
  readonly duration?: Schema.Json;
  readonly dialogLauncher?: Schema.Json;
  readonly measure?: Schema.Json;
  readonly checkEvery?: Schema.Json;
};

export const PageRefresh: Schema.Codec<PageRefresh> = closed({
  show: Schema.optionalKey(Schema.Json),
  refreshType: Schema.optionalKey(Schema.Json),
  duration: Schema.optionalKey(Schema.Json),
  dialogLauncher: Schema.optionalKey(Schema.Json),
  measure: Schema.optionalKey(Schema.Json),
  checkEvery: Schema.optionalKey(Schema.Json),
});

export type PersonalizeVisual = {
  readonly show?: Schema.Json;
  readonly perspectiveRef?: Schema.Json;
  readonly applyToAllPages?: Schema.Json;
};

export const PersonalizeVisual: Schema.Codec<PersonalizeVisual> = closed({
  show: Schema.optionalKey(Schema.Json),
  perspectiveRef: Schema.optionalKey(Schema.Json),
  applyToAllPages: Schema.optionalKey(Schema.Json),
});

export type VisualInteraction = {
  readonly source: string;
  readonly target: string;
  readonly type: VisualInteractionFilterType;
};

export const VisualInteraction: Schema.Codec<VisualInteraction> = closed({
  source: Schema.String,
  target: Schema.String,
  type: Schema.suspend(() => VisualInteractionFilterType),
});

export type VisualInteractionFilterType =
  "Default" | "DataFilter" | "HighlightFilter" | "NoFilter";

export const VisualInteractionFilterType: Schema.Codec<VisualInteractionFilterType> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("DataFilter"),
    Schema.Literal("HighlightFilter"),
    Schema.Literal("NoFilter"),
  ]);

export type QuickExploreLayoutContainer = {
  readonly related?: QuickExploreRelatedLayout;
  readonly combination?: QuickExploreRelatedLayout;
};

export const QuickExploreLayoutContainer: Schema.Codec<QuickExploreLayoutContainer> =
  closed({
    related: Schema.optionalKey(
      Schema.suspend(() => QuickExploreRelatedLayout),
    ),
    combination: Schema.optionalKey(
      Schema.suspend(() => QuickExploreRelatedLayout),
    ),
  });

export type QuickExploreRelatedLayout = {
  readonly version: number;
  readonly dataTableName?: string;
};

export const QuickExploreRelatedLayout: Schema.Codec<QuickExploreRelatedLayout> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });

export type FilterConfigV1_1_0 = {
  readonly filters?: ReadonlyArray<FilterContainerV1_1_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};

export const FilterConfigV1_1_0: Schema.Codec<FilterConfigV1_1_0> = closed({
  filters: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => FilterContainerV1_1_0)),
  ),
  filterSortOrder: Schema.optionalKey(
    Schema.Union([
      Schema.Literal("Ascending"),
      Schema.Literal("Descending"),
      Schema.Literal("Custom"),
    ]),
  ),
});

export type FilterContainerV1_1_0 = {
  readonly name: string;
  readonly displayName?: string;
  readonly ordinal?: number;
  readonly field?: QueryExpressionContainerV1_1_0;
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
  readonly filter?: FilterDefinitionV1_1_0;
  readonly restatement?: string;
  readonly howCreated?:
    "Auto" | "User" | "Drill" | "Include" | "Exclude" | "Drillthrough";
  readonly isHiddenInViewMode?: boolean;
  readonly isLockedInViewMode?: boolean;
  readonly objects?: FilterContainerFormattingObjectsV1_1_0;
};

export const FilterContainerV1_1_0: Schema.Codec<FilterContainerV1_1_0> =
  closed({
    name: Schema.String,
    displayName: Schema.optionalKey(Schema.String),
    ordinal: Schema.optionalKey(Schema.Finite),
    field: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_1_0),
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
        Schema.Literal("VisualTopN"),
      ]),
    ),
    filter: Schema.optionalKey(Schema.suspend(() => FilterDefinitionV1_1_0)),
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
      Schema.suspend(() => FilterContainerFormattingObjectsV1_1_0),
    ),
  });

export type FilterContainerFormattingObjectsV1_1_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: FilterContainerFormattingProperties;
  }>;
};

export const FilterContainerFormattingObjectsV1_1_0: Schema.Codec<FilterContainerFormattingObjectsV1_1_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => FilterContainerFormattingProperties),
        }),
      ),
    ),
  });

export type PageBindingV1_2_0 = {
  readonly name: string;
  readonly type: BindingType;
  readonly referenceScope?: "Default" | "CrossReport";
  readonly parameters?: ReadonlyArray<BindingParameterV1_2_0>;
  readonly acceptsFilterContext?: "Default" | "None";
};

export const PageBindingV1_2_0: Schema.Codec<PageBindingV1_2_0> = closed({
  name: Schema.String,
  type: Schema.suspend(() => BindingType),
  referenceScope: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("CrossReport")]),
  ),
  parameters: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => BindingParameterV1_2_0)),
  ),
  acceptsFilterContext: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("None")]),
  ),
});

export type BindingParameterV1_2_0 = {
  readonly name: string;
  readonly boundFilter: string;
  readonly asAggregation?: boolean;
  readonly qnaSingleSelectRequired?: boolean;
  readonly fieldExpr?: QueryExpressionContainerV1_2_0;
};

export const BindingParameterV1_2_0: Schema.Codec<BindingParameterV1_2_0> =
  closed({
    name: Schema.String,
    boundFilter: Schema.String,
    asAggregation: Schema.optionalKey(Schema.Boolean),
    qnaSingleSelectRequired: Schema.optionalKey(Schema.Boolean),
    fieldExpr: Schema.optionalKey(
      Schema.suspend(() => QueryExpressionContainerV1_2_0),
    ),
  });

export type PageFormattingObjectsV1_2_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: PageInformation;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: PageSize;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: Background;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: DisplayArea;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: Background;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: OutspacePane;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: FilterCard;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: PageRefresh;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: PersonalizeVisual;
  }>;
};

export const PageFormattingObjectsV1_2_0: Schema.Codec<PageFormattingObjectsV1_2_0> =
  closed({
    pageInformation: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => PageInformation),
        }),
      ),
    ),
    pageSize: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => PageSize),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => Background),
        }),
      ),
    ),
    displayArea: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => DisplayArea),
        }),
      ),
    ),
    outspace: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => Background),
        }),
      ),
    ),
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => OutspacePane),
        }),
      ),
    ),
    filterCard: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => FilterCard),
        }),
      ),
    ),
    pageRefresh: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => PageRefresh),
        }),
      ),
    ),
    personalizeVisual: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => PersonalizeVisual),
        }),
      ),
    ),
  });

export type AutoPageGenerationConfigV1_2_0 = {
  readonly selectedFields: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly visualContainerConfigurations: ReadonlyArray<QuickExploreVisualContainerConfigV1_2_0>;
  readonly layout?: QuickExploreLayoutContainer;
};

export const AutoPageGenerationConfigV1_2_0: Schema.Codec<AutoPageGenerationConfigV1_2_0> =
  closed({
    selectedFields: Schema.Array(
      Schema.suspend(() => QueryExpressionContainerV1_2_0),
    ),
    visualContainerConfigurations: Schema.Array(
      Schema.suspend(() => QuickExploreVisualContainerConfigV1_2_0),
    ),
    layout: Schema.optionalKey(
      Schema.suspend(() => QuickExploreLayoutContainer),
    ),
  });

export type QuickExploreVisualContainerConfigV1_2_0 = {
  readonly name: string;
  readonly fields: ReadonlyArray<QueryExpressionContainerV1_2_0>;
};

export const QuickExploreVisualContainerConfigV1_2_0: Schema.Codec<QuickExploreVisualContainerConfigV1_2_0> =
  closed({
    name: Schema.String,
    fields: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
  });
