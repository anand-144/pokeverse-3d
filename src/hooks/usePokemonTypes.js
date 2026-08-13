import { useEffect, useState } from "react";

const API = "https://pokeapi.co/api/v2";

export default function usePokemonTypes(
  selectedType = "fire"
) {
  const [types, setTypes] = useState([]);
  const [typeData, setTypeData] = useState(null);
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTypes() {
      try {
        const res = await fetch(
          `${API}/type`
        );

        const data = await res.json();

        const filtered = data.results.filter(
          (type) =>
            !["shadow", "unknown"].includes(
              type.name
            )
        );

        setTypes(filtered);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTypes();
  }, []);

  useEffect(() => {
    async function fetchTypeDetails() {
      try {
        setLoading(true);

        const res = await fetch(
          `${API}/type/${selectedType}`
        );

        const data = await res.json();

        setTypeData(data);

        const pokemonList =
          data.pokemon
            ?.slice(0, 24)
            .map((p) => p.pokemon) || [];

        setPokemon(pokemonList);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchTypeDetails();
  }, [selectedType]);

  return {
    types,

    typeData,

    pokemon,

    loading,

    strengths:
      typeData?.damage_relations
        ?.double_damage_to || [],

    weaknesses:
      typeData?.damage_relations
        ?.double_damage_from || [],

    resistances:
      typeData?.damage_relations
        ?.half_damage_from || [],

    immunities:
      typeData?.damage_relations
        ?.no_damage_from || [],
  };
}