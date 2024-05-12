import { action } from '@storybook/addon-actions';

import type { SelectOption } from '@/types/Select';

import TideInputSelect from '@/components/TideInputSelect.vue';
import {
  argTypeBooleanUnrequired,
  dataTrack,
  formatArgType,
  getLabelsFromOptions,
  parameters,
} from '@/utilities/storybook';

const options = {
  'Option 1': 1,
  'Option 2': 2,
  'Option 3': 3,
};

const selectOptions: SelectOption[] = [
  {
    label: 'Option 1',
    value: 1,
  },
  {
    label: 'Option 2',
    value: 2,
  },
  {
    label: 'Option 3',
    value: 3,
  },
];

const render = (args: any, { updateArgs }: any) => ({
  components: { TideInputSelect },
  methods: {
    handleChange: (event: Event) => {
      const value = parseInt((event?.target as HTMLSelectElement).value, 10);

      action('TideInputSelect changed')(event);
      updateArgs({ ...args, value });
    },
  },
  setup: () => ({ args }),
  template: `<TideInputSelect @change="handleChange" v-bind="args" />`,
});

export default {
  argTypes: {
    dataTrack,
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether Select is interactable',
    },
    error: {
      ...argTypeBooleanUnrequired,
      description: 'Reflects whether the Select value is valid',
    },
    inputId: {
      control: 'text',
      description: 'Unique ID attribute<br />(to bind Select label to input)',
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
    options: {
      ...formatArgType({ selectOptions }),
      control: 'object',
      description: 'Determines values found inside Select',
      isCustom: true,
      table: {
        defaultValue: { summary: '[]' },
        type: { summary: 'SelectOption[]' },
      },
    },
    required: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether Select is required',
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
      control: {
        labels: getLabelsFromOptions(options),
        type: 'select',
      },
      description: 'Determines which tab should be active by default<br />(Subsequently managed within component)',
      options: Object.values(options),
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'SelectOption' },
      },
    },
  },
  args: {
    dataTrack: '',
    disabled: undefined,
    error: undefined,
    inputId: '',
    label: 'Input label',
    name: '',
    options: selectOptions,
    required: undefined,
    supportingText: '',
    value: undefined,
  },
  component: TideInputSelect,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideInputSelect',
};

export const Demo = {};
