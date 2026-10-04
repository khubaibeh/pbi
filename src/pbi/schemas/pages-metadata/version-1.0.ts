import { Array, Literal, String, Struct, optionalKey as opt } from "effect/Schema";

import { describe } from "#pbi/schemas/shared.ts";

import { descriptions as d } from "./version-1.0.descriptions.ts";

export const PagesMetadata = describe(
	Struct({
		pageOrder: opt(Array(String)),
		activePageName: opt(String),
		$schema: Literal(
			"https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.0.0/schema.json",
		),
	}),
	d.PagesMetadata,
).annotate({ identifier: "PagesMetadata.PagesMetadata" });
