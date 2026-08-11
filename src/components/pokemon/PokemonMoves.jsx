import { useEffect, useMemo, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const tabs = [
  {
    value: "level-up",
    label: "Level Up",
  },
  {
    value: "machine",
    label: "TM",
  },
  {
    value: "egg",
    label: "Egg",
  },
  {
    value: "tutor",
    label: "Tutor",
  },
];

const typeColors = {
  normal: "bg-stone-500/20 text-stone-300",
  fire: "bg-orange-500/20 text-orange-300",
  water: "bg-blue-500/20 text-blue-300",
  electric: "bg-yellow-500/20 text-yellow-300",
  grass: "bg-green-500/20 text-green-300",
  ice: "bg-cyan-500/20 text-cyan-300",
  fighting: "bg-red-500/20 text-red-300",
  poison: "bg-purple-500/20 text-purple-300",
  ground: "bg-amber-500/20 text-amber-300",
  flying: "bg-indigo-500/20 text-indigo-300",
  psychic: "bg-pink-500/20 text-pink-300",
  bug: "bg-lime-500/20 text-lime-300",
  rock: "bg-yellow-700/20 text-yellow-400",
  ghost: "bg-violet-500/20 text-violet-300",
  dragon: "bg-indigo-600/20 text-indigo-300",
  dark: "bg-slate-600/20 text-slate-300",
  steel: "bg-slate-400/20 text-slate-200",
  fairy: "bg-pink-400/20 text-pink-200",
};

function PokemonMoves({ pokemon }) {
  const [search, setSearch] =
    useState("");

  const [activeTab, setActiveTab] =
    useState("level-up");

  const [visibleMoves, setVisibleMoves] =
    useState(20);

  const [moveDetails, setMoveDetails] =
    useState({});

  const filteredMoves = useMemo(() => {
    return pokemon.moves.filter(
      (moveData) => {
        const matchingDetail =
          moveData.version_group_details.find(
            (detail) =>
              detail.move_learn_method
                .name === activeTab
          );

        if (!matchingDetail)
          return false;

        return moveData.move.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );
      }
    );
  }, [
    pokemon.moves,
    search,
    activeTab,
  ]);

  useEffect(() => {
    async function loadMoveDetails() {
      try {
        const movesToFetch =
          filteredMoves.slice(
            0,
            visibleMoves
          );

        const results =
          await Promise.all(
            movesToFetch.map(
              async (moveData) => {
                if (
                  moveDetails[
                    moveData.move.name
                  ]
                ) {
                  return null;
                }

                const response =
                  await fetch(
                    moveData.move.url
                  );

                const data =
                  await response.json();

                return {
                  name:
                    moveData.move.name,
                  data,
                };
              }
            )
          );

        const newDetails = {};

        results.forEach((move) => {
          if (!move) return;

          newDetails[move.name] =
            move.data;
        });

        if (
          Object.keys(newDetails)
            .length
        ) {
          setMoveDetails(
            (prev) => ({
              ...prev,
              ...newDetails,
            })
          );
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadMoveDetails();
  }, [
    filteredMoves,
    visibleMoves,
  ]);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">
            Moves
          </h2>

          <p className="mt-2 text-slate-400">
            Learnable moves for this
            Pokémon
          </p>
        </div>

        <div className="relative w-full lg:w-80">
          <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

          <input
            type="text"
            placeholder="Search moves..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="h-12 w-full rounded-2xl border border-white/10 bg-black/20 pl-12 pr-4 text-white outline-none transition-all focus:border-white/20"
          />
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => {
              setActiveTab(
                tab.value
              );

              setVisibleMoves(
                20
              );
            }}
            className={`rounded-xl px-5 py-2 font-medium transition-all duration-300 ${
              activeTab === tab.value
                ? "bg-red-500 text-white"
                : "bg-white/5 text-slate-400 hover:bg-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mb-6 text-sm text-slate-400">
        {filteredMoves.length} moves
        found
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredMoves
          .slice(0, visibleMoves)
          .map((moveData) => {
            const detail =
              moveDetails[
                moveData.move.name
              ];

            if (!detail)
              return (
                <div
                  key={
                    moveData.move.name
                  }
                  className="h-56 animate-pulse rounded-2xl border border-white/10 bg-black/20"
                />
              );

            const learnInfo =
              moveData.version_group_details.find(
                (detail) =>
                  detail
                    .move_learn_method
                    .name ===
                  activeTab
              );

            return (
              <div
                key={
                  moveData.move.name
                }
                className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/5"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold capitalize text-white">
                    {moveData.move.name.replace(
                      /-/g,
                      " "
                    )}
                  </h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                      typeColors[
                        detail.type
                          .name
                      ] ||
                      "bg-white/10 text-white"
                    }`}
                  >
                    {
                      detail.type
                        .name
                    }
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-slate-500">
                      Power
                    </p>

                    <p className="font-semibold text-white">
                      {detail.power ??
                        "-"}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-slate-500">
                      Accuracy
                    </p>

                    <p className="font-semibold text-white">
                      {detail.accuracy ??
                        "-"}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-slate-500">
                      PP
                    </p>

                    <p className="font-semibold text-white">
                      {detail.pp}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wider text-slate-500">
                      Class
                    </p>

                    <p className="font-semibold capitalize text-white">
                      {
                        detail
                          .damage_class
                          .name
                      }
                    </p>
                  </div>
                </div>

                {activeTab ===
                  "level-up" &&
                  learnInfo && (
                    <div className="mt-5 border-t border-white/10 pt-4">
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        Learns At
                      </p>

                      <p className="mt-1 text-lg font-bold text-white">
                        Level{" "}
                        {
                          learnInfo.level_learned_at
                        }
                      </p>
                    </div>
                  )}
              </div>
            );
          })}
      </div>

      {filteredMoves.length >
        visibleMoves && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() =>
              setVisibleMoves(
                (prev) =>
                  prev + 20
              )
            }
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-white/10"
          >
            Load More Moves
          </button>
        </div>
      )}

      {visibleMoves > 20 && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() =>
              setVisibleMoves(20)
            }
            className="rounded-2xl border border-white/10 bg-black/20 px-6 py-3 font-medium text-slate-300 transition-all duration-300 hover:bg-white/5"
          >
            Show Less
          </button>
        </div>
      )}
    </section>
  );
}

export default PokemonMoves;