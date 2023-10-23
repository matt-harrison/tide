/* eslint vue/sort-keys: 0 */
// ^ Storybook controls are based on iterating over object properties instead of array slots (bad form), so these can't be ordered alphabetically.

export const BORDER_RADIUS = {
  '0.125 REM': 'radius-1/8',
  '0.25 REM': 'radius-1/4',
  '0.5 REM': 'radius-1/2',
  '0.75 REM': 'radius-3/4',
  '1 REM': 'radius-1',
  'Full': 'radius-full',
};

export const BORDER_TYPE = {
  '1px': 'border-1',
  '2px': 'border-2',
  'Top': 'border-t',
  'Right': 'border-r',
  'Bottom': 'border-b',
  'Left': 'border-l',
};

export const DISPLAY = {
  'Block': 'block',
  'Contents': 'contents',
  'Flex': 'flex',
  'Grid': 'grid',
  'Hidden': 'hidden',
  'Inline': 'inline',
  'Inline Block': 'inline-block',
  'Inline Flex': 'inline-flex',
};

export const FLEX_AXIS1 = {
  Around: 'axis1-around',
  Between: 'axis1-between',
  Center: 'axis1-center',
  End: 'axis1-end',
  Start: 'axis1-start',
};

export const FLEX_AXIS2 = {
  Center: 'axis2-center',
  End: 'axis2-end',
  Normal: 'axis2-normal',
  Start: 'axis2-start',
};

export const FLEX_DIRECTION = {
  Column: 'column',
  Row: 'row',
};

export const FONT_FAMILY = {
  Default: 'font-default',
  Title: 'font-title',
};

export const FONT_SIZE = {
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
  500: 'font-500',
  600: 'font-600',
  700: 'font-700',
};

export const GAP = {
  '4 REM': 'gap-4',
  '2 REM': 'gap-2',
  '1 REM': 'gap-1',
  '1.5 REM': 'gap-3/2',
  '0.75 REM': 'gap-3/4',
  '0.5 REM': 'gap-1/2',
  '0.25 REM': 'gap-1/4',
  '0.125 REM': 'gap-1/8',
};

export const MARGIN = {
  'Full 4 REM': 'm-4',
  'Full 2 REM': 'm-2',
  'Full 1.5 REM': 'm-3/2',
  'Full 1 REM': 'm-1',
  'Full 0.75 REM': 'm-3/4',
  'Full 0.5 REM': 'm-1/2',
  'Full 0.25 REM': 'm-1/4',
  'Full 0.125 REM': 'm-1/8',

  'X-axis Auto': 'mx-auto',
  'X-axis 4 REM': 'mx-4',
  'X-axis 2 REM': 'mx-2',
  'X-axis 1.5 REM': 'mx-3/2',
  'X-axis 1 REM': 'mx-1',
  'X-axis 0.75 REM': 'mx-3/4',
  'X-axis 0.5 REM': 'mx-1/2',
  'X-axis 0.25 REM': 'mx-1/4',
  'X-axis 0.125 REM': 'mx-1/8',

  'Y-axis 4 REM': 'my-4',
  'Y-axis 2 REM': 'my-2',
  'Y-axis 1.5 REM': 'my-3/2',
  'Y-axis 1 REM': 'my-1',
  'Y-axis 0.75 REM': 'my-3/4',
  'Y-axis 0.5 REM': 'my-1/2',
  'Y-axis 0.25 REM': 'my-1/4',
  'Y-axis 0.125 REM': 'my-1/8',

  'Top 4 REM': 'mt-4',
  'Top 2 REM': 'mt-2',
  'Top 1.5 REM': 'mt-3/2',
  'Top 1 REM': 'mt-1',
  'Top 0.75 REM': 'mt-3/4',
  'Top 0.5 REM': 'mt-1/2',
  'Top 0.25 REM': 'mt-1/4',
  'Top 0.125 REM': 'mt-1/8',

  'Right Auto': 'mr-auto',
  'Right 4 REM': 'mr-4',
  'Right 2 REM': 'mr-2',
  'Right 1.5 REM': 'mr-3/2',
  'Right 1 REM': 'mr-1',
  'Right 0.75 REM': 'mr-3/4',
  'Right 0.5 REM': 'mr-1/2',
  'Right 0.25 REM': 'mr-1/4',
  'Right 0.125 REM': 'mr-1/8',

  'Bottom 4 REM': 'mb-4',
  'Bottom 2 REM': 'mb-2',
  'Bottom 1.5 REM': 'mb-3/2',
  'Bottom 1 REM': 'mb-1',
  'Bottom 0.75 REM': 'mb-3/4',
  'Bottom 0.5 REM': 'mb-1/2',
  'Bottom 0.25 REM': 'mb-1/4',
  'Bottom 0.125 REM': 'mb-1/8',

  'Left Auto': 'ml-auto',
  'Left 4 REM': 'ml-4',
  'Left 2 REM': 'ml-2',
  'Left 1.5 REM': 'ml-3/2',
  'Left 1 REM': 'ml-1',
  'Left 0.75 REM': 'ml-3/4',
  'Left 0.5 REM': 'ml-1/2',
  'Left 0.25 REM': 'ml-1/4',
  'Left 0.125 REM': 'ml-1/8',
};

