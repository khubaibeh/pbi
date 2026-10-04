import {
	makeSchemas as makeFilterConfiguration,
	versions as filterConfiguration,
} from "#pbi/schemas/filter-configuration";
import { versions as formattingObjectDefinitions } from "#pbi/schemas/formatting-object-definitions";
import { versions as semanticQuery } from "#pbi/schemas/semantic-query";

import { makeSchemas } from "./shared.ts";

const embedded = (
	version: string,
	filter: keyof typeof filterConfiguration,
	formatting: keyof typeof formattingObjectDefinitions,
	options: Pick<Parameters<typeof makeSchemas>[2], "settings" | "themeVersion" | "layoutOptimization">,
) =>
	makeSchemas(filterConfiguration[filter], formattingObjectDefinitions[formatting], { version, ...options });

const inline = (version: string, query: "1.0" | "1.1" | "1.2") =>
	makeSchemas(
		makeFilterConfiguration(formattingObjectDefinitions[query], semanticQuery[query], {
			visualTopN: query !== "1.0",
		}),
		formattingObjectDefinitions[query],
		{ version, settings: "base", themeVersion: false, layoutOptimization: true },
	);

export const versions = {
	"3.3": embedded("3.3.0", "1.3", "1.5", {
		settings: "locale",
		themeVersion: true,
		layoutOptimization: false,
	}),
	"3.2": embedded("3.2.0", "1.3", "1.5", {
		settings: "fieldParameter",
		themeVersion: true,
		layoutOptimization: false,
	}),
	"3.1": embedded("3.1.0", "1.2", "1.4", {
		settings: "fieldParameter",
		themeVersion: true,
		layoutOptimization: false,
	}),
	"3.0": embedded("3.0.0", "1.2", "1.4", { settings: "base", themeVersion: true, layoutOptimization: false }),
	"2.1": embedded("2.1.0", "1.2", "1.4", {
		settings: "base",
		themeVersion: false,
		layoutOptimization: false,
	}),
	"2.0": embedded("2.0.0", "1.1", "1.3", {
		settings: "base",
		themeVersion: false,
		layoutOptimization: false,
	}),
	"1.3": embedded("1.3.0", "1.1", "1.3", { settings: "base", themeVersion: false, layoutOptimization: true }),
	"1.2": inline("1.2.0", "1.2"),
	"1.1": inline("1.1.0", "1.1"),
	"1.0": inline("1.0.0", "1.0"),
} as const;

export const latest = versions["3.3"];
