import BasicIcon from '@/components/BasicIcon.vue';
import { ICON } from '@/types/Icon';
import { SIZE_ICON_STORYBOOK } from '@/types/Storybook';
import { getVariableName, icon, parameters } from '@/utilities/storybook';

export default {
  argTypes: {
    icon,
    size: {
      constant: getVariableName({ SIZE_ICON_STORYBOOK }),
      control: 'select',
      description: 'Determines icon dimensions',
      options: SIZE_ICON_STORYBOOK,
      table: {
        defaultValue: { summary: 'MEDIUM' },
        type: { summary: 'SizeIcon' },
      },
    },
  },
  args: {
    icon: ICON.HEART,
    size: SIZE_ICON_STORYBOOK.None,
  },
  component: BasicIcon,
  parameters,
  tags: ['autodocs'],
  title: 'Basic Components/BasicIcon',
};

export const Demo = {};

export const Medium = {
  args: {
    size: SIZE_ICON_STORYBOOK.MEDIUM,
  },
};

export const Small = {
  args: {
    size: SIZE_ICON_STORYBOOK.SMALL,
  },
};
