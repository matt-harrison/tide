import type { StoryContext } from '@storybook/vue3';

import * as STYLES from '@/types/Styles';
import { BOOLEAN_UNREQUIRED } from '@/types/Storybook';
import { formatArgType, prependNoneAsEmpty } from '@/utilities/storybook';

const FLEX_AXIS1 = prependNoneAsEmpty(STYLES.FLEX_AXIS1);
const FLEX_AXIS2 = prependNoneAsEmpty(STYLES.FLEX_AXIS2);
const FLEX_DIRECTION = prependNoneAsEmpty(STYLES.FLEX_DIRECTION);
const GAP = prependNoneAsEmpty(STYLES.GAP);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = ['flex'];

  if (args.flexAxis1) classNames.push(args.flexAxis1);
  if (args.flexAxis2) classNames.push(args.flexAxis2);
  if (args.flexDirection) classNames.push(args.flexDirection);
  if (args.flexGap) classNames.push(args.flexGap);
  if (args.flexWrap) classNames.push('wrap');

  return classNames.join(' ');
};

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  return `<div class="${formatClassNames(args)}">Demo</div>`;
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
    '<div class="inline-flex max-w-full bg-blue-light x-scroll" v-bind="args"><div :key="index" class="border-1 border-blue-dark p-1 bg-white whitespace-nowrap" v-for="(_child, index) in new Array(10)">Demo {{ index + 1 }}</div></div>',
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
      control: 'select',
      description: 'Dictates whether overflow content should drop to a new line',
      name: 'Flex Wrap',
      options: BOOLEAN_UNREQUIRED,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'boolean' },
      },
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
  name: '4 REM Gap (No Wrap)',
};

export const Gap2NoWrap = {
  args: {
    flexGap: GAP['2 REM'],
  },
  name: '2 REM Gap (No Wrap)',
};

export const Gap1NoWrap = {
  args: {
    flexGap: GAP['1 REM'],
  },
  name: '1 REM Gap (No Wrap)',
};

export const GapHalfNoWrap = {
  args: {
    flexGap: GAP['1/2 REM'],
  },
  name: '1/2 REM Gap (No Wrap)',
};

export const GapQuarterNoWrap = {
  args: {
    flexGap: GAP['1/4 REM'],
  },
  name: '1/4 REM Gap (No Wrap)',
};

export const Gap4Wrap = {
  args: {
    flexGap: GAP['4 REM'],
    flexWrap: true,
  },
  name: '4 REM Gap (Wrap)',
};

export const Gap2Wrap = {
  args: {
    flexGap: GAP['2 REM'],
    flexWrap: true,
  },
  name: '2 REM Gap (Wrap)',
};

export const Gap1Wrap = {
  args: {
    flexGap: GAP['1 REM'],
    flexWrap: true,
  },
  name: '1 REM Gap (Wrap)',
};

export const GapHalfWrap = {
  args: {
    flexGap: GAP['1/2 REM'],
    flexWrap: true,
  },
  name: '1/2 REM Gap (Wrap)',
};

export const GapQuarterWrap = {
  args: {
    flexGap: GAP['1/4 REM'],
    flexWrap: true,
  },
  name: '1/4 REM Gap (Wrap)',
};
