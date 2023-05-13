import { defineStore } from 'pinia';

type State = {
  isScrollLocked: boolean;
};

export const useModalStore = defineStore('modalStore', {
  actions: {
    setIsScrollLocked(isScrollLocked: boolean) {
      this.isScrollLocked = isScrollLocked;

      if (this.isScrollLocked) {
        document.querySelector('body')?.classList.add('y-hidden');
      } else {
        document.querySelector('body')?.classList.remove('y-hidden');
      }
    },
  },
  state: (): State => ({
    isScrollLocked: false,
  }),
});
