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
      table: {
        defaultValue: { summary: 'False' },
      },
    },
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
  component: BasicChipFilter,
  tags: ['autodocs'],
  title: 'Basic Components/BasicChipFilter',
};

export const Demo = {
  args: {
    isActive: false,
    label: 'Demo',
  },
  parameters,
  render,
};
