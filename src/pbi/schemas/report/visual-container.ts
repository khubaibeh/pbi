import { Schema } from "effect";
import * as Query from "./semantic-query.js";
import * as Formatting from "./formatting-and-filters.js";
import * as Visual from "./visual-configuration.js";
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
export type VisualContainerVisualContainerPositionV1_0_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
};
export const VisualContainerVisualContainerPositionV1_0_0: Schema.Codec<VisualContainerVisualContainerPositionV1_0_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualConfigV1_0_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualContainerQueryV1_0_0;
  readonly expansionStates?: ReadonlyArray<VisualContainerExpansionStateV1_0_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0;
  readonly visualContainerObjects?: VisualContainerVisualContainerFormattingObjectsV1_0_0;
  readonly syncGroup?: VisualContainerVisualSyncGroupV1_0_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualContainerVisualConfigV1_0_0: Schema.Codec<VisualContainerVisualConfigV1_0_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => VisualContainerQueryV1_0_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerExpansionStateV1_0_0)),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualContainerVisualContainerFormattingObjectsV1_0_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualSyncGroupV1_0_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerQueryV1_0_0 = {
  readonly sortDefinition?: VisualContainerSortDefinitionV1_0_0;
  readonly options?: VisualContainerVisualQueryOptionsV1_0_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualContainerProjectionStateV1_0_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualContainerQueryV1_0_0: Schema.Codec<VisualContainerQueryV1_0_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualContainerSortDefinitionV1_0_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualQueryOptionsV1_0_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualContainerProjectionStateV1_0_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerSortDefinitionV1_0_0 = {
  readonly sort?: ReadonlyArray<VisualContainerQuerySortV1_0_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualContainerSortDefinitionV1_0_0: Schema.Codec<VisualContainerSortDefinitionV1_0_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerQuerySortV1_0_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerQuerySortV1_0_0 = {
  readonly field: Query.QueryExpressionContainerV1_0_0;
  readonly direction: VisualContainerSortDirectionV1_0_0;
};
export const VisualContainerQuerySortV1_0_0: Schema.Codec<VisualContainerQuerySortV1_0_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(() => VisualContainerSortDirectionV1_0_0),
  });
export type VisualContainerSortDirectionV1_0_0 = "Ascending" | "Descending";
export const VisualContainerSortDirectionV1_0_0: Schema.Codec<VisualContainerSortDirectionV1_0_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualContainerVisualQueryOptionsV1_0_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualContainerVisualQueryOptionsV1_0_0: Schema.Codec<VisualContainerVisualQueryOptionsV1_0_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerProjectionStateV1_0_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualContainerRoleProjectionV1_0_0>;
  readonly fieldParameters?: ReadonlyArray<VisualContainerRoleFieldParameterV1_0_0>;
};
export const VisualContainerProjectionStateV1_0_0: Schema.Codec<VisualContainerProjectionStateV1_0_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualContainerRoleProjectionV1_0_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerRoleFieldParameterV1_0_0),
      ),
    ),
  });
export type VisualContainerRoleProjectionV1_0_0 = {
  readonly field: Query.QueryExpressionContainerV1_0_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualContainerRoleProjectionV1_0_0: Schema.Codec<VisualContainerRoleProjectionV1_0_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer,
    ),
    queryRef: Schema.String,
    nativeQueryRef: Schema.optionalKey(Schema.String),
    displayName: Schema.optionalKey(Schema.String),
    format: Schema.optionalKey(Schema.String),
    active: Schema.optionalKey(Schema.Boolean),
    hidden: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerRoleFieldParameterV1_0_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_0_0;
  readonly index: number;
  readonly length?: number;
};
export const VisualContainerRoleFieldParameterV1_0_0: Schema.Codec<VisualContainerRoleFieldParameterV1_0_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerExpansionStateV1_0_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualContainerRootExpansionStateV1_0_0;
  readonly levels?: ReadonlyArray<VisualContainerLevelExpansionStateV1_0_0>;
};
export const VisualContainerExpansionStateV1_0_0: Schema.Codec<VisualContainerExpansionStateV1_0_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualContainerRootExpansionStateV1_0_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerLevelExpansionStateV1_0_0),
      ),
    ),
  });
export type VisualContainerRootExpansionStateV1_0_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_0_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualContainerNodeExpansionStateV1_0_0>;
};
export const VisualContainerRootExpansionStateV1_0_0: Schema.Codec<VisualContainerRootExpansionStateV1_0_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerNodeExpansionStateV1_0_0),
      ),
    ),
  });
export type VisualContainerNodeExpansionStateV1_0_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_0_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualContainerNodeExpansionStateV1_0_0>;
};
export const VisualContainerNodeExpansionStateV1_0_0: Schema.Codec<VisualContainerNodeExpansionStateV1_0_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerNodeExpansionStateV1_0_0),
      ),
    ),
  });
export type VisualContainerLevelExpansionStateV1_0_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_0_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualContainerAILevelInformationV1_0_0;
};
export const VisualContainerLevelExpansionStateV1_0_0: Schema.Codec<VisualContainerLevelExpansionStateV1_0_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_0_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualContainerAILevelInformationV1_0_0),
    ),
  });
export type VisualContainerAILevelInformationV1_0_0 = {
  readonly method: VisualContainerAIDecompositionMethodV1_0_0;
  readonly disabled?: boolean;
};
export const VisualContainerAILevelInformationV1_0_0: Schema.Codec<VisualContainerAILevelInformationV1_0_0> =
  closed({
    method: Schema.suspend(() => VisualContainerAIDecompositionMethodV1_0_0),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerAIDecompositionMethodV1_0_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualContainerAIDecompositionMethodV1_0_0: Schema.Codec<VisualContainerAIDecompositionMethodV1_0_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualContainerVisualContainerFormattingObjectsV1_0_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerTitleV1_0_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerSubTitleV1_0_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerDividerV1_0_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerSpacingV1_0_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerBackgroundV1_0_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerPaddingV1_0_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerLockAspectV1_0_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerVisualContainerGeneralFormattingObjectsV1_0_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerBorderV1_0_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerDropShadowV1_0_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerVisualLinkV1_0_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerVisualTooltipV1_0_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerStylePresetV1_0_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerVisualHeaderV1_0_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerVisualHeaderTooltipV1_0_0;
  }>;
};
export const VisualContainerVisualContainerFormattingObjectsV1_0_0: Schema.Codec<VisualContainerVisualContainerFormattingObjectsV1_0_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerTitleV1_0_0),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerSubTitleV1_0_0),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerDividerV1_0_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerSpacingV1_0_0),
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
          properties: Schema.suspend(() => VisualContainerBackgroundV1_0_0),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerPaddingV1_0_0),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerLockAspectV1_0_0),
        }),
      ),
    ),
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
            () => VisualContainerVisualContainerGeneralFormattingObjectsV1_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerBorderV1_0_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerDropShadowV1_0_0),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerVisualLinkV1_0_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerVisualTooltipV1_0_0),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerStylePresetV1_0_0),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerVisualHeaderV1_0_0),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
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
            () => VisualContainerVisualHeaderTooltipV1_0_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerTitleV1_0_0 = {
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
export const VisualContainerTitleV1_0_0: Schema.Codec<VisualContainerTitleV1_0_0> =
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
export type VisualContainerSubTitleV1_0_0 = {
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
export const VisualContainerSubTitleV1_0_0: Schema.Codec<VisualContainerSubTitleV1_0_0> =
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
export type VisualContainerDividerV1_0_0 = {
  readonly show?: Schema.Json;
  readonly ignorePadding?: Schema.Json;
  readonly color?: Schema.Json;
  readonly style?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualContainerDividerV1_0_0: Schema.Codec<VisualContainerDividerV1_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    ignorePadding: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerSpacingV1_0_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualContainerSpacingV1_0_0: Schema.Codec<VisualContainerSpacingV1_0_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerBackgroundV1_0_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualContainerBackgroundV1_0_0: Schema.Codec<VisualContainerBackgroundV1_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerPaddingV1_0_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualContainerPaddingV1_0_0: Schema.Codec<VisualContainerPaddingV1_0_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerLockAspectV1_0_0 = {
  readonly show?: Schema.Json;
};
export const VisualContainerLockAspectV1_0_0: Schema.Codec<VisualContainerLockAspectV1_0_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualContainerVisualContainerGeneralFormattingObjectsV1_0_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};
export const VisualContainerVisualContainerGeneralFormattingObjectsV1_0_0: Schema.Codec<VisualContainerVisualContainerGeneralFormattingObjectsV1_0_0> =
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
export type VisualContainerBorderV1_0_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
};
export const VisualContainerBorderV1_0_0: Schema.Codec<VisualContainerBorderV1_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerDropShadowV1_0_0 = {
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
export const VisualContainerDropShadowV1_0_0: Schema.Codec<VisualContainerDropShadowV1_0_0> =
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
export type VisualContainerVisualLinkV1_0_0 = {
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
export const VisualContainerVisualLinkV1_0_0: Schema.Codec<VisualContainerVisualLinkV1_0_0> =
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
export type VisualContainerVisualTooltipV1_0_0 = {
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
export const VisualContainerVisualTooltipV1_0_0: Schema.Codec<VisualContainerVisualTooltipV1_0_0> =
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
export type VisualContainerStylePresetV1_0_0 = {
  readonly name?: Schema.Json;
};
export const VisualContainerStylePresetV1_0_0: Schema.Codec<VisualContainerStylePresetV1_0_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualContainerVisualHeaderV1_0_0 = {
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
};
export const VisualContainerVisualHeaderV1_0_0: Schema.Codec<VisualContainerVisualHeaderV1_0_0> =
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
  });
export type VisualContainerVisualHeaderTooltipV1_0_0 = {
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
export const VisualContainerVisualHeaderTooltipV1_0_0: Schema.Codec<VisualContainerVisualHeaderTooltipV1_0_0> =
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
export type VisualContainerVisualSyncGroupV1_0_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualContainerVisualSyncGroupV1_0_0: Schema.Codec<VisualContainerVisualSyncGroupV1_0_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerVisualGroupConfigV1_0_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV1_0_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV1_0_0;
};
export const VisualContainerVisualGroupConfigV1_0_0: Schema.Codec<VisualContainerVisualGroupConfigV1_0_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV1_0_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV1_0_0),
    ),
  });
export type VisualContainerGroupLayoutModeV1_0_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV1_0_0: Schema.Codec<VisualContainerGroupLayoutModeV1_0_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV1_0_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerBackgroundV1_0_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerLockAspectV1_0_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV1_0_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV1_0_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV1_0_0> =
  closed({
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
          properties: Schema.suspend(() => VisualContainerBackgroundV1_0_0),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerLockAspectV1_0_0),
        }),
      ),
    ),
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV1_0_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV1_0_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV1_0_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV1_0_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerFilterConfigV1_0_0 = {
  readonly filters?: ReadonlyArray<VisualContainerFilterContainerV1_0_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};
export const VisualContainerFilterConfigV1_0_0: Schema.Codec<VisualContainerFilterConfigV1_0_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerFilterContainerV1_0_0)),
    ),
    filterSortOrder: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Ascending"),
        Schema.Literal("Descending"),
        Schema.Literal("Custom"),
      ]),
    ),
  });
export type VisualContainerFilterContainerV1_0_0 = {
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
  readonly objects?: VisualContainerFilterContainerFormattingObjectsV1_0_0;
};
export const VisualContainerFilterContainerV1_0_0: Schema.Codec<VisualContainerFilterContainerV1_0_0> =
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
      Schema.suspend(
        () => VisualContainerFilterContainerFormattingObjectsV1_0_0,
      ),
    ),
  });
export type VisualContainerFilterContainerFormattingObjectsV1_0_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerFilterContainerFormattingObjectsPropertiesV1_0_0;
  }>;
};
export const VisualContainerFilterContainerFormattingObjectsV1_0_0: Schema.Codec<VisualContainerFilterContainerFormattingObjectsV1_0_0> =
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
            () =>
              VisualContainerFilterContainerFormattingObjectsPropertiesV1_0_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerFilterContainerFormattingObjectsPropertiesV1_0_0 = {
  readonly requireSingleSelect?: Schema.Json;
  readonly isInvertedSelectionMode?: Schema.Json;
};
export const VisualContainerFilterContainerFormattingObjectsPropertiesV1_0_0: Schema.Codec<VisualContainerFilterContainerFormattingObjectsPropertiesV1_0_0> =
  closed({
    requireSingleSelect: Schema.optionalKey(Schema.Json),
    isInvertedSelectionMode: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV1_0_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV1_0_0: Schema.Codec<VisualContainerAnnotationV1_0_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV1_0_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_0_0,
  VisualConfig: VisualContainerVisualConfigV1_0_0,
  Query: VisualContainerQueryV1_0_0,
  SortDefinition: VisualContainerSortDefinitionV1_0_0,
  QuerySort: VisualContainerQuerySortV1_0_0,
  SortDirection: VisualContainerSortDirectionV1_0_0,
  VisualQueryOptions: VisualContainerVisualQueryOptionsV1_0_0,
  ProjectionState: VisualContainerProjectionStateV1_0_0,
  RoleProjection: VisualContainerRoleProjectionV1_0_0,
  RoleFieldParameter: VisualContainerRoleFieldParameterV1_0_0,
  ExpansionState: VisualContainerExpansionStateV1_0_0,
  RootExpansionState: VisualContainerRootExpansionStateV1_0_0,
  NodeExpansionState: VisualContainerNodeExpansionStateV1_0_0,
  LevelExpansionState: VisualContainerLevelExpansionStateV1_0_0,
  AILevelInformation: VisualContainerAILevelInformationV1_0_0,
  AIDecompositionMethod: VisualContainerAIDecompositionMethodV1_0_0,
  VisualContainerFormattingObjects:
    VisualContainerVisualContainerFormattingObjectsV1_0_0,
  Title: VisualContainerTitleV1_0_0,
  SubTitle: VisualContainerSubTitleV1_0_0,
  Divider: VisualContainerDividerV1_0_0,
  Spacing: VisualContainerSpacingV1_0_0,
  Background: VisualContainerBackgroundV1_0_0,
  Padding: VisualContainerPaddingV1_0_0,
  LockAspect: VisualContainerLockAspectV1_0_0,
  VisualContainerGeneralFormattingObjects:
    VisualContainerVisualContainerGeneralFormattingObjectsV1_0_0,
  Border: VisualContainerBorderV1_0_0,
  DropShadow: VisualContainerDropShadowV1_0_0,
  VisualLink: VisualContainerVisualLinkV1_0_0,
  VisualTooltip: VisualContainerVisualTooltipV1_0_0,
  StylePreset: VisualContainerStylePresetV1_0_0,
  VisualHeader: VisualContainerVisualHeaderV1_0_0,
  VisualHeaderTooltip: VisualContainerVisualHeaderTooltipV1_0_0,
  VisualSyncGroup: VisualContainerVisualSyncGroupV1_0_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV1_0_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV1_0_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV1_0_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV1_0_0,
  FilterConfig: VisualContainerFilterConfigV1_0_0,
  FilterContainer: VisualContainerFilterContainerV1_0_0,
  FilterContainerFormattingObjects:
    VisualContainerFilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties:
    VisualContainerFilterContainerFormattingObjectsPropertiesV1_0_0,
  Annotation: VisualContainerAnnotationV1_0_0,
} as const;
export type VisualContainerV1_0_0 =
  | ({
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_0_0;
      readonly visual: VisualContainerVisualConfigV1_0_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: VisualContainerFilterConfigV1_0_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_0_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste";
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.0.0/schema.json";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_0_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV1_0_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: VisualContainerFilterConfigV1_0_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_0_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste";
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.0.0/schema.json";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV1_0_0: Schema.Codec<VisualContainerV1_0_0> =
  Schema.Union([
    closed({
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_0_0,
      ),
      visual: Schema.suspend(() => VisualContainerVisualConfigV1_0_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => VisualContainerFilterConfigV1_0_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_0_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
        ]),
      ),
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.0.0/schema.json",
      ),
    }),
    closed({
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_0_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV1_0_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => VisualContainerFilterConfigV1_0_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_0_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
        ]),
      ),
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.0.0/schema.json",
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV1_1_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
};
export const VisualContainerVisualContainerPositionV1_1_0: Schema.Codec<VisualContainerVisualContainerPositionV1_1_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualConfigV1_1_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualContainerQueryV1_1_0;
  readonly expansionStates?: ReadonlyArray<VisualContainerExpansionStateV1_1_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0;
  readonly visualContainerObjects?: VisualContainerVisualContainerFormattingObjectsV1_1_0;
  readonly syncGroup?: VisualContainerVisualSyncGroupV1_1_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualContainerVisualConfigV1_1_0: Schema.Codec<VisualContainerVisualConfigV1_1_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => VisualContainerQueryV1_1_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerExpansionStateV1_1_0)),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualContainerVisualContainerFormattingObjectsV1_1_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualSyncGroupV1_1_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerQueryV1_1_0 = {
  readonly sortDefinition?: VisualContainerSortDefinitionV1_1_0;
  readonly options?: VisualContainerVisualQueryOptionsV1_1_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualContainerProjectionStateV1_1_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualContainerQueryV1_1_0: Schema.Codec<VisualContainerQueryV1_1_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualContainerSortDefinitionV1_1_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualQueryOptionsV1_1_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualContainerProjectionStateV1_1_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerSortDefinitionV1_1_0 = {
  readonly sort?: ReadonlyArray<VisualContainerQuerySortV1_1_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualContainerSortDefinitionV1_1_0: Schema.Codec<VisualContainerSortDefinitionV1_1_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerQuerySortV1_1_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerQuerySortV1_1_0 = {
  readonly field: Query.QueryExpressionContainerV1_1_0;
  readonly direction: VisualContainerSortDirectionV1_1_0;
};
export const VisualContainerQuerySortV1_1_0: Schema.Codec<VisualContainerQuerySortV1_1_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(() => VisualContainerSortDirectionV1_1_0),
  });
