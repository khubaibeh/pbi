import { Schema } from "effect";
import { closed } from "../shared.js";

export type PagesMetadataV1_1_0 = {
  readonly pageOrder?: ReadonlyArray<string>;
  readonly activePageName?: string;
  readonly landingPageName?: string;
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.1.0/schema.json";
};

export const PagesMetadataV1_1_0: Schema.Codec<PagesMetadataV1_1_0> = closed({
  pageOrder: Schema.optionalKey(Schema.Array(Schema.String)),
  activePageName: Schema.optionalKey(Schema.String),
  landingPageName: Schema.optionalKey(Schema.String),
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.1.0/schema.json",
  ),
});

export { PagesMetadataDefinitions as PagesMetadataDefinitionsV1_1_0 } from "./shared.js";
