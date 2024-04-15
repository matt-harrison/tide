import { action } from '@storybook/addon-actions';

import TideChipInput from '@/components/TideChipInput.vue';
import { click, parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { TideChipInput },
  methods: {
    handleClick: (event: Event) => {
      if (args.click) action(args.click)(event);
    },
  },
  setup: () => ({ args }),
  template: `<TideChipInput @click="handleClick" v-bind="args" />`,
});

export default {
  argTypes: {
    click,
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
    click: 'doSomething',
    label: 'Demo',
  },
  component: TideChipInput,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideChipInput',
};

export const Demo = {};
