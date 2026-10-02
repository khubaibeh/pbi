import { Schema } from "effect";
import {
  AIDecompositionMethod,
  AILevelInformation,
  Annotation,
  BorderV1_5_0,
  DividerV1_5_0,
  DropShadow,
  FilterContainerFormattingObjectsProperties,
  LockAspect,
  Padding,
  Spacing,
  StylePreset,
  SubTitle,
  Title,
  VisualConfigurationBackground,
  VisualConfigurationSortDirection,
  VisualConfigurationVisualLinkV1_5_0,
  VisualContainerGeneralFormattingObjects,
  VisualContainerPositionV1_2_0,
  VisualHeaderTooltip,
  VisualHeaderV1_5_0,
  VisualQueryOptions,
  VisualSyncGroup,
  VisualTooltip,
  closed,
} from "../shared.js";
import {
  FilterConfigurationEmbeddedV1_0_0,
  FilterConfigurationFilterContainerFormattingObjectsV1_0_0,
  FilterConfigurationFilterContainerV1_0_0,
} from "../filter-configuration/version-1_0_0.js";
import { SelectorV1_2_0 } from "../formatting-object-definitions/version-1_2_0.js";
import { SelectorV1_3_0 } from "../formatting-object-definitions/version-1_3_0.js";
import { SelectorV1_4_0 } from "../formatting-object-definitions/version-1_4_0.js";
import { SelectorV1_5_0 } from "../formatting-object-definitions/version-1_5_0.js";
import {
  VisualConfigurationEmbeddedV1_5_0,
  VisualConfigurationExpansionStateV1_5_0,
  VisualConfigurationLevelExpansionStateV1_5_0,
  VisualConfigurationNodeExpansionStateV1_5_0,
  VisualConfigurationProjectionStateV1_5_0,
  VisualConfigurationQuerySortV1_5_0,
  VisualConfigurationQueryV1_5_0,
  VisualConfigurationRoleFieldParameterV1_5_0,
  VisualConfigurationRoleProjectionV1_5_0,
  VisualConfigurationRootExpansionStateV1_5_0,
  VisualConfigurationSortDefinitionV1_5_0,
  VisualConfigurationVisualContainerFormattingObjectsV1_5_0,
} from "../visual-configuration/shared.js";

export type GroupLayoutMode = "ScaleMode" | "ScrollMode";

export const GroupLayoutMode: Schema.Codec<GroupLayoutMode> = Schema.Union([
  Schema.Literal("ScaleMode"),
  Schema.Literal("ScrollMode"),
]);

export type VisualGroupGeneralFormattingObjects = {
  readonly x?: Schema.Json;
  readonly y?: Schema.Json;
  readonly width?: Schema.Json;
  readonly height?: Schema.Json;
  readonly altText?: Schema.Json;
};

export const VisualGroupGeneralFormattingObjects: Schema.Codec<VisualGroupGeneralFormattingObjects> =
  closed({
    x: Schema.optionalKey(Schema.Json),
    y: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
    height: Schema.optionalKey(Schema.Json),
    altText: Schema.optionalKey(Schema.Json),
  });

export type VisualGroupConfigV1_2_0 = {
  readonly displayName: string;
  readonly groupMode: GroupLayoutMode;
  readonly objects?: VisualGroupFormattingObjectsV1_2_0;
};

export const VisualGroupConfigV1_2_0: Schema.Codec<VisualGroupConfigV1_2_0> = closed({
  displayName: Schema.String,
  groupMode: Schema.suspend(() => GroupLayoutMode),
  objects: Schema.optionalKey(Schema.suspend(() => VisualGroupFormattingObjectsV1_2_0)),
});

export type VisualGroupFormattingObjectsV1_2_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: LockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: VisualGroupGeneralFormattingObjects;
  }>;
};

export const VisualGroupFormattingObjectsV1_2_0: Schema.Codec<VisualGroupFormattingObjectsV1_2_0> =
  closed({
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => LockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_2_0)),
          properties: Schema.suspend(() => VisualGroupGeneralFormattingObjects),
        }),
      ),
    ),
  });

export const VisualContainerDefinitionsV1_2_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
  VisualConfig: VisualConfigurationEmbeddedV1_5_0,
  Query: VisualConfigurationQueryV1_5_0,
  SortDefinition: VisualConfigurationSortDefinitionV1_5_0,
  QuerySort: VisualConfigurationQuerySortV1_5_0,
  SortDirection: VisualConfigurationSortDirection,
  VisualQueryOptions: VisualQueryOptions,
  ProjectionState: VisualConfigurationProjectionStateV1_5_0,
  RoleProjection: VisualConfigurationRoleProjectionV1_5_0,
  RoleFieldParameter: VisualConfigurationRoleFieldParameterV1_5_0,
  ExpansionState: VisualConfigurationExpansionStateV1_5_0,
  RootExpansionState: VisualConfigurationRootExpansionStateV1_5_0,
  NodeExpansionState: VisualConfigurationNodeExpansionStateV1_5_0,
  LevelExpansionState: VisualConfigurationLevelExpansionStateV1_5_0,
  AILevelInformation: AILevelInformation,
  AIDecompositionMethod: AIDecompositionMethod,
  VisualContainerFormattingObjects: VisualConfigurationVisualContainerFormattingObjectsV1_5_0,
  Title: Title,
  SubTitle: SubTitle,
  Divider: DividerV1_5_0,
  Spacing: Spacing,
  Background: VisualConfigurationBackground,
  Padding: Padding,
  LockAspect: LockAspect,
  VisualContainerGeneralFormattingObjects: VisualContainerGeneralFormattingObjects,
  Border: BorderV1_5_0,
  DropShadow: DropShadow,
  VisualLink: VisualConfigurationVisualLinkV1_5_0,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: VisualHeaderV1_5_0,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualSyncGroup: VisualSyncGroup,
  VisualGroupConfig: VisualGroupConfigV1_2_0,
  GroupLayoutMode: GroupLayoutMode,
  VisualGroupFormattingObjects: VisualGroupFormattingObjectsV1_2_0,
  VisualGroupGeneralFormattingObjects: VisualGroupGeneralFormattingObjects,
  FilterConfig: FilterConfigurationEmbeddedV1_0_0,
  FilterContainer: FilterConfigurationFilterContainerV1_0_0,
  FilterContainerFormattingObjects: FilterConfigurationFilterContainerFormattingObjectsV1_0_0,
  FilterContainerFormattingObjectsProperties: FilterContainerFormattingObjectsProperties,
  Annotation: Annotation,
} as const;

