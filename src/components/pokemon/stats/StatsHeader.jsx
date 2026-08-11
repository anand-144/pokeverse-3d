import { FaBolt } from "react-icons/fa6";

function StatsHeader({
  pokemon,
  totalStats,
}) {
  const getRank = () => {
    if (totalStats >= 650) return "S+";
    if (totalStats >= 550) return "S";
    if (totalStats >= 500) return "A";
    if (totalStats >= 400) return "B";
    return "C";
  };

  return (
    <div className="flex flex-col gap-6 border-b border-white/10 pb-8 xl:flex-row xl:items-center xl:justify-between">
      {/* Left */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
          Combat Analysis
        </p>

        <h2 className="mt-3 text-4xl font-black text-white">
          Battle Statistics
        </h2>

        <p className="mt-2 text-slate-400">
          Advanced combat performance
          breakdown for {pokemon.name}.
        </p>
      </div>

      {/* Right */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Total
          </p>

          <p className="mt-2 text-3xl font-black text-white">
            {totalStats}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Rank
          </p>

          <p className="mt-2 text-3xl font-black text-cyan-400">
            {getRank()}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Status
          </p>

          <div className="mt-2 flex items-center justify-center gap-2 text-green-400">
            <FaBolt />

            <span className="font-bold">
              Online
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsHeader;