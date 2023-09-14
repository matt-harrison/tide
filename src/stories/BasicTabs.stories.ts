import type { StoryContext } from '@storybook/vue3';

import type { Tab } from '@/types/Tab';

import BasicTabs from '@/components/BasicTabs.vue';
import { getLabelsFromOptions } from '@/utilities/storybook';

/* eslint-disable */
// ^ Storybook controls are based on iterating over object properties instead of array slots (bad form), so these can't be ordered alphabetically.
const options = {
  'None': undefined,
  '0 (Tab 1)': 0,
  '1 (Tab 2)': 1,
  '2 (Tab 3)': 2,
};
/* eslint-enable */

const tabs: Tab[] = [
  {
    callback: () => {
      console.log('Tab 1 clicked.');
    },
    label: 'Tab 1',
  },
  {
    callback: () => {
      console.log('Tab 2 clicked.');
    },
    label: 'Tab 2',
  },
  {
    callback: () => {
      console.log('Tab 3 clicked.');
    },
    label: 'Tab 3',
  },
];

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;
  const activeTabInitial = args.activeTabInitial !== undefined ? `:active-tab-initial="${args.activeTabInitial}" ` : '';

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
  setup: () => ({ args }),
  template: '<BasicTabs :key="args.activeTabInitial" class="inline-flex" v-bind="args" />',
});

export default {
  argTypes: {
    activeTabInitial: {
      control: {
        labels: getLabelsFromOptions(options),
        type: 'select',
      },
      description: 'Determines which tab should be active by default<br />(Subsequently managed within component)',
      options: Object.values(options),
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    tabs: {
      description: 'Determines label and callback for each tab',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'Tab[]' },
      },
      type: 'object',
    },
  },
  args: {
    activeTabInitial: undefined,
    tabs,
  },
  component: BasicTabs,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicTabs',
};

export const Demo = {};