export type VisualContainerSortDirectionV1_1_0 = "Ascending" | "Descending";
export const VisualContainerSortDirectionV1_1_0: Schema.Codec<VisualContainerSortDirectionV1_1_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualContainerVisualQueryOptionsV1_1_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualContainerVisualQueryOptionsV1_1_0: Schema.Codec<VisualContainerVisualQueryOptionsV1_1_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerProjectionStateV1_1_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualContainerRoleProjectionV1_1_0>;
  readonly fieldParameters?: ReadonlyArray<VisualContainerRoleFieldParameterV1_1_0>;
};
export const VisualContainerProjectionStateV1_1_0: Schema.Codec<VisualContainerProjectionStateV1_1_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualContainerRoleProjectionV1_1_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerRoleFieldParameterV1_1_0),
      ),
    ),
  });
export type VisualContainerRoleProjectionV1_1_0 = {
  readonly field: Query.QueryExpressionContainerV1_1_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualContainerRoleProjectionV1_1_0: Schema.Codec<VisualContainerRoleProjectionV1_1_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer,
    ),
    queryRef: Schema.String,
    nativeQueryRef: Schema.optionalKey(Schema.String),
    displayName: Schema.optionalKey(Schema.String),
    format: Schema.optionalKey(Schema.String),
    active: Schema.optionalKey(Schema.Boolean),
    hidden: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerRoleFieldParameterV1_1_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_1_0;
  readonly index: number;
  readonly length?: number;
};
export const VisualContainerRoleFieldParameterV1_1_0: Schema.Codec<VisualContainerRoleFieldParameterV1_1_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerExpansionStateV1_1_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualContainerRootExpansionStateV1_1_0;
  readonly levels?: ReadonlyArray<VisualContainerLevelExpansionStateV1_1_0>;
};
export const VisualContainerExpansionStateV1_1_0: Schema.Codec<VisualContainerExpansionStateV1_1_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualContainerRootExpansionStateV1_1_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerLevelExpansionStateV1_1_0),
      ),
    ),
  });
export type VisualContainerRootExpansionStateV1_1_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_1_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualContainerNodeExpansionStateV1_1_0>;
};
export const VisualContainerRootExpansionStateV1_1_0: Schema.Codec<VisualContainerRootExpansionStateV1_1_0> =
  closed({
    identityValues: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer,
        ),
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerNodeExpansionStateV1_1_0),
      ),
    ),
  });
export type VisualContainerNodeExpansionStateV1_1_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_1_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualContainerNodeExpansionStateV1_1_0>;
};
export const VisualContainerNodeExpansionStateV1_1_0: Schema.Codec<VisualContainerNodeExpansionStateV1_1_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerNodeExpansionStateV1_1_0),
      ),
    ),
  });
export type VisualContainerLevelExpansionStateV1_1_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_1_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualContainerAILevelInformationV1_1_0;
};
export const VisualContainerLevelExpansionStateV1_1_0: Schema.Codec<VisualContainerLevelExpansionStateV1_1_0> =
  closed({
    identityKeys: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(
          () => Query.SemanticQueryDefinitionsV1_1_0.QueryExpressionContainer,
        ),
      ),
    ),
    isCollapsed: Schema.optionalKey(Schema.Boolean),
    queryRefs: Schema.Array(Schema.String),
    isPinned: Schema.optionalKey(Schema.Boolean),
    isLocked: Schema.optionalKey(Schema.Boolean),
    AIInformation: Schema.optionalKey(
      Schema.suspend(() => VisualContainerAILevelInformationV1_1_0),
    ),
  });
export type VisualContainerAILevelInformationV1_1_0 = {
  readonly method: VisualContainerAIDecompositionMethodV1_1_0;
  readonly disabled?: boolean;
};
export const VisualContainerAILevelInformationV1_1_0: Schema.Codec<VisualContainerAILevelInformationV1_1_0> =
  closed({
    method: Schema.suspend(() => VisualContainerAIDecompositionMethodV1_1_0),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerAIDecompositionMethodV1_1_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualContainerAIDecompositionMethodV1_1_0: Schema.Codec<VisualContainerAIDecompositionMethodV1_1_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualContainerVisualContainerFormattingObjectsV1_1_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerTitleV1_1_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerSubTitleV1_1_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerDividerV1_1_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerSpacingV1_1_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerBackgroundV1_1_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerPaddingV1_1_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerLockAspectV1_1_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerVisualContainerGeneralFormattingObjectsV1_1_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerBorderV1_1_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerDropShadowV1_1_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerVisualLinkV1_1_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerVisualTooltipV1_1_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerStylePresetV1_1_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerVisualHeaderV1_1_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerVisualHeaderTooltipV1_1_0;
  }>;
};
export const VisualContainerVisualContainerFormattingObjectsV1_1_0: Schema.Codec<VisualContainerVisualContainerFormattingObjectsV1_1_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerTitleV1_1_0),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerSubTitleV1_1_0),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerDividerV1_1_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerSpacingV1_1_0),
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
          properties: Schema.suspend(() => VisualContainerBackgroundV1_1_0),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerPaddingV1_1_0),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerLockAspectV1_1_0),
        }),
      ),
    ),
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
            () => VisualContainerVisualContainerGeneralFormattingObjectsV1_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerBorderV1_1_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerDropShadowV1_1_0),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerVisualLinkV1_1_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerVisualTooltipV1_1_0),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerStylePresetV1_1_0),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerVisualHeaderV1_1_0),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
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
            () => VisualContainerVisualHeaderTooltipV1_1_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerTitleV1_1_0 = {
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
export const VisualContainerTitleV1_1_0: Schema.Codec<VisualContainerTitleV1_1_0> =
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
export type VisualContainerSubTitleV1_1_0 = {
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
export const VisualContainerSubTitleV1_1_0: Schema.Codec<VisualContainerSubTitleV1_1_0> =
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
export type VisualContainerDividerV1_1_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualContainerDividerV1_1_0: Schema.Codec<VisualContainerDividerV1_1_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerSpacingV1_1_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualContainerSpacingV1_1_0: Schema.Codec<VisualContainerSpacingV1_1_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerBackgroundV1_1_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualContainerBackgroundV1_1_0: Schema.Codec<VisualContainerBackgroundV1_1_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerPaddingV1_1_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualContainerPaddingV1_1_0: Schema.Codec<VisualContainerPaddingV1_1_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerLockAspectV1_1_0 = {
  readonly show?: Schema.Json;
};
export const VisualContainerLockAspectV1_1_0: Schema.Codec<VisualContainerLockAspectV1_1_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualContainerVisualContainerGeneralFormattingObjectsV1_1_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};
export const VisualContainerVisualContainerGeneralFormattingObjectsV1_1_0: Schema.Codec<VisualContainerVisualContainerGeneralFormattingObjectsV1_1_0> =
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
export type VisualContainerBorderV1_1_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualContainerBorderV1_1_0: Schema.Codec<VisualContainerBorderV1_1_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerDropShadowV1_1_0 = {
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
export const VisualContainerDropShadowV1_1_0: Schema.Codec<VisualContainerDropShadowV1_1_0> =
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
export type VisualContainerVisualLinkV1_1_0 = {
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
export const VisualContainerVisualLinkV1_1_0: Schema.Codec<VisualContainerVisualLinkV1_1_0> =
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
export type VisualContainerVisualTooltipV1_1_0 = {
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
export const VisualContainerVisualTooltipV1_1_0: Schema.Codec<VisualContainerVisualTooltipV1_1_0> =
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
export type VisualContainerStylePresetV1_1_0 = {
  readonly name?: Schema.Json;
};
export const VisualContainerStylePresetV1_1_0: Schema.Codec<VisualContainerStylePresetV1_1_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualContainerVisualHeaderV1_1_0 = {
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
export const VisualContainerVisualHeaderV1_1_0: Schema.Codec<VisualContainerVisualHeaderV1_1_0> =
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
export type VisualContainerVisualHeaderTooltipV1_1_0 = {
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
export const VisualContainerVisualHeaderTooltipV1_1_0: Schema.Codec<VisualContainerVisualHeaderTooltipV1_1_0> =
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
export type VisualContainerVisualSyncGroupV1_1_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualContainerVisualSyncGroupV1_1_0: Schema.Codec<VisualContainerVisualSyncGroupV1_1_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerVisualGroupConfigV1_1_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV1_1_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV1_1_0;
};
export const VisualContainerVisualGroupConfigV1_1_0: Schema.Codec<VisualContainerVisualGroupConfigV1_1_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV1_1_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV1_1_0),
    ),
  });
export type VisualContainerGroupLayoutModeV1_1_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV1_1_0: Schema.Codec<VisualContainerGroupLayoutModeV1_1_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV1_1_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerBackgroundV1_1_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerLockAspectV1_1_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV1_1_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV1_1_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV1_1_0> =
  closed({
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
          properties: Schema.suspend(() => VisualContainerBackgroundV1_1_0),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(
              () =>
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(() => VisualContainerLockAspectV1_1_0),
        }),
      ),
    ),
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV1_1_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV1_1_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV1_1_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV1_1_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerFilterConfigV1_1_0 = {
  readonly filters?: ReadonlyArray<VisualContainerFilterContainerV1_1_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};
export const VisualContainerFilterConfigV1_1_0: Schema.Codec<VisualContainerFilterConfigV1_1_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerFilterContainerV1_1_0)),
    ),
    filterSortOrder: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Ascending"),
        Schema.Literal("Descending"),
        Schema.Literal("Custom"),
      ]),
    ),
  });
export type VisualContainerFilterContainerV1_1_0 = {
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
  readonly objects?: VisualContainerFilterContainerFormattingObjectsV1_1_0;
};
export const VisualContainerFilterContainerV1_1_0: Schema.Codec<VisualContainerFilterContainerV1_1_0> =
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
      Schema.suspend(
        () => VisualContainerFilterContainerFormattingObjectsV1_1_0,
      ),
    ),
  });
export type VisualContainerFilterContainerFormattingObjectsV1_1_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerFilterContainerFormattingObjectsPropertiesV1_1_0;
  }>;
};
export const VisualContainerFilterContainerFormattingObjectsV1_1_0: Schema.Codec<VisualContainerFilterContainerFormattingObjectsV1_1_0> =
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
            () =>
              VisualContainerFilterContainerFormattingObjectsPropertiesV1_1_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerFilterContainerFormattingObjectsPropertiesV1_1_0 = {
  readonly requireSingleSelect?: Schema.Json;
  readonly isInvertedSelectionMode?: Schema.Json;
};
export const VisualContainerFilterContainerFormattingObjectsPropertiesV1_1_0: Schema.Codec<VisualContainerFilterContainerFormattingObjectsPropertiesV1_1_0> =
  closed({
    requireSingleSelect: Schema.optionalKey(Schema.Json),
    isInvertedSelectionMode: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV1_1_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV1_1_0: Schema.Codec<VisualContainerAnnotationV1_1_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV1_1_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_1_0,
  VisualConfig: VisualContainerVisualConfigV1_1_0,
  Query: VisualContainerQueryV1_1_0,
  SortDefinition: VisualContainerSortDefinitionV1_1_0,
  QuerySort: VisualContainerQuerySortV1_1_0,
  SortDirection: VisualContainerSortDirectionV1_1_0,
  VisualQueryOptions: VisualContainerVisualQueryOptionsV1_1_0,
  ProjectionState: VisualContainerProjectionStateV1_1_0,
  RoleProjection: VisualContainerRoleProjectionV1_1_0,
  RoleFieldParameter: VisualContainerRoleFieldParameterV1_1_0,
  ExpansionState: VisualContainerExpansionStateV1_1_0,
  RootExpansionState: VisualContainerRootExpansionStateV1_1_0,
  NodeExpansionState: VisualContainerNodeExpansionStateV1_1_0,
  LevelExpansionState: VisualContainerLevelExpansionStateV1_1_0,
  AILevelInformation: VisualContainerAILevelInformationV1_1_0,
  AIDecompositionMethod: VisualContainerAIDecompositionMethodV1_1_0,
  VisualContainerFormattingObjects:
    VisualContainerVisualContainerFormattingObjectsV1_1_0,
  Title: VisualContainerTitleV1_1_0,
  SubTitle: VisualContainerSubTitleV1_1_0,
  Divider: VisualContainerDividerV1_1_0,
  Spacing: VisualContainerSpacingV1_1_0,
  Background: VisualContainerBackgroundV1_1_0,
  Padding: VisualContainerPaddingV1_1_0,
  LockAspect: VisualContainerLockAspectV1_1_0,
  VisualContainerGeneralFormattingObjects:
    VisualContainerVisualContainerGeneralFormattingObjectsV1_1_0,
  Border: VisualContainerBorderV1_1_0,
  DropShadow: VisualContainerDropShadowV1_1_0,
  VisualLink: VisualContainerVisualLinkV1_1_0,
  VisualTooltip: VisualContainerVisualTooltipV1_1_0,
  StylePreset: VisualContainerStylePresetV1_1_0,
  VisualHeader: VisualContainerVisualHeaderV1_1_0,
  VisualHeaderTooltip: VisualContainerVisualHeaderTooltipV1_1_0,
  VisualSyncGroup: VisualContainerVisualSyncGroupV1_1_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV1_1_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV1_1_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV1_1_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV1_1_0,
  FilterConfig: VisualContainerFilterConfigV1_1_0,
  FilterContainer: VisualContainerFilterContainerV1_1_0,
  FilterContainerFormattingObjects:
    VisualContainerFilterContainerFormattingObjectsV1_1_0,
  FilterContainerFormattingObjectsProperties:
    VisualContainerFilterContainerFormattingObjectsPropertiesV1_1_0,
  Annotation: VisualContainerAnnotationV1_1_0,
} as const;
export type VisualContainerV1_1_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.1.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_1_0;
      readonly visual: VisualContainerVisualConfigV1_1_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: VisualContainerFilterConfigV1_1_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_1_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.1.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_1_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV1_1_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: VisualContainerFilterConfigV1_1_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_1_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV1_1_0: Schema.Codec<VisualContainerV1_1_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.1.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_1_0,
      ),
      visual: Schema.suspend(() => VisualContainerVisualConfigV1_1_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => VisualContainerFilterConfigV1_1_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_1_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.1.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_1_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV1_1_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => VisualContainerFilterConfigV1_1_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_1_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV1_2_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV1_2_0: Schema.Codec<VisualContainerVisualContainerPositionV1_2_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualConfigV1_2_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualContainerQueryV1_2_0;
  readonly expansionStates?: ReadonlyArray<VisualContainerExpansionStateV1_2_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualContainerVisualContainerFormattingObjectsV1_2_0;
  readonly syncGroup?: VisualContainerVisualSyncGroupV1_2_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualContainerVisualConfigV1_2_0: Schema.Codec<VisualContainerVisualConfigV1_2_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => VisualContainerQueryV1_2_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerExpansionStateV1_2_0)),
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
        () => VisualContainerVisualContainerFormattingObjectsV1_2_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualSyncGroupV1_2_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerQueryV1_2_0 = {
  readonly sortDefinition?: VisualContainerSortDefinitionV1_2_0;
  readonly options?: VisualContainerVisualQueryOptionsV1_2_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualContainerProjectionStateV1_2_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualContainerQueryV1_2_0: Schema.Codec<VisualContainerQueryV1_2_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualContainerSortDefinitionV1_2_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualQueryOptionsV1_2_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualContainerProjectionStateV1_2_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerSortDefinitionV1_2_0 = {
  readonly sort?: ReadonlyArray<VisualContainerQuerySortV1_2_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualContainerSortDefinitionV1_2_0: Schema.Codec<VisualContainerSortDefinitionV1_2_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerQuerySortV1_2_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerQuerySortV1_2_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly direction: VisualContainerSortDirectionV1_2_0;
};
export const VisualContainerQuerySortV1_2_0: Schema.Codec<VisualContainerQuerySortV1_2_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(() => VisualContainerSortDirectionV1_2_0),
  });
export type VisualContainerSortDirectionV1_2_0 = "Ascending" | "Descending";
export const VisualContainerSortDirectionV1_2_0: Schema.Codec<VisualContainerSortDirectionV1_2_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualContainerVisualQueryOptionsV1_2_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualContainerVisualQueryOptionsV1_2_0: Schema.Codec<VisualContainerVisualQueryOptionsV1_2_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerProjectionStateV1_2_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualContainerRoleProjectionV1_2_0>;
  readonly fieldParameters?: ReadonlyArray<VisualContainerRoleFieldParameterV1_2_0>;
};
export const VisualContainerProjectionStateV1_2_0: Schema.Codec<VisualContainerProjectionStateV1_2_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualContainerRoleProjectionV1_2_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerRoleFieldParameterV1_2_0),
      ),
    ),
  });
export type VisualContainerRoleProjectionV1_2_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualContainerRoleProjectionV1_2_0: Schema.Codec<VisualContainerRoleProjectionV1_2_0> =
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
export type VisualContainerRoleFieldParameterV1_2_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
};
export const VisualContainerRoleFieldParameterV1_2_0: Schema.Codec<VisualContainerRoleFieldParameterV1_2_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerExpansionStateV1_2_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualContainerRootExpansionStateV1_2_0;
  readonly levels?: ReadonlyArray<VisualContainerLevelExpansionStateV1_2_0>;
};
export const VisualContainerExpansionStateV1_2_0: Schema.Codec<VisualContainerExpansionStateV1_2_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualContainerRootExpansionStateV1_2_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerLevelExpansionStateV1_2_0),
      ),
    ),
  });
export type VisualContainerRootExpansionStateV1_2_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualContainerNodeExpansionStateV1_2_0>;
};
export const VisualContainerRootExpansionStateV1_2_0: Schema.Codec<VisualContainerRootExpansionStateV1_2_0> =
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
        Schema.suspend(() => VisualContainerNodeExpansionStateV1_2_0),
      ),
    ),
  });
