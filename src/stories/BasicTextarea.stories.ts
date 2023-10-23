import { action } from '@storybook/addon-actions';

import * as STANDARD_FORMAT from '@/types/Formatted';
import BasicTextarea from '@/components/BasicTextarea.vue';
import { VALIDATOR } from '@/types/Validation';
import {
  argTypeBooleanUnrequired,
  formatArgType,
  formatArgTypeCheck,
  parameters,
  prependNoneAsUndefined,
} from '@/utilities/storybook';
import { formatPrice } from '@/utilities/format';

const FORMAT = prependNoneAsUndefined(STANDARD_FORMAT.FORMAT);

const render = (args: any) => ({
  components: { BasicTextarea },
  methods: {
    formatPrice,
    handleKeyUp: (event: KeyboardEvent) => {
      action('BasicTextarea changed')(event);
    },
  },
  setup: () => ({ args }),
  template: `<BasicTextarea @keyup="handleKeyUp" v-bind="args" />`,
});

export default {
  argTypes: {
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether Textarea is interactable',
    },
    error: {
      ...argTypeBooleanUnrequired,
      description: 'Reflects whether the Textarea value is valid',
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
    placeholder: {
      control: 'text',
      description: 'Textarea placeholder',
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
    textareaId: {
      control: 'text',
      description: 'Unique ID attribute<br />(to bind Textarea label to input)',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    transformValue: {
      ...formatArgType({ FORMAT }),
      description: 'Determines text formatting applied to Textarea value upon invoking relevant listener event(s)',
    },
    validators: {
      ...formatArgTypeCheck({ VALIDATOR }),
      description:
        'Determines method(s) used to check for valid Textarea value upon invoking relevant listener event(s)',
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
    disabled: undefined,
    error: undefined,
    label: '',
    maxlength: undefined,
    minlength: undefined,
    name: '',
    placeholder: '',
    required: undefined,
    rows: undefined,
    textareaId: '',
    transformValue: undefined,
    validators: [],
    value: '',
  },
  component: BasicTextarea,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicTextarea',
};

export const Demo = {};
