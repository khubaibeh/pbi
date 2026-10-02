import { ReportExtension } from "./version-1.0.0.js";

export const reportExtensionSchemaCoverage = [
  {
    source: "definition/reportExtension/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/reportExtension/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: ReportExtension,
  },
] as const;

export * from "./version-1.0.0.js";
