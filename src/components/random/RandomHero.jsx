import { motion } from "framer-motion";
import {
  Sparkles,
  Dice5,
  Zap,
  Stars,
} from "lucide-react";

function RandomHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />

        <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-20 top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
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
              border-yellow-500/20
              bg-yellow-500/10
              px-5
              py-2
              backdrop-blur-xl
            "
          >
            <Sparkles
              size={16}
              className="text-yellow-400"
            />

            <span className="text-sm font-medium text-yellow-300">
              Random Pokémon Discovery
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
              Who's That
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
              Pokémon?
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
            Explore Pokémon from every region,
            uncover rare encounters, discover
            hidden favorites, and expand your
            Pokédex with a single click.
          </motion.p>

          {/* Stats */}
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
              mt-10
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
            "
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Zap
                  size={18}
                  className="text-yellow-400"
                />

                <span className="font-semibold text-white">
                  1000+
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Pokémon
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Stars
                  size={18}
                  className="text-pink-400"
                />

                <span className="font-semibold text-white">
                  Rare
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Encounters
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Dice5
                  size={18}
                  className="text-blue-400"
                />

                <span className="font-semibold text-white">
                  Unlimited
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Random Rolls
              </p>
            </div>
          </motion.div>

          {/* Footer Hint */}
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
              mt-10
              flex
              items-center
              justify-center
              gap-2
              text-slate-500
            "
          >
            <Dice5 size={18} />

            <span className="text-sm md:text-base">
              Click the Poké Ball below and
              begin your next encounter
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default RandomHero;