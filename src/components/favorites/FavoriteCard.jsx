import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Eye } from "lucide-react";

const typeColors = {
  normal:
    "from-gray-500/20 to-gray-600/20",
  fire:
    "from-orange-500/20 to-red-500/20",
  water:
    "from-blue-500/20 to-cyan-500/20",
  electric:
    "from-yellow-500/20 to-amber-500/20",
  grass:
    "from-green-500/20 to-emerald-500/20",
  ice:
    "from-cyan-500/20 to-sky-500/20",
  fighting:
    "from-red-600/20 to-orange-600/20",
  poison:
    "from-purple-500/20 to-violet-500/20",
  ground:
    "from-amber-600/20 to-yellow-600/20",
  flying:
    "from-sky-500/20 to-indigo-500/20",
  psychic:
    "from-pink-500/20 to-rose-500/20",
  bug:
    "from-lime-500/20 to-green-500/20",
  rock:
    "from-stone-500/20 to-amber-500/20",
  ghost:
    "from-violet-600/20 to-purple-600/20",
  dragon:
    "from-indigo-500/20 to-purple-500/20",
  dark:
    "from-zinc-600/20 to-zinc-800/20",
  steel:
    "from-slate-400/20 to-slate-600/20",
  fairy:
    "from-pink-400/20 to-fuchsia-400/20",
};

function FavoriteCard({
  pokemon,
  onRemove,
}) {
  const primaryType =
    pokemon.types[0]?.type.name;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
    >
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          typeColors[
            primaryType
          ] ||
          "from-red-500/10 to-red-500/10"
        } opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-32 h-40 w-40 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative z-10 p-6">
        {/* Dex Number */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold tracking-widest text-zinc-500">
            #
            {String(
              pokemon.id
            ).padStart(
              4,
              "0"
            )}
          </span>

          <Heart
            size={18}
            className="fill-red-500 text-red-500"
          />
        </div>

        {/* Pokemon Image */}
        <div className="mt-4 flex justify-center">
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
            className="h-44 w-44 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
          />
        </div>

        {/* Name */}
        <h3 className="mt-4 text-center text-2xl font-black capitalize text-white">
          {pokemon.name}
        </h3>

        {/* Types */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {pokemon.types.map(
            (type) => (
              <span
                key={
                  type.type.name
                }
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium capitalize text-white"
              >
                {
                  type.type.name
                }
              </span>
            )
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Link
            to={`/pokemon/${pokemon.id}`}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <Eye size={16} />
            View
          </Link>

          <button
            onClick={onRemove}
            className="flex items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 py-3 text-sm font-medium text-red-300 transition hover:bg-red-500 hover:text-white"
          >
            <Heart
              size={16}
            />
            Remove
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default FavoriteCard;