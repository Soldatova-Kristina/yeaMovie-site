const STORAGE_KEY = "favorite_movies";

export const favoritesStorage = {
  get() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Ошибка чтения избранного:", error);
      return [];
    }
  },

  set(favorites) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error("Ошибка сохранения избранного:", error);
    }
  },

  add(movieId) {
    const favorites = this.get();
    if (!favorites.includes(movieId)) {
      favorites.push(movieId);
      this.set(favorites);
    }
    return favorites;
  },

  remove(movieId) {
    const favorites = this.get().filter(id => id !== movieId);
    this.set(favorites);
    return favorites;
  },

  has(movieId) {
    return this.get().includes(movieId);
  },

  clear() {
    this.set([]);
  }
};