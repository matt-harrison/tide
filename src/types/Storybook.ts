/* eslint vue/sort-keys: 0 */
// ^ Storybook controls are based on iterating over object properties instead of array slots (bad form), so these can't be ordered alphabetically.

// These objects are intended exclusively for use in the Storybook UI.
export const BORDER_COLOR = {
  None: undefined,
  Blue: 'border-blue',
  Red: 'border-red',
};

export const BORDER_RADIUS = {
  'None': undefined,
  '1/8': 'radius-1/8',
  '1/4': 'radius-1/4',
  '1/2': 'radius-1/2',
  '3/4': 'radius-3/4',
  '1': 'radius-1',
  'Full': 'radius-full',
};

export const BORDER_SIDE = {
  Full: '',
  Top: '-t',
  Right: '-r',
  Bottom: '-b',
  Left: '-l',
};

export const BORDER_SIZE = {
  1: '1',
  2: '2',
};

export const FONT_COLOR = {
  'None': '',
  'font-blue': 'font-blue',
  'font-red': 'font-red',
};

export const FONT_FAMILY = {
  'None': '',
  'font-family-title': 'font-family-title',
  'font-family-default': 'font-family-default',
};

export const FONT_SIZE = {
  'None': '',
  'font-10': 'font-10',
  'font-12': 'font-12',
  'font-14': 'font-14',
  'font-16': 'font-16',
  'font-18': 'font-18',
  'font-20': 'font-20',
  'font-24': 'font-24',
  'font-28': 'font-28',
  'font-32': 'font-32',
};

export const FONT_WEIGHT = {
  'None': '',
  'font-500': 'font-500',
  'font-600': 'font-600',
  'font-700': 'font-700',
};

export const SPACING_SIDE = {
  Full: '',
  X: 'x',
  Y: 'y',
  Top: 't',
  Right: 'r',
  Bottom: 'b',
  Left: 'l',
};

export const SPACING_SIZE = {
  '1/4': '1/4',
  '1/2': '1/2',
  '1': '1',
  '2': '2',
  '4': '4',
};

export const DYNAMIC_BORDER_COLOR = {
  'Primary Tier 1': 'border-primary-tier-1',
  'Primary Tier 2': 'border-primary-tier-2',
  'Primary Tier 3': 'border-primary-tier-3',
  'Primary Variant Tier 1': 'border-primary-variant-tier-1',
  'Primary Variant Tier 2': 'border-primary-variant-tier-2',
  'Primary Variant Tier 3': 'border-primary-variant-tier-3',
  'Secondary': 'border-secondary',
  'Tertiary': 'border-tertiary',
  'Surface': 'border-surface',
  'Surface Light': 'border-surface-light',
  'Surface Dark': 'border-surface-dark',
  'Surface Save': 'border-surface-save',
};

export const DYNAMIC_BG_COLOR = {
  'Primary Tier 1': 'bg-primary-tier-1 font-primary-tier-1',
  'Primary Tier 2': 'bg-primary-tier-2 font-primary-tier-2',
  'Primary Tier 3': 'bg-primary-tier-3 font-primary-tier-3',
  'Primary Variant Tier 1': 'bg-primary-variant-tier-1 font-primary-variant-tier-1',
  'Primary Variant Tier 2': 'bg-primary-variant-tier-2 font-primary-variant-tier-2',
  'Primary Variant Tier 3': 'bg-primary-variant-tier-3 font-primary-variant-tier-3',
  'Secondary': 'bg-secondary font-secondary',
  'Tertiary': 'bg-tertiary font-tertiary',
  'Surface': 'bg-surface font-surface',
  'Surface Light': 'bg-surface-light font-surface',
  'Surface Dark': 'bg-surface-dark font-surface',
  'Surface Variant': 'bg-surface-variant font-surface',
  'Surface Variant Light': 'bg-surface-variant-light font-surface',
  'Surface Variant Dark': 'bg-surface-variant-dark font-surface',
  'Surface Variant Darkest': 'bg-surface-variant-darkest font-surface',
};

export const DYNAMIC_FONT_COLOR = {
  'Primary Tier 1': 'bg-primary-tier-1 font-primary-tier-1',
  'Primary Tier 2': 'bg-primary-tier-2 font-primary-tier-2',
  'Primary Tier 3': 'bg-primary-tier-3 font-primary-tier-3',
  'Primary Variant Tier 1': 'bg-primary-variant-tier-1 font-primary-variant-tier-1',
  'Primary Variant Tier 2': 'bg-primary-variant-tier-2 font-primary-variant-tier-2',
  'Primary Variant Tier 3': 'bg-primary-variant-tier-3 font-primary-variant-tier-3',
  'Secondary': 'bg-secondary font-secondary',
  'Tertiary': 'bg-tertiary font-tertiary',
  'Surface': 'bg-surface font-surface',
  'Surface Variant': 'bg-surface font-surface-variant',
};
