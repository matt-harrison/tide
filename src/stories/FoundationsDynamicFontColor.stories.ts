import type { StoryContext } from '@storybook/vue3';

import { DYNAMIC_FONT_COLOR } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  return `${args.fontColor}`;
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
      description: 'Realm-dictated Font Color<br/>(Background color shown for demonstration purposes.)',
      options: DYNAMIC_FONT_COLOR,
      table: {
        defaultValue: { summary: 'None' },
      },
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Dynamic Utilities/Font Color',
};

export const BackgroundPrimaryTier1 = {
  args: {
    fontColor: DYNAMIC_FONT_COLOR['Primary Tier 1'],
  },
  name: 'Primary Tier 1',
  parameters,
  render,
};

export const BackgroundPrimaryTier2 = {
  args: {
    fontColor: DYNAMIC_FONT_COLOR['Primary Tier 2'],
  },
  name: 'Primary Tier 2',
  parameters,
  render,
};

export const BackgroundPrimaryTier3 = {
  args: {
    fontColor: DYNAMIC_FONT_COLOR['Primary Tier 3'],
  },
  name: 'Primary Tier 3',
  parameters,
  render,
};

export const BackgroundPrimaryVariantTier1 = {
  args: {
    fontColor: DYNAMIC_FONT_COLOR['Primary Variant Tier 1'],
  },
  name: 'Primary Variant Tier 1',
  parameters,
  render,
};

export const BackgroundPrimaryVariantTier2 = {
  args: {
    fontColor: DYNAMIC_FONT_COLOR['Primary Variant Tier 2'],
  },
  name: 'Primary Variant Tier 2',
  parameters,
  render,
};

export const BackgroundPrimaryVariantTier3 = {
  args: {
    fontColor: DYNAMIC_FONT_COLOR['Primary Variant Tier 3'],
  },
  name: 'Primary Variant Tier 3',
  parameters,
  render,
};

export const BackgroundSecondary = {
  args: {
    fontColor: DYNAMIC_FONT_COLOR['Secondary'],
  },
  name: 'Secondary',
  parameters,
  render,
};

export const BackgroundTertiary = {
  args: {
    fontColor: DYNAMIC_FONT_COLOR['Tertiary'],
  },
  name: 'Tertiary',
  parameters,
  render,
};

export const BackgroundSurface = {
  args: {
    fontColor: DYNAMIC_FONT_COLOR['Surface'],
  },
  name: 'Surface',
  parameters,
  render,
};

export const BackgroundSurfaceVariant = {
  args: {
    fontColor: DYNAMIC_FONT_COLOR['Surface Variant'],
  },
  name: 'Surface Variant',
  parameters,
  render,
};
