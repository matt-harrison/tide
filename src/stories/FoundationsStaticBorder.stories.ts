import type { StoryContext } from '@storybook/vue3';

import { BORDER_RADIUS, BORDER_SIDE, BORDER_SIZE } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];
  const hasBorderSide = args.side;
  const hasBorderSize2 = args.size === BORDER_SIZE['2px'];

  if (hasBorderSize2 || !hasBorderSide) {
    classNames.push(`border${args.size}`);
  } else {
    classNames.push(`border${args.side}`);
  }

  if (args.radius) {
    classNames.push(args.radius);
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
  template: '<div class="inline-block p-1" v-bind="args">Demo</div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    radius: {
      control: 'select',
      description: 'Severity of rounded corners',
      options: BORDER_RADIUS,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'BORDER_RADIUS' },
      },
    },
    side: {
      control: 'select',
      description: 'Side(s) of box model',
      if: {
        arg: 'size',
        neq: BORDER_SIZE['2px'],
      },
      options: BORDER_SIDE,
      table: {
        defaultValue: { summary: 'Full' },
        type: { summary: 'BORDER_SIDE' },
      },
    },
    size: {
      control: 'select',
      description: 'Border thickness',
      options: BORDER_SIZE,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'BORDER_SIZE' },
      },
    },
  },
  args: {
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Border',
};

export const Default = {};

export const Border1 = {
  args: {
    size: BORDER_SIZE['1px'],
  },
  name: '1px Border',
};

export const Border2 = {
  args: {
    size: BORDER_SIZE['2px'],
  },
  name: '2px Border',
};

export const BorderTop = {
  args: {
    side: BORDER_SIDE.Top,
  },
  name: 'Top Border',
};

export const BorderRight = {
  args: {
    side: BORDER_SIDE.Right,
  },
  name: 'Right Border',
};

export const BorderBottom = {
  args: {
    side: BORDER_SIDE.Bottom,
  },
  name: 'Bottom Border',
};

export const BorderLeft = {
  args: {
    side: BORDER_SIDE.Left,
  },
  name: 'Left Border',
};

export const RadiusQuarter = {
  args: {
    radius: BORDER_RADIUS['1/4 REM'],
    size: BORDER_SIZE['1px'],
  },
  name: '1/4 REM Border Radius',
};

export const RadiusHalf = {
  args: {
    radius: BORDER_RADIUS['1/2 REM'],
    size: BORDER_SIZE['1px'],
  },
  name: '1/2 REM Border Radius',
};

export const RadiusFull = {
  args: {
    radius: BORDER_RADIUS.Full,
    size: BORDER_SIZE['1px'],
  },
  name: 'Full Border Radius',
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