export type VisualContainerNodeExpansionStateV1_2_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualContainerNodeExpansionStateV1_2_0>;
};
export const VisualContainerNodeExpansionStateV1_2_0: Schema.Codec<VisualContainerNodeExpansionStateV1_2_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerNodeExpansionStateV1_2_0),
      ),
    ),
  });
export type VisualContainerLevelExpansionStateV1_2_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualContainerAILevelInformationV1_2_0;
};
export const VisualContainerLevelExpansionStateV1_2_0: Schema.Codec<VisualContainerLevelExpansionStateV1_2_0> =
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
      Schema.suspend(() => VisualContainerAILevelInformationV1_2_0),
    ),
  });
export type VisualContainerAILevelInformationV1_2_0 = {
  readonly method: VisualContainerAIDecompositionMethodV1_2_0;
  readonly disabled?: boolean;
};
export const VisualContainerAILevelInformationV1_2_0: Schema.Codec<VisualContainerAILevelInformationV1_2_0> =
  closed({
    method: Schema.suspend(() => VisualContainerAIDecompositionMethodV1_2_0),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerAIDecompositionMethodV1_2_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualContainerAIDecompositionMethodV1_2_0: Schema.Codec<VisualContainerAIDecompositionMethodV1_2_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualContainerVisualContainerFormattingObjectsV1_2_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerTitleV1_2_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerSubTitleV1_2_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerDividerV1_2_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerSpacingV1_2_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerBackgroundV1_2_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerPaddingV1_2_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerLockAspectV1_2_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualContainerGeneralFormattingObjectsV1_2_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerBorderV1_2_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerDropShadowV1_2_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualLinkV1_2_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualTooltipV1_2_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerStylePresetV1_2_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualHeaderV1_2_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualHeaderTooltipV1_2_0;
  }>;
};
export const VisualContainerVisualContainerFormattingObjectsV1_2_0: Schema.Codec<VisualContainerVisualContainerFormattingObjectsV1_2_0> =
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
          properties: Schema.suspend(() => VisualContainerTitleV1_2_0),
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
          properties: Schema.suspend(() => VisualContainerSubTitleV1_2_0),
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
          properties: Schema.suspend(() => VisualContainerDividerV1_2_0),
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
          properties: Schema.suspend(() => VisualContainerSpacingV1_2_0),
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
          properties: Schema.suspend(() => VisualContainerBackgroundV1_2_0),
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
          properties: Schema.suspend(() => VisualContainerPaddingV1_2_0),
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
          properties: Schema.suspend(() => VisualContainerLockAspectV1_2_0),
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
            () => VisualContainerVisualContainerGeneralFormattingObjectsV1_2_0,
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
          properties: Schema.suspend(() => VisualContainerBorderV1_2_0),
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
          properties: Schema.suspend(() => VisualContainerDropShadowV1_2_0),
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
          properties: Schema.suspend(() => VisualContainerVisualLinkV1_2_0),
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
          properties: Schema.suspend(() => VisualContainerVisualTooltipV1_2_0),
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
          properties: Schema.suspend(() => VisualContainerStylePresetV1_2_0),
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
          properties: Schema.suspend(() => VisualContainerVisualHeaderV1_2_0),
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
            () => VisualContainerVisualHeaderTooltipV1_2_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerTitleV1_2_0 = {
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
export const VisualContainerTitleV1_2_0: Schema.Codec<VisualContainerTitleV1_2_0> =
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
export type VisualContainerSubTitleV1_2_0 = {
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
export const VisualContainerSubTitleV1_2_0: Schema.Codec<VisualContainerSubTitleV1_2_0> =
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
export type VisualContainerDividerV1_2_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualContainerDividerV1_2_0: Schema.Codec<VisualContainerDividerV1_2_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerSpacingV1_2_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualContainerSpacingV1_2_0: Schema.Codec<VisualContainerSpacingV1_2_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerBackgroundV1_2_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualContainerBackgroundV1_2_0: Schema.Codec<VisualContainerBackgroundV1_2_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerPaddingV1_2_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualContainerPaddingV1_2_0: Schema.Codec<VisualContainerPaddingV1_2_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerLockAspectV1_2_0 = {
  readonly show?: Schema.Json;
};
export const VisualContainerLockAspectV1_2_0: Schema.Codec<VisualContainerLockAspectV1_2_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualContainerVisualContainerGeneralFormattingObjectsV1_2_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};
export const VisualContainerVisualContainerGeneralFormattingObjectsV1_2_0: Schema.Codec<VisualContainerVisualContainerGeneralFormattingObjectsV1_2_0> =
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
export type VisualContainerBorderV1_2_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualContainerBorderV1_2_0: Schema.Codec<VisualContainerBorderV1_2_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerDropShadowV1_2_0 = {
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
export const VisualContainerDropShadowV1_2_0: Schema.Codec<VisualContainerDropShadowV1_2_0> =
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
export type VisualContainerVisualLinkV1_2_0 = {
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
export const VisualContainerVisualLinkV1_2_0: Schema.Codec<VisualContainerVisualLinkV1_2_0> =
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
export type VisualContainerVisualTooltipV1_2_0 = {
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
export const VisualContainerVisualTooltipV1_2_0: Schema.Codec<VisualContainerVisualTooltipV1_2_0> =
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
export type VisualContainerStylePresetV1_2_0 = {
  readonly name?: Schema.Json;
};
export const VisualContainerStylePresetV1_2_0: Schema.Codec<VisualContainerStylePresetV1_2_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualContainerVisualHeaderV1_2_0 = {
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
export const VisualContainerVisualHeaderV1_2_0: Schema.Codec<VisualContainerVisualHeaderV1_2_0> =
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
export type VisualContainerVisualHeaderTooltipV1_2_0 = {
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
export const VisualContainerVisualHeaderTooltipV1_2_0: Schema.Codec<VisualContainerVisualHeaderTooltipV1_2_0> =
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
export type VisualContainerVisualSyncGroupV1_2_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualContainerVisualSyncGroupV1_2_0: Schema.Codec<VisualContainerVisualSyncGroupV1_2_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerVisualGroupConfigV1_2_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV1_2_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV1_2_0;
};
export const VisualContainerVisualGroupConfigV1_2_0: Schema.Codec<VisualContainerVisualGroupConfigV1_2_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV1_2_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV1_2_0),
    ),
  });
export type VisualContainerGroupLayoutModeV1_2_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV1_2_0: Schema.Codec<VisualContainerGroupLayoutModeV1_2_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV1_2_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerBackgroundV1_2_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerLockAspectV1_2_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV1_2_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV1_2_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV1_2_0> =
  closed({
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
          properties: Schema.suspend(() => VisualContainerBackgroundV1_2_0),
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
          properties: Schema.suspend(() => VisualContainerLockAspectV1_2_0),
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV1_2_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV1_2_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV1_2_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV1_2_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerFilterConfigV1_2_0 = {
  readonly filters?: ReadonlyArray<VisualContainerFilterContainerV1_2_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};
export const VisualContainerFilterConfigV1_2_0: Schema.Codec<VisualContainerFilterConfigV1_2_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerFilterContainerV1_2_0)),
    ),
    filterSortOrder: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Ascending"),
        Schema.Literal("Descending"),
        Schema.Literal("Custom"),
      ]),
    ),
  });
export type VisualContainerFilterContainerV1_2_0 = {
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
  readonly objects?: VisualContainerFilterContainerFormattingObjectsV1_2_0;
};
export const VisualContainerFilterContainerV1_2_0: Schema.Codec<VisualContainerFilterContainerV1_2_0> =
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
      Schema.suspend(
        () => VisualContainerFilterContainerFormattingObjectsV1_2_0,
      ),
    ),
  });
export type VisualContainerFilterContainerFormattingObjectsV1_2_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerFilterContainerFormattingObjectsPropertiesV1_2_0;
  }>;
};
export const VisualContainerFilterContainerFormattingObjectsV1_2_0: Schema.Codec<VisualContainerFilterContainerFormattingObjectsV1_2_0> =
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
            () =>
              VisualContainerFilterContainerFormattingObjectsPropertiesV1_2_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerFilterContainerFormattingObjectsPropertiesV1_2_0 = {
  readonly requireSingleSelect?: Schema.Json;
  readonly isInvertedSelectionMode?: Schema.Json;
};
export const VisualContainerFilterContainerFormattingObjectsPropertiesV1_2_0: Schema.Codec<VisualContainerFilterContainerFormattingObjectsPropertiesV1_2_0> =
  closed({
    requireSingleSelect: Schema.optionalKey(Schema.Json),
    isInvertedSelectionMode: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV1_2_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV1_2_0: Schema.Codec<VisualContainerAnnotationV1_2_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV1_2_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_2_0,
  VisualConfig: VisualContainerVisualConfigV1_2_0,
  Query: VisualContainerQueryV1_2_0,
  SortDefinition: VisualContainerSortDefinitionV1_2_0,
  QuerySort: VisualContainerQuerySortV1_2_0,
  SortDirection: VisualContainerSortDirectionV1_2_0,
  VisualQueryOptions: VisualContainerVisualQueryOptionsV1_2_0,
  ProjectionState: VisualContainerProjectionStateV1_2_0,
  RoleProjection: VisualContainerRoleProjectionV1_2_0,
  RoleFieldParameter: VisualContainerRoleFieldParameterV1_2_0,
  ExpansionState: VisualContainerExpansionStateV1_2_0,
  RootExpansionState: VisualContainerRootExpansionStateV1_2_0,
  NodeExpansionState: VisualContainerNodeExpansionStateV1_2_0,
  LevelExpansionState: VisualContainerLevelExpansionStateV1_2_0,
  AILevelInformation: VisualContainerAILevelInformationV1_2_0,
  AIDecompositionMethod: VisualContainerAIDecompositionMethodV1_2_0,
  VisualContainerFormattingObjects:
    VisualContainerVisualContainerFormattingObjectsV1_2_0,
  Title: VisualContainerTitleV1_2_0,
  SubTitle: VisualContainerSubTitleV1_2_0,
  Divider: VisualContainerDividerV1_2_0,
  Spacing: VisualContainerSpacingV1_2_0,
  Background: VisualContainerBackgroundV1_2_0,
  Padding: VisualContainerPaddingV1_2_0,
  LockAspect: VisualContainerLockAspectV1_2_0,
  VisualContainerGeneralFormattingObjects:
    VisualContainerVisualContainerGeneralFormattingObjectsV1_2_0,
  Border: VisualContainerBorderV1_2_0,
  DropShadow: VisualContainerDropShadowV1_2_0,
  VisualLink: VisualContainerVisualLinkV1_2_0,
  VisualTooltip: VisualContainerVisualTooltipV1_2_0,
  StylePreset: VisualContainerStylePresetV1_2_0,
  VisualHeader: VisualContainerVisualHeaderV1_2_0,
  VisualHeaderTooltip: VisualContainerVisualHeaderTooltipV1_2_0,
  VisualSyncGroup: VisualContainerVisualSyncGroupV1_2_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV1_2_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV1_2_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV1_2_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV1_2_0,
  FilterConfig: VisualContainerFilterConfigV1_2_0,
  FilterContainer: VisualContainerFilterContainerV1_2_0,
  FilterContainerFormattingObjects:
    VisualContainerFilterContainerFormattingObjectsV1_2_0,
  FilterContainerFormattingObjectsProperties:
    VisualContainerFilterContainerFormattingObjectsPropertiesV1_2_0,
  Annotation: VisualContainerAnnotationV1_2_0,
} as const;
export type VisualContainerV1_2_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.2.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_2_0;
      readonly visual: VisualContainerVisualConfigV1_2_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: VisualContainerFilterConfigV1_2_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_2_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.2.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_2_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV1_2_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: VisualContainerFilterConfigV1_2_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_2_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV1_2_0: Schema.Codec<VisualContainerV1_2_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.2.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_2_0,
      ),
      visual: Schema.suspend(() => VisualContainerVisualConfigV1_2_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => VisualContainerFilterConfigV1_2_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_2_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.2.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_2_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV1_2_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => VisualContainerFilterConfigV1_2_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_2_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV1_3_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV1_3_0: Schema.Codec<VisualContainerVisualContainerPositionV1_3_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualConfigV1_3_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualContainerQueryV1_3_0;
  readonly expansionStates?: ReadonlyArray<VisualContainerExpansionStateV1_3_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualContainerVisualContainerFormattingObjectsV1_3_0;
  readonly syncGroup?: VisualContainerVisualSyncGroupV1_3_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualContainerVisualConfigV1_3_0: Schema.Codec<VisualContainerVisualConfigV1_3_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => VisualContainerQueryV1_3_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerExpansionStateV1_3_0)),
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
        () => VisualContainerVisualContainerFormattingObjectsV1_3_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualSyncGroupV1_3_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerQueryV1_3_0 = {
  readonly sortDefinition?: VisualContainerSortDefinitionV1_3_0;
  readonly options?: VisualContainerVisualQueryOptionsV1_3_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualContainerProjectionStateV1_3_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualContainerQueryV1_3_0: Schema.Codec<VisualContainerQueryV1_3_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualContainerSortDefinitionV1_3_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualQueryOptionsV1_3_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualContainerProjectionStateV1_3_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerSortDefinitionV1_3_0 = {
  readonly sort?: ReadonlyArray<VisualContainerQuerySortV1_3_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualContainerSortDefinitionV1_3_0: Schema.Codec<VisualContainerSortDefinitionV1_3_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerQuerySortV1_3_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerQuerySortV1_3_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly direction: VisualContainerSortDirectionV1_3_0;
};
export const VisualContainerQuerySortV1_3_0: Schema.Codec<VisualContainerQuerySortV1_3_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(() => VisualContainerSortDirectionV1_3_0),
  });
export type VisualContainerSortDirectionV1_3_0 = "Ascending" | "Descending";
export const VisualContainerSortDirectionV1_3_0: Schema.Codec<VisualContainerSortDirectionV1_3_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualContainerVisualQueryOptionsV1_3_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualContainerVisualQueryOptionsV1_3_0: Schema.Codec<VisualContainerVisualQueryOptionsV1_3_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerProjectionStateV1_3_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualContainerRoleProjectionV1_3_0>;
  readonly fieldParameters?: ReadonlyArray<VisualContainerRoleFieldParameterV1_3_0>;
};
export const VisualContainerProjectionStateV1_3_0: Schema.Codec<VisualContainerProjectionStateV1_3_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualContainerRoleProjectionV1_3_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerRoleFieldParameterV1_3_0),
      ),
    ),
  });
export type VisualContainerRoleProjectionV1_3_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualContainerRoleProjectionV1_3_0: Schema.Codec<VisualContainerRoleProjectionV1_3_0> =
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
export type VisualContainerRoleFieldParameterV1_3_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
};
export const VisualContainerRoleFieldParameterV1_3_0: Schema.Codec<VisualContainerRoleFieldParameterV1_3_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerExpansionStateV1_3_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualContainerRootExpansionStateV1_3_0;
  readonly levels?: ReadonlyArray<VisualContainerLevelExpansionStateV1_3_0>;
};
export const VisualContainerExpansionStateV1_3_0: Schema.Codec<VisualContainerExpansionStateV1_3_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualContainerRootExpansionStateV1_3_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerLevelExpansionStateV1_3_0),
      ),
    ),
  });
export type VisualContainerRootExpansionStateV1_3_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualContainerNodeExpansionStateV1_3_0>;
};
export const VisualContainerRootExpansionStateV1_3_0: Schema.Codec<VisualContainerRootExpansionStateV1_3_0> =
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
        Schema.suspend(() => VisualContainerNodeExpansionStateV1_3_0),
      ),
    ),
  });
export type VisualContainerNodeExpansionStateV1_3_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualContainerNodeExpansionStateV1_3_0>;
};
export const VisualContainerNodeExpansionStateV1_3_0: Schema.Codec<VisualContainerNodeExpansionStateV1_3_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerNodeExpansionStateV1_3_0),
      ),
    ),
  });
export type VisualContainerLevelExpansionStateV1_3_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualContainerAILevelInformationV1_3_0;
};
export const VisualContainerLevelExpansionStateV1_3_0: Schema.Codec<VisualContainerLevelExpansionStateV1_3_0> =
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
      Schema.suspend(() => VisualContainerAILevelInformationV1_3_0),
    ),
  });
export type VisualContainerAILevelInformationV1_3_0 = {
  readonly method: VisualContainerAIDecompositionMethodV1_3_0;
  readonly disabled?: boolean;
};
export const VisualContainerAILevelInformationV1_3_0: Schema.Codec<VisualContainerAILevelInformationV1_3_0> =
  closed({
    method: Schema.suspend(() => VisualContainerAIDecompositionMethodV1_3_0),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerAIDecompositionMethodV1_3_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualContainerAIDecompositionMethodV1_3_0: Schema.Codec<VisualContainerAIDecompositionMethodV1_3_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualContainerVisualContainerFormattingObjectsV1_3_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerTitleV1_3_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerSubTitleV1_3_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerDividerV1_3_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerSpacingV1_3_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerBackgroundV1_3_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerPaddingV1_3_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerLockAspectV1_3_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualContainerGeneralFormattingObjectsV1_3_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerBorderV1_3_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerDropShadowV1_3_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualLinkV1_3_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualTooltipV1_3_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerStylePresetV1_3_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualHeaderV1_3_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualHeaderTooltipV1_3_0;
  }>;
};
export const VisualContainerVisualContainerFormattingObjectsV1_3_0: Schema.Codec<VisualContainerVisualContainerFormattingObjectsV1_3_0> =
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
          properties: Schema.suspend(() => VisualContainerTitleV1_3_0),
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
          properties: Schema.suspend(() => VisualContainerSubTitleV1_3_0),
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
          properties: Schema.suspend(() => VisualContainerDividerV1_3_0),
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
          properties: Schema.suspend(() => VisualContainerSpacingV1_3_0),
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
          properties: Schema.suspend(() => VisualContainerBackgroundV1_3_0),
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
          properties: Schema.suspend(() => VisualContainerPaddingV1_3_0),
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
          properties: Schema.suspend(() => VisualContainerLockAspectV1_3_0),
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
            () => VisualContainerVisualContainerGeneralFormattingObjectsV1_3_0,
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
          properties: Schema.suspend(() => VisualContainerBorderV1_3_0),
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
          properties: Schema.suspend(() => VisualContainerDropShadowV1_3_0),
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
          properties: Schema.suspend(() => VisualContainerVisualLinkV1_3_0),
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
          properties: Schema.suspend(() => VisualContainerVisualTooltipV1_3_0),
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
          properties: Schema.suspend(() => VisualContainerStylePresetV1_3_0),
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
          properties: Schema.suspend(() => VisualContainerVisualHeaderV1_3_0),
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
            () => VisualContainerVisualHeaderTooltipV1_3_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerTitleV1_3_0 = {
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
export const VisualContainerTitleV1_3_0: Schema.Codec<VisualContainerTitleV1_3_0> =
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
export type VisualContainerSubTitleV1_3_0 = {
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
export const VisualContainerSubTitleV1_3_0: Schema.Codec<VisualContainerSubTitleV1_3_0> =
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
export type VisualContainerDividerV1_3_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualContainerDividerV1_3_0: Schema.Codec<VisualContainerDividerV1_3_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerSpacingV1_3_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualContainerSpacingV1_3_0: Schema.Codec<VisualContainerSpacingV1_3_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerBackgroundV1_3_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualContainerBackgroundV1_3_0: Schema.Codec<VisualContainerBackgroundV1_3_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerPaddingV1_3_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualContainerPaddingV1_3_0: Schema.Codec<VisualContainerPaddingV1_3_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerLockAspectV1_3_0 = {
  readonly show?: Schema.Json;
};
export const VisualContainerLockAspectV1_3_0: Schema.Codec<VisualContainerLockAspectV1_3_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualContainerVisualContainerGeneralFormattingObjectsV1_3_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};
export const VisualContainerVisualContainerGeneralFormattingObjectsV1_3_0: Schema.Codec<VisualContainerVisualContainerGeneralFormattingObjectsV1_3_0> =
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
export type VisualContainerBorderV1_3_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualContainerBorderV1_3_0: Schema.Codec<VisualContainerBorderV1_3_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerDropShadowV1_3_0 = {
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
export const VisualContainerDropShadowV1_3_0: Schema.Codec<VisualContainerDropShadowV1_3_0> =
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
export type VisualContainerVisualLinkV1_3_0 = {
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
export const VisualContainerVisualLinkV1_3_0: Schema.Codec<VisualContainerVisualLinkV1_3_0> =
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
export type VisualContainerVisualTooltipV1_3_0 = {
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
export const VisualContainerVisualTooltipV1_3_0: Schema.Codec<VisualContainerVisualTooltipV1_3_0> =
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
export type VisualContainerStylePresetV1_3_0 = {
  readonly name?: Schema.Json;
};
export const VisualContainerStylePresetV1_3_0: Schema.Codec<VisualContainerStylePresetV1_3_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualContainerVisualHeaderV1_3_0 = {
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
export const VisualContainerVisualHeaderV1_3_0: Schema.Codec<VisualContainerVisualHeaderV1_3_0> =
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
export type VisualContainerVisualHeaderTooltipV1_3_0 = {
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
export const VisualContainerVisualHeaderTooltipV1_3_0: Schema.Codec<VisualContainerVisualHeaderTooltipV1_3_0> =
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
export type VisualContainerVisualSyncGroupV1_3_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualContainerVisualSyncGroupV1_3_0: Schema.Codec<VisualContainerVisualSyncGroupV1_3_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerVisualGroupConfigV1_3_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV1_3_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV1_3_0;
};
export const VisualContainerVisualGroupConfigV1_3_0: Schema.Codec<VisualContainerVisualGroupConfigV1_3_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV1_3_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV1_3_0),
    ),
  });
export type VisualContainerGroupLayoutModeV1_3_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV1_3_0: Schema.Codec<VisualContainerGroupLayoutModeV1_3_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV1_3_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerBackgroundV1_3_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerLockAspectV1_3_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV1_3_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV1_3_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV1_3_0> =
  closed({
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
          properties: Schema.suspend(() => VisualContainerBackgroundV1_3_0),
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
          properties: Schema.suspend(() => VisualContainerLockAspectV1_3_0),
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV1_3_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV1_3_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV1_3_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV1_3_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerFilterConfigV1_3_0 = {
  readonly filters?: ReadonlyArray<VisualContainerFilterContainerV1_3_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};
export const VisualContainerFilterConfigV1_3_0: Schema.Codec<VisualContainerFilterConfigV1_3_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerFilterContainerV1_3_0)),
    ),
    filterSortOrder: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Ascending"),
        Schema.Literal("Descending"),
        Schema.Literal("Custom"),
      ]),
    ),
  });
export type VisualContainerFilterContainerV1_3_0 = {
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
  readonly objects?: VisualContainerFilterContainerFormattingObjectsV1_3_0;
};
export const VisualContainerFilterContainerV1_3_0: Schema.Codec<VisualContainerFilterContainerV1_3_0> =
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
      Schema.suspend(
        () => VisualContainerFilterContainerFormattingObjectsV1_3_0,
      ),
    ),
  });
export type VisualContainerFilterContainerFormattingObjectsV1_3_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerFilterContainerFormattingObjectsPropertiesV1_3_0;
  }>;
};
export const VisualContainerFilterContainerFormattingObjectsV1_3_0: Schema.Codec<VisualContainerFilterContainerFormattingObjectsV1_3_0> =
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
            () =>
              VisualContainerFilterContainerFormattingObjectsPropertiesV1_3_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerFilterContainerFormattingObjectsPropertiesV1_3_0 = {
  readonly requireSingleSelect?: Schema.Json;
  readonly isInvertedSelectionMode?: Schema.Json;
};
export const VisualContainerFilterContainerFormattingObjectsPropertiesV1_3_0: Schema.Codec<VisualContainerFilterContainerFormattingObjectsPropertiesV1_3_0> =
  closed({
    requireSingleSelect: Schema.optionalKey(Schema.Json),
    isInvertedSelectionMode: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV1_3_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV1_3_0: Schema.Codec<VisualContainerAnnotationV1_3_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV1_3_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_3_0,
  VisualConfig: VisualContainerVisualConfigV1_3_0,
  Query: VisualContainerQueryV1_3_0,
  SortDefinition: VisualContainerSortDefinitionV1_3_0,
  QuerySort: VisualContainerQuerySortV1_3_0,
  SortDirection: VisualContainerSortDirectionV1_3_0,
  VisualQueryOptions: VisualContainerVisualQueryOptionsV1_3_0,
  ProjectionState: VisualContainerProjectionStateV1_3_0,
  RoleProjection: VisualContainerRoleProjectionV1_3_0,
  RoleFieldParameter: VisualContainerRoleFieldParameterV1_3_0,
  ExpansionState: VisualContainerExpansionStateV1_3_0,
  RootExpansionState: VisualContainerRootExpansionStateV1_3_0,
  NodeExpansionState: VisualContainerNodeExpansionStateV1_3_0,
  LevelExpansionState: VisualContainerLevelExpansionStateV1_3_0,
  AILevelInformation: VisualContainerAILevelInformationV1_3_0,
  AIDecompositionMethod: VisualContainerAIDecompositionMethodV1_3_0,
  VisualContainerFormattingObjects:
    VisualContainerVisualContainerFormattingObjectsV1_3_0,
  Title: VisualContainerTitleV1_3_0,
  SubTitle: VisualContainerSubTitleV1_3_0,
  Divider: VisualContainerDividerV1_3_0,
  Spacing: VisualContainerSpacingV1_3_0,
  Background: VisualContainerBackgroundV1_3_0,
  Padding: VisualContainerPaddingV1_3_0,
  LockAspect: VisualContainerLockAspectV1_3_0,
  VisualContainerGeneralFormattingObjects:
    VisualContainerVisualContainerGeneralFormattingObjectsV1_3_0,
  Border: VisualContainerBorderV1_3_0,
  DropShadow: VisualContainerDropShadowV1_3_0,
  VisualLink: VisualContainerVisualLinkV1_3_0,
  VisualTooltip: VisualContainerVisualTooltipV1_3_0,
  StylePreset: VisualContainerStylePresetV1_3_0,
  VisualHeader: VisualContainerVisualHeaderV1_3_0,
  VisualHeaderTooltip: VisualContainerVisualHeaderTooltipV1_3_0,
  VisualSyncGroup: VisualContainerVisualSyncGroupV1_3_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV1_3_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV1_3_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV1_3_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV1_3_0,
  FilterConfig: VisualContainerFilterConfigV1_3_0,
  FilterContainer: VisualContainerFilterContainerV1_3_0,
  FilterContainerFormattingObjects:
    VisualContainerFilterContainerFormattingObjectsV1_3_0,
  FilterContainerFormattingObjectsProperties:
    VisualContainerFilterContainerFormattingObjectsPropertiesV1_3_0,
  Annotation: VisualContainerAnnotationV1_3_0,
} as const;
export type VisualContainerV1_3_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.3.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_3_0;
      readonly visual: VisualContainerVisualConfigV1_3_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: VisualContainerFilterConfigV1_3_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_3_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.3.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_3_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV1_3_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: VisualContainerFilterConfigV1_3_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_3_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV1_3_0: Schema.Codec<VisualContainerV1_3_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.3.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_3_0,
      ),
      visual: Schema.suspend(() => VisualContainerVisualConfigV1_3_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => VisualContainerFilterConfigV1_3_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_3_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.3.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_3_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV1_3_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => VisualContainerFilterConfigV1_3_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_3_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV1_4_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV1_4_0: Schema.Codec<VisualContainerVisualContainerPositionV1_4_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualConfigV1_4_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualContainerQueryV1_4_0;
  readonly expansionStates?: ReadonlyArray<VisualContainerExpansionStateV1_4_0>;
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualContainerVisualContainerFormattingObjectsV1_4_0;
  readonly syncGroup?: VisualContainerVisualSyncGroupV1_4_0;
  readonly drillFilterOtherVisuals?: boolean;
};
export const VisualContainerVisualConfigV1_4_0: Schema.Codec<VisualContainerVisualConfigV1_4_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => VisualContainerQueryV1_4_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerExpansionStateV1_4_0)),
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
        () => VisualContainerVisualContainerFormattingObjectsV1_4_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualSyncGroupV1_4_0),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerQueryV1_4_0 = {
  readonly sortDefinition?: VisualContainerSortDefinitionV1_4_0;
  readonly options?: VisualContainerVisualQueryOptionsV1_4_0;
  readonly queryState: {} & {
    readonly [key: string]: VisualContainerProjectionStateV1_4_0;
  };
  readonly isDrillDisabled?: boolean;
};
export const VisualContainerQueryV1_4_0: Schema.Codec<VisualContainerQueryV1_4_0> =
  closed({
    sortDefinition: Schema.optionalKey(
      Schema.suspend(() => VisualContainerSortDefinitionV1_4_0),
    ),
    options: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualQueryOptionsV1_4_0),
    ),
    queryState: Schema.Record(
      Schema.String,
      Schema.suspend(() => VisualContainerProjectionStateV1_4_0),
    ),
    isDrillDisabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerSortDefinitionV1_4_0 = {
  readonly sort?: ReadonlyArray<VisualContainerQuerySortV1_4_0>;
  readonly isDefaultSort?: boolean;
};
export const VisualContainerSortDefinitionV1_4_0: Schema.Codec<VisualContainerSortDefinitionV1_4_0> =
  closed({
    sort: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerQuerySortV1_4_0)),
    ),
    isDefaultSort: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerQuerySortV1_4_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly direction: VisualContainerSortDirectionV1_4_0;
};
export const VisualContainerQuerySortV1_4_0: Schema.Codec<VisualContainerQuerySortV1_4_0> =
  closed({
    field: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    direction: Schema.suspend(() => VisualContainerSortDirectionV1_4_0),
  });
export type VisualContainerSortDirectionV1_4_0 = "Ascending" | "Descending";
export const VisualContainerSortDirectionV1_4_0: Schema.Codec<VisualContainerSortDirectionV1_4_0> =
  Schema.Union([Schema.Literal("Ascending"), Schema.Literal("Descending")]);
export type VisualContainerVisualQueryOptionsV1_4_0 = {
  readonly allowBinnedLineSample?: boolean;
  readonly allowOverlappingPointsSample?: boolean;
};
export const VisualContainerVisualQueryOptionsV1_4_0: Schema.Codec<VisualContainerVisualQueryOptionsV1_4_0> =
  closed({
    allowBinnedLineSample: Schema.optionalKey(Schema.Boolean),
    allowOverlappingPointsSample: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerProjectionStateV1_4_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualContainerRoleProjectionV1_4_0>;
  readonly fieldParameters?: ReadonlyArray<VisualContainerRoleFieldParameterV1_4_0>;
};
export const VisualContainerProjectionStateV1_4_0: Schema.Codec<VisualContainerProjectionStateV1_4_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(
      Schema.suspend(() => VisualContainerRoleProjectionV1_4_0),
    ),
    fieldParameters: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerRoleFieldParameterV1_4_0),
      ),
    ),
  });
export type VisualContainerRoleProjectionV1_4_0 = {
  readonly field: Query.QueryExpressionContainerV1_2_0;
  readonly queryRef: string;
  readonly nativeQueryRef?: string;
  readonly displayName?: string;
  readonly format?: string;
  readonly active?: boolean;
  readonly hidden?: boolean;
};
export const VisualContainerRoleProjectionV1_4_0: Schema.Codec<VisualContainerRoleProjectionV1_4_0> =
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
export type VisualContainerRoleFieldParameterV1_4_0 = {
  readonly parameterExpr: Query.QueryExpressionContainerV1_2_0;
  readonly index: number;
  readonly length?: number;
};
export const VisualContainerRoleFieldParameterV1_4_0: Schema.Codec<VisualContainerRoleFieldParameterV1_4_0> =
  closed({
    parameterExpr: Schema.suspend(
      () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
    ),
    index: Schema.Finite,
    length: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerExpansionStateV1_4_0 = {
  readonly roles: ReadonlyArray<string>;
  readonly root?: VisualContainerRootExpansionStateV1_4_0;
  readonly levels?: ReadonlyArray<VisualContainerLevelExpansionStateV1_4_0>;
};
export const VisualContainerExpansionStateV1_4_0: Schema.Codec<VisualContainerExpansionStateV1_4_0> =
  closed({
    roles: Schema.Array(Schema.String),
    root: Schema.optionalKey(
      Schema.suspend(() => VisualContainerRootExpansionStateV1_4_0),
    ),
    levels: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerLevelExpansionStateV1_4_0),
      ),
    ),
  });
export type VisualContainerRootExpansionStateV1_4_0 = {
  readonly identityValues?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualContainerNodeExpansionStateV1_4_0>;
};
export const VisualContainerRootExpansionStateV1_4_0: Schema.Codec<VisualContainerRootExpansionStateV1_4_0> =
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
        Schema.suspend(() => VisualContainerNodeExpansionStateV1_4_0),
      ),
    ),
  });
export type VisualContainerNodeExpansionStateV1_4_0 = {
  readonly identityValues: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualContainerNodeExpansionStateV1_4_0>;
};
export const VisualContainerNodeExpansionStateV1_4_0: Schema.Codec<VisualContainerNodeExpansionStateV1_4_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => Query.SemanticQueryDefinitionsV1_2_0.QueryExpressionContainer,
      ),
    ),
    isToggled: Schema.optionalKey(Schema.Boolean),
    children: Schema.optionalKey(
      Schema.Array(
        Schema.suspend(() => VisualContainerNodeExpansionStateV1_4_0),
      ),
    ),
  });
export type VisualContainerLevelExpansionStateV1_4_0 = {
  readonly identityKeys?: ReadonlyArray<Query.QueryExpressionContainerV1_2_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualContainerAILevelInformationV1_4_0;
};
export const VisualContainerLevelExpansionStateV1_4_0: Schema.Codec<VisualContainerLevelExpansionStateV1_4_0> =
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
      Schema.suspend(() => VisualContainerAILevelInformationV1_4_0),
    ),
  });
