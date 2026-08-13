import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sword,
  Shield,
  ShieldCheck,
  Ban,
} from "lucide-react";

function RelationCard({
  title,
  icon: Icon,
  color,
  items,
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-5
      "
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="
            h-10
            w-10
            rounded-xl
            flex
            items-center
            justify-center
            bg-white/5
          "
        >
          <Icon
            size={18}
            className={color}
          />
        </div>

        <h3 className="font-bold text-white">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.length > 0 ? (
          items.map((item) => (
            <span
              key={item}
              className="
                px-3
                py-1.5
                rounded-full
                bg-white/5
                border
                border-white/10
                text-sm
                capitalize
                text-slate-300
              "
            >
              {item}
            </span>
          ))
        ) : (
          <span className="text-slate-500 text-sm">
            None
          </span>
        )}
      </div>
    </div>
  );
}

function TypeRelations({ type }) {
  const [relations, setRelations] =
    useState(null);

  useEffect(() => {
    async function fetchRelations() {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/type/${type}`
        );

        const data =
          await res.json();

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
      <div className="text-slate-400">
        Loading...
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      className="space-y-5"
    >
      <RelationCard
        title="Strong Against"
        icon={Sword}
        color="text-green-400"
        items={relations.double_damage_to.map(
          (t) => t.name
        )}
      />

      <RelationCard
        title="Weak Against"
        icon={Ban}
        color="text-red-400"
        items={relations.double_damage_from.map(
          (t) => t.name
        )}
      />

      <RelationCard
        title="Resists"
        icon={Shield}
        color="text-blue-400"
        items={relations.half_damage_from.map(
          (t) => t.name
        )}
      />

      <RelationCard
        title="Immune To"
        icon={ShieldCheck}
        color="text-yellow-400"
        items={relations.no_damage_from.map(
          (t) => t.name
        )}
      />
    </motion.div>
  );
}

export default TypeRelations;