import TideBadgePremium from '@/components/TideBadgePremium.vue';
import { BADGE_PREMIUM } from '@/types/Badge';
import { formatArgType, parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { TideBadgePremium },
  setup: () => ({ args }),
  template: `<TideBadgePremium v-bind="args" />`,
});

export default {
  argTypes: {
    label: {
      ...formatArgType({ BADGE_PREMIUM }),
      description: 'Badge text',
      table: {
        defaultValue: { summary: 'Premium' },
      },
    },
  },
  args: {
    label: BADGE_PREMIUM.PREMIUM,
  },
  component: TideBadgePremium,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/TideBadgePremium',
};

export const Demo = {};
