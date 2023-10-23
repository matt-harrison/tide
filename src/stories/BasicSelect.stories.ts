import { action } from '@storybook/addon-actions';

import type { SelectOption } from '@/types/Select';

import * as STANDARD_ICON from '@/types/Icon';
import BasicSelect from '@/components/BasicSelect.vue';
import {
  argTypeBooleanUnrequired,
  formatArgType,
  getLabelsFromOptions,
  parameters,
  prependNoneAsUndefined,
} from '@/utilities/storybook';

const ICON = prependNoneAsUndefined(STANDARD_ICON.ICON);

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
  components: { BasicSelect },
  methods: {
    handleChange: (event: Event) => {
      const value = parseInt((event?.target as HTMLSelectElement).value, 10);

      action('BasicSelect changed')(event);
      updateArgs({ ...args, value });
    },
  },
  setup: () => ({ args }),
  template: `<BasicSelect @change="handleChange" v-bind="args" />`,
});

export default {
  argTypes: {
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether Select is interactable',
    },
    error: {
      ...argTypeBooleanUnrequired,
      description: 'Reflects whether the Select value is valid',
    },
    iconLeading: {
      ...formatArgType({ ICON }),
      description: 'Icon at left of Select value',
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
    placeholder: {
      control: 'text',
      description: 'Select placeholder',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    required: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether Select is required',
    },
    selectId: {
      control: 'text',
      description: 'Unique ID attribute<br />(to bind Select label to input)',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    suffix: {
      control: 'text',
      description: 'Select suffix<br />(i.e. units)',
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
    disabled: undefined,
    error: undefined,
    iconLeading: undefined,
    label: '',
    name: '',
    options: selectOptions,
    placeholder: '',
    required: undefined,
    selectId: '',
    suffix: '',
    value: undefined,
  },
  component: BasicSelect,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicSelect',
};

export const Demo = {};
