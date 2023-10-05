/* eslint vue/sort-keys: 0 */

import type { StoryContext } from '@storybook/vue3';

import * as STORYBOOK from '@/types/Storybook';
import * as STYLES from '@/types/Styles';
import Border from '@/stories/FoundationsBorder.stories';
import BoxShadow from '@/stories/FoundationsBoxShadow.stories';
import Color from '@/stories/FoundationsColor.stories';
import Font from '@/stories/FoundationsTypography.stories';
import Gap from '@/stories/FoundationsGap.stories';
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

const argTypeDimension = {
  control: {
    max: 500,
    min: 100,
    step: 100,
    type: 'number',
  },
  table: {
    defaultValue: { summary: 'None' },
    type: { summary: 'number (px)' },
  },
};

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);
  args.style = formatStyles(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.backgroundColor) classNames.push(args.backgroundColor);
  if (args.borderColor) classNames.push(args.borderColor);
  if (args.borderRadius) classNames.push(args.borderRadius);
  if (args.borderType) classNames.push(args.borderType);
  if (args.display) classNames.push(args.display);
  if (args.flexAxis1) classNames.push(args.flexAxis1);
  if (args.flexAxis2) classNames.push(args.flexAxis2);
  if (args.flexDirection) classNames.push(args.flexDirection);
  if (args.flexGap) classNames.push(args.flexGap);
  if (args.flexWrap) classNames.push('wrap');
  if (args.fontColor) classNames.push(args.fontColor);
  if (args.fontFamily) classNames.push(args.fontFamily);
  if (args.fontSize) classNames.push(args.fontSize);
  if (args.fontWeight) classNames.push(args.fontWeight);
  if (args.margin) classNames.push(args.margin);
  if (args.padding) classNames.push(args.padding);
  if (args.boxShadow) classNames.push(args.boxShadow);

  return classNames.join(' ');
};

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;
  const styles = formatStyles(args);
  const styleAttribute = styles ? ` style="${styles}"` : '';

  return `<div class="${formatClassNames(args)}"${styleAttribute}>${args.children}</div>`;
};

const formatStyles = (args: any) => {
  const styles: string[] = [];

  if (args.width) {
    styles.push(`width: ${args.width}px;`);
  }

  if (args.height) {
    styles.push(`height: ${args.height}px;`);
  }

  return styles.length > 0 ? styles.join(' ') : null;
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
    ...Border.argTypes,
    ...BoxShadow.argTypes,
    ...Font.argTypes,
    ...Gap.argTypes,
    backgroundColor: Color.argTypes.backgroundColor,
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
    height: {
      ...argTypeDimension,
      description: 'Apply a "height" to the style attribute<br />(for demonstration purposes only)',
      name: 'Height',
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
    width: {
      ...argTypeDimension,
      description: 'Apply a "width" to the style attribute<br />(for demonstration purposes only)',
      name: 'Width',
    },
  },
  args: {
    backgroundColor: COLOR_BACKGROUND.None,
    borderColor: COLOR_BORDER.None,
    borderRadius: BORDER_RADIUS.None,
    borderType: BORDER_TYPE.None,
    boxShadow: BOX_SHADOW.None,
    children: 'Demo',
    display: DISPLAY.None,
    flexAxis1: FLEX_AXIS1.None,
    flexAxis2: FLEX_AXIS2.None,
    flexDirection: FLEX_DIRECTION.None,
    flexGap: GAP.None,
    flexWrap: undefined,
    fontColor: COLOR_FONT.None,
    fontFamily: FONT_FAMILY.None,
    fontSize: FONT_SIZE.None,
    fontWeight: FONT_WEIGHT.None,
    margin: MARGIN.None,
    padding: PADDING.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Proof of Concept/CSS Utilities Demo',
};

export const Demo = {};
