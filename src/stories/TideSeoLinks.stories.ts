import type { StoryContext } from '@storybook/vue3';

import type { Link } from '@/types/Link';

import TideSeoLinks from '@/components/TideSeoLinks.vue';

const links: Link[] = new Array(12).fill({}).map((link, index) => {
  return {
    isNewTab: false,
    label: `Link ${index + 1}`,
    url: '/',
  };
});

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  return `<TideSeoLinks :heading="${args.heading}" :link="links" />`;
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
  components: { TideSeoLinks },
  setup: () => ({ args }),
  template: '<TideSeoLinks v-bind="args" />',
});

export default {
  argTypes: {
    heading: {
      control: 'text',
      description: 'Determines label, URL, and target for each link',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'Link[]' },
      },
    },
    links: {
      control: 'object',
      description: 'Determines label, URL, and target for each link',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'Link[]' },
      },
    },
  },
  args: {
    heading: 'Demo',
    links,
  },
  component: TideSeoLinks,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideSeoLinks',
};

export const Demo = {};
