import * as v13 from "./version-1.3.ts";

export const versions = {
	"1.3": {
		FilterConfig: v13.FilterConfig,
	},
} as const;

export const latest = versions["1.3"];
