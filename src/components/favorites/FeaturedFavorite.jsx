import { motion } from "framer-motion";

function FeaturedFavorite({
  pokemon,
}) {
  if (!pokemon) return null;

  return (
    <section className="mb-20">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl lg:p-12"
      >
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="flex justify-center"
          >
            <img
              src={
                pokemon.sprites
                  .other.home
                  .front_default ||
                pokemon.sprites
                  .front_default
              }
              alt={
                pokemon.name
              }
              className="h-72 w-72 object-contain lg:h-96 lg:w-96"
            />
          </motion.div>

          {/* Content */}
          <div>
            <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300">
              Featured Favorite
            </span>

            <h2 className="mt-6 text-5xl font-black capitalize text-white">
              {pokemon.name}
            </h2>

            <p className="mt-2 text-zinc-500">
              #
              {String(
                pokemon.id
              ).padStart(
                4,
                "0"
              )}
            </p>

            {/* Types */}
            <div className="mt-6 flex flex-wrap gap-3">
              {pokemon.types.map(
                (type) => (
                  <span
                    key={
                      type.type
                        .name
                    }
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium capitalize text-white"
                  >
                    {
                      type.type
                        .name
                    }
                  </span>
                )
              )}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm text-zinc-500">
                  Height
                </p>

                <h3 className="mt-1 text-2xl font-bold text-white">
                  {
                    pokemon.height
                  }
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm text-zinc-500">
                  Weight
                </p>

                <h3 className="mt-1 text-2xl font-bold text-white">
                  {
                    pokemon.weight
                  }
                </h3>
              </div>
            </div>

            {/* Abilities */}
            <div className="mt-8">
              <p className="mb-3 text-sm uppercase tracking-wider text-zinc-500">
                Abilities
              </p>

              <div className="flex flex-wrap gap-3">
                {pokemon.abilities.map(
                  (
                    ability
                  ) => (
                    <span
                      key={
                        ability
                          .ability
                          .name
                      }
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm capitalize text-zinc-300"
                    >
                      {
                        ability
                          .ability
                          .name
                      }
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default FeaturedFavorite;