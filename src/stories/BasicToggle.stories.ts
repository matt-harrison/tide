import BasicToggle from '@/components/BasicToggle.vue';
import { parameters } from '@/utilities/storybook';

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
  parameters,
  tags: ['autodocs'],
  title: 'Basic Components/BasicToggle',
};

export const Demo = {};
