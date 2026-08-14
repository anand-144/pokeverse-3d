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

  const [loading, setLoading] =
    useState(true);

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

        const validTypes =
          typesData.results.filter(
            (type) =>
              ![
                "unknown",
                "shadow",
              ].includes(type.name)
          );

        const totalTypes =
          validTypes.length;

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
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  const cards = [
    {
      title: "Pokémon Types",
      value: stats.totalTypes,
      subtitle:
        "Battle categories",
      icon: Sparkles,
      glow:
        "from-purple-500 to-pink-500",
      iconColor:
        "text-purple-400",
    },
    {
      title: "Pokémon Species",
      value:
        stats.totalPokemon.toLocaleString(),
      subtitle:
        "Across all generations",
      icon: Shield,
      glow:
        "from-blue-500 to-cyan-500",
      iconColor:
        "text-blue-400",
    },
    {
      title: "Regions",
      value: stats.totalRegions,
      subtitle:
        "Explorable worlds",
      icon: Globe2,
      glow:
        "from-green-500 to-emerald-500",
      iconColor:
        "text-green-400",
    },
    {
      title: "Type Matchups",
      value:
        stats.totalMatchups,
      subtitle:
        "Strength calculations",
      icon: Swords,
      glow:
        "from-red-500 to-orange-500",
      iconColor:
        "text-red-400",
    },
  ];

  return (
    <section>
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
                  y: 40,
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
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-7
                "
              >
                {/* Glow Line */}
                <div
                  className={`absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r ${card.glow}`}
                />

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.glow} opacity-0 blur-3xl transition duration-500 group-hover:opacity-15`}
                />

                {/* Grid Pattern */}
                <div
                  className="
                    absolute inset-0 opacity-[0.03]
                    bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)]
                    bg-[size:24px_24px]
                  "
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="
                      h-16 w-16
                      rounded-3xl
                      border border-white/10
                      bg-white/5
                      flex items-center justify-center
                    "
                  >
                    <Icon
                      size={28}
                      className={
                        card.iconColor
                      }
                    />
                  </div>

                  {/* Value */}
                  <div className="mt-8">
                    {loading ? (
                      <div className="h-12 w-28 rounded-xl bg-white/5 animate-pulse" />
                    ) : (
                      <h3 className="text-5xl font-black text-white">
                        {card.value}
                      </h3>
                    )}
                  </div>

                  {/* Label */}
                  <h4 className="mt-3 text-lg font-semibold text-white">
                    {card.title}
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    {card.subtitle}
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