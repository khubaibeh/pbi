import * as v10 from "./version-1.0.ts";
import * as v11 from "./version-1.1.ts";
import * as v12 from "./version-1.2.ts";
import * as v13 from "./version-1.3.ts";

export const versions = {
	"1.3": { FilterConfig: v13.FilterConfig },
	"1.2": { FilterConfig: v12.FilterConfig },
	"1.1": { FilterConfig: v11.FilterConfig },
	"1.0": { FilterConfig: v10.FilterConfig },
} as const;

export const latest = versions["1.3"];

export { makeSchemas } from "./shared.ts";
