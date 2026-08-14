import { motion } from "framer-motion";
import {
  LoaderCircle,
  Sparkles,
} from "lucide-react";

function RandomLoading() {
  return (
    <div
      className="
        flex
        min-h-[500px]
        flex-col
        items-center
        justify-center
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        px-6
        text-center
        backdrop-blur-xl
      "
    >
      {/* Pokeball Loader */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-red-500/20 blur-xl" />

        <div
          className="
            relative
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            border-4
            border-white/20
            bg-gradient-to-b
            from-red-500
            via-red-500
            to-white
          "
        >
          <div
            className="
              absolute
              top-1/2
              left-0
              h-[4px]
              w-full
              -translate-y-1/2
              bg-black
            "
          />

          <div
            className="
              relative
              z-10
              h-8
              w-8
              rounded-full
              border-4
              border-black
              bg-white
            "
          />
        </div>
      </motion.div>

      {/* Loading Icon */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="mt-8"
      >
        <LoaderCircle
          size={28}
          className="text-red-400"
        />
      </motion.div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-white">
        Searching for a Pokémon...
      </h3>

      {/* Subtitle */}
      <p className="mt-3 max-w-md text-slate-400">
        Scanning every region to find your
        next random encounter.
      </p>

      {/* Animated Dots */}
      <div className="mt-6 flex items-center gap-2">
        {[0, 1, 2].map((item) => (
          <motion.div
            key={item}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: item * 0.15,
            }}
            className="h-3 w-3 rounded-full bg-red-400"
          />
        ))}
      </div>

      {/* Status Pills */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-yellow-500/20
            bg-yellow-500/10
            px-4
            py-2
          "
        >
          <Sparkles
            size={14}
            className="text-yellow-400"
          />

          <span className="text-sm text-yellow-300">
            Looking for Rare Pokémon
          </span>
        </div>

        <div
          className="
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            px-4
            py-2
          "
        >
          <span className="text-sm text-blue-300">
            Generating Encounter
          </span>
        </div>
      </div>
    </div>
  );
}

export default RandomLoading;