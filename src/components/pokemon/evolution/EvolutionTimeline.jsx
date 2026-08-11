import EvolutionCard from "./EvolutionCard";
import EvolutionConnector from "./EvolutionConnector";

function EvolutionTimeline({
  evolutionChain,
}) {
  
  if (
    !evolutionChain ||
    evolutionChain.length === 0
  ) {
    return null;
  }

  return (
    <>
      {/* Desktop */}
      <div className="hidden items-center justify-center gap-8 xl:flex">
        {evolutionChain.map(
          (pokemon, index) => (
            <div
              key={pokemon.id}
              className="flex items-center"
            >
              <EvolutionCard
                pokemon={pokemon}
                isCurrent={
                  index ===
                  evolutionChain.length -
                    1
                }
              />

              {index <
                evolutionChain.length -
                  1 && (
                <EvolutionConnector
                  trigger={
                    evolutionChain[
                      index + 1
                    ]
                      ?.evolutionDetails
                      ?.trigger ||
                    "Evolution"
                  }
                />
              )}
            </div>
          )
        )}
      </div>

      {/* Tablet */}
      <div className="hidden gap-8 md:grid xl:hidden">
        {evolutionChain.map(
          (pokemon, index) => (
            <div
              key={pokemon.id}
              className="space-y-5"
            >
              <EvolutionCard
                pokemon={pokemon}
                isCurrent={
                  index ===
                  evolutionChain.length -
                    1
                }
              />

              {index <
                evolutionChain.length -
                  1 && (
                <div className="flex justify-center">
                  <EvolutionConnector
                    trigger={
                      evolutionChain[
                        index + 1
                      ]
                        ?.evolutionDetails
                        ?.trigger ||
                      "Evolution"
                    }
                  />
                </div>
              )}
            </div>
          )
        )}
      </div>

      {/* Mobile */}
      <div className="space-y-6 md:hidden">
        {evolutionChain.map(
          (pokemon, index) => (
            <div
              key={pokemon.id}
              className="space-y-5"
            >
              <EvolutionCard
                pokemon={pokemon}
                isCurrent={
                  index ===
                  evolutionChain.length -
                    1
                }
              />

              {index <
                evolutionChain.length -
                  1 && (
                <EvolutionConnector
                  trigger={
                    evolutionChain[
                      index + 1
                    ]
                      ?.evolutionDetails
                      ?.trigger ||
                    "Evolution"
                  }
                />
              )}
            </div>
          )
        )}
      </div>

      {/* Footer */}
      <div className="mt-10 flex justify-center">
        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            {evolutionChain.length}
            {" "}
            Evolution Stage
            {evolutionChain.length >
            1
              ? "s"
              : ""}
          </span>
        </div>
      </div>
    </>
  );
}

export default EvolutionTimeline;