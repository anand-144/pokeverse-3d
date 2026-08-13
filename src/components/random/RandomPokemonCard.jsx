import { motion } from "framer-motion";

function RandomPokemonCard({
  pokemon,
  loading,
}) {
  const image =
    pokemon?.sprites?.other?.home
      ?.front_default ||
    pokemon?.sprites?.other?.[
      "official-artwork"
    ]?.front_default ||
    pokemon?.sprites?.front_default;

  if (!pokemon) {
    return (
      <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl min-h-[520px] flex items-center justify-center">
        <p className="text-slate-400">
          Generate a Pokémon
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">
      <div className="p-5">
        <motion.img
          key={pokemon.id}
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          src={image}
          alt={pokemon.name}
          className="h-40 w-full object-contain"
        />

        <h3 className="mt-2 text-center text-2xl font-black capitalize text-white">
          {pokemon.name}
        </h3>

        <p className="mt-1 text-center text-slate-400 text-sm">
          #{pokemon.id}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className="px-3 py-1 rounded-full border border-white/10 text-white text-[10px] uppercase"
            >
              {type.type.name}
            </span>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white/[0.03] p-3 text-center">
            <p className="text-slate-500 text-xs">
              Height
            </p>

            <p className="text-white font-bold">
              {pokemon.height}
            </p>
          </div>

          <div className="rounded-xl bg-white/[0.03] p-3 text-center">
            <p className="text-slate-500 text-xs">
              Weight
            </p>

            <p className="text-white font-bold">
              {pokemon.weight}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="mb-3 text-base font-bold text-white">
            Battle Stats
          </h4>

          <div className="space-y-2">
            {pokemon.stats.map((stat) => (
              <div
                key={stat.stat.name}
                className="
            flex
            items-center
            justify-between
            rounded-xl
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
          "
              >
                <span className="capitalize text-sm text-slate-400">
                  {stat.stat.name.replace("-", " ")}
                </span>

                <span className="text-base font-black text-white">
                  {stat.base_stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomPokemonCard;