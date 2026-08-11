import { motion } from "framer-motion";
import {
  FaBolt,
  FaCrown,
} from "react-icons/fa6";

function AbilityCard({
  title,
  type,
  ability,
  color = "cyan",
}) {
  const colorClasses = {
    cyan: {
      border:
        "border-cyan-500/20",
      bg: "bg-cyan-500/10",
      text: "text-cyan-400",
      glow:
        "shadow-[0_0_30px_rgba(34,211,238,0.15)]",
    },

    yellow: {
      border:
        "border-yellow-500/20",
      bg: "bg-yellow-500/10",
      text: "text-yellow-400",
      glow:
        "shadow-[0_0_30px_rgba(250,204,21,0.15)]",
    },
  };

  const theme =
    colorClasses[color];

  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`group relative overflow-hidden rounded-[30px] border ${theme.border} bg-white/[0.03] p-6 ${theme.glow}`}
    >
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${theme.bg}`}
      />

      {/* Scanner Line */}
      <motion.div
        animate={{
          x: [
            "-100%",
            "250%",
          ],
        }}
        transition={{
          duration: 3,
          repeat:
            Infinity,
          ease: "linear",
        }}
        className="absolute top-0 h-full w-24 bg-white/5 blur-xl"
      />

      {/* Corner Accents */}
      <div
        className={`absolute left-4 top-4 h-6 w-6 border-l border-t ${theme.border}`}
      />

      <div
        className={`absolute right-4 top-4 h-6 w-6 border-r border-t ${theme.border}`}
      />

      <div
        className={`absolute bottom-4 left-4 h-6 w-6 border-b border-l ${theme.border}`}
      />

      <div
        className={`absolute bottom-4 right-4 h-6 w-6 border-b border-r ${theme.border}`}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              {title}
            </p>

            <div className="mt-3 flex items-center gap-3">
              {color ===
              "yellow" ? (
                <FaCrown
                  className={`text-xl ${theme.text}`}
                />
              ) : (
                <FaBolt
                  className={`text-xl ${theme.text}`}
                />
              )}

              <h3 className="text-3xl font-black capitalize text-white">
                {ability?.ability?.name?.replace(
                  "-",
                  " "
                ) || "Unknown"}
              </h3>
            </div>
          </div>

          <div
            className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${theme.border} ${theme.text}`}
          >
            {type}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Description */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Classification
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              {type ===
              "STANDARD"
                ? "Battle Trait"
                : "Genetic Mutation"}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Availability
            </p>

            <p
              className={`mt-2 text-lg font-semibold ${theme.text}`}
            >
              {type ===
              "STANDARD"
                ? "Common"
                : "Rare"}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Scanner Report
          </span>

          <span
            className={`text-sm font-bold ${theme.text}`}
          >
            VERIFIED
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default AbilityCard;