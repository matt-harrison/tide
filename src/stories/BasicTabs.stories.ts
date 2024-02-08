import { action } from '@storybook/addon-actions';

import type { Tab } from '@/types/Tab';

import BasicTabs from '@/components/BasicTabs.vue';
import { getLabelsFromOptions, parameters } from '@/utilities/storybook';

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
    callback: (event: Event) => {
      action('Tab 1 click')(event);
    },
    label: 'Tab 1',
  },
  {
    callback: (event: Event) => {
      action('Tab 2 click')(event);
    },
    label: 'Tab 2',
  },
  {
    callback: (event: Event) => {
      action('Tab 3 click')(event);
    },
    label: 'Tab 3',
  },
];

const render = (args: any) => ({
  components: { BasicTabs },
  setup: () => ({ args }),
  template: '<BasicTabs :key="args.activeTabInitial" class="tide-display-inline-flex" v-bind="args" />',
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
    tabs,
  },
  component: BasicTabs,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicTabs',
};

export const Demo = {};
