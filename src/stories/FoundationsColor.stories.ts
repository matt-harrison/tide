import type { StoryContext } from '@storybook/vue3';

import * as STORYBOOK from '@/types/Storybook';
import { formatArgType, prependNoneAsEmpty } from '@/utilities/storybook';

const COLOR_BACKGROUND = prependNoneAsEmpty(STORYBOOK.COLOR_BACKGROUND);
const COLOR_BORDER = prependNoneAsEmpty(STORYBOOK.COLOR_BORDER);
const COLOR_FONT = prependNoneAsEmpty(STORYBOOK.COLOR_FONT);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames = [];

  if (args.backgroundColor) classNames.push(args.backgroundColor);
  if (args.borderColor) classNames.push(`border-1 ${args.borderColor}`);
  if (args.fontColor) classNames.push(args.fontColor);

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
  template: '<div class="inline-block p-1" v-bind="args">Demo</div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    backgroundColor: {
      ...formatArgType({ COLOR_BACKGROUND }),
      description: 'Applies a background color',
      name: 'Background Color',
    },
    borderColor: {
      ...formatArgType({ COLOR_BORDER }),
      description: 'Applies a border color',
      name: 'Border Color',
    },
    fontColor: {
      ...formatArgType({ COLOR_FONT }),
      description: 'Applies a font color',
      name: 'Font Color',
    },
  },
  args: {
    backgroundColor: COLOR_BACKGROUND.None,
    borderColor: COLOR_BORDER.None,
    fontColor: COLOR_FONT.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Color',
};

export const Default = {};

export const BackgroundColorSurfaceLow = {
  args: {
    backgroundColor: COLOR_BACKGROUND['Surface Low'],
  },
};

export const BackgroundColorSurfaceDefault = {
  args: {
    backgroundColor: COLOR_BACKGROUND['Surface'],
  },
};

export const BackgroundColorSurfaceHigh = {
  args: {
    backgroundColor: COLOR_BACKGROUND['Surface High'],
  },
};

export const BackgroundColorSurfaceVariantLowest = {
  args: {
    backgroundColor: COLOR_BACKGROUND['Surface Variant Lowest'],
  },
};

export const BackgroundColorSurfaceVariantLow = {
  args: {
    backgroundColor: COLOR_BACKGROUND['Surface Variant Low'],
  },
};

export const BackgroundColorSurfaceVariantDefault = {
  args: {
    backgroundColor: COLOR_BACKGROUND['Surface Variant'],
  },
};

export const BackgroundColorSurfaceVariantHigh = {
  args: {
    backgroundColor: COLOR_BACKGROUND['Surface Variant High'],
  },
};

export const BackgroundColorSurfaceVariantHighest = {
  args: {
    backgroundColor: COLOR_BACKGROUND['Surface Variant Highest'],
  },
};

export const BorderColorSurfaceLow = {
  args: {
    borderColor: COLOR_BORDER['Surface Low'],
  },
};

export const BorderColorSurface = {
  args: {
    borderColor: COLOR_BORDER['Surface'],
  },
};

export const BorderColorSurfaceHigh = {
  args: {
    borderColor: COLOR_BORDER['Surface High'],
  },
};

export const BorderColorSurfaceSave = {
  args: {
    borderColor: COLOR_BORDER['Surface Save'],
  },
};

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
