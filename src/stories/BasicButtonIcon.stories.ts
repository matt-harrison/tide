import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
import { BOOLEAN_UNREQUIRED } from '@/types/Storybook';
import { ELEMENT } from '@/types/Element';
import { ICON } from '@/types/Icon';
import { PRIORITY } from '@/types/Priority';
import { SIZE } from '@/types/Size';
import { click, formatArgType, parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { BasicButtonIcon },
  setup: () => ({ args }),
  template: '<BasicButtonIcon class="inline-block" v-bind="args" />',
});

export default {
  argTypes: {
    click: {
      ...click,
      if: { arg: 'element', neq: ELEMENT.LINK },
    },
    disabled: {
      control: 'select',
      description: 'Determines clickability<br />(Button only)',
      if: { arg: 'element', neq: ELEMENT.LINK },
      options: BOOLEAN_UNREQUIRED,
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
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
      control: 'select',
      description: 'Determines whether to target a new browser tab<br />(Link only)',
      if: { arg: 'element', eq: ELEMENT.LINK },
      options: BOOLEAN_UNREQUIRED,
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
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
      ...formatArgType({ SIZE }),
      description: 'Determines icon dimensions',
    },
  },
  args: {
    click: 'handleClick',
    disabled: undefined,
    element: undefined,
    href: 'https://www.traderinteractive.com',
    icon: ICON.ENVELOPE,
    isNewTab: undefined,
    priority: undefined,
    size: undefined,
  },
  component: BasicButtonIcon,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButtonIcon',
};

export const Demo = {};
