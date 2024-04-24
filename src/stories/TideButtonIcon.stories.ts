import { action } from '@storybook/addon-actions';

import * as STANDARD_ELEMENT from '@/types/Element';
import * as STANDARD_PRIORITY from '@/types/Priority';
import TideButtonIcon from '@/components/TideButtonIcon.vue';
import { ICON } from '@/types/Icon';
import {
  argTypeBooleanUnrequired,
  click,
  dataTrack,
  formatArgType,
  parameters,
  prependNoneAsUndefined,
} from '@/utilities/storybook';

const ELEMENT = prependNoneAsUndefined(STANDARD_ELEMENT.ELEMENT);
const PRIORITY = prependNoneAsUndefined(STANDARD_PRIORITY.PRIORITY);

const render = (args: any) => ({
  components: { TideButtonIcon },
  methods: {
    handleClick: (event: Event) => {
      if (args.click) action(args.click)(event);
    },
  },
  setup: () => ({ args }),
  template: '<TideButtonIcon @click="handleClick" class="tide-display-inline-block" v-bind="args" />',
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
    icon: {
      ...formatArgType({ ICON }),
      description: 'Icon',
    },
    isNewTab: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether to target a new browser tab<br />(Link only)',
      if: { arg: 'element', eq: ELEMENT.LINK },
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
    href: 'https://www.traderinteractive.com',
    icon: ICON.MAIL,
    isNewTab: undefined,
    priority: undefined,
  },
  component: TideButtonIcon,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideButtonIcon',
};

export const Demo = {};
