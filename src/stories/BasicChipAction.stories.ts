import BasicChipAction from '@/components/BasicChipAction.vue';
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
  components: { BasicChipAction },
  setup() {
    return formatArgs(args);
  },
  template: '<BasicChipAction class="inline-flex" v-bind="args" />',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    href: {
      control: 'text',
      table: {
        defaultValue: { summary: 'None' },
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
  component: BasicChipAction,
  tags: ['autodocs'],
  title: 'Basic Components/BasicChipAction',
};

export const Demo = {
  args: {
    href: '/',
    label: 'Demo',
    tier: TIER_VARIANT.None,
  },
  parameters,
  render,
};
