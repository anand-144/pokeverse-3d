import MoveCard from "./MoveCard";

function MovesGrid({
  moves,
}) {
  if (!moves.length) {
    return (
      <div className="flex h-80 items-center justify-center rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white">
            No Moves Found
          </h3>

          <p className="mt-2 text-slate-400">
            Try a different search.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {moves.map((move) => (
        <MoveCard
          key={move.name}
          move={move}
        />
      ))}
    </div>
  );
}

export default MovesGrid;