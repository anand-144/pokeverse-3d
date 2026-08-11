function SimilarHeader() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
          Related Species Database
        </p>

        <h2 className="text-4xl font-black text-white">
          Similar Pokémon
        </h2>

        <p className="mt-3 max-w-2xl text-slate-400">
          Pokémon sharing similar
          elemental typing and battle
          characteristics.
        </p>
      </div>

      <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 px-6 py-4">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
          Scanner
        </p>

        <h3 className="mt-1 text-2xl font-black text-white">
          ACTIVE
        </h3>
      </div>
    </div>
  );
}

export default SimilarHeader;