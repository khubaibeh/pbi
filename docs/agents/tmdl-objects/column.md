# Column Object

This document records the column members shown by the TMDL editor's object
completion UI. The descriptions and compatibility notes come from the captured
editor tooltips. The list is a UI reference, not a complete version-independent
TOM schema.

## Declaration

```tmdl
table NewTable
	column NewColumn
```

The companion `column-sample.tmdl` file is an editor-completion probe. It shows
available member shapes and can omit required child-object content, so it is not
a deployable model definition.

## Members

| Member | Kind | Default value | Description or UI note | Compatibility |
| --- | --- | --- | --- | --- |
| `alignment` | Enum property | `default` | An enumeration of possible values for aligning data in a cell. | No level shown. |
| `alternateOf` | Child object |  | Represents an `AlternativeSource` object. It is a child of either a table or a column object. | Database compatibility level `1460` or above. |
| `annotation` | Child object |  | An extension of the schema for passing object-specific name-value information to a client application. Analysis Services does not interpret or validate annotations. Annotations are children of logical metadata objects in the model. | No level shown. |
| `changedProperty` | Child object |  | Represents an indication of a change to one of the object's properties. | Database compatibility level `1567` or above. |
| `columnOrigin` | Child object |  | Returns a `ColumnOrigin` object. It applies only to non-calculated columns of a calculated table. `ColumnOrigin` points to another column that is the source of this column's metadata and data. | No level shown. |
| `dataCategory` | Enum property | `regular` | Specifies the type of data contained in the column so custom behavior can be added based on the column type. The UI reports 248 possible values. | No level shown. |
| `dataType` | Enum property |  | Describes the type of data contained in the column. | No level shown. |
| `displayFolder` | String property |  | Defines the display folder for the column, for use by clients. | No level shown. |
| `displayOrdinal` | Numeric property |  | Indicates the visual position of the column, defined as a relative ordering rather than a strict ordering. For example: `10, 20, 40, 50`. It lets client applications maintain a consistent column position. | No level shown. |
| `encodingHint` | Enum property | `default` | An encoding hint to suggest whether a column should use hash encoding. | Database compatibility level `1400` or above. |
| `evaluationBehavior` | Enum property | `automatic` | Evaluation behavior for a calculated column. | Database compatibility level `Preview` or above. |
| `expression` | DAX expression |  | The expression for a calculated column. | No level shown. |
| `extendedProperty` | Child object |  | An extension of the schema for passing object-specific name-value information to a client application through TOM and CSDL. If the type is `JSON`, Analysis Services validates that the value is well-formed JSON. | Database compatibility level `1400` or above. |
| `formatString` | String property |  | A string that specifies the format of the column contents. | No level shown. |
| `isAvailableInMdx` | Boolean property | `true` | Indicates whether the column can be excluded from MDX query tools. `false` means the column can be excluded; `true` means it cannot be excluded. | No level shown. |
| `isDataTypeInferred` | Boolean property | `false` | Indicates whether the data type is inferred. | No level shown. |
| `isDefaultImage` | Boolean property | `false` | Indicates whether this column is returned as the `DefaultImage` property in CSDL. | No level shown. |
| `isDefaultLabel` | Boolean property | `false` | Indicates whether this column is included in the `DisplayKey` element in CSDL. | No level shown. |
| `isHidden` | Boolean property | `false` | Indicates whether client visualization tools treat the column as hidden. `true` means the column is hidden; otherwise, it is false. | No level shown. |
| `isKey` | Boolean property | `false` | Indicates whether the column is a key of the table. `true` means it is a key; otherwise, it is false. | No level shown. |
| `isNameInferred` | Boolean property | `false` | Indicates whether the server inferred the column name. | No level shown. |
| `isNullable` | Boolean property | `true` | If false, the column cannot contain nulls. Even if true, a key column may still not allow nulls. | No level shown. |
| `isUnique` | Boolean property | `false` | Indicates whether the column contains only unique values. `true` means the values are unique; otherwise, it is false. | No level shown. |
| `keepUniqueRows` | Boolean property | `false` | Specifies the grouping behavior used for building a hierarchy. `true` groups by entity key; `false` groups by value. | No level shown. |
| `lineageTag` | Property |  | A tag representing the lineage of the object. Lineage tags enable stable identification across semantic models and help Power BI maintain bindings to referenced tables or columns when semantic model objects are renamed. | Database compatibility level `1450` or above. |
| `relatedColumnDetails` | Child object |  | An extension of the column object that holds a list of columns by which it is grouped. | Database compatibility level `1400` or above for Power BI Report Server. |
| `sortByColumn` | Column reference |  | Indicates that this column is sorted by the values of the referenced column. | No level shown. |
| `sourceColumn` | String property |  | The name of the column from which data is retrieved. For an expression-based partition source, it must match a column returned during processing or refresh. | No level shown. |
| `sourceLineageTag` | Property |  | A tag representing the lineage of the source for the object. | No level shown. |
| `sourceProviderType` | Property |  | The original data type of the column as defined in the data-source language. This supports generating queries directly against the source, such as in DirectQuery mode. | No level shown. |
| `stringIndex` | Enum property | `auto` | Column index's building behavior. | Database compatibility level `Preview` or above. |
| `summarizeBy` | Enum property | `default` for numeric columns; `none` otherwise | Specifies the aggregate function reporting tools use to summarize column values. | No level shown. |
| `tableDetailPosition` | Numeric property |  | Determines whether the column can be placed in the table's `DefaultDetails` collection. A positive value includes it in the collection, which is sorted in ascending order. The collection is returned in CSDL metadata from `DISCOVER_CSDL_METADATA`. | No level shown. |
| `type` | Enum property | `data` | An enumeration of possible values for a column type. | No level shown. |
| `variation` | Child object |  | A variation object. | Power BI Report Server, Box Server, and Excel Server support it at database compatibility level `1400` or above. |

