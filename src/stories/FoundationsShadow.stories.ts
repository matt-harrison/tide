import type { StoryContext } from '@storybook/vue3';

import { BOX_SHADOW } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args['shadow']) classNames.push(args['shadow']);

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
    shadow: {
      control: 'select',
      description: 'Box shadow',
      options: BOX_SHADOW,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'BOX_SHADOW' },
      },
    },
  },
  args: {
    shadow: BOX_SHADOW.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Shadow',
};

export const Default = {};
