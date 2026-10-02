import { DefinitionPropertiesV1_0_0 } from "./version-1.0.0.js";
import { DefinitionPropertiesV2_0_0 } from "./version-2.0.0.js";

export const definitionPropertiesSchemaCoverage = [
  {
    source: "definitionProperties/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definitionProperties/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: DefinitionPropertiesV1_0_0,
  },
  {
    source: "definitionProperties/2.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definitionProperties/2.0.0/schema.json",
    version: "2.0.0",
    variant: "standalone",
    schema: DefinitionPropertiesV2_0_0,
  },
] as const;

export * from "./version-1.0.0.js";

export * from "./version-2.0.0.js";
