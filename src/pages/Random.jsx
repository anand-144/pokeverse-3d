import { motion } from "framer-motion";

import RandomHero from "../components/random/RandomHero";
import RandomAnimation from "../components/random/RandomAnimation";
import RandomPokemonCard from "../components/random/RandomPokemonCard";
import RecentPokemon from "../components/random/RecentPokemon";

import useRandomPokemon from "../hooks/useRandomPokemon";

function Random() {
  const {
    pokemon,
    loading,
    recentPokemon,
    generatePokemon,
  } = useRandomPokemon();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed_0%,transparent_30%),radial-gradient(circle_at_bottom_left,#dc2626_0%,transparent_30%)]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:45px_45px]" />

        {/* Glow Orbs */}
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-red-500/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      {/* Floating Pokeballs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-32 left-12 hidden lg:block"
      >
        <div className="h-20 w-20 rounded-full border border-white/10 bg-white/5 backdrop-blur-md" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-16 top-60 hidden xl:block"
      >
        <div className="h-28 w-28 rounded-full border border-white/10 bg-white/5 backdrop-blur-md" />
      </motion.div>

      <div className="relative z-10">
        {/* Hero */}
        <RandomHero />

        {/* Content */}
        <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
          {/* Section Header */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="mb-8 text-center"
          >
            <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300">
              🎲 Random Encounter
            </span>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Discover Your Next
              <span className="bg-gradient-to-r from-red-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Pokémon
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Generate a completely random Pokémon from every
              region and uncover hidden favorites, powerful
              battlers, and legendary creatures.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
            {/* Generator Side */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
              }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/20 blur-xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <RandomAnimation
                  loading={loading}
                  onGenerate={generatePokemon}
                />
              </div>
            </motion.div>

            {/* Pokemon Card */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
              }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/10 via-transparent to-violet-500/20 blur-xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <RandomPokemonCard
                  pokemon={pokemon}
                  loading={loading}
                />
              </div>
            </motion.div>
          </div>

          {/* Recent Pokemon */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="mt-12"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Recently Discovered
                </h3>

                <p className="mt-1 text-gray-400">
                  Your latest random encounters.
                </p>
              </div>

              <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
                ⚡ {recentPokemon.length} Encountered
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <RecentPokemon
                recentPokemon={recentPokemon}
              />
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

export default Random;