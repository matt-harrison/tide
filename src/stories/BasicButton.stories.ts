import BasicButton from '@/components/BasicButton.vue';
import { ELEMENT } from '@/types/Element';
import { PRIORITY } from '@/types/Priority';
import { SIZE_BUTTON } from '@/types/Size';
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

export default {
  argTypes: {
    element: {
      control: 'select',
      options: ELEMENT,
    },
    href: {
      if: { arg: 'element', eq: ELEMENT.ANCHOR },
    },
    iconLeading: iconControl,
    iconTrailing: iconControl,
    priority: {
      constant: getVariableName({ PRIORITY }),
      control: 'select',
      options: PRIORITY,
    },
    size: {
      constant: getVariableName({ SIZE_BUTTON }),
      control: 'select',
      options: SIZE_BUTTON,
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
  component: BasicButton,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButton',
};

export const Demo = {
  args: {
    element: ELEMENT.BUTTON,
    href: 'https://www.traderinteractive.com/',
    iconLeading: undefined,
    iconTrailing: undefined,
    label: 'Demo',
    priority: PRIORITY.PRIMARY,
    size: SIZE_BUTTON.LARGE,
    target: TARGET.SELF,
    tier: TIER.TIER_1,
  },
  parameters: {
    docs: {
      source: {
        format: false,
        language: 'html',
        transform: formatSnippet,
      },
    },
  },
  render: (args: any) => ({
    components: { BasicButton },
    setup() {
      return formatArgs(args);
    },
    template: '<BasicButton v-bind="args" />',
    updated() {
      return formatArgs(args);
    },
  }),
};
