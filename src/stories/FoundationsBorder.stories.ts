import type { StoryContext } from '@storybook/vue3';

import * as STYLES from '@/types/StorybookStyles';
import { formatArgType, prependNoneAsEmpty } from '@/utilities/storybook';

const BORDER_RADIUS = prependNoneAsEmpty(STYLES.BORDER_RADIUS);
const BORDER_SIDE = prependNoneAsEmpty(STYLES.BORDER_SIDE);
const BORDER_WIDTH = prependNoneAsEmpty(STYLES.BORDER_WIDTH);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.borderRadius) classNames.push(args.borderRadius);

  if (args.borderWidth) {
    classNames.push(`${args.borderSide}-${args.borderWidth}`);
  }

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
  template: '<div class="tide-display-inline-block tide-padding-1" v-bind="args">Demo</div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    borderRadius: {
      ...formatArgType({ BORDER_RADIUS }),
      description: 'Dictates severity of rounded corners',
      name: 'Border Radius',
    },
    borderSide: {
      ...formatArgType({ BORDER_SIDE }),
      description: 'Dictates to which edge(s) the border applies',
      name: 'Border Side',
    },
    borderWidth: {
      ...formatArgType({ BORDER_WIDTH }),
      description: 'Applies a border width',
      name: 'Border Width',
    },
  },
  args: {
    borderRadius: BORDER_RADIUS.None,
    borderSide: BORDER_SIDE.Full,
    borderWidth: BORDER_WIDTH.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Border',
};

export const Default = {};

export const BorderTop = {
  args: {
    borderSide: BORDER_SIDE.Top,
    borderWidth: BORDER_WIDTH['1px'],
  },
};

export const BorderRight = {
  args: {
    borderSide: BORDER_SIDE.Right,
    borderWidth: BORDER_WIDTH['1px'],
  },
};

export const BorderBottom = {
  args: {
    borderSide: BORDER_SIDE.Bottom,
    borderWidth: BORDER_WIDTH['1px'],
  },
};

export const BorderLeft = {
  args: {
    borderSide: BORDER_SIDE.Left,
    borderWidth: BORDER_WIDTH['1px'],
  },
};

export const Border1 = {
  args: {
    borderWidth: BORDER_WIDTH['1px'],
  },
  name: 'Border 1px',
};

export const Border2 = {
  args: {
    borderWidth: BORDER_WIDTH['2px'],
  },
  name: 'Border 2px',
};

export const RadiusQuarter = {
  args: {
    borderRadius: BORDER_RADIUS['0.25 REM'],
    borderWidth: BORDER_WIDTH['1px'],
  },
  name: 'Border Radius 0.25 REM',
};

export const RadiusHalf = {
  args: {
    borderRadius: BORDER_RADIUS['0.5 REM'],
    borderWidth: BORDER_WIDTH['1px'],
  },
  name: 'Border Radius 0.5 REM',
};

export const Radius1 = {
  args: {
    borderRadius: BORDER_RADIUS['1 REM'],
    borderWidth: BORDER_WIDTH['1px'],
  },
  name: 'Border Radius 1 REM',
};

export const RadiusFull = {
  args: {
    borderRadius: BORDER_RADIUS.Full,
    borderWidth: BORDER_WIDTH['1px'],
  },
  name: 'Border Radius Full',
};

export const Circle = {
  args: {
    borderRadius: BORDER_RADIUS.Full,
    borderWidth: BORDER_WIDTH['1px'],
  },
  name: 'Border Radius Full (1/1 Aspect Ratio)',
  parameters,
  render: (args: any) => ({
    setup() {
      return formatArgs(args);
    },
    template:
      '<div class="tide-display-inline-flex tide-axis1-center tide-axis2-center tide-padding-1" style="width: 100px; height: 100px;" v-bind="args">Demo</div>',
    updated() {
      return formatArgs(args);
    },
  }),
};
