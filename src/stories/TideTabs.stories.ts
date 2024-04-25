import { action } from '@storybook/addon-actions';

import type { Tab } from '@/types/Tab';

import TideTabs from '@/components/TideTabs.vue';
import { getLabelsFromOptions, doSomething, parameters } from '@/utilities/storybook';

/* eslint-disable */
// ^ Storybook controls are based on iterating over object properties instead of array slots (bad form), so these can't be ordered alphabetically.
const options = {
  'None': undefined,
  'Tab 1': 0,
  'Tab 2': 1,
  'Tab 3': 2,
};
/* eslint-enable */

const tabs: Tab[] = [
  {
    label: 'First Tab',
  },
  {
    label: 'Second Tab',
  },
  {
    label: 'Third Tab',
  },
];

const render = (args: any) => ({
  components: { TideTabs },
  methods: {
    doSomething,
    handleTabClick: (event: Event, index: number) => {
      action(`Current tab ${index}`)(args);

      try {
        const tabClick = eval(args.tabClick);

        if (tabClick) {
          tabClick();
        }
      } catch {
        alert('Please pass a valid function in the "tabClick" control.');
      }
    },
  },
  setup: () => ({ args }),
  template:
    '<TideTabs @tab-click="handleTabClick" :key="args.activeTabInitial" class="tide-display-inline-flex" v-bind="args" />',
});

export default {
  argTypes: {
    activeTabInitial: {
      control: {
        labels: getLabelsFromOptions(options),
        type: 'select',
      },
      description: 'Determines which tab should be active by default<br />(Subsequently managed within component)',
      isDynamic: true,
      options: Object.values(options),
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    tabClick: {
      control: 'text',
      description: 'JS function to execute when tab is clicked',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: '(event: Event, tabIndex: number) => void' },
      },
    },
    tabs: {
      control: 'object',
      description: 'Determines label and callback for each tab',
      isCustom: true,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'Tab[]' },
      },
    },
  },
  args: {
    activeTabInitial: undefined,
    tabClick: 'doSomething',
    tabs,
  },
  component: TideTabs,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideTabs',
};

export const Demo = {};
