import type { StoryContext } from '@storybook/vue3';

import * as STYLES from '@/types/Storybook';
import { formatArgType, prependNoneAsEmpty } from '@/utilities/storybook';

const MARGIN = prependNoneAsEmpty(STYLES.MARGIN);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);
  args.style = formatStyles(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];
  const hasMarginAuto = getHasMarginAuto(args);

  if (hasMarginAuto) classNames.push('tide-display-flex', 'tide-axis1-center', 'tide-axis2-center');
  if (args.margin) classNames.push(args.margin);

  return classNames.join(' ');
};

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;
  const styles = formatStyles(args);
  const styleAttribute = styles ? ` style="${styles}"` : '';

  return `<div class="${formatClassNames(args)}"${styleAttribute}>Demo</div>`;
};

const formatStyles = (args: any) => {
  const styles: string[] = [];
  const hasMarginAuto = getHasMarginAuto(args);

  if (hasMarginAuto) {
    styles.push(`width: ${args.width ? args.width : '100'}px;`);
    styles.push('height: 100px;');
  }

  return styles.length > 0 ? styles.join(' ') : null;
};

const getHasMarginAuto = (args: any) =>
  [MARGIN['X-axis Auto'], MARGIN['Left Auto'], MARGIN['Right Auto']].includes(args.margin);

const getContainerClass = (args: any) => (getHasMarginAuto(args) ? '' : 'tide-display-inline-block');

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
  methods: {
    getContainerClass,
  },
  setup() {
    return formatArgs(args);
  },
  template:
    '<div :class="getContainerClass(args)" class="sb-bg-blue-light"><div class="tide-border-1 tide-padding-1 sb-bg-white" v-bind="args">Demo</div></div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    margin: {
      ...formatArgType({ MARGIN }),
      description: 'Applies a margin',
      name: 'Margin',
    },
  },
  args: {
    margin: MARGIN.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Margin',
};

export const MarginDefault = {
  name: 'Default',
};

export const Margin4 = {
  args: {
    margin: MARGIN['Full 4 REM'],
  },
  name: 'Margin 4 REM',
};

export const Margin2 = {
  args: {
    margin: MARGIN['Full 2 REM'],
  },
  name: 'Margin 2 REM',
};

export const Margin1 = {
  args: {
    margin: MARGIN['Full 1 REM'],
  },
  name: 'Margin 1 REM',
};

export const MarginHalf = {
  args: {
    margin: MARGIN['Full 0.5 REM'],
  },
  name: 'Margin 0.5 REM',
};

export const MarginQuarter = {
  args: {
    margin: MARGIN['Full 0.25 REM'],
  },
  name: 'Margin 0.25 REM',
};

export const MarginRightAuto = {
  args: {
    margin: MARGIN['Right Auto'],
  },
};

export const MarginLeftAuto = {
  args: {
    margin: MARGIN['Left Auto'],
  },
};

export const MarginXAuto = {
  args: {
    margin: MARGIN['X-axis Auto'],
  },
};
