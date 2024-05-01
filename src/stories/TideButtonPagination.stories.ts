import { action } from '@storybook/addon-actions';

import * as STANDARD_ELEMENT from '@/types/Element';
import TideButtonPagination from '@/components/TideButtonPagination.vue';
import {
  argTypeBooleanUnrequired,
  click,
  dataTrack,
  doSomething,
  formatArgType,
  parameters,
  prependNoneAsUndefined,
} from '@/utilities/storybook';

const ELEMENT_TEXT_AS_ICON = prependNoneAsUndefined(STANDARD_ELEMENT.ELEMENT_TEXT_AS_ICON);

const render = (args: any) => ({
  components: { TideButtonPagination },
  methods: {
    doSomething,
    handleClick: (event: Event) => {
      action('TideButtonPagination clicked')(event);

      try {
        const buttonClick = eval(args.click);

        if (buttonClick) {
          buttonClick();
        }
      } catch {
        alert('Please pass a valid function in the "click" control.');
      }
    },
  },
  setup: () => ({ args }),
  template: `<TideButtonPagination @click="handleClick" v-bind="args" />`,
});

export default {
  argTypes: {
    click: {
      ...click,
      if: { arg: 'element', neq: ELEMENT_TEXT_AS_ICON.LINK },
    },
    dataTrack,
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Indicates whether Pagination Button is associated with the displayed page',
      if: {
        arg: 'element',
        eq: ELEMENT_TEXT_AS_ICON.BUTTON,
      },
    },
    element: {
      ...formatArgType({ ELEMENT_TEXT_AS_ICON }),
      description: 'HTML tag type',
      table: {
        defaultValue: { summary: 'BUTTON' },
      },
    },
    href: {
      description: 'URL to open<br />(Link only)',
      if: { arg: 'element', eq: ELEMENT_TEXT_AS_ICON.LINK },
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    isNewTab: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether to target a new browser tab<br />(Link only)',
      if: { arg: 'element', eq: ELEMENT_TEXT_AS_ICON.LINK },
    },
    label: {
      control: 'text',
      description: 'Button text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    click: 'doSomething',
    dataTrack: '',
    disabled: undefined,
    element: undefined,
    href: 'https://www.sample.com',
    isNewTab: undefined,
    label: '1',
  },
  component: TideButtonPagination,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideButtonPagination',
};

export const Demo = {};
