import { useEffect, useState } from "react";

const useEvoluationChain = (id) => {
  const [pokemon, setPokemon] =
    useState(null);

  const [species, setSpecies] =
    useState(null);

  const [evolutionChain, setEvolutionChain] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    const fetchPokemonDetails =
      async () => {
        try {
          setLoading(true);
          setError(null);

          // Pokemon
          const pokemonRes =
            await fetch(
              `https://pokeapi.co/api/v2/pokemon/${id}`
            );

          if (!pokemonRes.ok) {
            throw new Error(
              "Failed to fetch pokemon"
            );
          }

          const pokemonData =
            await pokemonRes.json();

          setPokemon(pokemonData);

          // Species
          const speciesRes =
            await fetch(
              pokemonData.species.url
            );

          if (!speciesRes.ok) {
            throw new Error(
              "Failed to fetch species"
            );
          }

          const speciesData =
            await speciesRes.json();

          setSpecies(speciesData);

          // Evolution Chain
          if (
            speciesData
              ?.evolution_chain?.url
          ) {
            const evolutionRes =
              await fetch(
                speciesData
                  .evolution_chain.url
              );

            if (
              !evolutionRes.ok
            ) {
              throw new Error(
                "Failed to fetch evolution chain"
              );
            }

            const evolutionData =
              await evolutionRes.json();

            setEvolutionChain(
              evolutionData
            );
          }
        } catch (err) {
          console.error(err);
          setError(err);
        } finally {
          setLoading(false);
        }
      };

    if (id) {
      fetchPokemonDetails();
    }
  }, [id]);

  return {
    pokemon,
    species,
    evolutionChain,
    loading,
    error,
  };
};

export default useEvoluationChain;