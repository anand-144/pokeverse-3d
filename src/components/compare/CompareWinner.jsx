import { motion } from "framer-motion";
import {
  Trophy,
  Crown,
  Sparkles,
} from "lucide-react";

function CompareWinner({
  leftData,
  rightData,
}) {
  if (!leftData || !rightData)
    return null;

  const leftPower =
    leftData.stats.reduce(
      (sum, stat) =>
        sum + stat.base_stat,
      0
    );

  const rightPower =
    rightData.stats.reduce(
      (sum, stat) =>
        sum + stat.base_stat,
      0
    );

  const winner =
    leftPower >= rightPower
      ? leftData
      : rightData;

  const winnerPower =
    leftPower >= rightPower
      ? leftPower
      : rightPower;

  const loserPower =
    leftPower >= rightPower
      ? rightPower
      : leftPower;

  const winDifference =
    winnerPower - loserPower;

  const winnerImage =
    winner.sprites?.other?.home
      ?.front_default ||
    winner.sprites?.other?.[
      "official-artwork"
    ]?.front_default ||
    winner.sprites?.front_default;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 mt-12 mb-24">
      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-yellow-500/20
          bg-gradient-to-b
          from-yellow-500/10
          via-white/[0.03]
          to-white/[0.02]
          backdrop-blur-xl
          p-8
          lg:p-12
        "
      >
        {/* Glow Effects */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

        <div className="absolute left-0 top-0 h-[250px] w-[250px] rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[250px] w-[250px] rounded-full bg-yellow-500/10 blur-[120px]" />

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center">
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-yellow-500/20
                bg-yellow-500/10
                px-5
                py-2
              "
            >
              <Trophy
                size={18}
                className="text-yellow-400"
              />

              <span className="text-sm font-medium text-yellow-300">
                Battle Result
              </span>
            </motion.div>

            <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
              Battle Champion
            </h2>
          </div>

          {/* Winner */}
          <div className="mt-12 flex flex-col items-center">
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-[80px]" />

              <img
                src={winnerImage}
                alt={winner.name}
                className="
                  relative
                  h-80
                  w-80
                  object-contain
                "
              />
            </motion.div>

            <motion.div
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="
                -mt-6
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-yellow-500/20
                bg-yellow-500/10
              "
            >
              <Crown
                size={34}
                className="text-yellow-400"
              />
            </motion.div>

            <h3 className="mt-6 text-5xl font-black capitalize text-white">
              {winner.name}
            </h3>

            <p className="mt-3 text-slate-300">
              Dominates the battlefield with
              superior overall stats.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                text-center
              "
            >
              <p className="text-sm text-slate-400">
                Power Score
              </p>

              <h4 className="mt-3 text-4xl font-black text-white">
                {winnerPower}
              </h4>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                text-center
              "
            >
              <p className="text-sm text-slate-400">
                Advantage
              </p>

              <h4 className="mt-3 text-4xl font-black text-yellow-400">
                +{winDifference}
              </h4>
            </div>

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                text-center
              "
            >
              <p className="text-sm text-slate-400">
                Rank
              </p>

              <h4 className="mt-3 text-4xl font-black text-white">
                #1
              </h4>
            </div>
          </div>

          {/* Verdict */}
          <div
            className="
              mt-10
              rounded-[32px]
              border
              border-yellow-500/20
              bg-yellow-500/10
              p-8
              text-center
            "
          >
            <Sparkles
              size={28}
              className="mx-auto text-yellow-400"
            />

            <h3 className="mt-4 text-2xl font-black text-white">
              Battle Verdict
            </h3>

            <p className="mt-3 max-w-2xl mx-auto text-slate-300 leading-relaxed">
              {winner.name} emerges as the
              superior Pokémon in this battle
              comparison, outperforming its
              opponent through a stronger
              combination of offensive,
              defensive and overall base
              statistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompareWinner;