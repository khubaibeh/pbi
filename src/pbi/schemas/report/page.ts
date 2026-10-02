import { Schema } from "effect";
import * as Query from "./semantic-query.js";
import * as Formatting from "./formatting-and-filters.js";
function closed<const Fields extends Schema.Struct.Fields>(fields: Fields) {
  const allowed = new Set(Object.keys(fields));
  return Schema.StructWithRest(Schema.Struct(fields), [
    Schema.Record(Schema.String, Schema.Json),
  ]).check(
    Schema.makeFilter(
      (value) =>
        Object.keys(value).every((key) => allowed.has(key)) ||
        "Unexpected object property",
    ),
  );
}
export type PagePageDisplayOptionV1_0_0 =
  | "DeprecatedDynamic"
  | "FitToPage"
  | "FitToWidth"
  | "ActualSize"
  | "ActualSizeTopLeft";
export const PagePageDisplayOptionV1_0_0: Schema.Codec<PagePageDisplayOptionV1_0_0> =
  Schema.Union([
    Schema.Literal("DeprecatedDynamic"),
    Schema.Literal("FitToPage"),
    Schema.Literal("FitToWidth"),
    Schema.Literal("ActualSize"),
    Schema.Literal("ActualSizeTopLeft"),
  ]);
export type PageFilterConfigV1_0_0 = {
  readonly filters?: ReadonlyArray<PageFilterContainerV1_0_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};
export const PageFilterConfigV1_0_0: Schema.Codec<PageFilterConfigV1_0_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => PageFilterContainerV1_0_0)),
    ),
    filterSortOrder: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Ascending"),
        Schema.Literal("Descending"),
        Schema.Literal("Custom"),
      ]),
    ),
  });
export type PageFilterContainerV1_0_0 = {
  readonly name: string;
  readonly displayName?: string;
  readonly ordinal?: number;
  readonly field?: Query.QueryExpressionContainerV1_0_0;
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
  readonly filter?: Query.FilterDefinitionV1_0_0;
  readonly restatement?: string;
  readonly howCreated?:
    "Auto" | "User" | "Drill" | "Include" | "Exclude" | "Drillthrough";
  readonly isHiddenInViewMode?: boolean;
  readonly isLockedInViewMode?: boolean;
  readonly objects?: PageFilterContainerFormattingObjectsV1_0_0;
};
export const PageFilterContainerV1_0_0: Schema.Codec<PageFilterContainerV1_0_0> =
  closed({
    name: Schema.String,
    displayName: Schema.optionalKey(Schema.String),
    ordinal: Schema.optionalKey(Schema.Finite),
    field: Schema.optionalKey(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer,
      ),
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
    filter: Schema.optionalKey(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_0_0.FilterDefinition,
      ),
    ),
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
      Schema.suspend(() => PageFilterContainerFormattingObjectsV1_0_0),
    ),
  });
export type PageFilterContainerFormattingObjectsV1_0_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: PageFilterContainerFormattingObjectsPropertiesV1_0_0;
  }>;
};
export const PageFilterContainerFormattingObjectsV1_0_0: Schema.Codec<PageFilterContainerFormattingObjectsV1_0_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => PageFilterContainerFormattingObjectsPropertiesV1_0_0,
          ),
        }),
      ),
    ),
  });
export type PageFilterContainerFormattingObjectsPropertiesV1_0_0 = {
  readonly requireSingleSelect?: Schema.Json;
  readonly isInvertedSelectionMode?: Schema.Json;
};
export const PageFilterContainerFormattingObjectsPropertiesV1_0_0: Schema.Codec<PageFilterContainerFormattingObjectsPropertiesV1_0_0> =
  closed({
    requireSingleSelect: Schema.optionalKey(Schema.Json),
    isInvertedSelectionMode: Schema.optionalKey(Schema.Json),
  });
export type PagePageBindingV1_0_0 = {
  readonly name: string;
  readonly type: PageBindingTypeV1_0_0;
  readonly referenceScope?: "Default" | "CrossReport";
  readonly parameters?: ReadonlyArray<PageBindingParameterV1_0_0>;
  readonly acceptsFilterContext?: "Default" | "None";
};
export const PagePageBindingV1_0_0: Schema.Codec<PagePageBindingV1_0_0> =
  closed({
    name: Schema.String,
    type: Schema.suspend(() => PageBindingTypeV1_0_0),
    referenceScope: Schema.optionalKey(
      Schema.Union([Schema.Literal("Default"), Schema.Literal("CrossReport")]),
    ),
    parameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => PageBindingParameterV1_0_0)),
    ),
    acceptsFilterContext: Schema.optionalKey(
      Schema.Union([Schema.Literal("Default"), Schema.Literal("None")]),
    ),
  });
export type PageBindingTypeV1_0_0 = "Default" | "Drillthrough" | "Tooltip";
export const PageBindingTypeV1_0_0: Schema.Codec<PageBindingTypeV1_0_0> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("Drillthrough"),
    Schema.Literal("Tooltip"),
  ]);
export type PageBindingParameterV1_0_0 = {
  readonly name: string;
  readonly boundFilter: string;
  readonly asAggregation?: boolean;
  readonly qnaSingleSelectRequired?: boolean;
  readonly fieldExpr?: Query.QueryExpressionContainerV1_0_0;
};
export const PageBindingParameterV1_0_0: Schema.Codec<PageBindingParameterV1_0_0> =
  closed({
    name: Schema.String,
    boundFilter: Schema.String,
    asAggregation: Schema.optionalKey(Schema.Boolean),
    qnaSingleSelectRequired: Schema.optionalKey(Schema.Boolean),
    fieldExpr: Schema.optionalKey(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer,
      ),
    ),
  });
export type PagePageFormattingObjectsV1_0_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: PagePageInformationV1_0_0;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: PagePageSizeV1_0_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: PageBackgroundV1_0_0;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: PageDisplayAreaV1_0_0;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: PageBackgroundV1_0_0;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: PageOutspacePaneV1_0_0;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: PageFilterCardV1_0_0;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: PagePageRefreshV1_0_0;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: PagePersonalizeVisualV1_0_0;
  }>;
};
export const PagePageFormattingObjectsV1_0_0: Schema.Codec<PagePageFormattingObjectsV1_0_0> =
  closed({
    pageInformation: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageInformationV1_0_0),
        }),
      ),
    ),
    pageSize: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageSizeV1_0_0),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackgroundV1_0_0),
        }),
      ),
    ),
    displayArea: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageDisplayAreaV1_0_0),
        }),
      ),
    ),
    outspace: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackgroundV1_0_0),
        }),
      ),
    ),
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageOutspacePaneV1_0_0),
        }),
      ),
    ),
    filterCard: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageFilterCardV1_0_0),
        }),
      ),
    ),
    pageRefresh: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageRefreshV1_0_0),
        }),
      ),
    ),
    personalizeVisual: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePersonalizeVisualV1_0_0),
        }),
      ),
    ),
  });
export type PagePageInformationV1_0_0 = {
  readonly pageInformationName?: Schema.Json;
  readonly pageInformationQnaPodEnabled?: Schema.Json;
  readonly pageInformationAltName?: Schema.Json;
  readonly pageInformationType?: Schema.Json;
};
export const PagePageInformationV1_0_0: Schema.Codec<PagePageInformationV1_0_0> =
  closed({
    pageInformationName: Schema.optionalKey(Schema.Json),
    pageInformationQnaPodEnabled: Schema.optionalKey(Schema.Json),
    pageInformationAltName: Schema.optionalKey(Schema.Json),
    pageInformationType: Schema.optionalKey(Schema.Json),
  });
export type PagePageSizeV1_0_0 = {
  readonly pageSizeTypes?: Schema.Json;
  readonly pageSizeWidth?: Schema.Json;
  readonly pageSizeHeight?: Schema.Json;
};
export const PagePageSizeV1_0_0: Schema.Codec<PagePageSizeV1_0_0> = closed({
  pageSizeTypes: Schema.optionalKey(Schema.Json),
  pageSizeWidth: Schema.optionalKey(Schema.Json),
  pageSizeHeight: Schema.optionalKey(Schema.Json),
});
export type PageBackgroundV1_0_0 = {
  readonly color?: Schema.Json;
  readonly image?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const PageBackgroundV1_0_0: Schema.Codec<PageBackgroundV1_0_0> = closed({
  color: Schema.optionalKey(Schema.Json),
  image: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
});
export type PageDisplayAreaV1_0_0 = {
  readonly verticalAlignment?: Schema.Json;
};
export const PageDisplayAreaV1_0_0: Schema.Codec<PageDisplayAreaV1_0_0> =
  closed({ verticalAlignment: Schema.optionalKey(Schema.Json) });
export type PageOutspacePaneV1_0_0 = {
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
export const PageOutspacePaneV1_0_0: Schema.Codec<PageOutspacePaneV1_0_0> =
  closed({
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
export type PageFilterCardV1_0_0 = {
  readonly backgroundColor?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly border?: Schema.Json;
  readonly borderColor?: Schema.Json;
  readonly foregroundColor?: Schema.Json;
  readonly textSize?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly inputBoxColor?: Schema.Json;
};
export const PageFilterCardV1_0_0: Schema.Codec<PageFilterCardV1_0_0> = closed({
  backgroundColor: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
  border: Schema.optionalKey(Schema.Json),
  borderColor: Schema.optionalKey(Schema.Json),
  foregroundColor: Schema.optionalKey(Schema.Json),
  textSize: Schema.optionalKey(Schema.Json),
  fontFamily: Schema.optionalKey(Schema.Json),
  inputBoxColor: Schema.optionalKey(Schema.Json),
});
export type PagePageRefreshV1_0_0 = {
  readonly show?: Schema.Json;
  readonly refreshType?: Schema.Json;
  readonly duration?: Schema.Json;
  readonly dialogLauncher?: Schema.Json;
  readonly measure?: Schema.Json;
  readonly checkEvery?: Schema.Json;
};
export const PagePageRefreshV1_0_0: Schema.Codec<PagePageRefreshV1_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    refreshType: Schema.optionalKey(Schema.Json),
    duration: Schema.optionalKey(Schema.Json),
    dialogLauncher: Schema.optionalKey(Schema.Json),
    measure: Schema.optionalKey(Schema.Json),
    checkEvery: Schema.optionalKey(Schema.Json),
  });
export type PagePersonalizeVisualV1_0_0 = {
  readonly show?: Schema.Json;
  readonly perspectiveRef?: Schema.Json;
  readonly applyToAllPages?: Schema.Json;
};
export const PagePersonalizeVisualV1_0_0: Schema.Codec<PagePersonalizeVisualV1_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    perspectiveRef: Schema.optionalKey(Schema.Json),
    applyToAllPages: Schema.optionalKey(Schema.Json),
  });
export type PageVisualInteractionV1_0_0 = {
  readonly source: string;
  readonly target: string;
  readonly type: PageVisualInteractionFilterTypeV1_0_0;
};
export const PageVisualInteractionV1_0_0: Schema.Codec<PageVisualInteractionV1_0_0> =
  closed({
    source: Schema.String,
    target: Schema.String,
    type: Schema.suspend(() => PageVisualInteractionFilterTypeV1_0_0),
  });
export type PageVisualInteractionFilterTypeV1_0_0 =
  "Default" | "DataFilter" | "HighlightFilter" | "NoFilter";
export const PageVisualInteractionFilterTypeV1_0_0: Schema.Codec<PageVisualInteractionFilterTypeV1_0_0> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("DataFilter"),
    Schema.Literal("HighlightFilter"),
    Schema.Literal("NoFilter"),
  ]);
export type PageAutoPageGenerationConfigV1_0_0 = {
  readonly selectedFields: ReadonlyArray<Query.QueryExpressionContainerV1_0_0>;
  readonly visualContainerConfigurations: ReadonlyArray<PageQuickExploreVisualContainerConfigV1_0_0>;
  readonly layout?: PageQuickExploreLayoutContainerV1_0_0;
};
export const PageAutoPageGenerationConfigV1_0_0: Schema.Codec<PageAutoPageGenerationConfigV1_0_0> =
  closed({
    selectedFields: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer,
      ),
    ),
    visualContainerConfigurations: Schema.Array(
      Schema.suspend(() => PageQuickExploreVisualContainerConfigV1_0_0),
    ),
    layout: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreLayoutContainerV1_0_0),
    ),
  });
export type PageQuickExploreVisualContainerConfigV1_0_0 = {
  readonly name: string;
  readonly fields: ReadonlyArray<Query.QueryExpressionContainerV1_0_0>;
};
export const PageQuickExploreVisualContainerConfigV1_0_0: Schema.Codec<PageQuickExploreVisualContainerConfigV1_0_0> =
  closed({
    name: Schema.String,
    fields: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer,
      ),
    ),
  });
export type PageQuickExploreLayoutContainerV1_0_0 = {
  readonly related?: PageQuickExploreRelatedLayoutV1_0_0;
  readonly combination?: PageQuickExploreCombinationLayoutV1_0_0;
};
export const PageQuickExploreLayoutContainerV1_0_0: Schema.Codec<PageQuickExploreLayoutContainerV1_0_0> =
  closed({
    related: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreRelatedLayoutV1_0_0),
    ),
    combination: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreCombinationLayoutV1_0_0),
    ),
  });
