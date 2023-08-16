import type { StoryContext } from '@storybook/vue3';

import { BORDER_COLOR_DYNAMIC } from '@/types/Storybook';
import { getVariableName } from '@/utilities/storybook';

const formatClassNames = (args: any) => {
  return `border-1 ${args.borderColor}`;
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
    borderColor: {
      constant: getVariableName({ BORDER_COLOR_DYNAMIC }),
      control: 'select',
      description: 'Realm-dictated Border Color',
      options: BORDER_COLOR_DYNAMIC,
    },
  },
  tags: ['autodocs'],
  title: 'Foundations/Dynamic Utilities/Border Color',
};

export const BorderPrimaryTier1 = {
  args: {
    borderColor: BORDER_COLOR_DYNAMIC['Primary Tier 1'],
  },
  name: 'border-primary-tier-1',
  parameters,
  render,
};

export const BorderPrimaryTier2 = {
  args: {
    borderColor: BORDER_COLOR_DYNAMIC['Primary Tier 2'],
  },
  name: 'border-primary-tier-2',
  parameters,
  render,
};

export const BorderPrimaryTier3 = {
  args: {
    borderColor: BORDER_COLOR_DYNAMIC['Primary Tier 3'],
  },
  name: 'border-primary-tier-3',
  parameters,
  render,
};

export const BorderPrimaryVariantTier1 = {
  args: {
    borderColor: BORDER_COLOR_DYNAMIC['Primary Tier 1'],
  },
  name: 'border-primary-variant-tier-1',
  parameters,
  render,
};

export const BorderPrimaryVariantTier2 = {
  args: {
    borderColor: BORDER_COLOR_DYNAMIC['Primary Tier 2'],
  },
  name: 'border-primary-variant-tier-2',
  parameters,
  render,
};

export const BorderPrimaryVariantTier3 = {
  args: {
    borderColor: BORDER_COLOR_DYNAMIC['Primary Tier 3'],
  },
  name: 'border-primary-variant-tier-3',
  parameters,
  render,
};

export const BorderSecondary = {
  args: {
    borderColor: BORDER_COLOR_DYNAMIC['Secondary'],
  },
  name: 'border-secondary',
  parameters,
  render,
};

export const BorderTertiary = {
  args: {
    borderColor: BORDER_COLOR_DYNAMIC['Tertiary'],
  },
  name: 'border-tertiary',
  parameters,
  render,
};

export const BorderSurface = {
  args: {
    borderColor: BORDER_COLOR_DYNAMIC['Surface'],
  },
  name: 'border-surface',
  parameters,
  render,
};

export const BorderSurfaceLight = {
  args: {
    borderColor: BORDER_COLOR_DYNAMIC['Surface Light'],
  },
  name: 'border-surface-light',
  parameters,
  render,
};

export const BorderSurfaceDark = {
  args: {
    borderColor: BORDER_COLOR_DYNAMIC['Surface Dark'],
  },
  name: 'border-surface-dark',
  parameters,
  render,
};

export const BorderSurfaceSave = {
  args: {
    borderColor: BORDER_COLOR_DYNAMIC['Surface Save'],
  },
  name: 'border-surface-save',
  parameters,
  render,
};
