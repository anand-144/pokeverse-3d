import { motion } from "framer-motion";
import { typeColors } from "../../utils/typeColors";

function PokemonHero({ pokemon }) {
  const primaryType =
    pokemon.types?.[0]?.type?.name || "normal";

  const accentColor =
    typeColors[primaryType] || "#ef4444";

  const image =
    pokemon.sprites.other.home.front_default ||
    pokemon.sprites.other["official-artwork"]
      .front_default;

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          backgroundColor: accentColor,
          opacity: 0.2,
        }}
      />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <div>
          <p className="mb-3 text-sm tracking-[0.3em] text-slate-400 uppercase">
            Pokémon
          </p>

          <h1 className="text-6xl font-black capitalize text-white">
            {pokemon.name}
          </h1>

          <p className="mt-2 text-xl text-slate-400">
            #{String(pokemon.id).padStart(4, "0")}
          </p>

          {/* Types */}
          <div className="mt-6 flex flex-wrap gap-3">
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className="rounded-full px-4 py-2 text-sm font-semibold text-white"
                style={{
                  backgroundColor:
                    typeColors[type.type.name],
                }}
              >
                {type.type.name}
              </span>
            ))}
          </div>

          {/* Quick Info */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-sm text-slate-400">
                Height
              </p>

              <p className="text-2xl font-bold text-white">
                {(pokemon.height / 10).toFixed(1)} m
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-sm text-slate-400">
                Weight
              </p>

              <p className="text-2xl font-bold text-white">
                {(pokemon.weight / 10).toFixed(1)} kg
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <motion.img
            src={image}
            alt={pokemon.name}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-[350px] w-[350px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}

export default PokemonHero;