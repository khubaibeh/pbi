import {
	Array,
	Boolean,
	type Codec,
	Literals,
	Number,
	Record,
	String,
	Struct,
	isMaxLength,
	optionalKey as opt,
	suspend,
} from "effect/Schema";

import { PropertyValue, describe } from "#pbi/schemas/shared.ts";

import { descriptions as d } from "./shared.descriptions.ts";

export interface Options {
	readonly formatMaxLength: boolean;
	readonly currentFormatText: boolean;
	readonly sortDirection: boolean;
	readonly currentFieldParameterText: boolean;
	readonly borderWidth: boolean;
	readonly headerAlertButtons: boolean;
	readonly dataFunction: boolean;
}

const SortDirection = Literals(["Ascending", "Descending"]);

const VisualQueryOptions = describe(
	Struct({
		allowBinnedLineSample: opt(Boolean),
		allowOverlappingPointsSample: opt(Boolean),
	}),
	d.VisualQueryOptions,
).annotate({ identifier: "VisualConfiguration.VisualQueryOptions" });

const AILevelInformation = describe(
	Struct({
		method: Literals(["BestSplit", "MaxSplit", "MinSplit"]),
		disabled: opt(Boolean),
	}),
	d.AILevelInformation,
).annotate({ identifier: "VisualConfiguration.AILevelInformation" });

const Title = describe(
	Struct({
		show: opt(PropertyValue),
		text: opt(PropertyValue),
		heading: opt(PropertyValue),
		titleWrap: opt(PropertyValue),
		fontColor: opt(PropertyValue),
		background: opt(PropertyValue),
		alignment: opt(PropertyValue),
		fontSize: opt(PropertyValue),
		bold: opt(PropertyValue),
		italic: opt(PropertyValue),
		underline: opt(PropertyValue),
		fontFamily: opt(PropertyValue),
	}),
	d.Title,
).annotate({ identifier: "VisualConfiguration.Title" });

const SubTitle = describe(
	Struct({
		show: opt(PropertyValue),
		text: opt(PropertyValue),
		heading: opt(PropertyValue),
		titleWrap: opt(PropertyValue),
		fontColor: opt(PropertyValue),
		alignment: opt(PropertyValue),
		fontSize: opt(PropertyValue),
		bold: opt(PropertyValue),
		italic: opt(PropertyValue),
		underline: opt(PropertyValue),
		fontFamily: opt(PropertyValue),
	}),
	d.SubTitle,
).annotate({ identifier: "VisualConfiguration.SubTitle" });

const Divider = describe(
	Struct({
		ignorePadding: opt(PropertyValue),
		show: opt(PropertyValue),
		color: opt(PropertyValue),
		width: opt(PropertyValue),
		style: opt(PropertyValue),
	}),
	d.Divider,
).annotate({ identifier: "VisualConfiguration.Divider" });

const Spacing = describe(
	Struct({
		customizeSpacing: opt(PropertyValue),
		verticalSpacing: opt(PropertyValue),
		spaceBelowTitle: opt(PropertyValue),
		spaceBelowSubTitle: opt(PropertyValue),
		spaceBelowTitleArea: opt(PropertyValue),
	}),
	d.Spacing,
).annotate({ identifier: "VisualConfiguration.Spacing" });

const Background = describe(
	Struct({
		show: opt(PropertyValue),
		color: opt(PropertyValue),
		transparency: opt(PropertyValue),
	}),
	d.Background,
).annotate({ identifier: "VisualConfiguration.Background" });

const Padding = describe(
	Struct({
		top: opt(PropertyValue),
		bottom: opt(PropertyValue),
		left: opt(PropertyValue),
		right: opt(PropertyValue),
	}),
	d.Padding,
).annotate({ identifier: "VisualConfiguration.Padding" });

const LockAspect = describe(
	Struct({
		show: opt(PropertyValue),
	}),
	d.LockAspect,
).annotate({ identifier: "VisualConfiguration.LockAspect" });

