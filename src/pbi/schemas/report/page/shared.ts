import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  FormattingObjectDefinitionsDefinitionsV1_2_0,
  FormattingObjectDefinitionsSelectorV1_2_0,
} from "../formatting-object-definitions/shared.js";
import { QueryExpressionContainerV1_2_0 } from "../semantic-query/shared.js";

export type PagePageDisplayOption =
  | "DeprecatedDynamic"
  | "FitToPage"
  | "FitToWidth"
  | "ActualSize"
  | "ActualSizeTopLeft";

export const PagePageDisplayOption: Schema.Codec<PagePageDisplayOption> = Schema.Union([
  Schema.Literal("DeprecatedDynamic"),
  Schema.Literal("FitToPage"),
  Schema.Literal("FitToWidth"),
  Schema.Literal("ActualSize"),
  Schema.Literal("ActualSizeTopLeft"),
]);

export type PageFilterContainerFormattingObjectsProperties = {
  readonly requireSingleSelect?: Schema.Json;
  readonly isInvertedSelectionMode?: Schema.Json;
};

export const PageFilterContainerFormattingObjectsProperties: Schema.Codec<PageFilterContainerFormattingObjectsProperties> =
  closed({
    requireSingleSelect: Schema.optionalKey(Schema.Json),
    isInvertedSelectionMode: Schema.optionalKey(Schema.Json),
  });

export type PageBindingType = "Default" | "Drillthrough" | "Tooltip";

export const PageBindingType: Schema.Codec<PageBindingType> = Schema.Union([
  Schema.Literal("Default"),
  Schema.Literal("Drillthrough"),
  Schema.Literal("Tooltip"),
]);

export type PagePageInformation = {
  readonly pageInformationName?: Schema.Json;
  readonly pageInformationQnaPodEnabled?: Schema.Json;
  readonly pageInformationAltName?: Schema.Json;
  readonly pageInformationType?: Schema.Json;
};

export const PagePageInformation: Schema.Codec<PagePageInformation> = closed({
  pageInformationName: Schema.optionalKey(Schema.Json),
  pageInformationQnaPodEnabled: Schema.optionalKey(Schema.Json),
  pageInformationAltName: Schema.optionalKey(Schema.Json),
  pageInformationType: Schema.optionalKey(Schema.Json),
});

export type PagePageSize = {
  readonly pageSizeTypes?: Schema.Json;
  readonly pageSizeWidth?: Schema.Json;
  readonly pageSizeHeight?: Schema.Json;
};

export const PagePageSize: Schema.Codec<PagePageSize> = closed({
  pageSizeTypes: Schema.optionalKey(Schema.Json),
  pageSizeWidth: Schema.optionalKey(Schema.Json),
  pageSizeHeight: Schema.optionalKey(Schema.Json),
});

export type PageBackground = {
  readonly color?: Schema.Json;
  readonly image?: Schema.Json;
  readonly transparency?: Schema.Json;
};

export const PageBackground: Schema.Codec<PageBackground> = closed({
  color: Schema.optionalKey(Schema.Json),
  image: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
});

export type PageDisplayArea = {
  readonly verticalAlignment?: Schema.Json;
};

export const PageDisplayArea: Schema.Codec<PageDisplayArea> = closed({
  verticalAlignment: Schema.optionalKey(Schema.Json),
});

