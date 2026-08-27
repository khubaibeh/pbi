# TMDL Serde Research

This note records the current research for parsing Tabular Model Definition
Language (TMDL) and exposing it as JSON. It separates official language rules,
facts seen in the local reference model, and proposed design choices.

## Scope

The first milestone reads a TMDL string and emits JSON. It does not need to
validate the whole Tabular Object Model (TOM), parse DAX or M, or write TMDL.
The string can contain one object, several declarations, or a complete semantic
model copied from Power BI's TMDL view.

The parser must not depend on files, file names, folders, or the standard TMDL
folder layout. A folder is only one source of TMDL text. The same parser must
handle pasted text, editor buffers, API responses, and individual files.

Cultures are out of scope for now. The parser may still represent an unknown or
ignored culture declaration as generic syntax, but the folder loader and typed
project view should not load, link, or validate culture files or `ref culture`
entries. This includes `cultureInfo` references found in Power BI output.

The planned layers are:

1. Parse any TMDL text input into a simple semantic JSON tree.
2. Combine one or more parsed inputs into a semantic-model project view.
3. Add TOM-aware types and validation only where a feature needs them.

A folder loader is an optional input adapter for the second layer. It reads
files and passes each file's text and source name to the text parser. It must not
add grammar rules or change parsing based on a file's path.

The first layer must not use a closed list of object fields. TMDL exposes the
full TOM object tree, and its object types and properties change with the model
compatibility level. DAX, M, JSON annotations, and other expression bodies stay
as opaque strings.

## Sources

- Microsoft TMDL overview:
  <https://learn.microsoft.com/en-us/analysis-services/tmdl/tmdl-overview>
- Microsoft TMDL how-to:
  <https://learn.microsoft.com/en-us/analysis-services/tmdl/tmdl-how-to>
- Microsoft TOM API reference:
  <https://learn.microsoft.com/en-us/dotnet/api/microsoft.analysisservices.tabular>
- Microsoft VS Code TMDL syntax definition:
  <https://github.com/microsoft/vscode-tmdl/blob/main/syntaxes/tmdl.tmLanguage.json>
- Local Power BI reference export: `.local/tmdl-ref`

The Microsoft TMDL serializer is the source of truth. The VS Code grammar is a
syntax highlighter, not a complete parser or validator.

## Repository State

There is no TMDL parser in the repository yet. `tsconfig.json` reserves the
`$tmdl/*` import alias for `src/tmdl/*`. Existing Power BI code shows the local
Effect and Effect Schema style, but it only handles report artifacts and JSON.

The local reference model has compatibility level 1606 and contains:

| Item | Count |
| --- | ---: |
| Database | 1 |
| Model | 1 |
| Tables | 32 |
| Physical columns | 307 |
| Calculated columns | 46 |
| Measures | 109 |
| Partitions | 32 |
| Relationships | 35 |
| Shared expressions | 21 |
| Query groups | 10 |
| Hierarchies | 2 |
| Hierarchy levels | 6 |

The reference model does not cover roles, perspectives, calculation groups,
calculation items, data sources, functions, refresh policies, KPIs, extended
properties, or many other TOM types. It must not define the complete schema.
Cultures also remain outside the planned feature scope.

## Input Forms

The core parser accepts arbitrary TMDL text. Supported input forms include:

- A complete model copied from Power BI's TMDL view.
- One copied table, measure, or other qualified object.
- Several top-level declarations in one editor buffer.
- One `.tmdl` file from a folder representation.
- Text supplied by an API or another tool.

One input can contain any number of root declarations. A source name is
optional metadata used only for diagnostics and UI display.

## Standard Folder Layout

The standard folder representation has root documents such as:

```text
database.tmdl
model.tmdl
relationships.tmdl
expressions.tmdl
dataSources.tmdl
functions.tmdl
tables/*.tmdl
roles/*.tmdl
perspectives/*.tmdl
```

