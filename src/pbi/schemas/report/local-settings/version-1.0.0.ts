import { Schema } from "effect";

import { ReportRemoteArtifact } from "./shared.js";
import { closed } from "../shared.js";

export type LocalSettings = {
  readonly $schema: string;
  readonly remoteArtifacts?: ReadonlyArray<ReportRemoteArtifact> | null;
  readonly securityBindingsSignature?: string | null;
};

export const LocalSettings: Schema.Codec<LocalSettings> = closed({
  $schema: Schema.String.check(
    Schema.isPattern(
      new RegExp(
        "^https://developer.microsoft.com/json-schemas/fabric/item/report/localSettings/1.[0-9]+.[0-9]+/schema.json$",
      ),
    ),
  ),
  remoteArtifacts: Schema.optionalKey(
    Schema.Union([
      Schema.Array(Schema.suspend(() => ReportRemoteArtifact)),
      Schema.Null,
    ]),
  ),
  securityBindingsSignature: Schema.optionalKey(
    Schema.Union([Schema.String, Schema.Null]),
  ),
});

export const LocalSettingsDefinitionsV1_0_0 = {
  ReportRemoteArtifact: ReportRemoteArtifact,
} as const;

export { ReportRemoteArtifact as LocalSettingsReportRemoteArtifactV1_0_0 } from "./shared.js";

export { LocalSettings as LocalSettingsV1_0_0 };
