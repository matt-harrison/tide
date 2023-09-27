/* eslint vue/sort-keys: 0 */
// ^ Storybook controls are based on iterating over object properties instead of array slots (bad form), so these can't be ordered alphabetically.

// These objects are intended exclusively for use in demonstrating the Storybook UI.

export const BOOLEAN_UNREQUIRED = {
  None: undefined,
  True: true,
  False: false,
};

export const AXIS1 = {
  None: '',
  Around: 'axis1-around',
  Between: 'axis1-between',
  Center: 'axis1-center',
  End: 'axis1-end',
  Start: 'axis1-start',
};

export const AXIS2 = {
  None: '',
  Center: 'axis2-center',
  End: 'axis2-end',
  Normal: 'axis2-normal',
  Start: 'axis2-start',
};

export const BORDER_RADIUS = {
  'None': '',
  '1/4 REM': 'radius-1/4',
  '1/2 REM': 'radius-1/2',
  'Full': 'radius-full',
};

export const BORDER = {
  'None': '',
  '1px': 'border-1',
  '2px': 'border-2',
  'Top': 'border-t',
  'Right': 'border-r',
  'Bottom': 'border-b',
  'Left': 'border-l',
};

export const BOX_SHADOW = {
  'None': '',
  'Level 1': 'box-shadow-1',
  'Level 2': 'box-shadow-2',
};

export const COLOR_BACKGROUND = {
  'None': '',
  'Surface': 'bg-surface',
  'Surface Light': 'bg-surface-light',
  'Surface Dark': 'bg-surface-dark',
  'Surface Variant': 'bg-surface-variant',
  'Surface Variant Light': 'bg-surface-variant-light',
  'Surface Variant Dark': 'bg-surface-variant-dark',
  'Surface Variant Darkest': 'bg-surface-variant-darkest',
};

export const COLOR_BORDER = {
  'None': '',
  'Surface': 'border-surface',
  'Surface Light': 'border-surface-light',
  'Surface Dark': 'border-surface-dark',
  'Surface Save': 'border-surface-save',
};

export const COLOR_FONT = {
  'None': '',
  'Surface': 'font-surface',
  'Surface Variant': 'font-surface-variant',
};

export const FLEX_DIRECTION = {
  None: '',
  Row: 'row',
  Column: 'column',
};

export const FONT_FAMILY = {
  None: '',
  Default: 'font-family-default',
  Title: 'font-family-title',
};

export const FONT_SIZE = {
  'None': '',
  '12px': 'font-12',
  '14px': 'font-14',
  '16px': 'font-16',
  '20px': 'font-20',
  '24px': 'font-24',
  '28px': 'font-28',
  '32px': 'font-32',
};

export const FONT_WEIGHT = {
  None: '',
  Default: 'font-500',
  Bold: 'font-700',
};

export const MARGIN_SIZE = {
  'None': undefined,
  'Auto': 'auto',
  '4 REM': '4',
  '2 REM': '2',
  '1 REM': '1',
  '1/2 REM': '1/2',
  '1/4 REM': '1/4',
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
