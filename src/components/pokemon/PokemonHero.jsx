import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import {
  FaScaleBalanced,
  FaVolumeHigh,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

import { typeColors } from "../../utils/typeColors";

function PokemonHero({
  pokemon,
  species,
}) {
  const [isShiny, setIsShiny] =
    useState(false);

  const [favorite, setFavorite] =
    useState(false);

  const [playing, setPlaying] =
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

    setPlaying(true);

    audioRef.current.play();

    audioRef.current.onended =
      () => {
        setPlaying(false);
      };
  };

  const primaryType =
    pokemon.types?.[0]?.type?.name ||
    "normal";

  const accentColor =
    typeColors[primaryType] ||
    "#ef4444";

  const image = isShiny
    ? pokemon.sprites.other.home
      .front_shiny ||
    pokemon.sprites.other[
      "official-artwork"
    ].front_shiny ||
    pokemon.sprites.other.home
      .front_default
    : pokemon.sprites.other.home
      .front_default ||
    pokemon.sprites.other[
      "official-artwork"
    ].front_default;



  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <div
        className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          backgroundColor:
            isShiny
              ? "#facc15"
              : accentColor,
          opacity: 0.2,
        }}
      />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-400">
            Pokémon
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-6xl font-black capitalize text-white">
              {pokemon.name}
            </h1>

            {isShiny && (
              <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black">
                ✨ SHINY
              </span>
            )}
          </div>

          <p className="mt-2 text-xl text-slate-400">
            #
            {String(
              pokemon.id
            ).padStart(4, "0")}
          </p>

          {/* Types */}
          <div className="mt-6 flex flex-wrap gap-3">
            {pokemon.types.map(
              (type) => (
                <span
                  key={
                    type.type.name
                  }
                  className="rounded-full px-4 py-2 text-sm font-semibold capitalize text-white"
                  style={{
                    backgroundColor:
                      typeColors[
                      type.type.name
                      ],
                  }}
                >
                  {type.type.name}
                </span>
              )
            )}
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() =>
                setIsShiny(
                  (prev) => !prev
                )
              }
              className={`rounded-2xl border px-5 py-3 font-semibold transition-all ${isShiny
                  ? "border-yellow-400 bg-yellow-400 text-black"
                  : "border-white/10 bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              ✨ Shiny
            </button>

            <button
              onClick={
                toggleFavorite
              }
              className={`rounded-2xl px-5 py-3 transition-all ${favorite
                  ? "bg-red-500 text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              {favorite ? (
                <FaHeart />
              ) : (
                <FaRegHeart />
              )}
            </button>

            <Link
              to="/compare"
              onClick={
                addToCompare
              }
              className="rounded-2xl bg-blue-500 px-5 py-3 text-white transition-all hover:scale-105"
            >
              <FaScaleBalanced />
            </Link>

            <button
              onClick={playCry}
              className={`rounded-2xl px-5 py-3 transition-all ${playing
                  ? "animate-pulse bg-green-500 text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
              <FaVolumeHigh />
            </button>
          </div>

          {/* Lore */}
          {species
            ?.flavor_text_entries && (
              <div className="mt-8 rounded-2xl bg-black/20 p-5">
                <h3 className="mb-3 text-lg font-bold text-white">
                  Pokédex Entry
                </h3>

                <p className="leading-relaxed text-slate-300">
                  {species.flavor_text_entries
                    .find(
                      (entry) =>
                        entry
                          .language
                          .name ===
                        "en"
                    )
                    ?.flavor_text.replace(
                      /\f/g,
                      " "
                    )
                    .replace(
                      /\n/g,
                      " "
                    )}
                </p>
              </div>
            )}

          {/* Quick Info */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-sm text-slate-400">
                Height
              </p>

              <p className="text-2xl font-bold text-white">
                {(
                  pokemon.height /
                  10
                ).toFixed(1)}
                m
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-4">
              <p className="text-sm text-slate-400">
                Weight
              </p>

              <p className="text-2xl font-bold text-white">
                {(
                  pokemon.weight /
                  10
                ).toFixed(1)}
                kg
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          {isShiny && (
            <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
          )}

          <motion.img
            src={image}
            alt={pokemon.name}
            animate={{
              y: [
                0,
                -15,
                0,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 h-[350px] w-[350px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>

      <audio
        ref={audioRef}
        src={
          pokemon?.cries?.latest
        }
      />
    </section>
  );
}

export default PokemonHero;