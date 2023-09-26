import BasicButton from '@/components/BasicButton.vue';
import { BOOLEAN_UNREQUIRED } from '@/types/Storybook';
import { ELEMENT } from '@/types/Element';
import { ICON } from '@/types/Icon';
import { PRIORITY } from '@/types/Priority';
import { SIZE } from '@/types/Size';
import { click, formatSnippet, prependNone } from '@/utilities/storybook';

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
      description: 'HTML tag type',
      ...prependNone({ ELEMENT }),
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
      ...prependNone({ ICON }),
      description: 'Icon to left of label',
    },
    iconTrailing: {
      ...prependNone({ ICON }),
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
      ...prependNone({ PRIORITY }),
      description: 'Determines visual prominence',
      table: {
        defaultValue: { summary: 'PRIMARY' },
      },
    },
    size: {
      ...prependNone({ SIZE }),
      description: 'Icon to left of label',
      table: {
        defaultValue: { summary: 'MEDIUM' },
      },
    },
  },
  args: {
    click: 'handleClick',
    disabled: undefined,
    element: undefined,
    href: 'https://www.traderinteractive.com',
    iconLeading: undefined,
    iconTrailing: undefined,
    isNewTab: undefined,
    label: 'Demo',
    priority: undefined,
    size: undefined,
  },
  component: BasicButton,
  parameters,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButton',
};

export const Demo = {};
