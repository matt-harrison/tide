import type { StoryContext } from '@storybook/vue3';

import BasicColumns from '@/components/BasicColumns.vue';

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  const argsWithValues: string[] = [];

  if (args.heading) argsWithValues.push(`:heading="${args.heading}"`);

  return `<BasicColumns ${argsWithValues.join(' ')}><template #section1>${
    args.section1
  }</template><template #section2>${args.section2}</template><template #section3>${
    args.section3
  }</template><template #section4>${args.section4}</template></BasicColumns>`;
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

export default {
  argTypes: {
    heading: {
      control: 'text',
      description: 'Determines label',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    section1: {
      control: 'text',
      defaultValue: 'None',
      description: 'Section 1 content',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'HTML' },
      },
    },
    section2: {
      control: 'text',
      defaultValue: 'None',
      description: 'Section 2 content',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'HTML' },
      },
    },
    section3: {
      control: 'text',
      defaultValue: 'None',
      description: 'Section 3 content',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'HTML' },
      },
    },
    section4: {
      control: 'text',
      defaultValue: 'None',
      description: 'Section 4 content',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'HTML' },
      },
    },
  },
  args: {
    heading: 'Demo',
    section1: 'Section 1',
    section2: 'Section 2',
    section3: 'Section 3',
    section4: 'Section 4',
  },
  component: BasicColumns,
  parameters,
  tags: ['autodocs'],
  title: 'Basic Components/BasicColumns',
};

export const Demo = {};
