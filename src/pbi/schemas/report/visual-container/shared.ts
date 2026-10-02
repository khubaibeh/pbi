import { Schema } from "effect";
import { SelectorV1_0_0 } from "../formatting-object-definitions/version-1.0.0.js";
import { SelectorV1_1_0 } from "../formatting-object-definitions/version-1.1.0.js";
import { SelectorV1_2_0 } from "../formatting-object-definitions/version-1.2.0.js";
import { SelectorV1_3_0 } from "../formatting-object-definitions/version-1.3.0.js";
import { SelectorV1_4_0 } from "../formatting-object-definitions/version-1.4.0.js";
import { SelectorV1_5_0 } from "../formatting-object-definitions/version-1.5.0.js";
import {
  Background,
  Border as SharedBorder,
  closed,
  Divider,
  DropShadow,
  LockAspect,
  Padding,
  Spacing,
  StylePreset,
  SubTitle,
  Title,
  VisualContainerGeneralFormattingObjects,
  VisualHeader as SharedVisualHeader,
  VisualHeaderTooltip,
  VisualLink,
  VisualTooltip,
} from "../shared.js";

export type VisualContainerPositionV1_0_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
};

export const VisualContainerPositionV1_0_0: Schema.Codec<VisualContainerPositionV1_0_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
  });

export type VisualContainerFormattingObjectsV1_0_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: Title;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: SubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: Divider;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: Spacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: Background;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: Padding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: LockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: VisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: Border;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: DropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: VisualLink;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: VisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: StylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: VisualHeader;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_0_0;
    readonly properties: VisualHeaderTooltip;
  }>;
};

export const VisualContainerFormattingObjectsV1_0_0: Schema.Codec<VisualContainerFormattingObjectsV1_0_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => Title),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => SubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => Divider),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => Spacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => Background),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => Padding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => LockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(
            () => VisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => Border),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => DropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => VisualLink),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => VisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => StylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => VisualHeader),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_0_0)),
          properties: Schema.suspend(() => VisualHeaderTooltip),
        }),
      ),
    ),
  });

export type Border = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
};

export const Border: Schema.Codec<Border> = closed({
  show: Schema.optionalKey(Schema.Json),
  color: Schema.optionalKey(Schema.Json),
  radius: Schema.optionalKey(Schema.Json),
});

export type VisualHeader = {
  readonly show?: Schema.Json;
  readonly background?: Schema.Json;
  readonly border?: Schema.Json;
  readonly transparency?: Schema.Json;
  readonly foreground?: Schema.Json;
  readonly showVisualInformationButton?: Schema.Json;
  readonly showVisualWarningButton?: Schema.Json;
  readonly showVisualErrorButton?: Schema.Json;
  readonly showDrillRoleSelector?: Schema.Json;
  readonly showDrillUpButton?: Schema.Json;
  readonly showDrillToggleButton?: Schema.Json;
  readonly showDrillDownLevelButton?: Schema.Json;
  readonly showDrillDownExpandButton?: Schema.Json;
  readonly showPinButton?: Schema.Json;
  readonly showFilterRestatementButton?: Schema.Json;
  readonly showFocusModeButton?: Schema.Json;
  readonly showCopyVisualImageButton?: Schema.Json;
  readonly showSeeDataLayoutToggleButton?: Schema.Json;
  readonly showOptionsMenu?: Schema.Json;
  readonly showCommentButton?: Schema.Json;
  readonly showTooltipButton?: Schema.Json;
  readonly showPersonalizeVisualButton?: Schema.Json;
  readonly showSmartNarrativeButton?: Schema.Json;
};

export const VisualHeader: Schema.Codec<VisualHeader> = closed({
  show: Schema.optionalKey(Schema.Json),
  background: Schema.optionalKey(Schema.Json),
  border: Schema.optionalKey(Schema.Json),
  transparency: Schema.optionalKey(Schema.Json),
  foreground: Schema.optionalKey(Schema.Json),
  showVisualInformationButton: Schema.optionalKey(Schema.Json),
  showVisualWarningButton: Schema.optionalKey(Schema.Json),
  showVisualErrorButton: Schema.optionalKey(Schema.Json),
  showDrillRoleSelector: Schema.optionalKey(Schema.Json),
  showDrillUpButton: Schema.optionalKey(Schema.Json),
  showDrillToggleButton: Schema.optionalKey(Schema.Json),
  showDrillDownLevelButton: Schema.optionalKey(Schema.Json),
  showDrillDownExpandButton: Schema.optionalKey(Schema.Json),
  showPinButton: Schema.optionalKey(Schema.Json),
  showFilterRestatementButton: Schema.optionalKey(Schema.Json),
  showFocusModeButton: Schema.optionalKey(Schema.Json),
  showCopyVisualImageButton: Schema.optionalKey(Schema.Json),
  showSeeDataLayoutToggleButton: Schema.optionalKey(Schema.Json),
  showOptionsMenu: Schema.optionalKey(Schema.Json),
  showCommentButton: Schema.optionalKey(Schema.Json),
  showTooltipButton: Schema.optionalKey(Schema.Json),
  showPersonalizeVisualButton: Schema.optionalKey(Schema.Json),
  showSmartNarrativeButton: Schema.optionalKey(Schema.Json),
});

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

