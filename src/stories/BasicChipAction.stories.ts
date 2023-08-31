import BasicChipAction from '@/components/BasicChipAction.vue';
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
  components: { BasicChipAction },
  setup: () => ({ args }),
  template: '<BasicChipAction class="inline-flex" v-bind="args" />',
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
    href: '/',
    label: 'Demo',
  },
  component: BasicChipAction,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicChipAction',
};

export const Demo = {
  args: {
    href: '/',
  },
};
