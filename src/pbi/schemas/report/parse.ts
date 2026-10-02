import { Effect, Schema } from "effect";
import { closed } from "./shared.js";
import { bookmarkSchemaCoverage } from "./bookmark/index.js";
import { BookmarkV1_0_0 } from "./bookmark/version-1_0_0.js";
import { BookmarkV1_1_0 } from "./bookmark/version-1_1_0.js";
import { BookmarkV1_2_0 } from "./bookmark/version-1_2_0.js";
import { BookmarkV1_3_0 } from "./bookmark/version-1_3_0.js";
import { BookmarkV1_4_0 } from "./bookmark/version-1_4_0.js";
import { BookmarkV2_0_0 } from "./bookmark/version-2_0_0.js";
import { BookmarkV2_1_0 } from "./bookmark/version-2_1_0.js";
import { bookmarksMetadataSchemaCoverage } from "./bookmarks-metadata/index.js";
import { BookmarksMetadataV1_0_0 } from "./bookmarks-metadata/version-1_0_0.js";
import { definitionPropertiesSchemaCoverage } from "./definition-properties/index.js";
import { DefinitionPropertiesV1_0_0 } from "./definition-properties/version-1_0_0.js";
import { DefinitionPropertiesV2_0_0 } from "./definition-properties/version-2_0_0.js";
import { filterConfigurationSchemaCoverage } from "./filter-configuration/index.js";
import { formattingObjectDefinitionsSchemaCoverage } from "./formatting-object-definitions/index.js";
import { localSettingsSchemaCoverage } from "./local-settings/index.js";
import { LocalSettingsV1_0_0 } from "./local-settings/version-1_0_0.js";
import { pageSchemaCoverage } from "./page/index.js";
import { PageV1_0_0 } from "./page/version-1_0_0.js";
import { PageV1_1_0 } from "./page/version-1_1_0.js";
import { PageV1_2_0 } from "./page/version-1_2_0.js";
import { PageV1_3_0 } from "./page/version-1_3_0.js";
import { PageV1_4_0 } from "./page/version-1_4_0.js";
import { PageV2_0_0 } from "./page/version-2_0_0.js";
import { PageV2_1_0 } from "./page/version-2_1_0.js";
import { pagesMetadataSchemaCoverage } from "./pages-metadata/index.js";
import { PagesMetadataV1_0_0 } from "./pages-metadata/version-1_0_0.js";
import { PagesMetadataV1_1_0 } from "./pages-metadata/version-1_1_0.js";
import { reportExtensionSchemaCoverage } from "./report-extension/index.js";
import { ReportExtensionV1_0_0 } from "./report-extension/version-1_0_0.js";
import { reportSchemaCoverage } from "./report/index.js";
import { ReportV1_0_0 } from "./report/version-1_0_0.js";
import { ReportV1_1_0 } from "./report/version-1_1_0.js";
import { ReportV1_2_0 } from "./report/version-1_2_0.js";
import { ReportV1_3_0 } from "./report/version-1_3_0.js";
import { ReportV2_0_0 } from "./report/version-2_0_0.js";
import { ReportV2_1_0 } from "./report/version-2_1_0.js";
import { ReportV3_0_0 } from "./report/version-3_0_0.js";
import { ReportV3_1_0 } from "./report/version-3_1_0.js";
import { ReportV3_2_0 } from "./report/version-3_2_0.js";
import { ReportV3_3_0 } from "./report/version-3_3_0.js";
import { semanticQuerySchemaCoverage } from "./semantic-query/index.js";
import { versionMetadataSchemaCoverage } from "./version-metadata/index.js";
import { VersionMetadataV1_0_0 } from "./version-metadata/version-1_0_0.js";
import { visualConfigurationSchemaCoverage } from "./visual-configuration/index.js";
import { visualContainerMobileStateSchemaCoverage } from "./visual-container-mobile-state/index.js";
import { VisualContainerMobileStateV1_0_0 } from "./visual-container-mobile-state/version-1_0_0.js";
import { VisualContainerMobileStateV1_1_0 } from "./visual-container-mobile-state/version-1_1_0.js";
import { VisualContainerMobileStateV1_2_0 } from "./visual-container-mobile-state/version-1_2_0.js";
import { VisualContainerMobileStateV1_3_0 } from "./visual-container-mobile-state/version-1_3_0.js";
import { VisualContainerMobileStateV1_4_0 } from "./visual-container-mobile-state/version-1_4_0.js";
import { VisualContainerMobileStateV1_5_0 } from "./visual-container-mobile-state/version-1_5_0.js";
import { VisualContainerMobileStateV2_0_0 } from "./visual-container-mobile-state/version-2_0_0.js";
import { VisualContainerMobileStateV2_1_0 } from "./visual-container-mobile-state/version-2_1_0.js";
import { VisualContainerMobileStateV2_2_0 } from "./visual-container-mobile-state/version-2_2_0.js";
import { VisualContainerMobileStateV2_3_0 } from "./visual-container-mobile-state/version-2_3_0.js";
import { VisualContainerMobileStateV2_4_0 } from "./visual-container-mobile-state/version-2_4_0.js";
import { visualContainerSchemaCoverage } from "./visual-container/index.js";
import { VisualContainerV1_0_0 } from "./visual-container/version-1_0_0.js";
import { VisualContainerV1_1_0 } from "./visual-container/version-1_1_0.js";
import { VisualContainerV1_2_0 } from "./visual-container/version-1_2_0.js";
import { VisualContainerV1_3_0 } from "./visual-container/version-1_3_0.js";
import { VisualContainerV1_4_0 } from "./visual-container/version-1_4_0.js";
import { VisualContainerV1_5_0 } from "./visual-container/version-1_5_0.js";
import { VisualContainerV1_6_0 } from "./visual-container/version-1_6_0.js";
import { VisualContainerV1_7_0 } from "./visual-container/version-1_7_0.js";
import { VisualContainerV1_8_0 } from "./visual-container/version-1_8_0.js";
import { VisualContainerV2_0_0 } from "./visual-container/version-2_0_0.js";
import { VisualContainerV2_1_0 } from "./visual-container/version-2_1_0.js";
import { VisualContainerV2_2_0 } from "./visual-container/version-2_2_0.js";
import { VisualContainerV2_3_0 } from "./visual-container/version-2_3_0.js";
import { VisualContainerV2_4_0 } from "./visual-container/version-2_4_0.js";
import { VisualContainerV2_5_0 } from "./visual-container/version-2_5_0.js";
import { VisualContainerV2_6_0 } from "./visual-container/version-2_6_0.js";
import { VisualContainerV2_7_0 } from "./visual-container/version-2_7_0.js";
import { VisualContainerV2_8_0 } from "./visual-container/version-2_8_0.js";
import { VisualContainerV2_9_0 } from "./visual-container/version-2_9_0.js";

