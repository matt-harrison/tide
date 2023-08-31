// IMPORTS
import BasicChipInput from '@/components/BasicChipInput.vue';
import { TIER } from '@/types/Tier';
import { formatSnippet, getVariableName } from '@/utilities/storybook';

// VARIABLES
const TIER_VARIANT = {
  None: undefined,
  TIER_1: TIER.TIER_1,
  TIER_2: TIER.TIER_2,
  TIER_3: TIER.TIER_3,
};

// PARAMETERS
const parameters = {
  docs: {
    source: {
      format: false,
      language: 'html',
      transform: formatSnippet,
    },
  },
};

// STANDARD FUNCTIONS
const formatArgs = (args: any) => {
  return { args };
};

const render = (args: any) => ({
  components: { BasicChipInput },
  setup() {
    return formatArgs(args);
  },
  template: '<BasicChipInput class="inline-flex" v-bind="args" />',
  updated() {
    return formatArgs(args);
  },
});

// EXPORT
export default {
  argTypes: {
    label: {
      control: 'text',
      description: 'Label<br />(Note)', // Description in Description column
      name: 'Label', // Name column
      table: {
        defaultValue: { summary: 'None' }, // Default column
        type: { summary: 'string' }, // Type in Description column
      },
    },
    tier: {
      constant: getVariableName({ TIER_VARIANT }),
      control: 'select',
      description: 'Tier', // Description in Description column
      name: 'Tier', // Name column
      options: TIER_VARIANT,
      table: {
        defaultValue: { summary: 'TIER_3' }, // Default column
        type: { summary: 'Tier' }, // Type in Description column
      },
    },
  },
  args: {
    label: 'Demo', // Value in Control column
    // tier: TIER_VARIANT.None, // Value in Control column
  },
  component: BasicChipInput,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Proof of Concept/Story Template',
};

// STORIES
export const Demo = {};

export const Tier1 = {
  args: {
    label: 'Tier 1',
    tier: TIER_VARIANT.TIER_1,
  },
};

export const Tier2 = {
  args: {
    label: 'Tier 2',
    tier: TIER_VARIANT.TIER_2,
  },
};

export const Tier3 = {
  args: {
    label: 'Tier 3',
    tier: TIER_VARIANT.TIER_3,
  },
};
