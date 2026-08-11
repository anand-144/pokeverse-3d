import { motion } from "framer-motion";

import MoveTypeBadge from "./MoveTypeBadge";
import MoveCategoryBadge from "./MoveCategoryBadge";
import MoveStats from "./MoveStats";

function MoveCard({ move }) {
  return (
    <motion.article
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
    >
      {/* Scanner Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[90px]" />
      </div>

      {/* HUD Corners */}
      <div className="absolute left-3 top-3 h-5 w-5 border-l border-t border-cyan-400/40" />

      <div className="absolute right-3 top-3 h-5 w-5 border-r border-t border-cyan-400/40" />

      <div className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-cyan-400/40" />

      <div className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-cyan-400/40" />

      <div className="relative z-10">
        {/* Name */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400">
              Move
            </p>

            <h3 className="text-2xl font-black capitalize text-white">
              {move.name.replace(/-/g, " ")}
            </h3>
          </div>
        </div>

        {/* Type + Category */}
        <div className="mt-5 flex flex-wrap gap-2">
          <MoveTypeBadge
            type={move.type}
          />

          <MoveCategoryBadge
            category={move.category}
          />
        </div>

        {/* Description */}
        <div className="mt-5 rounded-2xl border border-white/5 bg-black/20 p-4">
          <p className="line-clamp-3 text-sm leading-relaxed text-slate-400">
            {move.effect ||
              "No move description available."}
          </p>
        </div>

        {/* Stats */}
        <div className="mt-5">
          <MoveStats
            power={move.power}
            accuracy={move.accuracy}
            pp={move.pp}
          />
        </div>
      </div>
    </motion.article>
  );
}

export default MoveCard;