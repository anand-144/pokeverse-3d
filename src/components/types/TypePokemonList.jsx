import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ChevronDown,
} from "lucide-react";

import PokemonCard from "../pokedex/PokemonCard";

const INITIAL_LIMIT = 24;

function TypePokemonList({ type }) {
  const [pokemon, setPokemon] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [visibleCount, setVisibleCount] =
    useState(INITIAL_LIMIT);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        setLoading(true);
        setVisibleCount(
          INITIAL_LIMIT
        );

        const response =
          await fetch(
            `https://pokeapi.co/api/v2/type/${type}`
          );

        const data =
          await response.json();

        const first60 =
          data.pokemon.slice(0, 60);

        const detailed =
          await Promise.all(
            first60.map(
              async (entry) => {
                const pokemonResponse =
                  await fetch(
                    entry.pokemon.url
                  );

                const pokemonData =
                  await pokemonResponse.json();

                return {
                  id: pokemonData.id,
                  name:
                    pokemonData.name,
                  image:
                    pokemonData
                      .sprites?.other
                      ?.home
                      ?.front_default,
                  sprites:
                    pokemonData.sprites,
                  types:
                    pokemonData.types.map(
                      (t) =>
                        t.type.name
                    ),
                };
              }
            )
          );

        setPokemon(detailed);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, [type]);

  const filteredPokemon =
    useMemo(() => {
      return pokemon.filter(
        (poke) =>
          poke.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [pokemon, search]);

  const visiblePokemon =
    filteredPokemon.slice(
      0,
      visibleCount
    );

  if (loading) {
    return (
      <div>
        <div className="h-10 w-64 rounded-xl bg-white/5 animate-pulse mb-8" />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {[...Array(9)].map(
            (_, index) => (
              <div
                key={index}
                className="
                  h-[320px]
                  rounded-[28px]
                  border border-white/10
                  bg-white/[0.03]
                  animate-pulse
                "
              />
            )
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 mb-8">
        <div>
          <h3 className="text-3xl font-black text-white">
            {type.charAt(0).toUpperCase() +
              type.slice(1)}{" "}
            Pokémon
          </h3>

          <p className="mt-2 text-slate-400">
            Showing{" "}
            {filteredPokemon.length}{" "}
            Pokémon belonging to this
            type.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full xl:w-[320px]">
          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-500
            "
          />

          <input
            type="text"
            placeholder="Search Pokémon..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="
              w-full
              h-12
              pl-11
              pr-4
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              text-white
              placeholder:text-slate-500
              outline-none
            "
          />
        </div>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        {visiblePokemon.map(
          (pokemon) => (
            <motion.div
              key={pokemon.id}
              layout
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              <PokemonCard
                pokemon={pokemon}
              />
            </motion.div>
          )
        )}
      </motion.div>

      {/* Empty State */}
      {filteredPokemon.length ===
        0 && (
        <div className="py-20 text-center">
          <h4 className="text-xl font-bold text-white">
            No Pokémon Found
          </h4>

          <p className="mt-2 text-slate-400">
            Try another search term.
          </p>
        </div>
      )}

      {/* Load More */}
      {visibleCount <
        filteredPokemon.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() =>
              setVisibleCount(
                (prev) =>
                  prev + 12
              )
            }
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              text-white
              transition
              hover:bg-white/[0.05]
            "
          >
            Load More

            <ChevronDown size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

export default TypePokemonList;