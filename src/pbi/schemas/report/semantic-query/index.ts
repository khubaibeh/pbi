import { SemanticQueryV1_0_0 } from "./version-1_0_0.js";
import { SemanticQueryV1_1_0 } from "./version-1_1_0.js";
import { SemanticQueryV1_2_0 } from "./version-1_2_0.js";
import { SemanticQueryV1_3_0 } from "./version-1_3_0.js";
import { SemanticQueryV1_4_0 } from "./version-1_4_0.js";

export * from "./shared.js";
export * from "./version-1_0_0.js";
export * from "./version-1_1_0.js";
export * from "./version-1_2_0.js";
export * from "./version-1_3_0.js";
export * from "./version-1_4_0.js";

export const semanticQuerySchemaCoverage = [
  {
    source: "definition/semanticQuery/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/semanticQuery/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: SemanticQueryV1_0_0,
  },
  {
    source: "definition/semanticQuery/1.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/semanticQuery/1.1.0/schema.json",
    version: "1.1.0",
    variant: "standalone",
    schema: SemanticQueryV1_1_0,
  },
  {
    source: "definition/semanticQuery/1.2.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/semanticQuery/1.2.0/schema.json",
    version: "1.2.0",
    variant: "standalone",
    schema: SemanticQueryV1_2_0,
  },
  {
    source: "definition/semanticQuery/1.3.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/semanticQuery/1.3.0/schema.json",
    version: "1.3.0",
    variant: "standalone",
    schema: SemanticQueryV1_3_0,
  },
  {
    source: "definition/semanticQuery/1.4.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/semanticQuery/1.4.0/schema.json",
    version: "1.4.0",
    variant: "standalone",
    schema: SemanticQueryV1_4_0,
  },
] as const;