This layout is not part of the parser contract. One input can contain more than
one declaration, including a complete model. TMDL also supports partial
declarations, so an object's children can be spread across inputs. File names
help organize a folder export but do not replace parsing declarations.

For the first folder loader, exclude culture folders and culture references.

## Syntax Classes

A parser needs to distinguish these line forms:

```text
description
object declaration
reference declaration
colon property
boolean flag
equals/default property
expression property
custom property block
blank line
```

Example:

```tmdl
/// Sales data used by the report
table Sales
	lineageTag: e9374b9a-faee-4f9e-b2e7-d9aafb9d6a91
	isHidden

	measure Revenue = SUM(Sales[Amount])
		formatString: #,##0

	partition Sales = m
		mode: import
		source =
				let
				    Source = ...
				in
				    Source
```

## Language Invariants

### Indentation

TMDL uses indentation to express ownership. The official serializer uses one
tab for each structural level. The local corpus uses tabs and CRLF line endings.

- An object's properties and child objects are one level deeper than it.
- A multi-line expression is one level deeper than its owning property level.
- Dedenting ends the current expression or object scope.
- Spaces inside an expression are expression content, not TMDL structure.
- A parser must support CRLF and LF input.
- Structural indentation made from spaces should produce a syntax error in
  strict mode.

Database and direct model children can all start at column zero. This includes
tables, relationships, shared expressions, data sources, query groups, roles,
perspectives, model annotations, and `ref` declarations. Their semantic parent
is implicit and cannot be inferred from indentation alone.

### Object Declarations

Most objects use an object type followed by a name:

```tmdl
model Model
table Sales
column Quantity
relationship RelationshipName
```

Some objects have no name, such as the local `database` declaration. Some
objects also have a default value after `=`:

```tmdl
measure Revenue = SUM(Sales[Amount])
partition Sales = m
annotation PBI_Id = abc123
changedProperty = SortByColumn
```

Child object types can be interleaved. Columns and measures, for example, do
not need to form separate contiguous blocks.

### Names

Names that contain whitespace, `.`, `=`, `:`, or `'` must use single quotes:

```tmdl
table 'Sales Data'
```

Two single quotes escape one single quote inside a quoted name:

```tmdl
table 'Customer''s Sales'
```

Name parsing needs a scanner. Splitting on whitespace or using one broad
regular expression will fail on quoted and escaped names.

TMDL reads keywords, object types, enum values, and property names without case
sensitivity. The JSON should retain the input casing while semantic lookups
compare normalized casing.

### References

The `ref` keyword refers to an object and can preserve collection order:

```tmdl
ref table Calendar
ref table Sales
```

References use the same name quoting rules as declarations. Fully qualified
object references use dot notation:

```tmdl
fromColumn: Sales.'Product Key'
```

The parser should retain a reference in JSON. The first project builder does
not resolve references or copy Microsoft's missing-reference recovery behavior.
It preserves reference declarations in their input order. Reference resolution
can be added later if a feature needs it.

Culture references are ignored in the current scope.

### Colon Properties

Non-expression values use `:` and stay on one line:

```tmdl
dataType: int64
formatString: #,##0
displayFolder: 1 - Portfolio\Revenue
```

Unquoted values have leading and trailing whitespace trimmed. Double quotes
are optional for text unless leading or trailing whitespace must be retained.
Within a double-quoted text value, doubled double quotes represent one quote.

The first parser layer should retain property values as text. It should not
turn `0`, `true`, a GUID, or JSON-looking text into a JSON primitive. Correct
value types depend on the owner, property, and compatibility level.

### Boolean Flags

A property name on its own is the short form of a true Boolean property:

```tmdl
isHidden
isKey
legacyRedirects
```

This form is ambiguous with a nameless object or custom property block unless
the parser has object-field knowledge. The generic tree should represent a
single token line as a neutral flag/block form until indentation shows whether
it has children. For example, `dataAccessOptions` has nested members in the
local model, while `fastCombine` is a leaf flag.

