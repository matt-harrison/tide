import * as STANDARD_ICON from '@/types/Icon';
import TideBadge from '@/components/TideBadge.vue';
import { argTypeBooleanUnrequired, formatArgType, parameters, prependNoneAsUndefined } from '@/utilities/storybook';

const ICON = prependNoneAsUndefined(STANDARD_ICON.ICON);

const render = (args: any) => ({
  components: { TideBadge },
  setup: () => ({ args }),
  template: `<TideBadge v-bind="args" />`,
});

export default {
  argTypes: {
    hasHighlight: {
      ...argTypeBooleanUnrequired,
      description: 'Determines background color',
    },
    iconLeading: {
      ...formatArgType({ ICON }),
      description: 'Icon to left of label',
    },
    label: {
      control: 'text',
      description: 'Button text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    hasHighlight: undefined,
    iconLeading: undefined,
    label: 'Demo',
  },
  component: TideBadge,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideBadge',
};

export const Demo = {};
