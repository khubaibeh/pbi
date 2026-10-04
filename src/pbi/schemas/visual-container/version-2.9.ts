import {
	Array,
	Boolean,
	type Codec,
	Literal,
	Literals,
	Number,
	String,
	Struct,
	Unknown,
	isMaxLength,
	makeFilter,
	optionalKey as opt,
} from "effect/Schema";

import { versions as filterConfiguration } from "#pbi/schemas/filter-configuration";
import { versions as formattingObjectDefinitions } from "#pbi/schemas/formatting-object-definitions";
import { describe } from "#pbi/schemas/shared.ts";
import { versions as visualConfiguration } from "#pbi/schemas/visual-configuration";

import { descriptions as d } from "./version-2.9.descriptions.ts";

const { FilterConfig } = filterConfiguration["1.3"];
const { Selector } = formattingObjectDefinitions["1.5"];
const { Visual, Background, LockAspect } = visualConfiguration["2.3"];

const VisualContainerPosition = describe(
	Struct({
		x: Number,
		y: Number,
		z: opt(Number),
		height: Number,
		width: Number,
		tabOrder: opt(Number),
		angle: opt(Number),
	}),
	d.VisualContainerPosition,
).annotate({ identifier: "VisualContainer.VisualContainerPosition" });

const VisualGroupGeneralFormattingObjects = describe(
	Struct({
		x: opt(Unknown),
		y: opt(Unknown),
		width: opt(Unknown),
		height: opt(Unknown),
		altText: opt(Unknown),
	}),
	d.VisualGroupGeneralFormattingObjects,
).annotate({ identifier: "VisualContainer.VisualGroupGeneralFormattingObjects" });

const formatting = <S extends Codec<unknown>>(properties: S) =>
	opt(
		Array(
			describe(
				Struct({
					selector: opt(Selector),
					properties,
				}),
				d["VisualGroupFormattingObjects.*"],
			),
		),
	);

const VisualGroupFormattingObjects = describe(
	Struct({
		background: formatting(Background),
		lockAspect: formatting(LockAspect),
		general: formatting(VisualGroupGeneralFormattingObjects),
	}),
	d.VisualGroupFormattingObjects,
).annotate({ identifier: "VisualContainer.VisualGroupFormattingObjects" });

const VisualGroupConfig = describe(
	Struct({
		displayName: String,
		groupMode: Literals(["ScaleMode", "ScrollMode"]),
		objects: opt(VisualGroupFormattingObjects),
	}),
	d.VisualGroupConfig,
).annotate({ identifier: "VisualContainer.VisualGroupConfig" });

const Annotation = describe(
	Struct({
		name: String,
		value: String,
	}),
	d.Annotation,
).annotate({ identifier: "VisualContainer.Annotation" });

export const VisualContainer = describe(
	Struct({
		$schema: Literal(
			"https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.9.0/schema.json",
		),
		name: String.check(isMaxLength(50)),
		position: VisualContainerPosition,
		visual: opt(Visual),
		visualGroup: opt(VisualGroupConfig),
		parentGroupName: opt(String),
		filterConfig: opt(FilterConfig),
		isHidden: opt(Boolean),
		annotations: opt(Array(Annotation)),
		howCreated: opt(
			Literals([
				"Default",
				"Copilot",
				"CheckboxTickedInFieldList",
				"DraggedToCanvas",
				"VisualTypeIconClicked",
				"DraggedToFieldWell",
				"InsertVisualButton",
				"WhatIfParameterControl",
				"QnaAppBar",
				"QnaDoubleClick",
				"QnaKeyboardShortcut",
				"FieldParameterControl",
				"CanvasBackgroundContextMenu",
				"ContextMenuPaste",
				"CopyPaste",
				"SummarizeVisualContainer",
			]),
		),
	}),
	d.VisualContainer,
)
	.check(
		makeFilter(
			(value) =>
				(value.visual === undefined) !== (value.visualGroup === undefined) ||
				"Expected exactly one of visual or visualGroup",
		),
	)
	.annotate({ identifier: "VisualContainer.VisualContainer" });