export type PageQuickExploreRelatedLayoutV1_0_0 = {
  readonly version: number;
  readonly dataTableName?: string;
};
export const PageQuickExploreRelatedLayoutV1_0_0: Schema.Codec<PageQuickExploreRelatedLayoutV1_0_0> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });
export type PageQuickExploreCombinationLayoutV1_0_0 = {
  readonly version: number;
  readonly dataTableName?: string;
};
export const PageQuickExploreCombinationLayoutV1_0_0: Schema.Codec<PageQuickExploreCombinationLayoutV1_0_0> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });
export type PageAnnotationV1_0_0 = {
  readonly name: string;
  readonly value: string;
};
export const PageAnnotationV1_0_0: Schema.Codec<PageAnnotationV1_0_0> = closed({
  name: Schema.String,
  value: Schema.String,
});
export const PageDefinitionsV1_0_0 = {
  PageDisplayOption: PagePageDisplayOptionV1_0_0,
  FilterConfig: PageFilterConfigV1_0_0,
  FilterContainer: PageFilterContainerV1_0_0,
  FilterContainerFormattingObjects: PageFilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties:
    PageFilterContainerFormattingObjectsPropertiesV1_0_0,
  PageBinding: PagePageBindingV1_0_0,
  BindingType: PageBindingTypeV1_0_0,
  BindingParameter: PageBindingParameterV1_0_0,
  PageFormattingObjects: PagePageFormattingObjectsV1_0_0,
  PageInformation: PagePageInformationV1_0_0,
  PageSize: PagePageSizeV1_0_0,
  Background: PageBackgroundV1_0_0,
  DisplayArea: PageDisplayAreaV1_0_0,
  OutspacePane: PageOutspacePaneV1_0_0,
  FilterCard: PageFilterCardV1_0_0,
  PageRefresh: PagePageRefreshV1_0_0,
  PersonalizeVisual: PagePersonalizeVisualV1_0_0,
  VisualInteraction: PageVisualInteractionV1_0_0,
  VisualInteractionFilterType: PageVisualInteractionFilterTypeV1_0_0,
  AutoPageGenerationConfig: PageAutoPageGenerationConfigV1_0_0,
  QuickExploreVisualContainerConfig:
    PageQuickExploreVisualContainerConfigV1_0_0,
  QuickExploreLayoutContainer: PageQuickExploreLayoutContainerV1_0_0,
  QuickExploreRelatedLayout: PageQuickExploreRelatedLayoutV1_0_0,
  QuickExploreCombinationLayout: PageQuickExploreCombinationLayoutV1_0_0,
  Annotation: PageAnnotationV1_0_0,
} as const;
export type PageV1_0_0 = {
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PagePageDisplayOptionV1_0_0;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: PageFilterConfigV1_0_0;
  readonly pageBinding?: PagePageBindingV1_0_0;
  readonly objects?: PagePageFormattingObjectsV1_0_0;
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<PageVisualInteractionV1_0_0>;
  readonly autoPageGenerationConfig?: PageAutoPageGenerationConfigV1_0_0;
  readonly annotations?: ReadonlyArray<PageAnnotationV1_0_0>;
  readonly howCreated?: "Default" | "Copilot";
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.0.0/schema.json";
};
export const PageV1_0_0: Schema.Codec<PageV1_0_0> = closed({
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PagePageDisplayOptionV1_0_0),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(
    Schema.suspend(() => PageFilterConfigV1_0_0),
  ),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PagePageBindingV1_0_0)),
  objects: Schema.optionalKey(
    Schema.suspend(() => PagePageFormattingObjectsV1_0_0),
  ),
  visibility: Schema.optionalKey(
    Schema.Union([
      Schema.Literal("AlwaysVisible"),
      Schema.Literal("HiddenInViewMode"),
    ]),
  ),
  visualInteractions: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => PageVisualInteractionV1_0_0)),
  ),
  autoPageGenerationConfig: Schema.optionalKey(
    Schema.suspend(() => PageAutoPageGenerationConfigV1_0_0),
  ),
  annotations: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => PageAnnotationV1_0_0)),
  ),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.0.0/schema.json",
  ),
});
export type PagePageDisplayOptionV1_1_0 =
  | "DeprecatedDynamic"
  | "FitToPage"
  | "FitToWidth"
  | "ActualSize"
  | "ActualSizeTopLeft";
export const PagePageDisplayOptionV1_1_0: Schema.Codec<PagePageDisplayOptionV1_1_0> =
  Schema.Union([
    Schema.Literal("DeprecatedDynamic"),
    Schema.Literal("FitToPage"),
    Schema.Literal("FitToWidth"),
    Schema.Literal("ActualSize"),
    Schema.Literal("ActualSizeTopLeft"),
  ]);
export type PageFilterConfigV1_1_0 = {
  readonly filters?: ReadonlyArray<PageFilterContainerV1_1_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};
export const PageFilterConfigV1_1_0: Schema.Codec<PageFilterConfigV1_1_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => PageFilterContainerV1_1_0)),
    ),
    filterSortOrder: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Ascending"),
        Schema.Literal("Descending"),
        Schema.Literal("Custom"),
      ]),
    ),
  });
export type PageFilterContainerV1_1_0 = {
  readonly name: string;
  readonly displayName?: string;
  readonly ordinal?: number;
  readonly field?: Query.QueryExpressionContainerV1_1_0;
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
  readonly filter?: Query.FilterDefinitionV1_1_0;
  readonly restatement?: string;
  readonly howCreated?:
    "Auto" | "User" | "Drill" | "Include" | "Exclude" | "Drillthrough";
  readonly isHiddenInViewMode?: boolean;
  readonly isLockedInViewMode?: boolean;
  readonly objects?: PageFilterContainerFormattingObjectsV1_1_0;
};
export const PageFilterContainerV1_1_0: Schema.Codec<PageFilterContainerV1_1_0> =
  closed({
    name: Schema.String,
    displayName: Schema.optionalKey(Schema.String),
    ordinal: Schema.optionalKey(Schema.Finite),
    field: Schema.optionalKey(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer,
      ),
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
    filter: Schema.optionalKey(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_1_0.FilterDefinition,
      ),
    ),
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
      Schema.suspend(() => PageFilterContainerFormattingObjectsV1_1_0),
    ),
  });
export type PageFilterContainerFormattingObjectsV1_1_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PageFilterContainerFormattingObjectsPropertiesV1_1_0;
  }>;
};
export const PageFilterContainerFormattingObjectsV1_1_0: Schema.Codec<PageFilterContainerFormattingObjectsV1_1_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => PageFilterContainerFormattingObjectsPropertiesV1_1_0,
          ),
        }),
      ),
    ),
  });
export type PageFilterContainerFormattingObjectsPropertiesV1_1_0 = {
  readonly requireSingleSelect?: Schema.Json;
  readonly isInvertedSelectionMode?: Schema.Json;
};
export const PageFilterContainerFormattingObjectsPropertiesV1_1_0: Schema.Codec<PageFilterContainerFormattingObjectsPropertiesV1_1_0> =
  closed({
    requireSingleSelect: Schema.optionalKey(Schema.Json),
    isInvertedSelectionMode: Schema.optionalKey(Schema.Json),
  });
export type PagePageBindingV1_1_0 = {
  readonly name: string;
  readonly type: PageBindingTypeV1_1_0;
  readonly referenceScope?: "Default" | "CrossReport";
  readonly parameters?: ReadonlyArray<PageBindingParameterV1_1_0>;
  readonly acceptsFilterContext?: "Default" | "None";
};
export const PagePageBindingV1_1_0: Schema.Codec<PagePageBindingV1_1_0> =
  closed({
    name: Schema.String,
    type: Schema.suspend(() => PageBindingTypeV1_1_0),
    referenceScope: Schema.optionalKey(
      Schema.Union([Schema.Literal("Default"), Schema.Literal("CrossReport")]),
    ),
    parameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => PageBindingParameterV1_1_0)),
    ),
    acceptsFilterContext: Schema.optionalKey(
      Schema.Union([Schema.Literal("Default"), Schema.Literal("None")]),
    ),
  });
export type PageBindingTypeV1_1_0 = "Default" | "Drillthrough" | "Tooltip";
export const PageBindingTypeV1_1_0: Schema.Codec<PageBindingTypeV1_1_0> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("Drillthrough"),
    Schema.Literal("Tooltip"),
  ]);
export type PageBindingParameterV1_1_0 = {
  readonly name: string;
  readonly boundFilter: string;
  readonly asAggregation?: boolean;
  readonly qnaSingleSelectRequired?: boolean;
  readonly fieldExpr?: Query.QueryExpressionContainerV1_1_0;
};
export const PageBindingParameterV1_1_0: Schema.Codec<PageBindingParameterV1_1_0> =
  closed({
    name: Schema.String,
    boundFilter: Schema.String,
    asAggregation: Schema.optionalKey(Schema.Boolean),
    qnaSingleSelectRequired: Schema.optionalKey(Schema.Boolean),
    fieldExpr: Schema.optionalKey(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer,
      ),
    ),
  });
export type PagePageFormattingObjectsV1_1_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PagePageInformationV1_1_0;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PagePageSizeV1_1_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PageBackgroundV1_1_0;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PageDisplayAreaV1_1_0;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PageBackgroundV1_1_0;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PageOutspacePaneV1_1_0;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PageFilterCardV1_1_0;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PagePageRefreshV1_1_0;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: PagePersonalizeVisualV1_1_0;
  }>;
};
export const PagePageFormattingObjectsV1_1_0: Schema.Codec<PagePageFormattingObjectsV1_1_0> =
  closed({
    pageInformation: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageInformationV1_1_0),
        }),
      ),
    ),
    pageSize: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageSizeV1_1_0),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackgroundV1_1_0),
        }),
      ),
    ),
    displayArea: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageDisplayAreaV1_1_0),
        }),
      ),
    ),
    outspace: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackgroundV1_1_0),
        }),
      ),
    ),
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageOutspacePaneV1_1_0),
        }),
      ),
    ),
    filterCard: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageFilterCardV1_1_0),
        }),
      ),
    ),
    pageRefresh: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageRefreshV1_1_0),
        }),
      ),
    ),
    personalizeVisual: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePersonalizeVisualV1_1_0),
        }),
      ),
    ),
  });
export type PagePageInformationV1_1_0 = {
  readonly pageInformationName?: Schema.Json;
  readonly pageInformationQnaPodEnabled?: Schema.Json;
  readonly pageInformationAltName?: Schema.Json;
  readonly pageInformationType?: Schema.Json;
};
export const PagePageInformationV1_1_0: Schema.Codec<PagePageInformationV1_1_0> =
  closed({
    pageInformationName: Schema.optionalKey(Schema.Json),
    pageInformationQnaPodEnabled: Schema.optionalKey(Schema.Json),
    pageInformationAltName: Schema.optionalKey(Schema.Json),
    pageInformationType: Schema.optionalKey(Schema.Json),
  });
export type PagePageSizeV1_1_0 = {
  readonly pageSizeTypes?: Schema.Json;
  readonly pageSizeWidth?: Schema.Json;
  readonly pageSizeHeight?: Schema.Json;
};
export const PagePageSizeV1_1_0: Schema.Codec<PagePageSizeV1_1_0> = closed({
  pageSizeTypes: Schema.optionalKey(Schema.Json),
  pageSizeWidth: Schema.optionalKey(Schema.Json),
  pageSizeHeight: Schema.optionalKey(Schema.Json),
});
export type PageBackgroundV1_1_0 = {
  readonly color?: Schema.Json;
  readonly image?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const PageBackgroundV1_1_0: Schema.Codec<PageBackgroundV1_1_0> = closed({
  color: Schema.optionalKey(Schema.Json),
  image: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
});
export type PageDisplayAreaV1_1_0 = {
  readonly verticalAlignment?: Schema.Json;
};
export const PageDisplayAreaV1_1_0: Schema.Codec<PageDisplayAreaV1_1_0> =
  closed({ verticalAlignment: Schema.optionalKey(Schema.Json) });
export type PageOutspacePaneV1_1_0 = {
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
export const PageOutspacePaneV1_1_0: Schema.Codec<PageOutspacePaneV1_1_0> =
  closed({
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
export type PageFilterCardV1_1_0 = {
  readonly backgroundColor?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly border?: Schema.Json;
  readonly borderColor?: Schema.Json;
  readonly foregroundColor?: Schema.Json;
  readonly textSize?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly inputBoxColor?: Schema.Json;
};
export const PageFilterCardV1_1_0: Schema.Codec<PageFilterCardV1_1_0> = closed({
  backgroundColor: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
  border: Schema.optionalKey(Schema.Json),
  borderColor: Schema.optionalKey(Schema.Json),
  foregroundColor: Schema.optionalKey(Schema.Json),
  textSize: Schema.optionalKey(Schema.Json),
  fontFamily: Schema.optionalKey(Schema.Json),
  inputBoxColor: Schema.optionalKey(Schema.Json),
});
export type PagePageRefreshV1_1_0 = {
  readonly show?: Schema.Json;
  readonly refreshType?: Schema.Json;
  readonly duration?: Schema.Json;
  readonly dialogLauncher?: Schema.Json;
  readonly measure?: Schema.Json;
  readonly checkEvery?: Schema.Json;
};
export const PagePageRefreshV1_1_0: Schema.Codec<PagePageRefreshV1_1_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    refreshType: Schema.optionalKey(Schema.Json),
    duration: Schema.optionalKey(Schema.Json),
    dialogLauncher: Schema.optionalKey(Schema.Json),
    measure: Schema.optionalKey(Schema.Json),
    checkEvery: Schema.optionalKey(Schema.Json),
  });
export type PagePersonalizeVisualV1_1_0 = {
  readonly show?: Schema.Json;
  readonly perspectiveRef?: Schema.Json;
  readonly applyToAllPages?: Schema.Json;
};
export const PagePersonalizeVisualV1_1_0: Schema.Codec<PagePersonalizeVisualV1_1_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    perspectiveRef: Schema.optionalKey(Schema.Json),
    applyToAllPages: Schema.optionalKey(Schema.Json),
  });
