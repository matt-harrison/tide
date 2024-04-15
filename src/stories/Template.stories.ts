/* eslint-disable storybook/story-exports */

// IMPORTS
import TideChipInput from '@/components/TideChipInput.vue';
import { ICON } from '@/types/Icon';
import { argTypeBooleanUnrequired, formatArgType, formatSnippet } from '@/utilities/storybook';

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
  components: { TideChipInput },
  setup() {
    return formatArgs(args);
  },
  template: '<TideChipInput class="tide-display-inline-flex" v-bind="args" />',
  updated() {
    return formatArgs(args);
  },
});

// EXPORT
export default {
  argTypes: {
    argTypeBoilerplate: {
      ...formatArgType({ ICON }),
      description: 'Prop description',
    },
    argTypeBooleanUnrequired: {
      ...argTypeBooleanUnrequired,
    },
    argTypeComplete: {
      control: 'text',
      description: 'Complete ArgType<br />(Demonstrates all standard argType properties for this project)', // Description in Description column
      name: 'Complete', // Name column
      table: {
        defaultValue: { summary: 'None' }, // Default column
        type: { summary: 'string' }, // Type in Description column
      },
    },
    label: {
      control: 'text',
      description: 'Chip text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    label: 'Demo', // Value in Control column
  },
  component: TideChipInput,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Hidden/Story Template',
};
