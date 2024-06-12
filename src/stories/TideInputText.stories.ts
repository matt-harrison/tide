import { action } from '@storybook/addon-actions';

import * as STANDARD_FORMAT from '@/types/Formatted';
import * as STANDARD_ICON from '@/types/Icon';
import * as STANDARD_TEXT_INPUT_TYPE from '@/types/TextInput';
import TideInputText from '@/components/TideInputText.vue';
import { VALIDATOR } from '@/types/Validation';
import {
  argTypeBooleanUnrequired,
  dataTrack,
  formatArgType,
  formatArgTypeCheck,
  parameters,
  prependNoneAsUndefined,
} from '@/utilities/storybook';

const FORMAT = prependNoneAsUndefined(STANDARD_FORMAT.FORMAT);
const ICON = prependNoneAsUndefined(STANDARD_ICON.ICON);
const TEXT_INPUT_TYPE = prependNoneAsUndefined(STANDARD_TEXT_INPUT_TYPE.TEXT_INPUT_TYPE);

const render = (args: any, context: any) => ({
  components: { TideInputText },
  methods: {
    handleChange: (event: KeyboardEvent) => {
      const input = context.canvasElement.querySelector('input');

      action('TideInputText changed')(event);
      context.updateArgs({ ...args, value: input.value });
    },
  },
  setup: () => ({ args }),
  template: `<TideInputText @change="handleChange" v-bind="args" />`,
});

export default {
  argTypes: {
    autocomplete: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether browser attempts to autocomplete',
    },
    dataTrack,
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether input is interactable',
    },
    error: {
      ...argTypeBooleanUnrequired,
      description: 'Reflects whether the input value is valid',
    },
    hasClear: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether browser attempts to autocomplete',
      if: { arg: 'type', neq: TEXT_INPUT_TYPE.PASSWORD },
    },
    iconLeading: {
      ...formatArgType({ ICON }),
      description: 'Icon at left of input value',
    },
    inputId: {
      control: 'text',
      description: 'Unique ID attribute<br />(to bind input label to input)',
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
      control: 'text',
      description: 'Applies a maximum character count to the input',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'number' },
      },
    },
    minlength: {
      control: 'text',
      description: 'Applies a minimum character count to the input',
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
    prefix: {
      control: 'text',
      description: 'input prefix',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    required: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether input is required',
    },
    suffix: {
      control: 'text',
      description: 'input suffix<br />(i.e. units)',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
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
    transformValue: {
      ...formatArgType({ FORMAT }),
      description: 'Determines text formatting applied to input value upon invoking relevant listener event(s)',
    },
    type: {
      ...formatArgType({ TEXT_INPUT_TYPE }),
      description: 'Determines the type(s) of values expected by the input',
    },
    updateValue: {
      table: {
        disable: true,
      },
    },
    validators: {
      ...formatArgTypeCheck({ VALIDATOR }),
      description: 'Determines method(s) used to check for valid input value upon invoking relevant listener event(s)',
    },
    value: {
      control: 'text',
      description: 'input value',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    autocomplete: undefined,
    dataTrack: '',
    disabled: undefined,
    error: undefined,
    hasClear: undefined,
    iconLeading: undefined,
    inputId: '',
    label: 'Input label',
    maxlength: '',
    minlength: '',
    name: '',
    prefix: '',
    required: undefined,
    suffix: '',
    supportingText: '',
    transformValue: undefined,
    type: undefined,
    validators: [],
    value: '',
  },
  component: TideInputText,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/TideInputText',
};

export const Demo = {};
