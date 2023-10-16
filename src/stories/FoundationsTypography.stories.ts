import type { StoryContext } from '@storybook/vue3';

import * as STORYBOOK from '@/types/Storybook';
import * as STYLES from '@/types/StorybookStyles';
import Color from '@/stories/FoundationsColor.stories';
import { formatArgType, prependNoneAsEmpty } from '@/utilities/storybook';

const COLOR_FONT = prependNoneAsEmpty(STORYBOOK.COLOR_FONT);
const FONT_FAMILY = prependNoneAsEmpty(STYLES.FONT_FAMILY);
const FONT_SIZE = prependNoneAsEmpty(STYLES.FONT_SIZE);
const FONT_WEIGHT = prependNoneAsEmpty(STYLES.FONT_WEIGHT);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

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
    fontColor: Color.argTypes.fontColor,
    fontFamily: {
      ...formatArgType({ FONT_FAMILY }),
      description: 'Applies font(s)<br />(Note: All font-family contexts are currently declared as Montserrat.)',
      name: 'Font Family',
    },
    fontSize: {
      ...formatArgType({ FONT_SIZE }),
      description: `Applies a font size (relative to user's browser settings)`,
      name: 'Font Size',
    },
    fontWeight: {
      ...formatArgType({ FONT_WEIGHT }),
      description: 'Dictates the thickness of the text',
      name: 'Font Weight',
    },
  },
  args: {
    fontColor: COLOR_FONT.None,
    fontFamily: FONT_FAMILY.None,
    fontSize: FONT_SIZE.None,
    fontWeight: FONT_WEIGHT.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Typography',
};

export const Default = {};

export const FontColorSurface = {
  args: {
    fontColor: COLOR_FONT['Surface'],
  },
};

export const FontColorSurfaceVariant = {
  args: {
    fontColor: COLOR_FONT['Surface Variant'],
  },
};

export const FontFamilyDefault = {
  args: {
    fontColor: FONT_FAMILY.Default,
  },
};

export const FontFamilyTitle = {
  args: {
    fontColor: FONT_FAMILY.Title,
  },
};

export const FontSize12 = {
  args: {
    fontSize: FONT_SIZE['12px'],
  },
  name: 'Font Size 12px',
};

export const FontSize14 = {
  args: {
    fontSize: FONT_SIZE['14px'],
  },
  name: 'Font Size 14px',
};

export const FontSize16 = {
  args: {
    fontSize: FONT_SIZE['16px'],
  },
  name: 'Font Size 16px',
};

export const FontSize20 = {
  args: {
    fontSize: FONT_SIZE['20px'],
  },
  name: 'Font Size 20px',
};

export const FontSize24 = {
  args: {
    fontSize: FONT_SIZE['24px'],
  },
  name: 'Font Size 24px',
};

export const FontSize28 = {
  args: {
    fontSize: FONT_SIZE['28px'],
  },
  name: 'Font Size 28px',
};

export const FontSize32 = {
  args: {
    fontSize: FONT_SIZE['32px'],
  },
  name: 'Font Size 32px',
};

export const FontWeight500 = {
  args: {
    fontWeight: FONT_WEIGHT.Default,
  },
  name: 'Font Weight 500 (Medium)',
};

export const FontWeight700 = {
  args: {
    fontWeight: FONT_WEIGHT.Bold,
  },
  name: 'Font Weight 700 (Bold)',
};
