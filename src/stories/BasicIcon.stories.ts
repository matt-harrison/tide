import BasicIcon from '@/components/BasicIcon.vue';
import { ICON } from '@/types/Icon';
import { SIZE_ICON_STORYBOOK } from '@/types/Storybook';
import { formatSnippet, getVariableName, iconControl } from '@/utilities/storybook';

const formatArgs = (args: any) => {
  if (!args.size) delete args.size;

  return { args };
};

const render = (args: any) => ({
  components: { BasicIcon },
  setup() {
    return formatArgs(args);
  },
  template: '<BasicIcon v-bind="args" />',
  updated() {
    return formatArgs(args);
  },
});

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
    icon: {
      ...iconControl,
      description: 'Icon',
    },
    size: {
      constant: getVariableName({ SIZE_ICON_STORYBOOK }),
      control: 'select',
      description: 'Determines icon dimensions',
      options: SIZE_ICON_STORYBOOK,
      table: {
        defaultValue: { summary: 'SIZE_ICON. MEDIUM' },
        type: { summary: 'SizeIcon' },
      },
    },
  },
  args: {
    icon: ICON.HEART,
    size: SIZE_ICON_STORYBOOK.None,
  },
  component: BasicIcon,
  tags: ['autodocs'],
  title: 'Basic Components/BasicIcon',
};

export const Demo = {
  parameters,
  render,
};

export const Medium = {
  args: {
    size: SIZE_ICON_STORYBOOK.MEDIUM,
  },
  parameters,
  render,
};

export const Small = {
  args: {
    size: SIZE_ICON_STORYBOOK.SMALL,
  },
  parameters,
  render,
};
