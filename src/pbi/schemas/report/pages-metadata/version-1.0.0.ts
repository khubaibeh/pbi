import { Schema } from "effect";

import { closed } from "../shared.js";

export type PagesMetadataV1_0_0 = {
  readonly pageOrder?: ReadonlyArray<string>;
  readonly activePageName?: string;
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.0.0/schema.json";
};

export const PagesMetadataV1_0_0: Schema.Codec<PagesMetadataV1_0_0> = closed({
  pageOrder: Schema.optionalKey(Schema.Array(Schema.String)),
  activePageName: Schema.optionalKey(Schema.String),
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.0.0/schema.json",
  ),
});

export { PagesMetadataDefinitionsV1_0_0 } from "./shared.js";
