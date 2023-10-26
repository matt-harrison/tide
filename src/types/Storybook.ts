/* eslint vue/sort-keys: 0 */
// ^ Storybook controls are based on iterating over object properties instead of array slots (bad form), so these can't be ordered alphabetically.

// import { prependNoneAsEmpty } from '@/utilities/storybook';

export const NoneAsEmpty = { None: '' };
export const NoneAsUndefined = { None: undefined };

// These objects are intended exclusively for use in demonstrating the Storybook UI.
export const BOOLEAN_UNREQUIRED = {
  None: undefined,
  True: true,
  False: false,
};

export const COLOR_BACKGROUND = {
  'Surface Low': 'bg-surface-low',
  'Surface': 'bg-surface',
  'Surface High': 'bg-surface-high',
  'Surface Variant Lowest': 'bg-surface-variant-lowest',
  'Surface Variant Low': 'bg-surface-variant-low',
  'Surface Variant': 'bg-surface-variant',
  'Surface Variant High': 'bg-surface-variant-high',
  'Surface Variant Highest': 'bg-surface-variant-highest',
};

export const COLOR_BORDER = {
  'Surface Low': 'border-surface-low',
  'Surface': 'border-surface',
  'Surface High': 'border-surface-high',
  'Surface Save': 'border-surface-save',
};

export const COLOR_FONT = {
  'Surface': 'font-surface',
  'Surface Variant': 'font-surface-variant',
};
