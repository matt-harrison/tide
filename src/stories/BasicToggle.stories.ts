import { action } from '@storybook/addon-actions';

import BasicToggle from '@/components/BasicToggle.vue';
import { argTypeBooleanUnrequired, click, parameters } from '@/utilities/storybook';

const render = (args: any, { updateArgs }: any) => ({
  components: { BasicToggle },
  methods: {
    handleClick: (event: Event) => {
      updateArgs({ ...args, isActive: !args.isActive });

      if (args.click) action(args.click)(event);
    },
  },
  setup: () => ({ args }),
  template: `<BasicToggle @click="handleClick" v-bind="args" />`,
});

export default {
  argTypes: {
    click,
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines clickability',
    },
    isActive: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether toggle is active',
    },
  },
  args: {
    click: 'doSomething',
    disabled: undefined,
    isActive: undefined,
  },
  component: BasicToggle,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicToggle',
};

export const Demo = {};
