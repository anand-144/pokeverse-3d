import { motion } from "framer-motion";
import {
  Heart,
  Layers3,
  Crown,
} from "lucide-react";

function FavoritesStats({
  totalFavorites,
  totalTypes,
  featuredPokemon,
}) {
  const stats = [
    {
      title: "Favorites",
      value: totalFavorites,
      icon: Heart,
    },
    {
      title: "Unique Types",
      value: totalTypes,
      icon: Layers3,
    },
    {
      title: "Featured",
      value:
        featuredPokemon ||
        "None",
      icon: Crown,
    },
  ];

  return (
    <section className="mb-16">
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map(
          (
            stat,
            index
          ) => {
            const Icon =
              stat.icon;

            return (
              <motion.div
                key={
                  stat.title
                }
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
                    index *
                    0.1,
                }}
                className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-red-500/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-zinc-500">
                      {
                        stat.title
                      }
                    </p>

                    <h3 className="mt-3 text-3xl font-black capitalize text-white">
                      {
                        stat.value
                      }
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
                    <Icon
                      size={
                        24
                      }
                      className="text-red-400"
                    />
                  </div>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default FavoritesStats;