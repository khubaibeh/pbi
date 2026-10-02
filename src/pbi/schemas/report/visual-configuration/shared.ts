import { Schema } from "effect";
import { closed } from "../shared.js";
import { FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0, FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0, FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0, FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0, FormattingObjectDefinitionsDefinitionsV1_2_0, FormattingObjectDefinitionsDefinitionsV1_3_0, FormattingObjectDefinitionsDefinitionsV1_4_0, FormattingObjectDefinitionsDefinitionsV1_5_0, FormattingObjectDefinitionsSelectorV1_2_0, FormattingObjectDefinitionsSelectorV1_3_0, FormattingObjectDefinitionsSelectorV1_4_0, FormattingObjectDefinitionsSelectorV1_5_0 } from "../formatting-object-definitions/shared.js";
import { QueryExpressionContainerV1_2_0, QueryExpressionContainerV1_3_0, QueryExpressionContainerV1_4_0 } from "../semantic-query/shared.js";

export type VisualConfigurationQueryV1_5_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV1_5_0;
  readonly options?: VisualConfigurationVisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationProjectionStateV1_5_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const VisualConfigurationQueryV1_5_0: Schema.Codec<VisualConfigurationQueryV1_5_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationSortDefinitionV1_5_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualQueryOptions),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationProjectionStateV1_5_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationSortDefinitionV1_5_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationQuerySortV1_5_0>;
  readonly isDefaultSort?: boolean;
};

export const VisualConfigurationSortDefinitionV1_5_0: Schema.Codec<VisualConfigurationSortDefinitionV1_5_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationQuerySortV1_5_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationQuerySortV1_5_0 = {
  readonly field: QueryExpressionContainerV1_2_0;
  readonly direction: VisualConfigurationSortDirection;
};

export const VisualConfigurationQuerySortV1_5_0: Schema.Codec<VisualConfigurationQuerySortV1_5_0> =
  closed({
    field: Schema.suspend(
      () => QueryExpressionContainerV1_2_0,
    ),
    direction: Schema.suspend(() => VisualConfigurationSortDirection),
  });

export type VisualConfigurationSortDirection = "Ascending" | "Descending";

export const VisualConfigurationSortDirection: Schema.Codec<VisualConfigurationSortDirection> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);

export type VisualConfigurationVisualQueryOptions = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};

export const VisualConfigurationVisualQueryOptions: Schema.Codec<VisualConfigurationVisualQueryOptions> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationProjectionStateV1_5_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationRoleProjectionV1_5_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationRoleFieldParameterV1_5_0>;
};

export const VisualConfigurationProjectionStateV1_5_0: Schema.Codec<VisualConfigurationProjectionStateV1_5_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationRoleProjectionV1_5_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationRoleFieldParameterV1_5_0),
      ),
    ),
  });

export type VisualConfigurationRoleProjectionV1_5_0 = {
  readonly field: QueryExpressionContainerV1_2_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};

export const VisualConfigurationRoleProjectionV1_5_0: Schema.Codec<VisualConfigurationRoleProjectionV1_5_0> =
  closed({
    field: Schema.suspend(
      () => QueryExpressionContainerV1_2_0,
    ),
    queryRef: Schema.String,
    nativeQueryRef: Schema.optionalKey(Schema.String),
    displayName: Schema.optionalKey(Schema.String),
    format: Schema.optionalKey(
      Schema.String.check(Schema.isMaxCodePoints(255)),
    ),
    active: Schema.optionalKey(Schema.Boolean),
    hidden: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationRoleFieldParameterV1_5_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
};

export const VisualConfigurationRoleFieldParameterV1_5_0: Schema.Codec<VisualConfigurationRoleFieldParameterV1_5_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => QueryExpressionContainerV1_2_0,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });

export type VisualConfigurationExpansionStateV1_5_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationRootExpansionStateV1_5_0;
  readonly levels?: ReadonlyArray<VisualConfigurationLevelExpansionStateV1_5_0>;
};

export const VisualConfigurationExpansionStateV1_5_0: Schema.Codec<VisualConfigurationExpansionStateV1_5_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationRootExpansionStateV1_5_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationLevelExpansionStateV1_5_0),
      ),
    ),
  });

export type VisualConfigurationRootExpansionStateV1_5_0 = {
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV1_5_0>;
};

export const VisualConfigurationRootExpansionStateV1_5_0: Schema.Codec<VisualConfigurationRootExpansionStateV1_5_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => QueryExpressionContainerV1_2_0,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV1_5_0),
      ),
    ),
  });

export type VisualConfigurationNodeExpansionStateV1_5_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV1_5_0>;
};

export const VisualConfigurationNodeExpansionStateV1_5_0: Schema.Codec<VisualConfigurationNodeExpansionStateV1_5_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => QueryExpressionContainerV1_2_0,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV1_5_0),
      ),
    ),
  });

export type VisualConfigurationLevelExpansionStateV1_5_0 = {
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationAILevelInformation;
};

export const VisualConfigurationLevelExpansionStateV1_5_0: Schema.Codec<VisualConfigurationLevelExpansionStateV1_5_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => QueryExpressionContainerV1_2_0,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationAILevelInformation),
    ),
  });

export type VisualConfigurationAILevelInformation = {
  readonly method: VisualConfigurationAIDecompositionMethod;
  readonly disabled?: boolean;
};

export const VisualConfigurationAILevelInformation: Schema.Codec<VisualConfigurationAILevelInformation> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationAIDecompositionMethod,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationAIDecompositionMethod =
  "BestSplit" | "MaxSplit" | "MinSplit";

export const VisualConfigurationAIDecompositionMethod: Schema.Codec<VisualConfigurationAIDecompositionMethod> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);

export type VisualConfigurationVisualContainerFormattingObjectsV1_5_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationTitle;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationSubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationDivider;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationSpacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationPadding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationBorder;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationDropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualLinkV1_5_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationStylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualHeader;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualHeaderTooltip;
  }>;
};

export const VisualConfigurationVisualContainerFormattingObjectsV1_5_0: Schema.Codec<VisualConfigurationVisualContainerFormattingObjectsV1_5_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationTitle),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDivider),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSpacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationPadding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationVisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationBorder),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV1_5_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualTooltip,
          ),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationStylePreset,
          ),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeader,
          ),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderTooltip,
          ),
        }),
      ),
    ),
  });

export type VisualConfigurationTitle = {
  readonly show?: Schema.Json;
  readonly text?: Schema.Json;
  readonly heading?: Schema.Json;
  readonly titleWrap?: Schema.Json;
  readonly fontColor?: Schema.Json;
  readonly background?: Schema.Json;
  readonly alignment?: Schema.Json;
  readonly fontSize?: Schema.Json;
  readonly bold?: Schema.Json;
  readonly italic?: Schema.Json;
  readonly underline?: Schema.Json;
  readonly fontFamily?: Schema.Json;
};

export const VisualConfigurationTitle: Schema.Codec<VisualConfigurationTitle> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    text: Schema.optionalKey(Schema.Json),
    heading: Schema.optionalKey(Schema.Json),
    titleWrap: Schema.optionalKey(Schema.Json),
    fontColor: Schema.optionalKey(Schema.Json),
    background: Schema.optionalKey(Schema.Json),
    alignment: Schema.optionalKey(Schema.Json),
    fontSize: Schema.optionalKey(Schema.Json),
    bold: Schema.optionalKey(Schema.Json),
    italic: Schema.optionalKey(Schema.Json),
    underline: Schema.optionalKey(Schema.Json),
    fontFamily: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationSubTitle = {
  readonly show?: Schema.Json;
  readonly text?: Schema.Json;
  readonly heading?: Schema.Json;
  readonly titleWrap?: Schema.Json;
  readonly fontColor?: Schema.Json;
  readonly alignment?: Schema.Json;
  readonly fontSize?: Schema.Json;
  readonly bold?: Schema.Json;
  readonly italic?: Schema.Json;
  readonly underline?: Schema.Json;
  readonly fontFamily?: Schema.Json;
};

export const VisualConfigurationSubTitle: Schema.Codec<VisualConfigurationSubTitle> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    text: Schema.optionalKey(Schema.Json),
    heading: Schema.optionalKey(Schema.Json),
    titleWrap: Schema.optionalKey(Schema.Json),
    fontColor: Schema.optionalKey(Schema.Json),
    alignment: Schema.optionalKey(Schema.Json),
    fontSize: Schema.optionalKey(Schema.Json),
    bold: Schema.optionalKey(Schema.Json),
    italic: Schema.optionalKey(Schema.Json),
    underline: Schema.optionalKey(Schema.Json),
    fontFamily: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationDivider = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};

export const VisualConfigurationDivider: Schema.Codec<VisualConfigurationDivider> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationSpacing = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};

export const VisualConfigurationSpacing: Schema.Codec<VisualConfigurationSpacing> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationBackground = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};

export const VisualConfigurationBackground: Schema.Codec<VisualConfigurationBackground> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationPadding = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};

export const VisualConfigurationPadding: Schema.Codec<VisualConfigurationPadding> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationLockAspect = {
  readonly show?: Schema.Json;
};

export const VisualConfigurationLockAspect: Schema.Codec<VisualConfigurationLockAspect> =
  closed({ show: Schema.optionalKey(Schema.Json) });

export type VisualConfigurationVisualContainerGeneralFormattingObjects = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};

export const VisualConfigurationVisualContainerGeneralFormattingObjects: Schema.Codec<VisualConfigurationVisualContainerGeneralFormattingObjects> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
    allowBinnedLineSample: Schema.optionalKey(Schema.Json),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Json),
    keepLayerOrder: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationBorder = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};

