import { Literal, String, Struct, isPattern } from "effect/Schema";

import { describe } from "#pbi/schemas/shared.ts";

import { descriptions as d } from "./version-1.0.descriptions.ts";

export const VersionMetadata = describe(
	Struct({
		$schema: Literal(
			"https://developer.microsoft.com/json-schemas/fabric/item/report/definition/versionMetadata/1.0.0/schema.json",
		),
		version: String.check(isPattern(/^[1-9][0-9]*\.(0|[1-9][0-9]*)\.0$/u)),
	}),
	d.VersionMetadata,
).annotate({ identifier: "VersionMetadata.VersionMetadata" });
