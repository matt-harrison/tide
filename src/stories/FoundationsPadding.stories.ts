import type { StoryContext } from '@storybook/vue3';

import * as STYLES from '@/types/Storybook';
import { formatArgType, getConstantsByValues, prependNoneAsEmpty } from '@/utilities/storybook';

const PADDING = prependNoneAsEmpty(STYLES.PADDING);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args).join(' ');

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.padding) classNames.push(args.padding);

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
  template:
    '<div class="tide-display-inline-block tide-border-1 sb-bg-blue-light" v-bind="args"><div class="tide-padding-1 sb-bg-white">Demo</div></div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    padding: {
      ...formatArgType({ PADDING }),
      description: 'Applies padding',
      name: 'Padding',
    },
  },
  args: {
    padding: PADDING.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Padding',
};

export const Default = {};

export const Padding4 = {
  args: {
    padding: PADDING['Full 4 REM'],
  },
  name: 'Padding 4 REM',
};

export const Padding2 = {
  args: {
    padding: PADDING['Full 2 REM'],
  },
  name: 'Padding 2 REM',
};

export const Padding1 = {
  args: {
    padding: PADDING['Full 1 REM'],
  },
  name: 'Padding 1 REM',
};

export const PaddingHalf = {
  args: {
    padding: PADDING['Full 0.5 REM'],
  },
  name: 'Padding 0.5 REM',
};

export const PaddingQuarter = {
  args: {
    padding: PADDING['Full 0.25 REM'],
  },
  name: 'Padding 0.25 REM',
};
