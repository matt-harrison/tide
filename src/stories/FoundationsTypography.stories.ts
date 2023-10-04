import type { StoryContext } from '@storybook/vue3';

import * as STORYBOOK from '@/types/Storybook';
import * as STYLES from '@/types/Styles';
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

  if (args.color) classNames.push(args.color);
  if (args.family) classNames.push(args.family);
  if (args.size) classNames.push(args.size);
  if (args.weight) classNames.push(args.weight);

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
    color: {
      ...formatArgType({ COLOR_FONT }),
      description: 'Applies a font color',
      name: 'Font Color',
    },
    family: {
      ...formatArgType({ COLOR_FONT }),
      description: 'Applies a font family<br />(Note: All font-family contexts are currently declared as Montserrat.)',
      name: 'Font Family',
    },
    size: {
      ...formatArgType({ FONT_SIZE }),
      description: 'Applies a font size',
      name: 'Font Size',
    },
    weight: {
      ...formatArgType({ COLOR_FONT }),
      description: 'Applies a font weight',
      name: 'Font Weight',
    },
  },
  args: {
    color: COLOR_FONT.None,
    family: FONT_FAMILY.None,
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Typography',
};

export const Default = {};

export const FontSize12 = {
  args: {
    size: FONT_SIZE['12px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'Font Size 12px',
};

export const FontSize14 = {
  args: {
    size: FONT_SIZE['14px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'Font Size 14px',
};

export const FontSize16 = {
  args: {
    size: FONT_SIZE['16px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'Font Size 16px',
};

export const FontSize20 = {
  args: {
    size: FONT_SIZE['20px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'Font Size 20px',
};

export const FontSize24 = {
  args: {
    size: FONT_SIZE['24px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'Font Size 24px',
};

export const FontSize28 = {
  args: {
    size: FONT_SIZE['28px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'Font Size 28px',
};

export const FontSize32 = {
  args: {
    size: FONT_SIZE['32px'],
    weight: FONT_WEIGHT.None,
  },
  name: 'Font Size 32px',
};

export const FontWeight500 = {
  args: {
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.Default,
  },
  name: 'Font Weight 500 (Medium)',
};

export const FontWeight700 = {
  args: {
    size: FONT_SIZE.None,
    weight: FONT_WEIGHT.Bold,
  },
  name: 'Font Weight 700 (Bold)',
};
