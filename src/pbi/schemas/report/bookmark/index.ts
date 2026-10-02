import { BookmarkV1_0_0 } from "./version-1.0.0.js";
import { BookmarkV1_1_0 } from "./version-1.1.0.js";
import { BookmarkV1_2_0 } from "./version-1.2.0.js";
import { BookmarkV1_3_0 } from "./version-1.3.0.js";
import { BookmarkV1_4_0 } from "./version-1.4.0.js";
import { BookmarkV2_0_0 } from "./version-2.0.0.js";
import { BookmarkV2_1_0 } from "./version-2.1.0.js";

export const bookmarkSchemaCoverage = [
  {
    source: "definition/bookmark/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: BookmarkV1_0_0,
  },
  {
    source: "definition/bookmark/1.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.1.0/schema.json",
    version: "1.1.0",
    variant: "standalone",
    schema: BookmarkV1_1_0,
  },
  {
    source: "definition/bookmark/1.2.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.2.0/schema.json",
    version: "1.2.0",
    variant: "standalone",
    schema: BookmarkV1_2_0,
  },
  {
    source: "definition/bookmark/1.3.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.3.0/schema.json",
    version: "1.3.0",
    variant: "standalone",
    schema: BookmarkV1_3_0,
  },
  {
    source: "definition/bookmark/1.4.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.4.0/schema.json",
    version: "1.4.0",
    variant: "standalone",
    schema: BookmarkV1_4_0,
  },
  {
    source: "definition/bookmark/2.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.0.0/schema.json",
    version: "2.0.0",
    variant: "standalone",
    schema: BookmarkV2_0_0,
  },
  {
    source: "definition/bookmark/2.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.1.0/schema.json",
    version: "2.1.0",
    variant: "standalone",
    schema: BookmarkV2_1_0,
  },
] as const;

export * from "./version-1.0.0.js";

export * from "./version-1.1.0.js";

export * from "./version-1.2.0.js";

export * from "./version-1.3.0.js";

export * from "./version-1.4.0.js";

export * from "./version-2.0.0.js";

export * from "./version-2.1.0.js";
