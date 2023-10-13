import { action } from '@storybook/addon-actions';

import type { StoryContext } from '@storybook/vue3';

import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
import { ELEMENT } from '@/types/Element';
import { ICON } from '@/types/Icon';
import { PRIORITY } from '@/types/Priority';
import { SIZE } from '@/types/Size';
import { argTypeBooleanUnrequired } from '@/utilities/storybook';
import { click, formatArgType } from '@/utilities/storybook';

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  return `<BasicButtonIcon @click="${args.click}" v-bind="${args}" />`;
};

const render = (args: any) => ({
  components: { BasicButtonIcon },
  methods: {
    handleClick: (event: Event) => {
      if (args.click) action(args.click)(event);
    },
  },
  setup: () => ({ args }),
  template: '<BasicButtonIcon @click="handleClick" class="inline-block" v-bind="args" />',
});

const parameters = {
  docs: {
    source: {
      format: false,
      language: 'html',
      transform: formatSnippet,
    },
  },
};

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
    icon: {
      ...formatArgType({ ICON }),
      description: 'Icon',
    },
    isNewTab: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether to target a new browser tab<br />(Link only)',
      if: { arg: 'element', eq: ELEMENT.LINK },
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
      description: 'Determines icon dimensions',
    },
  },
  args: {
    click: 'doSomething',
    disabled: undefined,
    element: undefined,
    href: 'https://www.traderinteractive.com',
    icon: ICON.ENVELOPE,
    isNewTab: undefined,
    priority: undefined,
    size: undefined,
  },
  component: BasicButtonIcon,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButtonIcon',
};

export const Demo = {};
