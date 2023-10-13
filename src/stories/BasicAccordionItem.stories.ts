import BasicAccordionItem from '@/components/BasicAccordionItem.vue';
import { argTypeBooleanUnrequired, parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { BasicAccordionItem },
  setup: () => ({ args }),
  template: `<BasicAccordionItem :key="args.isExpandedInitial" class="border-t border-b border-gray" v-bind="args"><p class="mb-1">{{ args.default }}</p></BasicAccordionItem>`,
});

export default {
  argTypes: {
    default: {
      control: 'text',
      description: 'Content exposed when expanded',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'HTML' },
      },
    },
    isActive: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether to show "active" indicator (primarily for filters)',
    },
    isExpandedInitial: {
      ...argTypeBooleanUnrequired,
      description:
        'Determines whether content should be expanded by default<br />(Subsequently managed within component)',
    },
    label: {
      control: 'text',
      description: 'Label exposed when collapsed',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    default: 'Lorem Ipsum',
    isActive: undefined,
    isExpandedInitial: undefined,
    label: 'Demo',
  },
  component: BasicAccordionItem,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicAccordionItem',
};

export const Demo = {};
