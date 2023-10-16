import type { StoryContext } from '@storybook/vue3';

import * as STYLES from '@/types/StorybookStyles';
import { formatArgType, prependNoneAsEmpty } from '@/utilities/storybook';

const BOX_SHADOW = prependNoneAsEmpty(STYLES.BOX_SHADOW);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.boxShadow) classNames.push(args.boxShadow);

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
    boxShadow: {
      ...formatArgType({ BOX_SHADOW }),
      description: `Applies a shadow at the element's boundaries`,
      name: 'Box Shadow',
    },
  },
  args: {
    boxShadow: BOX_SHADOW.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Box Shadow',
};

export const Default = {};

export const BoxShadowLevel1 = {
  args: {
    boxShadow: BOX_SHADOW['Level 1'],
  },
};

export const BoxShadowLevel2 = {
  args: {
    boxShadow: BOX_SHADOW['Level 2'],
  },
};
