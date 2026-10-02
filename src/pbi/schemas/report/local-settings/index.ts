import { LocalSettings } from "./version-1.0.0.js";

export const localSettingsSchemaCoverage = [
  {
    source: "localSettings/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/localSettings/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: LocalSettings,
  },
] as const;

export * from "./version-1.0.0.js";
