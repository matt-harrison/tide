import type { StoryContext } from '@storybook/vue3';

import BasicAccordionItem from '@/components/BasicAccordionItem.vue';

const formatArgs = (args: any) => {
  return { args };
};

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  const argsWithValues: string[] = [];

  if (args.isExpandedInitial) argsWithValues.push(`isExpandedInitial="${args.isExpandedInitial}"`);
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
  setup() {
    return formatArgs(args);
  },
  template: `<BasicAccordionItem class="border-t border-b border-gray" v-bind="args"><p class="mb-1">${args.default}</p></BasicAccordionItem>`,
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    default: {
      control: 'text',
      defaultValue: 'Lorem ipsum...',
      description: 'Content exposed when expanded',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'HTML' },
      },
    },
    isExpandedInitial: {
      control: 'boolean',
      description:
        'Determines whether content should be expanded by default<br />(Subsequently managed within component)',
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
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
    isExpandedInitial: false,
    label: 'Demo',
  },
  component: BasicAccordionItem,
  tags: ['autodocs'],
  title: 'Basic Components/BasicAccordionItem',
};

export const Demo = {
  parameters,
  render,
};

export const AccordionItemInitiallyCollapsed = {
  args: {
    isExpandedInitial: false,
    label: 'Initially Collapsed',
  },
  name: 'Initially Collapsed',
  parameters,
  render,
};

export const AccordionItemInitiallyExpanded = {
  args: {
    isExpandedInitial: true,
    label: 'Initially Expanded',
  },
  name: 'Initially Expanded',
  parameters,
  render,
};
