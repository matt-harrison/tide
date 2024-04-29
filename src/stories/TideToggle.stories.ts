import { action } from '@storybook/addon-actions';

import TideToggle from '@/components/TideToggle.vue';
import { argTypeBooleanUnrequired, click, dataTrack, doSomething, parameters } from '@/utilities/storybook';

const render = (args: any, { updateArgs }: any) => ({
  components: { TideToggle },
  methods: {
    doSomething,
    handleClick: (event: Event) => {
      updateArgs({ ...args, isActive: !args.isActive });

      action('TideToggle clicked')(event);

      try {
        const toggleClick = eval(args.click);

        if (toggleClick) {
          toggleClick();
        }
      } catch {
        alert('Please pass a valid function in the "click" control.');
      }
    },
  },
  setup: () => ({ args }),
  template: `<TideToggle @click="handleClick" v-bind="args" />`,
});

export default {
  argTypes: {
    click,
    dataTrack,
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
    dataTrack: '',
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