const VisualContainerGeneralFormattingObjects = describe(
	Struct({
		x: opt(PropertyValue),
		y: opt(PropertyValue),
		width: opt(PropertyValue),
		height: opt(PropertyValue),
		altText: opt(PropertyValue),
		allowBinnedLineSample: opt(PropertyValue),
		allowOverlappingPointsSample: opt(PropertyValue),
		keepLayerOrder: opt(PropertyValue),
	}),
	d.VisualContainerGeneralFormattingObjects,
).annotate({ identifier: "VisualConfiguration.VisualContainerGeneralFormattingObjects" });

const DropShadow = describe(
	Struct({
		show: opt(PropertyValue),
		preset: opt(PropertyValue),
		position: opt(PropertyValue),
		color: opt(PropertyValue),
		transparency: opt(PropertyValue),
		shadowSpread: opt(PropertyValue),
		shadowBlur: opt(PropertyValue),
		angle: opt(PropertyValue),
		shadowDistance: opt(PropertyValue),
	}),
	d.DropShadow,
).annotate({ identifier: "VisualConfiguration.DropShadow" });

const VisualTooltip = describe(
	Struct({
		show: opt(PropertyValue),
		type: opt(PropertyValue),
		section: opt(PropertyValue),
		titleFontColor: opt(PropertyValue),
		valueFontColor: opt(PropertyValue),
		fontSize: opt(PropertyValue),
		bold: opt(PropertyValue),
		italic: opt(PropertyValue),
		underline: opt(PropertyValue),
		fontFamily: opt(PropertyValue),
		background: opt(PropertyValue),
		transparency: opt(PropertyValue),
		actionFontColor: opt(PropertyValue),
		themedTitleFontColor: opt(PropertyValue),
		themedBackground: opt(PropertyValue),
		themedValueFontColor: opt(PropertyValue),
	}),
	d.VisualTooltip,
).annotate({ identifier: "VisualConfiguration.VisualTooltip" });

const StylePreset = describe(
	Struct({
		name: opt(PropertyValue),
	}),
	d.StylePreset,
).annotate({ identifier: "VisualConfiguration.StylePreset" });

const VisualHeaderTooltip = describe(
	Struct({
		type: opt(PropertyValue),
		section: opt(PropertyValue),
		text: opt(PropertyValue),
		titleFontColor: opt(PropertyValue),
		fontSize: opt(PropertyValue),
		fontFamily: opt(PropertyValue),
		bold: opt(PropertyValue),
		italic: opt(PropertyValue),
		underline: opt(PropertyValue),
		background: opt(PropertyValue),
		transparency: opt(PropertyValue),
		themedTitleFontColor: opt(PropertyValue),
		themedBackground: opt(PropertyValue),
	}),
	d.VisualHeaderTooltip,
).annotate({ identifier: "VisualConfiguration.VisualHeaderTooltip" });

const VisualSyncGroup = describe(
	Struct({
		groupName: String,
		fieldChanges: opt(Boolean),
		filterChanges: opt(Boolean),
	}),
	d.VisualSyncGroup,
).annotate({ identifier: "VisualConfiguration.VisualSyncGroup" });

interface ExpandedNode {
	readonly identityValues: ReadonlyArray<unknown>;
	readonly isToggled?: boolean;
	readonly children?: ReadonlyArray<ExpandedNode>;
}

const borderFields = {
	show: opt(PropertyValue),
	color: opt(PropertyValue),
	radius: opt(PropertyValue),
};

const makeBorder = (width: boolean) =>
	describe(Struct(width ? { ...borderFields, width: opt(PropertyValue) } : borderFields), d.Border).annotate({
		identifier: "VisualConfiguration.Border",
	});

const visualLinkFields = {
	show: opt(PropertyValue),
	type: opt(PropertyValue),
	bookmark: opt(PropertyValue),
	disabledTooltip: opt(PropertyValue),
	drillthroughSection: opt(PropertyValue),
	enabledTooltip: opt(PropertyValue),
	qna: opt(PropertyValue),
	suppressDefaultTooltip: opt(PropertyValue),
	showDefaultTooltip: opt(PropertyValue),
	navigationSection: opt(PropertyValue),
	tooltip: opt(PropertyValue),
	tooltipPlaceholderText: opt(PropertyValue),
	webUrl: opt(PropertyValue),
};

