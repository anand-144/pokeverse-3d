import { motion } from "framer-motion";
import {
  Sparkles,
  Dice5,
} from "lucide-react";

function RandomHero() {
  return (
    <section className="relative pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center">
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
              px-4
              py-2
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              text-sm
              text-slate-300
            "
          >
            <Sparkles size={16} />

            Random Pokémon Discovery
          </motion.div>

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
              mt-6
              text-5xl
              md:text-6xl
              xl:text-7xl
              font-black
              leading-none
            "
          >
            <span className="text-white">
              Generate
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
              Random Pokémon
            </span>
          </motion.h1>

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
              mt-6
              max-w-2xl
              mx-auto
              text-lg
              leading-relaxed
              text-slate-400
            "
          >
            Discover Pokémon from every
            generation. Click the Poké Ball,
            trigger a random encounter and
            explore new favorites from the
            Pokédex.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-2
              text-slate-500
            "
          >
            <Dice5 size={18} />

            <span className="text-sm">
              Click the Poké Ball below to
              generate a random Pokémon
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default RandomHero;