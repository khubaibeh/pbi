import { Schema } from "effect";
import { VisualSyncGroup, closed } from "../shared.js";
import { DataViewObjectDefinitionsV1_2_0 } from "../formatting-object-definitions/version-1_2_0.js";
import {
  VisualConfigurationExpansionStateV1_5_0,
  VisualConfigurationQueryV1_5_0,
  VisualConfigurationVisualContainerFormattingObjectsV1_5_0,
} from "./shared.js";

export type VisualConfigurationV1_6_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.6.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV1_5_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV1_5_0>;
  readonly objects?: DataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV1_5_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationV1_6_0: Schema.Codec<VisualConfigurationV1_6_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.6.0/schema.json",
  ),
  visualType: Schema.String,
  autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
  query: Schema.optionalKey(Schema.suspend(() => VisualConfigurationQueryV1_5_0)),
  expansionStates: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => VisualConfigurationExpansionStateV1_5_0)),
  ),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_2_0)),
  visualContainerObjects: Schema.optionalKey(
    Schema.suspend(() => VisualConfigurationVisualContainerFormattingObjectsV1_5_0),
  ),
  syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
  drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
});

export {
  VisualConfigurationSortDirection as VisualConfigurationSortDirectionV1_6_0,
  VisualQueryOptions as VisualConfigurationVisualQueryOptionsV1_6_0,
  AILevelInformation as VisualConfigurationAILevelInformationV1_6_0,
  AIDecompositionMethod as VisualConfigurationAIDecompositionMethodV1_6_0,
  Title as VisualConfigurationTitleV1_6_0,
  SubTitle as VisualConfigurationSubTitleV1_6_0,
  DividerV1_5_0 as VisualConfigurationDividerV1_6_0,
  Spacing as VisualConfigurationSpacingV1_6_0,
  VisualConfigurationBackground as VisualConfigurationBackgroundV1_6_0,
  Padding as VisualConfigurationPaddingV1_6_0,
  LockAspect as VisualConfigurationLockAspectV1_6_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationVisualContainerGeneralFormattingObjectsV1_6_0,
  BorderV1_5_0 as VisualConfigurationBorderV1_6_0,
  DropShadow as VisualConfigurationDropShadowV1_6_0,
  VisualConfigurationVisualLinkV1_5_0 as VisualConfigurationVisualLinkV1_6_0,
  VisualTooltip as VisualConfigurationVisualTooltipV1_6_0,
  StylePreset as VisualConfigurationStylePresetV1_6_0,
  VisualHeaderV1_5_0 as VisualConfigurationVisualHeaderV1_6_0,
  VisualHeaderTooltip as VisualConfigurationVisualHeaderTooltipV1_6_0,
  VisualSyncGroup as VisualConfigurationVisualSyncGroupV1_6_0,
  VisualConfigurationSortDirection as VisualConfigurationEmbeddedSortDirectionV1_6_0,
  VisualQueryOptions as VisualConfigurationEmbeddedVisualQueryOptionsV1_6_0,
  AILevelInformation as VisualConfigurationEmbeddedAILevelInformationV1_6_0,
  AIDecompositionMethod as VisualConfigurationEmbeddedAIDecompositionMethodV1_6_0,
  Title as VisualConfigurationEmbeddedTitleV1_6_0,
  SubTitle as VisualConfigurationEmbeddedSubTitleV1_6_0,
  DividerV1_5_0 as VisualConfigurationEmbeddedDividerV1_6_0,
  Spacing as VisualConfigurationEmbeddedSpacingV1_6_0,
  VisualConfigurationBackground as VisualConfigurationEmbeddedBackgroundV1_6_0,
  Padding as VisualConfigurationEmbeddedPaddingV1_6_0,
  LockAspect as VisualConfigurationEmbeddedLockAspectV1_6_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_6_0,
  BorderV1_5_0 as VisualConfigurationEmbeddedBorderV1_6_0,
  DropShadow as VisualConfigurationEmbeddedDropShadowV1_6_0,
  VisualConfigurationVisualLinkV1_5_0 as VisualConfigurationEmbeddedVisualLinkV1_6_0,
  VisualTooltip as VisualConfigurationEmbeddedVisualTooltipV1_6_0,
  StylePreset as VisualConfigurationEmbeddedStylePresetV1_6_0,
  VisualHeaderV1_5_0 as VisualConfigurationEmbeddedVisualHeaderV1_6_0,
  VisualHeaderTooltip as VisualConfigurationEmbeddedVisualHeaderTooltipV1_6_0,
  VisualSyncGroup as VisualConfigurationEmbeddedVisualSyncGroupV1_6_0,
} from "../shared.js";

