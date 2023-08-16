import type { StoryContext } from '@storybook/vue3';

import { BORDER_COLOR, BORDER_SIDE, BORDER_SIZE } from '@/types/Storybook';
import { getVariableName } from '@/utilities/storybook';

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.borderSide === BORDER_SIDE.Full) {
    classNames.push(`border-${args.borderSize}`);
  } else if (args.borderSide !== BORDER_SIDE.Full && args['borderSize'] === '1') {
    classNames.push(`border${args.borderSide}`);
  } else {
    classNames.push(`border${args.borderSide}-${args.borderSize}`);
  }

  if (args.borderColor) {
    classNames.push(args.borderColor);
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
    borderColor: {
      constant: getVariableName({ BORDER_COLOR }),
      control: 'select',
      description: 'Border Color',
      options: BORDER_COLOR,
    },
    borderSide: {
      constant: getVariableName({ BORDER_SIDE }),
      control: 'select',
      description: 'Border Side',
      options: BORDER_SIDE,
    },
    borderSize: {
      constant: getVariableName({ BORDER_SIZE }),
      control: 'select',
      description: 'Border Size',
      options: BORDER_SIZE,
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Static Utilities/Border',
};

export const BorderBlue = {
  args: {
    borderColor: BORDER_COLOR.Blue,
    borderSide: BORDER_SIDE.Full,
    borderSize: '1',
  },
  name: 'border-blue',
  parameters,
  render,
};

export const BorderRed = {
  args: {
    borderColor: BORDER_COLOR.Red,
    borderSide: BORDER_SIDE.Full,
    borderSize: '1',
  },
  name: 'border-red',
  parameters,
  render,
};

export const BorderTop = {
  args: {
    borderColor: '',
    borderSide: BORDER_SIDE.Top,
    borderSize: '1',
  },
  name: 'border-t',
  parameters,
  render,
};

export const BorderRight = {
  args: {
    borderColor: '',
    borderSide: BORDER_SIDE.Right,
    borderSize: '1',
  },
  name: 'border-r',
  parameters,
  render,
};

export const BorderBottom = {
  args: {
    borderColor: '',
    borderSide: BORDER_SIDE.Bottom,
    borderSize: '1',
  },
  name: 'border-b',
  parameters,
  render,
};

export const BorderLeft = {
  args: {
    borderColor: '',
    borderSide: BORDER_SIDE.Left,
    borderSize: '1',
  },
  name: 'border-l',
  parameters,
  render,
};

export const Border1 = {
  args: {
    borderColor: '',
    borderSide: BORDER_SIDE.Full,
    borderSize: '1',
  },
  name: 'border-1',
  parameters,
  render,
};

export const Border2 = {
  args: {
    borderColor: '',
    borderSide: BORDER_SIDE.Full,
    borderSize: '2',
  },
  name: 'border-2',
  parameters,
  render,
};
