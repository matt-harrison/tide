import type { StoryContext } from '@storybook/vue3';

import { BOX_SHADOW } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args['box-shadow']) classNames.push(args['box-shadow']);

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
    'box-shadow': {
      control: 'select',
      description: 'Box shadow',
      options: BOX_SHADOW,
      table: {
        defaultValue: { summary: 'Off' },
        type: { summary: 'BOX_SHADOW' },
      },
    },
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Shadow/Box Shadow',
};

export const Default = {
  args: {
    'box-shadow': BOX_SHADOW.Off,
  },
};

export const BoxShadowOn = {
  args: {
    'box-shadow': BOX_SHADOW.On,
  },
};