export const VisualConfigurationBorder: Schema.Codec<VisualConfigurationBorder> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationDropShadow = {
  readonly show?: Schema.Json;
  readonly preset?: Schema.Json;
  readonly position?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly shadowSpread?: Schema.Json;
  readonly shadowBlur?: Schema.Json;
  readonly angle?: Schema.Json;
  readonly shadowDistance?: Schema.Json;
};

export const VisualConfigurationDropShadow: Schema.Codec<VisualConfigurationDropShadow> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    preset: Schema.optionalKey(Schema.Json),
    position: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
    shadowSpread: Schema.optionalKey(Schema.Json),
    shadowBlur: Schema.optionalKey(Schema.Json),
    angle: Schema.optionalKey(Schema.Json),
    shadowDistance: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationVisualLinkV1_5_0 = {
  readonly show?: Schema.Json;
  readonly type?: Schema.Json;
  readonly bookmark?: Schema.Json;
  readonly disabledTooltip?: Schema.Json;
  readonly drillthroughSection?: Schema.Json;
  readonly enabledTooltip?: Schema.Json;
  readonly qna?: Schema.Json;
  readonly suppressDefaultTooltip?: Schema.Json;
  readonly showDefaultTooltip?: Schema.Json;
  readonly navigationSection?: Schema.Json;
  readonly tooltip?: Schema.Json;
  readonly tooltipPlaceholderText?: Schema.Json;
  readonly webUrl?: Schema.Json;
};

export const VisualConfigurationVisualLinkV1_5_0: Schema.Codec<VisualConfigurationVisualLinkV1_5_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    type: Schema.optionalKey(Schema.Json),
    bookmark: Schema.optionalKey(Schema.Json),
    disabledTooltip: Schema.optionalKey(Schema.Json),
    drillthroughSection: Schema.optionalKey(Schema.Json),
    enabledTooltip: Schema.optionalKey(Schema.Json),
    qna: Schema.optionalKey(Schema.Json),
    suppressDefaultTooltip: Schema.optionalKey(Schema.Json),
    showDefaultTooltip: Schema.optionalKey(Schema.Json),
    navigationSection: Schema.optionalKey(Schema.Json),
    tooltip: Schema.optionalKey(Schema.Json),
    tooltipPlaceholderText: Schema.optionalKey(Schema.Json),
    webUrl: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationVisualTooltip = {
  readonly show?: Schema.Json;
  readonly type?: Schema.Json;
  readonly section?: Schema.Json;
  readonly titleFontColor?: Schema.Json;
  readonly valueFontColor?: Schema.Json;
  readonly fontSize?: Schema.Json;
  readonly bold?: Schema.Json;
  readonly italic?: Schema.Json;
  readonly underline?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly background?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly actionFontColor?: Schema.Json;
  readonly themedTitleFontColor?: Schema.Json;
  readonly themedBackground?: Schema.Json;
  readonly themedValueFontColor?: Schema.Json;
};

export const VisualConfigurationVisualTooltip: Schema.Codec<VisualConfigurationVisualTooltip> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    type: Schema.optionalKey(Schema.Json),
    section: Schema.optionalKey(Schema.Json),
    titleFontColor: Schema.optionalKey(Schema.Json),
    valueFontColor: Schema.optionalKey(Schema.Json),
    fontSize: Schema.optionalKey(Schema.Json),
    bold: Schema.optionalKey(Schema.Json),
    italic: Schema.optionalKey(Schema.Json),
    underline: Schema.optionalKey(Schema.Json),
    fontFamily: Schema.optionalKey(Schema.Json),
    background: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
    actionFontColor: Schema.optionalKey(Schema.Json),
    themedTitleFontColor: Schema.optionalKey(Schema.Json),
    themedBackground: Schema.optionalKey(Schema.Json),
    themedValueFontColor: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationStylePreset = {
  readonly name?: Schema.Json;
};

export const VisualConfigurationStylePreset: Schema.Codec<VisualConfigurationStylePreset> =
  closed({ name: Schema.optionalKey(Schema.Json) });

export type VisualConfigurationVisualHeader = {
  readonly show?: Schema.Json;
  readonly background?: Schema.Json;
  readonly border?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly foreground?: Schema.Json;
  readonly showVisualInformationButton?: Schema.Json;
  readonly showVisualWarningButton?: Schema.Json;
  readonly showVisualErrorButton?: Schema.Json;
  readonly showDrillRoleSelector?: Schema.Json;
  readonly showDrillUpButton?: Schema.Json;
  readonly showDrillToggleButton?: Schema.Json;
  readonly showDrillDownLevelButton?: Schema.Json;
  readonly showDrillDownExpandButton?: Schema.Json;
  readonly showPinButton?: Schema.Json;
  readonly showFilterRestatementButton?: Schema.Json;
  readonly showFocusModeButton?: Schema.Json;
  readonly showCopyVisualImageButton?: Schema.Json;
  readonly showSeeDataLayoutToggleButton?: Schema.Json;
  readonly showOptionsMenu?: Schema.Json;
  readonly showCommentButton?: Schema.Json;
  readonly showTooltipButton?: Schema.Json;
  readonly showPersonalizeVisualButton?: Schema.Json;
  readonly showSmartNarrativeButton?: Schema.Json;
  readonly showSetAlertButton?: Schema.Json;
  readonly showFollowVisualButton?: Schema.Json;
};

export const VisualConfigurationVisualHeader: Schema.Codec<VisualConfigurationVisualHeader> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    background: Schema.optionalKey(Schema.Json),
    border: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
    foreground: Schema.optionalKey(Schema.Json),
    showVisualInformationButton: Schema.optionalKey(Schema.Json),
    showVisualWarningButton: Schema.optionalKey(Schema.Json),
    showVisualErrorButton: Schema.optionalKey(Schema.Json),
    showDrillRoleSelector: Schema.optionalKey(Schema.Json),
    showDrillUpButton: Schema.optionalKey(Schema.Json),
    showDrillToggleButton: Schema.optionalKey(Schema.Json),
    showDrillDownLevelButton: Schema.optionalKey(Schema.Json),
    showDrillDownExpandButton: Schema.optionalKey(Schema.Json),
    showPinButton: Schema.optionalKey(Schema.Json),
    showFilterRestatementButton: Schema.optionalKey(Schema.Json),
    showFocusModeButton: Schema.optionalKey(Schema.Json),
    showCopyVisualImageButton: Schema.optionalKey(Schema.Json),
    showSeeDataLayoutToggleButton: Schema.optionalKey(Schema.Json),
    showOptionsMenu: Schema.optionalKey(Schema.Json),
    showCommentButton: Schema.optionalKey(Schema.Json),
    showTooltipButton: Schema.optionalKey(Schema.Json),
    showPersonalizeVisualButton: Schema.optionalKey(Schema.Json),
    showSmartNarrativeButton: Schema.optionalKey(Schema.Json),
    showSetAlertButton: Schema.optionalKey(Schema.Json),
    showFollowVisualButton: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationVisualHeaderTooltip = {
  readonly type?: Schema.Json;
  readonly section?: Schema.Json;
  readonly text?: Schema.Json;
  readonly titleFontColor?: Schema.Json;
  readonly fontSize?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly bold?: Schema.Json;
  readonly italic?: Schema.Json;
  readonly underline?: Schema.Json;
  readonly background?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly themedTitleFontColor?: Schema.Json;
  readonly themedBackground?: Schema.Json;
};

export const VisualConfigurationVisualHeaderTooltip: Schema.Codec<VisualConfigurationVisualHeaderTooltip> =
  closed({
    type: Schema.optionalKey(Schema.Json),
    section: Schema.optionalKey(Schema.Json),
    text: Schema.optionalKey(Schema.Json),
    titleFontColor: Schema.optionalKey(Schema.Json),
    fontSize: Schema.optionalKey(Schema.Json),
    fontFamily: Schema.optionalKey(Schema.Json),
    bold: Schema.optionalKey(Schema.Json),
    italic: Schema.optionalKey(Schema.Json),
    underline: Schema.optionalKey(Schema.Json),
    background: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
    themedTitleFontColor: Schema.optionalKey(Schema.Json),
    themedBackground: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationVisualSyncGroup = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};

export const VisualConfigurationVisualSyncGroup: Schema.Codec<VisualConfigurationVisualSyncGroup> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });

export const VisualConfigurationDefinitionsV1_5_0 = {
  Query: VisualConfigurationQueryV1_5_0,
  SortDefinition: VisualConfigurationSortDefinitionV1_5_0,
  QuerySort: VisualConfigurationQuerySortV1_5_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualConfigurationVisualQueryOptions,
  ProjectionState: VisualConfigurationProjectionStateV1_5_0,
  RoleProjection: VisualConfigurationRoleProjectionV1_5_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV1_5_0,
  ExpansionState: VisualConfigurationExpansionStateV1_5_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV1_5_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV1_5_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV1_5_0,
  AILevelInformation: VisualConfigurationAILevelInformation,
  AIDecompositionMethod: VisualConfigurationAIDecompositionMethod,
  VisualContainerFormattingObjects:
    VisualConfigurationVisualContainerFormattingObjectsV1_5_0,
  Title: VisualConfigurationTitle,
  SubTitle: VisualConfigurationSubTitle,
  Divider: VisualConfigurationDivider,
  Spacing: VisualConfigurationSpacing,
  Background: VisualConfigurationBackground,
  Padding: VisualConfigurationPadding,
  LockAspect: VisualConfigurationLockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationVisualContainerGeneralFormattingObjects,
  Border: VisualConfigurationBorder,
  DropShadow: VisualConfigurationDropShadow,
  VisualLink: VisualConfigurationVisualLinkV1_5_0,
  VisualTooltip: VisualConfigurationVisualTooltip,
  StylePreset: VisualConfigurationStylePreset,
  VisualHeader: VisualConfigurationVisualHeader,
  VisualHeaderTooltip: VisualConfigurationVisualHeaderTooltip,
  VisualSyncGroup: VisualConfigurationVisualSyncGroup,
} as const;

export type VisualConfigurationEmbeddedQueryV1_5_0 = {
  readonly sortDefinition?: VisualConfigurationEmbeddedSortDefinitionV1_5_0;
  readonly options?: VisualConfigurationEmbeddedVisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationEmbeddedProjectionStateV1_5_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const VisualConfigurationEmbeddedQueryV1_5_0: Schema.Codec<VisualConfigurationEmbeddedQueryV1_5_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedSortDefinitionV1_5_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualQueryOptions),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationEmbeddedProjectionStateV1_5_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedSortDefinitionV1_5_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationEmbeddedQuerySortV1_5_0>;
  readonly isDefaultSort?: boolean;
};

export const VisualConfigurationEmbeddedSortDefinitionV1_5_0: Schema.Codec<VisualConfigurationEmbeddedSortDefinitionV1_5_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedQuerySortV1_5_0),
      ),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedQuerySortV1_5_0 = {
  readonly field: QueryExpressionContainerV1_2_0;
  readonly direction: VisualConfigurationEmbeddedSortDirection;
};

export const VisualConfigurationEmbeddedQuerySortV1_5_0: Schema.Codec<VisualConfigurationEmbeddedQuerySortV1_5_0> =
  closed({
    field: Schema.suspend(
      () => QueryExpressionContainerV1_2_0,
    ),
    direction: Schema.suspend(
      () => VisualConfigurationEmbeddedSortDirection,
    ),
  });

export type VisualConfigurationEmbeddedSortDirection =
  "Ascending" | "Descending";

export const VisualConfigurationEmbeddedSortDirection: Schema.Codec<VisualConfigurationEmbeddedSortDirection> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);

export type VisualConfigurationEmbeddedVisualQueryOptions = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};

export const VisualConfigurationEmbeddedVisualQueryOptions: Schema.Codec<VisualConfigurationEmbeddedVisualQueryOptions> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedProjectionStateV1_5_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationEmbeddedRoleProjectionV1_5_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationEmbeddedRoleFieldParameterV1_5_0>;
};

export const VisualConfigurationEmbeddedProjectionStateV1_5_0: Schema.Codec<VisualConfigurationEmbeddedProjectionStateV1_5_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationEmbeddedRoleProjectionV1_5_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedRoleFieldParameterV1_5_0,
        ),
      ),
    ),
  });

export type VisualConfigurationEmbeddedRoleProjectionV1_5_0 = {
  readonly field: QueryExpressionContainerV1_2_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};

export const VisualConfigurationEmbeddedRoleProjectionV1_5_0: Schema.Codec<VisualConfigurationEmbeddedRoleProjectionV1_5_0> =
  closed({
    field: Schema.suspend(
      () => QueryExpressionContainerV1_2_0,
    ),
    queryRef: Schema.String,
    nativeQueryRef: Schema.optionalKey(Schema.String),
    displayName: Schema.optionalKey(Schema.String),
    format: Schema.optionalKey(
      Schema.String.check(Schema.isMaxCodePoints(255)),
    ),
    active: Schema.optionalKey(Schema.Boolean),
    hidden: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedRoleFieldParameterV1_5_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
};

export const VisualConfigurationEmbeddedRoleFieldParameterV1_5_0: Schema.Codec<VisualConfigurationEmbeddedRoleFieldParameterV1_5_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => QueryExpressionContainerV1_2_0,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });

export type VisualConfigurationEmbeddedExpansionStateV1_5_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationEmbeddedRootExpansionStateV1_5_0;
  readonly levels?: ReadonlyArray<VisualConfigurationEmbeddedLevelExpansionStateV1_5_0>;
};

export const VisualConfigurationEmbeddedExpansionStateV1_5_0: Schema.Codec<VisualConfigurationEmbeddedExpansionStateV1_5_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedRootExpansionStateV1_5_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedLevelExpansionStateV1_5_0,
        ),
      ),
    ),
  });

export type VisualConfigurationEmbeddedRootExpansionStateV1_5_0 = {
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV1_5_0>;
};

export const VisualConfigurationEmbeddedRootExpansionStateV1_5_0: Schema.Codec<VisualConfigurationEmbeddedRootExpansionStateV1_5_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => QueryExpressionContainerV1_2_0,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV1_5_0,
        ),
      ),
    ),
  });

export type VisualConfigurationEmbeddedNodeExpansionStateV1_5_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV1_5_0>;
};

export const VisualConfigurationEmbeddedNodeExpansionStateV1_5_0: Schema.Codec<VisualConfigurationEmbeddedNodeExpansionStateV1_5_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => QueryExpressionContainerV1_2_0,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV1_5_0,
        ),
      ),
    ),
  });

export type VisualConfigurationEmbeddedLevelExpansionStateV1_5_0 = {
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationEmbeddedAILevelInformation;
};

export const VisualConfigurationEmbeddedLevelExpansionStateV1_5_0: Schema.Codec<VisualConfigurationEmbeddedLevelExpansionStateV1_5_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => QueryExpressionContainerV1_2_0,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedAILevelInformation),
    ),
  });

export type VisualConfigurationEmbeddedAILevelInformation = {
  readonly method: VisualConfigurationEmbeddedAIDecompositionMethod;
  readonly disabled?: boolean;
};

export const VisualConfigurationEmbeddedAILevelInformation: Schema.Codec<VisualConfigurationEmbeddedAILevelInformation> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationEmbeddedAIDecompositionMethod,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedAIDecompositionMethod =
  "BestSplit" | "MaxSplit" | "MinSplit";

export const VisualConfigurationEmbeddedAIDecompositionMethod: Schema.Codec<VisualConfigurationEmbeddedAIDecompositionMethod> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);

export type VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_5_0 =
  {
    readonly title?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedTitle;
    }>;
    readonly subTitle?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedSubTitle;
    }>;
    readonly divider?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedDivider;
    }>;
    readonly spacing?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedSpacing;
    }>;
    readonly background?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedBackground;
    }>;
    readonly padding?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedPadding;
    }>;
    readonly lockAspect?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedLockAspect;
    }>;
    readonly general?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects;
    }>;
    readonly border?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedBorder;
    }>;
    readonly dropShadow?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedDropShadow;
    }>;
    readonly visualLink?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualLinkV1_5_0;
    }>;
    readonly visualTooltip?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualTooltip;
    }>;
    readonly stylePreset?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedStylePreset;
    }>;
    readonly visualHeader?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeader;
    }>;
    readonly visualHeaderTooltip?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderTooltip;
    }>;
  };

export const VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_5_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_5_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedTitle,
          ),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSubTitle,
          ),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDivider,
          ),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSpacing,
          ),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBackground,
          ),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedPadding,
          ),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedLockAspect,
          ),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBorder,
          ),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDropShadow,
          ),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualLinkV1_5_0,
          ),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualTooltip,
          ),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedStylePreset,
          ),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeader,
          ),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderTooltip,
          ),
        }),
      ),
    ),
  });

export type VisualConfigurationEmbeddedTitle = {
  readonly show?: Schema.Json;
  readonly text?: Schema.Json;
  readonly heading?: Schema.Json;
  readonly titleWrap?: Schema.Json;
  readonly fontColor?: Schema.Json;
  readonly background?: Schema.Json;
  readonly alignment?: Schema.Json;
  readonly fontSize?: Schema.Json;
  readonly bold?: Schema.Json;
  readonly italic?: Schema.Json;
  readonly underline?: Schema.Json;
  readonly fontFamily?: Schema.Json;
};

export const VisualConfigurationEmbeddedTitle: Schema.Codec<VisualConfigurationEmbeddedTitle> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    text: Schema.optionalKey(Schema.Json),
    heading: Schema.optionalKey(Schema.Json),
    titleWrap: Schema.optionalKey(Schema.Json),
    fontColor: Schema.optionalKey(Schema.Json),
    background: Schema.optionalKey(Schema.Json),
    alignment: Schema.optionalKey(Schema.Json),
    fontSize: Schema.optionalKey(Schema.Json),
    bold: Schema.optionalKey(Schema.Json),
    italic: Schema.optionalKey(Schema.Json),
    underline: Schema.optionalKey(Schema.Json),
    fontFamily: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationEmbeddedSubTitle = {
  readonly show?: Schema.Json;
  readonly text?: Schema.Json;
  readonly heading?: Schema.Json;
  readonly titleWrap?: Schema.Json;
  readonly fontColor?: Schema.Json;
  readonly alignment?: Schema.Json;
  readonly fontSize?: Schema.Json;
  readonly bold?: Schema.Json;
  readonly italic?: Schema.Json;
  readonly underline?: Schema.Json;
  readonly fontFamily?: Schema.Json;
};

export const VisualConfigurationEmbeddedSubTitle: Schema.Codec<VisualConfigurationEmbeddedSubTitle> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    text: Schema.optionalKey(Schema.Json),
    heading: Schema.optionalKey(Schema.Json),
    titleWrap: Schema.optionalKey(Schema.Json),
    fontColor: Schema.optionalKey(Schema.Json),
    alignment: Schema.optionalKey(Schema.Json),
    fontSize: Schema.optionalKey(Schema.Json),
    bold: Schema.optionalKey(Schema.Json),
    italic: Schema.optionalKey(Schema.Json),
    underline: Schema.optionalKey(Schema.Json),
    fontFamily: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationEmbeddedDivider = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};

export const VisualConfigurationEmbeddedDivider: Schema.Codec<VisualConfigurationEmbeddedDivider> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationEmbeddedSpacing = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};

export const VisualConfigurationEmbeddedSpacing: Schema.Codec<VisualConfigurationEmbeddedSpacing> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationEmbeddedBackground = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};

export const VisualConfigurationEmbeddedBackground: Schema.Codec<VisualConfigurationEmbeddedBackground> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationEmbeddedPadding = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};

export const VisualConfigurationEmbeddedPadding: Schema.Codec<VisualConfigurationEmbeddedPadding> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationEmbeddedLockAspect = {
  readonly show?: Schema.Json;
};

export const VisualConfigurationEmbeddedLockAspect: Schema.Codec<VisualConfigurationEmbeddedLockAspect> =
  closed({ show: Schema.optionalKey(Schema.Json) });

export type VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects =
  {
    readonly x?: Schema.Json;
    readonly y?: Schema.Json;
    readonly width?: Schema.Json;
    readonly height?: Schema.Json;
    readonly altText?: Schema.Json;
    readonly allowBinnedLineSample?: Schema.Json;
    readonly allowOverlappingPointsSample?: Schema.Json;
    readonly keepLayerOrder?: Schema.Json;
  };

export const VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects: Schema.Codec<VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
    allowBinnedLineSample: Schema.optionalKey(Schema.Json),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Json),
    keepLayerOrder: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationEmbeddedBorder = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};

export const VisualConfigurationEmbeddedBorder: Schema.Codec<VisualConfigurationEmbeddedBorder> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationEmbeddedDropShadow = {
  readonly show?: Schema.Json;
  readonly preset?: Schema.Json;
  readonly position?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly shadowSpread?: Schema.Json;
  readonly shadowBlur?: Schema.Json;
  readonly angle?: Schema.Json;
  readonly shadowDistance?: Schema.Json;
};

export const VisualConfigurationEmbeddedDropShadow: Schema.Codec<VisualConfigurationEmbeddedDropShadow> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    preset: Schema.optionalKey(Schema.Json),
    position: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
    shadowSpread: Schema.optionalKey(Schema.Json),
    shadowBlur: Schema.optionalKey(Schema.Json),
    angle: Schema.optionalKey(Schema.Json),
    shadowDistance: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationEmbeddedVisualLinkV1_5_0 = {
  readonly show?: Schema.Json;
  readonly type?: Schema.Json;
  readonly bookmark?: Schema.Json;
  readonly disabledTooltip?: Schema.Json;
  readonly drillthroughSection?: Schema.Json;
  readonly enabledTooltip?: Schema.Json;
  readonly qna?: Schema.Json;
  readonly suppressDefaultTooltip?: Schema.Json;
  readonly showDefaultTooltip?: Schema.Json;
  readonly navigationSection?: Schema.Json;
  readonly tooltip?: Schema.Json;
  readonly tooltipPlaceholderText?: Schema.Json;
  readonly webUrl?: Schema.Json;
};

export const VisualConfigurationEmbeddedVisualLinkV1_5_0: Schema.Codec<VisualConfigurationEmbeddedVisualLinkV1_5_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    type: Schema.optionalKey(Schema.Json),
    bookmark: Schema.optionalKey(Schema.Json),
    disabledTooltip: Schema.optionalKey(Schema.Json),
    drillthroughSection: Schema.optionalKey(Schema.Json),
    enabledTooltip: Schema.optionalKey(Schema.Json),
    qna: Schema.optionalKey(Schema.Json),
    suppressDefaultTooltip: Schema.optionalKey(Schema.Json),
    showDefaultTooltip: Schema.optionalKey(Schema.Json),
    navigationSection: Schema.optionalKey(Schema.Json),
    tooltip: Schema.optionalKey(Schema.Json),
    tooltipPlaceholderText: Schema.optionalKey(Schema.Json),
    webUrl: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationEmbeddedVisualTooltip = {
  readonly show?: Schema.Json;
  readonly type?: Schema.Json;
  readonly section?: Schema.Json;
  readonly titleFontColor?: Schema.Json;
  readonly valueFontColor?: Schema.Json;
  readonly fontSize?: Schema.Json;
  readonly bold?: Schema.Json;
  readonly italic?: Schema.Json;
  readonly underline?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly background?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly actionFontColor?: Schema.Json;
  readonly themedTitleFontColor?: Schema.Json;
  readonly themedBackground?: Schema.Json;
  readonly themedValueFontColor?: Schema.Json;
};

export const VisualConfigurationEmbeddedVisualTooltip: Schema.Codec<VisualConfigurationEmbeddedVisualTooltip> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    type: Schema.optionalKey(Schema.Json),
    section: Schema.optionalKey(Schema.Json),
    titleFontColor: Schema.optionalKey(Schema.Json),
    valueFontColor: Schema.optionalKey(Schema.Json),
    fontSize: Schema.optionalKey(Schema.Json),
    bold: Schema.optionalKey(Schema.Json),
    italic: Schema.optionalKey(Schema.Json),
    underline: Schema.optionalKey(Schema.Json),
    fontFamily: Schema.optionalKey(Schema.Json),
    background: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
    actionFontColor: Schema.optionalKey(Schema.Json),
    themedTitleFontColor: Schema.optionalKey(Schema.Json),
    themedBackground: Schema.optionalKey(Schema.Json),
    themedValueFontColor: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationEmbeddedStylePreset = {
  readonly name?: Schema.Json;
};

export const VisualConfigurationEmbeddedStylePreset: Schema.Codec<VisualConfigurationEmbeddedStylePreset> =
  closed({ name: Schema.optionalKey(Schema.Json) });

export type VisualConfigurationEmbeddedVisualHeader = {
  readonly show?: Schema.Json;
  readonly background?: Schema.Json;
  readonly border?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly foreground?: Schema.Json;
  readonly showVisualInformationButton?: Schema.Json;
  readonly showVisualWarningButton?: Schema.Json;
  readonly showVisualErrorButton?: Schema.Json;
  readonly showDrillRoleSelector?: Schema.Json;
  readonly showDrillUpButton?: Schema.Json;
  readonly showDrillToggleButton?: Schema.Json;
  readonly showDrillDownLevelButton?: Schema.Json;
  readonly showDrillDownExpandButton?: Schema.Json;
  readonly showPinButton?: Schema.Json;
  readonly showFilterRestatementButton?: Schema.Json;
  readonly showFocusModeButton?: Schema.Json;
  readonly showCopyVisualImageButton?: Schema.Json;
  readonly showSeeDataLayoutToggleButton?: Schema.Json;
  readonly showOptionsMenu?: Schema.Json;
  readonly showCommentButton?: Schema.Json;
  readonly showTooltipButton?: Schema.Json;
  readonly showPersonalizeVisualButton?: Schema.Json;
  readonly showSmartNarrativeButton?: Schema.Json;
  readonly showSetAlertButton?: Schema.Json;
  readonly showFollowVisualButton?: Schema.Json;
};

export const VisualConfigurationEmbeddedVisualHeader: Schema.Codec<VisualConfigurationEmbeddedVisualHeader> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    background: Schema.optionalKey(Schema.Json),
    border: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
    foreground: Schema.optionalKey(Schema.Json),
    showVisualInformationButton: Schema.optionalKey(Schema.Json),
    showVisualWarningButton: Schema.optionalKey(Schema.Json),
    showVisualErrorButton: Schema.optionalKey(Schema.Json),
    showDrillRoleSelector: Schema.optionalKey(Schema.Json),
    showDrillUpButton: Schema.optionalKey(Schema.Json),
    showDrillToggleButton: Schema.optionalKey(Schema.Json),
    showDrillDownLevelButton: Schema.optionalKey(Schema.Json),
    showDrillDownExpandButton: Schema.optionalKey(Schema.Json),
    showPinButton: Schema.optionalKey(Schema.Json),
    showFilterRestatementButton: Schema.optionalKey(Schema.Json),
    showFocusModeButton: Schema.optionalKey(Schema.Json),
    showCopyVisualImageButton: Schema.optionalKey(Schema.Json),
    showSeeDataLayoutToggleButton: Schema.optionalKey(Schema.Json),
    showOptionsMenu: Schema.optionalKey(Schema.Json),
    showCommentButton: Schema.optionalKey(Schema.Json),
    showTooltipButton: Schema.optionalKey(Schema.Json),
    showPersonalizeVisualButton: Schema.optionalKey(Schema.Json),
    showSmartNarrativeButton: Schema.optionalKey(Schema.Json),
    showSetAlertButton: Schema.optionalKey(Schema.Json),
    showFollowVisualButton: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationEmbeddedVisualHeaderTooltip = {
  readonly type?: Schema.Json;
  readonly section?: Schema.Json;
  readonly text?: Schema.Json;
  readonly titleFontColor?: Schema.Json;
  readonly fontSize?: Schema.Json;
  readonly fontFamily?: Schema.Json;
  readonly bold?: Schema.Json;
  readonly italic?: Schema.Json;
  readonly underline?: Schema.Json;
  readonly background?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly themedTitleFontColor?: Schema.Json;
  readonly themedBackground?: Schema.Json;
};

export const VisualConfigurationEmbeddedVisualHeaderTooltip: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderTooltip> =
  closed({
    type: Schema.optionalKey(Schema.Json),
    section: Schema.optionalKey(Schema.Json),
    text: Schema.optionalKey(Schema.Json),
    titleFontColor: Schema.optionalKey(Schema.Json),
    fontSize: Schema.optionalKey(Schema.Json),
    fontFamily: Schema.optionalKey(Schema.Json),
    bold: Schema.optionalKey(Schema.Json),
    italic: Schema.optionalKey(Schema.Json),
    underline: Schema.optionalKey(Schema.Json),
    background: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
    themedTitleFontColor: Schema.optionalKey(Schema.Json),
    themedBackground: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationEmbeddedVisualSyncGroup = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};

export const VisualConfigurationEmbeddedVisualSyncGroup: Schema.Codec<VisualConfigurationEmbeddedVisualSyncGroup> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });

