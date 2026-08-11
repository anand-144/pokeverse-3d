import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const typeColors = {
  normal:
    "from-slate-500/20 to-slate-600/10 text-slate-300",
  fire:
    "from-orange-500/20 to-red-500/10 text-orange-400",
  water:
    "from-blue-500/20 to-cyan-500/10 text-blue-400",
  grass:
    "from-green-500/20 to-emerald-500/10 text-green-400",
  electric:
    "from-yellow-500/20 to-amber-500/10 text-yellow-400",
  ice:
    "from-cyan-500/20 to-sky-500/10 text-cyan-400",
  fighting:
    "from-red-500/20 to-orange-500/10 text-red-400",
  poison:
    "from-purple-500/20 to-violet-500/10 text-purple-400",
  ground:
    "from-amber-500/20 to-yellow-500/10 text-amber-400",
  flying:
    "from-sky-500/20 to-indigo-500/10 text-sky-400",
  psychic:
    "from-pink-500/20 to-rose-500/10 text-pink-400",
  bug:
    "from-lime-500/20 to-green-500/10 text-lime-400",
  rock:
    "from-stone-500/20 to-yellow-500/10 text-stone-400",
  ghost:
    "from-violet-500/20 to-purple-500/10 text-violet-400",
  dragon:
    "from-indigo-500/20 to-blue-500/10 text-indigo-400",
  dark:
    "from-zinc-500/20 to-slate-500/10 text-zinc-300",
  steel:
    "from-gray-500/20 to-slate-500/10 text-gray-300",
  fairy:
    "from-pink-500/20 to-rose-500/20 text-pink-400",
};

function PokemonCard({ pokemon }) {
  const primaryType =
    pokemon.types?.[0] || "normal";

  const image =
    pokemon.image ||
    pokemon.sprites?.other?.home
      ?.front_default ||
    pokemon.sprites?.other?.[
      "official-artwork"
    ]?.front_default ||
    pokemon.sprites?.front_default;

  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <motion.article
        whileHover={{
          y: -10,
        }}
        transition={{
          duration: 0.25,
        }}
        className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
      >
        {/* Glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            typeColors[
              primaryType
            ]
          } opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100`}
        />

        {/* Number */}
        <div className="absolute right-5 top-5 text-5xl font-black text-white/5">
          #
          {String(
            pokemon.id
          ).padStart(3, "0")}
        </div>

        <div className="relative z-10 p-6">
          {/* Image */}
          <div className="relative flex justify-center">
            <motion.img
              src={image}
              alt={pokemon.name}
              animate={{
                y: [0, -8, 0],
                rotate: [
                  0,
                  1,
                  0,
                  -1,
                  0,
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-40 w-40 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Name */}
          <h3 className="mt-4 text-center text-2xl font-bold capitalize text-white">
            {pokemon.name}
          </h3>

          {/* Types */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {pokemon.types.map(
              (type) => (
                <span
                  key={type}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase ${
                    typeColors[
                      type
                    ] ||
                    "border-white/10 text-white"
                  }`}
                >
                  {type}
                </span>
              )
            )}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default PokemonCard;