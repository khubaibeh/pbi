# Table Object

This document collates the table members shown by the TMDL editor's object
completion UI. It records the descriptions and compatibility notes visible in
that UI. The list is not a claim that these are the only members supported by
every Tabular Object Model version.

## Declaration

```tmdl
table 'Table Name'
```

The companion `table-sample.tmdl` file is an editor-completion probe. It shows
available member shapes and can omit required child-object content, so it is not
a deployable model definition.

Table names can be unquoted when they do not contain characters that require
quoting. A table can contain columns, measures, partitions, hierarchies, and
the metadata objects listed below.

## Members

| Member | Kind | Default value | Description or UI note | Compatibility |
| --- | --- | --- | --- | --- |
| `alternateSourcePrecedence` | Property |  | The ranking or precedence used to select the alternate source table when more than one match is found. | Database compatibility level `1460` or above. |
| `annotation` | Child object |  | An extension of the schema for passing object-specific name-value information to a client application. Analysis Services does not interpret or validate annotations. An annotation is a child of a logical metadata object in the model. | No level shown. |
| `calculationGroup` | Child object |  | Represents a collection of calculation items. | Database compatibility level `1470` or above. |
| `calendar` | Child object |  | Defines a logical calendar as part of DAX time-intelligence support. | Database compatibility level `1701` or above. |
| `changedProperty` | Child object |  | Represents an indication that one of the object's properties changed. | Database compatibility level `1567` or above. |
| `column` | Child object |  | A base class for a column object in a tabular model. It can specify a `DataColumn`, `RowNumberColumn`, `CalculatedColumn`, or `CalculatedTableColumn`. | No level shown. |
| `dataCategory` | Property | `regular` | Specifies the type of the table so application behavior can be customized based on the table's data. | No level shown. |
| `defaultDetailRowsDefinition` | Child object |  | Represents a `DetailRowsDefinition` object. It is a child of either a measure or a table object. | Database compatibility level `1400` or above. |
| `excludedArtifact` | Child object |  | Represents an indication of an excluded artifact. | Database compatibility level `Preview` or above. |
| `excludeFromAutomaticAggregations` | Boolean property | `false` | Indicates whether the table is excluded from the automatic aggregations feature. | Database compatibility level `1572` or above. |
| `excludeFromModelRefresh` | Boolean property | `false` | Indicates whether the table is excluded from model refresh. When true, a model refresh does not trigger a refresh on the table's partitions if those partitions are already processed. | Database compatibility level `1480` or above. |
| `extendedProperty` | Child object |  | An extension of the schema for passing object-specific name-value information to a client application through TOM and CSDL. When its type is set to `JSON`, Analysis Services validates that the value is well-formed JSON. An extended property is a child of a logical metadata object in the model. | Database compatibility level `1400` or above. |
| `hierarchy` | Child object |  | Represents a collection of levels that provide a logical hierarchical drilldown path for client applications. It is a child of a table object. | No level shown. |
| `isHidden` | Boolean property | `false` | Indicates whether client visualization tools treat the table as hidden. `true` means the table is treated as hidden; otherwise, it is false. | No level shown. |
| `isPrivate` | Boolean property | `false` | Specifies whether to hide a table from the client. `true` hides the table. | Supported for Power BI Report Server at database compatibility level `1400` or above, for Box at `1400` or above, and for Excel Server at `1400` or above. |
| `lineageTag` | Property |  | A tag that represents the lineage of the object. | No level shown. |
| `measure` | Child object |  | Represents a value calculated based on an expression. It is a child of a table object. | No level shown. |
| `partition` | Child object |  | Represents a partition in a table. Partitions define the query against external data sources that returns the table's rowsets. | No level shown. |
| `refreshPolicy` | Child object |  | Represents an abstract `RefreshPolicy` object. It is a child of a table object. | Database compatibility level `1450` or above. |
| `showAsVariationsOnly` | Boolean property | `false` | Indicates a difference between a local and server version. When true, the table is shown only when referenced as a variation. | Supported for Power BI Report Server at database compatibility level `1400` or above, for Box at `1400` or above, and for Excel Server at `1400` or above. |
| `sourceLineageTag` | Property |  | A tag that represents the lineage of the source for the object. | Database compatibility level `1550` or above. |
| `systemManaged` | Boolean property | `false` | Indicates whether the table is managed by the system. The system takes ownership of creating and deleting such tables. | Database compatibility level `1562` or above. |

