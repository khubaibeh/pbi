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
- [ ] Older semantic-query versions (1.0 to 1.3).
