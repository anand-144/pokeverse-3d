import { motion } from "framer-motion";
import { typeColors } from "../../utils/typeColors";

function PokemonStats({ pokemon }) {
  const primaryType =
    pokemon.types?.[0]?.type?.name || "normal";

  const accentColor =
    typeColors[primaryType] || "#ef4444";

  const getStatWidth = (value) => {
    return Math.min((value / 255) * 100, 100);
  };

  const totalStats = pokemon.stats.reduce(
    (total, stat) =>
      total + stat.base_stat,
    0
  );

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">
          Base Stats
        </h2>

        <div className="rounded-2xl bg-black/20 px-5 py-3">
          <p className="text-sm text-slate-400">
            Total
          </p>

          <p
            className="text-2xl font-black"
            style={{
              color: accentColor,
            }}
          >
            {totalStats}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {pokemon.stats.map(
          (stat, index) => (
            <div key={stat.stat.name}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                  {stat.stat.name.replace(
                    "-",
                    " "
                  )}
                </span>

                <span
                  className="font-bold"
                  style={{
                    color: accentColor,
                  }}
                >
                  {stat.base_stat}
                </span>
              </div>

              <div className="h-4 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: `${getStatWidth(
                      stat.base_stat
                    )}%`,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  className="h-full rounded-full"
                  style={{
                    backgroundColor:
                      accentColor,
                    boxShadow: `0 0 20px ${accentColor}`,
                  }}
                />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default PokemonStats;