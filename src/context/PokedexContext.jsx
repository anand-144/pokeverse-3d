import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getTypes,
  getGenerations,
  getPokemonCount,
} from "../services/pokemonApi";

const PokedexContext =
  createContext(null);

export function PokedexProvider({
  children,
}) {
  const [types, setTypes] = useState([]);

  const [generations, setGenerations] =
    useState([]);

  const [pokemonCount, setPokemonCount] =
    useState(0);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [
          typesData,
          generationsData,
          countData,
        ] = await Promise.all([
          getTypes(),
          getGenerations(),
          getPokemonCount(),
        ]);

        setTypes(
          typesData.results.filter(
            (type) =>
              ![
                "unknown",
                "shadow",
              ].includes(type.name)
          )
        );

        setGenerations(
          generationsData.results
        );

        setPokemonCount(
          countData.count
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <PokedexContext.Provider
      value={{
        types,
        generations,
        pokemonCount,
        loading,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
}

export function usePokedex() {
  return useContext(
    PokedexContext
  );
}