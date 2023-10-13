import { action } from '@storybook/addon-actions';

import type { StoryContext } from '@storybook/vue3';

import BasicToggle from '@/components/BasicToggle.vue';
import { click } from '@/utilities/storybook';

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  return `<BasicToggle @click="${args.click}" :is-active="${args.isActive}" />`;
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

const render = (args: any, { updateArgs }: any) => ({
  components: { BasicToggle },
  methods: {
    handleClick: (event: Event) => {
      updateArgs({ ...args, isActive: !args.isActive });

      if (args.click) action(args.click)(event);
    },
  },
  setup: () => ({ args }),
  template: `<BasicToggle v-bind="args" @click="handleClick" />`,
});

export default {
  argTypes: {
    click,
    isActive: {
      control: 'boolean',
      description: 'Determines whether toggle is active',
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    click: 'doSomething',
    isActive: false,
  },
  component: BasicToggle,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicToggle',
};

export const Demo = {};
