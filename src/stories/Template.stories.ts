/* eslint-disable storybook/story-exports */

// IMPORTS
import BasicChipInput from '@/components/BasicChipInput.vue';
import { formatSnippet } from '@/utilities/storybook';

// PARAMETERS
const parameters = {
  docs: {
    source: {
      format: false,
      language: 'html',
      transform: formatSnippet,
    },
  },
};

// STANDARD FUNCTIONS
const formatArgs = (args: any) => {
  return { args };
};

const render = (args: any) => ({
  components: { BasicChipInput },
  setup() {
    return formatArgs(args);
  },
  template: '<BasicChipInput class="inline-flex" v-bind="args" />',
  updated() {
    return formatArgs(args);
  },
});

// EXPORT
export default {
  argTypes: {
    label: {
      control: 'text',
      description: 'Label<br />(Note)', // Description in Description column
      name: 'Label', // Name column
      table: {
        defaultValue: { summary: 'None' }, // Default column
        type: { summary: 'string' }, // Type in Description column
      },
    },
  },
  args: {
    label: 'Demo', // Value in Control column
  },
  component: BasicChipInput,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Hidden/Story Template',
};
