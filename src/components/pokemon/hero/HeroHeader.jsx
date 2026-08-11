import { motion } from "framer-motion";

import { typeColors } from "../../../utils/typeColors";

function HeroHeader({
  pokemon,
  isShiny,
}) {
  return (
    <section className="relative text-center">
      {/* Pokemon Number */}
      <motion.p
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="text-sm font-semibold uppercase tracking-[0.5em] text-slate-500"
      >
        #{String(pokemon.id).padStart(4, "0")}
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
        className="mt-4 text-5xl font-black uppercase text-white md:text-6xl xl:text-7xl"
      >
        {pokemon.name}
      </motion.h1>

      {/* Shiny Badge */}
      {isShiny && (
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-sm font-bold uppercase tracking-wider text-yellow-300"
        >
          ✨ Shiny Form
        </motion.div>
      )}

      {/* Types */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {pokemon.types.map((type) => (
          <motion.div
            key={type.type.name}
            whileHover={{
              scale: 1.05,
            }}
            className="rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg"
            style={{
              backgroundColor:
                typeColors[
                  type.type.name
                ],
            }}
          >
            {type.type.name}
          </motion.div>
        ))}
      </div>

      {/* Decorative Line */}
      <div className="mx-auto mt-10 h-px w-72 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Scanner Status */}
      <div className="mt-6 flex justify-center gap-8 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        <span>Scanner Online</span>

        <span>Pokédex Active</span>

        <span>Data Synced</span>
      </div>
    </section>
  );
}

export default HeroHeader;