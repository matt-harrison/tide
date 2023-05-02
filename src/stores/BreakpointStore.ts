import { defineStore } from 'pinia';

type State = {
  windowWidth: Number | undefined;
};

export const useBreakpointStore = defineStore('breakpointStore', {
  actions: {
    addListener(callback: () => void) {
      window.addEventListener('resize', callback);
    },
    cleanup() {
      window.removeEventListener('resize', this.setWindowWidth);
    },
    initialize() {
      window.addEventListener('resize', this.setWindowWidth);
      this.setWindowWidth();
    },
    removeListener(callback: () => void) {
      window.removeEventListener('resize', callback);
    },
    setWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
  getters: {
    isExtraSmall: (state) => (state.windowWidth ? state.windowWidth <= 767 : false),
    isLarge: (state) => (state.windowWidth ? state.windowWidth >= 1232 : false),
    isMedium: (state) => (state.windowWidth ? state.windowWidth >= 991 && state.windowWidth < 1231 : false),
    isSmall: (state) => (state.windowWidth ? state.windowWidth >= 768 && state.windowWidth < 991 : false),
  },
  state: (): State => ({
    windowWidth: undefined,
  }),
});
