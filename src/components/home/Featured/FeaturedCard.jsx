import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";
import { Link } from "react-router-dom";

import PokemonCanvas from "../../pokemon/PokemonCanvas";

function FeaturedCard() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-white/10
        bg-gradient-to-br
        from-red-500/10
        via-orange-500/5
        to-transparent
        backdrop-blur-xl
      "
    >
      {/* Decorative Number */}
      <div className="pointer-events-none absolute top-6 right-8 text-[140px] font-black text-white/10">
        #006
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative grid items-center gap-8 p-8 lg:grid-cols-2 lg:p-14">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-orange-400">
            <Flame className="size-4" />
            Fire • Flying
          </div>

          <h2 className="mt-8 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text py-2 text-4xl font-black leading-tight text-transparent md:text-6xl">
            Charizard
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400">
            One of the most iconic Pokémon ever discovered. Charizard's
            powerful flames can melt almost anything and its wings allow it
            to soar high above the clouds.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xs text-zinc-300">Height</p>
              <p className="font-bold text-white/70">1.7 m</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xs text-zinc-300">Weight</p>
              <p className="font-bold text-white/70">90.5 kg</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xs text-zinc-300">Generation</p>
              <p className="font-bold text-white/70">Kanto</p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to="/pokemon/6"
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-red-500
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-red-600
              "
            >
              View Details

              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex items-center justify-center">
          {/* Main Glow */}
          <div className="absolute h-[400px] w-[400px] rounded-full bg-red-500/20 blur-[120px]" />

          {/* Radar Rings */}
          <div className="absolute h-[380px] w-[380px] rounded-full border border-red-500/10" />

          <div className="absolute h-[520px] w-[520px] rounded-full border border-red-500/5" />

          {/* Scanner Dots */}
          <div className="absolute top-10 left-20 h-4 w-4 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.9)]" />

          <div className="absolute right-10 bottom-20 h-5 w-5 rounded-full bg-orange-400 shadow-[0_0_25px_rgba(251,146,60,0.9)]" />

          {/* 3D Model */}
          <div className="relative z-10 h-[500px] w-[500px]">
            <PokemonCanvas
              model="/models/pokemon/charizard/scene.gltf"
              scale={1}
              position={[0, -1.5, 0]}
            />
          </div>

          {/* Interaction Hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-red-400/70">
              Click The Pokémon To Interact
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedCard;
