import { Schema } from "effect";

import {
  FilterConfigurationEmbeddedV1_0_0,
  FilterContainerFormattingObjectsV1_0_0 as FilterConfigurationFilterContainerFormattingObjectsV1_0_0,
  FilterContainerV1_0_0 as FilterConfigurationFilterContainerV1_0_0,
} from "../filter-configuration/version-1.0.0.js";
import {
  Annotation,
  Background as SharedBackground,
  Border as SharedBorder,
  closed,
  Divider,
  DropShadow,
  FilterContainerFormattingProperties,
  LockAspect,
  Padding,
  Spacing,
  StylePreset,
  SubTitle,
  Title,
  VisualContainerGeneralFormattingObjects,
  VisualHeader as SharedVisualHeader,
  VisualHeaderTooltip,
  VisualLink as SharedVisualLink,
  VisualTooltip,
} from "../shared.js";
import {
  AIDecompositionMethod,
  AILevelInformation,
  ExpansionStateV1_5_0,
  LevelExpansionStateV1_5_0,
  NodeExpansionStateV1_5_0,
  ProjectionStateV1_5_0,
  QuerySortV1_5_0,
  QueryV1_5_0,
  RoleFieldParameterV1_5_0,
  RoleProjectionV1_5_0,
  RootExpansionStateV1_5_0,
  SortDefinitionV1_5_0,
  SortDirection as VisualConfigurationSortDirection,
  VisualConfigurationEmbeddedV1_5_0,
  VisualContainerFormattingObjectsV1_5_0,
  VisualQueryOptions,
  VisualSyncGroup,
} from "../visual-configuration/shared.js";
import {
  GroupLayoutMode,
  VisualContainerPositionV1_2_0,
  VisualGroupConfigV1_2_0,
  VisualGroupFormattingObjectsV1_2_0,
  VisualGroupGeneralFormattingObjects,
} from "./shared.js";

export type VisualContainerV1_4_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.4.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerPositionV1_2_0;
      readonly visual: VisualConfigurationEmbeddedV1_5_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: FilterConfigurationEmbeddedV1_0_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<Annotation>;
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
      readonly position: VisualContainerPositionV1_2_0;
      readonly visualGroup: VisualGroupConfigV1_2_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: FilterConfigurationEmbeddedV1_0_0;
      readonly isHidden?: boolean;
      readonly annotations?: ReadonlyArray<Annotation>;
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
      position: Schema.suspend(() => VisualContainerPositionV1_2_0),
      visual: Schema.suspend(() => VisualConfigurationEmbeddedV1_5_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => FilterConfigurationEmbeddedV1_0_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => Annotation)),
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
      position: Schema.suspend(() => VisualContainerPositionV1_2_0),
      visualGroup: Schema.suspend(() => VisualGroupConfigV1_2_0),
      parentGroupName: Schema.optionalKey(Schema.String),
      filterConfig: Schema.optionalKey(
        Schema.suspend(() => FilterConfigurationEmbeddedV1_0_0),
      ),
      isHidden: Schema.optionalKey(Schema.Boolean),
      annotations: Schema.optionalKey(
        Schema.Array(Schema.suspend(() => Annotation)),
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

export const VisualContainerDefinitionsV1_4_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
  VisualConfig: VisualConfigurationEmbeddedV1_5_0,
  Query: QueryV1_5_0,
  SortDefinition: SortDefinitionV1_5_0,
  QuerySort: QuerySortV1_5_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: ProjectionStateV1_5_0,
  RoleProjection: RoleProjectionV1_5_0,
  RoleFieldParameter: RoleFieldParameterV1_5_0,
  ExpansionState: ExpansionStateV1_5_0,
  RootExpansionState: RootExpansionStateV1_5_0,
  NodeExpansionState: NodeExpansionStateV1_5_0,
  LevelExpansionState: LevelExpansionStateV1_5_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualContainerFormattingObjectsV1_5_0,
  Title: Title,
  SubTitle: SubTitle,
  Divider: Divider,
  Spacing: Spacing,
  Background: SharedBackground,
  Padding: Padding,
  LockAspect: LockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualContainerGeneralFormattingObjects,
  Border: SharedBorder,
  DropShadow: DropShadow,
  VisualLink: SharedVisualLink,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: SharedVisualHeader,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualSyncGroup: VisualSyncGroup,
  VisualGroupConfig: VisualGroupConfigV1_2_0,
  GroupLayoutMode: GroupLayoutMode,
  VisualGroupFormattingObjects: VisualGroupFormattingObjectsV1_2_0,
  VisualGroupGeneralFormattingObjects: VisualGroupGeneralFormattingObjects,
  FilterConfig: FilterConfigurationEmbeddedV1_0_0,
  FilterContainer: FilterConfigurationFilterContainerV1_0_0,
  FilterContainerFormattingObjects:
    FilterConfigurationFilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties:
    FilterContainerFormattingProperties,
  Annotation: Annotation,
} as const;

