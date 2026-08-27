# Expression Object

The TMDL editor lists these members for an expression. Entries marked as child
objects need a declaration shape, rather than a bare member name.

| Member | Kind | Default value | UI note | Compatibility |
| --- | --- | --- | --- | --- |
| `annotation` | Child object |  | An annotation needs a name and a value. | No level shown. |
| `excludedArtifact` | Child object |  | Represents an indication of an excluded artifact. | Database compatibility level `Preview` or above. |
| `expression` | Property |  | The expression text. | No level shown. |
| `expressionSource` | Property |  | A reference to the `NamedExpression` where the parameter associated with the remote model is defined. | Database compatibility level `1570` or above. |
| `extendedProperty` | Child object |  | An extension of the schema for passing object-specific name-value information through TOM and CSDL. It needs a name and a value. | Database compatibility level `1400` or above. |
| `kind` | Enum property | `m` | Indicates the dialect of the query expression. | Database compatibility level `1400` or above. |
| `lineageTag` | Property |  | A tag that represents the lineage of the object. | Database compatibility level `1540` or above. |
| `mAttributes` | Property |  | The string that has M attributes. | Database compatibility level `1535` or above. |
| `parameterValuesColumn` | Property |  | The column that client tools use to apply filters for an M parameter. Its data type must match the type specified in the parameter metadata tag. | Database compatibility level `1545` or above. |
| `queryGroup` | Property |  | The query group associated with the expression. | Database compatibility level `1480` or above. |
| `remoteParameterName` | Property |  | The parameter name defined in the source model, for proxy models and empty local models. | Database compatibility level `1570` or above. |
| `sourceLineageTag` | Property |  | A tag that represents the lineage of the source for the object. | Database compatibility level `1550` or above. |

## Declaration

````tmdl
expression SampleExpression = ```
		let
			Source = #table({"Value"}, {{1}})
		in
			Source
	```
```
````

## Notes

- `annotation` and `extendedProperty` require names. Entering either member by
  itself produces a missing-name error.
- Scalar and enum properties require values. Entering them as bare names
  produces an invalid-object error.
- The screenshots do not show the complete allowed-value list for `kind`.
