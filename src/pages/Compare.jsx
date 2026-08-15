import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CompareHero from "../components/compare/CompareHero";
import CompareSearch from "../components/compare/CompareSearch";
import CompareArena from "../components/compare/CompareArena";
import CompareStats from "../components/compare/CompareStats";
import CompareDetails from "../components/compare/CompareDetails";
import CompareWinner from "../components/compare/CompareWinner";

function Compare() {
  const { id } = useParams();

  const [leftData, setLeftData] =
    useState(null);

  const [rightData, setRightData] =
    useState(null);

  const [rightPokemon, setRightPokemon] =
    useState("");

  const [allPokemon, setAllPokemon] =
    useState([]);

  const [suggestions, setSuggestions] =
    useState([]);

  const fetchPokemon = async (
  pokemonId,
  side
) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );

    const data =
      await response.json();

    console.log(
      `${side} pokemon:`,
      data
    );

    if (side === "left") {
      setLeftData(data);
    } else {
      setRightData(data);
    }
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
     console.log("Route ID:", id);
    if (!id) return;

    fetchPokemon(id, "left");
  }, [id]);

  useEffect(() => {
    const getPokemonList =
      async () => {
        try {
          const response =
            await fetch(
              "https://pokeapi.co/api/v2/pokemon?limit=1302"
            );

          const data =
            await response.json();

          setAllPokemon(
            data.results
          );
        } catch (error) {
          console.error(error);
        }
      };

    getPokemonList();
  }, []);

  useEffect(() => {
    if (
      rightPokemon.trim() === ""
    ) {
      setSuggestions([]);
      return;
    }

    const filtered =
      allPokemon
        .filter((pokemon) =>
          pokemon.name
            .toLowerCase()
            .includes(
              rightPokemon.toLowerCase()
            )
        )
        .slice(0, 8);

    setSuggestions(filtered);
  }, [
    rightPokemon,
    allPokemon,
  ]);

  const handleSelectPokemon = (
    pokemonName
  ) => {
    setRightPokemon(
      pokemonName
    );

    fetchPokemon(
      pokemonName,
      "right"
    );

    setSuggestions([]);
  };

  const handleBattleStart =
    () => {
      if (!rightData) return;

      document
        .getElementById(
          "battle-arena"
        )
        ?.scrollIntoView({
          behavior: "smooth",
        });
    };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712]">
      <div className="relative z-10">
        <CompareHero
          leftData={leftData}
        />

        <CompareSearch
          leftPokemon={leftData}
          rightPokemon={
            rightPokemon
          }
          setRightPokemon={
            setRightPokemon
          }
          suggestions={
            suggestions
          }
          onSelectPokemon={
            handleSelectPokemon
          }
          onStartBattle={
            handleBattleStart
          }
        />

        <CompareArena
          leftData={leftData}
          rightData={rightData}
        />

        <CompareStats
          leftData={leftData}
          rightData={rightData}
        />

        <CompareDetails
          leftData={leftData}
          rightData={rightData}
        />

        <CompareWinner
          leftData={leftData}
          rightData={rightData}
        />
      </div>
    </main>
  );
}

export default Compare;