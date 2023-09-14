import type { BreadCrumb } from '@/types/BreadCrumb';

import BasicBreadCrumbs from '@/components/BasicBreadCrumbs.vue';

const breadCrumbs: BreadCrumb[] = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Search Results',
    url: '/rvs-for-sale',
  },
  {
    label: 'Vehicle Details',
  },
];

const formatSnippet = () => {
  return '<BasicBreadCrumbs :bread-crumbs="breadCrumbs" />';
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
    breadCrumbs: {
      control: 'object',
      description: 'Determines label and optional URL for each bread crumb',
      table: {
        defaultValue: { summary: '[]' },
        type: { summary: 'BreadCrumb[]' },
      },
    },
  },
  args: {
    breadCrumbs: breadCrumbs,
  },
  component: BasicBreadCrumbs,
  parameters,
  tags: ['autodocs'],
  title: 'Basic Components/BasicBreadCrumbs',
};

export const Demo = {};
