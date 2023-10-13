import { action } from '@storybook/addon-actions';

import type { StoryContext } from '@storybook/vue3';

import BasicButton from '@/components/BasicButton.vue';
import { ELEMENT } from '@/types/Element';
import { ICON } from '@/types/Icon';
import { PRIORITY } from '@/types/Priority';
import { SIZE } from '@/types/Size';
import { argTypeBooleanUnrequired } from '@/utilities/storybook';
import { click, formatArgType } from '@/utilities/storybook';

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  return `<BasicButton @click="${args.click}" v-bind="${args}" />`;
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
  components: { BasicButton },
  methods: {
    handleClick: (event: Event) => {
      if (args.click) action(args.click)(event);
    },
  },
  setup: () => ({ args }),
  template: `<BasicButton @click="handleClick" v-bind="args" />`,
});

export default {
  argTypes: {
    click: {
      ...click,
      if: { arg: 'element', neq: ELEMENT.LINK },
    },
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines clickability<br />(Button only)',
      if: { arg: 'element', neq: ELEMENT.LINK },
    },
    element: {
      ...formatArgType({ ELEMENT }),
      description: 'HTML tag type',
      table: {
        defaultValue: { summary: 'BUTTON' },
      },
    },
    href: {
      description: 'URL to open<br />(Link only)',
      if: { arg: 'element', eq: ELEMENT.LINK },
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    iconLeading: {
      ...formatArgType({ ICON }),
      description: 'Icon to left of label',
    },
    iconTrailing: {
      ...formatArgType({ ICON }),
      description: 'Icon to right of label',
    },
    isNewTab: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether to target a new browser tab<br />(Link only)',
      if: { arg: 'element', eq: ELEMENT.LINK },
    },
    label: {
      control: 'text',
      description: 'Button text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    priority: {
      ...formatArgType({ PRIORITY }),
      description: 'Determines visual prominence',
      table: {
        defaultValue: { summary: 'PRIMARY' },
      },
    },
    size: {
      ...formatArgType({ SIZE }),
      description: 'Icon to left of label',
      table: {
        defaultValue: { summary: 'MEDIUM' },
      },
    },
  },
  args: {
    click: 'doSomething',
    disabled: undefined,
    element: undefined,
    href: 'https://www.traderinteractive.com',
    iconLeading: undefined,
    iconTrailing: undefined,
    isNewTab: undefined,
    label: 'Demo',
    priority: undefined,
    size: undefined,
  },
  component: BasicButton,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButton',
};

export const Demo = {};
