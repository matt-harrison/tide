import type { StoryContext } from '@storybook/vue3';

import { SPACING_SIZE } from '@/types/Storybook';

const formatClassNames = (args: any) => {
  const classNames: string[] = ['flex'];

  if (args.wrap === 'On') classNames.push('wrap');
  if (args.direction === 'Column') classNames.push('column');
  if (args.gap) classNames.push(`gap-${args.gap}`);

  return classNames.join(' ');
};

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
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
    '<div class="flex border-1 border-blue-dark max-w-full bg-blue-light x-scroll" v-bind="args"><div :key="index" class="p-1 bg-white whitespace-nowrap" v-for="(_child, index) in new Array(args.direction === \'Column\' ? 5 : 20)">Demo {{ index + 1 }}</div></div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    direction: {
      control: 'select',
      description: 'Flex Direction<br />(For demonstration purposes.)',
      options: ['Row', 'Column'],
      table: {
        defaultValue: { summary: 'Row' },
      },
    },
    gap: {
      control: 'select',
      description: 'Flex Gap',
      options: SPACING_SIZE,
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    wrap: {
      control: 'select',
      description: 'Flex Wrap<br />(For demonstration purposes.)',
      options: ['Off', 'On'],
      table: {
        defaultValue: { summary: 'Off' },
      },
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Flex Gap',
};

export const Default = {
  args: {
    gap: SPACING_SIZE.None,
    wrap: 'Off',
  },
  parameters,
  render,
};

export const GapNone = {
  args: {
    direction: 'Row',
    gap: SPACING_SIZE.None,
    wrap: 'On',
  },
  name: 'Flex Wrap, Gap None',
  parameters,
  render,
};

export const Gap4 = {
  args: {
    direction: 'Row',
    gap: SPACING_SIZE['4'],
    wrap: 'On',
  },
  name: 'gap-4',
  parameters,
  render,
};

export const Gap2 = {
  args: {
    direction: 'Row',
    gap: SPACING_SIZE['2'],
    wrap: 'On',
  },
  name: 'gap-2',
  parameters,
  render,
};

export const Gap1 = {
  args: {
    direction: 'Row',
    gap: SPACING_SIZE['1'],
    wrap: 'On',
  },
  name: 'gap-1',
  parameters,
  render,
};

export const GapHalf = {
  args: {
    direction: 'Row',
    gap: SPACING_SIZE['1/2'],
    wrap: 'On',
  },
  name: 'gap-1/2',
  parameters,
  render,
};

export const GapQuarter = {
  args: {
    direction: 'Row',
    gap: SPACING_SIZE['1/4'],
    wrap: 'On',
  },
  name: 'gap-1/4',
  parameters,
  render,
};
