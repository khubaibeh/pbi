import { descriptions as base } from "./shared.descriptions.ts";

export const descriptions = {
	...base,
	Selector: {
		...base.Selector,
		fields: {
			...base.Selector.fields,
			hierarchyMatching:
				"Describes how the selector matches hierarchy values.\nThis also changes how the query is generated for {@link DataViewScopeWildcard} selectors.\nNow those selectors can produce scopedValues for the level those match.\n\nThere are two ways that we can match values in the hierarchy:\n1.",
		},
	},
};
