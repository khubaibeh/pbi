import { type Codec, Literal, Number, Struct, optionalKey as opt } from "effect/Schema";

import { describe } from "#pbi/schemas/shared.ts";

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
	).annotate({ identifier: "VisualContainerMobileState.VisualContainerPosition" });

export function makeSchemas(
	formattingObjectDefinitions: { readonly DataViewObjectDefinitions: Codec<unknown> },
	visualConfiguration: { readonly VisualContainerFormattingObjects: Codec<unknown> },
	options: { readonly version: string; readonly angle: boolean },
) {
	const { DataViewObjectDefinitions } = formattingObjectDefinitions;
	const { VisualContainerFormattingObjects } = visualConfiguration;

	const MobileState = describe(
		Struct({
			$schema: Literal(
				`https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/${options.version}/schema.json`,
			),
			objects: opt(DataViewObjectDefinitions),
			visualContainerObjects: opt(VisualContainerFormattingObjects),
			position: makePosition(options.angle),
		}),
		d.MobileState,
	).annotate({ identifier: "VisualContainerMobileState.MobileState" });

	return { MobileState };
}
