import { motion } from "framer-motion";
import {
  FaCrosshairs,
  FaShieldHalved,
  FaBrain,
  FaArrowsRotate,
} from "react-icons/fa6";

function AbilityScanner({ pokemon }) {
  const abilitiesCount =
    pokemon.abilities.length;

  const offensiveScore = Math.min(
    40 + abilitiesCount * 20,
    100
  );

  const defensiveScore = Math.min(
    30 + abilitiesCount * 15,
    100
  );

  const flexibilityScore = Math.min(
    50 + abilitiesCount * 18,
    100
  );

  const adaptabilityScore = Math.min(
    45 + abilitiesCount * 17,
    100
  );

  const metrics = [
    {
      label:
        "Offensive Potential",
      value:
        offensiveScore,
      icon: <FaCrosshairs />,
      color:
        "from-red-500 to-orange-500",
    },
    {
      label:
        "Defensive Utility",
      value:
        defensiveScore,
      icon: (
        <FaShieldHalved />
      ),
      color:
        "from-blue-500 to-cyan-500",
    },
    {
      label:
        "Tactical Flexibility",
      value:
        flexibilityScore,
      icon: <FaBrain />,
      color:
        "from-purple-500 to-pink-500",
    },
    {
      label:
        "Adaptability",
      value:
        adaptabilityScore,
      icon: (
        <FaArrowsRotate />
      ),
      color:
        "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-400">
              Scanner Report
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              Tactical Assessment
            </h3>
          </div>

          <div className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
              ANALYZED
            </span>
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-6">
          {metrics.map(
            (
              metric,
              index
            ) => (
              <div
                key={
                  metric.label
                }
              >
                {/* Top Row */}
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-cyan-400">
                      {
                        metric.icon
                      }
                    </div>

                    <span className="font-semibold text-white">
                      {
                        metric.label
                      }
                    </span>
                  </div>

                  <span className="font-black text-cyan-400">
                    {
                      metric.value
                    }
                    %
                  </span>
                </div>

                {/* Bar */}
                <div className="relative h-4 overflow-hidden rounded-full border border-white/10 bg-white/5">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${metric.value}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay:
                        index *
                        0.15,
                    }}
                    className={`relative h-full rounded-full bg-gradient-to-r ${metric.color}`}
                  >
                    {/* Scanner Shine */}
                    <motion.div
                      animate={{
                        x: [
                          -40,
                          350,
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
              </div>
            )
          )}
        </div>

        {/* Footer Stats */}
        <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Abilities
            </p>

            <p className="mt-2 text-3xl font-black text-white">
              {
                pokemon.abilities
                  .length
              }
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Hidden
            </p>

            <p className="mt-2 text-3xl font-black text-yellow-400">
              {pokemon.abilities.some(
                (
                  ability
                ) =>
                  ability.is_hidden
              )
                ? "YES"
                : "NO"}
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Status
            </p>

            <p className="mt-2 text-3xl font-black text-green-400">
              OK
            </p>
          </div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute left-4 top-4 h-6 w-6 border-l border-t border-cyan-400/40" />

      <div className="absolute right-4 top-4 h-6 w-6 border-r border-t border-cyan-400/40" />

      <div className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-cyan-400/40" />

      <div className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-cyan-400/40" />
    </div>
  );
}

export default AbilityScanner;