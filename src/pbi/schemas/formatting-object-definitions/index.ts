import * as v15 from "./version-1.5.ts";

export const versions = {
	"1.5": {
		DataViewObjectDefinitions: v15.DataViewObjectDefinitions,
		Selector: v15.Selector,
		DataRepetitionSelector: v15.DataRepetitionSelector,
	},
} as const;

export const latest = versions["1.5"];
