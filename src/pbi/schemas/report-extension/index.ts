import * as v10 from "./version-1.0.ts";

export const versions = {
	"1.0": {
		ReportExtension: v10.ReportExtension,
	},
} as const;

export const latest = versions["1.0"];
