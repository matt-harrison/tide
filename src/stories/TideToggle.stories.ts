import { action } from '@storybook/addon-actions';

import TideToggle from '@/components/TideToggle.vue';
import { argTypeBooleanUnrequired, click, parameters } from '@/utilities/storybook';

const render = (args: any, { updateArgs }: any) => ({
  components: { TideToggle },
  methods: {
    handleClick: (event: Event) => {
      updateArgs({ ...args, isActive: !args.isActive });

      if (args.click) action(args.click)(event);
    },
  },
  setup: () => ({ args }),
  template: `<TideToggle @click="handleClick" v-bind="args" />`,
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
  component: TideToggle,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideToggle',
};

export const Demo = {};
