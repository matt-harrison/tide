import TideInputRadio from '@/components/TideInputRadio.vue';
import { dataTrack, parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { TideInputRadio },
  setup: () => ({ args }),
  template: `<TideInputRadio v-bind="args" />`,
});

export default {
  argTypes: {
    dataTrack,
  },
  args: {
    dataTrack: '',
  },
  component: TideInputRadio,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideInputRadio',
};

export const Demo = {};
