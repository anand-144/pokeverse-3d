import RandomHero from "../components/random/RandomHero";
import RandomAnimation from "../components/random/RandomAnimation";
import RandomPokemonCard from "../components/random/RandomPokemonCard";
import RecentPokemon from "../components/random/RecentPokemon";

import useRandomPokemon from "../hooks/useRandomPokemon";

function Random() {
  const {
    pokemon,
    loading,
    recentPokemon,
    generatePokemon,
  } = useRandomPokemon();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712]">
      {/* Existing Background */}

      <div className="relative z-10">
        <RandomHero />

        <section className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
          <div className="grid lg:grid-cols-[1fr_380px] gap-6">
            <RandomAnimation
              loading={loading}
              onGenerate={generatePokemon}
            />

            <RandomPokemonCard
              pokemon={pokemon}
              loading={loading}
            />
          </div>

          <div className="mt-6">
            <RecentPokemon
              recentPokemon={
                recentPokemon
              }
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Random;