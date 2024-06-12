import { action } from '@storybook/addon-actions';

import type { StoryContext } from '@storybook/vue3';

import TideButton from '@/components/TideButton.vue';
import TideModal from '@/components/TideModal.vue';
import { disabledArgType, doSomething, lineBreak, tab } from '@/utilities/storybook';

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  const slotContentIndentationFixed = (args.default as string).replace(/(<\/[^>]+>)$/, `${tab}$1`);

  return (
    `<TideModal @close="handleClose">${lineBreak}` +
    `${tab}<template #footer>${lineBreak}` +
    `${tab}${tab}${args.footer}${lineBreak}` +
    `${tab}</template>${lineBreak}` +
    `${tab}${slotContentIndentationFixed}${lineBreak}` +
    `</TideModal>`
  );
};

const parameters = {
  docs: {
    source: {
      format: 'vue',
      language: 'html',
      transform: formatSnippet,
    },
  },
};

const render = (args: any, { updateArgs }: any) => ({
  components: { TideButton, TideModal },
  methods: {
    doSomething,
    handleClose: (event: Event) => {
      updateArgs({ ...args, isOpen: false });
      action('Modal closed')(event);

      try {
        const callback = eval(args.handleClose);
        if (callback) {
          callback();
        }
      } catch {
        alert('Please specify a valid function in the "close" control.');
      }
    },
  },
  setup: () => ({ args }),
  template: `
  <p>Toggle "isOpen" prop below to preview.</p>
  <TideModal v-bind="args" @close="handleClose">
    ${args.default}
    <template #footer>${args.footer}</template>
  </TideModal>`,
});

export default {
  argTypes: {
    close: disabledArgType,
    default: {
      control: 'text',
      description: 'Modal content',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'HTML' },
      },
    },
    footer: {
      control: 'text',
      description: 'Footer content',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'HTML' },
      },
    },
    handleClose: {
      control: 'text',
      description: 'JS function to execute when modal is closed',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: '(event: Event) => void' },
      },
    },
    isOpen: {
      description: 'Determines whether the Modal is displayed',
      table: {
        defaultValue: { summary: 'False' },
      },
    },
    modalStyle: {
      description: 'Applies standard CSS declarations to Modal container',
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    style: {
      description: 'Applies standard CSS declarations to outermost Modal node',
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    title: {
      description: 'Modal title',
      table: {
        defaultValue: { summary: 'None' },
      },
    },
    width: {
      description: 'Applies width to Modal<br />(include units)',
      table: {
        defaultValue: { summary: 'None' },
      },
    },
  },
  args: {
    default: `<div class="tide-margin-bottom-1 tide-padding-x-1 tide-width-full">${lineBreak}${tab}${tab}Default Slot Demo${lineBreak}</div>`,
    footer: '<TideButton label="Footer Slot Demo" />',
    handleClose: 'doSomething',
    isOpen: false,
    modalStyle: {},
    style: {},
    title: 'Modal Demo',
    width: '400px',
  },
  component: TideModal,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/TideModal',
};

export const Demo = {};
