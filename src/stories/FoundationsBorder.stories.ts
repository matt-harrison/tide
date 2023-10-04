import type { StoryContext } from '@storybook/vue3';

import * as STYLES from '@/types/Styles';

import { formatArgType, prependNoneAsEmpty } from '@/utilities/storybook';

const BORDER_RADIUS = prependNoneAsEmpty(STYLES.BORDER_RADIUS);
const BORDER_TYPE = prependNoneAsEmpty(STYLES.BORDER_TYPE);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.radius) classNames.push(args.radius);
  if (args.type) classNames.push(args.type);

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
    radius: {
      ...formatArgType({ BORDER_RADIUS }),
      name: 'Border Radius',
    },
    type: {
      ...formatArgType({ BORDER_TYPE }),
      name: 'Border Type',
    },
  },
  args: {
    radius: BORDER_RADIUS.None,
    type: BORDER_TYPE.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Border',
};

export const Default = {};

export const Border1 = {
  args: {
    type: BORDER_TYPE['1px'],
  },
  name: '1px Border',
};

export const Border2 = {
  args: {
    type: BORDER_TYPE['2px'],
  },
  name: '2px Border',
};

export const BorderTop = {
  args: {
    type: BORDER_TYPE.Top,
  },
  name: 'Top Border',
};

export const BorderRight = {
  args: {
    type: BORDER_TYPE.Right,
  },
  name: 'Right Border',
};

export const BorderBottom = {
  args: {
    type: BORDER_TYPE.Bottom,
  },
  name: 'Bottom Border',
};

export const BorderLeft = {
  args: {
    type: BORDER_TYPE.Left,
  },
  name: 'Left Border',
};

export const RadiusQuarter = {
  args: {
    radius: STYLES.BORDER_RADIUS['1/4'],
    type: BORDER_TYPE['1px'],
  },
  name: '1/4 REM Border Radius',
};

export const RadiusHalf = {
  args: {
    radius: STYLES.BORDER_RADIUS['1/2'],
    type: BORDER_TYPE['1px'],
  },
  name: '1/2 REM Border Radius',
};

export const RadiusFull = {
  args: {
    radius: STYLES.BORDER_RADIUS.Full,
    type: BORDER_TYPE['1'],
  },
  name: 'Full Border Radius',
};

export const Circle = {
  args: {
    radius: STYLES.BORDER_RADIUS.Full,
    type: BORDER_TYPE['1'],
  },
  name: 'Full Radius Border (1/1 Aspect Ratio)',
  parameters,
  render: (args: any) => ({
    setup() {
      return formatArgs(args);
    },
    template:
      '<div class="inline-flex axis1-center axis2-center p-1" style="width: 100px; height: 100px;" v-bind="args">Demo</div>',
    updated() {
      return formatArgs(args);
    },
  }),
};
