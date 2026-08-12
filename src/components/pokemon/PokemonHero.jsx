import { useEffect, useRef, useState } from "react";

import HeroHeader from "./hero/HeroHeader";
import HeroScanner from "./hero/HeroScanner";
import HeroActions from "./hero/HeroActions";
import HeroInfo from "./hero/HeroInfo";
import Hero3DModal from "./hero/Hero3DModal";

import { typeColors } from "../../utils/typeColors";

function PokemonHero({
  pokemon,
  species,
}) {
  const [isShiny, setIsShiny] =
    useState(false);

  const [favorite, setFavorite] =
    useState(false);

  const [show3DModal, setShow3DModal] =
    useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem(
        "favorites"
      ) || "[]"
    );

    setFavorite(
      favorites.includes(
        pokemon.id
      )
    );
  }, [pokemon.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem(
        "favorites"
      ) || "[]"
    );

    let updated = [];

    if (
      favorites.includes(
        pokemon.id
      )
    ) {
      updated = favorites.filter(
        (id) =>
          id !== pokemon.id
      );
    } else {
      updated = [
        ...favorites,
        pokemon.id,
      ];
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    setFavorite(
      updated.includes(
        pokemon.id
      )
    );
  };

  const addToCompare = () => {
    localStorage.setItem(
      "comparePokemon",
      pokemon.id
    );
  };

  const playCry = () => {
    if (
      !pokemon?.cries?.latest ||
      !audioRef.current
    ) {
      return;
    }

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const primaryType =
    pokemon.types?.[0]?.type
      ?.name || "normal";

  const accentColor =
    typeColors[primaryType] ||
    "#ef4444";

  const image = isShiny
    ? pokemon.sprites.other.home
      ?.front_shiny ||
    pokemon.sprites.other[
      "official-artwork"
    ]?.front_shiny ||
    pokemon.sprites.other.home
      ?.front_default
    : pokemon.sprites.other.home
      ?.front_default ||
    pokemon.sprites.other[
      "official-artwork"
    ]?.front_default;

  return (
    <>
      <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-2xl lg:p-12">
        {/* Scanner Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

          <div
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px]"
            style={{
              backgroundColor:
                accentColor,
              opacity: 0.08,
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <HeroHeader
            pokemon={pokemon}
            isShiny={isShiny}
          />

          {/* Scanner */}
          <div className="mt-12">
            <HeroScanner
              pokemon={pokemon}
              image={image}
              isShiny={isShiny}
              accentColor={
                accentColor
              }
            />
          </div>

          {/* Actions */}
          <HeroActions
            isShiny={isShiny}
            setIsShiny={
              setIsShiny
            }
            favorite={favorite}
            toggleFavorite={
              toggleFavorite
            }
            playCry={playCry}
            addToCompare={
              addToCompare
            }
            setShow3DModal={
              setShow3DModal
            }
          />

          {/* Info */}
          <HeroInfo
            pokemon={pokemon}
            species={species}
          />
        </div>

        {/* Decorative Corners */}
        <div
          className="absolute left-6 top-6 h-10 w-10 border-l-2 border-t-2"
          style={{
            borderColor:
              accentColor,
          }}
        />

        <div
          className="absolute right-6 top-6 h-10 w-10 border-r-2 border-t-2"
          style={{
            borderColor:
              accentColor,
          }}
        />

        <div
          className="absolute bottom-6 left-6 h-10 w-10 border-b-2 border-l-2"
          style={{
            borderColor:
              accentColor,
          }}
        />

        <div
          className="absolute bottom-6 right-6 h-10 w-10 border-b-2 border-r-2"
          style={{
            borderColor:
              accentColor,
          }}
        />
      </section>

      <Hero3DModal
        show={show3DModal}
        onClose={() =>
          setShow3DModal(false)
        }
        pokemon={pokemon}
        isShiny={isShiny}
      />

      <audio
        ref={audioRef}
        src={pokemon?.cries?.latest}
      />
    </>
  );
}

export default PokemonHero;