export type VisualContainerAILevelInformationV1_4_0 = {
  readonly method: VisualContainerAIDecompositionMethodV1_4_0;
  readonly disabled?: boolean;
};
export const VisualContainerAILevelInformationV1_4_0: Schema.Codec<VisualContainerAILevelInformationV1_4_0> =
  closed({
    method: Schema.suspend(() => VisualContainerAIDecompositionMethodV1_4_0),
    disabled: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerAIDecompositionMethodV1_4_0 =
  "BestSplit" | "MaxSplit" | "MinSplit";
export const VisualContainerAIDecompositionMethodV1_4_0: Schema.Codec<VisualContainerAIDecompositionMethodV1_4_0> =
  Schema.Literals(["BestSplit", "MaxSplit", "MinSplit"]);
export type VisualContainerVisualContainerFormattingObjectsV1_4_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerTitleV1_4_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerSubTitleV1_4_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerDividerV1_4_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerSpacingV1_4_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerBackgroundV1_4_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerPaddingV1_4_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerLockAspectV1_4_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualContainerGeneralFormattingObjectsV1_4_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerBorderV1_4_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerDropShadowV1_4_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualLinkV1_4_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualTooltipV1_4_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerStylePresetV1_4_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualHeaderV1_4_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualHeaderTooltipV1_4_0;
  }>;
};
export const VisualContainerVisualContainerFormattingObjectsV1_4_0: Schema.Codec<VisualContainerVisualContainerFormattingObjectsV1_4_0> =
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
          properties: Schema.suspend(() => VisualContainerTitleV1_4_0),
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
          properties: Schema.suspend(() => VisualContainerSubTitleV1_4_0),
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
          properties: Schema.suspend(() => VisualContainerDividerV1_4_0),
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
          properties: Schema.suspend(() => VisualContainerSpacingV1_4_0),
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
          properties: Schema.suspend(() => VisualContainerBackgroundV1_4_0),
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
          properties: Schema.suspend(() => VisualContainerPaddingV1_4_0),
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
          properties: Schema.suspend(() => VisualContainerLockAspectV1_4_0),
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
            () => VisualContainerVisualContainerGeneralFormattingObjectsV1_4_0,
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
          properties: Schema.suspend(() => VisualContainerBorderV1_4_0),
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
          properties: Schema.suspend(() => VisualContainerDropShadowV1_4_0),
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
          properties: Schema.suspend(() => VisualContainerVisualLinkV1_4_0),
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
          properties: Schema.suspend(() => VisualContainerVisualTooltipV1_4_0),
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
          properties: Schema.suspend(() => VisualContainerStylePresetV1_4_0),
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
          properties: Schema.suspend(() => VisualContainerVisualHeaderV1_4_0),
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
            () => VisualContainerVisualHeaderTooltipV1_4_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerTitleV1_4_0 = {
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
export const VisualContainerTitleV1_4_0: Schema.Codec<VisualContainerTitleV1_4_0> =
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
export type VisualContainerSubTitleV1_4_0 = {
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
export const VisualContainerSubTitleV1_4_0: Schema.Codec<VisualContainerSubTitleV1_4_0> =
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
export type VisualContainerDividerV1_4_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualContainerDividerV1_4_0: Schema.Codec<VisualContainerDividerV1_4_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerSpacingV1_4_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualContainerSpacingV1_4_0: Schema.Codec<VisualContainerSpacingV1_4_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerBackgroundV1_4_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualContainerBackgroundV1_4_0: Schema.Codec<VisualContainerBackgroundV1_4_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerPaddingV1_4_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualContainerPaddingV1_4_0: Schema.Codec<VisualContainerPaddingV1_4_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerLockAspectV1_4_0 = {
  readonly show?: Schema.Json;
};
export const VisualContainerLockAspectV1_4_0: Schema.Codec<VisualContainerLockAspectV1_4_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualContainerVisualContainerGeneralFormattingObjectsV1_4_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
  readonly allowBinnedLineSample?: Schema.Json;
  readonly allowOverlappingPointsSample?: Schema.Json;
  readonly keepLayerOrder?: Schema.Json;
};
export const VisualContainerVisualContainerGeneralFormattingObjectsV1_4_0: Schema.Codec<VisualContainerVisualContainerGeneralFormattingObjectsV1_4_0> =
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
export type VisualContainerBorderV1_4_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualContainerBorderV1_4_0: Schema.Codec<VisualContainerBorderV1_4_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerDropShadowV1_4_0 = {
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
export const VisualContainerDropShadowV1_4_0: Schema.Codec<VisualContainerDropShadowV1_4_0> =
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
export type VisualContainerVisualLinkV1_4_0 = {
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
export const VisualContainerVisualLinkV1_4_0: Schema.Codec<VisualContainerVisualLinkV1_4_0> =
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
export type VisualContainerVisualTooltipV1_4_0 = {
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
export const VisualContainerVisualTooltipV1_4_0: Schema.Codec<VisualContainerVisualTooltipV1_4_0> =
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
export type VisualContainerStylePresetV1_4_0 = {
  readonly name?: Schema.Json;
};
export const VisualContainerStylePresetV1_4_0: Schema.Codec<VisualContainerStylePresetV1_4_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualContainerVisualHeaderV1_4_0 = {
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
export const VisualContainerVisualHeaderV1_4_0: Schema.Codec<VisualContainerVisualHeaderV1_4_0> =
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
export type VisualContainerVisualHeaderTooltipV1_4_0 = {
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
export const VisualContainerVisualHeaderTooltipV1_4_0: Schema.Codec<VisualContainerVisualHeaderTooltipV1_4_0> =
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
export type VisualContainerVisualSyncGroupV1_4_0 = {
  readonly groupName: string;
  readonly fieldChanges?: boolean;
  readonly filterChanges?: boolean;
};
export const VisualContainerVisualSyncGroupV1_4_0: Schema.Codec<VisualContainerVisualSyncGroupV1_4_0> =
  closed({
    groupName: Schema.String,
    fieldChanges: Schema.optionalKey(Schema.Boolean),
    filterChanges: Schema.optionalKey(Schema.Boolean),
  });
export type VisualContainerVisualGroupConfigV1_4_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV1_4_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV1_4_0;
};
export const VisualContainerVisualGroupConfigV1_4_0: Schema.Codec<VisualContainerVisualGroupConfigV1_4_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV1_4_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV1_4_0),
    ),
  });
export type VisualContainerGroupLayoutModeV1_4_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV1_4_0: Schema.Codec<VisualContainerGroupLayoutModeV1_4_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV1_4_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerBackgroundV1_4_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerLockAspectV1_4_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV1_4_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV1_4_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV1_4_0> =
  closed({
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
          properties: Schema.suspend(() => VisualContainerBackgroundV1_4_0),
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
          properties: Schema.suspend(() => VisualContainerLockAspectV1_4_0),
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV1_4_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV1_4_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV1_4_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV1_4_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerFilterConfigV1_4_0 = {
  readonly filters?: ReadonlyArray<VisualContainerFilterContainerV1_4_0>;
  readonly filterSortOrder?: "Ascending" | "Descending" | "Custom";
};
export const VisualContainerFilterConfigV1_4_0: Schema.Codec<VisualContainerFilterConfigV1_4_0> =
  closed({
    filters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualContainerFilterContainerV1_4_0)),
    ),
    filterSortOrder: Schema.optionalKey(
      Schema.Union([
        Schema.Literal("Ascending"),
        Schema.Literal("Descending"),
        Schema.Literal("Custom"),
      ]),
    ),
  });
export type VisualContainerFilterContainerV1_4_0 = {
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
  readonly objects?: VisualContainerFilterContainerFormattingObjectsV1_4_0;
};
export const VisualContainerFilterContainerV1_4_0: Schema.Codec<VisualContainerFilterContainerV1_4_0> =
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
      Schema.suspend(
        () => VisualContainerFilterContainerFormattingObjectsV1_4_0,
      ),
    ),
  });
export type VisualContainerFilterContainerFormattingObjectsV1_4_0 = {
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerFilterContainerFormattingObjectsPropertiesV1_4_0;
  }>;
};
export const VisualContainerFilterContainerFormattingObjectsV1_4_0: Schema.Codec<VisualContainerFilterContainerFormattingObjectsV1_4_0> =
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
            () =>
              VisualContainerFilterContainerFormattingObjectsPropertiesV1_4_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerFilterContainerFormattingObjectsPropertiesV1_4_0 = {
  readonly requireSingleSelect?: Schema.Json;
  readonly isInvertedSelectionMode?: Schema.Json;
};
export const VisualContainerFilterContainerFormattingObjectsPropertiesV1_4_0: Schema.Codec<VisualContainerFilterContainerFormattingObjectsPropertiesV1_4_0> =
  closed({
    requireSingleSelect: Schema.optionalKey(Schema.Json),
    isInvertedSelectionMode: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV1_4_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV1_4_0: Schema.Codec<VisualContainerAnnotationV1_4_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV1_4_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_4_0,
  VisualConfig: VisualContainerVisualConfigV1_4_0,
  Query: VisualContainerQueryV1_4_0,
  SortDefinition: VisualContainerSortDefinitionV1_4_0,
  QuerySort: VisualContainerQuerySortV1_4_0,
  SortDirection: VisualContainerSortDirectionV1_4_0,
  VisualQueryOptions: VisualContainerVisualQueryOptionsV1_4_0,
  ProjectionState: VisualContainerProjectionStateV1_4_0,
  RoleProjection: VisualContainerRoleProjectionV1_4_0,
  RoleFieldParameter: VisualContainerRoleFieldParameterV1_4_0,
  ExpansionState: VisualContainerExpansionStateV1_4_0,
  RootExpansionState: VisualContainerRootExpansionStateV1_4_0,
  NodeExpansionState: VisualContainerNodeExpansionStateV1_4_0,
  LevelExpansionState: VisualContainerLevelExpansionStateV1_4_0,
  AILevelInformation: VisualContainerAILevelInformationV1_4_0,
  AIDecompositionMethod: VisualContainerAIDecompositionMethodV1_4_0,
  VisualContainerFormattingObjects:
    VisualContainerVisualContainerFormattingObjectsV1_4_0,
  Title: VisualContainerTitleV1_4_0,
  SubTitle: VisualContainerSubTitleV1_4_0,
  Divider: VisualContainerDividerV1_4_0,
  Spacing: VisualContainerSpacingV1_4_0,
  Background: VisualContainerBackgroundV1_4_0,
  Padding: VisualContainerPaddingV1_4_0,
  LockAspect: VisualContainerLockAspectV1_4_0,
  VisualContainerGeneralFormattingObjects:
    VisualContainerVisualContainerGeneralFormattingObjectsV1_4_0,
  Border: VisualContainerBorderV1_4_0,
  DropShadow: VisualContainerDropShadowV1_4_0,
  VisualLink: VisualContainerVisualLinkV1_4_0,
  VisualTooltip: VisualContainerVisualTooltipV1_4_0,
  StylePreset: VisualContainerStylePresetV1_4_0,
  VisualHeader: VisualContainerVisualHeaderV1_4_0,
  VisualHeaderTooltip: VisualContainerVisualHeaderTooltipV1_4_0,
  VisualSyncGroup: VisualContainerVisualSyncGroupV1_4_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV1_4_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV1_4_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV1_4_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV1_4_0,
  FilterConfig: VisualContainerFilterConfigV1_4_0,
  FilterContainer: VisualContainerFilterContainerV1_4_0,
  FilterContainerFormattingObjects:
    VisualContainerFilterContainerFormattingObjectsV1_4_0,
  FilterContainerFormattingObjectsProperties:
    VisualContainerFilterContainerFormattingObjectsPropertiesV1_4_0,
  Annotation: VisualContainerAnnotationV1_4_0,
} as const;
export type VisualContainerV1_4_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.4.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_4_0;
      readonly visual: VisualContainerVisualConfigV1_4_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: VisualContainerFilterConfigV1_4_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_4_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.4.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_4_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV1_4_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: VisualContainerFilterConfigV1_4_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_4_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV1_4_0: Schema.Codec<VisualContainerV1_4_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.4.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_4_0,
      ),
      visual: Schema.suspend(() => VisualContainerVisualConfigV1_4_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => VisualContainerFilterConfigV1_4_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_4_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.4.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_4_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV1_4_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => VisualContainerFilterConfigV1_4_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_4_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV1_5_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV1_5_0: Schema.Codec<VisualContainerVisualContainerPositionV1_5_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualGroupConfigV1_5_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV1_5_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV1_5_0;
};
export const VisualContainerVisualGroupConfigV1_5_0: Schema.Codec<VisualContainerVisualGroupConfigV1_5_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV1_5_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV1_5_0),
    ),
  });
export type VisualContainerGroupLayoutModeV1_5_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV1_5_0: Schema.Codec<VisualContainerGroupLayoutModeV1_5_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV1_5_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: Visual.VisualConfigurationEmbeddedBackgroundV1_5_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: Visual.VisualConfigurationEmbeddedLockAspectV1_5_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV1_5_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV1_5_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV1_5_0> =
  closed({
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV1_5_0.Background,
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV1_5_0.LockAspect,
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV1_5_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV1_5_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV1_5_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV1_5_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV1_5_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV1_5_0: Schema.Codec<VisualContainerAnnotationV1_5_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV1_5_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_5_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV1_5_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV1_5_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV1_5_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV1_5_0,
  Annotation: VisualContainerAnnotationV1_5_0,
} as const;
export type VisualContainerV1_5_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.5.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_5_0;
      readonly visual: Visual.VisualConfigurationEmbeddedV1_5_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_0_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_5_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.5.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_5_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV1_5_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_0_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_5_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV1_5_0: Schema.Codec<VisualContainerV1_5_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.5.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_5_0,
      ),
      visual: Schema.suspend(() => Visual.VisualConfigurationEmbeddedV1_5_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_0_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_5_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.5.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_5_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV1_5_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_0_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_5_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV1_6_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV1_6_0: Schema.Codec<VisualContainerVisualContainerPositionV1_6_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualGroupConfigV1_6_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV1_6_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV1_6_0;
};
export const VisualContainerVisualGroupConfigV1_6_0: Schema.Codec<VisualContainerVisualGroupConfigV1_6_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV1_6_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV1_6_0),
    ),
  });
export type VisualContainerGroupLayoutModeV1_6_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV1_6_0: Schema.Codec<VisualContainerGroupLayoutModeV1_6_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV1_6_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: Visual.VisualConfigurationEmbeddedBackgroundV1_6_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: Visual.VisualConfigurationEmbeddedLockAspectV1_6_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV1_6_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV1_6_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV1_6_0> =
  closed({
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV1_6_0.Background,
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV1_6_0.LockAspect,
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV1_6_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV1_6_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV1_6_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV1_6_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV1_6_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV1_6_0: Schema.Codec<VisualContainerAnnotationV1_6_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV1_6_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_6_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV1_6_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV1_6_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV1_6_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV1_6_0,
  Annotation: VisualContainerAnnotationV1_6_0,
} as const;
export type VisualContainerV1_6_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.6.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_6_0;
      readonly visual: Visual.VisualConfigurationEmbeddedV1_6_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_0_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_6_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.6.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_6_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV1_6_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_0_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_6_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV1_6_0: Schema.Codec<VisualContainerV1_6_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.6.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_6_0,
      ),
      visual: Schema.suspend(() => Visual.VisualConfigurationEmbeddedV1_6_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_0_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_6_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.6.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_6_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV1_6_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_0_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_6_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV1_7_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV1_7_0: Schema.Codec<VisualContainerVisualContainerPositionV1_7_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualGroupConfigV1_7_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV1_7_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV1_7_0;
};
export const VisualContainerVisualGroupConfigV1_7_0: Schema.Codec<VisualContainerVisualGroupConfigV1_7_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV1_7_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV1_7_0),
    ),
  });
export type VisualContainerGroupLayoutModeV1_7_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV1_7_0: Schema.Codec<VisualContainerGroupLayoutModeV1_7_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV1_7_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: Visual.VisualConfigurationEmbeddedBackgroundV1_7_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: Visual.VisualConfigurationEmbeddedLockAspectV1_7_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV1_7_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV1_7_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV1_7_0> =
  closed({
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV1_7_0.Background,
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV1_7_0.LockAspect,
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV1_7_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV1_7_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV1_7_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV1_7_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV1_7_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV1_7_0: Schema.Codec<VisualContainerAnnotationV1_7_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV1_7_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_7_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV1_7_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV1_7_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV1_7_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV1_7_0,
  Annotation: VisualContainerAnnotationV1_7_0,
} as const;
export type VisualContainerV1_7_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.7.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_7_0;
      readonly visual: Visual.VisualConfigurationEmbeddedV1_7_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_0_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_7_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.7.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_7_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV1_7_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_0_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_7_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV1_7_0: Schema.Codec<VisualContainerV1_7_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.7.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_7_0,
      ),
      visual: Schema.suspend(() => Visual.VisualConfigurationEmbeddedV1_7_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_0_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_7_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.7.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_7_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV1_7_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_0_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_7_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV1_8_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV1_8_0: Schema.Codec<VisualContainerVisualContainerPositionV1_8_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualGroupConfigV1_8_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV1_8_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV1_8_0;
};
export const VisualContainerVisualGroupConfigV1_8_0: Schema.Codec<VisualContainerVisualGroupConfigV1_8_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV1_8_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV1_8_0),
    ),
  });
export type VisualContainerGroupLayoutModeV1_8_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV1_8_0: Schema.Codec<VisualContainerGroupLayoutModeV1_8_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV1_8_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: Visual.VisualConfigurationEmbeddedBackgroundV1_8_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: Visual.VisualConfigurationEmbeddedLockAspectV1_8_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV1_8_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV1_8_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV1_8_0> =
  closed({
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV1_8_0.Background,
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV1_8_0.LockAspect,
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV1_8_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV1_8_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV1_8_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV1_8_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV1_8_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV1_8_0: Schema.Codec<VisualContainerAnnotationV1_8_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV1_8_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_8_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV1_8_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV1_8_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV1_8_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV1_8_0,
  Annotation: VisualContainerAnnotationV1_8_0,
} as const;
export type VisualContainerV1_8_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.8.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_8_0;
      readonly visual: Visual.VisualConfigurationEmbeddedV1_8_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_1_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_8_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.8.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV1_8_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV1_8_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_1_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV1_8_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV1_8_0: Schema.Codec<VisualContainerV1_8_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.8.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_8_0,
      ),
      visual: Schema.suspend(() => Visual.VisualConfigurationEmbeddedV1_8_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_1_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_8_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.8.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV1_8_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV1_8_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_1_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV1_8_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV2_0_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV2_0_0: Schema.Codec<VisualContainerVisualContainerPositionV2_0_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualGroupConfigV2_0_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV2_0_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV2_0_0;
};
export const VisualContainerVisualGroupConfigV2_0_0: Schema.Codec<VisualContainerVisualGroupConfigV2_0_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV2_0_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV2_0_0),
    ),
  });
export type VisualContainerGroupLayoutModeV2_0_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV2_0_0: Schema.Codec<VisualContainerGroupLayoutModeV2_0_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV2_0_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: Visual.VisualConfigurationEmbeddedBackgroundV2_0_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: Visual.VisualConfigurationEmbeddedLockAspectV2_0_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV2_0_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV2_0_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV2_0_0> =
  closed({
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_0_0.Background,
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_0_0.LockAspect,
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV2_0_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV2_0_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV2_0_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV2_0_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV2_0_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV2_0_0: Schema.Codec<VisualContainerAnnotationV2_0_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV2_0_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV2_0_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV2_0_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV2_0_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV2_0_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV2_0_0,
  Annotation: VisualContainerAnnotationV2_0_0,
} as const;
export type VisualContainerV2_0_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.0.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_0_0;
      readonly visual: Visual.VisualConfigurationEmbeddedV2_0_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_1_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_0_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.0.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_0_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV2_0_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_1_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_0_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV2_0_0: Schema.Codec<VisualContainerV2_0_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.0.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_0_0,
      ),
      visual: Schema.suspend(() => Visual.VisualConfigurationEmbeddedV2_0_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_1_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_0_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.0.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_0_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV2_0_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_1_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_0_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV2_1_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV2_1_0: Schema.Codec<VisualContainerVisualContainerPositionV2_1_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualGroupConfigV2_1_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV2_1_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV2_1_0;
};
export const VisualContainerVisualGroupConfigV2_1_0: Schema.Codec<VisualContainerVisualGroupConfigV2_1_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV2_1_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV2_1_0),
    ),
  });
