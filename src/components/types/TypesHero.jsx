import { motion } from "framer-motion";
import {
  Flame,
  Droplets,
  Zap,
  Leaf,
  Snowflake,
  Ghost,
  Shield,
  Swords,
  Trophy,
  Sparkles,
} from "lucide-react";

import PokemonTypesScene from "./PokemonTypesScene";

function TypesHero() {
  const types = [
    {
      icon: Flame,
      color: "text-red-500",
      bg: "from-red-500/20 to-red-500/5",
      border: "border-red-500/20",
      label: "Fire",
    },
    {
      icon: Droplets,
      color: "text-blue-500",
      bg: "from-blue-500/20 to-blue-500/5",
      border: "border-blue-500/20",
      label: "Water",
    },
    {
      icon: Zap,
      color: "text-yellow-400",
      bg: "from-yellow-400/20 to-yellow-400/5",
      border: "border-yellow-400/20",
      label: "Electric",
    },
    {
      icon: Leaf,
      color: "text-green-500",
      bg: "from-green-500/20 to-green-500/5",
      border: "border-green-500/20",
      label: "Grass",
    },
    {
      icon: Snowflake,
      color: "text-cyan-400",
      bg: "from-cyan-400/20 to-cyan-400/5",
      border: "border-cyan-400/20",
      label: "Ice",
    },
    {
      icon: Ghost,
      color: "text-purple-500",
      bg: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/20",
      label: "Ghost",
    },
  ];

  const stats = [
    {
      icon: Shield,
      value: "18",
      label: "Battle Types",
    },
    {
      icon: Swords,
      value: "324",
      label: "Matchups",
    },
    {
      icon: Trophy,
      value: "1000+",
      label: "Species",
    },
  ];

  return (
    <section className="relative pt-36 pb-28 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid xl:grid-cols-[1fr_650px] gap-20 items-center">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

              <span className="text-sm font-medium text-slate-300">
                Complete Type Encyclopedia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8"
            >
              <span className="block text-6xl md:text-7xl xl:text-8xl font-black text-white leading-none">
                Master Every
              </span>

              <span className="block mt-2 text-6xl md:text-7xl xl:text-8xl font-black leading-none bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
                Pokémon Type
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg xl:text-xl leading-relaxed text-slate-400"
            >
              Explore strengths, weaknesses,
              resistances and battle advantages
              across every Pokémon type. Learn
              how type interactions shape battles
              and build the perfect competitive
              strategy.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 grid grid-cols-3 gap-4 max-w-xl"
            >
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5"
                  >
                    <Icon
                      size={20}
                      className="text-yellow-400"
                    />

                    <div className="mt-3 text-3xl font-black text-white">
                      {item.value}
                    </div>

                    <div className="text-sm text-slate-400">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Type Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {types.map((type) => {
                const Icon = type.icon;

                return (
                  <motion.div
                    key={type.label}
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                    }}
                    className={`
                      flex items-center gap-3
                      px-5 py-3 rounded-2xl
                      border backdrop-blur-xl
                      bg-gradient-to-br
                      ${type.bg}
                      ${type.border}
                    `}
                  >
                    <Icon
                      size={18}
                      className={type.color}
                    />

                    <span className="font-medium text-white">
                      {type.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative h-[650px]"
          >
            {/* Main Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[550px] h-[550px] rounded-full bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-blue-500/20 blur-[180px]" />
            </div>

            {/* Pokeball Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
              <div className="w-[420px] h-[420px] rounded-full border-[24px] border-white" />
            </div>

            {/* Glass Container */}
            <div className="absolute inset-0 rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />
            </div>

            {/* Animated Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[600px] h-[600px] rounded-full border border-white/5" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[450px] h-[450px] rounded-full border border-white/5" />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[300px] h-[300px] rounded-full border border-white/5" />
            </motion.div>

            {/* Featured Pokemon Card */}
            <div className="absolute top-6 left-6 z-20">
              <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={14}
                    className="text-orange-400"
                  />

                  <span className="text-xs uppercase tracking-widest text-slate-400">
                    Featured Pokémon
                  </span>
                </div>

                <h3 className="mt-2 text-lg font-bold text-white">
                  Hisuian Typhlosion
                </h3>

                <p className="text-sm text-slate-400">
                  Fire / Ghost
                </p>
              </div>
            </div>

            {/* Click Hint */}
            <div className="absolute bottom-6 right-6 z-20">
              <div className="rounded-full border border-white/10 bg-black/30 backdrop-blur-xl px-4 py-2">
                <span className="text-xs text-slate-400">
                  Click Pokémon to animate
                </span>
              </div>
            </div>

            {/* 3D Scene */}
            <div className="relative z-10 h-full">
              <PokemonTypesScene />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TypesHero;