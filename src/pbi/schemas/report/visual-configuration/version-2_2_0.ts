import { Schema } from "effect";
import {
  AIDecompositionMethod,
  AILevelInformation,
  BorderV1_5_0,
  DividerV1_5_0,
  DropShadow,
  LockAspect,
  Padding,
  Spacing,
  StylePreset,
  SubTitle,
  Title,
  VisualConfigurationBackground,
  VisualConfigurationSortDirection,
  VisualContainerGeneralFormattingObjects,
  VisualHeaderTooltip,
  VisualHeaderV1_5_0,
  VisualQueryOptions,
  VisualSyncGroup,
  VisualTooltip,
  closed,
} from "../shared.js";
import {
  DataViewObjectDefinitionsV1_4_0,
  SelectorV1_4_0,
} from "../formatting-object-definitions/version-1_4_0.js";
import {
  VisualConfigurationExpansionStateV2_0_0,
  VisualConfigurationLevelExpansionStateV2_0_0,
  VisualConfigurationNodeExpansionStateV2_0_0,
  VisualConfigurationProjectionStateV2_0_0,
  VisualConfigurationQuerySortV2_0_0,
  VisualConfigurationQueryV2_0_0,
  VisualConfigurationRoleFieldParameterV2_0_0,
  VisualConfigurationRoleProjectionV2_0_0,
  VisualConfigurationRootExpansionStateV2_0_0,
  VisualConfigurationSortDefinitionV2_0_0,
  VisualConfigurationVisualLinkV2_2_0,
} from "./shared.js";

export type VisualConfigurationVisualContainerFormattingObjectsV2_2_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: Title;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: SubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: DividerV1_5_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: Spacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: Padding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: LockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: VisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: BorderV1_5_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: DropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: VisualConfigurationVisualLinkV2_2_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: VisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: StylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: VisualHeaderV1_5_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: VisualHeaderTooltip;
  }>;
};

export const VisualConfigurationVisualContainerFormattingObjectsV2_2_0: Schema.Codec<VisualConfigurationVisualContainerFormattingObjectsV2_2_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => Title),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => SubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => DividerV1_5_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => Spacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => Padding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => LockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => VisualContainerGeneralFormattingObjects),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => BorderV1_5_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => DropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV2_2_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => VisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => StylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => VisualHeaderV1_5_0),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => VisualHeaderTooltip),
        }),
      ),
    ),
  });

export const VisualConfigurationDefinitionsV2_2_0 = {
  Query: VisualConfigurationQueryV2_0_0,
  SortDefinition: VisualConfigurationSortDefinitionV2_0_0,
  QuerySort: VisualConfigurationQuerySortV2_0_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: VisualConfigurationProjectionStateV2_0_0,
  RoleProjection: VisualConfigurationRoleProjectionV2_0_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV2_0_0,
  ExpansionState: VisualConfigurationExpansionStateV2_0_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV2_0_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV2_0_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV2_0_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualConfigurationVisualContainerFormattingObjectsV2_2_0,
  Title: Title,
  SubTitle: SubTitle,
  Divider: DividerV1_5_0,
  Spacing: Spacing,
  Background: VisualConfigurationBackground,
  Padding: Padding,
  LockAspect: LockAspect,
  VisualContainerGeneralFormattingObjects: VisualContainerGeneralFormattingObjects,
  Border: BorderV1_5_0,
  DropShadow: DropShadow,
  VisualLink: VisualConfigurationVisualLinkV2_2_0,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: VisualHeaderV1_5_0,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualSyncGroup: VisualSyncGroup,
} as const;

export type VisualConfigurationV2_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.2.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV2_0_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV2_0_0>;
  readonly objects?: DataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV2_2_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationV2_2_0: Schema.Codec<VisualConfigurationV2_2_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.2.0/schema.json",
  ),
  visualType: Schema.String,
  autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
  query: Schema.optionalKey(Schema.suspend(() => VisualConfigurationQueryV2_0_0)),
  expansionStates: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => VisualConfigurationExpansionStateV2_0_0)),
  ),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_4_0)),
  visualContainerObjects: Schema.optionalKey(
    Schema.suspend(() => VisualConfigurationVisualContainerFormattingObjectsV2_2_0),
  ),
  syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
  drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
});

export type VisualConfigurationEmbeddedV2_2_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV2_0_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV2_0_0>;
  readonly objects?: DataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV2_2_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationEmbeddedV2_2_0: Schema.Codec<VisualConfigurationEmbeddedV2_2_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => VisualConfigurationQueryV2_0_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationExpansionStateV2_0_0)),
    ),
    objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_4_0)),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualContainerFormattingObjectsV2_2_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export {
  VisualConfigurationVisualContainerFormattingObjectsV2_2_0 as VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_2_0,
  VisualConfigurationDefinitionsV2_2_0 as VisualConfigurationEmbeddedDefinitionsV2_2_0,
};