export type VisualContainerGroupLayoutModeV2_1_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV2_1_0: Schema.Codec<VisualContainerGroupLayoutModeV2_1_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV2_1_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: Visual.VisualConfigurationEmbeddedBackgroundV2_1_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: Visual.VisualConfigurationEmbeddedLockAspectV2_1_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV2_1_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV2_1_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV2_1_0> =
  closed({
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_1_0.Background,
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_1_0.LockAspect,
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV2_1_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV2_1_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV2_1_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV2_1_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV2_1_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV2_1_0: Schema.Codec<VisualContainerAnnotationV2_1_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV2_1_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV2_1_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV2_1_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV2_1_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV2_1_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV2_1_0,
  Annotation: VisualContainerAnnotationV2_1_0,
} as const;
export type VisualContainerV2_1_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.1.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_1_0;
      readonly visual: Visual.VisualConfigurationEmbeddedV2_1_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_2_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_1_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.1.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_1_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV2_1_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_2_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_1_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV2_1_0: Schema.Codec<VisualContainerV2_1_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.1.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_1_0,
      ),
      visual: Schema.suspend(() => Visual.VisualConfigurationEmbeddedV2_1_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_1_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.1.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_1_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV2_1_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_1_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV2_2_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV2_2_0: Schema.Codec<VisualContainerVisualContainerPositionV2_2_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualGroupConfigV2_2_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV2_2_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV2_2_0;
};
export const VisualContainerVisualGroupConfigV2_2_0: Schema.Codec<VisualContainerVisualGroupConfigV2_2_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV2_2_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV2_2_0),
    ),
  });
export type VisualContainerGroupLayoutModeV2_2_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV2_2_0: Schema.Codec<VisualContainerGroupLayoutModeV2_2_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV2_2_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: Visual.VisualConfigurationEmbeddedBackgroundV2_2_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: Visual.VisualConfigurationEmbeddedLockAspectV2_2_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV2_2_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV2_2_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV2_2_0> =
  closed({
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_2_0.Background,
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_2_0.LockAspect,
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV2_2_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV2_2_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV2_2_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV2_2_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV2_2_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV2_2_0: Schema.Codec<VisualContainerAnnotationV2_2_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV2_2_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV2_2_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV2_2_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV2_2_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV2_2_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV2_2_0,
  Annotation: VisualContainerAnnotationV2_2_0,
} as const;
export type VisualContainerV2_2_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.2.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_2_0;
      readonly visual: Visual.VisualConfigurationEmbeddedV2_2_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_2_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_2_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.2.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_2_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV2_2_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_2_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_2_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV2_2_0: Schema.Codec<VisualContainerV2_2_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.2.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_2_0,
      ),
      visual: Schema.suspend(() => Visual.VisualConfigurationEmbeddedV2_2_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_2_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.2.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_2_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV2_2_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_2_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV2_3_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV2_3_0: Schema.Codec<VisualContainerVisualContainerPositionV2_3_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualGroupConfigV2_3_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV2_3_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV2_3_0;
};
export const VisualContainerVisualGroupConfigV2_3_0: Schema.Codec<VisualContainerVisualGroupConfigV2_3_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV2_3_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV2_3_0),
    ),
  });
export type VisualContainerGroupLayoutModeV2_3_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV2_3_0: Schema.Codec<VisualContainerGroupLayoutModeV2_3_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV2_3_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: Visual.VisualConfigurationEmbeddedBackgroundV2_2_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: Visual.VisualConfigurationEmbeddedLockAspectV2_2_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV2_3_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV2_3_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV2_3_0> =
  closed({
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_2_0.Background,
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_2_0.LockAspect,
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV2_3_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV2_3_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV2_3_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV2_3_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV2_3_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV2_3_0: Schema.Codec<VisualContainerAnnotationV2_3_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV2_3_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV2_3_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV2_3_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV2_3_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV2_3_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV2_3_0,
  Annotation: VisualContainerAnnotationV2_3_0,
} as const;
export type VisualContainerV2_3_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.3.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_3_0;
      readonly visual: Visual.VisualConfigurationEmbeddedV2_2_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_2_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_3_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.3.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_3_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV2_3_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_2_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_3_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV2_3_0: Schema.Codec<VisualContainerV2_3_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.3.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_3_0,
      ),
      visual: Schema.suspend(() => Visual.VisualConfigurationEmbeddedV2_2_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_3_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.3.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_3_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV2_3_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_3_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV2_4_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV2_4_0: Schema.Codec<VisualContainerVisualContainerPositionV2_4_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualGroupConfigV2_4_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV2_4_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV2_4_0;
};
export const VisualContainerVisualGroupConfigV2_4_0: Schema.Codec<VisualContainerVisualGroupConfigV2_4_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV2_4_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV2_4_0),
    ),
  });
export type VisualContainerGroupLayoutModeV2_4_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV2_4_0: Schema.Codec<VisualContainerGroupLayoutModeV2_4_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV2_4_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: Visual.VisualConfigurationEmbeddedBackgroundV2_2_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: Visual.VisualConfigurationEmbeddedLockAspectV2_2_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV2_4_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV2_4_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV2_4_0> =
  closed({
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_2_0.Background,
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_2_0.LockAspect,
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV2_4_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV2_4_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV2_4_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV2_4_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV2_4_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV2_4_0: Schema.Codec<VisualContainerAnnotationV2_4_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV2_4_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV2_4_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV2_4_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV2_4_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV2_4_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV2_4_0,
  Annotation: VisualContainerAnnotationV2_4_0,
} as const;
export type VisualContainerV2_4_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.4.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_4_0;
      readonly visual: Visual.VisualConfigurationEmbeddedV2_2_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_2_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_4_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.4.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_4_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV2_4_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_2_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_4_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV2_4_0: Schema.Codec<VisualContainerV2_4_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.4.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_4_0,
      ),
      visual: Schema.suspend(() => Visual.VisualConfigurationEmbeddedV2_2_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_4_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.4.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_4_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV2_4_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_4_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV2_5_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV2_5_0: Schema.Codec<VisualContainerVisualContainerPositionV2_5_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualGroupConfigV2_5_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV2_5_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV2_5_0;
};
export const VisualContainerVisualGroupConfigV2_5_0: Schema.Codec<VisualContainerVisualGroupConfigV2_5_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV2_5_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV2_5_0),
    ),
  });
export type VisualContainerGroupLayoutModeV2_5_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV2_5_0: Schema.Codec<VisualContainerGroupLayoutModeV2_5_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV2_5_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: Visual.VisualConfigurationEmbeddedBackgroundV2_2_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: Visual.VisualConfigurationEmbeddedLockAspectV2_2_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV2_5_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV2_5_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV2_5_0> =
  closed({
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_2_0.Background,
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_2_0.LockAspect,
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV2_5_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV2_5_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV2_5_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV2_5_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV2_5_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV2_5_0: Schema.Codec<VisualContainerAnnotationV2_5_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV2_5_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV2_5_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV2_5_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV2_5_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV2_5_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV2_5_0,
  Annotation: VisualContainerAnnotationV2_5_0,
} as const;
export type VisualContainerV2_5_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.5.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_5_0;
      readonly visual: Visual.VisualConfigurationEmbeddedV2_2_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_2_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_5_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.5.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_5_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV2_5_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_2_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_5_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV2_5_0: Schema.Codec<VisualContainerV2_5_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.5.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_5_0,
      ),
      visual: Schema.suspend(() => Visual.VisualConfigurationEmbeddedV2_2_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_5_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.5.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_5_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV2_5_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_5_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV2_6_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV2_6_0: Schema.Codec<VisualContainerVisualContainerPositionV2_6_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualGroupConfigV2_6_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV2_6_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV2_6_0;
};
export const VisualContainerVisualGroupConfigV2_6_0: Schema.Codec<VisualContainerVisualGroupConfigV2_6_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV2_6_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV2_6_0),
    ),
  });
export type VisualContainerGroupLayoutModeV2_6_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV2_6_0: Schema.Codec<VisualContainerGroupLayoutModeV2_6_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV2_6_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: Visual.VisualConfigurationEmbeddedBackgroundV2_2_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: Visual.VisualConfigurationEmbeddedLockAspectV2_2_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_4_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV2_6_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV2_6_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV2_6_0> =
  closed({
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_2_0.Background,
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_2_0.LockAspect,
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV2_6_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV2_6_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV2_6_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV2_6_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV2_6_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV2_6_0: Schema.Codec<VisualContainerAnnotationV2_6_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV2_6_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV2_6_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV2_6_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV2_6_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV2_6_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV2_6_0,
  Annotation: VisualContainerAnnotationV2_6_0,
} as const;
export type VisualContainerV2_6_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.6.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_6_0;
      readonly visual: Visual.VisualConfigurationEmbeddedV2_2_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_2_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_6_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.6.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_6_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV2_6_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_2_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_6_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV2_6_0: Schema.Codec<VisualContainerV2_6_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.6.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_6_0,
      ),
      visual: Schema.suspend(() => Visual.VisualConfigurationEmbeddedV2_2_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_6_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.6.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_6_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV2_6_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_2_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_6_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV2_7_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV2_7_0: Schema.Codec<VisualContainerVisualContainerPositionV2_7_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualGroupConfigV2_7_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV2_7_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV2_7_0;
};
export const VisualContainerVisualGroupConfigV2_7_0: Schema.Codec<VisualContainerVisualGroupConfigV2_7_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV2_7_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV2_7_0),
    ),
  });
export type VisualContainerGroupLayoutModeV2_7_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV2_7_0: Schema.Codec<VisualContainerGroupLayoutModeV2_7_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV2_7_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: Visual.VisualConfigurationEmbeddedBackgroundV2_3_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: Visual.VisualConfigurationEmbeddedLockAspectV2_3_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV2_7_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV2_7_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV2_7_0> =
  closed({
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_3_0.Background,
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_3_0.LockAspect,
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV2_7_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV2_7_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV2_7_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV2_7_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV2_7_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV2_7_0: Schema.Codec<VisualContainerAnnotationV2_7_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV2_7_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV2_7_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV2_7_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV2_7_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV2_7_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV2_7_0,
  Annotation: VisualContainerAnnotationV2_7_0,
} as const;
export type VisualContainerV2_7_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.7.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_7_0;
      readonly visual: Visual.VisualConfigurationEmbeddedV2_3_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_3_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_7_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.7.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_7_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV2_7_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_3_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_7_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV2_7_0: Schema.Codec<VisualContainerV2_7_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.7.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_7_0,
      ),
      visual: Schema.suspend(() => Visual.VisualConfigurationEmbeddedV2_3_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_3_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_7_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.7.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_7_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV2_7_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_3_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_7_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV2_8_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV2_8_0: Schema.Codec<VisualContainerVisualContainerPositionV2_8_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualGroupConfigV2_8_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV2_8_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV2_8_0;
};
export const VisualContainerVisualGroupConfigV2_8_0: Schema.Codec<VisualContainerVisualGroupConfigV2_8_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV2_8_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV2_8_0),
    ),
  });
export type VisualContainerGroupLayoutModeV2_8_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV2_8_0: Schema.Codec<VisualContainerGroupLayoutModeV2_8_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV2_8_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: Visual.VisualConfigurationEmbeddedBackgroundV2_3_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: Visual.VisualConfigurationEmbeddedLockAspectV2_3_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV2_8_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV2_8_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV2_8_0> =
  closed({
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_3_0.Background,
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_3_0.LockAspect,
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV2_8_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV2_8_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV2_8_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV2_8_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV2_8_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV2_8_0: Schema.Codec<VisualContainerAnnotationV2_8_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV2_8_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV2_8_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV2_8_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV2_8_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV2_8_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV2_8_0,
  Annotation: VisualContainerAnnotationV2_8_0,
} as const;
export type VisualContainerV2_8_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.8.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_8_0;
      readonly visual: Visual.VisualConfigurationEmbeddedV2_3_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_3_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_8_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.8.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_8_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV2_8_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_3_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_8_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV2_8_0: Schema.Codec<VisualContainerV2_8_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.8.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_8_0,
      ),
      visual: Schema.suspend(() => Visual.VisualConfigurationEmbeddedV2_3_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_3_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_8_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.8.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_8_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV2_8_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_3_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_8_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerVisualContainerPositionV2_9_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerVisualContainerPositionV2_9_0: Schema.Codec<VisualContainerVisualContainerPositionV2_9_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export type VisualContainerVisualGroupConfigV2_9_0 = {
  readonly displayName: string;
  readonly groupMode: VisualContainerGroupLayoutModeV2_9_0;
  readonly objects?: VisualContainerVisualGroupFormattingObjectsV2_9_0;
};
export const VisualContainerVisualGroupConfigV2_9_0: Schema.Codec<VisualContainerVisualGroupConfigV2_9_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => VisualContainerGroupLayoutModeV2_9_0),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerVisualGroupFormattingObjectsV2_9_0),
    ),
  });
export type VisualContainerGroupLayoutModeV2_9_0 = "ScaleMode" | "ScrollMode";
export const VisualContainerGroupLayoutModeV2_9_0: Schema.Codec<VisualContainerGroupLayoutModeV2_9_0> =
  Schema.Union([Schema.Literal("ScaleMode"), Schema.Literal("ScrollMode")]);
export type VisualContainerVisualGroupFormattingObjectsV2_9_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: Visual.VisualConfigurationEmbeddedBackgroundV2_3_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: Visual.VisualConfigurationEmbeddedLockAspectV2_3_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualContainerVisualGroupGeneralFormattingObjectsV2_9_0;
  }>;
};
export const VisualContainerVisualGroupFormattingObjectsV2_9_0: Schema.Codec<VisualContainerVisualGroupFormattingObjectsV2_9_0> =
  closed({
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_3_0.Background,
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
            () =>
              Visual.VisualConfigurationEmbeddedDefinitionsV2_3_0.LockAspect,
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
            () => VisualContainerVisualGroupGeneralFormattingObjectsV2_9_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerVisualGroupGeneralFormattingObjectsV2_9_0 = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};
export const VisualContainerVisualGroupGeneralFormattingObjectsV2_9_0: Schema.Codec<VisualContainerVisualGroupGeneralFormattingObjectsV2_9_0> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerAnnotationV2_9_0 = {
  readonly name: string;
  readonly value: string;
};
export const VisualContainerAnnotationV2_9_0: Schema.Codec<VisualContainerAnnotationV2_9_0> =
  closed({ name: Schema.String, value: Schema.String });
export const VisualContainerDefinitionsV2_9_0 = {
  VisualContainerPosition: VisualContainerVisualContainerPositionV2_9_0,
  VisualGroupConfig: VisualContainerVisualGroupConfigV2_9_0,
  GroupLayoutMode: VisualContainerGroupLayoutModeV2_9_0,
  VisualGroupFormattingObjects:
    VisualContainerVisualGroupFormattingObjectsV2_9_0,
  VisualGroupGeneralFormattingObjects:
    VisualContainerVisualGroupGeneralFormattingObjectsV2_9_0,
  Annotation: VisualContainerAnnotationV2_9_0,
} as const;
export type VisualContainerV2_9_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.9.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_9_0;
      readonly visual: Visual.VisualConfigurationEmbeddedV2_3_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_3_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_9_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visualGroup?: never;
    })
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.9.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerVisualContainerPositionV2_9_0;
      readonly visualGroup: VisualContainerVisualGroupConfigV2_9_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: Formatting.FilterConfigurationEmbeddedV1_3_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<VisualContainerAnnotationV2_9_0>;
      readonly howCreated?:
        | "Default"
        | "Copilot"
        | "CheckboxTickedInFieldList"
        | "DraggedToCanvas"
        | "VisualTypeIconClicked"
        | "DraggedToFieldWell"
        | "InsertVisualButton"
        | "WhatIfParameterControl"
        | "QnaAppBar"
        | "QnaDoubleClick"
        | "QnaKeyboardShortcut"
        | "FieldParameterControl"
        | "CanvasBackgroundContextMenu"
        | "ContextMenuPaste"
        | "CopyPaste"
        | "SummarizeVisualContainer";
    } & {
      readonly visual?: never;
    });
export const VisualContainerV2_9_0: Schema.Codec<VisualContainerV2_9_0> =
  Schema.Union([
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.9.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_9_0,
      ),
      visual: Schema.suspend(() => Visual.VisualConfigurationEmbeddedV2_3_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_3_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_9_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
    closed({
      $schema: Schema.Literal(
        "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.9.0/schema.json",
      ),
      name: Schema.String.check(Schema.isMaxCodePoints(50)),
      position: Schema.suspend(
        () => VisualContainerVisualContainerPositionV2_9_0,
      ),
      visualGroup: Schema.suspend(() => VisualContainerVisualGroupConfigV2_9_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => Formatting.FilterConfigurationEmbeddedV1_3_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => VisualContainerAnnotationV2_9_0)),
      ),
      howCreated: Schema.optionalKey(
        Schema.Union([
          Schema.Literal("Default"),
          Schema.Literal("Copilot"),
          Schema.Literal("CheckboxTickedInFieldList"),
          Schema.Literal("DraggedToCanvas"),
          Schema.Literal("VisualTypeIconClicked"),
          Schema.Literal("DraggedToFieldWell"),
          Schema.Literal("InsertVisualButton"),
          Schema.Literal("WhatIfParameterControl"),
          Schema.Literal("QnaAppBar"),
          Schema.Literal("QnaDoubleClick"),
          Schema.Literal("QnaKeyboardShortcut"),
          Schema.Literal("FieldParameterControl"),
          Schema.Literal("CanvasBackgroundContextMenu"),
          Schema.Literal("ContextMenuPaste"),
          Schema.Literal("CopyPaste"),
          Schema.Literal("SummarizeVisualContainer"),
        ]),
      ),
    }),
  ]);
