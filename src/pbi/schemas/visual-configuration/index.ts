import * as v15 from "./version-1.5.ts";
import * as v16 from "./version-1.6.ts";
import * as v17 from "./version-1.7.ts";
import * as v18 from "./version-1.8.ts";
import * as v20 from "./version-2.0.ts";
import * as v21 from "./version-2.1.ts";
import * as v22 from "./version-2.2.ts";
import * as v23 from "./version-2.3.ts";

export const versions = {
	"2.3": {
		Visual: v23.Visual,
		VisualContainerFormattingObjects: v23.VisualContainerFormattingObjects,
		Background: v23.Background,
		LockAspect: v23.LockAspect,
	},
	"2.2": {
		Visual: v22.Visual,
		VisualContainerFormattingObjects: v22.VisualContainerFormattingObjects,
		Background: v22.Background,
		LockAspect: v22.LockAspect,
	},
	"2.1": {
		Visual: v21.Visual,
		VisualContainerFormattingObjects: v21.VisualContainerFormattingObjects,
		Background: v21.Background,
		LockAspect: v21.LockAspect,
	},
	"2.0": {
		Visual: v20.Visual,
		VisualContainerFormattingObjects: v20.VisualContainerFormattingObjects,
		Background: v20.Background,
		LockAspect: v20.LockAspect,
	},
	"1.8": {
		Visual: v18.Visual,
		VisualContainerFormattingObjects: v18.VisualContainerFormattingObjects,
		Background: v18.Background,
		LockAspect: v18.LockAspect,
	},
	"1.7": {
		Visual: v17.Visual,
		VisualContainerFormattingObjects: v17.VisualContainerFormattingObjects,
		Background: v17.Background,
		LockAspect: v17.LockAspect,
	},
	"1.6": {
		Visual: v16.Visual,
		VisualContainerFormattingObjects: v16.VisualContainerFormattingObjects,
		Background: v16.Background,
		LockAspect: v16.LockAspect,
	},
	"1.5": {
		Visual: v15.Visual,
		VisualContainerFormattingObjects: v15.VisualContainerFormattingObjects,
		Background: v15.Background,
		LockAspect: v15.LockAspect,
	},
} as const;

export const latest = versions["2.3"];

export { makeSchemas } from "./shared.ts";
