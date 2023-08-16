import type { StoryContext } from '@storybook/vue3';

import { DYNAMIC_BG_COLOR } from '@/types/Storybook';
import { getVariableName } from '@/utilities/storybook';

const formatClassNames = (args: any) => {
  return `${args.bgColor}`;
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
    bgColor: {
      constant: getVariableName({ DYNAMIC_BG_COLOR }),
      control: 'select',
      description: 'Realm-dictated Background Color<br/>(font color shown for contrast.)',
      options: DYNAMIC_BG_COLOR,
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Dynamic Utilities/Background Color',
};

export const BackgroundPrimaryTier1 = {
  args: {
    bgColor: DYNAMIC_BG_COLOR['Primary Tier 1'],
  },
  name: 'bg-primary-tier-1',
  parameters,
  render,
};

export const BackgroundPrimaryTier2 = {
  args: {
    bgColor: DYNAMIC_BG_COLOR['Primary Tier 2'],
  },
  name: 'bg-primary-tier-2',
  parameters,
  render,
};

export const BackgroundPrimaryTier3 = {
  args: {
    bgColor: DYNAMIC_BG_COLOR['Primary Tier 3'],
  },
  name: 'bg-primary-tier-3',
  parameters,
  render,
};

export const BackgroundPrimaryVariantTier1 = {
  args: {
    bgColor: DYNAMIC_BG_COLOR['Primary Tier 1'],
  },
  name: 'bg-primary-variant-tier-1',
  parameters,
  render,
};

export const BackgroundPrimaryVariantTier2 = {
  args: {
    bgColor: DYNAMIC_BG_COLOR['Primary Tier 2'],
  },
  name: 'bg-primary-variant-tier-2',
  parameters,
  render,
};

export const BackgroundPrimaryVariantTier3 = {
  args: {
    bgColor: DYNAMIC_BG_COLOR['Primary Tier 3'],
  },
  name: 'bg-primary-variant-tier-3',
  parameters,
  render,
};

export const BackgroundSecondary = {
  args: {
    bgColor: DYNAMIC_BG_COLOR['Secondary'],
  },
  name: 'bg-secondary',
  parameters,
  render,
};

export const BackgroundTertiary = {
  args: {
    bgColor: DYNAMIC_BG_COLOR['Tertiary'],
  },
  name: 'bg-tertiary',
  parameters,
  render,
};

export const BackgroundSurface = {
  args: {
    bgColor: DYNAMIC_BG_COLOR['Surface'],
  },
  name: 'bg-surface',
  parameters,
  render,
};

export const BackgroundSurfaceLight = {
  args: {
    bgColor: DYNAMIC_BG_COLOR['Surface Light'],
  },
  name: 'bg-surface-light',
  parameters,
  render,
};

export const BackgroundSurfaceDark = {
  args: {
    bgColor: DYNAMIC_BG_COLOR['Surface Dark'],
  },
  name: 'bg-surface-dark',
  parameters,
  render,
};
