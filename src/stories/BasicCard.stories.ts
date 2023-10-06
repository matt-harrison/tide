import type { StoryContext } from '@storybook/vue3';

import BasicCard from '@/components/BasicCard.vue';

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  return `<BasicCard>${args.default}</BasicCard>`;
};

const parameters = {
  docs: {
    source: {
      format: false,
      language: 'html',
      transform: formatSnippet,
    },
  },
};

const render = (args: any) => ({
  components: { BasicCard },
  setup: () => ({ args }),
  template: `<BasicCard class="inline-block p-1">${args.default}</BasicCard>`,
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
