import TideIndicator from '@/components/TideIndicator.vue';
import { parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { TideIndicator },
  setup: () => ({ args }),
  template: `<TideIndicator v-bind="args" />`,
});

export default {
  argTypes: {
    label: {
      control: 'text',
      description: 'Indicator text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'text' },
      },
    },
  },
  args: {
    label: '',
  },
  component: TideIndicator,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/TideIndicator',
};

export const Demo = {};
