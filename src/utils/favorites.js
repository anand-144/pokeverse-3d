export const getFavorites = () => {
  return JSON.parse(
    localStorage.getItem(
      "favorites"
    ) || "[]"
  );
};

export const addFavorite = (
  id
) => {
  const favorites =
    getFavorites();

  if (
    !favorites.includes(id)
  ) {
    localStorage.setItem(
      "favorites",
      JSON.stringify([
        ...favorites,
        id,
      ])
    );
  }
};

export const removeFavorite =
  (id) => {
    const favorites =
      getFavorites().filter(
        (favId) =>
          favId !== id
      );

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  };

export const isFavorite = (
  id
) => {
  return getFavorites().includes(
    id
  );
};