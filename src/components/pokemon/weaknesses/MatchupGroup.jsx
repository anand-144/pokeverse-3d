import { motion } from "framer-motion";
import { typeColors } from "../../../utils/typeColors";

function MatchupGroup({
  title,
  types = [],
  variant = "primary",
}) {
  const variantConfig = {
    danger: {
      color: "text-red-400",
      border:
        "border-red-500/20",
      bg: "bg-red-500/10",
    },

    success: {
      color:
        "text-green-400",
      border:
        "border-green-500/20",
      bg: "bg-green-500/10",
    },

    primary: {
      color:
        "text-cyan-400",
      border:
        "border-cyan-500/20",
      bg: "bg-cyan-500/10",
    },
  };

  const theme =
    variantConfig[variant];

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border ${theme.border} bg-white/[0.03] p-6`}
    >
      {/* Scanner Sweep */}
      <motion.div
        animate={{
          x: [
            "-100%",
            "250%",
          ],
        }}
        transition={{
          duration: 5,
          repeat:
            Infinity,
          ease: "linear",
        }}
        className="absolute top-0 h-full w-20 bg-white/5 blur-xl"
      />

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p
            className={`text-xs font-bold uppercase tracking-[0.35em] ${theme.color}`}
          >
            {title}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Type matchup
            analysis
          </p>
        </div>

        <div
          className={`rounded-full border px-3 py-1 text-xs font-bold ${theme.border} ${theme.color}`}
        >
          {types.length}
        </div>
      </div>

      {/* Empty State */}
      {types.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] py-8 text-center">
          <p className="text-sm text-slate-500">
            No entries detected
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {types.map(
            (
              type,
              index
            ) => (
              <motion.div
                key={type}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay:
                    index *
                    0.05,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="group relative"
              >
                <div
                  className="absolute inset-0 rounded-xl blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-70"
                  style={{
                    backgroundColor:
                      typeColors[
                        type
                      ],
                  }}
                />

                <div
                  className="relative rounded-xl border border-white/10 px-4 py-2 text-sm font-bold capitalize text-white"
                  style={{
                    backgroundColor:
                      typeColors[
                        type
                      ],
                  }}
                >
                  {type}
                </div>
              </motion.div>
            )
          )}
        </div>
      )}

      {/* Footer */}
      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          Scanner Verified
        </p>
      </div>
    </div>
  );
}

export default MatchupGroup;