export type VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateTitleV1_0_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateSubTitleV1_0_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateDividerV1_0_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateSpacingV1_0_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateBackgroundV1_0_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStatePaddingV1_0_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateLockAspectV1_0_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_0_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateBorderV1_0_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateDropShadowV1_0_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateVisualLinkV1_0_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateVisualTooltipV1_0_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateStylePresetV1_0_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateVisualHeaderV1_0_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateVisualHeaderTooltipV1_0_0;
  }>;
};
export const VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0: Schema.Codec<VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0> =
  closed({
    title: Schema.optionalKey(
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
            () => VisualContainerMobileStateTitleV1_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateSubTitleV1_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateDividerV1_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateSpacingV1_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateBackgroundV1_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStatePaddingV1_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateLockAspectV1_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateBorderV1_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateDropShadowV1_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateVisualLinkV1_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateVisualTooltipV1_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateStylePresetV1_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateVisualHeaderV1_0_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateVisualHeaderTooltipV1_0_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerMobileStateTitleV1_0_0 = {
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
export const VisualContainerMobileStateTitleV1_0_0: Schema.Codec<VisualContainerMobileStateTitleV1_0_0> =
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
export type VisualContainerMobileStateSubTitleV1_0_0 = {
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
export const VisualContainerMobileStateSubTitleV1_0_0: Schema.Codec<VisualContainerMobileStateSubTitleV1_0_0> =
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
export type VisualContainerMobileStateDividerV1_0_0 = {
  readonly show?: Schema.Json;
  readonly ignorePadding?: Schema.Json;
  readonly color?: Schema.Json;
  readonly style?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualContainerMobileStateDividerV1_0_0: Schema.Codec<VisualContainerMobileStateDividerV1_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    ignorePadding: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerMobileStateSpacingV1_0_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualContainerMobileStateSpacingV1_0_0: Schema.Codec<VisualContainerMobileStateSpacingV1_0_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerMobileStateBackgroundV1_0_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualContainerMobileStateBackgroundV1_0_0: Schema.Codec<VisualContainerMobileStateBackgroundV1_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerMobileStatePaddingV1_0_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualContainerMobileStatePaddingV1_0_0: Schema.Codec<VisualContainerMobileStatePaddingV1_0_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerMobileStateLockAspectV1_0_0 = {
  readonly show?: Schema.Json;
};
export const VisualContainerMobileStateLockAspectV1_0_0: Schema.Codec<VisualContainerMobileStateLockAspectV1_0_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_0_0 =
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
export const VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_0_0: Schema.Codec<VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_0_0> =
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
export type VisualContainerMobileStateBorderV1_0_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
};
export const VisualContainerMobileStateBorderV1_0_0: Schema.Codec<VisualContainerMobileStateBorderV1_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerMobileStateDropShadowV1_0_0 = {
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
export const VisualContainerMobileStateDropShadowV1_0_0: Schema.Codec<VisualContainerMobileStateDropShadowV1_0_0> =
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
export type VisualContainerMobileStateVisualLinkV1_0_0 = {
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
export const VisualContainerMobileStateVisualLinkV1_0_0: Schema.Codec<VisualContainerMobileStateVisualLinkV1_0_0> =
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
export type VisualContainerMobileStateVisualTooltipV1_0_0 = {
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
export const VisualContainerMobileStateVisualTooltipV1_0_0: Schema.Codec<VisualContainerMobileStateVisualTooltipV1_0_0> =
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
export type VisualContainerMobileStateStylePresetV1_0_0 = {
  readonly name?: Schema.Json;
};
export const VisualContainerMobileStateStylePresetV1_0_0: Schema.Codec<VisualContainerMobileStateStylePresetV1_0_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualContainerMobileStateVisualHeaderV1_0_0 = {
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
};
export const VisualContainerMobileStateVisualHeaderV1_0_0: Schema.Codec<VisualContainerMobileStateVisualHeaderV1_0_0> =
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
  });
export type VisualContainerMobileStateVisualHeaderTooltipV1_0_0 = {
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
export const VisualContainerMobileStateVisualHeaderTooltipV1_0_0: Schema.Codec<VisualContainerMobileStateVisualHeaderTooltipV1_0_0> =
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
export type VisualContainerMobileStateVisualContainerPositionV1_0_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
};
export const VisualContainerMobileStateVisualContainerPositionV1_0_0: Schema.Codec<VisualContainerMobileStateVisualContainerPositionV1_0_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
  });
export const VisualContainerMobileStateDefinitionsV1_0_0 = {
  VisualContainerFormattingObjects:
    VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0,
  Title: VisualContainerMobileStateTitleV1_0_0,
  SubTitle: VisualContainerMobileStateSubTitleV1_0_0,
  Divider: VisualContainerMobileStateDividerV1_0_0,
  Spacing: VisualContainerMobileStateSpacingV1_0_0,
  Background: VisualContainerMobileStateBackgroundV1_0_0,
  Padding: VisualContainerMobileStatePaddingV1_0_0,
  LockAspect: VisualContainerMobileStateLockAspectV1_0_0,
  VisualContainerGeneralFormattingObjects:
    VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_0_0,
  Border: VisualContainerMobileStateBorderV1_0_0,
  DropShadow: VisualContainerMobileStateDropShadowV1_0_0,
  VisualLink: VisualContainerMobileStateVisualLinkV1_0_0,
  VisualTooltip: VisualContainerMobileStateVisualTooltipV1_0_0,
  StylePreset: VisualContainerMobileStateStylePresetV1_0_0,
  VisualHeader: VisualContainerMobileStateVisualHeaderV1_0_0,
  VisualHeaderTooltip: VisualContainerMobileStateVisualHeaderTooltipV1_0_0,
  VisualContainerPosition:
    VisualContainerMobileStateVisualContainerPositionV1_0_0,
} as const;
export type VisualContainerMobileStateV1_0_0 = {
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0;
  readonly visualContainerObjects?: VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0;
  readonly position: VisualContainerMobileStateVisualContainerPositionV1_0_0;
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.0.0/schema.json";
};
export const VisualContainerMobileStateV1_0_0: Schema.Codec<VisualContainerMobileStateV1_0_0> =
  closed({
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_0_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0,
      ),
    ),
    position: Schema.suspend(
      () => VisualContainerMobileStateVisualContainerPositionV1_0_0,
    ),
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.0.0/schema.json",
    ),
  });
export type VisualContainerMobileStateVisualContainerFormattingObjectsV1_1_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateTitleV1_1_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateSubTitleV1_1_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateDividerV1_1_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateSpacingV1_1_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateBackgroundV1_1_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStatePaddingV1_1_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateLockAspectV1_1_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_1_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateBorderV1_1_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateDropShadowV1_1_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateVisualLinkV1_1_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateVisualTooltipV1_1_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateStylePresetV1_1_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateVisualHeaderV1_1_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateVisualHeaderTooltipV1_1_0;
  }>;
};
export const VisualContainerMobileStateVisualContainerFormattingObjectsV1_1_0: Schema.Codec<VisualContainerMobileStateVisualContainerFormattingObjectsV1_1_0> =
  closed({
    title: Schema.optionalKey(
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
            () => VisualContainerMobileStateTitleV1_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateSubTitleV1_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateDividerV1_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateSpacingV1_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateBackgroundV1_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStatePaddingV1_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateLockAspectV1_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () =>
              VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateBorderV1_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateDropShadowV1_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateVisualLinkV1_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateVisualTooltipV1_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateStylePresetV1_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateVisualHeaderV1_1_0,
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
                Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
                  .Selector,
            ),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateVisualHeaderTooltipV1_1_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerMobileStateTitleV1_1_0 = {
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
export const VisualContainerMobileStateTitleV1_1_0: Schema.Codec<VisualContainerMobileStateTitleV1_1_0> =
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
export type VisualContainerMobileStateSubTitleV1_1_0 = {
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
export const VisualContainerMobileStateSubTitleV1_1_0: Schema.Codec<VisualContainerMobileStateSubTitleV1_1_0> =
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
export type VisualContainerMobileStateDividerV1_1_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualContainerMobileStateDividerV1_1_0: Schema.Codec<VisualContainerMobileStateDividerV1_1_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerMobileStateSpacingV1_1_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualContainerMobileStateSpacingV1_1_0: Schema.Codec<VisualContainerMobileStateSpacingV1_1_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerMobileStateBackgroundV1_1_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualContainerMobileStateBackgroundV1_1_0: Schema.Codec<VisualContainerMobileStateBackgroundV1_1_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerMobileStatePaddingV1_1_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualContainerMobileStatePaddingV1_1_0: Schema.Codec<VisualContainerMobileStatePaddingV1_1_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerMobileStateLockAspectV1_1_0 = {
  readonly show?: Schema.Json;
};
export const VisualContainerMobileStateLockAspectV1_1_0: Schema.Codec<VisualContainerMobileStateLockAspectV1_1_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_1_0 =
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
export const VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_1_0: Schema.Codec<VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_1_0> =
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
export type VisualContainerMobileStateBorderV1_1_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualContainerMobileStateBorderV1_1_0: Schema.Codec<VisualContainerMobileStateBorderV1_1_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerMobileStateDropShadowV1_1_0 = {
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
export const VisualContainerMobileStateDropShadowV1_1_0: Schema.Codec<VisualContainerMobileStateDropShadowV1_1_0> =
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
export type VisualContainerMobileStateVisualLinkV1_1_0 = {
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
export const VisualContainerMobileStateVisualLinkV1_1_0: Schema.Codec<VisualContainerMobileStateVisualLinkV1_1_0> =
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
export type VisualContainerMobileStateVisualTooltipV1_1_0 = {
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
export const VisualContainerMobileStateVisualTooltipV1_1_0: Schema.Codec<VisualContainerMobileStateVisualTooltipV1_1_0> =
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
export type VisualContainerMobileStateStylePresetV1_1_0 = {
  readonly name?: Schema.Json;
};
export const VisualContainerMobileStateStylePresetV1_1_0: Schema.Codec<VisualContainerMobileStateStylePresetV1_1_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualContainerMobileStateVisualHeaderV1_1_0 = {
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
export const VisualContainerMobileStateVisualHeaderV1_1_0: Schema.Codec<VisualContainerMobileStateVisualHeaderV1_1_0> =
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
export type VisualContainerMobileStateVisualHeaderTooltipV1_1_0 = {
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
export const VisualContainerMobileStateVisualHeaderTooltipV1_1_0: Schema.Codec<VisualContainerMobileStateVisualHeaderTooltipV1_1_0> =
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
export type VisualContainerMobileStateVisualContainerPositionV1_1_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
};
export const VisualContainerMobileStateVisualContainerPositionV1_1_0: Schema.Codec<VisualContainerMobileStateVisualContainerPositionV1_1_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
  });
export const VisualContainerMobileStateDefinitionsV1_1_0 = {
  VisualContainerFormattingObjects:
    VisualContainerMobileStateVisualContainerFormattingObjectsV1_1_0,
  Title: VisualContainerMobileStateTitleV1_1_0,
  SubTitle: VisualContainerMobileStateSubTitleV1_1_0,
  Divider: VisualContainerMobileStateDividerV1_1_0,
  Spacing: VisualContainerMobileStateSpacingV1_1_0,
  Background: VisualContainerMobileStateBackgroundV1_1_0,
  Padding: VisualContainerMobileStatePaddingV1_1_0,
  LockAspect: VisualContainerMobileStateLockAspectV1_1_0,
  VisualContainerGeneralFormattingObjects:
    VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_1_0,
  Border: VisualContainerMobileStateBorderV1_1_0,
  DropShadow: VisualContainerMobileStateDropShadowV1_1_0,
  VisualLink: VisualContainerMobileStateVisualLinkV1_1_0,
  VisualTooltip: VisualContainerMobileStateVisualTooltipV1_1_0,
  StylePreset: VisualContainerMobileStateStylePresetV1_1_0,
  VisualHeader: VisualContainerMobileStateVisualHeaderV1_1_0,
  VisualHeaderTooltip: VisualContainerMobileStateVisualHeaderTooltipV1_1_0,
  VisualContainerPosition:
    VisualContainerMobileStateVisualContainerPositionV1_1_0,
} as const;
export type VisualContainerMobileStateV1_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.1.0/schema.json";
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0;
  readonly visualContainerObjects?: VisualContainerMobileStateVisualContainerFormattingObjectsV1_1_0;
  readonly position: VisualContainerMobileStateVisualContainerPositionV1_1_0;
};
export const VisualContainerMobileStateV1_1_0: Schema.Codec<VisualContainerMobileStateV1_1_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.1.0/schema.json",
    ),
    objects: Schema.optionalKey(
      Schema.suspend(
        () =>
          Formatting.FormattingObjectDefinitionsDefinitionsV1_1_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualContainerMobileStateVisualContainerFormattingObjectsV1_1_0,
      ),
    ),
    position: Schema.suspend(
      () => VisualContainerMobileStateVisualContainerPositionV1_1_0,
    ),
  });
export type VisualContainerMobileStateVisualContainerFormattingObjectsV1_2_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerMobileStateTitleV1_2_0;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerMobileStateSubTitleV1_2_0;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerMobileStateDividerV1_2_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerMobileStateSpacingV1_2_0;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerMobileStateBackgroundV1_2_0;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerMobileStatePaddingV1_2_0;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerMobileStateLockAspectV1_2_0;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_2_0;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerMobileStateBorderV1_2_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerMobileStateDropShadowV1_2_0;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerMobileStateVisualLinkV1_2_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerMobileStateVisualTooltipV1_2_0;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerMobileStateStylePresetV1_2_0;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerMobileStateVisualHeaderV1_2_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: Formatting.FormattingObjectDefinitionsSelectorV1_2_0;
    readonly properties: VisualContainerMobileStateVisualHeaderTooltipV1_2_0;
  }>;
};
export const VisualContainerMobileStateVisualContainerFormattingObjectsV1_2_0: Schema.Codec<VisualContainerMobileStateVisualContainerFormattingObjectsV1_2_0> =
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
            () => VisualContainerMobileStateTitleV1_2_0,
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
            () => VisualContainerMobileStateSubTitleV1_2_0,
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
            () => VisualContainerMobileStateDividerV1_2_0,
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
            () => VisualContainerMobileStateSpacingV1_2_0,
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
            () => VisualContainerMobileStateBackgroundV1_2_0,
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
            () => VisualContainerMobileStatePaddingV1_2_0,
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
            () => VisualContainerMobileStateLockAspectV1_2_0,
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
              VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_2_0,
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
            () => VisualContainerMobileStateBorderV1_2_0,
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
            () => VisualContainerMobileStateDropShadowV1_2_0,
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
            () => VisualContainerMobileStateVisualLinkV1_2_0,
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
            () => VisualContainerMobileStateVisualTooltipV1_2_0,
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
            () => VisualContainerMobileStateStylePresetV1_2_0,
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
            () => VisualContainerMobileStateVisualHeaderV1_2_0,
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
            () => VisualContainerMobileStateVisualHeaderTooltipV1_2_0,
          ),
        }),
      ),
    ),
  });
