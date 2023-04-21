import { defineStore } from 'pinia';

type State = {
  favorites: string[];
};

export const useFavoriteStore = defineStore('favoriteStore', {
  actions: {
    isFavorite(favorite: string) {
      return this.favorites.includes(favorite);
    },
    toggleFavorite(favoriteNew: string) {
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
