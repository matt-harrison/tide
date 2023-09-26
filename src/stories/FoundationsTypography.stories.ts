import type { StoryContext } from '@storybook/vue3';

import { FONT_SIZE, FONT_WEIGHT } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.size) classNames.push(args.size);
  if (args.weight) classNames.push(args.weight);

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
  template: '<div v-bind="args">Demo</div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    size: {
      control: 'select',
      description: 'Font size',
      options: FONT_SIZE,
      table: {
        defaultValue: { summary: '16px' },
        type: { summary: 'FONT_SIZE' },
      },
    },
    weight: {
      control: 'select',
      description: 'Font weight',
      options: FONT_WEIGHT,
      table: {
        defaultValue: { summary: 'Medium' },
        type: { summary: 'FONT_WEIGHT' },
      },
    },
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Typography',
};

export const Default = {
  args: {
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.None,
  },
};

export const FontSize12 = {
  args: {
    size: FONT_SIZE['12px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'Font Size 12px',
};

export const FontSize14 = {
  args: {
    size: FONT_SIZE['14px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'Font Size 14px',
};

export const FontSize16 = {
  args: {
    size: FONT_SIZE['16px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'Font Size 16px',
};

export const FontSize20 = {
  args: {
    size: FONT_SIZE['20px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'Font Size 20px',
};

export const FontSize24 = {
  args: {
    size: FONT_SIZE['24px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'Font Size 24px',
};

export const FontSize28 = {
  args: {
    size: FONT_SIZE['28px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'Font Size 28px',
};

export const FontSize32 = {
  args: {
    size: FONT_SIZE['32px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'Font Size 32px',
};

export const FontWeight500 = {
  args: {
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.Default,
  },
  name: 'Font Weight 500 (Medium)',
};

export const FontWeight700 = {
  args: {
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.Bold,
  },
  name: 'Font Weight 700 (Bold)',
};
