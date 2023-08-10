import BasicButton from '../components/BasicButton.vue';
import { ELEMENT } from '../types/Element';
import { ICON } from '../types/Icon';
import { PRIORITY } from '../types/Priority';
import { SIZE_BUTTON } from '../types/Size';
import { TARGET } from '../types/Target';
import { TIER } from '../types/Tier';

const icons: { [key: string]: string } = {};

Object.entries(ICON).forEach((icon) => {
  const key: string = icon[0];
  const value: string = icon[1];

  icons[key] = value;
});

const iconControl = {
  control: 'select',
  mapping: {
    None: undefined,
    ...icons,
  },
  options: ['None', ...Object.keys(ICON)],
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
    iconLeading: {
      ...iconControl,
    },
    iconTrailing: {
      ...iconControl,
    },
    priority: {
      control: 'select',
      options: PRIORITY,
    },
    size: {
      control: 'select',
      options: SIZE_BUTTON,
    },
    target: {
      control: 'select',
      if: { arg: 'element', eq: ELEMENT.ANCHOR },
      options: TARGET,
    },
    tier: {
      control: 'select',
      if: { arg: 'priority', eq: PRIORITY.PRIMARY },
      options: TIER,
    },
  },
  component: BasicButton,
  tags: ['autodocs'],
  title: 'Example/BasicButton',
};

export const Demo = {
  args: {
    element: ELEMENT.BUTTON,
    href: 'https://www.traderinteractive.com/',
    iconLeading: 'None',
    iconTrailing: 'None',
    label: 'Demo',
    priority: PRIORITY.PRIMARY,
    size: SIZE_BUTTON.LARGE,
    target: TARGET.SELF,
    tier: TIER.TIER_1,
  },
};
