import { Schema } from "effect";
import { DataViewObjectDefinitionsV1_4_0 } from "../formatting-object-definitions/version-1.4.0.js";
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
  ExpansionStateV2_0_0,
  LevelExpansionStateV2_0_0,
  NodeExpansionStateV2_0_0,
  ProjectionStateV2_0_0,
  QuerySortV2_0_0,
  QueryV2_0_0,
  RoleFieldParameterV2_0_0,
  RoleProjectionV2_0_0,
  RootExpansionStateV2_0_0,
  SortDefinitionV2_0_0,
  SortDirection,
  VisualContainerFormattingObjectsV2_2_0,
  VisualLink,
  VisualQueryOptions,
  VisualSyncGroup,
} from "./shared.js";

export type VisualConfigurationV2_2_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.2.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: QueryV2_0_0;
  readonly expansionStates?: ReadonlyArray<ExpansionStateV2_0_0>;
  readonly objects?: DataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV2_2_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationV2_2_0: Schema.Codec<VisualConfigurationV2_2_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.2.0/schema.json",
    ),
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => QueryV2_0_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => ExpansionStateV2_0_0)),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_4_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV2_2_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export type VisualConfigurationEmbeddedV2_2_0 = {
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: QueryV2_0_0;
  readonly expansionStates?: ReadonlyArray<ExpansionStateV2_0_0>;
  readonly objects?: DataViewObjectDefinitionsV1_4_0;
  readonly visualContainerObjects?: VisualContainerFormattingObjectsV2_2_0;
  readonly syncGroup?: VisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationEmbeddedV2_2_0: Schema.Codec<VisualConfigurationEmbeddedV2_2_0> =
  closed({
    visualType: Schema.String,
    autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
    query: Schema.optionalKey(Schema.suspend(() => QueryV2_0_0)),
    expansionStates: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => ExpansionStateV2_0_0)),
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => DataViewObjectDefinitionsV1_4_0),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerFormattingObjectsV2_2_0),
    ),
    syncGroup: Schema.optionalKey(Schema.suspend(() => VisualSyncGroup)),
    drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
  });

