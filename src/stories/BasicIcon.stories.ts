import BasicIcon from '../components/BasicIcon.vue';
import { ICON } from '../types/Icon';
import { SIZE_ICON } from '../types/Size';
export default {
  argTypes: {
    class: {
      control: 'text',
    },
    icon: {
      control: 'select',
      options: ICON,
    },
    size: {
      control: 'select',
      options: SIZE_ICON,
    },
  },
  component: BasicIcon,
  tags: ['autodocs'],
  title: 'Example/BasicIcon',
};

export const Demo = {
  args: {
    class: 'font-black',
    icon: ICON.HEART,
    size: SIZE_ICON.MEDIUM,
  },
};
