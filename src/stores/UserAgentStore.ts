import { defineStore } from 'pinia';

type State = {
  isTouchscreen: boolean | undefined;
};

export const useUserAgentStore = defineStore('userAgentStore', {
  actions: {
    initialize() {
      this.isTouchscreen = !!('ontouchstart' in document.documentElement);
    },
  },
  state: (): State => ({
    isTouchscreen: undefined,
  }),
});
