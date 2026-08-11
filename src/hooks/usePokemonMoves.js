import { useEffect, useState } from "react";

function usePokemonMoves(moves = []) {
  const [moveData, setMoveData] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    async function fetchMoves() {
      try {
        setLoading(true);
        setError(null);

        // Limit for performance
        const selectedMoves =
          moves.slice(0, 50);

        const results =
          await Promise.all(
            selectedMoves.map(
              async ({ move }) => {
                try {
                  const res =
                    await fetch(
                      move.url
                    );

                  const data =
                    await res.json();

                  return {
                    id: data.id,

                    name:
                      data.name,

                    type:
                      data.type
                        ?.name ||
                      "normal",

                    category:
                      data
                        .damage_class
                        ?.name ||
                      "status",

                    power:
                      data.power,

                    accuracy:
                      data.accuracy,

                    pp: data.pp,

                    priority:
                      data.priority,

                    effect:
                      data.effect_entries?.find(
                        (
                          entry
                        ) =>
                          entry
                            .language
                            .name ===
                          "en"
                      )
                        ?.short_effect ||
                      "No description available.",
                  };
                } catch (
                  error
                ) {
                  console.error(
                    error
                  );

                  return null;
                }
              }
            )
          );

        setMoveData(
          results.filter(
            Boolean
          )
        );
      } catch (error) {
        console.error(error);

        setError(error);
      } finally {
        setLoading(false);
      }
    }

    if (moves.length) {
      fetchMoves();
    }
  }, [moves]);

  return {
    moveData,
    loading,
    error,
  };
}

export default usePokemonMoves;