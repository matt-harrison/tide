import BasicButton from '@/components/BasicButton.vue';
import { BOOLEAN_UNREQUIRED } from '@/types/Storybook';
import { ELEMENT } from '@/types/Element';
import { PRIORITY } from '@/types/Priority';
import { SIZE_BUTTON } from '@/types/Size';
import { TIER } from '@/types/Tier';
import { click, formatSnippet, getVariableName, iconWithNone } from '@/utilities/storybook';

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
      description: 'URL to open<br />(Anchor only)',
      if: { arg: 'element', eq: ELEMENT.ANCHOR },
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    iconLeading: {
      ...iconWithNone,
      description: 'Icon to left of label',
    },
    iconTrailing: {
      ...iconWithNone,
      description: 'Icon to right of label',
    },
    isNewTab: {
      control: 'select',
      description: 'Determines whether to target a new browser tab<br />(Anchor only)',
      if: { arg: 'element', eq: ELEMENT.ANCHOR },
      options: BOOLEAN_UNREQUIRED,
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
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
      constant: getVariableName({ SIZE_BUTTON }),
      control: 'select',
      description: 'Determines spacing and font size',
      options: SIZE_BUTTON,
      table: {
        defaultValue: { summary: 'MEDIUM' },
        type: { summary: 'SizeButton' },
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
    iconLeading: undefined,
    iconTrailing: undefined,
    isNewTab: undefined,
    label: 'Demo',
    priority: PRIORITY.PRIMARY,
    size: SIZE_BUTTON.MEDIUM,
    tier: TIER.TIER_1,
  },
  component: BasicButton,
  parameters,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButton',
};

export const Demo = {};

export const PrimaryTier1 = {
  args: {
    tier: TIER.TIER_1,
  },
};

export const PrimaryTier2 = {
  args: {
    tier: TIER.TIER_2,
  },
};

export const PrimaryTier3 = {
  args: {
    tier: TIER.TIER_3,
  },
};

export const Secondary = {
  args: {
    priority: PRIORITY.SECONDARY,
  },
};

export const Tertiary = {
  args: {
    priority: PRIORITY.TERTIARY,
  },
};
