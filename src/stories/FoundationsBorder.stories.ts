import type { StoryContext } from '@storybook/vue3';

import * as STYLES from '@/types/Storybook';
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

  if (args.borderSide === BORDER_SIDE.Full && args.borderWidth !== BORDER_WIDTH.None && args.borderRadius)
    classNames.push(args.borderRadius);

  if (args.borderSide && args.borderWidth) {
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
      if: { arg: 'borderSide', eq: BORDER_SIDE.Full },
      /*
      // Storybook can't yet implement the ideal rule:
      if: [
        { arg: 'borderSide', eq: BORDER_SIDE.Full },
        { arg: 'borderWidth', neq: BORDER_SIDE.None },
      ],
      */
      name: 'Border Radius',
    },
    borderSide: {
      ...formatArgType({ BORDER_SIDE }),
      description: 'Dictates to which edge(s) the border applies',
      if: { arg: 'borderWidth', neq: BORDER_WIDTH.None },
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
    borderSide: BORDER_SIDE.None,
    borderWidth: BORDER_WIDTH.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Border',
};

export const Default = {};

export const BorderTop1px = {
  args: {
    borderSide: BORDER_SIDE.Top,
    borderWidth: BORDER_WIDTH['1px'],
  },
  name: 'Border Top 1px',
};

export const BorderRight1px = {
  args: {
    borderSide: BORDER_SIDE.Right,
    borderWidth: BORDER_WIDTH['1px'],
  },
  name: 'Border Right 1px',
};

export const BorderBottom1px = {
  args: {
    borderSide: BORDER_SIDE.Bottom,
    borderWidth: BORDER_WIDTH['1px'],
  },
  name: 'Border Bottom 1px',
};

export const BorderLeft1px = {
  args: {
    borderSide: BORDER_SIDE.Left,
    borderWidth: BORDER_WIDTH['1px'],
  },
  name: 'Border Left 1px',
};

export const BorderFull1px = {
  args: {
    borderSide: BORDER_SIDE.Full,
    borderWidth: BORDER_WIDTH['1px'],
  },
  name: 'Border Full 1px',
};

export const BorderTop2px = {
  args: {
    borderSide: BORDER_SIDE.Top,
    borderWidth: BORDER_WIDTH['2px'],
  },
  name: 'Border Top 2px',
};

export const BorderRight2px = {
  args: {
    borderSide: BORDER_SIDE.Right,
    borderWidth: BORDER_WIDTH['2px'],
  },
  name: 'Border Right 2px',
};

export const BorderBottom2px = {
  args: {
    borderSide: BORDER_SIDE.Bottom,
    borderWidth: BORDER_WIDTH['2px'],
  },
  name: 'Border Bottom 2px',
};

export const BorderLeft2px = {
  args: {
    borderSide: BORDER_SIDE.Left,
    borderWidth: BORDER_WIDTH['2px'],
  },
  name: 'Border Left 2px',
};

export const BorderFull2px = {
  args: {
    borderSide: BORDER_SIDE.Full,
    borderWidth: BORDER_WIDTH['2px'],
  },
  name: 'Border Full 2px',
};

export const RadiusQuarter = {
  args: {
    borderRadius: BORDER_RADIUS['0.25 REM'],
    borderSide: BORDER_SIDE.Full,
    borderWidth: BORDER_WIDTH['1px'],
  },
  name: 'Border Radius 0.25 REM',
};

export const RadiusHalf = {
  args: {
    borderRadius: BORDER_RADIUS['0.5 REM'],
    borderSide: BORDER_SIDE.Full,
    borderWidth: BORDER_WIDTH['1px'],
  },
  name: 'Border Radius 0.5 REM',
};

export const Radius1 = {
  args: {
    borderRadius: BORDER_RADIUS['1 REM'],
    borderSide: BORDER_SIDE.Full,
    borderWidth: BORDER_WIDTH['1px'],
  },
  name: 'Border Radius 1 REM',
};

export const RadiusFull = {
  args: {
    borderRadius: BORDER_RADIUS.Full,
    borderSide: BORDER_SIDE.Full,
    borderWidth: BORDER_WIDTH['1px'],
  },
  name: 'Border Radius Full',
};

export const Circle = {
  args: {
    borderRadius: BORDER_RADIUS.Full,
    borderSide: BORDER_SIDE.Full,
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
