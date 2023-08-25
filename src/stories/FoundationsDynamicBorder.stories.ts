import type { StoryContext } from '@storybook/vue3';

import { DYNAMIC_BORDER_COLOR } from '@/types/Storybook';

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  return `border-1 ${args.color}`;
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
      description: 'Realm-dictated border color',
      options: DYNAMIC_BORDER_COLOR,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'DYNAMIC_BORDER_COLOR' },
      },
    },
  },
  args: {
    color: 'None',
  },
  tags: ['autodocs'],
  title: 'Foundations/Dynamic Utilities/Border Color',
};

export const Default = {
  args: {
    color: DYNAMIC_BORDER_COLOR.None,
  },
  parameters,
  render,
};

export const BorderPrimaryTier1 = {
  args: {
    color: DYNAMIC_BORDER_COLOR['Primary Tier 1'],
  },
  name: 'Primary Tier 1',
  parameters,
  render,
};

export const BorderPrimaryTier2 = {
  args: {
    color: DYNAMIC_BORDER_COLOR['Primary Tier 2'],
  },
  name: 'Primary Tier 2',
  parameters,
  render,
};

export const BorderPrimaryTier3 = {
  args: {
    color: DYNAMIC_BORDER_COLOR['Primary Tier 3'],
  },
  name: 'Primary Tier 3',
  parameters,
  render,
};

export const BorderPrimaryVariantTier1 = {
  args: {
    color: DYNAMIC_BORDER_COLOR['Primary Tier 1'],
  },
  name: 'Primary Variant Tier 1',
  parameters,
  render,
};

export const BorderPrimaryVariantTier2 = {
  args: {
    color: DYNAMIC_BORDER_COLOR['Primary Tier 2'],
  },
  name: 'Primary Variant Tier 2',
  parameters,
  render,
};

export const BorderPrimaryVariantTier3 = {
  args: {
    color: DYNAMIC_BORDER_COLOR['Primary Tier 3'],
  },
  name: 'Primary Variant Tier 3',
  parameters,
  render,
};

export const BorderSecondary = {
  args: {
    color: DYNAMIC_BORDER_COLOR['Secondary'],
  },
  name: 'Secondary',
  parameters,
  render,
};

export const BorderTertiary = {
  args: {
    color: DYNAMIC_BORDER_COLOR['Tertiary'],
  },
  name: 'Tertiary',
  parameters,
  render,
};

export const BorderSurface = {
  args: {
    color: DYNAMIC_BORDER_COLOR['Surface'],
  },
  name: 'Surface',
  parameters,
  render,
};

export const BorderSurfaceLight = {
  args: {
    color: DYNAMIC_BORDER_COLOR['Surface Light'],
  },
  name: 'Surface - Light',
  parameters,
  render,
};

export const BorderSurfaceDark = {
  args: {
    color: DYNAMIC_BORDER_COLOR['Surface Dark'],
  },
  name: 'Surface - Dark',
  parameters,
  render,
};

export const BorderSurfaceSave = {
  args: {
    color: DYNAMIC_BORDER_COLOR['Surface Save'],
  },
  name: 'Surface - Save',
  parameters,
  render,
};
