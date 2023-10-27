import { action } from '@storybook/addon-actions';

import * as STANDARD_ELEMENT from '@/types/Element';
import * as STANDARD_ICON from '@/types/Icon';
import * as STANDARD_PRIORITY from '@/types/Priority';
import * as STANDARD_SIZE_BUTTON from '@/types/Size';
import * as STANDARD_TIER from '@/types/Tier';
import BasicButton from '@/components/BasicButton.vue';
import {
  argTypeBooleanUnrequired,
  click,
  formatArgType,
  parameters,
  prependNoneAsUndefined,
} from '@/utilities/storybook';

const ELEMENT = prependNoneAsUndefined(STANDARD_ELEMENT.ELEMENT);
const ICON = prependNoneAsUndefined(STANDARD_ICON.ICON);
const PRIORITY = prependNoneAsUndefined(STANDARD_PRIORITY.PRIORITY);
const SIZE_BUTTON = prependNoneAsUndefined(STANDARD_SIZE_BUTTON.SIZE_BUTTON);
const TIER = prependNoneAsUndefined(STANDARD_TIER.TIER);

const render = (args: any) => ({
  components: { BasicButton },
  methods: {
    handleClick: (event: Event) => {
      if (args.element !== ELEMENT.LINK && args.click) action(args.click)(event);
    },
  },
  setup: () => ({ args }),
  template: `<BasicButton @click="handleClick" v-bind="args" />`,
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
    size: {
      ...formatArgType({ SIZE_BUTTON }),
      description: 'Determines button spacing and font size',
      table: {
        defaultValue: { summary: 'MEDIUM' },
      },
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
    iconLeading: undefined,
    iconTrailing: undefined,
    isNewTab: undefined,
    label: 'Demo',
    priority: undefined,
    size: undefined,
    tier: TIER.None,
  },
  component: BasicButton,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButton',
};

export const Demo = {};
