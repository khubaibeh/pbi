import {
  Background as SharedBackground,
  Border as SharedBorder,
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
  VisualLink as SharedVisualLink,
  VisualTooltip,
} from "../shared.js";
import { VisualContainerFormattingObjectsV1_5_0 } from "../visual-configuration/shared.js";
import {
  VisualContainerPositionV1_0_0,
  VisualContainerPositionV1_2_0,
} from "../visual-container/shared.js";
import {
  Border as VisualContainerBorder,
  VisualContainerFormattingObjectsV1_0_0,
  VisualHeader as VisualContainerVisualHeader,
} from "../visual-container/version-1.0.0.js";
import { VisualContainerFormattingObjectsV1_1_0 } from "../visual-container/version-1.1.0.js";

export const VisualContainerMobileStateDefinitionsV1_0_0 = {
  VisualContainerFormattingObjects: VisualContainerFormattingObjectsV1_0_0,
  Title: Title,
  SubTitle: SubTitle,
  Divider: Divider,
  Spacing: Spacing,
  Background: SharedBackground,
  Padding: Padding,
  LockAspect: LockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualContainerGeneralFormattingObjects,
  Border: VisualContainerBorder,
  DropShadow: DropShadow,
  VisualLink: SharedVisualLink,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: VisualContainerVisualHeader,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualContainerPosition: VisualContainerPositionV1_0_0,
} as const;

export const VisualContainerMobileStateDefinitionsV1_1_0 = {
  VisualContainerFormattingObjects: VisualContainerFormattingObjectsV1_1_0,
  Title: Title,
  SubTitle: SubTitle,
  Divider: Divider,
  Spacing: Spacing,
  Background: SharedBackground,
  Padding: Padding,
  LockAspect: LockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualContainerGeneralFormattingObjects,
  Border: SharedBorder,
  DropShadow: DropShadow,
  VisualLink: SharedVisualLink,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: SharedVisualHeader,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualContainerPosition: VisualContainerPositionV1_0_0,
} as const;

export const VisualContainerMobileStateDefinitionsV1_2_0 = {
  VisualContainerFormattingObjects: VisualContainerFormattingObjectsV1_5_0,
  Title: Title,
  SubTitle: SubTitle,
  Divider: Divider,
  Spacing: Spacing,
  Background: SharedBackground,
  Padding: Padding,
  LockAspect: LockAspect,
  VisualContainerGeneralFormattingObjects:
    VisualContainerGeneralFormattingObjects,
  Border: SharedBorder,
  DropShadow: DropShadow,
  VisualLink: SharedVisualLink,
  VisualTooltip: VisualTooltip,
  StylePreset: StylePreset,
  VisualHeader: SharedVisualHeader,
  VisualHeaderTooltip: VisualHeaderTooltip,
  VisualContainerPosition: VisualContainerPositionV1_2_0,
} as const;

export const VisualContainerMobileStateDefinitionsV1_3_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
} as const;

export const VisualContainerMobileStateDefinitionsV1_4_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
} as const;

export const VisualContainerMobileStateDefinitionsV1_5_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
} as const;

export const VisualContainerMobileStateDefinitionsV2_0_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
} as const;

export const VisualContainerMobileStateDefinitionsV2_1_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
} as const;

export const VisualContainerMobileStateDefinitionsV2_2_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
} as const;

export const VisualContainerMobileStateDefinitionsV2_3_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
} as const;

export const VisualContainerMobileStateDefinitionsV2_4_0 = {
  VisualContainerPosition: VisualContainerPositionV1_2_0,
} as const;