export type PageVisualInteractionV1_1_0 = {
  readonly source: string;
  readonly target: string;
  readonly type: PageVisualInteractionFilterTypeV1_1_0;
};
export const PageVisualInteractionV1_1_0: Schema.Codec<PageVisualInteractionV1_1_0> =
  closed({
    source: Schema.String,
    target: Schema.String,
    type: Schema.suspend(() => PageVisualInteractionFilterTypeV1_1_0),
  });
export type PageVisualInteractionFilterTypeV1_1_0 =
  "Default" | "DataFilter" | "HighlightFilter" | "NoFilter";
export const PageVisualInteractionFilterTypeV1_1_0: Schema.Codec<PageVisualInteractionFilterTypeV1_1_0> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("DataFilter"),
    Schema.Literal("HighlightFilter"),
    Schema.Literal("NoFilter"),
  ]);
export type PageAutoPageGenerationConfigV1_1_0 = {
  readonly selectedFields: ReadonlyArray<Query.QueryExpressionContainerV1_1_0>;
  readonly visualContainerConfigurations: ReadonlyArray<PageQuickExploreVisualContainerConfigV1_1_0>;
  readonly layout?: PageQuickExploreLayoutContainerV1_1_0;
};
export const PageAutoPageGenerationConfigV1_1_0: Schema.Codec<PageAutoPageGenerationConfigV1_1_0> =
  closed({
    selectedFields: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer,
      ),
    ),
    visualContainerConfigurations: Schema.Array(
      Schema.suspend(() => PageQuickExploreVisualContainerConfigV1_1_0),
    ),
    layout: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreLayoutContainerV1_1_0),
    ),
  });
export type PageQuickExploreVisualContainerConfigV1_1_0 = {
  readonly name: string;
  readonly fields: ReadonlyArray<Query.QueryExpressionContainerV1_1_0>;
};
export const PageQuickExploreVisualContainerConfigV1_1_0: Schema.Codec<PageQuickExploreVisualContainerConfigV1_1_0> =
  closed({
    name: Schema.String,
    fields: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer,
      ),
    ),
  });
export type PageQuickExploreLayoutContainerV1_1_0 = {
  readonly related?: PageQuickExploreRelatedLayoutV1_1_0;
  readonly combination?: PageQuickExploreCombinationLayoutV1_1_0;
};
export const PageQuickExploreLayoutContainerV1_1_0: Schema.Codec<PageQuickExploreLayoutContainerV1_1_0> =
  closed({
    related: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreRelatedLayoutV1_1_0),
    ),
    combination: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreCombinationLayoutV1_1_0),
    ),
  });
export type PageQuickExploreRelatedLayoutV1_1_0 = {
  readonly version: number;
  readonly dataTableName?: string;
};
export const PageQuickExploreRelatedLayoutV1_1_0: Schema.Codec<PageQuickExploreRelatedLayoutV1_1_0> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });
export type PageQuickExploreCombinationLayoutV1_1_0 = {
  readonly version: number;
  readonly dataTableName?: string;
};
export const PageQuickExploreCombinationLayoutV1_1_0: Schema.Codec<PageQuickExploreCombinationLayoutV1_1_0> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });
export type PageAnnotationV1_1_0 = {
  readonly name: string;
  readonly value: string;
};
export const PageAnnotationV1_1_0: Schema.Codec<PageAnnotationV1_1_0> = closed({
  name: Schema.String,
  value: Schema.String,
});
export const PageDefinitionsV1_1_0 = {
  PageDisplayOption: PagePageDisplayOptionV1_1_0,
  FilterConfig: PageFilterConfigV1_1_0,
  FilterContainer: PageFilterContainerV1_1_0,
  FilterContainerFormattingObjects: PageFilterContainerFormattingObjectsV1_1_0,
  FilterContainerFormattingObjectsProperties:
    PageFilterContainerFormattingObjectsPropertiesV1_1_0,
  PageBinding: PagePageBindingV1_1_0,
  BindingType: PageBindingTypeV1_1_0,
  BindingParameter: PageBindingParameterV1_1_0,
  PageFormattingObjects: PagePageFormattingObjectsV1_1_0,
  PageInformation: PagePageInformationV1_1_0,
  PageSize: PagePageSizeV1_1_0,
  Background: PageBackgroundV1_1_0,
  DisplayArea: PageDisplayAreaV1_1_0,
  OutspacePane: PageOutspacePaneV1_1_0,
  FilterCard: PageFilterCardV1_1_0,
  PageRefresh: PagePageRefreshV1_1_0,
  PersonalizeVisual: PagePersonalizeVisualV1_1_0,
  VisualInteraction: PageVisualInteractionV1_1_0,
  VisualInteractionFilterType: PageVisualInteractionFilterTypeV1_1_0,
  AutoPageGenerationConfig: PageAutoPageGenerationConfigV1_1_0,
  QuickExploreVisualContainerConfig:
    PageQuickExploreVisualContainerConfigV1_1_0,
  QuickExploreLayoutContainer: PageQuickExploreLayoutContainerV1_1_0,
  QuickExploreRelatedLayout: PageQuickExploreRelatedLayoutV1_1_0,
  QuickExploreCombinationLayout: PageQuickExploreCombinationLayoutV1_1_0,
  Annotation: PageAnnotationV1_1_0,
} as const;
export type PageV1_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.1.0/schema.json";
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PagePageDisplayOptionV1_1_0;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: PageFilterConfigV1_1_0;
  readonly pageBinding?: PagePageBindingV1_1_0;
  readonly objects?: PagePageFormattingObjectsV1_1_0;
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<PageVisualInteractionV1_1_0>;
  readonly autoPageGenerationConfig?: PageAutoPageGenerationConfigV1_1_0;
  readonly annotations?: ReadonlyArray<PageAnnotationV1_1_0>;
  readonly howCreated?: "Default" | "Copilot";
};
export const PageV1_1_0: Schema.Codec<PageV1_1_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.1.0/schema.json",
  ),
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PagePageDisplayOptionV1_1_0),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(
    Schema.suspend(() => PageFilterConfigV1_1_0),
  ),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PagePageBindingV1_1_0)),
  objects: Schema.optionalKey(
    Schema.suspend(() => PagePageFormattingObjectsV1_1_0),
  ),
  visibility: Schema.optionalKey(
    Schema.Union([
      Schema.Literal("AlwaysVisible"),
      Schema.Literal("HiddenInViewMode"),
    ]),
  ),
  visualInteractions: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => PageVisualInteractionV1_1_0)),
  ),
  autoPageGenerationConfig: Schema.optionalKey(
    Schema.suspend(() => PageAutoPageGenerationConfigV1_1_0),
  ),
  annotations: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => PageAnnotationV1_1_0)),
  ),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
});
export type PagePageDisplayOptionV1_2_0 =
  | "DeprecatedDynamic"
  | "FitToPage"
  | "FitToWidth"
  | "ActualSize"
  | "ActualSizeTopLeft";
export const PagePageDisplayOptionV1_2_0: Schema.Codec<PagePageDisplayOptionV1_2_0> =
  Schema.Union([
    Schema.Literal("DeprecatedDynamic"),
    Schema.Literal("FitToPage"),
    Schema.Literal("FitToWidth"),
    Schema.Literal("ActualSize"),
    Schema.Literal("ActualSizeTopLeft"),
  ]);
export type PageFilterConfigV1_2_0 = {
  readonly filters?: ReadonlyArray<PageFilterContainerV1_2_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};
export const PageFilterConfigV1_2_0: Schema.Codec<PageFilterConfigV1_2_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => PageFilterContainerV1_2_0)),
    ),
    filterSortOrder: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Ascending"),
        Schema.Literal("Descending"),
        Schema.Literal("Custom"),
      ]),
    ),
  });
export type PageFilterContainerV1_2_0 = {
  readonly name: string;
  readonly displayName?: string;
  readonly ordinal?: number;
  readonly field?: Query.QueryExpressionContainerV1_2_0;
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
  readonly filter?: Query.FilterDefinitionV1_2_0;
  readonly restatement?: string;
  readonly howCreated?:
    "Auto" | "User" | "Drill" | "Include" | "Exclude" | "Drillthrough";
  readonly isHiddenInViewMode?: boolean;
  readonly isLockedInViewMode?: boolean;
  readonly objects?: PageFilterContainerFormattingObjectsV1_2_0;
};
export const PageFilterContainerV1_2_0: Schema.Codec<PageFilterContainerV1_2_0> =
  closed({
    name: Schema.String,
    displayName: Schema.optionalKey(Schema.String),
    ordinal: Schema.optionalKey(Schema.Finite),
    field: Schema.optionalKey(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
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
    filter: Schema.optionalKey(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.FilterDefinition,
      ),
    ),
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
      Schema.suspend(() => PageFilterContainerFormattingObjectsV1_2_0),
    ),
  });
export type PageFilterContainerFormattingObjectsV1_2_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageFilterContainerFormattingObjectsPropertiesV1_2_0;
  }>;
};
export const PageFilterContainerFormattingObjectsV1_2_0: Schema.Codec<PageFilterContainerFormattingObjectsV1_2_0> =
  closed({
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => PageFilterContainerFormattingObjectsPropertiesV1_2_0,
          ),
        }),
      ),
    ),
  });
export type PageFilterContainerFormattingObjectsPropertiesV1_2_0 = {
  readonly requireSingleSelect?: Schema.Json;
  readonly isInvertedSelectionMode?: Schema.Json;
};
export const PageFilterContainerFormattingObjectsPropertiesV1_2_0: Schema.Codec<PageFilterContainerFormattingObjectsPropertiesV1_2_0> =
  closed({
    requireSingleSelect: Schema.optionalKey(Schema.Json),
    isInvertedSelectionMode: Schema.optionalKey(Schema.Json),
  });
export type PagePageBindingV1_2_0 = {
  readonly name: string;
  readonly type: PageBindingTypeV1_2_0;
  readonly referenceScope?: "Default" | "CrossReport";
  readonly parameters?: ReadonlyArray<PageBindingParameterV1_2_0>;
  readonly acceptsFilterContext?: "Default" | "None";
};
export const PagePageBindingV1_2_0: Schema.Codec<PagePageBindingV1_2_0> =
  closed({
    name: Schema.String,
    type: Schema.suspend(() => PageBindingTypeV1_2_0),
    referenceScope: Schema.optionalKey(
      Schema.Union([Schema.Literal("Default"), Schema.Literal("CrossReport")]),
    ),
    parameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => PageBindingParameterV1_2_0)),
    ),
    acceptsFilterContext: Schema.optionalKey(
      Schema.Union([Schema.Literal("Default"), Schema.Literal("None")]),
    ),
  });
export type PageBindingTypeV1_2_0 = "Default" | "Drillthrough" | "Tooltip";
export const PageBindingTypeV1_2_0: Schema.Codec<PageBindingTypeV1_2_0> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("Drillthrough"),
    Schema.Literal("Tooltip"),
  ]);
export type PageBindingParameterV1_2_0 = {
  readonly name: string;
  readonly boundFilter: string;
  readonly asAggregation?: boolean;
  readonly qnaSingleSelectRequired?: boolean;
  readonly fieldExpr?: Query.QueryExpressionContainerV1_2_0;
};
export const PageBindingParameterV1_2_0: Schema.Codec<PageBindingParameterV1_2_0> =
  closed({
    name: Schema.String,
    boundFilter: Schema.String,
    asAggregation: Schema.optionalKey(Schema.Boolean),
    qnaSingleSelectRequired: Schema.optionalKey(Schema.Boolean),
    fieldExpr: Schema.optionalKey(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
  });
export type PagePageFormattingObjectsV1_2_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PagePageInformationV1_2_0;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PagePageSizeV1_2_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageBackgroundV1_2_0;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageDisplayAreaV1_2_0;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageBackgroundV1_2_0;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageOutspacePaneV1_2_0;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageFilterCardV1_2_0;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PagePageRefreshV1_2_0;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PagePersonalizeVisualV1_2_0;
  }>;
};
export const PagePageFormattingObjectsV1_2_0: Schema.Codec<PagePageFormattingObjectsV1_2_0> =
  closed({
    pageInformation: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageInformationV1_2_0),
        }),
      ),
    ),
    pageSize: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageSizeV1_2_0),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackgroundV1_2_0),
        }),
      ),
    ),
    displayArea: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageDisplayAreaV1_2_0),
        }),
      ),
    ),
    outspace: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackgroundV1_2_0),
        }),
      ),
    ),
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageOutspacePaneV1_2_0),
        }),
      ),
    ),
    filterCard: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageFilterCardV1_2_0),
        }),
      ),
    ),
    pageRefresh: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageRefreshV1_2_0),
        }),
      ),
    ),
    personalizeVisual: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePersonalizeVisualV1_2_0),
        }),
      ),
    ),
  });
