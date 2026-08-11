import { useEffect, useMemo, useState } from "react";

import WeaknessHeader from "./weaknesses/WeaknessHeader";
import MatchupGroup from "./weaknesses/MatchupGroup";
import DefenseScore from "./weaknesses/DefenseScore";

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

  const effectiveness =
    useMemo(() => {
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

      allTypes.forEach(
        (type) => {
          chart[type] = 1;
        }
      );

      typeData.forEach(
        (type) => {
          type.damage_relations.double_damage_from.forEach(
            (t) => {
              chart[t.name] *= 2;
            }
          );

          type.damage_relations.half_damage_from.forEach(
            (t) => {
              chart[t.name] *= 0.5;
            }
          );

          type.damage_relations.no_damage_from.forEach(
            (t) => {
              chart[t.name] *= 0;
            }
          );
        }
      );

      return chart;
    }, [typeData]);

  const weaknesses =
    Object.entries(
      effectiveness
    )
      .filter(
        ([, value]) =>
          value > 1
      )
      .sort(
        ([, a], [, b]) =>
          b - a
      )
      .map(
        ([type]) => type
      );

  const resistances =
    Object.entries(
      effectiveness
    )
      .filter(
        ([, value]) =>
          value < 1 &&
          value > 0
      )
      .sort(
        ([, a], [, b]) =>
          a - b
      )
      .map(
        ([type]) => type
      );

  const immunities =
    Object.entries(
      effectiveness
    )
      .filter(
        ([, value]) =>
          value === 0
      )
      .map(
        ([type]) => type
      );

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
      {/* Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="relative z-10">
        <WeaknessHeader />

        <div className="mt-8 space-y-5">
          <MatchupGroup
            title="Weaknesses"
            types={weaknesses}
            variant="danger"
          />

          <MatchupGroup
            title="Resistances"
            types={resistances}
            variant="success"
          />

          <MatchupGroup
            title="Immunities"
            types={immunities}
            variant="primary"
          />
        </div>

        <DefenseScore
          weaknesses={
            weaknesses.length
          }
          resistances={
            resistances.length
          }
          immunities={
            immunities.length
          }
        />
      </div>

      {/* HUD Corners */}
      <div className="absolute left-6 top-6 h-8 w-8 border-l-2 border-t-2 border-cyan-400/50" />

      <div className="absolute right-6 top-6 h-8 w-8 border-r-2 border-t-2 border-cyan-400/50" />

      <div className="absolute bottom-6 left-6 h-8 w-8 border-b-2 border-l-2 border-cyan-400/50" />

      <div className="absolute bottom-6 right-6 h-8 w-8 border-b-2 border-r-2 border-cyan-400/50" />
    </section>
  );
}

export default PokemonWeaknesses;