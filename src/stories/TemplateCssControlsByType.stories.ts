import type { StoryContext } from '@storybook/vue3';

import { FONT_SIZE, FONT_COLOR, SPACING_SIDE, SPACING_SIZE } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.marginSide !== undefined && args.marginSize !== undefined) {
    classNames.push(`m${args.marginSide}-${args.marginSize}`);
  }

  if (args.fontColor) classNames.push(args.fontColor);
  if (args.fontSize) classNames.push(args.fontSize);

  if (classNames.length > 0) {
    args.class = classNames.join(' ');
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
  template: '<div v-bind="args">Demo</div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    fontColor: {
      control: 'select',
      name: 'Font Color',
      options: FONT_COLOR,
      table: {
        defaultValue: { summary: 'Black' },
        type: { summary: 'FONT_COLOR' },
      },
    },
    fontSize: {
      control: 'select',
      name: 'Font Size',
      options: FONT_SIZE,
      table: {
        defaultValue: { summary: '16px' },
        type: { summary: 'FONT_SIZE' },
      },
    },
    marginSide: {
      control: 'select',
      name: 'Margin Side',
      options: SPACING_SIDE,
      table: {
        defaultValue: { summary: 'Full' },
        type: { summary: 'SPACING_SIDE' },
      },
    },
    marginSize: {
      control: 'select',
      name: 'Margin Size',
      options: SPACING_SIZE,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'SPACING_SIDE' },
      },
    },
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Proof of Concept/CSS Controls By Type',
};

export const Demo = {
  args: {
    fontColor: FONT_COLOR.None,
    fontSize: FONT_SIZE.None,
    marginSide: SPACING_SIDE.Full,
    marginSize: SPACING_SIZE.None,
  },
};
