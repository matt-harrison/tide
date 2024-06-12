import * as STANDARD_ALERT from '@/types/Alert';
import TideAlert from '@/components/TideAlert.vue';
import {
  argTypeBooleanUnrequired,
  dataTrack,
  formatArgType,
  parameters,
  prependNoneAsUndefined,
} from '@/utilities/storybook';

const render = (args: any) => ({
  components: { TideAlert },
  setup: () => ({ args }),
  template: `<TideAlert v-bind="args">{{ args.default }}</TideAlert>`,
});

const ALERT = prependNoneAsUndefined(STANDARD_ALERT.ALERT);

export default {
  argTypes: {
    dataTrack,
    default: {
      control: 'text',
      description: 'Body text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'HTML' },
      },
    },
    heading: {
      control: 'text',
      description: 'Heading text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'HTML' },
      },
    },
    isToast: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether the Alert is an overlay or displaces content',
    },
    type: {
      ...formatArgType({ ALERT }),
      description: 'Alert type',
      table: {
        defaultValue: { summary: 'ALERT' },
      },
    },
  },
  args: { dataTrack: '', default: '', heading: 'Heading', isToast: undefined, type: undefined },
  component: TideAlert,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/TideAlert',
};

export const Demo = {};
