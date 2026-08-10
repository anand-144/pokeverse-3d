import PokedexHero from "../components/pokedex/PokedexHero";
import PokedexStats from "../components/pokedex/PokedexStats";
import SearchBar from "../components/pokedex/SearchBar";
import FilterBar from "../components/pokedex/FilterBar";
import SortDropdown from "../components/pokedex/SortDropdown";
import PokemonGrid from "../components/pokedex/PokemonGrid";

function Pokedex() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <PokedexHero />

      <PokedexStats />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 flex flex-wrap items-center gap-4">
          <SearchBar />
          <FilterBar />
          <SortDropdown />
        </div>

        <PokemonGrid />
      </section>
    </main>
  );
}

export default Pokedex;