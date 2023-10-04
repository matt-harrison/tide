import type { StoryContext } from '@storybook/vue3';

import { SPACING_SIDE, SPACING_SIZE } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.side !== undefined && args.size !== undefined) classNames.push(`p${args.side}-${args.size}`);

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
    '<div class="inline-block border-1 border-blue-dark bg-blue-light" v-bind="args"><div class="p-1 bg-white">Demo</div></div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    side: {
      control: 'select',
      description: 'Side(s) of box model',
      name: 'Padding Side',
      options: SPACING_SIDE,
      table: {
        defaultValue: { summary: 'Full' },
        type: { summary: 'SPACING_SIDE' },
      },
    },
    size: {
      control: 'select',
      description: 'Padding thickness',
      name: 'Padding Size',
      options: SPACING_SIZE,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'SPACING_SIZE' },
      },
    },
  },
  args: {
    side: SPACING_SIDE.Full,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Padding',
};

export const Default = {};

export const Padding4 = {
  args: {
    side: SPACING_SIDE.Full,
    size: SPACING_SIZE['4 REM'],
  },
  name: '4 REM Padding',
};

export const Padding2 = {
  args: {
    side: SPACING_SIDE.Full,
    size: SPACING_SIZE['2 REM'],
  },
  name: '2 REM Padding',
};

export const Padding1 = {
  args: {
    side: SPACING_SIDE.Full,
    size: SPACING_SIZE['1 REM'],
  },
  name: '1 REM Padding',
};

export const PaddingHalf = {
  args: {
    side: SPACING_SIDE.Full,
    size: SPACING_SIZE['1/2 REM'],
  },
  name: '1/2 REM Padding',
};

export const PaddingQuarter = {
  args: {
    side: SPACING_SIDE.Full,
    size: SPACING_SIZE['1/4 REM'],
  },
  name: '1/4 REM Padding',
};
