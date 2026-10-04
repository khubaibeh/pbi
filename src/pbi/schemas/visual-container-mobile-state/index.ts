import { versions as formattingObjectDefinitions } from "#pbi/schemas/formatting-object-definitions";
import { versions as semanticQuery } from "#pbi/schemas/semantic-query";
import {
	makeSchemas as makeVisualConfiguration,
	versions as visualConfiguration,
} from "#pbi/schemas/visual-configuration";

import { makeSchemas } from "./shared.ts";

const embedded = (
	version: string,
	formatting: keyof typeof formattingObjectDefinitions,
	visual: keyof typeof visualConfiguration,
) =>
	makeSchemas(formattingObjectDefinitions[formatting], visualConfiguration[visual], { version, angle: true });

const inline = (version: string, query: "1.0" | "1.1" | "1.2") => {
	const current = query !== "1.0";

	return makeSchemas(
		formattingObjectDefinitions[query],
		makeVisualConfiguration(formattingObjectDefinitions[query], semanticQuery[query], {
			formatMaxLength: true,
			currentFormatText: true,
			sortDirection: false,
			currentFieldParameterText: false,
			borderWidth: current,
			headerAlertButtons: current,
			dataFunction: false,
		}),
		{ version, angle: query === "1.2" },
	);
};

export const versions = {
	"2.4": embedded("2.4.0", "1.5", "2.3"),
	"2.3": embedded("2.3.0", "1.5", "2.3"),
	"2.2": embedded("2.2.0", "1.4", "2.2"),
	"2.1": embedded("2.1.0", "1.4", "2.1"),
	"2.0": embedded("2.0.0", "1.3", "2.0"),
	"1.5": embedded("1.5.0", "1.3", "1.8"),
	"1.4": embedded("1.4.0", "1.2", "1.7"),
	"1.3": embedded("1.3.0", "1.2", "1.6"),
	"1.2": inline("1.2.0", "1.2"),
	"1.1": inline("1.1.0", "1.1"),
	"1.0": inline("1.0.0", "1.0"),
} as const;

export const latest = versions["2.4"];
