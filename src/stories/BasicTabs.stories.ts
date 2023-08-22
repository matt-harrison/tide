import type { Tab } from '@/types/Tab';

import BasicTabs from '@/components/BasicTabs.vue';

const tabs: Tab[] = [
  {
    callback: () => {},
    label: 'Tab 1',
  },
  {
    callback: () => {},
    label: 'Tab 2',
  },
  {
    callback: () => {},
    label: 'Tab 3',
  },
];

const formatArgs = (args: any) => {
  return { args };
};

const formatSnippet = () => {
  return '<BasicTabs :tabs="tabs" />';
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
  components: { BasicTabs },
  setup() {
    return formatArgs(args);
  },
  template: '<BasicTabs class="inline-flex" v-bind="args" />',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    tabs: {
      table: {
        defaultValue: { summary: '[]' },
      },
      type: 'object',
    },
  },
  component: BasicTabs,
  tags: ['autodocs'],
  title: 'Basic Components/BasicTabs',
};

export const Demo = {
  args: {
    tabs,
  },
  parameters,
  render,
};
