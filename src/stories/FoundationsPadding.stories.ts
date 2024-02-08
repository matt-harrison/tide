import type { StoryContext } from '@storybook/vue3';

import * as STYLES from '@/types/StorybookStyles';
import { formatArgType, prependNoneAsEmpty } from '@/utilities/storybook';

const PADDING = prependNoneAsEmpty(STYLES.PADDING);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.padding) classNames.push(args.padding);

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
  template:
    '<div class="tide-display-inline-block tide-border-1 tide-border-blue-dark tide-bg-blue-light" v-bind="args"><div class="tide-padding-1 tide-bg-white">Demo</div></div>',
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

export const Padding3_2 = {
  args: {
    padding: PADDING['Full 1.5 REM'],
  },
  name: 'Padding 1.5 REM',
};

export const Padding1 = {
  args: {
    padding: PADDING['Full 1 REM'],
  },
  name: 'Padding 1 REM',
};

export const Padding3_4 = {
  args: {
    padding: PADDING['Full 0.75 REM'],
  },
  name: 'Padding 0.75 REM',
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

export const PaddingEighth = {
  args: {
    padding: PADDING['Full 0.125 REM'],
  },
  name: 'Padding 0.125 REM',
};
