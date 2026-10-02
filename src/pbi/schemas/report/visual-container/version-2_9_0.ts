import { Schema } from "effect";
import { Annotation, VisualContainerPositionV1_2_0, closed } from "../shared.js";
import { FilterConfigurationEmbeddedV1_3_0 } from "../filter-configuration/version-1_3_0.js";
import { VisualConfigurationEmbeddedV2_3_0 } from "../visual-configuration/version-2_3_0.js";
import { VisualGroupConfigV2_7_0 } from "./shared.js";

export type VisualContainerV2_9_0 =
  | ({
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.9.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerPositionV1_2_0;
      readonly visual: VisualConfigurationEmbeddedV2_3_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: FilterConfigurationEmbeddedV1_3_0;
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
      readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.9.0/schema.json";
      readonly name: string;
      readonly position: VisualContainerPositionV1_2_0;
      readonly visualGroup: VisualGroupConfigV2_7_0;
      readonly parentGroupName?: string;
      readonly filterConfig?: FilterConfigurationEmbeddedV1_3_0;
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

export const VisualContainerV2_9_0: Schema.Codec<VisualContainerV2_9_0> = Schema.Union([
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.9.0/schema.json",
    ),
    name: Schema.String.check(Schema.isMaxCodePoints(50)),
    position: Schema.suspend(() => VisualContainerPositionV1_2_0),
    visual: Schema.suspend(() => VisualConfigurationEmbeddedV2_3_0),
    parentGroupName: Schema.optionalKey(Schema.String),
    filterConfig: Schema.optionalKey(Schema.suspend(() => FilterConfigurationEmbeddedV1_3_0)),
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
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.9.0/schema.json",
    ),
    name: Schema.String.check(Schema.isMaxCodePoints(50)),
    position: Schema.suspend(() => VisualContainerPositionV1_2_0),
    visualGroup: Schema.suspend(() => VisualGroupConfigV2_7_0),
    parentGroupName: Schema.optionalKey(Schema.String),
    filterConfig: Schema.optionalKey(Schema.suspend(() => FilterConfigurationEmbeddedV1_3_0)),
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
  VisualContainerPositionV1_2_0 as VisualContainerVisualContainerPositionV2_9_0,
  Annotation as VisualContainerAnnotationV2_9_0,
} from "../shared.js";

export {
  VisualGroupConfigV2_7_0 as VisualContainerVisualGroupConfigV2_9_0,
  GroupLayoutMode as VisualContainerGroupLayoutModeV2_9_0,
  VisualGroupFormattingObjectsV2_7_0 as VisualContainerVisualGroupFormattingObjectsV2_9_0,
  VisualGroupGeneralFormattingObjects as VisualContainerVisualGroupGeneralFormattingObjectsV2_9_0,
  VisualContainerDefinitionsV2_7_0 as VisualContainerDefinitionsV2_9_0,
} from "./shared.js";
