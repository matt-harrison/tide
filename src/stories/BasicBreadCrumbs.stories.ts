import type { BreadCrumb } from '@/types/BreadCrumb';

import BasicBreadCrumbs from '@/components/BasicBreadCrumbs.vue';
import { parameters } from '@/utilities/storybook';

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
