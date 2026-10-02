import {
  VisualConfigurationEmbeddedV1_5_0,
  VisualConfigurationEmbeddedV1_8_0,
  VisualConfigurationV2_0_0,
} from "./shared.js";
import { VisualConfigurationV1_5_0 } from "./version-1_5_0.js";
import { VisualConfigurationEmbeddedV1_6_0, VisualConfigurationV1_6_0 } from "./version-1_6_0.js";
import { VisualConfigurationEmbeddedV1_7_0, VisualConfigurationV1_7_0 } from "./version-1_7_0.js";
import { VisualConfigurationV1_8_0 } from "./version-1_8_0.js";
import { VisualConfigurationEmbeddedV2_0_0 } from "./version-2_0_0.js";
import { VisualConfigurationEmbeddedV2_1_0, VisualConfigurationV2_1_0 } from "./version-2_1_0.js";
import { VisualConfigurationEmbeddedV2_2_0, VisualConfigurationV2_2_0 } from "./version-2_2_0.js";
import { VisualConfigurationEmbeddedV2_3_0, VisualConfigurationV2_3_0 } from "./version-2_3_0.js";

export * from "./shared.js";
export * from "./version-1_5_0.js";
export * from "./version-1_6_0.js";
export * from "./version-1_7_0.js";
export * from "./version-1_8_0.js";
export * from "./version-2_0_0.js";
export * from "./version-2_1_0.js";
export * from "./version-2_2_0.js";
export * from "./version-2_3_0.js";

export const visualConfigurationSchemaCoverage = [
  {
    source: "definition/visualConfiguration/1.5.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.5.0/schema.json",
    version: "1.5.0",
    variant: "standalone",
    schema: VisualConfigurationV1_5_0,
  },
  {
    source: "definition/visualConfiguration/1.5.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.5.0/schema-embedded.json",
    version: "1.5.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV1_5_0,
  },
  {
    source: "definition/visualConfiguration/1.6.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.6.0/schema.json",
    version: "1.6.0",
    variant: "standalone",
    schema: VisualConfigurationV1_6_0,
  },
  {
    source: "definition/visualConfiguration/1.6.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.6.0/schema.embedded.json",
    version: "1.6.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV1_6_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.6.0/schema-embedded.json",
    ],
  },
  {
    source: "definition/visualConfiguration/1.7.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.7.0/schema.json",
    version: "1.7.0",
    variant: "standalone",
    schema: VisualConfigurationV1_7_0,
  },
  {
    source: "definition/visualConfiguration/1.7.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.7.0/schema.embedded.json",
    version: "1.7.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV1_7_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.7.0/schema-embedded.json",
    ],
  },
  {
    source: "definition/visualConfiguration/1.8.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.8.0/schema.json",
    version: "1.8.0",
    variant: "standalone",
    schema: VisualConfigurationV1_8_0,
  },
  {
    source: "definition/visualConfiguration/1.8.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.8.0/schema.json",
    version: "1.8.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV1_8_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.8.0/schema-embedded.json",
    ],
  },
  {
    source: "definition/visualConfiguration/2.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema.json",
    version: "2.0.0",
    variant: "standalone",
    schema: VisualConfigurationV2_0_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.0.0/schema.json",
    ],
  },
  {
    source: "definition/visualConfiguration/2.0.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.0.0/schema.embedded.json",
    version: "2.0.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV2_0_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.0.0/schema-embedded.json",
    ],
  },
  {
    source: "definition/visualConfiguration/2.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema.json",
    version: "2.1.0",
    variant: "standalone",
    schema: VisualConfigurationV2_1_0,
  },
  {
    source: "definition/visualConfiguration/2.1.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema.embedded.json",
    version: "2.1.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV2_1_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.1.0/schema-embedded.json",
    ],
  },
  {
    source: "definition/visualConfiguration/2.2.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.2.0/schema.json",
    version: "2.2.0",
    variant: "standalone",
    schema: VisualConfigurationV2_2_0,
  },
  {
    source: "definition/visualConfiguration/2.2.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.2.0/schema.embedded.json",
    version: "2.2.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV2_2_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.2.0/schema-embedded.json",
    ],
  },
  {
    source: "definition/visualConfiguration/2.3.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.3.0/schema.json",
    version: "2.3.0",
    variant: "standalone",
    schema: VisualConfigurationV2_3_0,
  },
  {
    source: "definition/visualConfiguration/2.3.0/schema-embedded.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.3.0/schema.embedded.json",
    version: "2.3.0",
    variant: "embedded",
    schema: VisualConfigurationEmbeddedV2_3_0,
    aliases: [
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/2.3.0/schema-embedded.json",
    ],
  },
] as const;
