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
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    tier: {
      constant: getVariableName({ TIER_VARIANT }),
      control: 'select',
      options: TIER_VARIANT,
    },
  },
  component: BasicChipInput,
  tags: ['autodocs'],
  title: 'Basic Components/BasicChipInput',
};

export const Demo = {
  args: {
    label: 'Demo',
  },
  parameters,
  render,
};
