import type { BreadCrumb } from '@/types/BreadCrumb';

import TideBreadCrumbs from '@/components/TideBreadCrumbs.vue';
import { parameters } from '@/utilities/storybook';

const breadCrumbs: BreadCrumb[] = [
  {
    dataTrack: 'Home Bread Crumb Click',
    label: 'Home',
    url: '/',
  },
  {
    dataTrack: 'SRP Bread Crumb Click',
    label: 'Search results',
    url: '/rvs-for-sale',
  },
  {
    label: 'Vehicle details',
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
