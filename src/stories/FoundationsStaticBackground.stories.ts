import type { StoryContext } from '@storybook/vue3';

import { BACKGROUND_COLOR } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.color) classNames.push(args.color);

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
    color: {
      control: 'select',
      description: 'Background color',
      options: BACKGROUND_COLOR,
      table: {
        defaultValue: { summary: 'None' },
      },
    },
  },
  args: {
    color: BACKGROUND_COLOR.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Background',
};

export const Default = {};

export const BackgroundWhite = {
  args: {
    color: BACKGROUND_COLOR['White'],
  },
  name: 'White',
};

export const BackgroundGrayLight = {
  args: {
    color: BACKGROUND_COLOR['Gray - Light'],
  },
  name: 'Gray - Light',
};

export const BackgroundGray = {
  args: {
    color: BACKGROUND_COLOR['Gray - Medium'],
  },
  name: 'Gray',
};

export const BackgroundGrayDark = {
  args: {
    color: BACKGROUND_COLOR['Gray - Dark'],
  },
  name: 'Gray - Dark',
};

export const BackgroundBlack = {
  args: {
    color: BACKGROUND_COLOR['Black'],
  },
  name: 'Black',
};
