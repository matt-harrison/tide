import TideBadgeMisc from '@/components/TideBadgeMisc.vue';
import { parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { TideBadgeMisc },
  setup: () => ({ args }),
  template: `<TideBadgeMisc class="tide-shadow-bottom" v-bind="args" />`,
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
  component: TideBadgeMisc,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideBadgeMisc',
};

export const Demo = {};
