import { Schema } from "effect";
import { DataViewObjectDefinitionsV1_5_0 } from "../formatting-object-definitions/version-1.5.0.js";
import {
  Background,
  Border,
  closed,
  Divider,
  DropShadow,
  LockAspect,
  Padding,
  Spacing,
  StylePreset,
  SubTitle,
  Title,
  VisualContainerGeneralFormattingObjects,
  VisualHeader,
  VisualHeaderTooltip,
  VisualTooltip,
} from "../shared.js";
import {
  AIDecompositionMethod,
  AILevelInformation,
  ExpansionStateV2_3_0,
  LevelExpansionStateV2_3_0,
  NodeExpansionStateV2_3_0,
  ProjectionStateV2_3_0,
  QuerySortV2_3_0,
  QueryV2_3_0,
  RoleFieldParameterV2_3_0,
  RoleProjectionV2_3_0,
  RootExpansionStateV2_3_0,
  SortDefinitionV2_3_0,
  SortDirection,
  VisualContainerFormattingObjectsV2_3_0,
  VisualLink,
  VisualQueryOptions,
  VisualSyncGroup,
} from "./shared.js";

export type VisualConfigurationV2_3_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.3.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: QueryV2_3_0;
  readonly expansionStates?: ReadonlyArray<ExpansionStateV2_3_0>;
  readonly objects?: DataViewObjectDefinitionsV1_5_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV2_3_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationV2_3_0: Schema.Codec<VisualConfigurationV2_3_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.3.0/schema.json",
    ),
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => QueryV2_3_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => ExpansionStateV2_3_0)),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_5_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV2_3_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedV2_3_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: QueryV2_3_0;
  readonly expansionStates?: ReadonlyArray<ExpansionStateV2_3_0>;
  readonly objects?: DataViewObjectDefinitionsV1_5_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV2_3_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationEmbeddedV2_3_0: Schema.Codec<VisualConfigurationEmbeddedV2_3_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => QueryV2_3_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => ExpansionStateV2_3_0)),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_5_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV2_3_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export const VisualConfigurationDefinitionsV2_3_0 = {
  Query: QueryV2_3_0,
  SortDefinition: SortDefinitionV2_3_0,
  QuerySort: QuerySortV2_3_0,
  SortDirection: SortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: ProjectionStateV2_3_0,
  RoleProjection: RoleProjectionV2_3_0,
  RoleFieldParameter: RoleFieldParameterV2_3_0,
  ExpansionState: ExpansionStateV2_3_0,
  RootExpansionState: RootExpansionStateV2_3_0,
  NodeExpansionState: NodeExpansionStateV2_3_0,
  LevelExpansionState: LevelExpansionStateV2_3_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualContainerFormattingObjectsV2_3_0,
  Title: Title,
  SubTitle: SubTitle,
  Divider: Divider,
  Spacing: Spacing,
  Background: Background,
  Padding: Padding,
  LockAspect: LockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualContainerGeneralFormattingObjects,
  Border: Border,
  DropShadow: DropShadow,
  VisualLink: VisualLink,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: VisualHeader,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualSyncGroup: VisualSyncGroup,
} as const;

export const VisualConfigurationEmbeddedDefinitionsV2_3_0 = {
  Query: QueryV2_3_0,
  SortDefinition: SortDefinitionV2_3_0,
  QuerySort: QuerySortV2_3_0,
  SortDirection: SortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: ProjectionStateV2_3_0,
  RoleProjection: RoleProjectionV2_3_0,
  RoleFieldParameter: RoleFieldParameterV2_3_0,
  ExpansionState: ExpansionStateV2_3_0,
  RootExpansionState: RootExpansionStateV2_3_0,
  NodeExpansionState: NodeExpansionStateV2_3_0,
  LevelExpansionState: LevelExpansionStateV2_3_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualContainerFormattingObjectsV2_3_0,
  Title: Title,
  SubTitle: SubTitle,
  Divider: Divider,
  Spacing: Spacing,
  Background: Background,
  Padding: Padding,
  LockAspect: LockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualContainerGeneralFormattingObjects,
  Border: Border,
  DropShadow: DropShadow,
  VisualLink: VisualLink,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: VisualHeader,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualSyncGroup: VisualSyncGroup,
} as const;

