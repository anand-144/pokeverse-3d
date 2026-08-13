import { useState } from "react";

function useRandomPokemon() {
  const [pokemon, setPokemon] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [
    recentPokemon,
    setRecentPokemon,
  ] = useState([]);

  const generatePokemon = async () => {
    try {
      setLoading(true);

      const randomId =
        Math.floor(
          Math.random() * 1025
        ) + 1;

      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );

      const data = await res.json();

      setPokemon(data);

      setRecentPokemon((prev) => {
        const filtered =
          prev.filter(
            (p) => p.id !== data.id
          );

        return [
          data,
          ...filtered,
        ].slice(0, 6);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    pokemon,
    loading,
    recentPokemon,
    generatePokemon,
  };
}

export default useRandomPokemon;