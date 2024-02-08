import BasicCard from '@/components/BasicCard.vue';
import { parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { BasicCard },
  setup: () => ({ args }),
  template: `<BasicCard class="tide-display-inline-block tide-padding-1">{{ args.default }}</BasicCard>`,
});

export default {
  argTypes: {
    class: {
      table: {
        disable: true,
      },
    },
    default: {
      control: 'text',
      description: 'Card content',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'HTML' },
      },
    },
  },
  args: {
    default: 'Demo',
  },
  component: BasicCard,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicCard',
};

export const Demo = {};
