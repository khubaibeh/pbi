import { Schema } from "effect";
import { closed } from "../shared.js";
import { FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0, FormattingObjectDefinitionsDefinitionsV1_5_0, FormattingObjectDefinitionsSelectorV1_5_0 } from "../formatting-object-definitions/shared.js";
import { QueryExpressionContainerV1_4_0 } from "../semantic-query/shared.js";
import { VisualConfigurationAIDecompositionMethod, VisualConfigurationAILevelInformation, VisualConfigurationBackground, VisualConfigurationBorder, VisualConfigurationDivider, VisualConfigurationDropShadow, VisualConfigurationLockAspect, VisualConfigurationPadding, VisualConfigurationSortDirection, VisualConfigurationSpacing, VisualConfigurationStylePreset, VisualConfigurationSubTitle, VisualConfigurationTitle, VisualConfigurationVisualContainerGeneralFormattingObjects, VisualConfigurationVisualHeader, VisualConfigurationVisualHeaderTooltip, VisualConfigurationVisualLinkV2_2_0, VisualConfigurationVisualQueryOptions, VisualConfigurationVisualSyncGroup, VisualConfigurationVisualTooltip } from "./shared.js";

export type VisualConfigurationQueryV2_3_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV2_3_0;
  readonly options?: VisualConfigurationVisualQueryOptions;
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
      Schema.suspend(() => VisualConfigurationVisualQueryOptions),
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
  readonly field: QueryExpressionContainerV1_4_0;
  readonly direction: VisualConfigurationSortDirection;
};

export const VisualConfigurationQuerySortV2_3_0: Schema.Codec<VisualConfigurationQuerySortV2_3_0> =
  closed({
    field: Schema.suspend(
      () => QueryExpressionContainerV1_4_0,
    ),
    direction: Schema.suspend(() => VisualConfigurationSortDirection),
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
  readonly field: QueryExpressionContainerV1_4_0;
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

export type VisualConfigurationRoleFieldParameterV2_3_0 = {
  readonly parameterExpr: QueryExpressionContainerV1_4_0;
  readonly index: number;
  readonly length?: number;
  readonly sortDirection?: "Ascending" | "Descending";
};

export const VisualConfigurationRoleFieldParameterV2_3_0: Schema.Codec<VisualConfigurationRoleFieldParameterV2_3_0> =
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
  readonly identityValues?: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_3_0>;
};

export const VisualConfigurationRootExpansionStateV2_3_0: Schema.Codec<VisualConfigurationRootExpansionStateV2_3_0> =
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
        Schema.suspend(() => VisualConfigurationNodeExpansionStateV2_3_0),
      ),
    ),
  });

export type VisualConfigurationNodeExpansionStateV2_3_0 = {
  readonly identityValues: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly isToggled?: boolean;
  readonly children?: ReadonlyArray<VisualConfigurationNodeExpansionStateV2_3_0>;
};

export const VisualConfigurationNodeExpansionStateV2_3_0: Schema.Codec<VisualConfigurationNodeExpansionStateV2_3_0> =
  closed({
    identityValues: Schema.Array(
      Schema.suspend(
        () => QueryExpressionContainerV1_4_0,
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
  readonly identityKeys?: ReadonlyArray<QueryExpressionContainerV1_4_0>;
  readonly isCollapsed?: boolean;
  readonly queryRefs: ReadonlyArray<string>;
  readonly isPinned?: boolean;
  readonly isLocked?: boolean;
  readonly AIInformation?: VisualConfigurationAILevelInformation;
};

export const VisualConfigurationLevelExpansionStateV2_3_0: Schema.Codec<VisualConfigurationLevelExpansionStateV2_3_0> =
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
      Schema.suspend(() => VisualConfigurationAILevelInformation),
    ),
  });

export type VisualConfigurationVisualContainerFormattingObjectsV2_3_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationTitle;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationSubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationDivider;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationSpacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationPadding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationVisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationBorder;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationDropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationVisualLinkV2_2_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationVisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationStylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationVisualHeader;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_5_0;
    readonly properties: VisualConfigurationVisualHeaderTooltip;
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
                FormattingObjectDefinitionsDefinitionsV1_5_0
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
                FormattingObjectDefinitionsDefinitionsV1_5_0
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
                FormattingObjectDefinitionsDefinitionsV1_5_0
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
                FormattingObjectDefinitionsDefinitionsV1_5_0
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
                FormattingObjectDefinitionsDefinitionsV1_5_0
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
                FormattingObjectDefinitionsDefinitionsV1_5_0
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
                FormattingObjectDefinitionsDefinitionsV1_5_0
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
                FormattingObjectDefinitionsDefinitionsV1_5_0
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
                FormattingObjectDefinitionsDefinitionsV1_5_0
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
                FormattingObjectDefinitionsDefinitionsV1_5_0
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
                FormattingObjectDefinitionsDefinitionsV1_5_0
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
                FormattingObjectDefinitionsDefinitionsV1_5_0
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
                FormattingObjectDefinitionsDefinitionsV1_5_0
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
                FormattingObjectDefinitionsDefinitionsV1_5_0
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
                FormattingObjectDefinitionsDefinitionsV1_5_0
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

export const VisualConfigurationDefinitionsV2_3_0 = {
  Query: VisualConfigurationQueryV2_3_0,
  SortDefinition: VisualConfigurationSortDefinitionV2_3_0,
  QuerySort: VisualConfigurationQuerySortV2_3_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualConfigurationVisualQueryOptions,
  ProjectionState: VisualConfigurationProjectionStateV2_3_0,
  RoleProjection: VisualConfigurationRoleProjectionV2_3_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV2_3_0,
  ExpansionState: VisualConfigurationExpansionStateV2_3_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV2_3_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV2_3_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV2_3_0,
  AILevelInformation: VisualConfigurationAILevelInformation,
  AIDecompositionMethod: VisualConfigurationAIDecompositionMethod,
  VisualContainerFormattingObjects:
    VisualConfigurationVisualContainerFormattingObjectsV2_3_0,
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
  VisualLink: VisualConfigurationVisualLinkV2_2_0,
  VisualTooltip: VisualConfigurationVisualTooltip,
  StylePreset: VisualConfigurationStylePreset,
  VisualHeader: VisualConfigurationVisualHeader,
  VisualHeaderTooltip: VisualConfigurationVisualHeaderTooltip,
  VisualSyncGroup: VisualConfigurationVisualSyncGroup,
} as const;

export type VisualConfigurationV2_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.3.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV2_3_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV2_3_0>;
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_5_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV2_3_0;
  readonly syncGroup?: VisualConfigurationVisualSyncGroup;
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
          FormattingObjectDefinitionsDefinitionsV1_5_0
            .DataViewObjectDefinitions,
      ),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(
        () => VisualConfigurationVisualContainerFormattingObjectsV2_3_0,
      ),
    ),
    syncGroup: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualSyncGroup),
    ),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export { VisualConfigurationEmbeddedDefinitionsV2_3_0, VisualConfigurationEmbeddedV2_3_0 } from "./shared.js";
