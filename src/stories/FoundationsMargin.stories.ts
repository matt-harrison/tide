import type { StoryContext } from '@storybook/vue3';

import { MARGIN_SIZE, SPACING_SIDE } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);
  args.style = formatStyles(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];
  const hasMargin = args.side !== undefined && args.size !== undefined;
  const hasMarginAuto = args.size === MARGIN_SIZE.Auto;
  const hasMarginAutoValid = getHasMarginAutoValid(args);

  if ((hasMargin && !hasMarginAuto) || hasMarginAutoValid) {
    classNames.push(`m${args.side}-${args.size}`);
  }

  return classNames.join(' ');
};

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;
  const style = ` style="${formatStyles(args)}"`;

  return `<div class="${formatClassNames(args)}"${style}>Demo</div>`;
};

const formatStyles = (args: any) => (getHasMarginAutoValid(args) ? `width: ${args.width}px;` : '');

const getHasMarginAutoValid = (args: any) =>
  args.size === MARGIN_SIZE.Auto &&
  [SPACING_SIDE['Full'], SPACING_SIDE['X-axis'], SPACING_SIDE['Left'], SPACING_SIDE['Right']].includes(args.side);

const getContainerClass = (args: any) => (getHasMarginAutoValid(args) ? '' : 'inline-block');

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
    formatStyles,
    getContainerClass,
  },
  setup() {
    return formatArgs(args);
  },
  template:
    '<div :class="getContainerClass(args)" class="bg-blue-light"><div class="border-1 border-blue-dark p-1 bg-white text-center" :style="formatStyles(args)" v-bind="args">Demo</div></div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    side: {
      control: 'select',
      description: 'Side(s) of box model',
      options: SPACING_SIDE,
      table: {
        defaultValue: { summary: 'Full' },
        type: { summary: 'SPACING_SIDE' },
      },
    },
    size: {
      control: 'select',
      description: 'Margin thickness',
      options: MARGIN_SIZE,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'MARGIN_SIZE' },
      },
    },
    width: {
      control: 'number',
      description: 'Horizontal margin-auto requires explicit width',
      if: { arg: 'size', eq: MARGIN_SIZE.Auto },
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'number (px)' },
      },
    },
  },
  args: {
    side: SPACING_SIDE.Full,
    size: undefined,
    width: 100,
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
    side: SPACING_SIDE.Full,
    size: MARGIN_SIZE['4 REM'],
  },
  name: '4 REM Margin',
};

export const Margin2 = {
  args: {
    side: SPACING_SIDE.Full,
    size: MARGIN_SIZE['2 REM'],
  },
  name: '2 REM Margin',
};

export const Margin1 = {
  args: {
    side: SPACING_SIDE.Full,
    size: MARGIN_SIZE['1 REM'],
  },
  name: '1 REM Margin',
};

export const MarginHalf = {
  args: {
    side: SPACING_SIDE.Full,
    size: MARGIN_SIZE['1/2 REM'],
  },
  name: '1/2 REM Margin',
};

export const MarginQuarter = {
  args: {
    side: SPACING_SIDE.Full,
    size: MARGIN_SIZE['1/4 REM'],
  },
  name: '1/4 REM Margin',
};

export const MarginYAuto = {
  args: {
    side: SPACING_SIDE['X-axis'],
    size: MARGIN_SIZE.Auto,
  },
  name: 'Margin X-axis Auto',
};

export const MarginRightAuto = {
  args: {
    side: SPACING_SIDE.Right,
    size: MARGIN_SIZE.Auto,
  },
};

export const MarginLeftAuto = {
  args: {
    side: SPACING_SIDE.Left,
    size: MARGIN_SIZE.Auto,
  },
};