export {
  VisualConfigurationSortDirection as VisualConfigurationSortDirectionV2_2_0,
  VisualQueryOptions as VisualConfigurationVisualQueryOptionsV2_2_0,
  AILevelInformation as VisualConfigurationAILevelInformationV2_2_0,
  AIDecompositionMethod as VisualConfigurationAIDecompositionMethodV2_2_0,
  Title as VisualConfigurationTitleV2_2_0,
  SubTitle as VisualConfigurationSubTitleV2_2_0,
  DividerV1_5_0 as VisualConfigurationDividerV2_2_0,
  Spacing as VisualConfigurationSpacingV2_2_0,
  VisualConfigurationBackground as VisualConfigurationBackgroundV2_2_0,
  Padding as VisualConfigurationPaddingV2_2_0,
  LockAspect as VisualConfigurationLockAspectV2_2_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationVisualContainerGeneralFormattingObjectsV2_2_0,
  BorderV1_5_0 as VisualConfigurationBorderV2_2_0,
  DropShadow as VisualConfigurationDropShadowV2_2_0,
  VisualTooltip as VisualConfigurationVisualTooltipV2_2_0,
  StylePreset as VisualConfigurationStylePresetV2_2_0,
  VisualHeaderV1_5_0 as VisualConfigurationVisualHeaderV2_2_0,
  VisualHeaderTooltip as VisualConfigurationVisualHeaderTooltipV2_2_0,
  VisualSyncGroup as VisualConfigurationVisualSyncGroupV2_2_0,
  VisualConfigurationSortDirection as VisualConfigurationEmbeddedSortDirectionV2_2_0,
  VisualQueryOptions as VisualConfigurationEmbeddedVisualQueryOptionsV2_2_0,
  AILevelInformation as VisualConfigurationEmbeddedAILevelInformationV2_2_0,
  AIDecompositionMethod as VisualConfigurationEmbeddedAIDecompositionMethodV2_2_0,
  Title as VisualConfigurationEmbeddedTitleV2_2_0,
  SubTitle as VisualConfigurationEmbeddedSubTitleV2_2_0,
  DividerV1_5_0 as VisualConfigurationEmbeddedDividerV2_2_0,
  Spacing as VisualConfigurationEmbeddedSpacingV2_2_0,
  VisualConfigurationBackground as VisualConfigurationEmbeddedBackgroundV2_2_0,
  Padding as VisualConfigurationEmbeddedPaddingV2_2_0,
  LockAspect as VisualConfigurationEmbeddedLockAspectV2_2_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_2_0,
  BorderV1_5_0 as VisualConfigurationEmbeddedBorderV2_2_0,
  DropShadow as VisualConfigurationEmbeddedDropShadowV2_2_0,
  VisualTooltip as VisualConfigurationEmbeddedVisualTooltipV2_2_0,
  StylePreset as VisualConfigurationEmbeddedStylePresetV2_2_0,
  VisualHeaderV1_5_0 as VisualConfigurationEmbeddedVisualHeaderV2_2_0,
  VisualHeaderTooltip as VisualConfigurationEmbeddedVisualHeaderTooltipV2_2_0,
  VisualSyncGroup as VisualConfigurationEmbeddedVisualSyncGroupV2_2_0,
} from "../shared.js";

export {
  VisualConfigurationQueryV2_0_0 as VisualConfigurationQueryV2_2_0,
  VisualConfigurationSortDefinitionV2_0_0 as VisualConfigurationSortDefinitionV2_2_0,
  VisualConfigurationQuerySortV2_0_0 as VisualConfigurationQuerySortV2_2_0,
  VisualConfigurationProjectionStateV2_0_0 as VisualConfigurationProjectionStateV2_2_0,
  VisualConfigurationRoleProjectionV2_0_0 as VisualConfigurationRoleProjectionV2_2_0,
  VisualConfigurationRoleFieldParameterV2_0_0 as VisualConfigurationRoleFieldParameterV2_2_0,
  VisualConfigurationExpansionStateV2_0_0 as VisualConfigurationExpansionStateV2_2_0,
  VisualConfigurationRootExpansionStateV2_0_0 as VisualConfigurationRootExpansionStateV2_2_0,
  VisualConfigurationNodeExpansionStateV2_0_0 as VisualConfigurationNodeExpansionStateV2_2_0,
  VisualConfigurationLevelExpansionStateV2_0_0 as VisualConfigurationLevelExpansionStateV2_2_0,
  VisualConfigurationQueryV2_0_0 as VisualConfigurationEmbeddedQueryV2_2_0,
  VisualConfigurationSortDefinitionV2_0_0 as VisualConfigurationEmbeddedSortDefinitionV2_2_0,
  VisualConfigurationQuerySortV2_0_0 as VisualConfigurationEmbeddedQuerySortV2_2_0,
  VisualConfigurationProjectionStateV2_0_0 as VisualConfigurationEmbeddedProjectionStateV2_2_0,
  VisualConfigurationRoleProjectionV2_0_0 as VisualConfigurationEmbeddedRoleProjectionV2_2_0,
  VisualConfigurationRoleFieldParameterV2_0_0 as VisualConfigurationEmbeddedRoleFieldParameterV2_2_0,
  VisualConfigurationExpansionStateV2_0_0 as VisualConfigurationEmbeddedExpansionStateV2_2_0,
  VisualConfigurationRootExpansionStateV2_0_0 as VisualConfigurationEmbeddedRootExpansionStateV2_2_0,
  VisualConfigurationNodeExpansionStateV2_0_0 as VisualConfigurationEmbeddedNodeExpansionStateV2_2_0,
  VisualConfigurationLevelExpansionStateV2_0_0 as VisualConfigurationEmbeddedLevelExpansionStateV2_2_0,
  VisualConfigurationVisualLinkV2_2_0 as VisualConfigurationEmbeddedVisualLinkV2_2_0,
} from "./shared.js";
