import { action } from '@storybook/addon-actions';

import type { StoryContext } from '@storybook/vue3';

import BasicChipInput from '@/components/BasicChipInput.vue';
import { click } from '@/utilities/storybook';

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  const argsWithValues: string[] = [];

  if (args.label) argsWithValues.push(`label="${args.label}"`);

  return `<BasicChipInput ${argsWithValues.join(' ')} @click="${args.click}" />`;
};

const parameters = {
  docs: {
    source: {
      format: false,
      language: 'html',
      transform: formatSnippet,
    },
  },
};

const render = (args: any) => ({
  components: { BasicChipInput },
  methods: {
    handleClick: (event: Event) => {
      if (args.click) action(args.click)(event);
    },
  },
  setup: () => ({ args }),
  template: `<BasicChipInput @click="handleClick" v-bind="args" />`,
});

export default {
  argTypes: {
    click,
    label: {
      control: 'text',
      description: 'Chip text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    click: 'doSomething',
    label: 'Demo',
  },
  component: BasicChipInput,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicChipInput',
};

export const Demo = {};
