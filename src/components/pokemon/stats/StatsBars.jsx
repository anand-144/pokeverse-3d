import { motion } from "framer-motion";

function StatsBars({ pokemon }) {
  const getPercentage = (
    value
  ) => {
    return Math.min(
      (value / 255) * 100,
      100
    );
  };

  const getStatColor = (
    value
  ) => {
    if (value >= 120)
      return "#22c55e";

    if (value >= 90)
      return "#06b6d4";

    if (value >= 70)
      return "#eab308";

    return "#ef4444";
  };

  const formatName = (
    name
  ) => {
    return name
      .replace("special-", "")
      .replace("-", " ")
      .toUpperCase();
  };

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.4em] text-cyan-400">
          Detailed Breakdown
        </p>

        <h3 className="mt-2 text-2xl font-black text-white">
          Stat Matrix
        </h3>
      </div>

      {/* Stats */}
      <div className="space-y-7">
        {pokemon.stats.map(
          (stat, index) => {
            const value =
              stat.base_stat;

            const percentage =
              getPercentage(
                value
              );

            const color =
              getStatColor(
                value
              );

            return (
              <div
                key={
                  stat.stat.name
                }
              >
                {/* Top Row */}
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold tracking-wider text-slate-300">
                      {formatName(
                        stat.stat
                          .name
                      )}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Base
                    </span>

                    <span
                      className="text-lg font-black"
                      style={{
                        color,
                      }}
                    >
                      {value}
                    </span>
                  </div>
                </div>

                {/* Bar */}
                <div className="relative h-4 overflow-hidden rounded-full border border-white/10 bg-white/5">
                  {/* Grid */}
                  <div className="absolute inset-0 flex">
                    {Array.from({
                      length: 20,
                    }).map(
                      (_, i) => (
                        <div
                          key={
                            i
                          }
                          className="h-full flex-1 border-r border-white/[0.03]"
                        />
                      )
                    )}
                  </div>

                  {/* Fill */}
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${percentage}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay:
                        index *
                        0.08,
                    }}
                    className="relative h-full rounded-full"
                    style={{
                      background:
                        color,
                      boxShadow: `0 0 20px ${color}`,
                    }}
                  >
                    {/* Scanner Shine */}
                    <motion.div
                      animate={{
                        x: [
                          -50,
                          300,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat:
                          Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-y-0 w-12 bg-white/20 blur-md"
                    />
                  </motion.div>
                </div>

                {/* Footer */}
                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>
                    0
                  </span>

                  <span>
                    {Math.round(
                      percentage
                    )}
                    %
                  </span>

                  <span>
                    255
                  </span>
                </div>
              </div>
            );
          }
        )}
      </div>

      {/* Scanner Footer */}
      <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Analysis
          </p>

          <p className="mt-1 text-sm font-semibold text-cyan-400">
            Completed
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Accuracy
          </p>

          <p className="mt-1 text-sm font-semibold text-green-400">
            100%
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Status
          </p>

          <p className="mt-1 text-sm font-semibold text-white">
            Verified
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatsBars;