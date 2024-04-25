import { action } from '@storybook/addon-actions';

import type { StoryContext } from '@storybook/vue3';

import TideButton from '@/components/TideButton.vue';
import TideModal from '@/components/TideModal.vue';
import { doSomething } from '@/utilities/storybook';

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  return `<TideModal @modal-close="handleModalClose">\r\t<template #footer>\r\t\t${args.footer}\r\t</template>\r\r\t${args.default}\r</TideModal>`;
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

const render = (args: any, { updateArgs }: any) => ({
  components: { TideButton, TideModal },
  methods: {
    doSomething,
    handleModalClose: () => {
      action('Modal closed')(args);

      try {
        const modalClose = eval(args.modalClose);

        if (modalClose) {
          modalClose();
        }
      } catch {
        alert('Please pass a valid function in the "modalClose" control.');
      }

      updateArgs({ ...args, isOpen: false });
    },
  },
  setup: () => ({ args }),
  template: `
  <p>Toggle "isOpen" prop below to preview.</p>
  <TideModal v-bind="args" @modal-close="handleModalClose">
    ${args.default}
    <template #footer>${args.footer}</template>
  </TideModal>`,
});

export default {
  argTypes: {
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
    isOpen: {
      description: 'Determines whether the Modal is displayed',
      table: {
        defaultValue: { summary: 'False' },
      },
    },
    modalClose: {
      control: 'text',
      description: 'JS function to execute when modal is closed',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: '() => void' },
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
    default: '<div class="tide-margin-bottom-1 tide-padding-x-1 tide-width-full">Default Slot Demo</div>',
    footer: '<TideButton label="Footer Slot Demo" />',
    isOpen: false,
    modalClose: 'doSomething',
    modalStyle: {},
    style: {},
    title: 'Modal Demo',
    width: '400px',
  },
  component: TideModal,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Tide Components/TideModal',
};

export const Demo = {};