export type VisualContainerMobileStateTitleV1_2_0 = {
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
export const VisualContainerMobileStateTitleV1_2_0: Schema.Codec<VisualContainerMobileStateTitleV1_2_0> =
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
export type VisualContainerMobileStateSubTitleV1_2_0 = {
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
export const VisualContainerMobileStateSubTitleV1_2_0: Schema.Codec<VisualContainerMobileStateSubTitleV1_2_0> =
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
export type VisualContainerMobileStateDividerV1_2_0 = {
  readonly ignorePadding?: Schema.Json;
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly width?: Schema.Json;
  readonly style?: Schema.Json;
};
export const VisualContainerMobileStateDividerV1_2_0: Schema.Codec<VisualContainerMobileStateDividerV1_2_0> =
  closed({
    ignorePadding: Schema.optionalKey(Schema.Json),
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerMobileStateSpacingV1_2_0 = {
  readonly customizeSpacing?: Schema.Json;
  readonly verticalSpacing?: Schema.Json;
  readonly spaceBelowTitle?: Schema.Json;
  readonly spaceBelowSubTitle?: Schema.Json;
  readonly spaceBelowTitleArea?: Schema.Json;
};
export const VisualContainerMobileStateSpacingV1_2_0: Schema.Codec<VisualContainerMobileStateSpacingV1_2_0> =
  closed({
    customizeSpacing: Schema.optionalKey(Schema.Json),
    verticalSpacing: Schema.optionalKey(Schema.Json),
    spaceBelowTitle: Schema.optionalKey(Schema.Json),
    spaceBelowSubTitle: Schema.optionalKey(Schema.Json),
    spaceBelowTitleArea: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerMobileStateBackgroundV1_2_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly transparency?: Schema.Json;
};
export const VisualContainerMobileStateBackgroundV1_2_0: Schema.Codec<VisualContainerMobileStateBackgroundV1_2_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    transparency: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerMobileStatePaddingV1_2_0 = {
  readonly top?: Schema.Json;
  readonly bottom?: Schema.Json;
  readonly left?: Schema.Json;
  readonly right?: Schema.Json;
};
export const VisualContainerMobileStatePaddingV1_2_0: Schema.Codec<VisualContainerMobileStatePaddingV1_2_0> =
  closed({
    top: Schema.optionalKey(Schema.Json),
    bottom: Schema.optionalKey(Schema.Json),
    left: Schema.optionalKey(Schema.Json),
    right: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerMobileStateLockAspectV1_2_0 = {
  readonly show?: Schema.Json;
};
export const VisualContainerMobileStateLockAspectV1_2_0: Schema.Codec<VisualContainerMobileStateLockAspectV1_2_0> =
  closed({ show: Schema.optionalKey(Schema.Json) });
export type VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_2_0 =
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
export const VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_2_0: Schema.Codec<VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_2_0> =
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
export type VisualContainerMobileStateBorderV1_2_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
  readonly width?: Schema.Json;
};
export const VisualContainerMobileStateBorderV1_2_0: Schema.Codec<VisualContainerMobileStateBorderV1_2_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });
export type VisualContainerMobileStateDropShadowV1_2_0 = {
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
export const VisualContainerMobileStateDropShadowV1_2_0: Schema.Codec<VisualContainerMobileStateDropShadowV1_2_0> =
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
export type VisualContainerMobileStateVisualLinkV1_2_0 = {
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
export const VisualContainerMobileStateVisualLinkV1_2_0: Schema.Codec<VisualContainerMobileStateVisualLinkV1_2_0> =
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
export type VisualContainerMobileStateVisualTooltipV1_2_0 = {
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
export const VisualContainerMobileStateVisualTooltipV1_2_0: Schema.Codec<VisualContainerMobileStateVisualTooltipV1_2_0> =
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
export type VisualContainerMobileStateStylePresetV1_2_0 = {
  readonly name?: Schema.Json;
};
export const VisualContainerMobileStateStylePresetV1_2_0: Schema.Codec<VisualContainerMobileStateStylePresetV1_2_0> =
  closed({ name: Schema.optionalKey(Schema.Json) });
export type VisualContainerMobileStateVisualHeaderV1_2_0 = {
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
export const VisualContainerMobileStateVisualHeaderV1_2_0: Schema.Codec<VisualContainerMobileStateVisualHeaderV1_2_0> =
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
export type VisualContainerMobileStateVisualHeaderTooltipV1_2_0 = {
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
export const VisualContainerMobileStateVisualHeaderTooltipV1_2_0: Schema.Codec<VisualContainerMobileStateVisualHeaderTooltipV1_2_0> =
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
export type VisualContainerMobileStateVisualContainerPositionV1_2_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerMobileStateVisualContainerPositionV1_2_0: Schema.Codec<VisualContainerMobileStateVisualContainerPositionV1_2_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export const VisualContainerMobileStateDefinitionsV1_2_0 = {
  VisualContainerFormattingObjects:
    VisualContainerMobileStateVisualContainerFormattingObjectsV1_2_0,
  Title: VisualContainerMobileStateTitleV1_2_0,
  SubTitle: VisualContainerMobileStateSubTitleV1_2_0,
  Divider: VisualContainerMobileStateDividerV1_2_0,
  Spacing: VisualContainerMobileStateSpacingV1_2_0,
  Background: VisualContainerMobileStateBackgroundV1_2_0,
  Padding: VisualContainerMobileStatePaddingV1_2_0,
  LockAspect: VisualContainerMobileStateLockAspectV1_2_0,
  VisualContainerGeneralFormattingObjects:
    VisualContainerMobileStateVisualContainerGeneralFormattingObjectsV1_2_0,
  Border: VisualContainerMobileStateBorderV1_2_0,
  DropShadow: VisualContainerMobileStateDropShadowV1_2_0,
  VisualLink: VisualContainerMobileStateVisualLinkV1_2_0,
  VisualTooltip: VisualContainerMobileStateVisualTooltipV1_2_0,
  StylePreset: VisualContainerMobileStateStylePresetV1_2_0,
  VisualHeader: VisualContainerMobileStateVisualHeaderV1_2_0,
  VisualHeaderTooltip: VisualContainerMobileStateVisualHeaderTooltipV1_2_0,
  VisualContainerPosition:
    VisualContainerMobileStateVisualContainerPositionV1_2_0,
} as const;
export type VisualContainerMobileStateV1_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.2.0/schema.json";
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualContainerMobileStateVisualContainerFormattingObjectsV1_2_0;
  readonly position: VisualContainerMobileStateVisualContainerPositionV1_2_0;
};
export const VisualContainerMobileStateV1_2_0: Schema.Codec<VisualContainerMobileStateV1_2_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.2.0/schema.json",
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
        () => VisualContainerMobileStateVisualContainerFormattingObjectsV1_2_0,
      ),
    ),
    position: Schema.suspend(
      () => VisualContainerMobileStateVisualContainerPositionV1_2_0,
    ),
  });
export type VisualContainerMobileStateVisualContainerPositionV1_3_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerMobileStateVisualContainerPositionV1_3_0: Schema.Codec<VisualContainerMobileStateVisualContainerPositionV1_3_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export const VisualContainerMobileStateDefinitionsV1_3_0 = {
  VisualContainerPosition:
    VisualContainerMobileStateVisualContainerPositionV1_3_0,
} as const;
export type VisualContainerMobileStateV1_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.3.0/schema.json";
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: Visual.VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_6_0;
  readonly position: VisualContainerMobileStateVisualContainerPositionV1_3_0;
};
export const VisualContainerMobileStateV1_3_0: Schema.Codec<VisualContainerMobileStateV1_3_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.3.0/schema.json",
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
        () =>
          Visual.VisualConfigurationEmbeddedDefinitionsV1_6_0
            .VisualContainerFormattingObjects,
      ),
    ),
    position: Schema.suspend(
      () => VisualContainerMobileStateVisualContainerPositionV1_3_0,
    ),
  });
export type VisualContainerMobileStateVisualContainerPositionV1_4_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerMobileStateVisualContainerPositionV1_4_0: Schema.Codec<VisualContainerMobileStateVisualContainerPositionV1_4_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export const VisualContainerMobileStateDefinitionsV1_4_0 = {
  VisualContainerPosition:
    VisualContainerMobileStateVisualContainerPositionV1_4_0,
} as const;
export type VisualContainerMobileStateV1_4_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.4.0/schema.json";
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: Visual.VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_7_0;
  readonly position: VisualContainerMobileStateVisualContainerPositionV1_4_0;
};
export const VisualContainerMobileStateV1_4_0: Schema.Codec<VisualContainerMobileStateV1_4_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.4.0/schema.json",
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
        () =>
          Visual.VisualConfigurationEmbeddedDefinitionsV1_7_0
            .VisualContainerFormattingObjects,
      ),
    ),
    position: Schema.suspend(
      () => VisualContainerMobileStateVisualContainerPositionV1_4_0,
    ),
  });
export type VisualContainerMobileStateVisualContainerPositionV1_5_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerMobileStateVisualContainerPositionV1_5_0: Schema.Codec<VisualContainerMobileStateVisualContainerPositionV1_5_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export const VisualContainerMobileStateDefinitionsV1_5_0 = {
  VisualContainerPosition:
    VisualContainerMobileStateVisualContainerPositionV1_5_0,
} as const;
export type VisualContainerMobileStateV1_5_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.5.0/schema.json";
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0;
  readonly visualContainerObjects?: Visual.VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_8_0;
  readonly position: VisualContainerMobileStateVisualContainerPositionV1_5_0;
};
export const VisualContainerMobileStateV1_5_0: Schema.Codec<VisualContainerMobileStateV1_5_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.5.0/schema.json",
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
        () =>
          Visual.VisualConfigurationEmbeddedDefinitionsV1_8_0
            .VisualContainerFormattingObjects,
      ),
    ),
    position: Schema.suspend(
      () => VisualContainerMobileStateVisualContainerPositionV1_5_0,
    ),
  });
export type VisualContainerMobileStateVisualContainerPositionV2_0_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerMobileStateVisualContainerPositionV2_0_0: Schema.Codec<VisualContainerMobileStateVisualContainerPositionV2_0_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export const VisualContainerMobileStateDefinitionsV2_0_0 = {
  VisualContainerPosition:
    VisualContainerMobileStateVisualContainerPositionV2_0_0,
} as const;
export type VisualContainerMobileStateV2_0_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.0.0/schema.json";
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0;
  readonly visualContainerObjects?: Visual.VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_0_0;
  readonly position: VisualContainerMobileStateVisualContainerPositionV2_0_0;
};
export const VisualContainerMobileStateV2_0_0: Schema.Codec<VisualContainerMobileStateV2_0_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.0.0/schema.json",
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
        () =>
          Visual.VisualConfigurationEmbeddedDefinitionsV2_0_0
            .VisualContainerFormattingObjects,
      ),
    ),
    position: Schema.suspend(
      () => VisualContainerMobileStateVisualContainerPositionV2_0_0,
    ),
  });
export type VisualContainerMobileStateVisualContainerPositionV2_1_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerMobileStateVisualContainerPositionV2_1_0: Schema.Codec<VisualContainerMobileStateVisualContainerPositionV2_1_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export const VisualContainerMobileStateDefinitionsV2_1_0 = {
  VisualContainerPosition:
    VisualContainerMobileStateVisualContainerPositionV2_1_0,
} as const;
export type VisualContainerMobileStateV2_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.1.0/schema.json";
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: Visual.VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_1_0;
  readonly position: VisualContainerMobileStateVisualContainerPositionV2_1_0;
};
export const VisualContainerMobileStateV2_1_0: Schema.Codec<VisualContainerMobileStateV2_1_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.1.0/schema.json",
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
        () =>
          Visual.VisualConfigurationEmbeddedDefinitionsV2_1_0
            .VisualContainerFormattingObjects,
      ),
    ),
    position: Schema.suspend(
      () => VisualContainerMobileStateVisualContainerPositionV2_1_0,
    ),
  });
export type VisualContainerMobileStateVisualContainerPositionV2_2_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerMobileStateVisualContainerPositionV2_2_0: Schema.Codec<VisualContainerMobileStateVisualContainerPositionV2_2_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export const VisualContainerMobileStateDefinitionsV2_2_0 = {
  VisualContainerPosition:
    VisualContainerMobileStateVisualContainerPositionV2_2_0,
} as const;
export type VisualContainerMobileStateV2_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.2.0/schema.json";
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: Visual.VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_2_0;
  readonly position: VisualContainerMobileStateVisualContainerPositionV2_2_0;
};
export const VisualContainerMobileStateV2_2_0: Schema.Codec<VisualContainerMobileStateV2_2_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.2.0/schema.json",
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
        () =>
          Visual.VisualConfigurationEmbeddedDefinitionsV2_2_0
            .VisualContainerFormattingObjects,
      ),
    ),
    position: Schema.suspend(
      () => VisualContainerMobileStateVisualContainerPositionV2_2_0,
    ),
  });
export type VisualContainerMobileStateVisualContainerPositionV2_3_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerMobileStateVisualContainerPositionV2_3_0: Schema.Codec<VisualContainerMobileStateVisualContainerPositionV2_3_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export const VisualContainerMobileStateDefinitionsV2_3_0 = {
  VisualContainerPosition:
    VisualContainerMobileStateVisualContainerPositionV2_3_0,
} as const;
export type VisualContainerMobileStateV2_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.3.0/schema.json";
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0;
  readonly visualContainerObjects?: Visual.VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0;
  readonly position: VisualContainerMobileStateVisualContainerPositionV2_3_0;
};
export const VisualContainerMobileStateV2_3_0: Schema.Codec<VisualContainerMobileStateV2_3_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.3.0/schema.json",
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
        () =>
          Visual.VisualConfigurationEmbeddedDefinitionsV2_3_0
            .VisualContainerFormattingObjects,
      ),
    ),
    position: Schema.suspend(
      () => VisualContainerMobileStateVisualContainerPositionV2_3_0,
    ),
  });
export type VisualContainerMobileStateVisualContainerPositionV2_4_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};
export const VisualContainerMobileStateVisualContainerPositionV2_4_0: Schema.Codec<VisualContainerMobileStateVisualContainerPositionV2_4_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });
export const VisualContainerMobileStateDefinitionsV2_4_0 = {
  VisualContainerPosition:
    VisualContainerMobileStateVisualContainerPositionV2_4_0,
} as const;
export type VisualContainerMobileStateV2_4_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.4.0/schema.json";
  readonly objects?: Formatting.FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0;
  readonly visualContainerObjects?: Visual.VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0;
  readonly position: VisualContainerMobileStateVisualContainerPositionV2_4_0;
};
export const VisualContainerMobileStateV2_4_0: Schema.Codec<VisualContainerMobileStateV2_4_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.4.0/schema.json",
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
        () =>
          Visual.VisualConfigurationEmbeddedDefinitionsV2_3_0
            .VisualContainerFormattingObjects,
      ),
    ),
    position: Schema.suspend(
      () => VisualContainerMobileStateVisualContainerPositionV2_4_0,
    ),
  });
export const visualContainerSchemaCoverage = [
  {
    source: "definition/visualContainer/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: VisualContainerV1_0_0,
  },
  {
    source: "definition/visualContainer/1.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.1.0/schema.json",
    version: "1.1.0",
    variant: "standalone",
    schema: VisualContainerV1_1_0,
  },
  {
    source: "definition/visualContainer/1.2.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.2.0/schema.json",
    version: "1.2.0",
    variant: "standalone",
    schema: VisualContainerV1_2_0,
  },
  {
    source: "definition/visualContainer/1.3.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.3.0/schema.json",
    version: "1.3.0",
    variant: "standalone",
    schema: VisualContainerV1_3_0,
  },
  {
    source: "definition/visualContainer/1.4.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.4.0/schema.json",
    version: "1.4.0",
    variant: "standalone",
    schema: VisualContainerV1_4_0,
  },
  {
    source: "definition/visualContainer/1.5.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.5.0/schema.json",
    version: "1.5.0",
    variant: "standalone",
    schema: VisualContainerV1_5_0,
  },
  {
    source: "definition/visualContainer/1.6.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.6.0/schema.json",
    version: "1.6.0",
    variant: "standalone",
    schema: VisualContainerV1_6_0,
  },
  {
    source: "definition/visualContainer/1.7.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.7.0/schema.json",
    version: "1.7.0",
    variant: "standalone",
    schema: VisualContainerV1_7_0,
  },
  {
    source: "definition/visualContainer/1.8.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.8.0/schema.json",
    version: "1.8.0",
    variant: "standalone",
    schema: VisualContainerV1_8_0,
  },
  {
    source: "definition/visualContainer/2.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.0.0/schema.json",
    version: "2.0.0",
    variant: "standalone",
    schema: VisualContainerV2_0_0,
  },
  {
    source: "definition/visualContainer/2.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.1.0/schema.json",
    version: "2.1.0",
    variant: "standalone",
    schema: VisualContainerV2_1_0,
  },
  {
    source: "definition/visualContainer/2.2.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.2.0/schema.json",
    version: "2.2.0",
    variant: "standalone",
    schema: VisualContainerV2_2_0,
  },
  {
    source: "definition/visualContainer/2.3.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.3.0/schema.json",
    version: "2.3.0",
    variant: "standalone",
    schema: VisualContainerV2_3_0,
  },
  {
    source: "definition/visualContainer/2.4.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.4.0/schema.json",
    version: "2.4.0",
    variant: "standalone",
    schema: VisualContainerV2_4_0,
  },
  {
    source: "definition/visualContainer/2.5.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.5.0/schema.json",
    version: "2.5.0",
    variant: "standalone",
    schema: VisualContainerV2_5_0,
  },
  {
    source: "definition/visualContainer/2.6.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.6.0/schema.json",
    version: "2.6.0",
    variant: "standalone",
    schema: VisualContainerV2_6_0,
  },
  {
    source: "definition/visualContainer/2.7.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.7.0/schema.json",
    version: "2.7.0",
    variant: "standalone",
    schema: VisualContainerV2_7_0,
  },
  {
    source: "definition/visualContainer/2.8.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.8.0/schema.json",
    version: "2.8.0",
    variant: "standalone",
    schema: VisualContainerV2_8_0,
  },
  {
    source: "definition/visualContainer/2.9.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.9.0/schema.json",
    version: "2.9.0",
    variant: "standalone",
    schema: VisualContainerV2_9_0,
  },
] as const;
export const visualContainerMobileStateSchemaCoverage = [
  {
    source: "definition/visualContainerMobileState/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: VisualContainerMobileStateV1_0_0,
  },
  {
    source: "definition/visualContainerMobileState/1.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.1.0/schema.json",
    version: "1.1.0",
    variant: "standalone",
    schema: VisualContainerMobileStateV1_1_0,
  },
  {
    source: "definition/visualContainerMobileState/1.2.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.2.0/schema.json",
    version: "1.2.0",
    variant: "standalone",
    schema: VisualContainerMobileStateV1_2_0,
  },
  {
    source: "definition/visualContainerMobileState/1.3.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.3.0/schema.json",
    version: "1.3.0",
    variant: "standalone",
    schema: VisualContainerMobileStateV1_3_0,
  },
  {
    source: "definition/visualContainerMobileState/1.4.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.4.0/schema.json",
    version: "1.4.0",
    variant: "standalone",
    schema: VisualContainerMobileStateV1_4_0,
  },
  {
    source: "definition/visualContainerMobileState/1.5.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.5.0/schema.json",
    version: "1.5.0",
    variant: "standalone",
    schema: VisualContainerMobileStateV1_5_0,
  },
  {
    source: "definition/visualContainerMobileState/2.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.0.0/schema.json",
    version: "2.0.0",
    variant: "standalone",
    schema: VisualContainerMobileStateV2_0_0,
  },
  {
    source: "definition/visualContainerMobileState/2.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.1.0/schema.json",
    version: "2.1.0",
    variant: "standalone",
    schema: VisualContainerMobileStateV2_1_0,
  },
  {
    source: "definition/visualContainerMobileState/2.2.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.2.0/schema.json",
    version: "2.2.0",
    variant: "standalone",
    schema: VisualContainerMobileStateV2_2_0,
  },
  {
    source: "definition/visualContainerMobileState/2.3.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.3.0/schema.json",
    version: "2.3.0",
    variant: "standalone",
    schema: VisualContainerMobileStateV2_3_0,
  },
  {
    source: "definition/visualContainerMobileState/2.4.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.4.0/schema.json",
    version: "2.4.0",
    variant: "standalone",
    schema: VisualContainerMobileStateV2_4_0,
  },
] as const;
