import TideAccordionItem from '@/components/TideAccordionItem.vue';
import { argTypeBooleanUnrequired, dataTrack, parameters } from '@/utilities/storybook';

const render = (args: any) => ({
  components: { TideAccordionItem },
  setup: () => ({ args }),
  template: `<TideAccordionItem :key="args.isExpandedInitial" v-bind="args">{{ args.default }}</TideAccordionItem>`,
});

export default {
  argTypes: {
    dataTrack,
    default: {
      control: 'text',
      description: 'Content exposed when expanded',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'HTML' },
      },
    },
    hasBottomDivider: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether to include bottom divider',
    },
    hasTopDivider: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether to include bottom divider',
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
    isOptional: {
      ...argTypeBooleanUnrequired,
      description: 'Determines whether to show "(optional)" indicator after label',
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
    dataTrack: '',
    default: 'Lorem Ipsum',
    hasBottomDivider: undefined,
    hasTopDivider: undefined,
    isActive: undefined,
    isExpandedInitial: undefined,
    isOptional: undefined,
    label: 'Demo',
  },
  component: TideAccordionItem,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/TideAccordionItem',
};

export const Demo = {};
