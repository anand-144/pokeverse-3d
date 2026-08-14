import { motion } from "framer-motion";
import {
  Trophy,
  Shield,
  Sparkles,
} from "lucide-react";

import { gymBadges } from "../../data/gymBadges";

function GymEmblems({ region }) {
  const badges =
    gymBadges[region] || [];

  return (
    <section className="relative">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 mb-4">
            <Trophy
              size={16}
              className="text-yellow-400"
            />

            <span className="text-sm text-yellow-300">
              League Progress
            </span>
          </div>

          <h2 className="text-4xl xl:text-5xl font-black text-white">
            Gym Badge Collection
          </h2>

          <p className="mt-3 text-slate-400 max-w-2xl">
            Earn badges by defeating Gym Leaders
            throughout the region and prove your
            journey toward becoming a Pokémon Champion.
          </p>
        </div>

        <div className="mt-6 lg:mt-0">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-5 py-4">
            <div className="text-3xl font-black text-white">
              {badges.length}
            </div>

            <div className="text-sm text-slate-400">
              Available Badges
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
          p-8
        "
      >
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-yellow-500/10 blur-[140px]" />
        </div>

        {/* Grid */}
        <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {badges.map(
            (badge, index) => (
              <motion.div
                key={badge.name}
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
                    index * 0.05,
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
                  text-center
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    bg-gradient-to-br
                    from-yellow-500/10
                    via-orange-500/5
                    to-transparent
                  "
                />

                {/* Shine */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-700
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.05]
                    to-transparent
                    -translate-x-full
                    group-hover:translate-x-full
                  "
                />

                <div className="relative z-10">
                  {/* Badge Number */}
                  <div
                    className="
                      absolute
                      top-0
                      right-0
                      h-8
                      w-8
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      text-xs
                      text-slate-400
                    "
                  >
                    {index + 1}
                  </div>

                  {/* Badge Image */}
                  <div
                    className="
                      h-28
                      w-28
                      mx-auto
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <motion.img
                      whileHover={{
                        scale: 1.15,
                        rotate: 8,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      src={badge.image}
                      alt={badge.name}
                      className="
                        h-20
                        w-20
                        object-contain
                        drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]
                      "
                    />
                  </div>

                  {/* Name */}
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {badge.name}
                  </h3>

                  {/* Subtitle */}
                  <div className="mt-3 flex items-center justify-center gap-2 text-slate-400 text-sm">
                    <Shield size={14} />

                    <span>Gym Badge</span>
                  </div>

                  {/* Collectible Tag */}
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/10">
                    <Sparkles
                      size={12}
                      className="text-yellow-400"
                    />

                    <span className="text-xs text-yellow-300">
                      Collector Item
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default GymEmblems;