export {
  VisualContainerPositionV1_2_0 as VisualContainerVisualContainerPositionV1_4_0,
  VisualGroupConfigV1_2_0 as VisualContainerVisualGroupConfigV1_4_0,
  GroupLayoutMode as VisualContainerGroupLayoutModeV1_4_0,
  VisualGroupFormattingObjectsV1_2_0 as VisualContainerVisualGroupFormattingObjectsV1_4_0,
  VisualGroupGeneralFormattingObjects as VisualContainerVisualGroupGeneralFormattingObjectsV1_4_0,
} from "./shared.js";

export {
  VisualConfigurationEmbeddedV1_5_0 as VisualContainerVisualConfigV1_4_0,
  QueryV1_5_0 as VisualContainerQueryV1_4_0,
  SortDefinitionV1_5_0 as VisualContainerSortDefinitionV1_4_0,
  QuerySortV1_5_0 as VisualContainerQuerySortV1_4_0,
  SortDirection as VisualContainerSortDirectionV1_4_0,
  VisualQueryOptions as VisualContainerVisualQueryOptionsV1_4_0,
  ProjectionStateV1_5_0 as VisualContainerProjectionStateV1_4_0,
  RoleProjectionV1_5_0 as VisualContainerRoleProjectionV1_4_0,
  RoleFieldParameterV1_5_0 as VisualContainerRoleFieldParameterV1_4_0,
  ExpansionStateV1_5_0 as VisualContainerExpansionStateV1_4_0,
  RootExpansionStateV1_5_0 as VisualContainerRootExpansionStateV1_4_0,
  NodeExpansionStateV1_5_0 as VisualContainerNodeExpansionStateV1_4_0,
  LevelExpansionStateV1_5_0 as VisualContainerLevelExpansionStateV1_4_0,
  AILevelInformation as VisualContainerAILevelInformationV1_4_0,
  AIDecompositionMethod as VisualContainerAIDecompositionMethodV1_4_0,
  VisualContainerFormattingObjectsV1_5_0 as VisualContainerVisualContainerFormattingObjectsV1_4_0,
  VisualSyncGroup as VisualContainerVisualSyncGroupV1_4_0,
} from "../visual-configuration/shared.js";

export {
  Title as VisualContainerTitleV1_4_0,
  SubTitle as VisualContainerSubTitleV1_4_0,
  Divider as VisualContainerDividerV1_4_0,
  Spacing as VisualContainerSpacingV1_4_0,
  Background as VisualContainerBackgroundV1_4_0,
  Padding as VisualContainerPaddingV1_4_0,
  LockAspect as VisualContainerLockAspectV1_4_0,
  VisualContainerGeneralFormattingObjects as VisualContainerVisualContainerGeneralFormattingObjectsV1_4_0,
  Border as VisualContainerBorderV1_4_0,
  DropShadow as VisualContainerDropShadowV1_4_0,
  VisualLink as VisualContainerVisualLinkV1_4_0,
  VisualTooltip as VisualContainerVisualTooltipV1_4_0,
  StylePreset as VisualContainerStylePresetV1_4_0,
  VisualHeader as VisualContainerVisualHeaderV1_4_0,
  VisualHeaderTooltip as VisualContainerVisualHeaderTooltipV1_4_0,
  FilterContainerFormattingProperties as VisualContainerFilterContainerFormattingObjectsPropertiesV1_4_0,
  Annotation as VisualContainerAnnotationV1_4_0,
} from "../shared.js";

export {
  FilterConfigurationEmbeddedV1_0_0 as VisualContainerFilterConfigV1_4_0,
  FilterContainerV1_0_0 as VisualContainerFilterContainerV1_4_0,
  FilterContainerFormattingObjectsV1_0_0 as VisualContainerFilterContainerFormattingObjectsV1_4_0,
} from "../filter-configuration/version-1.0.0.js";
