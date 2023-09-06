import BasicToggle from '@/components/BasicToggle.vue';
import { click, parameters } from '@/utilities/storybook';

export default {
  argTypes: {
    click,
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
    click: 'handleClick',
    isActive: false,
  },
  component: BasicToggle,
  parameters,
  tags: ['autodocs'],
  title: 'Basic Components/BasicToggle',
};

export const Demo = {};
