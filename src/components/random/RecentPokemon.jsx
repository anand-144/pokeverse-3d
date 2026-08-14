import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
} from "lucide-react";

function RecentPokemon({
  recentPokemon = [],
}) {
  if (recentPokemon.length === 0) {
    return (
      <div
        className="
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          p-8
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-yellow-500/10 p-2">
            <Sparkles
              size={18}
              className="text-yellow-400"
            />
          </div>

          <h3 className="text-2xl font-bold text-white">
            Discovery Log
          </h3>
        </div>

        <div className="mt-8 text-center">
          <div className="text-6xl">
            🎲
          </div>

          <h4 className="mt-4 text-xl font-bold text-white">
            No Discoveries Yet
          </h4>

          <p className="mt-2 text-slate-400">
            Generate your first random
            Pokémon and start building your
            encounter history.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
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
      <div className="border-b border-white/10 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles
                size={18}
                className="text-yellow-400"
              />

              <span className="text-sm font-semibold uppercase tracking-wider text-yellow-300">
                Recent Encounters
              </span>
            </div>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Discovery Log
            </h3>

            <p className="mt-1 text-slate-400">
              Your latest Pokémon discoveries.
            </p>
          </div>

          <div
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              text-slate-300
            "
          >
            {recentPokemon.length} Recorded
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {recentPokemon.map(
            (pokemon, index) => {
              const image =
                pokemon?.sprites?.other
                  ?.home
                  ?.front_default ||
                pokemon?.sprites?.other?.[
                  "official-artwork"
                ]?.front_default ||
                pokemon?.sprites
                  ?.front_default;

              return (
                <motion.div
                  key={pokemon.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.05,
                  }}
                >
                  <Link
                    to={`/pokemon/${pokemon.id}`}
                  >
                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.03,
                      }}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/10
                        bg-gradient-to-br
                        from-white/[0.06]
                        to-white/[0.02]
                        p-4
                        backdrop-blur-xl
                      "
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-transparent to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-red-500/10 group-hover:to-blue-500/10" />

                      {/* Pokemon Number */}
                      <div className="absolute right-3 top-3 text-xs font-bold text-slate-500">
                        #
                        {String(
                          pokemon.id
                        ).padStart(
                          3,
                          "0"
                        )}
                      </div>

                      {/* Image */}
                      <div className="relative">
                        <img
                          src={image}
                          alt={
                            pokemon.name
                          }
                          className="
                            mx-auto
                            h-28
                            w-full
                            object-contain
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        />
                      </div>

                      {/* Content */}
                      <div className="mt-3 text-center">
                        <h4 className="text-base font-bold capitalize text-white">
                          {pokemon.name}
                        </h4>

                        <div className="mt-2 flex items-center justify-center gap-1 text-xs text-slate-400">
                          View Details

                          <ArrowRight
                            size={12}
                          />
                        </div>
                      </div>

                      {/* Bottom Glow Line */}
                      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.div>
                  </Link>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentPokemon;