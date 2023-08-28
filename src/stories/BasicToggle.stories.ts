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
      description: 'Determines whether toggle is active',
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    isActive: false,
  },
  component: BasicToggle,
  tags: ['autodocs'],
  title: 'Basic Components/BasicToggle',
};

export const Demo = {
  parameters,
  render,
};

export const Inactive = {
  args: {
    isActive: false,
  },
  parameters,
  render,
};

export const Active = {
  args: {
    isActive: true,
  },
  parameters,
  render,
};
