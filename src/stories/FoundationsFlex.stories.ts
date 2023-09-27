import type { StoryContext } from '@storybook/vue3';

import { BOOLEAN_UNREQUIRED, SPACING_SIZE } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = ['flex'];

  if (args.wrap) classNames.push('wrap');
  if (args.gap) classNames.push(`gap-${args.gap}`);

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
    gap: {
      control: 'select',
      description: 'Flex gap',
      options: SPACING_SIZE,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'boolean' },
      },
    },
    wrap: {
      control: 'select',
      description: 'Flex wrap',
      options: BOOLEAN_UNREQUIRED,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    gap: SPACING_SIZE.None,
    wrap: undefined,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Gap',
};

export const Default = {};

export const Gap4NoWrap = {
  args: {
    gap: SPACING_SIZE['4 REM'],
  },
  name: '4 REM Gap (No Wrap)',
};

export const Gap2NoWrap = {
  args: {
    gap: SPACING_SIZE['2 REM'],
  },
  name: '2 REM Gap (No Wrap)',
};

export const Gap1NoWrap = {
  args: {
    gap: SPACING_SIZE['1 REM'],
  },
  name: '1 REM Gap (No Wrap)',
};

export const GapHalfNoWrap = {
  args: {
    gap: SPACING_SIZE['1/2 REM'],
  },
  name: '1/2 REM Gap (No Wrap)',
};

export const GapQuarterNoWrap = {
  args: {
    gap: SPACING_SIZE['1/4 REM'],
  },
  name: '1/4 REM Gap (No Wrap)',
};

export const Gap4Wrap = {
  args: {
    gap: SPACING_SIZE['4 REM'],
    wrap: true,
  },
  name: '4 REM Gap (Wrap)',
};

export const Gap2Wrap = {
  args: {
    gap: SPACING_SIZE['2 REM'],
    wrap: true,
  },
  name: '2 REM Gap (Wrap)',
};

export const Gap1Wrap = {
  args: {
    gap: SPACING_SIZE['1 REM'],
    wrap: true,
  },
  name: '1 REM Gap (Wrap)',
};

export const GapHalfWrap = {
  args: {
    gap: SPACING_SIZE['1/2 REM'],
    wrap: true,
  },
  name: '1/2 REM Gap (Wrap)',
};

export const GapQuarterWrap = {
  args: {
    gap: SPACING_SIZE['1/4 REM'],
    wrap: true,
  },
  name: '1/4 REM Gap (Wrap)',
};
