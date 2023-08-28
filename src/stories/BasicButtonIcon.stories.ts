import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
import { ELEMENT } from '@/types/Element';
import { ICON } from '@/types/Icon';
import { PRIORITY } from '@/types/Priority';
import { SIZE_ICON_STORYBOOK } from '@/types/Storybook';
import { TARGET } from '@/types/Target';
import { TIER } from '@/types/Tier';
import { formatSnippet, getVariableName, iconControl } from '@/utilities/storybook';

const formatArgs = (args: any) => {
  args.class = `${args.class} ${args.fill}`;

  if (args.iconTrailing === 'None') delete args.iconTrailing;

  if (args.element === ELEMENT.BUTTON) {
    delete args.href;
  }

  delete args.element;

  return { args };
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
  components: { BasicButtonIcon },
  setup() {
    return formatArgs(args);
  },
  template: '<BasicButtonIcon v-bind="args" />',
  updated() {
    return formatArgs(args);
  },
});

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
    icon: {
      ...iconControl,
      description: 'Icon',
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
      constant: getVariableName({ SIZE_ICON_STORYBOOK }),
      control: 'select',
      description: 'Determines icon dimensions',
      options: SIZE_ICON_STORYBOOK,
      table: {
        defaultValue: { summary: 'SIZE_ICON_STORYBOOK. SMALL' },
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
    element: ELEMENT.BUTTON,
    href: 'https://www.traderinteractive.com',
    icon: ICON.ENVELOPE,
    isNewTab: false,
    priority: PRIORITY.PRIMARY,
    size: SIZE_ICON_STORYBOOK.SMALL,
    tier: TIER.TIER_1,
  },
  component: BasicButtonIcon,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButtonIcon',
};

export const Demo = {
  parameters,
  render,
};

export const PrimaryTier1 = {
  args: {
    element: ELEMENT.BUTTON,
    href: 'https://www.traderinteractive.com/',
    icon: ICON.ENVELOPE,
    priority: PRIORITY.PRIMARY,
    size: SIZE_ICON_STORYBOOK.SMALL,
    target: TARGET.SELF,
    tier: TIER.TIER_1,
  },
  parameters,
  render,
};

export const PrimaryTier2 = {
  args: {
    element: ELEMENT.BUTTON,
    href: 'https://www.traderinteractive.com/',
    icon: ICON.ENVELOPE,
    priority: PRIORITY.PRIMARY,
    size: SIZE_ICON_STORYBOOK.SMALL,
    target: TARGET.SELF,
    tier: TIER.TIER_2,
  },
  parameters,
  render,
};

export const PrimaryTier3 = {
  args: {
    element: ELEMENT.BUTTON,
    href: 'https://www.traderinteractive.com/',
    icon: ICON.ENVELOPE,
    priority: PRIORITY.PRIMARY,
    size: SIZE_ICON_STORYBOOK.SMALL,
    target: TARGET.SELF,
    tier: TIER.TIER_1,
  },
  parameters,
  render,
};

export const Secondary = {
  args: {
    element: ELEMENT.BUTTON,
    href: 'https://www.traderinteractive.com/',
    icon: ICON.ENVELOPE,
    priority: PRIORITY.SECONDARY,
    size: SIZE_ICON_STORYBOOK.SMALL,
    target: TARGET.SELF,
    tier: TIER.TIER_1,
  },
  parameters,
  render,
};

export const Tertiary = {
  args: {
    element: ELEMENT.BUTTON,
    href: 'https://www.traderinteractive.com/',
    icon: ICON.ENVELOPE,
    priority: PRIORITY.TERTIARY,
    size: SIZE_ICON_STORYBOOK.SMALL,
    target: TARGET.SELF,
    tier: TIER.TIER_1,
  },
  parameters,
  render,
};
