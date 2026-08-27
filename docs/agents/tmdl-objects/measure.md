# Measure Object

The TMDL editor lists these members for a measure. Entries marked as child
objects need a declaration shape, rather than a bare member name.

| Member | Kind | Default value | UI note | Compatibility |
| --- | --- | --- | --- | --- |
| `annotation` | Child object |  | An annotation needs a name and a value. | No level shown. |
| `changedProperty` | Child object |  | Represents an indication of a change to one of the object's properties. | Database compatibility level `1567` or above. |
| `dataCategory` | Property |  | Specifies the type of data contained in the measure so custom behaviors can be added based on measure type. | Database compatibility level `1455` or above. |
| `dataType` | Property |  | The UI describes this as the type of data contained in the column. | No level shown. |
| `detailRowsDefinition` | Child object |  | Represents a `DetailRowsDefinition` object. It is a child of either a measure or a table object. | Database compatibility level `1400` or above. |
| `displayFolder` | Property |  | Defines the display folder for the measure, for use by clients. | No level shown. |
| `expression` | Property |  | The DAX expression evaluated by the measure. | No level shown. |
| `extendedProperty` | Child object |  | An extension of the schema for passing object-specific name-value information through TOM and CSDL. It needs a name and a value. | Database compatibility level `1400` or above. |
| `formatString` | Property |  | A string that specifies the format of the measure contents. | No level shown. |
| `formatStringDefinition` | Child object |  | Represents a `FormatStringDefinition` object. It is a child of either a measure or a calculation item. | Database compatibility level `1470` or above. |
| `isHidden` | Boolean property | `false` | Indicates whether client visualization tools treat the measure as hidden. | No level shown. |
| `isSimpleMeasure` | Boolean property | `false` | Indicates whether the measure is an implicit measure automatically created by client tools to aggregate a field. | No level shown. |
| `kpi` | Child object |  | Represents a Key Performance Indicator object. It is a child of a measure object. | No level shown. |
| `lineageTag` | Property |  | A tag that represents the lineage of the object. | Database compatibility level `1540` or above. |
| `sourceLineageTag` | Property |  | A tag that represents the lineage of the source for the object. | Database compatibility level `1550` or above. |

## Declaration

```tmdl
measure Total = SUM(Sales[Amount])
```

The companion `measure-sample.tmdl` file is an editor-completion probe. It shows
available member shapes and can omit required child-object content, so it is not
a deployable model definition.

## Declaration Shapes

```tmdl
measure Total = SUM(Sales[Amount])
	displayFolder: "Revenue"
	formatString: "#,##0"
	isHidden
	annotation DisplayName = "Total sales"
	extendedProperty Source = "sample"
```

`isHidden` and `isSimpleMeasure` are Boolean flags. A bare flag means true;
omitting it means false. `annotation`, `extendedProperty`,
`detailRowsDefinition`, `formatStringDefinition`, and `kpi` are child objects,
not scalar values. The editor reports a missing-name error when `annotation` or
`extendedProperty` is entered without a name.

The editor reports an invalid-object error when a scalar property such as
`dataCategory`, `dataType`, `displayFolder`, `formatString`, `lineageTag`, or
`sourceLineageTag` is entered as a bare name. These members require their
property value syntax.

The `dataType` tooltip currently says "column" even when the completion is
shown for a measure; this is recorded as displayed by the editor.
