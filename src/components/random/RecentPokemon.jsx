import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function RecentPokemon({
  recentPokemon = [],
}) {
  if (
    !recentPokemon ||
    recentPokemon.length === 0
  ) {
    return (
      <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">
        <h3 className="text-xl font-bold text-white">
          Recent Discoveries
        </h3>

        <p className="mt-3 text-slate-400">
          Generated Pokémon will appear
          here.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">
          Recent Discoveries
        </h3>

        <span className="text-sm text-slate-500">
          {recentPokemon.length} Pokémon
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {recentPokemon.map(
          (pokemon) => {
            const image =
              pokemon.sprites?.other
                ?.home
                ?.front_default ||
              pokemon.sprites?.other?.[
                "official-artwork"
              ]?.front_default ||
              pokemon.sprites
                ?.front_default;

            return (
              <Link
                key={pokemon.id}
                to={`/pokemon/${pokemon.id}`}
              >
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="
                    group
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-3
                    transition-all
                  "
                >
                  <img
                    src={image}
                    alt={pokemon.name}
                    className="
                      h-24
                      w-full
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  <h4 className="mt-2 text-center text-sm font-bold capitalize text-white">
                    {pokemon.name}
                  </h4>

                  <p className="text-center text-xs text-slate-500">
                    #
                    {String(
                      pokemon.id
                    ).padStart(
                      3,
                      "0"
                    )}
                  </p>
                </motion.div>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}

export default RecentPokemon;