import { Schema } from "effect";
import { VisualSyncGroup, closed } from "../shared.js";
import { DataViewObjectDefinitionsV1_2_0 } from "../formatting-object-definitions/version-1_2_0.js";
import {
  VisualConfigurationExpansionStateV1_5_0,
  VisualConfigurationQueryV1_5_0,
  VisualConfigurationVisualContainerFormattingObjectsV1_5_0,
} from "./shared.js";

export type VisualConfigurationV1_5_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.5.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV1_5_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV1_5_0>;
  readonly objects?: DataViewObjectDefinitionsV1_2_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV1_5_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationV1_5_0: Schema.Codec<VisualConfigurationV1_5_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.5.0/schema.json",
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
  VisualConfigurationSortDirection as VisualConfigurationSortDirectionV1_5_0,
  VisualQueryOptions as VisualConfigurationVisualQueryOptionsV1_5_0,
  AILevelInformation as VisualConfigurationAILevelInformationV1_5_0,
  AIDecompositionMethod as VisualConfigurationAIDecompositionMethodV1_5_0,
  Title as VisualConfigurationTitleV1_5_0,
  SubTitle as VisualConfigurationSubTitleV1_5_0,
  DividerV1_5_0 as VisualConfigurationDividerV1_5_0,
  Spacing as VisualConfigurationSpacingV1_5_0,
  VisualConfigurationBackground as VisualConfigurationBackgroundV1_5_0,
  Padding as VisualConfigurationPaddingV1_5_0,
  LockAspect as VisualConfigurationLockAspectV1_5_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationVisualContainerGeneralFormattingObjectsV1_5_0,
  BorderV1_5_0 as VisualConfigurationBorderV1_5_0,
  DropShadow as VisualConfigurationDropShadowV1_5_0,
  VisualTooltip as VisualConfigurationVisualTooltipV1_5_0,
  StylePreset as VisualConfigurationStylePresetV1_5_0,
  VisualHeaderV1_5_0 as VisualConfigurationVisualHeaderV1_5_0,
  VisualHeaderTooltip as VisualConfigurationVisualHeaderTooltipV1_5_0,
  VisualSyncGroup as VisualConfigurationVisualSyncGroupV1_5_0,
  VisualConfigurationSortDirection as VisualConfigurationEmbeddedSortDirectionV1_5_0,
  VisualQueryOptions as VisualConfigurationEmbeddedVisualQueryOptionsV1_5_0,
  AILevelInformation as VisualConfigurationEmbeddedAILevelInformationV1_5_0,
  AIDecompositionMethod as VisualConfigurationEmbeddedAIDecompositionMethodV1_5_0,
  Title as VisualConfigurationEmbeddedTitleV1_5_0,
  SubTitle as VisualConfigurationEmbeddedSubTitleV1_5_0,
  DividerV1_5_0 as VisualConfigurationEmbeddedDividerV1_5_0,
  Spacing as VisualConfigurationEmbeddedSpacingV1_5_0,
  VisualConfigurationBackground as VisualConfigurationEmbeddedBackgroundV1_5_0,
  Padding as VisualConfigurationEmbeddedPaddingV1_5_0,
  LockAspect as VisualConfigurationEmbeddedLockAspectV1_5_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV1_5_0,
  BorderV1_5_0 as VisualConfigurationEmbeddedBorderV1_5_0,
  DropShadow as VisualConfigurationEmbeddedDropShadowV1_5_0,
  VisualConfigurationVisualLinkV1_5_0 as VisualConfigurationEmbeddedVisualLinkV1_5_0,
  VisualTooltip as VisualConfigurationEmbeddedVisualTooltipV1_5_0,
  StylePreset as VisualConfigurationEmbeddedStylePresetV1_5_0,
  VisualHeaderV1_5_0 as VisualConfigurationEmbeddedVisualHeaderV1_5_0,
  VisualHeaderTooltip as VisualConfigurationEmbeddedVisualHeaderTooltipV1_5_0,
  VisualSyncGroup as VisualConfigurationEmbeddedVisualSyncGroupV1_5_0,
} from "../shared.js";

export {
  VisualConfigurationQueryV1_5_0 as VisualConfigurationEmbeddedQueryV1_5_0,
  VisualConfigurationSortDefinitionV1_5_0 as VisualConfigurationEmbeddedSortDefinitionV1_5_0,
  VisualConfigurationQuerySortV1_5_0 as VisualConfigurationEmbeddedQuerySortV1_5_0,
  VisualConfigurationProjectionStateV1_5_0 as VisualConfigurationEmbeddedProjectionStateV1_5_0,
  VisualConfigurationRoleProjectionV1_5_0 as VisualConfigurationEmbeddedRoleProjectionV1_5_0,
  VisualConfigurationRoleFieldParameterV1_5_0 as VisualConfigurationEmbeddedRoleFieldParameterV1_5_0,
  VisualConfigurationExpansionStateV1_5_0 as VisualConfigurationEmbeddedExpansionStateV1_5_0,
  VisualConfigurationRootExpansionStateV1_5_0 as VisualConfigurationEmbeddedRootExpansionStateV1_5_0,
  VisualConfigurationNodeExpansionStateV1_5_0 as VisualConfigurationEmbeddedNodeExpansionStateV1_5_0,
  VisualConfigurationLevelExpansionStateV1_5_0 as VisualConfigurationEmbeddedLevelExpansionStateV1_5_0,
  VisualConfigurationVisualContainerFormattingObjectsV1_5_0 as VisualConfigurationEmbeddedVisualContainerFormattingObjectsV1_5_0,
  VisualConfigurationDefinitionsV1_5_0 as VisualConfigurationEmbeddedDefinitionsV1_5_0,
} from "./shared.js";
