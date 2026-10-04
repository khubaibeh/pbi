import * as v10 from "./version-1.0.ts";
import * as v11 from "./version-1.1.ts";
import * as v12 from "./version-1.2.ts";
import * as v13 from "./version-1.3.ts";
import * as v14 from "./version-1.4.ts";
import * as v20 from "./version-2.0.ts";
import * as v21 from "./version-2.1.ts";

export const versions = {
	"2.1": { Page: v21.Page },
	"2.0": { Page: v20.Page },
	"1.4": { Page: v14.Page },
	"1.3": { Page: v13.Page },
	"1.2": { Page: v12.Page },
	"1.1": { Page: v11.Page },
	"1.0": { Page: v10.Page },
} as const;

export const latest = versions["2.1"];
