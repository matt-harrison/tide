import { defineStore } from 'pinia';

type State = {
  isDarkMode: boolean;
};

export const useDarkModeStore = defineStore('darkModeStore', {
  actions: {
    toggleIsDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
  state: (): State => ({
    isDarkMode: false,
  }),
});
