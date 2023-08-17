import type { StoryContext } from '@storybook/vue3';

import { SPACING_SIZE } from '@/types/Storybook';

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.gap) classNames.push(`flex gap-${args.gap}`);

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
    '<div class="flex wrap border-1 border-blue-dark bg-blue-light" v-bind="args"><div :key="index" class="p-1 bg-white" v-for="(_child, index) in new Array(20)">Demo</div></div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    gap: {
      control: 'select',
      description: 'Gap',
      options: SPACING_SIZE,
      table: {
        defaultValue: { summary: 'None' },
      },
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Gap',
};

export const Gap4 = {
  args: {
    gap: SPACING_SIZE['4'],
  },
  name: 'gap-4',
  parameters,
  render,
};

export const Gap2 = {
  args: {
    gap: SPACING_SIZE['2'],
  },
  name: 'gap-2',
  parameters,
  render,
};

export const Gap1 = {
  args: {
    gap: SPACING_SIZE['1'],
  },
  name: 'gap-1',
  parameters,
  render,
};

export const GapHalf = {
  args: {
    gap: SPACING_SIZE['1/2'],
  },
  name: 'gap-1/2',
  parameters,
  render,
};

export const GapQuarter = {
  args: {
    gap: SPACING_SIZE['1/4'],
  },
  name: 'gap-1/4',
  parameters,
  render,
};
