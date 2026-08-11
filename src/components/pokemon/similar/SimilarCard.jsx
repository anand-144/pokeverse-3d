import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import SimilarTypeBadge from "./SimilarTypeBadge";
import SimilarStats from "./SimilarStats";

function SimilarCard({
  pokemon,
}) {
  const image =
    pokemon.sprites?.other?.home
      ?.front_default ||
    pokemon.sprites?.other?.[
      "official-artwork"
    ]?.front_default ||
    pokemon.sprites?.front_default;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Link
        to={`/pokemon/${pokemon.id}`}
        className="group block"
      >
        <article className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
          {/* Scanner Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[90px]" />
          </div>

          {/* HUD Corners */}
          <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-cyan-400/40" />

          <div className="absolute right-3 top-3 h-5 w-5 border-r border-t border-cyan-400/40" />

          <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-cyan-400/40" />

          <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-cyan-400/40" />

          <div className="relative z-10">
            {/* ID */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-[0.3em] text-cyan-400">
                #{String(
                  pokemon.id
                ).padStart(3, "0")}
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Species
              </span>
            </div>

            {/* Image */}
            <div className="relative mt-6 flex justify-center">
              <div className="absolute h-28 w-28 rounded-full border border-cyan-400/10" />

              <div className="absolute h-40 w-40 rounded-full border border-cyan-400/5" />

              <img
                src={image}
                alt={pokemon.name}
                className="relative z-10 h-40 w-40 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Name */}
            <div className="mt-5 text-center">
              <h3 className="text-2xl font-black capitalize text-white">
                {pokemon.name}
              </h3>
            </div>

            {/* Types */}
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {pokemon.types.map(
                (type) => (
                  <SimilarTypeBadge
                    key={
                      type.type.name
                    }
                    type={
                      type.type.name
                    }
                  />
                )
              )}
            </div>

            {/* Stats */}
            <div className="mt-6">
              <SimilarStats
                stats={
                  pokemon.stats
                }
              />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export default SimilarCard;