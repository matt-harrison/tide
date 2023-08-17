import type { StoryContext } from '@storybook/vue3';

import { FONT_COLOR, FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '@/types/Storybook';

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.color) classNames.push(args.color);
  if (args.family) classNames.push(args.family);
  if (args.size) classNames.push(args.size);
  if (args.weight) classNames.push(args.weight);

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
  template: '<div v-bind="args">Demo</div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    color: {
      control: 'select',
      description: 'Font Color',
      options: FONT_COLOR,
      table: {
        defaultValue: { summary: 'font-black' },
      },
    },
    family: {
      control: 'select',
      description: 'Font Family',
      options: FONT_FAMILY,
      table: {
        defaultValue: { summary: 'font-family-default' },
      },
    },
    size: {
      control: 'select',
      description: 'Font Size',
      options: FONT_SIZE,
      table: {
        defaultValue: { summary: 'font-16' },
      },
    },
    weight: {
      control: 'select',
      description: 'Font Weight',
      options: FONT_WEIGHT,
      table: {
        defaultValue: { summary: 'font-500' },
      },
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Typography',
};

export const FontColorBlack = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY.None,
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.None,
  },
  name: 'font-color-black (default)',
  parameters,
  render,
};

export const FontColorBlue = {
  args: {
    color: FONT_COLOR['font-blue'],
    family: FONT_FAMILY.None,
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.None,
  },
  name: 'font-color-blue',
  parameters,
  render,
};

export const FontColorRed = {
  args: {
    color: FONT_COLOR['font-red'],
    family: FONT_FAMILY.None,
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.None,
  },
  name: 'font-color-red',
  parameters,
  render,
};

export const FontFamilyDefault = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY['font-family-default'],
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.None,
  },
  name: 'font-family-default (default)',
  parameters,
  render,
};

export const FontFamilyTitle = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY['font-family-title'],
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.None,
  },
  name: 'font-family-title',
  parameters,
  render,
};

export const FontSize10 = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY.None,
    size: FONT_SIZE['font-10'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-10',
  parameters,
  render,
};

export const FontSize12 = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY.None,
    size: FONT_SIZE['font-12'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-12',
  parameters,
  render,
};

export const FontSize14 = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY.None,
    size: FONT_SIZE['font-14'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-14',
  parameters,
  render,
};

export const FontSize16 = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY.None,
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-16 (default)',
  parameters,
  render,
};

export const FontSize18 = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY.None,
    size: FONT_SIZE['font-18'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-18',
  parameters,
  render,
};

export const FontSize20 = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY.None,
    size: FONT_SIZE['font-20'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-20',
  parameters,
  render,
};

export const FontSize24 = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY.None,
    size: FONT_SIZE['font-24'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-24',
  parameters,
  render,
};

export const FontSize28 = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY.None,
    size: FONT_SIZE['font-28'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-28',
  parameters,
  render,
};

export const FontSize32 = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY.None,
    size: FONT_SIZE['font-32'],
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-32',
  parameters,
  render,
};

export const FontWeight500 = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY.None,
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT['font-500'],
  },
  name: 'font-500 (default)',
  parameters,
  render,
};

export const FontWeight600 = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY.None,
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT['font-600'],
  },
  name: 'font-600',
  parameters,
  render,
};

export const FontWeight700 = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY.None,
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT['font-700'],
  },
  name: 'font-700',
  parameters,
  render,
};