export type PagePageInformationV1_2_0 = {
  readonly pageInformationName?: Schema.Json;
  readonly pageInformationQnaPodEnabled?: Schema.Json;
  readonly pageInformationAltName?: Schema.Json;
  readonly pageInformationType?: Schema.Json;
};
export const PagePageInformationV1_2_0: Schema.Codec<PagePageInformationV1_2_0> =
  closed({
    pageInformationName: Schema.optionalKey(Schema.Json),
    pageInformationQnaPodEnabled: Schema.optionalKey(Schema.Json),
    pageInformationAltName: Schema.optionalKey(Schema.Json),
    pageInformationType: Schema.optionalKey(Schema.Json),
  });
export type PagePageSizeV1_2_0 = {
  readonly pageSizeTypes?: Schema.Json;
  readonly pageSizeWidth?: Schema.Json;
  readonly pageSizeHeight?: Schema.Json;
};
export const PagePageSizeV1_2_0: Schema.Codec<PagePageSizeV1_2_0> = closed({
  pageSizeTypes: Schema.optionalKey(Schema.Json),
  pageSizeWidth: Schema.optionalKey(Schema.Json),
  pageSizeHeight: Schema.optionalKey(Schema.Json),
});
export type PageBackgroundV1_2_0 = {
  readonly color?: Schema.Json;
  readonly image?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const PageBackgroundV1_2_0: Schema.Codec<PageBackgroundV1_2_0> = closed({
  color: Schema.optionalKey(Schema.Json),
  image: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
});
export type PageDisplayAreaV1_2_0 = {
  readonly verticalAlignment?: Schema.Json;
};
export const PageDisplayAreaV1_2_0: Schema.Codec<PageDisplayAreaV1_2_0> =
  closed({ verticalAlignment: Schema.optionalKey(Schema.Json) });
export type PageOutspacePaneV1_2_0 = {
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
export const PageOutspacePaneV1_2_0: Schema.Codec<PageOutspacePaneV1_2_0> =
  closed({
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
export type PageFilterCardV1_2_0 = {
  readonly backgroundColor?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly border?: Schema.Json;
  readonly borderColor?: Schema.Json;
  readonly foregroundColor?: Schema.Json;
  readonly textSize?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly inputBoxColor?: Schema.Json;
};
export const PageFilterCardV1_2_0: Schema.Codec<PageFilterCardV1_2_0> = closed({
  backgroundColor: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
  border: Schema.optionalKey(Schema.Json),
  borderColor: Schema.optionalKey(Schema.Json),
  foregroundColor: Schema.optionalKey(Schema.Json),
  textSize: Schema.optionalKey(Schema.Json),
  fontFamily: Schema.optionalKey(Schema.Json),
  inputBoxColor: Schema.optionalKey(Schema.Json),
});
export type PagePageRefreshV1_2_0 = {
  readonly show?: Schema.Json;
  readonly refreshType?: Schema.Json;
  readonly duration?: Schema.Json;
  readonly dialogLauncher?: Schema.Json;
  readonly measure?: Schema.Json;
  readonly checkEvery?: Schema.Json;
};
export const PagePageRefreshV1_2_0: Schema.Codec<PagePageRefreshV1_2_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    refreshType: Schema.optionalKey(Schema.Json),
    duration: Schema.optionalKey(Schema.Json),
    dialogLauncher: Schema.optionalKey(Schema.Json),
    measure: Schema.optionalKey(Schema.Json),
    checkEvery: Schema.optionalKey(Schema.Json),
  });
export type PagePersonalizeVisualV1_2_0 = {
  readonly show?: Schema.Json;
  readonly perspectiveRef?: Schema.Json;
  readonly applyToAllPages?: Schema.Json;
};
export const PagePersonalizeVisualV1_2_0: Schema.Codec<PagePersonalizeVisualV1_2_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    perspectiveRef: Schema.optionalKey(Schema.Json),
    applyToAllPages: Schema.optionalKey(Schema.Json),
  });
export type PageVisualInteractionV1_2_0 = {
  readonly source: string;
  readonly target: string;
  readonly type: PageVisualInteractionFilterTypeV1_2_0;
};
export const PageVisualInteractionV1_2_0: Schema.Codec<PageVisualInteractionV1_2_0> =
  closed({
    source: Schema.String,
    target: Schema.String,
    type: Schema.suspend(() => PageVisualInteractionFilterTypeV1_2_0),
  });
export type PageVisualInteractionFilterTypeV1_2_0 =
  "Default" | "DataFilter" | "HighlightFilter" | "NoFilter";
export const PageVisualInteractionFilterTypeV1_2_0: Schema.Codec<PageVisualInteractionFilterTypeV1_2_0> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("DataFilter"),
    Schema.Literal("HighlightFilter"),
    Schema.Literal("NoFilter"),
  ]);
export type PageAutoPageGenerationConfigV1_2_0 = {
  readonly selectedFields: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly visualContainerConfigurations: ReadonlyArray<PageQuickExploreVisualContainerConfigV1_2_0>;
  readonly layout?: PageQuickExploreLayoutContainerV1_2_0;
};
export const PageAutoPageGenerationConfigV1_2_0: Schema.Codec<PageAutoPageGenerationConfigV1_2_0> =
  closed({
    selectedFields: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
    visualContainerConfigurations: Schema.Array(
      Schema.suspend(() => PageQuickExploreVisualContainerConfigV1_2_0),
    ),
    layout: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreLayoutContainerV1_2_0),
    ),
  });
export type PageQuickExploreVisualContainerConfigV1_2_0 = {
  readonly name: string;
  readonly fields: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
};
export const PageQuickExploreVisualContainerConfigV1_2_0: Schema.Codec<PageQuickExploreVisualContainerConfigV1_2_0> =
  closed({
    name: Schema.String,
    fields: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
  });
export type PageQuickExploreLayoutContainerV1_2_0 = {
  readonly related?: PageQuickExploreRelatedLayoutV1_2_0;
  readonly combination?: PageQuickExploreCombinationLayoutV1_2_0;
};
export const PageQuickExploreLayoutContainerV1_2_0: Schema.Codec<PageQuickExploreLayoutContainerV1_2_0> =
  closed({
    related: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreRelatedLayoutV1_2_0),
    ),
    combination: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreCombinationLayoutV1_2_0),
    ),
  });
export type PageQuickExploreRelatedLayoutV1_2_0 = {
  readonly version: number;
  readonly dataTableName?: string;
};
export const PageQuickExploreRelatedLayoutV1_2_0: Schema.Codec<PageQuickExploreRelatedLayoutV1_2_0> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });
export type PageQuickExploreCombinationLayoutV1_2_0 = {
  readonly version: number;
  readonly dataTableName?: string;
};
export const PageQuickExploreCombinationLayoutV1_2_0: Schema.Codec<PageQuickExploreCombinationLayoutV1_2_0> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });
export type PageAnnotationV1_2_0 = {
  readonly name: string;
  readonly value: string;
};
export const PageAnnotationV1_2_0: Schema.Codec<PageAnnotationV1_2_0> = closed({
  name: Schema.String,
  value: Schema.String,
});
export const PageDefinitionsV1_2_0 = {
  PageDisplayOption: PagePageDisplayOptionV1_2_0,
  FilterConfig: PageFilterConfigV1_2_0,
  FilterContainer: PageFilterContainerV1_2_0,
  FilterContainerFormattingObjects: PageFilterContainerFormattingObjectsV1_2_0,
  FilterContainerFormattingObjectsProperties:
    PageFilterContainerFormattingObjectsPropertiesV1_2_0,
  PageBinding: PagePageBindingV1_2_0,
  BindingType: PageBindingTypeV1_2_0,
  BindingParameter: PageBindingParameterV1_2_0,
  PageFormattingObjects: PagePageFormattingObjectsV1_2_0,
  PageInformation: PagePageInformationV1_2_0,
  PageSize: PagePageSizeV1_2_0,
  Background: PageBackgroundV1_2_0,
  DisplayArea: PageDisplayAreaV1_2_0,
  OutspacePane: PageOutspacePaneV1_2_0,
  FilterCard: PageFilterCardV1_2_0,
  PageRefresh: PagePageRefreshV1_2_0,
  PersonalizeVisual: PagePersonalizeVisualV1_2_0,
  VisualInteraction: PageVisualInteractionV1_2_0,
  VisualInteractionFilterType: PageVisualInteractionFilterTypeV1_2_0,
  AutoPageGenerationConfig: PageAutoPageGenerationConfigV1_2_0,
  QuickExploreVisualContainerConfig:
    PageQuickExploreVisualContainerConfigV1_2_0,
  QuickExploreLayoutContainer: PageQuickExploreLayoutContainerV1_2_0,
  QuickExploreRelatedLayout: PageQuickExploreRelatedLayoutV1_2_0,
  QuickExploreCombinationLayout: PageQuickExploreCombinationLayoutV1_2_0,
  Annotation: PageAnnotationV1_2_0,
} as const;
export type PageV1_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.2.0/schema.json";
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PagePageDisplayOptionV1_2_0;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: PageFilterConfigV1_2_0;
  readonly pageBinding?: PagePageBindingV1_2_0;
  readonly objects?: PagePageFormattingObjectsV1_2_0;
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<PageVisualInteractionV1_2_0>;
  readonly autoPageGenerationConfig?: PageAutoPageGenerationConfigV1_2_0;
  readonly annotations?: ReadonlyArray<PageAnnotationV1_2_0>;
  readonly howCreated?: "Default" | "Copilot";
};
export const PageV1_2_0: Schema.Codec<PageV1_2_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.2.0/schema.json",
  ),
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PagePageDisplayOptionV1_2_0),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(
    Schema.suspend(() => PageFilterConfigV1_2_0),
  ),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PagePageBindingV1_2_0)),
  objects: Schema.optionalKey(
    Schema.suspend(() => PagePageFormattingObjectsV1_2_0),
  ),
  visibility: Schema.optionalKey(
    Schema.Union([
      Schema.Literal("AlwaysVisible"),
      Schema.Literal("HiddenInViewMode"),
    ]),
  ),
  visualInteractions: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => PageVisualInteractionV1_2_0)),
  ),
  autoPageGenerationConfig: Schema.optionalKey(
    Schema.suspend(() => PageAutoPageGenerationConfigV1_2_0),
  ),
  annotations: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => PageAnnotationV1_2_0)),
  ),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
});
export type PagePageDisplayOptionV1_3_0 =
  | "DeprecatedDynamic"
  | "FitToPage"
  | "FitToWidth"
  | "ActualSize"
  | "ActualSizeTopLeft";
export const PagePageDisplayOptionV1_3_0: Schema.Codec<PagePageDisplayOptionV1_3_0> =
  Schema.Union([
    Schema.Literal("DeprecatedDynamic"),
    Schema.Literal("FitToPage"),
    Schema.Literal("FitToWidth"),
    Schema.Literal("ActualSize"),
    Schema.Literal("ActualSizeTopLeft"),
  ]);
export type PagePageBindingV1_3_0 = {
  readonly name: string;
  readonly type: PageBindingTypeV1_3_0;
  readonly referenceScope?: "Default" | "CrossReport";
  readonly parameters?: ReadonlyArray<PageBindingParameterV1_3_0>;
  readonly acceptsFilterContext?: "Default" | "None";
};
export const PagePageBindingV1_3_0: Schema.Codec<PagePageBindingV1_3_0> =
  closed({
    name: Schema.String,
    type: Schema.suspend(() => PageBindingTypeV1_3_0),
    referenceScope: Schema.optionalKey(
      Schema.Union([Schema.Literal("Default"), Schema.Literal("CrossReport")]),
    ),
    parameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => PageBindingParameterV1_3_0)),
    ),
    acceptsFilterContext: Schema.optionalKey(
      Schema.Union([Schema.Literal("Default"), Schema.Literal("None")]),
    ),
  });
export type PageBindingTypeV1_3_0 = "Default" | "Drillthrough" | "Tooltip";
export const PageBindingTypeV1_3_0: Schema.Codec<PageBindingTypeV1_3_0> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("Drillthrough"),
    Schema.Literal("Tooltip"),
  ]);
export type PageBindingParameterV1_3_0 = {
  readonly name: string;
  readonly boundFilter: string;
  readonly asAggregation?: boolean;
  readonly qnaSingleSelectRequired?: boolean;
  readonly fieldExpr?: Query.QueryExpressionContainerV1_2_0;
};
export const PageBindingParameterV1_3_0: Schema.Codec<PageBindingParameterV1_3_0> =
  closed({
    name: Schema.String,
    boundFilter: Schema.String,
    asAggregation: Schema.optionalKey(Schema.Boolean),
    qnaSingleSelectRequired: Schema.optionalKey(Schema.Boolean),
    fieldExpr: Schema.optionalKey(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
  });
export type PagePageFormattingObjectsV1_3_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PagePageInformationV1_3_0;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PagePageSizeV1_3_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageBackgroundV1_3_0;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageDisplayAreaV1_3_0;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageBackgroundV1_3_0;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageOutspacePaneV1_3_0;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageFilterCardV1_3_0;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PagePageRefreshV1_3_0;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PagePersonalizeVisualV1_3_0;
  }>;
};
export const PagePageFormattingObjectsV1_3_0: Schema.Codec<PagePageFormattingObjectsV1_3_0> =
  closed({
    pageInformation: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageInformationV1_3_0),
        }),
      ),
    ),
    pageSize: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageSizeV1_3_0),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackgroundV1_3_0),
        }),
      ),
    ),
    displayArea: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageDisplayAreaV1_3_0),
        }),
      ),
    ),
    outspace: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackgroundV1_3_0),
        }),
      ),
    ),
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageOutspacePaneV1_3_0),
        }),
      ),
    ),
    filterCard: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageFilterCardV1_3_0),
        }),
      ),
    ),
    pageRefresh: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageRefreshV1_3_0),
        }),
      ),
    ),
    personalizeVisual: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePersonalizeVisualV1_3_0),
        }),
      ),
    ),
  });