## `dataCategory` Values

The UI lists these values for a table's `dataCategory`. Regular is the default.

| Value | Meaning in the UI |
| --- | --- |
| `Time` (`2`) | Time |
| `Geography` (`3`) | Geography |
| `Organization` (`4`) | Organization |
| `BillOfMaterials` (`5`) | Bill of materials |
| `Accounts` (`6`) | Accounts |
| `Customers` (`7`) | Customers |
| `Products` (`8`) | Products |
| `Scenario` (`9`) | Scenario |
| `Quantitative` (`10`) | Quantitative |
| `Utility` (`11`) | Utility |
| `Currency` (`12`) | Currency |
| `Rates` (`13`) | Rates |
| `Channel` (`14`) | Channel, described as a channel dimension |
| `Promotion` (`15`) | Promotion |

The UI also lists `Regular` as the default category, but does not show a
numeric value for it in the captured description.

## Enum Classification

- `dataCategory` is the clear table-level enum. The UI lists named values with
  numeric enum values from `Regular` through `Promotion`.
- `partition` uses a default `SourceType` value such as `m` or `calculated`,
  and its `mode` property uses values such as `import`. These belong to the
  partition object, not to the table itself.
- The table-level Boolean members are not enums: `excludeFromAutomaticAggregations`,
  `excludeFromModelRefresh`, `isHidden`, `isPrivate`, `showAsVariationsOnly`, and
  `systemManaged` accept Boolean values. TMDL normally writes a true Boolean as
  a bare flag.
- `alternateSourcePrecedence` is a numeric precedence, not an enum.
- `lineageTag` and `sourceLineageTag` are tags, not enums.
- `annotation`, `calculationGroup`, `calendar`, `changedProperty`, `column`,
  `defaultDetailRowsDefinition`, `excludedArtifact`, `extendedProperty`,
  `hierarchy`, `measure`, `partition`, and `refreshPolicy` are child objects,
  not enum-valued table properties. Some of those child objects may have their
  own enum-valued properties or default values. `changedProperty` has a text
  default value naming the changed property; it is not an enum field in the
  same sense as `dataCategory`.

## Object Shapes

The following entries are child-object declarations. They are not values that
can be assigned to the table with `:`:

| TMDL | What it means |
| --- | --- |
| `calculationGroup` | A calculation-group container. It is normally followed by calculation-item children. |
| `calendar CalendarName` | A named logical calendar. The name is required, as confirmed by the editor error for a nameless declaration. |
| `defaultDetailRowsDefinition = ...` | A DAX detail-rows definition expression. A bare declaration is not the definition itself. |
| `excludedArtifact ArtifactName` | A named excluded-artifact metadata object. The object is preview-only according to the UI. |
| `extendedProperty PropertyName = ...` | A named metadata extension whose value is text or JSON, depending on its type. |
| `refreshPolicy` | A refresh-policy container. Its child properties define the policy; an empty declaration is only a structural probe. |

These entries are table-level Boolean flags and need no value when true:
`excludeFromAutomaticAggregations`, `excludeFromModelRefresh`, `isHidden`,
`isPrivate`, `showAsVariationsOnly`, and `systemManaged`.

## Notes

- `extendedProperty` appeared twice in the completion list. It is documented
  once here because both entries have the same name.
- The `calendar` child requires a name. For example: `calendar SampleCalendar`.
  A nameless `calendar` produces the editor error `Missing name for 'calendar'`.
- A child object is declared beneath the table with one additional indentation
  level. For example:

  ```tmdl
  table Sales
  	lineageTag: 00000000-0000-0000-0000-000000000000
  	isHidden

  	column Amount
  	measure Total = SUM(Sales[Amount])
  	partition Sales = m
  ```

- Boolean properties are represented as bare flags in TMDL when set to true;
  omitted flags have their default false value.
- Compatibility levels shown above are database compatibility requirements from
  the editor UI. Deployment support can also depend on the target product and
  service.
