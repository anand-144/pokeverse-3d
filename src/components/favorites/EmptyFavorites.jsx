import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";

function EmptyFavorites() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center">
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
          duration: 0.6,
        }}
        className="relative w-full max-w-3xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-xl"
      >
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            animate={{
              scale: [
                1,
                1.08,
                1,
              ],
            }}
            transition={{
              duration: 2,
              repeat:
                Infinity,
            }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10"
          >
            <Heart
              size={42}
              className="text-red-400"
            />
          </motion.div>

          <h2 className="mt-8 text-4xl font-black text-white md:text-5xl">
            No Favorites Yet
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-400">
            Your collection is
            empty. Explore the
            Pokédex and start
            saving your favorite
            Pokémon to build your
            ultimate trainer team.
          </p>

          <Link
            to="/pokedex"
            className="mt-10 inline-flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-6 py-3 font-semibold text-red-300 transition-all duration-300 hover:bg-red-500 hover:text-white"
          >
            Explore Pokédex

            <ArrowRight
              size={18}
            />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default EmptyFavorites;