import StatsHeader from "./stats/StatsHeader";
import StatsRadar from "./stats/StatsRadar";
import StatsBars from "./stats/StatsBars";
import StatsSummary from "./stats/StatsSummary";

function PokemonStats({ pokemon }) {
  const totalStats = pokemon.stats.reduce(
    (total, stat) => total + stat.base_stat,
    0
  );

  const strongestStat = [...pokemon.stats].sort(
    (a, b) => b.base_stat - a.base_stat
  )[0];

  const weakestStat = [...pokemon.stats].sort(
    (a, b) => a.base_stat - b.base_stat
  )[0];

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
      {/* HUD Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="relative z-10">
        <StatsHeader
          pokemon={pokemon}
          totalStats={totalStats}
        />

        <div className="mt-10 grid gap-10 xl:grid-cols-[500px_1fr]">
          <StatsRadar pokemon={pokemon} />

          <StatsBars pokemon={pokemon} />
        </div>

        <StatsSummary
          totalStats={totalStats}
          strongestStat={strongestStat}
          weakestStat={weakestStat}
        />
      </div>

      {/* Corner Decoration */}
      <div className="absolute left-6 top-6 h-8 w-8 border-l-2 border-t-2 border-cyan-400/50" />

      <div className="absolute right-6 top-6 h-8 w-8 border-r-2 border-t-2 border-cyan-400/50" />

      <div className="absolute bottom-6 left-6 h-8 w-8 border-b-2 border-l-2 border-cyan-400/50" />

      <div className="absolute bottom-6 right-6 h-8 w-8 border-b-2 border-r-2 border-cyan-400/50" />
    </section>
  );
}

export default PokemonStats;