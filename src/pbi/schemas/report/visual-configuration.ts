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
export type VisualConfigurationQueryV1_5_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV1_5_0;
  readonly options?: VisualConfigurationVisualQueryOptionsV1_5_0;
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
      Schema.suspend(() => VisualConfigurationVisualQueryOptionsV1_5_0),
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
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly direction: VisualConfigurationSortDirectionV1_5_0;
};
export const VisualConfigurationQuerySortV1_5_0: Schema.Codec<VisualConfigurationQuerySortV1_5_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(() => VisualConfigurationSortDirectionV1_5_0),
  });
export type VisualConfigurationSortDirectionV1_5_0 = "Ascending" | "Descending";
export const VisualConfigurationSortDirectionV1_5_0: Schema.Codec<VisualConfigurationSortDirectionV1_5_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationVisualQueryOptionsV1_5_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationVisualQueryOptionsV1_5_0: Schema.Codec<VisualConfigurationVisualQueryOptionsV1_5_0> =
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
  readonly field: Query.QueryExpressionContainerV1_2_0;
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
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
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
  readonly parameterExpr: Query.QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
};
export const VisualConfigurationRoleFieldParameterV1_5_0: Schema.Codec<VisualConfigurationRoleFieldParameterV1_5_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
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
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV1_5_0>;
};
export const VisualConfigurationRootExpansionStateV1_5_0: Schema.Codec<VisualConfigurationRootExpansionStateV1_5_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
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
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV1_5_0>;
};
export const VisualConfigurationNodeExpansionStateV1_5_0: Schema.Codec<VisualConfigurationNodeExpansionStateV1_5_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
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
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationAILevelInformationV1_5_0;
};
export const VisualConfigurationLevelExpansionStateV1_5_0: Schema.Codec<VisualConfigurationLevelExpansionStateV1_5_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationAILevelInformationV1_5_0),
    ),
  });
export type VisualConfigurationAILevelInformationV1_5_0 = {
  readonly method: VisualConfigurationAIDecompositionMethodV1_5_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationAILevelInformationV1_5_0: Schema.Codec<VisualConfigurationAILevelInformationV1_5_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationAIDecompositionMethodV1_5_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationAIDecompositionMethodV1_5_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationAIDecompositionMethodV1_5_0: Schema.Codec<VisualConfigurationAIDecompositionMethodV1_5_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationVisualContainerFormattingObjectsV1_5_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationTitleV1_5_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationSubTitleV1_5_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationDividerV1_5_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationSpacingV1_5_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationBackgroundV1_5_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationPaddingV1_5_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationLockAspectV1_5_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualContainerGeneralFormattingObjectsV1_5_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationBorderV1_5_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationDropShadowV1_5_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualLinkV1_5_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualTooltipV1_5_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationStylePresetV1_5_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualHeaderV1_5_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualHeaderTooltipV1_5_0;
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationTitleV1_5_0),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSubTitleV1_5_0),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDividerV1_5_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSpacingV1_5_0),
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
          properties: Schema.suspend(() => VisualConfigurationBackgroundV1_5_0),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationPaddingV1_5_0),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspectV1_5_0),
        }),
      ),
    ),
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
            () =>
              VisualConfigurationVisualContainerGeneralFormattingObjectsV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationBorderV1_5_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDropShadowV1_5_0),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualTooltipV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationStylePresetV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderTooltipV1_5_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationTitleV1_5_0 = {
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
export const VisualConfigurationTitleV1_5_0: Schema.Codec<VisualConfigurationTitleV1_5_0> =
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
export type VisualConfigurationSubTitleV1_5_0 = {
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
export const VisualConfigurationSubTitleV1_5_0: Schema.Codec<VisualConfigurationSubTitleV1_5_0> =
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
export type VisualConfigurationDividerV1_5_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationDividerV1_5_0: Schema.Codec<VisualConfigurationDividerV1_5_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationSpacingV1_5_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationSpacingV1_5_0: Schema.Codec<VisualConfigurationSpacingV1_5_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationBackgroundV1_5_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationBackgroundV1_5_0: Schema.Codec<VisualConfigurationBackgroundV1_5_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationPaddingV1_5_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationPaddingV1_5_0: Schema.Codec<VisualConfigurationPaddingV1_5_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationLockAspectV1_5_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationLockAspectV1_5_0: Schema.Codec<VisualConfigurationLockAspectV1_5_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualContainerGeneralFormattingObjectsV1_5_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};
export const VisualConfigurationVisualContainerGeneralFormattingObjectsV1_5_0: Schema.Codec<VisualConfigurationVisualContainerGeneralFormattingObjectsV1_5_0> =
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
export type VisualConfigurationBorderV1_5_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationBorderV1_5_0: Schema.Codec<VisualConfigurationBorderV1_5_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationDropShadowV1_5_0 = {
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
export const VisualConfigurationDropShadowV1_5_0: Schema.Codec<VisualConfigurationDropShadowV1_5_0> =
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
export type VisualConfigurationVisualTooltipV1_5_0 = {
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
export const VisualConfigurationVisualTooltipV1_5_0: Schema.Codec<VisualConfigurationVisualTooltipV1_5_0> =
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
export type VisualConfigurationStylePresetV1_5_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationStylePresetV1_5_0: Schema.Codec<VisualConfigurationStylePresetV1_5_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualHeaderV1_5_0 = {
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
export const VisualConfigurationVisualHeaderV1_5_0: Schema.Codec<VisualConfigurationVisualHeaderV1_5_0> =
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
export type VisualConfigurationVisualHeaderTooltipV1_5_0 = {
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
export const VisualConfigurationVisualHeaderTooltipV1_5_0: Schema.Codec<VisualConfigurationVisualHeaderTooltipV1_5_0> =
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
export type VisualConfigurationVisualSyncGroupV1_5_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationVisualSyncGroupV1_5_0: Schema.Codec<VisualConfigurationVisualSyncGroupV1_5_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationDefinitionsV1_5_0 = {
  Query: VisualConfigurationQueryV1_5_0,
  SortDefinition: VisualConfigurationSortDefinitionV1_5_0,
  QuerySort: VisualConfigurationQuerySortV1_5_0,
  SortDirection: VisualConfigurationSortDirectionV1_5_0,
  VisualQueryOptions: VisualConfigurationVisualQueryOptionsV1_5_0,
  ProjectionState: VisualConfigurationProjectionStateV1_5_0,
  RoleProjection: VisualConfigurationRoleProjectionV1_5_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV1_5_0,
  ExpansionState: VisualConfigurationExpansionStateV1_5_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV1_5_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV1_5_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV1_5_0,
  AILevelInformation: VisualConfigurationAILevelInformationV1_5_0,
  AIDecompositionMethod: VisualConfigurationAIDecompositionMethodV1_5_0,
  VisualContainerFormattingObjects:
    VisualConfigurationVisualContainerFormattingObjectsV1_5_0,
  Title: VisualConfigurationTitleV1_5_0,
  SubTitle: VisualConfigurationSubTitleV1_5_0,
  Divider: VisualConfigurationDividerV1_5_0,
  Spacing: VisualConfigurationSpacingV1_5_0,
  Background: VisualConfigurationBackgroundV1_5_0,
  Padding: VisualConfigurationPaddingV1_5_0,
  LockAspect: VisualConfigurationLockAspectV1_5_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationVisualContainerGeneralFormattingObjectsV1_5_0,
  Border: VisualConfigurationBorderV1_5_0,
  DropShadow: VisualConfigurationDropShadowV1_5_0,
  VisualLink: VisualConfigurationVisualLinkV1_5_0,
  VisualTooltip: VisualConfigurationVisualTooltipV1_5_0,
  StylePreset: VisualConfigurationStylePresetV1_5_0,
  VisualHeader: VisualConfigurationVisualHeaderV1_5_0,
  VisualHeaderTooltip: VisualConfigurationVisualHeaderTooltipV1_5_0,
  VisualSyncGroup: VisualConfigurationVisualSyncGroupV1_5_0,
} as const;
export type VisualConfigurationV1_5_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.5.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV1_5_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV1_5_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV1_5_0;
  readonly syncGroup?: VisualConfigurationVisualSyncGroupV1_5_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualConfigurationV1_5_0: Schema.Codec<VisualConfigurationV1_5_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.5.0/schema.json",
    ),
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationQueryV1_5_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationExpansionStateV1_5_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationVisualContainerFormattingObjectsV1_5_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualSyncGroupV1_5_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedQueryV1_5_0 = {
  readonly sortDefinition?: VisualConfigurationEmbeddedSortDefinitionV1_5_0;
  readonly options?: VisualConfigurationEmbeddedVisualQueryOptionsV1_5_0;
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
      Schema.suspend(() => VisualConfigurationEmbeddedVisualQueryOptionsV1_5_0),
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
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly direction: VisualConfigurationEmbeddedSortDirectionV1_5_0;
};
export const VisualConfigurationEmbeddedQuerySortV1_5_0: Schema.Codec<VisualConfigurationEmbeddedQuerySortV1_5_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(
      () => VisualConfigurationEmbeddedSortDirectionV1_5_0,
    ),
  });
export type VisualConfigurationEmbeddedSortDirectionV1_5_0 =
  "Ascending" | "Descending";
export const VisualConfigurationEmbeddedSortDirectionV1_5_0: Schema.Codec<VisualConfigurationEmbeddedSortDirectionV1_5_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationEmbeddedVisualQueryOptionsV1_5_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationEmbeddedVisualQueryOptionsV1_5_0: Schema.Codec<VisualConfigurationEmbeddedVisualQueryOptionsV1_5_0> =
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
  readonly field: Query.QueryExpressionContainerV1_2_0;
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
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
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
  readonly parameterExpr: Query.QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
};
export const VisualConfigurationEmbeddedRoleFieldParameterV1_5_0: Schema.Codec<VisualConfigurationEmbeddedRoleFieldParameterV1_5_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
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
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV1_5_0>;
};
export const VisualConfigurationEmbeddedRootExpansionStateV1_5_0: Schema.Codec<VisualConfigurationEmbeddedRootExpansionStateV1_5_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
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
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV1_5_0>;
};
export const VisualConfigurationEmbeddedNodeExpansionStateV1_5_0: Schema.Codec<VisualConfigurationEmbeddedNodeExpansionStateV1_5_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
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
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationEmbeddedAILevelInformationV1_5_0;
};
export const VisualConfigurationEmbeddedLevelExpansionStateV1_5_0: Schema.Codec<VisualConfigurationEmbeddedLevelExpansionStateV1_5_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedAILevelInformationV1_5_0),
    ),
  });
export type VisualConfigurationEmbeddedAILevelInformationV1_5_0 = {
  readonly method: VisualConfigurationEmbeddedAIDecompositionMethodV1_5_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationEmbeddedAILevelInformationV1_5_0: Schema.Codec<VisualConfigurationEmbeddedAILevelInformationV1_5_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationEmbeddedAIDecompositionMethodV1_5_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedAIDecompositionMethodV1_5_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationEmbeddedAIDecompositionMethodV1_5_0: Schema.Codec<VisualConfigurationEmbeddedAIDecompositionMethodV1_5_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_5_0 =
  {
    readonly title?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedTitleV1_5_0;
    }>;
    readonly subTitle?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedSubTitleV1_5_0;
    }>;
    readonly divider?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedDividerV1_5_0;
    }>;
    readonly spacing?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedSpacingV1_5_0;
    }>;
    readonly background?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedBackgroundV1_5_0;
    }>;
    readonly padding?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedPaddingV1_5_0;
    }>;
    readonly lockAspect?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedLockAspectV1_5_0;
    }>;
    readonly general?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_5_0;
    }>;
    readonly border?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedBorderV1_5_0;
    }>;
    readonly dropShadow?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedDropShadowV1_5_0;
    }>;
    readonly visualLink?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualLinkV1_5_0;
    }>;
    readonly visualTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualTooltipV1_5_0;
    }>;
    readonly stylePreset?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedStylePresetV1_5_0;
    }>;
    readonly visualHeader?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderV1_5_0;
    }>;
    readonly visualHeaderTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderTooltipV1_5_0;
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedTitleV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSubTitleV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDividerV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSpacingV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBackgroundV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedPaddingV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedLockAspectV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBorderV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDropShadowV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualTooltipV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedStylePresetV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderV1_5_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderTooltipV1_5_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationEmbeddedTitleV1_5_0 = {
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
export const VisualConfigurationEmbeddedTitleV1_5_0: Schema.Codec<VisualConfigurationEmbeddedTitleV1_5_0> =
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
export type VisualConfigurationEmbeddedSubTitleV1_5_0 = {
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
export const VisualConfigurationEmbeddedSubTitleV1_5_0: Schema.Codec<VisualConfigurationEmbeddedSubTitleV1_5_0> =
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
export type VisualConfigurationEmbeddedDividerV1_5_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationEmbeddedDividerV1_5_0: Schema.Codec<VisualConfigurationEmbeddedDividerV1_5_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedSpacingV1_5_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationEmbeddedSpacingV1_5_0: Schema.Codec<VisualConfigurationEmbeddedSpacingV1_5_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedBackgroundV1_5_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationEmbeddedBackgroundV1_5_0: Schema.Codec<VisualConfigurationEmbeddedBackgroundV1_5_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedPaddingV1_5_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationEmbeddedPaddingV1_5_0: Schema.Codec<VisualConfigurationEmbeddedPaddingV1_5_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedLockAspectV1_5_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationEmbeddedLockAspectV1_5_0: Schema.Codec<VisualConfigurationEmbeddedLockAspectV1_5_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_5_0 =
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
export const VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_5_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_5_0> =
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
export type VisualConfigurationEmbeddedBorderV1_5_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationEmbeddedBorderV1_5_0: Schema.Codec<VisualConfigurationEmbeddedBorderV1_5_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedDropShadowV1_5_0 = {
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
export const VisualConfigurationEmbeddedDropShadowV1_5_0: Schema.Codec<VisualConfigurationEmbeddedDropShadowV1_5_0> =
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
export type VisualConfigurationEmbeddedVisualTooltipV1_5_0 = {
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
export const VisualConfigurationEmbeddedVisualTooltipV1_5_0: Schema.Codec<VisualConfigurationEmbeddedVisualTooltipV1_5_0> =
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
export type VisualConfigurationEmbeddedStylePresetV1_5_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationEmbeddedStylePresetV1_5_0: Schema.Codec<VisualConfigurationEmbeddedStylePresetV1_5_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualHeaderV1_5_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderV1_5_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderV1_5_0> =
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
export type VisualConfigurationEmbeddedVisualHeaderTooltipV1_5_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderTooltipV1_5_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderTooltipV1_5_0> =
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
export type VisualConfigurationEmbeddedVisualSyncGroupV1_5_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationEmbeddedVisualSyncGroupV1_5_0: Schema.Codec<VisualConfigurationEmbeddedVisualSyncGroupV1_5_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationEmbeddedDefinitionsV1_5_0 = {
  Query: VisualConfigurationEmbeddedQueryV1_5_0,
  SortDefinition: VisualConfigurationEmbeddedSortDefinitionV1_5_0,
  QuerySort: VisualConfigurationEmbeddedQuerySortV1_5_0,
  SortDirection: VisualConfigurationEmbeddedSortDirectionV1_5_0,
  VisualQueryOptions: VisualConfigurationEmbeddedVisualQueryOptionsV1_5_0,
  ProjectionState: VisualConfigurationEmbeddedProjectionStateV1_5_0,
  RoleProjection: VisualConfigurationEmbeddedRoleProjectionV1_5_0,
  RoleFieldParameter: VisualConfigurationEmbeddedRoleFieldParameterV1_5_0,
  ExpansionState: VisualConfigurationEmbeddedExpansionStateV1_5_0,
  RootExpansionState: VisualConfigurationEmbeddedRootExpansionStateV1_5_0,
  NodeExpansionState: VisualConfigurationEmbeddedNodeExpansionStateV1_5_0,
  LevelExpansionState: VisualConfigurationEmbeddedLevelExpansionStateV1_5_0,
  AILevelInformation: VisualConfigurationEmbeddedAILevelInformationV1_5_0,
  AIDecompositionMethod: VisualConfigurationEmbeddedAIDecompositionMethodV1_5_0,
  VisualContainerFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_5_0,
  Title: VisualConfigurationEmbeddedTitleV1_5_0,
  SubTitle: VisualConfigurationEmbeddedSubTitleV1_5_0,
  Divider: VisualConfigurationEmbeddedDividerV1_5_0,
  Spacing: VisualConfigurationEmbeddedSpacingV1_5_0,
  Background: VisualConfigurationEmbeddedBackgroundV1_5_0,
  Padding: VisualConfigurationEmbeddedPaddingV1_5_0,
  LockAspect: VisualConfigurationEmbeddedLockAspectV1_5_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_5_0,
  Border: VisualConfigurationEmbeddedBorderV1_5_0,
  DropShadow: VisualConfigurationEmbeddedDropShadowV1_5_0,
  VisualLink: VisualConfigurationEmbeddedVisualLinkV1_5_0,
  VisualTooltip: VisualConfigurationEmbeddedVisualTooltipV1_5_0,
  StylePreset: VisualConfigurationEmbeddedStylePresetV1_5_0,
  VisualHeader: VisualConfigurationEmbeddedVisualHeaderV1_5_0,
  VisualHeaderTooltip: VisualConfigurationEmbeddedVisualHeaderTooltipV1_5_0,
  VisualSyncGroup: VisualConfigurationEmbeddedVisualSyncGroupV1_5_0,
} as const;
export type VisualConfigurationEmbeddedV1_5_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationEmbeddedQueryV1_5_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationEmbeddedExpansionStateV1_5_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_5_0;
  readonly syncGroup?: VisualConfigurationEmbeddedVisualSyncGroupV1_5_0;
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
          Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_5_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualSyncGroupV1_5_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationQueryV1_6_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV1_6_0;
  readonly options?: VisualConfigurationVisualQueryOptionsV1_6_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationProjectionStateV1_6_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualConfigurationQueryV1_6_0: Schema.Codec<VisualConfigurationQueryV1_6_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationSortDefinitionV1_6_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualQueryOptionsV1_6_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationProjectionStateV1_6_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationSortDefinitionV1_6_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationQuerySortV1_6_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualConfigurationSortDefinitionV1_6_0: Schema.Codec<VisualConfigurationSortDefinitionV1_6_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationQuerySortV1_6_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationQuerySortV1_6_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly direction: VisualConfigurationSortDirectionV1_6_0;
};
export const VisualConfigurationQuerySortV1_6_0: Schema.Codec<VisualConfigurationQuerySortV1_6_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(() => VisualConfigurationSortDirectionV1_6_0),
  });
export type VisualConfigurationSortDirectionV1_6_0 = "Ascending" | "Descending";
export const VisualConfigurationSortDirectionV1_6_0: Schema.Codec<VisualConfigurationSortDirectionV1_6_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationVisualQueryOptionsV1_6_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationVisualQueryOptionsV1_6_0: Schema.Codec<VisualConfigurationVisualQueryOptionsV1_6_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationProjectionStateV1_6_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationRoleProjectionV1_6_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationRoleFieldParameterV1_6_0>;
};
export const VisualConfigurationProjectionStateV1_6_0: Schema.Codec<VisualConfigurationProjectionStateV1_6_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationRoleProjectionV1_6_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationRoleFieldParameterV1_6_0),
      ),
    ),
  });
export type VisualConfigurationRoleProjectionV1_6_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualConfigurationRoleProjectionV1_6_0: Schema.Codec<VisualConfigurationRoleProjectionV1_6_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
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
export type VisualConfigurationRoleFieldParameterV1_6_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
};
export const VisualConfigurationRoleFieldParameterV1_6_0: Schema.Codec<VisualConfigurationRoleFieldParameterV1_6_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });
export type VisualConfigurationExpansionStateV1_6_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationRootExpansionStateV1_6_0;
  readonly levels?: ReadonlyArray<VisualConfigurationLevelExpansionStateV1_6_0>;
};
export const VisualConfigurationExpansionStateV1_6_0: Schema.Codec<VisualConfigurationExpansionStateV1_6_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationRootExpansionStateV1_6_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationLevelExpansionStateV1_6_0),
      ),
    ),
  });
export type VisualConfigurationRootExpansionStateV1_6_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV1_6_0>;
};
export const VisualConfigurationRootExpansionStateV1_6_0: Schema.Codec<VisualConfigurationRootExpansionStateV1_6_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV1_6_0),
      ),
    ),
  });
export type VisualConfigurationNodeExpansionStateV1_6_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV1_6_0>;
};
export const VisualConfigurationNodeExpansionStateV1_6_0: Schema.Codec<VisualConfigurationNodeExpansionStateV1_6_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV1_6_0),
      ),
    ),
  });
export type VisualConfigurationLevelExpansionStateV1_6_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationAILevelInformationV1_6_0;
};
export const VisualConfigurationLevelExpansionStateV1_6_0: Schema.Codec<VisualConfigurationLevelExpansionStateV1_6_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationAILevelInformationV1_6_0),
    ),
  });
export type VisualConfigurationAILevelInformationV1_6_0 = {
  readonly method: VisualConfigurationAIDecompositionMethodV1_6_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationAILevelInformationV1_6_0: Schema.Codec<VisualConfigurationAILevelInformationV1_6_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationAIDecompositionMethodV1_6_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationAIDecompositionMethodV1_6_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationAIDecompositionMethodV1_6_0: Schema.Codec<VisualConfigurationAIDecompositionMethodV1_6_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationVisualContainerFormattingObjectsV1_6_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationTitleV1_6_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationSubTitleV1_6_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationDividerV1_6_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationSpacingV1_6_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationBackgroundV1_6_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationPaddingV1_6_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationLockAspectV1_6_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualContainerGeneralFormattingObjectsV1_6_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationBorderV1_6_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationDropShadowV1_6_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualLinkV1_6_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualTooltipV1_6_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationStylePresetV1_6_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualHeaderV1_6_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualHeaderTooltipV1_6_0;
  }>;
};
export const VisualConfigurationVisualContainerFormattingObjectsV1_6_0: Schema.Codec<VisualConfigurationVisualContainerFormattingObjectsV1_6_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationTitleV1_6_0),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSubTitleV1_6_0),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDividerV1_6_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSpacingV1_6_0),
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
          properties: Schema.suspend(() => VisualConfigurationBackgroundV1_6_0),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationPaddingV1_6_0),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspectV1_6_0),
        }),
      ),
    ),
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
            () =>
              VisualConfigurationVisualContainerGeneralFormattingObjectsV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationBorderV1_6_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDropShadowV1_6_0),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV1_6_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
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
            () => VisualConfigurationVisualTooltipV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationStylePresetV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderTooltipV1_6_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationTitleV1_6_0 = {
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
export const VisualConfigurationTitleV1_6_0: Schema.Codec<VisualConfigurationTitleV1_6_0> =
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
export type VisualConfigurationSubTitleV1_6_0 = {
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
export const VisualConfigurationSubTitleV1_6_0: Schema.Codec<VisualConfigurationSubTitleV1_6_0> =
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
export type VisualConfigurationDividerV1_6_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationDividerV1_6_0: Schema.Codec<VisualConfigurationDividerV1_6_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationSpacingV1_6_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationSpacingV1_6_0: Schema.Codec<VisualConfigurationSpacingV1_6_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationBackgroundV1_6_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationBackgroundV1_6_0: Schema.Codec<VisualConfigurationBackgroundV1_6_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationPaddingV1_6_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationPaddingV1_6_0: Schema.Codec<VisualConfigurationPaddingV1_6_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationLockAspectV1_6_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationLockAspectV1_6_0: Schema.Codec<VisualConfigurationLockAspectV1_6_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualContainerGeneralFormattingObjectsV1_6_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};
export const VisualConfigurationVisualContainerGeneralFormattingObjectsV1_6_0: Schema.Codec<VisualConfigurationVisualContainerGeneralFormattingObjectsV1_6_0> =
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
export type VisualConfigurationBorderV1_6_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationBorderV1_6_0: Schema.Codec<VisualConfigurationBorderV1_6_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationDropShadowV1_6_0 = {
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
export const VisualConfigurationDropShadowV1_6_0: Schema.Codec<VisualConfigurationDropShadowV1_6_0> =
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
export type VisualConfigurationVisualLinkV1_6_0 = {
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
export const VisualConfigurationVisualLinkV1_6_0: Schema.Codec<VisualConfigurationVisualLinkV1_6_0> =
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
export type VisualConfigurationVisualTooltipV1_6_0 = {
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
export const VisualConfigurationVisualTooltipV1_6_0: Schema.Codec<VisualConfigurationVisualTooltipV1_6_0> =
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
export type VisualConfigurationStylePresetV1_6_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationStylePresetV1_6_0: Schema.Codec<VisualConfigurationStylePresetV1_6_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualHeaderV1_6_0 = {
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
export const VisualConfigurationVisualHeaderV1_6_0: Schema.Codec<VisualConfigurationVisualHeaderV1_6_0> =
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
export type VisualConfigurationVisualHeaderTooltipV1_6_0 = {
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
export const VisualConfigurationVisualHeaderTooltipV1_6_0: Schema.Codec<VisualConfigurationVisualHeaderTooltipV1_6_0> =
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
export type VisualConfigurationVisualSyncGroupV1_6_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationVisualSyncGroupV1_6_0: Schema.Codec<VisualConfigurationVisualSyncGroupV1_6_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationDefinitionsV1_6_0 = {
  Query: VisualConfigurationQueryV1_6_0,
  SortDefinition: VisualConfigurationSortDefinitionV1_6_0,
  QuerySort: VisualConfigurationQuerySortV1_6_0,
  SortDirection: VisualConfigurationSortDirectionV1_6_0,
  VisualQueryOptions: VisualConfigurationVisualQueryOptionsV1_6_0,
  ProjectionState: VisualConfigurationProjectionStateV1_6_0,
  RoleProjection: VisualConfigurationRoleProjectionV1_6_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV1_6_0,
  ExpansionState: VisualConfigurationExpansionStateV1_6_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV1_6_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV1_6_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV1_6_0,
  AILevelInformation: VisualConfigurationAILevelInformationV1_6_0,
  AIDecompositionMethod: VisualConfigurationAIDecompositionMethodV1_6_0,
  VisualContainerFormattingObjects:
    VisualConfigurationVisualContainerFormattingObjectsV1_6_0,
  Title: VisualConfigurationTitleV1_6_0,
  SubTitle: VisualConfigurationSubTitleV1_6_0,
  Divider: VisualConfigurationDividerV1_6_0,
  Spacing: VisualConfigurationSpacingV1_6_0,
  Background: VisualConfigurationBackgroundV1_6_0,
  Padding: VisualConfigurationPaddingV1_6_0,
  LockAspect: VisualConfigurationLockAspectV1_6_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationVisualContainerGeneralFormattingObjectsV1_6_0,
  Border: VisualConfigurationBorderV1_6_0,
  DropShadow: VisualConfigurationDropShadowV1_6_0,
  VisualLink: VisualConfigurationVisualLinkV1_6_0,
  VisualTooltip: VisualConfigurationVisualTooltipV1_6_0,
  StylePreset: VisualConfigurationStylePresetV1_6_0,
  VisualHeader: VisualConfigurationVisualHeaderV1_6_0,
  VisualHeaderTooltip: VisualConfigurationVisualHeaderTooltipV1_6_0,
  VisualSyncGroup: VisualConfigurationVisualSyncGroupV1_6_0,
} as const;
export type VisualConfigurationV1_6_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.6.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV1_6_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV1_6_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV1_6_0;
  readonly syncGroup?: VisualConfigurationVisualSyncGroupV1_6_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualConfigurationV1_6_0: Schema.Codec<VisualConfigurationV1_6_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.6.0/schema.json",
    ),
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationQueryV1_6_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationExpansionStateV1_6_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationVisualContainerFormattingObjectsV1_6_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualSyncGroupV1_6_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedQueryV1_6_0 = {
  readonly sortDefinition?: VisualConfigurationEmbeddedSortDefinitionV1_6_0;
  readonly options?: VisualConfigurationEmbeddedVisualQueryOptionsV1_6_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationEmbeddedProjectionStateV1_6_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualConfigurationEmbeddedQueryV1_6_0: Schema.Codec<VisualConfigurationEmbeddedQueryV1_6_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedSortDefinitionV1_6_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualQueryOptionsV1_6_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationEmbeddedProjectionStateV1_6_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedSortDefinitionV1_6_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationEmbeddedQuerySortV1_6_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualConfigurationEmbeddedSortDefinitionV1_6_0: Schema.Codec<VisualConfigurationEmbeddedSortDefinitionV1_6_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedQuerySortV1_6_0),
      ),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedQuerySortV1_6_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly direction: VisualConfigurationEmbeddedSortDirectionV1_6_0;
};
export const VisualConfigurationEmbeddedQuerySortV1_6_0: Schema.Codec<VisualConfigurationEmbeddedQuerySortV1_6_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(
      () => VisualConfigurationEmbeddedSortDirectionV1_6_0,
    ),
  });
export type VisualConfigurationEmbeddedSortDirectionV1_6_0 =
  "Ascending" | "Descending";
export const VisualConfigurationEmbeddedSortDirectionV1_6_0: Schema.Codec<VisualConfigurationEmbeddedSortDirectionV1_6_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationEmbeddedVisualQueryOptionsV1_6_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationEmbeddedVisualQueryOptionsV1_6_0: Schema.Codec<VisualConfigurationEmbeddedVisualQueryOptionsV1_6_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedProjectionStateV1_6_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationEmbeddedRoleProjectionV1_6_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationEmbeddedRoleFieldParameterV1_6_0>;
};
export const VisualConfigurationEmbeddedProjectionStateV1_6_0: Schema.Codec<VisualConfigurationEmbeddedProjectionStateV1_6_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationEmbeddedRoleProjectionV1_6_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedRoleFieldParameterV1_6_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedRoleProjectionV1_6_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualConfigurationEmbeddedRoleProjectionV1_6_0: Schema.Codec<VisualConfigurationEmbeddedRoleProjectionV1_6_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
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
export type VisualConfigurationEmbeddedRoleFieldParameterV1_6_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
};
export const VisualConfigurationEmbeddedRoleFieldParameterV1_6_0: Schema.Codec<VisualConfigurationEmbeddedRoleFieldParameterV1_6_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });
export type VisualConfigurationEmbeddedExpansionStateV1_6_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationEmbeddedRootExpansionStateV1_6_0;
  readonly levels?: ReadonlyArray<VisualConfigurationEmbeddedLevelExpansionStateV1_6_0>;
};
export const VisualConfigurationEmbeddedExpansionStateV1_6_0: Schema.Codec<VisualConfigurationEmbeddedExpansionStateV1_6_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedRootExpansionStateV1_6_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedLevelExpansionStateV1_6_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedRootExpansionStateV1_6_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV1_6_0>;
};
export const VisualConfigurationEmbeddedRootExpansionStateV1_6_0: Schema.Codec<VisualConfigurationEmbeddedRootExpansionStateV1_6_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV1_6_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedNodeExpansionStateV1_6_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV1_6_0>;
};
export const VisualConfigurationEmbeddedNodeExpansionStateV1_6_0: Schema.Codec<VisualConfigurationEmbeddedNodeExpansionStateV1_6_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV1_6_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedLevelExpansionStateV1_6_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationEmbeddedAILevelInformationV1_6_0;
};
export const VisualConfigurationEmbeddedLevelExpansionStateV1_6_0: Schema.Codec<VisualConfigurationEmbeddedLevelExpansionStateV1_6_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedAILevelInformationV1_6_0),
    ),
  });
export type VisualConfigurationEmbeddedAILevelInformationV1_6_0 = {
  readonly method: VisualConfigurationEmbeddedAIDecompositionMethodV1_6_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationEmbeddedAILevelInformationV1_6_0: Schema.Codec<VisualConfigurationEmbeddedAILevelInformationV1_6_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationEmbeddedAIDecompositionMethodV1_6_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedAIDecompositionMethodV1_6_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationEmbeddedAIDecompositionMethodV1_6_0: Schema.Codec<VisualConfigurationEmbeddedAIDecompositionMethodV1_6_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_6_0 =
  {
    readonly title?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedTitleV1_6_0;
    }>;
    readonly subTitle?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedSubTitleV1_6_0;
    }>;
    readonly divider?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedDividerV1_6_0;
    }>;
    readonly spacing?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedSpacingV1_6_0;
    }>;
    readonly background?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedBackgroundV1_6_0;
    }>;
    readonly padding?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedPaddingV1_6_0;
    }>;
    readonly lockAspect?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedLockAspectV1_6_0;
    }>;
    readonly general?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_6_0;
    }>;
    readonly border?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedBorderV1_6_0;
    }>;
    readonly dropShadow?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedDropShadowV1_6_0;
    }>;
    readonly visualLink?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualLinkV1_6_0;
    }>;
    readonly visualTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualTooltipV1_6_0;
    }>;
    readonly stylePreset?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedStylePresetV1_6_0;
    }>;
    readonly visualHeader?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderV1_6_0;
    }>;
    readonly visualHeaderTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderTooltipV1_6_0;
    }>;
  };
export const VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_6_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_6_0> =
  closed({
    title: Schema.optionalKey(
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
            () => VisualConfigurationEmbeddedTitleV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSubTitleV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDividerV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSpacingV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBackgroundV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedPaddingV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedLockAspectV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBorderV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDropShadowV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualLinkV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualTooltipV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedStylePresetV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderV1_6_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderTooltipV1_6_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationEmbeddedTitleV1_6_0 = {
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
export const VisualConfigurationEmbeddedTitleV1_6_0: Schema.Codec<VisualConfigurationEmbeddedTitleV1_6_0> =
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
export type VisualConfigurationEmbeddedSubTitleV1_6_0 = {
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
export const VisualConfigurationEmbeddedSubTitleV1_6_0: Schema.Codec<VisualConfigurationEmbeddedSubTitleV1_6_0> =
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
export type VisualConfigurationEmbeddedDividerV1_6_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationEmbeddedDividerV1_6_0: Schema.Codec<VisualConfigurationEmbeddedDividerV1_6_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedSpacingV1_6_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationEmbeddedSpacingV1_6_0: Schema.Codec<VisualConfigurationEmbeddedSpacingV1_6_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedBackgroundV1_6_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationEmbeddedBackgroundV1_6_0: Schema.Codec<VisualConfigurationEmbeddedBackgroundV1_6_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedPaddingV1_6_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationEmbeddedPaddingV1_6_0: Schema.Codec<VisualConfigurationEmbeddedPaddingV1_6_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedLockAspectV1_6_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationEmbeddedLockAspectV1_6_0: Schema.Codec<VisualConfigurationEmbeddedLockAspectV1_6_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_6_0 =
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
export const VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_6_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_6_0> =
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
export type VisualConfigurationEmbeddedBorderV1_6_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationEmbeddedBorderV1_6_0: Schema.Codec<VisualConfigurationEmbeddedBorderV1_6_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedDropShadowV1_6_0 = {
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
export const VisualConfigurationEmbeddedDropShadowV1_6_0: Schema.Codec<VisualConfigurationEmbeddedDropShadowV1_6_0> =
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
export type VisualConfigurationEmbeddedVisualLinkV1_6_0 = {
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
export const VisualConfigurationEmbeddedVisualLinkV1_6_0: Schema.Codec<VisualConfigurationEmbeddedVisualLinkV1_6_0> =
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
export type VisualConfigurationEmbeddedVisualTooltipV1_6_0 = {
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
export const VisualConfigurationEmbeddedVisualTooltipV1_6_0: Schema.Codec<VisualConfigurationEmbeddedVisualTooltipV1_6_0> =
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
export type VisualConfigurationEmbeddedStylePresetV1_6_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationEmbeddedStylePresetV1_6_0: Schema.Codec<VisualConfigurationEmbeddedStylePresetV1_6_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualHeaderV1_6_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderV1_6_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderV1_6_0> =
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
export type VisualConfigurationEmbeddedVisualHeaderTooltipV1_6_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderTooltipV1_6_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderTooltipV1_6_0> =
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
export type VisualConfigurationEmbeddedVisualSyncGroupV1_6_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationEmbeddedVisualSyncGroupV1_6_0: Schema.Codec<VisualConfigurationEmbeddedVisualSyncGroupV1_6_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationEmbeddedDefinitionsV1_6_0 = {
  Query: VisualConfigurationEmbeddedQueryV1_6_0,
  SortDefinition: VisualConfigurationEmbeddedSortDefinitionV1_6_0,
  QuerySort: VisualConfigurationEmbeddedQuerySortV1_6_0,
  SortDirection: VisualConfigurationEmbeddedSortDirectionV1_6_0,
  VisualQueryOptions: VisualConfigurationEmbeddedVisualQueryOptionsV1_6_0,
  ProjectionState: VisualConfigurationEmbeddedProjectionStateV1_6_0,
  RoleProjection: VisualConfigurationEmbeddedRoleProjectionV1_6_0,
  RoleFieldParameter: VisualConfigurationEmbeddedRoleFieldParameterV1_6_0,
  ExpansionState: VisualConfigurationEmbeddedExpansionStateV1_6_0,
  RootExpansionState: VisualConfigurationEmbeddedRootExpansionStateV1_6_0,
  NodeExpansionState: VisualConfigurationEmbeddedNodeExpansionStateV1_6_0,
  LevelExpansionState: VisualConfigurationEmbeddedLevelExpansionStateV1_6_0,
  AILevelInformation: VisualConfigurationEmbeddedAILevelInformationV1_6_0,
  AIDecompositionMethod: VisualConfigurationEmbeddedAIDecompositionMethodV1_6_0,
  VisualContainerFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_6_0,
  Title: VisualConfigurationEmbeddedTitleV1_6_0,
  SubTitle: VisualConfigurationEmbeddedSubTitleV1_6_0,
  Divider: VisualConfigurationEmbeddedDividerV1_6_0,
  Spacing: VisualConfigurationEmbeddedSpacingV1_6_0,
  Background: VisualConfigurationEmbeddedBackgroundV1_6_0,
  Padding: VisualConfigurationEmbeddedPaddingV1_6_0,
  LockAspect: VisualConfigurationEmbeddedLockAspectV1_6_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_6_0,
  Border: VisualConfigurationEmbeddedBorderV1_6_0,
  DropShadow: VisualConfigurationEmbeddedDropShadowV1_6_0,
  VisualLink: VisualConfigurationEmbeddedVisualLinkV1_6_0,
  VisualTooltip: VisualConfigurationEmbeddedVisualTooltipV1_6_0,
  StylePreset: VisualConfigurationEmbeddedStylePresetV1_6_0,
  VisualHeader: VisualConfigurationEmbeddedVisualHeaderV1_6_0,
  VisualHeaderTooltip: VisualConfigurationEmbeddedVisualHeaderTooltipV1_6_0,
  VisualSyncGroup: VisualConfigurationEmbeddedVisualSyncGroupV1_6_0,
} as const;
export type VisualConfigurationEmbeddedV1_6_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationEmbeddedQueryV1_6_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationEmbeddedExpansionStateV1_6_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_6_0;
  readonly syncGroup?: VisualConfigurationEmbeddedVisualSyncGroupV1_6_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualConfigurationEmbeddedV1_6_0: Schema.Codec<VisualConfigurationEmbeddedV1_6_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedQueryV1_6_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedExpansionStateV1_6_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_6_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualSyncGroupV1_6_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationQueryV1_7_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV1_7_0;
  readonly options?: VisualConfigurationVisualQueryOptionsV1_7_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationProjectionStateV1_7_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualConfigurationQueryV1_7_0: Schema.Codec<VisualConfigurationQueryV1_7_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationSortDefinitionV1_7_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualQueryOptionsV1_7_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationProjectionStateV1_7_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationSortDefinitionV1_7_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationQuerySortV1_7_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualConfigurationSortDefinitionV1_7_0: Schema.Codec<VisualConfigurationSortDefinitionV1_7_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationQuerySortV1_7_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationQuerySortV1_7_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly direction: VisualConfigurationSortDirectionV1_7_0;
};
export const VisualConfigurationQuerySortV1_7_0: Schema.Codec<VisualConfigurationQuerySortV1_7_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(() => VisualConfigurationSortDirectionV1_7_0),
  });
export type VisualConfigurationSortDirectionV1_7_0 = "Ascending" | "Descending";
export const VisualConfigurationSortDirectionV1_7_0: Schema.Codec<VisualConfigurationSortDirectionV1_7_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationVisualQueryOptionsV1_7_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationVisualQueryOptionsV1_7_0: Schema.Codec<VisualConfigurationVisualQueryOptionsV1_7_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationProjectionStateV1_7_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationRoleProjectionV1_7_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationRoleFieldParameterV1_7_0>;
};
export const VisualConfigurationProjectionStateV1_7_0: Schema.Codec<VisualConfigurationProjectionStateV1_7_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationRoleProjectionV1_7_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationRoleFieldParameterV1_7_0),
      ),
    ),
  });
export type VisualConfigurationRoleProjectionV1_7_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualConfigurationRoleProjectionV1_7_0: Schema.Codec<VisualConfigurationRoleProjectionV1_7_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
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
export type VisualConfigurationRoleFieldParameterV1_7_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
};
export const VisualConfigurationRoleFieldParameterV1_7_0: Schema.Codec<VisualConfigurationRoleFieldParameterV1_7_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });
export type VisualConfigurationExpansionStateV1_7_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationRootExpansionStateV1_7_0;
  readonly levels?: ReadonlyArray<VisualConfigurationLevelExpansionStateV1_7_0>;
};
export const VisualConfigurationExpansionStateV1_7_0: Schema.Codec<VisualConfigurationExpansionStateV1_7_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationRootExpansionStateV1_7_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationLevelExpansionStateV1_7_0),
      ),
    ),
  });
export type VisualConfigurationRootExpansionStateV1_7_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV1_7_0>;
};
export const VisualConfigurationRootExpansionStateV1_7_0: Schema.Codec<VisualConfigurationRootExpansionStateV1_7_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV1_7_0),
      ),
    ),
  });
export type VisualConfigurationNodeExpansionStateV1_7_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV1_7_0>;
};
export const VisualConfigurationNodeExpansionStateV1_7_0: Schema.Codec<VisualConfigurationNodeExpansionStateV1_7_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV1_7_0),
      ),
    ),
  });
export type VisualConfigurationLevelExpansionStateV1_7_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationAILevelInformationV1_7_0;
};
export const VisualConfigurationLevelExpansionStateV1_7_0: Schema.Codec<VisualConfigurationLevelExpansionStateV1_7_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationAILevelInformationV1_7_0),
    ),
  });
export type VisualConfigurationAILevelInformationV1_7_0 = {
  readonly method: VisualConfigurationAIDecompositionMethodV1_7_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationAILevelInformationV1_7_0: Schema.Codec<VisualConfigurationAILevelInformationV1_7_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationAIDecompositionMethodV1_7_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationAIDecompositionMethodV1_7_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationAIDecompositionMethodV1_7_0: Schema.Codec<VisualConfigurationAIDecompositionMethodV1_7_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationVisualContainerFormattingObjectsV1_7_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationTitleV1_7_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationSubTitleV1_7_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationDividerV1_7_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationSpacingV1_7_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationBackgroundV1_7_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationPaddingV1_7_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationLockAspectV1_7_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualContainerGeneralFormattingObjectsV1_7_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationBorderV1_7_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationDropShadowV1_7_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualLinkV1_7_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualTooltipV1_7_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationStylePresetV1_7_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualHeaderV1_7_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualConfigurationVisualHeaderTooltipV1_7_0;
  }>;
};
export const VisualConfigurationVisualContainerFormattingObjectsV1_7_0: Schema.Codec<VisualConfigurationVisualContainerFormattingObjectsV1_7_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationTitleV1_7_0),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSubTitleV1_7_0),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDividerV1_7_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSpacingV1_7_0),
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
          properties: Schema.suspend(() => VisualConfigurationBackgroundV1_7_0),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationPaddingV1_7_0),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspectV1_7_0),
        }),
      ),
    ),
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
            () =>
              VisualConfigurationVisualContainerGeneralFormattingObjectsV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationBorderV1_7_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDropShadowV1_7_0),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV1_7_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
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
            () => VisualConfigurationVisualTooltipV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationStylePresetV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderTooltipV1_7_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationTitleV1_7_0 = {
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
export const VisualConfigurationTitleV1_7_0: Schema.Codec<VisualConfigurationTitleV1_7_0> =
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
export type VisualConfigurationSubTitleV1_7_0 = {
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
export const VisualConfigurationSubTitleV1_7_0: Schema.Codec<VisualConfigurationSubTitleV1_7_0> =
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
export type VisualConfigurationDividerV1_7_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationDividerV1_7_0: Schema.Codec<VisualConfigurationDividerV1_7_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationSpacingV1_7_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationSpacingV1_7_0: Schema.Codec<VisualConfigurationSpacingV1_7_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationBackgroundV1_7_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationBackgroundV1_7_0: Schema.Codec<VisualConfigurationBackgroundV1_7_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationPaddingV1_7_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationPaddingV1_7_0: Schema.Codec<VisualConfigurationPaddingV1_7_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationLockAspectV1_7_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationLockAspectV1_7_0: Schema.Codec<VisualConfigurationLockAspectV1_7_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualContainerGeneralFormattingObjectsV1_7_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};
export const VisualConfigurationVisualContainerGeneralFormattingObjectsV1_7_0: Schema.Codec<VisualConfigurationVisualContainerGeneralFormattingObjectsV1_7_0> =
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
export type VisualConfigurationBorderV1_7_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationBorderV1_7_0: Schema.Codec<VisualConfigurationBorderV1_7_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationDropShadowV1_7_0 = {
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
export const VisualConfigurationDropShadowV1_7_0: Schema.Codec<VisualConfigurationDropShadowV1_7_0> =
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
export type VisualConfigurationVisualLinkV1_7_0 = {
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
export const VisualConfigurationVisualLinkV1_7_0: Schema.Codec<VisualConfigurationVisualLinkV1_7_0> =
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
export type VisualConfigurationVisualTooltipV1_7_0 = {
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
export const VisualConfigurationVisualTooltipV1_7_0: Schema.Codec<VisualConfigurationVisualTooltipV1_7_0> =
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
export type VisualConfigurationStylePresetV1_7_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationStylePresetV1_7_0: Schema.Codec<VisualConfigurationStylePresetV1_7_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualHeaderV1_7_0 = {
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
export const VisualConfigurationVisualHeaderV1_7_0: Schema.Codec<VisualConfigurationVisualHeaderV1_7_0> =
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
export type VisualConfigurationVisualHeaderTooltipV1_7_0 = {
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
export const VisualConfigurationVisualHeaderTooltipV1_7_0: Schema.Codec<VisualConfigurationVisualHeaderTooltipV1_7_0> =
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
export type VisualConfigurationVisualSyncGroupV1_7_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationVisualSyncGroupV1_7_0: Schema.Codec<VisualConfigurationVisualSyncGroupV1_7_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationDefinitionsV1_7_0 = {
  Query: VisualConfigurationQueryV1_7_0,
  SortDefinition: VisualConfigurationSortDefinitionV1_7_0,
  QuerySort: VisualConfigurationQuerySortV1_7_0,
  SortDirection: VisualConfigurationSortDirectionV1_7_0,
  VisualQueryOptions: VisualConfigurationVisualQueryOptionsV1_7_0,
  ProjectionState: VisualConfigurationProjectionStateV1_7_0,
  RoleProjection: VisualConfigurationRoleProjectionV1_7_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV1_7_0,
  ExpansionState: VisualConfigurationExpansionStateV1_7_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV1_7_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV1_7_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV1_7_0,
  AILevelInformation: VisualConfigurationAILevelInformationV1_7_0,
  AIDecompositionMethod: VisualConfigurationAIDecompositionMethodV1_7_0,
  VisualContainerFormattingObjects:
    VisualConfigurationVisualContainerFormattingObjectsV1_7_0,
  Title: VisualConfigurationTitleV1_7_0,
  SubTitle: VisualConfigurationSubTitleV1_7_0,
  Divider: VisualConfigurationDividerV1_7_0,
  Spacing: VisualConfigurationSpacingV1_7_0,
  Background: VisualConfigurationBackgroundV1_7_0,
  Padding: VisualConfigurationPaddingV1_7_0,
  LockAspect: VisualConfigurationLockAspectV1_7_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationVisualContainerGeneralFormattingObjectsV1_7_0,
  Border: VisualConfigurationBorderV1_7_0,
  DropShadow: VisualConfigurationDropShadowV1_7_0,
  VisualLink: VisualConfigurationVisualLinkV1_7_0,
  VisualTooltip: VisualConfigurationVisualTooltipV1_7_0,
  StylePreset: VisualConfigurationStylePresetV1_7_0,
  VisualHeader: VisualConfigurationVisualHeaderV1_7_0,
  VisualHeaderTooltip: VisualConfigurationVisualHeaderTooltipV1_7_0,
  VisualSyncGroup: VisualConfigurationVisualSyncGroupV1_7_0,
} as const;
export type VisualConfigurationV1_7_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.7.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV1_7_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV1_7_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV1_7_0;
  readonly syncGroup?: VisualConfigurationVisualSyncGroupV1_7_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualConfigurationV1_7_0: Schema.Codec<VisualConfigurationV1_7_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.7.0/schema.json",
    ),
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationQueryV1_7_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationExpansionStateV1_7_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationVisualContainerFormattingObjectsV1_7_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualSyncGroupV1_7_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedQueryV1_7_0 = {
  readonly sortDefinition?: VisualConfigurationEmbeddedSortDefinitionV1_7_0;
  readonly options?: VisualConfigurationEmbeddedVisualQueryOptionsV1_7_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationEmbeddedProjectionStateV1_7_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualConfigurationEmbeddedQueryV1_7_0: Schema.Codec<VisualConfigurationEmbeddedQueryV1_7_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedSortDefinitionV1_7_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualQueryOptionsV1_7_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationEmbeddedProjectionStateV1_7_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedSortDefinitionV1_7_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationEmbeddedQuerySortV1_7_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualConfigurationEmbeddedSortDefinitionV1_7_0: Schema.Codec<VisualConfigurationEmbeddedSortDefinitionV1_7_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedQuerySortV1_7_0),
      ),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedQuerySortV1_7_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly direction: VisualConfigurationEmbeddedSortDirectionV1_7_0;
};
export const VisualConfigurationEmbeddedQuerySortV1_7_0: Schema.Codec<VisualConfigurationEmbeddedQuerySortV1_7_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(
      () => VisualConfigurationEmbeddedSortDirectionV1_7_0,
    ),
  });
export type VisualConfigurationEmbeddedSortDirectionV1_7_0 =
  "Ascending" | "Descending";
export const VisualConfigurationEmbeddedSortDirectionV1_7_0: Schema.Codec<VisualConfigurationEmbeddedSortDirectionV1_7_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationEmbeddedVisualQueryOptionsV1_7_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationEmbeddedVisualQueryOptionsV1_7_0: Schema.Codec<VisualConfigurationEmbeddedVisualQueryOptionsV1_7_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedProjectionStateV1_7_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationEmbeddedRoleProjectionV1_7_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationEmbeddedRoleFieldParameterV1_7_0>;
};
export const VisualConfigurationEmbeddedProjectionStateV1_7_0: Schema.Codec<VisualConfigurationEmbeddedProjectionStateV1_7_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationEmbeddedRoleProjectionV1_7_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedRoleFieldParameterV1_7_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedRoleProjectionV1_7_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualConfigurationEmbeddedRoleProjectionV1_7_0: Schema.Codec<VisualConfigurationEmbeddedRoleProjectionV1_7_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
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
export type VisualConfigurationEmbeddedRoleFieldParameterV1_7_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
};
export const VisualConfigurationEmbeddedRoleFieldParameterV1_7_0: Schema.Codec<VisualConfigurationEmbeddedRoleFieldParameterV1_7_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });
export type VisualConfigurationEmbeddedExpansionStateV1_7_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationEmbeddedRootExpansionStateV1_7_0;
  readonly levels?: ReadonlyArray<VisualConfigurationEmbeddedLevelExpansionStateV1_7_0>;
};
export const VisualConfigurationEmbeddedExpansionStateV1_7_0: Schema.Codec<VisualConfigurationEmbeddedExpansionStateV1_7_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedRootExpansionStateV1_7_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedLevelExpansionStateV1_7_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedRootExpansionStateV1_7_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV1_7_0>;
};
export const VisualConfigurationEmbeddedRootExpansionStateV1_7_0: Schema.Codec<VisualConfigurationEmbeddedRootExpansionStateV1_7_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV1_7_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedNodeExpansionStateV1_7_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV1_7_0>;
};
export const VisualConfigurationEmbeddedNodeExpansionStateV1_7_0: Schema.Codec<VisualConfigurationEmbeddedNodeExpansionStateV1_7_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV1_7_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedLevelExpansionStateV1_7_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationEmbeddedAILevelInformationV1_7_0;
};
export const VisualConfigurationEmbeddedLevelExpansionStateV1_7_0: Schema.Codec<VisualConfigurationEmbeddedLevelExpansionStateV1_7_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedAILevelInformationV1_7_0),
    ),
  });
export type VisualConfigurationEmbeddedAILevelInformationV1_7_0 = {
  readonly method: VisualConfigurationEmbeddedAIDecompositionMethodV1_7_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationEmbeddedAILevelInformationV1_7_0: Schema.Codec<VisualConfigurationEmbeddedAILevelInformationV1_7_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationEmbeddedAIDecompositionMethodV1_7_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedAIDecompositionMethodV1_7_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationEmbeddedAIDecompositionMethodV1_7_0: Schema.Codec<VisualConfigurationEmbeddedAIDecompositionMethodV1_7_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_7_0 =
  {
    readonly title?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedTitleV1_7_0;
    }>;
    readonly subTitle?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedSubTitleV1_7_0;
    }>;
    readonly divider?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedDividerV1_7_0;
    }>;
    readonly spacing?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedSpacingV1_7_0;
    }>;
    readonly background?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedBackgroundV1_7_0;
    }>;
    readonly padding?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedPaddingV1_7_0;
    }>;
    readonly lockAspect?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedLockAspectV1_7_0;
    }>;
    readonly general?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_7_0;
    }>;
    readonly border?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedBorderV1_7_0;
    }>;
    readonly dropShadow?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedDropShadowV1_7_0;
    }>;
    readonly visualLink?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualLinkV1_7_0;
    }>;
    readonly visualTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualTooltipV1_7_0;
    }>;
    readonly stylePreset?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedStylePresetV1_7_0;
    }>;
    readonly visualHeader?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderV1_7_0;
    }>;
    readonly visualHeaderTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderTooltipV1_7_0;
    }>;
  };
export const VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_7_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_7_0> =
  closed({
    title: Schema.optionalKey(
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
            () => VisualConfigurationEmbeddedTitleV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSubTitleV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDividerV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSpacingV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBackgroundV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedPaddingV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedLockAspectV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBorderV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDropShadowV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualLinkV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualTooltipV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedStylePresetV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderV1_7_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderTooltipV1_7_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationEmbeddedTitleV1_7_0 = {
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
export const VisualConfigurationEmbeddedTitleV1_7_0: Schema.Codec<VisualConfigurationEmbeddedTitleV1_7_0> =
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
export type VisualConfigurationEmbeddedSubTitleV1_7_0 = {
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
export const VisualConfigurationEmbeddedSubTitleV1_7_0: Schema.Codec<VisualConfigurationEmbeddedSubTitleV1_7_0> =
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
export type VisualConfigurationEmbeddedDividerV1_7_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationEmbeddedDividerV1_7_0: Schema.Codec<VisualConfigurationEmbeddedDividerV1_7_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedSpacingV1_7_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationEmbeddedSpacingV1_7_0: Schema.Codec<VisualConfigurationEmbeddedSpacingV1_7_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedBackgroundV1_7_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationEmbeddedBackgroundV1_7_0: Schema.Codec<VisualConfigurationEmbeddedBackgroundV1_7_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedPaddingV1_7_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationEmbeddedPaddingV1_7_0: Schema.Codec<VisualConfigurationEmbeddedPaddingV1_7_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedLockAspectV1_7_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationEmbeddedLockAspectV1_7_0: Schema.Codec<VisualConfigurationEmbeddedLockAspectV1_7_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_7_0 =
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
export const VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_7_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_7_0> =
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
export type VisualConfigurationEmbeddedBorderV1_7_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationEmbeddedBorderV1_7_0: Schema.Codec<VisualConfigurationEmbeddedBorderV1_7_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedDropShadowV1_7_0 = {
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
export const VisualConfigurationEmbeddedDropShadowV1_7_0: Schema.Codec<VisualConfigurationEmbeddedDropShadowV1_7_0> =
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
export type VisualConfigurationEmbeddedVisualLinkV1_7_0 = {
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
export const VisualConfigurationEmbeddedVisualLinkV1_7_0: Schema.Codec<VisualConfigurationEmbeddedVisualLinkV1_7_0> =
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
export type VisualConfigurationEmbeddedVisualTooltipV1_7_0 = {
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
export const VisualConfigurationEmbeddedVisualTooltipV1_7_0: Schema.Codec<VisualConfigurationEmbeddedVisualTooltipV1_7_0> =
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
export type VisualConfigurationEmbeddedStylePresetV1_7_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationEmbeddedStylePresetV1_7_0: Schema.Codec<VisualConfigurationEmbeddedStylePresetV1_7_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualHeaderV1_7_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderV1_7_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderV1_7_0> =
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
export type VisualConfigurationEmbeddedVisualHeaderTooltipV1_7_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderTooltipV1_7_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderTooltipV1_7_0> =
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
export type VisualConfigurationEmbeddedVisualSyncGroupV1_7_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationEmbeddedVisualSyncGroupV1_7_0: Schema.Codec<VisualConfigurationEmbeddedVisualSyncGroupV1_7_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationEmbeddedDefinitionsV1_7_0 = {
  Query: VisualConfigurationEmbeddedQueryV1_7_0,
  SortDefinition: VisualConfigurationEmbeddedSortDefinitionV1_7_0,
  QuerySort: VisualConfigurationEmbeddedQuerySortV1_7_0,
  SortDirection: VisualConfigurationEmbeddedSortDirectionV1_7_0,
  VisualQueryOptions: VisualConfigurationEmbeddedVisualQueryOptionsV1_7_0,
  ProjectionState: VisualConfigurationEmbeddedProjectionStateV1_7_0,
  RoleProjection: VisualConfigurationEmbeddedRoleProjectionV1_7_0,
  RoleFieldParameter: VisualConfigurationEmbeddedRoleFieldParameterV1_7_0,
  ExpansionState: VisualConfigurationEmbeddedExpansionStateV1_7_0,
  RootExpansionState: VisualConfigurationEmbeddedRootExpansionStateV1_7_0,
  NodeExpansionState: VisualConfigurationEmbeddedNodeExpansionStateV1_7_0,
  LevelExpansionState: VisualConfigurationEmbeddedLevelExpansionStateV1_7_0,
  AILevelInformation: VisualConfigurationEmbeddedAILevelInformationV1_7_0,
  AIDecompositionMethod: VisualConfigurationEmbeddedAIDecompositionMethodV1_7_0,
  VisualContainerFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_7_0,
  Title: VisualConfigurationEmbeddedTitleV1_7_0,
  SubTitle: VisualConfigurationEmbeddedSubTitleV1_7_0,
  Divider: VisualConfigurationEmbeddedDividerV1_7_0,
  Spacing: VisualConfigurationEmbeddedSpacingV1_7_0,
  Background: VisualConfigurationEmbeddedBackgroundV1_7_0,
  Padding: VisualConfigurationEmbeddedPaddingV1_7_0,
  LockAspect: VisualConfigurationEmbeddedLockAspectV1_7_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_7_0,
  Border: VisualConfigurationEmbeddedBorderV1_7_0,
  DropShadow: VisualConfigurationEmbeddedDropShadowV1_7_0,
  VisualLink: VisualConfigurationEmbeddedVisualLinkV1_7_0,
  VisualTooltip: VisualConfigurationEmbeddedVisualTooltipV1_7_0,
  StylePreset: VisualConfigurationEmbeddedStylePresetV1_7_0,
  VisualHeader: VisualConfigurationEmbeddedVisualHeaderV1_7_0,
  VisualHeaderTooltip: VisualConfigurationEmbeddedVisualHeaderTooltipV1_7_0,
  VisualSyncGroup: VisualConfigurationEmbeddedVisualSyncGroupV1_7_0,
} as const;
export type VisualConfigurationEmbeddedV1_7_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationEmbeddedQueryV1_7_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationEmbeddedExpansionStateV1_7_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_7_0;
  readonly syncGroup?: VisualConfigurationEmbeddedVisualSyncGroupV1_7_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualConfigurationEmbeddedV1_7_0: Schema.Codec<VisualConfigurationEmbeddedV1_7_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedQueryV1_7_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedExpansionStateV1_7_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_2_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_7_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualSyncGroupV1_7_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationQueryV1_8_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV1_8_0;
  readonly options?: VisualConfigurationVisualQueryOptionsV1_8_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationProjectionStateV1_8_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualConfigurationQueryV1_8_0: Schema.Codec<VisualConfigurationQueryV1_8_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationSortDefinitionV1_8_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualQueryOptionsV1_8_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationProjectionStateV1_8_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationSortDefinitionV1_8_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationQuerySortV1_8_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualConfigurationSortDefinitionV1_8_0: Schema.Codec<VisualConfigurationSortDefinitionV1_8_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationQuerySortV1_8_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationQuerySortV1_8_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly direction: VisualConfigurationSortDirectionV1_8_0;
};
export const VisualConfigurationQuerySortV1_8_0: Schema.Codec<VisualConfigurationQuerySortV1_8_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(() => VisualConfigurationSortDirectionV1_8_0),
  });
export type VisualConfigurationSortDirectionV1_8_0 = "Ascending" | "Descending";
export const VisualConfigurationSortDirectionV1_8_0: Schema.Codec<VisualConfigurationSortDirectionV1_8_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationVisualQueryOptionsV1_8_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationVisualQueryOptionsV1_8_0: Schema.Codec<VisualConfigurationVisualQueryOptionsV1_8_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationProjectionStateV1_8_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationRoleProjectionV1_8_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationRoleFieldParameterV1_8_0>;
};
export const VisualConfigurationProjectionStateV1_8_0: Schema.Codec<VisualConfigurationProjectionStateV1_8_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationRoleProjectionV1_8_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationRoleFieldParameterV1_8_0),
      ),
    ),
  });
export type VisualConfigurationRoleProjectionV1_8_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualConfigurationRoleProjectionV1_8_0: Schema.Codec<VisualConfigurationRoleProjectionV1_8_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
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
export type VisualConfigurationRoleFieldParameterV1_8_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};
export const VisualConfigurationRoleFieldParameterV1_8_0: Schema.Codec<VisualConfigurationRoleFieldParameterV1_8_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });
export type VisualConfigurationExpansionStateV1_8_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationRootExpansionStateV1_8_0;
  readonly levels?: ReadonlyArray<VisualConfigurationLevelExpansionStateV1_8_0>;
};
export const VisualConfigurationExpansionStateV1_8_0: Schema.Codec<VisualConfigurationExpansionStateV1_8_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationRootExpansionStateV1_8_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationLevelExpansionStateV1_8_0),
      ),
    ),
  });
export type VisualConfigurationRootExpansionStateV1_8_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV1_8_0>;
};
export const VisualConfigurationRootExpansionStateV1_8_0: Schema.Codec<VisualConfigurationRootExpansionStateV1_8_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV1_8_0),
      ),
    ),
  });
export type VisualConfigurationNodeExpansionStateV1_8_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV1_8_0>;
};
export const VisualConfigurationNodeExpansionStateV1_8_0: Schema.Codec<VisualConfigurationNodeExpansionStateV1_8_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV1_8_0),
      ),
    ),
  });
export type VisualConfigurationLevelExpansionStateV1_8_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationAILevelInformationV1_8_0;
};
export const VisualConfigurationLevelExpansionStateV1_8_0: Schema.Codec<VisualConfigurationLevelExpansionStateV1_8_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationAILevelInformationV1_8_0),
    ),
  });
export type VisualConfigurationAILevelInformationV1_8_0 = {
  readonly method: VisualConfigurationAIDecompositionMethodV1_8_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationAILevelInformationV1_8_0: Schema.Codec<VisualConfigurationAILevelInformationV1_8_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationAIDecompositionMethodV1_8_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationAIDecompositionMethodV1_8_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationAIDecompositionMethodV1_8_0: Schema.Codec<VisualConfigurationAIDecompositionMethodV1_8_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationVisualContainerFormattingObjectsV1_8_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationTitleV1_8_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationSubTitleV1_8_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationDividerV1_8_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationSpacingV1_8_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationBackgroundV1_8_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationPaddingV1_8_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationLockAspectV1_8_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationVisualContainerGeneralFormattingObjectsV1_8_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationBorderV1_8_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationDropShadowV1_8_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationVisualLinkV1_8_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationVisualTooltipV1_8_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationStylePresetV1_8_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationVisualHeaderV1_8_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationVisualHeaderTooltipV1_8_0;
  }>;
};
export const VisualConfigurationVisualContainerFormattingObjectsV1_8_0: Schema.Codec<VisualConfigurationVisualContainerFormattingObjectsV1_8_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationTitleV1_8_0),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSubTitleV1_8_0),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDividerV1_8_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSpacingV1_8_0),
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
          properties: Schema.suspend(() => VisualConfigurationBackgroundV1_8_0),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationPaddingV1_8_0),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspectV1_8_0),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationVisualContainerGeneralFormattingObjectsV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationBorderV1_8_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDropShadowV1_8_0),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV1_8_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualTooltipV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationStylePresetV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderTooltipV1_8_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationTitleV1_8_0 = {
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
export const VisualConfigurationTitleV1_8_0: Schema.Codec<VisualConfigurationTitleV1_8_0> =
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
export type VisualConfigurationSubTitleV1_8_0 = {
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
export const VisualConfigurationSubTitleV1_8_0: Schema.Codec<VisualConfigurationSubTitleV1_8_0> =
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
export type VisualConfigurationDividerV1_8_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationDividerV1_8_0: Schema.Codec<VisualConfigurationDividerV1_8_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationSpacingV1_8_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationSpacingV1_8_0: Schema.Codec<VisualConfigurationSpacingV1_8_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationBackgroundV1_8_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationBackgroundV1_8_0: Schema.Codec<VisualConfigurationBackgroundV1_8_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationPaddingV1_8_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationPaddingV1_8_0: Schema.Codec<VisualConfigurationPaddingV1_8_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationLockAspectV1_8_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationLockAspectV1_8_0: Schema.Codec<VisualConfigurationLockAspectV1_8_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualContainerGeneralFormattingObjectsV1_8_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};
export const VisualConfigurationVisualContainerGeneralFormattingObjectsV1_8_0: Schema.Codec<VisualConfigurationVisualContainerGeneralFormattingObjectsV1_8_0> =
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
export type VisualConfigurationBorderV1_8_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationBorderV1_8_0: Schema.Codec<VisualConfigurationBorderV1_8_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationDropShadowV1_8_0 = {
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
export const VisualConfigurationDropShadowV1_8_0: Schema.Codec<VisualConfigurationDropShadowV1_8_0> =
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
export type VisualConfigurationVisualLinkV1_8_0 = {
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
export const VisualConfigurationVisualLinkV1_8_0: Schema.Codec<VisualConfigurationVisualLinkV1_8_0> =
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
export type VisualConfigurationVisualTooltipV1_8_0 = {
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
export const VisualConfigurationVisualTooltipV1_8_0: Schema.Codec<VisualConfigurationVisualTooltipV1_8_0> =
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
export type VisualConfigurationStylePresetV1_8_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationStylePresetV1_8_0: Schema.Codec<VisualConfigurationStylePresetV1_8_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualHeaderV1_8_0 = {
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
export const VisualConfigurationVisualHeaderV1_8_0: Schema.Codec<VisualConfigurationVisualHeaderV1_8_0> =
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
export type VisualConfigurationVisualHeaderTooltipV1_8_0 = {
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
export const VisualConfigurationVisualHeaderTooltipV1_8_0: Schema.Codec<VisualConfigurationVisualHeaderTooltipV1_8_0> =
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
export type VisualConfigurationVisualSyncGroupV1_8_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationVisualSyncGroupV1_8_0: Schema.Codec<VisualConfigurationVisualSyncGroupV1_8_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationDefinitionsV1_8_0 = {
  Query: VisualConfigurationQueryV1_8_0,
  SortDefinition: VisualConfigurationSortDefinitionV1_8_0,
  QuerySort: VisualConfigurationQuerySortV1_8_0,
  SortDirection: VisualConfigurationSortDirectionV1_8_0,
  VisualQueryOptions: VisualConfigurationVisualQueryOptionsV1_8_0,
  ProjectionState: VisualConfigurationProjectionStateV1_8_0,
  RoleProjection: VisualConfigurationRoleProjectionV1_8_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV1_8_0,
  ExpansionState: VisualConfigurationExpansionStateV1_8_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV1_8_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV1_8_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV1_8_0,
  AILevelInformation: VisualConfigurationAILevelInformationV1_8_0,
  AIDecompositionMethod: VisualConfigurationAIDecompositionMethodV1_8_0,
  VisualContainerFormattingObjects:
    VisualConfigurationVisualContainerFormattingObjectsV1_8_0,
  Title: VisualConfigurationTitleV1_8_0,
  SubTitle: VisualConfigurationSubTitleV1_8_0,
  Divider: VisualConfigurationDividerV1_8_0,
  Spacing: VisualConfigurationSpacingV1_8_0,
  Background: VisualConfigurationBackgroundV1_8_0,
  Padding: VisualConfigurationPaddingV1_8_0,
  LockAspect: VisualConfigurationLockAspectV1_8_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationVisualContainerGeneralFormattingObjectsV1_8_0,
  Border: VisualConfigurationBorderV1_8_0,
  DropShadow: VisualConfigurationDropShadowV1_8_0,
  VisualLink: VisualConfigurationVisualLinkV1_8_0,
  VisualTooltip: VisualConfigurationVisualTooltipV1_8_0,
  StylePreset: VisualConfigurationStylePresetV1_8_0,
  VisualHeader: VisualConfigurationVisualHeaderV1_8_0,
  VisualHeaderTooltip: VisualConfigurationVisualHeaderTooltipV1_8_0,
  VisualSyncGroup: VisualConfigurationVisualSyncGroupV1_8_0,
} as const;
export type VisualConfigurationV1_8_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.8.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV1_8_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV1_8_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV1_8_0;
  readonly syncGroup?: VisualConfigurationVisualSyncGroupV1_8_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualConfigurationV1_8_0: Schema.Codec<VisualConfigurationV1_8_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.8.0/schema.json",
    ),
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationQueryV1_8_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationExpansionStateV1_8_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationVisualContainerFormattingObjectsV1_8_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualSyncGroupV1_8_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedQueryV1_8_0 = {
  readonly sortDefinition?: VisualConfigurationEmbeddedSortDefinitionV1_8_0;
  readonly options?: VisualConfigurationEmbeddedVisualQueryOptionsV1_8_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationEmbeddedProjectionStateV1_8_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualConfigurationEmbeddedQueryV1_8_0: Schema.Codec<VisualConfigurationEmbeddedQueryV1_8_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedSortDefinitionV1_8_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualQueryOptionsV1_8_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationEmbeddedProjectionStateV1_8_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedSortDefinitionV1_8_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationEmbeddedQuerySortV1_8_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualConfigurationEmbeddedSortDefinitionV1_8_0: Schema.Codec<VisualConfigurationEmbeddedSortDefinitionV1_8_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedQuerySortV1_8_0),
      ),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedQuerySortV1_8_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly direction: VisualConfigurationEmbeddedSortDirectionV1_8_0;
};
export const VisualConfigurationEmbeddedQuerySortV1_8_0: Schema.Codec<VisualConfigurationEmbeddedQuerySortV1_8_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(
      () => VisualConfigurationEmbeddedSortDirectionV1_8_0,
    ),
  });
export type VisualConfigurationEmbeddedSortDirectionV1_8_0 =
  "Ascending" | "Descending";
export const VisualConfigurationEmbeddedSortDirectionV1_8_0: Schema.Codec<VisualConfigurationEmbeddedSortDirectionV1_8_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationEmbeddedVisualQueryOptionsV1_8_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationEmbeddedVisualQueryOptionsV1_8_0: Schema.Codec<VisualConfigurationEmbeddedVisualQueryOptionsV1_8_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedProjectionStateV1_8_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationEmbeddedRoleProjectionV1_8_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationEmbeddedRoleFieldParameterV1_8_0>;
};
export const VisualConfigurationEmbeddedProjectionStateV1_8_0: Schema.Codec<VisualConfigurationEmbeddedProjectionStateV1_8_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationEmbeddedRoleProjectionV1_8_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedRoleFieldParameterV1_8_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedRoleProjectionV1_8_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualConfigurationEmbeddedRoleProjectionV1_8_0: Schema.Codec<VisualConfigurationEmbeddedRoleProjectionV1_8_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
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
export type VisualConfigurationEmbeddedRoleFieldParameterV1_8_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};
export const VisualConfigurationEmbeddedRoleFieldParameterV1_8_0: Schema.Codec<VisualConfigurationEmbeddedRoleFieldParameterV1_8_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });
export type VisualConfigurationEmbeddedExpansionStateV1_8_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationEmbeddedRootExpansionStateV1_8_0;
  readonly levels?: ReadonlyArray<VisualConfigurationEmbeddedLevelExpansionStateV1_8_0>;
};
export const VisualConfigurationEmbeddedExpansionStateV1_8_0: Schema.Codec<VisualConfigurationEmbeddedExpansionStateV1_8_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedRootExpansionStateV1_8_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedLevelExpansionStateV1_8_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedRootExpansionStateV1_8_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV1_8_0>;
};
export const VisualConfigurationEmbeddedRootExpansionStateV1_8_0: Schema.Codec<VisualConfigurationEmbeddedRootExpansionStateV1_8_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV1_8_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedNodeExpansionStateV1_8_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV1_8_0>;
};
export const VisualConfigurationEmbeddedNodeExpansionStateV1_8_0: Schema.Codec<VisualConfigurationEmbeddedNodeExpansionStateV1_8_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV1_8_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedLevelExpansionStateV1_8_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationEmbeddedAILevelInformationV1_8_0;
};
export const VisualConfigurationEmbeddedLevelExpansionStateV1_8_0: Schema.Codec<VisualConfigurationEmbeddedLevelExpansionStateV1_8_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedAILevelInformationV1_8_0),
    ),
  });
export type VisualConfigurationEmbeddedAILevelInformationV1_8_0 = {
  readonly method: VisualConfigurationEmbeddedAIDecompositionMethodV1_8_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationEmbeddedAILevelInformationV1_8_0: Schema.Codec<VisualConfigurationEmbeddedAILevelInformationV1_8_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationEmbeddedAIDecompositionMethodV1_8_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedAIDecompositionMethodV1_8_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationEmbeddedAIDecompositionMethodV1_8_0: Schema.Codec<VisualConfigurationEmbeddedAIDecompositionMethodV1_8_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_8_0 =
  {
    readonly title?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedTitleV1_8_0;
    }>;
    readonly subTitle?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedSubTitleV1_8_0;
    }>;
    readonly divider?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedDividerV1_8_0;
    }>;
    readonly spacing?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedSpacingV1_8_0;
    }>;
    readonly background?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedBackgroundV1_8_0;
    }>;
    readonly padding?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedPaddingV1_8_0;
    }>;
    readonly lockAspect?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedLockAspectV1_8_0;
    }>;
    readonly general?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_8_0;
    }>;
    readonly border?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedBorderV1_8_0;
    }>;
    readonly dropShadow?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedDropShadowV1_8_0;
    }>;
    readonly visualLink?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedVisualLinkV1_8_0;
    }>;
    readonly visualTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedVisualTooltipV1_8_0;
    }>;
    readonly stylePreset?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedStylePresetV1_8_0;
    }>;
    readonly visualHeader?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderV1_8_0;
    }>;
    readonly visualHeaderTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderTooltipV1_8_0;
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedTitleV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSubTitleV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDividerV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSpacingV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBackgroundV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedPaddingV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedLockAspectV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBorderV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDropShadowV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualLinkV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualTooltipV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedStylePresetV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderV1_8_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderTooltipV1_8_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationEmbeddedTitleV1_8_0 = {
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
export const VisualConfigurationEmbeddedTitleV1_8_0: Schema.Codec<VisualConfigurationEmbeddedTitleV1_8_0> =
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
export type VisualConfigurationEmbeddedSubTitleV1_8_0 = {
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
export const VisualConfigurationEmbeddedSubTitleV1_8_0: Schema.Codec<VisualConfigurationEmbeddedSubTitleV1_8_0> =
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
export type VisualConfigurationEmbeddedDividerV1_8_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationEmbeddedDividerV1_8_0: Schema.Codec<VisualConfigurationEmbeddedDividerV1_8_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedSpacingV1_8_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationEmbeddedSpacingV1_8_0: Schema.Codec<VisualConfigurationEmbeddedSpacingV1_8_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedBackgroundV1_8_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationEmbeddedBackgroundV1_8_0: Schema.Codec<VisualConfigurationEmbeddedBackgroundV1_8_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedPaddingV1_8_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationEmbeddedPaddingV1_8_0: Schema.Codec<VisualConfigurationEmbeddedPaddingV1_8_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedLockAspectV1_8_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationEmbeddedLockAspectV1_8_0: Schema.Codec<VisualConfigurationEmbeddedLockAspectV1_8_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_8_0 =
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
export const VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_8_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_8_0> =
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
export type VisualConfigurationEmbeddedBorderV1_8_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationEmbeddedBorderV1_8_0: Schema.Codec<VisualConfigurationEmbeddedBorderV1_8_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedDropShadowV1_8_0 = {
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
export const VisualConfigurationEmbeddedDropShadowV1_8_0: Schema.Codec<VisualConfigurationEmbeddedDropShadowV1_8_0> =
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
export type VisualConfigurationEmbeddedVisualLinkV1_8_0 = {
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
export const VisualConfigurationEmbeddedVisualLinkV1_8_0: Schema.Codec<VisualConfigurationEmbeddedVisualLinkV1_8_0> =
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
export type VisualConfigurationEmbeddedVisualTooltipV1_8_0 = {
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
export const VisualConfigurationEmbeddedVisualTooltipV1_8_0: Schema.Codec<VisualConfigurationEmbeddedVisualTooltipV1_8_0> =
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
export type VisualConfigurationEmbeddedStylePresetV1_8_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationEmbeddedStylePresetV1_8_0: Schema.Codec<VisualConfigurationEmbeddedStylePresetV1_8_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualHeaderV1_8_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderV1_8_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderV1_8_0> =
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
export type VisualConfigurationEmbeddedVisualHeaderTooltipV1_8_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderTooltipV1_8_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderTooltipV1_8_0> =
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
export type VisualConfigurationEmbeddedVisualSyncGroupV1_8_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationEmbeddedVisualSyncGroupV1_8_0: Schema.Codec<VisualConfigurationEmbeddedVisualSyncGroupV1_8_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationEmbeddedDefinitionsV1_8_0 = {
  Query: VisualConfigurationEmbeddedQueryV1_8_0,
  SortDefinition: VisualConfigurationEmbeddedSortDefinitionV1_8_0,
  QuerySort: VisualConfigurationEmbeddedQuerySortV1_8_0,
  SortDirection: VisualConfigurationEmbeddedSortDirectionV1_8_0,
  VisualQueryOptions: VisualConfigurationEmbeddedVisualQueryOptionsV1_8_0,
  ProjectionState: VisualConfigurationEmbeddedProjectionStateV1_8_0,
  RoleProjection: VisualConfigurationEmbeddedRoleProjectionV1_8_0,
  RoleFieldParameter: VisualConfigurationEmbeddedRoleFieldParameterV1_8_0,
  ExpansionState: VisualConfigurationEmbeddedExpansionStateV1_8_0,
  RootExpansionState: VisualConfigurationEmbeddedRootExpansionStateV1_8_0,
  NodeExpansionState: VisualConfigurationEmbeddedNodeExpansionStateV1_8_0,
  LevelExpansionState: VisualConfigurationEmbeddedLevelExpansionStateV1_8_0,
  AILevelInformation: VisualConfigurationEmbeddedAILevelInformationV1_8_0,
  AIDecompositionMethod: VisualConfigurationEmbeddedAIDecompositionMethodV1_8_0,
  VisualContainerFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_8_0,
  Title: VisualConfigurationEmbeddedTitleV1_8_0,
  SubTitle: VisualConfigurationEmbeddedSubTitleV1_8_0,
  Divider: VisualConfigurationEmbeddedDividerV1_8_0,
  Spacing: VisualConfigurationEmbeddedSpacingV1_8_0,
  Background: VisualConfigurationEmbeddedBackgroundV1_8_0,
  Padding: VisualConfigurationEmbeddedPaddingV1_8_0,
  LockAspect: VisualConfigurationEmbeddedLockAspectV1_8_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_8_0,
  Border: VisualConfigurationEmbeddedBorderV1_8_0,
  DropShadow: VisualConfigurationEmbeddedDropShadowV1_8_0,
  VisualLink: VisualConfigurationEmbeddedVisualLinkV1_8_0,
  VisualTooltip: VisualConfigurationEmbeddedVisualTooltipV1_8_0,
  StylePreset: VisualConfigurationEmbeddedStylePresetV1_8_0,
  VisualHeader: VisualConfigurationEmbeddedVisualHeaderV1_8_0,
  VisualHeaderTooltip: VisualConfigurationEmbeddedVisualHeaderTooltipV1_8_0,
  VisualSyncGroup: VisualConfigurationEmbeddedVisualSyncGroupV1_8_0,
} as const;
export type VisualConfigurationEmbeddedV1_8_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationEmbeddedQueryV1_8_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationEmbeddedExpansionStateV1_8_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_8_0;
  readonly syncGroup?: VisualConfigurationEmbeddedVisualSyncGroupV1_8_0;
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
        Schema.suspend(() => VisualConfigurationEmbeddedExpansionStateV1_8_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_8_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualSyncGroupV1_8_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationQueryV2_0_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV2_0_0;
  readonly options?: VisualConfigurationVisualQueryOptionsV2_0_0;
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
      Schema.suspend(() => VisualConfigurationVisualQueryOptionsV2_0_0),
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
  readonly field: Query.QueryExpressionContainerV1_3_0;
  readonly direction: VisualConfigurationSortDirectionV2_0_0;
};
export const VisualConfigurationQuerySortV2_0_0: Schema.Codec<VisualConfigurationQuerySortV2_0_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(() => VisualConfigurationSortDirectionV2_0_0),
  });
export type VisualConfigurationSortDirectionV2_0_0 = "Ascending" | "Descending";
export const VisualConfigurationSortDirectionV2_0_0: Schema.Codec<VisualConfigurationSortDirectionV2_0_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationVisualQueryOptionsV2_0_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationVisualQueryOptionsV2_0_0: Schema.Codec<VisualConfigurationVisualQueryOptionsV2_0_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
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
  readonly field: Query.QueryExpressionContainerV1_3_0;
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
      () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
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
  readonly parameterExpr: Query.QueryExpressionContainerV1_3_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};
export const VisualConfigurationRoleFieldParameterV2_0_0: Schema.Codec<VisualConfigurationRoleFieldParameterV2_0_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
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
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_0_0>;
};
export const VisualConfigurationRootExpansionStateV2_0_0: Schema.Codec<VisualConfigurationRootExpansionStateV2_0_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
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
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_0_0>;
};
export const VisualConfigurationNodeExpansionStateV2_0_0: Schema.Codec<VisualConfigurationNodeExpansionStateV2_0_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
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
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationAILevelInformationV2_0_0;
};
export const VisualConfigurationLevelExpansionStateV2_0_0: Schema.Codec<VisualConfigurationLevelExpansionStateV2_0_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationAILevelInformationV2_0_0),
    ),
  });
export type VisualConfigurationAILevelInformationV2_0_0 = {
  readonly method: VisualConfigurationAIDecompositionMethodV2_0_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationAILevelInformationV2_0_0: Schema.Codec<VisualConfigurationAILevelInformationV2_0_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationAIDecompositionMethodV2_0_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationAIDecompositionMethodV2_0_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationAIDecompositionMethodV2_0_0: Schema.Codec<VisualConfigurationAIDecompositionMethodV2_0_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationVisualContainerFormattingObjectsV2_0_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationTitleV2_0_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationSubTitleV2_0_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationDividerV2_0_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationSpacingV2_0_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationBackgroundV2_0_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationPaddingV2_0_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationLockAspectV2_0_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualContainerGeneralFormattingObjectsV2_0_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationBorderV2_0_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationDropShadowV2_0_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualLinkV2_0_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualTooltipV2_0_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationStylePresetV2_0_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualHeaderV2_0_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualHeaderTooltipV2_0_0;
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationTitleV2_0_0),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSubTitleV2_0_0),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDividerV2_0_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSpacingV2_0_0),
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
          properties: Schema.suspend(() => VisualConfigurationBackgroundV2_0_0),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationPaddingV2_0_0),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspectV2_0_0),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationVisualContainerGeneralFormattingObjectsV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationBorderV2_0_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDropShadowV2_0_0),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV2_0_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualTooltipV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationStylePresetV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderTooltipV2_0_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationTitleV2_0_0 = {
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
export const VisualConfigurationTitleV2_0_0: Schema.Codec<VisualConfigurationTitleV2_0_0> =
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
export type VisualConfigurationSubTitleV2_0_0 = {
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
export const VisualConfigurationSubTitleV2_0_0: Schema.Codec<VisualConfigurationSubTitleV2_0_0> =
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
export type VisualConfigurationDividerV2_0_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationDividerV2_0_0: Schema.Codec<VisualConfigurationDividerV2_0_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationSpacingV2_0_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationSpacingV2_0_0: Schema.Codec<VisualConfigurationSpacingV2_0_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationBackgroundV2_0_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationBackgroundV2_0_0: Schema.Codec<VisualConfigurationBackgroundV2_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationPaddingV2_0_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationPaddingV2_0_0: Schema.Codec<VisualConfigurationPaddingV2_0_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationLockAspectV2_0_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationLockAspectV2_0_0: Schema.Codec<VisualConfigurationLockAspectV2_0_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualContainerGeneralFormattingObjectsV2_0_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};
export const VisualConfigurationVisualContainerGeneralFormattingObjectsV2_0_0: Schema.Codec<VisualConfigurationVisualContainerGeneralFormattingObjectsV2_0_0> =
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
export type VisualConfigurationBorderV2_0_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationBorderV2_0_0: Schema.Codec<VisualConfigurationBorderV2_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationDropShadowV2_0_0 = {
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
export const VisualConfigurationDropShadowV2_0_0: Schema.Codec<VisualConfigurationDropShadowV2_0_0> =
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
export type VisualConfigurationVisualLinkV2_0_0 = {
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
export const VisualConfigurationVisualLinkV2_0_0: Schema.Codec<VisualConfigurationVisualLinkV2_0_0> =
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
export type VisualConfigurationVisualTooltipV2_0_0 = {
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
export const VisualConfigurationVisualTooltipV2_0_0: Schema.Codec<VisualConfigurationVisualTooltipV2_0_0> =
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
export type VisualConfigurationStylePresetV2_0_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationStylePresetV2_0_0: Schema.Codec<VisualConfigurationStylePresetV2_0_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualHeaderV2_0_0 = {
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
export const VisualConfigurationVisualHeaderV2_0_0: Schema.Codec<VisualConfigurationVisualHeaderV2_0_0> =
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
export type VisualConfigurationVisualHeaderTooltipV2_0_0 = {
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
export const VisualConfigurationVisualHeaderTooltipV2_0_0: Schema.Codec<VisualConfigurationVisualHeaderTooltipV2_0_0> =
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
export type VisualConfigurationVisualSyncGroupV2_0_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationVisualSyncGroupV2_0_0: Schema.Codec<VisualConfigurationVisualSyncGroupV2_0_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationDefinitionsV2_0_0 = {
  Query: VisualConfigurationQueryV2_0_0,
  SortDefinition: VisualConfigurationSortDefinitionV2_0_0,
  QuerySort: VisualConfigurationQuerySortV2_0_0,
  SortDirection: VisualConfigurationSortDirectionV2_0_0,
  VisualQueryOptions: VisualConfigurationVisualQueryOptionsV2_0_0,
  ProjectionState: VisualConfigurationProjectionStateV2_0_0,
  RoleProjection: VisualConfigurationRoleProjectionV2_0_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV2_0_0,
  ExpansionState: VisualConfigurationExpansionStateV2_0_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV2_0_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV2_0_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV2_0_0,
  AILevelInformation: VisualConfigurationAILevelInformationV2_0_0,
  AIDecompositionMethod: VisualConfigurationAIDecompositionMethodV2_0_0,
  VisualContainerFormattingObjects:
    VisualConfigurationVisualContainerFormattingObjectsV2_0_0,
  Title: VisualConfigurationTitleV2_0_0,
  SubTitle: VisualConfigurationSubTitleV2_0_0,
  Divider: VisualConfigurationDividerV2_0_0,
  Spacing: VisualConfigurationSpacingV2_0_0,
  Background: VisualConfigurationBackgroundV2_0_0,
  Padding: VisualConfigurationPaddingV2_0_0,
  LockAspect: VisualConfigurationLockAspectV2_0_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationVisualContainerGeneralFormattingObjectsV2_0_0,
  Border: VisualConfigurationBorderV2_0_0,
  DropShadow: VisualConfigurationDropShadowV2_0_0,
  VisualLink: VisualConfigurationVisualLinkV2_0_0,
  VisualTooltip: VisualConfigurationVisualTooltipV2_0_0,
  StylePreset: VisualConfigurationStylePresetV2_0_0,
  VisualHeader: VisualConfigurationVisualHeaderV2_0_0,
  VisualHeaderTooltip: VisualConfigurationVisualHeaderTooltipV2_0_0,
  VisualSyncGroup: VisualConfigurationVisualSyncGroupV2_0_0,
} as const;
export type VisualConfigurationV2_0_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV2_0_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV2_0_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV2_0_0;
  readonly syncGroup?: VisualConfigurationVisualSyncGroupV2_0_0;
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
          Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationVisualContainerFormattingObjectsV2_0_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualSyncGroupV2_0_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedQueryV2_0_0 = {
  readonly sortDefinition?: VisualConfigurationEmbeddedSortDefinitionV2_0_0;
  readonly options?: VisualConfigurationEmbeddedVisualQueryOptionsV2_0_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationEmbeddedProjectionStateV2_0_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualConfigurationEmbeddedQueryV2_0_0: Schema.Codec<VisualConfigurationEmbeddedQueryV2_0_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedSortDefinitionV2_0_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualQueryOptionsV2_0_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationEmbeddedProjectionStateV2_0_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedSortDefinitionV2_0_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationEmbeddedQuerySortV2_0_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualConfigurationEmbeddedSortDefinitionV2_0_0: Schema.Codec<VisualConfigurationEmbeddedSortDefinitionV2_0_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedQuerySortV2_0_0),
      ),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedQuerySortV2_0_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly direction: VisualConfigurationEmbeddedSortDirectionV2_0_0;
};
export const VisualConfigurationEmbeddedQuerySortV2_0_0: Schema.Codec<VisualConfigurationEmbeddedQuerySortV2_0_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(
      () => VisualConfigurationEmbeddedSortDirectionV2_0_0,
    ),
  });
export type VisualConfigurationEmbeddedSortDirectionV2_0_0 =
  "Ascending" | "Descending";
export const VisualConfigurationEmbeddedSortDirectionV2_0_0: Schema.Codec<VisualConfigurationEmbeddedSortDirectionV2_0_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationEmbeddedVisualQueryOptionsV2_0_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationEmbeddedVisualQueryOptionsV2_0_0: Schema.Codec<VisualConfigurationEmbeddedVisualQueryOptionsV2_0_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedProjectionStateV2_0_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationEmbeddedRoleProjectionV2_0_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationEmbeddedRoleFieldParameterV2_0_0>;
};
export const VisualConfigurationEmbeddedProjectionStateV2_0_0: Schema.Codec<VisualConfigurationEmbeddedProjectionStateV2_0_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationEmbeddedRoleProjectionV2_0_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedRoleFieldParameterV2_0_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedRoleProjectionV2_0_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualConfigurationEmbeddedRoleProjectionV2_0_0: Schema.Codec<VisualConfigurationEmbeddedRoleProjectionV2_0_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
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
export type VisualConfigurationEmbeddedRoleFieldParameterV2_0_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};
export const VisualConfigurationEmbeddedRoleFieldParameterV2_0_0: Schema.Codec<VisualConfigurationEmbeddedRoleFieldParameterV2_0_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });
export type VisualConfigurationEmbeddedExpansionStateV2_0_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationEmbeddedRootExpansionStateV2_0_0;
  readonly levels?: ReadonlyArray<VisualConfigurationEmbeddedLevelExpansionStateV2_0_0>;
};
export const VisualConfigurationEmbeddedExpansionStateV2_0_0: Schema.Codec<VisualConfigurationEmbeddedExpansionStateV2_0_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedRootExpansionStateV2_0_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedLevelExpansionStateV2_0_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedRootExpansionStateV2_0_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV2_0_0>;
};
export const VisualConfigurationEmbeddedRootExpansionStateV2_0_0: Schema.Codec<VisualConfigurationEmbeddedRootExpansionStateV2_0_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV2_0_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedNodeExpansionStateV2_0_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV2_0_0>;
};
export const VisualConfigurationEmbeddedNodeExpansionStateV2_0_0: Schema.Codec<VisualConfigurationEmbeddedNodeExpansionStateV2_0_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV2_0_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedLevelExpansionStateV2_0_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationEmbeddedAILevelInformationV2_0_0;
};
export const VisualConfigurationEmbeddedLevelExpansionStateV2_0_0: Schema.Codec<VisualConfigurationEmbeddedLevelExpansionStateV2_0_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedAILevelInformationV2_0_0),
    ),
  });
export type VisualConfigurationEmbeddedAILevelInformationV2_0_0 = {
  readonly method: VisualConfigurationEmbeddedAIDecompositionMethodV2_0_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationEmbeddedAILevelInformationV2_0_0: Schema.Codec<VisualConfigurationEmbeddedAILevelInformationV2_0_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationEmbeddedAIDecompositionMethodV2_0_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedAIDecompositionMethodV2_0_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationEmbeddedAIDecompositionMethodV2_0_0: Schema.Codec<VisualConfigurationEmbeddedAIDecompositionMethodV2_0_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_0_0 =
  {
    readonly title?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedTitleV2_0_0;
    }>;
    readonly subTitle?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedSubTitleV2_0_0;
    }>;
    readonly divider?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedDividerV2_0_0;
    }>;
    readonly spacing?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedSpacingV2_0_0;
    }>;
    readonly background?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedBackgroundV2_0_0;
    }>;
    readonly padding?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedPaddingV2_0_0;
    }>;
    readonly lockAspect?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedLockAspectV2_0_0;
    }>;
    readonly general?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_0_0;
    }>;
    readonly border?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedBorderV2_0_0;
    }>;
    readonly dropShadow?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedDropShadowV2_0_0;
    }>;
    readonly visualLink?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedVisualLinkV2_0_0;
    }>;
    readonly visualTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedVisualTooltipV2_0_0;
    }>;
    readonly stylePreset?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedStylePresetV2_0_0;
    }>;
    readonly visualHeader?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderV2_0_0;
    }>;
    readonly visualHeaderTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderTooltipV2_0_0;
    }>;
  };
export const VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_0_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_0_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedTitleV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSubTitleV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDividerV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSpacingV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBackgroundV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedPaddingV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedLockAspectV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBorderV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDropShadowV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualLinkV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualTooltipV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedStylePresetV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderV2_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderTooltipV2_0_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationEmbeddedTitleV2_0_0 = {
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
export const VisualConfigurationEmbeddedTitleV2_0_0: Schema.Codec<VisualConfigurationEmbeddedTitleV2_0_0> =
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
export type VisualConfigurationEmbeddedSubTitleV2_0_0 = {
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
export const VisualConfigurationEmbeddedSubTitleV2_0_0: Schema.Codec<VisualConfigurationEmbeddedSubTitleV2_0_0> =
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
export type VisualConfigurationEmbeddedDividerV2_0_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationEmbeddedDividerV2_0_0: Schema.Codec<VisualConfigurationEmbeddedDividerV2_0_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedSpacingV2_0_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationEmbeddedSpacingV2_0_0: Schema.Codec<VisualConfigurationEmbeddedSpacingV2_0_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedBackgroundV2_0_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationEmbeddedBackgroundV2_0_0: Schema.Codec<VisualConfigurationEmbeddedBackgroundV2_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedPaddingV2_0_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationEmbeddedPaddingV2_0_0: Schema.Codec<VisualConfigurationEmbeddedPaddingV2_0_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedLockAspectV2_0_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationEmbeddedLockAspectV2_0_0: Schema.Codec<VisualConfigurationEmbeddedLockAspectV2_0_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_0_0 =
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
export const VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_0_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_0_0> =
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
export type VisualConfigurationEmbeddedBorderV2_0_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationEmbeddedBorderV2_0_0: Schema.Codec<VisualConfigurationEmbeddedBorderV2_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedDropShadowV2_0_0 = {
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
export const VisualConfigurationEmbeddedDropShadowV2_0_0: Schema.Codec<VisualConfigurationEmbeddedDropShadowV2_0_0> =
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
export type VisualConfigurationEmbeddedVisualLinkV2_0_0 = {
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
export const VisualConfigurationEmbeddedVisualLinkV2_0_0: Schema.Codec<VisualConfigurationEmbeddedVisualLinkV2_0_0> =
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
export type VisualConfigurationEmbeddedVisualTooltipV2_0_0 = {
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
export const VisualConfigurationEmbeddedVisualTooltipV2_0_0: Schema.Codec<VisualConfigurationEmbeddedVisualTooltipV2_0_0> =
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
export type VisualConfigurationEmbeddedStylePresetV2_0_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationEmbeddedStylePresetV2_0_0: Schema.Codec<VisualConfigurationEmbeddedStylePresetV2_0_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualHeaderV2_0_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderV2_0_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderV2_0_0> =
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
export type VisualConfigurationEmbeddedVisualHeaderTooltipV2_0_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderTooltipV2_0_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderTooltipV2_0_0> =
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
export type VisualConfigurationEmbeddedVisualSyncGroupV2_0_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationEmbeddedVisualSyncGroupV2_0_0: Schema.Codec<VisualConfigurationEmbeddedVisualSyncGroupV2_0_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationEmbeddedDefinitionsV2_0_0 = {
  Query: VisualConfigurationEmbeddedQueryV2_0_0,
  SortDefinition: VisualConfigurationEmbeddedSortDefinitionV2_0_0,
  QuerySort: VisualConfigurationEmbeddedQuerySortV2_0_0,
  SortDirection: VisualConfigurationEmbeddedSortDirectionV2_0_0,
  VisualQueryOptions: VisualConfigurationEmbeddedVisualQueryOptionsV2_0_0,
  ProjectionState: VisualConfigurationEmbeddedProjectionStateV2_0_0,
  RoleProjection: VisualConfigurationEmbeddedRoleProjectionV2_0_0,
  RoleFieldParameter: VisualConfigurationEmbeddedRoleFieldParameterV2_0_0,
  ExpansionState: VisualConfigurationEmbeddedExpansionStateV2_0_0,
  RootExpansionState: VisualConfigurationEmbeddedRootExpansionStateV2_0_0,
  NodeExpansionState: VisualConfigurationEmbeddedNodeExpansionStateV2_0_0,
  LevelExpansionState: VisualConfigurationEmbeddedLevelExpansionStateV2_0_0,
  AILevelInformation: VisualConfigurationEmbeddedAILevelInformationV2_0_0,
  AIDecompositionMethod: VisualConfigurationEmbeddedAIDecompositionMethodV2_0_0,
  VisualContainerFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_0_0,
  Title: VisualConfigurationEmbeddedTitleV2_0_0,
  SubTitle: VisualConfigurationEmbeddedSubTitleV2_0_0,
  Divider: VisualConfigurationEmbeddedDividerV2_0_0,
  Spacing: VisualConfigurationEmbeddedSpacingV2_0_0,
  Background: VisualConfigurationEmbeddedBackgroundV2_0_0,
  Padding: VisualConfigurationEmbeddedPaddingV2_0_0,
  LockAspect: VisualConfigurationEmbeddedLockAspectV2_0_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_0_0,
  Border: VisualConfigurationEmbeddedBorderV2_0_0,
  DropShadow: VisualConfigurationEmbeddedDropShadowV2_0_0,
  VisualLink: VisualConfigurationEmbeddedVisualLinkV2_0_0,
  VisualTooltip: VisualConfigurationEmbeddedVisualTooltipV2_0_0,
  StylePreset: VisualConfigurationEmbeddedStylePresetV2_0_0,
  VisualHeader: VisualConfigurationEmbeddedVisualHeaderV2_0_0,
  VisualHeaderTooltip: VisualConfigurationEmbeddedVisualHeaderTooltipV2_0_0,
  VisualSyncGroup: VisualConfigurationEmbeddedVisualSyncGroupV2_0_0,
} as const;
export type VisualConfigurationEmbeddedV2_0_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationEmbeddedQueryV2_0_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationEmbeddedExpansionStateV2_0_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_0_0;
  readonly syncGroup?: VisualConfigurationEmbeddedVisualSyncGroupV2_0_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualConfigurationEmbeddedV2_0_0: Schema.Codec<VisualConfigurationEmbeddedV2_0_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedQueryV2_0_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedExpansionStateV2_0_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_3_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_0_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualSyncGroupV2_0_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationQueryV2_1_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV2_1_0;
  readonly options?: VisualConfigurationVisualQueryOptionsV2_1_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationProjectionStateV2_1_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualConfigurationQueryV2_1_0: Schema.Codec<VisualConfigurationQueryV2_1_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationSortDefinitionV2_1_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualQueryOptionsV2_1_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationProjectionStateV2_1_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationSortDefinitionV2_1_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationQuerySortV2_1_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualConfigurationSortDefinitionV2_1_0: Schema.Codec<VisualConfigurationSortDefinitionV2_1_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationQuerySortV2_1_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationQuerySortV2_1_0 = {
  readonly field: Query.QueryExpressionContainerV1_3_0;
  readonly direction: VisualConfigurationSortDirectionV2_1_0;
};
export const VisualConfigurationQuerySortV2_1_0: Schema.Codec<VisualConfigurationQuerySortV2_1_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(() => VisualConfigurationSortDirectionV2_1_0),
  });
export type VisualConfigurationSortDirectionV2_1_0 = "Ascending" | "Descending";
export const VisualConfigurationSortDirectionV2_1_0: Schema.Codec<VisualConfigurationSortDirectionV2_1_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationVisualQueryOptionsV2_1_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationVisualQueryOptionsV2_1_0: Schema.Codec<VisualConfigurationVisualQueryOptionsV2_1_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationProjectionStateV2_1_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationRoleProjectionV2_1_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationRoleFieldParameterV2_1_0>;
};
export const VisualConfigurationProjectionStateV2_1_0: Schema.Codec<VisualConfigurationProjectionStateV2_1_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationRoleProjectionV2_1_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationRoleFieldParameterV2_1_0),
      ),
    ),
  });
export type VisualConfigurationRoleProjectionV2_1_0 = {
  readonly field: Query.QueryExpressionContainerV1_3_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualConfigurationRoleProjectionV2_1_0: Schema.Codec<VisualConfigurationRoleProjectionV2_1_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
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
export type VisualConfigurationRoleFieldParameterV2_1_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_3_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};
export const VisualConfigurationRoleFieldParameterV2_1_0: Schema.Codec<VisualConfigurationRoleFieldParameterV2_1_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });
export type VisualConfigurationExpansionStateV2_1_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationRootExpansionStateV2_1_0;
  readonly levels?: ReadonlyArray<VisualConfigurationLevelExpansionStateV2_1_0>;
};
export const VisualConfigurationExpansionStateV2_1_0: Schema.Codec<VisualConfigurationExpansionStateV2_1_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationRootExpansionStateV2_1_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationLevelExpansionStateV2_1_0),
      ),
    ),
  });
export type VisualConfigurationRootExpansionStateV2_1_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_1_0>;
};
export const VisualConfigurationRootExpansionStateV2_1_0: Schema.Codec<VisualConfigurationRootExpansionStateV2_1_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV2_1_0),
      ),
    ),
  });
export type VisualConfigurationNodeExpansionStateV2_1_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_1_0>;
};
export const VisualConfigurationNodeExpansionStateV2_1_0: Schema.Codec<VisualConfigurationNodeExpansionStateV2_1_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV2_1_0),
      ),
    ),
  });
export type VisualConfigurationLevelExpansionStateV2_1_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationAILevelInformationV2_1_0;
};
export const VisualConfigurationLevelExpansionStateV2_1_0: Schema.Codec<VisualConfigurationLevelExpansionStateV2_1_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationAILevelInformationV2_1_0),
    ),
  });
export type VisualConfigurationAILevelInformationV2_1_0 = {
  readonly method: VisualConfigurationAIDecompositionMethodV2_1_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationAILevelInformationV2_1_0: Schema.Codec<VisualConfigurationAILevelInformationV2_1_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationAIDecompositionMethodV2_1_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationAIDecompositionMethodV2_1_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationAIDecompositionMethodV2_1_0: Schema.Codec<VisualConfigurationAIDecompositionMethodV2_1_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationVisualContainerFormattingObjectsV2_1_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationTitleV2_1_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationSubTitleV2_1_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationDividerV2_1_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationSpacingV2_1_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationBackgroundV2_1_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationPaddingV2_1_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationLockAspectV2_1_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualContainerGeneralFormattingObjectsV2_1_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationBorderV2_1_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationDropShadowV2_1_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualLinkV2_1_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualTooltipV2_1_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationStylePresetV2_1_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualHeaderV2_1_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualHeaderTooltipV2_1_0;
  }>;
};
export const VisualConfigurationVisualContainerFormattingObjectsV2_1_0: Schema.Codec<VisualConfigurationVisualContainerFormattingObjectsV2_1_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationTitleV2_1_0),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSubTitleV2_1_0),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDividerV2_1_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSpacingV2_1_0),
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
          properties: Schema.suspend(() => VisualConfigurationBackgroundV2_1_0),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationPaddingV2_1_0),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspectV2_1_0),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationVisualContainerGeneralFormattingObjectsV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationBorderV2_1_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDropShadowV2_1_0),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV2_1_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualTooltipV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationStylePresetV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderTooltipV2_1_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationTitleV2_1_0 = {
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
export const VisualConfigurationTitleV2_1_0: Schema.Codec<VisualConfigurationTitleV2_1_0> =
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
export type VisualConfigurationSubTitleV2_1_0 = {
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
export const VisualConfigurationSubTitleV2_1_0: Schema.Codec<VisualConfigurationSubTitleV2_1_0> =
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
export type VisualConfigurationDividerV2_1_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationDividerV2_1_0: Schema.Codec<VisualConfigurationDividerV2_1_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationSpacingV2_1_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationSpacingV2_1_0: Schema.Codec<VisualConfigurationSpacingV2_1_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationBackgroundV2_1_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationBackgroundV2_1_0: Schema.Codec<VisualConfigurationBackgroundV2_1_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationPaddingV2_1_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationPaddingV2_1_0: Schema.Codec<VisualConfigurationPaddingV2_1_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationLockAspectV2_1_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationLockAspectV2_1_0: Schema.Codec<VisualConfigurationLockAspectV2_1_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualContainerGeneralFormattingObjectsV2_1_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};
export const VisualConfigurationVisualContainerGeneralFormattingObjectsV2_1_0: Schema.Codec<VisualConfigurationVisualContainerGeneralFormattingObjectsV2_1_0> =
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
export type VisualConfigurationBorderV2_1_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationBorderV2_1_0: Schema.Codec<VisualConfigurationBorderV2_1_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationDropShadowV2_1_0 = {
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
export const VisualConfigurationDropShadowV2_1_0: Schema.Codec<VisualConfigurationDropShadowV2_1_0> =
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
export type VisualConfigurationVisualLinkV2_1_0 = {
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
export const VisualConfigurationVisualLinkV2_1_0: Schema.Codec<VisualConfigurationVisualLinkV2_1_0> =
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
export type VisualConfigurationVisualTooltipV2_1_0 = {
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
export const VisualConfigurationVisualTooltipV2_1_0: Schema.Codec<VisualConfigurationVisualTooltipV2_1_0> =
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
export type VisualConfigurationStylePresetV2_1_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationStylePresetV2_1_0: Schema.Codec<VisualConfigurationStylePresetV2_1_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualHeaderV2_1_0 = {
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
export const VisualConfigurationVisualHeaderV2_1_0: Schema.Codec<VisualConfigurationVisualHeaderV2_1_0> =
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
export type VisualConfigurationVisualHeaderTooltipV2_1_0 = {
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
export const VisualConfigurationVisualHeaderTooltipV2_1_0: Schema.Codec<VisualConfigurationVisualHeaderTooltipV2_1_0> =
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
export type VisualConfigurationVisualSyncGroupV2_1_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationVisualSyncGroupV2_1_0: Schema.Codec<VisualConfigurationVisualSyncGroupV2_1_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationDefinitionsV2_1_0 = {
  Query: VisualConfigurationQueryV2_1_0,
  SortDefinition: VisualConfigurationSortDefinitionV2_1_0,
  QuerySort: VisualConfigurationQuerySortV2_1_0,
  SortDirection: VisualConfigurationSortDirectionV2_1_0,
  VisualQueryOptions: VisualConfigurationVisualQueryOptionsV2_1_0,
  ProjectionState: VisualConfigurationProjectionStateV2_1_0,
  RoleProjection: VisualConfigurationRoleProjectionV2_1_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV2_1_0,
  ExpansionState: VisualConfigurationExpansionStateV2_1_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV2_1_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV2_1_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV2_1_0,
  AILevelInformation: VisualConfigurationAILevelInformationV2_1_0,
  AIDecompositionMethod: VisualConfigurationAIDecompositionMethodV2_1_0,
  VisualContainerFormattingObjects:
    VisualConfigurationVisualContainerFormattingObjectsV2_1_0,
  Title: VisualConfigurationTitleV2_1_0,
  SubTitle: VisualConfigurationSubTitleV2_1_0,
  Divider: VisualConfigurationDividerV2_1_0,
  Spacing: VisualConfigurationSpacingV2_1_0,
  Background: VisualConfigurationBackgroundV2_1_0,
  Padding: VisualConfigurationPaddingV2_1_0,
  LockAspect: VisualConfigurationLockAspectV2_1_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationVisualContainerGeneralFormattingObjectsV2_1_0,
  Border: VisualConfigurationBorderV2_1_0,
  DropShadow: VisualConfigurationDropShadowV2_1_0,
  VisualLink: VisualConfigurationVisualLinkV2_1_0,
  VisualTooltip: VisualConfigurationVisualTooltipV2_1_0,
  StylePreset: VisualConfigurationStylePresetV2_1_0,
  VisualHeader: VisualConfigurationVisualHeaderV2_1_0,
  VisualHeaderTooltip: VisualConfigurationVisualHeaderTooltipV2_1_0,
  VisualSyncGroup: VisualConfigurationVisualSyncGroupV2_1_0,
} as const;
export type VisualConfigurationV2_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV2_1_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV2_1_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV2_1_0;
  readonly syncGroup?: VisualConfigurationVisualSyncGroupV2_1_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualConfigurationV2_1_0: Schema.Codec<VisualConfigurationV2_1_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema.json",
    ),
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationQueryV2_1_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationExpansionStateV2_1_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationVisualContainerFormattingObjectsV2_1_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualSyncGroupV2_1_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedQueryV2_1_0 = {
  readonly sortDefinition?: VisualConfigurationEmbeddedSortDefinitionV2_1_0;
  readonly options?: VisualConfigurationEmbeddedVisualQueryOptionsV2_1_0;
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
      Schema.suspend(() => VisualConfigurationEmbeddedVisualQueryOptionsV2_1_0),
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
  readonly field: Query.QueryExpressionContainerV1_3_0;
  readonly direction: VisualConfigurationEmbeddedSortDirectionV2_1_0;
};
export const VisualConfigurationEmbeddedQuerySortV2_1_0: Schema.Codec<VisualConfigurationEmbeddedQuerySortV2_1_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(
      () => VisualConfigurationEmbeddedSortDirectionV2_1_0,
    ),
  });
export type VisualConfigurationEmbeddedSortDirectionV2_1_0 =
  "Ascending" | "Descending";
export const VisualConfigurationEmbeddedSortDirectionV2_1_0: Schema.Codec<VisualConfigurationEmbeddedSortDirectionV2_1_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationEmbeddedVisualQueryOptionsV2_1_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationEmbeddedVisualQueryOptionsV2_1_0: Schema.Codec<VisualConfigurationEmbeddedVisualQueryOptionsV2_1_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
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
  readonly field: Query.QueryExpressionContainerV1_3_0;
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
      () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
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
  readonly parameterExpr: Query.QueryExpressionContainerV1_3_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};
export const VisualConfigurationEmbeddedRoleFieldParameterV2_1_0: Schema.Codec<VisualConfigurationEmbeddedRoleFieldParameterV2_1_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
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
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV2_1_0>;
};
export const VisualConfigurationEmbeddedRootExpansionStateV2_1_0: Schema.Codec<VisualConfigurationEmbeddedRootExpansionStateV2_1_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
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
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV2_1_0>;
};
export const VisualConfigurationEmbeddedNodeExpansionStateV2_1_0: Schema.Codec<VisualConfigurationEmbeddedNodeExpansionStateV2_1_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
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
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationEmbeddedAILevelInformationV2_1_0;
};
export const VisualConfigurationEmbeddedLevelExpansionStateV2_1_0: Schema.Codec<VisualConfigurationEmbeddedLevelExpansionStateV2_1_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedAILevelInformationV2_1_0),
    ),
  });
export type VisualConfigurationEmbeddedAILevelInformationV2_1_0 = {
  readonly method: VisualConfigurationEmbeddedAIDecompositionMethodV2_1_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationEmbeddedAILevelInformationV2_1_0: Schema.Codec<VisualConfigurationEmbeddedAILevelInformationV2_1_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationEmbeddedAIDecompositionMethodV2_1_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedAIDecompositionMethodV2_1_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationEmbeddedAIDecompositionMethodV2_1_0: Schema.Codec<VisualConfigurationEmbeddedAIDecompositionMethodV2_1_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_1_0 =
  {
    readonly title?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedTitleV2_1_0;
    }>;
    readonly subTitle?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedSubTitleV2_1_0;
    }>;
    readonly divider?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedDividerV2_1_0;
    }>;
    readonly spacing?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedSpacingV2_1_0;
    }>;
    readonly background?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedBackgroundV2_1_0;
    }>;
    readonly padding?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedPaddingV2_1_0;
    }>;
    readonly lockAspect?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedLockAspectV2_1_0;
    }>;
    readonly general?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_1_0;
    }>;
    readonly border?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedBorderV2_1_0;
    }>;
    readonly dropShadow?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedDropShadowV2_1_0;
    }>;
    readonly visualLink?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualLinkV2_1_0;
    }>;
    readonly visualTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualTooltipV2_1_0;
    }>;
    readonly stylePreset?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedStylePresetV2_1_0;
    }>;
    readonly visualHeader?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderV2_1_0;
    }>;
    readonly visualHeaderTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderTooltipV2_1_0;
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedTitleV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSubTitleV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDividerV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSpacingV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBackgroundV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedPaddingV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedLockAspectV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBorderV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDropShadowV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualLinkV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualTooltipV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedStylePresetV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderV2_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderTooltipV2_1_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationEmbeddedTitleV2_1_0 = {
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
export const VisualConfigurationEmbeddedTitleV2_1_0: Schema.Codec<VisualConfigurationEmbeddedTitleV2_1_0> =
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
export type VisualConfigurationEmbeddedSubTitleV2_1_0 = {
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
export const VisualConfigurationEmbeddedSubTitleV2_1_0: Schema.Codec<VisualConfigurationEmbeddedSubTitleV2_1_0> =
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
export type VisualConfigurationEmbeddedDividerV2_1_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationEmbeddedDividerV2_1_0: Schema.Codec<VisualConfigurationEmbeddedDividerV2_1_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedSpacingV2_1_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationEmbeddedSpacingV2_1_0: Schema.Codec<VisualConfigurationEmbeddedSpacingV2_1_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedBackgroundV2_1_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationEmbeddedBackgroundV2_1_0: Schema.Codec<VisualConfigurationEmbeddedBackgroundV2_1_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedPaddingV2_1_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationEmbeddedPaddingV2_1_0: Schema.Codec<VisualConfigurationEmbeddedPaddingV2_1_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedLockAspectV2_1_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationEmbeddedLockAspectV2_1_0: Schema.Codec<VisualConfigurationEmbeddedLockAspectV2_1_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_1_0 =
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
export const VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_1_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_1_0> =
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
export type VisualConfigurationEmbeddedBorderV2_1_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationEmbeddedBorderV2_1_0: Schema.Codec<VisualConfigurationEmbeddedBorderV2_1_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedDropShadowV2_1_0 = {
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
export const VisualConfigurationEmbeddedDropShadowV2_1_0: Schema.Codec<VisualConfigurationEmbeddedDropShadowV2_1_0> =
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
export type VisualConfigurationEmbeddedVisualLinkV2_1_0 = {
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
export const VisualConfigurationEmbeddedVisualLinkV2_1_0: Schema.Codec<VisualConfigurationEmbeddedVisualLinkV2_1_0> =
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
export type VisualConfigurationEmbeddedVisualTooltipV2_1_0 = {
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
export const VisualConfigurationEmbeddedVisualTooltipV2_1_0: Schema.Codec<VisualConfigurationEmbeddedVisualTooltipV2_1_0> =
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
export type VisualConfigurationEmbeddedStylePresetV2_1_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationEmbeddedStylePresetV2_1_0: Schema.Codec<VisualConfigurationEmbeddedStylePresetV2_1_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualHeaderV2_1_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderV2_1_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderV2_1_0> =
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
export type VisualConfigurationEmbeddedVisualHeaderTooltipV2_1_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderTooltipV2_1_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderTooltipV2_1_0> =
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
export type VisualConfigurationEmbeddedVisualSyncGroupV2_1_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationEmbeddedVisualSyncGroupV2_1_0: Schema.Codec<VisualConfigurationEmbeddedVisualSyncGroupV2_1_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationEmbeddedDefinitionsV2_1_0 = {
  Query: VisualConfigurationEmbeddedQueryV2_1_0,
  SortDefinition: VisualConfigurationEmbeddedSortDefinitionV2_1_0,
  QuerySort: VisualConfigurationEmbeddedQuerySortV2_1_0,
  SortDirection: VisualConfigurationEmbeddedSortDirectionV2_1_0,
  VisualQueryOptions: VisualConfigurationEmbeddedVisualQueryOptionsV2_1_0,
  ProjectionState: VisualConfigurationEmbeddedProjectionStateV2_1_0,
  RoleProjection: VisualConfigurationEmbeddedRoleProjectionV2_1_0,
  RoleFieldParameter: VisualConfigurationEmbeddedRoleFieldParameterV2_1_0,
  ExpansionState: VisualConfigurationEmbeddedExpansionStateV2_1_0,
  RootExpansionState: VisualConfigurationEmbeddedRootExpansionStateV2_1_0,
  NodeExpansionState: VisualConfigurationEmbeddedNodeExpansionStateV2_1_0,
  LevelExpansionState: VisualConfigurationEmbeddedLevelExpansionStateV2_1_0,
  AILevelInformation: VisualConfigurationEmbeddedAILevelInformationV2_1_0,
  AIDecompositionMethod: VisualConfigurationEmbeddedAIDecompositionMethodV2_1_0,
  VisualContainerFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_1_0,
  Title: VisualConfigurationEmbeddedTitleV2_1_0,
  SubTitle: VisualConfigurationEmbeddedSubTitleV2_1_0,
  Divider: VisualConfigurationEmbeddedDividerV2_1_0,
  Spacing: VisualConfigurationEmbeddedSpacingV2_1_0,
  Background: VisualConfigurationEmbeddedBackgroundV2_1_0,
  Padding: VisualConfigurationEmbeddedPaddingV2_1_0,
  LockAspect: VisualConfigurationEmbeddedLockAspectV2_1_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_1_0,
  Border: VisualConfigurationEmbeddedBorderV2_1_0,
  DropShadow: VisualConfigurationEmbeddedDropShadowV2_1_0,
  VisualLink: VisualConfigurationEmbeddedVisualLinkV2_1_0,
  VisualTooltip: VisualConfigurationEmbeddedVisualTooltipV2_1_0,
  StylePreset: VisualConfigurationEmbeddedStylePresetV2_1_0,
  VisualHeader: VisualConfigurationEmbeddedVisualHeaderV2_1_0,
  VisualHeaderTooltip: VisualConfigurationEmbeddedVisualHeaderTooltipV2_1_0,
  VisualSyncGroup: VisualConfigurationEmbeddedVisualSyncGroupV2_1_0,
} as const;
export type VisualConfigurationEmbeddedV2_1_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationEmbeddedQueryV2_1_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationEmbeddedExpansionStateV2_1_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_1_0;
  readonly syncGroup?: VisualConfigurationEmbeddedVisualSyncGroupV2_1_0;
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
          Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_1_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualSyncGroupV2_1_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationQueryV2_2_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV2_2_0;
  readonly options?: VisualConfigurationVisualQueryOptionsV2_2_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationProjectionStateV2_2_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualConfigurationQueryV2_2_0: Schema.Codec<VisualConfigurationQueryV2_2_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationSortDefinitionV2_2_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualQueryOptionsV2_2_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationProjectionStateV2_2_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationSortDefinitionV2_2_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationQuerySortV2_2_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualConfigurationSortDefinitionV2_2_0: Schema.Codec<VisualConfigurationSortDefinitionV2_2_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationQuerySortV2_2_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationQuerySortV2_2_0 = {
  readonly field: Query.QueryExpressionContainerV1_3_0;
  readonly direction: VisualConfigurationSortDirectionV2_2_0;
};
export const VisualConfigurationQuerySortV2_2_0: Schema.Codec<VisualConfigurationQuerySortV2_2_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(() => VisualConfigurationSortDirectionV2_2_0),
  });
export type VisualConfigurationSortDirectionV2_2_0 = "Ascending" | "Descending";
export const VisualConfigurationSortDirectionV2_2_0: Schema.Codec<VisualConfigurationSortDirectionV2_2_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationVisualQueryOptionsV2_2_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationVisualQueryOptionsV2_2_0: Schema.Codec<VisualConfigurationVisualQueryOptionsV2_2_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationProjectionStateV2_2_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationRoleProjectionV2_2_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationRoleFieldParameterV2_2_0>;
};
export const VisualConfigurationProjectionStateV2_2_0: Schema.Codec<VisualConfigurationProjectionStateV2_2_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationRoleProjectionV2_2_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationRoleFieldParameterV2_2_0),
      ),
    ),
  });
export type VisualConfigurationRoleProjectionV2_2_0 = {
  readonly field: Query.QueryExpressionContainerV1_3_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualConfigurationRoleProjectionV2_2_0: Schema.Codec<VisualConfigurationRoleProjectionV2_2_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
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
export type VisualConfigurationRoleFieldParameterV2_2_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_3_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};
export const VisualConfigurationRoleFieldParameterV2_2_0: Schema.Codec<VisualConfigurationRoleFieldParameterV2_2_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });
export type VisualConfigurationExpansionStateV2_2_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationRootExpansionStateV2_2_0;
  readonly levels?: ReadonlyArray<VisualConfigurationLevelExpansionStateV2_2_0>;
};
export const VisualConfigurationExpansionStateV2_2_0: Schema.Codec<VisualConfigurationExpansionStateV2_2_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationRootExpansionStateV2_2_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationLevelExpansionStateV2_2_0),
      ),
    ),
  });
export type VisualConfigurationRootExpansionStateV2_2_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_2_0>;
};
export const VisualConfigurationRootExpansionStateV2_2_0: Schema.Codec<VisualConfigurationRootExpansionStateV2_2_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV2_2_0),
      ),
    ),
  });
export type VisualConfigurationNodeExpansionStateV2_2_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_2_0>;
};
export const VisualConfigurationNodeExpansionStateV2_2_0: Schema.Codec<VisualConfigurationNodeExpansionStateV2_2_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV2_2_0),
      ),
    ),
  });
export type VisualConfigurationLevelExpansionStateV2_2_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationAILevelInformationV2_2_0;
};
export const VisualConfigurationLevelExpansionStateV2_2_0: Schema.Codec<VisualConfigurationLevelExpansionStateV2_2_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationAILevelInformationV2_2_0),
    ),
  });
export type VisualConfigurationAILevelInformationV2_2_0 = {
  readonly method: VisualConfigurationAIDecompositionMethodV2_2_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationAILevelInformationV2_2_0: Schema.Codec<VisualConfigurationAILevelInformationV2_2_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationAIDecompositionMethodV2_2_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationAIDecompositionMethodV2_2_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationAIDecompositionMethodV2_2_0: Schema.Codec<VisualConfigurationAIDecompositionMethodV2_2_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationVisualContainerFormattingObjectsV2_2_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationTitleV2_2_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationSubTitleV2_2_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationDividerV2_2_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationSpacingV2_2_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationBackgroundV2_2_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationPaddingV2_2_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationLockAspectV2_2_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualContainerGeneralFormattingObjectsV2_2_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationBorderV2_2_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationDropShadowV2_2_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualLinkV2_2_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualTooltipV2_2_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationStylePresetV2_2_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualHeaderV2_2_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualConfigurationVisualHeaderTooltipV2_2_0;
  }>;
};
export const VisualConfigurationVisualContainerFormattingObjectsV2_2_0: Schema.Codec<VisualConfigurationVisualContainerFormattingObjectsV2_2_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationTitleV2_2_0),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSubTitleV2_2_0),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDividerV2_2_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSpacingV2_2_0),
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
          properties: Schema.suspend(() => VisualConfigurationBackgroundV2_2_0),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationPaddingV2_2_0),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspectV2_2_0),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationVisualContainerGeneralFormattingObjectsV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationBorderV2_2_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDropShadowV2_2_0),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV2_2_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualTooltipV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationStylePresetV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderTooltipV2_2_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationTitleV2_2_0 = {
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
export const VisualConfigurationTitleV2_2_0: Schema.Codec<VisualConfigurationTitleV2_2_0> =
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
export type VisualConfigurationSubTitleV2_2_0 = {
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
export const VisualConfigurationSubTitleV2_2_0: Schema.Codec<VisualConfigurationSubTitleV2_2_0> =
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
export type VisualConfigurationDividerV2_2_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationDividerV2_2_0: Schema.Codec<VisualConfigurationDividerV2_2_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationSpacingV2_2_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationSpacingV2_2_0: Schema.Codec<VisualConfigurationSpacingV2_2_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationBackgroundV2_2_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationBackgroundV2_2_0: Schema.Codec<VisualConfigurationBackgroundV2_2_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationPaddingV2_2_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationPaddingV2_2_0: Schema.Codec<VisualConfigurationPaddingV2_2_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationLockAspectV2_2_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationLockAspectV2_2_0: Schema.Codec<VisualConfigurationLockAspectV2_2_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualContainerGeneralFormattingObjectsV2_2_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};
export const VisualConfigurationVisualContainerGeneralFormattingObjectsV2_2_0: Schema.Codec<VisualConfigurationVisualContainerGeneralFormattingObjectsV2_2_0> =
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
export type VisualConfigurationBorderV2_2_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationBorderV2_2_0: Schema.Codec<VisualConfigurationBorderV2_2_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationDropShadowV2_2_0 = {
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
export const VisualConfigurationDropShadowV2_2_0: Schema.Codec<VisualConfigurationDropShadowV2_2_0> =
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
export type VisualConfigurationVisualTooltipV2_2_0 = {
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
export const VisualConfigurationVisualTooltipV2_2_0: Schema.Codec<VisualConfigurationVisualTooltipV2_2_0> =
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
export type VisualConfigurationStylePresetV2_2_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationStylePresetV2_2_0: Schema.Codec<VisualConfigurationStylePresetV2_2_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualHeaderV2_2_0 = {
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
export const VisualConfigurationVisualHeaderV2_2_0: Schema.Codec<VisualConfigurationVisualHeaderV2_2_0> =
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
export type VisualConfigurationVisualHeaderTooltipV2_2_0 = {
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
export const VisualConfigurationVisualHeaderTooltipV2_2_0: Schema.Codec<VisualConfigurationVisualHeaderTooltipV2_2_0> =
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
export type VisualConfigurationVisualSyncGroupV2_2_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationVisualSyncGroupV2_2_0: Schema.Codec<VisualConfigurationVisualSyncGroupV2_2_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationDefinitionsV2_2_0 = {
  Query: VisualConfigurationQueryV2_2_0,
  SortDefinition: VisualConfigurationSortDefinitionV2_2_0,
  QuerySort: VisualConfigurationQuerySortV2_2_0,
  SortDirection: VisualConfigurationSortDirectionV2_2_0,
  VisualQueryOptions: VisualConfigurationVisualQueryOptionsV2_2_0,
  ProjectionState: VisualConfigurationProjectionStateV2_2_0,
  RoleProjection: VisualConfigurationRoleProjectionV2_2_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV2_2_0,
  ExpansionState: VisualConfigurationExpansionStateV2_2_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV2_2_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV2_2_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV2_2_0,
  AILevelInformation: VisualConfigurationAILevelInformationV2_2_0,
  AIDecompositionMethod: VisualConfigurationAIDecompositionMethodV2_2_0,
  VisualContainerFormattingObjects:
    VisualConfigurationVisualContainerFormattingObjectsV2_2_0,
  Title: VisualConfigurationTitleV2_2_0,
  SubTitle: VisualConfigurationSubTitleV2_2_0,
  Divider: VisualConfigurationDividerV2_2_0,
  Spacing: VisualConfigurationSpacingV2_2_0,
  Background: VisualConfigurationBackgroundV2_2_0,
  Padding: VisualConfigurationPaddingV2_2_0,
  LockAspect: VisualConfigurationLockAspectV2_2_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationVisualContainerGeneralFormattingObjectsV2_2_0,
  Border: VisualConfigurationBorderV2_2_0,
  DropShadow: VisualConfigurationDropShadowV2_2_0,
  VisualLink: VisualConfigurationVisualLinkV2_2_0,
  VisualTooltip: VisualConfigurationVisualTooltipV2_2_0,
  StylePreset: VisualConfigurationStylePresetV2_2_0,
  VisualHeader: VisualConfigurationVisualHeaderV2_2_0,
  VisualHeaderTooltip: VisualConfigurationVisualHeaderTooltipV2_2_0,
  VisualSyncGroup: VisualConfigurationVisualSyncGroupV2_2_0,
} as const;
export type VisualConfigurationV2_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.2.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV2_2_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV2_2_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV2_2_0;
  readonly syncGroup?: VisualConfigurationVisualSyncGroupV2_2_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualConfigurationV2_2_0: Schema.Codec<VisualConfigurationV2_2_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.2.0/schema.json",
    ),
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationQueryV2_2_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationExpansionStateV2_2_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationVisualContainerFormattingObjectsV2_2_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualSyncGroupV2_2_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedQueryV2_2_0 = {
  readonly sortDefinition?: VisualConfigurationEmbeddedSortDefinitionV2_2_0;
  readonly options?: VisualConfigurationEmbeddedVisualQueryOptionsV2_2_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationEmbeddedProjectionStateV2_2_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualConfigurationEmbeddedQueryV2_2_0: Schema.Codec<VisualConfigurationEmbeddedQueryV2_2_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedSortDefinitionV2_2_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualQueryOptionsV2_2_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationEmbeddedProjectionStateV2_2_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedSortDefinitionV2_2_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationEmbeddedQuerySortV2_2_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualConfigurationEmbeddedSortDefinitionV2_2_0: Schema.Codec<VisualConfigurationEmbeddedSortDefinitionV2_2_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedQuerySortV2_2_0),
      ),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedQuerySortV2_2_0 = {
  readonly field: Query.QueryExpressionContainerV1_3_0;
  readonly direction: VisualConfigurationEmbeddedSortDirectionV2_2_0;
};
export const VisualConfigurationEmbeddedQuerySortV2_2_0: Schema.Codec<VisualConfigurationEmbeddedQuerySortV2_2_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(
      () => VisualConfigurationEmbeddedSortDirectionV2_2_0,
    ),
  });
export type VisualConfigurationEmbeddedSortDirectionV2_2_0 =
  "Ascending" | "Descending";
export const VisualConfigurationEmbeddedSortDirectionV2_2_0: Schema.Codec<VisualConfigurationEmbeddedSortDirectionV2_2_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationEmbeddedVisualQueryOptionsV2_2_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationEmbeddedVisualQueryOptionsV2_2_0: Schema.Codec<VisualConfigurationEmbeddedVisualQueryOptionsV2_2_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedProjectionStateV2_2_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationEmbeddedRoleProjectionV2_2_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationEmbeddedRoleFieldParameterV2_2_0>;
};
export const VisualConfigurationEmbeddedProjectionStateV2_2_0: Schema.Codec<VisualConfigurationEmbeddedProjectionStateV2_2_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationEmbeddedRoleProjectionV2_2_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedRoleFieldParameterV2_2_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedRoleProjectionV2_2_0 = {
  readonly field: Query.QueryExpressionContainerV1_3_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualConfigurationEmbeddedRoleProjectionV2_2_0: Schema.Codec<VisualConfigurationEmbeddedRoleProjectionV2_2_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
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
export type VisualConfigurationEmbeddedRoleFieldParameterV2_2_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_3_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};
export const VisualConfigurationEmbeddedRoleFieldParameterV2_2_0: Schema.Codec<VisualConfigurationEmbeddedRoleFieldParameterV2_2_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });
export type VisualConfigurationEmbeddedExpansionStateV2_2_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationEmbeddedRootExpansionStateV2_2_0;
  readonly levels?: ReadonlyArray<VisualConfigurationEmbeddedLevelExpansionStateV2_2_0>;
};
export const VisualConfigurationEmbeddedExpansionStateV2_2_0: Schema.Codec<VisualConfigurationEmbeddedExpansionStateV2_2_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedRootExpansionStateV2_2_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedLevelExpansionStateV2_2_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedRootExpansionStateV2_2_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV2_2_0>;
};
export const VisualConfigurationEmbeddedRootExpansionStateV2_2_0: Schema.Codec<VisualConfigurationEmbeddedRootExpansionStateV2_2_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV2_2_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedNodeExpansionStateV2_2_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV2_2_0>;
};
export const VisualConfigurationEmbeddedNodeExpansionStateV2_2_0: Schema.Codec<VisualConfigurationEmbeddedNodeExpansionStateV2_2_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => VisualConfigurationEmbeddedNodeExpansionStateV2_2_0,
        ),
      ),
    ),
  });
export type VisualConfigurationEmbeddedLevelExpansionStateV2_2_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_3_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationEmbeddedAILevelInformationV2_2_0;
};
export const VisualConfigurationEmbeddedLevelExpansionStateV2_2_0: Schema.Codec<VisualConfigurationEmbeddedLevelExpansionStateV2_2_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_3_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedAILevelInformationV2_2_0),
    ),
  });
export type VisualConfigurationEmbeddedAILevelInformationV2_2_0 = {
  readonly method: VisualConfigurationEmbeddedAIDecompositionMethodV2_2_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationEmbeddedAILevelInformationV2_2_0: Schema.Codec<VisualConfigurationEmbeddedAILevelInformationV2_2_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationEmbeddedAIDecompositionMethodV2_2_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedAIDecompositionMethodV2_2_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationEmbeddedAIDecompositionMethodV2_2_0: Schema.Codec<VisualConfigurationEmbeddedAIDecompositionMethodV2_2_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_2_0 =
  {
    readonly title?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedTitleV2_2_0;
    }>;
    readonly subTitle?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedSubTitleV2_2_0;
    }>;
    readonly divider?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedDividerV2_2_0;
    }>;
    readonly spacing?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedSpacingV2_2_0;
    }>;
    readonly background?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedBackgroundV2_2_0;
    }>;
    readonly padding?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedPaddingV2_2_0;
    }>;
    readonly lockAspect?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedLockAspectV2_2_0;
    }>;
    readonly general?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_2_0;
    }>;
    readonly border?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedBorderV2_2_0;
    }>;
    readonly dropShadow?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedDropShadowV2_2_0;
    }>;
    readonly visualLink?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualLinkV2_2_0;
    }>;
    readonly visualTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualTooltipV2_2_0;
    }>;
    readonly stylePreset?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedStylePresetV2_2_0;
    }>;
    readonly visualHeader?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderV2_2_0;
    }>;
    readonly visualHeaderTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderTooltipV2_2_0;
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedTitleV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSubTitleV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDividerV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSpacingV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBackgroundV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedPaddingV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedLockAspectV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBorderV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDropShadowV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualTooltipV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedStylePresetV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderV2_2_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderTooltipV2_2_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationEmbeddedTitleV2_2_0 = {
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
export const VisualConfigurationEmbeddedTitleV2_2_0: Schema.Codec<VisualConfigurationEmbeddedTitleV2_2_0> =
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
export type VisualConfigurationEmbeddedSubTitleV2_2_0 = {
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
export const VisualConfigurationEmbeddedSubTitleV2_2_0: Schema.Codec<VisualConfigurationEmbeddedSubTitleV2_2_0> =
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
export type VisualConfigurationEmbeddedDividerV2_2_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationEmbeddedDividerV2_2_0: Schema.Codec<VisualConfigurationEmbeddedDividerV2_2_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedSpacingV2_2_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationEmbeddedSpacingV2_2_0: Schema.Codec<VisualConfigurationEmbeddedSpacingV2_2_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedBackgroundV2_2_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationEmbeddedBackgroundV2_2_0: Schema.Codec<VisualConfigurationEmbeddedBackgroundV2_2_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedPaddingV2_2_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationEmbeddedPaddingV2_2_0: Schema.Codec<VisualConfigurationEmbeddedPaddingV2_2_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedLockAspectV2_2_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationEmbeddedLockAspectV2_2_0: Schema.Codec<VisualConfigurationEmbeddedLockAspectV2_2_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_2_0 =
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
export const VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_2_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_2_0> =
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
export type VisualConfigurationEmbeddedBorderV2_2_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationEmbeddedBorderV2_2_0: Schema.Codec<VisualConfigurationEmbeddedBorderV2_2_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedDropShadowV2_2_0 = {
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
export const VisualConfigurationEmbeddedDropShadowV2_2_0: Schema.Codec<VisualConfigurationEmbeddedDropShadowV2_2_0> =
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
export type VisualConfigurationEmbeddedVisualTooltipV2_2_0 = {
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
export const VisualConfigurationEmbeddedVisualTooltipV2_2_0: Schema.Codec<VisualConfigurationEmbeddedVisualTooltipV2_2_0> =
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
export type VisualConfigurationEmbeddedStylePresetV2_2_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationEmbeddedStylePresetV2_2_0: Schema.Codec<VisualConfigurationEmbeddedStylePresetV2_2_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualHeaderV2_2_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderV2_2_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderV2_2_0> =
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
export type VisualConfigurationEmbeddedVisualHeaderTooltipV2_2_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderTooltipV2_2_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderTooltipV2_2_0> =
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
export type VisualConfigurationEmbeddedVisualSyncGroupV2_2_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationEmbeddedVisualSyncGroupV2_2_0: Schema.Codec<VisualConfigurationEmbeddedVisualSyncGroupV2_2_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationEmbeddedDefinitionsV2_2_0 = {
  Query: VisualConfigurationEmbeddedQueryV2_2_0,
  SortDefinition: VisualConfigurationEmbeddedSortDefinitionV2_2_0,
  QuerySort: VisualConfigurationEmbeddedQuerySortV2_2_0,
  SortDirection: VisualConfigurationEmbeddedSortDirectionV2_2_0,
  VisualQueryOptions: VisualConfigurationEmbeddedVisualQueryOptionsV2_2_0,
  ProjectionState: VisualConfigurationEmbeddedProjectionStateV2_2_0,
  RoleProjection: VisualConfigurationEmbeddedRoleProjectionV2_2_0,
  RoleFieldParameter: VisualConfigurationEmbeddedRoleFieldParameterV2_2_0,
  ExpansionState: VisualConfigurationEmbeddedExpansionStateV2_2_0,
  RootExpansionState: VisualConfigurationEmbeddedRootExpansionStateV2_2_0,
  NodeExpansionState: VisualConfigurationEmbeddedNodeExpansionStateV2_2_0,
  LevelExpansionState: VisualConfigurationEmbeddedLevelExpansionStateV2_2_0,
  AILevelInformation: VisualConfigurationEmbeddedAILevelInformationV2_2_0,
  AIDecompositionMethod: VisualConfigurationEmbeddedAIDecompositionMethodV2_2_0,
  VisualContainerFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_2_0,
  Title: VisualConfigurationEmbeddedTitleV2_2_0,
  SubTitle: VisualConfigurationEmbeddedSubTitleV2_2_0,
  Divider: VisualConfigurationEmbeddedDividerV2_2_0,
  Spacing: VisualConfigurationEmbeddedSpacingV2_2_0,
  Background: VisualConfigurationEmbeddedBackgroundV2_2_0,
  Padding: VisualConfigurationEmbeddedPaddingV2_2_0,
  LockAspect: VisualConfigurationEmbeddedLockAspectV2_2_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_2_0,
  Border: VisualConfigurationEmbeddedBorderV2_2_0,
  DropShadow: VisualConfigurationEmbeddedDropShadowV2_2_0,
  VisualLink: VisualConfigurationEmbeddedVisualLinkV2_2_0,
  VisualTooltip: VisualConfigurationEmbeddedVisualTooltipV2_2_0,
  StylePreset: VisualConfigurationEmbeddedStylePresetV2_2_0,
  VisualHeader: VisualConfigurationEmbeddedVisualHeaderV2_2_0,
  VisualHeaderTooltip: VisualConfigurationEmbeddedVisualHeaderTooltipV2_2_0,
  VisualSyncGroup: VisualConfigurationEmbeddedVisualSyncGroupV2_2_0,
} as const;
export type VisualConfigurationEmbeddedV2_2_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationEmbeddedQueryV2_2_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationEmbeddedExpansionStateV2_2_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_2_0;
  readonly syncGroup?: VisualConfigurationEmbeddedVisualSyncGroupV2_2_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualConfigurationEmbeddedV2_2_0: Schema.Codec<VisualConfigurationEmbeddedV2_2_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedQueryV2_2_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationEmbeddedExpansionStateV2_2_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_4_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_2_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualSyncGroupV2_2_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationQueryV2_3_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV2_3_0;
  readonly options?: VisualConfigurationVisualQueryOptionsV2_3_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationProjectionStateV2_3_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualConfigurationQueryV2_3_0: Schema.Codec<VisualConfigurationQueryV2_3_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationSortDefinitionV2_3_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualQueryOptionsV2_3_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualConfigurationProjectionStateV2_3_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationSortDefinitionV2_3_0 = {
  readonly sort?: ReadonlyArray<VisualConfigurationQuerySortV2_3_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualConfigurationSortDefinitionV2_3_0: Schema.Codec<VisualConfigurationSortDefinitionV2_3_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationQuerySortV2_3_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationQuerySortV2_3_0 = {
  readonly field: Query.QueryExpressionContainerV1_4_0;
  readonly direction: VisualConfigurationSortDirectionV2_3_0;
};
export const VisualConfigurationQuerySortV2_3_0: Schema.Codec<VisualConfigurationQuerySortV2_3_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(() => VisualConfigurationSortDirectionV2_3_0),
  });
export type VisualConfigurationSortDirectionV2_3_0 = "Ascending" | "Descending";
export const VisualConfigurationSortDirectionV2_3_0: Schema.Codec<VisualConfigurationSortDirectionV2_3_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationVisualQueryOptionsV2_3_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationVisualQueryOptionsV2_3_0: Schema.Codec<VisualConfigurationVisualQueryOptionsV2_3_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationProjectionStateV2_3_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationRoleProjectionV2_3_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationRoleFieldParameterV2_3_0>;
};
export const VisualConfigurationProjectionStateV2_3_0: Schema.Codec<VisualConfigurationProjectionStateV2_3_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualConfigurationRoleProjectionV2_3_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationRoleFieldParameterV2_3_0),
      ),
    ),
  });
export type VisualConfigurationRoleProjectionV2_3_0 = {
  readonly field: Query.QueryExpressionContainerV1_4_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualConfigurationRoleProjectionV2_3_0: Schema.Codec<VisualConfigurationRoleProjectionV2_3_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer,
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
export type VisualConfigurationRoleFieldParameterV2_3_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_4_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};
export const VisualConfigurationRoleFieldParameterV2_3_0: Schema.Codec<VisualConfigurationRoleFieldParameterV2_3_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
    sortDirection: Schema.optionalKey(
      Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]),
    ),
  });
export type VisualConfigurationExpansionStateV2_3_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualConfigurationRootExpansionStateV2_3_0;
  readonly levels?: ReadonlyArray<VisualConfigurationLevelExpansionStateV2_3_0>;
};
export const VisualConfigurationExpansionStateV2_3_0: Schema.Codec<VisualConfigurationExpansionStateV2_3_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationRootExpansionStateV2_3_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationLevelExpansionStateV2_3_0),
      ),
    ),
  });
export type VisualConfigurationRootExpansionStateV2_3_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_4_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_3_0>;
};
export const VisualConfigurationRootExpansionStateV2_3_0: Schema.Codec<VisualConfigurationRootExpansionStateV2_3_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV2_3_0),
      ),
    ),
  });
export type VisualConfigurationNodeExpansionStateV2_3_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_4_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_3_0>;
};
export const VisualConfigurationNodeExpansionStateV2_3_0: Schema.Codec<VisualConfigurationNodeExpansionStateV2_3_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV2_3_0),
      ),
    ),
  });
