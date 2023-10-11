import type { StoryContext } from '@storybook/vue3';

import BasicAccordionItem from '@/components/BasicAccordionItem.vue';
import { argTypeBooleanUnrequired } from '@/utilities/storybook';

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  const argsWithValues: string[] = [];

  if (args.isActive !== undefined) argsWithValues.push(`:is-active="${args.isActive}"`);
  if (args.isExpandedInitial !== undefined) argsWithValues.push(`:is-expanded-initial="${args.isExpandedInitial}"`);
  if (args.label) argsWithValues.push(`label="${args.label}"`);

  return `<BasicAccordionItem ${argsWithValues.join('\n\t')}>\n\t${args.default}\n</BasicAccordionItem>`;
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
