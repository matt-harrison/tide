import type { Preview } from "@storybook/vue3";

import { realm } from '../src/config/main.config';

import '../src/assets/css/main.css';

import(`../src/assets/css/realm/${realm.id}.css`);

const preview: Preview = {
  parameters: {},
};

export default preview;
