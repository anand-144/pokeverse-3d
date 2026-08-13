import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Globe2,
  Swords,
} from "lucide-react";
import { useEffect, useState } from "react";

function TypeStats() {
  const [stats, setStats] = useState({
    totalTypes: 0,
    totalPokemon: 0,
    totalRegions: 9,
    totalMatchups: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [typesRes, pokemonRes] =
          await Promise.all([
            fetch(
              "https://pokeapi.co/api/v2/type"
            ),
            fetch(
              "https://pokeapi.co/api/v2/pokemon?limit=100000"
            ),
          ]);

        const typesData =
          await typesRes.json();

        const pokemonData =
          await pokemonRes.json();

        const actualTypes =
          typesData.results.filter(
            (type) =>
              ![
                "unknown",
                "shadow",
              ].includes(type.name)
          );

        const totalTypes =
          actualTypes.length;

        setStats({
          totalTypes,
          totalPokemon:
            pokemonData.count,
          totalRegions: 9,
          totalMatchups:
            totalTypes * totalTypes,
        });
      } catch (error) {
        console.error(error);
      }
    }

    fetchStats();
  }, []);

  const cards = [
    {
      title: "Types",
      value: stats.totalTypes,
      icon: Sparkles,
      color:
        "from-purple-500/20 to-pink-500/10",
      iconColor: "text-purple-400",
    },
    {
      title: "Pokémon",
      value:
        stats.totalPokemon.toLocaleString(),
      icon: Shield,
      color:
        "from-blue-500/20 to-cyan-500/10",
      iconColor: "text-blue-400",
    },
    {
      title: "Regions",
      value: stats.totalRegions,
      icon: Globe2,
      color:
        "from-green-500/20 to-emerald-500/10",
      iconColor: "text-green-400",
    },
    {
      title: "Matchups",
      value: stats.totalMatchups,
      icon: Swords,
      color:
        "from-red-500/20 to-orange-500/10",
      iconColor: "text-red-400",
    },
  ];

  return (
    <section className="mt-10">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map(
          (card, index) => {
            const Icon =
              card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay:
                    index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-6
                "
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  <div
                    className="
                      h-14
                      w-14
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon
                      size={26}
                      className={
                        card.iconColor
                      }
                    />
                  </div>

                  <h3 className="mt-6 text-4xl font-black text-white">
                    {card.value}
                  </h3>

                  <p className="mt-2 text-slate-400">
                    {card.title}
                  </p>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default TypeStats;