export const VisualConfigurationEmbeddedDefinitionsV1_5_0 = {
  Query: VisualConfigurationEmbeddedQueryV1_5_0,
  SortDefinition: VisualConfigurationEmbeddedSortDefinitionV1_5_0,
  QuerySort: VisualConfigurationEmbeddedQuerySortV1_5_0,
  SortDirection: VisualConfigurationEmbeddedSortDirection,
  VisualQueryOptions: VisualConfigurationEmbeddedVisualQueryOptions,
  ProjectionState: VisualConfigurationEmbeddedProjectionStateV1_5_0,
  RoleProjection: VisualConfigurationEmbeddedRoleProjectionV1_5_0,
  RoleFieldParameter: VisualConfigurationEmbeddedRoleFieldParameterV1_5_0,
  ExpansionState: VisualConfigurationEmbeddedExpansionStateV1_5_0,
  RootExpansionState: VisualConfigurationEmbeddedRootExpansionStateV1_5_0,
  NodeExpansionState: VisualConfigurationEmbeddedNodeExpansionStateV1_5_0,
  LevelExpansionState: VisualConfigurationEmbeddedLevelExpansionStateV1_5_0,
  AILevelInformation: VisualConfigurationEmbeddedAILevelInformation,
  AIDecompositionMethod: VisualConfigurationEmbeddedAIDecompositionMethod,
  VisualContainerFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_5_0,
  Title: VisualConfigurationEmbeddedTitle,
  SubTitle: VisualConfigurationEmbeddedSubTitle,
  Divider: VisualConfigurationEmbeddedDivider,
  Spacing: VisualConfigurationEmbeddedSpacing,
  Background: VisualConfigurationEmbeddedBackground,
  Padding: VisualConfigurationEmbeddedPadding,
  LockAspect: VisualConfigurationEmbeddedLockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects,
  Border: VisualConfigurationEmbeddedBorder,
  DropShadow: VisualConfigurationEmbeddedDropShadow,
  VisualLink: VisualConfigurationEmbeddedVisualLinkV1_5_0,
  VisualTooltip: VisualConfigurationEmbeddedVisualTooltip,
  StylePreset: VisualConfigurationEmbeddedStylePreset,
  VisualHeader: VisualConfigurationEmbeddedVisualHeader,
  VisualHeaderTooltip: VisualConfigurationEmbeddedVisualHeaderTooltip,
  VisualSyncGroup: VisualConfigurationEmbeddedVisualSyncGroup,
} as const;

export type VisualConfigurationEmbeddedV1_5_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationEmbeddedQueryV1_5_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationEmbeddedExpansionStateV1_5_0>;
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_5_0;
  readonly syncGroup?: VisualConfigurationEmbeddedVisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationEmbeddedV1_5_0: Schema.Codec<VisualConfigurationEmbeddedV1_5_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedQueryV1_5_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedExpansionStateV1_5_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_2_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_5_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualSyncGroup),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedQueryV1_8_0 = {
  readonly sortDefinition?: VisualConfigurationEmbeddedSortDefinitionV1_5_0;
  readonly options?: VisualConfigurationEmbeddedVisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationEmbeddedProjectionStateV1_8_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const VisualConfigurationEmbeddedQueryV1_8_0: Schema.Codec<VisualConfigurationEmbeddedQueryV1_8_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedSortDefinitionV1_5_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualQueryOptions),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationEmbeddedProjectionStateV1_8_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedProjectionStateV1_8_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationEmbeddedRoleProjectionV1_5_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationEmbeddedRoleFieldParameterV1_8_0>;
};

export const VisualConfigurationEmbeddedProjectionStateV1_8_0: Schema.Codec<VisualConfigurationEmbeddedProjectionStateV1_8_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationEmbeddedRoleProjectionV1_5_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedRoleFieldParameterV1_8_0,
        ),
      ),
    ),
  });

export type VisualConfigurationEmbeddedRoleFieldParameterV1_8_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};

export const VisualConfigurationEmbeddedRoleFieldParameterV1_8_0: Schema.Codec<VisualConfigurationEmbeddedRoleFieldParameterV1_8_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => QueryExpressionContainerV1_2_0,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });

export type VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_8_0 =
  {
    readonly title?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedTitle;
    }>;
    readonly subTitle?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedSubTitle;
    }>;
    readonly divider?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedDivider;
    }>;
    readonly spacing?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedSpacing;
    }>;
    readonly background?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedBackground;
    }>;
    readonly padding?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedPadding;
    }>;
    readonly lockAspect?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedLockAspect;
    }>;
    readonly general?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects;
    }>;
    readonly border?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedBorder;
    }>;
    readonly dropShadow?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedDropShadow;
    }>;
    readonly visualLink?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedVisualLinkV1_5_0;
    }>;
    readonly visualTooltip?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedVisualTooltip;
    }>;
    readonly stylePreset?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedStylePreset;
    }>;
    readonly visualHeader?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeader;
    }>;
    readonly visualHeaderTooltip?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderTooltip;
    }>;
  };

export const VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_8_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_8_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedTitle,
          ),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSubTitle,
          ),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDivider,
          ),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSpacing,
          ),
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
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBackground,
          ),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedPadding,
          ),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedLockAspect,
          ),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBorder,
          ),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDropShadow,
          ),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualLinkV1_5_0,
          ),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualTooltip,
          ),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedStylePreset,
          ),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeader,
          ),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderTooltip,
          ),
        }),
      ),
    ),
  });

export const VisualConfigurationEmbeddedDefinitionsV1_8_0 = {
  Query: VisualConfigurationEmbeddedQueryV1_8_0,
  SortDefinition: VisualConfigurationEmbeddedSortDefinitionV1_5_0,
  QuerySort: VisualConfigurationEmbeddedQuerySortV1_5_0,
  SortDirection: VisualConfigurationEmbeddedSortDirection,
  VisualQueryOptions: VisualConfigurationEmbeddedVisualQueryOptions,
  ProjectionState: VisualConfigurationEmbeddedProjectionStateV1_8_0,
  RoleProjection: VisualConfigurationEmbeddedRoleProjectionV1_5_0,
  RoleFieldParameter: VisualConfigurationEmbeddedRoleFieldParameterV1_8_0,
  ExpansionState: VisualConfigurationEmbeddedExpansionStateV1_5_0,
  RootExpansionState: VisualConfigurationEmbeddedRootExpansionStateV1_5_0,
  NodeExpansionState: VisualConfigurationEmbeddedNodeExpansionStateV1_5_0,
  LevelExpansionState: VisualConfigurationEmbeddedLevelExpansionStateV1_5_0,
  AILevelInformation: VisualConfigurationEmbeddedAILevelInformation,
  AIDecompositionMethod: VisualConfigurationEmbeddedAIDecompositionMethod,
  VisualContainerFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_8_0,
  Title: VisualConfigurationEmbeddedTitle,
  SubTitle: VisualConfigurationEmbeddedSubTitle,
  Divider: VisualConfigurationEmbeddedDivider,
  Spacing: VisualConfigurationEmbeddedSpacing,
  Background: VisualConfigurationEmbeddedBackground,
  Padding: VisualConfigurationEmbeddedPadding,
  LockAspect: VisualConfigurationEmbeddedLockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects,
  Border: VisualConfigurationEmbeddedBorder,
  DropShadow: VisualConfigurationEmbeddedDropShadow,
  VisualLink: VisualConfigurationEmbeddedVisualLinkV1_5_0,
  VisualTooltip: VisualConfigurationEmbeddedVisualTooltip,
  StylePreset: VisualConfigurationEmbeddedStylePreset,
  VisualHeader: VisualConfigurationEmbeddedVisualHeader,
  VisualHeaderTooltip: VisualConfigurationEmbeddedVisualHeaderTooltip,
  VisualSyncGroup: VisualConfigurationEmbeddedVisualSyncGroup,
} as const;

export type VisualConfigurationEmbeddedV1_8_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationEmbeddedQueryV1_8_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationEmbeddedExpansionStateV1_5_0>;
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_8_0;
  readonly syncGroup?: VisualConfigurationEmbeddedVisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationEmbeddedV1_8_0: Schema.Codec<VisualConfigurationEmbeddedV1_8_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedQueryV1_8_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedExpansionStateV1_5_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_3_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_8_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualSyncGroup),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationQueryV2_0_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV2_0_0;
  readonly options?: VisualConfigurationVisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationProjectionStateV2_0_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const VisualConfigurationQueryV2_0_0: Schema.Codec<VisualConfigurationQueryV2_0_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationSortDefinitionV2_0_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualQueryOptions),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationProjectionStateV2_0_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationSortDefinitionV2_0_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationQuerySortV2_0_0>;
  readonly isDefaultSort?: boolean;
};

export const VisualConfigurationSortDefinitionV2_0_0: Schema.Codec<VisualConfigurationSortDefinitionV2_0_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationQuerySortV2_0_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationQuerySortV2_0_0 = {
  readonly field: QueryExpressionContainerV1_3_0;
  readonly direction: VisualConfigurationSortDirection;
};

export const VisualConfigurationQuerySortV2_0_0: Schema.Codec<VisualConfigurationQuerySortV2_0_0> =
  closed({
    field: Schema.suspend(
      () => QueryExpressionContainerV1_3_0,
    ),
    direction: Schema.suspend(() => VisualConfigurationSortDirection),
  });

export type VisualConfigurationProjectionStateV2_0_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationRoleProjectionV2_0_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationRoleFieldParameterV2_0_0>;
};

export const VisualConfigurationProjectionStateV2_0_0: Schema.Codec<VisualConfigurationProjectionStateV2_0_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationRoleProjectionV2_0_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationRoleFieldParameterV2_0_0),
      ),
    ),
  });

export type VisualConfigurationRoleProjectionV2_0_0 = {
  readonly field: QueryExpressionContainerV1_3_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};

export const VisualConfigurationRoleProjectionV2_0_0: Schema.Codec<VisualConfigurationRoleProjectionV2_0_0> =
  closed({
    field: Schema.suspend(
      () => QueryExpressionContainerV1_3_0,
    ),
    queryRef: Schema.String,
    nativeQueryRef: Schema.optionalKey(Schema.String),
    displayName: Schema.optionalKey(Schema.String),
    format: Schema.optionalKey(
      Schema.String.check(Schema.isMaxCodePoints(255)),
    ),
    active: Schema.optionalKey(Schema.Boolean),
    hidden: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationRoleFieldParameterV2_0_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_3_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};

export const VisualConfigurationRoleFieldParameterV2_0_0: Schema.Codec<VisualConfigurationRoleFieldParameterV2_0_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => QueryExpressionContainerV1_3_0,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });

