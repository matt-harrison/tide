/* eslint vue/sort-keys: 0 */

import type { StoryContext } from '@storybook/vue3';

import {
  BORDER,
  BORDER_RADIUS,
  BOX_SHADOW,
  COLOR_BACKGROUND,
  COLOR_BORDER,
  COLOR_FONT,
  DISPLAY,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
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

  if (args.display) classNames.push(args.display);

  if (args.marginSide !== undefined && args.marginSize !== undefined) {
    classNames.push(`m${args.marginSide}-${args.marginSize}`);
  }

  if (args.borderColor) classNames.push(args.borderColor);
  if (args.borderRadius) classNames.push(args.borderRadius);
  if (args.borderType) classNames.push(args.borderType);

  if (args.paddingSide !== undefined && args.paddingSize !== undefined) {
    classNames.push(`p${args.paddingSide}-${args.paddingSize}`);
  }

  if (args.backgroundColor) classNames.push(args.backgroundColor);
  if (args.shadow) classNames.push(args.shadow);
  if (args.fontColor) classNames.push(args.fontColor);
  if (args.fontFamily) classNames.push(args.fontFamily);
  if (args.fontSize) classNames.push(args.fontSize);
  if (args.fontWeight) classNames.push(args.fontWeight);

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
    backgroundColor: {
      control: 'select',
      description: 'Background color',
      name: 'Background Color',
      options: COLOR_BACKGROUND,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'COLOR_BACKGROUND' },
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
      description: 'Determines severity of rounded corners',
      name: 'Border Radius',
      options: BORDER_RADIUS,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'BORDER_RADIUS' },
      },
    },
    borderType: {
      control: 'select',
      description: 'Determines border width and side selection',
      name: 'Border Type',
      options: BORDER,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'BORDER' },
      },
    },
    display: {
      control: 'select',
      name: 'Display',
      options: DISPLAY,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'DISPLAY' },
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
    fontFamily: {
      control: 'select',
      name: 'Font Family',
      options: FONT_FAMILY,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'FONT_FAMILY' },
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
    fontWeight: {
      control: 'select',
      name: 'Font Weight',
      options: FONT_WEIGHT,
      table: {
        defaultValue: { summary: 'Default' },
        type: { summary: 'FONT_WEIGHT' },
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
      options: MARGIN_SIZE,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'MARGIN_SIDE' },
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
    shadow: {
      control: 'select',
      name: 'Shadow',
      options: BOX_SHADOW,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'BOX_SHADOW' },
      },
    },
  },
  args: {
    backgroundColor: COLOR_BACKGROUND.None,
    borderColor: COLOR_BORDER.None,
    borderRadius: BORDER_RADIUS.None,
    borderType: BORDER.None,
    display: DISPLAY.None,
    fontColor: COLOR_FONT.None,
    fontFamily: FONT_FAMILY.None,
    fontSize: FONT_SIZE.None,
    fontWeight: FONT_WEIGHT.None,
    marginSide: SPACING_SIDE.Full,
    marginSize: MARGIN_SIZE.None,
    paddingSide: SPACING_SIDE.Full,
    paddingSize: SPACING_SIZE.None,
    shadow: BOX_SHADOW.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Proof of Concept/CSS Utilities Demo',
};

export const Demo = {};
