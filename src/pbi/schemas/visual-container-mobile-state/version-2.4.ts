import { Literal, Number, Struct, optionalKey as opt } from "effect/Schema";

import { versions as formattingObjectDefinitions } from "#pbi/schemas/formatting-object-definitions";
import { describe } from "#pbi/schemas/shared.ts";
import { versions as visualConfiguration } from "#pbi/schemas/visual-configuration";

import { descriptions as d } from "./version-2.4.descriptions.ts";

const { DataViewObjectDefinitions } = formattingObjectDefinitions["1.5"];
const { VisualContainerFormattingObjects } = visualConfiguration["2.3"];

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
).annotate({ identifier: "VisualContainerMobileState.VisualContainerPosition" });

export const MobileState = describe(
	Struct({
		$schema: Literal(
			"https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.4.0/schema.json",
		),
		objects: opt(DataViewObjectDefinitions),
		visualContainerObjects: opt(VisualContainerFormattingObjects),
		position: VisualContainerPosition,
	}),
	d.MobileState,
).annotate({ identifier: "VisualContainerMobileState.MobileState" });
