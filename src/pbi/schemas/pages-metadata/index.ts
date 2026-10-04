import * as v10 from "./version-1.0.ts";
import * as v11 from "./version-1.1.ts";

export const versions = {
	"1.1": {
		PagesMetadata: v11.PagesMetadata,
	},
	"1.0": {
		PagesMetadata: v10.PagesMetadata,
	},
} as const;

export const latest = versions["1.1"];