export const reportSchemaCoverageAll = [
  ...semanticQuerySchemaCoverage,
  ...formattingObjectDefinitionsSchemaCoverage,
  ...filterConfigurationSchemaCoverage,
  ...visualConfigurationSchemaCoverage,
  ...visualContainerSchemaCoverage,
  ...visualContainerMobileStateSchemaCoverage,
  ...pageSchemaCoverage,
  ...pagesMetadataSchemaCoverage,
  ...bookmarkSchemaCoverage,
  ...bookmarksMetadataSchemaCoverage,
  ...reportSchemaCoverage,
  ...definitionPropertiesSchemaCoverage,
  ...versionMetadataSchemaCoverage,
  ...reportExtensionSchemaCoverage,
  ...localSettingsSchemaCoverage,
] as const;

export type ReportDocumentKind =
  | "definitionProperties"
  | "report"
  | "versionMetadata"
  | "reportExtension"
  | "localSettings"
  | "pagesMetadata"
  | "page"
  | "visualContainer"
  | "visualContainerMobileState"
  | "bookmarksMetadata"
  | "bookmark";

export class MalformedReportJson extends Error {
  readonly _tag = "MalformedReportJson";
  constructor(
    readonly path: string,
    readonly cause: unknown,
  ) {
    super(`Malformed JSON in ${path}`);
  }
}

