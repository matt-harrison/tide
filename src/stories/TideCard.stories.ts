import TideCard from '@/components/TideCard.vue';
import { dataTrack, parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { TideCard },
  setup: () => ({ args }),
  template: `<TideCard class="tide-display-inline-block tide-padding-1">{{ args.default }}</TideCard>`,
});

export default {
  argTypes: {
    class: {
      table: {
        disable: true,
      },
    },
    dataTrack,
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
    dataTrack: '',
    default: 'Demo',
  },
  component: TideCard,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideCard',
};

export const Demo = {};
