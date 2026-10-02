import { Schema } from "effect";
import { closed } from "../shared.js";
import {
  FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0,
  FormattingObjectDefinitionsDefinitionsV1_1_0,
  FormattingObjectDefinitionsSelectorV1_1_0,
} from "../formatting-object-definitions/shared.js";
import {
  VisualContainerMobileStateBackground,
  VisualContainerMobileStateBorderV1_1_0,
  VisualContainerMobileStateDividerV1_1_0,
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
  VisualContainerMobileStateVisualHeaderV1_1_0,
  VisualContainerMobileStateVisualLink,
  VisualContainerMobileStateVisualTooltip,
} from "./shared.js";

export type VisualContainerMobileStateVisualContainerFormattingObjectsV1_1_0 = {
  readonly title?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateTitle;
  }>;
  readonly subTitle?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateSubTitle;
  }>;
  readonly divider?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateDividerV1_1_0;
  }>;
  readonly spacing?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateSpacing;
  }>;
  readonly background?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateBackground;
  }>;
  readonly padding?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStatePadding;
  }>;
  readonly lockAspect?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateLockAspect;
  }>;
  readonly general?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateVisualContainerGeneralFormattingObjects;
  }>;
  readonly border?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateBorderV1_1_0;
  }>;
  readonly dropShadow?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateDropShadow;
  }>;
  readonly visualLink?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateVisualLink;
  }>;
  readonly visualTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateVisualTooltip;
  }>;
  readonly stylePreset?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateStylePreset;
  }>;
  readonly visualHeader?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateVisualHeaderV1_1_0;
  }>;
  readonly visualHeaderTooltip?: ReadonlyArray<{
    readonly selector?: FormattingObjectDefinitionsSelectorV1_1_0;
    readonly properties: VisualContainerMobileStateVisualHeaderTooltip;
  }>;
};

export const VisualContainerMobileStateVisualContainerFormattingObjectsV1_1_0: Schema.Codec<VisualContainerMobileStateVisualContainerFormattingObjectsV1_1_0> =
  closed({
    title: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateTitle),
        }),
      ),
    ),
    subTitle: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateSubTitle),
        }),
      ),
    ),
    divider: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateDividerV1_1_0),
        }),
      ),
    ),
    spacing: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateSpacing),
        }),
      ),
    ),
    background: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateBackground),
        }),
      ),
    ),
    padding: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStatePadding),
        }),
      ),
    ),
    lockAspect: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateLockAspect),
        }),
      ),
    ),
    general: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
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
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateBorderV1_1_0),
        }),
      ),
    ),
    dropShadow: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateDropShadow),
        }),
      ),
    ),
    visualLink: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateVisualLink),
        }),
      ),
    ),
    visualTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateVisualTooltip),
        }),
      ),
    ),
    stylePreset: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateStylePreset),
        }),
      ),
    ),
    visualHeader: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateVisualHeaderV1_1_0),
        }),
      ),
    ),
    visualHeaderTooltip: Schema.optionalKey(
      Schema.Array(
        closed({
          selector: Schema.optionalKey(
            Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.Selector),
          ),
          properties: Schema.suspend(() => VisualContainerMobileStateVisualHeaderTooltip),
        }),
      ),
    ),
  });

export const VisualContainerMobileStateDefinitionsV1_1_0 = {
  VisualContainerFormattingObjects:
    VisualContainerMobileStateVisualContainerFormattingObjectsV1_1_0,
  Title: VisualContainerMobileStateTitle,
  SubTitle: VisualContainerMobileStateSubTitle,
  Divider: VisualContainerMobileStateDividerV1_1_0,
  Spacing: VisualContainerMobileStateSpacing,
  Background: VisualContainerMobileStateBackground,
  Padding: VisualContainerMobileStatePadding,
  LockAspect: VisualContainerMobileStateLockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualContainerMobileStateVisualContainerGeneralFormattingObjects,
  Border: VisualContainerMobileStateBorderV1_1_0,
  DropShadow: VisualContainerMobileStateDropShadow,
  VisualLink: VisualContainerMobileStateVisualLink,
  VisualTooltip: VisualContainerMobileStateVisualTooltip,
  StylePreset: VisualContainerMobileStateStylePreset,
  VisualHeader: VisualContainerMobileStateVisualHeaderV1_1_0,
  VisualHeaderTooltip: VisualContainerMobileStateVisualHeaderTooltip,
  VisualContainerPosition: VisualContainerMobileStateVisualContainerPositionV1_0_0,
} as const;

export type VisualContainerMobileStateV1_1_0 = {
  readonly $schema: "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.1.0/schema.json";
  readonly objects?: FormattingObjectDefinitionsDataViewObjectDefinitionsV1_1_0;
  readonly visualContainerObjects?: VisualContainerMobileStateVisualContainerFormattingObjectsV1_1_0;
  readonly position: VisualContainerMobileStateVisualContainerPositionV1_0_0;
};

export const VisualContainerMobileStateV1_1_0: Schema.Codec<VisualContainerMobileStateV1_1_0> =
  closed({
    $schema: Schema.Literal(
      "https://developer.microsoft.com/json-schemas/fabric/item/report/definition/visualContainerMobileState/1.1.0/schema.json",
    ),
    objects: Schema.optionalKey(
      Schema.suspend(() => FormattingObjectDefinitionsDefinitionsV1_1_0.DataViewObjectDefinitions),
    ),
    visualContainerObjects: Schema.optionalKey(
      Schema.suspend(() => VisualContainerMobileStateVisualContainerFormattingObjectsV1_1_0),
    ),
    position: Schema.suspend(() => VisualContainerMobileStateVisualContainerPositionV1_0_0),
  });
