import { motion } from "framer-motion";
import {
  RefreshCw,
  Heart,
  Swords,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

function RandomActions({
  pokemon,
  onGenerate,
  onFavorite,
}) {
  if (!pokemon) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <h3 className="mb-4 text-lg font-bold text-white">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={onGenerate}
          className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-4 py-3 font-semibold text-white transition hover:scale-105"
        >
          <RefreshCw size={18} />
          Generate
        </button>

        <button
          onClick={() =>
            onFavorite?.(pokemon)
          }
          className="flex items-center justify-center gap-2 rounded-2xl border border-pink-500/30 bg-pink-500/10 px-4 py-3 font-semibold text-pink-300 transition hover:scale-105"
        >
          <Heart size={18} />
          Favorite
        </button>

        <Link
          to={`/compare?pokemon=${pokemon.name}`}
          className="flex items-center justify-center gap-2 rounded-2xl border border-blue-500/30 bg-blue-500/10 px-4 py-3 font-semibold text-blue-300 transition hover:scale-105"
        >
          <Swords size={18} />
          Compare
        </Link>

        <Link
          to={`/pokemon/${pokemon.id}`}
          className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 font-semibold text-emerald-300 transition hover:scale-105"
        >
          <ExternalLink size={18} />
          Details
        </Link>
      </div>
    </motion.div>
  );
}

export default RandomActions;