export type PageOutspacePane = {
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

export const PageOutspacePane: Schema.Codec<PageOutspacePane> = closed({
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

export type PageFilterCard = {
  readonly backgroundColor?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly border?: Schema.Json;
  readonly borderColor?: Schema.Json;
  readonly foregroundColor?: Schema.Json;
  readonly textSize?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly inputBoxColor?: Schema.Json;
};

export const PageFilterCard: Schema.Codec<PageFilterCard> = closed({
  backgroundColor: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
  border: Schema.optionalKey(Schema.Json),
  borderColor: Schema.optionalKey(Schema.Json),
  foregroundColor: Schema.optionalKey(Schema.Json),
  textSize: Schema.optionalKey(Schema.Json),
  fontFamily: Schema.optionalKey(Schema.Json),
  inputBoxColor: Schema.optionalKey(Schema.Json),
});

export type PagePageRefresh = {
  readonly show?: Schema.Json;
  readonly refreshType?: Schema.Json;
  readonly duration?: Schema.Json;
  readonly dialogLauncher?: Schema.Json;
  readonly measure?: Schema.Json;
  readonly checkEvery?: Schema.Json;
};

export const PagePageRefresh: Schema.Codec<PagePageRefresh> = closed({
  show: Schema.optionalKey(Schema.Json),
  refreshType: Schema.optionalKey(Schema.Json),
  duration: Schema.optionalKey(Schema.Json),
  dialogLauncher: Schema.optionalKey(Schema.Json),
  measure: Schema.optionalKey(Schema.Json),
  checkEvery: Schema.optionalKey(Schema.Json),
});

export type PagePersonalizeVisual = {
  readonly show?: Schema.Json;
  readonly perspectiveRef?: Schema.Json;
  readonly applyToAllPages?: Schema.Json;
};

export const PagePersonalizeVisual: Schema.Codec<PagePersonalizeVisual> = closed({
  show: Schema.optionalKey(Schema.Json),
  perspectiveRef: Schema.optionalKey(Schema.Json),
  applyToAllPages: Schema.optionalKey(Schema.Json),
});

export type PageVisualInteraction = {
  readonly source: string;
  readonly target: string;
  readonly type: PageVisualInteractionFilterType;
};

export const PageVisualInteraction: Schema.Codec<PageVisualInteraction> = closed({
  source: Schema.String,
  target: Schema.String,
  type: Schema.suspend(() => PageVisualInteractionFilterType),
});

export type PageVisualInteractionFilterType =
  | "Default"
  | "DataFilter"
  | "HighlightFilter"
  | "NoFilter";

export const PageVisualInteractionFilterType: Schema.Codec<PageVisualInteractionFilterType> =
  Schema.Union([
    Schema.Literal("Default"),
    Schema.Literal("DataFilter"),
    Schema.Literal("HighlightFilter"),
    Schema.Literal("NoFilter"),
  ]);

export type PageQuickExploreLayoutContainer = {
  readonly related?: PageQuickExploreRelatedLayout;
  readonly combination?: PageQuickExploreCombinationLayout;
};

export const PageQuickExploreLayoutContainer: Schema.Codec<PageQuickExploreLayoutContainer> =
  closed({
    related: Schema.optionalKey(Schema.suspend(() => PageQuickExploreRelatedLayout)),
    combination: Schema.optionalKey(Schema.suspend(() => PageQuickExploreCombinationLayout)),
  });

export type PageQuickExploreRelatedLayout = {
  readonly version: number;
  readonly dataTableName?: string;
};

export const PageQuickExploreRelatedLayout: Schema.Codec<PageQuickExploreRelatedLayout> = closed({
  version: Schema.Finite,
  dataTableName: Schema.optionalKey(Schema.String),
});

export type PageQuickExploreCombinationLayout = {
  readonly version: number;
  readonly dataTableName?: string;
};

export const PageQuickExploreCombinationLayout: Schema.Codec<PageQuickExploreCombinationLayout> =
  closed({
    version: Schema.Finite,
    dataTableName: Schema.optionalKey(Schema.String),
  });

export type PageAnnotation = {
  readonly name: string;
  readonly value: string;
};

export const PageAnnotation: Schema.Codec<PageAnnotation> = closed({
  name: Schema.String,
  value: Schema.String,
});

export type PagePageBindingV1_2_0 = {
  readonly name: string;
  readonly type: PageBindingType;
  readonly referenceScope?: "Default" | "CrossReport";
  readonly parameters?: ReadonlyArray<PageBindingParameterV1_2_0>;
  readonly acceptsFilterContext?: "Default" | "None";
};

export const PagePageBindingV1_2_0: Schema.Codec<PagePageBindingV1_2_0> = closed({
  name: Schema.String,
  type: Schema.suspend(() => PageBindingType),
  referenceScope: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("CrossReport")]),
  ),
  parameters: Schema.optionalKey(Schema.Array(Schema.suspend(() => PageBindingParameterV1_2_0))),
  acceptsFilterContext: Schema.optionalKey(
    Schema.Union([Schema.Literal("Default"), Schema.Literal("None")]),
  ),
});

