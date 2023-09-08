import BasicLink from '@/components/BasicLink.vue';
import { BOOLEAN_UNREQUIRED } from '@/types/Storybook';
import { formatSnippet, iconWithNone } from '@/utilities/storybook';

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
    href: {
      control: 'text',
      description: 'URL to navigate to on click',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    iconLeading: {
      description: 'Icon to left of label',
      ...iconWithNone,
    },
    iconTrailing: {
      description: 'Icon to right of label',
      ...iconWithNone,
    },
    isNewTab: {
      control: 'select',
      description: 'Determines whether to target a new browser tab',
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
