import type { StoryContext } from '@storybook/vue3';

import { SPACING_SIDE, SPACING_SIZE } from '@/types/Storybook';

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.side !== undefined && args.size !== undefined) classNames.push(`p${args.side}-${args.size}`);

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
    '<div class="inline-block border-1 border-blue-dark bg-blue-light" v-bind="args"><div class="p-1 bg-white">Demo</div></div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    side: {
      control: 'select',
      description: 'Padding Side',
      options: SPACING_SIDE,
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    size: {
      control: 'select',
      description: 'Padding Size<br />(1 REM equals 16px by default.)',
      options: SPACING_SIZE,
      table: {
        defaultValue: { summary: 'None' },
      },
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Padding',
};

export const Default = {
  parameters,
  render,
};

export const Padding4 = {
  args: {
    side: SPACING_SIDE.Full,
    size: SPACING_SIZE['4 REM'],
  },
  name: '4 REM Padding',
  parameters,
  render,
};

export const Padding2 = {
  args: {
    side: SPACING_SIDE.Full,
    size: SPACING_SIZE['2 REM'],
  },
  name: '2 REM Padding',
  parameters,
  render,
};

export const Padding1 = {
  args: {
    side: SPACING_SIDE.Full,
    size: SPACING_SIZE['1 REM'],
  },
  name: '1 REM Padding',
  parameters,
  render,
};

export const PaddingHalf = {
  args: {
    side: SPACING_SIDE.Full,
    size: SPACING_SIZE['1/2 REM'],
  },
  name: '1/2 REM Padding',
  parameters,
  render,
};

export const PaddingQuarter = {
  args: {
    side: SPACING_SIDE.Full,
    size: SPACING_SIZE['1/4 REM'],
  },
  name: '1/4 REM Padding',
  parameters,
  render,
};
