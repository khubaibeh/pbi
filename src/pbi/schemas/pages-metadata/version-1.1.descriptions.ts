export const descriptions = {
	PagesMetadata: {
		description: "Defines additional information about the report's pages.",
		fields: {
			pageOrder: [
				"Defines the order in which report pages are rendered (page names). If omitted, they will be ordered by display name by default.",
				"If there are pages in this list, that don't have a corresponding definition, they will be ignored.",
				"Pages with definitions, but not in this list will be ordered by display name and appended to the end, after pages that exist in this list.",
			].join("\n"),
			activePageName:
				"Report will open on this page by default - if omitted, report will open on first page based on order defined by pageOrder semantics. If both activePageName and landingPageName are set, landingPageName takes precedence.",
			landingPageName:
				"If set, the report will always open on this page for all users, overriding activePageName. The value is the page name (not display name).",
			$schema: "Defines the schema to use for an item.",
		},
	},
};
