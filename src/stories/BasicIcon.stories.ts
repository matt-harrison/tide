import BasicIcon from '@/components/BasicIcon.vue';
import { ICON } from '@/types/Icon';
import { SIZE_ICON } from '@/types/Size';
import { SIZE_ICON_STORYBOOK } from '@/types/Storybook';
import { formatSnippet, getVariableName } from '@/utilities/storybook';

const formatArgs = (args: any) => {
  return { args };
};

export default {
  argTypes: {
    icon: {
      constant: getVariableName({ ICON }),
      control: 'select',
      options: ICON,
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    size: {
      constant: getVariableName({ SIZE_ICON }),
      control: 'select',
      options: SIZE_ICON_STORYBOOK,
    },
  },
  args: {
    icon: ICON.HEART,
    size: SIZE_ICON.MEDIUM,
  },
  component: BasicIcon,
  tags: ['autodocs'],
  title: 'Basic Components/BasicIcon',
};

export const Demo = {
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