### Equals and Expressions

`=` assigns object default properties and expression properties. Expressions
are opaque text at this layer. DAX, M, native queries, JSON, and XML must not be
parsed as TMDL.

There are three expression forms.

Inline:

```tmdl
measure Revenue = SUM(Sales[Amount])
```

Indented:

```tmdl
measure Revenue =
			VAR Result = SUM(Sales[Amount])
			RETURN Result
```

Fenced:

````tmdl
measure Revenue = ```
			VAR Result = SUM(Sales[Amount])
			RETURN Result
		```
````

For an indented expression:

- The first expression line must be deeper than the owning property level.
- The parser removes the structural outer indentation.
- Relative indentation remains intact.
- Blank lines inside the body remain part of the expression.
- Trailing blank lines and trailing whitespace-only lines are removed.
- Dedenting to the property level ends the expression.

For a fenced expression:

- The opening fence follows `=` on the declaration or property line.
- The closing fence is on its own line and has no content after it.
- TMDL indentation rules do not apply to the body.
- The closing fence determines the expression's left boundary.
- On each body line, indentation through the closing fence's left boundary is
  structural and is not part of the value.
- Text to the right of that boundary is retained exactly, including relative
  indentation, trailing whitespace, and blank lines.
- A writer prefixes each stored body line with its chosen closing-fence
  indentation. Parsing that output therefore restores the same string value.

The local corpus contains all three forms for measures, calculated columns,
partitions, and shared expressions.

### Descriptions

Descriptions use one or more `///` lines directly before an object:

```tmdl
/// First line
/// Second line
measure Revenue = SUM(Sales[Amount])
```

The description attaches to the next declaration at the same indentation.
Unrelated syntax cannot appear between the description and declaration.

### Ordering and Duplicates

Source order matters. `ref` declarations use order to preserve TOM collection
order, and child kinds may be interleaved. Store members in arrays rather than
maps.

The text parser should represent duplicate declarations and properties.
Duplicate checks need project context because TMDL permits partial declarations
across inputs. The semantic layer should report duplicate properties and child
objects where TOM does not permit them.

## Local Corpus Forms

Observed top-level declarations are:

```text
database
model
queryGroup
ref table
ref cultureInfo (ignored by current scope)
expression
relationship
table
annotation
```

Observed nested declarations are:

```text
column
measure
partition
hierarchy
level
annotation
changedProperty
```

Observed common properties are:

```text
compatibilityLevel
culture
defaultPowerBIDataSourceVersion
sourceQueryCulture
dataAccessOptions
lineageTag
dataCategory
dataType
formatString
summarizeBy
sourceColumn
sortByColumn
displayFolder
mode
queryGroup
source
isKey
isHidden
isNameInferred
isActive
crossFilteringBehavior
fromColumn
toColumn
fromCardinality
```

These lists describe the reference model only. They are not allowed-object or
allowed-property lists.

Observed partition forms are `m` and `calculated`. Every local partition has
`mode: import` and a `source =` expression. These are not universal TOM rules.

Observed column data types include `string`, `int64`, `dateTime`, `boolean`,
and `double`. TOM supports more types.

Annotations have bare text, integers, JSON objects, and JSON arrays as values.
Annotation values should remain opaque text in the JSON.

## Proposed JSON

The emitted JSON should contain only the data needed to understand the model
and write valid equivalent TMDL. It does not include source slices, line ranges,
original quote choices, line endings, indentation, or expression style.

This means the writer produces canonical TMDL rather than byte-for-byte copies.
Names and quoted property values are decoded when read and quoted as needed when
written. Single-line expressions are written inline. Multi-line expressions
are written in fenced form so their opaque text remains unchanged.

Properties assigned with `:` and expressions assigned with `=` must remain
separate because a TMDL writer needs to know which delimiter to emit. Bare
Boolean properties become `true`. A bare block with nested properties becomes
a nested property object.

