import { motion } from "framer-motion";
import {
  Swords,
  Trophy,
  Shield,
  Zap,
} from "lucide-react";

function CompareHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Red Glow */}
      <div className="absolute left-20 top-20 h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[140px]" />

      {/* Blue Glow */}
      <div className="absolute right-20 top-20 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[140px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[180px]" />

      {/* Orbit Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute h-[1000px] w-[1000px] rounded-full border border-white/[0.03]" />

        <div className="absolute h-[700px] w-[700px] rounded-full border border-white/[0.03]" />

        <div className="absolute h-[450px] w-[450px] rounded-full border border-white/[0.03]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-red-500/20
              bg-red-500/10
              px-5
              py-2
              backdrop-blur-xl
            "
          >
            <Swords
              size={16}
              className="text-red-400"
            />

            <span className="text-sm font-medium text-red-300">
              Pokémon Battle Simulator
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="
              mt-8
              text-5xl
              font-black
              leading-none
              md:text-7xl
              xl:text-8xl
            "
          >
            <span className="block text-white">
              Pokémon
            </span>

            <span
              className="
                block
                bg-gradient-to-r
                from-red-500
                via-yellow-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              Battle Arena
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-relaxed
              text-slate-400
              md:text-xl
            "
          >
            Select two Pokémon and discover
            who dominates the battlefield.
            Compare stats, abilities, types,
            battle power and overall strength
            in a head-to-head showdown.
          </motion.p>

          {/* Arena Cards */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
              mt-12
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
            "
          >
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-2">
                <Zap
                  size={18}
                  className="text-yellow-400"
                />

                <span className="font-semibold text-white">
                  Stat Analysis
                </span>
              </div>

              <p className="mt-2 text-xs text-slate-400">
                Compare every battle stat
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-2">
                <Shield
                  size={18}
                  className="text-blue-400"
                />

                <span className="font-semibold text-white">
                  Type Matchups
                </span>
              </div>

              <p className="mt-2 text-xs text-slate-400">
                Strengths & weaknesses
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-2">
                <Trophy
                  size={18}
                  className="text-yellow-400"
                />

                <span className="font-semibold text-white">
                  Battle Winner
                </span>
              </div>

              <p className="mt-2 text-xs text-slate-400">
                Find the strongest Pokémon
              </p>
            </div>
          </motion.div>

          {/* VS Preview */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
              mt-12
              flex
              items-center
              justify-center
              gap-6
            "
          >
            <div
              className="
                rounded-2xl
                border
                border-red-500/20
                bg-red-500/10
                px-5
                py-3
                text-red-300
                font-bold
              "
            >
              Pokémon A
            </div>

            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-yellow-500/20
                bg-yellow-500/10
                backdrop-blur-xl
              "
            >
              <span className="text-xl font-black text-yellow-400">
                VS
              </span>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-blue-500/20
                bg-blue-500/10
                px-5
                py-3
                text-blue-300
                font-bold
              "
            >
              Pokémon B
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CompareHero;