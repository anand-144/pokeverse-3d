import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SimilarPokemon({ pokemon }) {
  const [similarPokemon, setSimilarPokemon] =
    useState([]);

  useEffect(() => {
    async function loadSimilar() {
      try {
        const typeUrl =
          pokemon.types[0].type.url;

        const typeRes =
          await fetch(typeUrl);

        const typeData =
          await typeRes.json();

        const filtered =
          typeData.pokemon
            .slice(0, 8)
            .map((p) => p.pokemon);

        const details =
          await Promise.all(
            filtered.map((p) =>
              fetch(p.url).then((res) =>
                res.json()
              )
            )
          );

        setSimilarPokemon(
          details.filter(
            (p) => p.id !== pokemon.id
          )
        );
      } catch (error) {
        console.error(error);
      }
    }

    loadSimilar();
  }, [pokemon]);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Similar Pokémon
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {similarPokemon.map((pokemon) => (
          <Link
            key={pokemon.id}
            to={`/pokemon/${pokemon.id}`}
          >
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-white/20">
              <img
                src={
                  pokemon.sprites.other.home
                    .front_default
                }
                alt={pokemon.name}
                className="mx-auto h-32 w-32 object-contain"
              />

              <h3 className="mt-4 text-center text-lg font-bold capitalize text-white">
                {pokemon.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default SimilarPokemon;