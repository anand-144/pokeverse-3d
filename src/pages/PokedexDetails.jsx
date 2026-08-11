import { useParams } from "react-router-dom";

import useEvolutionChain from "../hooks/useEvolutionChain";

import PokemonHero from "../components/pokemon/PokemonHero";
import PokemonStats from "../components/pokemon/PokemonStats";
import PokemonAbilities from "../components/pokemon/PokemonAbilities";
import PokemonEvolution from "../components/pokemon/PokemonEvolution";
import SimilarPokemon from "../components/pokemon/SimilarPokemon";
import PokemonMoves from "../components/pokemon/PokemonMoves";
import PokemonWeaknesses from "../components/pokemon/PokemonWeaknesses";

const PokedexDetails = () => {
  const { id } = useParams();

  const {
    pokemon,
    species,
    evolutionChain,
    loading,
    error,
  } = useEvolutionChain(id);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816]">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-red-500 border-t-transparent" />

          <p className="text-lg text-slate-300">
            Loading Pokémon...
          </p>
        </div>
      </div>
    );
  }

  if (error || !pokemon) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816]">
        <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-white">
            Oops!
          </h2>

          <p className="text-slate-400">
            Failed to load Pokémon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] pt-28">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/5 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-8 px-6 pb-20">
        {/* Hero */}
        <PokemonHero
          pokemon={pokemon}
          species={species}
        />

        {/* Stats */}
        <PokemonStats pokemon={pokemon} />

        {/* Moves */}
        <PokemonMoves pokemon={pokemon} />

        {/* Abilities */}
        <PokemonAbilities pokemon={pokemon} />

        <PokemonWeaknesses pokemon={pokemon}/>

        {/* Evolution */}
        <PokemonEvolution
          evolutionChain={evolutionChain}
        />

        {/* Similar Pokemon */}
        <SimilarPokemon
          pokemon={pokemon}
        />
      </div>
    </main>
  );
};

export default PokedexDetails;