import {
  FaMagnifyingGlass,
  FaFilter,
} from "react-icons/fa6";

import { usePokedex } from "../../context/PokedexContext";

const sortOptions = [
  {
    value: "id",
    label: "Pokédex Number",
  },
  {
    value: "name",
    label: "Name A-Z",
  },
  {
    value: "name-desc",
    label: "Name Z-A",
  },
  {
    value: "height",
    label: "Height",
  },
  {
    value: "weight",
    label: "Weight",
  },
];

const typeColors = {
  normal:
    "bg-slate-500/10 text-slate-300 border-slate-500/20",

  fire:
    "bg-orange-500/10 text-orange-400 border-orange-500/20",

  water:
    "bg-blue-500/10 text-blue-400 border-blue-500/20",

  grass:
    "bg-green-500/10 text-green-400 border-green-500/20",

  electric:
    "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",

  ice:
    "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",

  fighting:
    "bg-red-500/10 text-red-400 border-red-500/20",

  poison:
    "bg-purple-500/10 text-purple-400 border-purple-500/20",

  ground:
    "bg-amber-500/10 text-amber-400 border-amber-500/20",

  flying:
    "bg-sky-500/10 text-sky-400 border-sky-500/20",

  psychic:
    "bg-pink-500/10 text-pink-400 border-pink-500/20",

  bug:
    "bg-lime-500/10 text-lime-400 border-lime-500/20",

  rock:
    "bg-stone-500/10 text-stone-400 border-stone-500/20",

  ghost:
    "bg-violet-500/10 text-violet-400 border-violet-500/20",

  dragon:
    "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",

  dark:
    "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",

  steel:
    "bg-gray-500/10 text-gray-300 border-gray-500/20",

  fairy:
    "bg-rose-500/10 text-rose-400 border-rose-500/20",
};

function PokedexFilters({
  search,
  setSearch,
  selectedType,
  setSelectedType,
  selectedGeneration,
  setSelectedGeneration,
  sortBy,
  setSortBy,
}) {
  const {
    types,
    generations,
  } = usePokedex();

  return (
    <section className="px-6 pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
          {/* Header */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-500">
              <FaFilter />
            </div>

            <h3 className="text-lg font-semibold text-white">
              Search & Filters
            </h3>
          </div>

          {/* Search + Generation + Sort */}
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="relative">
              <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Search Pokémon..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="h-14 w-full rounded-2xl border border-white/10 bg-black/20 pl-12 pr-4 text-white outline-none transition-all placeholder:text-slate-500 focus:border-red-500"
              />
            </div>

            <select
              value={selectedGeneration}
              onChange={(e) =>
                setSelectedGeneration(
                  e.target.value
                )
              }
              className="h-14 rounded-2xl border border-white/10 bg-slate-900 px-4 text-white outline-none transition-all focus:border-red-500"
            >
              <option value="all">
                All Generations
              </option>

              {generations.map((gen) => (
                <option
                  key={gen.name}
                  value={gen.name}
                >
                  {gen.name
                    .replace(
                      "generation-",
                      "Generation "
                    )
                    .toUpperCase()}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value
                )
              }
              className="h-14 rounded-2xl border border-white/10 bg-slate-900 px-4 text-white outline-none transition-all focus:border-red-500"
            >
              {sortOptions.map(
                (option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                )
              )}
            </select>
          </div>

          {/* Type Pills */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() =>
                setSelectedType("all")
              }
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${selectedType === "all"
                  ? "border-red-500 bg-red-500 text-white shadow-lg shadow-red-500/30"
                  : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
            >
              All
            </button>

            {types.map((type) => (
              <button
                key={type.name}
                onClick={() =>
                  setSelectedType(
                    type.name
                  )
                }
                className={`rounded-full border px-4 py-2 text-sm font-medium capitalize transition-all ${selectedType ===
                    type.name
                    ? "border-red-500 bg-red-500 text-white shadow-lg shadow-red-500/30"
                    : typeColors[
                    type.name
                    ] ||
                    "border-white/10 bg-white/5 text-slate-300"
                  }`}
              >
                {type.name}
              </button>
            ))}
          </div>

          {/* Reset */}
          <div className="mt-6">
            <button
              onClick={() => {
                setSearch("");
                setSelectedType(
                  "all"
                );
                setSelectedGeneration(
                  "all"
                );
                setSortBy("id");
              }}
              className="rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-3 text-sm font-medium text-red-400 transition-all hover:bg-red-500/20"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PokedexFilters;