import {
	Array,
	Boolean,
	type Codec,
	Literal,
	Literals,
	Number,
	String,
	Struct,
	isMaxLength,
	makeFilter,
	optionalKey as opt,
} from "effect/Schema";

import { PropertyValue, describe } from "#pbi/schemas/shared.ts";

import { descriptions as d } from "./shared.descriptions.ts";

const positionFields = {
	x: Number,
	y: Number,
	z: opt(Number),
	height: Number,
	width: Number,
	tabOrder: opt(Number),
};

const makePosition = (angle: boolean) =>
	describe(
		Struct(angle ? { ...positionFields, angle: opt(Number) } : positionFields),
		d.VisualContainerPosition,
	).annotate({ identifier: "VisualContainer.VisualContainerPosition" });

const howCreated = [
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
] as const;

const VisualGroupGeneralFormattingObjects = describe(
	Struct({
		x: opt(PropertyValue),
		y: opt(PropertyValue),
		width: opt(PropertyValue),
		height: opt(PropertyValue),
		altText: opt(PropertyValue),
	}),
	d.VisualGroupGeneralFormattingObjects,
).annotate({ identifier: "VisualContainer.VisualGroupGeneralFormattingObjects" });

const Annotation = describe(
	Struct({
		name: String,
		value: String,
	}),
	d.Annotation,
).annotate({ identifier: "VisualContainer.Annotation" });

export function makeSchemas(
	visualConfiguration: {
		readonly Visual: Codec<unknown>;
		readonly Background: Codec<unknown>;
		readonly LockAspect: Codec<unknown>;
	},
	filterConfiguration: { readonly FilterConfig: Codec<unknown> },
	formattingObjectDefinitions: { readonly Selector: Codec<unknown> },
	options: { readonly version: string; readonly angle: boolean; readonly summarize: boolean },
) {
	const { Visual, Background, LockAspect } = visualConfiguration;
	const { FilterConfig } = filterConfiguration;
	const { Selector } = formattingObjectDefinitions;

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

	const VisualContainer = describe(
		Struct({
			$schema: Literal(
				`https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/${options.version}/schema.json`,
			),
			name: String.check(isMaxLength(50)),
			position: makePosition(options.angle),
			visual: opt(Visual),
			visualGroup: opt(VisualGroupConfig),
			parentGroupName: opt(String),
			filterConfig: opt(FilterConfig),
			isHidden: opt(Boolean),
			annotations: opt(Array(Annotation)),
			howCreated: opt(Literals(options.summarize ? [...howCreated, "SummarizeVisualContainer"] : howCreated)),
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

	return { VisualContainer };
}