export type VisualConfigurationLevelExpansionStateV2_3_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_4_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationAILevelInformationV2_3_0;
};
export const VisualConfigurationLevelExpansionStateV2_3_0: Schema.Codec<VisualConfigurationLevelExpansionStateV2_3_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationAILevelInformationV2_3_0),
    ),
  });
export type VisualConfigurationAILevelInformationV2_3_0 = {
  readonly method: VisualConfigurationAIDecompositionMethodV2_3_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationAILevelInformationV2_3_0: Schema.Codec<VisualConfigurationAILevelInformationV2_3_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationAIDecompositionMethodV2_3_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationAIDecompositionMethodV2_3_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationAIDecompositionMethodV2_3_0: Schema.Codec<VisualConfigurationAIDecompositionMethodV2_3_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationVisualContainerFormattingObjectsV2_3_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationTitleV2_3_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationSubTitleV2_3_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationDividerV2_3_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationSpacingV2_3_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationBackgroundV2_3_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationPaddingV2_3_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationLockAspectV2_3_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationVisualContainerGeneralFormattingObjectsV2_3_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationBorderV2_3_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationDropShadowV2_3_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationVisualLinkV2_3_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationVisualTooltipV2_3_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationStylePresetV2_3_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationVisualHeaderV2_3_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationVisualHeaderTooltipV2_3_0;
  }>;
};
export const VisualConfigurationVisualContainerFormattingObjectsV2_3_0: Schema.Codec<VisualConfigurationVisualContainerFormattingObjectsV2_3_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationTitleV2_3_0),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSubTitleV2_3_0),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDividerV2_3_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationSpacingV2_3_0),
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
          properties: Schema.suspend(() => VisualConfigurationBackgroundV2_3_0),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationPaddingV2_3_0),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspectV2_3_0),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationVisualContainerGeneralFormattingObjectsV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationBorderV2_3_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationDropShadowV2_3_0),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV2_3_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualTooltipV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationStylePresetV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualHeaderTooltipV2_3_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationTitleV2_3_0 = {
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
export const VisualConfigurationTitleV2_3_0: Schema.Codec<VisualConfigurationTitleV2_3_0> =
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
export type VisualConfigurationSubTitleV2_3_0 = {
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
export const VisualConfigurationSubTitleV2_3_0: Schema.Codec<VisualConfigurationSubTitleV2_3_0> =
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
export type VisualConfigurationDividerV2_3_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationDividerV2_3_0: Schema.Codec<VisualConfigurationDividerV2_3_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationSpacingV2_3_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationSpacingV2_3_0: Schema.Codec<VisualConfigurationSpacingV2_3_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationBackgroundV2_3_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationBackgroundV2_3_0: Schema.Codec<VisualConfigurationBackgroundV2_3_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationPaddingV2_3_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationPaddingV2_3_0: Schema.Codec<VisualConfigurationPaddingV2_3_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationLockAspectV2_3_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationLockAspectV2_3_0: Schema.Codec<VisualConfigurationLockAspectV2_3_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualContainerGeneralFormattingObjectsV2_3_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};
export const VisualConfigurationVisualContainerGeneralFormattingObjectsV2_3_0: Schema.Codec<VisualConfigurationVisualContainerGeneralFormattingObjectsV2_3_0> =
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
export type VisualConfigurationBorderV2_3_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationBorderV2_3_0: Schema.Codec<VisualConfigurationBorderV2_3_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationDropShadowV2_3_0 = {
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
export const VisualConfigurationDropShadowV2_3_0: Schema.Codec<VisualConfigurationDropShadowV2_3_0> =
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
export type VisualConfigurationVisualLinkV2_3_0 = {
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
export const VisualConfigurationVisualLinkV2_3_0: Schema.Codec<VisualConfigurationVisualLinkV2_3_0> =
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
export type VisualConfigurationVisualTooltipV2_3_0 = {
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
export const VisualConfigurationVisualTooltipV2_3_0: Schema.Codec<VisualConfigurationVisualTooltipV2_3_0> =
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
export type VisualConfigurationStylePresetV2_3_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationStylePresetV2_3_0: Schema.Codec<VisualConfigurationStylePresetV2_3_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationVisualHeaderV2_3_0 = {
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
export const VisualConfigurationVisualHeaderV2_3_0: Schema.Codec<VisualConfigurationVisualHeaderV2_3_0> =
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
export type VisualConfigurationVisualHeaderTooltipV2_3_0 = {
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
export const VisualConfigurationVisualHeaderTooltipV2_3_0: Schema.Codec<VisualConfigurationVisualHeaderTooltipV2_3_0> =
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
export type VisualConfigurationVisualSyncGroupV2_3_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationVisualSyncGroupV2_3_0: Schema.Codec<VisualConfigurationVisualSyncGroupV2_3_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationDefinitionsV2_3_0 = {
  Query: VisualConfigurationQueryV2_3_0,
  SortDefinition: VisualConfigurationSortDefinitionV2_3_0,
  QuerySort: VisualConfigurationQuerySortV2_3_0,
  SortDirection: VisualConfigurationSortDirectionV2_3_0,
  VisualQueryOptions: VisualConfigurationVisualQueryOptionsV2_3_0,
  ProjectionState: VisualConfigurationProjectionStateV2_3_0,
  RoleProjection: VisualConfigurationRoleProjectionV2_3_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV2_3_0,
  ExpansionState: VisualConfigurationExpansionStateV2_3_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV2_3_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV2_3_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV2_3_0,
  AILevelInformation: VisualConfigurationAILevelInformationV2_3_0,
  AIDecompositionMethod: VisualConfigurationAIDecompositionMethodV2_3_0,
  VisualContainerFormattingObjects:
    VisualConfigurationVisualContainerFormattingObjectsV2_3_0,
  Title: VisualConfigurationTitleV2_3_0,
  SubTitle: VisualConfigurationSubTitleV2_3_0,
  Divider: VisualConfigurationDividerV2_3_0,
  Spacing: VisualConfigurationSpacingV2_3_0,
  Background: VisualConfigurationBackgroundV2_3_0,
  Padding: VisualConfigurationPaddingV2_3_0,
  LockAspect: VisualConfigurationLockAspectV2_3_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationVisualContainerGeneralFormattingObjectsV2_3_0,
  Border: VisualConfigurationBorderV2_3_0,
  DropShadow: VisualConfigurationDropShadowV2_3_0,
  VisualLink: VisualConfigurationVisualLinkV2_3_0,
  VisualTooltip: VisualConfigurationVisualTooltipV2_3_0,
  StylePreset: VisualConfigurationStylePresetV2_3_0,
  VisualHeader: VisualConfigurationVisualHeaderV2_3_0,
  VisualHeaderTooltip: VisualConfigurationVisualHeaderTooltipV2_3_0,
  VisualSyncGroup: VisualConfigurationVisualSyncGroupV2_3_0,
} as const;
export type VisualConfigurationV2_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.3.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV2_3_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV2_3_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV2_3_0;
  readonly syncGroup?: VisualConfigurationVisualSyncGroupV2_3_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualConfigurationV2_3_0: Schema.Codec<VisualConfigurationV2_3_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.3.0/schema.json",
    ),
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationQueryV2_3_0),
    ),
    expansionStates: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualConfigurationExpansionStateV2_3_0),
      ),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationVisualContainerFormattingObjectsV2_3_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualSyncGroupV2_3_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedQueryV2_3_0 = {
  readonly sortDefinition?: VisualConfigurationEmbeddedSortDefinitionV2_3_0;
  readonly options?: VisualConfigurationEmbeddedVisualQueryOptionsV2_3_0;
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
      Schema.suspend(() => VisualConfigurationEmbeddedVisualQueryOptionsV2_3_0),
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
  readonly field: Query.QueryExpressionContainerV1_4_0;
  readonly direction: VisualConfigurationEmbeddedSortDirectionV2_3_0;
};
export const VisualConfigurationEmbeddedQuerySortV2_3_0: Schema.Codec<VisualConfigurationEmbeddedQuerySortV2_3_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(
      () => VisualConfigurationEmbeddedSortDirectionV2_3_0,
    ),
  });
export type VisualConfigurationEmbeddedSortDirectionV2_3_0 =
  "Ascending" | "Descending";
export const VisualConfigurationEmbeddedSortDirectionV2_3_0: Schema.Codec<VisualConfigurationEmbeddedSortDirectionV2_3_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualConfigurationEmbeddedVisualQueryOptionsV2_3_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualConfigurationEmbeddedVisualQueryOptionsV2_3_0: Schema.Codec<VisualConfigurationEmbeddedVisualQueryOptionsV2_3_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
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
  readonly field: Query.QueryExpressionContainerV1_4_0;
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
      () => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer,
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
  readonly parameterExpr: Query.QueryExpressionContainerV1_4_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};
export const VisualConfigurationEmbeddedRoleFieldParameterV2_3_0: Schema.Codec<VisualConfigurationEmbeddedRoleFieldParameterV2_3_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer,
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
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_4_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV2_3_0>;
};
export const VisualConfigurationEmbeddedRootExpansionStateV2_3_0: Schema.Codec<VisualConfigurationEmbeddedRootExpansionStateV2_3_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer,
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
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_4_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationEmbeddedNodeExpansionStateV2_3_0>;
};
export const VisualConfigurationEmbeddedNodeExpansionStateV2_3_0: Schema.Codec<VisualConfigurationEmbeddedNodeExpansionStateV2_3_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer,
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
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_4_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationEmbeddedAILevelInformationV2_3_0;
};
export const VisualConfigurationEmbeddedLevelExpansionStateV2_3_0: Schema.Codec<VisualConfigurationEmbeddedLevelExpansionStateV2_3_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_4_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedAILevelInformationV2_3_0),
    ),
  });
export type VisualConfigurationEmbeddedAILevelInformationV2_3_0 = {
  readonly method: VisualConfigurationEmbeddedAIDecompositionMethodV2_3_0;
  readonly disabled?: boolean;
};
export const VisualConfigurationEmbeddedAILevelInformationV2_3_0: Schema.Codec<VisualConfigurationEmbeddedAILevelInformationV2_3_0> =
  closed({
    method: Schema.suspend(
      () => VisualConfigurationEmbeddedAIDecompositionMethodV2_3_0,
    ),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualConfigurationEmbeddedAIDecompositionMethodV2_3_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualConfigurationEmbeddedAIDecompositionMethodV2_3_0: Schema.Codec<VisualConfigurationEmbeddedAIDecompositionMethodV2_3_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0 =
  {
    readonly title?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedTitleV2_3_0;
    }>;
    readonly subTitle?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedSubTitleV2_3_0;
    }>;
    readonly divider?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedDividerV2_3_0;
    }>;
    readonly spacing?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedSpacingV2_3_0;
    }>;
    readonly background?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedBackgroundV2_3_0;
    }>;
    readonly padding?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedPaddingV2_3_0;
    }>;
    readonly lockAspect?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedLockAspectV2_3_0;
    }>;
    readonly general?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_3_0;
    }>;
    readonly border?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedBorderV2_3_0;
    }>;
    readonly dropShadow?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedDropShadowV2_3_0;
    }>;
    readonly visualLink?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedVisualLinkV2_3_0;
    }>;
    readonly visualTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedVisualTooltipV2_3_0;
    }>;
    readonly stylePreset?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedStylePresetV2_3_0;
    }>;
    readonly visualHeader?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderV2_3_0;
    }>;
    readonly visualHeaderTooltip?: ReadonlyArray<{
      readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
      readonly properties: VisualConfigurationEmbeddedVisualHeaderTooltipV2_3_0;
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedTitleV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSubTitleV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDividerV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedSpacingV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBackgroundV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedPaddingV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedLockAspectV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedBorderV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedDropShadowV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualLinkV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualTooltipV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedStylePresetV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderV2_3_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationEmbeddedVisualHeaderTooltipV2_3_0,
          ),
        }),
      ),
    ),
  });
export type VisualConfigurationEmbeddedTitleV2_3_0 = {
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
export const VisualConfigurationEmbeddedTitleV2_3_0: Schema.Codec<VisualConfigurationEmbeddedTitleV2_3_0> =
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
export type VisualConfigurationEmbeddedSubTitleV2_3_0 = {
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
export const VisualConfigurationEmbeddedSubTitleV2_3_0: Schema.Codec<VisualConfigurationEmbeddedSubTitleV2_3_0> =
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
export type VisualConfigurationEmbeddedDividerV2_3_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualConfigurationEmbeddedDividerV2_3_0: Schema.Codec<VisualConfigurationEmbeddedDividerV2_3_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedSpacingV2_3_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualConfigurationEmbeddedSpacingV2_3_0: Schema.Codec<VisualConfigurationEmbeddedSpacingV2_3_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedBackgroundV2_3_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualConfigurationEmbeddedBackgroundV2_3_0: Schema.Codec<VisualConfigurationEmbeddedBackgroundV2_3_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedPaddingV2_3_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualConfigurationEmbeddedPaddingV2_3_0: Schema.Codec<VisualConfigurationEmbeddedPaddingV2_3_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedLockAspectV2_3_0 = {
  readonly show?: Schema.Json;
};
export const VisualConfigurationEmbeddedLockAspectV2_3_0: Schema.Codec<VisualConfigurationEmbeddedLockAspectV2_3_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_3_0 =
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
export const VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_3_0: Schema.Codec<VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_3_0> =
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
export type VisualConfigurationEmbeddedBorderV2_3_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualConfigurationEmbeddedBorderV2_3_0: Schema.Codec<VisualConfigurationEmbeddedBorderV2_3_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualConfigurationEmbeddedDropShadowV2_3_0 = {
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
export const VisualConfigurationEmbeddedDropShadowV2_3_0: Schema.Codec<VisualConfigurationEmbeddedDropShadowV2_3_0> =
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
export type VisualConfigurationEmbeddedVisualLinkV2_3_0 = {
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
export const VisualConfigurationEmbeddedVisualLinkV2_3_0: Schema.Codec<VisualConfigurationEmbeddedVisualLinkV2_3_0> =
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
export type VisualConfigurationEmbeddedVisualTooltipV2_3_0 = {
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
export const VisualConfigurationEmbeddedVisualTooltipV2_3_0: Schema.Codec<VisualConfigurationEmbeddedVisualTooltipV2_3_0> =
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
export type VisualConfigurationEmbeddedStylePresetV2_3_0 = {
  readonly name?: Schema.Json;
};
export const VisualConfigurationEmbeddedStylePresetV2_3_0: Schema.Codec<VisualConfigurationEmbeddedStylePresetV2_3_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualConfigurationEmbeddedVisualHeaderV2_3_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderV2_3_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderV2_3_0> =
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
export type VisualConfigurationEmbeddedVisualHeaderTooltipV2_3_0 = {
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
export const VisualConfigurationEmbeddedVisualHeaderTooltipV2_3_0: Schema.Codec<VisualConfigurationEmbeddedVisualHeaderTooltipV2_3_0> =
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
export type VisualConfigurationEmbeddedVisualSyncGroupV2_3_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualConfigurationEmbeddedVisualSyncGroupV2_3_0: Schema.Codec<VisualConfigurationEmbeddedVisualSyncGroupV2_3_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export const VisualConfigurationEmbeddedDefinitionsV2_3_0 = {
  Query: VisualConfigurationEmbeddedQueryV2_3_0,
  SortDefinition: VisualConfigurationEmbeddedSortDefinitionV2_3_0,
  QuerySort: VisualConfigurationEmbeddedQuerySortV2_3_0,
  SortDirection: VisualConfigurationEmbeddedSortDirectionV2_3_0,
  VisualQueryOptions: VisualConfigurationEmbeddedVisualQueryOptionsV2_3_0,
  ProjectionState: VisualConfigurationEmbeddedProjectionStateV2_3_0,
  RoleProjection: VisualConfigurationEmbeddedRoleProjectionV2_3_0,
  RoleFieldParameter: VisualConfigurationEmbeddedRoleFieldParameterV2_3_0,
  ExpansionState: VisualConfigurationEmbeddedExpansionStateV2_3_0,
  RootExpansionState: VisualConfigurationEmbeddedRootExpansionStateV2_3_0,
  NodeExpansionState: VisualConfigurationEmbeddedNodeExpansionStateV2_3_0,
  LevelExpansionState: VisualConfigurationEmbeddedLevelExpansionStateV2_3_0,
  AILevelInformation: VisualConfigurationEmbeddedAILevelInformationV2_3_0,
  AIDecompositionMethod: VisualConfigurationEmbeddedAIDecompositionMethodV2_3_0,
  VisualContainerFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0,
  Title: VisualConfigurationEmbeddedTitleV2_3_0,
  SubTitle: VisualConfigurationEmbeddedSubTitleV2_3_0,
  Divider: VisualConfigurationEmbeddedDividerV2_3_0,
  Spacing: VisualConfigurationEmbeddedSpacingV2_3_0,
  Background: VisualConfigurationEmbeddedBackgroundV2_3_0,
  Padding: VisualConfigurationEmbeddedPaddingV2_3_0,
  LockAspect: VisualConfigurationEmbeddedLockAspectV2_3_0,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_3_0,
  Border: VisualConfigurationEmbeddedBorderV2_3_0,
  DropShadow: VisualConfigurationEmbeddedDropShadowV2_3_0,
  VisualLink: VisualConfigurationEmbeddedVisualLinkV2_3_0,
  VisualTooltip: VisualConfigurationEmbeddedVisualTooltipV2_3_0,
  StylePreset: VisualConfigurationEmbeddedStylePresetV2_3_0,
  VisualHeader: VisualConfigurationEmbeddedVisualHeaderV2_3_0,
  VisualHeaderTooltip: VisualConfigurationEmbeddedVisualHeaderTooltipV2_3_0,
  VisualSyncGroup: VisualConfigurationEmbeddedVisualSyncGroupV2_3_0,
} as const;
export type VisualConfigurationEmbeddedV2_3_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationEmbeddedQueryV2_3_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationEmbeddedExpansionStateV2_3_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0;
  readonly visualContainerObjects?: VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0;
  readonly syncGroup?: VisualConfigurationEmbeddedVisualSyncGroupV2_3_0;
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
          Formatting.FormattingObjectDefinitionsDefinitionsV1_5_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationEmbeddedVisualSyncGroupV2_3_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export const visualConfigurationSchemaCoverage = [
  {
    source: "definition/visualConfiguration/1.5.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.5.0/schema.json",
    version: "1.5.0",
    variant: "standalone",
    schema: VisualConfigurationV1_5_0,
  },
  {
    source: "definition/visualConfiguration/1.5.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.5.0/schema-embedded.json",
    version: "1.5.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV1_5_0,
  },
  {
    source: "definition/visualConfiguration/1.6.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.6.0/schema.json",
    version: "1.6.0",
    variant: "standalone",
    schema: VisualConfigurationV1_6_0,
  },
  {
    source: "definition/visualConfiguration/1.6.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.6.0/schema.embedded.json",
    version: "1.6.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV1_6_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.6.0/schema-embedded.json",
    ],
  },
  {
    source: "definition/visualConfiguration/1.7.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.7.0/schema.json",
    version: "1.7.0",
    variant: "standalone",
    schema: VisualConfigurationV1_7_0,
  },
  {
    source: "definition/visualConfiguration/1.7.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.7.0/schema.embedded.json",
    version: "1.7.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV1_7_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.7.0/schema-embedded.json",
    ],
  },
  {
    source: "definition/visualConfiguration/1.8.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.8.0/schema.json",
    version: "1.8.0",
    variant: "standalone",
    schema: VisualConfigurationV1_8_0,
  },
  {
    source: "definition/visualConfiguration/1.8.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.8.0/schema.json",
    version: "1.8.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV1_8_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.8.0/schema-embedded.json",
    ],
  },
  {
    source: "definition/visualConfiguration/2.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema.json",
    version: "2.0.0",
    variant: "standalone",
    schema: VisualConfigurationV2_0_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.0.0/schema.json",
    ],
  },
  {
    source: "definition/visualConfiguration/2.0.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.0.0/schema.embedded.json",
    version: "2.0.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV2_0_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.0.0/schema-embedded.json",
    ],
  },
  {
    source: "definition/visualConfiguration/2.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema.json",
    version: "2.1.0",
    variant: "standalone",
    schema: VisualConfigurationV2_1_0,
  },
  {
    source: "definition/visualConfiguration/2.1.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema.embedded.json",
    version: "2.1.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV2_1_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema-embedded.json",
    ],
  },
  {
    source: "definition/visualConfiguration/2.2.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.2.0/schema.json",
    version: "2.2.0",
    variant: "standalone",
    schema: VisualConfigurationV2_2_0,
  },
  {
    source: "definition/visualConfiguration/2.2.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.2.0/schema.embedded.json",
    version: "2.2.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV2_2_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.2.0/schema-embedded.json",
    ],
  },
  {
    source: "definition/visualConfiguration/2.3.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.3.0/schema.json",
    version: "2.3.0",
    variant: "standalone",
    schema: VisualConfigurationV2_3_0,
  },
  {
    source: "definition/visualConfiguration/2.3.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.3.0/schema.embedded.json",
    version: "2.3.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV2_3_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.3.0/schema-embedded.json",
    ],
  },
] as const;
