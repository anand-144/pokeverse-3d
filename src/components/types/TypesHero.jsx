import { motion } from "framer-motion";
import {
  Flame,
  Droplets,
  Zap,
  Leaf,
  Snowflake,
  Ghost,
} from "lucide-react";

import PokemonTypesScene from "./PokemonTypesScene";


function TypesHero() {

  const types = [
    {
      icon: Flame,
      color: "text-red-500",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
    },
    {
      icon: Droplets,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      icon: Zap,
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      border: "border-yellow-400/20",
    },
    {
      icon: Leaf,
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
    },
    {
      icon: Snowflake,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/20",
    },
    {
      icon: Ghost,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
  ];

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-sm text-slate-300"
            >
              Explore Every Pokémon Type
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-6xl md:text-7xl xl:text-8xl font-black leading-none"
            >
              <span className="text-white">
                Master
              </span>

              <span className="block bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
                Pokémon Types
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
            >
              Discover strengths,
              weaknesses, resistances,
              immunities and every Pokémon
              connected to each type.
              Learn battle matchups like a
              true Pokémon Master.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {types.map((type, index) => {
                const Icon = type.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -6,
                      scale: 1.08,
                    }}
                    className={`
                      h-14 w-14 rounded-2xl border
                      flex items-center justify-center
                      backdrop-blur-md
                      ${type.bg}
                      ${type.border}
                    `}
                  >
                    <Icon
                      size={24}
                      className={type.color}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
    relative
    h-[600px]
    flex
    items-center
    justify-center
  "
          >
            <div className="absolute w-[450px] h-[450px] bg-gradient-to-r from-red-500/15 via-yellow-500/15 to-blue-500/15 blur-[140px] rounded-full" />

            <div className="absolute w-[520px] h-[520px] border border-white/5 rounded-full" />

            <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full" />

            <div className="absolute w-[280px] h-[280px] border border-white/5 rounded-full" />

            <div className="relative z-10 w-full h-full">
              <PokemonTypesScene />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TypesHero;