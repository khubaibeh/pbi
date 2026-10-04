import {
	Array,
	Boolean,
	type Codec,
	Literals,
	Number,
	Record,
	String,
	Struct,
	Unknown,
	isMaxLength,
	optionalKey as opt,
	suspend,
} from "effect/Schema";

import { versions as formattingObjectDefinitions } from "#pbi/schemas/formatting-object-definitions";
import { versions as semanticQuery } from "#pbi/schemas/semantic-query";
import { describe } from "#pbi/schemas/shared.ts";

import { descriptions as d } from "./version-2.3.descriptions.ts";

const { QueryExpressionContainer: Expression } = semanticQuery["1.4"];
const { DataViewObjectDefinitions, Selector } = formattingObjectDefinitions["1.5"];

const SortDirection = Literals(["Ascending", "Descending"]);

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

const VisualQueryOptions = describe(
	Struct({
		allowBinnedLineSample: opt(Boolean),
		allowOverlappingPointsSample: opt(Boolean),
	}),
	d.VisualQueryOptions,
).annotate({ identifier: "VisualConfiguration.VisualQueryOptions" });

const RoleProjection = describe(
	Struct({
		field: Expression,
		queryRef: String,
		nativeQueryRef: opt(String),
		displayName: opt(String),
		format: opt(String.check(isMaxLength(255))),
		active: opt(Boolean),
		hidden: opt(Boolean),
	}),
	d.RoleProjection,
).annotate({ identifier: "VisualConfiguration.RoleProjection" });

const RoleFieldParameter = describe(
	Struct({
		parameterExpr: Expression,
		index: Number,
		length: opt(Number),
		sortDirection: opt(SortDirection),
	}),
	d.RoleFieldParameter,
).annotate({ identifier: "VisualConfiguration.RoleFieldParameter" });

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

interface ExpandedNode {
	readonly identityValues: ReadonlyArray<unknown>;
	readonly isToggled?: boolean;
	readonly children?: ReadonlyArray<ExpandedNode>;
}

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

const AILevelInformation = describe(
	Struct({
		method: Literals(["BestSplit", "MaxSplit", "MinSplit"]),
		disabled: opt(Boolean),
	}),
	d.AILevelInformation,
).annotate({ identifier: "VisualConfiguration.AILevelInformation" });

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

const Title = describe(
	Struct({
		show: opt(Unknown),
		text: opt(Unknown),
		heading: opt(Unknown),
		titleWrap: opt(Unknown),
		fontColor: opt(Unknown),
		background: opt(Unknown),
		alignment: opt(Unknown),
		fontSize: opt(Unknown),
		bold: opt(Unknown),
		italic: opt(Unknown),
		underline: opt(Unknown),
		fontFamily: opt(Unknown),
	}),
	d.Title,
).annotate({ identifier: "VisualConfiguration.Title" });

const SubTitle = describe(
	Struct({
		show: opt(Unknown),
		text: opt(Unknown),
		heading: opt(Unknown),
		titleWrap: opt(Unknown),
		fontColor: opt(Unknown),
		alignment: opt(Unknown),
		fontSize: opt(Unknown),
		bold: opt(Unknown),
		italic: opt(Unknown),
		underline: opt(Unknown),
		fontFamily: opt(Unknown),
	}),
	d.SubTitle,
).annotate({ identifier: "VisualConfiguration.SubTitle" });

const Divider = describe(
	Struct({
		ignorePadding: opt(Unknown),
		show: opt(Unknown),
		color: opt(Unknown),
		width: opt(Unknown),
		style: opt(Unknown),
	}),
	d.Divider,
).annotate({ identifier: "VisualConfiguration.Divider" });

const Spacing = describe(
	Struct({
		customizeSpacing: opt(Unknown),
		verticalSpacing: opt(Unknown),
		spaceBelowTitle: opt(Unknown),
		spaceBelowSubTitle: opt(Unknown),
		spaceBelowTitleArea: opt(Unknown),
	}),
	d.Spacing,
).annotate({ identifier: "VisualConfiguration.Spacing" });

export const Background = describe(
	Struct({
		show: opt(Unknown),
		color: opt(Unknown),
		transparency: opt(Unknown),
	}),
	d.Background,
).annotate({ identifier: "VisualConfiguration.Background" });

const Padding = describe(
	Struct({
		top: opt(Unknown),
		bottom: opt(Unknown),
		left: opt(Unknown),
		right: opt(Unknown),
	}),
	d.Padding,
).annotate({ identifier: "VisualConfiguration.Padding" });

export const LockAspect = describe(
	Struct({
		show: opt(Unknown),
	}),
	d.LockAspect,
).annotate({ identifier: "VisualConfiguration.LockAspect" });

const VisualContainerGeneralFormattingObjects = describe(
	Struct({
		x: opt(Unknown),
		y: opt(Unknown),
		width: opt(Unknown),
		height: opt(Unknown),
		altText: opt(Unknown),
		allowBinnedLineSample: opt(Unknown),
		allowOverlappingPointsSample: opt(Unknown),
		keepLayerOrder: opt(Unknown),
	}),
	d.VisualContainerGeneralFormattingObjects,
).annotate({ identifier: "VisualConfiguration.VisualContainerGeneralFormattingObjects" });

const Border = describe(
	Struct({
		show: opt(Unknown),
		color: opt(Unknown),
		radius: opt(Unknown),
		width: opt(Unknown),
	}),
	d.Border,
).annotate({ identifier: "VisualConfiguration.Border" });

