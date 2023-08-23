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
      description: 'Background Color<br/>(Font color shown for demonstration purposes.)',
      options: BACKGROUND_COLOR,
      table: {
        defaultValue: { summary: 'White' },
      },
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Background',
};

export const Default = {
  parameters,
  render,
};

export const BackgroundWhite = {
  args: {
    color: BACKGROUND_COLOR['White'],
  },
  name: 'White',
  parameters,
  render,
};

export const BackgroundGrayLight = {
  args: {
    color: BACKGROUND_COLOR['Gray - Light'],
  },
  name: 'Gray - Light',
  parameters,
  render,
};

export const BackgroundGray = {
  args: {
    color: BACKGROUND_COLOR['Gray - Medium'],
  },
  name: 'Gray',
  parameters,
  render,
};

export const BackgroundGrayDark = {
  args: {
    color: BACKGROUND_COLOR['Gray - Dark'],
  },
  name: 'Gray - Dark',
  parameters,
  render,
};

export const BackgroundBlack = {
  args: {
    color: BACKGROUND_COLOR['Black'],
  },
  name: 'Black',
  parameters,
  render,
};
