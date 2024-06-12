import { action } from '@storybook/addon-actions';

import type { Tab } from '@/types/Tab';

import TideTabs from '@/components/TideTabs.vue';
import { change, disabledArgType, doSomething, getLabelsFromOptions, parameters } from '@/utilities/storybook';

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
    dataTrack: 'Tab 0 Click',
    label: 'First Tab',
  },
  {
    dataTrack: 'Tab 1 Click',
    label: 'Second Tab',
  },
  {
    dataTrack: 'Tab 2 Click',
    label: 'Third Tab',
  },
];

const render = (args: any) => ({
  components: { TideTabs },
  methods: {
    doSomething,
    handleEmit: (event: Event, index: number) => {
      action(`Current tab ${index}`)(event, { index });

      try {
        const performCallback = eval(args.handleEmit);

        if (performCallback) {
          performCallback();
        }
      } catch {
        alert('Please specify a valid handler in the "change" control.');
      }
    },
  },
  setup: () => ({ args }),
  template:
    '<TideTabs @change="handleEmit" :key="args.activeTabInitial" class="tide-display-inline-flex" v-bind="args" />',
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
    change: disabledArgType,
    handleEmit: {
      ...change,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: '(event: Event, tabIndex: number) => void' },
      },
    },
    tabs: {
      control: 'object',
      description: 'Sets label and callback for each tab',
      isCustom: true,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'Tab[]' },
      },
    },
  },
  args: {
    activeTabInitial: undefined,
    handleEmit: 'doSomething',
    tabs,
  },
  component: TideTabs,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/TideTabs',
};

export const Demo = {};
