import { defineStore } from 'pinia';

type State = {
  favorites: number[];
};

export const useFavoriteStore = defineStore('favoriteStore', {
  actions: {
    getIsFavorite(favorite: number) {
      return this.favorites.includes(favorite);
    },
    toggleIsFavorite(favorite: number) {
      if (this.favorites.includes(favorite)) {
        this.favorites = this.favorites.filter((favoriteNext) => favoriteNext !== favorite);
      } else {
        this.favorites.push(favorite);
      }
    },
  },
  state: (): State => ({
    favorites: [],
  }),
});
