import BasicButtonPagination from '@/components/BasicButtonPagination.vue';
import { ELEMENT_PAGINATION } from '@/types/Element';
import { PRIORITY } from '@/types/Priority';
import { SIZE_ICON } from '@/types/Size';
import { TARGET } from '@/types/Target';
import { TIER } from '@/types/Tier';
import { formatSnippet, getVariableName } from '@/utilities/storybook';

const formatArgs = (args: any) => {
  args.class = `${args.class} ${args.fill}`;

  if (args.iconTrailing === 'None') delete args.iconTrailing;

  if (args.element !== ELEMENT_PAGINATION.ANCHOR) {
    delete args.href;
    delete args.target;
  }

  if (args.element === ELEMENT_PAGINATION.BUTTON) delete args.element;

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
  components: { BasicButtonPagination },
  setup() {
    return formatArgs(args);
  },
  template: '<BasicButtonPagination v-bind="args" />',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    element: {
      constant: getVariableName({ ELEMENT_PAGINATION }),
      control: 'select',
      options: ELEMENT_PAGINATION,
    },
    href: {
      if: { arg: 'element', eq: ELEMENT_PAGINATION.ANCHOR },
    },
    label: {
      control: 'text',
    },
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
      if: { arg: 'element', eq: ELEMENT_PAGINATION.ANCHOR },
      options: TARGET,
    },
    tier: {
      constant: getVariableName({ TIER }),
      control: 'select',
      if: { arg: 'priority', eq: PRIORITY.PRIMARY },
      options: TIER,
    },
  },
  component: BasicButtonPagination,
  tags: ['autodocs'],
  title: 'Basic Components/BasicButtonPagination',
};

export const Button = {
  args: {
    element: ELEMENT_PAGINATION.BUTTON,
    label: '1',
    priority: PRIORITY.SECONDARY,
  },
  parameters,
  render,
};

export const Anchor = {
  args: {
    element: ELEMENT_PAGINATION.ANCHOR,
    href: 'https://www.traderinteractive.com/',
    label: '1',
    priority: PRIORITY.SECONDARY,
    target: TARGET.BLANK,
  },
  parameters,
  render,
};

export const Div = {
  args: {
    element: ELEMENT_PAGINATION.DIV,
    label: '1',
    priority: PRIORITY.SECONDARY,
  },
  parameters,
  render,
};