export class UnsupportedReportDocumentKind extends Error {
  readonly _tag = "UnsupportedReportDocumentKind";
  constructor(readonly path: string) {
    super(`Unsupported report document path: ${path}`);
  }
}

export class UnsupportedReportSchemaVersion extends Error {
  readonly _tag = "UnsupportedReportSchemaVersion";
  constructor(
    readonly path: string,
    readonly kind: ReportDocumentKind,
    readonly schemaId: string,
  ) {
    super(`Unsupported schema ${schemaId} for ${path}`);
  }
}

export class ReportSchemaFamilyMismatch extends Error {
  readonly _tag = "ReportSchemaFamilyMismatch";
  constructor(
    readonly path: string,
    readonly kind: ReportDocumentKind,
    readonly schemaId: string,
    readonly schemaFamily: string,
  ) {
    super(`Schema family ${schemaFamily} is inconsistent with ${kind} at ${path}`);
  }
}

export class ReportSchemaSelectorRequired extends Error {
  readonly _tag = "ReportSchemaSelectorRequired";
  constructor(
    readonly path: string,
    readonly kind: ReportDocumentKind,
  ) {
    super(`Missing $schema at ${path}; supply an explicit supported schemaSelector`);
  }
}

export class ReportSchemaMismatch extends Error {
  readonly _tag = "ReportSchemaMismatch";
  readonly issue: Schema.SchemaError["issue"];
  constructor(
    readonly path: string,
    readonly kind: ReportDocumentKind,
    readonly schemaId: string | undefined,
    readonly cause: Schema.SchemaError,
  ) {
    super(`Schema mismatch at ${path}: ${cause.message}`);
    this.issue = cause.issue;
  }
}

export type ReportFileParseError =
  | MalformedReportJson
  | UnsupportedReportDocumentKind
  | UnsupportedReportSchemaVersion
  | ReportSchemaFamilyMismatch
  | ReportSchemaSelectorRequired
  | ReportSchemaMismatch;

function documentKind(path: string): ReportDocumentKind | undefined {
  if (path === "definition.pbir") return "definitionProperties";
  if (path === ".pbi/localSettings.json") return "localSettings";
  if (path === "definition/report.json") return "report";
  if (path === "definition/version.json") return "versionMetadata";
  if (path === "definition/reportExtensions.json") return "reportExtension";
  if (path === "definition/pages/pages.json") return "pagesMetadata";
  if (/^definition\/pages\/[^/]+\/page\.json$/.test(path)) return "page";
  if (/^definition\/pages\/[^/]+\/visuals\/[^/]+\/visual\.json$/.test(path))
    return "visualContainer";
  if (/^definition\/pages\/[^/]+\/visuals\/[^/]+\/mobile\.json$/.test(path))
    return "visualContainerMobileState";
  if (path === "definition/bookmarks/bookmarks.json") return "bookmarksMetadata";
  if (/^definition\/bookmarks\/[^/]+\.bookmark\.json$/.test(path)) return "bookmark";
  return undefined;
}

function documentSchema<const Kind extends ReportDocumentKind, const Version extends string, Value>(
  kind: Kind,
  version: Version,
  schemaId: string,
  schema: Schema.Codec<Value>,
) {
  return {
    kind,
    version,
    schemaId,
    decode: (value: unknown, path: string) =>
      Schema.decodeUnknownEffect(schema, { errors: "all" })(value).pipe(
        Effect.map((value) => ({ kind, version, schemaId, value }) as const),
        Effect.mapError((cause) => new ReportSchemaMismatch(path, kind, schemaId, cause)),
      ),
  };
}

