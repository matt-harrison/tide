import BasicIcon from '@/components/BasicIcon.vue';
import { iconColorControl } from '@/utilities/storybook';
import { ICON } from '@/types/Icon';
import { SIZE_ICON } from '@/types/Size';
import { formatSnippet, getVariableName } from '@/utilities/storybook';

const formatArgs = (args: any) => {
  const classNames: string[] = [];

  if (args.utilities) classNames.push(args.utilities);
  if (args.fill) classNames.push(args.fill);

  delete args.utilities;
  delete args.fill;

  if (classNames.length > 0) {
    args.class = classNames.join(' ');
  }

  return { args };
};

export default {
  argTypes: {
    fill: iconColorControl,
    icon: {
      constant: getVariableName({ ICON }),
      control: 'select',
      options: ICON,
    },
    size: {
      constant: getVariableName({ SIZE_ICON }),
      control: 'select',
      options: SIZE_ICON,
    },
    utilities: {
      control: 'text',
      isCss: true,
    },
  },
  component: BasicIcon,
  tags: ['autodocs'],
  title: 'Basic Components/BasicIcon',
};

export const Demo = {
  args: {
    fill: undefined,
    icon: ICON.HEART,
    marginSide: undefined,
    marginSize: undefined,
    size: SIZE_ICON.MEDIUM,
    utilities: '',
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
    components: { BasicIcon },
    setup() {
      return formatArgs(args);
    },
    template: '<BasicIcon v-bind="args" />',
    updated() {
      return formatArgs(args);
    },
  }),
};
