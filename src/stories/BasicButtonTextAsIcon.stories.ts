import BasicButtonTextAsIcon from '@/components/BasicButtonTextAsIcon.vue';
import { BOOLEAN_UNREQUIRED } from '@/types/Storybook';
import { ELEMENT_TEXT_AS_ICON } from '@/types/Element';
import { PRIORITY } from '@/types/Priority';
import { SIZE } from '@/types/Size';
import { click, formatArgType, parameters } from '@/utilities/storybook';

export default {
  argTypes: {
    click: {
      ...click,
      if: { arg: 'element', neq: ELEMENT_TEXT_AS_ICON.LINK },
    },
    disabled: {
      control: 'select',
      description: 'Determines clickability<br />(Button only)',
      if: {
        arg: 'element',
        neq: ELEMENT_TEXT_AS_ICON.LINK,
        // TODO: neq: ELEMENT_TEXT_AS_ICON.LINK || ELEMENT_TEXT_AS_ICON.DIV
      },
      options: BOOLEAN_UNREQUIRED,
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
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
      control: 'select',
      description: 'Determines whether to target a new browser tab<br />(Link only)',
      if: { arg: 'element', eq: ELEMENT_TEXT_AS_ICON.LINK },
      options: BOOLEAN_UNREQUIRED,
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
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
      ...formatArgType({ SIZE }),
      description: 'Determines spacing and font size',
    },
  },
  args: {
    click: 'handleClick',
    disabled: undefined,
    element: undefined,
    href: 'https://www.traderinteractive.com',
    isNewTab: undefined,
    label: '1',
    priority: undefined,
    size: undefined,
  },
  component: BasicButtonTextAsIcon,
  parameters,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButtonTextAsIcon',
};

export const Demo = {};
