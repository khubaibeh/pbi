import { Schema } from "effect";
import { Annotation, VisualContainerPositionV1_2_0, closed } from "../shared.js";
import { FilterConfigurationEmbeddedV1_0_0 } from "../filter-configuration/version-1_0_0.js";
import { VisualConfigurationEmbeddedV1_5_0 } from "../visual-configuration/shared.js";
import { VisualGroupConfigV1_2_0 } from "./shared.js";

export type VisualContainerV1_3_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.3.0/schema.json";
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
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.3.0/schema.json";
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

export const VisualContainerV1_3_0: Schema.Codec<VisualContainerV1_3_0> = Schema.Union([
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.3.0/schema.json",
    ),
    name: Schema.String.check(Schema.isMaxCodePoints(50)),
    position: Schema.suspend(() => VisualContainerPositionV1_2_0),
    visual: Schema.suspend(() => VisualConfigurationEmbeddedV1_5_0),
    parentGroupName: Schema.optionalKey(Schema.String),
    filterConfig: Schema.optionalKey(Schema.suspend(() => FilterConfigurationEmbeddedV1_0_0)),
    isHidden: Schema.optionalKey(Schema.Boolean),
    annotations: Schema.optionalKey(Schema.Array(Schema.suspend(() => Annotation))),
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
    position: Schema.suspend(() => VisualContainerPositionV1_2_0),
    visualGroup: Schema.suspend(() => VisualGroupConfigV1_2_0),
    parentGroupName: Schema.optionalKey(Schema.String),
    filterConfig: Schema.optionalKey(Schema.suspend(() => FilterConfigurationEmbeddedV1_0_0)),
    isHidden: Schema.optionalKey(Schema.Boolean),
    annotations: Schema.optionalKey(Schema.Array(Schema.suspend(() => Annotation))),
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

export {
  FilterConfigurationEmbeddedV1_0_0 as VisualContainerFilterConfigV1_3_0,
  FilterConfigurationFilterContainerV1_0_0 as VisualContainerFilterContainerV1_3_0,
  FilterConfigurationFilterContainerFormattingObjectsV1_0_0 as VisualContainerFilterContainerFormattingObjectsV1_3_0,
} from "../filter-configuration/version-1_0_0.js";

export {
  VisualContainerPositionV1_2_0 as VisualContainerVisualContainerPositionV1_3_0,
  VisualConfigurationSortDirection as VisualContainerSortDirectionV1_3_0,
  VisualQueryOptions as VisualContainerVisualQueryOptionsV1_3_0,
  AILevelInformation as VisualContainerAILevelInformationV1_3_0,
  AIDecompositionMethod as VisualContainerAIDecompositionMethodV1_3_0,
  Title as VisualContainerTitleV1_3_0,
  SubTitle as VisualContainerSubTitleV1_3_0,
  DividerV1_5_0 as VisualContainerDividerV1_3_0,
  Spacing as VisualContainerSpacingV1_3_0,
  VisualConfigurationBackground as VisualContainerBackgroundV1_3_0,
  Padding as VisualContainerPaddingV1_3_0,
  LockAspect as VisualContainerLockAspectV1_3_0,
  VisualContainerGeneralFormattingObjects as VisualContainerVisualContainerGeneralFormattingObjectsV1_3_0,
  BorderV1_5_0 as VisualContainerBorderV1_3_0,
  DropShadow as VisualContainerDropShadowV1_3_0,
  VisualConfigurationVisualLinkV1_5_0 as VisualContainerVisualLinkV1_3_0,
  VisualTooltip as VisualContainerVisualTooltipV1_3_0,
  StylePreset as VisualContainerStylePresetV1_3_0,
  VisualHeaderV1_5_0 as VisualContainerVisualHeaderV1_3_0,
  VisualHeaderTooltip as VisualContainerVisualHeaderTooltipV1_3_0,
  VisualSyncGroup as VisualContainerVisualSyncGroupV1_3_0,
  FilterContainerFormattingObjectsProperties as VisualContainerFilterContainerFormattingObjectsPropertiesV1_3_0,
  Annotation as VisualContainerAnnotationV1_3_0,
} from "../shared.js";

export {
  VisualConfigurationEmbeddedV1_5_0 as VisualContainerVisualConfigV1_3_0,
  VisualConfigurationQueryV1_5_0 as VisualContainerQueryV1_3_0,
  VisualConfigurationSortDefinitionV1_5_0 as VisualContainerSortDefinitionV1_3_0,
  VisualConfigurationQuerySortV1_5_0 as VisualContainerQuerySortV1_3_0,
  VisualConfigurationProjectionStateV1_5_0 as VisualContainerProjectionStateV1_3_0,
  VisualConfigurationRoleProjectionV1_5_0 as VisualContainerRoleProjectionV1_3_0,
  VisualConfigurationRoleFieldParameterV1_5_0 as VisualContainerRoleFieldParameterV1_3_0,
  VisualConfigurationExpansionStateV1_5_0 as VisualContainerExpansionStateV1_3_0,
  VisualConfigurationRootExpansionStateV1_5_0 as VisualContainerRootExpansionStateV1_3_0,
  VisualConfigurationNodeExpansionStateV1_5_0 as VisualContainerNodeExpansionStateV1_3_0,
  VisualConfigurationLevelExpansionStateV1_5_0 as VisualContainerLevelExpansionStateV1_3_0,
  VisualConfigurationVisualContainerFormattingObjectsV1_5_0 as VisualContainerVisualContainerFormattingObjectsV1_3_0,
} from "../visual-configuration/shared.js";

export {
  VisualGroupConfigV1_2_0 as VisualContainerVisualGroupConfigV1_3_0,
  GroupLayoutMode as VisualContainerGroupLayoutModeV1_3_0,
  VisualGroupFormattingObjectsV1_2_0 as VisualContainerVisualGroupFormattingObjectsV1_3_0,
  VisualGroupGeneralFormattingObjects as VisualContainerVisualGroupGeneralFormattingObjectsV1_3_0,
  VisualContainerDefinitionsV1_2_0 as VisualContainerDefinitionsV1_3_0,
} from "./shared.js";