export {
  QueryV2_3_0 as VisualConfigurationQueryV2_3_0,
  SortDefinitionV2_3_0 as VisualConfigurationSortDefinitionV2_3_0,
  QuerySortV2_3_0 as VisualConfigurationQuerySortV2_3_0,
  SortDirection as VisualConfigurationSortDirectionV2_3_0,
  VisualQueryOptions as VisualConfigurationVisualQueryOptionsV2_3_0,
  ProjectionStateV2_3_0 as VisualConfigurationProjectionStateV2_3_0,
  RoleProjectionV2_3_0 as VisualConfigurationRoleProjectionV2_3_0,
  RoleFieldParameterV2_3_0 as VisualConfigurationRoleFieldParameterV2_3_0,
  ExpansionStateV2_3_0 as VisualConfigurationExpansionStateV2_3_0,
  RootExpansionStateV2_3_0 as VisualConfigurationRootExpansionStateV2_3_0,
  NodeExpansionStateV2_3_0 as VisualConfigurationNodeExpansionStateV2_3_0,
  LevelExpansionStateV2_3_0 as VisualConfigurationLevelExpansionStateV2_3_0,
  AILevelInformation as VisualConfigurationAILevelInformationV2_3_0,
  AIDecompositionMethod as VisualConfigurationAIDecompositionMethodV2_3_0,
  VisualContainerFormattingObjectsV2_3_0 as VisualConfigurationVisualContainerFormattingObjectsV2_3_0,
  VisualLink as VisualConfigurationVisualLinkV2_3_0,
  VisualSyncGroup as VisualConfigurationVisualSyncGroupV2_3_0,
  QueryV2_3_0 as VisualConfigurationEmbeddedQueryV2_3_0,
  SortDefinitionV2_3_0 as VisualConfigurationEmbeddedSortDefinitionV2_3_0,
  QuerySortV2_3_0 as VisualConfigurationEmbeddedQuerySortV2_3_0,
  SortDirection as VisualConfigurationEmbeddedSortDirectionV2_3_0,
  VisualQueryOptions as VisualConfigurationEmbeddedVisualQueryOptionsV2_3_0,
  ProjectionStateV2_3_0 as VisualConfigurationEmbeddedProjectionStateV2_3_0,
  RoleProjectionV2_3_0 as VisualConfigurationEmbeddedRoleProjectionV2_3_0,
  RoleFieldParameterV2_3_0 as VisualConfigurationEmbeddedRoleFieldParameterV2_3_0,
  ExpansionStateV2_3_0 as VisualConfigurationEmbeddedExpansionStateV2_3_0,
  RootExpansionStateV2_3_0 as VisualConfigurationEmbeddedRootExpansionStateV2_3_0,
  NodeExpansionStateV2_3_0 as VisualConfigurationEmbeddedNodeExpansionStateV2_3_0,
  LevelExpansionStateV2_3_0 as VisualConfigurationEmbeddedLevelExpansionStateV2_3_0,
  AILevelInformation as VisualConfigurationEmbeddedAILevelInformationV2_3_0,
  AIDecompositionMethod as VisualConfigurationEmbeddedAIDecompositionMethodV2_3_0,
  VisualContainerFormattingObjectsV2_3_0 as VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_3_0,
  VisualLink as VisualConfigurationEmbeddedVisualLinkV2_3_0,
  VisualSyncGroup as VisualConfigurationEmbeddedVisualSyncGroupV2_3_0,
} from "./shared.js";

export {
  Title as VisualConfigurationTitleV2_3_0,
  SubTitle as VisualConfigurationSubTitleV2_3_0,
  Divider as VisualConfigurationDividerV2_3_0,
  Spacing as VisualConfigurationSpacingV2_3_0,
  Background as VisualConfigurationBackgroundV2_3_0,
  Padding as VisualConfigurationPaddingV2_3_0,
  LockAspect as VisualConfigurationLockAspectV2_3_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationVisualContainerGeneralFormattingObjectsV2_3_0,
  Border as VisualConfigurationBorderV2_3_0,
  DropShadow as VisualConfigurationDropShadowV2_3_0,
  VisualTooltip as VisualConfigurationVisualTooltipV2_3_0,
  StylePreset as VisualConfigurationStylePresetV2_3_0,
  VisualHeader as VisualConfigurationVisualHeaderV2_3_0,
  VisualHeaderTooltip as VisualConfigurationVisualHeaderTooltipV2_3_0,
  Title as VisualConfigurationEmbeddedTitleV2_3_0,
  SubTitle as VisualConfigurationEmbeddedSubTitleV2_3_0,
  Divider as VisualConfigurationEmbeddedDividerV2_3_0,
  Spacing as VisualConfigurationEmbeddedSpacingV2_3_0,
  Background as VisualConfigurationEmbeddedBackgroundV2_3_0,
  Padding as VisualConfigurationEmbeddedPaddingV2_3_0,
  LockAspect as VisualConfigurationEmbeddedLockAspectV2_3_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_3_0,
  Border as VisualConfigurationEmbeddedBorderV2_3_0,
  DropShadow as VisualConfigurationEmbeddedDropShadowV2_3_0,
  VisualTooltip as VisualConfigurationEmbeddedVisualTooltipV2_3_0,
  StylePreset as VisualConfigurationEmbeddedStylePresetV2_3_0,
  VisualHeader as VisualConfigurationEmbeddedVisualHeaderV2_3_0,
  VisualHeaderTooltip as VisualConfigurationEmbeddedVisualHeaderTooltipV2_3_0,
} from "../shared.js";
