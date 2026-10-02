import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0,
  FormattingObjectDefinitionsDefinitionsV1_0_0,
  FormattingObjectDefinitionsSelectorV1_0_0,
} from "../formatting-object-definitions/shared.js";
import {
  VisualContainerMobileStateBackground,
  VisualContainerMobileStateDropShadow,
  VisualContainerMobileStateLockAspect,
  VisualContainerMobileStatePadding,
  VisualContainerMobileStateSpacing,
  VisualContainerMobileStateStylePreset,
  VisualContainerMobileStateSubTitle,
  VisualContainerMobileStateTitle,
  VisualContainerMobileStateVisualContainerGeneralFormattingObjects,
  VisualContainerMobileStateVisualContainerPositionV1_0_0,
  VisualContainerMobileStateVisualHeaderTooltip,
  VisualContainerMobileStateVisualLink,
  VisualContainerMobileStateVisualTooltip,
} from "./shared.js";

export type VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateTitle;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateSubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateDividerV1_0_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateSpacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStatePadding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateVisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateBorderV1_0_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateDropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateVisualLink;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateVisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateStylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateVisualHeaderV1_0_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerMobileStateVisualHeaderTooltip;
  }>;
};

export const VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0: Schema.Codec<VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateTitle),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateSubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateDividerV1_0_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateSpacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStatePadding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(
            () => VisualContainerMobileStateVisualContainerGeneralFormattingObjects,
          ),
        }),
      ),
    ),
    border: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateBorderV1_0_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateDropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateVisualLink),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateVisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateStylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateVisualHeaderV1_0_0),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateVisualHeaderTooltip),
        }),
      ),
    ),
  });

export type VisualContainerMobileStateDividerV1_0_0 = {
  readonly show?: Schema.Json;
  readonly ignorePadding?: Schema.Json;
  readonly color?: Schema.Json;
  readonly style?: Schema.Json;
  readonly width?: Schema.Json;
};

export const VisualContainerMobileStateDividerV1_0_0: Schema.Codec<VisualContainerMobileStateDividerV1_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    ignorePadding: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    style: Schema.optionalKey(Schema.Json),
    width: Schema.optionalKey(Schema.Json),
  });

export type VisualContainerMobileStateBorderV1_0_0 = {
  readonly show?: Schema.Json;
  readonly color?: Schema.Json;
  readonly radius?: Schema.Json;
};

export const VisualContainerMobileStateBorderV1_0_0: Schema.Codec<VisualContainerMobileStateBorderV1_0_0> =
  closed({
    show: Schema.optionalKey(Schema.Json),
    color: Schema.optionalKey(Schema.Json),
    radius: Schema.optionalKey(Schema.Json),
  });

export type VisualContainerMobileStateVisualHeaderV1_0_0 = {
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

export const VisualContainerMobileStateVisualHeaderV1_0_0: Schema.Codec<VisualContainerMobileStateVisualHeaderV1_0_0> =
  closed({
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

export const VisualContainerMobileStateDefinitionsV1_0_0 = {
  VisualContainerFormattingObjects:
    VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0,
  Title: VisualContainerMobileStateTitle,
  SubTitle: VisualContainerMobileStateSubTitle,
  Divider: VisualContainerMobileStateDividerV1_0_0,
  Spacing: VisualContainerMobileStateSpacing,
  Background: VisualContainerMobileStateBackground,
  Padding: VisualContainerMobileStatePadding,
  LockAspect: VisualContainerMobileStateLockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualContainerMobileStateVisualContainerGeneralFormattingObjects,
  Border: VisualContainerMobileStateBorderV1_0_0,
  DropShadow: VisualContainerMobileStateDropShadow,
  VisualLink: VisualContainerMobileStateVisualLink,
  VisualTooltip: VisualContainerMobileStateVisualTooltip,
  StylePreset: VisualContainerMobileStateStylePreset,
  VisualHeader: VisualContainerMobileStateVisualHeaderV1_0_0,
  VisualHeaderTooltip: VisualContainerMobileStateVisualHeaderTooltip,
  VisualContainerPosition: VisualContainerMobileStateVisualContainerPositionV1_0_0,
} as const;

export type VisualContainerMobileStateV1_0_0 = {
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0;
  readonly visualContainerObjects?: VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0;
  readonly position: VisualContainerMobileStateVisualContainerPositionV1_0_0;
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.0.0/schema.json";
};

export const VisualContainerMobileStateV1_0_0: Schema.Codec<VisualContainerMobileStateV1_0_0> =
  closed({
    objects: Schema.optionalKey(
      Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.DataViewObjectDefinitions),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0),
    ),
    position: Schema.suspend(() => VisualContainerMobileStateVisualContainerPositionV1_0_0),
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.0.0/schema.json",
    ),
  });
