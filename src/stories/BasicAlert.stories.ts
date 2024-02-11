import * as STANDARD_ALERT from '@/types/Alert';
import BasicAlert from '@/components/BasicAlert.vue';
import { argTypeBooleanUnrequired, formatArgType, parameters, prependNoneAsUndefined } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { BasicAlert },
  setup: () => ({ args }),
  template: `<BasicAlert v-bind="args">{{ args.default }}</BasicAlert>`,
});

const ALERT = prependNoneAsUndefined(STANDARD_ALERT.ALERT);

export default {
  argTypes: {
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
  args: {
    default: '',
    heading: 'Heading',
    isToast: false,
    type: undefined,
  },
  component: BasicAlert,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicAlert',
};

export const Demo = {};
