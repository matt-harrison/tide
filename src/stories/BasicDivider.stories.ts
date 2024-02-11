import BasicDivider from '@/components/BasicDivider.vue';
import { parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { BasicDivider },
  setup: () => ({ args }),
  template: `<BasicDivider v-bind="args" />`,
});

export default {
  argTypes: {},
  args: {},
  component: BasicDivider,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicDivider',
};

export const Demo = {};
