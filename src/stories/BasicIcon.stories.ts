import BasicIcon from '@/components/BasicIcon.vue';
import { ICON } from '@/types/Icon';
import { SIZE } from '@/types/Size';
import { formatArgType, parameters } from '@/utilities/storybook';

export default {
  argTypes: {
    icon: {
      ...formatArgType({ ICON }),
      description: 'Icon',
    },
    size: {
      ...formatArgType({ SIZE }),
      description: 'Determines icon dimensions',
    },
  },
  args: {
    icon: ICON.HEART,
    size: undefined,
  },
  component: BasicIcon,
  parameters,
  tags: ['autodocs'],
  title: 'Basic Components/BasicIcon',
};

export const Demo = {};