export type VisualContainerFormattingObjectsV1_1_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: Title;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: SubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: Divider;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: Spacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: Background;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: Padding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: LockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: VisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: SharedBorder;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: DropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: VisualLink;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: VisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: StylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: SharedVisualHeader;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: SelectorV1_1_0;
    readonly properties: VisualHeaderTooltip;
  }>;
};

export const VisualContainerFormattingObjectsV1_1_0: Schema.Codec<VisualContainerFormattingObjectsV1_1_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => Title),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => SubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => Divider),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => Spacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => Background),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => Padding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => LockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(
            () => VisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => SharedBorder),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => DropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => VisualLink),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => VisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => StylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => SharedVisualHeader),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(Schema.suspend(() => SelectorV1_1_0)),
          properties: Schema.suspend(() => VisualHeaderTooltip),
        }),
      ),
    ),
  });

export type VisualContainerPositionV1_2_0 = {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
  readonly height: number;
  readonly width: number;
  readonly tabOrder?: number;
  readonly angle?: number;
};

export const VisualContainerPositionV1_2_0: Schema.Codec<VisualContainerPositionV1_2_0> =
  closed({
    x: Schema.Finite,
    y: Schema.Finite,
    z: Schema.optionalKey(Schema.Finite),
    height: Schema.Finite,
    width: Schema.Finite,
    tabOrder: Schema.optionalKey(Schema.Finite),
    angle: Schema.optionalKey(Schema.Finite),
  });

export type VisualGroupConfigV1_2_0 = {
  readonly displayName: string;
  readonly groupMode: GroupLayoutMode;
  readonly objects?: VisualGroupFormattingObjectsV1_2_0;
};

export const VisualGroupConfigV1_2_0: Schema.Codec<VisualGroupConfigV1_2_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => GroupLayoutMode),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualGroupFormattingObjectsV1_2_0),
    ),
  });

export type VisualGroupFormattingObjectsV1_2_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_2_0;
    readonly properties: Background;
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
          properties: Schema.suspend(() => Background),
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

export type VisualGroupConfigV1_8_0 = {
  readonly displayName: string;
  readonly groupMode: GroupLayoutMode;
  readonly objects?: VisualGroupFormattingObjectsV1_8_0;
};

export const VisualGroupConfigV1_8_0: Schema.Codec<VisualGroupConfigV1_8_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => GroupLayoutMode),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualGroupFormattingObjectsV1_8_0),
    ),
  });

export type VisualGroupFormattingObjectsV1_8_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_3_0;
    readonly properties: Background;
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
          properties: Schema.suspend(() => Background),
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

export type VisualGroupConfigV2_1_0 = {
  readonly displayName: string;
  readonly groupMode: GroupLayoutMode;
  readonly objects?: VisualGroupFormattingObjectsV2_1_0;
};

export const VisualGroupConfigV2_1_0: Schema.Codec<VisualGroupConfigV2_1_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => GroupLayoutMode),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualGroupFormattingObjectsV2_1_0),
    ),
  });

export type VisualGroupFormattingObjectsV2_1_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_4_0;
    readonly properties: Background;
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
          properties: Schema.suspend(() => Background),
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

export type VisualGroupConfigV2_7_0 = {
  readonly displayName: string;
  readonly groupMode: GroupLayoutMode;
  readonly objects?: VisualGroupFormattingObjectsV2_7_0;
};

export const VisualGroupConfigV2_7_0: Schema.Codec<VisualGroupConfigV2_7_0> =
  closed({
    displayName: Schema.String,
    groupMode: Schema.suspend(() => GroupLayoutMode),
    objects: Schema.optionalKey(
      Schema.suspend(() => VisualGroupFormattingObjectsV2_7_0),
    ),
  });

export type VisualGroupFormattingObjectsV2_7_0 = {
  readonly background?: ReadonlyArray<{
    readonly selector?: SelectorV1_5_0;
    readonly properties: Background;
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
          properties: Schema.suspend(() => Background),
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
