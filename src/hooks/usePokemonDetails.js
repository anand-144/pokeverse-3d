import { useEffect, useState } from "react";

function usePokemonDetails(id) {
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchPokemon = async () => {
      try {
        setLoading(true);

        const [pokemonRes, speciesRes] =
          await Promise.all([
            fetch(
              `https://pokeapi.co/api/v2/pokemon/${id}`
            ),
            fetch(
              `https://pokeapi.co/api/v2/pokemon-species/${id}`
            ),
          ]);

        const pokemonData =
          await pokemonRes.json();

        const speciesData =
          await speciesRes.json();

        setPokemon(pokemonData);
        setSpecies(speciesData);
      } catch (err) {
        console.error(err);
        setError(
          "Failed to load Pokémon."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  return {
    pokemon,
    species,
    loading,
    error,
  };
}

export default usePokemonDetails;