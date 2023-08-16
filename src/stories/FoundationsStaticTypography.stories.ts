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
    },
    family: {
      control: 'select',
      description: 'Font Family',
      options: FONT_FAMILY,
    },
    size: {
      control: 'select',
      description: 'Font Size',
      options: FONT_SIZE,
    },
    weight: {
      control: 'select',
      description: 'Font Weight',
      options: FONT_WEIGHT,
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Typography',
};

export const FontSize16 = {
  args: {
    color: FONT_COLOR.None,
    family: FONT_FAMILY.None,
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.None,
  },
  name: 'font-size-16',
  parameters,
  render,
};
