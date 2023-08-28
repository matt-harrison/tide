import BasicChipFilter from '@/components/BasicChipFilter.vue';
import { TIER } from '@/types/Tier';
import { formatSnippet, getVariableName } from '@/utilities/storybook';

const TIER_VARIANT = {
  None: undefined,
  TIER_2: TIER.TIER_2,
  TIER_3: TIER.TIER_3,
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

const formatArgs = (args: any) => {
  return { args };
};

const render = (args: any) => ({
  components: { BasicChipFilter },
  setup() {
    return formatArgs(args);
  },
  template: '<BasicChipFilter class="inline-flex" v-bind="args" />',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    isActive: {
      control: 'boolean',
      description: 'Determines whether toggle is active',
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
    },
    label: {
      control: 'text',
      description: 'Chip text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    tier: {
      constant: getVariableName({ TIER_VARIANT }),
      control: 'select',
      description: 'Determines brand colors',
      options: TIER_VARIANT,
      table: {
        defaultValue: { summary: 'TIER.TIER_1' },
        type: { summary: 'Tier' },
      },
    },
  },
  args: {
    isActive: false,
    label: 'Demo',
    tier: undefined,
  },
  component: BasicChipFilter,
  tags: ['autodocs'],
  title: 'Basic Components/BasicChipFilter',
};

export const Demo = {
  args: {
    isActive: false,
    label: 'Demo',
    tier: undefined,
  },
  parameters,
  render,
};

export const Inactive = {
  args: {
    isActive: false,
    label: 'Demo',
    tier: undefined,
  },
  parameters,
  render,
};

export const Tier2Active = {
  args: {
    isActive: true,
    tier: TIER_VARIANT.TIER_2,
  },
  parameters,
  render,
};

export const Tier3Active = {
  args: {
    isActive: true,
    tier: TIER_VARIANT.TIER_3,
  },
  parameters,
  render,
};
