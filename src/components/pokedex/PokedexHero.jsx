import { motion } from "framer-motion";
import {
  FaRegCircleDot,
  FaLayerGroup,
} from "react-icons/fa6";
import { GiPokecog } from "react-icons/gi";

import PokeballCanvas from "./model/PokeballCanvas";
import { usePokedex } from "../../context/PokedexContext";

export default function PokedexHero() {

  const {
  pokemonCount,
  types,
  generations,
} = usePokedex();


  const stats = [
    {
      icon: GiPokecog,
      value: `${pokemonCount}`,
      label: "Pokémon",
    },
    {
      icon: FaRegCircleDot,
      value: `${types.length}`,
      label: "Types",
    },
    {
      icon: FaLayerGroup,
      value: `${generations.length}`,
      label: "Generations",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.15),transparent_55%)]" />

      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[180px]" />

      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              Explore. Discover. Catch 'Em All.
            </p>

            <h1 className="mb-6 text-6xl font-black leading-none text-white md:text-7xl xl:text-8xl">
              POKÉDEX
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-300">
              Browse through every Pokémon discovered across all regions and
              generations. Search, compare, and explore detailed information
              about your favorite Pokémon.
            </p>

            {/* Stats */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-white/10"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-500">
                        <Icon size={20} />
                      </div>

                      <span className="text-3xl font-bold text-white">
                        {stat.value}
                      </span>
                    </div>

                    <p className="text-sm uppercase tracking-wider text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[650px]"
          >
            {/* Radar Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute h-[420px] w-[420px] rounded-full border border-red-500/20" />
              <div className="absolute h-[520px] w-[520px] rounded-full border border-red-500/10" />
              <div className="absolute h-[620px] w-[620px] rounded-full border border-red-500/5" />
            </div>

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-3xl" />

            {/* 3D Scene */}
            <div className="relative z-10 h-[700px] w-full">
              <PokeballCanvas />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}