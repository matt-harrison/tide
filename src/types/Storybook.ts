/* eslint vue/sort-keys: 0 */
// ^ Storybook controls are based on iterating over object properties instead of array slots (bad form), so these can't be ordered alphabetically.

export const BACKGROUND_COLOR = {
  'None': '',
  'White': 'bg-white',
  'Gray - Light': 'bg-gray-light',
  'Gray - Medium': 'bg-gray',
  'Gray - Dark': 'bg-gray-dark font-white',
  'Black': 'bg-black font-white',
};

// These objects are intended exclusively for use in the Storybook UI.
export const BORDER_COLOR = {
  None: undefined,
  Black: 'border-black',
  Blue: 'border-blue',
  Red: 'border-red',
};

export const BORDER_RADIUS = {
  'None': undefined,
  '1/4 REM': 'radius-1/4',
  '1/2 REM': 'radius-1/2',
  '1 REM': 'radius-1',
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
  'None': '',
  '1px': '-1',
  '2px': '-2',
};

export const BOX_SHADOW = {
  Off: '',
  On: 'box-shadow',
};

export const FONT_COLOR = {
  None: '',
  Black: 'font-black',
  Blue: 'font-blue',
  Red: 'font-red',
};

export const FONT_SIZE = {
  'None': '',
  '10px': 'font-10',
  '12px': 'font-12',
  '14px': 'font-14',
  '16px': 'font-16',
  '18px': 'font-18',
  '20px': 'font-20',
  '24px': 'font-24',
  '28px': 'font-28',
  '32px': 'font-32',
};

export const FONT_WEIGHT = {
  'None': '',
  'Medium': 'font-500',
  'Semi-bold': 'font-600',
  'Bold': 'font-700',
};

export const SPACING_SIDE = {
  'Full': '',
  'X-axis': 'x',
  'Y-axis': 'y',
  'Top': 't',
  'Right': 'r',
  'Bottom': 'b',
  'Left': 'l',
};

export const SPACING_SIZE = {
  'None': undefined,
  '4 REM': '4',
  '2 REM': '2',
  '1 REM': '1',
  '1/2 REM': '1/2',
  '1/4 REM': '1/4',
};

export const TEXT_SHADOW = {
  Off: '',
  On: 'text-shadow',
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

export const DYNAMIC_BACKGROUND_COLOR = {
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
