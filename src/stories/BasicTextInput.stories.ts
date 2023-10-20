import { action } from '@storybook/addon-actions';

import * as STANDARD_ICON from '@/types/Icon';
import * as STANDARD_TEXT_INPUT_TYPE from '@/types/TextInput';
import BasicTextInput from '@/components/BasicTextInput.vue';
import { VALIDATOR } from '@/types/Validation';
import {
  argTypeBooleanUnrequired,
  formatArgType,
  formatArgTypeCheck,
  parameters,
  prependNoneAsUndefined,
} from '@/utilities/storybook';
import { formatPrice } from '@/utilities/format';

const ICON = prependNoneAsUndefined(STANDARD_ICON.ICON);
const TEXT_INPUT_TYPE = prependNoneAsUndefined(STANDARD_TEXT_INPUT_TYPE.TEXT_INPUT_TYPE);

const render = (args: any, { updateArgs }: any) => ({
  components: { BasicTextInput },
  methods: {
    formatPrice,
    handleKeyUp: (event: KeyboardEvent) => {
      const component = event?.currentTarget as HTMLInputElement;
      const field = component.querySelector('input');
      const value = field?.value || '';

      action('BasicTextInput changed')(event);
      updateArgs({ ...args, value });
    },
  },
  setup: () => ({ args }),
  template: `<BasicTextInput @keyup="handleKeyUp" v-bind="args" />`,
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
    maxLength: {
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
    minLength: {
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
      control: 'select',
      description: 'Determines text formatting applied to Text Field value upon invoking relevant listener event(s)',
      options: {
        None: undefined,
        formatPrice,
      },
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'function' },
      },
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
    maxLength: undefined,
    minLength: undefined,
    name: '',
    placeholder: '',
    required: undefined,
    suffix: '',
    transformValue: undefined,
    type: undefined,
    validators: [],
    value: '',
  },
  component: BasicTextInput,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicTextInput',
};

export const Demo = {};