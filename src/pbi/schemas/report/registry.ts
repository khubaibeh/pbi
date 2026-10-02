import { bookmarkSchemaCoverage } from "./bookmark/index.js";
import { bookmarksMetadataSchemaCoverage } from "./bookmarks-metadata/index.js";
import { definitionPropertiesSchemaCoverage } from "./definition-properties/index.js";
import { filterConfigurationSchemaCoverage } from "./filter-configuration/shared.js";
import { formattingObjectDefinitionsSchemaCoverage } from "./formatting-object-definitions/index.js";
import { localSettingsSchemaCoverage } from "./local-settings/index.js";
import { pageSchemaCoverage } from "./page/index.js";
import { pagesMetadataSchemaCoverage } from "./pages-metadata/shared.js";
import { reportExtensionSchemaCoverage } from "./report-extension/index.js";
import { reportSchemaCoverage } from "./report/index.js";
import { semanticQuerySchemaCoverage } from "./semantic-query/index.js";
import { versionMetadataSchemaCoverage } from "./version-metadata/shared.js";
import { visualConfigurationSchemaCoverage } from "./visual-configuration/index.js";
import { visualContainerMobileStateSchemaCoverage } from "./visual-container-mobile-state/shared.js";
import { visualContainerSchemaCoverage } from "./visual-container/index.js";

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