```ts
type TmdlValue = string | true | TmdlProperties;

type TmdlProperties = Readonly<Record<string, TmdlValue>>;

type TmdlDocument = {
	source?: string;
	objects: ReadonlyArray<TmdlObject>;
};

type TmdlObject = {
	type: string;
	name?: string;
	ref?: true;
	description?: string;
	value?: string;
	properties: TmdlProperties;
	expressions: Readonly<Record<string, string>>;
	objects: ReadonlyArray<TmdlObject>;
};
```

`value` holds the value assigned on an object declaration, such as a measure's
DAX expression, a partition's `m` or `calculated` source type, an annotation's
value, or a `changedProperty` value. `expressions` holds named expression
properties such as a partition's `source`.

Child declarations remain an array because duplicate child types are normal
and `ref` order matters. Property order does not affect model meaning, so a
plain property object is enough. Duplicate property names are invalid in strict
mode.

Example JSON:

```json
{
  "type": "table",
  "name": "00-DimDate",
  "properties": {
    "lineageTag": "bc3a3f03-5d4d-4054-8274-704ad751fd46"
  },
  "expressions": {},
  "objects": [
    {
      "type": "column",
      "name": "Date",
      "properties": {
        "dataType": "dateTime",
        "isKey": true,
        "formatString": "dd-mmm-yy"
      },
      "expressions": {},
      "objects": [
        {
          "type": "annotation",
          "name": "SummarizationSetBy",
          "value": "Automatic",
          "properties": {},
          "expressions": {},
          "objects": []
        }
      ]
    },
    {
      "type": "partition",
      "name": "00-DimDate",
      "value": "m",
      "properties": {
        "mode": "import"
      },
      "expressions": {
        "source": "let\n    Source = Calendar(MinStartTarget, MaxEndTarget)\nin\n    Source"
      },
      "objects": []
    }
  ]
}
```

Diagnostics can use line and column data internally, but that parser metadata
is not part of the serde JSON.

The main parser API should reflect this boundary:

```ts
declare const parseTmdl: (
	text: string,
	options?: { readonly source?: string },
) => TmdlDocument;
```

`source` can be a file path, editor buffer name, API identifier, or any other
label. Parsing must produce the same tree when `source` is omitted.

## Project Projection

The second layer can combine one or more parsed text inputs into a UI-friendly
project view:

```ts
type TmdlProject = {
	database?: TmdlObject;
	model?: TmdlObject;
	tables: ReadonlyArray<TmdlObject>;
	relationships: ReadonlyArray<TmdlObject>;
	expressions: ReadonlyArray<TmdlObject>;
	dataSources: ReadonlyArray<TmdlObject>;
	functions: ReadonlyArray<TmdlObject>;
	roles: ReadonlyArray<TmdlObject>;
	perspectives: ReadonlyArray<TmdlObject>;
	documents: ReadonlyArray<TmdlDocument>;
};
```

Cultures are intentionally absent.

This layer should:

- Accept parsed documents without assuming how their text was obtained.
- Combine declarations from one complete input or many partial inputs.
- Preserve `ref` declarations and their order without resolving them.
- Build object lookup indexes.
- Report duplicates across inputs.
- Retain unknown declarations rather than dropping them.

Optional adapters can supply documents to this layer:

```text
TMDL string --------> parseTmdl ----+
Power BI clipboard -> parseTmdl ----+--> buildTmdlProject
Editor buffer ------> parseTmdl ----+
Folder files -------> parseTmdl ----+
```

The folder adapter handles file discovery and excludes culture files. A pasted
complete model needs no folder adapter. The project builder ignores in-scope
culture declarations and references regardless of where the text came from.

## Error Boundary

Microsoft distinguishes malformed TMDL text from valid syntax that violates
TOM rules. This project should keep the same split.

