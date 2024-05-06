import type { StoryContext } from '@storybook/vue3';

import { TYPOGRAPHY } from '@/types/Storybook';
import { formatArgType } from '@/utilities/storybook';

const formatArgs = (args: any) => {
  args.class = args.type.join(' ');

  return { args };
};

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;
  const { type } = args as { type: string[] };

  return `<div class="${type.join(' ')}">${args.label}</div>`;
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
  setup() {
    return formatArgs(args);
  },
  template: `<div v-bind="args">{{ args.label }}</div>`,
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    label: {
      control: 'text',
      description: 'Sample text',
      name: 'Label',
      table: {
        defaultValue: { summary: 'None' },
        type: { summary: 'string' },
      },
    },
    type: {
      ...formatArgType({ TYPOGRAPHY }),
      description: `Applies font rules`,
      name: 'Type',
    },
  },
  args: {
    label: 'Aa',
    type: TYPOGRAPHY.BODY_1,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Typography',
};

export const Display1 = {
  args: {
    type: TYPOGRAPHY.DISPLAY_1,
  },
};

export const Headline1 = {
  args: {
    type: TYPOGRAPHY.HEADLINE_1,
  },
};

export const Headline2 = {
  args: {
    type: TYPOGRAPHY.HEADLINE_2,
  },
};

export const Headline3 = {
  args: {
    type: TYPOGRAPHY.HEADLINE_1,
  },
};

export const Title1 = {
  args: {
    type: TYPOGRAPHY.TITLE_1,
  },
};

export const Title2 = {
  args: {
    type: TYPOGRAPHY.TITLE_1,
  },
};

export const Body1 = {
  args: {
    type: TYPOGRAPHY.BODY_1,
  },
};

export const Body2 = {
  args: {
    type: TYPOGRAPHY.BODY_1,
  },
};

export const Label1 = {
  args: {
    type: TYPOGRAPHY.LABEL_1,
  },
};

export const Label1Semibold = {
  args: {
    type: TYPOGRAPHY.LABEL_1_SEMIBOLD,
  },
};

export const Label2 = {
  args: {
    type: TYPOGRAPHY.LABEL_2,
  },
};

export const Label2Semibold = {
  args: {
    type: TYPOGRAPHY.LABEL_2_SEMIBOLD,
  },
};

export const Label3 = {
  args: {
    type: TYPOGRAPHY.LABEL_3,
  },
};

export const Link1 = {
  args: {
    type: TYPOGRAPHY.LINK_1,
  },
};

export const Link2 = {
  args: {
    type: TYPOGRAPHY.LINK_2,
  },
};

export const Link3 = {
  args: {
    type: TYPOGRAPHY.LINK_3,
  },
};

export const Button1 = {
  args: {
    type: TYPOGRAPHY.BUTTON_1,
  },
};
