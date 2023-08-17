import type { StoryContext } from '@storybook/vue3';

import { BACKGROUND_COLOR } from '@/types/Storybook';

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.color) classNames.push(args.color);

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
  template: '<div class="inline-block p-1" v-bind="args">Demo</div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    color: {
      control: 'select',
      description: 'Background Color<br/>(font color shown for contrast.)',
      options: BACKGROUND_COLOR,
      table: {
        defaultValue: { summary: 'bg-white' },
      },
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Background',
};

export const BackgroundWhite = {
  args: {
    color: BACKGROUND_COLOR['bg-white'],
  },
  name: 'bg-white (default)',
  parameters,
  render,
};

export const BackgroundGrayLight = {
  args: {
    color: BACKGROUND_COLOR['bg-gray-light'],
  },
  name: 'bg-gray-light',
  parameters,
  render,
};

export const BackgroundGray = {
  args: {
    color: BACKGROUND_COLOR['bg-gray'],
  },
  name: 'bg-gray',
  parameters,
  render,
};

export const BackgroundGrayDark = {
  args: {
    color: BACKGROUND_COLOR['bg-gray-dark'],
  },
  name: 'bg-gray-dark',
  parameters,
  render,
};

export const BackgroundBlack = {
  args: {
    color: BACKGROUND_COLOR['bg-black'],
  },
  name: 'bg-black',
  parameters,
  render,
};
