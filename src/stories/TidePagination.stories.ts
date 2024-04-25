import { action } from '@storybook/addon-actions';

import * as STANDARD_ELEMENT from '@/types/Element';
import TidePagination from '@/components/TidePagination.vue';
import { argTypeBooleanUnrequired, parameters, prependNoneAsUndefined } from '@/utilities/storybook';

const ELEMENT_TEXT_AS_ICON = prependNoneAsUndefined(STANDARD_ELEMENT.ELEMENT_TEXT_AS_ICON);

const render = (args: any, { updateArgs }: any) => ({
  components: { TidePagination },
  methods: {
    handleSetPage: (page: number) => {
      action(`Current page ${page}`)(args);

      updateArgs({ ...args, pageCurrent: page });
    },
  },
  setup: () => ({ args }),
  template: `<TidePagination @set-page="handleSetPage" v-bind="args" />`,
});

export default {
  argTypes: {
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines clickability<br />(Button only)',
      if: {
        arg: 'element',
        eq: ELEMENT_TEXT_AS_ICON.BUTTON,
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
    setPage: {
      control: 'text',
      description: 'JS function to execute when pagination button is clicked',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: '(event: Event, pageIndex: number) => void' },
      },
    },
  },
  args: {
    pageCurrent: 1,
    pageTotal: 5,
    setPage: 'doSomething',
  },
  component: TidePagination,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TidePagination',
};

export const Demo = {};
