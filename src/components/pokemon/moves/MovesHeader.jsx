function MovesHeader({
  totalMoves,
}) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
          Battle Database
        </p>

        <h2 className="text-4xl font-black text-white">
          Move Arsenal
        </h2>

        <p className="mt-3 max-w-2xl text-slate-400">
          Complete move library available
          to this Pokémon including
          offensive attacks, status moves,
          and battle techniques.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 px-6 py-4">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
            Total Moves
          </p>

          <h3 className="mt-1 text-3xl font-black text-white">
            {totalMoves}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default MovesHeader;