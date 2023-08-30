import type { StoryContext } from '@storybook/vue3';

import { SPACING_SIZE } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.flex === 'On') classNames.push('flex');
  if (args.wrap === 'On') classNames.push('wrap');
  if (args.direction === 'Column') classNames.push('column');
  if (args.direction === 'Row') classNames.push('row');
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
    '<div class="border-1 border-blue-dark max-w-full bg-blue-light x-scroll" v-bind="args"><div :key="index" class="p-1 bg-white whitespace-nowrap" v-for="(_child, index) in new Array(12)">Demo {{ index + 1 }}</div></div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    direction: {
      control: 'select',
      description: 'Flex direction',
      options: ['None', 'Row', 'Column'],
      table: {
        defaultValue: { summary: 'Row' },
      },
    },
    flex: {
      control: 'select',
      description: 'Flexbox display mode',
      options: ['Off', 'On'],
      table: {
        defaultValue: { summary: 'Off' },
      },
    },
    gap: {
      control: 'select',
      description: 'Flex gap',
      options: SPACING_SIZE,
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    wrap: {
      control: 'select',
      description: 'Flex wrap',
      options: ['Off', 'On'],
      table: {
        defaultValue: { summary: 'Off' },
      },
    },
  },
  args: {
    direction: 'Row',
    flex: 'Off',
    gap: SPACING_SIZE.None,
    wrap: 'Off',
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Flex',
};

export const Default = {};

export const GapNone = {
  args: {
    direction: 'Row',
    flex: 'On',
    gap: SPACING_SIZE.None,
    wrap: 'On',
  },
  name: 'Flex Wrap (No Gap)',
};

export const Gap4 = {
  args: {
    direction: 'Row',
    flex: 'On',
    gap: SPACING_SIZE['4 REM'],
    wrap: 'On',
  },
  name: '4 REM Gap',
};

export const Gap2 = {
  args: {
    direction: 'Row',
    flex: 'On',
    gap: SPACING_SIZE['2 REM'],
    wrap: 'On',
  },
  name: '2 REM Gap',
};

export const Gap1 = {
  args: {
    direction: 'Row',
    flex: 'On',
    gap: SPACING_SIZE['1 REM'],
    wrap: 'On',
  },
  name: '1 REM Gap',
};

export const GapHalf = {
  args: {
    direction: 'Row',
    flex: 'On',
    gap: SPACING_SIZE['1/2 REM'],
    wrap: 'On',
  },
  name: '1/2 REM Gap',
};

export const GapQuarter = {
  args: {
    direction: 'Row',
    flex: 'On',
    gap: SPACING_SIZE['1/4 REM'],
    wrap: 'On',
  },
  name: '1/4 REM Gap',
};
