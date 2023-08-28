import type { StoryContext } from '@storybook/vue3';

import type { Tab } from '@/types/Tab';

import BasicTabs from '@/components/BasicTabs.vue';
import { getLabelsFromOptions } from '@/utilities/storybook';

const options = {
  'None': undefined,
  'Tab 1': 0,
  'Tab 2': 1,
  'Tab 3': 2,
};

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

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;
  const activeTabInitial = args.activeTabInitial !== undefined ? `:activeTabInitial="${args.activeTabInitial}" ` : '';

  return `<BasicTabs ${activeTabInitial}:tabs="tabs" />`;
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
    activeTabInitial: {
      control: {
        labels: getLabelsFromOptions(options),
        type: 'select',
      },
      description:
        'Zero-based index of tab to display as active on initial load.<br />(Subsequently managed within component)',
      options: Object.values(options),
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    tabs: {
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'Tab' },
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
    activeTabInitial: undefined,
    tabs,
  },
  parameters,
  render,
};

export const InitialTab2 = {
  args: {
    activeTabInitial: 1,
    tabs,
  },
  parameters,
  render,
};

export const InitialTab3 = {
  args: {
    activeTabInitial: 2,
    tabs,
  },
  parameters,
  render,
};
