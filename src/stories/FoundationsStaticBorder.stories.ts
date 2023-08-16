import type { StoryContext } from '@storybook/vue3';

import { BORDER_COLOR, BORDER_RADIUS, BORDER_SIDE, BORDER_SIZE } from '@/types/Storybook';
import { getVariableName } from '@/utilities/storybook';

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.side === BORDER_SIDE.Full) {
    classNames.push(`border-${args.size}`);
  } else if (args.side !== BORDER_SIDE.Full && args['size'] === '1') {
    classNames.push(`border${args.side}`);
  } else {
    classNames.push(`border${args.side}-${args.size}`);
  }

  if (args.color) {
    classNames.push(args.color);
  }

  if (args.radius) {
    classNames.push(args.radius);
  }

  return classNames.join(' ');
};

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
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
      constant: getVariableName({ BORDER_COLOR }),
      control: 'select',
      description: 'Border Color',
      options: BORDER_COLOR,
    },
    radius: {
      constant: getVariableName({ BORDER_RADIUS }),
      control: 'select',
      description: 'Border Radius',
      options: BORDER_RADIUS,
    },
    side: {
      constant: getVariableName({ BORDER_SIDE }),
      control: 'select',
      description: 'Border Side',
      options: BORDER_SIDE,
    },
    size: {
      constant: getVariableName({ BORDER_SIZE }),
      control: 'select',
      description: 'Border Size',
      options: BORDER_SIZE,
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Border',
};

export const Border1 = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1'],
  },
  name: 'border-1',
  parameters,
  render,
};

export const Border2 = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['2'],
  },
  name: 'border-2',
  parameters,
  render,
};

export const BorderBlue = {
  args: {
    color: BORDER_COLOR.Blue,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1'],
  },
  name: 'border-blue',
  parameters,
  render,
};

export const BorderRed = {
  args: {
    color: BORDER_COLOR.Red,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1'],
  },
  name: 'border-red',
  parameters,
  render,
};

export const BorderTop = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Top,
    size: BORDER_SIZE['1'],
  },
  name: 'border-t',
  parameters,
  render,
};

export const BorderRight = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Right,
    size: BORDER_SIZE['1'],
  },
  name: 'border-r',
  parameters,
  render,
};

export const BorderBottom = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Bottom,
    size: BORDER_SIZE['1'],
  },
  name: 'border-b',
  parameters,
  render,
};

export const BorderLeft = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS.None,
    side: BORDER_SIDE.Left,
    size: BORDER_SIZE['1'],
  },
  name: 'border-l',
  parameters,
  render,
};

export const RadiusEighth = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS['1/8'],
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1'],
  },
  name: 'radius-1/8',
  parameters,
  render,
};

export const RadiusQuarter = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS['1/4'],
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1'],
  },
  name: 'radius-1/4',
  parameters,
  render,
};

export const RadiusHalf = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS['1/2'],
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1'],
  },
  name: 'radius-1/2',
  parameters,
  render,
};

export const RadiusThreeQuarters = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS['3/4'],
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1'],
  },
  name: 'radius-3/4',
  parameters,
  render,
};

export const Radius1 = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS['1'],
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1'],
  },
  name: 'radius-1',
  parameters,
  render,
};

export const RadiusFull = {
  args: {
    color: BORDER_COLOR.None,
    radius: BORDER_RADIUS.Full,
    side: BORDER_SIDE.Full,
    size: BORDER_SIZE['1'],
  },
  name: 'radius-full',
  parameters,
  render,
};
