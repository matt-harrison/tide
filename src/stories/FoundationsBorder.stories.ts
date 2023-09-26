import type { StoryContext } from '@storybook/vue3';

import { BORDER, BORDER_RADIUS } from '@/types/Storybook';

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
      control: 'select',
      description: 'Determines severity of rounded corners',
      options: BORDER_RADIUS,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'BORDER_RADIUS' },
      },
    },
    type: {
      control: 'select',
      description: 'Determines border width and side selection',
      options: BORDER,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'BORDER' },
      },
    },
  },
  args: {
    radius: BORDER_RADIUS.None,
    type: BORDER.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Border',
};

export const Default = {};

export const Border1 = {
  args: {
    type: BORDER['1px'],
  },
  name: '1px Border',
};

export const Border2 = {
  args: {
    type: BORDER['2px'],
  },
  name: '2px Border',
};

export const BorderTop = {
  args: {
    type: BORDER.Top,
  },
  name: 'Top Border',
};

export const BorderRight = {
  args: {
    type: BORDER.Right,
  },
  name: 'Right Border',
};

export const BorderBottom = {
  args: {
    type: BORDER.Bottom,
  },
  name: 'Bottom Border',
};

export const BorderLeft = {
  args: {
    type: BORDER.Left,
  },
  name: 'Left Border',
};

export const RadiusQuarter = {
  args: {
    radius: BORDER_RADIUS['1/4 REM'],
    type: BORDER['1px'],
  },
  name: '1/4 REM Border Radius',
};

export const RadiusHalf = {
  args: {
    radius: BORDER_RADIUS['1/2 REM'],
    type: BORDER['1px'],
  },
  name: '1/2 REM Border Radius',
};

export const RadiusFull = {
  args: {
    radius: BORDER_RADIUS.Full,
    type: BORDER['1px'],
  },
  name: 'Full Border Radius',
};

export const Circle = {
  args: {
    radius: BORDER_RADIUS.Full,
    type: BORDER['1px'],
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
