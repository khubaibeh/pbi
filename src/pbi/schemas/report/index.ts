import * as v33 from "./version-3.3.ts";

export const versions = {
	"3.3": {
		Report: v33.Report,
	},
} as const;

export const latest = versions["3.3"];
