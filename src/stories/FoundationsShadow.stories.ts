import type { StoryContext } from '@storybook/vue3';

import * as STYLES from '@/types/Storybook';
import { formatArgType, getConstantsByValues, prependNoneAsEmpty } from '@/utilities/storybook';

const SHADOW = prependNoneAsEmpty(STYLES.SHADOW);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args).join(' ');

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.shadow) classNames.push(args.shadow);

  return classNames;
};

const formatClassNamesSnippet = (args: any) => {
  const classNames = formatClassNames(args);

  return getConstantsByValues(classNames);
};

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;
  const classNames = formatClassNamesSnippet(args);

  return classNames.length ? `<div :class="[${classNames.join(', ')}]">Demo</div>` : '<div>Demo</div>';
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
  template: '<div class="tide-display-inline-block tide-padding-1" v-bind="args">Demo</div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    shadow: {
      ...formatArgType({ SHADOW }),
      description: `Applies a shadow at the element's top or bottom boundary.<br />(Top shadows are for sticky footers only.)`,
      name: 'Shadow',
    },
  },
  args: {
    shadow: SHADOW.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Shadow',
};

export const Default = {};

export const ShadowBottom = {
  args: {
    shadow: SHADOW['Bottom'],
  },
};

export const ShadowTop = {
  args: {
    shadow: SHADOW['Top'],
  },
};
