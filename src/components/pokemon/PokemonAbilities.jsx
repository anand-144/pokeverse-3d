import { motion } from "framer-motion";
import { typeColors } from "../../utils/typeColors";

function PokemonAbilities({ pokemon }) {
  const primaryType =
    pokemon.types?.[0]?.type?.name || "normal";

  const accentColor =
    typeColors[primaryType] || "#ef4444";

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Abilities
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pokemon.abilities.map(
          (ability, index) => (
            <motion.div
              key={ability.ability.name}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition-all duration-300 hover:border-white/20"
            >
              <div
                className="mb-4 h-1 w-16 rounded-full"
                style={{
                  backgroundColor:
                    accentColor,
                }}
              />

              <h3 className="text-xl font-bold capitalize text-white">
                {ability.ability.name.replace(
                  /-/g,
                  " "
                )}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {ability.is_hidden
                  ? "Hidden Ability"
                  : "Standard Ability"}
              </p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}

export default PokemonAbilities;