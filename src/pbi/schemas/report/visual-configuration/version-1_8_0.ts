import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0,
  FormattingObjectDefinitionsDefinitionsV1_3_0,
  FormattingObjectDefinitionsSelectorV1_3_0,
} from "../formatting-object-definitions/shared.js";
import {
  VisualConfigurationAIDecompositionMethod,
  VisualConfigurationAILevelInformation,
  VisualConfigurationBackground,
  VisualConfigurationBorder,
  VisualConfigurationDivider,
  VisualConfigurationDropShadow,
  VisualConfigurationExpansionStateV1_5_0,
  VisualConfigurationLevelExpansionStateV1_5_0,
  VisualConfigurationLockAspect,
  VisualConfigurationNodeExpansionStateV1_5_0,
  VisualConfigurationPadding,
  VisualConfigurationQuerySortV1_5_0,
  VisualConfigurationRoleFieldParameterV1_8_0,
  VisualConfigurationRoleProjectionV1_5_0,
  VisualConfigurationRootExpansionStateV1_5_0,
  VisualConfigurationSortDefinitionV1_5_0,
  VisualConfigurationSortDirection,
  VisualConfigurationSpacing,
  VisualConfigurationStylePreset,
  VisualConfigurationSubTitle,
  VisualConfigurationTitle,
  VisualConfigurationVisualContainerGeneralFormattingObjects,
  VisualConfigurationVisualHeader,
  VisualConfigurationVisualHeaderTooltip,
  VisualConfigurationVisualLinkV1_5_0,
  VisualConfigurationVisualQueryOptions,
  VisualConfigurationVisualSyncGroup,
  VisualConfigurationVisualTooltip,
} from "./shared.js";

export type VisualConfigurationQueryV1_8_0 = {
  readonly sortDefinition?: VisualConfigurationSortDefinitionV1_5_0;
  readonly options?: VisualConfigurationVisualQueryOptions;
  readonly queryState: {} & {
    readonly [key: string]: VisualConfigurationProjectionStateV1_8_0;
  };
  readonly isDrillDisabled?: boolean;
};

export const VisualConfigurationQueryV1_8_0: Schema.Codec<VisualConfigurationQueryV1_8_0> = closed({
  sortDefinition: Schema.optionalKey(Schema.suspend(() => VisualConfigurationSortDefinitionV1_5_0)),
  options: Schema.optionalKey(Schema.suspend(() => VisualConfigurationVisualQueryOptions)),
  queryState: Schema.Record(
    Schema.String,
    Schema.suspend(() => VisualConfigurationProjectionStateV1_8_0),
  ),
  isDrillDisabled: Schema.optionalKey(Schema.Boolean),
});

export type VisualConfigurationProjectionStateV1_8_0 = {
  readonly showAll?: boolean;
  readonly projections: ReadonlyArray<VisualConfigurationRoleProjectionV1_5_0>;
  readonly fieldParameters?: ReadonlyArray<VisualConfigurationRoleFieldParameterV1_8_0>;
};

export const VisualConfigurationProjectionStateV1_8_0: Schema.Codec<VisualConfigurationProjectionStateV1_8_0> =
  closed({
    showAll: Schema.optionalKey(Schema.Boolean),
    projections: Schema.Array(Schema.suspend(() => VisualConfigurationRoleProjectionV1_5_0)),
    fieldParameters: Schema.optionalKey(
      Schema.Array(Schema.suspend(() => VisualConfigurationRoleFieldParameterV1_8_0)),
    ),
  });

export type VisualConfigurationVisualContainerFormattingObjectsV1_8_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationTitle;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationSubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationDivider;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationSpacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationPadding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationVisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationBorder;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationDropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationVisualLinkV1_5_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationVisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationStylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationVisualHeader;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_3_0;
    readonly properties: VisualConfigurationVisualHeaderTooltip;
  }>;
};

