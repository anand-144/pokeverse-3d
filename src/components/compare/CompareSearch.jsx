import { motion } from "framer-motion";
import {
  Search,
  Swords,
  Shield,
} from "lucide-react";

function CompareSearch({
  leftPokemon,
  rightPokemon,
  setRightPokemon,
  suggestions,
  onSelectPokemon,
  onStartBattle,
}) {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 mt-8">
      <div
        className="
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
        "
      >
        {/* Header */}
        <div className="text-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-yellow-500/20
              bg-yellow-500/10
            "
          >
            <Swords
              size={16}
              className="text-yellow-400"
            />

            <span className="text-sm text-yellow-300">
              Battle Setup
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-black text-white">
            Choose Your Opponent
          </h2>

          <p className="mt-3 text-slate-400">
            Select a Pokémon to battle
            against your current champion.
          </p>
        </div>

        {/* Inputs */}
        <div className="mt-10 grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-center">
          {/* Left */}
          <div
            className=" rounded-3xl border border-red-500/20 bg-red-500/5  p-5 "
          >
            <label className="text-xs uppercase tracking-wider text-red-300">
              Your Pokémon
            </label>

            <div className="mt-4 flex items-center gap-4">
              {leftPokemon && (
                <>
                  <img
                    src={
                      leftPokemon?.sprites?.other?.home?.front_default ||
                      leftPokemon?.sprites?.other?.[
                        "official-artwork"
                      ]?.front_default ||
                      leftPokemon?.sprites
                        ?.front_default
                    }
                    alt={leftPokemon.name}
                    className="h-16 w-16 object-contain"
                  />

                  <div>
                    <h3 className="text-lg font-bold capitalize text-white">
                      {leftPokemon.name}
                    </h3>

                    <p className="text-sm text-slate-400">
                      #
                      {String(
                        leftPokemon.id
                      ).padStart(
                        3,
                        "0"
                      )}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* VS */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
              flex
              justify-center
            "
          >
            <div
              className="
                relative
                h-24
                w-24
                rounded-full
                border
                border-yellow-500/20
                bg-yellow-500/10
                backdrop-blur-xl
                flex
                items-center
                justify-center
              "
            >
              <div className="absolute inset-0 rounded-full bg-yellow-500/10 animate-ping" />

              <span className="relative text-2xl font-black text-yellow-400">
                VS
              </span>
            </div>
          </motion.div>

          {/* Right */}
          <div className="relative">
            <div
              className="
                rounded-3xl
                border
                border-blue-500/20
                bg-blue-500/5
                p-5
              "
            >
              <label className="text-xs uppercase tracking-wider text-blue-300">
                Opponent
              </label>

              <div className="relative mt-3">
                <Search
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-500
                  "
                />

                <input
                  value={rightPokemon}
                  onChange={(e) =>
                    setRightPokemon(
                      e.target.value
                    )
                  }
                  placeholder="Search Pokémon..."
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    pl-12
                    pr-4
                    text-white
                    outline-none
                    focus:border-blue-500/40
                  "
                />
              </div>

              {/* Suggestions */}
              {suggestions.length > 0 && (
                <div
                  className="
                    absolute
                    top-[120px]
                    left-0
                    right-0
                    z-50
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#0f172a]
                    backdrop-blur-xl
                  "
                >
                  {suggestions.map(
                    (pokemon) => (
                      <button
                        key={
                          pokemon.name
                        }
                        onClick={() =>
                          onSelectPokemon(
                            pokemon.name
                          )
                        }
                        className="
                          flex
                          w-full
                          items-center
                          justify-between
                          px-5
                          py-4
                          text-left
                          capitalize
                          text-white
                          transition
                          hover:bg-white/5
                        "
                      >
                        <span>
                          {pokemon.name}
                        </span>

                        <Shield
                          size={16}
                          className="text-slate-500"
                        />
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Battle Button */}
        <div className="mt-10 flex justify-center">
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onStartBattle}
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-red-500
              via-yellow-400
              to-blue-500
              px-8
              py-4
              text-lg
              font-black
              text-white
              shadow-[0_0_40px_rgba(239,68,68,0.35)]
            "
          >
            <Swords size={20} />

            Start Battle
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default CompareSearch;