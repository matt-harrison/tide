/* eslint vue/sort-keys: 0 */

import type { StoryContext } from '@storybook/vue3';

import {
  BORDER_RADIUS,
  BORDER_SIDE,
  BORDER_SIZE,
  COLOR_BACKGROUND,
  COLOR_BORDER,
  COLOR_FONT,
  FONT_SIZE,
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

  const hasBorderFull = args.borderSide === '';
  const hasBorderSize = args.borderSize !== undefined;
  const hasBorderSize2 = args.borderSize === BORDER_SIZE['2px'];

  if (hasBorderSize2) {
    classNames.push('border-2');
  } else if (!hasBorderFull && hasBorderSize) {
    classNames.push(`border${args.borderSide}`);
  } else if (hasBorderSize) {
    classNames.push(`border${args.borderSize}`);
  }

  if (args.radius) {
    classNames.push(args.radius);
  }

  if (args.borderColor) {
    classNames.push(args.borderColor);
  }

  if (args.borderRadius) {
    classNames.push(args.borderRadius);
  }

  if (args.paddingSide !== undefined && args.paddingSize !== undefined) {
    classNames.push(`p${args.paddingSide}-${args.paddingSize}`);
  }

  if (args.backgroundColor) {
    classNames.push(args.backgroundColor);
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
    backgroundColor: {
      control: 'select',
      description: 'Background color',
      name: 'Background Color',
      options: COLOR_BACKGROUND,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'COLOR_BORDER' },
      },
    },
    borderColor: {
      control: 'select',
      description: 'Border color',
      name: 'Border Color',
      options: COLOR_BORDER,
      table: {
        defaultValue: { summary: 'Black' },
        type: { summary: 'COLOR_BORDER' },
      },
    },
    borderRadius: {
      control: 'select',
      description: 'Severity of rounded corners',
      if: {
        arg: 'borderSide',
        eq: BORDER_SIDE.Full,
      },
      name: 'Border Radius',
      options: BORDER_RADIUS,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'BORDER_RADIUS' },
      },
    },
    borderSide: {
      control: 'select',
      description: 'Border side(s) of box model',
      if: {
        arg: 'borderSize',
        neq: BORDER_SIZE['2px'],
      },
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
      options: COLOR_FONT,
      table: {
        defaultValue: { summary: 'Black' },
        type: { summary: 'COLOR_FONT' },
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
    backgroundColor: COLOR_BACKGROUND.None,
    borderColor: COLOR_BORDER.None,
    borderRadius: BORDER_RADIUS.None,
    borderSide: BORDER_SIDE.Full,
    borderSize: BORDER_SIZE.None,
    fontColor: COLOR_FONT.None,
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
