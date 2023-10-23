import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  stories: [
    '../src/stories/Welcome.mdx',
    '../src/stories/*.stories.ts',
  ],
};
export default config;
