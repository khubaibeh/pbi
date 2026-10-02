import { Schema } from "effect";
import { VisualSyncGroup, closed } from "../shared.js";
import { DataViewObjectDefinitionsV1_4_0 } from "../formatting-object-definitions/version-1_4_0.js";
import {
  VisualConfigurationExpansionStateV2_0_0,
  VisualConfigurationQueryV2_0_0,
  VisualConfigurationVisualContainerFormattingObjectsV2_0_0,
} from "./shared.js";

export type VisualConfigurationEmbeddedV2_1_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV2_0_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV2_0_0>;
  readonly objects?: DataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV2_0_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationEmbeddedV2_1_0: Schema.Codec<VisualConfigurationEmbeddedV2_1_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => VisualConfigurationQueryV2_0_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationExpansionStateV2_0_0)),
    ),
    objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_4_0)),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualConfigurationVisualContainerFormattingObjectsV2_0_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export {
  VisualConfigurationSortDirection as VisualConfigurationSortDirectionV2_1_0,
  VisualQueryOptions as VisualConfigurationVisualQueryOptionsV2_1_0,
  AILevelInformation as VisualConfigurationAILevelInformationV2_1_0,
  AIDecompositionMethod as VisualConfigurationAIDecompositionMethodV2_1_0,
  Title as VisualConfigurationTitleV2_1_0,
  SubTitle as VisualConfigurationSubTitleV2_1_0,
  DividerV1_5_0 as VisualConfigurationDividerV2_1_0,
  Spacing as VisualConfigurationSpacingV2_1_0,
  VisualConfigurationBackground as VisualConfigurationBackgroundV2_1_0,
  Padding as VisualConfigurationPaddingV2_1_0,
  LockAspect as VisualConfigurationLockAspectV2_1_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationVisualContainerGeneralFormattingObjectsV2_1_0,
  BorderV1_5_0 as VisualConfigurationBorderV2_1_0,
  DropShadow as VisualConfigurationDropShadowV2_1_0,
  VisualConfigurationVisualLinkV1_5_0 as VisualConfigurationVisualLinkV2_1_0,
  VisualTooltip as VisualConfigurationVisualTooltipV2_1_0,
  StylePreset as VisualConfigurationStylePresetV2_1_0,
  VisualHeaderV1_5_0 as VisualConfigurationVisualHeaderV2_1_0,
  VisualHeaderTooltip as VisualConfigurationVisualHeaderTooltipV2_1_0,
  VisualSyncGroup as VisualConfigurationVisualSyncGroupV2_1_0,
  VisualConfigurationSortDirection as VisualConfigurationEmbeddedSortDirectionV2_1_0,
  VisualQueryOptions as VisualConfigurationEmbeddedVisualQueryOptionsV2_1_0,
  AILevelInformation as VisualConfigurationEmbeddedAILevelInformationV2_1_0,
  AIDecompositionMethod as VisualConfigurationEmbeddedAIDecompositionMethodV2_1_0,
  Title as VisualConfigurationEmbeddedTitleV2_1_0,
  SubTitle as VisualConfigurationEmbeddedSubTitleV2_1_0,
  DividerV1_5_0 as VisualConfigurationEmbeddedDividerV2_1_0,
  Spacing as VisualConfigurationEmbeddedSpacingV2_1_0,
  VisualConfigurationBackground as VisualConfigurationEmbeddedBackgroundV2_1_0,
  Padding as VisualConfigurationEmbeddedPaddingV2_1_0,
  LockAspect as VisualConfigurationEmbeddedLockAspectV2_1_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_1_0,
  BorderV1_5_0 as VisualConfigurationEmbeddedBorderV2_1_0,
  DropShadow as VisualConfigurationEmbeddedDropShadowV2_1_0,
  VisualConfigurationVisualLinkV1_5_0 as VisualConfigurationEmbeddedVisualLinkV2_1_0,
  VisualTooltip as VisualConfigurationEmbeddedVisualTooltipV2_1_0,
  StylePreset as VisualConfigurationEmbeddedStylePresetV2_1_0,
  VisualHeaderV1_5_0 as VisualConfigurationEmbeddedVisualHeaderV2_1_0,
  VisualHeaderTooltip as VisualConfigurationEmbeddedVisualHeaderTooltipV2_1_0,
  VisualSyncGroup as VisualConfigurationEmbeddedVisualSyncGroupV2_1_0,
} from "../shared.js";

export {
  VisualConfigurationQueryV2_0_0 as VisualConfigurationQueryV2_1_0,
  VisualConfigurationSortDefinitionV2_0_0 as VisualConfigurationSortDefinitionV2_1_0,
  VisualConfigurationQuerySortV2_0_0 as VisualConfigurationQuerySortV2_1_0,
  VisualConfigurationProjectionStateV2_0_0 as VisualConfigurationProjectionStateV2_1_0,
  VisualConfigurationRoleProjectionV2_0_0 as VisualConfigurationRoleProjectionV2_1_0,
  VisualConfigurationRoleFieldParameterV2_0_0 as VisualConfigurationRoleFieldParameterV2_1_0,
  VisualConfigurationExpansionStateV2_0_0 as VisualConfigurationExpansionStateV2_1_0,
  VisualConfigurationRootExpansionStateV2_0_0 as VisualConfigurationRootExpansionStateV2_1_0,
  VisualConfigurationNodeExpansionStateV2_0_0 as VisualConfigurationNodeExpansionStateV2_1_0,
  VisualConfigurationLevelExpansionStateV2_0_0 as VisualConfigurationLevelExpansionStateV2_1_0,
  VisualConfigurationVisualContainerFormattingObjectsV2_0_0 as VisualConfigurationVisualContainerFormattingObjectsV2_1_0,
  VisualConfigurationDefinitionsV2_0_0 as VisualConfigurationDefinitionsV2_1_0,
  VisualConfigurationV2_0_0 as VisualConfigurationV2_1_0,
  VisualConfigurationQueryV2_0_0 as VisualConfigurationEmbeddedQueryV2_1_0,
  VisualConfigurationSortDefinitionV2_0_0 as VisualConfigurationEmbeddedSortDefinitionV2_1_0,
  VisualConfigurationQuerySortV2_0_0 as VisualConfigurationEmbeddedQuerySortV2_1_0,
  VisualConfigurationProjectionStateV2_0_0 as VisualConfigurationEmbeddedProjectionStateV2_1_0,
  VisualConfigurationRoleProjectionV2_0_0 as VisualConfigurationEmbeddedRoleProjectionV2_1_0,
  VisualConfigurationRoleFieldParameterV2_0_0 as VisualConfigurationEmbeddedRoleFieldParameterV2_1_0,
  VisualConfigurationExpansionStateV2_0_0 as VisualConfigurationEmbeddedExpansionStateV2_1_0,
  VisualConfigurationRootExpansionStateV2_0_0 as VisualConfigurationEmbeddedRootExpansionStateV2_1_0,
  VisualConfigurationNodeExpansionStateV2_0_0 as VisualConfigurationEmbeddedNodeExpansionStateV2_1_0,
  VisualConfigurationLevelExpansionStateV2_0_0 as VisualConfigurationEmbeddedLevelExpansionStateV2_1_0,
  VisualConfigurationVisualContainerFormattingObjectsV2_0_0 as VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_1_0,
  VisualConfigurationDefinitionsV2_0_0 as VisualConfigurationEmbeddedDefinitionsV2_1_0,
} from "./shared.js";