export type PagePageInformationV1_3_0 = {
  readonly pageInformationName?: Schema.Json;
  readonly pageInformationQnaPodEnabled?: Schema.Json;
  readonly pageInformationAltName?: Schema.Json;
  readonly pageInformationType?: Schema.Json;
};
export const PagePageInformationV1_3_0: Schema.Codec<PagePageInformationV1_3_0> =
  closed({
    pageInformationName: Schema.optionalKey(Schema.Json),
    pageInformationQnaPodEnabled: Schema.optionalKey(Schema.Json),
    pageInformationAltName: Schema.optionalKey(Schema.Json),
    pageInformationType: Schema.optionalKey(Schema.Json),
  });
export type PagePageSizeV1_3_0 = {
  readonly pageSizeTypes?: Schema.Json;
  readonly pageSizeWidth?: Schema.Json;
  readonly pageSizeHeight?: Schema.Json;
};
export const PagePageSizeV1_3_0: Schema.Codec<PagePageSizeV1_3_0> = closed({
  pageSizeTypes: Schema.optionalKey(Schema.Json),
  pageSizeWidth: Schema.optionalKey(Schema.Json),
  pageSizeHeight: Schema.optionalKey(Schema.Json),
});
export type PageBackgroundV1_3_0 = {
  readonly color?: Schema.Json;
  readonly image?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const PageBackgroundV1_3_0: Schema.Codec<PageBackgroundV1_3_0> = closed({
  color: Schema.optionalKey(Schema.Json),
  image: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
});
export type PageDisplayAreaV1_3_0 = {
  readonly verticalAlignment?: Schema.Json;
};
export const PageDisplayAreaV1_3_0: Schema.Codec<PageDisplayAreaV1_3_0> =
  closed({ verticalAlignment: Schema.optionalKey(Schema.Json) });
export type PageOutspacePaneV1_3_0 = {
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
export const PageOutspacePaneV1_3_0: Schema.Codec<PageOutspacePaneV1_3_0> =
  closed({
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
export type PageFilterCardV1_3_0 = {
  readonly backgroundColor?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly border?: Schema.Json;
  readonly borderColor?: Schema.Json;
  readonly foregroundColor?: Schema.Json;
  readonly textSize?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly inputBoxColor?: Schema.Json;
};
export const PageFilterCardV1_3_0: Schema.Codec<PageFilterCardV1_3_0> = closed({
  backgroundColor: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
  border: Schema.optionalKey(Schema.Json),
  borderColor: Schema.optionalKey(Schema.Json),
  foregroundColor: Schema.optionalKey(Schema.Json),
  textSize: Schema.optionalKey(Schema.Json),
  fontFamily: Schema.optionalKey(Schema.Json),
  inputBoxColor: Schema.optionalKey(Schema.Json),
});
export type PagePageRefreshV1_3_0 = {
  readonly show?: Schema.Json;
  readonly refreshType?: Schema.Json;
  readonly duration?: Schema.Json;
  readonly dialogLauncher?: Schema.Json;
  readonly measure?: Schema.Json;
  readonly checkEvery?: Schema.Json;
};
export const PagePageRefreshV1_3_0: Schema.Codec<PagePageRefreshV1_3_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    refreshType: Schema.optionalKey(Schema.Json),
    duration: Schema.optionalKey(Schema.Json),
    dialogLauncher: Schema.optionalKey(Schema.Json),
    measure: Schema.optionalKey(Schema.Json),
    checkEvery: Schema.optionalKey(Schema.Json),
  });
export type PagePersonalizeVisualV1_3_0 = {
  readonly show?: Schema.Json;
  readonly perspectiveRef?: Schema.Json;
  readonly applyToAllPages?: Schema.Json;
};
export const PagePersonalizeVisualV1_3_0: Schema.Codec<PagePersonalizeVisualV1_3_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    perspectiveRef: Schema.optionalKey(Schema.Json),
    applyToAllPages: Schema.optionalKey(Schema.Json),
  });
export type PageVisualInteractionV1_3_0 = {
  readonly source: string;
  readonly target: string;
  readonly type: PageVisualInteractionFilterTypeV1_3_0;
};
export const PageVisualInteractionV1_3_0: Schema.Codec<PageVisualInteractionV1_3_0> =
  closed({
    source: Schema.String,
    target: Schema.String,
    type: Schema.suspend(() => PageVisualInteractionFilterTypeV1_3_0),
  });
export type PageVisualInteractionFilterTypeV1_3_0 =
  "Default" | "DataFilter" | "HighlightFilter" | "NoFilter";
export const PageVisualInteractionFilterTypeV1_3_0: Schema.Codec<PageVisualInteractionFilterTypeV1_3_0> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("DataFilter"),
    Schema.Literal("HighlightFilter"),
    Schema.Literal("NoFilter"),
  ]);
export type PageAutoPageGenerationConfigV1_3_0 = {
  readonly selectedFields: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly visualContainerConfigurations: ReadonlyArray<PageQuickExploreVisualContainerConfigV1_3_0>;
  readonly layout?: PageQuickExploreLayoutContainerV1_3_0;
};
export const PageAutoPageGenerationConfigV1_3_0: Schema.Codec<PageAutoPageGenerationConfigV1_3_0> =
  closed({
    selectedFields: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
    visualContainerConfigurations: Schema.Array(
      Schema.suspend(() => PageQuickExploreVisualContainerConfigV1_3_0),
    ),
    layout: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreLayoutContainerV1_3_0),
    ),
  });
export type PageQuickExploreVisualContainerConfigV1_3_0 = {
  readonly name: string;
  readonly fields: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
};
export const PageQuickExploreVisualContainerConfigV1_3_0: Schema.Codec<PageQuickExploreVisualContainerConfigV1_3_0> =
  closed({
    name: Schema.String,
    fields: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
  });
export type PageQuickExploreLayoutContainerV1_3_0 = {
  readonly related?: PageQuickExploreRelatedLayoutV1_3_0;
  readonly combination?: PageQuickExploreCombinationLayoutV1_3_0;
};
export const PageQuickExploreLayoutContainerV1_3_0: Schema.Codec<PageQuickExploreLayoutContainerV1_3_0> =
  closed({
    related: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreRelatedLayoutV1_3_0),
    ),
    combination: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreCombinationLayoutV1_3_0),
    ),
  });
export type PageQuickExploreRelatedLayoutV1_3_0 = {
  readonly version: number;
  readonly dataTableName?: string;
};
export const PageQuickExploreRelatedLayoutV1_3_0: Schema.Codec<PageQuickExploreRelatedLayoutV1_3_0> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });
export type PageQuickExploreCombinationLayoutV1_3_0 = {
  readonly version: number;
  readonly dataTableName?: string;
};
export const PageQuickExploreCombinationLayoutV1_3_0: Schema.Codec<PageQuickExploreCombinationLayoutV1_3_0> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });
export type PageAnnotationV1_3_0 = {
  readonly name: string;
  readonly value: string;
};
export const PageAnnotationV1_3_0: Schema.Codec<PageAnnotationV1_3_0> = closed({
  name: Schema.String,
  value: Schema.String,
});
export const PageDefinitionsV1_3_0 = {
  PageDisplayOption: PagePageDisplayOptionV1_3_0,
  PageBinding: PagePageBindingV1_3_0,
  BindingType: PageBindingTypeV1_3_0,
  BindingParameter: PageBindingParameterV1_3_0,
  PageFormattingObjects: PagePageFormattingObjectsV1_3_0,
  PageInformation: PagePageInformationV1_3_0,
  PageSize: PagePageSizeV1_3_0,
  Background: PageBackgroundV1_3_0,
  DisplayArea: PageDisplayAreaV1_3_0,
  OutspacePane: PageOutspacePaneV1_3_0,
  FilterCard: PageFilterCardV1_3_0,
  PageRefresh: PagePageRefreshV1_3_0,
  PersonalizeVisual: PagePersonalizeVisualV1_3_0,
  VisualInteraction: PageVisualInteractionV1_3_0,
  VisualInteractionFilterType: PageVisualInteractionFilterTypeV1_3_0,
  AutoPageGenerationConfig: PageAutoPageGenerationConfigV1_3_0,
  QuickExploreVisualContainerConfig:
    PageQuickExploreVisualContainerConfigV1_3_0,
  QuickExploreLayoutContainer: PageQuickExploreLayoutContainerV1_3_0,
  QuickExploreRelatedLayout: PageQuickExploreRelatedLayoutV1_3_0,
  QuickExploreCombinationLayout: PageQuickExploreCombinationLayoutV1_3_0,
  Annotation: PageAnnotationV1_3_0,
} as const;
export type PageV1_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.3.0/schema.json";
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PagePageDisplayOptionV1_3_0;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_0_0;
  readonly pageBinding?: PagePageBindingV1_3_0;
  readonly objects?: PagePageFormattingObjectsV1_3_0;
  readonly type?: "Drillthrough" | "Tooltip";
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<PageVisualInteractionV1_3_0>;
  readonly autoPageGenerationConfig?: PageAutoPageGenerationConfigV1_3_0;
  readonly annotations?: ReadonlyArray<PageAnnotationV1_3_0>;
  readonly howCreated?: "Default" | "Copilot";
};
export const PageV1_3_0: Schema.Codec<PageV1_3_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.3.0/schema.json",
  ),
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PagePageDisplayOptionV1_3_0),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(
    Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_0_0),
  ),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PagePageBindingV1_3_0)),
  objects: Schema.optionalKey(
    Schema.suspend(() => PagePageFormattingObjectsV1_3_0),
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
    Schema.Array(Schema.suspend(() => PageVisualInteractionV1_3_0)),
  ),
  autoPageGenerationConfig: Schema.optionalKey(
    Schema.suspend(() => PageAutoPageGenerationConfigV1_3_0),
  ),
  annotations: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => PageAnnotationV1_3_0)),
  ),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
});
export type PagePageDisplayOptionV1_4_0 =
  | "DeprecatedDynamic"
  | "FitToPage"
  | "FitToWidth"
  | "ActualSize"
  | "ActualSizeTopLeft";
export const PagePageDisplayOptionV1_4_0: Schema.Codec<PagePageDisplayOptionV1_4_0> =
  Schema.Union([
    Schema.Literal("DeprecatedDynamic"),
    Schema.Literal("FitToPage"),
    Schema.Literal("FitToWidth"),
    Schema.Literal("ActualSize"),
    Schema.Literal("ActualSizeTopLeft"),
  ]);
export type PagePageBindingV1_4_0 = {
  readonly name: string;
  readonly type: PageBindingTypeV1_4_0;
  readonly referenceScope?: "Default" | "CrossReport";
  readonly parameters?: ReadonlyArray<PageBindingParameterV1_4_0>;
  readonly acceptsFilterContext?: "Default" | "None";
};
export const PagePageBindingV1_4_0: Schema.Codec<PagePageBindingV1_4_0> =
  closed({
    name: Schema.String,
    type: Schema.suspend(() => PageBindingTypeV1_4_0),
    referenceScope: Schema.optionalKey(
      Schema.Union([Schema.Literal("Default"), Schema.Literal("CrossReport")]),
    ),
    parameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => PageBindingParameterV1_4_0)),
    ),
    acceptsFilterContext: Schema.optionalKey(
      Schema.Union([Schema.Literal("Default"), Schema.Literal("None")]),
    ),
  });
export type PageBindingTypeV1_4_0 = "Default" | "Drillthrough" | "Tooltip";
export const PageBindingTypeV1_4_0: Schema.Codec<PageBindingTypeV1_4_0> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("Drillthrough"),
    Schema.Literal("Tooltip"),
  ]);
export type PageBindingParameterV1_4_0 = {
  readonly name: string;
  readonly boundFilter: string;
  readonly asAggregation?: boolean;
  readonly qnaSingleSelectRequired?: boolean;
  readonly fieldExpr?: Query.QueryExpressionContainerV1_2_0;
};
export const PageBindingParameterV1_4_0: Schema.Codec<PageBindingParameterV1_4_0> =
  closed({
    name: Schema.String,
    boundFilter: Schema.String,
    asAggregation: Schema.optionalKey(Schema.Boolean),
    qnaSingleSelectRequired: Schema.optionalKey(Schema.Boolean),
    fieldExpr: Schema.optionalKey(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
  });
export type PagePageFormattingObjectsV1_4_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PagePageInformationV1_4_0;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PagePageSizeV1_4_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PageBackgroundV1_4_0;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PageDisplayAreaV1_4_0;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PageBackgroundV1_4_0;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PageOutspacePaneV1_4_0;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PageFilterCardV1_4_0;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PagePageRefreshV1_4_0;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: PagePersonalizeVisualV1_4_0;
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageInformationV1_4_0),
        }),
      ),
    ),
    pageSize: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageSizeV1_4_0),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackgroundV1_4_0),
        }),
      ),
    ),
    displayArea: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageDisplayAreaV1_4_0),
        }),
      ),
    ),
    outspace: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackgroundV1_4_0),
        }),
      ),
    ),
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageOutspacePaneV1_4_0),
        }),
      ),
    ),
    filterCard: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageFilterCardV1_4_0),
        }),
      ),
    ),
    pageRefresh: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageRefreshV1_4_0),
        }),
      ),
    ),
    personalizeVisual: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePersonalizeVisualV1_4_0),
        }),
      ),
    ),
  });
