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
  'Surface Low': 'tide-bg-surface-low',
  'Surface': 'tide-bg-surface',
  'Surface High': 'tide-bg-surface-high',
  'Surface Variant Lowest': 'tide-bg-surface-variant-lowest',
  'Surface Variant Low': 'tide-bg-surface-variant-low',
  'Surface Variant': 'tide-bg-surface-variant',
  'Surface Variant High': 'tide-bg-surface-variant-high',
  'Surface Variant Highest': 'tide-bg-surface-variant-highest',
};

export const COLOR_BORDER = {
  'Surface Low': 'tide-border-surface-low',
  'Surface': 'tide-border-surface',
  'Surface High': 'tide-border-surface-high',
  'Surface Save': 'tide-border-surface-save',
};

export const COLOR_FONT = {
  'Surface': 'tide-font-surface',
  'Surface Variant': 'tide-font-surface-variant',
};
