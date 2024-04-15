import { action } from '@storybook/addon-actions';

import * as STANDARD_FORMAT from '@/types/Formatted';
import * as STANDARD_ICON from '@/types/Icon';
import * as STANDARD_TEXT_INPUT_TYPE from '@/types/TextInput';
import TideTextInput from '@/components/TideTextInput.vue';
import { VALIDATOR } from '@/types/Validation';
import {
  argTypeBooleanUnrequired,
  formatArgType,
  formatArgTypeCheck,
  parameters,
  prependNoneAsUndefined,
} from '@/utilities/storybook';

const FORMAT = prependNoneAsUndefined(STANDARD_FORMAT.FORMAT);
const ICON = prependNoneAsUndefined(STANDARD_ICON.ICON);
const TEXT_INPUT_TYPE = prependNoneAsUndefined(STANDARD_TEXT_INPUT_TYPE.TEXT_INPUT_TYPE);

const render = (args: any) => ({
  components: { TideTextInput },
  methods: {
    handleKeyUp: (event: KeyboardEvent) => {
      action('TideTextInput changed')(event);
    },
  },
  setup: () => ({ args }),
  template: `<TideTextInput @keyup="handleKeyUp" v-bind="args" />`,
});

export default {
  argTypes: {
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether Text Field is interactable',
    },
    error: {
      ...argTypeBooleanUnrequired,
      description: 'Reflects whether the Text Field value is valid',
    },
    iconLeading: {
      ...formatArgType({ ICON }),
      description: 'Icon at left of Text Field value',
    },
    inputId: {
      control: 'text',
      description: 'Unique ID attribute<br />(to bind Text Field label to input)',
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
      description: 'Applies a maximum character count to the Text Field',
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
      description: 'Applies a minimum character count to the Text Field',
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
      description: 'Text Field placeholder',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    required: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether Text Field is required',
    },
    suffix: {
      control: 'text',
      description: 'Text Field suffix<br />(i.e. units)',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    transformValue: {
      ...formatArgType({ FORMAT }),
      description: 'Determines text formatting applied to Text Field value upon invoking relevant listener event(s)',
    },
    type: {
      ...formatArgType({ TEXT_INPUT_TYPE }),
      description: 'Determines the type(s) of values expected by the Text Field',
    },
    validators: {
      ...formatArgTypeCheck({ VALIDATOR }),
      description:
        'Determines method(s) used to check for valid Text Field value upon invoking relevant listener event(s)',
    },
    value: {
      control: 'text',
      description: 'Text Field value',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    disabled: undefined,
    error: undefined,
    iconLeading: undefined,
    inputId: '',
    label: '',
    maxlength: undefined,
    minlength: undefined,
    name: '',
    placeholder: '',
    required: undefined,
    suffix: '',
    transformValue: undefined,
    type: undefined,
    validators: [],
    value: '',
  },
  component: TideTextInput,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideTextInput',
};

export const Demo = {};
