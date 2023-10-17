import { action } from '@storybook/addon-actions';

import BasicCheckbox from '@/components/BasicCheckbox.vue';
import { argTypeBooleanUnrequired, parameters } from '@/utilities/storybook';

const render = (args: any, { updateArgs }: any) => ({
  components: { BasicCheckbox },
  methods: {
    handleClick: (event: Event) => {
      action('BasicCheckbox toggled')(event);
      updateArgs({ ...args, value: args.value !== true });
    },
  },
  setup: () => ({ args }),
  template: `<BasicCheckbox :checked="args.value || undefined" @click="handleClick" v-bind="args" />`,
});

export default {
  argTypes: {
    checkboxClass: {
      control: 'text',
      description: 'CSS utilities applied to the Checkbox input',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether Checkbox is interactable',
    },
    error: {
      table: {
        disable: true,
      },
    },
    indeterminate: {
      table: {
        disable: true,
      },
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
    labelClass: {
      control: 'text',
      description: 'CSS utilities applied to the Checkbox label',
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
    checkboxClass: '',
    inputId: '',
    label: 'Demo',
    labelClass: '',
    name: 'demo',
    value: undefined,
  },
  component: BasicCheckbox,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicCheckbox',
};

export const Demo = {};