export const VisualContainerDefinitionsV1_5_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
  VisualGroupConfig: VisualGroupConfigV1_2_0,
  GroupLayoutMode: GroupLayoutMode,
  VisualGroupFormattingObjects: VisualGroupFormattingObjectsV1_2_0,
  VisualGroupGeneralFormattingObjects: VisualGroupGeneralFormattingObjects,
  Annotation: Annotation,
} as const;

export type VisualGroupConfigV1_8_0 = {
  readonly displayName: string;
  readonly groupMode: GroupLayoutMode;
  readonly objects?: VisualGroupFormattingObjectsV1_8_0;
};

export const VisualGroupConfigV1_8_0: Schema.Codec<VisualGroupConfigV1_8_0> = closed({
  displayName: Schema.String,
  groupMode: Schema.suspend(() => GroupLayoutMode),
  objects: Schema.optionalKey(Schema.suspend(() => VisualGroupFormattingObjectsV1_8_0)),
});

export type VisualGroupFormattingObjectsV1_8_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: LockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: VisualGroupGeneralFormattingObjects;
  }>;
};

export const VisualGroupFormattingObjectsV1_8_0: Schema.Codec<VisualGroupFormattingObjectsV1_8_0> =
  closed({
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => LockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_3_0)),
          properties: Schema.suspend(() => VisualGroupGeneralFormattingObjects),
        }),
      ),
    ),
  });

export const VisualContainerDefinitionsV1_8_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
  VisualGroupConfig: VisualGroupConfigV1_8_0,
  GroupLayoutMode: GroupLayoutMode,
  VisualGroupFormattingObjects: VisualGroupFormattingObjectsV1_8_0,
  VisualGroupGeneralFormattingObjects: VisualGroupGeneralFormattingObjects,
  Annotation: Annotation,
} as const;

export type VisualGroupConfigV2_1_0 = {
  readonly displayName: string;
  readonly groupMode: GroupLayoutMode;
  readonly objects?: VisualGroupFormattingObjectsV2_1_0;
};

export const VisualGroupConfigV2_1_0: Schema.Codec<VisualGroupConfigV2_1_0> = closed({
  displayName: Schema.String,
  groupMode: Schema.suspend(() => GroupLayoutMode),
  objects: Schema.optionalKey(Schema.suspend(() => VisualGroupFormattingObjectsV2_1_0)),
});

export type VisualGroupFormattingObjectsV2_1_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: LockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: VisualGroupGeneralFormattingObjects;
  }>;
};

export const VisualGroupFormattingObjectsV2_1_0: Schema.Codec<VisualGroupFormattingObjectsV2_1_0> =
  closed({
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => LockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_4_0)),
          properties: Schema.suspend(() => VisualGroupGeneralFormattingObjects),
        }),
      ),
    ),
  });

export const VisualContainerDefinitionsV2_1_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
  VisualGroupConfig: VisualGroupConfigV2_1_0,
  GroupLayoutMode: GroupLayoutMode,
  VisualGroupFormattingObjects: VisualGroupFormattingObjectsV2_1_0,
  VisualGroupGeneralFormattingObjects: VisualGroupGeneralFormattingObjects,
  Annotation: Annotation,
} as const;

export type VisualGroupConfigV2_7_0 = {
  readonly displayName: string;
  readonly groupMode: GroupLayoutMode;
  readonly objects?: VisualGroupFormattingObjectsV2_7_0;
};

export const VisualGroupConfigV2_7_0: Schema.Codec<VisualGroupConfigV2_7_0> = closed({
  displayName: Schema.String,
  groupMode: Schema.suspend(() => GroupLayoutMode),
  objects: Schema.optionalKey(Schema.suspend(() => VisualGroupFormattingObjectsV2_7_0)),
});

export type VisualGroupFormattingObjectsV2_7_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: LockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: VisualGroupGeneralFormattingObjects;
  }>;
};

export const VisualGroupFormattingObjectsV2_7_0: Schema.Codec<VisualGroupFormattingObjectsV2_7_0> =
  closed({
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => LockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_5_0)),
          properties: Schema.suspend(() => VisualGroupGeneralFormattingObjects),
        }),
      ),
    ),
  });

export const VisualContainerDefinitionsV2_7_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
  VisualGroupConfig: VisualGroupConfigV2_7_0,
  GroupLayoutMode: GroupLayoutMode,
  VisualGroupFormattingObjects: VisualGroupFormattingObjectsV2_7_0,
  VisualGroupGeneralFormattingObjects: VisualGroupGeneralFormattingObjects,
  Annotation: Annotation,
} as const;
