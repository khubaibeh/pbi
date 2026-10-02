import { Schema } from "effect";
import { closed } from "../shared.js";

export type LocalSettingsReportRemoteArtifact = {
  readonly reportId: string | null;
};

export const LocalSettingsReportRemoteArtifact: Schema.Codec<LocalSettingsReportRemoteArtifact> =
  closed({ reportId: Schema.Union([Schema.String, Schema.Null]) });

export const LocalSettingsDefinitions = {
  ReportRemoteArtifact: LocalSettingsReportRemoteArtifact,
} as const;

export type LocalSettings = {
  readonly $schema: string;
  readonly remoteArtifacts?: ReadonlyArray<LocalSettingsReportRemoteArtifact> | null;
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
      Schema.Array(
        Schema.suspend(() => LocalSettingsReportRemoteArtifact),
      ),
      Schema.Null,
    ]),
  ),
  securityBindingsSignature: Schema.optionalKey(
    Schema.Union([Schema.String, Schema.Null]),
  ),
});

export { LocalSettingsDefinitions as LocalSettingsDefinitionsV1_0_0, LocalSettings as LocalSettingsV1_0_0 };
