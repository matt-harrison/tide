import BasicChipFilter from '@/components/BasicChipFilter.vue';
import { formatSnippet } from '@/utilities/storybook';

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
  components: { BasicChipFilter },
  setup: () => ({ args }),
  template: `<BasicChipFilter :key="args.default" class="inline-flex" v-bind="args">{{ args.default }}</BasicFilterChip>`,
});

export default {
  argTypes: {
    default: {
      control: 'text',
      defaultValue: 'None',
      description: 'Content above label<br />(i.e. Vehicle thumbnail)',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'HTML' },
      },
    },
    isActive: {
      control: 'boolean',
      description: 'Determines whether toggle is active',
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
    },
    label: {
      control: 'text',
      description: 'Chip text',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    default: '',
    isActive: false,
    label: 'Demo',
  },
  component: BasicChipFilter,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicChipFilter',
};

export const Demo = {};