export type VisualConfigurationExpansionStateV2_0_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationRootExpansionStateV2_0_0;
  readonly levels?: ReadonlyArray<VisualConfigurationLevelExpansionStateV2_0_0>;
};

export const VisualConfigurationExpansionStateV2_0_0: Schema.Codec<VisualConfigurationExpansionStateV2_0_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationRootExpansionStateV2_0_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationLevelExpansionStateV2_0_0),
      ),
    ),
  });

export type VisualConfigurationRootExpansionStateV2_0_0 = {
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_0_0>;
};

export const VisualConfigurationRootExpansionStateV2_0_0: Schema.Codec<VisualConfigurationRootExpansionStateV2_0_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => QueryExpressionContainerV1_3_0,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV2_0_0),
      ),
    ),
  });

export type VisualConfigurationNodeExpansionStateV2_0_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_0_0>;
};

export const VisualConfigurationNodeExpansionStateV2_0_0: Schema.Codec<VisualConfigurationNodeExpansionStateV2_0_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => QueryExpressionContainerV1_3_0,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV2_0_0),
      ),
    ),
  });

export type VisualConfigurationLevelExpansionStateV2_0_0 = {
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationAILevelInformation;
};

export const VisualConfigurationLevelExpansionStateV2_0_0: Schema.Codec<VisualConfigurationLevelExpansionStateV2_0_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => QueryExpressionContainerV1_3_0,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationAILevelInformation),
    ),
  });

export type VisualConfigurationVisualContainerFormattingObjectsV2_0_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationTitle;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationSubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationDivider;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationSpacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationPadding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationBorder;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationDropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualLinkV1_5_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationStylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualHeader;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualHeaderTooltip;
  }>;
};

export const VisualConfigurationVisualContainerFormattingObjectsV2_0_0: Schema.Codec<VisualConfigurationVisualContainerFormattingObjectsV2_0_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationTitle),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDivider),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSpacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationPadding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationVisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationBorder),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV1_5_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualTooltip,
          ),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationStylePreset,
          ),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeader,
          ),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderTooltip,
          ),
        }),
      ),
    ),
  });

export const VisualConfigurationDefinitionsV2_0_0 = {
  Query: VisualConfigurationQueryV2_0_0,
  SortDefinition: VisualConfigurationSortDefinitionV2_0_0,
  QuerySort: VisualConfigurationQuerySortV2_0_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualConfigurationVisualQueryOptions,
  ProjectionState: VisualConfigurationProjectionStateV2_0_0,
  RoleProjection: VisualConfigurationRoleProjectionV2_0_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV2_0_0,
  ExpansionState: VisualConfigurationExpansionStateV2_0_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV2_0_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV2_0_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV2_0_0,
  AILevelInformation: VisualConfigurationAILevelInformation,
  AIDecompositionMethod: VisualConfigurationAIDecompositionMethod,
  VisualContainerFormattingObjects:
    VisualConfigurationVisualContainerFormattingObjectsV2_0_0,
  Title: VisualConfigurationTitle,
  SubTitle: VisualConfigurationSubTitle,
  Divider: VisualConfigurationDivider,
  Spacing: VisualConfigurationSpacing,
  Background: VisualConfigurationBackground,
  Padding: VisualConfigurationPadding,
  LockAspect: VisualConfigurationLockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationVisualContainerGeneralFormattingObjects,
  Border: VisualConfigurationBorder,
  DropShadow: VisualConfigurationDropShadow,
  VisualLink: VisualConfigurationVisualLinkV1_5_0,
  VisualTooltip: VisualConfigurationVisualTooltip,
  StylePreset: VisualConfigurationStylePreset,
  VisualHeader: VisualConfigurationVisualHeader,
  VisualHeaderTooltip: VisualConfigurationVisualHeaderTooltip,
  VisualSyncGroup: VisualConfigurationVisualSyncGroup,
} as const;

export type VisualConfigurationV2_0_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV2_0_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV2_0_0>;
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV2_0_0;
  readonly syncGroup?: VisualConfigurationVisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationV2_0_0: Schema.Codec<VisualConfigurationV2_0_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema.json",
    ),
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationQueryV2_0_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationExpansionStateV2_0_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_4_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationVisualContainerFormattingObjectsV2_0_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualSyncGroup),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedQueryV2_1_0 = {
  readonly sortDefinition?: VisualConfigurationEmbeddedSortDefinitionV2_1_0;
  readonly options?: VisualConfigurationEmbeddedVisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationEmbeddedProjectionStateV2_1_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const VisualConfigurationEmbeddedQueryV2_1_0: Schema.Codec<VisualConfigurationEmbeddedQueryV2_1_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedSortDefinitionV2_1_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualQueryOptions),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationEmbeddedProjectionStateV2_1_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedSortDefinitionV2_1_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationEmbeddedQuerySortV2_1_0>;
  readonly isDefaultSort?: boolean;
};

export const VisualConfigurationEmbeddedSortDefinitionV2_1_0: Schema.Codec<VisualConfigurationEmbeddedSortDefinitionV2_1_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedQuerySortV2_1_0),
      ),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedQuerySortV2_1_0 = {
  readonly field: QueryExpressionContainerV1_3_0;
  readonly direction: VisualConfigurationEmbeddedSortDirection;
};

export const VisualConfigurationEmbeddedQuerySortV2_1_0: Schema.Codec<VisualConfigurationEmbeddedQuerySortV2_1_0> =
  closed({
    field: Schema.suspend(
      () => QueryExpressionContainerV1_3_0,
    ),
    direction: Schema.suspend(
      () => VisualConfigurationEmbeddedSortDirection,
    ),
  });

export type VisualConfigurationEmbeddedProjectionStateV2_1_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationEmbeddedRoleProjectionV2_1_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationEmbeddedRoleFieldParameterV2_1_0>;
};

export const VisualConfigurationEmbeddedProjectionStateV2_1_0: Schema.Codec<VisualConfigurationEmbeddedProjectionStateV2_1_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationEmbeddedRoleProjectionV2_1_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedRoleFieldParameterV2_1_0,
        ),
      ),
    ),
  });

export type VisualConfigurationEmbeddedRoleProjectionV2_1_0 = {
  readonly field: QueryExpressionContainerV1_3_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};

export const VisualConfigurationEmbeddedRoleProjectionV2_1_0: Schema.Codec<VisualConfigurationEmbeddedRoleProjectionV2_1_0> =
  closed({
    field: Schema.suspend(
      () => QueryExpressionContainerV1_3_0,
    ),
    queryRef: Schema.String,
    nativeQueryRef: Schema.optionalKey(Schema.String),
    displayName: Schema.optionalKey(Schema.String),
    format: Schema.optionalKey(
      Schema.String.check(Schema.isMaxCodePoints(255)),
    ),
    active: Schema.optionalKey(Schema.Boolean),
    hidden: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedRoleFieldParameterV2_1_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_3_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};

export const VisualConfigurationEmbeddedRoleFieldParameterV2_1_0: Schema.Codec<VisualConfigurationEmbeddedRoleFieldParameterV2_1_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => QueryExpressionContainerV1_3_0,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });

export type VisualConfigurationEmbeddedExpansionStateV2_1_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationEmbeddedRootExpansionStateV2_1_0;
  readonly levels?: ReadonlyArray<VisualConfigurationEmbeddedLevelExpansionStateV2_1_0>;
};

export const VisualConfigurationEmbeddedExpansionStateV2_1_0: Schema.Codec<VisualConfigurationEmbeddedExpansionStateV2_1_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedRootExpansionStateV2_1_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedLevelExpansionStateV2_1_0,
        ),
      ),
    ),
  });

export type VisualConfigurationEmbeddedRootExpansionStateV2_1_0 = {
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV2_1_0>;
};

export const VisualConfigurationEmbeddedRootExpansionStateV2_1_0: Schema.Codec<VisualConfigurationEmbeddedRootExpansionStateV2_1_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => QueryExpressionContainerV1_3_0,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV2_1_0,
        ),
      ),
    ),
  });

export type VisualConfigurationEmbeddedNodeExpansionStateV2_1_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV2_1_0>;
};

export const VisualConfigurationEmbeddedNodeExpansionStateV2_1_0: Schema.Codec<VisualConfigurationEmbeddedNodeExpansionStateV2_1_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => QueryExpressionContainerV1_3_0,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV2_1_0,
        ),
      ),
    ),
  });

export type VisualConfigurationEmbeddedLevelExpansionStateV2_1_0 = {
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_3_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationEmbeddedAILevelInformation;
};

export const VisualConfigurationEmbeddedLevelExpansionStateV2_1_0: Schema.Codec<VisualConfigurationEmbeddedLevelExpansionStateV2_1_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => QueryExpressionContainerV1_3_0,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedAILevelInformation),
    ),
  });

export type VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_1_0 =
  {
    readonly title?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedTitle;
    }>;
    readonly subTitle?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedSubTitle;
    }>;
    readonly divider?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedDivider;
    }>;
    readonly spacing?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedSpacing;
    }>;
    readonly background?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedBackground;
    }>;
    readonly padding?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedPadding;
    }>;
    readonly lockAspect?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedLockAspect;
    }>;
    readonly general?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects;
    }>;
    readonly border?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedBorder;
    }>;
    readonly dropShadow?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedDropShadow;
    }>;
    readonly visualLink?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualLinkV1_5_0;
    }>;
    readonly visualTooltip?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualTooltip;
    }>;
    readonly stylePreset?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedStylePreset;
    }>;
    readonly visualHeader?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeader;
    }>;
    readonly visualHeaderTooltip?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderTooltip;
    }>;
  };

