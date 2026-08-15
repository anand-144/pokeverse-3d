import { motion } from "framer-motion";
import {
  Swords,
  Trophy,
  Shield,
  Zap,
} from "lucide-react";

function CompareArena({
  leftData,
  rightData,
}) {
  if (!leftData || !rightData) return null;

  const leftImage =
    leftData.sprites?.other?.home
      ?.front_default ||
    leftData.sprites?.other?.[
      "official-artwork"
    ]?.front_default;

  const rightImage =
    rightData.sprites?.other?.home
      ?.front_default ||
    rightData.sprites?.other?.[
      "official-artwork"
    ]?.front_default;

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
    leftPower > rightPower
      ? "left"
      : rightPower > leftPower
      ? "right"
      : "draw";

  return (
    <section
      id="battle-arena"
      className="max-w-7xl mx-auto px-4 md:px-6 mt-16"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
          lg:p-12
        "
      >
        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-red-500/10 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />

        {/* Header */}
        <div className="relative text-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-yellow-500/20
              bg-yellow-500/10
              px-4
              py-2
            "
          >
            <Trophy
              size={16}
              className="text-yellow-400"
            />

            <span className="text-sm text-yellow-300">
              Battle Arena
            </span>
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-white">
            Head To Head Battle
          </h2>
        </div>

        {/* Arena */}
        <div className="relative mt-14 grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className={`
              rounded-[32px]
              border
              p-6
              ${
                winner === "left"
                  ? "border-yellow-500/40 bg-yellow-500/5"
                  : "border-white/10 bg-white/[0.03]"
              }
            `}
          >
            <motion.img
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              src={leftImage}
              alt={leftData.name}
              className="
                h-72
                w-full
                object-contain
              "
            />

            <h3 className="mt-4 text-center text-3xl font-black capitalize text-white">
              {leftData.name}
            </h3>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {leftData.types.map(
                (type) => (
                  <span
                    key={
                      type.type.name
                    }
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-3
                      py-1
                      text-xs
                      uppercase
                      text-white
                    "
                  >
                    {
                      type.type.name
                    }
                  </span>
                )
              )}
            </div>

            <div className="mt-6 rounded-2xl bg-white/5 p-4 text-center">
              <p className="text-xs text-slate-400">
                Power Score
              </p>

              <h4 className="mt-2 text-4xl font-black text-white">
                {leftPower}
              </h4>
            </div>
          </motion.div>

          {/* VS */}
          <div className="flex justify-center">
            <motion.div
              animate={{
                scale: [
                  1,
                  1.08,
                  1,
                ],
                rotate: [
                  0,
                  5,
                  -5,
                  0,
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="
                relative
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-full
                border
                border-yellow-500/20
                bg-yellow-500/10
              "
            >
              <div className="absolute inset-0 rounded-full bg-yellow-500/10 animate-ping" />

              <Swords
                size={34}
                className="text-yellow-400"
              />
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className={`
              rounded-[32px]
              border
              p-6
              ${
                winner === "right"
                  ? "border-yellow-500/40 bg-yellow-500/5"
                  : "border-white/10 bg-white/[0.03]"
              }
            `}
          >
            <motion.img
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              src={rightImage}
              alt={rightData.name}
              className="
                h-72
                w-full
                object-contain
              "
            />

            <h3 className="mt-4 text-center text-3xl font-black capitalize text-white">
              {rightData.name}
            </h3>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {rightData.types.map(
                (type) => (
                  <span
                    key={
                      type.type.name
                    }
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-3
                      py-1
                      text-xs
                      uppercase
                      text-white
                    "
                  >
                    {
                      type.type.name
                    }
                  </span>
                )
              )}
            </div>

            <div className="mt-6 rounded-2xl bg-white/5 p-4 text-center">
              <p className="text-xs text-slate-400">
                Power Score
              </p>

              <h4 className="mt-2 text-4xl font-black text-white">
                {rightPower}
              </h4>
            </div>
          </motion.div>
        </div>

        {/* Winner Banner */}
        <div className="mt-10">
          <div
            className="
              rounded-3xl
              border
              border-yellow-500/20
              bg-yellow-500/10
              p-5
              text-center
            "
          >
            <p className="text-sm text-yellow-300">
              Current Leader
            </p>

            <h3 className="mt-2 text-3xl font-black text-white capitalize">
              {winner === "draw"
                ? "Draw Battle"
                : winner === "left"
                ? leftData.name
                : rightData.name}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompareArena;