import BasicButtonIcon from '@/components/BasicButtonIcon.vue';
import { ELEMENT } from '@/types/Element';
import { ICON } from '@/types/Icon';
import { PRIORITY } from '@/types/Priority';
import { SIZE_ICON } from '@/types/Size';
import { TARGET } from '@/types/Target';
import { TIER } from '@/types/Tier';
import { formatSnippet, getVariableName, iconControl } from '@/utilities/storybook';

const formatArgs = (args: any) => {
  args.class = `${args.class} ${args.fill}`;

  if (args.iconTrailing === 'None') delete args.iconTrailing;

  if (args.element === ELEMENT.BUTTON) {
    delete args.href;
    delete args.target;
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
    element: {
      constant: getVariableName({ ELEMENT }),
      control: 'select',
      options: ELEMENT,
    },
    href: {
      if: { arg: 'element', eq: ELEMENT.ANCHOR },
    },
    icon: iconControl,
    priority: {
      constant: getVariableName({ PRIORITY }),
      control: 'select',
      options: PRIORITY,
    },
    size: {
      constant: getVariableName({ SIZE_ICON }),
      control: 'select',
      options: SIZE_ICON,
    },
    target: {
      control: 'select',
      if: { arg: 'element', eq: ELEMENT.ANCHOR },
      options: TARGET,
    },
    tier: {
      constant: getVariableName({ TIER }),
      control: 'select',
      if: { arg: 'priority', eq: PRIORITY.PRIMARY },
      options: TIER,
    },
  },
  component: BasicButtonIcon,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButtonIcon',
};

export const Primary = {
  args: {
    element: ELEMENT.BUTTON,
    href: 'https://www.traderinteractive.com/',
    icon: ICON.ENVELOPE,
    priority: PRIORITY.PRIMARY,
    size: SIZE_ICON.SMALL,
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
    size: SIZE_ICON.SMALL,
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
    size: SIZE_ICON.SMALL,
    target: TARGET.SELF,
    tier: TIER.TIER_1,
  },
  parameters,
  render,
};