## Enum Members

The screenshots identify these members as enum-valued, but do not show every
allowed value:

- `alignment`
- `dataCategory`
- `dataType`
- `encodingHint`
- `evaluationBehavior`
- `stringIndex`
- `summarizeBy`
- `type`

The `dataCategory` tooltip reports 248 possible values and shows these initial
values:

| Value | Numeric value |
| --- | ---: |
| `Invalid` | `-1` |
| `All` | `1` |
| `Regular` | `2` |
| `Image` | `3` |
| `ImageBMP` | `4` |
| `ImageGIF` | `5` |
| `ImageJPG` | `6` |
| `ImagePNG` | `7` |
| `ImageTIFF` | `8` |
| `ImageURI` | `9` |

The remaining `dataCategory` values require the MS-SSAS-T SQL Server Analysis
Services Tabular Protocol documentation.

The editor completion UI shows these values for the other enum properties:

| Property | Values |
| --- | --- |
| `alignment` | `center`, `default`, `left`, `right` |
| `dataType` | `automatic`, `binary`, `boolean`, `dateTime`, `decimal`, `double`, `int64`, `string`, `unknown`, `variant` |
| `encodingHint` | `default`, `hash`, `value` |
| `evaluationBehavior` | `automatic`, `dynamic`, `static` |
| `summarizeBy` | `average`, `count`, `default`, `distinctCount`, `max`, `min`, `none`, `sum` |
| `stringIndex` | `off`, `auto`, `explicit`, `full` |
| `type` | `calculated`, `calculatedTableColumn`, `data`, `rowNumber` |

## Boolean Flags

These properties can use TMDL's bare-flag form when set to true:

```tmdl
isAvailableInMdx
isDataTypeInferred
isDefaultImage
isDefaultLabel
isHidden
isKey
isNameInferred
isNullable
isUnique
keepUniqueRows
```

They can also use explicit values such as `isHidden: true` or
`isHidden: false`.

## Validation Notes

- `columnOrigin` is not valid on an ordinary column in an ordinary table. The
  tooltip limits it to a non-calculated column of a calculated table. The
  earlier `columnOrigin SampleColumnOrigin` probe therefore produced an
  invalid-object error in a regular table. It is omitted from the current probe
  sample.
- `stringIndex` does not use `Default`. The editor reports the valid values as
  `off`, `auto`, `explicit`, and `full`.
