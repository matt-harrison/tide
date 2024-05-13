import TideInputCheckbox from '@/components/TideInputCheckbox.vue';
import { dataTrack, parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { TideInputCheckbox },
  setup: () => ({ args }),
  template: `<TideInputCheckbox v-bind="args" />`,
});

export default {
  argTypes: {
    dataTrack,
  },
  args: {
    dataTrack: '',
  },
  component: TideInputCheckbox,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideInputCheckbox',
};

export const Demo = {};
