import { useMemo, useState } from "react";

import usePokemonMoves from "../../hooks/usePokemonMoves";

import MovesHeader from "./moves/MovesHeader";
import MoveSearch from "./moves/MoveSearch";
import MovesGrid from "./moves/MovesGrid";

function PokemonMoves({
  pokemon,
}) {
  const [search, setSearch] =
    useState("");

  const {
    moveData,
    loading,
  } = usePokemonMoves(
    pokemon.moves
  );

  const filteredMoves =
    useMemo(() => {
      return moveData.filter(
        (move) =>
          move.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [
      moveData,
      search,
    ]);

  if (loading) {
    return (
      <section className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
        <div className="flex h-72 items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />

            <p className="mt-4 text-slate-400">
              Loading Moves...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
      {/* Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10">
        <MovesHeader
          totalMoves={
            moveData.length
          }
        />

        <div className="mt-8">
          <MoveSearch
            search={search}
            setSearch={setSearch}
          />
        </div>

        <div className="mt-8">
          <MovesGrid
            moves={
              filteredMoves
            }
          />
        </div>
      </div>

      <div className="absolute left-6 top-6 h-8 w-8 border-l-2 border-t-2 border-cyan-400/50" />

      <div className="absolute right-6 top-6 h-8 w-8 border-r-2 border-t-2 border-cyan-400/50" />

      <div className="absolute bottom-6 left-6 h-8 w-8 border-b-2 border-l-2 border-cyan-400/50" />

      <div className="absolute bottom-6 right-6 h-8 w-8 border-b-2 border-r-2 border-cyan-400/50" />
    </section>
  );
}

export default PokemonMoves;