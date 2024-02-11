/* eslint vue/sort-keys: 0 */

import type { StoryContext } from '@storybook/vue3';

import * as STYLES from '@/types/StorybookStyles';
import Border from '@/stories/FoundationsBorder.stories';
import Font from '@/stories/FoundationsTypography.stories';
import Gap from '@/stories/FoundationsGap.stories';
import Margin from '@/stories/FoundationsMargin.stories';
import Padding from '@/stories/FoundationsPadding.stories';
import Shadow from '@/stories/FoundationsShadow.stories';
import { argTypeDimension, formatArgType, prependKeyValue, prependNoneAsEmpty } from '@/utilities/storybook';

const BORDER_RADIUS = prependNoneAsEmpty(STYLES.BORDER_RADIUS);
const BORDER_SIDE = prependNoneAsEmpty(STYLES.BORDER_SIDE);
const BORDER_WIDTH = prependNoneAsEmpty(STYLES.BORDER_WIDTH);
const DISPLAY = prependKeyValue(STYLES.DISPLAY, { 'None (Unspecified)': '' });
const FLEX_AXIS1 = prependNoneAsEmpty(STYLES.FLEX_AXIS1);
const FLEX_AXIS2 = prependNoneAsEmpty(STYLES.FLEX_AXIS2);
const FLEX_DIRECTION = prependNoneAsEmpty(STYLES.FLEX_DIRECTION);
const FONT_SIZE = prependNoneAsEmpty(STYLES.FONT_SIZE);
const FONT_WEIGHT = prependNoneAsEmpty(STYLES.FONT_WEIGHT);
const GAP = prependNoneAsEmpty(STYLES.GAP);
const MARGIN = prependNoneAsEmpty(STYLES.MARGIN);
const PADDING = prependNoneAsEmpty(STYLES.PADDING);
const SHADOW = prependNoneAsEmpty(STYLES.SHADOW);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);
  args.style = formatStyles(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.borderRadius) classNames.push(args.borderRadius);
  if (args.display) classNames.push(args.display);
  if (args.flexAxis1) classNames.push(args.flexAxis1);
  if (args.flexAxis2) classNames.push(args.flexAxis2);
  if (args.flexDirection) classNames.push(args.flexDirection);
  if (args.flexGap) classNames.push(args.flexGap);
  if (args.flexWrap) classNames.push('tide-flex-wrap');
  if (args.fontSize) classNames.push(args.fontSize);
  if (args.fontWeight) classNames.push(args.fontWeight);
  if (args.margin) classNames.push(args.margin);
  if (args.padding) classNames.push(args.padding);
  if (args.shadow) classNames.push(args.shadow);

  if (args.borderSide && args.borderWidth) {
    classNames.push(`${args.borderSide}${args.borderWidth}`);
  }

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

  if (args.width) styles.push(`width: ${args.width}px;`);
  if (args.height) styles.push(`height: ${args.height}px;`);

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
    ...Shadow.argTypes,
    ...Font.argTypes,
    ...Gap.argTypes,
    ...Padding.argTypes,
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
      ...Margin.argTypes.margin,
    },
    width: {
      ...argTypeDimension,
      description: 'Apply a "width" to the style attribute<br />(for demonstration purposes only)',
      name: 'Width',
    },
  },
  args: {
    borderRadius: BORDER_RADIUS.None,
    borderSide: BORDER_SIDE.None,
    borderWidth: BORDER_WIDTH.None,
    children: 'Demo',
    display: DISPLAY['None (Unspecified)'],
    flexAxis1: FLEX_AXIS1.None,
    flexAxis2: FLEX_AXIS2.None,
    flexDirection: FLEX_DIRECTION.None,
    flexGap: GAP.None,
    flexWrap: undefined,
    fontSize: FONT_SIZE.None,
    fontWeight: FONT_WEIGHT.None,
    margin: MARGIN.None,
    padding: PADDING.None,
    shadow: SHADOW.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Proof of Concept/CSS Utilities Demo',
};

export const Demo = {};
