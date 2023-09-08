/* eslint vue/sort-keys: 0 */

import type { StoryContext } from '@storybook/vue3';

import {
  BORDER_COLOR,
  BORDER_RADIUS,
  BORDER_SIDE,
  BORDER_SIZE,
  FONT_SIZE,
  FONT_COLOR,
  MARGIN_SIZE,
  SPACING_SIDE,
  SPACING_SIZE,
} from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.marginSide !== undefined && args.marginSize !== undefined) {
    classNames.push(`m${args.marginSide}-${args.marginSize}`);
  }

  if (args.borderSide || args.borderSize) classNames.push(`border${args.borderSide}${args.borderSize}`);

  if (args.borderColor) {
    classNames.push(args.borderColor);
  }

  if (args.borderRadius) {
    classNames.push(args.borderRadius);
  }

  if (args.paddingSide !== undefined && args.paddingSize !== undefined) {
    classNames.push(`p${args.paddingSide}-${args.paddingSize}`);
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
      options: MARGIN_SIZE,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'MARGIN_SIDE' },
      },
    },
    borderColor: {
      control: 'select',
      description: 'Border color',
      name: 'Border Color',
      options: BORDER_COLOR,
      table: {
        defaultValue: { summary: 'Black' },
        type: { summary: 'BORDER_COLOR' },
      },
    },
    borderRadius: {
      control: 'select',
      description: 'Severity of rounded corners',
      name: 'Border Radius',
      options: BORDER_RADIUS,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'BORDER_RADIUS' },
      },
    },
    borderSide: {
      control: 'select',
      description: 'Side(s) of box model',
      name: 'Border Side',
      options: BORDER_SIDE,
      table: {
        defaultValue: { summary: 'Full' },
        type: { summary: 'BORDER_SIDE' },
      },
    },
    borderSize: {
      control: 'select',
      description: 'Border thickness',
      name: 'Border Size',
      options: BORDER_SIZE,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'BORDER_SIZE' },
      },
    },
    paddingSide: {
      control: 'select',
      name: 'Padding Side',
      options: SPACING_SIDE,
      table: {
        defaultValue: { summary: 'Full' },
        type: { summary: 'SPACING_SIDE' },
      },
    },
    paddingSize: {
      control: 'select',
      name: 'Padding Size',
      options: SPACING_SIZE,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'SPACING_SIDE' },
      },
    },
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
  },
  args: {
    borderColor: BORDER_COLOR.None,
    borderRadius: BORDER_RADIUS.None,
    borderSide: BORDER_SIDE.Full,
    borderSize: BORDER_SIZE.None,
    fontColor: FONT_COLOR.None,
    fontSize: FONT_SIZE.None,
    marginSide: SPACING_SIDE.Full,
    marginSize: MARGIN_SIZE.None,
    paddingSide: SPACING_SIDE.Full,
    paddingSize: SPACING_SIZE.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Proof of Concept/CSS Controls By Type',
};

export const Demo = {};
