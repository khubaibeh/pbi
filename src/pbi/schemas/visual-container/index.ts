import * as v29 from "./version-2.9.ts";

export const versions = {
	"2.9": {
		VisualContainer: v29.VisualContainer,
	},
} as const;

export const latest = versions["2.9"];
