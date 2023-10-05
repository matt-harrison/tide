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
  'Surface': 'bg-surface',
  'Surface Light': 'bg-surface-light',
  'Surface Dark': 'bg-surface-dark',
  'Surface Variant': 'bg-surface-variant',
  'Surface Variant Light': 'bg-surface-variant-light',
  'Surface Variant Dark': 'bg-surface-variant-dark',
  'Surface Variant Darkest': 'bg-surface-variant-darkest',
};

export const COLOR_BORDER = {
  'Surface': 'border-surface',
  'Surface Light': 'border-surface-light',
  'Surface Dark': 'border-surface-dark',
  'Surface Save': 'border-surface-save',
};

export const COLOR_FONT = {
  'Surface': 'font-surface',
  'Surface Variant': 'font-surface-variant',
};