const makeVisualLink = (dataFunction: boolean) =>
	describe(
		Struct(dataFunction ? { ...visualLinkFields, dataFunction: opt(PropertyValue) } : visualLinkFields),
		d.VisualLink,
	).annotate({ identifier: "VisualConfiguration.VisualLink" });

const visualHeaderFields = {
	show: opt(PropertyValue),
	background: opt(PropertyValue),
	border: opt(PropertyValue),
	transparency: opt(PropertyValue),
	foreground: opt(PropertyValue),
	showVisualInformationButton: opt(PropertyValue),
	showVisualWarningButton: opt(PropertyValue),
	showVisualErrorButton: opt(PropertyValue),
	showDrillRoleSelector: opt(PropertyValue),
	showDrillUpButton: opt(PropertyValue),
	showDrillToggleButton: opt(PropertyValue),
	showDrillDownLevelButton: opt(PropertyValue),
	showDrillDownExpandButton: opt(PropertyValue),
	showPinButton: opt(PropertyValue),
	showFilterRestatementButton: opt(PropertyValue),
	showFocusModeButton: opt(PropertyValue),
	showCopyVisualImageButton: opt(PropertyValue),
	showSeeDataLayoutToggleButton: opt(PropertyValue),
	showOptionsMenu: opt(PropertyValue),
	showCommentButton: opt(PropertyValue),
	showTooltipButton: opt(PropertyValue),
	showPersonalizeVisualButton: opt(PropertyValue),
	showSmartNarrativeButton: opt(PropertyValue),
};

const makeVisualHeader = (alertButtons: boolean) =>
	describe(
		Struct(
			alertButtons
				? {
						...visualHeaderFields,
						showSetAlertButton: opt(PropertyValue),
						showFollowVisualButton: opt(PropertyValue),
					}
				: visualHeaderFields,
		),
		d.VisualHeader,
	).annotate({ identifier: "VisualConfiguration.VisualHeader" });

const makeRoleProjection = (Expression: Codec<unknown>, options: Options) =>
	describe(
		Struct({
			field: Expression,
			queryRef: String,
			nativeQueryRef: opt(String),
			displayName: opt(String),
			format: opt(options.formatMaxLength ? String.check(isMaxLength(255)) : String),
			active: opt(Boolean),
			hidden: opt(Boolean),
		}),
		options.currentFormatText
			? d.RoleProjection
			: { fields: { ...d.RoleProjection.fields, ...d.LegacyRoleProjectionFormat } },
	).annotate({ identifier: "VisualConfiguration.RoleProjection" });

const makeRoleFieldParameter = (Expression: Codec<unknown>, options: Options) => {
	const fields = {
		parameterExpr: Expression,
		index: Number,
		length: opt(Number),
	};
	const text = options.currentFieldParameterText ? d.RoleFieldParameter : d.LegacyRoleFieldParameter;

	return (
		options.sortDirection
			? describe(Struct({ ...fields, sortDirection: opt(SortDirection) }), {
					fields: { ...text.fields, ...d.RoleFieldParameterSortDirection },
				})
			: describe(Struct(fields), text)
	).annotate({ identifier: "VisualConfiguration.RoleFieldParameter" });
};

