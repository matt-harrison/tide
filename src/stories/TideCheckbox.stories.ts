import { action } from '@storybook/addon-actions';

import TideCheckbox from '@/components/TideCheckbox.vue';
import { argTypeBooleanUnrequired, parameters } from '@/utilities/storybook';

const render = (args: any, { updateArgs }: any) => ({
  components: { TideCheckbox },
  methods: {
    handleClick: (event: Event) => {
      action('TideCheckbox toggled')(event);
      updateArgs({ ...args, value: args.value !== true });
    },
  },
  setup: () => ({ args }),
  template: `<TideCheckbox :checked="args.value || undefined" @click="handleClick" v-bind="args" />`,
});

export default {
  argTypes: {
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether Checkbox state is interactable',
    },
    error: {
      table: {
        disable: true,
      },
    },
    indeterminate: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether Checkbox is indeterminate',
    },
    inputId: {
      control: 'text',
      description: 'Unique ID attribute<br />(to bind Checkbox label to input)',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    label: {
      control: 'text',
      description: 'Label content',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    name: {
      control: 'text',
      description: 'Name attribute',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    required: {
      table: {
        disable: true,
      },
    },
    value: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether Checkbox is checked or unchecked',
    },
  },
  args: {
    inputId: '',
    label: 'Demo',
    name: 'demo',
    value: undefined,
  },
  component: TideCheckbox,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideCheckbox',
};

export const Demo = {};
