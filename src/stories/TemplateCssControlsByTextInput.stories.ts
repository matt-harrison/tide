import type { StoryContext } from '@storybook/vue3';

const formatArgs = (args: any) => {
  const classNames: string[] = [];

  if (args.utilities) classNames.push(args.utilities);

  if (classNames.length > 0) {
    // TODO: Add custom class name sorting?!

    args.class = classNames.join(' ');
  }

  return { args };
};

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  const classNames = args.classNames || '';

  return `<div class="${classNames}">Demo</div>`;
};

export default {
  argTypes: {
    utilities: {
      control: 'text',
      isCss: true,
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    utilities: '',
  },
  parameters: {
    docs: {
      source: {
        format: false,
        language: 'html',
        transform: formatSnippet,
      },
    },
  },
  render: (args: any) => ({
    setup() {
      return formatArgs(args);
    },
    template: '<div v-bind="args">Demo</div>',
    updated() {
      return formatArgs(args);
    },
  }),
  tags: ['autodocs'],
  title: 'Proof of Concept/CSS Controls By Text Input',
};

export const Demo = {};
