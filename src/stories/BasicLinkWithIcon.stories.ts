import BasicLinkWithIcon from '@/components/BasicLinkWithIcon.vue';
import { ICON } from '@/types/Icon';
import { formatSnippet, iconControlWithNone } from '@/utilities/storybook';

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
  components: { BasicLinkWithIcon },
  setup() {
    return { args };
  },
  template: '<BasicLinkWithIcon v-bind="args" />',
  updated() {
    return { args };
  },
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
      ...iconControlWithNone,
    },
    iconTrailing: {
      description: 'Icon to right of label',
      ...iconControlWithNone,
    },
    isNewTab: {
      control: 'boolean',
      description: 'Determines whether to target a new browser tab',
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
    iconLeading: ICON.STAR,
    iconTrailing: undefined,
    isNewTab: false,
    label: 'Demo',
  },
  component: BasicLinkWithIcon,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicLinkWithIcon',
};

export const Demo = {
  args: {
    iconLeading: ICON.STAR,
    label: 'Demo',
  },
};

export const IconLeading = {
  args: {
    iconLeading: ICON.STAR,
    label: 'Demo',
  },
};

export const IconTrailing = {
  args: {
    iconLeading: undefined,
    iconTrailing: ICON.STAR,
    label: 'Demo',
  },
};
