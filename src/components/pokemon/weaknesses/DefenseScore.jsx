import { motion } from "framer-motion";
import {
  FaShieldHalved,
  FaTriangleExclamation,
  FaShield,
  FaGhost,
} from "react-icons/fa6";

function DefenseScore({
  weaknesses,
  resistances,
  immunities,
}) {
  const score = Math.max(
    0,
    Math.min(
      100,
      50 +
        resistances * 6 +
        immunities * 12 -
        weaknesses * 8
    )
  );

  const getRating = () => {
    if (score >= 90)
      return {
        label: "Elite",
        color:
          "text-cyan-400",
      };

    if (score >= 75)
      return {
        label: "Excellent",
        color:
          "text-green-400",
      };

    if (score >= 60)
      return {
        label: "Good",
        color:
          "text-yellow-400",
      };

    if (score >= 40)
      return {
        label: "Average",
        color:
          "text-orange-400",
      };

    return {
      label: "Fragile",
      color:
        "text-red-400",
    };
  };

  const rating =
    getRating();

  return (
    <div className="relative mt-6 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6">
      {/* Scanner Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:22px_22px]" />

      {/* Sweep */}
      <motion.div
        animate={{
          x: [
            "-100%",
            "300%",
          ],
        }}
        transition={{
          duration: 6,
          repeat:
            Infinity,
          ease: "linear",
        }}
        className="absolute top-0 h-full w-24 bg-cyan-400/5 blur-xl"
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-400">
              Defense Score
            </p>

            <h3 className="mt-2 text-3xl font-black text-white">
              Defensive Rating
            </h3>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3">
            <FaShieldHalved className="text-cyan-400" />

            <span
              className={`font-bold ${rating.color}`}
            >
              {rating.label}
            </span>
          </div>
        </div>

        {/* Score */}
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-400">
              Overall Defense
            </span>

            <span className="text-3xl font-black text-cyan-400">
              {score}%
            </span>
          </div>

          <div className="h-5 overflow-hidden rounded-full border border-white/10 bg-white/5">
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: `${score}%`,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
              }}
              className="relative h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"
            >
              <motion.div
                animate={{
                  x: [
                    -40,
                    400,
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

        {/* Metrics */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5">
            <div className="flex items-center gap-3">
              <FaTriangleExclamation className="text-red-400" />

              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Weaknesses
              </p>
            </div>

            <h4 className="mt-3 text-4xl font-black text-red-400">
              {weaknesses}
            </h4>
          </div>

          <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5">
            <div className="flex items-center gap-3">
              <FaShield className="text-green-400" />

              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Resistances
              </p>
            </div>

            <h4 className="mt-3 text-4xl font-black text-green-400">
              {resistances}
            </h4>
          </div>

          <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-5">
            <div className="flex items-center gap-3">
              <FaGhost className="text-purple-400" />

              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Immunities
              </p>
            </div>

            <h4 className="mt-3 text-4xl font-black text-purple-400">
              {immunities}
            </h4>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Matchup Analysis
            </span>

            <span className="text-sm font-bold text-cyan-400">
              COMPLETE
            </span>
          </div>
        </div>
      </div>

      {/* HUD Corners */}
      <div className="absolute left-4 top-4 h-6 w-6 border-l border-t border-cyan-400/40" />
      <div className="absolute right-4 top-4 h-6 w-6 border-r border-t border-cyan-400/40" />
      <div className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-cyan-400/40" />
      <div className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-cyan-400/40" />
    </div>
  );
}

export default DefenseScore;