Syntax errors include:

- Invalid structural indentation.
- An unterminated quoted name or quoted property value.
- An unterminated fenced expression.
- Missing values after `:`.
- Invalid declaration shape.
- An expression body at the wrong indentation.
- A description with no following declaration.

Semantic errors include:

- Unknown object type or property.
- Invalid parent-child pair.
- Wrong value type or enum value.
- A missing required property.
- Duplicate declarations or properties.
- An unresolved object reference.
- A feature unavailable at the database compatibility level.

Every diagnostic should include the source identifier when one was supplied,
the line, column, source line, and a short reason. Strict parsing fails on the
first syntax error. Error recovery can be added later if an editor feature needs
more than one diagnostic.

## Parser Shape

A line scanner and indentation stack fit TMDL better than splitting the file
with regular expressions.

For each line outside a fenced expression:

1. Record its raw text, line ending, offset, and structural tab depth.
2. Handle blank lines and pending descriptions.
3. Close stack entries when the line dedents.
4. Scan the line header for `ref`, an object/property name, and a quoted name.
5. Classify top-level `:`, `=`, or bare forms while respecting quotes.
6. If `=` has no inline value, read an indented or fenced expression body.
7. Attach the node to the active parent while retaining source order.

Classification must not search for delimiters inside quoted names or values.
Expression bodies must bypass normal TMDL classification.

## Implementation Stages

1. Add diagnostic, document, object, property, and expression value types.
2. Build a CRLF/LF-aware line scanner.
3. Parse strict tab depth, blank lines, and descriptions.
4. Parse quoted and unquoted names, including doubled single quotes.
5. Parse `ref`, colon properties, bare forms, and default values.
6. Parse inline, indented, and fenced expression bodies.
7. Encode the semantic tree as simple JSON with Effect Schema.
8. Write canonical TMDL from the same JSON shape.
9. Parse every in-scope file in `.local/tmdl-ref` in one corpus test.
10. Add focused valid and invalid syntax fixtures for cases absent from the corpus.
11. Concatenate the reference declarations and test the same parser with one
    model-sized text input.
12. Test semantic round trips with `parse(write(parse(text)))`.
13. Build the project projection for one or more parsed inputs.
14. Add the optional folder adapter, excluding cultures.

Typed TOM views are deferred until a UI feature needs them.

## Parser Milestone Acceptance Criteria

- Every in-scope local reference document parses without a diagnostic.
- A complete model supplied as one string parses without folder metadata.
- Parsing the same text with or without a source name produces the same
  `objects` tree. Only the document's optional `source` metadata differs.
- Unknown object types and fields survive in the JSON tree.
- Child object and `ref` order matches input order.
- Properties are plain JSON keys and values.
- Names and quoted property values are decoded.
- DAX, M, and other expression bodies remain opaque strings.
- Inline, indented, and fenced expression text matches TMDL whitespace rules.
- CRLF and LF files produce the same semantic tree.
- Strict mode rejects structural space indentation and stops at the first error.
- Errors include the optional source name, line, and column.
- JSON encoding does not depend on TOM field definitions.

## Later Stage Acceptance Criteria

- Writing parsed JSON produces valid equivalent canonical TMDL.
- Parsing canonical output produces the same semantic JSON, apart from optional
  document source metadata.
- Project building skips cultures and culture references for every input form.
- Folder loading remains an optional adapter over the text parser.

## Decisions

- Support strict parsing only. Structural indentation must use tabs.
- Keep raw source slices and parser positions out of emitted JSON.
- Preserve expression bodies as strings without parsing DAX, M, JSON, or XML.
- Recreate canonical, semantically equivalent TMDL rather than original text.
- Do not implement Microsoft's missing-reference recovery behavior yet.
- Preserve `ref` declarations but do not resolve them in the first project view.
- Stop at the first syntax error, including indentation errors.
- Defer typed TOM views until a concrete UI feature needs them.
