/* eslint vue/sort-keys: 0 */
// ^ Storybook controls are based on iterating over object properties instead of array slots (bad form), so these can't be ordered alphabetically.

// import { prependNoneAsEmpty } from '../utilities/storybook';

export const NoneAsEmpty = { None: '' };
export const NoneAsUndefined = { None: undefined };

// These objects are intended exclusively for use in demonstrating the Storybook UI.
export const BOOLEAN_UNREQUIRED = {
  None: undefined,
  True: true,
  False: false,
};
