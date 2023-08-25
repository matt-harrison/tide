import type { StoryContext } from '@storybook/vue3';

import { FONT_COLOR, FONT_SIZE, FONT_WEIGHT } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.color) classNames.push(args.color);
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
    color: {
      control: 'select',
      description: 'Font color',
      options: FONT_COLOR,
      table: {
        defaultValue: { summary: 'Black' },
        type: { summary: 'FONT_COLOR' },
      },
    },
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
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Typography',
};

export const Default = {
  args: {
    color: FONT_COLOR.None,
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.None,
  },
  parameters,
  render,
};

export const FontColorBlue = {
  args: {
    color: FONT_COLOR.Blue,
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.None,
  },
  name: 'font-color-blue',
  parameters,
  render,
};

export const FontColorRed = {
  args: {
    color: FONT_COLOR.Red,
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.None,
  },
  name: 'font-color-red',
  parameters,
  render,
};

export const FontSize10 = {
  args: {
    color: FONT_COLOR.None,
    size: FONT_SIZE['10px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-10',
  parameters,
  render,
};

export const FontSize12 = {
  args: {
    color: FONT_COLOR.None,
    size: FONT_SIZE['12px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-12',
  parameters,
  render,
};

export const FontSize14 = {
  args: {
    color: FONT_COLOR.None,
    size: FONT_SIZE['14px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-14',
  parameters,
  render,
};

export const FontSize16 = {
  args: {
    color: FONT_COLOR.None,
    size: FONT_SIZE['16px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-16',
  parameters,
  render,
};

export const FontSize18 = {
  args: {
    color: FONT_COLOR.None,
    size: FONT_SIZE['18px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-18',
  parameters,
  render,
};

export const FontSize20 = {
  args: {
    color: FONT_COLOR.None,
    size: FONT_SIZE['20px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-20',
  parameters,
  render,
};

export const FontSize24 = {
  args: {
    color: FONT_COLOR.None,
    size: FONT_SIZE['24px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-24',
  parameters,
  render,
};

export const FontSize28 = {
  args: {
    color: FONT_COLOR.None,
    size: FONT_SIZE['28px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-28',
  parameters,
  render,
};

export const FontSize32 = {
  args: {
    color: FONT_COLOR.None,
    size: FONT_SIZE['32px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-32',
  parameters,
  render,
};

export const FontWeight500 = {
  args: {
    color: FONT_COLOR.None,
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.Medium,
  },
  name: 'font-500',
  parameters,
  render,
};

export const FontWeight600 = {
  args: {
    color: FONT_COLOR.None,
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT['Semi-bold'],
  },
  name: 'font-600',
  parameters,
  render,
};

export const FontWeight700 = {
  args: {
    color: FONT_COLOR.None,
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.Bold,
  },
  name: 'font-700',
  parameters,
  render,
};
