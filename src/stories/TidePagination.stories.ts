import { action } from '@storybook/addon-actions';

import * as STANDARD_ELEMENT from '@/types/Element';
import TidePagination from '@/components/TidePagination.vue';
import {
  argTypeBooleanUnrequired,
  change,
  disabledArgType,
  doSomething,
  parameters,
  prependNoneAsUndefined,
} from '@/utilities/storybook';

const ELEMENT_TEXT_AS_ICON = prependNoneAsUndefined(STANDARD_ELEMENT.ELEMENT_TEXT_AS_ICON);

const render = (args: any, { updateArgs }: any) => ({
  components: { TidePagination },
  methods: {
    doSomething,
    handleEmit: (event: Event, index: number) => {
      action(`Current page ${index}`)(event, { index });

      updateArgs({ ...args, pageCurrent: index });

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
  template: `<TidePagination @change="handleEmit" v-bind="args" />`,
});

export default {
  argTypes: {
    change: disabledArgType,
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines clickability<br />(Button only)',
      if: {
        arg: 'element',
        eq: ELEMENT_TEXT_AS_ICON.BUTTON,
      },
    },
    handleEmit: {
      ...change,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: '(event: Event, pageIndex: number) => void' },
      },
    },
    pageCurrent: {
      control: {
        min: 1,
        type: 'number',
      },
    },
    pageTotal: {
      control: {
        min: 1,
        type: 'number',
      },
    },
  },
  args: {
    handleEmit: 'doSomething',
    pageCurrent: 1,
    pageTotal: 5,
  },
  component: TidePagination,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/TidePagination',
};

export const Demo = {};