export type PagePageInformationV1_4_0 = {
  readonly pageInformationName?: Schema.Json;
  readonly pageInformationQnaPodEnabled?: Schema.Json;
  readonly pageInformationAltName?: Schema.Json;
  readonly pageInformationType?: Schema.Json;
};
export const PagePageInformationV1_4_0: Schema.Codec<PagePageInformationV1_4_0> =
  closed({
    pageInformationName: Schema.optionalKey(Schema.Json),
    pageInformationQnaPodEnabled: Schema.optionalKey(Schema.Json),
    pageInformationAltName: Schema.optionalKey(Schema.Json),
    pageInformationType: Schema.optionalKey(Schema.Json),
  });
export type PagePageSizeV1_4_0 = {
  readonly pageSizeTypes?: Schema.Json;
  readonly pageSizeWidth?: Schema.Json;
  readonly pageSizeHeight?: Schema.Json;
};
export const PagePageSizeV1_4_0: Schema.Codec<PagePageSizeV1_4_0> = closed({
  pageSizeTypes: Schema.optionalKey(Schema.Json),
  pageSizeWidth: Schema.optionalKey(Schema.Json),
  pageSizeHeight: Schema.optionalKey(Schema.Json),
});
export type PageBackgroundV1_4_0 = {
  readonly color?: Schema.Json;
  readonly image?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const PageBackgroundV1_4_0: Schema.Codec<PageBackgroundV1_4_0> = closed({
  color: Schema.optionalKey(Schema.Json),
  image: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
});
export type PageDisplayAreaV1_4_0 = {
  readonly verticalAlignment?: Schema.Json;
};
export const PageDisplayAreaV1_4_0: Schema.Codec<PageDisplayAreaV1_4_0> =
  closed({ verticalAlignment: Schema.optionalKey(Schema.Json) });
export type PageOutspacePaneV1_4_0 = {
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
export const PageOutspacePaneV1_4_0: Schema.Codec<PageOutspacePaneV1_4_0> =
  closed({
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
export type PageFilterCardV1_4_0 = {
  readonly backgroundColor?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly border?: Schema.Json;
  readonly borderColor?: Schema.Json;
  readonly foregroundColor?: Schema.Json;
  readonly textSize?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly inputBoxColor?: Schema.Json;
};
export const PageFilterCardV1_4_0: Schema.Codec<PageFilterCardV1_4_0> = closed({
  backgroundColor: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
  border: Schema.optionalKey(Schema.Json),
  borderColor: Schema.optionalKey(Schema.Json),
  foregroundColor: Schema.optionalKey(Schema.Json),
  textSize: Schema.optionalKey(Schema.Json),
  fontFamily: Schema.optionalKey(Schema.Json),
  inputBoxColor: Schema.optionalKey(Schema.Json),
});
export type PagePageRefreshV1_4_0 = {
  readonly show?: Schema.Json;
  readonly refreshType?: Schema.Json;
  readonly duration?: Schema.Json;
  readonly dialogLauncher?: Schema.Json;
  readonly measure?: Schema.Json;
  readonly checkEvery?: Schema.Json;
};
export const PagePageRefreshV1_4_0: Schema.Codec<PagePageRefreshV1_4_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    refreshType: Schema.optionalKey(Schema.Json),
    duration: Schema.optionalKey(Schema.Json),
    dialogLauncher: Schema.optionalKey(Schema.Json),
    measure: Schema.optionalKey(Schema.Json),
    checkEvery: Schema.optionalKey(Schema.Json),
  });
export type PagePersonalizeVisualV1_4_0 = {
  readonly show?: Schema.Json;
  readonly perspectiveRef?: Schema.Json;
  readonly applyToAllPages?: Schema.Json;
};
export const PagePersonalizeVisualV1_4_0: Schema.Codec<PagePersonalizeVisualV1_4_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    perspectiveRef: Schema.optionalKey(Schema.Json),
    applyToAllPages: Schema.optionalKey(Schema.Json),
  });
export type PageVisualInteractionV1_4_0 = {
  readonly source: string;
  readonly target: string;
  readonly type: PageVisualInteractionFilterTypeV1_4_0;
};
export const PageVisualInteractionV1_4_0: Schema.Codec<PageVisualInteractionV1_4_0> =
  closed({
    source: Schema.String,
    target: Schema.String,
    type: Schema.suspend(() => PageVisualInteractionFilterTypeV1_4_0),
  });
export type PageVisualInteractionFilterTypeV1_4_0 =
  "Default" | "DataFilter" | "HighlightFilter" | "NoFilter";
export const PageVisualInteractionFilterTypeV1_4_0: Schema.Codec<PageVisualInteractionFilterTypeV1_4_0> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("DataFilter"),
    Schema.Literal("HighlightFilter"),
    Schema.Literal("NoFilter"),
  ]);
export type PageAutoPageGenerationConfigV1_4_0 = {
  readonly selectedFields: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly visualContainerConfigurations: ReadonlyArray<PageQuickExploreVisualContainerConfigV1_4_0>;
  readonly layout?: PageQuickExploreLayoutContainerV1_4_0;
};
export const PageAutoPageGenerationConfigV1_4_0: Schema.Codec<PageAutoPageGenerationConfigV1_4_0> =
  closed({
    selectedFields: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
    visualContainerConfigurations: Schema.Array(
      Schema.suspend(() => PageQuickExploreVisualContainerConfigV1_4_0),
    ),
    layout: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreLayoutContainerV1_4_0),
    ),
  });
export type PageQuickExploreVisualContainerConfigV1_4_0 = {
  readonly name: string;
  readonly fields: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
};
export const PageQuickExploreVisualContainerConfigV1_4_0: Schema.Codec<PageQuickExploreVisualContainerConfigV1_4_0> =
  closed({
    name: Schema.String,
    fields: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
  });
export type PageQuickExploreLayoutContainerV1_4_0 = {
  readonly related?: PageQuickExploreRelatedLayoutV1_4_0;
  readonly combination?: PageQuickExploreCombinationLayoutV1_4_0;
};
export const PageQuickExploreLayoutContainerV1_4_0: Schema.Codec<PageQuickExploreLayoutContainerV1_4_0> =
  closed({
    related: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreRelatedLayoutV1_4_0),
    ),
    combination: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreCombinationLayoutV1_4_0),
    ),
  });
export type PageQuickExploreRelatedLayoutV1_4_0 = {
  readonly version: number;
  readonly dataTableName?: string;
};
export const PageQuickExploreRelatedLayoutV1_4_0: Schema.Codec<PageQuickExploreRelatedLayoutV1_4_0> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });
export type PageQuickExploreCombinationLayoutV1_4_0 = {
  readonly version: number;
  readonly dataTableName?: string;
};
export const PageQuickExploreCombinationLayoutV1_4_0: Schema.Codec<PageQuickExploreCombinationLayoutV1_4_0> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });
export type PageAnnotationV1_4_0 = {
  readonly name: string;
  readonly value: string;
};
export const PageAnnotationV1_4_0: Schema.Codec<PageAnnotationV1_4_0> = closed({
  name: Schema.String,
  value: Schema.String,
});
export const PageDefinitionsV1_4_0 = {
  PageDisplayOption: PagePageDisplayOptionV1_4_0,
  PageBinding: PagePageBindingV1_4_0,
  BindingType: PageBindingTypeV1_4_0,
  BindingParameter: PageBindingParameterV1_4_0,
  PageFormattingObjects: PagePageFormattingObjectsV1_4_0,
  PageInformation: PagePageInformationV1_4_0,
  PageSize: PagePageSizeV1_4_0,
  Background: PageBackgroundV1_4_0,
  DisplayArea: PageDisplayAreaV1_4_0,
  OutspacePane: PageOutspacePaneV1_4_0,
  FilterCard: PageFilterCardV1_4_0,
  PageRefresh: PagePageRefreshV1_4_0,
  PersonalizeVisual: PagePersonalizeVisualV1_4_0,
  VisualInteraction: PageVisualInteractionV1_4_0,
  VisualInteractionFilterType: PageVisualInteractionFilterTypeV1_4_0,
  AutoPageGenerationConfig: PageAutoPageGenerationConfigV1_4_0,
  QuickExploreVisualContainerConfig:
    PageQuickExploreVisualContainerConfigV1_4_0,
  QuickExploreLayoutContainer: PageQuickExploreLayoutContainerV1_4_0,
  QuickExploreRelatedLayout: PageQuickExploreRelatedLayoutV1_4_0,
  QuickExploreCombinationLayout: PageQuickExploreCombinationLayoutV1_4_0,
  Annotation: PageAnnotationV1_4_0,
} as const;
export type PageV1_4_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.4.0/schema.json";
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PagePageDisplayOptionV1_4_0;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_1_0;
  readonly pageBinding?: PagePageBindingV1_4_0;
  readonly objects?: PagePageFormattingObjectsV1_4_0;
  readonly type?: "Drillthrough" | "Tooltip";
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<PageVisualInteractionV1_4_0>;
  readonly autoPageGenerationConfig?: PageAutoPageGenerationConfigV1_4_0;
  readonly annotations?: ReadonlyArray<PageAnnotationV1_4_0>;
  readonly howCreated?: "Default" | "Copilot";
};
export const PageV1_4_0: Schema.Codec<PageV1_4_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.4.0/schema.json",
  ),
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PagePageDisplayOptionV1_4_0),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(
    Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_1_0),
  ),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PagePageBindingV1_4_0)),
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
    Schema.Array(Schema.suspend(() => PageVisualInteractionV1_4_0)),
  ),
  autoPageGenerationConfig: Schema.optionalKey(
    Schema.suspend(() => PageAutoPageGenerationConfigV1_4_0),
  ),
  annotations: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => PageAnnotationV1_4_0)),
  ),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
});
export type PagePageDisplayOptionV2_0_0 =
  | "DeprecatedDynamic"
  | "FitToPage"
  | "FitToWidth"
  | "ActualSize"
  | "ActualSizeTopLeft";
export const PagePageDisplayOptionV2_0_0: Schema.Codec<PagePageDisplayOptionV2_0_0> =
  Schema.Union([
    Schema.Literal("DeprecatedDynamic"),
    Schema.Literal("FitToPage"),
    Schema.Literal("FitToWidth"),
    Schema.Literal("ActualSize"),
    Schema.Literal("ActualSizeTopLeft"),
  ]);
export type PagePageBindingV2_0_0 = {
  readonly name: string;
  readonly type: PageBindingTypeV2_0_0;
  readonly referenceScope?: "Default" | "CrossReport";
  readonly parameters?: ReadonlyArray<PageBindingParameterV2_0_0>;
  readonly acceptsFilterContext?: "Default" | "None";
};
export const PagePageBindingV2_0_0: Schema.Codec<PagePageBindingV2_0_0> =
  closed({
    name: Schema.String,
    type: Schema.suspend(() => PageBindingTypeV2_0_0),
    referenceScope: Schema.optionalKey(
      Schema.Union([Schema.Literal("Default"), Schema.Literal("CrossReport")]),
    ),
    parameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => PageBindingParameterV2_0_0)),
    ),
    acceptsFilterContext: Schema.optionalKey(
      Schema.Union([Schema.Literal("Default"), Schema.Literal("None")]),
    ),
  });
export type PageBindingTypeV2_0_0 = "Default" | "Drillthrough" | "Tooltip";
export const PageBindingTypeV2_0_0: Schema.Codec<PageBindingTypeV2_0_0> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("Drillthrough"),
    Schema.Literal("Tooltip"),
  ]);
export type PageBindingParameterV2_0_0 = {
  readonly name: string;
  readonly boundFilter?: string;
  readonly asAggregation?: boolean;
  readonly qnaSingleSelectRequired?: boolean;
  readonly fieldExpr?: Query.QueryExpressionContainerV1_3_0;
};
export const PageBindingParameterV2_0_0: Schema.Codec<PageBindingParameterV2_0_0> =
  closed({
    name: Schema.String,
    boundFilter: Schema.optionalKey(Schema.String),
    asAggregation: Schema.optionalKey(Schema.Boolean),
    qnaSingleSelectRequired: Schema.optionalKey(Schema.Boolean),
    fieldExpr: Schema.optionalKey(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
      ),
    ),
  });
export type PagePageFormattingObjectsV2_0_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: PagePageInformationV2_0_0;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: PagePageSizeV2_0_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: PageBackgroundV2_0_0;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: PageDisplayAreaV2_0_0;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: PageBackgroundV2_0_0;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: PageOutspacePaneV2_0_0;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: PageFilterCardV2_0_0;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: PagePageRefreshV2_0_0;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: PagePersonalizeVisualV2_0_0;
  }>;
};
export const PagePageFormattingObjectsV2_0_0: Schema.Codec<PagePageFormattingObjectsV2_0_0> =
  closed({
    pageInformation: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageInformationV2_0_0),
        }),
      ),
    ),
    pageSize: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageSizeV2_0_0),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackgroundV2_0_0),
        }),
      ),
    ),
    displayArea: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageDisplayAreaV2_0_0),
        }),
      ),
    ),
    outspace: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackgroundV2_0_0),
        }),
      ),
    ),
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageOutspacePaneV2_0_0),
        }),
      ),
    ),
    filterCard: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageFilterCardV2_0_0),
        }),
      ),
    ),
    pageRefresh: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageRefreshV2_0_0),
        }),
      ),
    ),
    personalizeVisual: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePersonalizeVisualV2_0_0),
        }),
      ),
    ),
  });
