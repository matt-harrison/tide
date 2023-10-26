import { action } from '@storybook/addon-actions';

import * as STANDARD_ELEMENT from '@/types/Element';
import * as STANDARD_PRIORITY from '@/types/Priority';
import * as STANDARD_SIZE from '@/types/Size';
import * as STANDARD_TIER from '@/types/Tier';
import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
import { ICON } from '@/types/Icon';
import {
  argTypeBooleanUnrequired,
  click,
  formatArgType,
  parameters,
  prependNoneAsUndefined,
} from '@/utilities/storybook';

const ELEMENT = prependNoneAsUndefined(STANDARD_ELEMENT.ELEMENT);
const PRIORITY = prependNoneAsUndefined(STANDARD_PRIORITY.PRIORITY);
const SIZE = prependNoneAsUndefined(STANDARD_SIZE.SIZE);
const TIER = prependNoneAsUndefined(STANDARD_TIER.TIER);

const render = (args: any) => ({
  components: { BasicButtonIcon },
  methods: {
    handleClick: (event: Event) => {
      if (args.click) action(args.click)(event);
    },
  },
  setup: () => ({ args }),
  template: '<BasicButtonIcon @click="handleClick" class="inline-block" v-bind="args" />',
});

export default {
  argTypes: {
    click: {
      ...click,
      if: { arg: 'element', neq: ELEMENT.LINK },
    },
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
    size: {
      ...formatArgType({ SIZE }),
      description: 'Determines icon dimensions',
    },
    tier: {
      ...formatArgType({ TIER }),
      description: 'Determines brand colors<br />(Primary only)',
      if: { arg: 'priority', eq: PRIORITY.PRIMARY },
      table: {
        defaultValue: { summary: 'TIER_1' },
      },
    },
  },
  args: {
    click: 'doSomething',
    disabled: undefined,
    element: undefined,
    href: 'https://www.traderinteractive.com',
    icon: ICON.ENVELOPE,
    isNewTab: undefined,
    priority: undefined,
    size: undefined,
    tier: TIER.None,
  },
  component: BasicButtonIcon,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButtonIcon',
};

export const Demo = {};
