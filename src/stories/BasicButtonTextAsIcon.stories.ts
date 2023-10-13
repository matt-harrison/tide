import { action } from '@storybook/addon-actions';

import type { StoryContext } from '@storybook/vue3';

import BasicButtonTextAsIcon from '@/components/BasicButtonTextAsIcon.vue';
import { ELEMENT_TEXT_AS_ICON } from '@/types/Element';
import { PRIORITY } from '@/types/Priority';
import { SIZE } from '@/types/Size';
import { argTypeBooleanUnrequired, click, formatArgType } from '@/utilities/storybook';

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  return `<BasicButtonTextAsIcon @click="${args.click}" v-bind="${args}" />`;
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
  components: { BasicButtonTextAsIcon },
  methods: {
    handleClick: (event: Event) => {
      if (args.click) action(args.click)(event);
    },
  },
  setup: () => ({ args }),
  template: `<BasicButtonTextAsIcon @click="handleClick" v-bind="args" />`,
});

export default {
  argTypes: {
    click: {
      ...click,
      if: { arg: 'element', neq: ELEMENT_TEXT_AS_ICON.LINK },
    },
    disabled: {
      ...argTypeBooleanUnrequired,
      description: 'Determines clickability<br />(Button only)',
      if: {
        arg: 'element',
        neq: ELEMENT_TEXT_AS_ICON.LINK,
        // TODO: neq: ELEMENT_TEXT_AS_ICON.LINK || ELEMENT_TEXT_AS_ICON.DIV
      },
    },
    element: {
      ...formatArgType({ ELEMENT_TEXT_AS_ICON }),
      description: 'HTML tag type',
      table: {
        defaultValue: { summary: 'BUTTON' },
      },
    },
    href: {
      description: 'URL to open<br />(Link only)',
      if: { arg: 'element', eq: ELEMENT_TEXT_AS_ICON.LINK },
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    isNewTab: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether to target a new browser tab<br />(Link only)',
      if: { arg: 'element', eq: ELEMENT_TEXT_AS_ICON.LINK },
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
      description: 'Determines spacing and font size',
    },
  },
  args: {
    click: 'doSomething',
    disabled: undefined,
    element: undefined,
    href: 'https://www.traderinteractive.com',
    isNewTab: undefined,
    label: '1',
    priority: undefined,
    size: undefined,
  },
  component: BasicButtonTextAsIcon,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButtonTextAsIcon',
};

export const Demo = {};
