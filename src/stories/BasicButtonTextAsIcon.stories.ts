import BasicButtonTextAsIcon from '@/components/BasicButtonTextAsIcon.vue';
import { BOOLEAN_UNREQUIRED } from '@/types/Storybook';
import { ELEMENT_TEXT_AS_ICON } from '@/types/Element';
import { PRIORITY } from '@/types/Priority';
import { SIZE_STORYBOOK } from '@/types/Storybook';
import { click, getVariableName, parameters } from '@/utilities/storybook';

export default {
  argTypes: {
    click,
    disabled: {
      control: 'select',
      description: 'Determines clickability<br />(Button only)',
      if: { arg: 'element', eq: ELEMENT_TEXT_AS_ICON.BUTTON },
      options: BOOLEAN_UNREQUIRED,
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
    },
    element: {
      constant: getVariableName({ ELEMENT_TEXT_AS_ICON }),
      control: 'select',
      description: 'HTML tag type',
      options: ELEMENT_TEXT_AS_ICON,
      table: {
        defaultValue: { summary: 'BUTTON' },
        type: { summary: 'Element' },
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
      constant: getVariableName({ PRIORITY }),
      control: 'select',
      description: 'Determines visual prominence',
      options: PRIORITY,
      table: {
        defaultValue: { summary: 'PRIMARY' },
        type: { summary: 'Priority' },
      },
    },
    size: {
      constant: getVariableName({ SIZE_STORYBOOK }),
      control: 'select',
      description: 'Determines spacing and font size',
      options: SIZE_STORYBOOK,
      table: {
        defaultValue: { summary: 'MEDIUM' },
        type: { summary: 'SizeIcon' },
      },
    },
  },
  args: {
    click: 'handleClick',
    disabled: undefined,
    element: ELEMENT_TEXT_AS_ICON.BUTTON,
    href: 'https://www.traderinteractive.com',
    isNewTab: undefined,
    label: '1',
    priority: PRIORITY.PRIMARY,
    size: SIZE_STORYBOOK.None,
  },
  component: BasicButtonTextAsIcon,
  parameters,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButtonTextAsIcon',
};

export const Demo = {};
