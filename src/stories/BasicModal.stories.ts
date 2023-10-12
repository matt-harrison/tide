import type { StoryContext } from '@storybook/vue3';

import BasicButton from '@/components/BasicButton.vue';
import BasicModal from '@/components/BasicModal.vue';

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  return `<BasicModal @close="handleClose"><template #footer>${args.footer}</template>${args.default}</BasicModal>`;
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
  components: { BasicButton, BasicModal },
  methods: {
    handleClose: () => {
      updateArgs({ ...args, isOpen: false });
    },
  },
  setup: () => ({ args }),
  template: `
  <p>Toggle "isOpen" prop below to preview</p>
  <BasicModal v-bind="args" @close="handleClose">
    ${args.default}
    <template #footer>${args.footer}</template>
  </BasicModal>`,
});

export default {
  argTypes: {
    close: {
      table: {
        disable: true,
      },
    },
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
    default: '<div class="mb-1 px-1 w-full">Default Slot Demo</div>',
    footer: '<BasicButton label="Footer Slot Demo" />',
    isOpen: false,
    modalStyle: {},
    style: {},
    title: 'Modal Demo',
    width: '400px',
  },
  component: BasicModal,
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Basic Components/BasicModal',
};

export const Demo = {};
