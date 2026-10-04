import * as v21 from "./version-2.1.ts";

export const versions = {
	"2.1": {
		Page: v21.Page,
	},
} as const;

export const latest = versions["2.1"];