export type PagePageInformationV2_0_0 = {
  readonly pageInformationName?: Schema.Json;
  readonly pageInformationQnaPodEnabled?: Schema.Json;
  readonly pageInformationAltName?: Schema.Json;
  readonly pageInformationType?: Schema.Json;
};
export const PagePageInformationV2_0_0: Schema.Codec<PagePageInformationV2_0_0> =
  closed({
    pageInformationName: Schema.optionalKey(Schema.Json),
    pageInformationQnaPodEnabled: Schema.optionalKey(Schema.Json),
    pageInformationAltName: Schema.optionalKey(Schema.Json),
    pageInformationType: Schema.optionalKey(Schema.Json),
  });
export type PagePageSizeV2_0_0 = {
  readonly pageSizeTypes?: Schema.Json;
  readonly pageSizeWidth?: Schema.Json;
  readonly pageSizeHeight?: Schema.Json;
};
export const PagePageSizeV2_0_0: Schema.Codec<PagePageSizeV2_0_0> = closed({
  pageSizeTypes: Schema.optionalKey(Schema.Json),
  pageSizeWidth: Schema.optionalKey(Schema.Json),
  pageSizeHeight: Schema.optionalKey(Schema.Json),
});
export type PageBackgroundV2_0_0 = {
  readonly color?: Schema.Json;
  readonly image?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const PageBackgroundV2_0_0: Schema.Codec<PageBackgroundV2_0_0> = closed({
  color: Schema.optionalKey(Schema.Json),
  image: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
});
export type PageDisplayAreaV2_0_0 = {
  readonly verticalAlignment?: Schema.Json;
};
export const PageDisplayAreaV2_0_0: Schema.Codec<PageDisplayAreaV2_0_0> =
  closed({ verticalAlignment: Schema.optionalKey(Schema.Json) });
export type PageOutspacePaneV2_0_0 = {
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
export const PageOutspacePaneV2_0_0: Schema.Codec<PageOutspacePaneV2_0_0> =
  closed({
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
export type PageFilterCardV2_0_0 = {
  readonly backgroundColor?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly border?: Schema.Json;
  readonly borderColor?: Schema.Json;
  readonly foregroundColor?: Schema.Json;
  readonly textSize?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly inputBoxColor?: Schema.Json;
};
export const PageFilterCardV2_0_0: Schema.Codec<PageFilterCardV2_0_0> = closed({
  backgroundColor: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
  border: Schema.optionalKey(Schema.Json),
  borderColor: Schema.optionalKey(Schema.Json),
  foregroundColor: Schema.optionalKey(Schema.Json),
  textSize: Schema.optionalKey(Schema.Json),
  fontFamily: Schema.optionalKey(Schema.Json),
  inputBoxColor: Schema.optionalKey(Schema.Json),
});
export type PagePageRefreshV2_0_0 = {
  readonly show?: Schema.Json;
  readonly refreshType?: Schema.Json;
  readonly duration?: Schema.Json;
  readonly dialogLauncher?: Schema.Json;
  readonly measure?: Schema.Json;
  readonly checkEvery?: Schema.Json;
};
export const PagePageRefreshV2_0_0: Schema.Codec<PagePageRefreshV2_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    refreshType: Schema.optionalKey(Schema.Json),
    duration: Schema.optionalKey(Schema.Json),
    dialogLauncher: Schema.optionalKey(Schema.Json),
    measure: Schema.optionalKey(Schema.Json),
    checkEvery: Schema.optionalKey(Schema.Json),
  });
export type PagePersonalizeVisualV2_0_0 = {
  readonly show?: Schema.Json;
  readonly perspectiveRef?: Schema.Json;
  readonly applyToAllPages?: Schema.Json;
};
export const PagePersonalizeVisualV2_0_0: Schema.Codec<PagePersonalizeVisualV2_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    perspectiveRef: Schema.optionalKey(Schema.Json),
    applyToAllPages: Schema.optionalKey(Schema.Json),
  });
export type PageVisualInteractionV2_0_0 = {
  readonly source: string;
  readonly target: string;
  readonly type: PageVisualInteractionFilterTypeV2_0_0;
};
export const PageVisualInteractionV2_0_0: Schema.Codec<PageVisualInteractionV2_0_0> =
  closed({
    source: Schema.String,
    target: Schema.String,
    type: Schema.suspend(() => PageVisualInteractionFilterTypeV2_0_0),
  });
export type PageVisualInteractionFilterTypeV2_0_0 =
  "Default" | "DataFilter" | "HighlightFilter" | "NoFilter";
export const PageVisualInteractionFilterTypeV2_0_0: Schema.Codec<PageVisualInteractionFilterTypeV2_0_0> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("DataFilter"),
    Schema.Literal("HighlightFilter"),
    Schema.Literal("NoFilter"),
  ]);
export type PageAutoPageGenerationConfigV2_0_0 = {
  readonly selectedFields: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly visualContainerConfigurations: ReadonlyArray<PageQuickExploreVisualContainerConfigV2_0_0>;
  readonly layout?: PageQuickExploreLayoutContainerV2_0_0;
};
export const PageAutoPageGenerationConfigV2_0_0: Schema.Codec<PageAutoPageGenerationConfigV2_0_0> =
  closed({
    selectedFields: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
      ),
    ),
    visualContainerConfigurations: Schema.Array(
      Schema.suspend(() => PageQuickExploreVisualContainerConfigV2_0_0),
    ),
    layout: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreLayoutContainerV2_0_0),
    ),
  });
export type PageQuickExploreVisualContainerConfigV2_0_0 = {
  readonly name: string;
  readonly fields: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
};
export const PageQuickExploreVisualContainerConfigV2_0_0: Schema.Codec<PageQuickExploreVisualContainerConfigV2_0_0> =
  closed({
    name: Schema.String,
    fields: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
      ),
    ),
  });
export type PageQuickExploreLayoutContainerV2_0_0 = {
  readonly related?: PageQuickExploreRelatedLayoutV2_0_0;
  readonly combination?: PageQuickExploreCombinationLayoutV2_0_0;
};
export const PageQuickExploreLayoutContainerV2_0_0: Schema.Codec<PageQuickExploreLayoutContainerV2_0_0> =
  closed({
    related: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreRelatedLayoutV2_0_0),
    ),
    combination: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreCombinationLayoutV2_0_0),
    ),
  });
export type PageQuickExploreRelatedLayoutV2_0_0 = {
  readonly version: number;
  readonly dataTableName?: string;
};
export const PageQuickExploreRelatedLayoutV2_0_0: Schema.Codec<PageQuickExploreRelatedLayoutV2_0_0> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });
export type PageQuickExploreCombinationLayoutV2_0_0 = {
  readonly version: number;
  readonly dataTableName?: string;
};
export const PageQuickExploreCombinationLayoutV2_0_0: Schema.Codec<PageQuickExploreCombinationLayoutV2_0_0> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });
export type PageAnnotationV2_0_0 = {
  readonly name: string;
  readonly value: string;
};
export const PageAnnotationV2_0_0: Schema.Codec<PageAnnotationV2_0_0> = closed({
  name: Schema.String,
  value: Schema.String,
});
export const PageDefinitionsV2_0_0 = {
  PageDisplayOption: PagePageDisplayOptionV2_0_0,
  PageBinding: PagePageBindingV2_0_0,
  BindingType: PageBindingTypeV2_0_0,
  BindingParameter: PageBindingParameterV2_0_0,
  PageFormattingObjects: PagePageFormattingObjectsV2_0_0,
  PageInformation: PagePageInformationV2_0_0,
  PageSize: PagePageSizeV2_0_0,
  Background: PageBackgroundV2_0_0,
  DisplayArea: PageDisplayAreaV2_0_0,
  OutspacePane: PageOutspacePaneV2_0_0,
  FilterCard: PageFilterCardV2_0_0,
  PageRefresh: PagePageRefreshV2_0_0,
  PersonalizeVisual: PagePersonalizeVisualV2_0_0,
  VisualInteraction: PageVisualInteractionV2_0_0,
  VisualInteractionFilterType: PageVisualInteractionFilterTypeV2_0_0,
  AutoPageGenerationConfig: PageAutoPageGenerationConfigV2_0_0,
  QuickExploreVisualContainerConfig:
    PageQuickExploreVisualContainerConfigV2_0_0,
  QuickExploreLayoutContainer: PageQuickExploreLayoutContainerV2_0_0,
  QuickExploreRelatedLayout: PageQuickExploreRelatedLayoutV2_0_0,
  QuickExploreCombinationLayout: PageQuickExploreCombinationLayoutV2_0_0,
  Annotation: PageAnnotationV2_0_0,
} as const;
export type PageV2_0_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.0.0/schema.json";
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PagePageDisplayOptionV2_0_0;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_2_0;
  readonly pageBinding?: PagePageBindingV2_0_0;
  readonly objects?: PagePageFormattingObjectsV2_0_0;
  readonly type?: "Drillthrough" | "Tooltip";
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<PageVisualInteractionV2_0_0>;
  readonly autoPageGenerationConfig?: PageAutoPageGenerationConfigV2_0_0;
  readonly annotations?: ReadonlyArray<PageAnnotationV2_0_0>;
  readonly howCreated?: "Default" | "Copilot";
};
export const PageV2_0_0: Schema.Codec<PageV2_0_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.0.0/schema.json",
  ),
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PagePageDisplayOptionV2_0_0),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(
    Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0),
  ),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PagePageBindingV2_0_0)),
  objects: Schema.optionalKey(
    Schema.suspend(() => PagePageFormattingObjectsV2_0_0),
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
    Schema.Array(Schema.suspend(() => PageVisualInteractionV2_0_0)),
  ),
  autoPageGenerationConfig: Schema.optionalKey(
    Schema.suspend(() => PageAutoPageGenerationConfigV2_0_0),
  ),
  annotations: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => PageAnnotationV2_0_0)),
  ),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
});
export type PagePageDisplayOptionV2_1_0 =
  | "DeprecatedDynamic"
  | "FitToPage"
  | "FitToWidth"
  | "ActualSize"
  | "ActualSizeTopLeft";
export const PagePageDisplayOptionV2_1_0: Schema.Codec<PagePageDisplayOptionV2_1_0> =
  Schema.Union([
    Schema.Literal("DeprecatedDynamic"),
    Schema.Literal("FitToPage"),
    Schema.Literal("FitToWidth"),
    Schema.Literal("ActualSize"),
    Schema.Literal("ActualSizeTopLeft"),
  ]);
export type PagePageBindingV2_1_0 = {
  readonly name: string;
  readonly type: PageBindingTypeV2_1_0;
  readonly referenceScope?: "Default" | "CrossReport";
  readonly parameters?: ReadonlyArray<PageBindingParameterV2_1_0>;
  readonly acceptsFilterContext?: "Default" | "None";
};
export const PagePageBindingV2_1_0: Schema.Codec<PagePageBindingV2_1_0> =
  closed({
    name: Schema.String,
    type: Schema.suspend(() => PageBindingTypeV2_1_0),
    referenceScope: Schema.optionalKey(
      Schema.Union([Schema.Literal("Default"), Schema.Literal("CrossReport")]),
    ),
    parameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => PageBindingParameterV2_1_0)),
    ),
    acceptsFilterContext: Schema.optionalKey(
      Schema.Union([Schema.Literal("Default"), Schema.Literal("None")]),
    ),
  });
export type PageBindingTypeV2_1_0 = "Default" | "Drillthrough" | "Tooltip";
export const PageBindingTypeV2_1_0: Schema.Codec<PageBindingTypeV2_1_0> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("Drillthrough"),
    Schema.Literal("Tooltip"),
  ]);
export type PageBindingParameterV2_1_0 = {
  readonly name: string;
  readonly boundFilter?: string;
  readonly asAggregation?: boolean;
  readonly qnaSingleSelectRequired?: boolean;
  readonly fieldExpr?: Query.QueryExpressionContainerV1_4_0;
};
export const PageBindingParameterV2_1_0: Schema.Codec<PageBindingParameterV2_1_0> =
  closed({
    name: Schema.String,
    boundFilter: Schema.optionalKey(Schema.String),
    asAggregation: Schema.optionalKey(Schema.Boolean),
    qnaSingleSelectRequired: Schema.optionalKey(Schema.Boolean),
    fieldExpr: Schema.optionalKey(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer,
      ),
    ),
  });
export type PagePageFormattingObjectsV2_1_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PagePageInformationV2_1_0;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PagePageSizeV2_1_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PageBackgroundV2_1_0;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PageDisplayAreaV2_1_0;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PageBackgroundV2_1_0;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PageOutspacePaneV2_1_0;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PageFilterCardV2_1_0;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PagePageRefreshV2_1_0;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: PagePersonalizeVisualV2_1_0;
  }>;
};
export const PagePageFormattingObjectsV2_1_0: Schema.Codec<PagePageFormattingObjectsV2_1_0> =
  closed({
    pageInformation: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageInformationV2_1_0),
        }),
      ),
    ),
    pageSize: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageSizeV2_1_0),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackgroundV2_1_0),
        }),
      ),
    ),
    displayArea: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageDisplayAreaV2_1_0),
        }),
      ),
    ),
    outspace: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageBackgroundV2_1_0),
        }),
      ),
    ),
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageOutspacePaneV2_1_0),
        }),
      ),
    ),
    filterCard: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PageFilterCardV2_1_0),
        }),
      ),
    ),
    pageRefresh: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePageRefreshV2_1_0),
        }),
      ),
    ),
    personalizeVisual: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => PagePersonalizeVisualV2_1_0),
        }),
      ),
    ),
  });
