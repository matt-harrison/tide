import BasicToggle from '@/components/BasicToggle.vue';
import { formatSnippet } from '@/utilities/storybook';

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
  components: { BasicToggle },
  setup() {
    return formatArgs(args);
  },
  template: '<BasicToggle v-bind="args" />',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    isActive: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'False' },
      },
    },
  },
  component: BasicToggle,
  tags: ['autodocs'],
  title: 'Basic Components/BasicToggle',
};

export const Demo = {
  args: {
    isActive: false,
  },
  parameters,
  render,
};

export const BasicToggleInactive = {
  args: {
    isActive: false,
  },
  parameters,
  render,
};

export const BasicToggleActive = {
  args: {
    isActive: true,
  },
  parameters,
  render,
};
