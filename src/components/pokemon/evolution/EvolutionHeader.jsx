function EvolutionHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-400">
          Evolution Analyzer
        </p>

        <h2 className="mt-2 text-3xl font-black text-white">
          Evolution Chain
        </h2>

        <p className="mt-2 text-slate-400">
          Complete evolution progression and requirements.
        </p>
      </div>

      <div className="hidden lg:block">
        <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
            Scanner Active
          </span>
        </div>
      </div>
    </div>
  );
}

export default EvolutionHeader;