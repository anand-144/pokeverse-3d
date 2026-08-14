import { motion } from "framer-motion";
import {
  Map,
  Expand,
  CheckCircle2,
} from "lucide-react";

import { regions } from "../../data/regions";

function RegionalMaps({
  selectedRegion,
  onRegionSelect,
  onMapOpen,
}) {
  return (
    <section>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-black text-white">
            Region Explorer
          </h3>

          <p className="mt-2 text-slate-400">
            Travel through every Pokémon region and discover
            its world, cities, routes, and gym challenges.
          </p>
        </div>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 md:flex">
          <Map
            size={16}
            className="text-red-400"
          />

          <span className="text-sm text-slate-300">
            {regions.length} Regions
          </span>
        </div>
      </div>

      {/* Regions Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {regions.map(
          (region, index) => {
            const active =
              selectedRegion === region.id;

            return (
              <motion.div
                key={region.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  transition-all
                  duration-300
                  ${
                    active
                      ? "border-red-500/40 shadow-[0_0_40px_rgba(239,68,68,0.15)]"
                      : "border-white/10"
                  }
                `}
              >
                {/* Active Glow */}
                {active && (
                  <div className="absolute inset-0 bg-red-500/10 blur-3xl" />
                )}

                {/* Image Area */}
                <div className="relative h-60 overflow-hidden">
                  <motion.img
                    src={region.image}
                    alt={region.name}
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    onClick={() =>
                      onMapOpen(region)
                    }
                    className="
                      h-full
                      w-full
                      cursor-zoom-in
                      object-cover
                    "
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Expand Button */}
                  <button
                    onClick={() =>
                      onMapOpen(region)
                    }
                    className="
                      absolute
                      top-4
                      right-4
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-black/40
                      backdrop-blur-xl
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    <Expand
                      size={18}
                      className="text-white"
                    />
                  </button>

                  {/* Active Badge */}
                  {active && (
                    <div
                      className="
                        absolute
                        top-4
                        left-4
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-red-500/20
                        bg-red-500/20
                        px-3
                        py-1.5
                        backdrop-blur-xl
                      "
                    >
                      <CheckCircle2
                        size={14}
                        className="text-red-400"
                      />

                      <span className="text-xs text-white">
                        Active
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative bg-white/[0.03] p-5 backdrop-blur-xl">
                  <h3 className="text-xl font-black text-white">
                    {region.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    Explore the Pokémon League, iconic
                    cities, routes, caves, and gym
                    challenges.
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <button
                      onClick={() =>
                        onRegionSelect(
                          region.id
                        )
                      }
                      className={`
                        rounded-full
                        px-4
                        py-2
                        text-sm
                        font-medium
                        transition-all
                        ${
                          active
                            ? "bg-red-500 text-white"
                            : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                        }
                      `}
                    >
                      {active
                        ? "Selected"
                        : "Select Region"}
                    </button>

                    <button
                      onClick={() =>
                        onMapOpen(region)
                      }
                      className="text-sm font-medium text-red-400 hover:text-red-300"
                    >
                      View Map →
                    </button>
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

export default RegionalMaps;