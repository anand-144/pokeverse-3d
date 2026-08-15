import { motion } from "framer-motion";

const statColors = {
  hp: "from-green-500 to-emerald-400",
  attack: "from-red-500 to-orange-400",
  defense: "from-blue-500 to-cyan-400",
  "special-attack":
    "from-purple-500 to-pink-400",
  "special-defense":
    "from-indigo-500 to-violet-400",
  speed: "from-yellow-500 to-amber-400",
};

function CompareStats({
  leftData,
  rightData,
}) {
  if (!leftData || !rightData)
    return null;

  const stats =
    leftData.stats.map(
      (leftStat, index) => {
        const rightStat =
          rightData.stats[index];

        return {
          name:
            leftStat.stat.name,
          left:
            leftStat.base_stat,
          right:
            rightStat.base_stat,
        };
      }
    );

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 mt-12">
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
          <span
            className="
              inline-flex
              px-4
              py-2
              rounded-full
              border
              border-white/10
              bg-white/5
              text-sm
              text-slate-300
            "
          >
            Battle Statistics
          </span>

          <h2 className="mt-5 text-4xl font-black text-white">
            Head To Head Stats
          </h2>

          <p className="mt-3 text-slate-400">
            Compare every battle
            attribute and determine
            which Pokémon dominates
            each category.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 space-y-8">
          {stats.map((stat) => {
            const max =
              Math.max(
                stat.left,
                stat.right
              );

            const leftPercent =
              (stat.left / max) *
              100;

            const rightPercent =
              (stat.right / max) *
              100;

            const leftWinner =
              stat.left >
              stat.right;

            const rightWinner =
              stat.right >
              stat.left;

            const gradient =
              statColors[
                stat.name
              ] ||
              "from-slate-500 to-slate-400";

            return (
              <div
                key={stat.name}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-5
                "
              >
                {/* Label */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="
                      text-lg
                      font-bold
                      capitalize
                      text-white
                    "
                  >
                    {stat.name.replace(
                      "-",
                      " "
                    )}
                  </span>

                  <span className="text-slate-500 text-sm">
                    Max {max}
                  </span>
                </div>

                {/* Left */}
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-semibold ${
                        leftWinner
                          ? "text-green-400"
                          : "text-slate-300"
                      }`}
                    >
                      {
                        leftData.name
                      }
                    </span>

                    <span
                      className={`font-black ${
                        leftWinner
                          ? "text-green-400"
                          : "text-white"
                      }`}
                    >
                      {stat.left}
                    </span>
                  </div>

                  <div className="h-4 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${leftPercent}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className={`
                        h-full
                        bg-gradient-to-r
                        ${gradient}
                      `}
                    />
                  </div>
                </div>

                {/* Right */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className={`font-semibold ${
                        rightWinner
                          ? "text-green-400"
                          : "text-slate-300"
                      }`}
                    >
                      {
                        rightData.name
                      }
                    </span>

                    <span
                      className={`font-black ${
                        rightWinner
                          ? "text-green-400"
                          : "text-white"
                      }`}
                    >
                      {stat.right}
                    </span>
                  </div>

                  <div className="h-4 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${rightPercent}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1,
                      }}
                      className={`
                        h-full
                        bg-gradient-to-r
                        ${gradient}
                      `}
                    />
                  </div>
                </div>

                {/* Winner */}
                <div className="mt-4 flex justify-center">
                  <span
                    className="
                      px-4
                      py-1.5
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                      text-xs
                      uppercase
                      tracking-wider
                      text-slate-300
                    "
                  >
                    {leftWinner
                      ? `${leftData.name} Wins`
                      : rightWinner
                      ? `${rightData.name} Wins`
                      : "Draw"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CompareStats;