import type { StoryContext } from '@storybook/vue3';

import { COLOR_BACKGROUND, COLOR_BORDER, COLOR_FONT } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames = [];

  if (args.background) classNames.push(args.background);
  if (args.border) classNames.push(`border-1 ${args.border}`);
  if (args.font) classNames.push(args.font);

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
  template: '<div class="inline-block p-1" v-bind="args">Demo</div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    background: {
      control: 'select',
      description: 'Context-specific background color',
      options: COLOR_BACKGROUND,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'COLOR_BACKGROUND' },
      },
    },
    border: {
      control: 'select',
      description: 'Context-specific border color',
      options: COLOR_BORDER,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'COLOR_BORDER' },
      },
    },
    font: {
      control: 'select',
      description: 'Context-specific font color',
      options: COLOR_FONT,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'COLOR_FONT' },
      },
    },
  },
  args: {
    background: COLOR_BACKGROUND.None,
    border: COLOR_BORDER.None,
    font: COLOR_FONT.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Color',
};

export const Default = {};

export const BackgroundSurface = {
  args: {
    background: COLOR_BACKGROUND['Surface'],
  },
};

export const BackgroundSurfaceLight = {
  args: {
    background: COLOR_BACKGROUND['Surface Light'],
  },
};

export const BackgroundSurfaceDark = {
  args: {
    background: COLOR_BACKGROUND['Surface Dark'],
  },
};

export const BorderSurface = {
  args: {
    border: COLOR_BORDER['Surface'],
  },
};

export const BorderSurfaceLight = {
  args: {
    border: COLOR_BORDER['Surface Light'],
  },
};

export const BorderSurfaceDark = {
  args: {
    border: COLOR_BORDER['Surface Dark'],
  },
};

export const BorderSurfaceSave = {
  args: {
    border: COLOR_BORDER['Surface Save'],
  },
};

export const FontSurface = {
  args: {
    font: COLOR_FONT['Surface'],
  },
};

export const FontSurfaceVariant = {
  args: {
    font: COLOR_FONT['Surface Variant'],
  },
};
