import { useState } from "react";
import { useParams } from "react-router-dom";

import useEvolutionChain from "../hooks/useEvolutionChain";

import PokemonHero from "../components/pokemon/PokemonHero";
import PokemonStats from "../components/pokemon/PokemonStats";
import PokemonAbilities from "../components/pokemon/PokemonAbilities";
import PokemonEvolution from "../components/pokemon/PokemonEvolution";
import SimilarPokemon from "../components/pokemon/SimilarPokemon";
import PokemonMoves from "../components/pokemon/PokemonMoves";
import PokemonWeaknesses from "../components/pokemon/PokemonWeaknesses";

const tabs = [
  "Overview",
  "Abilities",
  "Evolution",
  "Moves",
  "Similar",
];

function PokedexDetails() {
  const { id } = useParams();

  const [activeTab, setActiveTab] =
    useState("Overview");

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
          <div className="mb-4 h-14 w-14 animate-spin rounded-full border-4 border-red-500 border-t-transparent" />

          <p className="text-lg text-slate-300">
            Loading Pokémon...
          </p>
        </div>
      </div>
    );
  }

  if (error || !pokemon) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816] px-6">
        <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-10 text-center backdrop-blur-xl">
          <h2 className="mb-2 text-3xl font-bold text-white">
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
    <main className="relative min-h-screen overflow-hidden bg-[#050816] pt-28">
      {/* Background Grid */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px]" />

        {/* Scanner Rings */}
        <div className="absolute left-1/2 top-1/2 h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />

        <div className="absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 pb-24">
        {/* HERO */}
        <PokemonHero
          pokemon={pokemon}
          species={species}
        />

        {/* TABS */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          <div className="flex flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  setActiveTab(tab)
                }
                className={`relative flex-1 min-w-[140px] px-6 py-5 text-sm font-bold uppercase tracking-[0.25em] transition-all ${activeTab === tab
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-300"
                  }`}
              >
                {activeTab === tab && (
                  <>
                    <div className="absolute inset-0 bg-white/[0.04]" />

                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-red-500" />
                  </>
                )}

                <span className="relative z-10">
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* TAB CONTENT */}
        <div className="mt-6">
          {activeTab === "Overview" && (
            <div className="space-y-6">
              <PokemonStats pokemon={pokemon} />

              <PokemonWeaknesses pokemon={pokemon} />
            </div>
          )}

          {activeTab ===
            "Abilities" && (
              <PokemonAbilities
                pokemon={pokemon}
              />
            )}

          {activeTab ===
            "Evolution" && (
              <PokemonEvolution
                evolutionChain={
                  evolutionChain
                }
              />
            )}

          {activeTab ===
            "Moves" && (
              <PokemonMoves
                pokemon={pokemon}
              />
            )}

          {activeTab ===
            "Similar" && (
              <SimilarPokemon
                pokemon={pokemon}
              />
            )}
        </div>
      </div>
    </main>
  );
}

export default PokedexDetails;