import TideChipAction from '@/components/TideChipAction.vue';
import { argTypeBooleanUnrequired, parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { TideChipAction },
  setup: () => ({ args }),
  template: '<TideChipAction class="tide-display-inline-flex" v-bind="args" />',
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
    isNewTab: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether to target a new browser tab',
    },
    label: {
      control: 'text',
      description: 'Chip text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    href: 'https://www.traderinteractive.com',
    label: 'Demo',
  },
  component: TideChipAction,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideChipAction',
};

export const Demo = {};
