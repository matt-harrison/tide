import type { StoryContext } from '@storybook/vue3';

import * as STORYBOOK from '@/types/Storybook';
import * as STYLES from '@/types/StorybookStyles';
import Color from '@/stories/FoundationsColor.stories';
import { formatArgType, prependNoneAsEmpty } from '@/utilities/storybook';

const COLOR_BORDER = prependNoneAsEmpty(STORYBOOK.COLOR_BORDER);
const BORDER_RADIUS = prependNoneAsEmpty(STYLES.BORDER_RADIUS);
const BORDER_TYPE = prependNoneAsEmpty(STYLES.BORDER_TYPE);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.borderColor) classNames.push(args.borderColor);
  if (args.borderRadius) classNames.push(args.borderRadius);
  if (args.borderType) classNames.push(args.borderType);

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
    borderColor: Color.argTypes.borderColor,
    borderRadius: {
      ...formatArgType({ BORDER_RADIUS }),
      description: 'Dictates severity of rounded corners',
      name: 'Border Radius',
    },
    borderType: {
      ...formatArgType({ BORDER_TYPE }),
      description: 'Applies border width and determines to which edge(s) it applies',
      name: 'Border Type',
    },
  },
  args: {
    borderColor: COLOR_BORDER.None,
    borderRadius: BORDER_RADIUS.None,
    borderType: BORDER_TYPE.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Border',
};

export const Default = {};

export const Border1 = {
  args: {
    borderType: BORDER_TYPE['1px'],
  },
  name: 'Border 1px',
};

export const Border2 = {
  args: {
    borderType: BORDER_TYPE['2px'],
  },
  name: 'Border 2px',
};

export const BorderTop = {
  args: {
    borderType: BORDER_TYPE.Top,
  },
};

export const BorderRight = {
  args: {
    borderType: BORDER_TYPE.Right,
  },
};

export const BorderBottom = {
  args: {
    borderType: BORDER_TYPE.Bottom,
  },
};

export const BorderLeft = {
  args: {
    borderType: BORDER_TYPE.Left,
  },
};

export const RadiusQuarter = {
  args: {
    borderRadius: BORDER_RADIUS['1/4'],
    borderType: BORDER_TYPE['1px'],
  },
  name: 'Border Radius 1/4 REM',
};

export const RadiusHalf = {
  args: {
    borderRadius: BORDER_RADIUS['1/2'],
    borderType: BORDER_TYPE['1px'],
  },
  name: 'Border Radius 1/2 REM',
};

export const RadiusFull = {
  args: {
    borderRadius: BORDER_RADIUS.Full,
    borderType: BORDER_TYPE['1px'],
  },
  name: 'Border Radius Full',
};

export const Circle = {
  args: {
    borderRadius: BORDER_RADIUS.Full,
    borderType: BORDER_TYPE['1px'],
  },
  name: 'Border Radius Full (1/1 Aspect Ratio)',
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
