import BasicChipInput from '@/components/BasicChipInput.vue';
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
  components: { BasicChipInput },
  setup() {
    return formatArgs(args);
  },
  template: '<BasicChipInput class="inline-flex" v-bind="args" />',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
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
        defaultValue: { summary: 'TIER.TIER_3' },
        type: { summary: 'Tier' },
      },
    },
  },
  args: {
    label: 'Demo',
    tier: undefined,
  },
  component: BasicChipInput,
  tags: ['autodocs'],
  title: 'Basic Components/BasicChipInput',
};

export const Demo = {
  parameters,
  render,
};

export const Tier2 = {
  args: {
    tier: TIER_VARIANT.TIER_2,
  },
  parameters,
  render,
};

export const Tier3 = {
  args: {
    tier: TIER_VARIANT.TIER_3,
  },
  parameters,
  render,
};
