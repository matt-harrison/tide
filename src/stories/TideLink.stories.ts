import { action } from '@storybook/addon-actions';

import type { StoryContext } from '@storybook/vue3';

import * as STANDARD_ELEMENT from '@/types/Element';
import * as STANDARD_ICON from '@/types/Icon';
import * as STANDARD_LINK_SIZE from '@/types/StorybookStyles';
import TideLink from '@/components/TideLink.vue';
import {
  argTypeBooleanUnrequired,
  click,
  dataTrack,
  formatArgType,
  formatValueAsConstant,
  prependNoneAsUndefined,
} from '@/utilities/storybook';

const ELEMENT = prependNoneAsUndefined(STANDARD_ELEMENT.ELEMENT);
const ICON = prependNoneAsUndefined(STANDARD_ICON.ICON);
const LINK_SIZE = prependNoneAsUndefined(STANDARD_LINK_SIZE.LINK_SIZE);

const formatSnippet = (code: string, context: StoryContext) => {
  const { args, argTypes } = context;

  const argsWithValues: string[] = [];
  const { element, iconLeading, iconTrailing } = args;

  if (args.size !== undefined) argsWithValues.push(`:class="${args.size}"`);
  if (args.dataTrack !== '') argsWithValues.push(`:data-track="${args.dataTrack}"`);
  if (args.element !== undefined)
    argsWithValues.push(`:element="${formatValueAsConstant({ element: element }, argTypes)}"`);
  if (args.href !== undefined) argsWithValues.push(`:href="${args.href}"`);
  if (args.iconLeading !== undefined)
    argsWithValues.push(`:icon-leading="${formatValueAsConstant({ iconLeading }, argTypes)}"`);
  if (args.iconTrailing !== undefined)
    argsWithValues.push(`:icon-trailing="${formatValueAsConstant({ iconTrailing }, argTypes)}"`);
  if (args.isNewTab !== undefined) argsWithValues.push(`:is-new-tab="${args.isNewTab}"`);
  if (args.label !== undefined) argsWithValues.push(`:label="${args.label}"`);
  if (args.click !== undefined) argsWithValues.push(`@click="${args.click}"`);

  return `<TideLink ${argsWithValues.join(' ')} />`;
};

const parameters = {
  docs: {
    source: {
      format: 'vue',
      language: 'html',
      transform: formatSnippet,
    },
  },
};

const render = (args: any) => ({
  components: { TideLink },
  methods: {
    handleClick: (event: Event) => {
      if (args.element !== ELEMENT.LINK && args.click) action(args.click)(event);
    },
  },
  setup: () => ({ args }),
  template: '<TideLink :class="args.size" @click="handleClick" v-bind="args" />',
});

export default {
  argTypes: {
    click: {
      ...click,
      if: { arg: 'element', eq: ELEMENT.BUTTON },
    },
    dataTrack,
    element: {
      ...formatArgType({ ELEMENT }),
      description: 'HTML tag type',
      table: {
        defaultValue: { summary: 'LINK' },
        type: { summary: 'Element' },
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
      description: 'Link text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      description: 'Link text size',
      options: LINK_SIZE,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    click: 'doSomething',
    dataTrack: '',
    element: undefined,
    href: '/',
    iconLeading: undefined,
    iconTrailing: undefined,
    isNewTab: undefined,
    label: 'Demo',
    size: undefined,
  },
  component: TideLink,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideLink',
};

export const Demo = {};
