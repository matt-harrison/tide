import { action } from '@storybook/addon-actions';

import TideInputRadio from '@/components/TideInputRadio.vue';
import { argTypeBooleanUnrequired, dataTrack, parameters } from '@/utilities/storybook';

const render = (args: any, context: any) => ({
  components: { TideInputRadio },
  methods: {
    handleChange: (event: KeyboardEvent) => {
      const input = context.canvasElement.querySelector('input');

      action('TideInputRadio changed')(event);
      context.updateArgs({ ...args, checked: input.checked });
    },
  },
  setup: () => ({ args }),
  template: `<TideInputRadio @change="handleChange" v-bind="args" />`,
});

export default {
  argTypes: {
    checked: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether input is selected',
    },
    dataTrack,
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether input is interactable',
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
    name: {
      control: 'text',
      description: 'Name attribute',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    checked: undefined,
    dataTrack: '',
    disabled: undefined,
    inputId: '',
    label: 'Input label',
    name: '',
  },
  component: TideInputRadio,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/TideInputRadio',
};

export const Demo = {};
