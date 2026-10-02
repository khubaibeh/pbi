import { Schema } from "effect";
import { VisualSyncGroup, closed } from "../shared.js";
import { DataViewObjectDefinitionsV1_3_0 } from "../formatting-object-definitions/version-1_3_0.js";
import {
  VisualConfigurationExpansionStateV1_5_0,
  VisualConfigurationQueryV1_8_0,
  VisualConfigurationVisualContainerFormattingObjectsV1_8_0,
} from "./shared.js";

export type VisualConfigurationV1_8_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.8.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV1_8_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV1_5_0>;
  readonly objects?: DataViewObjectDefinitionsV1_3_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV1_8_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationV1_8_0: Schema.Codec<VisualConfigurationV1_8_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.8.0/schema.json",
  ),
  visualType: Schema.String,
  autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
  query: Schema.optionalKey(Schema.suspend(() => VisualConfigurationQueryV1_8_0)),
  expansionStates: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => VisualConfigurationExpansionStateV1_5_0)),
  ),
  objects: Schema.optionalKey(Schema.suspend(() => DataViewObjectDefinitionsV1_3_0)),
  visualContainerObjects: Schema.optionalKey(
    Schema.suspend(() => VisualConfigurationVisualContainerFormattingObjectsV1_8_0),
  ),
  syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
  drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
});

export {
  VisualConfigurationSortDirection as VisualConfigurationSortDirectionV1_8_0,
  VisualQueryOptions as VisualConfigurationVisualQueryOptionsV1_8_0,
  AILevelInformation as VisualConfigurationAILevelInformationV1_8_0,
  AIDecompositionMethod as VisualConfigurationAIDecompositionMethodV1_8_0,
  Title as VisualConfigurationTitleV1_8_0,
  SubTitle as VisualConfigurationSubTitleV1_8_0,
  DividerV1_5_0 as VisualConfigurationDividerV1_8_0,
  Spacing as VisualConfigurationSpacingV1_8_0,
  VisualConfigurationBackground as VisualConfigurationBackgroundV1_8_0,
  Padding as VisualConfigurationPaddingV1_8_0,
  LockAspect as VisualConfigurationLockAspectV1_8_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationVisualContainerGeneralFormattingObjectsV1_8_0,
  BorderV1_5_0 as VisualConfigurationBorderV1_8_0,
  DropShadow as VisualConfigurationDropShadowV1_8_0,
  VisualConfigurationVisualLinkV1_5_0 as VisualConfigurationVisualLinkV1_8_0,
  VisualTooltip as VisualConfigurationVisualTooltipV1_8_0,
  StylePreset as VisualConfigurationStylePresetV1_8_0,
  VisualHeaderV1_5_0 as VisualConfigurationVisualHeaderV1_8_0,
  VisualHeaderTooltip as VisualConfigurationVisualHeaderTooltipV1_8_0,
  VisualSyncGroup as VisualConfigurationVisualSyncGroupV1_8_0,
  VisualConfigurationSortDirection as VisualConfigurationEmbeddedSortDirectionV1_8_0,
  VisualQueryOptions as VisualConfigurationEmbeddedVisualQueryOptionsV1_8_0,
  AILevelInformation as VisualConfigurationEmbeddedAILevelInformationV1_8_0,
  AIDecompositionMethod as VisualConfigurationEmbeddedAIDecompositionMethodV1_8_0,
  Title as VisualConfigurationEmbeddedTitleV1_8_0,
  SubTitle as VisualConfigurationEmbeddedSubTitleV1_8_0,
  DividerV1_5_0 as VisualConfigurationEmbeddedDividerV1_8_0,
  Spacing as VisualConfigurationEmbeddedSpacingV1_8_0,
  VisualConfigurationBackground as VisualConfigurationEmbeddedBackgroundV1_8_0,
  Padding as VisualConfigurationEmbeddedPaddingV1_8_0,
  LockAspect as VisualConfigurationEmbeddedLockAspectV1_8_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_8_0,
  BorderV1_5_0 as VisualConfigurationEmbeddedBorderV1_8_0,
  DropShadow as VisualConfigurationEmbeddedDropShadowV1_8_0,
  VisualConfigurationVisualLinkV1_5_0 as VisualConfigurationEmbeddedVisualLinkV1_8_0,
  VisualTooltip as VisualConfigurationEmbeddedVisualTooltipV1_8_0,
  StylePreset as VisualConfigurationEmbeddedStylePresetV1_8_0,
  VisualHeaderV1_5_0 as VisualConfigurationEmbeddedVisualHeaderV1_8_0,
  VisualHeaderTooltip as VisualConfigurationEmbeddedVisualHeaderTooltipV1_8_0,
  VisualSyncGroup as VisualConfigurationEmbeddedVisualSyncGroupV1_8_0,
} from "../shared.js";

export {
  VisualConfigurationSortDefinitionV1_5_0 as VisualConfigurationSortDefinitionV1_8_0,
  VisualConfigurationQuerySortV1_5_0 as VisualConfigurationQuerySortV1_8_0,
  VisualConfigurationRoleProjectionV1_5_0 as VisualConfigurationRoleProjectionV1_8_0,
  VisualConfigurationExpansionStateV1_5_0 as VisualConfigurationExpansionStateV1_8_0,
  VisualConfigurationRootExpansionStateV1_5_0 as VisualConfigurationRootExpansionStateV1_8_0,
  VisualConfigurationNodeExpansionStateV1_5_0 as VisualConfigurationNodeExpansionStateV1_8_0,
  VisualConfigurationLevelExpansionStateV1_5_0 as VisualConfigurationLevelExpansionStateV1_8_0,
  VisualConfigurationQueryV1_8_0 as VisualConfigurationEmbeddedQueryV1_8_0,
  VisualConfigurationSortDefinitionV1_5_0 as VisualConfigurationEmbeddedSortDefinitionV1_8_0,
  VisualConfigurationQuerySortV1_5_0 as VisualConfigurationEmbeddedQuerySortV1_8_0,
  VisualConfigurationProjectionStateV1_8_0 as VisualConfigurationEmbeddedProjectionStateV1_8_0,
  VisualConfigurationRoleProjectionV1_5_0 as VisualConfigurationEmbeddedRoleProjectionV1_8_0,
  VisualConfigurationRoleFieldParameterV1_8_0 as VisualConfigurationEmbeddedRoleFieldParameterV1_8_0,
  VisualConfigurationExpansionStateV1_5_0 as VisualConfigurationEmbeddedExpansionStateV1_8_0,
  VisualConfigurationRootExpansionStateV1_5_0 as VisualConfigurationEmbeddedRootExpansionStateV1_8_0,
  VisualConfigurationNodeExpansionStateV1_5_0 as VisualConfigurationEmbeddedNodeExpansionStateV1_8_0,
  VisualConfigurationLevelExpansionStateV1_5_0 as VisualConfigurationEmbeddedLevelExpansionStateV1_8_0,
  VisualConfigurationVisualContainerFormattingObjectsV1_8_0 as VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_8_0,
  VisualConfigurationDefinitionsV1_8_0 as VisualConfigurationEmbeddedDefinitionsV1_8_0,
} from "./shared.js";