export type PagePageInformationV2_1_0 = {
  readonly pageInformationName?: Schema.Json;
  readonly pageInformationQnaPodEnabled?: Schema.Json;
  readonly pageInformationAltName?: Schema.Json;
  readonly pageInformationType?: Schema.Json;
};
export const PagePageInformationV2_1_0: Schema.Codec<PagePageInformationV2_1_0> =
  closed({
    pageInformationName: Schema.optionalKey(Schema.Json),
    pageInformationQnaPodEnabled: Schema.optionalKey(Schema.Json),
    pageInformationAltName: Schema.optionalKey(Schema.Json),
    pageInformationType: Schema.optionalKey(Schema.Json),
  });
export type PagePageSizeV2_1_0 = {
  readonly pageSizeTypes?: Schema.Json;
  readonly pageSizeWidth?: Schema.Json;
  readonly pageSizeHeight?: Schema.Json;
};
export const PagePageSizeV2_1_0: Schema.Codec<PagePageSizeV2_1_0> = closed({
  pageSizeTypes: Schema.optionalKey(Schema.Json),
  pageSizeWidth: Schema.optionalKey(Schema.Json),
  pageSizeHeight: Schema.optionalKey(Schema.Json),
});
export type PageBackgroundV2_1_0 = {
  readonly color?: Schema.Json;
  readonly image?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const PageBackgroundV2_1_0: Schema.Codec<PageBackgroundV2_1_0> = closed({
  color: Schema.optionalKey(Schema.Json),
  image: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
});
export type PageDisplayAreaV2_1_0 = {
  readonly verticalAlignment?: Schema.Json;
};
export const PageDisplayAreaV2_1_0: Schema.Codec<PageDisplayAreaV2_1_0> =
  closed({ verticalAlignment: Schema.optionalKey(Schema.Json) });
export type PageOutspacePaneV2_1_0 = {
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
export const PageOutspacePaneV2_1_0: Schema.Codec<PageOutspacePaneV2_1_0> =
  closed({
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
export type PageFilterCardV2_1_0 = {
  readonly backgroundColor?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly border?: Schema.Json;
  readonly borderColor?: Schema.Json;
  readonly foregroundColor?: Schema.Json;
  readonly textSize?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly inputBoxColor?: Schema.Json;
};
export const PageFilterCardV2_1_0: Schema.Codec<PageFilterCardV2_1_0> = closed({
  backgroundColor: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
  border: Schema.optionalKey(Schema.Json),
  borderColor: Schema.optionalKey(Schema.Json),
  foregroundColor: Schema.optionalKey(Schema.Json),
  textSize: Schema.optionalKey(Schema.Json),
  fontFamily: Schema.optionalKey(Schema.Json),
  inputBoxColor: Schema.optionalKey(Schema.Json),
});
export type PagePageRefreshV2_1_0 = {
  readonly show?: Schema.Json;
  readonly refreshType?: Schema.Json;
  readonly duration?: Schema.Json;
  readonly dialogLauncher?: Schema.Json;
  readonly measure?: Schema.Json;
  readonly checkEvery?: Schema.Json;
};
export const PagePageRefreshV2_1_0: Schema.Codec<PagePageRefreshV2_1_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    refreshType: Schema.optionalKey(Schema.Json),
    duration: Schema.optionalKey(Schema.Json),
    dialogLauncher: Schema.optionalKey(Schema.Json),
    measure: Schema.optionalKey(Schema.Json),
    checkEvery: Schema.optionalKey(Schema.Json),
  });
export type PagePersonalizeVisualV2_1_0 = {
  readonly show?: Schema.Json;
  readonly perspectiveRef?: Schema.Json;
  readonly applyToAllPages?: Schema.Json;
};
export const PagePersonalizeVisualV2_1_0: Schema.Codec<PagePersonalizeVisualV2_1_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    perspectiveRef: Schema.optionalKey(Schema.Json),
    applyToAllPages: Schema.optionalKey(Schema.Json),
  });
export type PageVisualInteractionV2_1_0 = {
  readonly source: string;
  readonly target: string;
  readonly type: PageVisualInteractionFilterTypeV2_1_0;
};
export const PageVisualInteractionV2_1_0: Schema.Codec<PageVisualInteractionV2_1_0> =
  closed({
    source: Schema.String,
    target: Schema.String,
    type: Schema.suspend(() => PageVisualInteractionFilterTypeV2_1_0),
  });
export type PageVisualInteractionFilterTypeV2_1_0 =
  "Default" | "DataFilter" | "HighlightFilter" | "NoFilter";
export const PageVisualInteractionFilterTypeV2_1_0: Schema.Codec<PageVisualInteractionFilterTypeV2_1_0> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("DataFilter"),
    Schema.Literal("HighlightFilter"),
    Schema.Literal("NoFilter"),
  ]);
export type PageAutoPageGenerationConfigV2_1_0 = {
  readonly selectedFields: ReadonlyArray<Query.QueryExpressionContainerV1_4_0>;
  readonly visualContainerConfigurations: ReadonlyArray<PageQuickExploreVisualContainerConfigV2_1_0>;
  readonly layout?: PageQuickExploreLayoutContainerV2_1_0;
};
export const PageAutoPageGenerationConfigV2_1_0: Schema.Codec<PageAutoPageGenerationConfigV2_1_0> =
  closed({
    selectedFields: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer,
      ),
    ),
    visualContainerConfigurations: Schema.Array(
      Schema.suspend(() => PageQuickExploreVisualContainerConfigV2_1_0),
    ),
    layout: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreLayoutContainerV2_1_0),
    ),
  });
export type PageQuickExploreVisualContainerConfigV2_1_0 = {
  readonly name: string;
  readonly fields: ReadonlyArray<Query.QueryExpressionContainerV1_4_0>;
};
export const PageQuickExploreVisualContainerConfigV2_1_0: Schema.Codec<PageQuickExploreVisualContainerConfigV2_1_0> =
  closed({
    name: Schema.String,
    fields: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer,
      ),
    ),
  });
export type PageQuickExploreLayoutContainerV2_1_0 = {
  readonly related?: PageQuickExploreRelatedLayoutV2_1_0;
  readonly combination?: PageQuickExploreCombinationLayoutV2_1_0;
};
export const PageQuickExploreLayoutContainerV2_1_0: Schema.Codec<PageQuickExploreLayoutContainerV2_1_0> =
  closed({
    related: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreRelatedLayoutV2_1_0),
    ),
    combination: Schema.optionalKey(
      Schema.suspend(() => PageQuickExploreCombinationLayoutV2_1_0),
    ),
  });
export type PageQuickExploreRelatedLayoutV2_1_0 = {
  readonly version: number;
  readonly dataTableName?: string;
};
export const PageQuickExploreRelatedLayoutV2_1_0: Schema.Codec<PageQuickExploreRelatedLayoutV2_1_0> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });
export type PageQuickExploreCombinationLayoutV2_1_0 = {
  readonly version: number;
  readonly dataTableName?: string;
};
export const PageQuickExploreCombinationLayoutV2_1_0: Schema.Codec<PageQuickExploreCombinationLayoutV2_1_0> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });
export type PageAnnotationV2_1_0 = {
  readonly name: string;
  readonly value: string;
};
export const PageAnnotationV2_1_0: Schema.Codec<PageAnnotationV2_1_0> = closed({
  name: Schema.String,
  value: Schema.String,
});
export const PageDefinitionsV2_1_0 = {
  PageDisplayOption: PagePageDisplayOptionV2_1_0,
  PageBinding: PagePageBindingV2_1_0,
  BindingType: PageBindingTypeV2_1_0,
  BindingParameter: PageBindingParameterV2_1_0,
  PageFormattingObjects: PagePageFormattingObjectsV2_1_0,
  PageInformation: PagePageInformationV2_1_0,
  PageSize: PagePageSizeV2_1_0,
  Background: PageBackgroundV2_1_0,
  DisplayArea: PageDisplayAreaV2_1_0,
  OutspacePane: PageOutspacePaneV2_1_0,
  FilterCard: PageFilterCardV2_1_0,
  PageRefresh: PagePageRefreshV2_1_0,
  PersonalizeVisual: PagePersonalizeVisualV2_1_0,
  VisualInteraction: PageVisualInteractionV2_1_0,
  VisualInteractionFilterType: PageVisualInteractionFilterTypeV2_1_0,
  AutoPageGenerationConfig: PageAutoPageGenerationConfigV2_1_0,
  QuickExploreVisualContainerConfig:
    PageQuickExploreVisualContainerConfigV2_1_0,
  QuickExploreLayoutContainer: PageQuickExploreLayoutContainerV2_1_0,
  QuickExploreRelatedLayout: PageQuickExploreRelatedLayoutV2_1_0,
  QuickExploreCombinationLayout: PageQuickExploreCombinationLayoutV2_1_0,
  Annotation: PageAnnotationV2_1_0,
} as const;
export type PageV2_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.1.0/schema.json";
  readonly name: string;
  readonly displayName: string;
  readonly displayOption: PagePageDisplayOptionV2_1_0;
  readonly height?: number;
  readonly width?: number;
  readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_3_0;
  readonly pageBinding?: PagePageBindingV2_1_0;
  readonly objects?: PagePageFormattingObjectsV2_1_0;
  readonly type?: "Drillthrough" | "Tooltip";
  readonly visibility?: "AlwaysVisible" | "HiddenInViewMode";
  readonly visualInteractions?: ReadonlyArray<PageVisualInteractionV2_1_0>;
  readonly autoPageGenerationConfig?: PageAutoPageGenerationConfigV2_1_0;
  readonly annotations?: ReadonlyArray<PageAnnotationV2_1_0>;
  readonly howCreated?: "Default" | "Copilot";
};
export const PageV2_1_0: Schema.Codec<PageV2_1_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.1.0/schema.json",
  ),
  name: Schema.String.check(Schema.isMaxCodePoints(50)),
  displayName: Schema.String,
  displayOption: Schema.suspend(() => PagePageDisplayOptionV2_1_0),
  height: Schema.optionalKey(Schema.Finite),
  width: Schema.optionalKey(Schema.Finite),
  filterConfig: Schema.optionalKey(
    Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_3_0),
  ),
  pageBinding: Schema.optionalKey(Schema.suspend(() => PagePageBindingV2_1_0)),
  objects: Schema.optionalKey(
    Schema.suspend(() => PagePageFormattingObjectsV2_1_0),
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
    Schema.Array(Schema.suspend(() => PageVisualInteractionV2_1_0)),
  ),
  autoPageGenerationConfig: Schema.optionalKey(
    Schema.suspend(() => PageAutoPageGenerationConfigV2_1_0),
  ),
  annotations: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => PageAnnotationV2_1_0)),
  ),
  howCreated: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("Copilot")]),
  ),
});
export const PagesMetadataDefinitionsV1_0_0 = {} as const;
export type PagesMetadataV1_0_0 = {
  readonly pageOrder?: ReadonlyArray<string>;
  readonly activePageName?: string;
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.0.0/schema.json";
};
export const PagesMetadataV1_0_0: Schema.Codec<PagesMetadataV1_0_0> = closed({
  pageOrder: Schema.optionalKey(Schema.Array(Schema.String)),
  activePageName: Schema.optionalKey(Schema.String),
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.0.0/schema.json",
  ),
});
export const PagesMetadataDefinitionsV1_1_0 = {} as const;
export type PagesMetadataV1_1_0 = {
  readonly pageOrder?: ReadonlyArray<string>;
  readonly activePageName?: string;
  readonly landingPageName?: string;
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.1.0/schema.json";
};
export const PagesMetadataV1_1_0: Schema.Codec<PagesMetadataV1_1_0> = closed({
  pageOrder: Schema.optionalKey(Schema.Array(Schema.String)),
  activePageName: Schema.optionalKey(Schema.String),
  landingPageName: Schema.optionalKey(Schema.String),
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.1.0/schema.json",
  ),
});
export const pageSchemaCoverage = [
  {
    source: "definition/page/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: PageV1_0_0,
  },
  {
    source: "definition/page/1.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.1.0/schema.json",
    version: "1.1.0",
    variant: "standalone",
    schema: PageV1_1_0,
  },
  {
    source: "definition/page/1.2.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.2.0/schema.json",
    version: "1.2.0",
    variant: "standalone",
    schema: PageV1_2_0,
  },
  {
    source: "definition/page/1.3.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.3.0/schema.json",
    version: "1.3.0",
    variant: "standalone",
    schema: PageV1_3_0,
  },
  {
    source: "definition/page/1.4.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.4.0/schema.json",
    version: "1.4.0",
    variant: "standalone",
    schema: PageV1_4_0,
  },
  {
    source: "definition/page/2.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.0.0/schema.json",
    version: "2.0.0",
    variant: "standalone",
    schema: PageV2_0_0,
  },
  {
    source: "definition/page/2.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.1.0/schema.json",
    version: "2.1.0",
    variant: "standalone",
    schema: PageV2_1_0,
  },
] as const;
export const pagesMetadataSchemaCoverage = [
  {
    source: "definition/pagesMetadata/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: PagesMetadataV1_0_0,
  },
  {
    source: "definition/pagesMetadata/1.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.1.0/schema.json",
    version: "1.1.0",
    variant: "standalone",
    schema: PagesMetadataV1_1_0,
  },
] as const;
