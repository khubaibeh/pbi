import { PageV1_0_0 } from "./version-1.0.0.js";
import { PageV1_1_0 } from "./version-1.1.0.js";
import { PageV1_2_0 } from "./version-1.2.0.js";
import { PageV1_3_0 } from "./version-1.3.0.js";
import { PageV1_4_0 } from "./version-1.4.0.js";
import { PageV2_0_0 } from "./version-2.0.0.js";
import { PageV2_1_0 } from "./version-2.1.0.js";

export const pageSchemaCoverage = [
  {
    source: "definition/page/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: PageV1_0_0,
  },
  {
    source: "definition/page/1.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.1.0/schema.json",
    version: "1.1.0",
    variant: "standalone",
    schema: PageV1_1_0,
  },
  {
    source: "definition/page/1.2.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.2.0/schema.json",
    version: "1.2.0",
    variant: "standalone",
    schema: PageV1_2_0,
  },
  {
    source: "definition/page/1.3.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.3.0/schema.json",
    version: "1.3.0",
    variant: "standalone",
    schema: PageV1_3_0,
  },
  {
    source: "definition/page/1.4.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.4.0/schema.json",
    version: "1.4.0",
    variant: "standalone",
    schema: PageV1_4_0,
  },
  {
    source: "definition/page/2.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.0.0/schema.json",
    version: "2.0.0",
    variant: "standalone",
    schema: PageV2_0_0,
  },
  {
    source: "definition/page/2.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.1.0/schema.json",
    version: "2.1.0",
    variant: "standalone",
    schema: PageV2_1_0,
  },
] as const;

export * from "./version-1.0.0.js";

export * from "./version-1.1.0.js";

export * from "./version-1.2.0.js";

export * from "./version-1.3.0.js";

export * from "./version-1.4.0.js";

export * from "./version-2.0.0.js";

export * from "./version-2.1.0.js";
