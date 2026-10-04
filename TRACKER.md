# Tracker

## semantic-query 1.4

### Errors

- [x] `Empty` (`Now`, `DefaultValue`, `AllRolesRef`) rejected extra keys with `Expected never`. Now rejects them only in strict mode, like every other struct.
- [ ] `SourceRef` is a two-way `Union`. With `errors: "all"`, one bad `SourceRef` gives three lines, one per member.
- [ ] `oneKeyOf` with no key lists all 47 keys in `Expected one of: …`. Too long.
- [ ] Messages don't show the value received (`Expected 2` for `"Version": 3`).

### Extra keys

- [x] Default parsing accepts extra keys. Missing keys and wrong values are the errors that matter.
- [ ] Effect's default drops extra keys from the decoded value. Never write a decoded value back to a file; edit the original JSON instead.
- [ ] Optional strict mode (`onExcessProperty: "error"`) to report extra keys as warnings. Its message doesn't name the key, and it reports before any other error in the same object.

### Contract

- [x] Checked against Microsoft's schema with `ajv`: built samples, 1,225 broken copies and 1,121 corpus fragments all got the same verdict in strict and forgiving mode. The test was removed; `ajv` stays installed.

- [ ] `EntitySource`: Microsoft's description says `Expression` is required when `Type` is 2, but their JSON Schema does not check it. We don't either.
- [ ] `FillRule.FillRule` takes any value, since Microsoft's schema leaves it open (`{}`).

### Types

- [ ] `QueryExpressionContainer` decodes to `unknown`. Add a type when code first needs to read parsed expressions.

### Not started

- [ ] Error output: short paths (`a.b[0]`), line and column in the source file, expected shape.
- [x] Older semantic-query versions (1.0 to 1.3).

## Formatting property values

- [x] `PropertyValue` in `src/pbi/schemas/shared.ts`: `Unknown` with an identifier and description, for fields Microsoft leaves open (`{}`). Used in page, visual-configuration, visual-container, report and filter-configuration. Mobile-state gets it through visual-configuration.
- [x] Final pass: every formatting property field uses `PropertyValue`. The `Unknown`s left are not formatting values: `Annotations`, `FillRule` and `Empty` in semantic-query, and `properties: Record(String, Unknown)` in formatting-object-definitions.
- [ ] Check known shapes and let the rest through: `expr` must be a valid semantic-query expression, `solid.color.expr` and `image.{name,url}.expr` too. Needs each version's semantic query, so `PropertyValue` becomes a builder. In our reports, 97% of values are `expr` or `solid.color.expr`; 42 are text box paragraph arrays; none are bare strings, numbers or booleans.

## Tested against

Real files are the two local reports in `.local/corpus` (gitignored, client data). "Bumped" means a temp copy with `$schema` changed to our version; the originals fail only on that line.

| Family                        | Versions we have | Real files                               | Result on real files | Fixtures                                                     | Matches Microsoft's schema              |
| ----------------------------- | ---------------- | ---------------------------------------- | -------------------- | ------------------------------------------------------------ | --------------------------------------- |
| page                          | 1.0–2.1          | 7 `page.json` (2.0.0)                    | pass as is           | 21, all as named                                             | yes, 28 of 28 (21 fixtures, 7 real)     |
| version-metadata              | 1.0              | 2 `version.json` (1.0.0)                 | pass as is           | 3                                                            | yes, 5 of 5 (3 fixtures, 2 real)        |
| pages-metadata                | 1.0–1.1          | 2 `pages.json` (1.0.0)                   | pass as is           | 6, all as named                                              | yes, 8 of 8 (6 fixtures, 2 real)        |
| report                        | 1.0–3.3          | 2 `report.json` (3.1.0)                  | pass as is           | 30, all as named                                             | yes, 32 of 32 (30 fixtures, 2 real)     |
| visual-container              | 1.0–2.9          | 352 `visual.json` (2.5.0)                | pass as is           | 57, all as named                                             | yes, 409 of 409 (57 fixtures, 352 real) |
| semantic-query                | 1.0–1.4          | only inside visuals and pages            | pass                 | 34, all as named                                             | yes, run by the agent with `ajv`        |
| formatting-object-definitions | 1.0–1.5          | only inside visuals and pages            | pass                 | 18, all as named                                             | yes, run by the agent with `ajv`        |
| filter-configuration          | 1.0–1.3          | only inside pages, visuals and reports   | pass                 | 12, all as named                                             | yes, 12 of 12                           |
| report-extension              | 1.0              | none in our reports                      | –                    | 3, hand written                                              | yes, 3 of 3                             |
| visual-configuration          | 1.5–2.3          | only inside visuals                      | pass                 | 3 (2.3 only); older versions tested through visual-container | yes, through visual-container           |
| visual-container-mobile-state | 1.0–2.4          | none in our reports                      | –                    | 33, all as named                                             | yes, 33 of 33                           |
| bookmark, bookmarks-metadata  | none             | 14 `*.bookmark.json`, 2 `bookmarks.json` | not run              | –                                                            | –                                       |

- [x] Rerun the real files when a family gets its older versions. Every real file in our reports now passes as is, except bookmarks, which are not built.
- [x] Compare against Microsoft's schema: `bun .local/scripts/compare-contract.ts [family…]` runs every fixture and real file for page, visual, report, pages-metadata, version-metadata, report-extension, mobile-state and filter-configuration through both our schema and theirs. semantic-query and formatting-object-definitions were compared by the agent.
