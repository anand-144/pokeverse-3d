import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [pokemonList, setPokemonList] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadFavorites() {
      try {
        const favoriteIds = JSON.parse(
          localStorage.getItem(
            "favorites"
          ) || "[]"
        );

        if (
          favoriteIds.length === 0
        ) {
          setPokemonList([]);
          return;
        }

        const results =
          await Promise.all(
            favoriteIds.map(
              async (id) => {
                const response =
                  await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${id}`
                  );

                return response.json();
              }
            )
          );

        setPokemonList(results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadFavorites();
  }, []);

  const removeFavorite = (
    pokemonId
  ) => {
    const favorites = JSON.parse(
      localStorage.getItem(
        "favorites"
      ) || "[]"
    );

    const updated =
      favorites.filter(
        (id) => id !== pokemonId
      );

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    setPokemonList((prev) =>
      prev.filter(
        (pokemon) =>
          pokemon.id !== pokemonId
      )
    );
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-slate-300">
          Loading Favorites...
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-6xl font-black text-white">
            Favorite Pokémon
          </h1>

          <p className="text-lg text-slate-400">
            Your saved Pokémon
            collection
          </p>
        </div>

        {pokemonList.length ===
        0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">
            <h2 className="mb-3 text-3xl font-bold text-white">
              No Favorites Yet
            </h2>

            <p className="text-slate-400">
              Start adding Pokémon
              from the details page.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pokemonList.map(
              (pokemon) => (
                <div
                  key={pokemon.id}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <Link
                    to={`/pokemon/${pokemon.id}`}
                  >
                    <img
                      src={
                        pokemon
                          .sprites
                          .other
                          .home
                          .front_default
                      }
                      alt={
                        pokemon.name
                      }
                      className="mx-auto h-48 w-48 object-contain transition-transform duration-300 group-hover:scale-110"
                    />

                    <h3 className="mt-4 text-center text-2xl font-bold capitalize text-white">
                      {
                        pokemon.name
                      }
                    </h3>

                    <p className="mt-2 text-center text-slate-400">
                      #
                      {String(
                        pokemon.id
                      ).padStart(
                        4,
                        "0"
                      )}
                    </p>

                    <div className="mt-4 flex justify-center gap-2">
                      {pokemon.types.map(
                        (
                          type
                        ) => (
                          <span
                            key={
                              type
                                .type
                                .name
                            }
                            className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium capitalize text-white"
                          >
                            {
                              type
                                .type
                                .name
                            }
                          </span>
                        )
                      )}
                    </div>
                  </Link>

                  <button
                    onClick={() =>
                      removeFavorite(
                        pokemon.id
                      )
                    }
                    className="mt-5 w-full rounded-xl bg-red-500 py-3 font-medium text-white transition hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Favorites;