import type { StoryContext } from '@storybook/vue3';

import BasicAccordionItem from '@/components/BasicAccordionItem.vue';

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  const argsWithValues: string[] = [];

  if (args.isExpandedInitial) argsWithValues.push(`:is-expanded-initial="${args.isExpandedInitial}"`);
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
    return { args };
  },
  template: `<BasicAccordionItem class="mb-1 border-t border-b border-gray" v-bind="args"><p class="mb-1">${args.default}</p></BasicAccordionItem>`,
  updated() {
    return { args };
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
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicAccordionItem',
};

export const Demo = {};

export const InitiallyCollapsed = {
  args: {
    isExpandedInitial: false,
    label: 'Initially Collapsed',
  },
};

export const InitiallyExpanded = {
  args: {
    isExpandedInitial: true,
    label: 'Initially Expanded',
  },
};
