import { action } from '@storybook/addon-actions';

import * as STANDARD_ICON from '@/types/Icon';
import BasicLink from '@/components/BasicLink.vue';
import { ELEMENT } from '@/types/Element';
import { argTypeBooleanUnrequired } from '@/utilities/storybook';
import { click, formatArgType, parameters, prependNoneAsUndefined } from '@/utilities/storybook';

const ICON = prependNoneAsUndefined(STANDARD_ICON.ICON);

const render = (args: any) => ({
  components: { BasicLink },
  methods: {
    handleClick: (event: Event) => {
      if (args.element !== ELEMENT.LINK && args.click) action(args.click)(event);
    },
  },
  setup: () => ({ args }),
  template: '<BasicLink @click="handleClick" v-bind="args" />',
});

export default {
  argTypes: {
    click: {
      ...click,
      if: { arg: 'element', eq: ELEMENT.BUTTON },
    },
    element: {
      ...formatArgType({ ELEMENT }),
      description: 'HTML tag type',
      table: {
        defaultValue: { summary: 'LINK' },
        type: { summary: 'Element' },
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
      description: 'Link text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    click: 'doSomething',
    element: ELEMENT.LINK,
    href: '/',
    iconLeading: undefined,
    iconTrailing: undefined,
    isNewTab: undefined,
    label: 'Demo',
  },
  component: BasicLink,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicLink',
};

export const Demo = {};