export const VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_1_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_1_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedTitle,
          ),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSubTitle,
          ),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDivider,
          ),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSpacing,
          ),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBackground,
          ),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedPadding,
          ),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedLockAspect,
          ),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBorder,
          ),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDropShadow,
          ),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualLinkV1_5_0,
          ),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualTooltip,
          ),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedStylePreset,
          ),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeader,
          ),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderTooltip,
          ),
        }),
      ),
    ),
  });

export const VisualConfigurationEmbeddedDefinitionsV2_1_0 = {
  Query: VisualConfigurationEmbeddedQueryV2_1_0,
  SortDefinition: VisualConfigurationEmbeddedSortDefinitionV2_1_0,
  QuerySort: VisualConfigurationEmbeddedQuerySortV2_1_0,
  SortDirection: VisualConfigurationEmbeddedSortDirection,
  VisualQueryOptions: VisualConfigurationEmbeddedVisualQueryOptions,
  ProjectionState: VisualConfigurationEmbeddedProjectionStateV2_1_0,
  RoleProjection: VisualConfigurationEmbeddedRoleProjectionV2_1_0,
  RoleFieldParameter: VisualConfigurationEmbeddedRoleFieldParameterV2_1_0,
  ExpansionState: VisualConfigurationEmbeddedExpansionStateV2_1_0,
  RootExpansionState: VisualConfigurationEmbeddedRootExpansionStateV2_1_0,
  NodeExpansionState: VisualConfigurationEmbeddedNodeExpansionStateV2_1_0,
  LevelExpansionState: VisualConfigurationEmbeddedLevelExpansionStateV2_1_0,
  AILevelInformation: VisualConfigurationEmbeddedAILevelInformation,
  AIDecompositionMethod: VisualConfigurationEmbeddedAIDecompositionMethod,
  VisualContainerFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_1_0,
  Title: VisualConfigurationEmbeddedTitle,
  SubTitle: VisualConfigurationEmbeddedSubTitle,
  Divider: VisualConfigurationEmbeddedDivider,
  Spacing: VisualConfigurationEmbeddedSpacing,
  Background: VisualConfigurationEmbeddedBackground,
  Padding: VisualConfigurationEmbeddedPadding,
  LockAspect: VisualConfigurationEmbeddedLockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects,
  Border: VisualConfigurationEmbeddedBorder,
  DropShadow: VisualConfigurationEmbeddedDropShadow,
  VisualLink: VisualConfigurationEmbeddedVisualLinkV1_5_0,
  VisualTooltip: VisualConfigurationEmbeddedVisualTooltip,
  StylePreset: VisualConfigurationEmbeddedStylePreset,
  VisualHeader: VisualConfigurationEmbeddedVisualHeader,
  VisualHeaderTooltip: VisualConfigurationEmbeddedVisualHeaderTooltip,
  VisualSyncGroup: VisualConfigurationEmbeddedVisualSyncGroup,
} as const;

export type VisualConfigurationEmbeddedV2_1_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationEmbeddedQueryV2_1_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationEmbeddedExpansionStateV2_1_0>;
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_1_0;
  readonly syncGroup?: VisualConfigurationEmbeddedVisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationEmbeddedV2_1_0: Schema.Codec<VisualConfigurationEmbeddedV2_1_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedQueryV2_1_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedExpansionStateV2_1_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_4_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_1_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualSyncGroup),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationVisualLinkV2_2_0 = {
  readonly show?: Schema.Json;
  readonly type?: Schema.Json;
  readonly bookmark?: Schema.Json;
  readonly disabledTooltip?: Schema.Json;
  readonly drillthroughSection?: Schema.Json;
  readonly enabledTooltip?: Schema.Json;
  readonly qna?: Schema.Json;
  readonly suppressDefaultTooltip?: Schema.Json;
  readonly showDefaultTooltip?: Schema.Json;
  readonly navigationSection?: Schema.Json;
  readonly tooltip?: Schema.Json;
  readonly tooltipPlaceholderText?: Schema.Json;
  readonly webUrl?: Schema.Json;
  readonly dataFunction?: Schema.Json;
};

export const VisualConfigurationVisualLinkV2_2_0: Schema.Codec<VisualConfigurationVisualLinkV2_2_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    type: Schema.optionalKey(Schema.Json),
    bookmark: Schema.optionalKey(Schema.Json),
    disabledTooltip: Schema.optionalKey(Schema.Json),
    drillthroughSection: Schema.optionalKey(Schema.Json),
    enabledTooltip: Schema.optionalKey(Schema.Json),
    qna: Schema.optionalKey(Schema.Json),
    suppressDefaultTooltip: Schema.optionalKey(Schema.Json),
    showDefaultTooltip: Schema.optionalKey(Schema.Json),
    navigationSection: Schema.optionalKey(Schema.Json),
    tooltip: Schema.optionalKey(Schema.Json),
    tooltipPlaceholderText: Schema.optionalKey(Schema.Json),
    webUrl: Schema.optionalKey(Schema.Json),
    dataFunction: Schema.optionalKey(Schema.Json),
  });

export type VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_2_0 =
  {
    readonly title?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedTitle;
    }>;
    readonly subTitle?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedSubTitle;
    }>;
    readonly divider?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedDivider;
    }>;
    readonly spacing?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedSpacing;
    }>;
    readonly background?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedBackground;
    }>;
    readonly padding?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedPadding;
    }>;
    readonly lockAspect?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedLockAspect;
    }>;
    readonly general?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects;
    }>;
    readonly border?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedBorder;
    }>;
    readonly dropShadow?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedDropShadow;
    }>;
    readonly visualLink?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualLinkV2_2_0;
    }>;
    readonly visualTooltip?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualTooltip;
    }>;
    readonly stylePreset?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedStylePreset;
    }>;
    readonly visualHeader?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeader;
    }>;
    readonly visualHeaderTooltip?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderTooltip;
    }>;
  };

export const VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_2_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_2_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedTitle,
          ),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSubTitle,
          ),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDivider,
          ),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSpacing,
          ),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBackground,
          ),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedPadding,
          ),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedLockAspect,
          ),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBorder,
          ),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDropShadow,
          ),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualLinkV2_2_0,
          ),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualTooltip,
          ),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedStylePreset,
          ),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeader,
          ),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderTooltip,
          ),
        }),
      ),
    ),
  });

export type VisualConfigurationEmbeddedVisualLinkV2_2_0 = {
  readonly show?: Schema.Json;
  readonly type?: Schema.Json;
  readonly bookmark?: Schema.Json;
  readonly disabledTooltip?: Schema.Json;
  readonly drillthroughSection?: Schema.Json;
  readonly enabledTooltip?: Schema.Json;
  readonly qna?: Schema.Json;
  readonly suppressDefaultTooltip?: Schema.Json;
  readonly showDefaultTooltip?: Schema.Json;
  readonly navigationSection?: Schema.Json;
  readonly tooltip?: Schema.Json;
  readonly tooltipPlaceholderText?: Schema.Json;
  readonly webUrl?: Schema.Json;
  readonly dataFunction?: Schema.Json;
};

export const VisualConfigurationEmbeddedVisualLinkV2_2_0: Schema.Codec<VisualConfigurationEmbeddedVisualLinkV2_2_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    type: Schema.optionalKey(Schema.Json),
    bookmark: Schema.optionalKey(Schema.Json),
    disabledTooltip: Schema.optionalKey(Schema.Json),
    drillthroughSection: Schema.optionalKey(Schema.Json),
    enabledTooltip: Schema.optionalKey(Schema.Json),
    qna: Schema.optionalKey(Schema.Json),
    suppressDefaultTooltip: Schema.optionalKey(Schema.Json),
    showDefaultTooltip: Schema.optionalKey(Schema.Json),
    navigationSection: Schema.optionalKey(Schema.Json),
    tooltip: Schema.optionalKey(Schema.Json),
    tooltipPlaceholderText: Schema.optionalKey(Schema.Json),
    webUrl: Schema.optionalKey(Schema.Json),
    dataFunction: Schema.optionalKey(Schema.Json),
  });

export const VisualConfigurationEmbeddedDefinitionsV2_2_0 = {
  Query: VisualConfigurationEmbeddedQueryV2_1_0,
  SortDefinition: VisualConfigurationEmbeddedSortDefinitionV2_1_0,
  QuerySort: VisualConfigurationEmbeddedQuerySortV2_1_0,
  SortDirection: VisualConfigurationEmbeddedSortDirection,
  VisualQueryOptions: VisualConfigurationEmbeddedVisualQueryOptions,
  ProjectionState: VisualConfigurationEmbeddedProjectionStateV2_1_0,
  RoleProjection: VisualConfigurationEmbeddedRoleProjectionV2_1_0,
  RoleFieldParameter: VisualConfigurationEmbeddedRoleFieldParameterV2_1_0,
  ExpansionState: VisualConfigurationEmbeddedExpansionStateV2_1_0,
  RootExpansionState: VisualConfigurationEmbeddedRootExpansionStateV2_1_0,
  NodeExpansionState: VisualConfigurationEmbeddedNodeExpansionStateV2_1_0,
  LevelExpansionState: VisualConfigurationEmbeddedLevelExpansionStateV2_1_0,
  AILevelInformation: VisualConfigurationEmbeddedAILevelInformation,
  AIDecompositionMethod: VisualConfigurationEmbeddedAIDecompositionMethod,
  VisualContainerFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_2_0,
  Title: VisualConfigurationEmbeddedTitle,
  SubTitle: VisualConfigurationEmbeddedSubTitle,
  Divider: VisualConfigurationEmbeddedDivider,
  Spacing: VisualConfigurationEmbeddedSpacing,
  Background: VisualConfigurationEmbeddedBackground,
  Padding: VisualConfigurationEmbeddedPadding,
  LockAspect: VisualConfigurationEmbeddedLockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects,
  Border: VisualConfigurationEmbeddedBorder,
  DropShadow: VisualConfigurationEmbeddedDropShadow,
  VisualLink: VisualConfigurationEmbeddedVisualLinkV2_2_0,
  VisualTooltip: VisualConfigurationEmbeddedVisualTooltip,
  StylePreset: VisualConfigurationEmbeddedStylePreset,
  VisualHeader: VisualConfigurationEmbeddedVisualHeader,
  VisualHeaderTooltip: VisualConfigurationEmbeddedVisualHeaderTooltip,
  VisualSyncGroup: VisualConfigurationEmbeddedVisualSyncGroup,
} as const;

