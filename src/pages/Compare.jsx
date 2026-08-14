import { useEffect, useState } from "react";

function Compare() {
  const [leftPokemon, setLeftPokemon] =
    useState("");

  const [rightPokemon, setRightPokemon] =
    useState("");

  const [leftData, setLeftData] =
    useState(null);

  const [rightData, setRightData] =
    useState(null);

  const [suggestions, setSuggestions] =
    useState([]);

  const fetchPokemon = async (
    name,
    side
  ) => {
    if (!name) return;

    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );

      const data =
        await res.json();

      if (side === "left") {
        setLeftData(data);
      } else {
        setRightData(data);
      }
    } catch (error) {
      console.error(
        error
      );
    }
  };

  useEffect(() => {
    const storedPokemon =
      localStorage.getItem(
        "compareLeft"
      );

    if (!storedPokemon) return;

    try {
      const pokemon =
        JSON.parse(storedPokemon);

      setLeftPokemon(
        pokemon.name
      );

      fetchPokemon(
        pokemon.name,
        "left"
      );
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(
      async () => {
        if (
          rightPokemon.length < 2
        ) {
          setSuggestions([]);
          return;
        }

        try {
          const res =
            await fetch(
              `https://pokeapi.co/api/v2/pokemon?limit=1302`
            );

          const data =
            await res.json();

          const filtered =
            data.results
              .filter((pokemon) =>
                pokemon.name.includes(
                  rightPokemon.toLowerCase()
                )
              )
              .slice(0, 8);

          setSuggestions(
            filtered
          );
        } catch (error) {
          console.error(error);
        }
      },
      300
    );

    return () =>
      clearTimeout(timer);
  }, [rightPokemon]);

  const leftImage =
    leftData?.sprites?.other
      ?.home?.front_default ||
    leftData?.sprites?.other?.[
      "official-artwork"
    ]?.front_default;

  const rightImage =
    rightData?.sprites?.other
      ?.home?.front_default ||
    rightData?.sprites?.other?.[
      "official-artwork"
    ]?.front_default;

  return (
    <main className="min-h-screen bg-[#030712] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-6xl font-black text-white">
            Compare Pokémon
          </h1>

          <p className="mt-4 text-slate-400">
            Compare stats, types,
            height, weight and more.
          </p>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-2">
          <input
            value={leftPokemon}
            disabled
            className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-white"
          />

          <div className="relative">
            <input
              value={rightPokemon}
              onChange={(e) =>
                setRightPokemon(
                  e.target.value
                )
              }
              placeholder="Search Pokémon..."
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none"
            />

            {suggestions.length >
              0 && (
                <div className="absolute top-16 z-50 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
                  {suggestions.map(
                    (pokemon) => (
                      <button
                        key={
                          pokemon.name
                        }
                        onClick={() => {
                          setRightPokemon(
                            pokemon.name
                          );

                          fetchPokemon(
                            pokemon.name,
                            "right"
                          );

                          setSuggestions(
                            []
                          );
                        }}
                        className="block w-full px-4 py-3 text-left capitalize text-white hover:bg-white/5"
                      >
                        {
                          pokemon.name
                        }
                      </button>
                    )
                  )}
                </div>
              )}
          </div>
        </div>

        {leftData && rightData && (
          <>
            {(() => {
              const leftTotal =
                leftData.stats.reduce(
                  (sum, stat) =>
                    sum + stat.base_stat,
                  0
                );

              const rightTotal =
                rightData.stats.reduce(
                  (sum, stat) =>
                    sum + stat.base_stat,
                  0
                );

              const winner =
                leftTotal > rightTotal
                  ? leftData.name
                  : rightData.name;

              return (
                <>
                  <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                    {/* Left */}
                    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                      <img
                        src={leftImage}
                        alt={leftData.name}
                        className="mx-auto h-72 w-72 object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                      />

                      <h2 className="mt-4 text-center text-5xl font-black capitalize text-white">
                        {leftData.name}
                      </h2>

                      <p className="mt-2 text-center text-slate-500">
                        #{leftData.id}
                      </p>

                      <div className="mt-5 flex flex-wrap justify-center gap-2">
                        {leftData.types.map(
                          (type) => (
                            <span
                              key={
                                type.type.name
                              }
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase text-white"
                            >
                              {
                                type.type.name
                              }
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    {/* VS */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 animate-ping rounded-full bg-red-500/20" />

                        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-xl">
                          <span className="text-4xl font-black text-red-500">
                            VS
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                      <img
                        src={rightImage}
                        alt={rightData.name}
                        className="mx-auto h-72 w-72 object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                      />

                      <h2 className="mt-4 text-center text-5xl font-black capitalize text-white">
                        {rightData.name}
                      </h2>

                      <p className="mt-2 text-center text-slate-500">
                        #{rightData.id}
                      </p>

                      <div className="mt-5 flex flex-wrap justify-center gap-2">
                        {rightData.types.map(
                          (type) => (
                            <span
                              key={
                                type.type.name
                              }
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase text-white"
                            >
                              {
                                type.type.name
                              }
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-8 rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                    <h3 className="mb-8 text-3xl font-black text-white">
                      Battle Stats
                    </h3>

                    <div className="space-y-4">
                      {leftData.stats.map(
                        (
                          stat,
                          index
                        ) => {
                          const left =
                            stat.base_stat;

                          const right =
                            rightData.stats[
                              index
                            ].base_stat;

                          return (
                            <div
                              key={
                                stat.stat
                                  .name
                              }
                              className="grid grid-cols-3 items-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                            >
                              <span
                                className={`text-right text-xl font-black ${left >
                                    right
                                    ? "text-green-400"
                                    : "text-white"
                                  }`}
                              >
                                {left}
                              </span>

                              <span className="text-center capitalize text-slate-400">
                                {stat.stat.name.replace(
                                  "-",
                                  " "
                                )}
                              </span>

                              <span
                                className={`text-xl font-black ${right >
                                    left
                                    ? "text-green-400"
                                    : "text-white"
                                  }`}
                              >
                                {right}
                              </span>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                      <h4 className="mb-4 text-lg font-bold text-white">
                        Height
                      </h4>

                      <div className="flex justify-between">
                        <span className="text-slate-300">
                          {
                            leftData.height
                          }
                        </span>

                        <span className="text-slate-300">
                          {
                            rightData.height
                          }
                        </span>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                      <h4 className="mb-4 text-lg font-bold text-white">
                        Weight
                      </h4>

                      <div className="flex justify-between">
                        <span className="text-slate-300">
                          {
                            leftData.weight
                          }
                        </span>

                        <span className="text-slate-300">
                          {
                            rightData.weight
                          }
                        </span>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                      <h4 className="mb-4 text-lg font-bold text-white">
                        Base Exp
                      </h4>

                      <div className="flex justify-between">
                        <span className="text-slate-300">
                          {
                            leftData.base_experience
                          }
                        </span>

                        <span className="text-slate-300">
                          {
                            rightData.base_experience
                          }
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Winner */}
                  <div className="mt-8 rounded-[32px] border border-yellow-500/20 bg-yellow-500/5 p-8 text-center">
                    <h3 className="text-2xl font-black text-yellow-400">
                      Battle Winner
                    </h3>

                    <p className="mt-4 text-5xl font-black capitalize text-white">
                      {winner}
                    </p>

                    <p className="mt-3 text-slate-400">
                      Total Power :
                      {" "}
                      {Math.max(
                        leftTotal,
                        rightTotal
                      )}
                    </p>
                  </div>
                </>
              );
            })()}
          </>
        )}
      </div>
    </main>
  );
}

export default Compare;