import { VersionMetadataV1_0_0 } from "./version-1_0_0.js";

export * from "./shared.js";
export * from "./version-1_0_0.js";

export const versionMetadataSchemaCoverage = [
  {
    source: "definition/versionMetadata/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/versionMetadata/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: VersionMetadataV1_0_0,
  },
] as const;
