import { action } from '@storybook/addon-actions';

import BasicChipInput from '@/components/BasicChipInput.vue';
import { click, parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { BasicChipInput },
  methods: {
    handleClick: (event: Event) => {
      if (args.click) action(args.click)(event);
    },
  },
  setup: () => ({ args }),
  template: `<BasicChipInput @click="handleClick" v-bind="args" />`,
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
  component: BasicChipInput,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicChipInput',
};

export const Demo = {};
