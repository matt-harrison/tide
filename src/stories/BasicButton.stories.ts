import BasicButton from '@/components/BasicButton.vue';
import { ELEMENT } from '@/types/Element';
import { PRIORITY } from '@/types/Priority';
import { SIZE_BUTTON } from '@/types/Size';
import { TIER } from '@/types/Tier';
import { formatSnippet, getVariableName, iconControlWithNone } from '@/utilities/storybook';

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
    disabled: {
      control: 'boolean',
      description: 'Determines clickability<br />(Button only)',
      if: { arg: 'element', eq: ELEMENT.BUTTON },
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
        defaultValue: { summary: 'ELEMENT.BUTTON' },
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
      ...iconControlWithNone,
      description: 'Icon to left of label',
    },
    iconTrailing: {
      ...iconControlWithNone,
      description: 'Icon to right of label',
    },
    isNewTab: {
      control: 'boolean',
      description: 'Determines whether to target a new browser tab<br />(Anchor only)',
      if: { arg: 'element', eq: ELEMENT.ANCHOR },
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
      constant: getVariableName({ SIZE_BUTTON }),
      control: 'select',
      description: 'Determines spacing and font size',
      options: SIZE_BUTTON,
      table: {
        defaultValue: { summary: 'SIZE_BUTTON. MEDIUM' },
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
        defaultValue: { summary: 'TIER.TIER_1' },
        type: { summary: 'Tier' },
      },
    },
  },
  args: {
    disabled: false,
    element: ELEMENT.BUTTON,
    href: 'https://www.traderinteractive.com',
    iconLeading: undefined,
    iconTrailing: undefined,
    isNewTab: false,
    label: 'Demo',
    priority: PRIORITY.PRIMARY,
    size: SIZE_BUTTON.MEDIUM,
    tier: TIER.TIER_1,
  },
  component: BasicButton,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButton',
};

export const Demo = {
  parameters,
};

export const PrimaryTier1 = {
  args: {
    tier: TIER.TIER_1,
  },
  parameters,
};

export const PrimaryTier2 = {
  args: {
    tier: TIER.TIER_2,
  },
  parameters,
};

export const PrimaryTier3 = {
  args: {
    tier: TIER.TIER_3,
  },
  parameters,
};

export const Secondary = {
  args: {
    priority: PRIORITY.SECONDARY,
  },
  parameters,
};

export const Tertiary = {
  args: {
    priority: PRIORITY.TERTIARY,
  },
  parameters,
};
