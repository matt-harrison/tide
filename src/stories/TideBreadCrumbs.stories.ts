import type { BreadCrumb } from '@/types/BreadCrumb';

import TideBreadCrumbs from '@/components/TideBreadCrumbs.vue';
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
      isCustom: true,
      table: {
        defaultValue: { summary: '[]' },
        type: { summary: 'BreadCrumb[]' },
      },
    },
  },
  args: {
    breadCrumbs: breadCrumbs,
  },
  component: TideBreadCrumbs,
  parameters,
  tags: ['autodocs'],
  title: 'Tide Components/TideBreadCrumbs',
};

export const Demo = {};
