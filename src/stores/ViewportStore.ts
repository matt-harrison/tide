import { defineStore } from 'pinia';

type State = {
  isLandscape: boolean | undefined;
  windowWidth: number | undefined;
  scrollY: number | undefined;
};

export const useViewportStore = defineStore('viewportStore', {
  actions: {
    addListener(callback: () => void) {
      window.addEventListener('resize', callback);
    },
    checkScroll() {
      this.scrollY = window.scrollY;
    },
    checkViewport() {
      this.windowWidth = window.innerWidth;
      this.isLandscape = window.innerWidth >= window.innerHeight;
    },
    cleanup() {
      window.removeEventListener('resize', this.checkViewport);
      window.removeEventListener('scroll', this.checkScroll);
    },
    initialize() {
      window.addEventListener('resize', this.checkViewport);
      window.addEventListener('scroll', this.checkScroll);
      this.checkViewport();
    },
    removeListener(callback: () => void) {
      window.removeEventListener('resize', callback);
    },
  },
  getters: {
    isExtraSmall: (state) => (state.windowWidth ? state.windowWidth < 768 : false),
    isLarge: (state) => (state.windowWidth ? state.windowWidth >= 1232 : false),
    isMedium: (state) => (state.windowWidth ? state.windowWidth >= 992 && state.windowWidth < 1232 : false),
    isSmall: (state) => (state.windowWidth ? state.windowWidth >= 768 && state.windowWidth < 992 : false),
  },
  state: (): State => ({
    isLandscape: undefined,
    scrollY: undefined,
    windowWidth: undefined,
  }),
});
