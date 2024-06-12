import { action } from '@storybook/addon-actions';

import * as STANDARD_ELEMENT from '@/types/Element';
import * as STANDARD_ICON from '@/types/Icon';
import * as STANDARD_PRIORITY from '@/types/Priority';
import TideButton from '@/components/TideButton.vue';
import {
  argTypeBooleanUnrequired,
  click,
  dataTrack,
  doSomething,
  formatArgType,
  parameters,
  prependNoneAsUndefined,
} from '@/utilities/storybook';

const ELEMENT = prependNoneAsUndefined(STANDARD_ELEMENT.ELEMENT);
const ICON = prependNoneAsUndefined(STANDARD_ICON.ICON);
const PRIORITY = prependNoneAsUndefined(STANDARD_PRIORITY.PRIORITY);

const render = (args: any) => ({
  components: { TideButton },
  methods: {
    doSomething,
    handleClick: (event: Event) => {
      action('TideButton clicked')(event);

      try {
        const buttonClick = eval(args.click);

        if (buttonClick) {
          buttonClick();
        }
      } catch {
        alert('Please specify a valid handler in the "click" control.');
      }
    },
  },
  setup: () => ({ args }),
  template: `<TideButton @click="handleClick" v-bind="args" />`,
});

export default {
  argTypes: {
    click: {
      ...click,
      if: { arg: 'element', neq: ELEMENT.LINK },
    },
    dataTrack,
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines clickability<br />(Button only)',
      if: { arg: 'element', neq: ELEMENT.LINK },
    },
    element: {
      ...formatArgType({ ELEMENT }),
      description: 'HTML tag type',
      table: {
        defaultValue: { summary: 'BUTTON' },
      },
    },
    href: {
      description: 'URL to open<br />(Link only)',
      if: { arg: 'element', eq: ELEMENT.LINK },
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    iconLeading: {
      ...formatArgType({ ICON }),
      description: 'Icon to left of label',
    },
    iconTrailing: {
      ...formatArgType({ ICON }),
      description: 'Icon to right of label',
    },
    isNewTab: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether to target a new browser tab<br />(Link only)',
      if: { arg: 'element', eq: ELEMENT.LINK },
    },
    label: {
      control: 'text',
      description: 'Button text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    priority: {
      ...formatArgType({ PRIORITY }),
      description: 'Determines visual prominence',
      table: {
        defaultValue: { summary: 'PRIMARY' },
      },
    },
  },
  args: {
    click: 'doSomething',
    dataTrack: '',
    disabled: undefined,
    element: undefined,
    href: 'https://www.sample.com',
    iconLeading: undefined,
    iconTrailing: undefined,
    isNewTab: undefined,
    label: 'Demo',
    priority: undefined,
  },
  component: TideButton,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/TideButton',
};

export const Demo = {};
