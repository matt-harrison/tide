import { action } from '@storybook/addon-actions';

import TideToggle from '@/components/TideToggle.vue';
import {
  argTypeBooleanUnrequired,
  change,
  dataTrack,
  disabledArgType,
  doSomething,
  parameters,
} from '@/utilities/storybook';

const render = (args: any, { updateArgs }: any) => ({
  components: { TideToggle },
  methods: {
    doSomething,
    handleEmit: (event: Event, isActive: boolean) => {
      updateArgs({ ...args, isActive });
      action('TideToggle changed')(event, { isActive });

      try {
        const performCallback = eval(args.handleEmit);

        if (performCallback) {
          performCallback();
        }
      } catch {
        alert('Please specify a valid handler in the "change" control.');
      }
    },
  },
  setup: () => ({ args }),
  template: `<TideToggle @change="handleEmit" v-bind="args" />`,
});

export default {
  argTypes: {
    change: disabledArgType,
    dataTrack,
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines clickability',
    },
    handleEmit: {
      ...change,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: '(event: Event, tabIndex: number) => void' },
      },
    },
    isActive: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether toggle is active',
    },
  },
  args: {
    dataTrack: '',
    disabled: undefined,
    handleEmit: 'doSomething',
    isActive: undefined,
  },
  component: TideToggle,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/TideToggle',
};

export const Demo = {};
