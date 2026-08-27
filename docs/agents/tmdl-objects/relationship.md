# Relationship Object

The TMDL editor lists these members for a relationship. Entries marked as
child objects need a declaration shape, rather than a bare member name.

| Member | Kind | Default value | UI note | Compatibility |
| --- | --- | --- | --- | --- |
| `annotation` | Child object |  | An annotation needs a name and a value. | No level shown. |
| `changedProperty` | Child object |  | Represents an indication of a change to one of the object's properties. | Database compatibility level `1567` or above. |
| `crossFilteringBehavior` | Enum property | `oneDirection` | Indicates how the relationship influences filtering of data. | No level shown. |
| `extendedProperty` | Child object |  | An extension of the schema for passing object-specific name-value information through TOM and CSDL. It needs a name and a value. | Database compatibility level `1400` or above. |
| `fromCardinality` | Enum property | `many` | Defines cardinality on the source side of a table relationship. | No level shown. |
| `fromColumn` | Property |  | Gets or sets the starting column in a single-column relationship. | No level shown. |
| `isActive` | Boolean property | `true` | Indicates whether the relationship is active. Active relationships filter across tables automatically; inactive relationships can be used explicitly with `USERELATIONSHIP`. | No level shown. |
| `joinOnDateBehavior` | Enum property | `dateAndTime` | When joining two date-time columns, indicates whether to join on date and time parts or on the date part only. | No level shown. |
| `relyOnReferentialIntegrity` | Boolean property | `false` | Reserved for future use. | No level shown. |
| `securityFilteringBehavior` | Enum property | `oneDirection` | Indicates how the relationship influences filtering while evaluating row-level security expressions. | No level shown. |
| `toCardinality` | Enum property | `one` | Defines cardinality on the destination side of a table relationship. | No level shown. |
| `toColumn` | Property |  | Gets or sets the destination column in a single-column relationship. | No level shown. |
| `type` | Enum property | `singleColumn` | The type of the relationship. The UI lists `SingleColumn` as the only possible value. | No level shown. |

## Declaration

```tmdl
relationship NewRelationship
	fromColumn: Sales[CustomerKey]
	toColumn: Customer[CustomerKey]
```

The companion `relationship-sample.tmdl` file is an editor-completion probe.
It shows available member shapes and is not a deployable model definition.

## Notes

- `annotation` and `extendedProperty` require names. Entering either member by
  itself produces a missing-name error.
- Scalar and enum properties require values. Entering them as bare names
  produces an invalid-object error. Boolean properties such as `isActive` and
  `relyOnReferentialIntegrity` can use the bare-flag form when set to true.
- The screenshots do not show the complete allowed-value lists for the enum
  properties. The sample uses representative values for probing.
