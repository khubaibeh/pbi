import * as v10 from "./version-1.0.ts";
import * as v11 from "./version-1.1.ts";
import * as v12 from "./version-1.2.ts";
import * as v13 from "./version-1.3.ts";
import * as v14 from "./version-1.4.ts";
import * as v15 from "./version-1.5.ts";

export const versions = {
	"1.5": {
		DataViewObjectDefinitions: v15.DataViewObjectDefinitions,
		Selector: v15.Selector,
		DataRepetitionSelector: v15.DataRepetitionSelector,
	},
	"1.4": {
		DataViewObjectDefinitions: v14.DataViewObjectDefinitions,
		Selector: v14.Selector,
		DataRepetitionSelector: v14.DataRepetitionSelector,
	},
	"1.3": {
		DataViewObjectDefinitions: v13.DataViewObjectDefinitions,
		Selector: v13.Selector,
		DataRepetitionSelector: v13.DataRepetitionSelector,
	},
	"1.2": {
		DataViewObjectDefinitions: v12.DataViewObjectDefinitions,
		Selector: v12.Selector,
		DataRepetitionSelector: v12.DataRepetitionSelector,
	},
	"1.1": {
		DataViewObjectDefinitions: v11.DataViewObjectDefinitions,
		Selector: v11.Selector,
		DataRepetitionSelector: v11.DataRepetitionSelector,
	},
	"1.0": {
		DataViewObjectDefinitions: v10.DataViewObjectDefinitions,
		Selector: v10.Selector,
		DataRepetitionSelector: v10.DataRepetitionSelector,
	},
} as const;

export const latest = versions["1.5"];
