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
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-3xl font-black text-white">
            Region Explorer
          </h3>

          <p className="mt-2 text-slate-400">
            Travel through every Pokémon
            region and discover its world,
            cities and gym challenges.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
          <Map
            size={16}
            className="text-red-400"
          />

          <span className="text-sm text-slate-300">
            {regions.length} Regions
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
        {regions.map(
          (region, index) => {
            const active =
              selectedRegion ===
              region.id;

            return (
              <motion.button
                key={region.id}
                onClick={() =>
                  onRegionSelect(
                    region.id
                  )
                }
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
                  delay:
                    index * 0.05,
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
                  text-left
                  transition-all
                  duration-300
                  ${
                    active
                      ? "border-red-500/40"
                      : "border-white/10"
                  }
                `}
              >
                {/* Glow */}
                {active && (
                  <div className="absolute inset-0 bg-red-500/10 blur-3xl" />
                )}

                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <motion.img
                    layoutId={
                      region.id
                    }
                    src={
                      region.image
                    }
                    alt={
                      region.name
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      onMapOpen(
                        region
                      );
                    }}
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      h-full
                      w-full
                      object-cover
                      cursor-zoom-in
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Expand */}
                  <div
                    className="
                      absolute
                      top-4
                      right-4
                      h-10
                      w-10
                      rounded-xl
                      border
                      border-white/10
                      bg-black/30
                      backdrop-blur-xl
                      flex
                      items-center
                      justify-center
                      opacity-0
                      group-hover:opacity-100
                      transition
                    "
                  >
                    <Expand
                      size={18}
                      className="text-white"
                    />
                  </div>

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
                        px-3
                        py-1.5
                        rounded-full
                        bg-red-500/20
                        border
                        border-red-500/20
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
                <div
                  className="
                    relative
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-5
                  "
                >
                  <h3 className="font-black text-xl text-white">
                    {region.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    Explore the
                    Pokémon League,
                    cities, routes
                    and gym
                    challenges.
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Region Map
                    </span>

                    <span className="text-sm font-medium text-red-400">
                      View →
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          }
        )}
      </div>
    </section>
  );
}

export default RegionalMaps;