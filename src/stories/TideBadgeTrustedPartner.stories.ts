import * as STANDARD_BADGE from '@/types/Storybook';
import TideBadgeTrustedPartner from '@/components/TideBadgeTrustedPartner.vue';
import { formatArgType, parameters, prependNoneAsUndefined } from '@/utilities/storybook';

const BADGE_TRUSTED = prependNoneAsUndefined(STANDARD_BADGE.BADGE_TRUSTED);

const render = (args: any) => ({
  components: { TideBadgeTrustedPartner },
  setup: () => ({ args }),
  template: `<TideBadgeTrustedPartner v-bind="args" />`,
});

export default {
  argTypes: {
    years: {
      ...formatArgType({ BADGE_TRUSTED }),
      description: 'Badge text',
      table: {
        defaultValue: { summary: BADGE_TRUSTED.YEARS_5 },
      },
    },
  },
  args: {
    years: undefined,
  },
  component: TideBadgeTrustedPartner,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideBadgeTrustedPartner',
};

export const Demo = {};