export function makeSchemas(
	formattingObjectDefinitions: {
		readonly DataViewObjectDefinitions: Codec<unknown>;
		readonly Selector: Codec<unknown>;
	},
	semanticQuery: { readonly QueryExpressionContainer: Codec<unknown> },
	options: Options,
) {
	const { QueryExpressionContainer: Expression } = semanticQuery;
	const { DataViewObjectDefinitions, Selector } = formattingObjectDefinitions;

	const RoleProjection = makeRoleProjection(Expression, options);
	const RoleFieldParameter = makeRoleFieldParameter(Expression, options);

	const QuerySort = describe(
		Struct({
			field: Expression,
			direction: SortDirection,
		}),
		d.QuerySort,
	).annotate({ identifier: "VisualConfiguration.QuerySort" });

	const SortDefinition = describe(
		Struct({
			sort: opt(Array(QuerySort)),
			isDefaultSort: opt(Boolean),
		}),
		d.SortDefinition,
	).annotate({ identifier: "VisualConfiguration.SortDefinition" });

	const ProjectionState = describe(
		Struct({
			showAll: opt(Boolean),
			projections: Array(RoleProjection),
			fieldParameters: opt(Array(RoleFieldParameter)),
		}),
		d.ProjectionState,
	).annotate({ identifier: "VisualConfiguration.ProjectionState" });

	const Query = describe(
		Struct({
			sortDefinition: opt(SortDefinition),
			options: opt(VisualQueryOptions),
			queryState: Record(String, ProjectionState),
			isDrillDisabled: opt(Boolean),
		}),
		d.Query,
	).annotate({ identifier: "VisualConfiguration.Query" });

	const NodeExpansionState: Codec<ExpandedNode> = describe(
		Struct({
			identityValues: Array(Expression),
			isToggled: opt(Boolean),
			children: opt(Array(suspend((): Codec<ExpandedNode> => NodeExpansionState))),
		}),
		d.NodeExpansionState,
	).annotate({ identifier: "VisualConfiguration.NodeExpansionState" });

	const RootExpansionState = describe(
		Struct({
			identityValues: opt(Array(Expression)),
			isToggled: opt(Boolean),
			children: opt(Array(NodeExpansionState)),
		}),
		d.RootExpansionState,
	).annotate({ identifier: "VisualConfiguration.RootExpansionState" });

	const LevelExpansionState = describe(
		Struct({
			identityKeys: opt(Array(Expression)),
			isCollapsed: opt(Boolean),
			queryRefs: Array(String),
			isPinned: opt(Boolean),
			isLocked: opt(Boolean),
			AIInformation: opt(AILevelInformation),
		}),
		d.LevelExpansionState,
	).annotate({ identifier: "VisualConfiguration.LevelExpansionState" });

	const ExpansionState = describe(
		Struct({
			roles: Array(String),
			root: opt(RootExpansionState),
			levels: opt(Array(LevelExpansionState)),
		}),
		d.ExpansionState,
	).annotate({ identifier: "VisualConfiguration.ExpansionState" });

	const formatting = <S extends Codec<unknown>>(properties: S) =>
		opt(
			Array(
				describe(
					Struct({
						selector: opt(Selector),
						properties,
					}),
					d["VisualContainerFormattingObjects.*"],
				),
			),
		);

	const VisualContainerFormattingObjects = describe(
		Struct({
			title: formatting(Title),
			subTitle: formatting(SubTitle),
			divider: formatting(Divider),
			spacing: formatting(Spacing),
			background: formatting(Background),
			padding: formatting(Padding),
			lockAspect: formatting(LockAspect),
			general: formatting(VisualContainerGeneralFormattingObjects),
			border: formatting(makeBorder(options.borderWidth)),
			dropShadow: formatting(DropShadow),
			visualLink: formatting(makeVisualLink(options.dataFunction)),
			visualTooltip: formatting(VisualTooltip),
			stylePreset: formatting(StylePreset),
			visualHeader: formatting(makeVisualHeader(options.headerAlertButtons)),
			visualHeaderTooltip: formatting(VisualHeaderTooltip),
		}),
		d.VisualContainerFormattingObjects,
	).annotate({ identifier: "VisualConfiguration.VisualContainerFormattingObjects" });

	const Visual = describe(
		Struct({
			visualType: String,
			autoSelectVisualType: opt(Boolean),
			query: opt(Query),
			expansionStates: opt(Array(ExpansionState)),
			objects: opt(DataViewObjectDefinitions),
			visualContainerObjects: opt(VisualContainerFormattingObjects),
			syncGroup: opt(VisualSyncGroup),
			drillFilterOtherVisuals: opt(Boolean),
		}),
		d.Visual,
	).annotate({ identifier: "VisualConfiguration.Visual" });

	return { Visual, VisualContainerFormattingObjects, Background, LockAspect };
}
