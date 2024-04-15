import * as STANDARD_SIZE from '@/types/Size';
import TideIcon from '@/components/TideIcon.vue';
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
    icon: ICON.FAVORITE,
    size: undefined,
  },
  component: TideIcon,
  parameters,
  tags: ['autodocs'],
  title: 'Tide Components/TideIcon',
};

export const Demo = {};
