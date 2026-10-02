import { Schema } from "effect";
import { closed } from "../shared.js";

export const VersionMetadataDefinitions = {} as const;

export type VersionMetadata = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/versionMetadata/1.0.0/schema.json";
  readonly version: string;
};

export const VersionMetadata: Schema.Codec<VersionMetadata> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/versionMetadata/1.0.0/schema.json",
  ),
  version: Schema.String.check(Schema.isPattern(new RegExp("^[1-9][0-9]*\\.(0|[1-9][0-9]*)\\.0$"))),
});

export {
  VersionMetadataDefinitions as VersionMetadataDefinitionsV1_0_0,
  VersionMetadata as VersionMetadataV1_0_0,
};
