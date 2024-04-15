import { action } from '@storybook/addon-actions';

import TideChipFilter from '@/components/TideChipFilter.vue';
import { argTypeBooleanUnrequired, click, parameters } from '@/utilities/storybook';

const render = (args: any, { updateArgs }: any) => ({
  components: { TideChipFilter },
  methods: {
    handleClick: (event: Event) => {
      if (args.click) action(args.click)(event);

      updateArgs({ ...args, isActive: !args.isActive });
    },
  },
  setup: () => ({ args }),
  template: `<TideChipFilter @click="handleClick" class="tide-display-inline-flex" v-bind="args">{{ args.default }}</TideChipFilter>`,
});

export default {
  argTypes: {
    click,
    default: {
      control: 'text',
      defaultValue: 'None',
      description: 'Content above label<br />(i.e. Vehicle thumbnail)',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'HTML' },
      },
    },
    isActive: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether toggle is active',
    },
    label: {
      control: 'text',
      description: 'Chip text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    click: 'doSomething',
    default: '',
    isActive: undefined,
    label: 'Demo',
  },
  component: TideChipFilter,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideChipFilter',
};

export const Demo = {};