export type VisualConfigurationEmbeddedV2_2_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationEmbeddedQueryV2_1_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationEmbeddedExpansionStateV2_1_0>;
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_2_0;
  readonly syncGroup?: VisualConfigurationEmbeddedVisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationEmbeddedV2_2_0: Schema.Codec<VisualConfigurationEmbeddedV2_2_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedQueryV2_1_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedExpansionStateV2_1_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_4_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_2_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualSyncGroup),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedQueryV2_3_0 = {
  readonly sortDefinition?: VisualConfigurationEmbeddedSortDefinitionV2_3_0;
  readonly options?: VisualConfigurationEmbeddedVisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationEmbeddedProjectionStateV2_3_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const VisualConfigurationEmbeddedQueryV2_3_0: Schema.Codec<VisualConfigurationEmbeddedQueryV2_3_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedSortDefinitionV2_3_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualQueryOptions),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationEmbeddedProjectionStateV2_3_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedSortDefinitionV2_3_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationEmbeddedQuerySortV2_3_0>;
  readonly isDefaultSort?: boolean;
};

export const VisualConfigurationEmbeddedSortDefinitionV2_3_0: Schema.Codec<VisualConfigurationEmbeddedSortDefinitionV2_3_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedQuerySortV2_3_0),
      ),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedQuerySortV2_3_0 = {
  readonly field: QueryExpressionContainerV1_4_0;
  readonly direction: VisualConfigurationEmbeddedSortDirection;
};

export const VisualConfigurationEmbeddedQuerySortV2_3_0: Schema.Codec<VisualConfigurationEmbeddedQuerySortV2_3_0> =
  closed({
    field: Schema.suspend(
      () => QueryExpressionContainerV1_4_0,
    ),
    direction: Schema.suspend(
      () => VisualConfigurationEmbeddedSortDirection,
    ),
  });

export type VisualConfigurationEmbeddedProjectionStateV2_3_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationEmbeddedRoleProjectionV2_3_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationEmbeddedRoleFieldParameterV2_3_0>;
};

export const VisualConfigurationEmbeddedProjectionStateV2_3_0: Schema.Codec<VisualConfigurationEmbeddedProjectionStateV2_3_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationEmbeddedRoleProjectionV2_3_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedRoleFieldParameterV2_3_0,
        ),
      ),
    ),
  });

export type VisualConfigurationEmbeddedRoleProjectionV2_3_0 = {
  readonly field: QueryExpressionContainerV1_4_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};

export const VisualConfigurationEmbeddedRoleProjectionV2_3_0: Schema.Codec<VisualConfigurationEmbeddedRoleProjectionV2_3_0> =
  closed({
    field: Schema.suspend(
      () => QueryExpressionContainerV1_4_0,
    ),
    queryRef: Schema.String,
    nativeQueryRef: Schema.optionalKey(Schema.String),
    displayName: Schema.optionalKey(Schema.String),
    format: Schema.optionalKey(
      Schema.String.check(Schema.isMaxCodePoints(255)),
    ),
    active: Schema.optionalKey(Schema.Boolean),
    hidden: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedRoleFieldParameterV2_3_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_4_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};

export const VisualConfigurationEmbeddedRoleFieldParameterV2_3_0: Schema.Codec<VisualConfigurationEmbeddedRoleFieldParameterV2_3_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => QueryExpressionContainerV1_4_0,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });

export type VisualConfigurationEmbeddedExpansionStateV2_3_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationEmbeddedRootExpansionStateV2_3_0;
  readonly levels?: ReadonlyArray<VisualConfigurationEmbeddedLevelExpansionStateV2_3_0>;
};

export const VisualConfigurationEmbeddedExpansionStateV2_3_0: Schema.Codec<VisualConfigurationEmbeddedExpansionStateV2_3_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedRootExpansionStateV2_3_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedLevelExpansionStateV2_3_0,
        ),
      ),
    ),
  });

export type VisualConfigurationEmbeddedRootExpansionStateV2_3_0 = {
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV2_3_0>;
};

export const VisualConfigurationEmbeddedRootExpansionStateV2_3_0: Schema.Codec<VisualConfigurationEmbeddedRootExpansionStateV2_3_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => QueryExpressionContainerV1_4_0,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV2_3_0,
        ),
      ),
    ),
  });

export type VisualConfigurationEmbeddedNodeExpansionStateV2_3_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV2_3_0>;
};

export const VisualConfigurationEmbeddedNodeExpansionStateV2_3_0: Schema.Codec<VisualConfigurationEmbeddedNodeExpansionStateV2_3_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => QueryExpressionContainerV1_4_0,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV2_3_0,
        ),
      ),
    ),
  });

export type VisualConfigurationEmbeddedLevelExpansionStateV2_3_0 = {
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationEmbeddedAILevelInformation;
};

export const VisualConfigurationEmbeddedLevelExpansionStateV2_3_0: Schema.Codec<VisualConfigurationEmbeddedLevelExpansionStateV2_3_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => QueryExpressionContainerV1_4_0,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedAILevelInformation),
    ),
  });

export type VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0 =
  {
    readonly title?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedTitle;
    }>;
    readonly subTitle?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedSubTitle;
    }>;
    readonly divider?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedDivider;
    }>;
    readonly spacing?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedSpacing;
    }>;
    readonly background?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedBackground;
    }>;
    readonly padding?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedPadding;
    }>;
    readonly lockAspect?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedLockAspect;
    }>;
    readonly general?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects;
    }>;
    readonly border?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedBorder;
    }>;
    readonly dropShadow?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedDropShadow;
    }>;
    readonly visualLink?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedVisualLinkV2_2_0;
    }>;
    readonly visualTooltip?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedVisualTooltip;
    }>;
    readonly stylePreset?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedStylePreset;
    }>;
    readonly visualHeader?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeader;
    }>;
    readonly visualHeaderTooltip?: ReadonlyArray<{
      readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderTooltip;
    }>;
  };

export const VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedTitle,
          ),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSubTitle,
          ),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDivider,
          ),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSpacing,
          ),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBackground,
          ),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedPadding,
          ),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedLockAspect,
          ),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBorder,
          ),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDropShadow,
          ),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualLinkV2_2_0,
          ),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualTooltip,
          ),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedStylePreset,
          ),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeader,
          ),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderTooltip,
          ),
        }),
      ),
    ),
  });

export const VisualConfigurationEmbeddedDefinitionsV2_3_0 = {
  Query: VisualConfigurationEmbeddedQueryV2_3_0,
  SortDefinition: VisualConfigurationEmbeddedSortDefinitionV2_3_0,
  QuerySort: VisualConfigurationEmbeddedQuerySortV2_3_0,
  SortDirection: VisualConfigurationEmbeddedSortDirection,
  VisualQueryOptions: VisualConfigurationEmbeddedVisualQueryOptions,
  ProjectionState: VisualConfigurationEmbeddedProjectionStateV2_3_0,
  RoleProjection: VisualConfigurationEmbeddedRoleProjectionV2_3_0,
  RoleFieldParameter: VisualConfigurationEmbeddedRoleFieldParameterV2_3_0,
  ExpansionState: VisualConfigurationEmbeddedExpansionStateV2_3_0,
  RootExpansionState: VisualConfigurationEmbeddedRootExpansionStateV2_3_0,
  NodeExpansionState: VisualConfigurationEmbeddedNodeExpansionStateV2_3_0,
  LevelExpansionState: VisualConfigurationEmbeddedLevelExpansionStateV2_3_0,
  AILevelInformation: VisualConfigurationEmbeddedAILevelInformation,
  AIDecompositionMethod: VisualConfigurationEmbeddedAIDecompositionMethod,
  VisualContainerFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0,
  Title: VisualConfigurationEmbeddedTitle,
  SubTitle: VisualConfigurationEmbeddedSubTitle,
  Divider: VisualConfigurationEmbeddedDivider,
  Spacing: VisualConfigurationEmbeddedSpacing,
  Background: VisualConfigurationEmbeddedBackground,
  Padding: VisualConfigurationEmbeddedPadding,
  LockAspect: VisualConfigurationEmbeddedLockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects,
  Border: VisualConfigurationEmbeddedBorder,
  DropShadow: VisualConfigurationEmbeddedDropShadow,
  VisualLink: VisualConfigurationEmbeddedVisualLinkV2_2_0,
  VisualTooltip: VisualConfigurationEmbeddedVisualTooltip,
  StylePreset: VisualConfigurationEmbeddedStylePreset,
  VisualHeader: VisualConfigurationEmbeddedVisualHeader,
  VisualHeaderTooltip: VisualConfigurationEmbeddedVisualHeaderTooltip,
  VisualSyncGroup: VisualConfigurationEmbeddedVisualSyncGroup,
} as const;

export type VisualConfigurationEmbeddedV2_3_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationEmbeddedQueryV2_3_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationEmbeddedExpansionStateV2_3_0>;
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0;
  readonly syncGroup?: VisualConfigurationEmbeddedVisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationEmbeddedV2_3_0: Schema.Codec<VisualConfigurationEmbeddedV2_3_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedQueryV2_3_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedExpansionStateV2_3_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          FormattingObjectDefinitionsDefinitionsV1_5_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualSyncGroup),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
