import BasicLinkWithIcon from '@/components/BasicLinkWithIcon.vue';
import { ICON } from '@/types/Icon';
import { TARGET } from '@/types/Target';
import { formatSnippet, iconControl } from '@/utilities/storybook';

const parameters = {
  docs: {
    source: {
      format: false,
      language: 'html',
      transform: formatSnippet,
    },
  },
};

const formatArgs = (args: any) => {
  return { args };
};

const render = (args: any) => ({
  components: { BasicLinkWithIcon },
  setup() {
    return formatArgs(args);
  },
  template: '<BasicLinkWithIcon v-bind="args" />',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    classIcon: {
      control: 'text',
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    href: {
      control: 'text',
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    iconLeading: iconControl,
    iconTrailing: iconControl,
    label: {
      control: 'text',
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    target: {
      control: 'select',
      options: TARGET,
      table: {
        defaultValue: { summary: 'None' },
      },
    },
  },
  component: BasicLinkWithIcon,
  tags: ['autodocs'],
  title: 'Basic Components/BasicLinkWithIcon',
};

export const Demo = {
  args: {
    classIcon: '',
    href: '',
    iconLeading: ICON.STAR,
    label: 'Demo',
    target: '',
  },
  parameters,
  render,
};

export const IconLeading = {
  args: {
    classIcon: '',
    href: '',
    iconLeading: ICON.STAR,
    label: 'Demo',
    target: '',
  },
  parameters,
  render,
};

export const IconTrailing = {
  args: {
    classIcon: '',
    href: '',
    iconTrailing: ICON.STAR,
    label: 'Demo',
    target: '',
  },
  parameters,
  render,
};
