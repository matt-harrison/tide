import BasicChipInput from '@/components/BasicChipInput.vue';
import { click, formatSnippet } from '@/utilities/storybook';

const parameters = {
  docs: {
    source: {
      format: false,
      language: 'html',
      transform: formatSnippet,
    },
  },
};

export default {
  argTypes: {
    click,
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
    click: 'handleClick',
    label: 'Demo',
  },
  component: BasicChipInput,
  parameters,
  tags: ['autodocs'],
  title: 'Basic Components/BasicChipInput',
};

export const Demo = {};
