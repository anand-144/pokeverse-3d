import { motion } from "framer-motion";

function FavoritesHero({
  totalFavorites,
}) {
  return (
    <section className="pt-40 pb-16">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-red-500" />

          <span className="text-sm font-medium text-red-300">
            Trainer Collection
          </span>
        </div>

        <h1 className="bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl lg:text-8xl">
          Favorite Pokémon
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Your personal collection
          of battle companions,
          legends, and beloved
          Pokémon from across all
          regions.
        </p>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          className="mx-auto mt-10 w-fit rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-5 backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Total Favorites
          </p>

          <h2 className="mt-2 text-5xl font-black text-white">
            {totalFavorites}
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FavoritesHero;