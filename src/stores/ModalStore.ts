import { defineStore } from 'pinia';

type State = {
  isScrollLocked: boolean;
  offsetBottom: number | null;
  offsetTop: number | null;
};

export const useModalStore = defineStore('modalStore', {
  actions: {
    clearOffsetBottom() {
      this.offsetBottom = null;
    },
    clearOffsetTop() {
      this.offsetTop = null;
    },
    setIsScrollLocked(isScrollLocked: boolean) {
      this.isScrollLocked = isScrollLocked;

      if (this.isScrollLocked) {
        document.querySelector('body')?.classList.add('tide-y-hidden');
      } else {
        document.querySelector('body')?.classList.remove('tide-y-hidden');
      }
    },
    setOffsetBottom(offsetBottom: number) {
      this.offsetBottom = offsetBottom;
    },
    setOffsetTop(offsetTop: number) {
      this.offsetTop = offsetTop;
    },
  },
  state: (): State => ({
    isScrollLocked: false,
    offsetBottom: null,
    offsetTop: null,
  }),
});
