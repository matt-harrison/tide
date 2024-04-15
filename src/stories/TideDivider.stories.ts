import TideDivider from '@/components/TideDivider.vue';
import { parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { TideDivider },
  setup: () => ({ args }),
  template: `<TideDivider v-bind="args" />`,
});

export default {
  argTypes: {},
  args: {},
  component: TideDivider,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideDivider',
};

export const Demo = {};
