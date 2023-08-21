import type { StoryContext } from '@storybook/vue3';

import BasicAccordionItem from '@/components/BasicAccordionItem.vue';

const formatArgs = (args: any) => {
  return { args };
};

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  const argsWithValues: string[] = [];

  if (args.classLabel) argsWithValues.push(`classLabel="${args.classLabel}"`);
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
  template: `<BasicAccordionItem class="mb-1 border-t border-b border-gray py-1" v-bind="args"><p class="mt-1">${args.default}</p></BasicAccordionItem>`,
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    classLabel: {
      control: 'text',
      description: 'CSS Classes<br />(Applied to the label, not the content.)',
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    default: {
      control: 'text',
      defaultValue: 'Lorem ipsum...',
      description: 'Content<br />(Markup, styling, text, etc.)',
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    isExpandedInitial: {
      control: 'boolean',
      description: 'Should the Accordion Item be expanded by default?<br />(Initial state only.)',
      table: {
        defaultValue: { summary: 'False' },
      },
    },
    label: {
      control: 'text',
      description: 'Label<br />(Appears whether Accordion Item is expanded or collapsed.)',
      table: {
        defaultValue: { summary: 'None' },
      },
    },
  },
  component: BasicAccordionItem,
  default: 'Hello world',
  tags: ['autodocs'],
  title: 'Basic Components/BasicAccordionItem',
};

export const Demo = {
  args: {
    classLabel: '',
    default: 'Lorem Ipsum',
    isExpandedInitial: false,
    label: 'Demo',
  },
  parameters,
  render,
};

export const AccordionItemInitiallyCollapsed = {
  args: {
    classLabel: '',
    default: 'Lorem Ipsum',
    isExpandedInitial: false,
    label: 'Initially Collapsed',
  },
  name: 'Initially Collapsed',
  parameters,
  render,
};

export const AccordionItemInitiallyExpanded = {
  args: {
    classLabel: '',
    default: 'Lorem Ipsum',
    isExpandedInitial: true,
    label: 'Initially Expanded',
  },
  name: 'Initially Expanded',
  parameters,
  render,
};
