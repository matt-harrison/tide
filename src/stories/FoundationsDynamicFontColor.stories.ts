import type { StoryContext } from '@storybook/vue3';

import { FONT_COLOR_DYNAMIC } from '@/types/Storybook';

const formatClassNames = (args: any) => {
  return `${args.fontColor}`;
};

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
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
    fontColor: {
      control: 'select',
      description: 'Realm-dictated Font Color<br/>(Background color shown for contrast.)',
      options: FONT_COLOR_DYNAMIC,
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Dynamic Utilities/Font Color',
};

export const BackgroundPrimaryTier1 = {
  args: {
    fontColor: FONT_COLOR_DYNAMIC['Primary Tier 1'],
  },
  name: 'bg-primary-tier-1',
  parameters,
  render,
};

export const BackgroundPrimaryTier2 = {
  args: {
    fontColor: FONT_COLOR_DYNAMIC['Primary Tier 2'],
  },
  name: 'bg-primary-tier-2',
  parameters,
  render,
};

export const BackgroundPrimaryTier3 = {
  args: {
    fontColor: FONT_COLOR_DYNAMIC['Primary Tier 3'],
  },
  name: 'bg-primary-tier-3',
  parameters,
  render,
};

export const BackgroundPrimaryVariantTier1 = {
  args: {
    fontColor: FONT_COLOR_DYNAMIC['Primary Variant Tier 1'],
  },
  name: 'bg-primary-variant-tier-1',
  parameters,
  render,
};

export const BackgroundPrimaryVariantTier2 = {
  args: {
    fontColor: FONT_COLOR_DYNAMIC['Primary Variant Tier 2'],
  },
  name: 'bg-primary-variant-tier-2',
  parameters,
  render,
};

export const BackgroundPrimaryVariantTier3 = {
  args: {
    fontColor: FONT_COLOR_DYNAMIC['Primary Variant Tier 3'],
  },
  name: 'bg-primary-variant-tier-3',
  parameters,
  render,
};

export const BackgroundSecondary = {
  args: {
    fontColor: FONT_COLOR_DYNAMIC['Secondary'],
  },
  name: 'bg-secondary',
  parameters,
  render,
};

export const BackgroundTertiary = {
  args: {
    fontColor: FONT_COLOR_DYNAMIC['Tertiary'],
  },
  name: 'bg-tertiary',
  parameters,
  render,
};

export const BackgroundSurface = {
  args: {
    fontColor: FONT_COLOR_DYNAMIC['Surface'],
  },
  name: 'bg-surface',
  parameters,
  render,
};

export const BackgroundSurfaceVariant = {
  args: {
    fontColor: FONT_COLOR_DYNAMIC['Surface Variant'],
  },
  name: 'bg-surface-variant',
  parameters,
  render,
};
