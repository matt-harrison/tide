import BasicChipInput from '@/components/BasicChipInput.vue';
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

const render = (args: any) => ({
  components: { BasicChipInput },
  setup: () => ({ args }),
  template: '<BasicChipInput class="inline-flex" v-bind="args" />',
});

export default {
  argTypes: {
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
    label: 'Demo',
  },
  component: BasicChipInput,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicChipInput',
};

export const Demo = {};
