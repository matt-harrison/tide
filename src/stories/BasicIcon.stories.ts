import * as STANDARD_SIZE from '@/types/Size';
import BasicIcon from '@/components/BasicIcon.vue';
import { ICON } from '@/types/Icon';
import { formatArgType, parameters, prependNoneAsUndefined } from '@/utilities/storybook';

const SIZE = prependNoneAsUndefined(STANDARD_SIZE.SIZE);

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
