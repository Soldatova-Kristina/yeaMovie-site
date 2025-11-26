import { useState, useEffect } from "react";
import { favoritesStorage } from "./favoritesStorage";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(favoritesStorage.get());
  }, []);

  const addToFavorites = (movieId) => {
    const updated = favoritesStorage.add(movieId);
    setFavorites(updated);
  };

  const removeFromFavorites = (movieId) => {
    const updated = favoritesStorage.remove(movieId);
    setFavorites(updated);
  };

  const toggleFavorite = (movieId) => {
    if (favoritesStorage.has(movieId)) {
      removeFromFavorites(movieId);
    } else {
      addToFavorites(movieId);
    }
  };

  const isFavorite = (movieId) => {
    return favorites.includes(movieId);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
  };
}