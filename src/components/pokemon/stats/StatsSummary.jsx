import {
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaShieldHeart,
  FaTrophy,
} from "react-icons/fa6";

function StatsSummary({
  totalStats,
  strongestStat,
  weakestStat,
}) {
  const getRank = () => {
    if (totalStats >= 650)
      return {
        rank: "S+",
        color:
          "text-yellow-400",
      };

    if (totalStats >= 550)
      return {
        rank: "S",
        color:
          "text-cyan-400",
      };

    if (totalStats >= 500)
      return {
        rank: "A",
        color:
          "text-green-400",
      };

    if (totalStats >= 400)
      return {
        rank: "B",
        color:
          "text-orange-400",
      };

    return {
      rank: "C",
      color:
        "text-red-400",
    };
  };

  const rank = getRank();

  const cards = [
    {
      title: "Total Stats",
      value: totalStats,
      icon: (
        <FaShieldHeart />
      ),
      color:
        "text-cyan-400",
    },
    {
      title: "Strongest",
      value:
        strongestStat.stat.name,
      subValue:
        strongestStat.base_stat,
      icon: (
        <FaArrowTrendUp />
      ),
      color:
        "text-green-400",
    },
    {
      title: "Weakest",
      value:
        weakestStat.stat.name,
      subValue:
        weakestStat.base_stat,
      icon: (
        <FaArrowTrendDown />
      ),
      color:
        "text-red-400",
    },
    {
      title: "Combat Rank",
      value: rank.rank,
      icon: (
        <FaTrophy />
      ),
      color: rank.color,
    },
  ];

  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map(
        (
          card,
          index
        ) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-cyan-400/5" />
            </div>

            {/* Icon */}
            <div
              className={`mb-5 text-3xl ${card.color}`}
            >
              {card.icon}
            </div>

            {/* Title */}
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              {card.title}
            </p>

            {/* Value */}
            <h3
              className={`mt-3 text-4xl font-black capitalize ${card.color}`}
            >
              {card.value}
            </h3>

            {/* Extra Value */}
            {card.subValue && (
              <p className="mt-2 text-lg font-bold text-white">
                {card.subValue}
              </p>
            )}

            {/* Bottom Scanner Line */}
            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          </div>
        )
      )}
    </div>
  );
}

export default StatsSummary;