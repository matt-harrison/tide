import type { StoryContext } from '@storybook/vue3';

import { DYNAMIC_BACKGROUND_COLOR } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  return `${args.color}`;
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
    color: {
      control: 'select',
      description: 'Realm-dictated background color',
      options: DYNAMIC_BACKGROUND_COLOR,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'DYNAMIC_BACKGROUND_COLOR' },
      },
    },
  },
  args: {
    color: 'None',
  },
  tags: ['autodocs'],
  title: 'Foundations/Dynamic Utilities/Background Color',
};

export const Default = {
  args: {
    color: DYNAMIC_BACKGROUND_COLOR.None,
  },
  parameters,
  render,
};

export const BackgroundPrimaryTier1 = {
  args: {
    color: DYNAMIC_BACKGROUND_COLOR['Primary Tier 1'],
  },
  name: 'Primary Tier 1',
  parameters,
  render,
};

export const BackgroundPrimaryTier2 = {
  args: {
    color: DYNAMIC_BACKGROUND_COLOR['Primary Tier 2'],
  },
  name: 'Primary Tier 2',
  parameters,
  render,
};

export const BackgroundPrimaryTier3 = {
  args: {
    color: DYNAMIC_BACKGROUND_COLOR['Primary Tier 3'],
  },
  name: 'Primary Tier 3',
  parameters,
  render,
};

export const BackgroundPrimaryVariantTier1 = {
  args: {
    color: DYNAMIC_BACKGROUND_COLOR['Primary Tier 1'],
  },
  name: 'Primary Variant Tier 1',
  parameters,
  render,
};

export const BackgroundPrimaryVariantTier2 = {
  args: {
    color: DYNAMIC_BACKGROUND_COLOR['Primary Tier 2'],
  },
  name: 'Primary Variant Tier 2',
  parameters,
  render,
};

export const BackgroundPrimaryVariantTier3 = {
  args: {
    color: DYNAMIC_BACKGROUND_COLOR['Primary Tier 3'],
  },
  name: 'Primary Variant Tier 3',
  parameters,
  render,
};

export const BackgroundSecondary = {
  args: {
    color: DYNAMIC_BACKGROUND_COLOR['Secondary'],
  },
  name: 'Secondary',
  parameters,
  render,
};

export const BackgroundTertiary = {
  args: {
    color: DYNAMIC_BACKGROUND_COLOR['Tertiary'],
  },
  name: 'Tertiary',
  parameters,
  render,
};

export const BackgroundSurface = {
  args: {
    color: DYNAMIC_BACKGROUND_COLOR['Surface'],
  },
  name: 'Surface',
  parameters,
  render,
};

export const BackgroundSurfaceLight = {
  args: {
    color: DYNAMIC_BACKGROUND_COLOR['Surface Light'],
  },
  name: 'Surface - Light',
  parameters,
  render,
};

export const BackgroundSurfaceDark = {
  args: {
    color: DYNAMIC_BACKGROUND_COLOR['Surface Dark'],
  },
  name: 'Surface - Dark',
  parameters,
  render,
};
