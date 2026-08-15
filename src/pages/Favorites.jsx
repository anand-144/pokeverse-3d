import { useEffect, useState } from "react";
import FavoritesHero from "../components/favorites/FavoritesHero";
import FavoritesStats from "../components/favorites/FavoritesStats";
import FeaturedFavorite from "../components/favorites/FeaturedFavorite";
import FavoriteCard from "../components/favorites/FavoriteCard";
import EmptyFavorites from "../components/favorites/EmptyFavorites";

function Favorites() {
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

  const uniqueTypes =
    new Set(
      pokemonList.flatMap(
        (pokemon) =>
          pokemon.types.map(
            (type) =>
              type.type.name
          )
      )
    ).size;

  const featuredPokemon =
    pokemonList[0];

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950">
        <p className="text-lg text-zinc-400">
          Loading Favorites...
        </p>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950">
      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]" />

      {/* Left Glow */}
      <div className="absolute left-0 top-[40%] h-[400px] w-[400px] rounded-full bg-red-500/5 blur-[120px]" />

      {/* Right Glow */}
      <div className="absolute right-0 top-[70%] h-[400px] w-[400px] rounded-full bg-red-500/5 blur-[120px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize:
            "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <FavoritesHero
          totalFavorites={
            pokemonList.length
          }
        />

        {pokemonList.length ===
        0 ? (
          <EmptyFavorites />
        ) : (
          <>
            <FavoritesStats
              totalFavorites={
                pokemonList.length
              }
              totalTypes={
                uniqueTypes
              }
              featuredPokemon={
                featuredPokemon?.name
              }
            />

            <FeaturedFavorite
              pokemon={
                featuredPokemon
              }
            />

            <section>
              <div className="mb-8">
                <h2 className="text-3xl font-black text-white">
                  Collection
                </h2>

                <p className="mt-2 text-zinc-400">
                  All your favorite
                  Pokémon in one
                  place.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {pokemonList.map(
                  (pokemon) => (
                    <FavoriteCard
                      key={
                        pokemon.id
                      }
                      pokemon={
                        pokemon
                      }
                      onRemove={() =>
                        removeFavorite(
                          pokemon.id
                        )
                      }
                    />
                  )
                )}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}

export default Favorites;