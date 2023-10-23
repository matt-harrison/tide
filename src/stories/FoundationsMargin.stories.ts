import type { StoryContext } from '@storybook/vue3';

import * as STYLES from '@/types/StorybookStyles';
import { argTypeDimension, formatArgType, prependNoneAsEmpty } from '@/utilities/storybook';

const MARGIN = prependNoneAsEmpty(STYLES.MARGIN);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);
  args.style = formatStyles(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];
  const hasMarginAuto = getHasMarginAuto(args);

  if (hasMarginAuto) classNames.push('flex', 'axis1-center', 'axis2-center');
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

const getContainerClass = (args: any) => (getHasMarginAuto(args) ? '' : 'inline-block');

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
    '<div :class="getContainerClass(args)" class="bg-blue-light"><div class="border-1 border-blue-dark p-1 bg-white" v-bind="args">Demo</div></div>',
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
    width: {
      ...argTypeDimension,
      description: 'Width is required for Margin Auto<br />(for demonstration purposes only)',
      name: 'Width*',
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

export const Margin3_2 = {
  args: {
    margin: MARGIN['Full 1.5 REM'],
  },
  name: 'Margin 1.5 REM',
};

export const Margin1 = {
  args: {
    margin: MARGIN['Full 1 REM'],
  },
  name: 'Margin 1 REM',
};

export const Margin3_4 = {
  args: {
    margin: MARGIN['Full 0.75 REM'],
  },
  name: 'Margin 0.75 REM',
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

export const MarginEighth = {
  args: {
    margin: MARGIN['Full 0.125 REM'],
  },
  name: 'Margin 0.125 REM',
};

export const MarginYAuto = {
  args: {
    margin: MARGIN['X-axis Auto'],
  },
  name: 'Margin X-axis Auto',
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
