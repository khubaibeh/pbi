# Power BI report CLI: schema assessment

Assessed 2026-10-02. Scope: local schema inventory, the existing copied schemas, and both example archives. No CLI implementation or report changes.

## Recommendation

Start with the expanded **PBIR report format**, including its PBIP project entry point, semantic-model binding, resources, and Fabric Git metadata. Bundle the report schema families with their versioned dependencies. Keep semantic-model parsing and Fabric API access as separate capabilities that can be added later.

The local collection is enough to validate the structured PBIR report documents in both examples. It is not a complete specification for semantic models, custom visuals, report themes, or every Fabric workload.

## Evidence from the repository

- `.local/ms-json-schemas` contains 493 JSON files; 177 are under `fabric/`, including 97 under `fabric/item/report/`.
- The assessed schema checkout is `f891f5bfc1ce0030aa53d805d90881a1b8b07643`.
- `src/pbi/defs` already contains 15 report schemas and the semantic-model definition-properties schema. All 16 match their corresponding upstream JSON content.
- Those copies contain newer versions than the example reports use. Their flattened filenames also leave upstream relative `$ref` targets unresolved on disk. Four distinct relative target paths are missing, including both embedded dependencies.
- The other top-level collections, such as Teams, SharePoint, Rush, and Office JS, do not belong in the Power BI report module.

## Report schemas to include

Paths below are relative to `.local/ms-json-schemas/fabric/item/report/`. “Newest local” means the newest version in this checkout, not a claim about the newest published Microsoft version.

| Schema family | File or responsibility | Examples use | Newest local |
| --- | --- | --- | --- |
| `definitionProperties` | `definition.pbir`: report format version and semantic-model binding | No `$schema`; content version `4.0` | `2.0.0` |
| `definition/versionMetadata` | `definition/version.json`: PBIR content-format version | Schema `1.0.0`; content version `2.0.0` | `1.0.0` |
| `definition/report` | `definition/report.json`: settings, theme references, resources, report filters | `3.1.0` | `3.3.0` |
| `definition/pagesMetadata` | `definition/pages/pages.json`: page order, active page, landing page | `1.0.0` | `1.1.0` |
| `definition/page` | `definition/pages/<id>/page.json`: canvas, filters, interactions | `2.0.0` | `2.1.0` |
| `definition/visualContainer` | `.../visuals/<id>/visual.json`: position, group membership, visibility, visual content | `2.5.0` | `2.9.0` |
| `definition/visualConfiguration` | Nested visual type, query projections, sorting, formatting, slicer sync | Embedded `2.2.0` | `2.3.0` |
| `definition/semanticQuery` | Shared expression/query structures, including columns, measures, aggregations | Dependency `1.3.0` | `1.4.0` |
| `definition/filterConfiguration` | Report/page/visual filters | Embedded dependency `1.2.0` | `1.3.0` |
| `definition/formattingObjectDefinitions` | Shared formatting objects and expression-backed property values | Dependency `1.4.0` | `1.5.0` |
| `definition/bookmarksMetadata` | `definition/bookmarks/bookmarks.json`: order and groups | `1.0.0` | `1.0.0` |
| `definition/bookmark` | `definition/bookmarks/<id>.bookmark.json`: saved page and visual state | `2.0.0` | `2.1.0` |
| `definition/visualContainerMobileState` | Per-visual `mobile.json`: mobile layout and formatting | Absent | `2.4.0` |
| `definition/reportExtension` | `definition/reportExtensions.json`: report-level model extensions | Absent | `1.0.0` |
| `localSettings` | `.pbi/localSettings.json`: local machine/user state | Present without `$schema` | `1.0.0` |

Include mobile state and report extensions in the registry, even though these fixtures do not exercise them. Local settings can be inspected optionally and preserved; they should not be a prerequisite for report editing.

