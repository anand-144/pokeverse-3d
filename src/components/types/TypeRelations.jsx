import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sword,
  Shield,
  ShieldCheck,
  Ban,
} from "lucide-react";

const typeColors = {
  normal: "bg-stone-500/20 text-stone-300 border-stone-500/20",
  fire: "bg-red-500/20 text-red-300 border-red-500/20",
  water: "bg-blue-500/20 text-blue-300 border-blue-500/20",
  electric:
    "bg-yellow-500/20 text-yellow-300 border-yellow-500/20",
  grass:
    "bg-green-500/20 text-green-300 border-green-500/20",
  ice: "bg-cyan-500/20 text-cyan-300 border-cyan-500/20",
  fighting:
    "bg-orange-500/20 text-orange-300 border-orange-500/20",
  poison:
    "bg-purple-500/20 text-purple-300 border-purple-500/20",
  ground:
    "bg-amber-500/20 text-amber-300 border-amber-500/20",
  flying:
    "bg-sky-500/20 text-sky-300 border-sky-500/20",
  psychic:
    "bg-pink-500/20 text-pink-300 border-pink-500/20",
  bug: "bg-lime-500/20 text-lime-300 border-lime-500/20",
  rock: "bg-yellow-700/20 text-yellow-300 border-yellow-700/20",
  ghost:
    "bg-violet-500/20 text-violet-300 border-violet-500/20",
  dragon:
    "bg-indigo-500/20 text-indigo-300 border-indigo-500/20",
  dark: "bg-slate-600/20 text-slate-300 border-slate-600/20",
  steel:
    "bg-gray-500/20 text-gray-300 border-gray-500/20",
  fairy:
    "bg-rose-500/20 text-rose-300 border-rose-500/20",
};

function RelationCard({
  title,
  icon: Icon,
  color,
  glow,
  items,
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-6
      "
    >
      <div
        className={`absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r ${glow}`}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-br ${glow} opacity-0 blur-3xl transition duration-500 group-hover:opacity-10`}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-5">
          <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Icon
              size={22}
              className={color}
            />
          </div>

          <div>
            <h3 className="font-bold text-lg text-white">
              {title}
            </h3>

            <p className="text-sm text-slate-500">
              {items.length} Type
              {items.length !== 1 && "s"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {items.length > 0 ? (
            items.map((item) => (
              <span
                key={item}
                className={`
                  px-4 py-2
                  rounded-full
                  border
                  capitalize
                  text-sm font-medium
                  transition-all duration-300
                  hover:scale-105
                  ${
                    typeColors[item] ||
                    "bg-white/5 text-slate-300 border-white/10"
                  }
                `}
              >
                {item}
              </span>
            ))
          ) : (
            <span className="text-slate-500">
              No relations found
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function TypeRelations({ type }) {
  const [relations, setRelations] =
    useState(null);

  useEffect(() => {
    async function fetchRelations() {
      try {
        const response =
          await fetch(
            `https://pokeapi.co/api/v2/type/${type}`
          );

        const data =
          await response.json();

        setRelations(
          data.damage_relations
        );
      } catch (error) {
        console.error(error);
      }
    }

    fetchRelations();
  }, [type]);

  if (!relations) {
    return (
      <div className="space-y-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="
              h-40
              rounded-[28px]
              border border-white/10
              bg-white/[0.03]
              animate-pulse
            "
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      className="space-y-5"
    >
      <div className="mb-2">
        <h2 className="text-2xl font-black text-white">
          Battle Relations
        </h2>

        <p className="mt-2 text-slate-400">
          Understand how this type
          performs against others in
          battle.
        </p>
      </div>

      <RelationCard
        title="Strong Against"
        icon={Sword}
        color="text-green-400"
        glow="from-green-500 to-emerald-500"
        items={relations.double_damage_to.map(
          (t) => t.name
        )}
      />

      <RelationCard
        title="Weak Against"
        icon={Ban}
        color="text-red-400"
        glow="from-red-500 to-orange-500"
        items={relations.double_damage_from.map(
          (t) => t.name
        )}
      />

      <RelationCard
        title="Resists"
        icon={Shield}
        color="text-blue-400"
        glow="from-blue-500 to-cyan-500"
        items={relations.half_damage_from.map(
          (t) => t.name
        )}
      />

      <RelationCard
        title="Immune To"
        icon={ShieldCheck}
        color="text-yellow-400"
        glow="from-yellow-500 to-amber-500"
        items={relations.no_damage_from.map(
          (t) => t.name
        )}
      />
    </motion.div>
  );
}

export default TypeRelations;