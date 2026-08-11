import EvolutionHeader from "./evolution/EvolutionHeader";
import EvolutionTimeline from "./evolution/EvolutionTimeline";

function PokemonEvolution({ evolutionChain }) {
  const stages = evolutionChain?.length || 0;

  if (!stages) {
    return (
      <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
        {/* Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />

        {/* Rings */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10" />

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10" />

        <div className="relative z-10 flex h-80 items-center justify-center">
          <div className="text-center">
            <div className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                Scanner Offline
              </span>
            </div>

            <h3 className="text-3xl font-black text-white">
              Evolution Data Unavailable
            </h3>

            <p className="mt-3 text-slate-400">
              No evolution information found for this Pokémon.
            </p>
          </div>
        </div>

        {/* HUD */}
        <div className="absolute left-6 top-6 h-8 w-8 border-l-2 border-t-2 border-cyan-400/50" />
        <div className="absolute right-6 top-6 h-8 w-8 border-r-2 border-t-2 border-cyan-400/50" />
        <div className="absolute bottom-6 left-6 h-8 w-8 border-b-2 border-l-2 border-cyan-400/50" />
        <div className="absolute bottom-6 right-6 h-8 w-8 border-b-2 border-r-2 border-cyan-400/50" />
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
      {/* Scanner Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />

      {/* Scanner Rings */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/[0.04]" />

      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/[0.05]" />

      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/[0.06]" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Scan Line */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="relative z-10">
        {/* Header Row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <EvolutionHeader />

          <div className="flex items-center gap-3">
            <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                {stages} Stages Detected
              </span>
            </div>

            <div className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-300">
                Scan Complete
              </span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <EvolutionTimeline evolutionChain={evolutionChain} />

        {/* Footer */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Evolution Analysis
            </span>

            <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">
              {stages} Stage Chain
            </span>
          </div>
        </div>
      </div>

      {/* HUD Corners */}
      <div className="absolute left-6 top-6 h-8 w-8 border-l-2 border-t-2 border-cyan-400/50" />
      <div className="absolute right-6 top-6 h-8 w-8 border-r-2 border-t-2 border-cyan-400/50" />
      <div className="absolute bottom-6 left-6 h-8 w-8 border-b-2 border-l-2 border-cyan-400/50" />
      <div className="absolute bottom-6 right-6 h-8 w-8 border-b-2 border-r-2 border-cyan-400/50" />
    </section>
  );
}

export default PokemonEvolution;