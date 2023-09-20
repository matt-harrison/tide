import type { StoryContext } from '@storybook/vue3';

import type { Link } from '@/types/Link';

import BasicSeoLinks from '@/components/BasicSeoLinks.vue';

const links: Link[] = new Array(12).fill({}).map((link, index) => {
  return {
    isNewTab: false,
    label: `Link ${index + 1}`,
    url: '/',
  };
});

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  return `<BasicSeoLinks :heading="${args.heading}" :link="links" />`;
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
  components: { BasicSeoLinks },
  setup: () => ({ args }),
  template: '<BasicSeoLinks v-bind="args" />',
});

export default {
  argTypes: {
    heading: {
      control: 'text',
      description: 'Determines label, URL, and target for each link',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'Tab[]' },
      },
    },
    links: {
      control: 'object',
      description: 'Determines label, URL, and target for each link',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'Tab[]' },
      },
    },
  },
  args: {
    heading: 'Demo',
    links,
  },
  component: BasicSeoLinks,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicSeoLinks',
};

export const Demo = {};
