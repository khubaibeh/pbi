import {
  FilterConfigurationEmbeddedV1_0_0,
  FilterConfigurationV1_0_0,
} from "./version-1.0.0.js";
import {
  FilterConfigurationEmbeddedV1_1_0,
  FilterConfigurationV1_1_0,
} from "./version-1.1.0.js";
import {
  FilterConfigurationEmbeddedV1_2_0,
  FilterConfigurationV1_2_0,
} from "./version-1.2.0.js";
import {
  FilterConfigurationEmbeddedV1_3_0,
  FilterConfigurationV1_3_0,
} from "./version-1.3.0.js";

export const filterConfigurationSchemaCoverage = [
  {
    source: "definition/filterConfiguration/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: FilterConfigurationV1_0_0,
  },
  {
    source: "definition/filterConfiguration/1.0.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.0.0/schema-embedded.json",
    version: "1.0.0",
    variant: "embedded",
    schema: FilterConfigurationEmbeddedV1_0_0,
  },
  {
    source: "definition/filterConfiguration/1.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.1.0/schema.json",
    version: "1.1.0",
    variant: "standalone",
    schema: FilterConfigurationV1_1_0,
  },
  {
    source: "definition/filterConfiguration/1.1.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.1.0/schema.embedded.json",
    version: "1.1.0",
    variant: "embedded",
    schema: FilterConfigurationEmbeddedV1_1_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.1.0/schema-embedded.json",
    ],
  },
  {
    source: "definition/filterConfiguration/1.2.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.2.0/schema.json",
    version: "1.2.0",
    variant: "standalone",
    schema: FilterConfigurationV1_2_0,
  },
  {
    source: "definition/filterConfiguration/1.2.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.2.0/schema.embedded.json",
    version: "1.2.0",
    variant: "embedded",
    schema: FilterConfigurationEmbeddedV1_2_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.2.0/schema-embedded.json",
    ],
  },
  {
    source: "definition/filterConfiguration/1.3.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.3.0/schema.json",
    version: "1.3.0",
    variant: "standalone",
    schema: FilterConfigurationV1_3_0,
  },
  {
    source: "definition/filterConfiguration/1.3.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.3.0/schema.embedded.json",
    version: "1.3.0",
    variant: "embedded",
    schema: FilterConfigurationEmbeddedV1_3_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/filterConfiguration/1.3.0/schema-embedded.json",
    ],
  },
] as const;

export * from "./version-1.0.0.js";

export * from "./version-1.1.0.js";

export * from "./version-1.2.0.js";

export * from "./version-1.3.0.js";
