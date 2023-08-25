import type { StoryContext } from '@storybook/vue3';

import { BORDER_COLOR, BORDER_RADIUS, BORDER_SIDE, BORDER_SIZE } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.side || args.size) classNames.push(`border${args.side}${args.size}`);

  if (args.color) {
    classNames.push(args.color);
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
    color: {
      control: 'select',
      description: 'Border color',
      options: BORDER_COLOR,
      table: {
        defaultValue: { summary: 'Black' },
        type: { summary: 'BORDER_COLOR' },
      },
    },
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
    side: BORDER_SIDE.Full,
  },
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Border',
};

export const Default = {
  parameters,
  render,
};

export const Border1 = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1px'],
  },
  name: '1px Border',
  parameters,
  render,
};

export const Border2 = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['2px'],
  },
  name: '2px Border',
  parameters,
  render,
};

export const BorderBlack = {
  args: {
    color: BORDER_COLOR.Black,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1px'],
  },
  name: 'Black Border',
  parameters,
  render,
};

export const BorderBlue = {
  args: {
    color: BORDER_COLOR.Blue,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1px'],
  },
  name: 'Blue Border',
  parameters,
  render,
};

export const BorderRed = {
  args: {
    color: BORDER_COLOR.Red,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1px'],
  },
  name: 'Red Border',
  parameters,
  render,
};

export const BorderTop = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Top,
    size: BORDER_SIZE.None,
  },
  name: 'Top Border',
  parameters,
  render,
};

export const BorderRight = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Right,
    size: BORDER_SIZE.None,
  },
  name: 'Right Border',
  parameters,
  render,
};

export const BorderBottom = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Bottom,
    size: BORDER_SIZE.None,
  },
  name: 'Bottom Border',
  parameters,
  render,
};

export const BorderLeft = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Left,
    size: BORDER_SIZE.None,
  },
  name: 'Left Border',
  parameters,
  render,
};

export const RadiusQuarter = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS['1/4 REM'],
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1px'],
  },
  name: '1/4 REM Border Radius',
  parameters,
  render,
};

export const RadiusHalf = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS['1/2 REM'],
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1px'],
  },
  name: '1/2 REM Border Radius',
  parameters,
  render,
};

export const Radius1 = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS['1 REM'],
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1px'],
  },
  name: '1 REM Border Radius',
  parameters,
  render,
};

export const RadiusFull = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS.Full,
    side: BORDER_SIDE.Full,
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