Microsoft documents expanded PBIR as externally editable, with separate files for pages, visuals, bookmarks, and mobile layouts. The root-level legacy `report.json` is a different format from `definition/report.json` and does not support external editing. Detect that distinction from the file layout; `definition.pbir` version `4.0` alone does not distinguish the two. [Report folder documentation](https://learn.microsoft.com/en-us/power-bi/developer/projects/projects-report).

## Project and Fabric schemas

Paths in this table are relative to `.local/ms-json-schemas/`.

| Priority | Schema path | Why it matters |
| --- | --- | --- |
| Initial scope | `fabric/pbip/pbipProperties/1.0.0` | Discover report folders from a `.pbip` file; validate project settings and relative artifact references. |
| Initial scope | `fabric/gitIntegration/platformProperties/{2.0.0,2.1.0}` | Read `.platform` item type, display name, description, and logical ID. Both reports and their models use `2.0.0` in the fixtures. |
| Initial scope, metadata only | `fabric/item/semanticModel/definitionProperties/1.0.0` | Read `definition.pbism` and recognize a local semantic-model item. This does not define the model itself. |
| When supporting external model references | `fabric/item/semanticModel/modelReference/2.0.0` | Optional `modelReference.json` for a model hosted outside Power BI. This is distinct from the report's `datasetReference`. |
| Optional local-state support | `fabric/item/semanticModel/{localSettings,editorSettings,unappliedChanges}` | Preserve or inspect authoring state; not needed to manipulate report pages and visuals. |
| Later Fabric support | `fabric/gitIntegration/schedules/1.0.0` | Item schedules exported through Git integration; not a report layout dependency. |
| Later Fabric support | `fabric/common/{auxiliaryTypes,itemReference,connectionReference,variableReference}` | Reusable IDs and references for workloads that depend on them. They are not dependencies of the example PBIR reports. |
| Later, feature-specific | `fabric/item/semanticModel/copilot/*`, `fabric/item/version/1.0.0` | Copilot metadata and versioned auxiliary content when encountered. |

Defer the other workload-specific schemas until there is an explicit CLI use case: data agents, variable libraries, metric sets, organizational apps/audiences, user data functions, GraphQL, graph indexes/query sets, ontology, maps, planning, Cosmos DB, mirrored catalogs, Databricks storage, and ML items. Their presence does not imply coverage of all Fabric item types.

Fabric can use the same PBIR content through item-definition API parts containing a path and base64 payload. That transport needs its own API adapter. For report deployment through the Fabric REST API, Microsoft requires a `byConnection` semantic-model reference; the examples use local `byPath` references. Preserve local bindings and prepare a deployment-specific binding when that feature is added. [Report binding documentation](https://learn.microsoft.com/en-us/power-bi/developer/projects/projects-report), [Fabric report definitions](https://learn.microsoft.com/en-us/rest/api/fabric/articles/item-management/definitions/report-definition).

## Findings from the two archives

Both ZIPs contain a `.context/` directory with a PBIP file, report folder, and semantic-model folder. They are project archives, not PBIX containers.

| Fixture | Pages | Visual containers | Of which groups | Bookmarks | TMDL files |
| --- | ---: | ---: | ---: | ---: | ---: |
| `report1.zip`: Ada - Schedule | 3 | 133 | 15 | 9 | 57 |
| `report2.zip`: Ada - Executive Summary | 4 | 219 | 33 | 8 | 70 |

Both include custom themes, image resources, custom visual references, bookmark state, grouped visuals, and local model bindings. The second also includes a packaged custom visual. Neither contains per-visual `mobile.json` or `reportExtensions.json`, so more fixtures will be needed for those features.

Validation performed directly from the ZIPs, without extracting or modifying them:

- All 388 documents with explicit `$schema` URLs pass Draft 7 structural validation against local schemas and local reference resolution. This includes four `.platform` files.
- Their dependency closure contains 12 schema files, including embedded variants; all exist in the local collection.
- Six entry documents lack `$schema`: the two `.pbip`, two `definition.pbir`, and two `definition.pbism` files. When checked against inferred wrapper schemas, each fails only because `$schema` is required. These are strict-schema findings, not proof that Desktop cannot open the projects.
- Basic page-order/active-page references, page and visual folder/name agreement, and parent-group existence/type checks pass.
- This does not establish rendering correctness, complete bookmark/resource integrity, model-field validity, DAX correctness, or successful Desktop loading.

The CLI should distinguish strict schema errors from compatibility diagnostics. For files without `$schema`, select a known schema using filename, content version, and shape, report the inference, and keep the source unchanged. Do not automatically add `$schema` or upgrade document versions during inspection.

## Schema-loading requirements

1. **Preserve versioned dependencies.** Bundle all local versions of the relevant report families, or explicitly define a narrower support range with its complete dependency closure. Supporting only the newest versions will not cover these fixtures.
2. **Resolve relative references using canonical schema URIs.** Preserve upstream folder layout or create a URI registry. The current copied layout requires a registry or repackaging before it can validate reliably.
3. **Include `schema-embedded.json`.** Embedded visual/filter objects deliberately omit the standalone `$schema` requirement. Substituting standalone schemas changes validation behavior.
4. **Register URI aliases.** Some embedded files use a filename such as `schema-embedded.json` but declare an `$id` ending in `schema.embedded.json`. Register both the canonical path URI and declared `$id`; do not assume they match.
5. **Separate schema versions from content versions.** A schema URL version, `.pbir` content version, `version.json` content version, and theme import versions have different meanings.
6. **Make validation offline and reproducible.** Pin schema provenance and ship dependencies. Unknown versions should produce explicit unsupported-version diagnostics rather than silently using a newer schema or fetching arbitrary URLs.
7. **Add structural checks across files.** JSON Schema alone cannot ensure page/visual/bookmark IDs, grouping, navigation, resources, or model bindings remain consistent after edits.

## Coverage outside this collection

- **Semantic-model contents:** the fixtures use TMDL for tables, measures, relationships, expressions, and cultures. The semantic-model schemas here cover surrounding metadata, not TMDL grammar or model semantics. Fabric also supports TMSL `model.bim`; that requires separate coverage. [Fabric semantic-model definitions](https://learn.microsoft.com/en-us/rest/api/fabric/articles/item-management/definitions/semantic-model-definition).
- **Report themes:** report schemas describe theme references, not the full theme JSON contract. Add the separately maintained Power BI theme schema when theme editing becomes a feature.
- **Custom visual internals:** a valid container does not prove a custom visual's configuration or package is valid. Preserve package contents and unknown visual-specific values.
- **Resources and local state:** preserve referenced images/themes/packages and treat `.pbi` caches, diagram layout, and DAX query authoring files according to their own contracts. Their absence from the PBIR schema closure does not make them disposable.
- **Fabric operations:** authentication, workspace discovery, API request/response shapes, asynchronous jobs, and deployment rules are not supplied by these item JSON schemas.

## Proposed first implementation boundary

The first module should discover a project/report, inventory its pages/visuals/bookmarks/resources/model binding, resolve versioned schemas, and return structural and cross-file diagnostics. The CLI can then expose inspection and validation before adding edits.

When editing begins, page/visual copy, rename, reorder, delete, layout, filter, and formatting operations should update affected references as part of one operation. Keep full source documents available so unrelated properties and custom visual content survive round trips. Add semantic-model content editing and authenticated Fabric operations after the local report contract is established.
