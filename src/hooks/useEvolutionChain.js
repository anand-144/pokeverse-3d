import { useEffect, useState } from "react";

const useEvolutionChain = (id) => {
  const [pokemon, setPokemon] =
    useState(null);

  const [species, setSpecies] =
    useState(null);

  const [evolutionChain, setEvolutionChain] =
    useState([]);

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
            speciesData?.evolution_chain
              ?.url
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

            const chain = [];

            const parseChain =
              async (chainNode) => {
                const pokemonName =
                  chainNode.species.name;

                const pokeRes =
                  await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
                  );

                const pokeData =
                  await pokeRes.json();

                const details =
                  chainNode
                    ?.evolution_details?.[0];

                let evolutionMethod =
                  "Base Form";

                if (details) {
                  if (
                    details.item
                  ) {
                    evolutionMethod =
                      details.item.name
                        .replaceAll(
                          "-",
                          " "
                        )
                        .replace(
                          /\b\w/g,
                          (char) =>
                            char.toUpperCase()
                        );
                  } else if (
                    details.min_level
                  ) {
                    evolutionMethod = `Level ${details.min_level}`;
                  } else if (
                    details.min_happiness
                  ) {
                    evolutionMethod =
                      "Friendship";
                  } else if (
                    details.held_item
                  ) {
                    evolutionMethod =
                      `Hold ${details.held_item.name
                        .replaceAll(
                          "-",
                          " "
                        )
                        .replace(
                          /\b\w/g,
                          (char) =>
                            char.toUpperCase()
                        )}`;
                  } else if (
                    details.trigger
                      ?.name
                  ) {
                    evolutionMethod =
                      details.trigger.name
                        .replaceAll(
                          "-",
                          " "
                        )
                        .replace(
                          /\b\w/g,
                          (char) =>
                            char.toUpperCase()
                        );
                  }
                }

                chain.push({
                  id: pokeData.id,

                  name:
                    pokeData.name,

                  sprites:
                    pokeData.sprites,

                  types:
                    pokeData.types,

                  evolutionDetails: {
                    trigger:
                      evolutionMethod,
                  },
                });

                if (
                  chainNode.evolves_to
                    ?.length
                ) {
                  await parseChain(
                    chainNode
                      .evolves_to[0]
                  );
                }
              };

            await parseChain(
              evolutionData.chain
            );

            setEvolutionChain(
              chain
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

export default useEvolutionChain;