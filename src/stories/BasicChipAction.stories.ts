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

const render = (args: any) => ({
  components: { BasicChipAction },
  setup() {
    return { args };
  },
  template: '<BasicChipAction class="inline-flex" v-bind="args" />',
  updated() {
    return { args };
  },
});

export default {
  argTypes: {
    href: {
      control: 'text',
      description: 'URL to navigate to on click',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
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
        defaultValue: { summary: 'TIER.TIER_3' },
        type: { summary: 'Tier' },
      },
    },
  },
  args: {
    href: '/',
    label: 'Demo',
    tier: undefined,
  },
  component: BasicChipAction,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicChipAction',
};

export const Demo = {
  args: {
    href: '/',
  },
};

export const Tier2 = {
  args: {
    href: '/',
    tier: TIER_VARIANT.TIER_2,
  },
};

export const Tier3 = {
  args: {
    href: '/',
    tier: TIER_VARIANT.TIER_3,
  },
};
