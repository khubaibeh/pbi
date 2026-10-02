import { Schema } from "effect";

import { SelectorV1_2_0 } from "../formatting-object-definitions/version-1.2.0.js";
import { SelectorV1_3_0 } from "../formatting-object-definitions/version-1.3.0.js";
import { SelectorV1_4_0 } from "../formatting-object-definitions/version-1.4.0.js";
import { SelectorV1_5_0 } from "../formatting-object-definitions/version-1.5.0.js";
import {
  Background as SharedBackground,
  closed,
  LockAspect,
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
    readonly properties: SharedBackground;
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
          properties: Schema.suspend(() => SharedBackground),
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
    readonly properties: SharedBackground;
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
          properties: Schema.suspend(() => SharedBackground),
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
    readonly properties: SharedBackground;
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
          properties: Schema.suspend(() => SharedBackground),
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
    readonly properties: SharedBackground;
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
          properties: Schema.suspend(() => SharedBackground),
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
