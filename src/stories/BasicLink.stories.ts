import BasicLink from '@/components/BasicLink.vue';
import { BOOLEAN_UNREQUIRED } from '@/types/Storybook';
import { ELEMENT } from '@/types/Element';
import { ICON } from '@/types/Icon';
import { click, formatSnippet, getVariableName, prependNone } from '@/utilities/storybook';

const parameters = {
  docs: {
    source: {
      format: false,
      language: 'html',
      transform: formatSnippet,
    },
  },
};

const render = (args: any) => ({
  components: { BasicLink },
  setup: () => ({ args }),
  template: '<BasicLink v-bind="args" />',
});

export default {
  argTypes: {
    click: {
      ...click,
      if: { arg: 'element', eq: ELEMENT.BUTTON },
    },
    element: {
      constant: getVariableName({ ELEMENT }),
      control: 'select',
      description: 'HTML tag type',
      options: ELEMENT,
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
      description: 'Icon to left of label',
      ...prependNone({ ICON }),
    },
    iconTrailing: {
      description: 'Icon to right of label',
      ...prependNone({ ICON }),
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
      description: 'Link text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
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
