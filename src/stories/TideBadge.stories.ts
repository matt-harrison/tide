import { BADGE } from '@/types/Badge';
import TideBadge from '@/components/TideBadge.vue';
import { formatArgType, parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { TideBadge },
  setup: () => ({ args }),
  template: `<TideBadge class="tide-shadow-bottom" v-bind="args" />`,
});

export default {
  argTypes: {
    label: {
      ...formatArgType({ BADGE }),
      description: 'Badge text',
      table: {
        defaultValue: { summary: 'None' },
      },
    },
  },
  args: {
    label: BADGE.JUST_LISTED,
  },
  component: TideBadge,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideBadge',
};

export const Demo = {};