const DropShadow = describe(
	Struct({
		show: opt(Unknown),
		preset: opt(Unknown),
		position: opt(Unknown),
		color: opt(Unknown),
		transparency: opt(Unknown),
		shadowSpread: opt(Unknown),
		shadowBlur: opt(Unknown),
		angle: opt(Unknown),
		shadowDistance: opt(Unknown),
	}),
	d.DropShadow,
).annotate({ identifier: "VisualConfiguration.DropShadow" });

const VisualLink = describe(
	Struct({
		show: opt(Unknown),
		type: opt(Unknown),
		bookmark: opt(Unknown),
		disabledTooltip: opt(Unknown),
		drillthroughSection: opt(Unknown),
		enabledTooltip: opt(Unknown),
		qna: opt(Unknown),
		suppressDefaultTooltip: opt(Unknown),
		showDefaultTooltip: opt(Unknown),
		navigationSection: opt(Unknown),
		tooltip: opt(Unknown),
		tooltipPlaceholderText: opt(Unknown),
		webUrl: opt(Unknown),
		dataFunction: opt(Unknown),
	}),
	d.VisualLink,
).annotate({ identifier: "VisualConfiguration.VisualLink" });

const VisualTooltip = describe(
	Struct({
		show: opt(Unknown),
		type: opt(Unknown),
		section: opt(Unknown),
		titleFontColor: opt(Unknown),
		valueFontColor: opt(Unknown),
		fontSize: opt(Unknown),
		bold: opt(Unknown),
		italic: opt(Unknown),
		underline: opt(Unknown),
		fontFamily: opt(Unknown),
		background: opt(Unknown),
		transparency: opt(Unknown),
		actionFontColor: opt(Unknown),
		themedTitleFontColor: opt(Unknown),
		themedBackground: opt(Unknown),
		themedValueFontColor: opt(Unknown),
	}),
	d.VisualTooltip,
).annotate({ identifier: "VisualConfiguration.VisualTooltip" });

const StylePreset = describe(
	Struct({
		name: opt(Unknown),
	}),
	d.StylePreset,
).annotate({ identifier: "VisualConfiguration.StylePreset" });

const VisualHeader = describe(
	Struct({
		show: opt(Unknown),
		background: opt(Unknown),
		border: opt(Unknown),
		transparency: opt(Unknown),
		foreground: opt(Unknown),
		showVisualInformationButton: opt(Unknown),
		showVisualWarningButton: opt(Unknown),
		showVisualErrorButton: opt(Unknown),
		showDrillRoleSelector: opt(Unknown),
		showDrillUpButton: opt(Unknown),
		showDrillToggleButton: opt(Unknown),
		showDrillDownLevelButton: opt(Unknown),
		showDrillDownExpandButton: opt(Unknown),
		showPinButton: opt(Unknown),
		showFilterRestatementButton: opt(Unknown),
		showFocusModeButton: opt(Unknown),
		showCopyVisualImageButton: opt(Unknown),
		showSeeDataLayoutToggleButton: opt(Unknown),
		showOptionsMenu: opt(Unknown),
		showCommentButton: opt(Unknown),
		showTooltipButton: opt(Unknown),
		showPersonalizeVisualButton: opt(Unknown),
		showSmartNarrativeButton: opt(Unknown),
		showSetAlertButton: opt(Unknown),
		showFollowVisualButton: opt(Unknown),
	}),
	d.VisualHeader,
).annotate({ identifier: "VisualConfiguration.VisualHeader" });

const VisualHeaderTooltip = describe(
	Struct({
		type: opt(Unknown),
		section: opt(Unknown),
		text: opt(Unknown),
		titleFontColor: opt(Unknown),
		fontSize: opt(Unknown),
		fontFamily: opt(Unknown),
		bold: opt(Unknown),
		italic: opt(Unknown),
		underline: opt(Unknown),
		background: opt(Unknown),
		transparency: opt(Unknown),
		themedTitleFontColor: opt(Unknown),
		themedBackground: opt(Unknown),
	}),
	d.VisualHeaderTooltip,
).annotate({ identifier: "VisualConfiguration.VisualHeaderTooltip" });

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

export const VisualContainerFormattingObjects = describe(
	Struct({
		title: formatting(Title),
		subTitle: formatting(SubTitle),
		divider: formatting(Divider),
		spacing: formatting(Spacing),
		background: formatting(Background),
		padding: formatting(Padding),
		lockAspect: formatting(LockAspect),
		general: formatting(VisualContainerGeneralFormattingObjects),
		border: formatting(Border),
		dropShadow: formatting(DropShadow),
		visualLink: formatting(VisualLink),
		visualTooltip: formatting(VisualTooltip),
		stylePreset: formatting(StylePreset),
		visualHeader: formatting(VisualHeader),
		visualHeaderTooltip: formatting(VisualHeaderTooltip),
	}),
	d.VisualContainerFormattingObjects,
).annotate({ identifier: "VisualConfiguration.VisualContainerFormattingObjects" });

const VisualSyncGroup = describe(
	Struct({
		groupName: String,
		fieldChanges: opt(Boolean),
		filterChanges: opt(Boolean),
	}),
	d.VisualSyncGroup,
).annotate({ identifier: "VisualConfiguration.VisualSyncGroup" });

export const Visual = describe(
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
