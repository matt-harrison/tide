import BasicButtonTextAsIcon from '@/components/BasicButtonTextAsIcon.vue';
import { ELEMENT_TEXT_AS_ICON } from '@/types/Element';
import { PRIORITY } from '@/types/Priority';
import { SIZE_ICON } from '@/types/Size';
import { TIER } from '@/types/Tier';
import { getVariableName, parameters } from '@/utilities/storybook';

export default {
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Determines clickability<br />(Button only)',
      if: { arg: 'element', eq: ELEMENT_TEXT_AS_ICON.BUTTON },
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
    },
    element: {
      constant: getVariableName({ ELEMENT_TEXT_AS_ICON }),
      control: 'select',
      description: 'HTML tag type',
      options: ELEMENT_TEXT_AS_ICON,
      table: {
        defaultValue: { summary: 'ELEMENT_TEXT_AS_ICON.BUTTON' },
        type: { summary: 'Element' },
      },
    },
    href: {
      description: 'URL to open<br />(Anchor only)',
      if: { arg: 'element', eq: ELEMENT_TEXT_AS_ICON.ANCHOR },
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    isNewTab: {
      control: 'boolean',
      description: 'Determines whether to target a new browser tab<br />(Anchor only)',
      if: { arg: 'element', eq: ELEMENT_TEXT_AS_ICON.ANCHOR },
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
        defaultValue: { summary: 'PRIORITY. PRIMARY' },
        type: { summary: 'Priority' },
      },
    },
    size: {
      constant: getVariableName({ SIZE_ICON }),
      control: 'select',
      description: 'Determines spacing and font size',
      options: SIZE_ICON,
      table: {
        defaultValue: { summary: 'SIZE_ICON. MEDIUM' },
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
        defaultValue: { summary: 'TIER.TIER_1' },
        type: { summary: 'Tier' },
      },
    },
  },
  args: {
    disabled: false,
    element: ELEMENT_TEXT_AS_ICON.BUTTON,
    href: 'https://www.traderinteractive.com',
    isNewTab: false,
    label: '1',
    priority: PRIORITY.PRIMARY,
    size: SIZE_ICON.SMALL,
    tier: TIER.TIER_1,
  },
  component: BasicButtonTextAsIcon,
  parameters,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButtonTextAsIcon',
};

export const Demo = {};

export const PrimaryTier1 = {
  args: {
    priority: PRIORITY.PRIMARY,
    tier: TIER.TIER_1,
  },
};

export const PrimaryTier2 = {
  args: {
    priority: PRIORITY.PRIMARY,
    tier: TIER.TIER_2,
  },
};

export const PrimaryTier3 = {
  args: {
    priority: PRIORITY.PRIMARY,
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

export const Button = {};

export const Anchor = {
  args: {
    element: ELEMENT_TEXT_AS_ICON.ANCHOR,
  },
};

export const Div = {
  args: {
    element: ELEMENT_TEXT_AS_ICON.DIV,
  },
};
