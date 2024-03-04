import { action } from '@storybook/addon-actions';

import * as STANDARD_ELEMENT from '@/types/Element';
import BasicPagination from '@/components/BasicPagination.vue';
import { argTypeBooleanUnrequired, parameters, prependNoneAsUndefined } from '@/utilities/storybook';

const ELEMENT_TEXT_AS_ICON = prependNoneAsUndefined(STANDARD_ELEMENT.ELEMENT_TEXT_AS_ICON);

const render = (args: any, { updateArgs }: any) => ({
  components: { BasicPagination },
  methods: {
    handleSetPage: (page: number) => {
      action('setPage')(args);

      updateArgs({ ...args, pageCurrent: page });
    },
  },
  setup: () => ({ args }),
  template: `<BasicPagination @set-page="handleSetPage" v-bind="args" />`,
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
      description: 'JS function to execute on click',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'function' },
      },
    },
  },
  args: {
    pageCurrent: 1,
    pageTotal: 5,
    setPage: 'doSomething',
  },
  component: BasicPagination,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicPagination',
};

export const Demo = {};