export const reportFileSchemas = [
  documentSchema(
    "report",
    "1.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.0.0/schema.json",
    ReportV1_0_0,
  ),
  documentSchema(
    "report",
    "1.1.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.1.0/schema.json",
    ReportV1_1_0,
  ),
  documentSchema(
    "report",
    "1.2.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.2.0/schema.json",
    ReportV1_2_0,
  ),
  documentSchema(
    "report",
    "1.3.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/1.3.0/schema.json",
    ReportV1_3_0,
  ),
  documentSchema(
    "report",
    "2.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/2.0.0/schema.json",
    ReportV2_0_0,
  ),
  documentSchema(
    "report",
    "2.1.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/2.1.0/schema.json",
    ReportV2_1_0,
  ),
  documentSchema(
    "report",
    "3.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.0.0/schema.json",
    ReportV3_0_0,
  ),
  documentSchema(
    "report",
    "3.1.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.1.0/schema.json",
    ReportV3_1_0,
  ),
  documentSchema(
    "report",
    "3.2.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.2.0/schema.json",
    ReportV3_2_0,
  ),
  documentSchema(
    "report",
    "3.3.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/report/3.3.0/schema.json",
    ReportV3_3_0,
  ),
  documentSchema(
    "definitionProperties",
    "1.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definitionProperties/1.0.0/schema.json",
    DefinitionPropertiesV1_0_0,
  ),
  documentSchema(
    "definitionProperties",
    "2.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definitionProperties/2.0.0/schema.json",
    DefinitionPropertiesV2_0_0,
  ),
  documentSchema(
    "versionMetadata",
    "1.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/versionMetadata/1.0.0/schema.json",
    VersionMetadataV1_0_0,
  ),
  documentSchema(
    "reportExtension",
    "1.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/reportExtension/1.0.0/schema.json",
    ReportExtensionV1_0_0,
  ),
  documentSchema(
    "localSettings",
    "1.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/localSettings/1.0.0/schema.json",
    LocalSettingsV1_0_0,
  ),
  documentSchema(
    "page",
    "1.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.0.0/schema.json",
    PageV1_0_0,
  ),
  documentSchema(
    "page",
    "1.1.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.1.0/schema.json",
    PageV1_1_0,
  ),
  documentSchema(
    "page",
    "1.2.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.2.0/schema.json",
    PageV1_2_0,
  ),
  documentSchema(
    "page",
    "1.3.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.3.0/schema.json",
    PageV1_3_0,
  ),
  documentSchema(
    "page",
    "1.4.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/1.4.0/schema.json",
    PageV1_4_0,
  ),
  documentSchema(
    "page",
    "2.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.0.0/schema.json",
    PageV2_0_0,
  ),
  documentSchema(
    "page",
    "2.1.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/page/2.1.0/schema.json",
    PageV2_1_0,
  ),
  documentSchema(
    "pagesMetadata",
    "1.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.0.0/schema.json",
    PagesMetadataV1_0_0,
  ),
  documentSchema(
    "pagesMetadata",
    "1.1.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/pagesMetadata/1.1.0/schema.json",
    PagesMetadataV1_1_0,
  ),
  documentSchema(
    "bookmark",
    "1.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.0.0/schema.json",
    BookmarkV1_0_0,
  ),
  documentSchema(
    "bookmark",
    "1.1.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.1.0/schema.json",
    BookmarkV1_1_0,
  ),
  documentSchema(
    "bookmark",
    "1.2.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.2.0/schema.json",
    BookmarkV1_2_0,
  ),
  documentSchema(
    "bookmark",
    "1.3.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.3.0/schema.json",
    BookmarkV1_3_0,
  ),
  documentSchema(
    "bookmark",
    "1.4.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/1.4.0/schema.json",
    BookmarkV1_4_0,
  ),
  documentSchema(
    "bookmark",
    "2.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.0.0/schema.json",
    BookmarkV2_0_0,
  ),
  documentSchema(
    "bookmark",
    "2.1.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmark/2.1.0/schema.json",
    BookmarkV2_1_0,
  ),
  documentSchema(
    "bookmarksMetadata",
    "1.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/bookmarksMetadata/1.0.0/schema.json",
    BookmarksMetadataV1_0_0,
  ),
  documentSchema(
    "visualContainer",
    "1.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.0.0/schema.json",
    VisualContainerV1_0_0,
  ),
  documentSchema(
    "visualContainer",
    "1.1.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.1.0/schema.json",
    VisualContainerV1_1_0,
  ),
  documentSchema(
    "visualContainer",
    "1.2.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.2.0/schema.json",
    VisualContainerV1_2_0,
  ),
  documentSchema(
    "visualContainer",
    "1.3.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.3.0/schema.json",
    VisualContainerV1_3_0,
  ),
  documentSchema(
    "visualContainer",
    "1.4.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.4.0/schema.json",
    VisualContainerV1_4_0,
  ),
  documentSchema(
    "visualContainer",
    "1.5.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.5.0/schema.json",
    VisualContainerV1_5_0,
  ),
  documentSchema(
    "visualContainer",
    "1.6.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.6.0/schema.json",
    VisualContainerV1_6_0,
  ),
  documentSchema(
    "visualContainer",
    "1.7.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.7.0/schema.json",
    VisualContainerV1_7_0,
  ),
  documentSchema(
    "visualContainer",
    "1.8.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/1.8.0/schema.json",
    VisualContainerV1_8_0,
  ),
  documentSchema(
    "visualContainer",
    "2.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.0.0/schema.json",
    VisualContainerV2_0_0,
  ),
  documentSchema(
    "visualContainer",
    "2.1.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.1.0/schema.json",
    VisualContainerV2_1_0,
  ),
  documentSchema(
    "visualContainer",
    "2.2.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.2.0/schema.json",
    VisualContainerV2_2_0,
  ),
  documentSchema(
    "visualContainer",
    "2.3.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.3.0/schema.json",
    VisualContainerV2_3_0,
  ),
  documentSchema(
    "visualContainer",
    "2.4.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.4.0/schema.json",
    VisualContainerV2_4_0,
  ),
  documentSchema(
    "visualContainer",
    "2.5.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.5.0/schema.json",
    VisualContainerV2_5_0,
  ),
  documentSchema(
    "visualContainer",
    "2.6.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.6.0/schema.json",
    VisualContainerV2_6_0,
  ),
  documentSchema(
    "visualContainer",
    "2.7.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.7.0/schema.json",
    VisualContainerV2_7_0,
  ),
  documentSchema(
    "visualContainer",
    "2.8.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.8.0/schema.json",
    VisualContainerV2_8_0,
  ),
  documentSchema(
    "visualContainer",
    "2.9.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainer/2.9.0/schema.json",
    VisualContainerV2_9_0,
  ),
  documentSchema(
    "visualContainerMobileState",
    "1.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.0.0/schema.json",
    VisualContainerMobileStateV1_0_0,
  ),
  documentSchema(
    "visualContainerMobileState",
    "1.1.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.1.0/schema.json",
    VisualContainerMobileStateV1_1_0,
  ),
  documentSchema(
    "visualContainerMobileState",
    "1.2.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.2.0/schema.json",
    VisualContainerMobileStateV1_2_0,
  ),
  documentSchema(
    "visualContainerMobileState",
    "1.3.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.3.0/schema.json",
    VisualContainerMobileStateV1_3_0,
  ),
  documentSchema(
    "visualContainerMobileState",
    "1.4.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.4.0/schema.json",
    VisualContainerMobileStateV1_4_0,
  ),
  documentSchema(
    "visualContainerMobileState",
    "1.5.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.5.0/schema.json",
    VisualContainerMobileStateV1_5_0,
  ),
  documentSchema(
    "visualContainerMobileState",
    "2.0.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.0.0/schema.json",
    VisualContainerMobileStateV2_0_0,
  ),
  documentSchema(
    "visualContainerMobileState",
    "2.1.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.1.0/schema.json",
    VisualContainerMobileStateV2_1_0,
  ),
  documentSchema(
    "visualContainerMobileState",
    "2.2.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.2.0/schema.json",
    VisualContainerMobileStateV2_2_0,
  ),
  documentSchema(
    "visualContainerMobileState",
    "2.3.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.3.0/schema.json",
    VisualContainerMobileStateV2_3_0,
  ),
  documentSchema(
    "visualContainerMobileState",
    "2.4.0",
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/2.4.0/schema.json",
    VisualContainerMobileStateV2_4_0,
  ),
] as const;

