import { motion } from "framer-motion";
import {
  Ruler,
  Weight,
  Shield,
} from "lucide-react";

import RandomLoading from "./RandomLoading";

const typeColors = {
  normal:
    "from-gray-400 to-gray-500",
  fire:
    "from-orange-500 to-red-500",
  water:
    "from-blue-500 to-cyan-500",
  electric:
    "from-yellow-400 to-amber-500",
  grass:
    "from-green-500 to-emerald-500",
  ice:
    "from-cyan-400 to-sky-500",
  fighting:
    "from-red-600 to-orange-600",
  poison:
    "from-purple-500 to-fuchsia-500",
  ground:
    "from-amber-500 to-yellow-700",
  flying:
    "from-indigo-400 to-sky-400",
  psychic:
    "from-pink-500 to-rose-500",
  bug:
    "from-lime-500 to-green-600",
  rock:
    "from-yellow-700 to-amber-700",
  ghost:
    "from-violet-500 to-purple-700",
  dragon:
    "from-indigo-600 to-purple-700",
  dark:
    "from-gray-700 to-gray-900",
  steel:
    "from-slate-400 to-slate-600",
  fairy:
    "from-pink-400 to-fuchsia-500",
};

function RandomPokemonCard({
  pokemon,
  loading,
}) {
  if (loading) {
    return <RandomLoading />;
  }

  if (!pokemon) {
    return (
      <div
        className="
          flex
          min-h-[650px]
          items-center
          justify-center
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
        "
      >
        <div className="text-center">
          <div className="text-7xl">
            🎲
          </div>

          <h3 className="mt-4 text-2xl font-bold text-white">
            No Pokémon Selected
          </h3>

          <p className="mt-2 text-slate-400">
            Generate a random encounter to
            begin.
          </p>
        </div>
      </div>
    );
  }

  const image =
    pokemon?.sprites?.other?.home
      ?.front_default ||
    pokemon?.sprites?.other?.[
      "official-artwork"
    ]?.front_default ||
    pokemon?.sprites?.front_default;

  const totalStats =
    pokemon.stats.reduce(
      (acc, stat) =>
        acc + stat.base_stat,
      0
    );

  return (
    <motion.div
      key={pokemon.id}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
      "
    >
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10" />

        <div className="relative p-6">
          <div className="flex items-center justify-between">
            <span
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-1
                text-sm
                font-semibold
                text-slate-300
              "
            >
              #{pokemon.id}
            </span>

            <span
              className="
                rounded-full
                bg-emerald-500/10
                px-3
                py-1
                text-xs
                font-semibold
                text-emerald-300
              "
            >
              Encountered
            </span>
          </div>

          <motion.img
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            src={image}
            alt={pokemon.name}
            className="mx-auto mt-4 h-64 object-contain drop-shadow-2xl"
          />

          <h2 className="mt-2 text-center text-4xl font-black capitalize text-white">
            {pokemon.name}
          </h2>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {pokemon.types.map(
              (type) => (
                <span
                  key={
                    type.type.name
                  }
                  className={`
                    rounded-full
                    bg-gradient-to-r
                    ${
                      typeColors[
                        type.type.name
                      ] ||
                      "from-slate-500 to-slate-700"
                    }
                    px-4
                    py-2
                    text-xs
                    font-bold
                    uppercase
                    text-white
                  `}
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

      {/* Details */}
      <div className="p-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <Ruler
              size={18}
              className="mx-auto mb-2 text-blue-400"
            />

            <p className="text-xs text-slate-400">
              Height
            </p>

            <p className="font-bold text-white">
              {pokemon.height}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <Weight
              size={18}
              className="mx-auto mb-2 text-yellow-400"
            />

            <p className="text-xs text-slate-400">
              Weight
            </p>

            <p className="font-bold text-white">
              {pokemon.weight}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <Shield
              size={18}
              className="mx-auto mb-2 text-emerald-400"
            />

            <p className="text-xs text-slate-400">
              Total
            </p>

            <p className="font-bold text-white">
              {totalStats}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8">
          <h3 className="mb-4 text-xl font-bold text-white">
            Battle Stats
          </h3>

          <div className="space-y-4">
            {pokemon.stats.map(
              (stat) => (
                <div
                  key={
                    stat.stat.name
                  }
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm capitalize text-slate-400">
                      {stat.stat.name.replace(
                        "-",
                        " "
                      )}
                    </span>

                    <span className="font-bold text-white">
                      {
                        stat.base_stat
                      }
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: `${Math.min(
                          stat.base_stat,
                          150
                        )}%`,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-red-500
                        via-yellow-400
                        to-green-500
                      "
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default RandomPokemonCard;