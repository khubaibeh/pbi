import { Schema } from "effect";

import { closed } from "../shared.js";

export type ReportRemoteArtifact = {
  readonly reportId: string | null;
};

export const ReportRemoteArtifact: Schema.Codec<ReportRemoteArtifact> = closed({
  reportId: Schema.Union([Schema.String, Schema.Null]),
});
