import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
import { BOOLEAN_UNREQUIRED } from '@/types/Storybook';
import { ELEMENT } from '@/types/Element';
import { ICON } from '@/types/Icon';
import { PRIORITY } from '@/types/Priority';
import { SIZE_STORYBOOK } from '@/types/Storybook';
import { TIER } from '@/types/Tier';
import { click, getVariableName, icon, parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { BasicButtonIcon },
  setup: () => ({ args }),
  template: '<BasicButtonIcon class="inline-block" v-bind="args" />',
});

export default {
  argTypes: {
    click,
    disabled: {
      control: 'select',
      description: 'Determines clickability<br />(Button only)',
      if: { arg: 'element', eq: ELEMENT.BUTTON },
      options: BOOLEAN_UNREQUIRED,
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
    },
    element: {
      constant: getVariableName({ ELEMENT }),
      control: 'select',
      description: 'HTML tag type',
      options: ELEMENT,
      table: {
        defaultValue: { summary: 'BUTTON' },
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
    icon,
    isNewTab: {
      control: 'select',
      description: 'Determines whether to target a new browser tab<br />(Link only)',
      if: { arg: 'element', eq: ELEMENT.LINK },
      options: BOOLEAN_UNREQUIRED,
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
    },
    priority: {
      constant: getVariableName({ PRIORITY }),
      control: 'select',
      description: 'Determines visual prominence',
      options: PRIORITY,
      table: {
        defaultValue: { summary: 'PRIMARY' },
        type: { summary: 'Priority' },
      },
    },
    size: {
      constant: getVariableName({ SIZE_STORYBOOK }),
      control: 'select',
      description: 'Determines icon dimensions',
      options: SIZE_STORYBOOK,
      table: {
        defaultValue: { summary: 'SMALL' },
        type: { summary: 'SizeIcon' },
      },
    },
    tier: {
      constant: getVariableName({ TIER }),
      control: 'select',
      description: 'Determines brand colors<br />(Primary only)',
      if: { arg: 'priority', eq: PRIORITY.PRIMARY },
      options: TIER,
      table: {
        defaultValue: { summary: 'TIER_1' },
        type: { summary: 'Tier' },
      },
    },
  },
  args: {
    click: 'handleClick',
    disabled: undefined,
    element: ELEMENT.BUTTON,
    href: 'https://www.traderinteractive.com',
    icon: ICON.ENVELOPE,
    isNewTab: undefined,
    priority: PRIORITY.PRIMARY,
    size: SIZE_STORYBOOK.None,
    tier: TIER.TIER_1,
  },
  component: BasicButtonIcon,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButtonIcon',
};

export const Demo = {};
