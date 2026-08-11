import { useEffect, useMemo, useState } from "react";
import PokemonCard from "./PokemonCard";

const GENERATION_RANGES = {
  "generation-i": [1, 151],
  "generation-ii": [152, 251],
  "generation-iii": [252, 386],
  "generation-iv": [387, 493],
  "generation-v": [494, 649],
  "generation-vi": [650, 721],
  "generation-vii": [722, 809],
  "generation-viii": [810, 905],
  "generation-ix": [906, 1025],
};

function PokemonGrid({
  search,
  selectedType,
  selectedGeneration,
  sortBy,
}) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const [visibleCount, setVisibleCount] =
    useState(20);

  useEffect(() => {
    fetchPokemon();
  }, []);

  async function fetchPokemon() {
    try {
      setLoading(true);

      // Get current total count
      const countRes = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1"
      );

      const countData =
        await countRes.json();

      const totalPokemon =
        countData.count;

      // Fetch all pokemon names + urls
      const listRes = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${totalPokemon}`
      );

      const listData =
        await listRes.json();

      // Fetch details
      const details =
        await Promise.all(
          listData.results.map(
            async (pokemon) => {
              const res =
                await fetch(
                  pokemon.url
                );

              const detail =
                await res.json();

              return {
                id: detail.id,

                name: detail.name,

                image:
                  detail.sprites?.other?.home
                    ?.front_default ||
                  detail.sprites?.other?.[
                    "official-artwork"
                  ]?.front_default ||
                  detail.sprites?.front_default,

                shinyImage:
                  detail.sprites?.other?.home
                    ?.front_shiny ||
                  detail.sprites?.other?.[
                    "official-artwork"
                  ]?.front_shiny ||
                  detail.sprites?.front_shiny,

                sprites: detail.sprites,

                cries: detail.cries,

                types: detail.types.map(
                  (t) => t.type.name
                ),

                height: detail.height,

                weight: detail.weight,
              };
            }
          )
        );

      setPokemon(details);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const filteredPokemon =
    useMemo(() => {
      let results = [...pokemon];

      // Search
      if (search) {
        const query =
          search.toLowerCase();

        results = results.filter(
          (pokemon) =>
            pokemon.name.includes(
              query
            ) ||
            pokemon.id
              .toString()
              .includes(query)
        );
      }

      // Type
      if (
        selectedType !== "all"
      ) {
        results = results.filter(
          (pokemon) =>
            pokemon.types.includes(
              selectedType
            )
        );
      }

      // Generation
      if (
        selectedGeneration !==
        "all"
      ) {
        const range =
          GENERATION_RANGES[
          selectedGeneration
          ];

        if (range) {
          results = results.filter(
            (pokemon) =>
              pokemon.id >=
              range[0] &&
              pokemon.id <=
              range[1]
          );
        }
      }

      // Sorting
      switch (sortBy) {
        case "name":
          results.sort((a, b) =>
            a.name.localeCompare(
              b.name
            )
          );
          break;

        case "name-desc":
          results.sort((a, b) =>
            b.name.localeCompare(
              a.name
            )
          );
          break;

        case "height":
          results.sort(
            (a, b) =>
              b.height -
              a.height
          );
          break;

        case "weight":
          results.sort(
            (a, b) =>
              b.weight -
              a.weight
          );
          break;

        default:
          results.sort(
            (a, b) =>
              a.id - b.id
          );
      }

      return results;
    }, [
      pokemon,
      search,
      selectedType,
      selectedGeneration,
      sortBy,
    ]);

  if (loading) {
    return (
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({
              length: 12,
            }).map((_, index) => (
              <div
                key={index}
                className="h-[340px] animate-pulse rounded-3xl bg-white/5"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            {filteredPokemon.length} Pokémon Found
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPokemon
            .slice(0, visibleCount)
            .map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
              />
            ))}
        </div>

        {/* Progress */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <p className="text-sm text-slate-400">
            Showing{" "}
            <span className="font-semibold text-white">
              {Math.min(
                visibleCount,
                filteredPokemon.length
              )}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-white">
              {filteredPokemon.length}
            </span>{" "}
            Pokémon
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Show Less */}
            {visibleCount > 20 && (
              <button
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.max(prev - 20, 20)
                  )
                }
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              >
                Show Less
              </button>
            )}

            {/* Load More */}
            {visibleCount <
              filteredPokemon.length && (
                <button
                  onClick={() =>
                    setVisibleCount(
                      (prev) => prev + 20
                    )
                  }
                  className="rounded-2xl border border-red-500/30 bg-red-500/10 px-6 py-3 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-red-500 hover:bg-red-500"
                >
                  Load More
                </button>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PokemonGrid;