export type ParsedReportFile = Effect.Success<
  ReturnType<(typeof reportFileSchemas)[number]["decode"]>
>;

export interface ReportFileInput {
  readonly path: string;
  readonly text: string;
  readonly schemaSelector?: string;
}

function jsonObject(input: ReportFileInput, kind: ReportDocumentKind) {
  return Effect.try({
    try: (): unknown => JSON.parse(input.text),
    catch: (cause) => new MalformedReportJson(input.path, cause),
  }).pipe(
    Effect.flatMap((value) =>
      Schema.decodeUnknownEffect(Schema.Record(Schema.String, Schema.Json), {
        errors: "all",
      })(value).pipe(
        Effect.mapError((cause) => new ReportSchemaMismatch(input.path, kind, undefined, cause)),
      ),
    ),
  );
}

export function parseReportFile(
  input: ReportFileInput,
): Effect.Effect<ParsedReportFile, ReportFileParseError> {
  return Effect.gen(function* () {
    const kind = documentKind(input.path);
    if (kind === undefined)
      return yield* Effect.fail(new UnsupportedReportDocumentKind(input.path));
    const value = yield* jsonObject(input, kind);
    const tag =
      value.$schema === undefined
        ? undefined
        : yield* Schema.decodeUnknownEffect(Schema.String)(value.$schema).pipe(
            Effect.mapError(
              (cause) => new ReportSchemaMismatch(input.path, kind, undefined, cause),
            ),
          );
    const selector = tag ?? input.schemaSelector;
    if (selector === undefined)
      return yield* Effect.fail(new ReportSchemaSelectorRequired(input.path, kind));
    const coverage = reportSchemaCoverageAll.find(
      (entry) =>
        entry.schemaId === selector ||
        ("aliases" in entry && entry.aliases.some((alias) => alias === selector)),
    );
    if (coverage !== undefined) {
      const parts = coverage.source.split("/");
      const family = parts[0] === "definition" ? parts[1] : parts[0];
      if (family !== kind || coverage.variant === "embedded") {
        return yield* Effect.fail(
          new ReportSchemaFamilyMismatch(input.path, kind, selector, family ?? "unknown"),
        );
      }
    }
    const selected = reportFileSchemas.find((entry) => entry.schemaId === selector);
    if (selected === undefined)
      return yield* Effect.fail(new UnsupportedReportSchemaVersion(input.path, kind, selector));
    if (selected.kind !== kind)
      return yield* Effect.fail(
        new ReportSchemaFamilyMismatch(input.path, kind, selector, selected.kind),
      );
    return yield* selected.decode(value, input.path);
  });
}

