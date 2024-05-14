import TideBadge from '@/components/TideBadge.vue';
import { parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { TideBadge },
  setup: () => ({ args }),
  template: `<TideBadge class="tide-shadow-bottom" v-bind="args" />`,
});

export default {
  argTypes: {
    label: {
      control: 'text',
      description: 'Badge text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    label: 'Demo',
  },
  component: TideBadge,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideBadge',
};

export const Demo = {};
