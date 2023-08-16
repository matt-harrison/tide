import type { StoryContext } from '@storybook/vue3';

import { SPACING_SIDE, SPACING_SIZE } from '@/types/Storybook';
import { getVariableName } from '@/utilities/storybook';

const formatArgs = (args: any) => {
  args.class = `p${args.paddingSide}-${args.paddingSize}`;

  return { args };
};

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  return `<div class="p${args.paddingSide}-${args.paddingSize}">Demo</div>`;
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
    '<div class="inline-block border-1 border-blue-dark bg-blue-light" v-bind="args"><div class="p-1 bg-white">Demo</div></div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    paddingSide: {
      constant: getVariableName({ SPACING_SIDE }),
      control: 'select',
      description: 'Padding Side',
      options: SPACING_SIDE,
    },
    paddingSize: {
      constant: getVariableName({ SPACING_SIZE }),
      control: 'select',
      description: 'Padding Size',
      options: SPACING_SIZE,
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Padding',
};

export const Padding4 = {
  args: {
    paddingSide: SPACING_SIDE.Full,
    paddingSize: '4',
  },
  name: 'p-4',
  parameters,
  render,
};

export const Padding2 = {
  args: {
    paddingSide: SPACING_SIDE.Full,
    paddingSize: '2',
  },
  name: 'p-2',
  parameters,
  render,
};

export const Padding1 = {
  args: {
    paddingSide: SPACING_SIDE.Full,
    paddingSize: '1',
  },
  name: 'p-1',
  parameters,
  render,
};

export const PaddingHalf = {
  args: {
    paddingSide: SPACING_SIDE.Full,
    paddingSize: '1/2',
  },
  name: 'p-1/2',
  parameters,
  render,
};

export const PaddingQuarter = {
  args: {
    paddingSide: SPACING_SIDE.Full,
    paddingSize: '1/4',
  },
  name: 'p-1/4',
  parameters,
  render,
};
