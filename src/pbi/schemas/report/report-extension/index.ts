import { ReportExtensionV1_0_0 } from "./version-1_0_0.js";

export * from "./shared.js";
export * from "./version-1_0_0.js";

export const reportExtensionSchemaCoverage = [
  {
    source: "definition/reportExtension/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/reportExtension/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: ReportExtensionV1_0_0,
  },
] as const;
