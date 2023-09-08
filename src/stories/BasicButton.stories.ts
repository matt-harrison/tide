import BasicButton from '@/components/BasicButton.vue';
import { BOOLEAN_UNREQUIRED } from '@/types/Storybook';
import { ELEMENT } from '@/types/Element';
import { PRIORITY } from '@/types/Priority';
import { SIZE_STORYBOOK } from '@/types/Storybook';
import { click, formatSnippet, getVariableName, iconWithNone } from '@/utilities/storybook';

const parameters = {
  docs: {
    source: {
      format: false,
      language: 'html',
      transform: formatSnippet,
    },
  },
};

export default {
  argTypes: {
    click: {
      ...click,
      if: { arg: 'element', eq: ELEMENT.BUTTON },
    },
    disabled: {
      control: 'select',
      description: 'Determines clickability<br />(Button only)',
      if: { arg: 'element', eq: ELEMENT.BUTTON },
      options: BOOLEAN_UNREQUIRED,
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
    },
    element: {
      constant: getVariableName({ ELEMENT }),
      control: 'select',
      description: 'HTML tag type',
      options: ELEMENT,
      table: {
        defaultValue: { summary: 'BUTTON' },
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
      ...iconWithNone,
      description: 'Icon to left of label',
    },
    iconTrailing: {
      ...iconWithNone,
      description: 'Icon to right of label',
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
        type: { summary: 'SizeButton' },
      },
    },
  },
  args: {
    click: 'handleClick',
    disabled: undefined,
    element: ELEMENT.BUTTON,
    href: 'https://www.traderinteractive.com',
    iconLeading: undefined,
    iconTrailing: undefined,
    isNewTab: undefined,
    label: 'Demo',
    priority: PRIORITY.PRIMARY,
    size: SIZE_STORYBOOK.None,
  },
  component: BasicButton,
  parameters,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButton',
};

export const Demo = {};
