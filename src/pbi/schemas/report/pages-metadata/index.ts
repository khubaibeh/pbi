import { PagesMetadataV1_0_0 } from "./version-1_0_0.js";
import { PagesMetadataV1_1_0 } from "./version-1_1_0.js";

export * from "./shared.js";
export * from "./version-1_0_0.js";
export * from "./version-1_1_0.js";

export const pagesMetadataSchemaCoverage = [
  {
    source: "definition/pagesMetadata/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: PagesMetadataV1_0_0,
  },
  {
    source: "definition/pagesMetadata/1.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.1.0/schema.json",
    version: "1.1.0",
    variant: "standalone",
    schema: PagesMetadataV1_1_0,
  },
] as const;
