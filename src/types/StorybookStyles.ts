/* eslint vue/sort-keys: 0 */
// ^ Storybook controls are based on iterating over object properties instead of array slots (bad form), so these can't be ordered alphabetically.

export const BORDER_RADIUS = {
  '0.25 REM': 'tide-radius-1/4',
  '0.5 REM': 'tide-radius-1/2',
  '1 REM': 'tide-radius-1',
  'Full': 'tide-radius-full',
};

export const BORDER_SIDE = {
  Full: 'tide-border',
  Top: 'tide-border-top',
  Right: 'tide-border-right',
  Bottom: 'tide-border-bottom',
  Left: 'tide-border-left',
};

export const BORDER_WIDTH = {
  '1px': '1',
  '2px': '2',
};

export const DISPLAY = {
  'Block': 'tide-display-block',
  'Contents': 'tide-contents',
  'Flex': 'tide-display-flex',
  'Grid': 'tide-display-grid',
  'Inline Block': 'tide-display-inline-block',
  'Inline Flex': 'tide-display-inline-flex',
  'Inline': 'tide-display-inline',
  'None (Hidden)': 'tide-display-none',
};

export const FLEX_AXIS1 = {
  Around: 'tide-axis1-around',
  Between: 'tide-axis1-between',
  Center: 'tide-axis1-center',
  End: 'tide-axis1-end',
  Start: 'tide-axis1-start',
};

export const FLEX_AXIS2 = {
  Center: 'tide-axis2-center',
  End: 'tide-axis2-end',
  Normal: 'tide-axis2-normal',
  Start: 'tide-axis2-start',
};

export const FLEX_DIRECTION = {
  Column: 'tide-flex-column',
  Row: 'tide-flex-row',
};

export const FONT_SIZE = {
  '12px': 'tide-font-12',
  '14px': 'tide-font-14',
  '16px': 'tide-font-16',
  '20px': 'tide-font-20',
  '24px': 'tide-font-24',
  '32px': 'tide-font-32',
};

export const FONT_WEIGHT = {
  '400 Regular': 'tide-font-400',
  '500 Medium': 'tide-font-500',
  '600 Semibold': 'tide-font-600',
  '700 Bold': 'tide-font-700',
};

export const GAP = {
  '4 REM': 'tide-gap-4',
  '2 REM': 'tide-gap-2',
  '1 REM': 'tide-gap-1',
  '0.5 REM': 'tide-gap-1/2',
  '0.25 REM': 'tide-gap-1/4',
};

export const LINK_SIZE = {
  TWELVE: 'tide-font-12',
  FOURTEEN: 'tide-font-14',
  SIXTEEN: 'tide-font-16',
};

export const MARGIN = {
  'Full 4 REM': 'tide-margin-4',
  'Full 2 REM': 'tide-margin-2',
  'Full 1 REM': 'tide-margin-1',
  'Full 0.5 REM': 'tide-margin-1/2',
  'Full 0.25 REM': 'tide-margin-1/4',

  'X-axis Auto': 'tide-margin-x-auto',
  'X-axis 4 REM': 'tide-margin-x-4',
  'X-axis 2 REM': 'tide-margin-x-2',
  'X-axis 1 REM': 'tide-margin-x-1',
  'X-axis 0.5 REM': 'tide-margin-x-1/2',
  'X-axis 0.25 REM': 'tide-margin-x-1/4',

  'Y-axis 4 REM': 'tide-margin-y-4',
  'Y-axis 2 REM': 'tide-margin-y-2',
  'Y-axis 1 REM': 'tide-margin-y-1',
  'Y-axis 0.5 REM': 'tide-margin-y-1/2',
  'Y-axis 0.25 REM': 'tide-margin-y-1/4',

  'Top 4 REM': 'tide-margin-top-4',
  'Top 2 REM': 'tide-margin-top-2',
  'Top 1 REM': 'tide-margin-top-1',
  'Top 0.5 REM': 'tide-margin-top-1/2',
  'Top 0.25 REM': 'tide-margin-top-1/4',

  'Right Auto': 'tide-margin-right-auto',
  'Right 4 REM': 'tide-margin-right-4',
  'Right 2 REM': 'tide-margin-right-2',
  'Right 1 REM': 'tide-margin-right-1',
  'Right 0.5 REM': 'tide-margin-right-1/2',
  'Right 0.25 REM': 'tide-margin-right-1/4',

  'Bottom 4 REM': 'tide-margin-bottom-4',
  'Bottom 2 REM': 'tide-margin-bottom-2',
  'Bottom 1 REM': 'tide-margin-bottom-1',
  'Bottom 0.5 REM': 'tide-margin-bottom-1/2',
  'Bottom 0.25 REM': 'tide-margin-bottom-1/4',

  'Left Auto': 'tide-margin-left-auto',
  'Left 4 REM': 'tide-margin-left-4',
  'Left 2 REM': 'tide-margin-left-2',
  'Left 1 REM': 'tide-margin-left-1',
  'Left 0.5 REM': 'tide-margin-left-1/2',
  'Left 0.25 REM': 'tide-margin-left-1/4',
};

export const PADDING = {
  'Full 4 REM': 'tide-padding-4',
  'Full 2 REM': 'tide-padding-2',
  'Full 1 REM': 'tide-padding-1',
  'Full 0.5 REM': 'tide-padding-1/2',
  'Full 0.25 REM': 'tide-padding-1/4',

  'X-axis 4 REM': 'tide-padding-x-4',
  'X-axis 2 REM': 'tide-padding-x-2',
  'X-axis 1 REM': 'tide-padding-x-1',
  'X-axis 0.5 REM': 'tide-padding-x-1/2',
  'X-axis 0.25 REM': 'tide-padding-x-1/4',

  'Y-axis 4 REM': 'tide-padding-y-4',
  'Y-axis 2 REM': 'tide-padding-y-2',
  'Y-axis 1 REM': 'tide-padding-y-1',
  'Y-axis 0.5 REM': 'tide-padding-y-1/2',
  'Y-axis 0.25 REM': 'tide-padding-y-1/4',

  'Top 4 REM': 'tide-padding-top-4',
  'Top 2 REM': 'tide-padding-top-2',
  'Top 1 REM': 'tide-padding-top-1',
  'Top 0.5 REM': 'tide-padding-top-1/2',
  'Top 0.25 REM': 'tide-padding-top-1/4',

  'Right 4 REM': 'tide-padding-right-4',
  'Right 2 REM': 'tide-padding-right-2',
  'Right 1 REM': 'tide-padding-right-1',
  'Right 0.5 REM': 'tide-padding-right-1/2',
  'Right 0.25 REM': 'tide-padding-right-1/4',

  'Bottom 4 REM': 'tide-padding-bottom-4',
  'Bottom 2 REM': 'tide-padding-bottom-2',
  'Bottom 1 REM': 'tide-padding-bottom-1',
  'Bottom 0.5 REM': 'tide-padding-bottom-1/2',
  'Bottom 0.25 REM': 'tide-padding-bottom-1/4',

  'Left 4 REM': 'tide-padding-left-4',
  'Left 2 REM': 'tide-padding-left-2',
  'Left 1 REM': 'tide-padding-left-1',
  'Left 0.5 REM': 'tide-padding-left-1/2',
  'Left 0.25 REM': 'tide-padding-left-1/4',
};

export const SHADOW = {
  Bottom: 'tide-shadow-bottom',
  Top: 'tide-shadow-top',
};

export const BADGE_TRUSTED = {
  YEARS_5: '5',
  YEARS_10: '10',
  YEARS_15: '15',
};
