import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0,
  FormattingObjectDefinitionsDefinitionsV1_0_0,
  FormattingObjectDefinitionsSelectorV1_0_0,
} from "../formatting-object-definitions/shared.js";
import {
  VisualConfigurationBackground,
  VisualConfigurationDropShadow,
  VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects,
  VisualConfigurationLockAspect,
  VisualConfigurationPadding,
  VisualConfigurationSpacing,
  VisualConfigurationStylePreset,
  VisualConfigurationSubTitle,
  VisualConfigurationTitle,
  VisualConfigurationVisualHeaderTooltip,
  VisualConfigurationVisualLinkV1_5_0,
  VisualConfigurationVisualTooltip,
} from "../visual-configuration/shared.js";
import {
  VisualContainerBorder,
  VisualContainerDivider,
  VisualContainerVisualContainerPositionV1_0_0,
  VisualContainerVisualHeader,
} from "../visual-container/shared.js";

export type VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationTitle;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationSubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerDivider;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationSpacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationPadding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerBorder;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationDropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationVisualLinkV1_5_0;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationVisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationStylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualContainerVisualHeader;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_0_0;
    readonly properties: VisualConfigurationVisualHeaderTooltip;
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
          properties: Schema.suspend(() => VisualConfigurationTitle),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationSubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerDivider),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationSpacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationPadding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationLockAspect),
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
            () => VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects,
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
          properties: Schema.suspend(() => VisualContainerBorder),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationDropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualLinkV1_5_0),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationStylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerVisualHeader),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_0_0.Selector),
          ),
          properties: Schema.suspend(() => VisualConfigurationVisualHeaderTooltip),
        }),
      ),
    ),
  });

export const VisualContainerMobileStateDefinitionsV1_0_0 = {
  VisualContainerFormattingObjects:
    VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0,
  Title: VisualConfigurationTitle,
  SubTitle: VisualConfigurationSubTitle,
  Divider: VisualContainerDivider,
  Spacing: VisualConfigurationSpacing,
  Background: VisualConfigurationBackground,
  Padding: VisualConfigurationPadding,
  LockAspect: VisualConfigurationLockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualConfigurationEmbeddedVisualContainerGeneralFormattingObjects,
  Border: VisualContainerBorder,
  DropShadow: VisualConfigurationDropShadow,
  VisualLink: VisualConfigurationVisualLinkV1_5_0,
  VisualTooltip: VisualConfigurationVisualTooltip,
  StylePreset: VisualConfigurationStylePreset,
  VisualHeader: VisualContainerVisualHeader,
  VisualHeaderTooltip: VisualConfigurationVisualHeaderTooltip,
  VisualContainerPosition: VisualContainerVisualContainerPositionV1_0_0,
} as const;

export type VisualContainerMobileStateV1_0_0 = {
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_0_0;
  readonly visualContainerObjects?: VisualContainerMobileStateVisualContainerFormattingObjectsV1_0_0;
  readonly position: VisualContainerVisualContainerPositionV1_0_0;
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
    position: Schema.suspend(() => VisualContainerVisualContainerPositionV1_0_0),
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.0.0/schema.json",
    ),
  });
