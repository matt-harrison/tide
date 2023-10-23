import type { StoryContext } from '@storybook/vue3';

import * as STYLES from '@/types/StorybookStyles';
import { formatArgType, prependNoneAsEmpty } from '@/utilities/storybook';

const SHADOW_BOTTOM = prependNoneAsEmpty(STYLES.SHADOW_BOTTOM);
const SHADOW_TOP = prependNoneAsEmpty(STYLES.SHADOW_TOP);

const formatArgs = (args: any) => {
  args.class = formatClassNames(args);

  return { args };
};

const formatClassNames = (args: any) => {
  const classNames: string[] = [];

  if (args.shadowTop) classNames.push(args.shadowTop);
  if (args.shadowBottom) classNames.push(args.shadowBottom);

  return classNames.join(' ');
};

const formatSnippet = (code: string, context: StoryContext) => {
  const { args } = context;

  return `<div class="${formatClassNames(args)}">Demo</div>`;
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
  template: '<div class="inline-block p-1" v-bind="args">Demo</div>',
  updated() {
    return formatArgs(args);
  },
});

export default {
  argTypes: {
    shadowBottom: {
      ...formatArgType({ SHADOW_BOTTOM }),
      description: `Applies a bottom shadow at the element's boundaries`,
      name: 'Shadow Bottom',
    },
    shadowTop: {
      ...formatArgType({ SHADOW_TOP }),
      description: `Applies a top shadow at the element's boundaries`,
      name: 'Shadow Top',
    },
  },
  args: {
    shadowBottom: SHADOW_BOTTOM.None,
    shadowTop: SHADOW_TOP.None,
  },
  parameters,
  render,
  tags: ['autodocs'],
  title: 'Foundations/Shadow',
};

export const Default = {};

export const ShadowTopLevel1 = {
  args: {
    shadowTop: SHADOW_TOP['Level 1'],
  },
};

export const ShadowTopLevel2 = {
  args: {
    shadowTop: SHADOW_TOP['Level 2'],
  },
};

export const ShadowTopLevel3 = {
  args: {
    shadowTop: SHADOW_TOP['Level 3'],
  },
};

export const ShadowTopLevel4 = {
  args: {
    shadowTop: SHADOW_TOP['Level 4'],
  },
};

export const ShadowTopLevel5 = {
  args: {
    shadowTop: SHADOW_TOP['Level 5'],
  },
};

export const ShadowBottomLevel1 = {
  args: {
    shadowTop: SHADOW_BOTTOM['Level 1'],
  },
};

export const ShadowBottomLevel2 = {
  args: {
    shadowTop: SHADOW_BOTTOM['Level 2'],
  },
};

export const ShadowBottomLevel3 = {
  args: {
    shadowTop: SHADOW_BOTTOM['Level 3'],
  },
};

export const ShadowBottomLevel4 = {
  args: {
    shadowTop: SHADOW_BOTTOM['Level 4'],
  },
};

export const ShadowBottomLevel5 = {
  args: {
    shadowTop: SHADOW_BOTTOM['Level 5'],
  },
};