export const VisualConfigurationDefinitionsV2_2_0 = {
  Query: QueryV2_0_0,
  SortDefinition: SortDefinitionV2_0_0,
  QuerySort: QuerySortV2_0_0,
  SortDirection: SortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: ProjectionStateV2_0_0,
  RoleProjection: RoleProjectionV2_0_0,
  RoleFieldParameter: RoleFieldParameterV2_0_0,
  ExpansionState: ExpansionStateV2_0_0,
  RootExpansionState: RootExpansionStateV2_0_0,
  NodeExpansionState: NodeExpansionStateV2_0_0,
  LevelExpansionState: LevelExpansionStateV2_0_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualContainerFormattingObjectsV2_2_0,
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

export const VisualConfigurationEmbeddedDefinitionsV2_2_0 = {
  Query: QueryV2_0_0,
  SortDefinition: SortDefinitionV2_0_0,
  QuerySort: QuerySortV2_0_0,
  SortDirection: SortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: ProjectionStateV2_0_0,
  RoleProjection: RoleProjectionV2_0_0,
  RoleFieldParameter: RoleFieldParameterV2_0_0,
  ExpansionState: ExpansionStateV2_0_0,
  RootExpansionState: RootExpansionStateV2_0_0,
  NodeExpansionState: NodeExpansionStateV2_0_0,
  LevelExpansionState: LevelExpansionStateV2_0_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualContainerFormattingObjectsV2_2_0,
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
  QueryV2_0_0 as VisualConfigurationQueryV2_2_0,
  SortDefinitionV2_0_0 as VisualConfigurationSortDefinitionV2_2_0,
  QuerySortV2_0_0 as VisualConfigurationQuerySortV2_2_0,
  SortDirection as VisualConfigurationSortDirectionV2_2_0,
  VisualQueryOptions as VisualConfigurationVisualQueryOptionsV2_2_0,
  ProjectionStateV2_0_0 as VisualConfigurationProjectionStateV2_2_0,
  RoleProjectionV2_0_0 as VisualConfigurationRoleProjectionV2_2_0,
  RoleFieldParameterV2_0_0 as VisualConfigurationRoleFieldParameterV2_2_0,
  ExpansionStateV2_0_0 as VisualConfigurationExpansionStateV2_2_0,
  RootExpansionStateV2_0_0 as VisualConfigurationRootExpansionStateV2_2_0,
  NodeExpansionStateV2_0_0 as VisualConfigurationNodeExpansionStateV2_2_0,
  LevelExpansionStateV2_0_0 as VisualConfigurationLevelExpansionStateV2_2_0,
  AILevelInformation as VisualConfigurationAILevelInformationV2_2_0,
  AIDecompositionMethod as VisualConfigurationAIDecompositionMethodV2_2_0,
  VisualContainerFormattingObjectsV2_2_0 as VisualConfigurationVisualContainerFormattingObjectsV2_2_0,
  VisualLink as VisualConfigurationVisualLinkV2_2_0,
  VisualSyncGroup as VisualConfigurationVisualSyncGroupV2_2_0,
  QueryV2_0_0 as VisualConfigurationEmbeddedQueryV2_2_0,
  SortDefinitionV2_0_0 as VisualConfigurationEmbeddedSortDefinitionV2_2_0,
  QuerySortV2_0_0 as VisualConfigurationEmbeddedQuerySortV2_2_0,
  SortDirection as VisualConfigurationEmbeddedSortDirectionV2_2_0,
  VisualQueryOptions as VisualConfigurationEmbeddedVisualQueryOptionsV2_2_0,
  ProjectionStateV2_0_0 as VisualConfigurationEmbeddedProjectionStateV2_2_0,
  RoleProjectionV2_0_0 as VisualConfigurationEmbeddedRoleProjectionV2_2_0,
  RoleFieldParameterV2_0_0 as VisualConfigurationEmbeddedRoleFieldParameterV2_2_0,
  ExpansionStateV2_0_0 as VisualConfigurationEmbeddedExpansionStateV2_2_0,
  RootExpansionStateV2_0_0 as VisualConfigurationEmbeddedRootExpansionStateV2_2_0,
  NodeExpansionStateV2_0_0 as VisualConfigurationEmbeddedNodeExpansionStateV2_2_0,
  LevelExpansionStateV2_0_0 as VisualConfigurationEmbeddedLevelExpansionStateV2_2_0,
  AILevelInformation as VisualConfigurationEmbeddedAILevelInformationV2_2_0,
  AIDecompositionMethod as VisualConfigurationEmbeddedAIDecompositionMethodV2_2_0,
  VisualContainerFormattingObjectsV2_2_0 as VisualConfigurationEmbeddedVisualContainerFormattingObjectsV2_2_0,
  VisualLink as VisualConfigurationEmbeddedVisualLinkV2_2_0,
  VisualSyncGroup as VisualConfigurationEmbeddedVisualSyncGroupV2_2_0,
} from "./shared.js";

export {
  Title as VisualConfigurationTitleV2_2_0,
  SubTitle as VisualConfigurationSubTitleV2_2_0,
  Divider as VisualConfigurationDividerV2_2_0,
  Spacing as VisualConfigurationSpacingV2_2_0,
  Background as VisualConfigurationBackgroundV2_2_0,
  Padding as VisualConfigurationPaddingV2_2_0,
  LockAspect as VisualConfigurationLockAspectV2_2_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationVisualContainerGeneralFormattingObjectsV2_2_0,
  Border as VisualConfigurationBorderV2_2_0,
  DropShadow as VisualConfigurationDropShadowV2_2_0,
  VisualTooltip as VisualConfigurationVisualTooltipV2_2_0,
  StylePreset as VisualConfigurationStylePresetV2_2_0,
  VisualHeader as VisualConfigurationVisualHeaderV2_2_0,
  VisualHeaderTooltip as VisualConfigurationVisualHeaderTooltipV2_2_0,
  Title as VisualConfigurationEmbeddedTitleV2_2_0,
  SubTitle as VisualConfigurationEmbeddedSubTitleV2_2_0,
  Divider as VisualConfigurationEmbeddedDividerV2_2_0,
  Spacing as VisualConfigurationEmbeddedSpacingV2_2_0,
  Background as VisualConfigurationEmbeddedBackgroundV2_2_0,
  Padding as VisualConfigurationEmbeddedPaddingV2_2_0,
  LockAspect as VisualConfigurationEmbeddedLockAspectV2_2_0,
  VisualContainerGeneralFormattingObjects as VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjectsV2_2_0,
  Border as VisualConfigurationEmbeddedBorderV2_2_0,
  DropShadow as VisualConfigurationEmbeddedDropShadowV2_2_0,
  VisualTooltip as VisualConfigurationEmbeddedVisualTooltipV2_2_0,
  StylePreset as VisualConfigurationEmbeddedStylePresetV2_2_0,
  VisualHeader as VisualConfigurationEmbeddedVisualHeaderV2_2_0,
  VisualHeaderTooltip as VisualConfigurationEmbeddedVisualHeaderTooltipV2_2_0,
} from "../shared.js";
