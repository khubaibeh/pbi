import { FormattingObjectDefinitionsV1_0_0 } from "./version-1_0_0.js";
import { FormattingObjectDefinitionsV1_1_0 } from "./version-1_1_0.js";
import { FormattingObjectDefinitionsV1_2_0 } from "./version-1_2_0.js";
import { FormattingObjectDefinitionsV1_3_0 } from "./version-1_3_0.js";
import { FormattingObjectDefinitionsV1_4_0 } from "./version-1_4_0.js";
import { FormattingObjectDefinitionsV1_5_0 } from "./version-1_5_0.js";

export * from "./shared.js";
export * from "./version-1_0_0.js";
export * from "./version-1_1_0.js";
export * from "./version-1_2_0.js";
export * from "./version-1_3_0.js";
export * from "./version-1_4_0.js";
export * from "./version-1_5_0.js";

export const formattingObjectDefinitionsSchemaCoverage = [
  {
    source: "definition/formattingObjectDefinitions/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/formattingObjectDefinitions/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: FormattingObjectDefinitionsV1_0_0,
  },
  {
    source: "definition/formattingObjectDefinitions/1.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/formattingObjectDefinitions/1.1.0/schema.json",
    version: "1.1.0",
    variant: "standalone",
    schema: FormattingObjectDefinitionsV1_1_0,
  },
  {
    source: "definition/formattingObjectDefinitions/1.2.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/formattingObjectDefinitions/1.2.0/schema.json",
    version: "1.2.0",
    variant: "standalone",
    schema: FormattingObjectDefinitionsV1_2_0,
  },
  {
    source: "definition/formattingObjectDefinitions/1.3.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/formattingObjectDefinitions/1.3.0/schema.json",
    version: "1.3.0",
    variant: "standalone",
    schema: FormattingObjectDefinitionsV1_3_0,
  },
  {
    source: "definition/formattingObjectDefinitions/1.4.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/formattingObjectDefinitions/1.4.0/schema.json",
    version: "1.4.0",
    variant: "standalone",
    schema: FormattingObjectDefinitionsV1_4_0,
  },
  {
    source: "definition/formattingObjectDefinitions/1.5.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/formattingObjectDefinitions/1.5.0/schema.json",
    version: "1.5.0",
    variant: "standalone",
    schema: FormattingObjectDefinitionsV1_5_0,
  },
] as const;
