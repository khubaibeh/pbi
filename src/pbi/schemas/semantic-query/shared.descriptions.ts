export const descriptions = {
	FilterDefinition: {
		description: "Defines a filter element as a partial query structure",
		fields: {
			Version: "Version of the query",
			From: "Set of tables from which the data will be picked.",
			Where: "Set of filters to apply to the data.",
		},
	},
	QueryFilter: {
		fields: {
			Target:
				"Set of expressions over which the condition applies. Applied to the set of all non-aggregate, non-measure expressions in the Select if not specified.",
			Condition: "Condition to apply to the target. Must be an expression that evaluates to a boolean.",
			Annotations: "Auxillary metadata for this filter.",
		},
	},
	QueryExpressionContainer: {
		description:
			"Holds a single expression and associated metadata.\nName, NativeReferenceName, and Annotations may be specified for any expression.\nEach other property represents a specific type of expression and exactly one of these other properties must be specified.",
		fields: {
			Name: "The name by which the expression can be referenced",
			NativeReferenceName: "The name by which the expression can be referenced in native expressions.",
			Annotations: "Auxiliary metadata for this expression.",
			SourceRef:
				"The SourceRef element contains an expression which is reference to a source table in the query or the data.",
			Column: "The Column element contains an expression which is a reference to a column in a source table.",
			Measure:
				"The Measure element contains an expression which is a reference to a measure in a source table.",
			Min: "The Min element contains an expression whose min aggregation needs to be computed.",
			Max: "The Max element contains an expression whose max aggregation needs to be computed.",
			Aggregation: "The Aggregation element contains an expression which is an aggregation of an expression.",
			Percentile:
				"The Percentile element contains an expression which computes a percentile of an expression.",
			Hierarchy: "Hierarchy is an element which represents a reference to a hierarchy in a source table.",
			HierarchyLevel:
				"HierarchyLevel is an element which represents a reference to a hierarchy level in a hierarchy.",
			PropertyVariationSource:
				"PropertyVariationSource is an element which represents a reference to a source of variations associated with a property.",
			Subquery: "Subquery is an element which holds a query.",
			Discretize:
				"Transforms a continuous space of numerical values into a discrete space of numerical values.",
			And: 'The And element contains an expression which represents an "and" between two expressions that evaluate to a boolean value.',
			Between:
				"The Between element contains an expression which is a comparison between an expression and two bounds.",
			In: "The In element contains an expression which is a comparison between an ordered list of expressions and a set of ordered lists of values.\nIf the tuple defined in Expressions matches any tuple defined in Values, then In returns true.",
			Or: 'The And element contains an expression which represents an "or" between two expressions that evaluate to a boolean value.',
			Comparison:
				"The Comparison element contains an expression which is a comparison between two expressions.",
			Not: 'The Not element contains an expression which represents a "not" of an expression that evaluate to a boolean value.',
			Contains:
				'The Contains element contains an expression which is a "contains" comparison between two expressions.\nThe operation is case insensitive and accent sensitive.',
			StartsWith:
				'The StartsWith element contains an expression which is a "starts with" comparison between two expressions.',
			Exists:
				"The Exists element contains an expression which represents confirming the existence of at least one instance of an expression.",
			Literal: "The Literal element contains an expression which is a literal value.",
			DateSpan:
				"The DateSpan element contains an expression which is a datespan calculation of an expression.\nA DateSpan can be compared directly to a Date via Comparison or Between.",
			DateAdd: "The DateAdd element contains an expression which is a dateadd calculation of an expression.",
			Now: "The Now element contains an expression which returns the current date and time.",
			DefaultValue:
				"The DefaultValue element represents the model-defined default value for a column.\nIt may only be used as the Right expression in a Comparison expression with a ComparisonKind of Equal.",
			AnyValue:
				"The AnyValue element represents a wildcard value that will match any value in a column.\nIt may only be used as the Right expression in a Comparison expression with a ComparisonKind of Equal.",
			Arithmetic:
				"The Arithmetic element contains an expression which is an arithmetic operation on two expressions.",
			Floor:
				"The Floor element represents an operation to round the specified expression toward zero to a multiple of the specified size.",
			ScopedEval: "ScopedEval is an element which evaluates an expression in a specified scope.",
			FilteredEval: "The FilteredEval element contains a set of filters to apply to the measure.",
			TransformTableRef:
				"The TransformTableRef element contains an expression which is reference to a TransformTable in the query.",
			TransformOutputRoleRef:
				"The TransformOutputRoleRef element contains an expression which is reference to a column produced by a Transform algorithm.\nThe reference is resolved by the Role attached to the output column by the transform.",
			SparklineData:
				"Used to represent the data behind a sparkline. The data returned will be JSON formatted X/Y value pairs.",
			NativeVisualCalculation:
				"The NativeVisualCalculation element represents invocation of an expression defined using an expression in an underlying query language.\nThe expression should be invoked in the Visual Calculation Context for this query.",
			FillRule: "The FillRule element represents an operation to apply a dynamic fill operation.",
			GroupRef:
				"The GroupRef element contains an expression which is a reference to a model grouping column.",
			ResourcePackageItem:
				"The ResourcePackageItem element contains an expression which references a ResourcePackage item.",
			RoleRef:
				"The RoleRef element contains an expression which is a reference to a named Role defined by a Visual.",
			SummaryValueRef:
				"The SumaryValueRef element contains an expression which is a reference to a summary value in Insights Summary.",
			AllRolesRef: "The AllRolesRef element is used to reference all the roles in a visual.",
			SelectRef:
				"The SelectRef element contains an expression which is a reference to a named item in the select clause of the query.",
			ThemeDataColor: "The ThemeDataColor element represents an operation to select a color from a theme.",
			Conditional:
				"The Conditional element represents an operation to select between several possible cases or an optional default.",
			NativeMeasure:
				"The NativeMeasure element represents invocation of a measure defined using an expression in an underlying query language.",
			NativeColumn:
				"The NativeColumn element represents invocation of a column defined using an expression in an underlying query language.",
		},
	},
	QueryNativeColumn: {
		fields: {
			DataType: "The expected result data type of the native expression.",
			Expression: "The expression to evaluate.",
			Language: "The name of the underlying query language used to define Expression.",
			Source: "Defines the table that this column should be considered as part of.",
			ExpressionContentCache: "Holds metadata about the expression content.",
			ProposedName:
				"The preferred name that should be used if the expression needs to be associated with a name in order to be evaluated.",
			Format: "The format string that should be applied to the result of evaluating the expression.",
		},
	},
	QueryExpressionContentCache: {},
	QueryNativeMeasure: {
		fields: {
			DataType: "The expected result data type of the native expression.",
			Expression: "The expression to evaluate.",
			Language: "The name of the underlying query language used to define Expression.",
			ExpressionContentCache: "Holds metadata about the expression content.",
			ProposedName:
				"The preferred name that should be used if the expression needs to be associated with a name in order to be evaluated.",
			Format: "The format string that should be applied to the result of evaluating the expression.",
		},
	},
	QueryConditionalExpression: {
		fields: {
			Cases:
				"Cases are considered in the specified order.\nThe result is the Case.Value of the first case where Case.Condition evaluates to true.\nIf no Case.Condition evaluates to true, the result is the DefaultValue, if DefaultValue is specified.\nOtherwise, the result is null.",
			DefaultValue: "An optional value to return when no case evaluates to true.",
		},
	},
	QueryCase: {
		fields: {
			Condition: "An expression producing a boolean indicating whether or not to match this Case.",
			Value: "An expression producing the result when this case is matched.",
		},
	},
	QueryThemeDataColorExpression: {
		fields: {
			ColorId: "The theme color to select.",
		},
	},
	QuerySelectRefExpression: {
		fields: {
			ExpressionName: "The Name of the ExpressionContainer from Select of the QueryDefinition.",
		},
	},
	QueryAllRolesRefExpression: {},
	QuerySummaryValueRefExpression: {
		fields: {
			Name: "The Name of the summary value within a summary template.",
		},
	},
	QueryRoleRefExpression: {
		fields: {
			Role: "The Name of the desired Role within a Visual.",
		},
	},
	QueryResourcePackageItem: {
		fields: {
			PackageName: "Identifies the ResourcePackage.",
			PackageType: "Identifies the type of resource package.",
			ItemName: "Identifies the item within the resource package",
		},
	},
	QueryGroupRefExpression: {
		fields: {
			GroupedColumns: "The underlying columns for the desired grouping.",
			Expression:
				"Reference to the source table containing the property. Must be a SourceRef, PropertyVariationSource, or TransformTableRef expression.",
			Property: "The name of the target property in the source.",
		},
	},
	QueryFillRuleExpression: {
		fields: {
			Input: "The expression providing the input value to the rule.",
			FillRule:
				"Describes the algorithm, and associated parameters, needed to convert the Input into the desired fill.",
		},
	},
	QueryNativeVisualCalc: {
		fields: {
			Language: 'The name of the underlying query language that is used to define Expression (i.e., "Dax").',
			Expression: "The expression to be evaluated.",
			Name: "The name of the calculation",
		},
	},
	QuerySparklineDataExpression: {
		fields: {
			Measure: "The measure to compute sparkline data for.",
			Groupings: "The granularity at which to evaluate the measure.",
			PointsPerSparkline: "Number of points per sparkline",
		},
	},
	QueryTransformOutputRoleRefExpression: {
		fields: {
			Role: "The Role of the target column.",
			Transform:
				"The Name of the target Transform. This must be omitted when used to define a column in the output table of a Transform.",
		},
	},
	QueryTransformTableRefExpression: {
		fields: {
			Source: "The Name of the target table.",
		},
	},
	QueryFilteredEvalExpression: {
		fields: {
			Expression: "The expression over which the condition applies. Must be a scalar.",
			Filters: "List of filters to apply to the measure.",
		},
	},
	QueryScopedEvalExpression: {
		fields: {
			Expression: "Expression to evaluate in the new scope.",
			Scope: "Set of expressions defining the new scope.  These expressions can only be Columns.",
		},
	},
	QueryFloorExpression: {
		fields: {
			Expression: "Expression to round",
			Size: "Describes the desired multiple for rounding.\n- TimeUnit is specified: the expression is rounded to a Size multiples of the specified TimeUnit.\n- TimeUnit is omitted: the expression is rounded to a multiple of Size.",
			TimeUnit: "The desired unit of rounding for Date/Time values.",
		},
	},
	QueryArithmeticExpression: {
		fields: {
			Left: "First operand expression",
			Right: "Second operand expression",
			Operator: "The arithmetic operation to perform",
		},
	},
	ArithmeticOperatorKind: {},
	QueryAnyValueExpression: {
		fields: {
			DefaultValueOverridesAncestors:
				"When true, any interaction with the a model-specified default value override results in all attribute relationship path ancestors being overridden.",
		},
	},
	QueryDefaultValueExpression: {},
	QueryNowExpression: {},
	QueryDateAddExpression: {
		fields: {
			Amount: "Number of units to add to the date.",
			TimeUnit: "Unit of time to add to the date.",
			Expression: "Expression to which to add.",
		},
	},
	TimeUnit: {},
	QueryDateSpanExpression: {
		fields: {
			TimeUnit: "Unit of time used for datespan function.",
			Expression: "Expression to which to apply the datespan function.",
		},
	},
	QueryLiteralExpression: {
		fields: {
			Value:
				'The value of the literal.\n- Boolean: "true"\n- DateTime: "datetime\'YYYY-MM-DDThh:mm:ss.ffffff"\n- Decimal: "2.4M"\n- Double: "2.4D"\n- Integer: "24L"\n- Number: ""\n- Null: "null"\n- String: "some string value"',
		},
	},
	QueryExistsExpression: {
		fields: {
			Expression:
				"Expression to verify there exists at least one instance of. Must be a SourceRef expression.",
		},
	},
	QueryStartsWithExpression: {
		fields: {
			Left: "First expression to which to apply the operator.",
			Right: "Second expression to which to apply the operator.",
		},
	},
	QueryContainsExpression: {
		fields: {
			Left: "First expression to which to apply the operator.",
			Right: "Second expression to which to apply the operator.",
		},
	},
	QueryNotExpression: {
		fields: {
			Expression: "Expression to negate. Must be an expression that evaluates to a boolean value.",
		},
	},
	QueryComparisonExpression: {
		fields: {
			ComparisonKind: "Type of the comparison.",
			Left: "First expression to which to apply the operator.",
			Right: "Second expression to which to apply the operator.",
		},
	},
	QueryComparisonKind: {},
	QueryBinaryExpression: {
		fields: {
			Left: "First expression to which to apply the operator.",
			Right: "Second expression to which to apply the operator.",
		},
	},
	QueryInExpression: {
		fields: {
			Expressions: "The tuple of expressions to compare.",
			Values: "The tuples of values to compare with the expressions.",
			Table:
				"An expression, which must be a SourceRef, holding a table to compare against the Expressions.\nThe number of columns in the table must match the number of Expressions.\nEach row in the table is considered a tuple to be matched against the expressions.",
		},
	},
	QueryBetweenExpression: {
		fields: {
			Expression: "Expression to compare.",
			LowerBound: "Lower (inclusive) bound for the value of the expression.",
			UpperBound: "Upper (inclusive) bound for the value of the expression.",
		},
	},
	QueryDiscretizeExpression: {
		fields: {
			Expression: "The expression to be discretized.",
			Count: "The number of discrete values to result from the transformation.",
		},
	},
	QuerySubqueryExpression: {
		fields: {
			Query: "The query to evaluate.",
		},
	},
	QueryDefinition: {
		description: "Defines a query to be executed.",
		fields: {
			Version: "Version of the query",
			From: "Set of tables from which the data will be picked.",
			Where: "Set of filters to apply to the data.",
			OrderBy: "List of expressions over which to sort the results.",
			Select: "List of expressions to display in the results.",
			VisualShape: "Provides metadata information about the structure and state of the visualization.",
			GroupBy:
				"List of expressions that represent the items to group by.\nThese additional groupings can be columns that we don't project or entity tables.",
			Transform: "List of table manipulation operations to apply within the query.",
			Top: "When specified, the query will return up to the specified number of rows based on the specified OrderBy.",
		},
	},
	QueryTransform: {
		fields: {
			Name: "The name used to refer to this transform in other parts of the query.\nThis name must be unique across all other Transform.Name values in this query.",
			Algorithm: "The algorithm to apply.",
			Input: "Describes the information needed to invoke the transform.",
			Output: "Describes the expected results from the invoked transform.",
		},
	},
	QueryTransformOutput: {
		fields: {
			Table: "The structure of the data produced by the transform.",
		},
	},
	QueryTransformTable: {
		fields: {
			Name: "Name by which the transform is referenced in the query.\nThis name must be unique across all other TransformTable.Name values in the query.",
			Columns: "The columns that make up this table.",
		},
	},
	QueryTransformTableColumn: {
		fields: {
			Role: "An arbitrary string used to identify this column to the transform algorithm.  Role may not be unique.",
			Expression:
				"The expression defining this column. ExpressionContainer.Name property defines the name of the column.\nExpressionContainer.Name is required and must be unique across all other columns in this table.",
		},
	},
	QueryTransformInput: {
		fields: {
			Parameters: "Parameters to be supplied when invoking the algorithm",
			Table: "The structure of the table of data passed to the transform.",
		},
	},
	Axis: {
		fields: {
			Groups: "Ordered list of hierarchical groupings in this axis.",
			Name: "Name by which the axis is referenced in the query.",
		},
	},
	AxisGroup: {
		fields: {
			Keys: "List of expressions that define the keys of this group.",
		},
	},
	QuerySortClause: {
		fields: {
			Expression: "Expression over which to sort the results.",
			Direction: "Indicates the direction to sort.",
		},
	},
	EntitySource: {
		fields: {
			Name: "Name by which the table is referenced in the query",
			Entity: "Reference name of the table in the data.",
			Schema:
				"Identifier for the schema which contains the entity source.  This can be omitted if the Schema name is the default.",
			Expression: "An expression that produces a table. Mandatory if Type is Expression.",
			Type: "Type of entity source - defaults to Table (0)",
		},
	},
	QueryPropertyVariationSourceExpression: {
		fields: {
			Expression:
				"Reference to the source property containing the property variation source. Must be a SourceRef expression.",
			Name: "The name of the target variation source in the property.",
			Property: "The name of the target property in the SourceRef.",
		},
	},
	QueryHierarchyLevelExpression: {
		fields: {
			Expression: "Reference to the hierarchy containing the level. Must be a Hierarchy expression.",
			Level: "The name of the target level in the hierarchy.",
		},
	},
	QueryHierarchyExpression: {
		fields: {
			Expression:
				"Reference to the source table containing the hierarchy. Must be a SourceRef or a PropertyVariationSource expression.",
			Hierarchy: "The name of the target hierarchy in the source.",
		},
	},
	QueryPercentileExpression: {
		fields: {
			Expression: "The expression to be evaluated for the percentile.",
			K: "The desired percentile value.\n- Exclusive is true: K must be between 0 and 1, exclusive.\n- Exclusive is false: K must be between 0 and 1, inclusive.",
			Exclusive: "Indicates whether an inclusive or exclusive percentile should be computed.",
		},
	},
	QueryAggregationExpression: {
		fields: {
			Function: "Type of the aggregation.",
			Expression: "Expression to aggregate.",
		},
	},
	QueryAggregateFunction: {},
	QueryMaxExpression: {
		fields: {
			IncludeAllTypes: "Defines how variant types should be treated.",
			Expression: "Expression whose min will be computed.",
		},
	},
	IncludeAllTypes: {
		description:
			"Argument for QueryMinExpression and QueryMaxExpression to decide behavior for variant types.",
	},
	QueryMinExpression: {
		fields: {
			IncludeAllTypes: "Defines how variant types should be treated.",
			Expression: "Expression whose min will be computed.",
		},
	},
	QueryMeasureExpression: {
		fields: {
			Expression:
				"Reference to the source table containing the property. Must be a SourceRef, PropertyVariationSource, or TransformTableRef expression.",
			Property: "The name of the target property in the source.",
		},
	},
	QueryColumnExpression: {
		fields: {
			Expression:
				"Reference to the source table containing the property. Must be a SourceRef, PropertyVariationSource, or TransformTableRef expression.",
			Property: "The name of the target property in the source.",
		},
	},
	QuerySourceRefExpression: {
		fields: {
			Source: "Name of the source table in a query.",
		},
	},
	StandaloneSourceRefExpression: {
		fields: {
			Schema: "The name of the schema containing the referenced entity - can be omitted if optional.",
			Entity: "Name of the referenced entity from your data.",
		},
	},
};
