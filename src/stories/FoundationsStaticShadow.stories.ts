import type { StoryContext } from '@storybook/vue3';

import { BOX_SHADOW, TEXT_SHADOW } from '@/types/Storybook';

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args['shadow-box']) classNames.push(args['shadow-box']);
  if (args['shadow-text']) classNames.push(args['shadow-text']);

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
    'shadow-box': {
      control: 'select',
      description: 'Box Shadow',
      options: BOX_SHADOW,
    },
    'shadow-text': {
      control: 'select',
      description: 'Text Shadow',
      options: TEXT_SHADOW,
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Shadow',
};

export const BoxShadow = {
  args: {
    'shadow-box': BOX_SHADOW['shadow-box'],
    'shadow-text': TEXT_SHADOW.None,
  },
  name: 'shadow-box',
  parameters,
  render,
};

export const TextShadow = {
  args: {
    'shadow-box': BOX_SHADOW.None,
    'shadow-text': TEXT_SHADOW['shadow-text'],
  },
  name: 'shadow-text',
  parameters,
  render,
};