export const DesktopDefinitionPropertiesByPath = closed({
  version: Schema.Literal("4.0"),
  datasetReference: closed({ byPath: closed({ path: Schema.String }) }),
});

export type DesktopDefinitionPropertiesByPath = typeof DesktopDefinitionPropertiesByPath.Type;

export interface ParsedDesktopDefinitionProperties {
  readonly kind: "definitionProperties";
  readonly version: "desktop-by-path";
  readonly compatibleSchemaVersions: readonly ["1.0.0", "2.0.0"];
  readonly value: DesktopDefinitionPropertiesByPath;
}

export function parseReportFileDesktopCompatibility(
  input: ReportFileInput,
): Effect.Effect<ParsedReportFile | ParsedDesktopDefinitionProperties, ReportFileParseError> {
  if (input.path !== "definition.pbir" || input.schemaSelector !== undefined)
    return parseReportFile(input);
  return Effect.gen(function* () {
    const value = yield* jsonObject(input, "definitionProperties");
    if (value.$schema !== undefined) return yield* parseReportFile(input);
    const parsed = yield* Schema.decodeUnknownEffect(DesktopDefinitionPropertiesByPath, {
      errors: "all",
    })(value).pipe(
      Effect.mapError(
        (cause) => new ReportSchemaMismatch(input.path, "definitionProperties", undefined, cause),
      ),
    );
    const result: ParsedDesktopDefinitionProperties = {
      kind: "definitionProperties",
      version: "desktop-by-path",
      compatibleSchemaVersions: ["1.0.0", "2.0.0"],
      value: parsed,
    };
    return result;
  });
}
