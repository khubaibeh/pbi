import {
	makeSchemas as makeFilterConfiguration,
	versions as filterConfiguration,
} from "#pbi/schemas/filter-configuration";
import { versions as formattingObjectDefinitions } from "#pbi/schemas/formatting-object-definitions";
import { versions as semanticQuery } from "#pbi/schemas/semantic-query";
import {
	makeSchemas as makeVisualConfiguration,
	versions as visualConfiguration,
} from "#pbi/schemas/visual-configuration";

import { makeSchemas } from "./shared.ts";

const embedded = (
	version: string,
	visual: keyof typeof visualConfiguration,
	filter: keyof typeof filterConfiguration,
	formatting: keyof typeof formattingObjectDefinitions,
) =>
	makeSchemas(
		visualConfiguration[visual],
		filterConfiguration[filter],
		formattingObjectDefinitions[formatting],
		{ version, angle: true, summarize: true },
	);

const inline = (version: string, query: "1.0" | "1.1" | "1.2") => {
	const current = query !== "1.0";

	return makeSchemas(
		makeVisualConfiguration(formattingObjectDefinitions[query], semanticQuery[query], {
			formatMaxLength: query === "1.2",
			currentFormatText: current,
			sortDirection: false,
			currentFieldParameterText: false,
			borderWidth: current,
			headerAlertButtons: current,
			dataFunction: false,
		}),
		makeFilterConfiguration(formattingObjectDefinitions[query], semanticQuery[query], {
			visualTopN: current,
		}),
		formattingObjectDefinitions[query],
		{ version, angle: query === "1.2", summarize: current },
	);
};

export const versions = {
	"2.9": embedded("2.9.0", "2.3", "1.3", "1.5"),
	"2.8": embedded("2.8.0", "2.3", "1.3", "1.5"),
	"2.7": embedded("2.7.0", "2.3", "1.3", "1.5"),
	"2.6": embedded("2.6.0", "2.2", "1.2", "1.4"),
	"2.5": embedded("2.5.0", "2.2", "1.2", "1.4"),
	"2.4": embedded("2.4.0", "2.2", "1.2", "1.4"),
	"2.3": embedded("2.3.0", "2.2", "1.2", "1.4"),
	"2.2": embedded("2.2.0", "2.2", "1.2", "1.4"),
	"2.1": embedded("2.1.0", "2.1", "1.2", "1.4"),
	"2.0": embedded("2.0.0", "2.0", "1.1", "1.3"),
	"1.8": embedded("1.8.0", "1.8", "1.1", "1.3"),
	"1.7": embedded("1.7.0", "1.7", "1.0", "1.2"),
	"1.6": embedded("1.6.0", "1.6", "1.0", "1.2"),
	"1.5": embedded("1.5.0", "1.5", "1.0", "1.2"),
	"1.4": inline("1.4.0", "1.2"),
	"1.3": inline("1.3.0", "1.2"),
	"1.2": inline("1.2.0", "1.2"),
	"1.1": inline("1.1.0", "1.1"),
	"1.0": inline("1.0.0", "1.0"),
} as const;

export const latest = versions["2.9"];
