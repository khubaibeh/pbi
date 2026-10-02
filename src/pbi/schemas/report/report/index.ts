import { ReportV1_0_0 } from "./version-1.0.0.js";
import { ReportV1_1_0 } from "./version-1.1.0.js";
import { ReportV1_2_0 } from "./version-1.2.0.js";
import { ReportV1_3_0 } from "./version-1.3.0.js";
import { ReportV2_0_0 } from "./version-2.0.0.js";
import { ReportV2_1_0 } from "./version-2.1.0.js";
import { ReportV3_0_0 } from "./version-3.0.0.js";
import { ReportV3_1_0 } from "./version-3.1.0.js";
import { ReportV3_2_0 } from "./version-3.2.0.js";
import { ReportV3_3_0 } from "./version-3.3.0.js";

export const reportSchemaCoverage = [
  {
    source: "definition/report/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: ReportV1_0_0,
  },
  {
    source: "definition/report/1.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.1.0/schema.json",
    version: "1.1.0",
    variant: "standalone",
    schema: ReportV1_1_0,
  },
  {
    source: "definition/report/1.2.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.2.0/schema.json",
    version: "1.2.0",
    variant: "standalone",
    schema: ReportV1_2_0,
  },
  {
    source: "definition/report/1.3.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.3.0/schema.json",
    version: "1.3.0",
    variant: "standalone",
    schema: ReportV1_3_0,
  },
  {
    source: "definition/report/2.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/2.0.0/schema.json",
    version: "2.0.0",
    variant: "standalone",
    schema: ReportV2_0_0,
  },
  {
    source: "definition/report/2.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/2.1.0/schema.json",
    version: "2.1.0",
    variant: "standalone",
    schema: ReportV2_1_0,
  },
  {
    source: "definition/report/3.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.0.0/schema.json",
    version: "3.0.0",
    variant: "standalone",
    schema: ReportV3_0_0,
  },
  {
    source: "definition/report/3.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.1.0/schema.json",
    version: "3.1.0",
    variant: "standalone",
    schema: ReportV3_1_0,
  },
  {
    source: "definition/report/3.2.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.2.0/schema.json",
    version: "3.2.0",
    variant: "standalone",
    schema: ReportV3_2_0,
  },
  {
    source: "definition/report/3.3.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.3.0/schema.json",
    version: "3.3.0",
    variant: "standalone",
    schema: ReportV3_3_0,
  },
] as const;

export * from "./version-1.0.0.js";

export * from "./version-1.1.0.js";

export * from "./version-1.2.0.js";

export * from "./version-1.3.0.js";

export * from "./version-2.0.0.js";

export * from "./version-2.1.0.js";

export * from "./version-3.0.0.js";

export * from "./version-3.1.0.js";

export * from "./version-3.2.0.js";

export * from "./version-3.3.0.js";
