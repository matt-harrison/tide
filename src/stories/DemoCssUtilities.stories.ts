/* eslint vue/sort-keys: 0 */

import type { StoryContext } from '@storybook/vue3';

import * as STORYBOOK from '@/types/Storybook';
import * as STYLES from '@/types/Styles';
import { BOOLEAN_UNREQUIRED } from '@/types/Storybook';
import { formatArgType, prependNoneAsEmpty } from '@/utilities/storybook';

const COLOR_BACKGROUND = prependNoneAsEmpty(STORYBOOK.COLOR_BACKGROUND);
const COLOR_BORDER = prependNoneAsEmpty(STORYBOOK.COLOR_BORDER);
const COLOR_FONT = prependNoneAsEmpty(STORYBOOK.COLOR_FONT);
const BORDER_RADIUS = prependNoneAsEmpty(STYLES.BORDER_RADIUS);
const BORDER_TYPE = prependNoneAsEmpty(STYLES.BORDER_TYPE);
const BOX_SHADOW = prependNoneAsEmpty(STYLES.BOX_SHADOW);
const DISPLAY = prependNoneAsEmpty(STYLES.DISPLAY);
const FLEX_AXIS1 = prependNoneAsEmpty(STYLES.FLEX_AXIS1);
const FLEX_AXIS2 = prependNoneAsEmpty(STYLES.FLEX_AXIS2);
const FLEX_DIRECTION = prependNoneAsEmpty(STYLES.FLEX_DIRECTION);
const FONT_FAMILY = prependNoneAsEmpty(STYLES.FONT_FAMILY);
const FONT_SIZE = prependNoneAsEmpty(STYLES.FONT_SIZE);
const FONT_WEIGHT = prependNoneAsEmpty(STYLES.FONT_WEIGHT);
const GAP = prependNoneAsEmpty(STYLES.GAP);
const MARGIN = prependNoneAsEmpty(STYLES.MARGIN);
const PADDING = prependNoneAsEmpty(STYLES.PADDING);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.display) classNames.push(args.display);
  if (args.flexWrap) classNames.push('wrap');
  if (args.flexDirection) classNames.push(args.flexDirection);
  if (args.flexAxis1) classNames.push(args.flexAxis1);
  if (args.flexAxis2) classNames.push(args.flexAxis2);
  if (args.gap) classNames.push(args.gap);
  if (args.margin) classNames.push(args.margin);
  if (args.borderColor) classNames.push(args.borderColor);
  if (args.borderRadius) classNames.push(args.borderRadius);
  if (args.borderType) classNames.push(args.borderType);
  if (args.padding) classNames.push(args.padding);
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

  return `<div class="${formatClassNames(args)}">${args.children}</div>`;
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
  template: `<div v-bind="args">${args.children}</div>`,
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    backgroundColor: {
      control: 'select',
      description: 'Applies a background color',
      name: 'Background Color',
      options: COLOR_BACKGROUND,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'COLOR_BACKGROUND' },
      },
    },
    borderColor: {
      control: 'select',
      description: 'Applies a border color',
      name: 'Border Color',
      options: COLOR_BORDER,
      table: {
        defaultValue: { summary: 'Black' },
        type: { summary: 'COLOR_BORDER' },
      },
    },
    borderRadius: {
      ...formatArgType({ BORDER_RADIUS }),
      description: 'Dictates severity of rounded corners',
      name: 'Border Radius',
    },
    borderType: {
      ...formatArgType({ BORDER_TYPE }),
      description: 'Applies border width and determines to which edge(s) it applies',
      name: 'Border Type',
    },
    children: {
      control: 'text',
      defaultValue: 'Demo',
      description: 'Markup or text content<br />(See "Demo" story for updatable preview)',
      name: 'Children',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'HTML' },
      },
    },
    display: {
      ...formatArgType({ DISPLAY }),
      description: 'Dictates layout rules that govern relationship between element, parent, and/or children',
      name: 'Display',
    },
    flexAxis1: {
      ...formatArgType({ FLEX_AXIS1 }),
      description: 'Dictates alignment of children along primary axis',
      name: 'Flex Axis Primary',
    },
    flexAxis2: {
      ...formatArgType({ FLEX_AXIS2 }),
      description: 'Dictates alignment of children along secondary axis',
      name: 'Flex Axis Secondary',
    },
    flexDirection: {
      ...formatArgType({ FLEX_DIRECTION }),
      description: 'Dictates whether children form a column or a row',
      name: 'Flex Direction',
    },
    flexWrap: {
      control: 'select',
      description: 'Dictates whether overflow content should drop to a new line',
      name: 'Flex Wrap',
      options: BOOLEAN_UNREQUIRED,
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
    },
    fontColor: {
      control: 'select',
      description: 'Applies a font color',
      name: 'Font Color',
      options: COLOR_FONT,
      table: {
        defaultValue: { summary: 'Black' },
        type: { summary: 'COLOR_FONT' },
      },
    },
    fontFamily: {
      ...formatArgType({ FONT_FAMILY }),
      description: 'Applies font(s)',
      name: 'Font Family',
    },
    fontSize: {
      ...formatArgType({ FONT_SIZE }),
      description: `Applies a font size (relative to user's browser settings)`,
      name: 'Font Size',
      table: {
        defaultValue: { summary: '16px' },
        type: { summary: 'FONT_SIZE' },
      },
    },
    fontWeight: {
      ...formatArgType({ FONT_WEIGHT }),
      description: 'Dictates the thickness of the text',
      name: 'Font Weight',
      table: {
        defaultValue: { summary: 'Default' },
        type: { summary: 'FONT_WEIGHT' },
      },
    },
    gap: {
      ...formatArgType({ GAP }),
      description: 'Dictates vertical and/or horizontal spacing between elements within a flexbox container',
      name: 'Gap',
    },
    margin: {
      ...formatArgType({ MARGIN }),
      description: 'Applies a margin',
      name: 'Margin',
    },
    padding: {
      ...formatArgType({ PADDING }),
      description: 'Applies padding',
      name: 'Padding',
    },
    shadow: {
      ...formatArgType({ BOX_SHADOW }),
      description: `Applies a shadow at the element's boundaries`,
      name: 'Shadow',
      options: BOX_SHADOW,
    },
  },
  args: {
    backgroundColor: COLOR_BACKGROUND.None,
    borderColor: COLOR_BORDER.None,
    borderRadius: BORDER_RADIUS.None,
    borderType: BORDER_TYPE.None,
    children: 'Demo',
    display: DISPLAY.None,
    flexAxis1: FLEX_AXIS1.None,
    flexAxis2: FLEX_AXIS1.None,
    flexDirection: FLEX_DIRECTION.None,
    fontColor: COLOR_FONT.None,
    fontFamily: FONT_FAMILY.None,
    fontSize: FONT_SIZE.None,
    fontWeight: FONT_WEIGHT.None,
    gap: GAP.None,
    margin: MARGIN.None,
    padding: PADDING.None,
    shadow: BOX_SHADOW.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Proof of Concept/CSS Utilities Demo',
};

export const Demo = {};