export {
  VisualConfigurationQueryV1_5_0 as VisualConfigurationQueryV1_6_0,
  VisualConfigurationSortDefinitionV1_5_0 as VisualConfigurationSortDefinitionV1_6_0,
  VisualConfigurationQuerySortV1_5_0 as VisualConfigurationQuerySortV1_6_0,
  VisualConfigurationProjectionStateV1_5_0 as VisualConfigurationProjectionStateV1_6_0,
  VisualConfigurationRoleProjectionV1_5_0 as VisualConfigurationRoleProjectionV1_6_0,
  VisualConfigurationRoleFieldParameterV1_5_0 as VisualConfigurationRoleFieldParameterV1_6_0,
  VisualConfigurationExpansionStateV1_5_0 as VisualConfigurationExpansionStateV1_6_0,
  VisualConfigurationRootExpansionStateV1_5_0 as VisualConfigurationRootExpansionStateV1_6_0,
  VisualConfigurationNodeExpansionStateV1_5_0 as VisualConfigurationNodeExpansionStateV1_6_0,
  VisualConfigurationLevelExpansionStateV1_5_0 as VisualConfigurationLevelExpansionStateV1_6_0,
  VisualConfigurationVisualContainerFormattingObjectsV1_5_0 as VisualConfigurationVisualContainerFormattingObjectsV1_6_0,
  VisualConfigurationDefinitionsV1_5_0 as VisualConfigurationDefinitionsV1_6_0,
  VisualConfigurationQueryV1_5_0 as VisualConfigurationEmbeddedQueryV1_6_0,
  VisualConfigurationSortDefinitionV1_5_0 as VisualConfigurationEmbeddedSortDefinitionV1_6_0,
  VisualConfigurationQuerySortV1_5_0 as VisualConfigurationEmbeddedQuerySortV1_6_0,
  VisualConfigurationProjectionStateV1_5_0 as VisualConfigurationEmbeddedProjectionStateV1_6_0,
  VisualConfigurationRoleProjectionV1_5_0 as VisualConfigurationEmbeddedRoleProjectionV1_6_0,
  VisualConfigurationRoleFieldParameterV1_5_0 as VisualConfigurationEmbeddedRoleFieldParameterV1_6_0,
  VisualConfigurationExpansionStateV1_5_0 as VisualConfigurationEmbeddedExpansionStateV1_6_0,
  VisualConfigurationRootExpansionStateV1_5_0 as VisualConfigurationEmbeddedRootExpansionStateV1_6_0,
  VisualConfigurationNodeExpansionStateV1_5_0 as VisualConfigurationEmbeddedNodeExpansionStateV1_6_0,
  VisualConfigurationLevelExpansionStateV1_5_0 as VisualConfigurationEmbeddedLevelExpansionStateV1_6_0,
  VisualConfigurationVisualContainerFormattingObjectsV1_5_0 as VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_6_0,
  VisualConfigurationDefinitionsV1_5_0 as VisualConfigurationEmbeddedDefinitionsV1_6_0,
  VisualConfigurationEmbeddedV1_5_0 as VisualConfigurationEmbeddedV1_6_0,
} from "./shared.js";
