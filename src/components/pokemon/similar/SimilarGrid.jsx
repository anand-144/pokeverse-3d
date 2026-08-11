import SimilarCard from "./SimilarCard";

function SimilarGrid({
  pokemonList,
}) {
  if (!pokemonList.length) {
    return (
      <div className="flex h-80 items-center justify-center rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white">
            No Similar Pokémon Found
          </h3>

          <p className="mt-2 text-slate-400">
            Scanner could not locate
            related species.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {pokemonList.map(
        (pokemon) => (
          <SimilarCard
            key={pokemon.id}
            pokemon={pokemon}
          />
        )
      )}
    </div>
  );
}

export default SimilarGrid;