export type PageBindingParameterV1_2_0 = {
  readonly name: string;
  readonly boundFilter: string;
  readonly asAggregation?: boolean;
  readonly qnaSingleSelectRequired?: boolean;
  readonly fieldExpr?: QueryExpressionContainerV1_2_0;
};

export const PageBindingParameterV1_2_0: Schema.Codec<PageBindingParameterV1_2_0> = closed({
  name: Schema.String,
  boundFilter: Schema.String,
  asAggregation: Schema.optionalKey(Schema.Boolean),
  qnaSingleSelectRequired: Schema.optionalKey(Schema.Boolean),
  fieldExpr: Schema.optionalKey(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
});

export type PagePageFormattingObjectsV1_2_0 = {
  readonly pageInformation?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PagePageInformation;
  }>;
  readonly pageSize?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PagePageSize;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageBackground;
  }>;
  readonly displayArea?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageDisplayArea;
  }>;
  readonly outspace?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageBackground;
  }>;
  readonly outspacePane?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageOutspacePane;
  }>;
  readonly filterCard?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PageFilterCard;
  }>;
  readonly pageRefresh?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PagePageRefresh;
  }>;
  readonly personalizeVisual?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: PagePersonalizeVisual;
  }>;
};

export const PagePageFormattingObjectsV1_2_0: Schema.Codec<PagePageFormattingObjectsV1_2_0> =
  closed({
    pageInformation: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => PagePageInformation),
        }),
      ),
    ),
    pageSize: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => PagePageSize),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => PageBackground),
        }),
      ),
    ),
    displayArea: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => PageDisplayArea),
        }),
      ),
    ),
    outspace: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => PageBackground),
        }),
      ),
    ),
    outspacePane: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => PageOutspacePane),
        }),
      ),
    ),
    filterCard: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => PageFilterCard),
        }),
      ),
    ),
    pageRefresh: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => PagePageRefresh),
        }),
      ),
    ),
    personalizeVisual: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_2_0.Selector),
          ),
          properties: Schema.suspend(() => PagePersonalizeVisual),
        }),
      ),
    ),
  });

export type PageAutoPageGenerationConfigV1_2_0 = {
  readonly selectedFields: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly visualContainerConfigurations: ReadonlyArray<PageQuickExploreVisualContainerConfigV1_2_0>;
  readonly layout?: PageQuickExploreLayoutContainer;
};

export const PageAutoPageGenerationConfigV1_2_0: Schema.Codec<PageAutoPageGenerationConfigV1_2_0> =
  closed({
    selectedFields: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
    visualContainerConfigurations: Schema.Array(
      Schema.suspend(() => PageQuickExploreVisualContainerConfigV1_2_0),
    ),
    layout: Schema.optionalKey(Schema.suspend(() => PageQuickExploreLayoutContainer)),
  });

export type PageQuickExploreVisualContainerConfigV1_2_0 = {
  readonly name: string;
  readonly fields: ReadonlyArray<QueryExpressionContainerV1_2_0>;
};

export const PageQuickExploreVisualContainerConfigV1_2_0: Schema.Codec<PageQuickExploreVisualContainerConfigV1_2_0> =
  closed({
    name: Schema.String,
    fields: Schema.Array(Schema.suspend(() => QueryExpressionContainerV1_2_0)),
  });
