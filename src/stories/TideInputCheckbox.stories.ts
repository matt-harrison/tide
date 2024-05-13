import { action } from '@storybook/addon-actions';

import TideInputCheckbox from '@/components/TideInputCheckbox.vue';
import { argTypeBooleanUnrequired, dataTrack, parameters } from '@/utilities/storybook';

const render = (args: any, context: any) => ({
  components: { TideInputCheckbox },
  methods: {
    handleClick: (event: Event) => {
      const input = context.canvasElement.querySelector('input');

      action('TideInputCheckbox toggled')(event);
      context.updateArgs({ ...args, checked: input.checked === true, indeterminate: undefined });
    },
  },
  setup: () => ({ args }),
  template: `<TideInputCheckbox @click="handleClick" v-bind="args" />`,
});

export default {
  argTypes: {
    checked: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether Checkbox is checked or unchecked',
    },
    dataTrack,
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether Checkbox state is interactable',
    },
    indeterminate: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether Checkbox is indeterminate',
      if: { arg: 'checked', eq: true },
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
    number: {
      control: 'text',
      description: 'Parenthetical response count',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'number' },
      },
    },
  },
  args: {
    checked: undefined,
    dataTrack: '',
    disabled: undefined,
    indeterminate: undefined,
    inputId: '',
    label: 'Input label',
    name: '',
    number: '',
  },
  component: TideInputCheckbox,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideInputCheckbox',
};

export const Demo = {};
