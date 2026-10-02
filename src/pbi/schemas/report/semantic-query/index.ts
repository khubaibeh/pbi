import { SemanticQuery } from "./shared.js";

export const semanticQuerySchemaCoverage = [
  {
    source: "definition/semanticQuery/1.0.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/semanticQuery/1.0.0/schema.json",
    version: "1.0.0",
    variant: "standalone",
    schema: SemanticQuery,
  },
  {
    source: "definition/semanticQuery/1.1.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/semanticQuery/1.1.0/schema.json",
    version: "1.1.0",
    variant: "standalone",
    schema: SemanticQuery,
  },
  {
    source: "definition/semanticQuery/1.2.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/semanticQuery/1.2.0/schema.json",
    version: "1.2.0",
    variant: "standalone",
    schema: SemanticQuery,
  },
  {
    source: "definition/semanticQuery/1.3.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/semanticQuery/1.3.0/schema.json",
    version: "1.3.0",
    variant: "standalone",
    schema: SemanticQuery,
  },
  {
    source: "definition/semanticQuery/1.4.0/schema.json",
    schemaId:
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/semanticQuery/1.4.0/schema.json",
    version: "1.4.0",
    variant: "standalone",
    schema: SemanticQuery,
  },
] as const;

export * from "./version-1.0.0.js";

export * from "./version-1.1.0.js";

export * from "./version-1.2.0.js";

export * from "./version-1.3.0.js";

export * from "./version-1.4.0.js";
