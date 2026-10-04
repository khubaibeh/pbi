import * as v23 from "./version-2.3.ts";

export const versions = {
	"2.3": {
		Visual: v23.Visual,
		VisualContainerFormattingObjects: v23.VisualContainerFormattingObjects,
		Background: v23.Background,
		LockAspect: v23.LockAspect,
	},
} as const;

export const latest = versions["2.3"];