export const VisualConfigurationVisualContainerFormattingObjectsV1_8_0: Schema.Codec<VisualConfigurationVisualContainerFormattingObjectsV1_8_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationTitle),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationSubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationDivider),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationSpacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationPadding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(
            () => VisualConfigurationVisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationBorder),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationDropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV1_5_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationStylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualHeader),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualHeaderTooltip),
        }),
      ),
    ),
  });

export const VisualConfigurationDefinitionsV1_8_0 = {
  Query: VisualConfigurationQueryV1_8_0,
  SortDefinition: VisualConfigurationSortDefinitionV1_5_0,
  QuerySort: VisualConfigurationQuerySortV1_5_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualConfigurationVisualQueryOptions,
  ProjectionState: VisualConfigurationProjectionStateV1_8_0,
  RoleProjection: VisualConfigurationRoleProjectionV1_5_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV1_8_0,
  ExpansionState: VisualConfigurationExpansionStateV1_5_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV1_5_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV1_5_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV1_5_0,
  AILevelInformation: VisualConfigurationAILevelInformation,
  AIDecompositionMethod: VisualConfigurationAIDecompositionMethod,
  VisualContainerFormattingObjects: VisualConfigurationVisualContainerFormattingObjectsV1_8_0,
  Title: VisualConfigurationTitle,
  SubTitle: VisualConfigurationSubTitle,
  Divider: VisualConfigurationDivider,
  Spacing: VisualConfigurationSpacing,
  Background: VisualConfigurationBackground,
  Padding: VisualConfigurationPadding,
  LockAspect: VisualConfigurationLockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationVisualContainerGeneralFormattingObjects,
  Border: VisualConfigurationBorder,
  DropShadow: VisualConfigurationDropShadow,
  VisualLink: VisualConfigurationVisualLinkV1_5_0,
  VisualTooltip: VisualConfigurationVisualTooltip,
  StylePreset: VisualConfigurationStylePreset,
  VisualHeader: VisualConfigurationVisualHeader,
  VisualHeaderTooltip: VisualConfigurationVisualHeaderTooltip,
  VisualSyncGroup: VisualConfigurationVisualSyncGroup,
} as const;

export type VisualConfigurationV1_8_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.8.0/schema.json";
  readonly visualType: string;
  readonly autoSelectVisualType?: boolean;
  readonly query?: VisualConfigurationQueryV1_8_0;
  readonly expansionStates?: ReadonlyArray<VisualConfigurationExpansionStateV1_5_0>;
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_3_0;
  readonly visualContainerObjects?: VisualConfigurationVisualContainerFormattingObjectsV1_8_0;
  readonly syncGroup?: VisualConfigurationVisualSyncGroup;
  readonly drillFilterOtherVisuals?: boolean;
};

export const VisualConfigurationV1_8_0: Schema.Codec<VisualConfigurationV1_8_0> = closed({
  $schema: Schema.Literal(
    "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualConfiguration/1.8.0/schema.json",
  ),
  visualType: Schema.String,
  autoSelectVisualType: Schema.optionalKey(Schema.Boolean),
  query: Schema.optionalKey(Schema.suspend(() => VisualConfigurationQueryV1_8_0)),
  expansionStates: Schema.optionalKey(
    Schema.Array(Schema.suspend(() => VisualConfigurationExpansionStateV1_5_0)),
  ),
  objects: Schema.optionalKey(
    Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_3_0.DataViewObjectDefinitions),
  ),
  visualContainerObjects: Schema.optionalKey(
    Schema.suspend(() => VisualConfigurationVisualContainerFormattingObjectsV1_8_0),
  ),
  syncGroup: Schema.optionalKey(Schema.suspend(() => VisualConfigurationVisualSyncGroup)),
  drillFilterOtherVisuals: Schema.optionalKey(Schema.Boolean),
});

export {
  VisualConfigurationEmbeddedDefinitionsV1_8_0,
  VisualConfigurationEmbeddedV1_8_0,
} from "./shared.js";
