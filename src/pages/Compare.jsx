import { useState } from "react";

const Compare = () => {
  const [leftPokemon, setLeftPokemon] =
    useState("");

  const [rightPokemon, setRightPokemon] =
    useState("");

  const [leftData, setLeftData] =
    useState(null);

  const [rightData, setRightData] =
    useState(null);

  const fetchPokemon = async (
    name,
    side
  ) => {
    if (!name) return;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );

      const data =
        await response.json();

      if (side === "left") {
        setLeftData(data);
      } else {
        setRightData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-6xl font-black text-white">
            Compare Pokémon
          </h1>

          <p className="text-lg text-slate-400">
            Compare stats, types,
            abilities and more.
          </p>
        </div>

        {/* Search */}
        <div className="mb-10 grid gap-4 md:grid-cols-2">
          <div className="flex gap-3">
            <input
              value={leftPokemon}
              onChange={(e) =>
                setLeftPokemon(
                  e.target.value
                )
              }
              placeholder="Charizard"
              className="h-14 flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none"
            />

            <button
              onClick={() =>
                fetchPokemon(
                  leftPokemon,
                  "left"
                )
              }
              className="rounded-2xl bg-red-500 px-6 text-white"
            >
              Load
            </button>
          </div>

          <div className="flex gap-3">
            <input
              value={rightPokemon}
              onChange={(e) =>
                setRightPokemon(
                  e.target.value
                )
              }
              placeholder="Blastoise"
              className="h-14 flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none"
            />

            <button
              onClick={() =>
                fetchPokemon(
                  rightPokemon,
                  "right"
                )
              }
              className="rounded-2xl bg-blue-500 px-6 text-white"
            >
              Load
            </button>
          </div>
        </div>

        {leftData &&
          rightData && (
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <img
                  src={
                    leftData.sprites
                      .other.home
                      .front_default
                  }
                  alt={
                    leftData.name
                  }
                  className="mx-auto h-60 w-60 object-contain"
                />

                <h2 className="mt-6 text-center text-4xl font-bold capitalize text-white">
                  {leftData.name}
                </h2>
              </div>

              {/* Right */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <img
                  src={
                    rightData.sprites
                      .other.home
                      .front_default
                  }
                  alt={
                    rightData.name
                  }
                  className="mx-auto h-60 w-60 object-contain"
                />

                <h2 className="mt-6 text-center text-4xl font-bold capitalize text-white">
                  {rightData.name}
                </h2>
              </div>

              {/* Stats */}
              <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="mb-8 text-3xl font-bold text-white">
                  Base Stats
                </h3>

                <div className="space-y-5">
                  {leftData.stats.map(
                    (
                      stat,
                      index
                    ) => (
                      <div
                        key={
                          stat
                            .stat
                            .name
                        }
                        className="grid grid-cols-3 items-center gap-6"
                      >
                        <span className="text-right font-bold text-white">
                          {
                            stat.base_stat
                          }
                        </span>

                        <span className="text-center capitalize text-slate-400">
                          {
                            stat.stat
                              .name
                          }
                        </span>

                        <span className="font-bold text-white">
                          {
                            rightData
                              .stats[
                              index
                            ]
                              .base_stat
                          }
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="mb-5 text-2xl font-bold text-white">
                  {leftData.name}
                </h3>

                <div className="space-y-3 text-slate-300">
                  <p>
                    Height:{" "}
                    {
                      leftData.height
                    }
                  </p>

                  <p>
                    Weight:{" "}
                    {
                      leftData.weight
                    }
                  </p>

                  <p>
                    Types:{" "}
                    {leftData.types
                      .map(
                        (
                          type
                        ) =>
                          type
                            .type
                            .name
                      )
                      .join(
                        ", "
                      )}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="mb-5 text-2xl font-bold capitalize text-white">
                  {
                    rightData.name
                  }
                </h3>

                <div className="space-y-3 text-slate-300">
                  <p>
                    Height:{" "}
                    {
                      rightData.height
                    }
                  </p>

                  <p>
                    Weight:{" "}
                    {
                      rightData.weight
                    }
                  </p>

                  <p>
                    Types:{" "}
                    {rightData.types
                      .map(
                        (
                          type
                        ) =>
                          type
                            .type
                            .name
                      )
                      .join(
                        ", "
                      )}
                  </p>
                </div>
              </div>
            </div>
          )}
      </div>
    </main>
  );
};

export default Compare;