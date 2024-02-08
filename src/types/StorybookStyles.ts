/* eslint vue/sort-keys: 0 */
// ^ Storybook controls are based on iterating over object properties instead of array slots (bad form), so these can't be ordered alphabetically.

export const BORDER_RADIUS = {
  '0.125 REM': 'tide-radius-1/8',
  '0.25 REM': 'tide-radius-1/4',
  '0.5 REM': 'tide-radius-1/2',
  '0.75 REM': 'tide-radius-3/4',
  '1 REM': 'tide-radius-1',
  'Full': 'tide-radius-full',
};

export const BORDER_TYPE = {
  '1px': 'tide-border-1',
  '2px': 'tide-border-2',
  'Top': 'tide-border-top',
  'Right': 'tide-border-right',
  'Bottom': 'tide-border-bottom',
  'Left': 'tide-border-left',
};

export const DISPLAY = {
  'Block': 'tide-display-block',
  'Contents': 'tide-contents',
  'Flex': 'tide-display-flex',
  'Grid': 'tide-display-grid',
  'Hidden': 'tide-display-hidden',
  'Inline': 'tide-display-inline',
  'Inline Block': 'tide-display-inline-block',
  'Inline Flex': 'tide-display-inline-flex',
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

export const FONT_FAMILY = {
  Default: 'tide-font-default',
  Title: 'tide-font-title',
};

export const FONT_SIZE = {
  '10px': 'tide-font-10',
  '12px': 'tide-font-12',
  '14px': 'tide-font-14',
  '16px': 'tide-font-16',
  '18px': 'tide-font-18',
  '20px': 'tide-font-20',
  '24px': 'tide-font-24',
  '28px': 'tide-font-28',
  '32px': 'tide-font-32',
};

export const FONT_WEIGHT = {
  '500 Medium': 'tide-font-500',
  '600 Semibold': 'tide-font-600',
  '700 Bold': 'tide-font-700',
};

export const GAP = {
  '4 REM': 'tide-gap-4',
  '2 REM': 'tide-gap-2',
  '1 REM': 'tide-gap-1',
  '1.5 REM': 'tide-gap-3/2',
  '0.75 REM': 'tide-gap-3/4',
  '0.5 REM': 'tide-gap-1/2',
  '0.25 REM': 'tide-gap-1/4',
  '0.125 REM': 'tide-gap-1/8',
};

export const MARGIN = {
  'Full 4 REM': 'tide-margin-4',
  'Full 2 REM': 'tide-margin-2',
  'Full 1.5 REM': 'tide-margin-3/2',
  'Full 1 REM': 'tide-margin-1',
  'Full 0.75 REM': 'tide-margin-3/4',
  'Full 0.5 REM': 'tide-margin-1/2',
  'Full 0.25 REM': 'tide-margin-1/4',
  'Full 0.125 REM': 'tide-margin-1/8',

  'X-axis Auto': 'tide-margin-x-auto',
  'X-axis 4 REM': 'tide-margin-x-4',
  'X-axis 2 REM': 'tide-margin-x-2',
  'X-axis 1.5 REM': 'tide-margin-x-3/2',
  'X-axis 1 REM': 'tide-margin-x-1',
  'X-axis 0.75 REM': 'tide-margin-x-3/4',
  'X-axis 0.5 REM': 'tide-margin-x-1/2',
  'X-axis 0.25 REM': 'tide-margin-x-1/4',
  'X-axis 0.125 REM': 'tide-margin-x-1/8',

  'Y-axis 4 REM': 'tide-margin-y-4',
  'Y-axis 2 REM': 'tide-margin-y-2',
  'Y-axis 1.5 REM': 'tide-margin-y-3/2',
  'Y-axis 1 REM': 'tide-margin-y-1',
  'Y-axis 0.75 REM': 'tide-margin-y-3/4',
  'Y-axis 0.5 REM': 'tide-margin-y-1/2',
  'Y-axis 0.25 REM': 'tide-margin-y-1/4',
  'Y-axis 0.125 REM': 'tide-margin-y-1/8',

  'Top 4 REM': 'tide-margin-top-4',
  'Top 2 REM': 'tide-margin-top-2',
  'Top 1.5 REM': 'tide-margin-top-3/2',
  'Top 1 REM': 'tide-margin-top-1',
  'Top 0.75 REM': 'tide-margin-top-3/4',
  'Top 0.5 REM': 'tide-margin-top-1/2',
  'Top 0.25 REM': 'tide-margin-top-1/4',
  'Top 0.125 REM': 'tide-margin-top-1/8',

  'Right Auto': 'tide-margin-right-auto',
  'Right 4 REM': 'tide-margin-right-4',
  'Right 2 REM': 'tide-margin-right-2',
  'Right 1.5 REM': 'tide-margin-right-3/2',
  'Right 1 REM': 'tide-margin-right-1',
  'Right 0.75 REM': 'tide-margin-right-3/4',
  'Right 0.5 REM': 'tide-margin-right-1/2',
  'Right 0.25 REM': 'tide-margin-right-1/4',
  'Right 0.125 REM': 'tide-margin-right-1/8',

  'Bottom 4 REM': 'tide-margin-bottom-4',
  'Bottom 2 REM': 'tide-margin-bottom-2',
  'Bottom 1.5 REM': 'tide-margin-bottom-3/2',
  'Bottom 1 REM': 'tide-margin-bottom-1',
  'Bottom 0.75 REM': 'tide-margin-bottom-3/4',
  'Bottom 0.5 REM': 'tide-margin-bottom-1/2',
  'Bottom 0.25 REM': 'tide-margin-bottom-1/4',
  'Bottom 0.125 REM': 'tide-margin-bottom-1/8',

  'Left Auto': 'tide-margin-left-auto',
  'Left 4 REM': 'tide-margin-left-4',
  'Left 2 REM': 'tide-margin-left-2',
  'Left 1.5 REM': 'tide-margin-left-3/2',
  'Left 1 REM': 'tide-margin-left-1',
  'Left 0.75 REM': 'tide-margin-left-3/4',
  'Left 0.5 REM': 'tide-margin-left-1/2',
  'Left 0.25 REM': 'tide-margin-left-1/4',
  'Left 0.125 REM': 'tide-margin-left-1/8',
};

export const PADDING = {
  'Full 4 REM': 'tide-padding-4',
  'Full 2 REM': 'tide-padding-2',
  'Full 1.5 REM': 'tide-padding-3/2',
  'Full 1 REM': 'tide-padding-1',
  'Full 0.75 REM': 'tide-padding-3/4',
  'Full 0.5 REM': 'tide-padding-1/2',
  'Full 0.25 REM': 'tide-padding-1/4',
  'Full 0.125 REM': 'tide-padding-1/8',

  'X-axis 4 REM': 'tide-padding-x-4',
  'X-axis 2 REM': 'tide-padding-x-2',
  'X-axis 1.5 REM': 'tide-padding-x-3/2',
  'X-axis 1 REM': 'tide-padding-x-1',
  'X-axis 0.75 REM': 'tide-padding-x-3/4',
  'X-axis 0.5 REM': 'tide-padding-x-1/2',
  'X-axis 0.25 REM': 'tide-padding-x-1/4',
  'X-axis 0.125 REM': 'tide-padding-x-1/8',

  'Y-axis 4 REM': 'tide-padding-y-4',
  'Y-axis 2 REM': 'tide-padding-y-2',
  'Y-axis 1.5 REM': 'tide-padding-y-3/2',
  'Y-axis 1 REM': 'tide-padding-y-1',
  'Y-axis 0.75 REM': 'tide-padding-y-3/4',
  'Y-axis 0.5 REM': 'tide-padding-y-1/2',
  'Y-axis 0.25 REM': 'tide-padding-y-1/4',
  'Y-axis 0.125 REM': 'tide-padding-y-1/8',

  'Top 4 REM': 'tide-padding-top-4',
  'Top 2 REM': 'tide-padding-top-2',
  'Top 1.5 REM': 'tide-padding-top-3/2',
  'Top 1 REM': 'tide-padding-top-1',
  'Top 0.75 REM': 'tide-padding-top-3/4',
  'Top 0.5 REM': 'tide-padding-top-1/2',
  'Top 0.25 REM': 'tide-padding-top-1/4',
  'Top 0.125 REM': 'tide-padding-top-1/8',

  'Right 4 REM': 'tide-padding-right-4',
  'Right 2 REM': 'tide-padding-right-2',
  'Right 1.5 REM': 'tide-padding-right-3/2',
  'Right 1 REM': 'tide-padding-right-1',
  'Right 0.75 REM': 'tide-padding-right-3/4',
  'Right 0.5 REM': 'tide-padding-right-1/2',
  'Right 0.25 REM': 'tide-padding-right-1/4',
  'Right 0.125 REM': 'tide-padding-right-1/8',

  'Bottom 4 REM': 'tide-padding-bottom-4',
  'Bottom 2 REM': 'tide-padding-bottom-2',
  'Bottom 1.5 REM': 'tide-padding-bottom-3/2',
  'Bottom 1 REM': 'tide-padding-bottom-1',
  'Bottom 0.75 REM': 'tide-padding-bottom-3/4',
  'Bottom 0.5 REM': 'tide-padding-bottom-1/2',
  'Bottom 0.25 REM': 'tide-padding-bottom-1/4',
  'Bottom 0.125 REM': 'tide-padding-bottom-1/8',

  'Left 4 REM': 'tide-padding-left-4',
  'Left 2 REM': 'tide-padding-left-2',
  'Left 1.5 REM': 'tide-padding-left-3/2',
  'Left 1 REM': 'tide-padding-left-1',
  'Left 0.75 REM': 'tide-padding-left-3/4',
  'Left 0.5 REM': 'tide-padding-left-1/2',
  'Left 0.25 REM': 'tide-padding-left-1/4',
  'Left 0.125 REM': 'tide-padding-left-1/8',
};

export const SHADOW_BOTTOM = {
  'Level 1': 'tide-shadow-b-1',
  'Level 2': 'tide-shadow-b-2',
  'Level 3': 'tide-shadow-b-3',
  'Level 4': 'tide-shadow-b-4',
  'Level 5': 'tide-shadow-b-5',
};

export const SHADOW_TOP = {
  'Level 1': 'tide-shadow-t-1',
  'Level 2': 'tide-shadow-t-2',
  'Level 3': 'tide-shadow-t-3',
  'Level 4': 'tide-shadow-t-4',
  'Level 5': 'tide-shadow-t-5',
};
