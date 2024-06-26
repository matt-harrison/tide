import type { StoryContext } from '@storybook/vue3';

import * as STYLES from '@/types/Storybook';
import { argTypeBooleanUnrequired } from '@/utilities/storybook';
import { formatArgType, getConstantsByValues, prependNoneAsEmpty } from '@/utilities/storybook';

const FLEX_AXIS1 = prependNoneAsEmpty(STYLES.FLEX_AXIS1);
const FLEX_AXIS2 = prependNoneAsEmpty(STYLES.FLEX_AXIS2);
const FLEX_DIRECTION = prependNoneAsEmpty(STYLES.FLEX_DIRECTION);
const GAP = prependNoneAsEmpty(STYLES.GAP);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args).join(' ');

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = ['tide-display-flex'];

  if (args.flexAxis1) classNames.push(args.flexAxis1);
  if (args.flexAxis2) classNames.push(args.flexAxis2);
  if (args.flexDirection) classNames.push(args.flexDirection);
  if (args.flexGap) classNames.push(args.flexGap);
  if (args.flexWrap) classNames.push('tide-flex-wrap');

  return classNames;
};

const formatClassNamesSnippet = (args: any) => {
  const classNames = formatClassNames(args);

  return getConstantsByValues(classNames);
};

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;
  const classNames = formatClassNamesSnippet(args);

  return classNames.length ? `<div :class="[${classNames.join(', ')}]">Demo</div>` : '<div>Demo</div>';
};

const parameters = {
  docs: {
    source: {
      format: false,
      language: 'html',
      transform: formatSnippet,
    },
  },
};

const render = (args: any) => ({
  setup() {
    return formatArgs(args);
  },
  template:
    '<div class="tide-display-inline-flex tide-max-width-full sb-bg-blue-light tide-x-scroll" v-bind="args"><div :key="index" class="tide-border-1 tide-padding-1 sb-bg-white tide-whitespace-nowrap" v-for="(_child, index) in new Array(10)">Demo {{ index + 1 }}</div></div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    flexAxis1: {
      ...formatArgType({ FLEX_AXIS1 }),
      description: 'Dictates alignment of children along primary axis',
      name: 'Flex Axis Primary',
    },
    flexAxis2: {
      ...formatArgType({ FLEX_AXIS2 }),
      description: 'Dictates alignment of children along secondary axis',
      name: 'Flex Axis Secondary',
    },
    flexDirection: {
      ...formatArgType({ FLEX_DIRECTION }),
      description: 'Dictates whether children form a column or a row',
      name: 'Flex Direction',
    },
    flexGap: {
      ...formatArgType({ GAP }),
      description: 'Dictates vertical and/or horizontal spacing between elements within a flexbox container',
      name: 'Flex Gap',
    },
    flexWrap: {
      ...argTypeBooleanUnrequired,
      description: 'Dictates whether overflow content should drop to a new line',
      name: 'Flex Wrap',
    },
  },
  args: {
    flexAxis1: FLEX_AXIS1.None,
    flexAxis2: FLEX_AXIS2.None,
    flexDirection: FLEX_DIRECTION.None,
    flexGap: GAP.None,
    flexWrap: undefined,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Gap',
};

export const Default = {};

export const Gap4NoWrap = {
  args: {
    flexGap: GAP['4 REM'],
  },
  name: 'Gap 4 REM (No Wrap)',
};

export const Gap2NoWrap = {
  args: {
    flexGap: GAP['2 REM'],
  },
  name: 'Gap 2 REM (No Wrap)',
};

export const Gap1NoWrap = {
  args: {
    flexGap: GAP['1 REM'],
  },
  name: 'Gap 1 REM (No Wrap)',
};

export const GapHalfNoWrap = {
  args: {
    flexGap: GAP['0.5 REM'],
  },
  name: 'Gap 0.5 REM (No Wrap)',
};

export const GapQuarterNoWrap = {
  args: {
    flexGap: GAP['0.25 REM'],
  },
  name: 'Gap 0.25 REM (No Wrap)',
};

export const Gap4Wrap = {
  args: {
    flexGap: GAP['4 REM'],
    flexWrap: true,
  },
  name: 'Gap 4 REM (Wrap)',
};

export const Gap2Wrap = {
  args: {
    flexGap: GAP['2 REM'],
    flexWrap: true,
  },
  name: 'Gap 2 REM (Wrap)',
};

export const Gap1Wrap = {
  args: {
    flexGap: GAP['1 REM'],
    flexWrap: true,
  },
  name: 'Gap 1 REM (Wrap)',
};

export const GapHalfWrap = {
  args: {
    flexGap: GAP['0.5 REM'],
    flexWrap: true,
  },
  name: 'Gap 0.5 REM (Wrap)',
};

export const GapQuarterWrap = {
  args: {
    flexGap: GAP['0.25 REM'],
    flexWrap: true,
  },
  name: 'Gap 0.25 REM (Wrap)',
};