export const PADDING = {
  'Full 4 REM': 'p-4',
  'Full 2 REM': 'p-2',
  'Full 1.5 REM': 'p-3/2',
  'Full 1 REM': 'p-1',
  'Full 0.75 REM': 'p-3/4',
  'Full 0.5 REM': 'p-1/2',
  'Full 0.25 REM': 'p-1/4',
  'Full 0.125 REM': 'p-1/8',

  'X-axis 4 REM': 'px-4',
  'X-axis 2 REM': 'px-2',
  'X-axis 1.5 REM': 'px-3/2',
  'X-axis 1 REM': 'px-1',
  'X-axis 0.75 REM': 'px-3/4',
  'X-axis 0.5 REM': 'px-1/2',
  'X-axis 0.25 REM': 'px-1/4',
  'X-axis 0.125 REM': 'px-1/8',

  'Y-axis 4 REM': 'py-4',
  'Y-axis 2 REM': 'py-2',
  'Y-axis 1.5 REM': 'py-3/2',
  'Y-axis 1 REM': 'py-1',
  'Y-axis 0.75 REM': 'py-3/4',
  'Y-axis 0.5 REM': 'py-1/2',
  'Y-axis 0.25 REM': 'py-1/4',
  'Y-axis 0.125 REM': 'py-1/8',

  'Top 4 REM': 'pt-4',
  'Top 2 REM': 'pt-2',
  'Top 1.5 REM': 'pt-3/2',
  'Top 1 REM': 'pt-1',
  'Top 0.75 REM': 'pt-3/4',
  'Top 0.5 REM': 'pt-1/2',
  'Top 0.25 REM': 'pt-1/4',
  'Top 0.125 REM': 'pt-1/8',

  'Right 4 REM': 'pr-4',
  'Right 2 REM': 'pr-2',
  'Right 1.5 REM': 'pr-3/2',
  'Right 1 REM': 'pr-1',
  'Right 0.75 REM': 'pr-3/4',
  'Right 0.5 REM': 'pr-1/2',
  'Right 0.25 REM': 'pr-1/4',
  'Right 0.125 REM': 'pr-1/8',

  'Bottom 4 REM': 'pb-4',
  'Bottom 2 REM': 'pb-2',
  'Bottom 1.5 REM': 'pb-3/2',
  'Bottom 1 REM': 'pb-1',
  'Bottom 0.75 REM': 'pb-3/4',
  'Bottom 0.5 REM': 'pb-1/2',
  'Bottom 0.25 REM': 'pb-1/4',
  'Bottom 0.125 REM': 'pb-1/8',

  'Left 4 REM': 'pl-4',
  'Left 2 REM': 'pl-2',
  'Left 1.5 REM': 'pl-3/2',
  'Left 1 REM': 'pl-1',
  'Left 0.75 REM': 'pl-3/4',
  'Left 0.5 REM': 'pl-1/2',
  'Left 0.25 REM': 'pl-1/4',
  'Left 0.125 REM': 'pl-1/8',
};

export const SHADOW_BOTTOM = {
  'Level 1': 'shadow-b-1',
  'Level 2': 'shadow-b-2',
  'Level 3': 'shadow-b-3',
  'Level 4': 'shadow-b-4',
  'Level 5': 'shadow-b-5',
};

export const SHADOW_TOP = {
  'Level 1': 'shadow-t-1',
  'Level 2': 'shadow-t-2',
  'Level 3': 'shadow-t-3',
  'Level 4': 'shadow-t-4',
  'Level 5': 'shadow-t-5',
};
