import { useState } from "react";

import PokedexHero from "../components/pokedex/PokedexHero";
import PokedexFilters from "../components/pokedex/PokedexFilters";
import PokemonGrid from "../components/pokedex/PokemonGrid";

function Pokedex() {
  const [search, setSearch] = useState("");

  const [selectedType, setSelectedType] =
    useState("all");

  const [selectedGeneration, setSelectedGeneration] =
    useState("all");

  const [sortBy, setSortBy] =
    useState("id");

  return (
    <main className="min-h-screen overflow-hidden bg-[#070B14]">
      <PokedexHero />

      <PokedexFilters
        search={search}
        setSearch={setSearch}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedGeneration={selectedGeneration}
        setSelectedGeneration={
          setSelectedGeneration
        }
        sortBy={sortBy}
        setSortBy={setSortBy}
      />


      <PokemonGrid
        search={search}
        selectedType={selectedType}
        selectedGeneration={
          selectedGeneration
        }
        sortBy={sortBy}
      />
    </main>
  );
}

export default Pokedex;