import { useEffect, useMemo, useState } from "react";

const typeColors = {
  normal: "bg-stone-500/20 text-stone-300 border-stone-500/30",
  fire: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  water: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  electric: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  grass: "bg-green-500/20 text-green-300 border-green-500/30",
  ice: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  fighting: "bg-red-500/20 text-red-300 border-red-500/30",
  poison: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  ground: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  flying: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  psychic: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  bug: "bg-lime-500/20 text-lime-300 border-lime-500/30",
  rock: "bg-yellow-700/20 text-yellow-400 border-yellow-700/30",
  ghost: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  dragon: "bg-indigo-600/20 text-indigo-300 border-indigo-600/30",
  dark: "bg-slate-600/20 text-slate-300 border-slate-600/30",
  steel: "bg-slate-400/20 text-slate-200 border-slate-400/30",
  fairy: "bg-pink-400/20 text-pink-200 border-pink-400/30",
};

function PokemonWeaknesses({ pokemon }) {
  const [typeData, setTypeData] =
    useState([]);

  useEffect(() => {
    async function loadTypes() {
      try {
        const results =
          await Promise.all(
            pokemon.types.map(
              async (type) => {
                const res =
                  await fetch(
                    type.type.url
                  );

                return res.json();
              }
            )
          );

        setTypeData(results);
      } catch (error) {
        console.error(error);
      }
    }

    loadTypes();
  }, [pokemon]);

  const effectiveness = useMemo(() => {
    const chart = {};

    const allTypes = [
      "normal",
      "fire",
      "water",
      "electric",
      "grass",
      "ice",
      "fighting",
      "poison",
      "ground",
      "flying",
      "psychic",
      "bug",
      "rock",
      "ghost",
      "dragon",
      "dark",
      "steel",
      "fairy",
    ];

    allTypes.forEach((type) => {
      chart[type] = 1;
    });

    typeData.forEach((type) => {
      type.damage_relations
        .double_damage_from
        .forEach((t) => {
          chart[t.name] *= 2;
        });

      type.damage_relations
        .half_damage_from
        .forEach((t) => {
          chart[t.name] *= 0.5;
        });

      type.damage_relations
        .no_damage_from
        .forEach((t) => {
          chart[t.name] *= 0;
        });
    });

    return chart;
  }, [typeData]);

  const weaknesses =
    Object.entries(effectiveness)
      .filter(
        ([, value]) => value > 1
      )
      .sort(
        ([, a], [, b]) => b - a
      );

  const resistances =
    Object.entries(effectiveness)
      .filter(
        ([, value]) =>
          value < 1 && value > 0
      )
      .sort(
        ([, a], [, b]) => a - b
      );

  const immunities =
    Object.entries(effectiveness)
      .filter(
        ([, value]) => value === 0
      );

  const TypeBadge = ({
    type,
    multiplier,
  }) => (
    <div
      className={`rounded-xl border px-4 py-3 ${
        typeColors[type]
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-semibold capitalize">
          {type}
        </span>

        <span className="font-bold">
          x{multiplier}
        </span>
      </div>
    </div>
  );

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Weakness & Resistance
      </h2>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Weaknesses */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-red-400">
            Weak Against
          </h3>

          <div className="space-y-3">
            {weaknesses.map(
              ([type, value]) => (
                <TypeBadge
                  key={type}
                  type={type}
                  multiplier={value}
                />
              )
            )}
          </div>
        </div>

        {/* Resistances */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-green-400">
            Resistant To
          </h3>

          <div className="space-y-3">
            {resistances.map(
              ([type, value]) => (
                <TypeBadge
                  key={type}
                  type={type}
                  multiplier={value}
                />
              )
            )}
          </div>
        </div>

        {/* Immunities */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-cyan-400">
            Immune To
          </h3>

          <div className="space-y-3">
            {immunities.length ? (
              immunities.map(
                ([type]) => (
                  <TypeBadge
                    key={type}
                    type={type}
                    multiplier={0}
                  />
                )
              )
            ) : (
              <p className="text-slate-500">
                No immunities
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PokemonWeaknesses;