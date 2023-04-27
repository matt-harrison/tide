import { defineStore } from 'pinia';

type State = {
  favorites: number[];
};

export const useFavoriteStore = defineStore('favoriteStore', {
  actions: {
    isFavorite(favorite: number) {
      return this.favorites.includes(favorite);
    },
    toggleFavorite(favoriteNew: number) {
      if (this.favorites.includes(favoriteNew)) {
        this.favorites = this.favorites.filter((favorite) => favorite !== favoriteNew);
      } else {
        this.favorites.push(favoriteNew);
      }
    },
  },
  state: (): State => ({
    favorites: [],
  }),
});
