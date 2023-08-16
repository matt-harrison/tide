import type { StoryContext } from '@storybook/vue3';

import { SPACING_SIDE, SPACING_SIZE } from '@/types/Storybook';
import { getVariableName } from '@/utilities/storybook';

const formatArgs = (args: any) => {
  args.class = `m${args.side}-${args.size}`;

  return { args };
};

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  return `<div class="m${args.side}-${args.size}">Demo</div>`;
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
    '<div class="inline-block bg-blue-light"><div class="border-1 border-blue-dark p-1 bg-white" v-bind="args">Demo</div></div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    side: {
      constant: getVariableName({ SPACING_SIDE }),
      control: 'select',
      description: 'Margin Side',
      options: SPACING_SIDE,
    },
    size: {
      constant: getVariableName({ SPACING_SIZE }),
      control: 'select',
      description: 'Margin Size',
      options: SPACING_SIZE,
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Margin',
};

export const Margin4 = {
  args: {
    side: SPACING_SIDE.Full,
    size: SPACING_SIZE['4'],
  },
  name: 'm-4',
  parameters,
  render,
};

export const Margin2 = {
  args: {
    side: SPACING_SIDE.Full,
    size: SPACING_SIZE['2'],
  },
  name: 'm-2',
  parameters,
  render,
};

export const Margin1 = {
  args: {
    side: SPACING_SIDE.Full,
    size: SPACING_SIZE['1'],
  },
  name: 'm-1',
  parameters,
  render,
};

export const MarginHalf = {
  args: {
    side: SPACING_SIDE.Full,
    size: SPACING_SIZE['1/2'],
  },
  name: 'm-1/2',
  parameters,
  render,
};

export const MarginQuarter = {
  args: {
    side: SPACING_SIDE.Full,
    size: SPACING_SIZE['1/4'],
  },
  name: 'm-1/4',
  parameters,
  render,
};
