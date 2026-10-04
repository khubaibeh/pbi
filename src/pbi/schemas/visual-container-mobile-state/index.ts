import * as v24 from "./version-2.4.ts";

export const versions = {
	"2.4": {
		MobileState: v24.MobileState,
	},
} as const;

export const latest = versions["2.4"];
