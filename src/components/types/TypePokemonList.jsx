import { useEffect, useState } from "react";
import PokemonCard from "../pokedex/PokemonCard";

function TypePokemonList({ type }) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        setLoading(true);

        const res = await fetch(
          `https://pokeapi.co/api/v2/type/${type}`
        );

        const data =
          await res.json();

        const first60 =
          data.pokemon.slice(0, 60);

        const detailed =
          await Promise.all(
            first60.map(
              async (entry) => {
                const pokemonRes =
                  await fetch(
                    entry.pokemon.url
                  );

                const pokemonData =
                  await pokemonRes.json();

                return {
                  id: pokemonData.id,
                  name:
                    pokemonData.name,
                  image:
                    pokemonData
                      .sprites
                      ?.other?.home
                      ?.front_default,
                  types:
                    pokemonData.types.map(
                      (t) =>
                        t.type.name
                    ),
                  sprites:
                    pokemonData.sprites,
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

  if (loading) {
    return (
      <div className="text-slate-400">
        Loading Pokémon...
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-black text-white mb-6">
        Pokémon of Type
      </h3>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {pokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}
      </div>
    </div>
  );
}

export default TypePokemonList;