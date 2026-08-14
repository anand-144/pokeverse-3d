import { motion } from "framer-motion";
import {
  Sparkles,
  Dice6,
  Zap,
} from "lucide-react";

import PokeballScene from "./PokeballScene";

function RandomAnimation({
  loading,
  onGenerate,
}) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-white/10
        bg-gradient-to-br
        from-slate-900/90
        via-slate-950/95
        to-black
        backdrop-blur-xl
        min-h-[650px]
      "
    >
      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/15 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Header */}
      <div className="absolute left-0 top-0 z-20 w-full p-8">
        <div className="flex items-center gap-2">
          <Sparkles
            size={18}
            className="text-yellow-400"
          />

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
            Random Encounter
          </span>
        </div>

        <h2 className="mt-4 text-4xl font-black text-white">
          Who's That
          <span className="bg-gradient-to-r from-red-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent">
            {" "}
            Pokémon?
          </span>
        </h2>

        <p className="mt-3 max-w-md text-slate-400">
          Summon a random Pokémon from any
          generation and discover powerful,
          rare, or unexpected encounters.
        </p>
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <PokeballScene
          loading={loading}
          onGenerate={onGenerate}
        />
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 z-20 w-full p-8">
        <motion.button
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={onGenerate}
          disabled={loading}
          className="
            w-full
            rounded-2xl
            bg-gradient-to-r
            from-red-500
            via-red-600
            to-red-700
            px-6
            py-4
            font-bold
            text-white
            shadow-lg
            shadow-red-500/30
            transition
          "
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Generating...
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Dice6 size={20} />
              Generate Random Pokémon
            </div>
          )}
        </motion.button>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-md">
            <Zap
              size={18}
              className="mx-auto mb-1 text-yellow-400"
            />
            <p className="text-xs text-slate-400">
              Fast
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-md">
            <Sparkles
              size={18}
              className="mx-auto mb-1 text-pink-400"
            />
            <p className="text-xs text-slate-400">
              Rare
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-md">
            <Dice6
              size={18}
              className="mx-auto mb-1 text-blue-400"
            />
            <p className="text-xs text-slate-400">
              Random
            </p>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-20 w-20 rounded-full border-4 border-red-500 border-t-transparent"
          />
        </div>
      )}
    </div>
  );
}

export default RandomAnimation;