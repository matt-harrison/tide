import { action } from '@storybook/addon-actions';

import TideInputTextarea from '@/components/TideInputTextarea.vue';
import { argTypeBooleanUnrequired, dataTrack, parameters } from '@/utilities/storybook';

const render = (args: any, context: any) => ({
  components: { TideInputTextarea },
  methods: {
    handleKeyUp: (event: KeyboardEvent) => {
      const input = context.canvasElement.querySelector('textarea');

      action('TideInputTextarea changed')(event);
      context.updateArgs({ ...args, value: input.value });
    },
  },
  setup: () => ({ args }),
  template: `<TideInputTextarea @keyup="handleKeyUp" v-bind="args" />`,
});

export default {
  argTypes: {
    dataTrack,
    inputId: {
      control: 'text',
      description: 'Unique ID attribute<br />(to bind Textarea label to input)',
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
    maxlength: {
      control: {
        min: 1,
        type: 'number',
      },
      description: 'Applies a maximum character count to the Textarea',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'number' },
      },
    },
    minlength: {
      control: {
        min: 1,
        type: 'number',
      },
      description: 'Applies a minimum character count to the Textarea',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'number' },
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
      ...argTypeBooleanUnrequired,
      description: 'Determines whether Textarea is required',
    },
    rows: {
      control: 'number',
      description: 'Determines the height of the Textarea',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'number' },
      },
    },
    supportingText: {
      control: 'text',
      description: 'Explainer text beneath input',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Textarea value',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    dataTrack: '',
    inputId: '',
    label: 'Input label',
    maxlength: '',
    minlength: '',
    name: '',
    required: undefined,
    rows: undefined,
    supportingText: '',
    value: '',
  },
  component: TideInputTextarea,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideInputTextarea',
};

export const Demo = {};
