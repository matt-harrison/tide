import type { StoryContext } from '@storybook/vue3';

import * as STYLES from '@/types/StorybookStyles';
import { formatArgType, prependNoneAsEmpty } from '@/utilities/storybook';

const FONT_SIZE = prependNoneAsEmpty(STYLES.FONT_SIZE);
const FONT_WEIGHT = prependNoneAsEmpty(STYLES.FONT_WEIGHT);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

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
    fontSize: {
      ...formatArgType({ FONT_SIZE }),
      description: `Applies a font size (tide-position-relative to user's browser settings)`,
      name: 'Font Size',
    },
    fontWeight: {
      ...formatArgType({ FONT_WEIGHT }),
      description: 'Dictates the thickness of the text',
      name: 'Font Weight',
    },
  },
  args: {
    fontSize: FONT_SIZE.None,
    fontWeight: FONT_WEIGHT.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Typography',
};

export const Default = {};

export const FontSize10 = {
  args: {
    fontSize: FONT_SIZE['10px'],
  },
  name: 'Font Size 10px',
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

export const FontSize18 = {
  args: {
    fontSize: FONT_SIZE['18px'],
  },
  name: 'Font Size 18px',
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
    fontWeight: FONT_WEIGHT['500 Medium'],
  },
  name: 'Font Weight 500 Medium',
};

export const FontWeight600 = {
  args: {
    fontWeight: FONT_WEIGHT['600 Semibold'],
  },
  name: 'Font Weight 600 Semibold',
};

export const FontWeight700 = {
  args: {
    fontWeight: FONT_WEIGHT['700 Bold'],
  },
  name: 'Font Weight 700 Bold',
};
