import TideBadgeCounter from '@/components/TideBadgeCounter.vue';
import { parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { TideBadgeCounter },
  setup: () => ({ args }),
  template: `<TideBadgeCounter class="tide-shadow-bottom" v-bind="args" />`,
});

export default {
  argTypes: {
    slideCurrent: {
      control: {
        min: 1,
        type: 'number',
      },
      description: 'Index of current slide being displayed',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'number' },
      },
    },
    slideTotal: {
      control: {
        min: 1,
        type: 'number',
      },
      description: 'Total number of slides in carousel',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'number' },
      },
    },
  },
  args: {
    slideCurrent: 1,
    slideTotal: 24,
  },
  component: TideBadgeCounter,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideBadgeCounter',
};

export const Demo = {};
