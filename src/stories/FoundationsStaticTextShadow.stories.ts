import type { StoryContext } from '@storybook/vue3';

import { TEXT_SHADOW } from '@/types/Storybook';

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args['shadow-box']) classNames.push(args['shadow-box']);
  if (args['text-shadow']) classNames.push(args['text-shadow']);

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
    'text-shadow': {
      control: 'select',
      description: 'Text Shadow',
      options: TEXT_SHADOW,
      table: {
        defaultValue: { summary: 'None' },
      },
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Shadow/Text Shadow',
};

export const TextShadowOff = {
  args: {
    'text-shadow': TEXT_SHADOW.Off,
  },
  name: 'No Text Shadow',
  parameters,
  render,
};

export const TextShadowOn = {
  args: {
    'text-shadow': TEXT_SHADOW.On,
  },
  name: 'Text Shadow',
  parameters,
  render,
};