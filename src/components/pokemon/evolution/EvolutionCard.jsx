import { motion } from "framer-motion";
import { typeColors } from "../../../utils/typeColors";

function EvolutionCard({
  pokemon,
  isCurrent = false,
}) {
  const image =
    pokemon?.sprites?.other?.home
      ?.front_default ||
    pokemon?.sprites?.other?.[
      "official-artwork"
    ]?.front_default ||
    pokemon?.sprites?.front_default;

  const primaryType =
    pokemon?.types?.[0]?.type?.name ||
    "normal";

  const accentColor =
    typeColors[primaryType] ||
    "#22d3ee";

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`group relative w-full min-w-[280px] overflow-hidden rounded-[32px] border backdrop-blur-xl ${
        isCurrent
          ? "border-cyan-400/30 bg-cyan-500/[0.04]"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      {/* Scanner Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{
          backgroundColor:
            accentColor,
          opacity: 0.18,
        }}
      />

      {/* Scanner Ring */}
      <div className="absolute left-1/2 top-[145px] h-44 w-44 -translate-x-1/2 rounded-full border border-white/10" />

      <div className="absolute left-1/2 top-[145px] h-56 w-56 -translate-x-1/2 rounded-full border border-white/[0.04]" />

      {/* Current Badge */}
      {isCurrent && (
        <div className="absolute right-5 top-5 z-20 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
            Current
          </span>
        </div>
      )}

      {/* HUD Corners */}
      <div className="absolute left-4 top-4 h-6 w-6 border-l border-t border-cyan-400/40" />

      <div className="absolute right-4 top-4 h-6 w-6 border-r border-t border-cyan-400/40" />

      <div className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-cyan-400/40" />

      <div className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-cyan-400/40" />

      <div className="relative z-10 p-6">
        {/* Dex Number */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold tracking-widest text-slate-500">
            #
            {String(
              pokemon.id
            ).padStart(4, "0")}
          </span>

          <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Evolution
          </span>
        </div>

        {/* Pokemon */}
        <div className="relative mt-8 flex justify-center">
          <motion.img
            src={image}
            alt={pokemon.name}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="relative z-10 h-44 w-44 object-contain"
          />
        </div>

        {/* Name */}
        <h3 className="mt-6 text-center text-3xl font-black capitalize text-white">
          {pokemon.name}
        </h3>

        {/* Types */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {pokemon.types?.map(
            (type) => (
              <span
                key={type.type.name}
                className="rounded-full px-3 py-1 text-xs font-bold capitalize text-white"
                style={{
                  backgroundColor:
                    typeColors[
                      type.type.name
                    ],
                }}
              >
                {type.type.name}
              </span>
            )
          )}
        </div>

        {/* Evolution Trigger */}
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="mb-2 text-center text-[11px] uppercase tracking-[0.25em] text-slate-500">
            Evolution Trigger
          </p>

          <p className="text-center font-semibold text-cyan-300">
            {
              pokemon
                ?.evolutionDetails
                ?.trigger
            }
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default EvolutionCard;