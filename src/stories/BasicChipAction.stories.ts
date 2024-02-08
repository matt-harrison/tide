import BasicChipAction from '@/components/BasicChipAction.vue';
import { parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { BasicChipAction },
  setup: () => ({ args }),
  template: '<BasicChipAction class="tide-display-inline-flex" v-bind="args" />',
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
  },
  args: {
    href: 'https://www.traderinteractive.com',
    label: 'Demo',
  },
  component: BasicChipAction,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicChipAction',
};

export const Demo = {};
